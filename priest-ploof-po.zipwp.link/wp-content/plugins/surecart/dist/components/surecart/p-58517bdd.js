import { c as a, s } from "./p-24f06282.js";
import { u as t } from "./p-f9c1f513.js";
import { c as o } from "./p-8266bbed.js";
import { u as c, r, a as e } from "./p-5ec5df35.js";
import { a as i } from "./p-18e45a13.js";
const n = () => a(s.formId, s.mode),
  d = (o) => (s.locks = [...s.locks, o]),
  E = (o = "") => (s.locks = o ? s.locks.filter((s) => s !== o) : []),
  m = async ({ id: a, data: e }) => {
    try {
      t("FETCH"), (s.checkout = await c({ id: a, data: e })), t("RESOLVE");
    } catch (a) {
      console.error(a), o(a), t("REJECT");
    }
  },
  p = async (c) => {
    try {
      t("FETCH"),
        (s.checkout = await r({ checkoutId: s.checkout.id, itemId: c })),
        t("RESOLVE");
    } catch (c) {
      console.error(c), o(c), t("REJECT");
    }
  },
  f = async (c) => {
    try {
      t("FETCH"),
        (s.checkout = await e({
          checkout: s.checkout,
          data: c,
          live_mode: "live" === (null == s ? void 0 : s.mode),
        })),
        t("RESOLVE");
    } catch (c) {
      console.error(c), o(c), t("REJECT");
    }
  },
  u = (o) => {
    var c;
    (null === (c = s.checkout) || void 0 === c ? void 0 : c.id) &&
      i({
        path: `surecart/v1/checkouts/${s.checkout.id}/offer_bump/${o}`,
        method: "POST",
        keepalive: !0,
      });
  };
export { f as a, E as b, n as c, d as l, p as r, u as t, m as u };
