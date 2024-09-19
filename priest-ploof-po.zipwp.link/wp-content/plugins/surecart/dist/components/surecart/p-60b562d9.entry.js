import { r as o, h as r } from "./p-cc7ce8c7.js";
import { a as t, s as a } from "./p-24f06282.js";
import "./p-25433d0f.js";
import "./p-f70181c4.js";
import "./p-4d73f82a.js";
import "./p-1c2e2695.js";
import "./p-830ab1a3.js";
import "./p-a3a138d6.js";
import "./p-7ef0f71c.js";
import "./p-50da3ba3.js";
const i =
  ":host{display:block;--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}:host:focus-visible .cart{box-shadow:var(--focus-ring)}.cart{position:fixed;bottom:var(--sc-cart-icon-bottom, 30px);right:var(--sc-cart-icon-right, 30px);left:var(--sc-cart-icon-left, auto);top:var(--sc-cart-icon-top, auto);background:var(--sc-cart-icon-background, var(--sc-color-primary-500));border-radius:var(--sc-cart-icon-border-radius, var(--sc-input-border-radius-medium));width:var(--sc-cart-icon-width, 60px);height:var(--sc-cart-icon-height, 60px);color:var(--sc-cart-icon-color, var(--sc-color-primary-text, var(--sc-color-white)));font-family:var(--sc-cart-font-family, var(--sc-input-font-family));font-weight:var(--sc-font-weight-semibold);transition:opacity var(--sc-transition-medium) ease;box-shadow:var(--sc-shadow-small);cursor:pointer}.cart:hover{opacity:0.8}.cart__container{font-size:24px;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;height:100%}.cart__counter{position:absolute;top:-8px;left:auto;bottom:auto;right:-8px;font-size:12px;border-radius:var(--sc-cart-counter-border-radius, 9999px);color:var(--sc-cart-counter-color, var(--sc-color-white));background:var(--sc-cart-counter-background, var(--sc-color-gray-900));box-shadow:var(--sc-cart-icon-box-shadow, var(--sc-shadow-x-large));padding:4px 10px;line-height:18px;z-index:1}";
const c = class {
  constructor(r) {
    o(this, r);
    this.icon = "shopping-bag";
  }
  getItemsCount() {
    var o, r;
    const t =
      (r =
        (o = a === null || a === void 0 ? void 0 : a.checkout) === null ||
        o === void 0
          ? void 0
          : o.line_items) === null || r === void 0
        ? void 0
        : r.data;
    let i = 0;
    (t || []).forEach((o) => {
      i = i + (o === null || o === void 0 ? void 0 : o.quantity);
    });
    return i;
  }
  toggleCart() {
    return t.set("cart", { ...t.state.cart, ...{ open: !t.state.cart.open } });
  }
  render() {
    var o, i, c;
    if (
      !(a === null || a === void 0 ? void 0 : a.checkout) ||
      ((c =
        (i =
          (o = a === null || a === void 0 ? void 0 : a.checkout) === null ||
          o === void 0
            ? void 0
            : o.line_items) === null || i === void 0
          ? void 0
          : i.data) === null || c === void 0
        ? void 0
        : c.length) === 0
    ) {
      return null;
    }
    return r(
      "div",
      {
        class: { cart: true },
        part: "base",
        onClick: () => this.toggleCart(),
        onKeyDown: (o) => {
          if (
            "Enter" === (o === null || o === void 0 ? void 0 : o.code) ||
            "Space" === (o === null || o === void 0 ? void 0 : o.code)
          ) {
            this.toggleCart();
            o.preventDefault();
          }
        },
        tabIndex: 0,
        role: "button",
        "aria-label": !t.state.cart.open
          ? wp.i18n.sprintf(
              wp.i18n.__("Open Cart Floating Icon with %s items", "surecart"),
              this.getItemsCount()
            )
          : wp.i18n.__("Close Cart Floating Icon", "surecart"),
      },
      r(
        "div",
        { class: "cart__container", part: "container" },
        r("div", { class: { cart__counter: true } }, this.getItemsCount()),
        r(
          "slot",
          null,
          r("sc-icon", { exportparts: "base:icon__base", name: this.icon })
        )
      )
    );
  }
};
c.style = i;
export { c as sc_cart_icon };
//# sourceMappingURL=p-60b562d9.entry.js.map
