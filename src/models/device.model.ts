export interface DeviceModel {
  charge: number;
  temperature: number;
  name: string;
  id: string;
  criticTemperatureLevel: number;
  criticChargeLevel: number;
  isActive: boolean;
  showAtHome: boolean;
}
