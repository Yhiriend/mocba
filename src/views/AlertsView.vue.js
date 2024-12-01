import { useRouter } from "vue-router";
import { navigateBefore } from "../router/navigate.helper";
import { computed } from "vue";
import { useDeviceStore } from "../stores/device.store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const deviceStore = useDeviceStore();
const alertList = computed(() => deviceStore.getAlerts);
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
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['alert'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateBefore(__VLS_ctx.router);
            } }, ...{ class: ("bi bi-chevron-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("alerts-wrapper") }, });
    for (const [alert, index] of __VLS_getVForSourceType((__VLS_ctx.alertList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ for: ((index)), ...{ class: ("alert") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("name") }, });
        (alert.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("message") }, });
        (alert.message);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("date") }, });
        (alert.issueDate);
        (alert.issueTime);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ style: ({}) }, ...{ class: ("bi bi-exclamation-circle") }, });
    }
    __VLS_styleScopedClasses['main-wrapper'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-chevron-left'];
    __VLS_styleScopedClasses['alerts-wrapper'];
    __VLS_styleScopedClasses['alert'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['name'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['date'];
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
            navigateBefore: navigateBefore,
            router: router,
            alertList: alertList,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
