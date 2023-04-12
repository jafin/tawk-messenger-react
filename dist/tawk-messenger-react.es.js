import { forwardRef as Ce, useEffect as Se, useImperativeHandle as Pe } from "react";
var S = {}, fe = {
  get exports() {
    return S;
  },
  set exports(e) {
    S = e;
  }
}, N = {}, _e = {
  get exports() {
    return N;
  },
  set exports(e) {
    N = e;
  }
}, T = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ae() {
  if (de)
    return T;
  de = 1;
  var e = typeof Symbol == "function" && Symbol.for, O = e ? Symbol.for("react.element") : 60103, g = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, v = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, _ = e ? Symbol.for("react.async_mode") : 60111, P = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function k(a) {
    if (typeof a == "object" && a !== null) {
      var z = a.$$typeof;
      switch (z) {
        case O:
          switch (a = a.type, a) {
            case _:
            case P:
            case s:
            case n:
            case v:
            case C:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case f:
                case m:
                case j:
                case I:
                case c:
                  return a;
                default:
                  return z;
              }
          }
        case g:
          return z;
      }
    }
  }
  function x(a) {
    return k(a) === P;
  }
  return T.AsyncMode = _, T.ConcurrentMode = P, T.ContextConsumer = f, T.ContextProvider = c, T.Element = O, T.ForwardRef = m, T.Fragment = s, T.Lazy = j, T.Memo = I, T.Portal = g, T.Profiler = n, T.StrictMode = v, T.Suspense = C, T.isAsyncMode = function(a) {
    return x(a) || k(a) === _;
  }, T.isConcurrentMode = x, T.isContextConsumer = function(a) {
    return k(a) === f;
  }, T.isContextProvider = function(a) {
    return k(a) === c;
  }, T.isElement = function(a) {
    return typeof a == "object" && a !== null && a.$$typeof === O;
  }, T.isForwardRef = function(a) {
    return k(a) === m;
  }, T.isFragment = function(a) {
    return k(a) === s;
  }, T.isLazy = function(a) {
    return k(a) === j;
  }, T.isMemo = function(a) {
    return k(a) === I;
  }, T.isPortal = function(a) {
    return k(a) === g;
  }, T.isProfiler = function(a) {
    return k(a) === n;
  }, T.isStrictMode = function(a) {
    return k(a) === v;
  }, T.isSuspense = function(a) {
    return k(a) === C;
  }, T.isValidElementType = function(a) {
    return typeof a == "string" || typeof a == "function" || a === s || a === P || a === n || a === v || a === C || a === R || typeof a == "object" && a !== null && (a.$$typeof === j || a.$$typeof === I || a.$$typeof === c || a.$$typeof === f || a.$$typeof === m || a.$$typeof === M || a.$$typeof === $ || a.$$typeof === D || a.$$typeof === A);
  }, T.typeOf = k, T;
}
var b = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function Oe() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, O = e ? Symbol.for("react.element") : 60103, g = e ? Symbol.for("react.portal") : 60106, s = e ? Symbol.for("react.fragment") : 60107, v = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, _ = e ? Symbol.for("react.async_mode") : 60111, P = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, j = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function k(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === s || r === P || r === n || r === v || r === C || r === R || typeof r == "object" && r !== null && (r.$$typeof === j || r.$$typeof === I || r.$$typeof === c || r.$$typeof === f || r.$$typeof === m || r.$$typeof === M || r.$$typeof === $ || r.$$typeof === D || r.$$typeof === A);
    }
    function x(r) {
      if (typeof r == "object" && r !== null) {
        var q = r.$$typeof;
        switch (q) {
          case O:
            var B = r.type;
            switch (B) {
              case _:
              case P:
              case s:
              case n:
              case v:
              case C:
                return B;
              default:
                var ce = B && B.$$typeof;
                switch (ce) {
                  case f:
                  case m:
                  case j:
                  case I:
                  case c:
                    return ce;
                  default:
                    return q;
                }
            }
          case g:
            return q;
        }
      }
    }
    var a = _, z = P, H = f, J = c, X = O, G = m, F = s, K = j, Z = I, W = g, Q = n, Y = v, U = C, V = !1;
    function ee(r) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(r) || x(r) === _;
    }
    function t(r) {
      return x(r) === P;
    }
    function i(r) {
      return x(r) === f;
    }
    function y(r) {
      return x(r) === c;
    }
    function d(r) {
      return typeof r == "object" && r !== null && r.$$typeof === O;
    }
    function o(r) {
      return x(r) === m;
    }
    function p(r) {
      return x(r) === s;
    }
    function u(r) {
      return x(r) === j;
    }
    function l(r) {
      return x(r) === I;
    }
    function w(r) {
      return x(r) === g;
    }
    function E(r) {
      return x(r) === n;
    }
    function h(r) {
      return x(r) === v;
    }
    function L(r) {
      return x(r) === C;
    }
    b.AsyncMode = a, b.ConcurrentMode = z, b.ContextConsumer = H, b.ContextProvider = J, b.Element = X, b.ForwardRef = G, b.Fragment = F, b.Lazy = K, b.Memo = Z, b.Portal = W, b.Profiler = Q, b.StrictMode = Y, b.Suspense = U, b.isAsyncMode = ee, b.isConcurrentMode = t, b.isContextConsumer = i, b.isContextProvider = y, b.isElement = d, b.isForwardRef = o, b.isFragment = p, b.isLazy = u, b.isMemo = l, b.isPortal = w, b.isProfiler = E, b.isStrictMode = h, b.isSuspense = L, b.isValidElementType = k, b.typeOf = x;
  }()), b;
}
var ye;
function be() {
  return ye || (ye = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Ae() : e.exports = Oe();
  }(_e)), N;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var te, ve;
