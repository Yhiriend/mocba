import { AlertModel } from "./alert.model";
import { DeviceModel } from "./device.model";

export interface UserModel {
  id: string;
  name: string;
  surname: string;
  alerts: AlertModel[];
  devices: DeviceModel[];
  username: string;
  password: string;
}
