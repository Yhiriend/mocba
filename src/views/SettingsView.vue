<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1>
        <i class="bi bi-person-circle"></i
        ><span style="font-size: 2rem; line-height: 2rem">Configuración</span>
      </h1>
      <form @submit.prevent="handleSubmit">
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Primer nombre:
        </p>
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
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Segundo nombre:
        </p>
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
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Nombre de usuario:
        </p>
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
        <p
          style="
            text-align: start;
            padding-left: 50px;
            line-height: 1rem;
            margin-bottom: 10px;
          "
        >
          Contraseña:
        </p>
        <div class="field-container">
          <label for="password"><i class="bi bi-shield-lock"></i></label>
          <input
            type="text"
            id="password"
            v-model="password"
            placeholder="Cambia tu contraseña (opcional)"
          />
        </div>
        <ButtonBasic
          style="margin-top: 20px"
          buttonType="submit"
          buttonText="Guardar cambios"
          :isLoading="isLoading"
          @click="handleButtonClick"
        ></ButtonBasic>
        <ButtonBasic
          style="margin-top: 15px; margin-bottom: 50px"
          buttonText="Cerrar sesión"
          buttonStyle="danger"
          :isLoading="isLoading"
          @click="handleCloseSessionClick"
        ></ButtonBasic>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import { useAuhtStore } from "../stores/auth.store";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import { UserModel } from "../models/user.model";
import toastService from "../services/toast.service";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import alertService from "../services/alert.service";

const router = useRouter();
const auhtStore = useAuhtStore();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const userData = auhtStore.getUserState;

const handleButtonClick = () => {};
const handleSubmit = async () => {
  isLoading.value = true;
  const user: UserModel = {
    ...userData,
    username: username.value,
    name: name.value,
    surname: surname.value,
    password: password.value,
  };
  try {
    await authService.updateUser(userData.id, user);
    toastService.showToast(
      "Actualización exitosa!",
      "Tus datos personales han sido actualizados",
      "success"
    );
  } catch (error) {
    console.error(error);
    toastService.showToast(
      "Error de actualización",
      "Los cambios no se guardaron correctamente",
      "error"
    );
  } finally {
    isLoading.value = false;
  }
};

const handleCloseSessionClick = () => {
  alertService.showAlert(
    "Cierre de sesión",
    "Estas seguro de querer cerrar la sesión?",
    "question",
    (result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigateTo(RoutesEnum.LOGIN, router);
      }
    }
  );
};
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
  height: 100%;
  margin: auto;
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

form p {
  margin-top: 0;
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
