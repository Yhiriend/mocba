<template>
  <div class="main-wrapper">
    <h1
      style="
        font-size: 1.6rem;
        line-height: 2rem;
        display: flex;
        margin-bottom: 40px;
        padding: 0 20px;
      "
    >
      <i class="bi bi-chevron-left" @click="navigateBefore(router)"></i
      ><span style="margin-left: 20px">Alertas</span>
    </h1>
    <p style="color: gray; font-style: italic; padding: 0 20px">
      Las alertas se muestran desde la más reciente hasta la más antigua.
    </p>
    <div>
      <hr />
      <div class="alerts-wrapper">
        <template v-for="(alert, index) in alertList" :key="index">
          <div :for="index" class="alert">
            <div class="content">
              <p class="name">{{ alert.title }}</p>
              <p class="message">{{ alert.message }}</p>
              <p class="date">
                {{ alert.issueDate }} / hora: {{ alert.issueTime }}
              </p>
            </div>
            <div>
              <i
                style="color: white; font-size: 1.3rem"
                class="bi bi-exclamation-circle"
              ></i>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { navigateBefore } from "../router/navigate.helper";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { ref } from "vue";
import { useAuhtStore } from "../stores/authStore";

const router = useRouter();
const auhtStore = useAuhtStore();
const alertList = ref(auhtStore.getUserState.alerts);
</script>
<style scoped>
.main-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgb(223, 231, 241);
  position: relative;
}
.alerts-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
  width: 100%;
  position: relative;
  height: 386px;
  overflow-y: auto;
}
.alert {
  background: rgb(227, 90, 114);
  width: 86%;
  height: 80px;
  min-height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.alert .content p {
  font-size: 0.9rem;
  font-weight: normal;
  color: white;
  line-height: 1rem;
  margin: 0;
}
.alert .content .message {
  margin-left: 70px;
}
.alert .content .date {
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: rgba(255, 255, 255, 0.836);
}
.alert .content .name {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  position: absolute;
  top: 10px;
  width: 80%;
}
.alert::after {
  content: "";
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 80px solid rgba(231, 231, 231, 0.158);
  border-left: 300px solid transparent;
}
</style>
