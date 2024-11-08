import { DeviceModel } from "../models/device.model";
import { DEVICES } from "../models/constants/devices";
import { useAuhtStore } from "../stores/authStore";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { dbFirestore } from "../infrastructure/firebase.config";

export class DeviceService {
  async registerDevice(
    userId: string,
    device: DeviceModel,
    key: string
  ): Promise<boolean> {
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

      const userRef = doc(dbFirestore, "users", userId);
      await updateDoc(userRef, {
        devices: arrayUnion(device),
      });

      await updateDoc(keyRef, {
        active: true,
      });

      const userState = useAuhtStore().getUserState;
      userState.devices = [...userState.devices, { ...device, id: key }];
      useAuhtStore().setUser(userState);

      return true;
    } catch (error) {
      console.error("Error registrando el dispositivo:", error);
      throw error;
    }
  }
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
      }, 1000);
    });
  }

  async getAllMyDevices() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DEVICES);
      }, 1000);
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
      }, 3000);
    });
  }

  async updateDevice(
    userId: string,
    deviceId: string,
    updatedDeviceData: Partial<DeviceModel>
  ): Promise<boolean> {
    try {
      const userRef = doc(dbFirestore, "users", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        throw new Error("Usuario no encontrado.");
      }

      const userData = userSnap.data();
      const devices = userData.devices || [];

      const deviceIndex = devices.findIndex(
        (device: DeviceModel) => device.id === deviceId
      );
      if (deviceIndex === -1) {
        throw new Error("Dispositivo no encontrado.");
      }

      const updatedDevices = [...devices];
      updatedDevices[deviceIndex] = {
        ...updatedDevices[deviceIndex],
        ...updatedDeviceData,
      };

      await updateDoc(userRef, {
        devices: updatedDevices,
      });

      const userState = useAuhtStore().getUserState;
      userState.devices = updatedDevices;
      useAuhtStore().setUser(userState);

      return true;
    } catch (error) {
      console.error("Error actualizando el dispositivo:", error);
      throw error;
    }
  }
}

const deviceService = new DeviceService();
export default deviceService;
