import { s } from "./p-830ab1a3.js";
import { c as t } from "./p-25433d0f.js";
const e = t(
    {
      type: "default",
      code: "",
      message: "",
      data: { status: 0, type: "", http_status: "" },
      additional_errors: [],
      dismissible: !1,
    },
    (s, a) => JSON.stringify(s) !== JSON.stringify(a)
  ),
  { state: a, onChange: o, on: i, dispose: r, forceUpdate: n } = e,
  p = { dismissible: !1 },
  c = (e, t, r = p) => {
    "string" == typeof t && (t = { type: e, message: t, code: "" }),
      (null == t ? void 0 : t.message) ||
        (t.message = wp.i18n.__(
          "Something went wrong. Please try again.",
          "surecart"
        )),
      (a.type = e),
      (t = { ...r, ...t }),
      s(t.message, "assertive"),
      Object.keys(t).forEach((s) => {
        a[s] = t[s];
      });
  },
  d = (s, a = p) => {
    c("error", s, a);
  },
  f = (s, a = p) => {
    c("info", s, a);
  },
  l = () => {
    (a.type = "default"),
      (a.code = ""),
      (a.message = ""),
      (a.data = { status: 0, type: "", http_status: "" }),
      (a.additional_errors = []);
  };
export { f as a, d as c, l as r, a as s };
