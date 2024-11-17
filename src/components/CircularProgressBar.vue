<template>
  <div class="circular-progress-bar">
    <svg
      class="circular-progress"
      viewBox="0 0 100 100"
      :style="{ transform: `rotate(-90deg)` }"
    >
      <circle class="circular-progress-bg" cx="50" cy="50" r="45" />
      <circle
        class="circular-progress-fg"
        cx="50"
        cy="50"
        r="45"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
      />
    </svg>
    <div class="percentage">
      <span style="margin-bottom: 0">{{ percentage }}%</span><br /><span
        style="
          font-weight: 500;
          font-size: 1rem;
          line-height: 0.5rem;
          margin-top: 0;
        "
        >carga</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 100,
  },
});

const radius = 45; // Radio del círculo
const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
const offset = computed(() => {
  return circumference - (props.percentage / 100) * circumference; // Calcula el offset basado en el porcentaje
});
</script>

<style scoped>
.circular-progress-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.circular-progress {
  width: 100px; /* Tamaño de la barra */
  height: 100px; /* Tamaño de la barra */
}

.circular-progress-bg {
  fill: none;
  stroke: #e6e6e66b; /* Color de fondo */
  stroke-width: 10; /* Ancho de la barra */
}

.circular-progress-fg {
  fill: none;
  stroke: rgb(34, 87, 146); /* Color de la barra de progreso */
  stroke-width: 10; /* Ancho de la barra */
  transition: stroke-dashoffset 0.5s ease; /* Transición suave */
}

.percentage {
  position: absolute;
  font-size: 20px; /* Tamaño de la fuente */
  font-weight: bold;
  color: rgb(34, 87, 146); /* Color del texto */
}
</style>
