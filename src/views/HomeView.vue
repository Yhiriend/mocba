<template>
  <div class="main-wrapper">
    <div class="back-circle"></div>
    <div class="header-wrapper">
      <h2 style="text-transform: capitalize" class="username">
        Hola, {{ auhtStore.getUserState.name }}.
      </h2>
    </div>
    <p
      style="
        font-size: 1.5rem;
        font-weight: 400;
        text-align: start;
        padding: 0 20px;
        margin-bottom: 10px;
        color: rgb(223, 231, 241);
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: end;
      "
    >
      Dispositivos
      <span
        @click="navigateTo(RoutesEnum.DEVICES, router)"
        style="font-size: 1rem; font-weight: 300"
        >ver todos</span
      >
    </p>
    <div class="cards-wrapper">
      <template v-for="(device, index) in deviceList" :key="index">
        <CardDevice
          :data="{
            charge: device.charge,
            name: device.name,
            temperature: device.temperature,
            voltage: device.voltage,
            humidity: device.humidity,
          }"
          :params="{ key: 'id', value: device.id }"
        ></CardDevice>
      </template>
      <div
        v-if="auhtStore.getUserState.role === UserRolEnum.ADMIN"
        class="card-add"
        @click="navigateTo(RoutesEnum.ADD_DEVICE, router)"
      >
        <i style="font-size: 3.5rem" class="bi bi-plus-lg"></i>
      </div>
    </div>
    <p
      style="
        font-size: 1.5rem;
        font-weight: 500;
        text-align: start;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding: 0 20px;
      "
    >
      Alertas<span
        @click="navigateTo(RoutesEnum.ALERTS, router)"
        style="font-size: 1rem; font-weight: 300"
        >ver todas</span
      >
    </p>
    <div class="alerts-wrapper">
      <div v-if="alertList.length <= 0">
        <p>No hay alertas</p>
      </div>
      <template v-else v-for="(alert, index) in alertList" :key="index">
        <div class="alert">
          <p style="color: white">{{ alert.title }}</p>
          <i
            style="color: white; font-size: 1.3rem"
            class="bi bi-exclamation-circle"
          ></i>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import CardDevice from "../components/CardDevice.vue";
import { useAuhtStore } from "../stores/auth.store";
import realtimeDatabaseService from "../services/realtime-database.service";
import { useDeviceStore } from "../stores/device.store";
import deviceService from "../services/device.service";
import toastService from "../services/toast.service";
import { UserRolEnum } from "../models/user.model";
import { AlertModel } from "../models/alert.model";
import { useAppStore } from "../stores/app.store";

const router = useRouter();
const auhtStore = useAuhtStore();
const deviceStore = useDeviceStore();
let stopListening: (() => void) | null = null;
const alertList = ref<any[]>([]);

const deviceList = computed(() => {
  return deviceStore.getDevices;
});

const fetchDevices = () => {
  useAppStore().startLoading();
  deviceService
    .getAllDevices()
    .then((devices) => {
      if (devices.length) {
        deviceStore.setDevices(devices);
      }
    })
    .catch(() => {
      toastService.showToast(
        "Error de carga",
        "No se han podido cargar los dispositivos",
        "error"
      );
    })
    .finally(() => useAppStore().stopLoading());
};

watch(deviceStore, () => {
  const list = [...deviceStore.getAlerts];
  alertList.value = list.reverse().slice(0, 4);
});

onMounted(() => {
  if (!deviceStore.getDevices.length) {
    deviceStore.setDevices([]);
    fetchDevices();
  }
  stopListening = realtimeDatabaseService.listenToChanges(
    "devices",
    (data: any | null) => {
      if (!data) return;
      Object.keys(data).forEach((deviceId) => {
        const deviceRealtimeData = data[deviceId];
        if (deviceRealtimeData) {
          const localDevice = deviceStore.getDevices.find(
            (d) =>
              d.id === deviceId && deviceRealtimeData.id !== "arduino_mega_2560"
          );
          if (
            deviceRealtimeData.charge <= (localDevice?.criticChargeLevel ?? 100)
          ) {
            if (localDevice?.name) {
              const alert: AlertModel = {
                id: localDevice?.id ?? "10",
                title: `LB: ${localDevice?.name}`,
                message: "Nivel bajo de batería",
                issueDate: new Date().toLocaleDateString(),
                issueTime: new Date().toLocaleTimeString(),
              };
              console.log("creating alert: ", alert);
              deviceStore.addAlert(alert);
            }
          }
          if (
            deviceRealtimeData.temperature >=
            (localDevice?.criticTemperatureLevel ?? 35)
          ) {
            if (localDevice?.name) {
              const alert: AlertModel = {
                id: localDevice?.id ?? "10",
                title: `HT: ${localDevice?.name}`,
                message: "Nivel alto de temperatura",
                issueDate: new Date().toLocaleDateString(),
                issueTime: new Date().toLocaleTimeString(),
              };
              console.log("creating alert: ", alert);
              deviceStore.addAlert(alert);
            }
          }
          if (deviceId !== "arduino_mega_2560") {
            deviceStore.updateDevice({
              id: deviceId,
              charge: deviceRealtimeData.charge ?? 0,
              temperature: deviceRealtimeData.temperature ?? 0,
              voltage: deviceRealtimeData.voltage ?? 0,
              humidity: deviceRealtimeData.humidity ?? 0,
            });
          }
        }
      });
    }
  );
});

onUnmounted(() => {
  if (stopListening) {
    stopListening();
  }
});
</script>
<style>
.main-wrapper {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgb(223, 231, 241);
  position: relative;
}
.back-circle {
  position: fixed;
  top: -33%;
  left: -20%;
  width: 160%;
  height: 500px;
  background: linear-gradient(135deg, rgb(19, 59, 101), rgb(9, 51, 95));
  border-radius: 50%;
  z-index: 0;
}
.header-wrapper {
  position: relative;
  z-index: 2;
  margin-bottom: 40px;
  margin-top: 30px;
}
.username {
  text-align: start;
  margin-left: 20px;
  line-height: 2rem;
  font-size: 2rem;
  margin-top: 0;
  z-index: 2;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}
.cards-wrapper {
  display: flex;
  width: 95%;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 10px;
  background: rgb(223, 231, 241);
  align-items: center;
}
.card-add {
  height: 220px;
  width: 150px;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.705);
  border-radius: 15px;
  z-index: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.alerts-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
  width: 86%;
  position: relative;
}
.alert {
  background: rgb(227, 90, 114);
  width: 100%;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.alert::after {
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
