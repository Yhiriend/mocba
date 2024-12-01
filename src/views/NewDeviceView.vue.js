import { ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import deviceService from "../services/device.service";
import toastService from "../services/toast.service";
import { navigateTo } from "../router/navigate.helper";
import { useRouter } from "vue-router";
import { RoutesEnum } from "../router/routes.enum";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const isLoading = ref(false);
const key = ref("");
const name = ref("");
const charge = ref("");
const temperature = ref("");
const handleButtonClick = () => { };
const handleSubmit = async () => {
    isLoading.value = true;
    const device = {
        id: key.value,
        name: name.value,
        charge: 100,
        temperature: 25,
        criticChargeLevel: Number(temperature.value) ?? 10,
        criticTemperatureLevel: Number(charge.value) ?? 40,
        isActive: true,
        showAtHome: false,
        voltage: 0,
        humidity: 0,
    };
    try {
        await deviceService.registerDevice(device, key.value);
        toastService.showToast("Registro exitoso!", "Has agregado un nuevo dispositivo", "success");
        navigateTo(RoutesEnum.DEVICES, router);
    }
    catch (error) {
        console.error(error);
        toastService.showToast("Falló la vinculación", "No se pudo vincular el dispositivo", "error");
    }
    finally {
        isLoading.value = false;
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-device-ssd-fill") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("llave"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-key") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("llave"), value: ((__VLS_ctx.key)), placeholder: ("Llave del dispositivo"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-alphabet-uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("name"), value: ((__VLS_ctx.name)), placeholder: ("Nombre del dispositivo"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("charge"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-lightning-charge-fill") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), id: ("charge"), placeholder: ("Nivel de carga (%)"), required: (true), });
    (__VLS_ctx.charge);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("temperature"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("bi bi-thermometer-half") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), id: ("temperature"), placeholder: ("Límite de temperatura"), required: (true), });
    (__VLS_ctx.temperature);
    // @ts-ignore
    [ButtonBasic, ButtonBasic,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ("Vincular"), isLoading: ((__VLS_ctx.isLoading)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onClick': {} }, buttonType: ("submit"), buttonText: ("Vincular"), isLoading: ((__VLS_ctx.isLoading)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClick: (__VLS_ctx.handleButtonClick)
    };
    let __VLS_2;
    let __VLS_3;
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['form-wrapper'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-device-ssd-fill'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-key'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-alphabet-uppercase'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-lightning-charge-fill'];
    __VLS_styleScopedClasses['field-container'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-thermometer-half'];
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
            key: key,
            name: name,
            charge: charge,
            temperature: temperature,
            handleButtonClick: handleButtonClick,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
