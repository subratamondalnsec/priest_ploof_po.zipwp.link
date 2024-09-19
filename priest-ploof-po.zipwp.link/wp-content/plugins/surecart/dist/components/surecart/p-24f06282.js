import { c as o } from "./p-25433d0f.js";
import { g as i } from "./p-f70181c4.js";
import { g as d } from "./p-4d73f82a.js";
import { s as n } from "./p-830ab1a3.js";
import { t as l } from "./p-a3a138d6.js";
import { m as v } from "./p-7ef0f71c.js";
import { g as u, b as t, a as e } from "./p-1c2e2695.js";
import { g as r, a as c } from "./p-50da3ba3.js";
function s(i) {
  const n = i.indexOf("?");
  if (-1 === n) return i;
  const o = u(i),
    d = i.substr(0, n);
  for (
    var e = arguments.length, l = new Array(e > 1 ? e - 1 : 0), r = 1;
    r < e;
    r++
  )
    l[r - 1] = arguments[r];
  l.forEach((i) => delete o[i]);
  const c = t(o);
  return c ? d + "?" + c : d;
}
const a = (i, n) => {
    try {
      return JSON.parse(i.getItem(n));
    } catch {
      return null;
    }
  },
  w = (i) => {
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        setTimeout(() => {
          i(), (n = !1);
        }, 0));
    };
  },
  m = (i, n, t, d = !1) => {
    var e;
    const l = o(
        null !== (e = a(i, n)) && void 0 !== e ? e : t,
        (i, n) => JSON.stringify(i) !== JSON.stringify(n)
      ),
      u = w(() => i.setItem(n, JSON.stringify(l.state)));
    return (
      u(),
      d &&
        window.addEventListener("storage", () => {
          const o = a(i, n);
          if (null !== o) for (const i in o) l.set(i, o[i]);
        }),
      l.use({ set: u, reset: u }),
      l
    );
  },
  f = (i, n, o = !1) => m(localStorage, i, n, o),
  { checkout: p } = i(),
  _ =
    "browser" !== (null == p ? void 0 : p.persist) ||
    !!d(window.location.href, "no_cart"),
  b = _
    ? o({ live: {}, test: {} })
    : f("surecart-local-storage", { live: {}, test: {} }, !0),
  { state: y, onChange: C, on: h, set: S, get: k, dispose: g } = b;
window.scStore = b;
const { checkout: U } = i(),
  {
    state: O,
    onChange: D,
    on: q,
    set: I,
    get: E,
    dispose: J,
    reset: N,
  } = o(
    {
      formId: null,
      groupId: null,
      mode: "live",
      locks: [],
      product: null,
      checkout: null,
      currencyCode: "usd",
      abandonedCheckoutEnabled: !0,
      initialLineItems: [],
      isCheckoutPage: !1,
      validateStock: !1,
      persist: "browser",
      paymentMethodRequiresShipping: !1,
      ...U,
    },
    (i, n) => JSON.stringify(i) !== JSON.stringify(n)
  );
