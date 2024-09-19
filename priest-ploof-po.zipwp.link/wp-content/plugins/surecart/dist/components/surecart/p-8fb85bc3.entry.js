import { r as t, h as i, F as s } from "./p-cc7ce8c7.js";
import { f as l } from "./p-a27e9b70.js";
import { s as e } from "./p-24f06282.js";
import "./p-c27fae79.js";
import "./p-25433d0f.js";
import "./p-f70181c4.js";
import "./p-4d73f82a.js";
import "./p-1c2e2695.js";
import "./p-830ab1a3.js";
import "./p-a3a138d6.js";
import "./p-7ef0f71c.js";
import "./p-50da3ba3.js";
const o =
  ":host{display:block}sc-line-item{text-align:left}.line-item-total__group sc-line-item{margin:4px 0px !important}.scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}sc-line-item::part(base){grid-template-columns:max-content auto auto}.total-price{white-space:nowrap}";
const n = class {
  constructor(i) {
    t(this, i);
    this.order_key = {
      total: "total_amount",
      subtotal: "subtotal_amount",
      amount_due: "amount_due",
    };
    this.total = "total";
    this.size = undefined;
    this.checkout = undefined;
  }
  hasInstallmentPlan(t) {
    return (
      (t === null || t === void 0 ? void 0 : t.full_amount) !==
      (t === null || t === void 0 ? void 0 : t.subtotal_amount)
    );
  }
  hasSubscription(t) {
    var i;
    return (
      ((i = t === null || t === void 0 ? void 0 : t.line_items) === null ||
      i === void 0
        ? void 0
        : i.data) || []
    ).some((t) => {
      var i, s, l;
      return (
        ((i = t === null || t === void 0 ? void 0 : t.price) === null ||
        i === void 0
          ? void 0
          : i.recurring_interval) === "month" &&
        !!((s = t === null || t === void 0 ? void 0 : t.price) === null ||
        s === void 0
          ? void 0
          : s.recurring_interval) &&
        !((l = t === null || t === void 0 ? void 0 : t.price) === null ||
        l === void 0
          ? void 0
          : l.recurring_period_count)
      );
    });
  }
  renderLineItemTitle(t) {
    if (this.total === "total" && this.hasInstallmentPlan(t)) {
      return i(
        "span",
        { slot: "title" },
        i(
          "slot",
          { name: "first-payment-total-description" },
          wp.i18n.__("Subtotal", "surecart")
        )
      );
    }
    return i("span", { slot: "title" }, i("slot", { name: "title" }));
  }
  renderLineItemDescription(t) {
    if (this.total === "subtotal" && this.hasInstallmentPlan(t)) {
      return i(
        "span",
        { slot: "description" },
        i(
          "slot",
          { name: "first-payment-subtotal-description" },
          wp.i18n.__("Initial Payment", "surecart")
        )
      );
    }
    return i(
      "span",
      { slot: "description" },
      i("slot", { name: "description" })
    );
  }
  render() {
    var t;
    const o =
      this.checkout || (e === null || e === void 0 ? void 0 : e.checkout);
    if (
      l() &&
      !(o === null || o === void 0
        ? void 0
        : o[
            (t = this === null || this === void 0 ? void 0 : this.order_key) ===
              null || t === void 0
              ? void 0
              : t[this === null || this === void 0 ? void 0 : this.total]
          ])
    ) {
      return i(
        "sc-line-item",
        null,
        i("sc-skeleton", {
          slot: "title",
          style: { width: "120px", display: "inline-block" },
        }),
        i("sc-skeleton", {
          slot: "price",
          style: {
            width: "70px",
            display: "inline-block",
            height: this.size === "large" ? "40px" : "",
            "--border-radius": "6px",
          },
        })
      );
    }
    if (!(o === null || o === void 0 ? void 0 : o.currency)) return;
    if (
      this.total === "total" &&
      (o === null || o === void 0 ? void 0 : o.total_amount) !==
        (o === null || o === void 0 ? void 0 : o.amount_due)
    ) {
      return i(
        "div",
        { class: "line-item-total__group" },
        i(
          "sc-line-item",
          null,
          i(
            "span",
            { slot: "description" },
            this.hasInstallmentPlan(o)
              ? this.renderLineItemTitle(o)
              : i(
                  s,
                  null,
                  i("slot", { name: "title" }),
                  i("slot", { name: "description" })
                )
          ),
          i(
            "span",
            { slot: "price" },
            i("sc-total", { order: o, total: this.total })
          )
        ),
        !!o.trial_amount &&
          i(
            "sc-line-item",
            null,
            i(
              "span",
              { slot: "description" },
              i(
                "slot",
                { name: "free-trial-description" },
                wp.i18n.__("Trial", "surecart")
              )
            ),
            i(
              "span",
              { slot: "price" },
              i("sc-format-number", {
                type: "currency",
                value: o.trial_amount,
                currency: o.currency,
              })
            )
          ),
        i(
          "sc-line-item",
          { style: { "--price-size": "var(--sc-font-size-x-large)" } },
          this.hasSubscription(o)
            ? i(
                "span",
                { slot: "title" },
                i(
                  "slot",
                  { name: "subscription-title" },
                  wp.i18n.__("Total Due Today", "surecart")
                )
              )
            : i(
                "span",
                { slot: "title" },
                i(
                  "slot",
                  { name: "due-amount-description" },
                  wp.i18n.__("Amount Due", "surecart")
                )
              ),
          i(
            "span",
            { slot: "price" },
            i("sc-format-number", {
              type: "currency",
              currency: o === null || o === void 0 ? void 0 : o.currency,
              value: o === null || o === void 0 ? void 0 : o.amount_due,
            })
          )
        )
      );
    }
    return i(
      s,
      null,
      this.total === "subtotal" &&
        this.hasInstallmentPlan(o) &&
        i(
          "sc-line-item",
          {
            style:
              this.size === "large"
                ? { "--price-size": "var(--sc-font-size-x-large)" }
                : {},
          },
          i(
            "span",
            { slot: "description" },
            i(
              "slot",
              { name: "total-payments-description" },
              wp.i18n.__("Total Installment Payments", "surecart")
            )
          ),
          i(
            "span",
            { slot: "price" },
            i("sc-format-number", {
              type: "currency",
              value: o === null || o === void 0 ? void 0 : o.full_amount,
              currency:
                (o === null || o === void 0 ? void 0 : o.currency) || "usd",
            })
          )
        ),
      i(
        "sc-line-item",
        {
          style:
            this.size === "large"
              ? { "--price-size": "var(--sc-font-size-x-large)" }
              : {},
        },
        this.renderLineItemTitle(o),
        this.renderLineItemDescription(o),
        i(
          "span",
          { slot: "price" },
          !!(o === null || o === void 0 ? void 0 : o.total_savings_amount) &&
            this.total === "total" &&
            i("sc-format-number", {
              class: "scratch-price",
              type: "currency",
              value:
                -(o === null || o === void 0
                  ? void 0
                  : o.total_savings_amount) +
                (o === null || o === void 0 ? void 0 : o.total_amount),
              currency:
                (o === null || o === void 0 ? void 0 : o.currency) || "usd",
            }),
          i("sc-total", { class: "total-price", order: o, total: this.total })
        )
      )
    );
  }
};
n.style = o;
export { n as sc_line_item_total };
//# sourceMappingURL=p-8fb85bc3.entry.js.map
