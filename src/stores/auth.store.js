import { defineStore } from "pinia";
export const useAuhtStore = defineStore("authState", {
    state: () => ({
        user: {},
        isAuthenticated: false,
        token: "",
    }),
    getters: {
        getUserState: (state) => state.user,
        getToken: (state) => state.token,
        getIsAuthenticated: (state) => state.isAuthenticated,
    },
    actions: {
        setIsAuth(auth) {
            this.isAuthenticated = auth;
        },
        setUser(user) {
            this.user = user;
        },
        setToken(token) {
            this.token = token;
        },
    },
});
