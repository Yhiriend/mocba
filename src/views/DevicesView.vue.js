import { useRouter } from "vue-router";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { ref } from "vue";
import { useDeviceStore } from "../stores/device.store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const deviceStore = useDeviceStore();
const deviceList = ref(deviceStore.getDevices);
const goToDeviceDetail = (item) => {
    const params = {
        key: "id",
        value: item.id,
    };
    navigateTo(RoutesEnum.DEVICE_DETAIL, router, params);
};
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
    __VLS_styleScopedClasses['device'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("devices-wrapper") }, });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.deviceList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("index"), ...{ class: ("device") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.goToDeviceDetail(item);
                } }, ...{ style: ({}) }, ...{ class: ("bi bi-gear") }, });
    }
    __VLS_styleScopedClasses['main-wrapper'];
    __VLS_styleScopedClasses['devices-wrapper'];
    __VLS_styleScopedClasses['device'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-gear'];
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
            deviceList: deviceList,
            goToDeviceDetail: goToDeviceDetail,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
