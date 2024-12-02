<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1
        style="
          font-size: 1.6rem;
          line-height: 2rem;
          display: flex;
          margin-bottom: 40px;
        "
      >
        <i @click="navigateBefore(router)" class="bi bi-chevron-left"></i
        ><span style="margin-left: 20px">Detalles del dispositivo</span>
      </h1>
      <div class="current-state">
        <LoaderSpinner :isLoading="isLoadingDeviceData"></LoaderSpinner>
        <CircularProgressBar
          v-if="!isLoadingDeviceData"
          :percentage="deviceData?.charge ?? 0"
        />
        <div v-if="!isLoadingDeviceData" class="content temp">
          <p>🌡️ {{ deviceData?.temperature }}°</p>
          <span>temperatura</span>
          <p>⚡ {{ deviceData?.voltage }}v</p>
          <span>voltaje</span>
          <p>💧 {{ deviceData?.humidity }}</p>
          <span>humedad</span>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Nombre del dispositivo
        </p>
        <InputBasic
          :readonly="!(useAuhtStore().getUserState.role === UserRolEnum.ADMIN)"
          type="text"
          :required="true"
          icon="device-ssd-fill"
          id="deviceName"
          placeholder="Nombre del dispositivo"
          v-model="deviceName"
          :isLoadingData="isLoadingDeviceData"
        ></InputBasic>
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Alerta de carga en (%):
        </p>
        <InputBasic
          :readonly="!(useAuhtStore().getUserState.role === UserRolEnum.ADMIN)"
          type="number"
          :required="true"
          icon="lightning-charge-fill"
          id="chargelimit"
          placeholder="Ingresa el límite en %"
          v-model="deviceCriticChargeLevel"
          :isLoadingData="isLoadingDeviceData"
        ></InputBasic>
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Alerta de temperatura en (%):
        </p>
        <InputBasic
          :readonly="!(useAuhtStore().getUserState.role === UserRolEnum.ADMIN)"
          type="number"
          :required="true"
          icon="thermometer-half"
          id="temlimit"
          placeholder="Ingresa el límite en %"
          v-model="deviceCriticTempLevel"
          :isLoadingData="isLoadingDeviceData"
        ></InputBasic>

        <ButtonBasic
          v-if="useAuhtStore().getUserState.role === UserRolEnum.ADMIN"
          class="button-submit"
          buttonText="Desvincular dispositivo"
          :isLoading="isLoading"
          :isEnable="!isLoadingDeviceData"
          buttonStyle="success-outlined"
          @click="desvinculateOnClick"
        ></ButtonBasic>
        <ButtonBasic
          v-if="useAuhtStore().getUserState.role === UserRolEnum.ADMIN"
          class="button-submit"
          buttonType="submit"
          buttonText="Guardar cambios"
          :isLoading="isLoading"
          :isEnable="!isLoadingDeviceData"
          buttonStyle="success"
          @click="handleButtonClick"
        ></ButtonBasic>
      </form>
    </div>
    <div
      style="
        height: 100px;
        width: 100%;
        background: rgb(223, 231, 241);
        margin-top: 0;
      "
    ></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import CircularProgressBar from "../components/CircularProgressBar.vue";
import { useRoute, useRouter } from "vue-router";
import deviceService from "../services/device.service";
import { DeviceModel } from "../models/device.model";
import LoaderSpinner from "../components/LoaderSpinner.vue";
import InputBasic from "../components/InputBasic.vue";
import { navigateBefore } from "../router/navigate.helper";
import alertService from "../services/alert.service";
import { useAuhtStore } from "../stores/auth.store";
import toastService from "../services/toast.service";
import { UserRolEnum } from "../models/user.model";

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const isLoadingDeviceData = ref(false);
const deviceData = ref<DeviceModel>();
const deviceName = ref("");
const deviceCriticChargeLevel = ref(0);
const deviceCriticTempLevel = ref(0);

const desvinculateOnClick = () => {
  alertService.showAlert(
    "Desvincular",
    "No volverás a ver el estado ni seguirás recibiendo notificaciones de alerta de este dispositivo.",
    "warning",
    (result: any) => {
      if (result.isConfirmed) {
        const deviceId = route.params.id as string;
        isLoading.value = true;

        deviceService.desvinculateDevice(deviceId).then(() => {
          isLoading.value = false;
          navigateBefore(router);
        });
      } else {
        console.log("El usuario canceló");
      }
    }
  );
};
const handleButtonClick = () => {};
const handleSubmit = async () => {
  const device: DeviceModel = {
    ...deviceData.value!,
    name: deviceName.value,
    criticChargeLevel: deviceCriticChargeLevel.value,
    criticTemperatureLevel: deviceCriticTempLevel.value,
  };
  try {
    isLoading.value = true;
    await deviceService.updateDevice(device.id, device);
    toastService.showToast(
      "Actualización exitosa!",
      "Tu dispositivo ha sido actualizado",
      "success"
    );
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};
const getDeviceData = async () => {
  const deviceId = route.params.id as string;
  deviceService
    .getDeviceById(deviceId)
    .then((device) => {
      if (device) {
        deviceData.value = device;
        deviceName.value = device.name;
        deviceCriticChargeLevel.value = device.criticChargeLevel;
        deviceCriticTempLevel.value = device.criticTemperatureLevel;
      }
    })
    .finally(() => {
      isLoadingDeviceData.value = false;
    });
};
onMounted(() => {
  isLoadingDeviceData.value = true;
  getDeviceData();
});
</script>
<style scoped>
.wrapper {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  background: rgb(223, 231, 241);
}
.image-container {
  width: fit-content;
  height: fit-content;
}

.responsive-svg {
  display: none;
  width: 400%;
  height: 400%;
  object-fit: contain;
}
.form-wrapper {
  max-width: 90%;
  width: 90%;
  margin: auto;
  padding: 0 20px;
}

.current-state {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background: white;
  border-radius: 30px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 6px 0px rgba(0, 29, 61, 0.15);
  padding: 20px;
  min-height: 100px;
}
.current-state::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 300px solid rgba(231, 231, 231, 0.425);
  border-left: 500px solid transparent;
}
.content.temp {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  position: relative;
  font-size: 2rem;
  height: fit-content;
}

.content.temp p {
  line-height: 1rem;
  margin: 0;
  font-size: 1.2rem;
}

.content.temp span {
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
}
form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.button-submit {
  margin-top: 20px;
}
</style>
