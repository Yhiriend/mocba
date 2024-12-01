import { AlertModel } from "@/models/alert.model";
import { DeviceModel } from "@/models/device.model";
import { defineStore } from "pinia";

export const useDeviceStore = defineStore("deviceState", {
  state: () => ({
    devices: [] as DeviceModel[],
    alerts: [] as AlertModel[],
  }),
  getters: {
    getDevices: (state) => state.devices,
    getAlerts: (state) => state.alerts,
  },
  actions: {
    setDevices(devices: DeviceModel[]) {
      this.devices = devices;
    },
    addDevice(device: DeviceModel) {
      this.devices = [...this.devices, device];
    },
    updateDevice(device: Partial<DeviceModel>) {
      this.devices = this.devices.map((d: DeviceModel) =>
        d.id === device.id ? { ...d, ...device } : d
      );
      this.devices = [...this.devices];
    },
    addAlert(alert: AlertModel) {
      if (this.alerts.length > 0) {
        const oldAlert = this.alerts.find((a) => a.id === alert.id);
        if (!oldAlert) {
          this.alerts.push(alert);
        }
      } else {
        this.alerts.push(alert);
      }
    },
    clearAlerts() {
      this.alerts = [];
    },
  },
});
