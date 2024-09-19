import { r as t, h as i, F as e, a as o } from "./p-cc7ce8c7.js";
import { a as s } from "./p-18e45a13.js";
import { b as r, e as a } from "./p-5ec5df35.js";
import { a as d, g as n, b as l, s as c, c as u } from "./p-24f06282.js";
import { c as p } from "./p-8266bbed.js";
import { u as h } from "./p-f9c1f513.js";
import { f as v } from "./p-a27e9b70.js";
import { a as f } from "./p-1c2e2695.js";
import "./p-4d73f82a.js";
import "./p-25433d0f.js";
import "./p-f70181c4.js";
import "./p-830ab1a3.js";
import "./p-a3a138d6.js";
import "./p-7ef0f71c.js";
import "./p-50da3ba3.js";
import "./p-c27fae79.js";
const m =
  ":host{--sc-drawer-header-spacing:var(--sc-spacing-large);--sc-drawer-body-spacing:var(--sc-spacing-large);--sc-drawer-footer-spacing:var(--sc-spacing-large)}.cart{font-size:16px}.cart__header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart__close{opacity:0.75;transition:opacity 0.25s ease;cursor:pointer}.cart__close:hover{opacity:1}::slotted(*){padding:var(--sc-drawer-header-spacing);background:var(--sc-panel-background-color);position:relative}::slotted(sc-line-items){flex:1 1 auto;overflow:auto;-webkit-overflow-scrolling:touch;min-height:200px}::slotted(:last-child){border-bottom:0 !important}sc-drawer::part(body){display:flex;flex-direction:column;box-sizing:border-box;padding:0;overflow:hidden}";
const g = class {
  constructor(i) {
    t(this, i);
    this.open = null;
    this.formId = undefined;
    this.header = undefined;
    this.checkoutLink = undefined;
    this.cartTemplate = undefined;
    this.mode = "live";
    this.checkoutUrl = undefined;
    this.alwaysShow = undefined;
    this.floatingIconEnabled = true;
    this.uiState = "idle";
  }
  handleOpenChange() {
    var t, i, e;
    d.set("cart", { ...d.state.cart, ...{ open: this.open } });
    if (this.open === true) {
      this.fetchOrder();
    } else {
      (e =
        (i =
          (t =
            document === null || document === void 0
              ? void 0
              : document.querySelector("sc-cart-icon")) === null || t === void 0
            ? void 0
            : t.shadowRoot) === null || i === void 0
          ? void 0
          : i.querySelector(".cart")) === null || e === void 0
        ? void 0
        : e.focus();
    }
  }
  order() {
    return n(this.formId, this.mode);
  }
  setCheckout(t) {
    l(t, this.formId);
  }
  pageHasForm() {
    return !!document.querySelector("sc-checkout");
  }
  getItemsCount() {
    var t, i;
    const e =
      (i =
        (t = c.checkout) === null || t === void 0 ? void 0 : t.line_items) ===
        null || i === void 0
        ? void 0
        : i.data;
    let o = 0;
    (e || []).forEach((t) => {
      o = o + (t === null || t === void 0 ? void 0 : t.quantity);
    });
    return o;
  }
  handleSetState(t) {
    this.uiState = t.detail;
  }
  handleCloseCart() {
    this.open = false;
  }
  async fetchOrder() {
    var t, i;
    if (!((t = c.checkout) === null || t === void 0 ? void 0 : t.id)) {
      return;
    }
    try {
      h("FETCH");
      c.checkout = await s({
        method: "GET",
        path: f(
          `${r}${(i = c.checkout) === null || i === void 0 ? void 0 : i.id}`,
          { expand: a }
        ),
      });
      h("RESOLVE");
    } catch (t) {
      console.error(t);
      h("REJECT");
      p(t);
      if (
        (t === null || t === void 0 ? void 0 : t.code) === "checkout.not_found"
      ) {
        u(this.formId, this.mode);
      }
    }
  }
  componentWillLoad() {
    this.open = !!d.state.cart.open;
    d.onChange("cart", (t) => {
      this.open = t.open;
    });
  }
  state() {
    var t, i, e, o, s, r, a, d, n, l, u;
    return {
      uiState: this.uiState,
      checkoutLink: this.checkoutLink,
      loading: this.uiState === "loading",
      busy: this.uiState === "busy",
      navigating: this.uiState === "navigating",
      empty: !((e =
        (i =
          (t = c.checkout) === null || t === void 0 ? void 0 : t.line_items) ===
          null || i === void 0
          ? void 0
          : i.pagination) === null || e === void 0
        ? void 0
        : e.count),
      order: c.checkout,
      lineItems:
        ((s =
          (o = c.checkout) === null || o === void 0 ? void 0 : o.line_items) ===
          null || s === void 0
          ? void 0
          : s.data) || [],
      tax_status:
        (r = c.checkout) === null || r === void 0 ? void 0 : r.tax_status,
      customerShippingAddress:
        typeof ((a = c.checkout) === null || a === void 0
          ? void 0
          : a.customer) !== "string"
          ? (n =
              (d = c.checkout) === null || d === void 0
                ? void 0
                : d.customer) === null || n === void 0
            ? void 0
            : n.shipping_address
          : {},
      shippingAddress:
        (l = c.checkout) === null || l === void 0 ? void 0 : l.shipping_address,
      taxStatus:
        (u = c.checkout) === null || u === void 0 ? void 0 : u.tax_status,
      formId: this.formId,
    };
  }
  render() {
    return i(
      "sc-cart-session-provider",
      null,
      i(
        "sc-drawer",
        {
          open: this.open,
          onScAfterShow: () => (this.open = true),
          onScAfterHide: () => {
            this.open = false;
          },
        },
        this.open === true &&
          i(
            e,
            null,
            i(
              "div",
              { class: "cart__header-suffix", slot: "header" },
              i("slot", { name: "cart-header" }),
              i("sc-error", {
                style: { "--sc-alert-border-radius": "0" },
                slot: "header",
              })
            ),
            i("slot", null)
          ),
        v() && i("sc-block-ui", { "z-index": 9 })
      )
    );
  }
  get el() {
    return o(this);
  }
  static get watchers() {
    return { open: ["handleOpenChange"] };
  }
};
g.style = m;
export { g as sc_cart };
//# sourceMappingURL=p-e58a43cb.entry.js.map
