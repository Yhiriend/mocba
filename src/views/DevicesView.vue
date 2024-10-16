<template>
  <div class="main-wrapper">
    <h1>Dispositivos</h1>
    <p style="color: gray; font-style: italic">
      Deja marcado los dispositivos que se mostrarán en la pantalla de inicio
      (máximo 3)
    </p>
    <div>
      <p
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          font-weight: 500;
          margin-top: 40px;
        "
      >
        <span>Visible</span><span>Dispositivo</span><span>Configurar</span>
      </p>
      <hr />
      <div class="devices-wrapper">
        <template v-for="(item, index) in deviceList" :key="index">
          <label for="index" class="device">
            <input type="checkbox" id="index" />
            <p style="color: white; font-weight: 500; letter-spacing: 0.09rem">
              {{ item.name }}
            </p>
            <i
              @click="goToDeviceDetail(item)"
              style="color: white; font-size: 1.3rem"
              class="bi bi-gear"
            ></i>
          </label>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ParamRoute } from "../router/navigate.helper";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { ref } from "vue";
import { useAuhtStore } from "../stores/authStore";
import { DeviceModel } from "../models/device.model";

const router = useRouter();
const auhtStore = useAuhtStore();
const deviceList = ref(auhtStore.getUserState.devices);
const goToDeviceDetail = (item: DeviceModel) => {
  const params: ParamRoute = {
    key: "id",
    value: item.id,
  };
  navigateTo(RoutesEnum.DEVICE_DETAIL, router, params);
};
</script>
<style scoped>
.main-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgb(223, 231, 241);
  position: relative;
}
.devices-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
  width: 100%;
  position: relative;
  height: 386px;
  overflow-y: auto;
}
.device {
  background: linear-gradient(135deg, rgb(19, 59, 101), rgb(9, 51, 95));
  width: 86%;
  height: 60px;
  min-height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.device::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 60px solid rgba(231, 231, 231, 0.158);
  border-left: 300px solid transparent;
}
</style>
