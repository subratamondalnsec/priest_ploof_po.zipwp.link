!(function () {
  var e;
  (e = function () {
    var e,
      n,
      t,
      d,
      o,
      a =
        (null === (e = window) ||
        void 0 === e ||
        null === (n = e.surecartComponents) ||
        void 0 === n
          ? void 0
          : n.url) ||
        (null === (t = window) ||
        void 0 === t ||
        null === (d = t.parent) ||
        void 0 === d ||
        null === (o = d.surecartComponents) ||
        void 0 === o
          ? void 0
          : o.url);
    if (a) {
      var i = document.createElement("script");
      (i.type = "module"),
        (i.src = a),
        document.getElementsByTagName("head")[0].appendChild(i);
    }
  }),
    "interactive" === document.readyState || "complete" === document.readyState
      ? e()
      : document.addEventListener("DOMContentLoaded", e);
})();