<template>
  <span v-if="isLoading" class="loader"></span>
</template>
<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.loader {
  border: 3px solid rgb(9, 51, 95); /* Color del borde del loader */
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
