import { onMounted, ref, watch } from "vue";
import { navigateTo } from "../router/navigate.helper";
import { RoutesEnum } from "../router/routes.enum";
import { useRouter } from "vue-router";
import CircularProgressBar from "./CircularProgressBar.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const cardParams = ref();
const cardData = ref();
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    params: {
        type: Object,
        required: true,
    },
});
watch(props, (newvalue) => {
    cardData.value = props.data;
});
onMounted(() => {
    if (props.params && props.data) {
        cardParams.value = props.params;
        cardData.value = props.data;
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        data: {
            type: Object,
            required: true,
        },
        params: {
            type: Object,
            required: true,
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
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    // @ts-ignore
    [CircularProgressBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CircularProgressBar, new CircularProgressBar({ percentage: ((__VLS_ctx.cardData?.charge ?? 0)), }));
    const __VLS_1 = __VLS_0({ percentage: ((__VLS_ctx.cardData?.charge ?? 0)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("content name") }, });
    (__VLS_ctx.cardData?.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("content temp") }, });
    (__VLS_ctx.cardData?.temperature?.toFixed(2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("content volt") }, });
    (__VLS_ctx.cardData?.voltage?.toFixed(2));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.navigateTo(__VLS_ctx.RoutesEnum.DEVICE_DETAIL, __VLS_ctx.router, __VLS_ctx.cardParams);
            } }, ...{ class: ("content more") }, });
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['name'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['temp'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['volt'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['more'];
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
            navigateTo: navigateTo,
            RoutesEnum: RoutesEnum,
            CircularProgressBar: CircularProgressBar,
            router: router,
            cardParams: cardParams,
            cardData: cardData,
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
        params: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
        params: {
            type: Object,
            required: true,
        },
    },
});
;
