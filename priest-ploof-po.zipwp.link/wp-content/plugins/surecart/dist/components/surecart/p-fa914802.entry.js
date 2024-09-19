import { r as i, h as s, H as o } from "./p-cc7ce8c7.js";
import { s as r } from "./p-24f06282.js";
import "./p-25433d0f.js";
import "./p-f70181c4.js";
import "./p-4d73f82a.js";
import "./p-1c2e2695.js";
import "./p-830ab1a3.js";
import "./p-a3a138d6.js";
import "./p-7ef0f71c.js";
import "./p-50da3ba3.js";
const t = ":host{display:block}";
const p = class {
  constructor(s) {
    i(this, s);
    this.label = undefined;
    this.loading = undefined;
  }
  render() {
    var i, t, p;
    if (
      !((i = r === null || r === void 0 ? void 0 : r.checkout) === null ||
      i === void 0
        ? void 0
        : i.bump_amount)
    ) {
      return s(o, { style: { display: "none" } });
    }
    return s(
      "sc-line-item",
      null,
      s(
        "span",
        { slot: "description" },
        this.label || wp.i18n.__("Bundle Discount", "surecart")
      ),
      s(
        "span",
        { slot: "price" },
        s("sc-format-number", {
          type: "currency",
          currency:
            ((t = r === null || r === void 0 ? void 0 : r.checkout) === null ||
            t === void 0
              ? void 0
              : t.currency) || "usd",
          value:
            (p = r === null || r === void 0 ? void 0 : r.checkout) === null ||
            p === void 0
              ? void 0
              : p.bump_amount,
        })
      )
    );
  }
};
p.style = t;
export { p as sc_line_item_bump };
//# sourceMappingURL=p-fa914802.entry.js.map
