import { defineModel } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineOptions, withDefaults, } = await import('vue');
const model = defineModel();
const __VLS_props = defineProps({
    isLoadingData: Boolean,
    id: String,
    type: String,
    placeholder: String,
    required: Boolean,
    icon: String,
    readonly: {
        type: Boolean,
        default: false,
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isLoadingData: Boolean,
        id: String,
        type: String,
        placeholder: String,
        required: Boolean,
        icon: String,
        readonly: {
            type: Boolean,
            default: false,
        },
    },
    __typeEmits: {},
});
;
let __VLS_functionalComponentProps;
const __VLS_defaults = {};
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
    if (__VLS_ctx.isLoadingData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loading") }, });
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field-container") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((__VLS_ctx.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: (('bi bi-' + __VLS_ctx.icon)) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ readonly: ((__VLS_ctx.readonly)), type: ((__VLS_ctx.type)), id: ((__VLS_ctx.id)), placeholder: ((__VLS_ctx.placeholder)), required: ((__VLS_ctx.required)), });
        (__VLS_ctx.model);
    }
    __VLS_styleScopedClasses['loading'];
    __VLS_styleScopedClasses['field-container'];
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
            model: model,
        };
    },
    __typeEmits: {},
    props: {
        ...{},
        ...{
            isLoadingData: Boolean,
            id: String,
            type: String,
            placeholder: String,
            required: Boolean,
            icon: String,
            readonly: {
                type: Boolean,
                default: false,
            },
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: {
        ...{},
        ...{
            isLoadingData: Boolean,
            id: String,
            type: String,
            placeholder: String,
            required: Boolean,
            icon: String,
            readonly: {
                type: Boolean,
                default: false,
            },
        },
    },
});
;