D("checkout", (i) => F(i, O.formId)),
  q("get", (i) => {
    if ("checkout" === i) {
      const i = R(O.formId, O.mode);
      (null == i ? void 0 : i.id) && (O.checkout = i);
    }
  }),
  q("set", (i, o, t) => {
    var d, e, l, u, v, a, s, p, m, _, y, w, f, h, b;
    if ("checkout" !== i) return;
    if (!t || !o) return;
    if (
      (null == o ? void 0 : o.total_amount) ===
        (null == t ? void 0 : t.total_amount) &&
      (null == o ? void 0 : o.amount_due) ===
        (null == t ? void 0 : t.total_amount)
    )
      return;
    const g = r({ amount: o.amount_due, currency: o.currency }),
      C = r({ amount: o.total_amount, currency: o.currency }),
      q =
        (null ===
          (e =
            null === (d = null == o ? void 0 : o.discount) || void 0 === d
              ? void 0
              : d.promotion) || void 0 === e
          ? void 0
          : e.code) !==
          (null ===
            (u =
              null === (l = null == t ? void 0 : t.discount) || void 0 === l
                ? void 0
                : l.promotion) || void 0 === u
            ? void 0
            : u.code) &&
        (null ===
          (a =
            null === (v = null == o ? void 0 : o.discount) || void 0 === v
              ? void 0
              : v.promotion) || void 0 === a
          ? void 0
          : a.code),
      k = [
        ...((null ===
          (p =
            null === (s = null == o ? void 0 : o.discount) || void 0 === s
              ? void 0
              : s.promotion) || void 0 === p
          ? void 0
          : p.code) ===
          (null ===
            (_ =
              null === (m = null == t ? void 0 : t.discount) || void 0 === m
                ? void 0
                : m.promotion) || void 0 === _
            ? void 0
            : _.code) ||
        (null ===
          (w =
            null === (y = null == o ? void 0 : o.discount) || void 0 === y
              ? void 0
              : y.promotion) || void 0 === w
          ? void 0
          : w.code)
          ? []
          : [wp.i18n.__("Coupon code removed.", "sc-coupon-form")]),
        ...(q
          ? [
              wp.i18n.sprintf(
                wp.i18n.__(
                  "Coupon code %1$s added. %2$s applied.",
                  "sc-coupon-form"
                ),
                null ===
                  (h =
                    null === (f = null == o ? void 0 : o.discount) ||
                    void 0 === f
                      ? void 0
                      : f.promotion) || void 0 === h
                  ? void 0
                  : h.code,
                c(
                  null === (b = null == o ? void 0 : o.discount) || void 0 === b
                    ? void 0
                    : b.coupon
                )
              ),
            ]
          : []),
        o.total_amount === o.amount_due
          ? wp.i18n.sprintf(
              wp.i18n.__(
                "Checkout updated. The amount due is %1$s.",
                "surecart"
              ),
              g
            )
          : wp.i18n.sprintf(
              wp.i18n.__(
                "Checkout updated. The total amount for the checkout is %1$s and the amount due is %1$s.",
                "surecart"
              ),
              C,
              g
            ),
      ];
    n(k.join(" "));
  });
const A = o(
    () => ({ cart: { open: !1 } }),
    (i, n) => JSON.stringify(i) !== JSON.stringify(n)
  ),
  { state: T } = A,
  j = (i = null) =>
    A.set("cart", { ...T.cart, open: null !== i ? i : !T.cart.open }),
  { on: P } = A;
P("set", (i, o) => {
  "cart" === i &&
    ((null == o ? void 0 : o.open)
      ? n(wp.i18n.__("Cart Opened", "surecart"), "assertive")
      : n(wp.i18n.__("Cart Closed", "surecart"), "assertive"));
}),
  h("set", (i, n, o) =>
    Object.keys(n || {}).forEach((i) => $(n[i], null == o ? void 0 : o[i]))
  );
