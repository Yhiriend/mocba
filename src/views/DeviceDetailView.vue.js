import { onMounted, ref } from "vue";
import ButtonBasic from "../components/ButtonBasic.vue";
import CircularProgressBar from "../components/CircularProgressBar.vue";
import { useRoute, useRouter } from "vue-router";
import deviceService from "../services/device.service";
import LoaderSpinner from "../components/LoaderSpinner.vue";
import InputBasic from "../components/InputBasic.vue";
import { navigateBefore } from "../router/navigate.helper";
import alertService from "../services/alert.service";
import { useAuhtStore } from "../stores/auth.store";
import toastService from "../services/toast.service";
import { UserRolEnum } from "../models/user.model";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const route = useRoute();
const isLoading = ref(false);
const isLoadingDeviceData = ref(false);
const deviceData = ref();
const deviceName = ref("");
const deviceCriticChargeLevel = ref(0);
const deviceCriticTempLevel = ref(0);
const desvinculateOnClick = () => {
    alertService.showAlert("Desvincular", "No volverás a ver el estado ni seguirás recibiendo notificaciones de alerta de este dispositivo.", "warning", (result) => {
        if (result.isConfirmed) {
            const deviceId = route.params.id;
            isLoading.value = true;
            deviceService.desvinculateDevice(deviceId).then(() => {
                isLoading.value = false;
                navigateBefore(router);
            });
        }
        else {
            console.log("El usuario canceló");
        }
    });
};
const handleButtonClick = () => { };
const handleSubmit = async () => {
    const device = {
        ...deviceData.value,
        name: deviceName.value,
        criticChargeLevel: deviceCriticChargeLevel.value,
        criticTemperatureLevel: deviceCriticTempLevel.value,
    };
    try {
        isLoading.value = true;
        await deviceService.updateDevice(device.id, device);
        toastService.showToast("Actualización exitosa!", "Tu dispositivo ha sido actualizado", "success");
    }
    catch (error) {
        console.error(error);
    }
    finally {
        isLoading.value = false;
    }
};
const getDeviceData = async () => {
    const deviceId = route.params.id;
    deviceService
        .getDeviceById(deviceId)
        .then((device) => {
        if (device) {
            deviceData.value = device;
            deviceName.value = device.name;
            deviceCriticChargeLevel.value = device.criticChargeLevel;
            deviceCriticTempLevel.value = device.criticTemperatureLevel;
        }
    })
        .finally(() => {
        isLoadingDeviceData.value = false;
    });
};
onMounted(() => {
    isLoadingDeviceData.value = true;
    getDeviceData();
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
    __VLS_styleScopedClasses['current-state'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['temp'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['temp'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateBefore(__VLS_ctx.router);
            } }, ...{ class: ("bi bi-chevron-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("current-state") }, });
    // @ts-ignore
    [LoaderSpinner, LoaderSpinner,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(LoaderSpinner, new LoaderSpinner({ isLoading: ((__VLS_ctx.isLoadingDeviceData)), }));
    const __VLS_1 = __VLS_0({ isLoading: ((__VLS_ctx.isLoadingDeviceData)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    if (!__VLS_ctx.isLoadingDeviceData) {
        // @ts-ignore
        [CircularProgressBar,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(CircularProgressBar, new CircularProgressBar({ percentage: ((__VLS_ctx.deviceData?.charge ?? 0)), }));
        const __VLS_6 = __VLS_5({ percentage: ((__VLS_ctx.deviceData?.charge ?? 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    if (!__VLS_ctx.isLoadingDeviceData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content temp") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.deviceData?.temperature);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.deviceData?.voltage);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.deviceData?.humidity);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    // @ts-ignore
    [InputBasic, InputBasic,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("text"), required: ((true)), icon: ("device-ssd-fill"), id: ("deviceName"), placeholder: ("Nombre del dispositivo"), modelValue: ((__VLS_ctx.deviceName)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }));
    const __VLS_11 = __VLS_10({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("text"), required: ((true)), icon: ("device-ssd-fill"), id: ("deviceName"), placeholder: ("Nombre del dispositivo"), modelValue: ((__VLS_ctx.deviceName)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    // @ts-ignore
    [InputBasic, InputBasic,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("number"), required: ((true)), icon: ("lightning-charge-fill"), id: ("chargelimit"), placeholder: ("Ingresa el límite en %"), modelValue: ((__VLS_ctx.deviceCriticChargeLevel)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }));
    const __VLS_16 = __VLS_15({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("number"), required: ((true)), icon: ("lightning-charge-fill"), id: ("chargelimit"), placeholder: ("Ingresa el límite en %"), modelValue: ((__VLS_ctx.deviceCriticChargeLevel)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    // @ts-ignore
    [InputBasic, InputBasic,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(InputBasic, new InputBasic({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("number"), required: ((true)), icon: ("thermometer-half"), id: ("temlimit"), placeholder: ("Ingresa el límite en %"), modelValue: ((__VLS_ctx.deviceCriticTempLevel)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }));
    const __VLS_21 = __VLS_20({ readonly: ((!(__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN))), type: ("number"), required: ((true)), icon: ("thermometer-half"), id: ("temlimit"), placeholder: ("Ingresa el límite en %"), modelValue: ((__VLS_ctx.deviceCriticTempLevel)), isLoadingData: ((__VLS_ctx.isLoadingDeviceData)), }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    if (__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN) {
        // @ts-ignore
        [ButtonBasic, ButtonBasic,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, ...{ class: ("button-submit") }, buttonText: ("Desvincular dispositivo"), isLoading: ((__VLS_ctx.isLoading)), isEnable: ((!__VLS_ctx.isLoadingDeviceData)), buttonStyle: ("success-outlined"), }));
        const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, ...{ class: ("button-submit") }, buttonText: ("Desvincular dispositivo"), isLoading: ((__VLS_ctx.isLoading)), isEnable: ((!__VLS_ctx.isLoadingDeviceData)), buttonStyle: ("success-outlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        let __VLS_30;
        const __VLS_31 = {
            onClick: (__VLS_ctx.desvinculateOnClick)
        };
        let __VLS_27;
        let __VLS_28;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_26);
    }
    if (__VLS_ctx.useAuhtStore().getUserState.role === __VLS_ctx.UserRolEnum.ADMIN) {
        // @ts-ignore
        [ButtonBasic, ButtonBasic,];
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(ButtonBasic, new ButtonBasic({ ...{ 'onClick': {} }, ...{ class: ("button-submit") }, buttonType: ("submit"), buttonText: ("Guardar cambios"), isLoading: ((__VLS_ctx.isLoading)), isEnable: ((!__VLS_ctx.isLoadingDeviceData)), buttonStyle: ("success"), }));
        const __VLS_33 = __VLS_32({ ...{ 'onClick': {} }, ...{ class: ("button-submit") }, buttonType: ("submit"), buttonText: ("Guardar cambios"), isLoading: ((__VLS_ctx.isLoading)), isEnable: ((!__VLS_ctx.isLoadingDeviceData)), buttonStyle: ("success"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        let __VLS_37;
        const __VLS_38 = {
            onClick: (__VLS_ctx.handleButtonClick)
        };
        let __VLS_34;
        let __VLS_35;
        const __VLS_36 = __VLS_pickFunctionalComponentCtx(ButtonBasic, __VLS_33);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['form-wrapper'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['bi-chevron-left'];
    __VLS_styleScopedClasses['current-state'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['temp'];
    __VLS_styleScopedClasses['button-submit'];
    __VLS_styleScopedClasses['button-submit'];
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
            CircularProgressBar: CircularProgressBar,
            LoaderSpinner: LoaderSpinner,
            InputBasic: InputBasic,
            navigateBefore: navigateBefore,
            useAuhtStore: useAuhtStore,
            UserRolEnum: UserRolEnum,
            router: router,
            isLoading: isLoading,
            isLoadingDeviceData: isLoadingDeviceData,
            deviceData: deviceData,
            deviceName: deviceName,
            deviceCriticChargeLevel: deviceCriticChargeLevel,
            deviceCriticTempLevel: deviceCriticTempLevel,
            desvinculateOnClick: desvinculateOnClick,
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
