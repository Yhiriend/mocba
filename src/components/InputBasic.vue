<template>
  <div v-if="isLoadingData" class="loading"></div>
  <div v-else class="field-container">
    <label :for="id"><i :class="'bi bi-' + icon"></i></label>
    <input
      :readonly="readonly"
      :type="type"
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>
<script setup lang="ts">
import { defineModel } from "vue";
const model = defineModel();
defineProps({
  isLoadingData: Boolean,
  id: String,
  type: String,
  placeholder: String,
  required: Boolean,
  icon: String,
  readonly: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.loading {
  height: 50px; /* Altura igual a la del input */
  width: 100%; /* Ancho igual al del input */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: pulse 1.5s infinite ease-in-out;
  border-radius: 4px; /* Bordes redondeados */
  margin: 0; /* Margen para la alineación */
}

@keyframes pulse {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.field-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: fit-content;
  width: 100%;
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
</style>
