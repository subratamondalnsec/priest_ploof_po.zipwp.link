import { c as t } from "./p-25433d0f.js";
import { g as n } from "./p-f70181c4.js";
function r(t, n) {
  var e = "function" == typeof Symbol && t[Symbol.iterator];
  if (!e) return t;
  var r,
    i,
    o = e.call(t),
    a = [];
  try {
    for (; (void 0 === n || n-- > 0) && !(r = o.next()).done; ) a.push(r.value);
  } catch (t) {
    i = { error: t };
  } finally {
    try {
      r && !r.done && (e = o.return) && e.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return a;
}
var e;
!(function (t) {
  (t[(t.NotStarted = 0)] = "NotStarted"),
    (t[(t.Running = 1)] = "Running"),
    (t[(t.Stopped = 2)] = "Stopped");
})(e || (e = {}));
var i = { type: "xstate.init" };
function o(t) {
  return void 0 === t ? [] : [].concat(t);
}
function u(t) {
  return { type: "xstate.assign", assignment: t };
}
function c(t, n) {
  return "string" == typeof (t = "string" == typeof t && n && n[t] ? n[t] : t)
    ? { type: t }
    : "function" == typeof t
    ? { type: t.name, exec: t }
    : t;
}
function a(t) {
  return function (n) {
    return t === n;
  };
}
function f(t) {
  return "string" == typeof t ? { type: t } : t;
}
function s(t, n) {
  return { value: t, context: n, actions: [], changed: !1, matches: a(t) };
}
function p(t, n, e) {
  var r = n,
    i = !1;
  return [
    t.filter(function (t) {
      if ("xstate.assign" === t.type) {
        i = !0;
        var n = Object.assign({}, r);
        return (
          "function" == typeof t.assignment
            ? (n = t.assignment(r, e))
            : Object.keys(t.assignment).forEach(function (i) {
                n[i] =
                  "function" == typeof t.assignment[i]
                    ? t.assignment[i](r, e)
                    : t.assignment[i];
              }),
          (r = n),
          !1
        );
      }
      return !0;
    }),
    r,
    i,
  ];
}
function d(t, n) {
  void 0 === n && (n = {});
  var e = r(
      p(
        o(t.states[t.initial].entry).map(function (t) {
          return c(t, n.actions);
        }),
        t.context,
        i
      ),
      2
    ),
    u = e[0],
    l = e[1],
    g = {
      config: t,
      _options: n,
      initialState: {
        value: t.initial,
        actions: u,
        context: l,
        matches: a(t.initial),
      },
      transition: function (n, e) {
        var i,
          u,
          l = "string" == typeof n ? { value: n, context: t.context } : n,
          d = l.value,
          y = l.context,
          v = f(e),
          m = t.states[d];
        if (m.on) {
          var x = o(m.on[v.type]);
          try {
            for (
              var E = (function (t) {
                  var n = "function" == typeof Symbol && Symbol.iterator,
                    e = n && t[n],
                    r = 0;
                  if (e) return e.call(t);
                  if (t && "number" == typeof t.length)
                    return {
                      next: function () {
                        return (
                          t && r >= t.length && (t = void 0),
                          { value: t && t[r++], done: !t }
                        );
                      },
                    };
                  throw new TypeError(
                    n
                      ? "Object is not iterable."
                      : "Symbol.iterator is not defined."
                  );
                })(x),
                S = E.next();
              !S.done;
              S = E.next()
            ) {
              var h = S.value;
              if (void 0 === h) return s(d, y);
              var R = "string" == typeof h ? { target: h } : h,
                b = R.target,
                _ = R.actions,
                w = void 0 === _ ? [] : _,
                C = R.cond,
                I =
                  void 0 === C
                    ? function () {
                        return !0;
                      }
                    : C,
                T = void 0 === b,
                N = null != b ? b : d,
                O = t.states[N];
              if (I(y, v)) {
                var D = r(
                    p(
                      (T
                        ? o(w)
                        : [].concat(m.exit, w, O.entry).filter(function (t) {
                            return t;
                          })
                      ).map(function (t) {
                        return c(t, g._options.actions);
                      }),
                      y,
                      v
                    ),
                    3
                  ),
                  J = D[0],
                  j = D[1],
                  A = D[2],
                  P = null != b ? b : d;
                return {
                  value: P,
                  context: j,
                  actions: J,
                  changed: b !== d || J.length > 0 || A,
                  matches: a(P),
                };
              }
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              S && !S.done && (u = E.return) && u.call(E);
            } finally {
              if (i) throw i.error;
            }
          }
        }
        return s(d, y);
      },
    };
  return g;
}
var g = function (t, n) {
  return t.actions.forEach(function (e) {
    var r = e.exec;
    return r && r(t.context, n);
  });
};
function y(t) {
  var n = t.initialState,
    r = e.NotStarted,
    o = new Set(),
    c = {
      _machine: t,
      send: function (i) {
        r === e.Running &&
          ((n = t.transition(n, i)),
          g(n, f(i)),
          o.forEach(function (t) {
            return t(n);
          }));
      },
      subscribe: function (t) {
        return (
          o.add(t),
          t(n),
          {
            unsubscribe: function () {
              return o.delete(t);
            },
          }
        );
      },
      start: function (o) {
        if (o) {
          var u =
            "object" == typeof o ? o : { context: t.config.context, value: o };
          n = {
            value: u.value,
            actions: [],
            context: u.context,
            matches: a(u.value),
          };
        }
        return (r = e.Running), g(n, i), c;
      },
      stop: function () {
        return (r = e.Stopped), o.clear(), c;
      },
      get state() {
        return n;
      },
      get status() {
        return r;
      },
    };
  return c;
}
const l = d({
    id: "fetch",
    initial: "draft",
    context: { retries: 3 },
    states: {
      draft: {
        on: {
          PAID: "confirming",
          FINALIZE: "finalizing",
          FETCH: "updating",
          REJECT: "draft",
        },
      },
      updating: {
        on: { RESOLVE: "draft", EXPIRE: "expired", REJECT: "draft" },
      },
      finalizing: {
        on: { PAYING: "paying", REJECT: "draft", PAID: "confirming" },
      },
      paying: { on: { PAID: "confirming", REJECT: "draft" } },
      confirming: { on: { CONFIRMED: "confirmed" } },
      paid: {
        on: {
          CONFIRMED: "confirmed",
          REDIRECT: "redirecting",
          REJECT: "draft",
        },
      },
      expired: {},
      confirmed: { on: { REDIRECT: "redirecting" } },
      redirecting: {},
      failure: {
        on: {
          RETRY: {
            target: "updating",
            actions: u({ retries: (t) => t.retries + 1 }),
          },
        },
      },
    },
  }),
  { form: v } = n(),
  {
    state: m,
    onChange: E,
    on: b,
    set: x,
    get: R,
    dispose: S,
  } = t(
    {
      formState: l.initialState,
      text: {
        loading: {
          finalizing: wp.i18n.__("Submitting...", "surecart"),
          paying: wp.i18n.__("Processing...", "surecart"),
          confirming: wp.i18n.__("Finalizing...", "surecart"),
          confirmed: wp.i18n.__("Success!", "surecart"),
          redirecting: wp.i18n.__("Success! Redirecting...", "surecart"),
        },
        success: {
          title: wp.i18n.__("Thank you!", "surecart"),
          description: wp.i18n.__(
            "Your payment was successful. A receipt is on its way to your inbox.",
            "surecart"
          ),
          button: wp.i18n.__("Continue", "surecart"),
        },
      },
      ...v,
    },
    (t, n, e) =>
      "formState" === e
        ? t.value !== n.value
        : JSON.stringify(t) !== JSON.stringify(n)
  );
export { l as c, E as o, m as s, y as v };
