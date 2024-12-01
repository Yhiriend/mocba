<template>
  <button
    :type="buttonType"
    @click="handleClick"
    :class="['button', buttonStyleClass, { down: !isEnable }]"
  >
    <span v-if="isLoading" class="loader"></span>
    <span>{{ buttonText }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineEmits, computed } from "vue";

const props = defineProps({
  isEnable: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String as () => "button" | "submit" | "reset",
    default: "button", // Valor por defecto es 'button'
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false, // Valor por defecto es 'false'
  },
  buttonStyle: {
    type: String,
    default: "success", // Valor por defecto
  },
});

const emit = defineEmits<{
  (e: "click"): void;
}>();

const handleClick = () => {
  emit("click"); // Emite el evento de clic
};

// Computed para determinar la clase de estilo del botón
const buttonStyleClass = computed(() => {
  switch (props.buttonStyle) {
    case "success":
      return "success";
    case "cancel":
      return "cancel";
    case "danger":
      return "danger";
    case "success-outlined":
      return "success-outlined";
    case "danger-outlined":
      return "danger-outlined";
    case "cancel-outlined":
      return "cancel-outlined";
    default:
      return "";
  }
});
</script>

<style scoped>
.button {
  padding: 13px 20px;
  border: none;
  border-radius: 5px;
  color: white; /* Color de texto */
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, border 0.3s; /* Agregar transición para el borde */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilos para los diferentes tipos de botones */
.button.success {
  background-color: rgb(9, 51, 95); /* Verde */
}

.button.cancel {
  background-color: #ffc107; /* Amarillo */
}

.button.danger {
  background-color: #dc3545; /* Rojo */
}

.button.success-outlined {
  background: transparent;
  border: 2px solid rgb(9, 51, 95); /* Borde verde */
  color: rgb(9, 51, 95); /* Texto verde */
}

.button.cancel-outlined {
  background: transparent;
  border: 2px solid #ffc107; /* Borde amarillo */
  color: #ffc107; /* Texto amarillo */
}

.button.danger-outlined {
  background: transparent;
  border: 2px solid #dc3545; /* Borde rojo */
  color: #dc3545; /* Texto rojo */
}

/* Estilo para el estado deshabilitado */
.button.down {
  background: gray; /* Cambia el fondo a gris */
  color: white; /* Cambia el color del texto a blanco para contraste */
  cursor: not-allowed; /* Cambia el cursor para indicar que está deshabilitado */
  opacity: 0.6; /* Hace que el botón parezca más tenue */
  pointer-events: none; /* Evita la interacción con el botón */
}

/* Loader y animación */
.loader {
  border: 3px solid white; /* Color del borde del loader */
  border-top: 3px solid transparent; /* Color del borde superior */
  border-radius: 50%;
  width: 15px; /* Ancho del loader */
  height: 15px; /* Alto del loader */
  margin-right: 8px; /* Espaciado entre el loader y el texto */
  animation: spin 1s linear infinite; /* Animación de rotación */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
