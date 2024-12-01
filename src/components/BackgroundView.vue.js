export default (await import('vue')).defineComponent({
    name: "IconPattern",
    data() {
        return {
            icons: [
                "bi bi-front",
                "bi bi-globe-europe-africa",
                "bi bi-graph-up-arrow",
                "bi bi-mask",
                "bi bi-percent",
                "bi bi-stack",
                "bi bi-battery-charging",
                "bi bi-alarm-fill",
                "bi bi-backpack-fill",
                "bi bi-bandaid-fill",
                "bi bi-binoculars-fill",
            ],
        };
    },
});
;
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
    __VLS_styleScopedClasses['icon-item'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-pattern") }, });
    for (const [icon, index] of __VLS_getVForSourceType((__VLS_ctx.icons))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-item") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((icon)) }, ...{ class: ("bi") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-pattern2") }, });
    for (const [icon, index] of __VLS_getVForSourceType((__VLS_ctx.icons))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-item") }, key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ((icon)) }, ...{ class: ("bi") }, });
    }
    __VLS_styleScopedClasses['icon-pattern'];
    __VLS_styleScopedClasses['icon-item'];
    __VLS_styleScopedClasses['bi'];
    __VLS_styleScopedClasses['icon-pattern2'];
    __VLS_styleScopedClasses['icon-item'];
    __VLS_styleScopedClasses['bi'];
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
let __VLS_self;
