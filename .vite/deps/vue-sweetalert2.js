import "./chunk-PZ5AY32C.js";

// node_modules/vue-sweetalert2/dist/vue-sweetalert.mjs
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ai(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var yt = { exports: {} };
(function(x, T) {
  (function(K, O) {
    x.exports = O();
  })(M, function() {
    const K = "SweetAlert2:", O = (e) => {
      const t = [];
      for (let n = 0; n < e.length; n++)
        t.indexOf(e[n]) === -1 && t.push(e[n]);
      return t;
    }, B = (e) => e.charAt(0).toUpperCase() + e.slice(1), g = (e) => Array.prototype.slice.call(e), d = (e) => {
      console.warn("".concat(K, " ").concat(typeof e == "object" ? e.join(" ") : e));
    }, H = (e) => {
      console.error("".concat(K, " ").concat(e));
    }, Ie = [], wt = (e) => {
      Ie.includes(e) || (Ie.push(e), d(e));
    }, Ct = (e, t) => {
      wt('"'.concat(e, '" is deprecated and will be removed in the next major release. Please use "').concat(t, '" instead.'));
    }, ne = (e) => typeof e == "function" ? e() : e, fe = (e) => e && typeof e.toPromise == "function", _ = (e) => fe(e) ? e.toPromise() : Promise.resolve(e), pe = (e) => e && Promise.resolve(e) === e, q = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: false,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: true,
      heightAuto: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: true,
      keydownListenerCapture: false,
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: true,
      reverseButtons: false,
      focusConfirm: true,
      focusDeny: false,
      focusCancel: false,
      returnFocus: true,
      showCloseButton: false,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: false,
      showLoaderOnDeny: false,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: false,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: true,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: false,
      validationMessage: void 0,
      grow: false,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: true
    }, vt = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], Pt = {}, At = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], Le = (e) => Object.prototype.hasOwnProperty.call(q, e), Me = (e) => vt.indexOf(e) !== -1, ge = (e) => Pt[e], kt = (e) => {
      Le(e) || d('Unknown parameter "'.concat(e, '"'));
    }, Bt = (e) => {
      At.includes(e) && d('The parameter "'.concat(e, '" is incompatible with toasts'));
    }, Et = (e) => {
      ge(e) && Ct(e, ge(e));
    }, St = (e) => {
      !e.backdrop && e.allowOutsideClick && d('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      for (const t in e)
        kt(t), e.toast && Bt(t), Et(t);
    }, xt = "swal2-", He = (e) => {
      const t = {};
      for (const n in e)
        t[e[n]] = xt + e[n];
      return t;
    }, i = He(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]), Y = He(["success", "warning", "info", "question", "error"]), h = () => document.body.querySelector(".".concat(i.container)), Z = (e) => {
      const t = h();
      return t ? t.querySelector(e) : null;
    }, P = (e) => Z(".".concat(e)), u = () => P(i.popup), $ = () => P(i.icon), je = () => P(i.title), oe = () => P(i["html-container"]), De = () => P(i.image), Ve = () => P(i["progress-steps"]), ie = () => P(i["validation-message"]), k = () => Z(".".concat(i.actions, " .").concat(i.confirm)), I = () => Z(".".concat(i.actions, " .").concat(i.deny)), Tt = () => P(i["input-label"]), F = () => Z(".".concat(i.loader)), j = () => Z(".".concat(i.actions, " .").concat(i.cancel)), J = () => P(i.actions), qe = () => P(i.footer), se = () => P(i["timer-progress-bar"]), he = () => P(i.close), Ot = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`, me = () => {
      const e = g(u().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n, o) => {
        const s = parseInt(n.getAttribute("tabindex")), r = parseInt(o.getAttribute("tabindex"));
        return s > r ? 1 : s < r ? -1 : 0;
      }), t = g(u().querySelectorAll(Ot)).filter((n) => n.getAttribute("tabindex") !== "-1");
      return O(e.concat(t)).filter((n) => C(n));
    }, be = () => S(document.body, i.shown) && !S(document.body, i["toast-shown"]) && !S(document.body, i["no-backdrop"]), re = () => u() && S(u(), i.toast), It = () => u().hasAttribute("data-loading"), W = {
      previousBodyPadding: null
    }, m = (e, t) => {
      if (e.textContent = "", t) {
        const o = new DOMParser().parseFromString(t, "text/html");
        g(o.querySelector("head").childNodes).forEach((s) => {
          e.appendChild(s);
        }), g(o.querySelector("body").childNodes).forEach((s) => {
          e.appendChild(s);
        });
      }
    }, S = (e, t) => {
      if (!t)
        return false;
      const n = t.split(/\s+/);
      for (let o = 0; o < n.length; o++)
        if (!e.classList.contains(n[o]))
          return false;
      return true;
    }, Lt = (e, t) => {
      g(e.classList).forEach((n) => {
        !Object.values(i).includes(n) && !Object.values(Y).includes(n) && !Object.values(t.showClass).includes(n) && e.classList.remove(n);
      });
    }, A = (e, t, n) => {
      if (Lt(e, t), t.customClass && t.customClass[n]) {
        if (typeof t.customClass[n] != "string" && !t.customClass[n].forEach)
          return d("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(typeof t.customClass[n], '"'));
        a(e, t.customClass[n]);
      }
    }, ye = (e, t) => {
      if (!t)
        return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(".".concat(i.popup, " > .").concat(i[t]));
        case "checkbox":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.checkbox, " input"));
        case "radio":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:checked")) || e.querySelector(".".concat(i.popup, " > .").concat(i.radio, " input:first-child"));
        case "range":
          return e.querySelector(".".concat(i.popup, " > .").concat(i.range, " input"));
        default:
          return e.querySelector(".".concat(i.popup, " > .").concat(i.input));
      }
    }, Fe = (e) => {
      if (e.focus(), e.type !== "file") {
        const t = e.value;
        e.value = "", e.value = t;
      }
    }, We = (e, t, n) => {
      !e || !t || (typeof t == "string" && (t = t.split(/\s+/).filter(Boolean)), t.forEach((o) => {
        Array.isArray(e) ? e.forEach((s) => {
          n ? s.classList.add(o) : s.classList.remove(o);
        }) : n ? e.classList.add(o) : e.classList.remove(o);
      }));
    }, a = (e, t) => {
      We(e, t, true);
    }, E = (e, t) => {
      We(e, t, false);
    }, L = (e, t) => {
      const n = g(e.childNodes);
      for (let o = 0; o < n.length; o++)
        if (S(n[o], t))
          return n[o];
    }, G = (e, t, n) => {
      n === "".concat(parseInt(n)) && (n = parseInt(n)), n || parseInt(n) === 0 ? e.style[t] = typeof n == "number" ? "".concat(n, "px") : n : e.style.removeProperty(t);
    }, p = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
      e.style.display = t;
    }, b = (e) => {
      e.style.display = "none";
    }, Re = (e, t, n, o) => {
      const s = e.querySelector(t);
      s && (s.style[n] = o);
    }, ce = (e, t, n) => {
      t ? p(e, n) : b(e);
    }, C = (e) => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length)), Mt = () => !C(k()) && !C(I()) && !C(j()), Ue = (e) => e.scrollHeight > e.clientHeight, Ne = (e) => {
      const t = window.getComputedStyle(e), n = parseFloat(t.getPropertyValue("animation-duration") || "0"), o = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return n > 0 || o > 0;
    }, we = function(e) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      const n = se();
      C(n) && (t && (n.style.transition = "none", n.style.width = "100%"), setTimeout(() => {
        n.style.transition = "width ".concat(e / 1e3, "s linear"), n.style.width = "0%";
      }, 10));
    }, Ht = () => {
      const e = se(), t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), e.style.width = "100%";
      const n = parseInt(window.getComputedStyle(e).width), o = t / n * 100;
      e.style.removeProperty("transition"), e.style.width = "".concat(o, "%");
    }, ze = () => typeof window > "u" || typeof document > "u", jt = 100, c = {}, Dt = () => {
      c.previousActiveElement && c.previousActiveElement.focus ? (c.previousActiveElement.focus(), c.previousActiveElement = null) : document.body && document.body.focus();
    }, Vt = (e) => new Promise((t) => {
      if (!e)
        return t();
      const n = window.scrollX, o = window.scrollY;
      c.restoreFocusTimeout = setTimeout(() => {
        Dt(), t();
      }, jt), window.scrollTo(n, o);
    }), qt = `
 <div aria-labelledby="`.concat(i.title, '" aria-describedby="').concat(i["html-container"], '" class="').concat(i.popup, `" tabindex="-1">
   <button type="button" class="`).concat(i.close, `"></button>
   <ul class="`).concat(i["progress-steps"], `"></ul>
   <div class="`).concat(i.icon, `"></div>
   <img class="`).concat(i.image, `" />
   <h2 class="`).concat(i.title, '" id="').concat(i.title, `"></h2>
   <div class="`).concat(i["html-container"], '" id="').concat(i["html-container"], `"></div>
   <input class="`).concat(i.input, `" />
   <input type="file" class="`).concat(i.file, `" />
   <div class="`).concat(i.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(i.select, `"></select>
   <div class="`).concat(i.radio, `"></div>
   <label for="`).concat(i.checkbox, '" class="').concat(i.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(i.label, `"></span>
   </label>
   <textarea class="`).concat(i.textarea, `"></textarea>
   <div class="`).concat(i["validation-message"], '" id="').concat(i["validation-message"], `"></div>
   <div class="`).concat(i.actions, `">
     <div class="`).concat(i.loader, `"></div>
     <button type="button" class="`).concat(i.confirm, `"></button>
     <button type="button" class="`).concat(i.deny, `"></button>
     <button type="button" class="`).concat(i.cancel, `"></button>
   </div>
   <div class="`).concat(i.footer, `"></div>
   <div class="`).concat(i["timer-progress-bar-container"], `">
     <div class="`).concat(i["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""), Ft = () => {
      const e = h();
      return e ? (e.remove(), E([document.documentElement, document.body], [i["no-backdrop"], i["toast-shown"], i["has-column"]]), true) : false;
    }, D = () => {
      c.currentInstance.resetValidationMessage();
    }, Wt = () => {
      const e = u(), t = L(e, i.input), n = L(e, i.file), o = e.querySelector(".".concat(i.range, " input")), s = e.querySelector(".".concat(i.range, " output")), r = L(e, i.select), f = e.querySelector(".".concat(i.checkbox, " input")), v = L(e, i.textarea);
      t.oninput = D, n.onchange = D, r.onchange = D, f.onchange = D, v.oninput = D, o.oninput = () => {
        D(), s.value = o.value;
      }, o.onchange = () => {
        D(), o.nextSibling.value = o.value;
      };
    }, Rt = (e) => typeof e == "string" ? document.querySelector(e) : e, Ut = (e) => {
      const t = u();
      t.setAttribute("role", e.toast ? "alert" : "dialog"), t.setAttribute("aria-live", e.toast ? "polite" : "assertive"), e.toast || t.setAttribute("aria-modal", "true");
    }, Nt = (e) => {
      window.getComputedStyle(e).direction === "rtl" && a(h(), i.rtl);
    }, zt = (e) => {
      const t = Ft();
      if (ze()) {
        H("SweetAlert2 requires document to initialize");
        return;
      }
      const n = document.createElement("div");
      n.className = i.container, t && a(n, i["no-transition"]), m(n, qt);
      const o = Rt(e.target);
      o.appendChild(n), Ut(e), Nt(o), Wt();
    }, Ce = (e, t) => {
      e instanceof HTMLElement ? t.appendChild(e) : typeof e == "object" ? Kt(e, t) : e && m(t, e);
    }, Kt = (e, t) => {
      e.jquery ? _t(t, e) : m(t, e.toString());
    }, _t = (e, t) => {
      if (e.textContent = "", 0 in t)
        for (let n = 0; n in t; n++)
          e.appendChild(t[n].cloneNode(true));
      else
        e.appendChild(t.cloneNode(true));
    }, X = (() => {
      if (ze())
        return false;
      const e = document.createElement("div"), t = {
        WebkitAnimation: "webkitAnimationEnd",
        // Chrome, Safari and Opera
        animation: "animationend"
        // Standard syntax
      };
      for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n) && typeof e.style[n] < "u")
          return t[n];
      return false;
    })(), Yt = () => {
      const e = document.createElement("div");
      e.className = i["scrollbar-measure"], document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, Zt = (e, t) => {
      const n = J(), o = F();
      !t.showConfirmButton && !t.showDenyButton && !t.showCancelButton ? b(n) : p(n), A(n, t, "actions"), $t(n, o, t), m(o, t.loaderHtml), A(o, t, "loader");
    };
    function $t(e, t, n) {
      const o = k(), s = I(), r = j();
      ve(o, "confirm", n), ve(s, "deny", n), ve(r, "cancel", n), Jt(o, s, r, n), n.reverseButtons && (n.toast ? (e.insertBefore(r, o), e.insertBefore(s, o)) : (e.insertBefore(r, t), e.insertBefore(s, t), e.insertBefore(o, t)));
    }
    function Jt(e, t, n, o) {
      if (!o.buttonsStyling)
        return E([e, t, n], i.styled);
      a([e, t, n], i.styled), o.confirmButtonColor && (e.style.backgroundColor = o.confirmButtonColor, a(e, i["default-outline"])), o.denyButtonColor && (t.style.backgroundColor = o.denyButtonColor, a(t, i["default-outline"])), o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor, a(n, i["default-outline"]));
    }
    function ve(e, t, n) {
      ce(e, n["show".concat(B(t), "Button")], "inline-block"), m(e, n["".concat(t, "ButtonText")]), e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]), e.className = i[t], A(e, n, "".concat(t, "Button")), a(e, n["".concat(t, "ButtonClass")]);
    }
    function Gt(e, t) {
      typeof t == "string" ? e.style.background = t : t || a([document.documentElement, document.body], i["no-backdrop"]);
    }
    function Xt(e, t) {
      t in i ? a(e, i[t]) : (d('The "position" parameter is not valid, defaulting to "center"'), a(e, i.center));
    }
    function Qt(e, t) {
      if (t && typeof t == "string") {
        const n = "grow-".concat(t);
        n in i && a(e, i[n]);
      }
    }
    const en = (e, t) => {
      const n = h();
      n && (Gt(n, t.backdrop), Xt(n, t.position), Qt(n, t.grow), A(n, t, "container"));
    };
    var l = {
      awaitingPromise: /* @__PURE__ */ new WeakMap(),
      promise: /* @__PURE__ */ new WeakMap(),
      innerParams: /* @__PURE__ */ new WeakMap(),
      domCache: /* @__PURE__ */ new WeakMap()
    };
    const tn = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], nn = (e, t) => {
      const n = u(), o = l.innerParams.get(e), s = !o || t.input !== o.input;
      tn.forEach((r) => {
        const f = i[r], v = L(n, f);
        rn(r, t.inputAttributes), v.className = f, s && b(v);
      }), t.input && (s && on(t), cn(t));
    }, on = (e) => {
      if (!w[e.input])
        return H('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
      const t = Ke(e.input), n = w[e.input](t, e);
      p(n), setTimeout(() => {
        Fe(n);
      });
    }, sn = (e) => {
      for (let t = 0; t < e.attributes.length; t++) {
        const n = e.attributes[t].name;
        ["type", "value", "style"].includes(n) || e.removeAttribute(n);
      }
    }, rn = (e, t) => {
      const n = ye(u(), e);
      if (n) {
        sn(n);
        for (const o in t)
          n.setAttribute(o, t[o]);
      }
    }, cn = (e) => {
      const t = Ke(e.input);
      e.customClass && a(t, e.customClass.input);
    }, Pe = (e, t) => {
      (!e.placeholder || t.inputPlaceholder) && (e.placeholder = t.inputPlaceholder);
    }, Q = (e, t, n) => {
      if (n.inputLabel) {
        e.id = i.input;
        const o = document.createElement("label"), s = i["input-label"];
        o.setAttribute("for", e.id), o.className = s, a(o, n.customClass.inputLabel), o.innerText = n.inputLabel, t.insertAdjacentElement("beforebegin", o);
      }
    }, Ke = (e) => {
      const t = i[e] ? i[e] : i.input;
      return L(u(), t);
    }, w = {};
    w.text = w.email = w.password = w.number = w.tel = w.url = (e, t) => (typeof t.inputValue == "string" || typeof t.inputValue == "number" ? e.value = t.inputValue : pe(t.inputValue) || d('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue, '"')), Q(e, e, t), Pe(e, t), e.type = t.input, e), w.file = (e, t) => (Q(e, e, t), Pe(e, t), e), w.range = (e, t) => {
      const n = e.querySelector("input"), o = e.querySelector("output");
      return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, Q(n, e, t), e;
    }, w.select = (e, t) => {
      if (e.textContent = "", t.inputPlaceholder) {
        const n = document.createElement("option");
        m(n, t.inputPlaceholder), n.value = "", n.disabled = true, n.selected = true, e.appendChild(n);
      }
      return Q(e, e, t), e;
    }, w.radio = (e) => (e.textContent = "", e), w.checkbox = (e, t) => {
      const n = ye(u(), "checkbox");
      n.value = "1", n.id = i.checkbox, n.checked = !!t.inputValue;
      const o = e.querySelector("span");
      return m(o, t.inputPlaceholder), e;
    }, w.textarea = (e, t) => {
      e.value = t.inputValue, Pe(e, t), Q(e, e, t);
      const n = (o) => parseInt(window.getComputedStyle(o).marginLeft) + parseInt(window.getComputedStyle(o).marginRight);
      return setTimeout(() => {
        if ("MutationObserver" in window) {
          const o = parseInt(window.getComputedStyle(u()).width), s = () => {
            const r = e.offsetWidth + n(e);
            r > o ? u().style.width = "".concat(r, "px") : u().style.width = null;
          };
          new MutationObserver(s).observe(e, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
      }), e;
    };
    const ln = (e, t) => {
      const n = oe();
      A(n, t, "htmlContainer"), t.html ? (Ce(t.html, n), p(n, "block")) : t.text ? (n.textContent = t.text, p(n, "block")) : b(n), nn(e, t);
    }, an = (e, t) => {
      const n = qe();
      ce(n, t.footer), t.footer && Ce(t.footer, n), A(n, t, "footer");
    }, un = (e, t) => {
      const n = he();
      m(n, t.closeButtonHtml), A(n, t, "closeButton"), ce(n, t.showCloseButton), n.setAttribute("aria-label", t.closeButtonAriaLabel);
    }, dn = (e, t) => {
      const n = l.innerParams.get(e), o = $();
      if (n && t.icon === n.icon) {
        Ye(o, t), _e(o, t);
        return;
      }
      if (!t.icon && !t.iconHtml)
        return b(o);
      if (t.icon && Object.keys(Y).indexOf(t.icon) === -1)
        return H('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon, '"')), b(o);
      p(o), Ye(o, t), _e(o, t), a(o, t.showClass.icon);
    }, _e = (e, t) => {
      for (const n in Y)
        t.icon !== n && E(e, Y[n]);
      a(e, Y[t.icon]), hn(e, t), fn(), A(e, t, "icon");
    }, fn = () => {
      const e = u(), t = window.getComputedStyle(e).getPropertyValue("background-color"), n = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let o = 0; o < n.length; o++)
        n[o].style.backgroundColor = t;
    }, pn = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`, gn = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`, Ye = (e, t) => {
      e.textContent = "", t.iconHtml ? m(e, Ze(t.iconHtml)) : t.icon === "success" ? m(e, pn) : t.icon === "error" ? m(e, gn) : m(e, Ze({
        question: "?",
        warning: "!",
        info: "i"
      }[t.icon]));
    }, hn = (e, t) => {
      if (t.iconColor) {
        e.style.color = t.iconColor, e.style.borderColor = t.iconColor;
        for (const n of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
          Re(e, n, "backgroundColor", t.iconColor);
        Re(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    }, Ze = (e) => '<div class="'.concat(i["icon-content"], '">').concat(e, "</div>"), mn = (e, t) => {
      const n = De();
      if (!t.imageUrl)
        return b(n);
      p(n, ""), n.setAttribute("src", t.imageUrl), n.setAttribute("alt", t.imageAlt), G(n, "width", t.imageWidth), G(n, "height", t.imageHeight), n.className = i.image, A(n, t, "image");
    }, bn = (e) => {
      const t = document.createElement("li");
      return a(t, i["progress-step"]), m(t, e), t;
    }, yn = (e) => {
      const t = document.createElement("li");
      return a(t, i["progress-step-line"]), e.progressStepsDistance && (t.style.width = e.progressStepsDistance), t;
    }, wn = (e, t) => {
      const n = Ve();
      if (!t.progressSteps || t.progressSteps.length === 0)
        return b(n);
      p(n), n.textContent = "", t.currentProgressStep >= t.progressSteps.length && d("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach((o, s) => {
        const r = bn(o);
        if (n.appendChild(r), s === t.currentProgressStep && a(r, i["active-progress-step"]), s !== t.progressSteps.length - 1) {
          const f = yn(t);
          n.appendChild(f);
        }
      });
    }, Cn = (e, t) => {
      const n = je();
      ce(n, t.title || t.titleText, "block"), t.title && Ce(t.title, n), t.titleText && (n.innerText = t.titleText), A(n, t, "title");
    }, vn = (e, t) => {
      const n = h(), o = u();
      t.toast ? (G(n, "width", t.width), o.style.width = "100%", o.insertBefore(F(), $())) : G(o, "width", t.width), G(o, "padding", t.padding), t.color && (o.style.color = t.color), t.background && (o.style.background = t.background), b(ie()), Pn(o, t);
    }, Pn = (e, t) => {
      e.className = "".concat(i.popup, " ").concat(C(e) ? t.showClass.popup : ""), t.toast ? (a([document.documentElement, document.body], i["toast-shown"]), a(e, i.toast)) : a(e, i.modal), A(e, t, "popup"), typeof t.customClass == "string" && a(e, t.customClass), t.icon && a(e, i["icon-".concat(t.icon)]);
    }, $e = (e, t) => {
      vn(e, t), en(e, t), wn(e, t), dn(e, t), mn(e, t), Cn(e, t), un(e, t), ln(e, t), Zt(e, t), an(e, t), typeof t.didRender == "function" && t.didRender(u());
    }, R = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    }), An = () => {
      g(document.body.children).forEach((t) => {
        t === h() || t.contains(h()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
      });
    }, Je = () => {
      g(document.body.children).forEach((t) => {
        t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
      });
    }, Ge = ["swal-title", "swal-html", "swal-footer"], kn = (e) => {
      const t = typeof e.template == "string" ? document.querySelector(e.template) : e.template;
      if (!t)
        return {};
      const n = t.content;
      return In(n), Object.assign(Bn(n), En(n), Sn(n), xn(n), Tn(n), On(n, Ge));
    }, Bn = (e) => {
      const t = {};
      return g(e.querySelectorAll("swal-param")).forEach((n) => {
        V(n, ["name", "value"]);
        const o = n.getAttribute("name"), s = n.getAttribute("value");
        typeof q[o] == "boolean" && s === "false" && (t[o] = false), typeof q[o] == "object" && (t[o] = JSON.parse(s));
      }), t;
    }, En = (e) => {
      const t = {};
      return g(e.querySelectorAll("swal-button")).forEach((n) => {
        V(n, ["type", "color", "aria-label"]);
        const o = n.getAttribute("type");
        t["".concat(o, "ButtonText")] = n.innerHTML, t["show".concat(B(o), "Button")] = true, n.hasAttribute("color") && (t["".concat(o, "ButtonColor")] = n.getAttribute("color")), n.hasAttribute("aria-label") && (t["".concat(o, "ButtonAriaLabel")] = n.getAttribute("aria-label"));
      }), t;
    }, Sn = (e) => {
      const t = {}, n = e.querySelector("swal-image");
      return n && (V(n, ["src", "width", "height", "alt"]), n.hasAttribute("src") && (t.imageUrl = n.getAttribute("src")), n.hasAttribute("width") && (t.imageWidth = n.getAttribute("width")), n.hasAttribute("height") && (t.imageHeight = n.getAttribute("height")), n.hasAttribute("alt") && (t.imageAlt = n.getAttribute("alt"))), t;
    }, xn = (e) => {
      const t = {}, n = e.querySelector("swal-icon");
      return n && (V(n, ["type", "color"]), n.hasAttribute("type") && (t.icon = n.getAttribute("type")), n.hasAttribute("color") && (t.iconColor = n.getAttribute("color")), t.iconHtml = n.innerHTML), t;
    }, Tn = (e) => {
      const t = {}, n = e.querySelector("swal-input");
      n && (V(n, ["type", "label", "placeholder", "value"]), t.input = n.getAttribute("type") || "text", n.hasAttribute("label") && (t.inputLabel = n.getAttribute("label")), n.hasAttribute("placeholder") && (t.inputPlaceholder = n.getAttribute("placeholder")), n.hasAttribute("value") && (t.inputValue = n.getAttribute("value")));
      const o = e.querySelectorAll("swal-input-option");
      return o.length && (t.inputOptions = {}, g(o).forEach((s) => {
        V(s, ["value"]);
        const r = s.getAttribute("value"), f = s.innerHTML;
        t.inputOptions[r] = f;
      })), t;
    }, On = (e, t) => {
      const n = {};
      for (const o in t) {
        const s = t[o], r = e.querySelector(s);
        r && (V(r, []), n[s.replace(/^swal-/, "")] = r.innerHTML.trim());
      }
      return n;
    }, In = (e) => {
      const t = Ge.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      g(e.children).forEach((n) => {
        const o = n.tagName.toLowerCase();
        t.indexOf(o) === -1 && d("Unrecognized element <".concat(o, ">"));
      });
    }, V = (e, t) => {
      g(e.attributes).forEach((n) => {
        t.indexOf(n.name) === -1 && d(['Unrecognized attribute "'.concat(n.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(t.length ? "Allowed attributes are: ".concat(t.join(", ")) : "To set the value, use HTML within the element.")]);
      });
    };
    var Xe = {
      email: (e, t) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid email address"),
      url: (e, t) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e) ? Promise.resolve() : Promise.resolve(t || "Invalid URL")
    };
    function Ln(e) {
      e.inputValidator || Object.keys(Xe).forEach((t) => {
        e.input === t && (e.inputValidator = Xe[t]);
      });
    }
    function Mn(e) {
      (!e.target || typeof e.target == "string" && !document.querySelector(e.target) || typeof e.target != "string" && !e.target.appendChild) && (d('Target parameter is not valid, defaulting to "body"'), e.target = "body");
    }
    function Hn(e) {
      Ln(e), e.showLoaderOnConfirm && !e.preConfirm && d(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Mn(e), typeof e.title == "string" && (e.title = e.title.split(`
`).join("<br />")), zt(e);
    }
    class jn {
      constructor(t, n) {
        this.callback = t, this.remaining = n, this.running = false, this.start();
      }
      start() {
        return this.running || (this.running = true, this.started = /* @__PURE__ */ new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
      }
      stop() {
        return this.running && (this.running = false, clearTimeout(this.id), this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime()), this.remaining;
      }
      increase(t) {
        const n = this.running;
        return n && this.stop(), this.remaining += t, n && this.start(), this.remaining;
      }
      getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining;
      }
      isRunning() {
        return this.running;
      }
    }
    const Dn = () => {
      W.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (W.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(W.previousBodyPadding + Yt(), "px"));
    }, Vn = () => {
      W.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(W.previousBodyPadding, "px"), W.previousBodyPadding = null);
    }, qn = () => {
      if (
        // @ts-ignore
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !S(document.body, i.iosfix)
      ) {
        const t = document.body.scrollTop;
        document.body.style.top = "".concat(t * -1, "px"), a(document.body, i.iosfix), Wn(), Fn();
      }
    }, Fn = () => {
      const e = navigator.userAgent, t = !!e.match(/iPad/i) || !!e.match(/iPhone/i), n = !!e.match(/WebKit/i);
      t && n && !e.match(/CriOS/i) && u().scrollHeight > window.innerHeight - 44 && (h().style.paddingBottom = "".concat(44, "px"));
    }, Wn = () => {
      const e = h();
      let t;
      e.ontouchstart = (n) => {
        t = Rn(n);
      }, e.ontouchmove = (n) => {
        t && (n.preventDefault(), n.stopPropagation());
      };
    }, Rn = (e) => {
      const t = e.target, n = h();
      return Un(e) || Nn(e) ? false : t === n || !Ue(n) && t.tagName !== "INPUT" && // #1603
      t.tagName !== "TEXTAREA" && // #2266
      !(Ue(oe()) && // #1944
      oe().contains(t));
    }, Un = (e) => e.touches && e.touches.length && e.touches[0].touchType === "stylus", Nn = (e) => e.touches && e.touches.length > 1, zn = () => {
      if (S(document.body, i.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        E(document.body, i.iosfix), document.body.style.top = "", document.body.scrollTop = e * -1;
      }
    }, Qe = 10, Kn = (e) => {
      const t = h(), n = u();
      typeof e.willOpen == "function" && e.willOpen(n);
      const s = window.getComputedStyle(document.body).overflowY;
      Zn(t, n, e), setTimeout(() => {
        _n(t, n);
      }, Qe), be() && (Yn(t, e.scrollbarPadding, s), An()), !re() && !c.previousActiveElement && (c.previousActiveElement = document.activeElement), typeof e.didOpen == "function" && setTimeout(() => e.didOpen(n)), E(t, i["no-transition"]);
    }, et = (e) => {
      const t = u();
      if (e.target !== t)
        return;
      const n = h();
      t.removeEventListener(X, et), n.style.overflowY = "auto";
    }, _n = (e, t) => {
      X && Ne(t) ? (e.style.overflowY = "hidden", t.addEventListener(X, et)) : e.style.overflowY = "auto";
    }, Yn = (e, t, n) => {
      qn(), t && n !== "hidden" && Dn(), setTimeout(() => {
        e.scrollTop = 0;
      });
    }, Zn = (e, t, n) => {
      a(e, n.showClass.backdrop), t.style.setProperty("opacity", "0", "important"), p(t, "grid"), setTimeout(() => {
        a(t, n.showClass.popup), t.style.removeProperty("opacity");
      }, Qe), a([document.documentElement, document.body], i.shown), n.heightAuto && n.backdrop && !n.toast && a([document.documentElement, document.body], i["height-auto"]);
    }, U = (e) => {
      let t = u();
      t || new ue(), t = u();
      const n = F();
      re() ? b($()) : $n(t, e), p(n), t.setAttribute("data-loading", true), t.setAttribute("aria-busy", true), t.focus();
    }, $n = (e, t) => {
      const n = J(), o = F();
      !t && C(k()) && (t = k()), p(n), t && (b(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), a([e, n], i.loading);
    }, Jn = (e, t) => {
      t.input === "select" || t.input === "radio" ? to(e, t) : ["text", "email", "number", "tel", "textarea"].includes(t.input) && (fe(t.inputValue) || pe(t.inputValue)) && (U(k()), no(e, t));
    }, Gn = (e, t) => {
      const n = e.getInput();
      if (!n)
        return null;
      switch (t.input) {
        case "checkbox":
          return Xn(n);
        case "radio":
          return Qn(n);
        case "file":
          return eo(n);
        default:
          return t.inputAutoTrim ? n.value.trim() : n.value;
      }
    }, Xn = (e) => e.checked ? 1 : 0, Qn = (e) => e.checked ? e.value : null, eo = (e) => e.files.length ? e.getAttribute("multiple") !== null ? e.files : e.files[0] : null, to = (e, t) => {
      const n = u(), o = (s) => oo[t.input](n, Ae(s), t);
      fe(t.inputOptions) || pe(t.inputOptions) ? (U(k()), _(t.inputOptions).then((s) => {
        e.hideLoading(), o(s);
      })) : typeof t.inputOptions == "object" ? o(t.inputOptions) : H("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof t.inputOptions));
    }, no = (e, t) => {
      const n = e.getInput();
      b(n), _(t.inputValue).then((o) => {
        n.value = t.input === "number" ? parseFloat(o) || 0 : "".concat(o), p(n), n.focus(), e.hideLoading();
      }).catch((o) => {
        H("Error in inputValue promise: ".concat(o)), n.value = "", p(n), n.focus(), e.hideLoading();
      });
    }, oo = {
      select: (e, t, n) => {
        const o = L(e, i.select), s = (r, f, v) => {
          const y = document.createElement("option");
          y.value = v, m(y, f), y.selected = tt(v, n.inputValue), r.appendChild(y);
        };
        t.forEach((r) => {
          const f = r[0], v = r[1];
          if (Array.isArray(v)) {
            const y = document.createElement("optgroup");
            y.label = f, y.disabled = false, o.appendChild(y), v.forEach((z) => s(y, z[1], z[0]));
          } else
            s(o, v, f);
        }), o.focus();
      },
      radio: (e, t, n) => {
        const o = L(e, i.radio);
        t.forEach((r) => {
          const f = r[0], v = r[1], y = document.createElement("input"), z = document.createElement("label");
          y.type = "radio", y.name = i.radio, y.value = f, tt(f, n.inputValue) && (y.checked = true);
          const Oe = document.createElement("span");
          m(Oe, v), Oe.className = i.label, z.appendChild(y), z.appendChild(Oe), o.appendChild(z);
        });
        const s = o.querySelectorAll("input");
        s.length && s[0].focus();
      }
    }, Ae = (e) => {
      const t = [];
      return typeof Map < "u" && e instanceof Map ? e.forEach((n, o) => {
        let s = n;
        typeof s == "object" && (s = Ae(s)), t.push([o, s]);
      }) : Object.keys(e).forEach((n) => {
        let o = e[n];
        typeof o == "object" && (o = Ae(o)), t.push([n, o]);
      }), t;
    }, tt = (e, t) => t && t.toString() === e.toString();
    function nt() {
      const e = l.innerParams.get(this);
      if (!e)
        return;
      const t = l.domCache.get(this);
      b(t.loader), re() ? e.icon && p($()) : io(t), E([t.popup, t.actions], i.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = false, t.denyButton.disabled = false, t.cancelButton.disabled = false;
    }
    const io = (e) => {
      const t = e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));
      t.length ? p(t[0], "inline-block") : Mt() && b(e.actions);
    };
    function so(e) {
      const t = l.innerParams.get(e || this), n = l.domCache.get(e || this);
      return n ? ye(n.popup, t.input) : null;
    }
    var ee = {
      swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
      swalPromiseReject: /* @__PURE__ */ new WeakMap()
    };
    function ot(e, t, n, o) {
      re() ? it(e, o) : (Vt(n).then(() => it(e, o)), c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
        capture: c.keydownListenerCapture
      }), c.keydownHandlerAdded = false), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (t.setAttribute("style", "display:none !important"), t.removeAttribute("class"), t.innerHTML = "") : t.remove(), be() && (Vn(), zn(), Je()), ro();
    }
    function ro() {
      E([document.documentElement, document.body], [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]]);
    }
    function le(e) {
      e = uo(e);
      const t = ee.swalPromiseResolve.get(this), n = lo(this);
      this.isAwaitingPromise() ? e.isDismissed || (te(this), t(e)) : n && t(e);
    }
    function co() {
      return !!l.awaitingPromise.get(this);
    }
    const lo = (e) => {
      const t = u();
      if (!t)
        return false;
      const n = l.innerParams.get(e);
      if (!n || S(t, n.hideClass.popup))
        return false;
      E(t, n.showClass.popup), a(t, n.hideClass.popup);
      const o = h();
      return E(o, n.showClass.backdrop), a(o, n.hideClass.backdrop), fo(e, t, n), true;
    };
    function ao(e) {
      const t = ee.swalPromiseReject.get(this);
      te(this), t && t(e);
    }
    const te = (e) => {
      e.isAwaitingPromise() && (l.awaitingPromise.delete(e), l.innerParams.get(e) || e._destroy());
    }, uo = (e) => typeof e > "u" ? {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    } : Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, e), fo = (e, t, n) => {
      const o = h(), s = X && Ne(t);
      typeof n.willClose == "function" && n.willClose(t), s ? po(e, t, o, n.returnFocus, n.didClose) : ot(e, o, n.returnFocus, n.didClose);
    }, po = (e, t, n, o, s) => {
      c.swalCloseEventFinishedCallback = ot.bind(null, e, n, o, s), t.addEventListener(X, function(r) {
        r.target === t && (c.swalCloseEventFinishedCallback(), delete c.swalCloseEventFinishedCallback);
      });
    }, it = (e, t) => {
      setTimeout(() => {
        typeof t == "function" && t.bind(e.params)(), e._destroy();
      });
    };
    function st(e, t, n) {
      const o = l.domCache.get(e);
      t.forEach((s) => {
        o[s].disabled = n;
      });
    }
    function rt(e, t) {
      if (!e)
        return false;
      if (e.type === "radio") {
        const o = e.parentNode.parentNode.querySelectorAll("input");
        for (let s = 0; s < o.length; s++)
          o[s].disabled = t;
      } else
        e.disabled = t;
    }
    function go() {
      st(this, ["confirmButton", "denyButton", "cancelButton"], false);
    }
    function ho() {
      st(this, ["confirmButton", "denyButton", "cancelButton"], true);
    }
    function mo() {
      return rt(this.getInput(), false);
    }
    function bo() {
      return rt(this.getInput(), true);
    }
    function yo(e) {
      const t = l.domCache.get(this), n = l.innerParams.get(this);
      m(t.validationMessage, e), t.validationMessage.className = i["validation-message"], n.customClass && n.customClass.validationMessage && a(t.validationMessage, n.customClass.validationMessage), p(t.validationMessage);
      const o = this.getInput();
      o && (o.setAttribute("aria-invalid", true), o.setAttribute("aria-describedby", i["validation-message"]), Fe(o), a(o, i.inputerror));
    }
    function wo() {
      const e = l.domCache.get(this);
      e.validationMessage && b(e.validationMessage);
      const t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedby"), E(t, i.inputerror));
    }
    function Co() {
      return l.domCache.get(this).progressSteps;
    }
    function vo(e) {
      const t = u(), n = l.innerParams.get(this);
      if (!t || S(t, n.hideClass.popup))
        return d("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      const o = Po(e), s = Object.assign({}, n, o);
      $e(this, s), l.innerParams.set(this, s), Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: false,
          enumerable: true
        }
      });
    }
    const Po = (e) => {
      const t = {};
      return Object.keys(e).forEach((n) => {
        Me(n) ? t[n] = e[n] : d('Invalid parameter to update: "'.concat(n, `". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`));
      }), t;
    };
    function Ao() {
      const e = l.domCache.get(this), t = l.innerParams.get(this);
      if (!t) {
        ct(this);
        return;
      }
      e.popup && c.swalCloseEventFinishedCallback && (c.swalCloseEventFinishedCallback(), delete c.swalCloseEventFinishedCallback), c.deferDisposalTimer && (clearTimeout(c.deferDisposalTimer), delete c.deferDisposalTimer), typeof t.didDestroy == "function" && t.didDestroy(), ko(this);
    }
    const ko = (e) => {
      ct(e), delete e.params, delete c.keydownHandler, delete c.keydownTarget, delete c.currentInstance;
    }, ct = (e) => {
      e.isAwaitingPromise() ? (ke(l, e), l.awaitingPromise.set(e, true)) : (ke(ee, e), ke(l, e));
    }, ke = (e, t) => {
      for (const n in e)
        e[n].delete(t);
    };
    var lt = Object.freeze({
      hideLoading: nt,
      disableLoading: nt,
      getInput: so,
      close: le,
      isAwaitingPromise: co,
      rejectPromise: ao,
      handleAwaitingPromise: te,
      closePopup: le,
      closeModal: le,
      closeToast: le,
      enableButtons: go,
      disableButtons: ho,
      enableInput: mo,
      disableInput: bo,
      showValidationMessage: yo,
      resetValidationMessage: wo,
      getProgressSteps: Co,
      update: vo,
      _destroy: Ao
    });
    const Bo = (e) => {
      const t = l.innerParams.get(e);
      e.disableButtons(), t.input ? at(e, "confirm") : Ee(e, true);
    }, Eo = (e) => {
      const t = l.innerParams.get(e);
      e.disableButtons(), t.returnInputValueOnDeny ? at(e, "deny") : Be(e, false);
    }, So = (e, t) => {
      e.disableButtons(), t(R.cancel);
    }, at = (e, t) => {
      const n = l.innerParams.get(e);
      if (!n.input)
        return H('The "input" parameter is needed to be set when using returnInputValueOn'.concat(B(t)));
      const o = Gn(e, n);
      n.inputValidator ? xo(e, o, t) : e.getInput().checkValidity() ? t === "deny" ? Be(e, o) : Ee(e, o) : (e.enableButtons(), e.showValidationMessage(n.validationMessage));
    }, xo = (e, t, n) => {
      const o = l.innerParams.get(e);
      e.disableInput(), Promise.resolve().then(() => _(o.inputValidator(t, o.validationMessage))).then((r) => {
        e.enableButtons(), e.enableInput(), r ? e.showValidationMessage(r) : n === "deny" ? Be(e, t) : Ee(e, t);
      });
    }, Be = (e, t) => {
      const n = l.innerParams.get(e || void 0);
      n.showLoaderOnDeny && U(I()), n.preDeny ? (l.awaitingPromise.set(e || void 0, true), Promise.resolve().then(() => _(n.preDeny(t, n.validationMessage))).then((s) => {
        s === false ? (e.hideLoading(), te(e)) : e.closePopup({
          isDenied: true,
          value: typeof s > "u" ? t : s
        });
      }).catch((s) => dt(e || void 0, s))) : e.closePopup({
        isDenied: true,
        value: t
      });
    }, ut = (e, t) => {
      e.closePopup({
        isConfirmed: true,
        value: t
      });
    }, dt = (e, t) => {
      e.rejectPromise(t);
    }, Ee = (e, t) => {
      const n = l.innerParams.get(e || void 0);
      n.showLoaderOnConfirm && U(), n.preConfirm ? (e.resetValidationMessage(), l.awaitingPromise.set(e || void 0, true), Promise.resolve().then(() => _(n.preConfirm(t, n.validationMessage))).then((s) => {
        C(ie()) || s === false ? (e.hideLoading(), te(e)) : ut(e, typeof s > "u" ? t : s);
      }).catch((s) => dt(e || void 0, s))) : ut(e, t);
    }, To = (e, t, n) => {
      l.innerParams.get(e).toast ? Oo(e, t, n) : (Lo(t), Mo(t), Ho(e, t, n));
    }, Oo = (e, t, n) => {
      t.popup.onclick = () => {
        const o = l.innerParams.get(e);
        o && (Io(o) || o.timer || o.input) || n(R.close);
      };
    }, Io = (e) => e.showConfirmButton || e.showDenyButton || e.showCancelButton || e.showCloseButton;
    let ae = false;
    const Lo = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function(t) {
          e.container.onmouseup = void 0, t.target === e.container && (ae = true);
        };
      };
    }, Mo = (e) => {
      e.container.onmousedown = () => {
        e.popup.onmouseup = function(t) {
          e.popup.onmouseup = void 0, (t.target === e.popup || e.popup.contains(t.target)) && (ae = true);
        };
      };
    }, Ho = (e, t, n) => {
      t.container.onclick = (o) => {
        const s = l.innerParams.get(e);
        if (ae) {
          ae = false;
          return;
        }
        o.target === t.container && ne(s.allowOutsideClick) && n(R.backdrop);
      };
    }, jo = () => C(u()), ft = () => k() && k().click(), Do = () => I() && I().click(), Vo = () => j() && j().click(), qo = (e, t, n, o) => {
      t.keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
        capture: t.keydownListenerCapture
      }), t.keydownHandlerAdded = false), n.toast || (t.keydownHandler = (s) => Wo(e, s, o), t.keydownTarget = n.keydownListenerCapture ? window : u(), t.keydownListenerCapture = n.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
        capture: t.keydownListenerCapture
      }), t.keydownHandlerAdded = true);
    }, Se = (e, t, n) => {
      const o = me();
      if (o.length)
        return t = t + n, t === o.length ? t = 0 : t === -1 && (t = o.length - 1), o[t].focus();
      u().focus();
    }, pt = ["ArrowRight", "ArrowDown"], Fo = ["ArrowLeft", "ArrowUp"], Wo = (e, t, n) => {
      const o = l.innerParams.get(e);
      o && (t.isComposing || t.keyCode === 229 || (o.stopKeydownPropagation && t.stopPropagation(), t.key === "Enter" ? Ro(e, t, o) : t.key === "Tab" ? Uo(t, o) : [...pt, ...Fo].includes(t.key) ? No(t.key) : t.key === "Escape" && zo(t, o, n)));
    }, Ro = (e, t, n) => {
      if (ne(n.allowEnterKey) && t.target && e.getInput() && t.target.outerHTML === e.getInput().outerHTML) {
        if (["textarea", "file"].includes(n.input))
          return;
        ft(), t.preventDefault();
      }
    }, Uo = (e, t) => {
      const n = e.target, o = me();
      let s = -1;
      for (let r = 0; r < o.length; r++)
        if (n === o[r]) {
          s = r;
          break;
        }
      e.shiftKey ? Se(t, s, -1) : Se(t, s, 1), e.stopPropagation(), e.preventDefault();
    }, No = (e) => {
      const t = k(), n = I(), o = j();
      if (![t, n, o].includes(document.activeElement))
        return;
      const s = pt.includes(e) ? "nextElementSibling" : "previousElementSibling";
      let r = document.activeElement;
      for (let f = 0; f < J().children.length; f++) {
        if (r = r[s], !r)
          return;
        if (C(r) && r instanceof HTMLButtonElement)
          break;
      }
      r instanceof HTMLButtonElement && r.focus();
    }, zo = (e, t, n) => {
      ne(t.allowEscapeKey) && (e.preventDefault(), n(R.esc));
    }, Ko = (e) => typeof e == "object" && e.jquery, gt = (e) => e instanceof Element || Ko(e), _o = (e) => {
      const t = {};
      return typeof e[0] == "object" && !gt(e[0]) ? Object.assign(t, e[0]) : ["title", "html", "icon"].forEach((n, o) => {
        const s = e[o];
        typeof s == "string" || gt(s) ? t[n] = s : s !== void 0 && H("Unexpected type of ".concat(n, '! Expected "string" or "Element", got ').concat(typeof s));
      }), t;
    };
    function Yo() {
      const e = this;
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      return new e(...n);
    }
    function Zo(e) {
      class t extends this {
        _main(o, s) {
          return super._main(o, Object.assign({}, e, s));
        }
      }
      return t;
    }
    const $o = () => c.timeout && c.timeout.getTimerLeft(), ht = () => {
      if (c.timeout)
        return Ht(), c.timeout.stop();
    }, mt = () => {
      if (c.timeout) {
        const e = c.timeout.start();
        return we(e), e;
      }
    }, Jo = () => {
      const e = c.timeout;
      return e && (e.running ? ht() : mt());
    }, Go = (e) => {
      if (c.timeout) {
        const t = c.timeout.increase(e);
        return we(t, true), t;
      }
    }, Xo = () => c.timeout && c.timeout.isRunning();
    let bt = false;
    const xe = {};
    function Qo() {
      let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
      xe[e] = this, bt || (document.body.addEventListener("click", ei), bt = true);
    }
    const ei = (e) => {
      for (let t = e.target; t && t !== document; t = t.parentNode)
        for (const n in xe) {
          const o = t.getAttribute(n);
          if (o) {
            xe[n].fire({
              template: o
            });
            return;
          }
        }
    };
    var ti = Object.freeze({
      isValidParameter: Le,
      isUpdatableParameter: Me,
      isDeprecatedParameter: ge,
      argsToParams: _o,
      isVisible: jo,
      clickConfirm: ft,
      clickDeny: Do,
      clickCancel: Vo,
      getContainer: h,
      getPopup: u,
      getTitle: je,
      getHtmlContainer: oe,
      getImage: De,
      getIcon: $,
      getInputLabel: Tt,
      getCloseButton: he,
      getActions: J,
      getConfirmButton: k,
      getDenyButton: I,
      getCancelButton: j,
      getLoader: F,
      getFooter: qe,
      getTimerProgressBar: se,
      getFocusableElements: me,
      getValidationMessage: ie,
      isLoading: It,
      fire: Yo,
      mixin: Zo,
      showLoading: U,
      enableLoading: U,
      getTimerLeft: $o,
      stopTimer: ht,
      resumeTimer: mt,
      toggleTimer: Jo,
      increaseTimer: Go,
      isTimerRunning: Xo,
      bindClickHandler: Qo
    });
    let Te;
    class N {
      constructor() {
        if (typeof window > "u")
          return;
        Te = this;
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        const s = Object.freeze(this.constructor.argsToParams(n));
        Object.defineProperties(this, {
          params: {
            value: s,
            writable: false,
            enumerable: true,
            configurable: true
          }
        });
        const r = this._main(this.params);
        l.promise.set(this, r);
      }
      _main(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        St(Object.assign({}, n, t)), c.currentInstance && (c.currentInstance._destroy(), be() && Je()), c.currentInstance = this;
        const o = oi(t, n);
        Hn(o), Object.freeze(o), c.timeout && (c.timeout.stop(), delete c.timeout), clearTimeout(c.restoreFocusTimeout);
        const s = ii(this);
        return $e(this, o), l.innerParams.set(this, o), ni(this, s, o);
      }
      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
      then(t) {
        return l.promise.get(this).then(t);
      }
      finally(t) {
        return l.promise.get(this).finally(t);
      }
    }
    const ni = (e, t, n) => new Promise((o, s) => {
      const r = (f) => {
        e.closePopup({
          isDismissed: true,
          dismiss: f
        });
      };
      ee.swalPromiseResolve.set(e, o), ee.swalPromiseReject.set(e, s), t.confirmButton.onclick = () => Bo(e), t.denyButton.onclick = () => Eo(e), t.cancelButton.onclick = () => So(e, r), t.closeButton.onclick = () => r(R.close), To(e, t, r), qo(e, c, n, r), Jn(e, n), Kn(n), si(c, n, r), ri(t, n), setTimeout(() => {
        t.container.scrollTop = 0;
      });
    }), oi = (e, t) => {
      const n = kn(e), o = Object.assign({}, q, t, n, e);
      return o.showClass = Object.assign({}, q.showClass, o.showClass), o.hideClass = Object.assign({}, q.hideClass, o.hideClass), o;
    }, ii = (e) => {
      const t = {
        popup: u(),
        container: h(),
        actions: J(),
        confirmButton: k(),
        denyButton: I(),
        cancelButton: j(),
        loader: F(),
        closeButton: he(),
        validationMessage: ie(),
        progressSteps: Ve()
      };
      return l.domCache.set(e, t), t;
    }, si = (e, t, n) => {
      const o = se();
      b(o), t.timer && (e.timeout = new jn(() => {
        n("timer"), delete e.timeout;
      }, t.timer), t.timerProgressBar && (p(o), A(o, t, "timerProgressBar"), setTimeout(() => {
        e.timeout && e.timeout.running && we(t.timer);
      })));
    }, ri = (e, t) => {
      if (!t.toast) {
        if (!ne(t.allowEnterKey))
          return li();
        ci(e, t) || Se(t, -1, 1);
      }
    }, ci = (e, t) => t.focusDeny && C(e.denyButton) ? (e.denyButton.focus(), true) : t.focusCancel && C(e.cancelButton) ? (e.cancelButton.focus(), true) : t.focusConfirm && C(e.confirmButton) ? (e.confirmButton.focus(), true) : false, li = () => {
      document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
    };
    Object.assign(N.prototype, lt), Object.assign(N, ti), Object.keys(lt).forEach((e) => {
      N[e] = function() {
        if (Te)
          return Te[e](...arguments);
      };
    }), N.DismissReason = R, N.version = "11.4.4";
    const ue = N;
    return ue.default = ue, ue;
  }), typeof M < "u" && M.Sweetalert2 && (M.swal = M.sweetAlert = M.Swal = M.SweetAlert = M.Sweetalert2);
})(yt);
var ui = yt.exports;
var de = ai(ui);
var di = class {
  static install(T, K = {}) {
    var g;
    const O = de.mixin(K), B = function(...d) {
      return O.fire.call(O, ...d);
    };
    Object.assign(B, de), Object.keys(de).filter((d) => typeof de[d] == "function").forEach((d) => {
      B[d] = O[d].bind(O);
    }), (g = T.config) != null && g.globalProperties && !T.config.globalProperties.$swal ? (T.config.globalProperties.$swal = B, T.provide("$swal", B)) : Object.prototype.hasOwnProperty.call(T, "$swal") || (T.prototype.$swal = B, T.swal = B);
  }
};
export {
  di as default
};
/*! Bundled license information:

vue-sweetalert2/dist/vue-sweetalert.mjs:
  (*!
  * sweetalert2 v11.4.4
  * Released under the MIT License.
  *)
*/
//# sourceMappingURL=vue-sweetalert2.js.map
