import { computed, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import { useRoute } from "vue-router";
import { getRouteName } from "./router/navigate.helper";
import { RoutesEnum } from "./router/routes.enum";
import { useDemoStore } from "./stores/demo.store";
import { USERS } from "./models/constants/demo";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const demoStore = useDemoStore();
const route = useRoute();
const isNavEnable = computed(() => {
    return (route.name !== getRouteName(RoutesEnum.LOGIN) &&
        route.name !== getRouteName(RoutesEnum.REGISTER));
});
onMounted(() => {
    demoStore.setUserList(USERS);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    if (__VLS_ctx.isNavEnable) {
        // @ts-ignore
        [NavBar, NavBar,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    }
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
            NavBar: NavBar,
            isNavEnable: isNavEnable,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;