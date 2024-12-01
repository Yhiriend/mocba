<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1>
        <i class="bi bi-device-ssd-fill"></i
        ><span style="font-size: 2rem; line-height: 2rem"
          >Vincular un nuevo dispositivo</span
        >
      </h1>
      <form @submit.prevent="handleSubmit">
        <div class="field-container">
          <label for="llave"><i class="bi bi-key"></i></label>
          <input
            type="text"
            id="llave"
            v-model="key"
            placeholder="Llave del dispositivo"
            required
          />
        </div>
        <div class="field-container">
          <label for="name"><i class="bi bi-alphabet-uppercase"></i></label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Nombre del dispositivo"
            required
          />
        </div>
        <div class="field-container">
          <label for="charge"
            ><i class="bi bi-lightning-charge-fill"></i
          ></label>
          <input
            type="number"
            id="charge"
            v-model="charge"
            placeholder="Nivel de carga (%)"
            required
          />
        </div>
        <div class="field-container">
          <label for="temperature"
            ><i class="bi bi-thermometer-half"></i
          ></label>
          <input
            type="number"
            id="temperature"
            v-model="temperature"
            placeholder="Límite de temperatura"
            required
          />
        </div>
        <ButtonBasic
          buttonType="submit"
          buttonText="Vincular"
          :isLoading="isLoading"
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
import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import deviceService from "../services/device.service";
import { DeviceModel } from "../models/device.model";
import toastService from "../services/toast.service";
import { navigateTo } from "../router/navigate.helper";
import { useRouter } from "vue-router";
import { RoutesEnum } from "../router/routes.enum";

const router = useRouter();
const isLoading = ref(false);
const key = ref("");
const name = ref("");
const charge = ref("");
const temperature = ref("");

const handleButtonClick = () => {};
const handleSubmit = async () => {
  isLoading.value = true;
  const device: DeviceModel = {
    id: key.value,
    name: name.value,
    charge: 100,
    temperature: 25,
    criticChargeLevel: Number(temperature.value) ?? 10,
    criticTemperatureLevel: Number(charge.value) ?? 40,
    isActive: true,
    showAtHome: false,
    voltage: 0,
    humidity: 0,
  };
  try {
    await deviceService.registerDevice(device, key.value);
    toastService.showToast(
      "Registro exitoso!",
      "Has agregado un nuevo dispositivo",
      "success"
    );
    navigateTo(RoutesEnum.DEVICES, router);
  } catch (error) {
    console.error(error);
    toastService.showToast(
      "Falló la vinculación",
      "No se pudo vincular el dispositivo",
      "error"
    );
  } finally {
    isLoading.value = false;
  }
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  background: rgb(223, 231, 241);
}
.image-container {
  width: fit-content;
  height: fit-content;
}

.responsive-svg {
  width: 400%;
  height: 400%;
  object-fit: contain;
}
.form-wrapper {
  background: rgb(223, 231, 241);
  position: relative;
  max-width: 90%;
  width: 90%;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
}

h1 {
  text-align: center;
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

form {
  display: flex;
  flex-direction: column;
}
.field-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: fit-content;
  width: 100%;
  margin-bottom: 20px;
}
label {
  height: fit-content;
  width: fit-content;
  i {
    font-size: 1.8rem;
    height: fit-content;
    width: fit-content;
    line-height: 1rem;
  }
}

input {
  height: 30px;
  width: 80%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #36a572;
}
</style>
