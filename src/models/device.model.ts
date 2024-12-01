export interface DeviceModel {
  charge: number;
  temperature: number;
  voltage: number;
  humidity: number;
  name: string;
  id: string;
  criticTemperatureLevel: number;
  criticChargeLevel: number;
  isActive: boolean;
  showAtHome: boolean;
}