function Re() {
  if (ve)
    return te;
  ve = 1;
  var e = Object.getOwnPropertySymbols, O = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
  function s(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var c = {}, f = 0; f < 10; f++)
        c["_" + String.fromCharCode(f)] = f;
      var _ = Object.getOwnPropertyNames(c).map(function(m) {
        return c[m];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        P[m] = m;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return te = v() ? Object.assign : function(n, c) {
    for (var f, _ = s(n), P, m = 1; m < arguments.length; m++) {
      f = Object(arguments[m]);
      for (var C in f)
        O.call(f, C) && (_[C] = f[C]);
      if (e) {
        P = e(f);
        for (var R = 0; R < P.length; R++)
          g.call(f, P[R]) && (_[P[R]] = f[P[R]]);
      }
    }
    return _;
  }, te;
}
var ne, pe;
function se() {
  if (pe)
    return ne;
  pe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ne = e, ne;
}
var re, we;
function Ee() {
  return we || (we = 1, re = Function.call.bind(Object.prototype.hasOwnProperty)), re;
}
var ae, he;
function Ie() {
  if (he)
    return ae;
  he = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var O = se(), g = {}, s = Ee();
    e = function(n) {
      var c = "Warning: " + n;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function v(n, c, f, _, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in n)
        if (s(n, m)) {
          var C;
          try {
            if (typeof n[m] != "function") {
              var R = Error(
                (_ || "React class") + ": " + f + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw R.name = "Invariant Violation", R;
            }
            C = n[m](c, m, _, f, null, O);
          } catch (j) {
            C = j;
          }
          if (C && !(C instanceof Error) && e(
            (_ || "React class") + ": type specification of " + f + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof C + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), C instanceof Error && !(C.message in g)) {
            g[C.message] = !0;
            var I = P ? P() : "";
            e(
              "Failed " + f + " type: " + C.message + (I ?? "")
            );
          }
        }
    }
  }
  return v.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (g = {});
  }, ae = v, ae;
}
var ie, ge;
function xe() {
  if (ge)
    return ie;
  ge = 1;
  var e = be(), O = Re(), g = se(), s = Ee(), v = Ie(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(f) {
    var _ = "Warning: " + f;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return ie = function(f, _) {
    var P = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function C(t) {
      var i = t && (P && t[P] || t[m]);
      if (typeof i == "function")
        return i;
    }
    var R = "<<anonymous>>", I = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: D(),
      arrayOf: k,
      element: x(),
      elementType: a(),
      instanceOf: z,
      node: G(),
      objectOf: J,
      oneOf: H,
      oneOfType: X,
      shape: K,
      exact: Z
    };
    function j(t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    }
    function A(t, i) {
      this.message = t, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function M(t) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, y = 0;
      function d(p, u, l, w, E, h, L) {
        if (w = w || R, h = h || l, L !== g) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var q = w + ":" + l;
            !i[q] && // Avoid spamming the console because they are often not actionable except for lib authors
            y < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + w + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[q] = !0, y++);
          }
        }
        return u[l] == null ? p ? u[l] === null ? new A("The " + E + " `" + h + "` is marked as required " + ("in `" + w + "`, but its value is `null`.")) : new A("The " + E + " `" + h + "` is marked as required in " + ("`" + w + "`, but its value is `undefined`.")) : null : t(u, l, w, E, h);
      }
      var o = d.bind(null, !1);
      return o.isRequired = d.bind(null, !0), o;
    }
    function $(t) {
      function i(y, d, o, p, u, l) {
        var w = y[d], E = Y(w);
        if (E !== t) {
          var h = U(w);
          return new A(
            "Invalid " + p + " `" + u + "` of type " + ("`" + h + "` supplied to `" + o + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return M(i);
    }
    function D() {
      return M(c);
    }
    function k(t) {
      function i(y, d, o, p, u) {
        if (typeof t != "function")
          return new A("Property `" + u + "` of component `" + o + "` has invalid PropType notation inside arrayOf.");
        var l = y[d];
        if (!Array.isArray(l)) {
          var w = Y(l);
          return new A("Invalid " + p + " `" + u + "` of type " + ("`" + w + "` supplied to `" + o + "`, expected an array."));
        }
        for (var E = 0; E < l.length; E++) {
          var h = t(l, E, o, p, u + "[" + E + "]", g);
          if (h instanceof Error)
            return h;
        }
        return null;
      }
      return M(i);
    }
    function x() {
      function t(i, y, d, o, p) {
        var u = i[y];
        if (!f(u)) {
          var l = Y(u);
          return new A("Invalid " + o + " `" + p + "` of type " + ("`" + l + "` supplied to `" + d + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(t);
    }
    function a() {
      function t(i, y, d, o, p) {
        var u = i[y];
        if (!e.isValidElementType(u)) {
          var l = Y(u);
          return new A("Invalid " + o + " `" + p + "` of type " + ("`" + l + "` supplied to `" + d + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(t);
    }
    function z(t) {
      function i(y, d, o, p, u) {
        if (!(y[d] instanceof t)) {
          var l = t.name || R, w = ee(y[d]);
          return new A("Invalid " + p + " `" + u + "` of type " + ("`" + w + "` supplied to `" + o + "`, expected ") + ("instance of `" + l + "`."));
        }
        return null;
      }
      return M(i);
    }
    function H(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), c;
      function i(y, d, o, p, u) {
        for (var l = y[d], w = 0; w < t.length; w++)
          if (j(l, t[w]))
            return null;
        var E = JSON.stringify(t, function(L, r) {
          var q = U(r);
          return q === "symbol" ? String(r) : r;
        });
        return new A("Invalid " + p + " `" + u + "` of value `" + String(l) + "` " + ("supplied to `" + o + "`, expected one of " + E + "."));
      }
      return M(i);
    }
    function J(t) {
      function i(y, d, o, p, u) {
        if (typeof t != "function")
          return new A("Property `" + u + "` of component `" + o + "` has invalid PropType notation inside objectOf.");
        var l = y[d], w = Y(l);
        if (w !== "object")
          return new A("Invalid " + p + " `" + u + "` of type " + ("`" + w + "` supplied to `" + o + "`, expected an object."));
        for (var E in l)
          if (s(l, E)) {
            var h = t(l, E, o, p, u + "." + E, g);
            if (h instanceof Error)
              return h;
          }
        return null;
      }
      return M(i);
    }
    function X(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var i = 0; i < t.length; i++) {
        var y = t[i];
        if (typeof y != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(y) + " at index " + i + "."
          ), c;
      }
      function d(o, p, u, l, w) {
        for (var E = [], h = 0; h < t.length; h++) {
          var L = t[h], r = L(o, p, u, l, w, g);
          if (r == null)
            return null;
          r.data && s(r.data, "expectedType") && E.push(r.data.expectedType);
        }
        var q = E.length > 0 ? ", expected one of type [" + E.join(", ") + "]" : "";
        return new A("Invalid " + l + " `" + w + "` supplied to " + ("`" + u + "`" + q + "."));
      }
      return M(d);
    }
    function G() {
      function t(i, y, d, o, p) {
        return W(i[y]) ? null : new A("Invalid " + o + " `" + p + "` supplied to " + ("`" + d + "`, expected a ReactNode."));
      }
      return M(t);
    }
    function F(t, i, y, d, o) {
      return new A(
        (t || "React class") + ": " + i + " type `" + y + "." + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + o + "`."
      );
    }
    function K(t) {
      function i(y, d, o, p, u) {
        var l = y[d], w = Y(l);
        if (w !== "object")
          return new A("Invalid " + p + " `" + u + "` of type `" + w + "` " + ("supplied to `" + o + "`, expected `object`."));
        for (var E in t) {
          var h = t[E];
          if (typeof h != "function")
            return F(o, p, u, E, U(h));
          var L = h(l, E, o, p, u + "." + E, g);
          if (L)
            return L;
        }
        return null;
      }
      return M(i);
    }
    function Z(t) {
      function i(y, d, o, p, u) {
        var l = y[d], w = Y(l);
        if (w !== "object")
          return new A("Invalid " + p + " `" + u + "` of type `" + w + "` " + ("supplied to `" + o + "`, expected `object`."));
        var E = O({}, y[d], t);
        for (var h in E) {
          var L = t[h];
          if (s(t, h) && typeof L != "function")
            return F(o, p, u, h, U(L));
          if (!L)
            return new A(
              "Invalid " + p + " `" + u + "` key `" + h + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(y[d], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var r = L(l, h, o, p, u + "." + h, g);
          if (r)
            return r;
        }
        return null;
      }
      return M(i);
    }
    function W(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(W);
          if (t === null || f(t))
            return !0;
          var i = C(t);
          if (i) {
            var y = i.call(t), d;
            if (i !== t.entries) {
              for (; !(d = y.next()).done; )
                if (!W(d.value))
                  return !1;
            } else
              for (; !(d = y.next()).done; ) {
                var o = d.value;
                if (o && !W(o[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(t, i) {
      return t === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function Y(t) {
      var i = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : Q(i, t) ? "symbol" : i;
    }
    function U(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var i = Y(t);
      if (i === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function V(t) {
      var i = U(t);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function ee(t) {
      return !t.constructor || !t.constructor.name ? R : t.constructor.name;
    }
    return I.checkPropTypes = v, I.resetWarningCache = v.resetWarningCache, I.PropTypes = I, I;
  }, ie;
}
var oe, me;
function ke() {
  if (me)
    return oe;
  me = 1;
  var e = se();
  function O() {
  }
  function g() {
  }
  return g.resetWarningCache = O, oe = function() {
    function s(c, f, _, P, m, C) {
      if (C !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    s.isRequired = s;
    function v() {
      return s;
    }
    var n = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: v,
      element: s,
      elementType: s,
      instanceOf: v,
      node: s,
      objectOf: v,
      oneOf: v,
      oneOfType: v,
      shape: v,
      exact: v,
      checkPropTypes: g,
      resetWarningCache: O
    };
    return n.PropTypes = n, n;
  }, oe;
}
if (process.env.NODE_ENV !== "production") {
  var Me = be(), Le = !0;
  fe.exports = xe()(Me.isElement, Le);
} else
  fe.exports = ke()();
const Te = (e) => !e || e.length === 0 ? !1 : e != null && typeof e == "string", je = ({ propertyId: e = "", widgetId: O = "", embedId: g = "", basePath: s = "tawk.to" }) => {
  if (g.length) {
    if (!document.getElementById(g)) {
      const c = document.createElement("div");
      c.id = g, document.body.appendChild(c);
    }
    window.Tawk_API.embedded = g;
  }
  const v = document.createElement("script");
  v.async = !0, v.src = `https://embed.${s}/${e}/${O}`, v.charset = "UTF-8", v.setAttribute("crossorigin", "*");
  const n = document.getElementsByTagName("script")[0];
  n.parentNode.insertBefore(v, n);
}, ue = Ce((e, O) => {
  Se(() => {
    g();
  }, []);
  const g = () => {
    if (!Te(e.propertyId)) {
      console.error("[Tawk-messenger-react warn]: You didn't specified 'propertyId' property in the plugin.");
      return;
    }
    if (!Te(e.widgetId)) {
      console.error("[Tawk-messenger-react warn]: You didn't specified 'widgetId' property in the plugin.");
      return;
    }
    !window || !document || s();
  }, s = () => {
    window.Tawk_API = window.Tawk_API || {}, window.Tawk_LoadStart = /* @__PURE__ */ new Date(), je({
      propertyId: e.propertyId,
      widgetId: e.widgetId,
      embedId: e.embedId,
      basePath: e.basePath
    }), e.customStyle && typeof e.customStyle == "object" && (window.Tawk_API.customStyle = e.customStyle), v();
  };
  Pe(O, () => ({
    /**
     * API for calling an action on the widget
     */
    maximize: () => window.Tawk_API.maximize(),
    minimize: () => window.Tawk_API.minimize(),
    toggle: () => window.Tawk_API.toggle(),
    popup: () => window.Tawk_API.popup(),
    showWidget: () => window.Tawk_API.showWidget(),
    hideWidget: () => window.Tawk_API.hideWidget(),
    toggleVisibility: () => window.Tawk_API.toggleVisibility(),
    endChat: () => window.Tawk_API.endChat(),
    /**
     * API for returning a data
     */
    getWindowType: () => window.Tawk_API.getWindowType(),
    getStatus: () => window.Tawk_API.getStatus(),
    isChatMaximized: () => window.Tawk_API.isChatMaximized(),
    isChatMinimized: () => window.Tawk_API.isChatMinimized(),
    isChatHidden: () => window.Tawk_API.isChatHidden(),
    isChatOngoing: () => window.Tawk_API.isChatOngoing(),
    isVisitorEngaged: () => window.Tawk_API.isVisitorEngaged(),
    onLoaded: () => window.Tawk_API.onLoaded,
    onBeforeLoaded: () => window.Tawk_API.onBeforeLoaded,
    widgetPosition: () => window.Tawk_API.widgetPosition(),
    /**
     * API for setting a data on the widget
     */
    visitor: (n) => {
      window.Tawk_API.visitor = n;
    },
    setAttributes: (n, c) => {
      window.Tawk_API.setAttributes(n, c);
    },
    addEvent: (n, c, f) => {
      window.Tawk_API.addEvent(n, c, f);
    },
    addTags: (n, c) => {
      window.Tawk_API.addTags(n, c);
    },
    removeTags: (n, c) => {
      window.Tawk_API.removeTags(n, c);
    }
  }));
  const v = () => {
    window.addEventListener("tawkLoad", () => {
      e.onLoad();
    }), window.addEventListener("tawkStatusChange", (n) => {
      e.onStatusChange(n.detail);
    }), window.addEventListener("tawkBeforeLoad", () => {
      e.onBeforeLoad();
    }), window.addEventListener("tawkChatMaximized", () => {
      e.onChatMaximized();
    }), window.addEventListener("tawkChatMinimized", () => {
      e.onChatMinimized();
    }), window.addEventListener("tawkChatHidden", () => {
      e.onChatHidden();
    }), window.addEventListener("tawkChatStarted", () => {
      e.onChatStarted();
    }), window.addEventListener("tawkChatEnded", () => {
      e.onChatEnded();
    }), window.addEventListener("tawkPrechatSubmit", (n) => {
      e.onPrechatSubmit(n.detail);
    }), window.addEventListener("tawkOfflineSubmit", (n) => {
      e.onOfflineSubmit(n.detail);
    }), window.addEventListener("tawkChatMessageVisitor", (n) => {
      e.onChatMessageVisitor(n.detail);
    }), window.addEventListener("tawkChatMessageAgent", (n) => {
      e.onChatMessageAgent(n.detail);
    }), window.addEventListener("tawkChatMessageSystem", (n) => {
      e.onChatMessageSystem(n.detail);
    }), window.addEventListener("tawkAgentJoinChat", (n) => {
      e.onAgentJoinChat(n.detail);
    }), window.addEventListener("tawkAgentLeaveChat", (n) => {
      e.onAgentLeaveChat(n.detail);
    }), window.addEventListener("tawkChatSatisfaction", (n) => {
      e.onChatSatisfaction(n.detail);
    }), window.addEventListener("tawkVisitorNameChanged", (n) => {
      e.onVisitorNameChanged(n.detail);
    }), window.addEventListener("tawkFileUpload", (n) => {
      e.onFileUpload(n.detail);
    }), window.addEventListener("tawkTagsUpdated", (n) => {
      e.onTagsUpdated(n.detail);
    }), window.addEventListener("tawkUnreadCountChanged", (n) => {
      e.onUnreadCountChanged(n.detail);
    });
  };
  return null;
});
ue.displayName = "TawkMessenger";
ue.defaultProps = {
  customStyle: null,
  embedId: "",
  basePath: "tawk.to",
  onLoad: () => {
  },
  onStatusChange: () => {
  },
  onBeforeLoad: () => {
  },
  onChatMaximized: () => {
  },
  onChatMinimized: () => {
  },
  onChatHidden: () => {
  },
  onChatStarted: () => {
  },
  onChatEnded: () => {
  },
  onPrechatSubmit: () => {
  },
  onOfflineSubmit: () => {
  },
  onChatMessageVisitor: () => {
  },
  onChatMessageAgent: () => {
  },
  onChatMessageSystem: () => {
  },
  onAgentJoinChat: () => {
  },
  onAgentLeaveChat: () => {
  },
  onChatSatisfaction: () => {
  },
  onVisitorNameChanged: () => {
  },
  onFileUpload: () => {
  },
  onTagsUpdated: () => {
  },
  onUnreadCountChanged: () => {
  }
};
ue.propTypes = {
  /**
   * Default properties
   */
  propertyId: S.string.isRequired,
  widgetId: S.string.isRequired,
  /**
   * Optional properties
   */
  customStyle: S.object,
  embedId: S.string,
  basePath: S.string,
  /**
   * Callbacks
   */
  onLoad: S.func,
  onStatusChange: S.func,
  onBeforeLoad: S.func,
  onChatMaximized: S.func,
  onChatMinimized: S.func,
  onChatHidden: S.func,
  onChatStarted: S.func,
  onChatEnded: S.func,
  onPrechatSubmit: S.func,
  onOfflineSubmit: S.func,
  onChatMessageVisitor: S.func,
  onChatMessageAgent: S.func,
  onChatMessageSystem: S.func,
  onAgentJoinChat: S.func,
  onAgentLeaveChat: S.func,
  onChatSatisfaction: S.func,
  onVisitorNameChanged: S.func,
  onFileUpload: S.func,
  onTagsUpdated: S.func,
  onUnreadCountChanged: S.func
};
export {
  ue as default
};
