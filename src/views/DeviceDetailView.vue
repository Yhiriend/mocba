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
          :percentage="deviceData?.charge"
        />
        <div v-if="!isLoadingDeviceData" class="content temp">
          <p>🌡️ {{ deviceData?.temperature }}°</p>
          <span>temperatura</span>
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
          type="number"
          :required="true"
          icon="lightning-charge-fill"
          id="chargelimit"
          placeholder="Ingresa el límite en %"
          v-model="deviceCriticLevel"
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
          Alertar de temperatura en (%):
        </p>
        <InputBasic
          type="number"
          :required="true"
          icon="thermometer-half"
          id="temlimit"
          placeholder="Ingresa el límite en %"
          v-model="deviceCriticTempLevel"
          :isLoadingData="isLoadingDeviceData"
        ></InputBasic>
        <ButtonBasic
          class="button-submit"
          buttonText="Desvincular dispositivo"
          :isLoading="isLoading"
          :isEnable="!isLoadingDeviceData"
          buttonStyle="success-outlined"
          @click="desvinculateOnClick"
        ></ButtonBasic>
        <ButtonBasic
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

const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const isLoadingDeviceData = ref(false);
const deviceData = ref<DeviceModel>();
const deviceName = ref("");
const deviceCriticLevel = ref(0);
const deviceCriticTempLevel = ref(0);

const desvinculateOnClick = () => {
  alertService.showAlert(
    "Desvincular",
    "No seguirás recibiendo notificaciones de alerta de este dispositivo.",
    "warning",
    (result) => {
      if (result.isConfirmed) {
        const deviceId = route.params.id as string;
        deviceService.desvinculateDevice(deviceId).then(() => {
          navigateBefore(router);
        });
      } else {
        console.log("El usuario canceló");
      }
    }
  );
};
const handleButtonClick = () => {};
const handleSubmit = () => {};
const getDeviceData = async () => {
  const deviceId = route.params.id as string;
  deviceService
    .getDeviceById(deviceId)
    .then((device) => {
      if (device) {
        deviceData.value = device;
        deviceName.value = device.name;
        deviceCriticLevel.value = device.criticLevel;
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

function desvinculateDevice() {
  throw new Error("Function not implemented.");
}
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
  width: fit-content; /* Define el tamaño del contenedor */
  height: fit-content; /* Define el tamaño del contenedor */
}

.responsive-svg {
  display: none;
  width: 400%;
  height: 400%;
  object-fit: contain; /* Mantiene la relación de aspecto */
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
  border-bottom: 200px solid rgba(231, 231, 231, 0.425);
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
