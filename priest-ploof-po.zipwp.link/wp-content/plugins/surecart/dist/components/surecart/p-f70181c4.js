const o = (o) => o && "object" == typeof o && !Array.isArray(o),
  i = () => {
    const t = document.querySelector(
      'script[type="application/json"]#sc-store-data'
    );
    if (!t) return {};
    try {
      const i = JSON.parse(t.textContent);
      if (o(i)) return i;
      throw Error("Parsed state is not an object");
    } catch (o) {
      console.log(o);
    }
    return {};
  },
  n = (o, t, i, n) => {
    var a, l, r, e, v;
    if (
      !(null == n ? void 0 : n.stock_enabled) ||
      (null == n ? void 0 : n.allow_out_of_stock_purchases)
    )
      return !1;
    if (1 === o) {
      const o =
        null ===
          (r = (l =
            (null === (a = n.variants) || void 0 === a ? void 0 : a.data) || [])
            .filter) || void 0 === r
          ? void 0
          : r.call(l, (o) => o.option_1 === t);
      return Math.max(...o.map((o) => o.available_stock)) <= 0;
    }
    if (2 === o) {
      const o = (
        (null === (e = n.variants) || void 0 === e ? void 0 : e.data) || []
      ).filter(
        (o) =>
          (null == o ? void 0 : o.option_1) === i.option_1 && o.option_2 === t
      );
      return Math.max(...o.map((o) => o.available_stock)) <= 0;
    }
    const d = (
        (null === (v = n.variants) || void 0 === v ? void 0 : v.data) || []
      ).filter(
        (o) =>
          (null == o ? void 0 : o.option_1) === i.option_1 &&
          (null == o ? void 0 : o.option_2) === i.option_2 &&
          o.option_3 === t
      ),
      s = Math.max(...d.map((o) => o.available_stock));
    return s <= 0;
  },
  t = (o, t, i, n) => {
    var a, l, r;
    return 1 === o
      ? !(
          (null === (a = null == n ? void 0 : n.variants) || void 0 === a
            ? void 0
            : a.data) || []
        ).some((o) => o.option_1 === t)
      : 2 === o
      ? !(
          (null === (l = null == n ? void 0 : n.variants) || void 0 === l
            ? void 0
            : l.data) || []
        ).some(
          (o) =>
            (null == o ? void 0 : o.option_1) === i.option_1 && o.option_2 === t
        )
      : !(
          (null === (r = null == n ? void 0 : n.variants) || void 0 === r
            ? void 0
            : r.data) || []
        ).some(
          (o) =>
            (null == o ? void 0 : o.option_1) === i.option_1 &&
            (null == o ? void 0 : o.option_2) === i.option_2 &&
            o.option_3 === t
        );
  };
export { t as a, i as g, n as i };
