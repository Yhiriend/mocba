<template>
  <div class="wrapper">
    <div class="image-container">
      <img class="responsive-svg" src="../assets/pattern.svg" />
    </div>

    <div class="login-container">
      <h1>Nuevo Registro</h1>
      <form @submit.prevent="handleSubmit">
        <InputBasic
          type="text"
          :required="true"
          icon="key"
          id="key"
          placeholder="Introduce tu llave de registro"
          v-model="key"
          v-if="!keyExist"
        ></InputBasic>
        <template v-else>
          <InputBasic
            type="text"
            :required="true"
            icon="alphabet-uppercase"
            id="name"
            placeholder="Primer nombre"
            v-model="name"
          ></InputBasic>
          <InputBasic
            type="text"
            :required="true"
            icon="alphabet-uppercase"
            id="surname"
            placeholder="Primer apellido"
            v-model="surname"
          ></InputBasic>
          <InputBasic
            type="text"
            :required="true"
            icon="person"
            id="username"
            placeholder="Nombre de Usuario"
            v-model="username"
          ></InputBasic>
          <InputBasic
            type="text"
            :required="true"
            icon="shield-lock"
            id="password"
            placeholder="Contraseña"
            v-model="password"
          ></InputBasic>
        </template>
        <p
          style="
            align-self: flex-end;
            padding-right: 10px;
            margin-top: 0;
            margin-bottom: 50px;
          "
          @click="navigateTo(RoutesEnum.LOGIN, router)"
        >
          Ya tengo una cuenta
        </p>
        <ButtonBasic
          buttonType="submit"
          :buttonText="buttonText"
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
import InputBasic from "../components/InputBasic.vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import toastService from "../services/toast.service";
import { useDemoStore } from "../stores/demoStore";
import { UserModel } from "../models/user.model";
import { generateId } from "../models/id-generator";
import { useAuhtStore } from "../stores/authStore";

const demoStore = useDemoStore();
const buttonTextStates = [
  "Verificar llave",
  "Verificando",
  "Registrarse",
  "Registrando",
];
const router = useRouter();
const buttonText = ref(buttonTextStates[0]);
const isLoading = ref(false);
const key = ref("");
const keyExist = ref(false);

const name = ref("");
const surname = ref("");
const password = ref("");
const username = ref("");

const handleSubmit = () => {
  isLoading.value = true;
  if (buttonText.value === buttonTextStates[0]) {
    buttonText.value = buttonTextStates[1];
    validateKey();
  } else {
    buttonText.value = buttonTextStates[3];
    registerNewUser();
  }
};

const handleButtonClick = () => {};
const registerNewUser = () => {
  const id = generateId();
  const user: UserModel = {
    name: name.value,
    surname: surname.value,
    password: password.value,
    username: username.value,
    alerts: [],
    devices: [],
    id,
  };
  authService
    .register(user, key.value)
    .then(async (user) => {
      if (user) {
        const token = await authService.generateToken(user);
        useAuhtStore().setUser(user);
        useAuhtStore().setIsAuth(true);
        useAuhtStore().setToken(token ?? "");
        localStorage.setItem("token", token ?? "");
        navigateTo(RoutesEnum.HOME, router);
      }
    })
    .catch(() => {
      toastService.showToast(
        "Error de registro",
        "Hubo un error al intentar registrarte, intentalo más tarde",
        "error"
      );
    })
    .finally(() => (isLoading.value = false));
};
const validateKey = () => {
  authService
    .validateKey(key.value)
    .then((exist) => {
      if (exist) {
        toastService.showToast(
          "Validación de la llave",
          "Tu llave fue validada con éxito!",
          "success"
        );

        buttonText.value = buttonTextStates[2];
        keyExist.value = true;
      } else {
        toastService.showToast(
          "Validación de la llave",
          "Hubo un error al intentar validar la llave",
          "error"
        );
        buttonText.value = buttonTextStates[0];
      }
    })
    .catch(() => {
      toastService.showToast(
        "Validación de la llave",
        "Hubo un error al intentar validar la llave",
        "error"
      );
      buttonText.value = buttonTextStates[0];
    })
    .finally(() => {
      isLoading.value = false;
    });
};
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
