// device.service.ts

import { DeviceModel } from "../models/device.model";
import { DEVICES } from "../models/constants/devices"; // Asegúrate de importar el array de dispositivos
import { useAuhtStore } from "../stores/authStore";

export class DeviceService {
  // Simula una petición para obtener un dispositivo por su ID
  async getDeviceById(id: string): Promise<DeviceModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const device = useAuhtStore().getUserState.devices.find(
          (device) => device.id === id
        );
        if (device) {
          resolve(device);
        } else {
          reject(new Error("Dispositivo no encontrado"));
        }
      }, 1000); // Simula un retraso de 1 segundo
    });
  }

  // Simula una petición para obtener todos los dispositivos
  async getAllMyDevices() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DEVICES);
      }, 1000); // Simula un retraso de 1 segundo
    });
  }

  async desvinculateDevice(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = useAuhtStore().getUserState;
        const devices = user.devices.filter((device) => device.id !== id);
        user.devices = devices;
        useAuhtStore().setUser(user);
        resolve(true);
      }, 3000); // Simula un retraso de 1 segundo
    });
  }
}

// Instancia del servicio
const deviceService = new DeviceService();
export default deviceService;
