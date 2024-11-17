import { DeviceModel } from "../models/device.model";
import { UserModel } from "../models/user.model";
import { defineStore } from "pinia";

export const useDemoStore = defineStore("demoState", {
  state: () => ({
    isDemoMode: false,
    user: {} as UserModel,
    isAuthenticated: false,
    userList: [] as UserModel[],
    devices: [] as DeviceModel[],
  }),
  getters: {
    getUserState: (state) => state.user,
    getIsAuthenticatedState: (state) => state.isAuthenticated,
    getUserListState: (state) => state.userList,
    getDevicesState: (state) => state.devices,
    getIsDemo: (state) => state.isDemoMode,
  },
  actions: {
    setIsDemo(isDemo: boolean) {
      this.isDemoMode = isDemo;
    },
    setUser(user: UserModel) {
      this.user = user;
    },
    setIsAuth(auth: boolean) {
      this.isAuthenticated = auth;
    },
    setUserList(users: UserModel[]) {
      this.userList = users;
    },
    setDevices(devices: DeviceModel[]) {
      this.devices = devices;
    },
  },
});
