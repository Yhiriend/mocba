import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import { RoutesEnum } from "./routes.enum";
import NewDeviceView from "../views/NewDeviceView.vue";
import SettingsView from "../views/SettingsView.vue";
import DevicesView from "../views/DevicesView.vue";
import DeviceDetailView from "../views/DeviceDetailView.vue";
import { getRouteName } from "./navigate.helper";
import AlertsView from "../views/AlertsView.vue";
import RegisterView from "../views/RegisterView.vue";
import { authGuard } from "../guards/guard";
const routes = [
    {
        path: "/",
        redirect: RoutesEnum.HOME,
    },
    {
        path: RoutesEnum.HOME,
        name: getRouteName(RoutesEnum.HOME),
        component: HomeView,
    },
    {
        path: RoutesEnum.LOGIN,
        name: getRouteName(RoutesEnum.LOGIN),
        component: LoginView,
    },
    {
        path: RoutesEnum.REGISTER,
        name: getRouteName(RoutesEnum.REGISTER),
        component: RegisterView,
    },
    {
        path: RoutesEnum.ADD_DEVICE,
        name: getRouteName(RoutesEnum.ADD_DEVICE),
        component: NewDeviceView,
    },
    {
        path: RoutesEnum.SETTINGS,
        name: getRouteName(RoutesEnum.SETTINGS),
        component: SettingsView,
    },
    {
        path: RoutesEnum.DEVICES,
        name: getRouteName(RoutesEnum.DEVICES),
        component: DevicesView,
    },
    {
        path: RoutesEnum.DEVICE_DETAIL,
        name: getRouteName(RoutesEnum.DEVICE_DETAIL),
        component: DeviceDetailView,
    },
    {
        path: RoutesEnum.ALERTS,
        name: getRouteName(RoutesEnum.ALERTS),
        component: AlertsView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach(authGuard);
export default router;
