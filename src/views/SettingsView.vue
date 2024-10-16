<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1>
        <i class="bi bi-person-circle"></i
        ><span style="font-size: 2rem; line-height: 2rem">Configuración</span>
      </h1>
      <form @submit.prevent="handleSubmit">
        <div class="field-container">
          <label for="username"><i class="bi bi-person"></i></label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Ingresa un nombre de usuario"
            required
          />
        </div>
        <div class="field-container">
          <label for="password"><i class="bi bi-shield-lock"></i></label>
          <input
            type="text"
            id="password"
            v-model="password"
            placeholder="Cambia tu contraseña (opcional)"
            required
          />
        </div>
        <div class="field-container">
          <label for="name"><i class="bi bi-alphabet-uppercase"></i></label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
        <div class="field-container">
          <label for="surname"><i class="bi bi-alphabet-uppercase"></i></label>
          <input
            type="text"
            id="surname"
            v-model="surname"
            placeholder="Ingresa tu apellido"
            required
          />
        </div>

        <ButtonBasic
          buttonType="submit"
          buttonText="Guardar cambios"
          :isLoading="isLoading"
          @click="handleButtonClick"
        ></ButtonBasic>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import { useAuhtStore } from "../stores/authStore";
import { useRouter } from "vue-router";

const router = useRouter();
const auhtStore = useAuhtStore();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const userData = auhtStore.getUserState;

const handleButtonClick = () => {};
const handleSubmit = () => {};
onMounted(() => {
  username.value = userData.username;
  name.value = userData.name;
  surname.value = userData.surname;
});
</script>
<style scoped>
.wrapper {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: rgb(223, 231, 241);
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
