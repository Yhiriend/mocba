import { UserModel } from "../models/user.model";
import { defineStore } from "pinia";

export const useAuhtStore = defineStore("authState", {
  state: () => ({
    user: {} as UserModel,
    isAuthenticated: false,
  }),
  getters: {
    getUserState: (state) => state.user,
  },
  actions: {
    setIsAuth(auth: boolean) {
      this.isAuthenticated = auth;
    },
    setUser(user: UserModel) {
      this.user = user;
    },
  },
});
