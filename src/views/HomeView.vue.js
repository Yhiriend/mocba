import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import CardDevice from "../components/CardDevice.vue";
import { useAuhtStore } from "../stores/auth.store";
import realtimeDatabaseService from "../services/realtime-database.service";
import { useDeviceStore } from "../stores/device.store";
import deviceService from "../services/device.service";
import toastService from "../services/toast.service";
import { UserRolEnum } from "../models/user.model";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const auhtStore = useAuhtStore();
const deviceStore = useDeviceStore();
let stopListening = null;
const alertList = ref([]);
const deviceList = computed(() => {
    return deviceStore.getDevices;
});
const fetchDevices = () => {
    deviceService
        .getAllDevices()
        .then((devices) => {
        if (devices.length) {
            deviceStore.setDevices(devices);
        }
    })
        .catch(() => {
        toastService.showToast("Error de carga", "No se han podido cargar los dispositivos", "error");
    });
};
watch(deviceStore, () => {
    const list = [...deviceStore.getAlerts];
    alertList.value = list.reverse().slice(0, 4);
});
onMounted(() => {
    if (!deviceStore.getDevices.length) {
        deviceStore.setDevices([]);
        fetchDevices();
    }
    stopListening = realtimeDatabaseService.listenToChanges("devices", (data) => {
        if (!data)
            return;
        Object.keys(data).forEach((deviceId) => {
            const deviceRealtimeData = data[deviceId];
            if (deviceRealtimeData) {
                const localDevice = deviceStore.getDevices.find((d) => d.id === deviceId);
                if (deviceRealtimeData.charge <= (localDevice?.criticChargeLevel ?? 100)) {
                    if (localDevice?.name) {
                        const alert = {
                            id: localDevice?.id ?? "10",
                            title: `LB: ${localDevice?.name}`,
                            message: "Nivel bajo de batería",
                            issueDate: new Date().toLocaleDateString(),
                            issueTime: new Date().toLocaleTimeString(),
                        };
                        console.log("creating alert: ", alert);
                        deviceStore.addAlert(alert);
                    }
                }
                if (deviceRealtimeData.temperature >=
                    (localDevice?.criticTemperatureLevel ?? 35)) {
                    if (localDevice?.name) {
                        const alert = {
                            id: localDevice?.id ?? "10",
                            title: `HT: ${localDevice?.name}`,
                            message: "Nivel alto de temperatura",
                            issueDate: new Date().toLocaleDateString(),
                            issueTime: new Date().toLocaleTimeString(),
                        };
                        console.log("creating alert: ", alert);
                        deviceStore.addAlert(alert);
                    }
                }
                deviceStore.updateDevice({
                    id: deviceId,
                    charge: deviceRealtimeData.charge ?? 0,
                    temperature: deviceRealtimeData.temperature ?? 0,
                    voltage: deviceRealtimeData.voltage ?? 0,
                    humidity: deviceRealtimeData.humidity ?? 0,
                });
            }
        });
    });
});
onUnmounted(() => {
    if (stopListening) {
        stopListening();
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("back-circle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ style: ({}) }, ...{ class: ("username") }, });
    (__VLS_ctx.auhtStore.getUserState.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.DEVICES, __VLS_ctx.router);
            } }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cards-wrapper") }, });
    for (const [device, index] of __VLS_getVForSourceType((__VLS_ctx.deviceList))) {
        // @ts-ignore
        [CardDevice, CardDevice,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(CardDevice, new CardDevice({ data: (({
                charge: device.charge,
                name: device.name,
                temperature: device.temperature,
                voltage: device.voltage,
                humidity: device.humidity,
            })), params: (({ key: 'id', value: device.id })), }));
        const __VLS_1 = __VLS_0({ data: (({
                charge: device.charge,
                name: device.name,
                temperature: device.temperature,
                voltage: device.voltage,
                humidity: device.humidity,
            })), params: (({ key: 'id', value: device.id })), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    if (__VLS_ctx.auhtStore.getUserState.role === __VLS_ctx.UserRolEnum.ADMIN) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.auhtStore.getUserState.role === __VLS_ctx.UserRolEnum.ADMIN)))
                        return;
                    __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.ADD_DEVICE, __VLS_ctx.router);
                } }, ...{ class: ("card-add") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ style: ({}) }, ...{ class: ("bi bi-plus-lg") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.ALERTS, __VLS_ctx.router);
            } }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("alerts-wrapper") }, });
    if (__VLS_ctx.alertList.length <= 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else {
        for (const [alert, index] of __VLS_getVForSourceType((__VLS_ctx.alertList))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("alert") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
            (alert.title);
            __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ style: ({}) }, ...{ class: ("bi bi-exclamation-circle") }, });
        }
    }
    __VLS_styleScopedClasses['main-wrapper'];
    __VLS_styleScopedClasses['back-circle'];
    __VLS_styleScopedClasses['header-wrapper'];
    __VLS_styleScopedClasses['username'];
    __VLS_styleScopedClasses['cards-wrapper'];
    __VLS_styleScopedClasses['card-add'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-plus-lg'];
    __VLS_styleScopedClasses['alerts-wrapper'];
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-exclamation-circle'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            navigateTo: navigateTo,
            RoutesEnum: RoutesEnum,
            CardDevice: CardDevice,
            UserRolEnum: UserRolEnum,
            router: router,
            auhtStore: auhtStore,
            alertList: alertList,
            deviceList: deviceList,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
