<template>
  <div class="card">
    <CircularProgressBar :percentage="cardData?.charge" />
    <p class="content name">{{ cardData?.name }}</p>
    <p class="content temp">🌡️ {{ cardData?.temperature }}°</p>
    <a
      @click="navigateTo(RoutesEnum.DEVICE_DETAIL, router, cardParams)"
      class="content more"
      >ver detalles</a
    >
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { navigateTo, ParamRoute } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import { ContentDeviceCard } from "../models/content-device-card.model";
import CircularProgressBar from "./CircularProgressBar.vue";
const router = useRouter();
const cardParams = ref<ParamRoute>();
const cardData = ref<ContentDeviceCard>();
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  params: {
    type: Object,
    required: true,
  },
});
onMounted(() => {
  if (props.params && props.data) {
    cardParams.value = props.params as ParamRoute;
    cardData.value = props.data as ContentDeviceCard;
  }
});
</script>
<style scoped>
.card {
  height: 200px;
  width: 150px;
  min-width: 150px;
  background: white;
  border-radius: 30px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 6px 0px rgba(0, 29, 61, 0.15);
}
.content {
  color: rgb(22, 64, 111);
  font-weight: 700;
}
.content.name {
  font-size: x-large;
  margin-top: 0;
}
.content.temp {
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 25px;
  line-height: 0rem;
}
.card::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 300px solid rgba(231, 231, 231, 0.425);
  border-left: 300px solid transparent;
}
</style>
