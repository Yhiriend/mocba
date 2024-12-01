<template>
  <div class="wrapper">
    <div class="image-container">
      <img class="responsive-svg" src="../assets/pattern.svg" />
    </div>

    <div class="login-container">
      <h1>Inicio de Sesión</h1>
      <form @submit.prevent="handleSubmit">
        <div class="field-container">
          <label for="username"><i class="bi bi-person"></i></label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Introduce tu nombre de usuario"
            required
          />
        </div>
        <div class="field-container">
          <label for="password"><i class="bi bi-shield-lock"></i></label>
          <input
            type="text"
            id="password"
            v-model="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
        <p
          style="
            align-self: flex-end;
            padding-right: 10px;
            margin-top: 0;
            margin-bottom: 50px;
          "
          @click="navigateTo(RoutesEnum.REGISTER, router)"
        >
          Crear una cuenta
        </p>
        <ButtonBasic
          buttonType="submit"
          buttonText="Entrar"
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
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import { useAuhtStore } from "../stores/auth.store";
import toastService from "../services/toast.service";

const router = useRouter();
const isLoading = ref(false);
const username = ref("");
const password = ref("");

const handleSubmit = () => {
  isLoading.value = true;
  authService
    .login(username.value, password.value)
    .then(async (user) => {
      if (user) {
        const token = await authService.generateToken(user);
        console.log("init token", token);
        useAuhtStore().setUser(user);
        useAuhtStore().setIsAuth(true);
        useAuhtStore().setToken(token ?? "");
        localStorage.setItem("token", token ?? "");
        router.push(RoutesEnum.HOME);
      }
    })
    .catch(() => {
      toastService.showToast(
        "Credenciales inválidas",
        "Tus credenciales son incorrectas",
        "error"
      );
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const handleButtonClick = () => {};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
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
.login-container {
  position: absolute;
  top: 30px;
  background: rgba(255, 255, 255, 0.418);
  backdrop-filter: blur(8px);
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
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
