<script setup lang="ts">
import { computed, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import { useRoute } from "vue-router";
import { getRouteName } from "./router/navigate.helper";
import { RoutesEnum } from "./router/routes.enum";
import { useDemoStore } from "./stores/demo.store";
import { USERS } from "./models/constants/demo";
import LoaderSpinner from "./components/LoaderSpinner.vue";
import { useAppStore } from "./stores/app.store";

const demoStore = useDemoStore();
const route = useRoute();

const loading = computed(() => useAppStore().isLoading);

const isNavEnable = computed(() => {
  return (
    route.name !== getRouteName(RoutesEnum.LOGIN) &&
    route.name !== getRouteName(RoutesEnum.REGISTER)
  );
});

onMounted(() => {
  demoStore.setUserList(USERS);
});
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
  <NavBar v-if="isNavEnable"></NavBar>
  <LoaderSpinner :is-loading="loading" />
</template>
<style>
main {
  position: absolute;
  top: 0;
  height: calc(100vh - 65px);
  min-width: 100%;
  width: 100%;
  max-width: 100%;
}
</style>
