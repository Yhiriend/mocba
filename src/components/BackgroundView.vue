<template>
  <div class="icon-pattern">
    <div class="icon-item" v-for="(icon, index) in icons" :key="index">
      <i :class="icon" class="bi"></i>
    </div>
  </div>
  <div class="icon-pattern2">
    <div class="icon-item" v-for="(icon, index) in icons" :key="index">
      <i :class="icon" class="bi"></i>
    </div>
  </div>
</template>

<style scoped>
.icon-pattern2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  transform: rotate(45deg);
  margin-top: 00px;
}

.icon-pattern {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
  transform: rotate(45deg);
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  color: #333;
  text-align: center;
}

.icon-item i {
  font-size: 40px;
  margin-bottom: 5px;
}
</style>

<script>
export default {
  name: "IconPattern",
  data() {
    return {
      icons: [
        "bi bi-front",
        "bi bi-globe-europe-africa",
        "bi bi-graph-up-arrow",
        "bi bi-mask",
        "bi bi-percent",
        "bi bi-stack",
        "bi bi-battery-charging",
        "bi bi-alarm-fill",
        "bi bi-backpack-fill",
        "bi bi-bandaid-fill",
        "bi bi-binoculars-fill",
      ],
    };
  },
};
</script>
