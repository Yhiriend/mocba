// device.service.ts

import { DeviceModel } from "../models/device.model";
import { DEVICES } from "../models/constants/devices"; // Asegúrate de importar el array de dispositivos
import { useAuhtStore } from "../stores/authStore";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "../infrastructure/firebase.config";

export class DeviceService {
  async registerDevice(
    userId: string,
    device: DeviceModel,
    key: string
  ): Promise<boolean> {
    try {
      // Paso 1: Verificar si la key existe en deviceKeys y está inactiva
      const keyRef = doc(db, "deviceKeys", key);
      const keySnap = await getDoc(keyRef);

      if (!keySnap.exists()) {
        throw new Error("La key no existe.");
      }

      const keyData = keySnap.data();
      if (keyData.active === true) {
        throw new Error("La key ya está activa.");
      }

      // Paso 2: Si la key está inactiva, registrar el dispositivo en el usuario
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        devices: arrayUnion(device),
      });

      // Paso 3: Actualizar la key a activa en deviceKeys
      await updateDoc(keyRef, {
        active: true,
      });

      return true;
    } catch (error) {
      console.error("Error registrando el dispositivo:", error);
      throw error;
    }
  }
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
