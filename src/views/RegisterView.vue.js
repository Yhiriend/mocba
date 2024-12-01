import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import InputBasic from "../components/InputBasic.vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import toastService from "../services/toast.service";
import { UserRolEnum } from "../models/user.model";
import { generateId } from "../models/id-generator";
import { useAuhtStore } from "../stores/auth.store";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const buttonTextStates = [
    "Verificar llave",
    "Verificando",
    "Registrarse",
    "Registrando",
];
const router = useRouter();
const buttonText = ref(buttonTextStates[0]);
const isLoading = ref(false);
const key = ref("");
const keyExist = ref(false);
const userRol = ref(undefined);
const name = ref("");
const surname = ref("");
const password = ref("");
const username = ref("");
const handleSubmit = () => {
    isLoading.value = true;
    if (buttonText.value === buttonTextStates[0]) {
        buttonText.value = buttonTextStates[1];
        validateKey();
    }
    else {
        buttonText.value = buttonTextStates[3];
        registerNewUser();
    }
};
const handleButtonClick = () => { };
const registerNewUser = () => {
    const id = generateId();
    const user = {
        name: name.value,
        surname: surname.value,
        password: password.value,
        username: username.value,
        role: userRol.value,
        id,
    };
    authService
        .register(user, key.value)
        .then(async (user) => {
        if (user) {
            const token = await authService.generateToken(user);
            useAuhtStore().setUser(user);
            useAuhtStore().setIsAuth(true);
            useAuhtStore().setToken(token ?? "");
            localStorage.setItem("token", token ?? "");
            navigateTo(RoutesEnum.HOME, router);
        }
    })
        .catch(() => {
        toastService.showToast("Error de registro", "Hubo un error al intentar registrarte, intentalo más tarde", "error");
    })
        .finally(() => (isLoading.value = false));
};
const validateKey = () => {
    authService
        .validateKey(key.value)
        .then((type) => {
        if (type === UserRolEnum.ADMIN || type === UserRolEnum.OBSERVER) {
            toastService.showToast("Validación de la llave", "Tu llave fue validada con éxito!", "success");
            userRol.value = type;
            buttonText.value = buttonTextStates[2];
            keyExist.value = true;
        }
        else {
            toastService.showToast("Validación de la llave", "Hubo un error al intentar validar la llave", "error");
            buttonText.value = buttonTextStates[0];
        }
    })
        .catch(() => {
        toastService.showToast("Validación de la llave", "Hubo un error al intentar validar la llave", "error");
        buttonText.value = buttonTextStates[0];
    })
        .finally(() => {
        isLoading.value = false;
    });
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("image-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("responsive-svg") }, src: ("../assets/pattern.svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    if (!__VLS_ctx.keyExist) {
        // @ts-ignore
        [InputBasic, InputBasic,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ type: ("text"), required: ((true)), icon: ("key"), id: ("key"), placeholder: ("Introduce tu llave de registro"), modelValue: ((__VLS_ctx.key)), }));
        const __VLS_1 = __VLS_0({ type: ("text"), required: ((true)), icon: ("key"), id: ("key"), placeholder: ("Introduce tu llave de registro"), modelValue: ((__VLS_ctx.key)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    else {
        // @ts-ignore
        [InputBasic, InputBasic,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ type: ("text"), required: ((true)), icon: ("alphabet-uppercase"), id: ("name"), placeholder: ("Primer nombre"), modelValue: ((__VLS_ctx.name)), }));
        const __VLS_6 = __VLS_5({ type: ("text"), required: ((true)), icon: ("alphabet-uppercase"), id: ("name"), placeholder: ("Primer nombre"), modelValue: ((__VLS_ctx.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        // @ts-ignore
        [InputBasic, InputBasic,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ type: ("text"), required: ((true)), icon: ("alphabet-uppercase"), id: ("surname"), placeholder: ("Primer apellido"), modelValue: ((__VLS_ctx.surname)), }));
        const __VLS_11 = __VLS_10({ type: ("text"), required: ((true)), icon: ("alphabet-uppercase"), id: ("surname"), placeholder: ("Primer apellido"), modelValue: ((__VLS_ctx.surname)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        // @ts-ignore
        [InputBasic, InputBasic,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ type: ("text"), required: ((true)), icon: ("person"), id: ("username"), placeholder: ("Nombre de Usuario"), modelValue: ((__VLS_ctx.username)), }));
        const __VLS_16 = __VLS_15({ type: ("text"), required: ((true)), icon: ("person"), id: ("username"), placeholder: ("Nombre de Usuario"), modelValue: ((__VLS_ctx.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        // @ts-ignore
        [InputBasic, InputBasic,];
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ type: ("text"), required: ((true)), icon: ("shield-lock"), id: ("password"), placeholder: ("Contraseña"), modelValue: ((__VLS_ctx.password)), }));
        const __VLS_21 = __VLS_20({ type: ("text"), required: ((true)), icon: ("shield-lock"), id: ("password"), placeholder: ("Contraseña"), modelValue: ((__VLS_ctx.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.LOGIN, __VLS_ctx.router);
            } }, ...{ style: ({}) }, });
    // @ts-ignore
    [ButtonBasic, ButtonBasic,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ((__VLS_ctx.buttonText)), isLoading: ((__VLS_ctx.isLoading)), }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ((__VLS_ctx.buttonText)), isLoading: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (__VLS_ctx.handleButtonClick)
    };
    let __VLS_27;
    let __VLS_28;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_26);
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['image-container'];
    __VLS_styleScopedClasses['responsive-svg'];
    __VLS_styleScopedClasses['login-container'];
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
            InputBasic: InputBasic,
            navigateTo: navigateTo,
            RoutesEnum: RoutesEnum,
            router: router,
            buttonText: buttonText,
            isLoading: isLoading,
            key: key,
            keyExist: keyExist,
            name: name,
            surname: surname,
            password: password,
            username: username,
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
