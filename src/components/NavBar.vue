<template>
  <nav>
    <button
      class="icon"
      :class="{ active: route.path === RoutesEnum.HOME }"
      @click="goTo(RoutesEnum.HOME)"
    >
      <i id="home" class="bi bi-house-fill"></i>
    </button>
    <button
      v-if="useAuhtStore().getUserState.role === UserRolEnum.ADMIN"
      class="icon"
      :class="{ active: route.path === RoutesEnum.ADD_DEVICE }"
      @click="goTo(RoutesEnum.ADD_DEVICE)"
    >
      <i id="device" class="bi bi-device-ssd-fill"></i>
      <i id="plus" class="bi bi-plus-circle-fill"></i>
    </button>
    <button
      class="icon"
      :class="{ active: route.path === RoutesEnum.DEVICES }"
      @click="goTo(RoutesEnum.DEVICES)"
    >
      <i id="devices" class="bi bi-list-task"></i>
    </button>
    <button
      class="icon"
      :class="{ active: route.path === RoutesEnum.SETTINGS }"
      @click="goTo(RoutesEnum.SETTINGS)"
    >
      <i id="settings" class="bi bi-gear-fill"></i>
    </button>
  </nav>
</template>
<script setup lang="ts">
import { RoutesEnum } from "../router/routes.enum";
import { navigateTo } from "../router/navigate.helper";
import { useRoute, useRouter } from "vue-router";
import { useAuhtStore } from "../stores/auth.store";
import { UserRolEnum } from "../models/user.model";
const router = useRouter();
const route = useRoute();
const goTo = (routePath: RoutesEnum) => {
  navigateTo(routePath, router);
};
</script>
<style scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: rgb(22, 64, 111);
  z-index: 10;
}
.icon {
  display: flex;
  justify-content: end;
  padding: 10px;
  background: transparent;
  position: relative;
  border: none;
  outline: none;
}
.icon:focus {
  outline: none;
}
#devices,
#home,
#settings,
#device {
  font-size: 2rem;
  color: rgb(223, 231, 241);
}
#plus {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 8px;
  right: 8px;
  color: rgb(223, 231, 241);
  background: rgb(22, 64, 111);
  border-radius: 100%;
  border: 3px solid rgb(22, 64, 111);
}
button {
  background: red;
}
.icon.active {
  background: rgb(11, 41, 75);
}
</style>
