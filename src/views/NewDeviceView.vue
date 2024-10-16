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
            v-model="llave"
            placeholder="Llave del dispositivo"
            required
          />
        </div>
        <div class="field-container">
          <label for="name"><i class="bi bi-alphabet-uppercase"></i></label>
          <input
            type="text"
            id="name"
            v-model="llave"
            placeholder="Nombre (opcional)"
            required
          />
        </div>
        <div class="field-container">
          <label for="alert"
            ><i style="font-size: 1.5rem" class="bi bi-percent"></i
          ></label>
          <input
            type="number"
            id="alert"
            v-model="llave"
            placeholder="Establece un límite % (alerta opcional)"
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
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";

const isLoading = ref(false);
const llave = ref("");

const handleButtonClick = () => {};
const handleSubmit = () => {};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: rgb(223, 231, 241);
}
.image-container {
  width: fit-content; /* Define el tamaño del contenedor */
  height: fit-content; /* Define el tamaño del contenedor */
}

.responsive-svg {
  width: 400%;
  height: 400%;
  object-fit: contain; /* Mantiene la relación de aspecto */
}
.form-wrapper {
  position: absolute;
  max-width: 90%;
  width: 90%;
  margin: auto;
  padding: 20px;
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
