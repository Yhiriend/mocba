import { computed } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    percentage: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100,
    },
});
const radius = 45; // Radio del círculo
const circumference = 2 * Math.PI * radius; // Circunferencia del círculo
const offset = computed(() => {
    return circumference - (props.percentage / 100) * circumference; // Calcula el offset basado en el porcentaje
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        percentage: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 100,
        },
    },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("circular-progress-bar") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("circular-progress") }, viewBox: ("0 0 100 100"), ...{ style: (({ transform: `rotate(-90deg)` })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.circle)({ ...{ class: ("circular-progress-bg") }, cx: ("50"), cy: ("50"), r: ("45"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.circle)({ ...{ class: ("circular-progress-fg") }, cx: ("50"), cy: ("50"), r: ("45"), "stroke-dasharray": ((__VLS_ctx.circumference)), "stroke-dashoffset": ((__VLS_ctx.offset)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("percentage") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    (__VLS_ctx.percentage);
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
    __VLS_styleScopedClasses['circular-progress-bar'];
    __VLS_styleScopedClasses['circular-progress'];
    __VLS_styleScopedClasses['circular-progress-bg'];
    __VLS_styleScopedClasses['circular-progress-fg'];
    __VLS_styleScopedClasses['percentage'];
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
            circumference: circumference,
            offset: offset,
        };
    },
    props: {
        percentage: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 100,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        percentage: {
            type: Number,
            required: true,
            validator: (value) => value >= 0 && value <= 100,
        },
    },
});
;
