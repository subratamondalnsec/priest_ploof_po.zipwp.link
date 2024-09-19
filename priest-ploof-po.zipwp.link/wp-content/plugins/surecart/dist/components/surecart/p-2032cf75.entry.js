import { r as t, c as s, h as i } from "./p-cc7ce8c7.js";
import { s as e } from "./p-24f06282.js";
import "./p-25433d0f.js";
import "./p-f70181c4.js";
import "./p-4d73f82a.js";
import "./p-1c2e2695.js";
import "./p-830ab1a3.js";
import "./p-a3a138d6.js";
import "./p-7ef0f71c.js";
import "./p-50da3ba3.js";
const o =
  ".cart-header{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1em}.cart-title{text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 var(--sc-spacing-small)}.cart__close{cursor:pointer}";
const r = class {
  constructor(i) {
    t(this, i);
    this.scCloseCart = s(this, "scCloseCart", 7);
  }
  getItemsCount() {
    var t, s;
    const i =
      ((s =
        (t = e.checkout) === null || t === void 0 ? void 0 : t.line_items) ===
        null || s === void 0
        ? void 0
        : s.data) || [];
    let o = 0;
    i.forEach((t) => {
      o = o + (t === null || t === void 0 ? void 0 : t.quantity);
    });
    return o;
  }
  render() {
    var t;
    return i(
      "div",
      { class: "cart-header" },
      i("sc-icon", {
        class: "cart__close",
        name: "arrow-right",
        onClick: () => this.scCloseCart.emit(),
        onKeyDown: (t) => {
          if (
            "Enter" === (t === null || t === void 0 ? void 0 : t.code) ||
            "Space" === (t === null || t === void 0 ? void 0 : t.code)
          ) {
            this.scCloseCart.emit();
          }
        },
        tabIndex: 0,
        role: "button",
        "aria-label": wp.i18n.__("Close Cart", "surecart"),
      }),
      i("div", { class: "cart-title" }, i("slot", null)),
      i(
        "sc-tag",
        { size: "small" },
        ((t =
          this === null || this === void 0 ? void 0 : this.getItemsCount) ===
          null || t === void 0
          ? void 0
          : t.call(this)) || 0
      )
    );
  }
};
r.style = o;
export { r as sc_cart_header };
//# sourceMappingURL=p-2032cf75.entry.js.map
