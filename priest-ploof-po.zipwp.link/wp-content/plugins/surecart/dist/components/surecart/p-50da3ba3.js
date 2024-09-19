import { z as r } from "./p-7ef0f71c.js";
const e = (n, e) => (r.includes(e) ? n : n / 100),
  t = (r) =>
    (null == r ? void 0 : r.amount_off) && (null == r ? void 0 : r.currency)
      ? a({ amount: r.amount_off, currency: r.currency })
      : (null == r ? void 0 : r.percent_off)
      ? wp.i18n.sprintf(wp.i18n.__("%1d%% off", "surecart"), 0 | r.percent_off)
      : "",
  a = ({ amount: r, currency: n }) => {
    const t = e(r, n);
    return `${new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: n,
    }).format(parseFloat(t.toFixed(2)))}`;
  },
  s = (r = "usd") => {
    var n;
    return null ===
      (n = new Intl.NumberFormat(void 0, { style: "currency", currency: r })
        .formatToParts()
        .find((r) => "currency" === r.type)) || void 0 === n
      ? void 0
      : n.value;
  },
  n = (
    r,
    n,
    e = wp.i18n.__("every", "surecart"),
    t = wp.i18n.__("once", "surecart"),
    a = !1
  ) => {
    switch (n) {
      case "day":
        return `${e} ${wp.i18n.sprintf(
          a
            ? wp.i18n._n("%d day", "%d days", r, "surecart")
            : wp.i18n._n("day", "%d days", r, "surecart"),
          r
        )}`;
      case "week":
        return `${e} ${wp.i18n.sprintf(
          a
            ? wp.i18n._n("%d week", "%d weeks", r, "surecart")
            : wp.i18n._n("week", "%d weeks", r, "surecart"),
          r
        )}`;
      case "month":
        return `${e} ${wp.i18n.sprintf(
          a
            ? wp.i18n._n("%d month", "%d months", r, "surecart")
            : wp.i18n._n("month", "%d months", r, "surecart"),
          r
        )}`;
      case "year":
        return `${e} ${wp.i18n.sprintf(
          a
            ? wp.i18n._n("%d year", "%d years", r, "surecart")
            : wp.i18n._n("year", "%d years", r, "surecart"),
          r
        )}`;
      default:
        return t;
    }
  },
  u = (r, n, e = wp.i18n.__("once", "surecart"), t = !1) => {
    switch (n) {
      case "day":
        return ` / ${wp.i18n.sprintf(
          t
            ? wp.i18n._n("%d day", "%d days", r, "surecart")
            : wp.i18n._n("day", "%d days", r, "surecart"),
          r
        )}`;
      case "week":
        return ` / ${wp.i18n.sprintf(
          t
            ? wp.i18n._n("%d wk", "%d wks", r, "surecart")
            : wp.i18n._n("wk", "%d wks", r, "surecart"),
          r
        )}`;
      case "month":
        return ` / ${wp.i18n.sprintf(
          t
            ? wp.i18n._n("%d mo", "%d months", r, "surecart")
            : wp.i18n._n("mo", "%d mos", r, "surecart"),
          r
        )}`;
      case "year":
        return ` / ${wp.i18n.sprintf(
          t
            ? wp.i18n._n("%d yr", "%d yrs", r, "surecart")
            : wp.i18n._n("yr", "%d yrs", r, "surecart"),
          r
        )}`;
      default:
        return e;
    }
  },
  c = (r, n = {}) => {
    if (!r) return "";
    const { showOnce: e, labels: t, abbreviate: a } = n,
      { interval: i = wp.i18n.__("every", "surecart") } = t || {};
    return `${o(r, i, e ? wp.i18n.__("once", "surecart") : "", a)} ${d(r, a)}`;
  },
  o = (r, e, t = wp.i18n.__("once", "surecart"), a = !1) =>
    r.recurring_interval_count &&
    r.recurring_interval &&
    1 !== (null == r ? void 0 : r.recurring_period_count)
      ? a
        ? u(r.recurring_interval_count, r.recurring_interval, t)
        : n(r.recurring_interval_count, r.recurring_interval, ` ${e}`, t)
      : "",
  d = (r, n = !1) =>
    (null == r ? void 0 : r.recurring_period_count) &&
    1 !== (null == r ? void 0 : r.recurring_period_count)
      ? n
        ? `x ${r.recurring_period_count}`
        : ` (${wp.i18n.sprintf(
            wp.i18n._n(
              "%d payment",
              "%d payments",
              r.recurring_period_count,
              "surecart"
            ),
            r.recurring_period_count
          )})`
      : "",
  w = (r) =>
    wp.i18n.sprintf(
      wp.i18n._n(
        "%d payment remaining",
        "%d payments remaining",
        r,
        "surecart"
      ),
      r
    ),
  p = (r) => {
    var n;
    return r
      ? `${
          null === (n = null == r ? void 0 : r.product) || void 0 === n
            ? void 0
            : n.name
        } ${(null == r ? void 0 : r.name) ? `— ${r.name}` : ""}`
      : "";
  },
  i = (r) => {
    switch (r) {
      case "invalid":
        return wp.i18n.__("Not valid", "surecart");
      case "expired":
        return wp.i18n.__("Expired", "surecart");
      case "gone":
        return wp.i18n.__("Not available", "surecart");
      case "less_than_min_subtotal_amount":
        return wp.i18n.__("Minimum not met", "surecart");
      case "greater_than_max_subtotal_amount":
        return wp.i18n.__("Order too large", "surecart");
      case "not_applicable":
        return wp.i18n.__("Product(s) not eligible", "surecart");
      case "not_applicable_to_customer":
        return wp.i18n.__("Not eligible", "surecart");
      case "":
        return "";
      default:
        return wp.i18n.__("Not redeemable", "surecart");
    }
  };
export { t as a, w as b, i as c, s as d, a as g, c as i, p, n as t };
