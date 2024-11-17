import { UserModel } from "../models/user.model";
import { defineStore } from "pinia";

export const useAuhtStore = defineStore("authState", {
  state: () => ({
    user: {} as UserModel,
    isAuthenticated: false,
    token: "",
  }),
  getters: {
    getUserState: (state) => state.user,
    getToken: (state) => state.token,
    getIsAuthenticated: (state) => state.isAuthenticated,
  },
  actions: {
    setIsAuth(auth: boolean) {
      this.isAuthenticated = auth;
    },
    setUser(user: UserModel) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
    },
  },
});
