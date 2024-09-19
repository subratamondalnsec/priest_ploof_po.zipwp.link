import { r as t, c as n, h as i, F as o } from "./p-cc7ce8c7.js";
import { s } from "./p-830ab1a3.js";
import { i as e } from "./p-d556eec7.js";
import { a as r, c as l } from "./p-50da3ba3.js";
import "./p-7ef0f71c.js";
const a =
  ":host {\n  display: block;\n}\n\nsc-button {\n  color: var(--sc-color-primary-500);\n}\n\n.coupon-form {\n  position: relative;\n  container-type: inline-size;\n}\n.coupon-form .coupon-button {\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(0.9);\n  transition: all var(--sc-transition-fast) ease;\n  color: var(--sc-input-color);\n}\n.coupon-form .coupon-button-mobile {\n  margin-top: var(--sc-input-label-margin);\n  display: none;\n}\n.coupon-form--has-value .coupon-button {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n}\n\n@container (max-width: 320px) {\n  .coupon-form .coupon-button {\n    display: none;\n  }\n  .coupon-form .coupon-button-mobile {\n    display: block;\n  }\n}\n.form {\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n  transform: translateY(5px);\n  transition: opacity var(--sc-transition-medium) ease, transform var(--sc-transition-medium) ease;\n  position: relative;\n  gap: var(--sc-spacing-small);\n}\n\n.coupon-form--is-open .form {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  height: auto;\n  margin: var(--sc-spacing-small) 0;\n}\n.coupon-form--is-open .trigger {\n  display: none;\n}\n\n.trigger {\n  cursor: pointer;\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-input-label-color);\n  user-select: none;\n}\n.trigger:hover {\n  text-decoration: underline;\n}\n\n.coupon-form--is-rtl .trigger {\n  text-align: right;\n}\n\n.coupon__status {\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-color-warning-700);\n  display: inline-flex;\n  gap: var(--sc-spacing-x-small);\n  align-items: flex-start;\n  text-align: left;\n}\n.coupon__status sc-icon {\n  flex: 0 0 1em;\n  margin-top: 0.25em;\n}";
