import { defineStore } from "pinia";
export const useAppStore = defineStore("appState", {
    state: () => ({
        isLoading: false,
    }),
    getters: {
        loadingState: (state) => state.isLoading,
    },
    actions: {
        startLoading() {
            this.isLoading = true;
        },
        stopLoading() {
            this.isLoading = false;
        },
    },
});
