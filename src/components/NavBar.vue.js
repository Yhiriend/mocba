import { RoutesEnum } from "../router/routes.enum";
import { navigateTo } from "../router/navigate.helper";
import { useRoute, useRouter } from "vue-router";
import { useAuhtStore } from "../stores/auth.store";
import { UserRolEnum } from "../models/user.model";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const route = useRoute();
const goTo = (routePath) => {
    navigateTo(routePath, router);
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
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['icon'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.goTo(__VLS_ctx.RoutesEnum.HOME);
            } }, ...{ class: ("icon") }, ...{ class: (({ active: __VLS_ctx.route.path === __VLS_ctx.RoutesEnum.HOME })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ id: ("home"), ...{ class: ("bi bi-house-fill") }, });
    if (__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN)))
                        return;
                    __VLS_ctx.goTo(__VLS_ctx.RoutesEnum.ADD_DEVICE);
                } }, ...{ class: ("icon") }, ...{ class: (({ active: __VLS_ctx.route.path === __VLS_ctx.RoutesEnum.ADD_DEVICE })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ id: ("device"), ...{ class: ("bi bi-device-ssd-fill") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ id: ("plus"), ...{ class: ("bi bi-plus-circle-fill") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.goTo(__VLS_ctx.RoutesEnum.DEVICES);
            } }, ...{ class: ("icon") }, ...{ class: (({ active: __VLS_ctx.route.path === __VLS_ctx.RoutesEnum.DEVICES })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ id: ("devices"), ...{ class: ("bi bi-list-task") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.goTo(__VLS_ctx.RoutesEnum.SETTINGS);
            } }, ...{ class: ("icon") }, ...{ class: (({ active: __VLS_ctx.route.path === __VLS_ctx.RoutesEnum.SETTINGS })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ id: ("settings"), ...{ class: ("bi bi-gear-fill") }, });
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-house-fill'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-device-ssd-fill'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-plus-circle-fill'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-list-task'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-gear-fill'];
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
            RoutesEnum: RoutesEnum,
            useAuhtStore: useAuhtStore,
            UserRolEnum: UserRolEnum,
            route: route,
            goTo: goTo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
