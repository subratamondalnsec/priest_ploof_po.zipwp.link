const o = (i) =>
    ((null == i ? void 0 : i.data) || []).map((i) => {
      var d;
      return {
        ...((null == i ? void 0 : i.id) ? { id: i.id } : {}),
        price_id: i.price.id,
        quantity: i.quantity,
        variant_id: null === (d = i.variant) || void 0 === d ? void 0 : d.id,
      };
    }),
  i = (i) => ((null == i ? void 0 : i.data) || []).map((i) => i.price.id),
  v = (i) =>
    ((null == i ? void 0 : i.data) || []).map((i) => {
      var d;
      return (
        (null === (d = null == i ? void 0 : i.bump) || void 0 === d
          ? void 0
          : d.id) || (null == i ? void 0 : i.bump)
      );
    }),
  d = (i, d) =>
    ((null == i ? void 0 : i.data) || []).find((i) => i.price.id === d),
  l = (d, l) =>
    !!i(null == l ? void 0 : l.line_items).find(
      (i) => (null == d ? void 0 : d.id) === i
    ),
  n = (i, d) =>
    !!v(null == d ? void 0 : d.line_items).find(
      (d) => (null == i ? void 0 : i.id) === d
    ),
  u = (i) => {
    var d, l, n;
    return (
      !!(null ===
        (l =
          null === (d = null == i ? void 0 : i.line_items) || void 0 === d
            ? void 0
            : d.data) || void 0 === l
        ? void 0
        : l.length) &&
      (null === (n = null == i ? void 0 : i.line_items.data) || void 0 === n
        ? void 0
        : n.some((i) => {
            var d;
            return null === (d = null == i ? void 0 : i.price) || void 0 === d
              ? void 0
              : d.recurring_interval_count;
          }))
    );
  };
export { n as a, o as c, d as g, u as h, l as i };