const u = class {
  constructor(i) {
    t(this, i);
    this.scApplyCoupon = n(this, "scApplyCoupon", 7);
    this.label = undefined;
    this.loading = undefined;
    this.busy = undefined;
    this.placeholder = undefined;
    this.error = undefined;
    this.forceOpen = undefined;
    this.discount = undefined;
    this.currency = undefined;
    this.discountAmount = undefined;
    this.showInterval = undefined;
    this.open = undefined;
    this.collapsed = undefined;
    this.value = undefined;
    this.buttonText = undefined;
  }
  handleOpenChange(t) {
    if (t) {
      setTimeout(() => this.input.triggerFocus(), 50);
    }
  }
  handleDiscountChange(t, n) {
    var i, o;
    if (
      ((i = t === null || t === void 0 ? void 0 : t.promotion) === null ||
      i === void 0
        ? void 0
        : i.code) ===
      ((o = n === null || n === void 0 ? void 0 : n.promotion) === null ||
      o === void 0
        ? void 0
        : o.code)
    )
      return;
    setTimeout(() => {
      var t, n;
      if (
        (n =
          (t = this === null || this === void 0 ? void 0 : this.discount) ===
            null || t === void 0
            ? void 0
            : t.promotion) === null || n === void 0
          ? void 0
          : n.code
      ) {
        this.couponTag.shadowRoot.querySelector("*").focus();
      } else {
        this.addCouponTrigger.focus();
      }
    }, 50);
  }
  handleBlur() {
    if (!this.value) {
      this.open = false;
      this.error = "";
    }
  }
  getHumanReadableDiscount() {
    var t, n, i;
    if (
      ((t = this === null || this === void 0 ? void 0 : this.discount) ===
        null || t === void 0
        ? void 0
        : t.coupon) &&
      ((n = this === null || this === void 0 ? void 0 : this.discount) ===
        null || n === void 0
        ? void 0
        : n.coupon.percent_off)
    ) {
      return r(
        (i = this === null || this === void 0 ? void 0 : this.discount) ===
          null || i === void 0
          ? void 0
          : i.coupon
      );
    }
    return "";
  }
  applyCoupon() {
    this.scApplyCoupon.emit(this.input.value.toUpperCase());
  }
  handleKeyDown(t) {
    if ((t === null || t === void 0 ? void 0 : t.code) === "Enter") {
      this.applyCoupon();
    } else if ((t === null || t === void 0 ? void 0 : t.code) === "Escape") {
      this.scApplyCoupon.emit(null);
      this.open = false;
      s(wp.i18n.__("Coupon code field closed.", "surecart"), "assertive");
    }
  }
  translateHumanDiscountWithDuration(t) {
    var n;
    if (!this.showInterval) return t;
    const { duration: i, duration_in_months: o } =
      (n = this.discount) === null || n === void 0 ? void 0 : n.coupon;
    switch (i) {
      case "once":
        return `${t} ${wp.i18n.__("once", "surecart")}`;
      case "repeating":
        const n = wp.i18n.sprintf(
          wp.i18n._n("%d month", "%d months", o, "surecart"),
          o
        );
        return wp.i18n.sprintf(wp.i18n.__("%s for %s", "surecart"), t, n);
      default:
        return t;
    }
  }
  render() {
    var t, n, r, a, u, c, p, d, h;
    if (this.loading) {
      return i("sc-skeleton", {
        style: { width: "120px", display: "inline-block" },
      });
    }
    if (
      (n =
        (t = this === null || this === void 0 ? void 0 : this.discount) ===
          null || t === void 0
          ? void 0
          : t.promotion) === null || n === void 0
        ? void 0
        : n.code
    ) {
      let t = this.getHumanReadableDiscount();
      return i(
        "sc-line-item",
        {
          exportparts:
            "description:info, price-description:discount, price:amount",
        },
        i(
          "span",
          { slot: "description" },
          i(
            "div",
            { part: "discount-label" },
            wp.i18n.__("Discount", "surecart")
          ),
          i(
            "sc-tag",
            {
              exportparts: "base:coupon-tag",
              type:
                "redeemable" ===
                ((r = this.discount) === null || r === void 0
                  ? void 0
                  : r.redeemable_status)
                  ? "success"
                  : "warning",
              class: "coupon-tag",
              clearable: true,
              onScClear: () => {
                this.scApplyCoupon.emit(null);
                this.open = false;
              },
              onKeyDown: (t) => {
                if (t.key === "Enter" || t.key === "Escape") {
                  s(wp.i18n.__("Coupon was removed.", "surecart"), "assertive");
                  this.scApplyCoupon.emit(null);
                  this.open = false;
                }
              },
              ref: (t) => (this.couponTag = t),
              role: "button",
              "aria-label": wp.i18n.sprintf(
                wp.i18n.__("Press enter to remove coupon code %s.", "surecart"),
                ((u =
                  (a =
                    this === null || this === void 0
                      ? void 0
                      : this.discount) === null || a === void 0
                    ? void 0
                    : a.promotion) === null || u === void 0
                  ? void 0
                  : u.code) ||
                  this.input.value ||
                  ""
              ),
            },
            (p =
              (c =
                this === null || this === void 0 ? void 0 : this.discount) ===
                null || c === void 0
                ? void 0
                : c.promotion) === null || p === void 0
              ? void 0
              : p.code
          )
        ),
        "redeemable" ===
          ((d = this.discount) === null || d === void 0
            ? void 0
            : d.redeemable_status)
          ? i(
              o,
              null,
              t &&
                i(
                  "span",
                  { class: "coupon-human-discount", slot: "price-description" },
                  this.translateHumanDiscountWithDuration(t)
                ),
              i(
                "span",
                { slot: "price" },
                i("sc-format-number", {
                  type: "currency",
                  currency:
                    this === null || this === void 0 ? void 0 : this.currency,
                  value:
                    this === null || this === void 0
                      ? void 0
                      : this.discountAmount,
                })
              )
            )
          : i(
              "div",
              { class: "coupon__status", slot: "price-description" },
              i("sc-icon", { name: "alert-triangle" }),
              l(
                (h = this.discount) === null || h === void 0
                  ? void 0
                  : h.redeemable_status
              )
            )
      );
    }
    return this.collapsed
      ? i(
          "div",
          {
            part: "base",
            class: {
              "coupon-form": true,
              "coupon-form--is-open": this.open || this.forceOpen,
              "coupon-form--has-value": !!this.value,
              "coupon-form--is-rtl": e(),
            },
          },
          i(
            "div",
            {
              part: "label",
              class: "trigger",
              onMouseDown: () => {
                if (this.open) {
                  return;
                }
                this.open = true;
              },
              onKeyDown: (t) => {
                if (t.key !== "Enter" && t.key !== " ") {
                  return true;
                }
                if (this.open) {
                  return;
                }
                this.open = true;
                s(
                  wp.i18n.__(
                    "Coupon code field opened. Press Escape button to close it.",
                    "surecart"
                  ),
                  "assertive"
                );
              },
              tabindex: "0",
              ref: (t) => (this.addCouponTrigger = t),
              role: "button",
            },
            i("slot", { name: "label" }, this.label)
          ),
          i(
            "div",
            { class: "form", part: "form" },
            i(
              "sc-input",
              {
                exportparts:
                  "base:input__base, input, form-control:input__form-control",
                value: this.value,
                onScInput: (t) => (this.value = t.target.value),
                placeholder: this.placeholder,
                onScBlur: () => this.handleBlur(),
                onKeyDown: (t) => this.handleKeyDown(t),
                ref: (t) => (this.input = t),
                "aria-label": wp.i18n.__("Add coupon code.", "surecart"),
              },
              i(
                "sc-button",
                {
                  exportparts: "base:button__base, label:button_label",
                  slot: "suffix",
                  type: "text",
                  loading: this.busy,
                  size: "medium",
                  class: "coupon-button",
                  onClick: () => this.applyCoupon(),
                },
                i("slot", null, this.buttonText)
              )
            ),
            i(
              "sc-button",
              {
                exportparts: "base:button__base, label:button_label",
                type: "primary",
                outline: true,
                loading: this.busy,
                size: "medium",
                class: "coupon-button-mobile",
                onClick: () => this.applyCoupon(),
              },
              i("slot", null, this.buttonText)
            ),
            !!this.error &&
              i(
                "sc-alert",
                {
                  exportparts:
                    "base:error__base, icon:error__icon, text:error__text, title:error_title, message:error__message",
                  type: "danger",
                  open: true,
                },
                i("span", { slot: "title" }, this.error)
              )
          ),
          this.loading &&
            i("sc-block-ui", {
              exportparts: "base:block-ui, content:block-ui__content",
            })
        )
      : i(
          "div",
          {
            class: {
              "coupon-form": true,
              "coupon-form--has-value": !!this.value,
              "coupon-form--is-rtl": e(),
            },
          },
          i(
            "sc-input",
            {
              label: this.label,
              exportparts:
                "base:input__base, input, form-control:input__form-control",
              value: this.value,
              onScInput: (t) => (this.value = t.target.value),
              placeholder: this.placeholder,
              onScBlur: () => this.handleBlur(),
              onKeyDown: (t) => this.handleKeyDown(t),
              ref: (t) => (this.input = t),
            },
            i(
              "sc-button",
              {
                exportparts: "base:button__base, label:button_label",
                slot: "suffix",
                type: "text",
                loading: this.busy,
                size: "medium",
                class: "coupon-button",
                onClick: () => this.applyCoupon(),
              },
              i("slot", null, this.buttonText)
            )
          ),
          i(
            "sc-button",
            {
              exportparts: "base:button__base, label:button_label",
              type: "primary",
              outline: true,
              loading: this.busy,
              size: "medium",
              class: "coupon-button-mobile",
              onClick: () => this.applyCoupon(),
            },
            i("slot", null, this.buttonText)
          ),
          !!this.error &&
            i(
              "sc-alert",
              {
                exportparts:
                  "base:error__base, icon:error__icon, text:error__text, title:error_title, message:error__message",
                type: "danger",
                open: true,
              },
              i("span", { slot: "title" }, this.error)
            )
        );
  }
  static get watchers() {
    return { open: ["handleOpenChange"], discount: ["handleDiscountChange"] };
  }
};
u.style = a;
export { u as sc_coupon_form };
//# sourceMappingURL=p-4e5e47e3.entry.js.map
