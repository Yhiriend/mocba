import { defineEmits, computed } from "vue";
const { defineProps, defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    isEnable: {
        type: Boolean,
        default: true,
    },
    buttonText: {
        type: String,
        required: true,
    },
    buttonType: {
        type: String,
        default: "button", // Valor por defecto es 'button'
        required: true,
    },
    isLoading: {
        type: Boolean,
        default: false, // Valor por defecto es 'false'
    },
    buttonStyle: {
        type: String,
        default: "success", // Valor por defecto
    },
});
const emit = defineEmits();
const handleClick = () => {
    emit("click"); // Emite el evento de clic
};
// Computed para determinar la clase de estilo del botón
const buttonStyleClass = computed(() => {
    switch (props.buttonStyle) {
        case "success":
            return "success";
        case "cancel":
            return "cancel";
        case "danger":
            return "danger";
        case "success-outlined":
            return "success-outlined";
        case "danger-outlined":
            return "danger-outlined";
        case "cancel-outlined":
            return "cancel-outlined";
        default:
            return "";
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isEnable: {
            type: Boolean,
            default: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
        buttonType: {
            type: String,
            default: "button", // Valor por defecto es 'button'
            required: true,
        },
        isLoading: {
            type: Boolean,
            default: false, // Valor por defecto es 'false'
        },
        buttonStyle: {
            type: String,
            default: "success", // Valor por defecto
        },
    },
    __typeEmits: {},
});
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
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.handleClick) }, type: ((__VLS_ctx.buttonType)), ...{ class: ((['button', __VLS_ctx.buttonStyleClass, { down: !__VLS_ctx.isEnable }])) }, });
    if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("loader") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.buttonText);
    __VLS_styleScopedClasses['down'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['loader'];
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
            handleClick: handleClick,
            buttonStyleClass: buttonStyleClass,
        };
    },
    __typeEmits: {},
    props: {
        isEnable: {
            type: Boolean,
            default: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
        buttonType: {
            type: String,
            default: "button", // Valor por defecto es 'button'
            required: true,
        },
        isLoading: {
            type: Boolean,
            default: false, // Valor por defecto es 'false'
        },
        buttonStyle: {
            type: String,
            default: "success", // Valor por defecto
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: {
        isEnable: {
            type: Boolean,
            default: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
        buttonType: {
            type: String,
            default: "button", // Valor por defecto es 'button'
            required: true,
        },
        isLoading: {
            type: Boolean,
            default: false, // Valor por defecto es 'false'
        },
        buttonStyle: {
            type: String,
            default: "success", // Valor por defecto
        },
    },
});
;
