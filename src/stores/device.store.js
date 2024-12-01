import { defineStore } from "pinia";
export const useDeviceStore = defineStore("deviceState", {
    state: () => ({
        devices: [],
        alerts: [],
    }),
    getters: {
        getDevices: (state) => state.devices,
        getAlerts: (state) => state.alerts,
    },
    actions: {
        setDevices(devices) {
            this.devices = devices;
        },
        addDevice(device) {
            this.devices = [...this.devices, device];
        },
        updateDevice(device) {
            this.devices = this.devices.map((d) => d.id === device.id ? { ...d, ...device } : d);
            this.devices = [...this.devices];
        },
        addAlert(alert) {
            if (this.alerts.length > 0) {
                const oldAlert = this.alerts.find((a) => a.id === alert.id);
                if (!oldAlert) {
                    this.alerts.push(alert);
                }
            }
            else {
                this.alerts.push(alert);
            }
        },
        clearAlerts() {
            this.alerts = [];
        },
    },
});
