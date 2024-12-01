<template>
  <div v-if="isLoading" class="backlayer">
    <span class="loader"></span>
  </div>
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
.backlayer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.loader {
  border: 3px solid rgb(255, 255, 255); /* Color del borde del loader */
  border-top: 3px solid transparent; /* Color del borde superior */
  border-radius: 50%;
  width: 30px; /* Ancho del loader */
  height: 30px; /* Alto del loader */
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
