import { onMounted, ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import { useAuhtStore } from "../stores/auth.store";
import { useRouter } from "vue-router";
import authService from "../services/auth.service";
import toastService from "../services/toast.service";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import alertService from "../services/alert.service";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const auhtStore = useAuhtStore();
const isLoading = ref(false);
const username = ref("");
const password = ref("");
const name = ref("");
const surname = ref("");
const userData = auhtStore.getUserState;
const handleButtonClick = () => { };
const handleSubmit = async () => {
    isLoading.value = true;
    const user = {
        ...userData,
        username: username.value,
        name: name.value,
        surname: surname.value,
        password: password.value === "" ? userData.password : password.value,
    };
    try {
        await authService.updateUser(userData.id, user);
        toastService.showToast("Actualización exitosa!", "Tus datos personales han sido actualizados", "success");
    }
    catch (error) {
        console.error(error);
        toastService.showToast("Error de actualización", "Los cambios no se guardaron correctamente", "error");
    }
    finally {
        isLoading.value = false;
    }
};
const handleCloseSessionClick = () => {
    alertService.showAlert("Cierre de sesión", "Estas seguro de querer cerrar la sesión?", "question", (result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            navigateTo(RoutesEnum.LOGIN, router);
        }
    });
};
onMounted(() => {
    username.value = userData.username;
    name.value = userData.name;
    surname.value = userData.surname;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-person-circle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-alphabet-uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.name)), placeholder: ("Ingresa tu nombre"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("surname"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-alphabet-uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("surname"), value: ((__VLS_ctx.surname)), placeholder: ("Ingresa tu apellido"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("username"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-person") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("username"), value: ((__VLS_ctx.username)), placeholder: ("Ingresa un nombre de usuario"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-shield-lock") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("password"), value: ((__VLS_ctx.password)), placeholder: ("Cambia tu contraseña (opcional)"), });
    // @ts-ignore
    [ButtonBasic, ButtonBasic,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, ...{ style: ({}) }, buttonType: ("submit"), buttonText: ("Guardar cambios"), isLoading: ((__VLS_ctx.isLoading)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onClick': {} }, ...{ style: ({}) }, buttonType: ("submit"), buttonText: ("Guardar cambios"), isLoading: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (__VLS_ctx.handleButtonClick)
    };
    let __VLS_2;
    let __VLS_3;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_1);
    // @ts-ignore
    [ButtonBasic, ButtonBasic,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, ...{ style: ({}) }, buttonText: ("Cerrar sesión"), buttonStyle: ("danger"), isLoading: ((__VLS_ctx.isLoading)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ style: ({}) }, buttonText: ("Cerrar sesión"), buttonStyle: ("danger"), isLoading: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.handleCloseSessionClick)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_8);
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['form-wrapper'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-person-circle'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-alphabet-uppercase'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-alphabet-uppercase'];
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
            isLoading: isLoading,
            username: username,
            password: password,
            name: name,
            surname: surname,
            handleButtonClick: handleButtonClick,
            handleSubmit: handleSubmit,
            handleCloseSessionClick: handleCloseSessionClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
