import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import { useAuhtStore } from "../stores/auth.store";
import toastService from "../services/toast.service";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const handleSubmit = () => {
    isLoading.value = true;
    authService
        .login(username.value, password.value)
        .then(async (user) => {
        if (user) {
            const token = await authService.generateToken(user);
            console.log("init token", token);
            useAuhtStore().setUser(user);
            useAuhtStore().setIsAuth(true);
            useAuhtStore().setToken(token ?? "");
            localStorage.setItem("token", token ?? "");
            router.push(RoutesEnum.HOME);
        }
    })
        .catch(() => {
        toastService.showToast("Credenciales inválidas", "Tus credenciales son incorrectas", "error");
    })
        .finally(() => {
        isLoading.value = false;
    });
};
const handleButtonClick = () => { };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("responsive-svg") }, src: ("../assets/pattern.svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("username"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-person") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("username"), value: ((__VLS_ctx.username)), placeholder: ("Introduce tu nombre de usuario"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-shield-lock") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("password"), value: ((__VLS_ctx.password)), placeholder: ("Introduce tu contraseña"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.REGISTER, __VLS_ctx.router);
            } }, ...{ style: ({}) }, });
    // @ts-ignore
    [ButtonBasic, ButtonBasic,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ("Entrar"), isLoading: ((__VLS_ctx.isLoading)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ("Entrar"), isLoading: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (__VLS_ctx.handleButtonClick)
    };
    let __VLS_2;
    let __VLS_3;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_1);
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['responsive-svg'];
    __VLS_styleScopedClasses['login-container'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-person'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-shield-lock'];
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
            ButtonBasic: ButtonBasic,
            navigateTo: navigateTo,
            RoutesEnum: RoutesEnum,
            router: router,
            isLoading: isLoading,
            username: username,
            password: password,
            handleSubmit: handleSubmit,
            handleButtonClick: handleButtonClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