const $ = (i, n) => {
  var o, t;
  const d =
      (null === (o = null == i ? void 0 : i.line_items) || void 0 === o
        ? void 0
        : o.data) || [],
    e =
      (null === (t = null == n ? void 0 : n.line_items) || void 0 === t
        ? void 0
        : t.data) || [];
  if (
    (d.forEach((i) => {
      const n = e.find((n) => n.id === i.id);
      if (
        !n ||
        (null == n ? void 0 : n.quantity) < (null == i ? void 0 : i.quantity)
      ) {
        const o = new CustomEvent("scAddedToCart", {
          detail: {
            ...i,
            quantity: i.quantity - ((null == n ? void 0 : n.quantity) || 0),
          },
          bubbles: !0,
        });
        document.dispatchEvent(o);
      }
    }),
    e.forEach((i) => {
      const n = d.find((n) => n.id === i.id);
      if (
        !n ||
        (null == i ? void 0 : i.quantity) > (null == n ? void 0 : n.quantity)
      ) {
        const o = new CustomEvent("scRemovedFromCart", {
          detail: {
            ...i,
            quantity: i.quantity - ((null == n ? void 0 : n.quantity) || 0),
          },
          bubbles: !0,
        });
        document.dispatchEvent(o);
      }
    }),
    !(null == O ? void 0 : O.isCheckoutPage) &&
      JSON.stringify(d) !== JSON.stringify(e))
  ) {
    const o = new CustomEvent("scCartUpdated", {
      detail: { currentCart: i, previousCart: n },
      bubbles: !0,
    });
    document.dispatchEvent(o);
  }
};
P("set", (i, n, o) => {
  if (
    "cart" === i &&
    (null == n ? void 0 : n.open) !== (null == o ? void 0 : o.open) &&
    (null == n ? void 0 : n.open)
  ) {
    const i = new CustomEvent("scViewedCart", {
      detail: O.checkout,
      bubbles: !0,
    });
    document.dispatchEvent(i);
  }
}),
  q("set", (i, n, o) => {
    if ("checkout" !== i) return;
    if (null == o ? void 0 : o.id) return;
    if (!(null == n ? void 0 : n.id)) return;
    if (!O.isCheckoutPage) return;
    const t = new CustomEvent("scCheckoutInitiated", {
      detail: n,
      bubbles: !0,
    });
    document.dispatchEvent(t);
  }),
  q("set", (i, n, o) => {
    var t, d;
    if ("checkout" !== i) return;
    if (
      !(null == n ? void 0 : n.status) ||
      (null == o ? void 0 : o.status) === (null == n ? void 0 : n.status)
    )
      return;
    if (!["paid", "processing"].includes(n.status)) return;
    const e = new CustomEvent("scOrderPaid", { detail: n, bubbles: !0 });
    document.dispatchEvent(e);
    const l = new CustomEvent("scCheckoutCompleted", {
      detail: n,
      bubbles: !0,
    });
    document.dispatchEvent(l);
    const u = (
      (null === (t = null == n ? void 0 : n.line_items) || void 0 === t
        ? void 0
        : t.data) || []
    ).filter((i) => {
      var n;
      return (
        (null === (n = null == i ? void 0 : i.price) || void 0 === n
          ? void 0
          : n.trial_duration_days) > 0
      );
    });
    if (u.length > 0) {
      const i = new CustomEvent("scTrialStarted", { detail: u, bubbles: !0 });
      document.dispatchEvent(i);
    }
    const r = (
      (null === (d = null == n ? void 0 : n.line_items) || void 0 === d
        ? void 0
        : d.data) || []
    ).filter((i) => {
      var n;
      return (
        (null === (n = null == i ? void 0 : i.price) || void 0 === n
          ? void 0
          : n.recurring_interval_count) > 0
      );
    });
    if (r.length > 0) {
      const i = new CustomEvent("scSubscriptionStarted", {
        detail: r,
        bubbles: !0,
      });
      document.dispatchEvent(i);
    }
  }),
  q("set", (i, n, o) => {
    if ("checkout" !== i) return;
    if (!O.isCheckoutPage) return;
    if (!(null == n ? void 0 : n.selected_shipping_choice)) return;
    if (
      (null == o ? void 0 : o.selected_shipping_choice) ===
      (null == n ? void 0 : n.selected_shipping_choice)
    )
      return;
    const t = new CustomEvent("scShippingInfoAdded", {
      detail: n,
      bubbles: !0,
    });
    document.dispatchEvent(t);
  }),
  q("set", (i, n, o) => {
    if ("checkout" !== i) return;
    if (!O.isCheckoutPage) return;
    if (!(null == o ? void 0 : o.id)) return;
    if (JSON.stringify(n) === JSON.stringify(o)) return;
    const t = new CustomEvent("scCheckoutUpdated", {
      detail: { currentCheckout: n, previousCheckout: o },
      bubbles: !0,
    });
    document.dispatchEvent(t);
  }),
  window.addEventListener("scAddedToCart", (i) => {
    var n, o, t, d, e, u, r, c, a, s, p, m;
    const _ = i.detail;
    (null === (n = null == _ ? void 0 : _.price) || void 0 === n
      ? void 0
      : n.product) &&
      l("add_to_cart", {
        currency: null === (o = _.price) || void 0 === o ? void 0 : o.currency,
        value: v(
          (null === (t = null == _ ? void 0 : _.price) || void 0 === t
            ? void 0
            : t.amount) || 0,
          (null === (d = _.price) || void 0 === d ? void 0 : d.currency) ||
            "USD"
        ),
        items: [
          {
            item_id:
              null ===
                (u =
                  null === (e = _.price) || void 0 === e
                    ? void 0
                    : e.product) || void 0 === u
                ? void 0
                : u.id,
            item_name:
              null ===
                (c =
                  null === (r = _.price) || void 0 === r
                    ? void 0
                    : r.product) || void 0 === c
                ? void 0
                : c.name,
            item_variant: (_.variant_options || []).join(" / "),
            price: v(
              (null === (a = null == _ ? void 0 : _.price) || void 0 === a
                ? void 0
                : a.amount) || 0,
              (null === (s = _.price) || void 0 === s ? void 0 : s.currency) ||
                "USD"
            ),
            currency:
              null === (p = _.price) || void 0 === p ? void 0 : p.currency,
            quantity: _.quantity,
            discount: (null == _ ? void 0 : _.discount_amount)
              ? v(
                  (null == _ ? void 0 : _.discount_amount) || 0,
                  (null === (m = _.price) || void 0 === m
                    ? void 0
                    : m.currency) || "USD"
                )
              : 0,
          },
        ],
      });
  }),
  window.addEventListener("scRemovedFromCart", (i) => {
    var n, o, t, d, e, u, r, c, a, s, p, m;
    const _ = i.detail;
    (null === (n = null == _ ? void 0 : _.price) || void 0 === n
      ? void 0
      : n.product) &&
      l("remove_from_cart", {
        currency: null === (o = _.price) || void 0 === o ? void 0 : o.currency,
        value: v(
          (null === (t = null == _ ? void 0 : _.price) || void 0 === t
            ? void 0
            : t.amount) || 0,
          (null === (d = _.price) || void 0 === d ? void 0 : d.currency) ||
            "USD"
        ),
        items: [
          {
            item_id:
              null ===
                (u =
                  null === (e = _.price) || void 0 === e
                    ? void 0
                    : e.product) || void 0 === u
                ? void 0
                : u.id,
            item_name:
              null ===
                (c =
                  null === (r = _.price) || void 0 === r
                    ? void 0
                    : r.product) || void 0 === c
                ? void 0
                : c.name,
            item_variant: (_.variant_options || []).join(" / "),
            price: v(
              (null === (a = null == _ ? void 0 : _.price) || void 0 === a
                ? void 0
                : a.amount) || 0,
              (null === (s = _.price) || void 0 === s ? void 0 : s.currency) ||
                "USD"
            ),
            currency:
              null === (p = _.price) || void 0 === p ? void 0 : p.currency,
            quantity: _.quantity,
            discount: (null == _ ? void 0 : _.discount_amount)
              ? v(
                  (null == _ ? void 0 : _.discount_amount) || 0,
                  (null === (m = _.price) || void 0 === m
                    ? void 0
                    : m.currency) || "USD"
                )
              : 0,
          },
        ],
      });
  }),
  window.addEventListener("scViewedCart", (i) => {
    var n;
    const o = i.detail;
    l("view_cart", {
      currency: o.currency,
      value: v(o.total_amount, o.currency),
      items: (
        (null === (n = o.line_items) || void 0 === n ? void 0 : n.data) || []
      ).map((i) => {
        var n, o, t, d, e, l, u, r, c;
        return {
          item_id:
            null ===
              (o =
                null === (n = null == i ? void 0 : i.price) || void 0 === n
                  ? void 0
                  : n.product) || void 0 === o
              ? void 0
              : o.id,
          item_name:
            null ===
              (d =
                null === (t = null == i ? void 0 : i.price) || void 0 === t
                  ? void 0
                  : t.product) || void 0 === d
              ? void 0
              : d.name,
          currency:
            null === (e = i.price) || void 0 === e ? void 0 : e.currency,
          discount: i.discount_amount
            ? v(
                i.discount_amount,
                null === (l = i.price) || void 0 === l ? void 0 : l.currency
              )
            : 0,
          price: v(
            null === (u = null == i ? void 0 : i.price) || void 0 === u
              ? void 0
              : u.amount,
            null === (r = i.price) || void 0 === r ? void 0 : r.currency
          ),
          quantity: i.quantity,
          ...((
            null === (c = null == i ? void 0 : i.variant_options) ||
            void 0 === c
              ? void 0
              : c.length
          )
            ? { item_variant: (i.variant_options || []).join(" / ") }
            : {}),
        };
      }),
    });
  }),
  window.addEventListener("scCheckoutInitiated", (i) => {
    var n;
    const o = i.detail;
    l("begin_checkout", {
      currency: o.currency,
      value: v(o.total_amount, o.currency),
      items: (
        (null === (n = o.line_items) || void 0 === n ? void 0 : n.data) || []
      ).map((i) => {
        var n, o, t, d, e, l, u, r, c;
        return {
          item_id:
            null ===
              (o =
                null === (n = null == i ? void 0 : i.price) || void 0 === n
                  ? void 0
                  : n.product) || void 0 === o
              ? void 0
              : o.id,
          item_name:
            null ===
              (d =
                null === (t = null == i ? void 0 : i.price) || void 0 === t
                  ? void 0
                  : t.product) || void 0 === d
              ? void 0
              : d.name,
          currency:
            null === (e = i.price) || void 0 === e ? void 0 : e.currency,
          discount: i.discount_amount
            ? v(
                i.discount_amount,
                null === (l = i.price) || void 0 === l ? void 0 : l.currency
              )
            : 0,
          price: v(
            null === (u = null == i ? void 0 : i.price) || void 0 === u
              ? void 0
              : u.amount,
            null === (r = i.price) || void 0 === r ? void 0 : r.currency
          ),
          quantity: i.quantity,
          ...((
            null === (c = null == i ? void 0 : i.variant_options) ||
            void 0 === c
              ? void 0
              : c.length
          )
            ? { item_variant: (i.variant_options || []).join(" / ") }
            : {}),
        };
      }),
    });
  }),
  window.addEventListener("scCheckoutCompleted", (i) => {
    var n;
    const o = i.detail;
    l("purchase", {
      transaction_id: null == o ? void 0 : o.id,
      value: v(
        null == o ? void 0 : o.total_amount,
        (null == o ? void 0 : o.currency) || "USD"
      ),
      currency: (o.currency || "").toUpperCase(),
      items: (
        (null === (n = null == o ? void 0 : o.line_items) || void 0 === n
          ? void 0
          : n.data) || []
      ).map((i) => {
        var n, t, d, e, l, u, r, c;
        return {
          item_id:
            null ===
              (t =
                null === (n = null == i ? void 0 : i.price) || void 0 === n
                  ? void 0
                  : n.product) || void 0 === t
              ? void 0
              : t.id,
          currency: (o.currency || "").toUpperCase(),
          item_name:
            (null ===
              (e =
                null === (d = null == i ? void 0 : i.price) || void 0 === d
                  ? void 0
                  : d.product) || void 0 === e
              ? void 0
              : e.name) || "",
          discount: (null == i ? void 0 : i.discount_amount)
            ? v(
                (null == i ? void 0 : i.discount_amount) || 0,
                (null === (l = null == i ? void 0 : i.price) || void 0 === l
                  ? void 0
                  : l.currency) || "USD"
              )
            : 0,
          price: v(
            (null === (u = null == i ? void 0 : i.price) || void 0 === u
              ? void 0
              : u.amount) || 0,
            (null === (r = null == i ? void 0 : i.price) || void 0 === r
              ? void 0
              : r.currency) || "USD"
          ),
          quantity: (null == i ? void 0 : i.quantity) || 1,
          ...((
            null === (c = null == i ? void 0 : i.variant_options) ||
            void 0 === c
              ? void 0
              : c.length
          )
            ? { item_variant: (i.variant_options || []).join(" / ") }
            : {}),
        };
      }),
    });
  }),
  window.addEventListener("scPaymentInfoAdded", (i) => {
    var n;
    const o = i.detail;
    l("add_payment_info", {
      currency: o.currency,
      value: v(o.total_amount, o.currency),
      items: (
        (null === (n = o.line_items) || void 0 === n ? void 0 : n.data) || []
      ).map((i) => {
        var n, o, t, d, e, l, u, r, c;
        return {
          item_id:
            null ===
              (o =
                null === (n = null == i ? void 0 : i.price) || void 0 === n
                  ? void 0
                  : n.product) || void 0 === o
              ? void 0
              : o.id,
          item_name:
            (null ===
              (d =
                null === (t = null == i ? void 0 : i.price) || void 0 === t
                  ? void 0
                  : t.product) || void 0 === d
              ? void 0
              : d.name) || "",
          currency:
            null === (e = i.price) || void 0 === e ? void 0 : e.currency,
          discount: i.discount_amount
            ? v(
                i.discount_amount,
                null === (l = i.price) || void 0 === l ? void 0 : l.currency
              )
            : 0,
          price: v(
            null === (u = null == i ? void 0 : i.price) || void 0 === u
              ? void 0
              : u.amount,
            null === (r = i.price) || void 0 === r ? void 0 : r.currency
          ),
          quantity: i.quantity,
          ...((
            null === (c = null == i ? void 0 : i.variant_options) ||
            void 0 === c
              ? void 0
              : c.length
          )
            ? { item_variant: (i.variant_options || []).join(" / ") }
            : {}),
        };
      }),
    });
  }),
  window.addEventListener("scShippingInfoAdded", (i) => {
    var n, o, t, d, e, u, r, c;
    const a = i.detail,
      s =
        null ===
          (o =
            null === (n = null == a ? void 0 : a.shipping_choices) ||
            void 0 === n
              ? void 0
              : n.data) || void 0 === o
          ? void 0
          : o.find(
              (i) => i.id === (null == a ? void 0 : a.selected_shipping_choice)
            ),
      p =
        (null === (t = null == s ? void 0 : s.shipping_method) || void 0 === t
          ? void 0
          : t.name) || "";
    l("add_shipping_info", {
      currency: a.currency,
      value: v(a.total_amount, a.currency),
      ...((
        null ===
          (e =
            null === (d = null == a ? void 0 : a.discount) || void 0 === d
              ? void 0
              : d.promotion) || void 0 === e
          ? void 0
          : e.code
      )
        ? {
            coupon:
              null ===
                (r =
                  null === (u = null == a ? void 0 : a.discount) || void 0 === u
                    ? void 0
                    : u.promotion) || void 0 === r
                ? void 0
                : r.code,
          }
        : {}),
      ...(p ? { shipping_tier: p } : ""),
      items: (
        (null === (c = a.line_items) || void 0 === c ? void 0 : c.data) || []
      ).map((i) => {
        var n, o, t, d, e, l, u, r, c;
        return {
          item_id:
            null ===
              (o =
                null === (n = null == i ? void 0 : i.price) || void 0 === n
                  ? void 0
                  : n.product) || void 0 === o
              ? void 0
              : o.id,
          item_name:
            (null ===
              (d =
                null === (t = null == i ? void 0 : i.price) || void 0 === t
                  ? void 0
                  : t.product) || void 0 === d
              ? void 0
              : d.name) || "",
          currency:
            null === (e = i.price) || void 0 === e ? void 0 : e.currency,
          discount: i.discount_amount
            ? v(
                i.discount_amount,
                null === (l = i.price) || void 0 === l ? void 0 : l.currency
              )
            : 0,
          price: v(
            null === (u = null == i ? void 0 : i.price) || void 0 === u
              ? void 0
              : u.amount,
            null === (r = i.price) || void 0 === r ? void 0 : r.currency
          ),
          quantity: i.quantity,
          ...((
            null === (c = null == i ? void 0 : i.variant_options) ||
            void 0 === c
              ? void 0
              : c.length
          )
            ? { item_variant: (i.variant_options || []).join(" / ") }
            : {}),
        };
      }),
    });
  }),
  window.addEventListener("scAddedToCart", function (i) {
    var n, o, t, d, e, l, u, r;
    if (!(null === window || void 0 === window ? void 0 : window.fbq)) return;
    const c = i.detail;
    if (
      !(null === (n = null == c ? void 0 : c.price) || void 0 === n
        ? void 0
        : n.product)
    )
      return;
    const a =
        null === (o = null == c ? void 0 : c.price) || void 0 === o
          ? void 0
          : o.product,
      s =
        (null ===
          (d =
            null === (t = null == a ? void 0 : a.product_collections) ||
            void 0 === t
              ? void 0
              : t.data) || void 0 === d
          ? void 0
          : d.map((i) => i.name)) || [];
    window.fbq("track", "AddToCart", {
      ...(s.length ? { content_category: s.join(", ") } : {}),
      content_ids: [a.id],
      content_name:
        (null == a ? void 0 : a.name) +
        ((
          null === (e = null == c ? void 0 : c.variant_options) || void 0 === e
            ? void 0
            : e.length
        )
          ? ` - ${null == c ? void 0 : c.variant_options.join(" / ")}`
          : ""),
      content_type: "product",
      contents: [{ id: a.id, quantity: c.quantity }],
      currency:
        null === (l = null == c ? void 0 : c.price) || void 0 === l
          ? void 0
          : l.currency,
      value: v(
        (null === (u = null == c ? void 0 : c.price) || void 0 === u
          ? void 0
          : u.amount) || 0,
        (null === (r = null == c ? void 0 : c.price) || void 0 === r
          ? void 0
          : r.currency) || "USD"
      ),
    });
  }),
  window.addEventListener("scCheckoutInitiated", function (i) {
    var n, o, t, d;
    if (!(null === window || void 0 === window ? void 0 : window.fbq)) return;
    const e = i.detail;
    window.fbq("track", "InitiateCheckout", {
      content_ids:
        null === (n = (null == e ? void 0 : e.line_items.data) || []) ||
        void 0 === n
          ? void 0
          : n.map((i) => i.id),
      contents:
        null === (o = (null == e ? void 0 : e.line_items.data) || []) ||
        void 0 === o
          ? void 0
          : o.map((i) => ({ id: i.id, quantity: i.quantity })),
      currency: null == e ? void 0 : e.currency,
      num_items:
        (null ===
          (d =
            null === (t = null == e ? void 0 : e.line_items) || void 0 === t
              ? void 0
              : t.data) || void 0 === d
          ? void 0
          : d.length) || 0,
      value: v(
        null == e ? void 0 : e.total_amount,
        (null == e ? void 0 : e.currency) || "USD"
      ),
    });
  }),
  window.addEventListener("scCheckoutCompleted", function (i) {
    var n, o, t;
    if (!(null === window || void 0 === window ? void 0 : window.fbq)) return;
    const d = i.detail;
    window.fbq("track", "Purchase", {
      content_ids:
        null === (n = null == d ? void 0 : d.items) || void 0 === n
          ? void 0
          : n.map((i) => i.item_id),
      content_name: "Purchase",
      content_type: "product",
      contents:
        null === (o = null == d ? void 0 : d.items) || void 0 === o
          ? void 0
          : o.map((i) => ({ id: i.item_id, quantity: i.quantity })),
      currency: null == d ? void 0 : d.currency,
      num_items:
        null === (t = null == d ? void 0 : d.items) || void 0 === t
          ? void 0
          : t.length,
      value: v(
        null == d ? void 0 : d.total_amount,
        (null == d ? void 0 : d.currency) || "USD"
      ),
    });
  }),
  window.addEventListener("scTrialStarted", function (i) {
    (null === window || void 0 === window ? void 0 : window.fbq) &&
      i.detail.forEach((i) => {
        var n, o, t;
        window.fbq("track", "StartTrial", {
          currency:
            null === (n = i.price) || void 0 === n ? void 0 : n.currency,
          value: v(
            (null === (o = i.price) || void 0 === o ? void 0 : o.amount) || 0,
            (null === (t = i.price) || void 0 === t ? void 0 : t.currency) ||
              "USD"
          ),
        });
      });
  }),
  window.addEventListener("scSubscriptionStarted", function (i) {
    (null === window || void 0 === window ? void 0 : window.fbq) &&
      i.detail.forEach((i) => {
        var n, o, t;
        window.fbq("track", "Subscribe", {
          currency:
            null === (n = i.price) || void 0 === n ? void 0 : n.currency,
          value: v(
            (null === (o = i.price) || void 0 === o ? void 0 : o.amount) || 0,
            (null === (t = i.price) || void 0 === t ? void 0 : t.currency) ||
              "USD"
          ),
        });
      });
  }),
  window.addEventListener("scPaymentInfoAdded", function (i) {
    if (!(null === window || void 0 === window ? void 0 : window.fbq)) return;
    const n = i.detail;
    window.fbq("track", "AddPaymentInfo", {
      content_category: "Payment Info Added",
      currency: null == n ? void 0 : n.currency,
    });
  });
const R = (i, n) => {
    var o;
    return (null === (o = b.state[n]) || void 0 === o ? void 0 : o[i]) || {};
  },
  F = (i, n) => {
    const o = (null == i ? void 0 : i.live_mode) ? "live" : "test";
    b.set(o, { ...b.state[o], [n]: i }),
      O.formId === n && O.mode === o && (O.checkout = i),
      "url" === O.persist &&
        (null == i ? void 0 : i.id) &&
        window.history.replaceState(
          {},
          document.title,
          e(window.location.href, { checkout_id: null == i ? void 0 : i.id })
        );
  },
  V = (i, n) => {
    const { [i]: o, ...t } = b.state[n];
    window.history.replaceState(
      {},
      document.title,
      s(
        window.location.href,
        "redirect_status",
        "coupon",
        "line_items",
        "confirm_checkout_id",
        "checkout_id"
      )
    ),
      b.set(n, t),
      N();
  };
export {
  A as a,
  F as b,
  V as c,
  C as d,
  q as e,
  R as g,
  D as o,
  s as r,
  O as s,
  j as t,
};
