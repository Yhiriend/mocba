import { defineStore } from "pinia";
export const useDemoStore = defineStore("demoState", {
    state: () => ({
        isDemoMode: false,
        user: {},
        isAuthenticated: false,
        userList: [],
        devices: [],
    }),
    getters: {
        getUserState: (state) => state.user,
        getIsAuthenticatedState: (state) => state.isAuthenticated,
        getUserListState: (state) => state.userList,
        getDevicesState: (state) => state.devices,
        getIsDemo: (state) => state.isDemoMode,
    },
    actions: {
        setIsDemo(isDemo) {
            this.isDemoMode = isDemo;
        },
        setUser(user) {
            this.user = user;
        },
        setIsAuth(auth) {
            this.isAuthenticated = auth;
        },
        setUserList(users) {
            this.userList = users;
        },
        setDevices(devices) {
            this.devices = devices;
        },
    },
});
