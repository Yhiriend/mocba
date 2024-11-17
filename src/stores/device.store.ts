import { DeviceModel } from "@/models/device.model";
import { defineStore } from "pinia";

export const useDeviceStore = defineStore("deviceState", {
  state: () => ({
    devices: [] as DeviceModel[],
  }),
  getters: {
    getDevices: (state) => state.devices,
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
  },
});
