import { DeviceModel } from "../models/device.model";
import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { dbFirestore } from "../infrastructure/firebase.config";
import { useDeviceStore } from "../stores/device.store";

export class DeviceService {
  async registerDevice(device: DeviceModel, key: string): Promise<boolean> {
    try {
      const keyRef = doc(dbFirestore, "deviceKeys", key);
      const keySnap = await getDoc(keyRef);

      if (!keySnap.exists()) {
        throw new Error("La key no existe.");
      }

      const keyData = keySnap.data();
      if (keyData.active === true) {
        throw new Error("La key ya está activa.");
      }

      const deviceRef = doc(dbFirestore, "devices", device.id);
      await setDoc(deviceRef, device);

      await updateDoc(keyRef, {
        active: true,
      });

      useDeviceStore().addDevice(device);

      return true;
    } catch (error) {
      console.error("Error registrando el dispositivo:", error);
      throw error;
    }
  }
  async getDeviceById(id: string): Promise<DeviceModel> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const device = useDeviceStore().getDevices.find(
          (device) => device.id === id
        );
        if (device) {
          resolve(device);
        } else {
          reject(new Error("Dispositivo no encontrado"));
        }
      }, 1000);
    });
  }

  async getAllDevices() {
    try {
      const devicesRef = collection(dbFirestore, "devices");
      const querySnapshot = await getDocs(devicesRef);

      const devices: any[] = [];
      querySnapshot.forEach((doc) => {
        devices.push({ id: doc.id, ...doc.data() });
      });

      console.log("Dispositivos obtenidos:", devices);
      return devices;
    } catch (error) {
      console.error("Error obteniendo dispositivos:", error);
      return [];
    }
  }

  async desvinculateDevice(id: string): Promise<boolean> {
    try {
      const deviceRef = doc(dbFirestore, "devices", id);
      await updateDoc(deviceRef, { isActive: false });
      console.log(`El dispositivo con ID ${id} ha sido desvinculado.`);
      return true;
    } catch (error) {
      console.error("Error desvinculando el dispositivo:", error);
      return false;
    }
  }

  async updateDevice(
    deviceId: string,
    updatedDeviceData: Partial<DeviceModel>
  ): Promise<boolean> {
    try {
      const deviceRef = doc(dbFirestore, "devices", deviceId);

      await updateDoc(deviceRef, updatedDeviceData);

      useDeviceStore().updateDevice(updatedDeviceData);

      return true;
    } catch (error) {
      console.error("Error actualizando el dispositivo:", error);
      throw error;
    }
  }
}

const deviceService = new DeviceService();
export default deviceService;
