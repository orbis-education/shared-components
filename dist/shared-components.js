import Me, { useEffect as W, useState as F, useRef as Se, Fragment as Ie } from "react";
function ht(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var je = { exports: {} }, ve = {};
var ze;
function jt() {
  if (ze) return ve;
  ze = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(u, c, o) {
    var m = null;
    if (o !== void 0 && (m = "" + o), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      o = {};
      for (var d in c)
        d !== "key" && (o[d] = c[d]);
    } else o = c;
    return c = o.ref, {
      $$typeof: e,
      type: u,
      key: m,
      ref: c !== void 0 ? c : null,
      props: o
    };
  }
  return ve.Fragment = a, ve.jsx = i, ve.jsxs = i, ve;
}
var xe = {};
var He;
function Ct() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === M ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case x:
          return "Fragment";
        case E:
          return "Profiler";
        case _:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case R:
            return "Portal";
          case P:
            return g.displayName || "Context";
          case w:
            return (g._context.displayName || "Context") + ".Consumer";
          case s:
            var S = g.render;
            return g = g.displayName, g || (g = S.displayName || S.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case y:
            return S = g.displayName || null, S !== null ? S : e(g.type) || "Memo";
          case N:
            S = g._payload, g = g._init;
            try {
              return e(g(S));
            } catch {
            }
        }
      return null;
    }
    function a(g) {
      return "" + g;
    }
    function i(g) {
      try {
        a(g);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var L = S.error, j = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return L.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), a(g);
      }
    }
    function u(g) {
      if (g === x) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === N)
        return "<...>";
      try {
        var S = e(g);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var g = z.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function m(g) {
      if (B.call(g, "key")) {
        var S = Object.getOwnPropertyDescriptor(g, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function d(g, S) {
      function L() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: L,
        configurable: !0
      });
    }
    function r() {
      var g = e(this.type);
      return U[g] || (U[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function n(g, S, L, j, H, I) {
      var G = L.ref;
      return g = {
        $$typeof: C,
        type: g,
        key: S,
        props: L,
        _owner: j
      }, (G !== void 0 ? G : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: r
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function l(g, S, L, j, H, I) {
      var G = S.children;
      if (G !== void 0)
        if (j)
          if (A(G)) {
            for (j = 0; j < G.length; j++)
              p(G[j]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(G);
      if (B.call(S, "key")) {
        G = e(g);
        var $ = Object.keys(S).filter(function(re) {
          return re !== "key";
        });
        j = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", Te[G + j] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          G,
          $,
          G
        ), Te[G + j] = !0);
      }
      if (G = null, L !== void 0 && (i(L), G = "" + L), m(S) && (i(S.key), G = "" + S.key), "key" in S) {
        L = {};
        for (var ee in S)
          ee !== "key" && (L[ee] = S[ee]);
      } else L = S;
      return G && d(
        L,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), n(
        g,
        G,
        L,
        c(),
        H,
        I
      );
    }
    function p(g) {
      v(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === N && (g._payload.status === "fulfilled" ? v(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function v(g) {
      return typeof g == "object" && g !== null && g.$$typeof === C;
    }
    var T = Me, C = /* @__PURE__ */ Symbol.for("react.transitional.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), f = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.suspense_list"), y = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), M = /* @__PURE__ */ Symbol.for("react.client.reference"), z = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, A = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var V, U = {}, te = T.react_stack_bottom_frame.bind(
      T,
      o
    )(), ge = k(u(o)), Te = {};
    xe.Fragment = x, xe.jsx = function(g, S, L) {
      var j = 1e4 > z.recentlyCreatedOwnerStacks++;
      return l(
        g,
        S,
        L,
        !1,
        j ? Error("react-stack-top-frame") : te,
        j ? k(u(g)) : ge
      );
    }, xe.jsxs = function(g, S, L) {
      var j = 1e4 > z.recentlyCreatedOwnerStacks++;
      return l(
        g,
        S,
        L,
        !0,
        j ? Error("react-stack-top-frame") : te,
        j ? k(u(g)) : ge
      );
    };
  })()), xe;
}
var Ge;
function Rt() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? je.exports = jt() : je.exports = Ct()), je.exports;
}
var t = Rt(), Ae = { exports: {} };
var qe;
function wt() {
  return qe || (qe = 1, (function(e) {
    (function() {
      var a = {}.hasOwnProperty;
      function i() {
        for (var o = "", m = 0; m < arguments.length; m++) {
          var d = arguments[m];
          d && (o = c(o, u(d)));
        }
        return o;
      }
      function u(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return i.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var m = "";
        for (var d in o)
          a.call(o, d) && o[d] && (m = c(m, d));
        return m;
      }
      function c(o, m) {
        return m ? o ? o + " " + m : o + m : o;
      }
      e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
    })();
  })(Ae)), Ae.exports;
}
var kt = wt();
const q = /* @__PURE__ */ ht(kt);
var ye = {}, ce = {}, Ce = {}, se = {}, ie = {}, Pe = {}, Ve;
function gt() {
  return Ve || (Ve = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var a;
    (function(u) {
      u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype";
    })(a = e.ElementType || (e.ElementType = {}));
    function i(u) {
      return u.type === a.Tag || u.type === a.Script || u.type === a.Style;
    }
    e.isTag = i, e.Root = a.Root, e.Text = a.Text, e.Directive = a.Directive, e.Comment = a.Comment, e.Script = a.Script, e.Style = a.Style, e.Tag = a.Tag, e.CDATA = a.CDATA, e.Doctype = a.Doctype;
  })(Pe)), Pe;
}
var O = {}, Be;
function Ue() {
  if (Be) return O;
  Be = 1;
  var e = O && O.__extends || /* @__PURE__ */ (function() {
    var s = function(f, h) {
      return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, N) {
        y.__proto__ = N;
      } || function(y, N) {
        for (var D in N) Object.prototype.hasOwnProperty.call(N, D) && (y[D] = N[D]);
      }, s(f, h);
    };
    return function(f, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      s(f, h);
      function y() {
        this.constructor = f;
      }
      f.prototype = h === null ? Object.create(h) : (y.prototype = h.prototype, new y());
    };
  })(), a = O && O.__assign || function() {
    return a = Object.assign || function(s) {
      for (var f, h = 1, y = arguments.length; h < y; h++) {
        f = arguments[h];
        for (var N in f) Object.prototype.hasOwnProperty.call(f, N) && (s[N] = f[N]);
      }
      return s;
    }, a.apply(this, arguments);
  };
  Object.defineProperty(O, "__esModule", { value: !0 }), O.cloneNode = O.hasChildren = O.isDocument = O.isDirective = O.isComment = O.isText = O.isCDATA = O.isTag = O.Element = O.Document = O.CDATA = O.NodeWithChildren = O.ProcessingInstruction = O.Comment = O.Text = O.DataNode = O.Node = void 0;
  var i = /* @__PURE__ */ gt(), u = (
    /** @class */
    (function() {
      function s() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(s.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(f) {
          this.parent = f;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(f) {
          this.prev = f;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(f) {
          this.next = f;
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.cloneNode = function(f) {
        return f === void 0 && (f = !1), w(this, f);
      }, s;
    })()
  );
  O.Node = u;
  var c = (
    /** @class */
    (function(s) {
      e(f, s);
      function f(h) {
        var y = s.call(this) || this;
        return y.data = h, y;
      }
      return Object.defineProperty(f.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(h) {
          this.data = h;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(u)
  );
  O.DataNode = c;
  var o = (
    /** @class */
    (function(s) {
      e(f, s);
      function f() {
        var h = s !== null && s.apply(this, arguments) || this;
        return h.type = i.ElementType.Text, h;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(c)
  );
  O.Text = o;
  var m = (
    /** @class */
    (function(s) {
      e(f, s);
      function f() {
        var h = s !== null && s.apply(this, arguments) || this;
        return h.type = i.ElementType.Comment, h;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(c)
  );
  O.Comment = m;
  var d = (
    /** @class */
    (function(s) {
      e(f, s);
      function f(h, y) {
        var N = s.call(this, y) || this;
        return N.name = h, N.type = i.ElementType.Directive, N;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(c)
  );
  O.ProcessingInstruction = d;
  var r = (
    /** @class */
    (function(s) {
      e(f, s);
      function f(h) {
        var y = s.call(this) || this;
        return y.children = h, y;
      }
      return Object.defineProperty(f.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var h;
          return (h = this.children[0]) !== null && h !== void 0 ? h : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(h) {
          this.children = h;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(u)
  );
  O.NodeWithChildren = r;
  var n = (
    /** @class */
    (function(s) {
      e(f, s);
      function f() {
        var h = s !== null && s.apply(this, arguments) || this;
        return h.type = i.ElementType.CDATA, h;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(r)
  );
  O.CDATA = n;
  var l = (
    /** @class */
    (function(s) {
      e(f, s);
      function f() {
        var h = s !== null && s.apply(this, arguments) || this;
        return h.type = i.ElementType.Root, h;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(r)
  );
  O.Document = l;
  var p = (
    /** @class */
    (function(s) {
      e(f, s);
      function f(h, y, N, D) {
        N === void 0 && (N = []), D === void 0 && (D = h === "script" ? i.ElementType.Script : h === "style" ? i.ElementType.Style : i.ElementType.Tag);
        var M = s.call(this, N) || this;
        return M.name = h, M.attribs = y, M.type = D, M;
      }
      return Object.defineProperty(f.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(h) {
          this.name = h;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(f.prototype, "attributes", {
        get: function() {
          var h = this;
          return Object.keys(this.attribs).map(function(y) {
            var N, D;
            return {
              name: y,
              value: h.attribs[y],
              namespace: (N = h["x-attribsNamespace"]) === null || N === void 0 ? void 0 : N[y],
              prefix: (D = h["x-attribsPrefix"]) === null || D === void 0 ? void 0 : D[y]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), f;
    })(r)
  );
  O.Element = p;
  function v(s) {
    return (0, i.isTag)(s);
  }
  O.isTag = v;
  function T(s) {
    return s.type === i.ElementType.CDATA;
  }
  O.isCDATA = T;
  function C(s) {
    return s.type === i.ElementType.Text;
  }
  O.isText = C;
  function R(s) {
    return s.type === i.ElementType.Comment;
  }
  O.isComment = R;
  function x(s) {
    return s.type === i.ElementType.Directive;
  }
  O.isDirective = x;
  function _(s) {
    return s.type === i.ElementType.Root;
  }
  O.isDocument = _;
  function E(s) {
    return Object.prototype.hasOwnProperty.call(s, "children");
  }
  O.hasChildren = E;
  function w(s, f) {
    f === void 0 && (f = !1);
    var h;
    if (C(s))
      h = new o(s.data);
    else if (R(s))
      h = new m(s.data);
    else if (v(s)) {
      var y = f ? P(s.children) : [], N = new p(s.name, a({}, s.attribs), y);
      y.forEach(function(B) {
        return B.parent = N;
      }), s.namespace != null && (N.namespace = s.namespace), s["x-attribsNamespace"] && (N["x-attribsNamespace"] = a({}, s["x-attribsNamespace"])), s["x-attribsPrefix"] && (N["x-attribsPrefix"] = a({}, s["x-attribsPrefix"])), h = N;
    } else if (T(s)) {
      var y = f ? P(s.children) : [], D = new n(y);
      y.forEach(function(A) {
        return A.parent = D;
      }), h = D;
    } else if (_(s)) {
      var y = f ? P(s.children) : [], M = new l(y);
      y.forEach(function(A) {
        return A.parent = M;
      }), s["x-mode"] && (M["x-mode"] = s["x-mode"]), h = M;
    } else if (x(s)) {
      var z = new d(s.name, s.data);
      s["x-name"] != null && (z["x-name"] = s["x-name"], z["x-publicId"] = s["x-publicId"], z["x-systemId"] = s["x-systemId"]), h = z;
    } else
      throw new Error("Not implemented yet: ".concat(s.type));
    return h.startIndex = s.startIndex, h.endIndex = s.endIndex, s.sourceCodeLocation != null && (h.sourceCodeLocation = s.sourceCodeLocation), h;
  }
  O.cloneNode = w;
  function P(s) {
    for (var f = s.map(function(y) {
      return w(y, !0);
    }), h = 1; h < f.length; h++)
      f[h].prev = f[h - 1], f[h - 1].next = f[h];
    return f;
  }
  return O;
}
var Xe;
function vt() {
  return Xe || (Xe = 1, (function(e) {
    var a = ie && ie.__createBinding || (Object.create ? (function(d, r, n, l) {
      l === void 0 && (l = n);
      var p = Object.getOwnPropertyDescriptor(r, n);
      (!p || ("get" in p ? !r.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
        return r[n];
      } }), Object.defineProperty(d, l, p);
    }) : (function(d, r, n, l) {
      l === void 0 && (l = n), d[l] = r[n];
    })), i = ie && ie.__exportStar || function(d, r) {
      for (var n in d) n !== "default" && !Object.prototype.hasOwnProperty.call(r, n) && a(r, d, n);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var u = /* @__PURE__ */ gt(), c = /* @__PURE__ */ Ue();
    i(/* @__PURE__ */ Ue(), e);
    var o = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, m = (
      /** @class */
      (function() {
        function d(r, n, l) {
          this.dom = [], this.root = new c.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (l = n, n = o), typeof r == "object" && (n = r, r = void 0), this.callback = r ?? null, this.options = n ?? o, this.elementCB = l ?? null;
        }
        return d.prototype.onparserinit = function(r) {
          this.parser = r;
        }, d.prototype.onreset = function() {
          this.dom = [], this.root = new c.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, d.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, d.prototype.onerror = function(r) {
          this.handleCallback(r);
        }, d.prototype.onclosetag = function() {
          this.lastNode = null;
          var r = this.tagStack.pop();
          this.options.withEndIndices && (r.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(r);
        }, d.prototype.onopentag = function(r, n) {
          var l = this.options.xmlMode ? u.ElementType.Tag : void 0, p = new c.Element(r, n, void 0, l);
          this.addNode(p), this.tagStack.push(p);
        }, d.prototype.ontext = function(r) {
          var n = this.lastNode;
          if (n && n.type === u.ElementType.Text)
            n.data += r, this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
          else {
            var l = new c.Text(r);
            this.addNode(l), this.lastNode = l;
          }
        }, d.prototype.oncomment = function(r) {
          if (this.lastNode && this.lastNode.type === u.ElementType.Comment) {
            this.lastNode.data += r;
            return;
          }
          var n = new c.Comment(r);
          this.addNode(n), this.lastNode = n;
        }, d.prototype.oncommentend = function() {
          this.lastNode = null;
        }, d.prototype.oncdatastart = function() {
          var r = new c.Text(""), n = new c.CDATA([r]);
          this.addNode(n), r.parent = n, this.lastNode = r;
        }, d.prototype.oncdataend = function() {
          this.lastNode = null;
        }, d.prototype.onprocessinginstruction = function(r, n) {
          var l = new c.ProcessingInstruction(r, n);
          this.addNode(l);
        }, d.prototype.handleCallback = function(r) {
          if (typeof this.callback == "function")
            this.callback(r, this.dom);
          else if (r)
            throw r;
        }, d.prototype.addNode = function(r) {
          var n = this.tagStack[this.tagStack.length - 1], l = n.children[n.children.length - 1];
          this.options.withStartIndices && (r.startIndex = this.parser.startIndex), this.options.withEndIndices && (r.endIndex = this.parser.endIndex), n.children.push(r), l && (r.prev = l, l.next = r), r.parent = n, this.lastNode = null;
        }, d;
      })()
    );
    e.DomHandler = m, e.default = m;
  })(ie)), ie;
}
var De = {}, Ye;
function St() {
  return Ye || (Ye = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = e.CARRIAGE_RETURN_PLACEHOLDER = e.CARRIAGE_RETURN_REGEX = e.CARRIAGE_RETURN = e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES = void 0, e.CASE_SENSITIVE_TAG_NAMES = [
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "linearGradient",
      "radialGradient",
      "textPath"
    ], e.CASE_SENSITIVE_TAG_NAMES_MAP = e.CASE_SENSITIVE_TAG_NAMES.reduce(function(a, i) {
      return a[i.toLowerCase()] = i, a;
    }, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__"), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
  })(De)), De;
}
var We;
function xt() {
  if (We) return se;
  We = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.formatAttributes = u, se.escapeSpecialCharacters = o, se.revertEscapedCharacters = m, se.formatDOM = d;
  var e = /* @__PURE__ */ vt(), a = St();
  function i(r) {
    return a.CASE_SENSITIVE_TAG_NAMES_MAP[r];
  }
  function u(r) {
    for (var n = {}, l = 0, p = r.length; l < p; l++) {
      var v = r[l];
      n[v.name] = v.value;
    }
    return n;
  }
  function c(r) {
    r = r.toLowerCase();
    var n = i(r);
    return n || r;
  }
  function o(r) {
    return r.replace(a.CARRIAGE_RETURN_REGEX, a.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function m(r) {
    return r.replace(a.CARRIAGE_RETURN_PLACEHOLDER_REGEX, a.CARRIAGE_RETURN);
  }
  function d(r, n, l) {
    n === void 0 && (n = null);
    for (var p = [], v, T = 0, C = r.length; T < C; T++) {
      var R = r[T];
      switch (R.nodeType) {
        case 1: {
          var x = c(R.nodeName);
          v = new e.Element(x, u(R.attributes)), v.children = d(
            // template children are on content
            x === "template" ? R.content.childNodes : R.childNodes,
            v
          );
          break;
        }
        case 3:
          v = new e.Text(m(R.nodeValue));
          break;
        case 8:
          v = new e.Comment(R.nodeValue);
          break;
        default:
          continue;
      }
      var _ = p[T - 1] || null;
      _ && (_.next = v), v.parent = n, v.prev = _, v.next = null, p.push(v);
    }
    return l && (v = new e.ProcessingInstruction(l.substring(0, l.indexOf(" ")).toLowerCase(), l), v.next = p[0] || null, v.parent = n, p.unshift(v), p[1] && (p[1].prev = p[0])), p;
  }
  return se;
}
var $e;
function Ot() {
  if ($e) return Ce;
  $e = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.default = R;
  var e = xt(), a = "html", i = "head", u = "body", c = /<([a-zA-Z]+[0-9]?)/, o = /<head[^]*>/i, m = /<body[^]*>/i, d = function(x, _) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, r = function(x, _) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, n = typeof window == "object" && window.DOMParser;
  if (typeof n == "function") {
    var l = new n(), p = "text/html";
    r = function(x, _) {
      return _ && (x = "<".concat(_, ">").concat(x, "</").concat(_, ">")), l.parseFromString(x, p);
    }, d = r;
  }
  if (typeof document == "object" && document.implementation) {
    var v = document.implementation.createHTMLDocument();
    d = function(x, _) {
      if (_) {
        var E = v.documentElement.querySelector(_);
        return E && (E.innerHTML = x), v;
      }
      return v.documentElement.innerHTML = x, v;
    };
  }
  var T = typeof document == "object" && document.createElement("template"), C;
  T && T.content && (C = function(x) {
    return T.innerHTML = x, T.content.childNodes;
  });
  function R(x) {
    var _, E;
    x = (0, e.escapeSpecialCharacters)(x);
    var w = x.match(c), P = w && w[1] ? w[1].toLowerCase() : "";
    switch (P) {
      case a: {
        var s = r(x);
        if (!o.test(x)) {
          var f = s.querySelector(i);
          (_ = f?.parentNode) === null || _ === void 0 || _.removeChild(f);
        }
        if (!m.test(x)) {
          var f = s.querySelector(u);
          (E = f?.parentNode) === null || E === void 0 || E.removeChild(f);
        }
        return s.querySelectorAll(a);
      }
      case i:
      case u: {
        var h = d(x).querySelectorAll(P);
        return m.test(x) && o.test(x) ? h[0].parentNode.childNodes : h;
      }
      // low-level tag or text
      default: {
        if (C)
          return C(x);
        var f = d(x, u).querySelector(u);
        return f.childNodes;
      }
    }
  }
  return Ce;
}
var Je;
function At() {
  if (Je) return ce;
  Je = 1;
  var e = ce && ce.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ce, "__esModule", { value: !0 }), ce.default = c;
  var a = e(Ot()), i = xt(), u = /<(![a-zA-Z\s]+)>/;
  function c(o) {
    if (typeof o != "string")
      throw new TypeError("First argument must be a string");
    if (!o)
      return [];
    var m = o.match(u), d = m ? m[1] : void 0;
    return (0, i.formatDOM)((0, a.default)(o), null, d);
  }
  return ce;
}
var Re = {}, J = {}, Ee = {}, Ze;
function Pt() {
  if (Ze) return Ee;
  Ze = 1;
  var e = 0;
  Ee.SAME = e;
  var a = 1;
  return Ee.CAMELCASE = a, Ee.possibleStandardNames = {
    accept: 0,
    acceptCharset: 1,
    "accept-charset": "acceptCharset",
    accessKey: 1,
    action: 0,
    allowFullScreen: 1,
    alt: 0,
    as: 0,
    async: 0,
    autoCapitalize: 1,
    autoComplete: 1,
    autoCorrect: 1,
    autoFocus: 1,
    autoPlay: 1,
    autoSave: 1,
    capture: 0,
    cellPadding: 1,
    cellSpacing: 1,
    challenge: 0,
    charSet: 1,
    checked: 0,
    children: 0,
    cite: 0,
    class: "className",
    classID: 1,
    className: 1,
    cols: 0,
    colSpan: 1,
    content: 0,
    contentEditable: 1,
    contextMenu: 1,
    controls: 0,
    controlsList: 1,
    coords: 0,
    crossOrigin: 1,
    dangerouslySetInnerHTML: 1,
    data: 0,
    dateTime: 1,
    default: 0,
    defaultChecked: 1,
    defaultValue: 1,
    defer: 0,
    dir: 0,
    disabled: 0,
    disablePictureInPicture: 1,
    disableRemotePlayback: 1,
    download: 0,
    draggable: 0,
    encType: 1,
    enterKeyHint: 1,
    for: "htmlFor",
    form: 0,
    formMethod: 1,
    formAction: 1,
    formEncType: 1,
    formNoValidate: 1,
    formTarget: 1,
    frameBorder: 1,
    headers: 0,
    height: 0,
    hidden: 0,
    high: 0,
    href: 0,
    hrefLang: 1,
    htmlFor: 1,
    httpEquiv: 1,
    "http-equiv": "httpEquiv",
    icon: 0,
    id: 0,
    innerHTML: 1,
    inputMode: 1,
    integrity: 0,
    is: 0,
    itemID: 1,
    itemProp: 1,
    itemRef: 1,
    itemScope: 1,
    itemType: 1,
    keyParams: 1,
    keyType: 1,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 0,
    low: 0,
    manifest: 0,
    marginWidth: 1,
    marginHeight: 1,
    max: 0,
    maxLength: 1,
    media: 0,
    mediaGroup: 1,
    method: 0,
    min: 0,
    minLength: 1,
    multiple: 0,
    muted: 0,
    name: 0,
    noModule: 1,
    nonce: 0,
    noValidate: 1,
    open: 0,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 1,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 1,
    readOnly: 1,
    referrerPolicy: 1,
    rel: 0,
    required: 0,
    reversed: 0,
    role: 0,
    rows: 0,
    rowSpan: 1,
    sandbox: 0,
    scope: 0,
    scoped: 0,
    scrolling: 0,
    seamless: 0,
    selected: 0,
    shape: 0,
    size: 0,
    sizes: 0,
    span: 0,
    spellCheck: 1,
    src: 0,
    srcDoc: 1,
    srcLang: 1,
    srcSet: 1,
    start: 0,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 1,
    target: 0,
    title: 0,
    type: 0,
    useMap: 1,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    accentHeight: 1,
    "accent-height": "accentHeight",
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 1,
    "alignment-baseline": "alignmentBaseline",
    allowReorder: 1,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 1,
    "arabic-form": "arabicForm",
    ascent: 0,
    attributeName: 1,
    attributeType: 1,
    autoReverse: 1,
    azimuth: 0,
    baseFrequency: 1,
    baselineShift: 1,
    "baseline-shift": "baselineShift",
    baseProfile: 1,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 1,
    capHeight: 1,
    "cap-height": "capHeight",
    clip: 0,
    clipPath: 1,
    "clip-path": "clipPath",
    clipPathUnits: 1,
    clipRule: 1,
    "clip-rule": "clipRule",
    color: 0,
    colorInterpolation: 1,
    "color-interpolation": "colorInterpolation",
    colorInterpolationFilters: 1,
    "color-interpolation-filters": "colorInterpolationFilters",
    colorProfile: 1,
    "color-profile": "colorProfile",
    colorRendering: 1,
    "color-rendering": "colorRendering",
    contentScriptType: 1,
    contentStyleType: 1,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    datatype: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 1,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 1,
    "dominant-baseline": "dominantBaseline",
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 1,
    elevation: 0,
    enableBackground: 1,
    "enable-background": "enableBackground",
    end: 0,
    exponent: 0,
    externalResourcesRequired: 1,
    fill: 0,
    fillOpacity: 1,
    "fill-opacity": "fillOpacity",
    fillRule: 1,
    "fill-rule": "fillRule",
    filter: 0,
    filterRes: 1,
    filterUnits: 1,
    floodOpacity: 1,
    "flood-opacity": "floodOpacity",
    floodColor: 1,
    "flood-color": "floodColor",
    focusable: 0,
    fontFamily: 1,
    "font-family": "fontFamily",
    fontSize: 1,
    "font-size": "fontSize",
    fontSizeAdjust: 1,
    "font-size-adjust": "fontSizeAdjust",
    fontStretch: 1,
    "font-stretch": "fontStretch",
    fontStyle: 1,
    "font-style": "fontStyle",
    fontVariant: 1,
    "font-variant": "fontVariant",
    fontWeight: 1,
    "font-weight": "fontWeight",
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 1,
    "glyph-name": "glyphName",
    glyphOrientationHorizontal: 1,
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphOrientationVertical: 1,
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphRef: 1,
    gradientTransform: 1,
    gradientUnits: 1,
    hanging: 0,
    horizAdvX: 1,
    "horiz-adv-x": "horizAdvX",
    horizOriginX: 1,
    "horiz-origin-x": "horizOriginX",
    ideographic: 0,
    imageRendering: 1,
    "image-rendering": "imageRendering",
    in2: 0,
    in: 0,
    inlist: 0,
    intercept: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k: 0,
    kernelMatrix: 1,
    kernelUnitLength: 1,
    kerning: 0,
    keyPoints: 1,
    keySplines: 1,
    keyTimes: 1,
    lengthAdjust: 1,
    letterSpacing: 1,
    "letter-spacing": "letterSpacing",
    lightingColor: 1,
    "lighting-color": "lightingColor",
    limitingConeAngle: 1,
    local: 0,
    markerEnd: 1,
    "marker-end": "markerEnd",
    markerHeight: 1,
    markerMid: 1,
    "marker-mid": "markerMid",
    markerStart: 1,
    "marker-start": "markerStart",
    markerUnits: 1,
    markerWidth: 1,
    mask: 0,
    maskContentUnits: 1,
    maskUnits: 1,
    mathematical: 0,
    mode: 0,
    numOctaves: 1,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 1,
    "overline-position": "overlinePosition",
    overlineThickness: 1,
    "overline-thickness": "overlineThickness",
    paintOrder: 1,
    "paint-order": "paintOrder",
    panose1: 0,
    "panose-1": "panose1",
    pathLength: 1,
    patternContentUnits: 1,
    patternTransform: 1,
    patternUnits: 1,
    pointerEvents: 1,
    "pointer-events": "pointerEvents",
    points: 0,
    pointsAtX: 1,
    pointsAtY: 1,
    pointsAtZ: 1,
    prefix: 0,
    preserveAlpha: 1,
    preserveAspectRatio: 1,
    primitiveUnits: 1,
    property: 0,
    r: 0,
    radius: 0,
    refX: 1,
    refY: 1,
    renderingIntent: 1,
    "rendering-intent": "renderingIntent",
    repeatCount: 1,
    repeatDur: 1,
    requiredExtensions: 1,
    requiredFeatures: 1,
    resource: 0,
    restart: 0,
    result: 0,
    results: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    security: 0,
    seed: 0,
    shapeRendering: 1,
    "shape-rendering": "shapeRendering",
    slope: 0,
    spacing: 0,
    specularConstant: 1,
    specularExponent: 1,
    speed: 0,
    spreadMethod: 1,
    startOffset: 1,
    stdDeviation: 1,
    stemh: 0,
    stemv: 0,
    stitchTiles: 1,
    stopColor: 1,
    "stop-color": "stopColor",
    stopOpacity: 1,
    "stop-opacity": "stopOpacity",
    strikethroughPosition: 1,
    "strikethrough-position": "strikethroughPosition",
    strikethroughThickness: 1,
    "strikethrough-thickness": "strikethroughThickness",
    string: 0,
    stroke: 0,
    strokeDasharray: 1,
    "stroke-dasharray": "strokeDasharray",
    strokeDashoffset: 1,
    "stroke-dashoffset": "strokeDashoffset",
    strokeLinecap: 1,
    "stroke-linecap": "strokeLinecap",
    strokeLinejoin: 1,
    "stroke-linejoin": "strokeLinejoin",
    strokeMiterlimit: 1,
    "stroke-miterlimit": "strokeMiterlimit",
    strokeWidth: 1,
    "stroke-width": "strokeWidth",
    strokeOpacity: 1,
    "stroke-opacity": "strokeOpacity",
    suppressContentEditableWarning: 1,
    suppressHydrationWarning: 1,
    surfaceScale: 1,
    systemLanguage: 1,
    tableValues: 1,
    targetX: 1,
    targetY: 1,
    textAnchor: 1,
    "text-anchor": "textAnchor",
    textDecoration: 1,
    "text-decoration": "textDecoration",
    textLength: 1,
    textRendering: 1,
    "text-rendering": "textRendering",
    to: 0,
    transform: 0,
    typeof: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 1,
    "underline-position": "underlinePosition",
    underlineThickness: 1,
    "underline-thickness": "underlineThickness",
    unicode: 0,
    unicodeBidi: 1,
    "unicode-bidi": "unicodeBidi",
    unicodeRange: 1,
    "unicode-range": "unicodeRange",
    unitsPerEm: 1,
    "units-per-em": "unitsPerEm",
    unselectable: 0,
    vAlphabetic: 1,
    "v-alphabetic": "vAlphabetic",
    values: 0,
    vectorEffect: 1,
    "vector-effect": "vectorEffect",
    version: 0,
    vertAdvY: 1,
    "vert-adv-y": "vertAdvY",
    vertOriginX: 1,
    "vert-origin-x": "vertOriginX",
    vertOriginY: 1,
    "vert-origin-y": "vertOriginY",
    vHanging: 1,
    "v-hanging": "vHanging",
    vIdeographic: 1,
    "v-ideographic": "vIdeographic",
    viewBox: 1,
    viewTarget: 1,
    visibility: 0,
    vMathematical: 1,
    "v-mathematical": "vMathematical",
    vocab: 0,
    widths: 0,
    wordSpacing: 1,
    "word-spacing": "wordSpacing",
    writingMode: 1,
    "writing-mode": "writingMode",
    x1: 0,
    x2: 0,
    x: 0,
    xChannelSelector: 1,
    xHeight: 1,
    "x-height": "xHeight",
    xlinkActuate: 1,
    "xlink:actuate": "xlinkActuate",
    xlinkArcrole: 1,
    "xlink:arcrole": "xlinkArcrole",
    xlinkHref: 1,
    "xlink:href": "xlinkHref",
    xlinkRole: 1,
    "xlink:role": "xlinkRole",
    xlinkShow: 1,
    "xlink:show": "xlinkShow",
    xlinkTitle: 1,
    "xlink:title": "xlinkTitle",
    xlinkType: 1,
    "xlink:type": "xlinkType",
    xmlBase: 1,
    "xml:base": "xmlBase",
    xmlLang: 1,
    "xml:lang": "xmlLang",
    xmlns: 0,
    "xml:space": "xmlSpace",
    xmlnsXlink: 1,
    "xmlns:xlink": "xmlnsXlink",
    xmlSpace: 1,
    y1: 0,
    y2: 0,
    y: 0,
    yChannelSelector: 1,
    z: 0,
    zoomAndPan: 1
  }, Ee;
}
var Ke;
function Dt() {
  if (Ke) return J;
  Ke = 1;
  const e = 0, a = 1, i = 2, u = 3, c = 4, o = 5, m = 6;
  function d(s) {
    return n.hasOwnProperty(s) ? n[s] : null;
  }
  function r(s, f, h, y, N, D, M) {
    this.acceptsBooleans = f === i || f === u || f === c, this.attributeName = y, this.attributeNamespace = N, this.mustUseProperty = h, this.propertyName = s, this.type = f, this.sanitizeURL = D, this.removeEmptyString = M;
  }
  const n = {};
  [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ].forEach((s) => {
    n[s] = new r(
      s,
      e,
      !1,
      // mustUseProperty
      s,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(([s, f]) => {
    n[s] = new r(
      s,
      a,
      !1,
      // mustUseProperty
      f,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((s) => {
    n[s] = new r(
      s,
      i,
      !1,
      // mustUseProperty
      s.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach((s) => {
    n[s] = new r(
      s,
      i,
      !1,
      // mustUseProperty
      s,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach((s) => {
    n[s] = new r(
      s,
      u,
      !1,
      // mustUseProperty
      s.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    n[s] = new r(
      s,
      u,
      !0,
      // mustUseProperty
      s,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    n[s] = new r(
      s,
      c,
      !1,
      // mustUseProperty
      s,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    n[s] = new r(
      s,
      m,
      !1,
      // mustUseProperty
      s,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((s) => {
    n[s] = new r(
      s,
      o,
      !1,
      // mustUseProperty
      s.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const p = /[\-\:]([a-z])/g, v = (s) => s[1].toUpperCase();
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    const f = s.replace(p, v);
    n[f] = new r(
      f,
      a,
      !1,
      // mustUseProperty
      s,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    const f = s.replace(p, v);
    n[f] = new r(
      f,
      a,
      !1,
      // mustUseProperty
      s,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((s) => {
    const f = s.replace(p, v);
    n[f] = new r(
      f,
      a,
      !1,
      // mustUseProperty
      s,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((s) => {
    n[s] = new r(
      s,
      a,
      !1,
      // mustUseProperty
      s.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const T = "xlinkHref";
  n[T] = new r(
    "xlinkHref",
    a,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
    // removeEmptyString
  ), ["src", "href", "action", "formAction"].forEach((s) => {
    n[s] = new r(
      s,
      a,
      !1,
      // mustUseProperty
      s.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
      // removeEmptyString
    );
  });
  const {
    CAMELCASE: C,
    SAME: R,
    possibleStandardNames: x
  } = Pt(), E = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", w = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + E + "]*$")
  ), P = Object.keys(
    x
  ).reduce((s, f) => {
    const h = x[f];
    return h === R ? s[f] = f : h === C ? s[f.toLowerCase()] = f : s[f] = h, s;
  }, {});
  return J.BOOLEAN = u, J.BOOLEANISH_STRING = i, J.NUMERIC = o, J.OVERLOADED_BOOLEAN = c, J.POSITIVE_NUMERIC = m, J.RESERVED = e, J.STRING = a, J.getPropertyInfo = d, J.isCustomAttribute = w, J.possibleStandardNames = P, J;
}
var be = {}, ue = {}, Le, Qe;
function Lt() {
  if (Qe) return Le;
  Qe = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, u = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, c = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, m = /^[;\s]*/, d = /^\s+|\s+$/g, r = `
`, n = "/", l = "*", p = "", v = "comment", T = "declaration";
  function C(x, _) {
    if (typeof x != "string")
      throw new TypeError("First argument must be a string");
    if (!x) return [];
    _ = _ || {};
    var E = 1, w = 1;
    function P(A) {
      var k = A.match(a);
      k && (E += k.length);
      var V = A.lastIndexOf(r);
      w = ~V ? A.length - V : w + A.length;
    }
    function s() {
      var A = { line: E, column: w };
      return function(k) {
        return k.position = new f(A), N(), k;
      };
    }
    function f(A) {
      this.start = A, this.end = { line: E, column: w }, this.source = _.source;
    }
    f.prototype.content = x;
    function h(A) {
      var k = new Error(
        _.source + ":" + E + ":" + w + ": " + A
      );
      if (k.reason = A, k.filename = _.source, k.line = E, k.column = w, k.source = x, !_.silent) throw k;
    }
    function y(A) {
      var k = A.exec(x);
      if (k) {
        var V = k[0];
        return P(V), x = x.slice(V.length), k;
      }
    }
    function N() {
      y(i);
    }
    function D(A) {
      var k;
      for (A = A || []; k = M(); )
        k !== !1 && A.push(k);
      return A;
    }
    function M() {
      var A = s();
      if (!(n != x.charAt(0) || l != x.charAt(1))) {
        for (var k = 2; p != x.charAt(k) && (l != x.charAt(k) || n != x.charAt(k + 1)); )
          ++k;
        if (k += 2, p === x.charAt(k - 1))
          return h("End of comment missing");
        var V = x.slice(2, k - 2);
        return w += 2, P(V), x = x.slice(k), w += 2, A({
          type: v,
          comment: V
        });
      }
    }
    function z() {
      var A = s(), k = y(u);
      if (k) {
        if (M(), !y(c)) return h("property missing ':'");
        var V = y(o), U = A({
          type: T,
          property: R(k[0].replace(e, p)),
          value: V ? R(V[0].replace(e, p)) : p
        });
        return y(m), U;
      }
    }
    function B() {
      var A = [];
      D(A);
      for (var k; k = z(); )
        k !== !1 && (A.push(k), D(A));
      return A;
    }
    return N(), B();
  }
  function R(x) {
    return x ? x.replace(d, p) : p;
  }
  return Le = C, Le;
}
var et;
function Mt() {
  if (et) return ue;
  et = 1;
  var e = ue && ue.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(ue, "__esModule", { value: !0 }), ue.default = i;
  const a = e(Lt());
  function i(u, c) {
    let o = null;
    if (!u || typeof u != "string")
      return o;
    const m = (0, a.default)(u), d = typeof c == "function";
    return m.forEach((r) => {
      if (r.type !== "declaration")
        return;
      const { property: n, value: l } = r;
      d ? c(n, l, r) : l && (o = o || {}, o[n] = l);
    }), o;
  }
  return ue;
}
var _e = {}, tt;
function It() {
  if (tt) return _e;
  tt = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, u = /^-(webkit|moz|ms|o|khtml)-/, c = /^-(ms)-/, o = function(n) {
    return !n || i.test(n) || e.test(n);
  }, m = function(n, l) {
    return l.toUpperCase();
  }, d = function(n, l) {
    return "".concat(l, "-");
  }, r = function(n, l) {
    return l === void 0 && (l = {}), o(n) ? n : (n = n.toLowerCase(), l.reactCompat ? n = n.replace(c, d) : n = n.replace(u, d), n.replace(a, m));
  };
  return _e.camelCase = r, _e;
}
var Ne, rt;
function Ft() {
  if (rt) return Ne;
  rt = 1;
  var e = Ne && Ne.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  }, a = e(Mt()), i = It();
  function u(c, o) {
    var m = {};
    return !c || typeof c != "string" || (0, a.default)(c, function(d, r) {
      d && r && (m[(0, i.camelCase)(d, o)] = r);
    }), m;
  }
  return u.default = u, Ne = u, Ne;
}
var nt;
function yt() {
  return nt || (nt = 1, (function(e) {
    var a = be && be.__importDefault || function(l) {
      return l && l.__esModule ? l : { default: l };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = d;
    var i = Me, u = a(Ft()), c = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function o(l, p) {
      return l.includes("-") ? !c.has(l) : !!(p && typeof p.is == "string");
    }
    var m = {
      reactCompat: !0
    };
    function d(l, p) {
      if (typeof l == "string") {
        if (!l.trim()) {
          p.style = {};
          return;
        }
        try {
          p.style = (0, u.default)(l, m);
        } catch {
          p.style = {};
        }
      }
    }
    e.PRESERVE_CUSTOM_ATTRIBUTES = Number(i.version.split(".")[0]) >= 16, e.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "colgroup",
      "table",
      "head",
      "html",
      "frameset"
    ]);
    var r = function(l) {
      return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(l.name);
    };
    e.canTextBeChildOfNode = r;
    var n = function(l) {
      return l;
    };
    e.returnFirstArg = n;
  })(be)), be;
}
var at;
function Et() {
  if (at) return Re;
  at = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.default = o;
  var e = Dt(), a = yt(), i = ["checked", "value"], u = ["input", "select", "textarea"], c = {
    reset: !0,
    submit: !0
  };
  function o(d, r) {
    d === void 0 && (d = {});
    var n = {}, l = !!(d.type && c[d.type]);
    for (var p in d) {
      var v = d[p];
      if ((0, e.isCustomAttribute)(p)) {
        n[p] = v;
        continue;
      }
      var T = p.toLowerCase(), C = m(T);
      if (C) {
        var R = (0, e.getPropertyInfo)(C);
        switch (i.includes(C) && u.includes(r) && !l && (C = m("default" + T)), n[C] = v, R && R.type) {
          case e.BOOLEAN:
            n[C] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            v === "" && (n[C] = !0);
            break;
        }
        continue;
      }
      a.PRESERVE_CUSTOM_ATTRIBUTES && (n[p] = v);
    }
    return (0, a.setStyleProp)(d.style, n), n;
  }
  function m(d) {
    return e.possibleStandardNames[d];
  }
  return Re;
}
var de = {}, st;
function zt() {
  if (st) return de;
  st = 1;
  var e = de && de.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.default = o;
  var a = Me, i = e(Et()), u = yt(), c = {
    cloneElement: a.cloneElement,
    createElement: a.createElement,
    isValidElement: a.isValidElement
  };
  function o(d, r) {
    r === void 0 && (r = {});
    for (var n = [], l = typeof r.replace == "function", p = r.transform || u.returnFirstArg, v = r.library || c, T = v.cloneElement, C = v.createElement, R = v.isValidElement, x = d.length, _ = 0; _ < x; _++) {
      var E = d[_];
      if (l) {
        var w = r.replace(E, _);
        if (R(w)) {
          x > 1 && (w = T(w, {
            key: w.key || _
          })), n.push(p(w, E, _));
          continue;
        }
      }
      if (E.type === "text") {
        var P = !E.data.trim().length;
        if (P && E.parent && !(0, u.canTextBeChildOfNode)(E.parent) || r.trim && P)
          continue;
        n.push(p(E.data, E, _));
        continue;
      }
      var s = E, f = {};
      m(s) ? ((0, u.setStyleProp)(s.attribs.style, s.attribs), f = s.attribs) : s.attribs && (f = (0, i.default)(s.attribs, s.name));
      var h = void 0;
      switch (E.type) {
        case "script":
        case "style":
          E.children[0] && (f.dangerouslySetInnerHTML = {
            __html: E.children[0].data
          });
          break;
        case "tag":
          E.name === "textarea" && E.children[0] ? f.defaultValue = E.children[0].data : E.children && E.children.length && (h = o(E.children, r));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      x > 1 && (f.key = _), n.push(p(C(E.name, f, h), E, _));
    }
    return n.length === 1 ? n[0] : n;
  }
  function m(d) {
    return u.PRESERVE_CUSTOM_ATTRIBUTES && d.type === "tag" && (0, u.isCustomComponent)(d.name, d.attribs);
  }
  return de;
}
var it;
function Ht() {
  return it || (it = 1, (function(e) {
    var a = ye && ye.__importDefault || function(r) {
      return r && r.__esModule ? r : { default: r };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = d;
    var i = a(At());
    e.htmlToDOM = i.default;
    var u = a(Et());
    e.attributesToProps = u.default;
    var c = a(zt());
    e.domToReact = c.default;
    var o = /* @__PURE__ */ vt();
    Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
      return o.Comment;
    } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
      return o.Element;
    } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
      return o.ProcessingInstruction;
    } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
      return o.Text;
    } });
    var m = { lowerCaseAttributeNames: !1 };
    function d(r, n) {
      if (typeof r != "string")
        throw new TypeError("First argument must be a string");
      return r ? (0, c.default)((0, i.default)(r, n?.htmlparser2 || m), n) : [];
    }
  })(ye)), ye;
}
var Gt = Ht();
const ot = /* @__PURE__ */ ht(Gt), lt = ot.default || ot, ct = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, le = () => {
  console.log("A function wasn't passed as a props when it needed to be.");
}, b = (e) => e == null || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0, ne = () => {
  let e = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  return new Date(/* @__PURE__ */ new Date() - e).toISOString().slice(0, 19).replace("T", " ");
}, K = (e) => {
  let a = !1;
  return Array.isArray(e) && e.length > 0 && (a = !0), a;
}, pe = (e) => {
  let a = !0;
  return Array.isArray(e) && e.length > 0 && (a = !1), a;
}, qt = (e) => {
  let a = null;
  return K(e) && !b(e[0]) && (a = e[0]), a;
}, he = (e) => {
  let a = e;
  return b(e) || (a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&#039;")), a;
}, Y = (e) => e === null || e === void 0 ? "" : e === "NaN" || isNaN(e) && typeof e == "number" || isNaN(e) && e === "" || e === "" ? null : e, oe = (e) => {
  let a = "";
  return b(e) || (a = Oe(e).trim()), a;
}, Oe = (e) => {
  let a = "";
  return b(e) || (a = e.toString()), a;
}, ut = (e, a, i, u, c) => {
  let o = "Add log not attempted due to parameter values.";
  if (u === !0 && i !== !1) {
    let m = "Add Log", d = `${e}logs/`, r = "", n = "";
    fetch(d, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: c })
    }).then((l) => {
      if (r = l, r.status === 200)
        return r.json();
      me(e, a, i, u, { operation: `${m} SQL Server`, transactionData: { url: d, response: { ok: r.ok, redirected: r.redirected, status: r.status, statusText: r.statusText, type: r.type, url: r.url }, data: n, logObject: c }, errorData: { message: `${r.status} ${r.statusText} ${r.url}` }, dateEntered: ne() }), o = `${m}: ${r.status} ${r.statusText} ${r.url}`;
    }).then((l) => {
      n = l, o = l;
    }).catch((l) => {
      me(e, a, i, u, { operation: m, transactionData: { url: d, response: { ok: r.ok, redirected: r.redirected, status: r.status, statusText: r.statusText, type: r.type, url: r.url }, data: n, logObject: c }, errorData: { name: l.name, message: l.message, stack: l.stack }, dateEntered: ne() }), o = `${m}: ${he(l.name)}: ${he(l.message)}`;
    });
  }
  return o;
}, me = (e, a, i, u, c) => {
  let o = "Add error log not attempted due to parameter values.";
  if (u === !0 && i !== !1) {
    let m = "Add Error Log", d = `${e}errorLogs/`, r = "";
    fetch(d, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: c })
    }).then((n) => {
      if (r = n, r.status === 200)
        return r.json();
      logResult = `${m}: ${r.status} ${r.statusText} ${r.url}`;
    }).then((n) => {
      o = n;
    }).catch((n) => {
      o = `${m}: ${he(n.name)}: ${he(n.message)}`;
    });
  }
  return o;
}, X = (e, a) => {
  let i = e;
  return b(e) || (b(a) ? i = lt(e) : i = lt(e, a)), i;
}, dt = () => ({ appCodeName: navigator.appCodeName, appName: navigator.appName, appVersion: navigator.appVersion, cookieEnabled: navigator.cookieEnabled, language: navigator.language, onLine: navigator.onLine, platform: navigator.platform, product: navigator.product, userAgent: navigator.userAgent }), Vt = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Bt = (e) => {
  let a = null, i = b(e) ? "" : e;
  try {
    typeof import.meta < "u" && (a = Vt?.[`VITE_${i}`]), typeof process > "u" && b(a) && typeof process.env < "u" && (a = process.env[`REACT_APP_${i}`]);
  } catch {
  }
  return a;
}, bt = () => {
  let e = "";
  try {
    typeof import.meta < "u" && (e = "production"), typeof process > "u" && b(e) && typeof process.env < "u" && (e = process.env?.NODE_ENV);
  } catch {
  }
  return e === "development";
}, Ut = () => window?.electronEnvironment?.inElectron ?? !1, Xt = () => !!(bt() || Ut() || window.location.href.includes("orbiseducation.com")), fe = () => {
  let e = Bt("ALLOW_DEVELOPMENT_COMPUTERLOG");
  return !!(Xt() && (!bt() || e === "True"));
}, we = ({
  alertType: e = "",
  message: a = "",
  includeResetButton: i = !1,
  setMessage: u
}) => {
  const c = q("alert", {
    "alert-success": e === "success",
    "alert-warning": e === "warning",
    "alert-info": e === "info",
    "alert-danger": e === "error"
  });
  return /* @__PURE__ */ t.jsx("div", { className: "alert-container", children: /* @__PURE__ */ t.jsxs("div", { className: c, children: [
    /* @__PURE__ */ t.jsx("div", { className: "alert__message-text", children: X(a) }),
    i ? /* @__PURE__ */ t.jsx("button", { type: "button", className: "refresh", onClick: () => window.location.reload(), children: "Refresh" }) : null,
    /* @__PURE__ */ t.jsx("button", { type: "button", className: "alert__close-button", onClick: () => u(""), children: /* @__PURE__ */ t.jsx("i", { className: "fas fa-close" }) })
  ] }) });
}, Qt = ({
  informationMessage: e = "",
  successMessage: a = "",
  warningMessage: i = "",
  errorMessage: u = "",
  informationMessageVisible: c = !1,
  successMessageVisible: o = !1,
  warningMessageVisible: m = !1,
  errorMessageVisible: d = !1,
  addInformationMessage: r = le,
  addSuccessMessage: n = le,
  addWarningMessage: l = le,
  addErrorMessage: p = le
}) => {
  W(() => {
    b(a) || setTimeout(() => {
      n("");
    }, 5e3);
  }, [a]);
  const v = (x) => {
    r(x);
  }, T = (x) => {
    n(x);
  }, C = (x) => {
    l(x);
  }, R = (x) => {
    p(x);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "alert-messages-container", children: [
    c ? /* @__PURE__ */ t.jsx(
      we,
      {
        message: e,
        setMessage: v,
        alertType: "info"
      }
    ) : null,
    o ? /* @__PURE__ */ t.jsx(
      we,
      {
        message: a,
        setMessage: T,
        alertType: "success"
      }
    ) : null,
    m ? /* @__PURE__ */ t.jsx(
      we,
      {
        message: i,
        setMessage: C,
        alertType: "warning"
      }
    ) : null,
    d ? /* @__PURE__ */ t.jsx(we, { message: u, setMessage: R, alertType: "error" }) : null
  ] });
}, er = ({
  urlToCopy: e,
  label: a = "Copy URL",
  disabled: i,
  buttonType: u = "default",
  tooltipStyle: c = ""
}) => {
  const [o, m] = F(!1), d = q("btn", {
    "btn-success": o,
    "btn-light-gray": !o
  }), r = q("btn btn-transparent tooltip-container", {
    "tooltip-right": c === "right",
    "tooltip-left": c === "left",
    "tooltip-down": c === "down"
  }), n = (l) => {
    l.stopPropagation(), b(e) || (navigator.clipboard.writeText(e), m(!0), setTimeout(() => {
      m(!1);
    }, 2e3));
  };
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: u === "icon" ? /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      className: r,
      "data-tooltip": o ? "Copied" : a,
      onClick: n,
      disabled: i,
      children: o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-check green-text" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Copied" })
      ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-copy" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: a })
      ] })
    }
  ) : /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      className: d,
      onClick: n,
      disabled: i,
      children: o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fas fa-check" }),
        " Copied"
      ] }) : a
    }
  ) });
}, tr = ({ children: e = "No search results." }) => /* @__PURE__ */ t.jsxs("span", { className: "text-center no-results-message", children: [
  /* @__PURE__ */ t.jsx("i", { className: "fa fa-exclamation-triangle red-text" }),
  " ",
  e
] }), Yt = ({ classes: e = "orbis-logo", width: a = "100%" }) => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    className: e,
    width: a,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1624.91 556.67",
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "#2e3192",
          d: "M1606.78 424.92v-14.83c-.14-16.25-.4-32.51-.42-48.77 0-5-1.86-7.74-7-7.89-2.21-.06-5 .27-4-4h29.1c1 2.34.7 4.05-2.34 3.91-7.27-.35-8.38 3.84-8.47 10-.39 25.42-.58 50.84.1 76.25v4.43c-7-.34-12.37-2-16.83-7.67-16.65-21.28-33.79-42.18-50.76-63.21-1.81-2.24-3.75-4.37-5.53-6.45-1.89.82-1.53 2.12-1.52 3.15.09 19.92.38 39.85.27 59.77 0 5.41 1.73 8.16 7.28 8.29 2.2.05 5 0 3.53 4.13h-29c-1.56-4.46 1.88-4.24 4.09-4.26 5.14 0 6.73-2.79 6.75-7.37q.21-34.69.52-69.39c0-5.37-3.17-7.15-7.82-7.52-2.52-.2-5.44 0-3.7-4.53 6.69 0 13.54.15 20.37-.06 3.56-.11 4.59 2.63 6.2 4.68q24.93 31.51 49.77 63.1c2.37 3 5 5.8 7.51 8.7zm-873.59 17.71c10.38-14.69 5.51-30.38 6.41-45.23.72-11.84-.34-23.78-.13-35.68.1-5.45-1.86-8.14-7.26-8.36-2-.08-4.43.28-3.88-3.53.22-1.07 1.43-1 2.55-1 16 0 32-.15 48-.07 26.83.13 44.5 15 46.21 38.68C827 413.31 809.23 437 785 441.21c-16.86 2.94-33.79-.12-51.81 1.42zm19.75-7.29c19.62 1.33 38.58 3.56 50.9-15.17 10-15.27 9.65-40.46-1.21-53.08-13.51-15.7-31.58-13.11-49.58-11.32-1.45 26.76-.57 52.73-.11 79.57zm686.06 9.03c-28.53-.08-47.2-19.2-47.25-48.38 0-29.54 20.67-49.28 51.56-49.12 29.94.15 48.56 17.79 48.43 45.88-.15 30.89-21.42 51.7-52.74 51.62zm-33.11-53.63c.21 13 2.72 24.72 10.59 34.66 8.47 10.68 19.75 14.25 33 12.2 13.42-2.08 21.62-10.16 25.46-22.86a59.69 59.69 0 00-1.39-39.69c-6.18-16-20-23.75-38.46-21.94-15.13 1.48-25.42 11.51-28.43 28a85 85 0 00-.79 9.63zM698.1 419.25c-.57 7.75-1.1 15-1.67 22.76h-64.38c0-.67-.41-2.08-.09-2.26 6.52-3.61 5.36-9.81 5.39-15.59.1-20.15.06-40.3.29-60.45.07-5.94-.76-10.63-8.2-10.35-2.94.11-3.52-1.39-2.65-4.24h67.5c-.64 6.07-1.32 12.05-1.9 18-.15 1.55-.5 2.64-2.34 2.6s-1.79-1.42-2.08-2.79c-2.28-10.57-2.31-10.57-13.66-11.78-7.51-.81-15-1.15-22.91.67v34.77a88.64 88.64 0 0024.51 0c4.35-.52 3.85-3.71 4.21-6.6.24-1.86-.5-4.71 2.79-4.34 2.6.29 1.91 2.74 1.92 4.43.07 7.31 0 14.62 0 21.92 0 1.77.41 4.05-2.34 4.07s-2.55-2.31-2.47-4c.29-6.69-3.46-8.76-9.39-8.7-6.35.07-12.7 0-19.37 0-1.32 12.92-.93 25.19-.2 38.32 11.62.2 23.14.63 34.7-.63 5.71-.63 5.24-5.36 6.59-9 .96-2.64-.35-6.99 5.75-6.81zm157.26-69.96h38.56c1 4.23-1.67 4.15-4 4-7-.44-9 3.32-9 9.68.17 16.25-.11 32.51.11 48.76.21 15.71 6 21.92 21.64 23.64a44.33 44.33 0 0015-.91c11.57-2.67 17-7.86 17.77-19.49 1.24-18.51.59-37.07.29-55.62-.08-5.09-3.55-5.73-7.45-6-2.26-.17-5.48.87-4.81-4.5h29.73c1.27 0 2.25.4 2.43 1.81.23 1.75-.84 2.24-2.35 2.65-10.56 2.84-10.49 2.87-10.59 14.17-.14 16 .3 32.09-.78 48.05-1.09 16.31-9.3 24.92-25.31 27.74-10.63 1.87-21.42 1.9-31.85-1.94s-16.1-11-16.3-22.15c-.33-19-.69-38-.66-57 0-6.06-2.14-9-8.26-8.86-2.47.05-5.47.4-4.17-4.03zm308.58 92.9c1.76-7.62 8.87-2.76 12.21-7.11-1.71-7.39-5.61-14.61-8.47-22.18-.83-2.21-3-1.79-4.74-1.79h-29.53a3.85 3.85 0 01-.68 0c-3.84-.56-4.57 2.48-5.38 5-2.14 6.56-7.54 12.25-6.18 19.66.41 2.24 4 1.55 6.22 1.75 3.09.29 4.87 1.08 3.36 4.69h-29.42c-1.18-2.66-.86-4.56 2.47-4.51 5.46.08 7.37-3.77 9.16-7.83 11.26-25.48 22.46-51 33.82-76.4 1-2.22.77-5.88 4.72-5.8s3.64 3.65 4.61 5.91c10.52 24.3 20.84 48.69 31.38 73 2.19 5.06 3.53 11.14 11.09 11.38 2.05.07 1.54 2.37 1.09 4.27zm-32.09-37.14h32.41l-16-38.63zm-60.61-51.9c-.74 5.61-1.39 10.56-2 15.52-.23 1.74.1 4-2.7 3.81-2.11-.12-2.71-1.74-2.46-3.41 1.6-10.66-6.51-12.51-13.65-14.33-15.35-3.91-30.17-2.28-41 10.27-12.26 14.25-12.48 31.22-5.6 47.81 6.62 15.94 20.16 23 37 24.15 10.91.75 21.13-1.88 31.48-8-.61 4.46-1.06 7.52-4.41 9.12-19.73 9.44-53.84 10.25-71.68-10.92-12.38-14.69-14.1-31.59-8.06-49 6.31-18.21 20.8-27.32 39.15-30.31a78.32 78.32 0 0143.93 5.29zm224.3-3.92v18.58c0 1.45-.39 2.78-2.2 2.86-2.19.1-2.33-1.41-2.7-3.13-2.53-11.91-2.57-11.9-15-11.9h-11.16c-1.74 13.5-.84 26.52-1 39.5-.12 11.23.07 22.47 0 33.7 0 5.63 1.84 9.22 8.32 8.88 2.37-.12 5.37-.07 4.54 4.78h-36.06c-1.25 0-2.29-.33-2.46-1.75-.28-2.18 1.28-3.07 2.92-2.92 10.11.93 10.13-5.76 10.08-12.84-.15-21.55-.17-43.09-.27-64.64 0-1.32-.23-2.64-.38-4.24-7.36-.88-14.41-.49-21.44-.19-4.29.18-3.63 3.7-4.6 6.41s1.52 7.83-4.87 8.5c-.34-7.23-.67-14.2-1-21.6zm28.76-.03h38.64c1 3.95-1.29 4.27-3.75 4.1-6.42-.43-9.14 2.63-9.13 8.88q.11 33.35 0 66.7c0 5.66 2 9.15 8.41 8.86 2.29-.1 5.51-.21 4.49 4.35h-38.67c-1.08-4.9 2.56-4.42 5-4.38 5.68.1 7.8-2.93 7.79-8 0-22.69-.18-45.37-.11-68.06 0-5.81-2.6-8.32-8.21-8.29-2.44-.01-5.47.46-4.46-4.16z",
          id: "prefix__Education"
        }
      ),
      /* @__PURE__ */ t.jsx("path", { fill: "#02a04e", d: "M630.82 316.18h993.59v5.62H630.82z", id: "prefix__Line" }),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          fill: "#2e3192",
          d: "M976.61 203.58c19.75 25.55 37.8 51.19 57.66 75.46a15.18 15.18 0 0010.44 6c6.83.71 6.86.91 4.87 8.38a177 177 0 00-31.39.13c-3.93.43-5-2.83-6.68-5-16.89-21.68-32-44.72-49.49-65.94-5-6-10-11.94-15-17.94-1.25-1.51-3.16-2.77-2.07-5.32 1.16-2.73 3.42-1.77 5.31-1.68 9.94.46 19.7-.3 29-4.12a37.07 37.07 0 0020.3-47.93c-4.73-11.69-14.51-16.76-26-18.95-10.92-2.07-21.87-1.09-32.74 1.2-4.4.92-5 3.67-5.19 7.45-1.47 23.35-1 46.72-.93 70.09 0 22.22-.67 44.45.65 66.66.62 10.48 1.84 11.6 12.1 12.65 3.65.37 7.29.72 11.06 1.09 1.54 2.26.94 4.69.25 8.1a568.35 568.35 0 00-71.26.21c-2.63-2.64-2-5.09-1.43-8.16 4.82-.5 9.73-1.15 14.67-1.51 5.79-.42 8.72-3.41 9-9.15 0-.92.16-1.83.18-2.75.7-45.37.8-90.74-.13-136.11-.19-9.12-2.29-10.95-11.63-11.59-2.06-.14-4.12-.13-6.18-.25-6.73-.4-6.91-.67-5.57-8 7 0 14-.23 21.06 0 24.28.93 48.52-1.28 72.79-.73a133 133 0 0114.33 1.45c34.41 4.56 42.71 42.51 22.2 66.1-10.37 11.89-24.24 16.75-40.18 20.16zm238.88-10.3c3.82.61 7.44 1.15 11 1.75 27.54 4.58 41.17 25.23 34.7 52.54-5.41 22.78-28.14 41.82-53.43 45.11-11.21 1.46-22.39 1.23-33.59.63a256.21 256.21 0 00-40.83.6c-2.05-4.27-1.17-6.93 2.68-8.09 5.38-1.62 6.45-5.56 6.7-10.52 1.91-38.45 1.47-76.91 1.16-115.38 0-6.87 0-13.74-.24-20.61-.39-12.71-1.54-14-14.37-14.54-5.85-.23-8.82-1.77-6.51-8.23 6.34 0 12.67-.19 19 0 21.53.73 43-1 64.51-1.17a87.46 87.46 0 0119.76 2c24.76 5.52 35.37 30.08 22.7 52.13-6 10.51-15.35 16.68-26.38 20.77-2.25.9-4.87.97-6.86 3.01zm-47 7v63.5c0 18.71 0 18.71 18.78 19.1 32.32.67 49.94-16.59 48.27-48-.69-13.22-5.56-24.83-18.88-30.16-15.41-6.14-31.66-5.32-48.16-4.4zm-.25-10.94c14.75.28 29 1.83 42.45-4.08 13-5.72 17.45-16.93 17.7-30.07.25-12.91-6-22.16-17.46-26-13.54-4.55-27.34-3.86-41.27-1.06-2.08 20.39-1.15 40.32-1.41 61.25zm-462.55-77.11c35.25.22 59.55 6.23 79 25.66 19 18.94 24.46 42.65 22.74 68.15C802.58 278.55 727 320.57 662.32 287c-24.66-12.82-37.62-34.44-42.26-60.94-6.77-38.73 1.93-72.51 35.37-96.62 17.5-12.64 37.57-17.44 50.26-17.21zm74.68 95.49c0-4.12.37-8.28-.06-12.35-4.41-41.51-25.3-73.14-74.78-72-27.38.62-49.59 16.73-57 43.12-8.3 29.5-5.1 58.17 9.35 85.14 9.93 18.54 25.39 30.53 46.72 33.4 28.81 3.87 59.09-6 70.65-41.53 3.75-11.67 5.82-23.5 5.12-35.78zm828.77-50c-1.13.1-2.22.28-3.32.28-1.36 0-2.71-.13-4.66-.24-.27-4.9-.84-9.63-.69-14.34a11.68 11.68 0 00-5.62-10.94c-13.55-9-28.17-11.88-43.85-7.15a34.69 34.69 0 00-23.36 41.23c2.84 11.49 11 17.72 22.14 19.95s22.56 3.8 33.83 5.8c18 3.2 34 9.56 38.93 29.51 5.21 21-.19 39.48-16.08 54.42-21.53 20.23-47.65 23.65-75.55 19.82a94.91 94.91 0 01-23.12-6.25c-2.52-1-4.26-2.15-4-5.41a326.32 326.32 0 001.46-34.73c2.79-1.67 5.22-1.1 8.32-.66.4 4.67 1.09 9.38 1.14 14.09.07 6.13 2.65 10.6 7.9 13.48 19.48 10.68 39.62 12.64 59.81 2.69 16-7.88 23.66-27.59 18.51-44.6-3.26-10.79-11.16-16.6-21.55-19-11.34-2.64-22.87-4.52-34.31-6.76-24.5-4.79-37.6-17.1-39.73-37.31-2.55-24.23 9.26-45.6 31.15-54.18 24.91-9.77 49.42-5.66 73.46 4.09 2.26.92 3.11 2.25 2.81 4.72-1.26 10.37-2.4 20.77-3.62 31.49zm-186.96 128.11a10.84 10.84 0 01-.5 8.1c-23.81-1.59-48-1.25-71.83 0-2-2.9-1.49-5.28-.83-8.05 4.06-.43 8.1-.88 12.15-1.28 9.69-1 11.31-2.43 11.79-12.29.42-8.46.47-16.94.45-25.41-.08-35.52-.12-71-.45-106.54-.14-13.92-1.66-15.11-15.49-15.79-2.72-.13-5.43-.45-8-.66-1.63-2.44-1-4.68-.71-8 24.32.73 48.64 1.14 72.76-.2 1.76 2.88 1.3 5.26.67 7.65-3.6 1.39-7.31 1.07-10.94 1.29-10.78.64-12.62 2.22-13.08 13.19-.43 10.3-.44 20.61-.43 30.92q0 49.15.22 98.3c0 2.29.19 4.58.26 6.86.22 6.85 3.49 10.49 10.59 10.66 4.36.14 8.67.8 13.37 1.25z",
          id: "prefix__Orbis"
        }
      ),
      /* @__PURE__ */ t.jsxs("g", { id: "prefix__Layer_6", "data-name": "Layer 6", children: [
        /* @__PURE__ */ t.jsx(
          "path",
          {
            fill: "#2e3192",
            d: "M525.46 150.48a279 279 0 00-30.17-46.32C368.48 118.08 239.74 83.72 196.2 12.31a277.63 277.63 0 00-91.52 48.52C225 135.9 368.16 159.12 525.46 150.48z"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "path",
          {
            fill: "#02a04e",
            d: "M551.87 227.49A275.59 275.59 0 00536.31 174c-182.93 35.69-346.18 18.14-492.11-46.2a277 277 0 00-31.93 68.32c183.88 61.78 363.04 63.25 539.6 31.37z"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "path",
          {
            fill: "#2e3192",
            d: "M477.88 84.48A277.42 277.42 0 00278.25 0c-5.15 0-10.25.17-15.36.44 31.67 51.22 136.16 84.63 214.99 84.04zM0 281.64c1.77 152.19 125.64 275 278.25 275 153.72 0 278.34-124.62 278.34-278.34a279.74 279.74 0 00-3-40.57C379.36 303 194.09 314 0 281.64z"
          }
        )
      ] })
    ]
  }
), ae = () => /* @__PURE__ */ t.jsxs("span", { className: "required", children: [
  " ",
  "* ",
  /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "required" })
] }), ke = ({
  id: e = "",
  label: a = "",
  value: i,
  autoFocus: u = !1,
  disabled: c = !1,
  hint: o = "",
  inlineError: m = "",
  isRequired: d = !1,
  list: r = "",
  max: n = null,
  maxLength: l = null,
  min: p = null,
  placeholder: v = "",
  rows: T = 10,
  step: C = null,
  srOnly: R = !1,
  type: x = "text",
  useInputAddon: _ = !1,
  onKeyDown: E = () => {
  },
  // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  updateValue: w = (P) => {
  }
}) => {
  const [P, s] = F("password"), f = q("", {
    "sr-only": R,
    "input-addon": _
  }), h = q("form-group", {
    "with-addon": _,
    "input-error": !b(m),
    "input-disabled": c
  }), y = {};
  p != null && (y.min = p), n != null && (y.max = n), C != null && (y.step = C), l != null && (y.maxLength = l);
  const N = (D) => {
    const M = D.target.value;
    if (x === "number") {
      const B = M === "" ? "" : Number(M);
      w(Number.isNaN(B) ? M : B);
      return;
    }
    let z = M;
    l != null && z.length > l && (z = z.slice(0, l)), w(z);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: h, children: [
    /* @__PURE__ */ t.jsxs("label", { htmlFor: e, className: f, children: [
      a,
      d ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }),
    b(o) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(o) }),
    x === "textarea" ? /* @__PURE__ */ t.jsx(
      "textarea",
      {
        id: e,
        name: e,
        placeholder: v,
        rows: T,
        value: i == null ? "" : String(i),
        disabled: c,
        onChange: N,
        onKeyDown: E
      }
    ) : null,
    x === "color" ? /* @__PURE__ */ t.jsxs("div", { className: "color-input-container", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: x,
          id: e,
          placeholder: v,
          value: i,
          disabled: c,
          onChange: N,
          autoFocus: u
        }
      ),
      i
    ] }) : null,
    x === "password" ? /* @__PURE__ */ t.jsxs("div", { className: "form-group__password-input-group", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: P,
          id: e,
          placeholder: v,
          value: i,
          disabled: c,
          onChange: N,
          autoFocus: u
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "form-group__password-input-group__password-addon",
          onMouseOver: () => s("text"),
          onMouseOut: () => s("password"),
          title: "Hover to show password.",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fas fa-eye" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Hover to show password." })
          ]
        }
      )
    ] }) : null,
    x !== "textarea" && x !== "toggle" && x !== "password" && x !== "color" ? /* @__PURE__ */ t.jsx(
      "input",
      {
        type: x,
        id: e,
        placeholder: v,
        value: i,
        disabled: c,
        onChange: N,
        list: r,
        autoFocus: u,
        ...y
      }
    ) : null,
    b(m) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: X(m) })
  ] });
}, ft = () => {
}, Wt = (e, a, i) => "", mt = (e) => {
}, $t = (e) => {
}, pt = (e) => {
}, rr = ({
  applicationVersion: e = "",
  baseURL: a = "",
  computerLog: i = {},
  userIdentifier: u = "",
  demonstrationMode: c = !1,
  environmentMode: o = "",
  databaseAvailable: m = !0,
  sessionToken: d = null,
  loggedInUser: r = null,
  disabled: n = !1,
  sessionTokenName: l = "",
  handleNavigation: p = ft,
  setFetchAuthorization: v = Wt,
  setDatabaseAvailable: T = mt,
  setUserTokenExpired: C = mt,
  setLoggedInUser: R = $t,
  addSuccessMessage: x = pt,
  addErrorMessage: _ = pt,
  clearMessages: E = ft
}) => {
  const [w, P] = F(null), [s, f] = F(null), [h, y] = F(""), [N, D] = F(""), [M, z] = F(""), [B, A] = F(""), [k, V] = F(""), [U, te] = F({});
  W(() => {
    const S = localStorage.getItem(l);
    (b(S) || b(r)) && (ut(
      a,
      v("", o, c),
      m,
      fe(),
      {
        operation: "Attempted Page Visit",
        userIdentifier: u,
        href: window.location.href,
        applicationVersion: e,
        browserData: JSON.stringify(dt()),
        transactionData: { loggedInUser: r, computerLog: i },
        dateEntered: ne()
      }
    ), p());
  }, [r]);
  const ge = () => {
    if (r) {
      P(r), f(r.userID ?? null), y(r.username ?? ""), D(r.firstName ?? ""), z(r.lastName ?? ""), A(r.email ?? ""), V("");
      return;
    }
    P(null), f(null), y(""), D(""), z(""), A(""), V("");
  };
  W(() => {
    ge();
  }, [r]), W(() => {
    b(U) || (!b(U.txtFirstName) && !b(N) && te({
      ...U,
      txtFirstName: ""
    }), !b(U.txtLastName) && !b(M) && te({
      ...U,
      txtLastName: ""
    }), !b(U.txtEmail) && !b(B) && !b(B.match(ct)) && te({
      ...U,
      txtEmail: ""
    }));
  }, [N, M, B, U]);
  const Te = () => {
    E();
    const S = "Save Record";
    let L = !1, j = "", H = "", I = {};
    b(oe(N)) && (I = {
      ...I,
      txtFirstName: "Please enter the <strong>First Name</strong>."
    }), b(oe(M)) && (I = {
      ...I,
      txtLastName: "Please enter the <strong>Last Name</strong>."
    }), b(oe(B)) ? I = {
      ...I,
      txtEmail: "Please enter the <strong>Email</strong>."
    } : b(B.match(ct)) && (I = {
      ...I,
      txtEmail: "Please enter a valid email address for the <strong>Email</strong>."
    }), b(I) || (H = `${H}<br />Please fix the errors with the indicated fields in the form.`), b(j) || (j = `Please enter the user's${j.replace(/^,/, "")}.`), b(H) || (b(j) ? j = H.replace(/<br\s*\/?>/, "") : j = j + H), !b(j) || !b(I) ? (b(j) || _(`${S}: ${j}`), b(I) || te(I), L = !1) : L = !0, L === !0 && g();
  }, g = (S) => {
    const L = `${a}users/`;
    let j, H, I = "", G = "";
    const $ = r, ee = s, re = {
      // username: convertNullEmptyString(formatTrim(txtUsername)),
      firstName: Y(oe(N)),
      lastName: Y(oe(M)),
      email: Y(oe(B)),
      password: Y(oe(k)),
      updatedBy: r?.userID ?? null
    };
    I = "Updated User", G = "PUT", re.userID = ee, fetch(L, {
      method: G,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: v(d, o, c)
      }),
      body: JSON.stringify({ recordObject: re })
    }).then((Q) => (j = Q, j.status === 200 ? j.json() : (me(
      a,
      v("", o, c),
      m,
      fe(),
      {
        operation: `${I} SQL Server`,
        transactionData: {
          url: L,
          response: {
            ok: j.ok,
            redirected: j.redirected,
            status: j.status,
            statusText: j.statusText,
            type: j.type,
            url: j.url
          },
          data: H,
          primaryKeyID: ee,
          previousRecord: $,
          recordObject: re,
          applicationVersion: e,
          loggedInUser: r,
          computerLog: i
        },
        errorData: { message: `${j.status} ${j.statusText} ${j.url}` },
        dateEntered: ne()
      }
    ), j.status === 401 && C(!0), Promise.reject(Error(j.status + " Fetch failed."))))).then((Q) => {
      if (H = Q, b(H))
        _(`${I}: No Results Returned.`), me(
          a,
          v("", o, c),
          m,
          fe(),
          {
            operation: `${I} SQL Server`,
            transactionData: {
              url: L,
              response: {
                ok: j.ok,
                redirected: j.redirected,
                status: j.status,
                statusText: j.statusText,
                type: j.type,
                url: j.url
              },
              data: H,
              primaryKeyID: ee,
              previousRecord: $,
              recordObject: re,
              applicationVersion: e,
              loggedInUser: r,
              computerLog: i
            },
            errorData: { message: "No Results Returned." },
            dateEntered: ne()
          }
        );
      else if (H.transactionSuccess && !b(H.records)) {
        const Z = qt(H.records);
        y(Y(Z.username)), D(Y(Z.firstName)), z(Y(Z.lastName)), A(Y(Z.email)), V(Y(Z.password));
        const Tt = {
          ...w ?? r,
          username: Y(Z.username),
          firstName: Y(Z.firstName),
          lastName: Y(Z.lastName),
          email: Y(Z.email),
          password: Y(Z.password)
        };
        R(Tt), T(!0), ut(
          a,
          v("", o, c),
          m,
          fe(),
          {
            operation: I,
            userIdentifier: u,
            href: window.location.href,
            applicationVersion: e,
            browserData: JSON.stringify(dt()),
            transactionData: { dataRecord: Z, previousRecord: $, loggedInUser: r, computerLog: i },
            dateEntered: ne()
          }
        ), x(`${I}: ${H.message}`);
      } else
        _(`${I}: ${H.message}`), me(
          a,
          v("", o, c),
          m,
          fe(),
          {
            operation: `${I} SQL Server`,
            transactionData: {
              url: L,
              response: {
                ok: j.ok,
                redirected: j.redirected,
                status: j.status,
                statusText: j.statusText,
                type: j.type,
                url: j.url
              },
              data: H,
              primaryKeyID: ee,
              previousRecord: $,
              recordObject: re,
              applicationVersion: e,
              loggedInUser: r,
              computerLog: i
            },
            errorData: { message: H.message },
            dateEntered: ne()
          }
        );
    }).catch((Q) => {
      _(
        `${I}: ${he(Q.name)}: ${he(Q.message)}`
      ), me(
        a,
        v("", o, c),
        m,
        fe(),
        {
          operation: I,
          userIdentifier: u,
          transactionData: {
            primaryKeyID: ee,
            previousRecord: $,
            recordObject: re,
            applicationVersion: e,
            loggedInUser: r,
            computerLog: i
          },
          errorData: {
            name: Q.name,
            message: Q.message,
            inner: Q.inner,
            stack: Q.stack
          },
          dateEntered: ne()
        }
      ), T(!1);
    });
  };
  return /* @__PURE__ */ t.jsxs("section", { className: "section-block large", children: [
    /* @__PURE__ */ t.jsx("h2", { children: "Profile" }),
    /* @__PURE__ */ t.jsxs("div", { className: "field-legend-container", children: [
      /* @__PURE__ */ t.jsx("div", { className: "field-legend", children: /* @__PURE__ */ t.jsx("em", { children: "Note: Form fields that are grayed out are not able to be changed." }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "field-legend", children: [
        /* @__PURE__ */ t.jsx("span", { className: "required", children: " * " }),
        "indicates a required field."
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("form", { className: "admin-form", children: [
      /* @__PURE__ */ t.jsxs("p", { children: [
        /* @__PURE__ */ t.jsx("strong", { children: "Username" }),
        ": ",
        h
      ] }),
      /* @__PURE__ */ t.jsx(
        ke,
        {
          id: "txtFirstName",
          type: "text",
          label: "First Name",
          isRequired: !0,
          inlineError: U.txtFirstName ?? "",
          disabled: n,
          value: N,
          updateValue: D
        }
      ),
      /* @__PURE__ */ t.jsx(
        ke,
        {
          id: "txtLastName",
          type: "text",
          label: "Last Name",
          isRequired: !0,
          inlineError: U.txtLastName ?? "",
          disabled: n,
          value: M,
          updateValue: z
        }
      ),
      /* @__PURE__ */ t.jsx(
        ke,
        {
          id: "txtEmail",
          type: "text",
          label: "Email",
          isRequired: !0,
          inlineError: U.txtEmail ?? "",
          disabled: n,
          value: B,
          updateValue: A
        }
      ),
      /* @__PURE__ */ t.jsx(
        ke,
        {
          id: "txtPassword",
          type: "text",
          label: "Password (Only updated if a value is entered)",
          isRequired: !0,
          disabled: n,
          value: k,
          updateValue: V
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex-row", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-primary", onClick: Te, children: "Save" }),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "btn btn-dark-gray",
            onClick: () => {
              ge(), E(), te({});
            },
            children: "Reset"
          }
        )
      ] })
    ] })
  ] });
}, nr = ({
  columnPropertyName: e = "",
  columnText: a = "",
  setSortDirection: i,
  setSortProperty: u,
  sortDirection: c = "",
  sortProperty: o = ""
}) => {
  const m = q("fa", {
    "fa-sort-up": o === e && c === "asc",
    "fa-sort-down": o === e && c === "desc",
    "fa-sort": o !== e || c === "unsorted"
  }), d = (r) => {
    c === "unsorted" || r !== o ? (u(r), i("asc")) : c === "asc" ? (u(r), i("desc")) : (u(""), i("unsorted"));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "sortable-column-heading", children: [
    a,
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: "btn btn-transparent sort-button",
        onClick: () => d(e),
        children: /* @__PURE__ */ t.jsx("i", { className: m })
      }
    )
  ] });
}, ar = ({
  list: e = [],
  titleField: a = "",
  subtitleField: i = "",
  dragAndDrop: u = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: !1,
    originalOrder: [],
    updatedOrder: []
  },
  handleDragStart: c,
  handleDragOver: o,
  handleDrop: m,
  onDragLeave: d,
  handleManualMove: r
}) => /* @__PURE__ */ t.jsx(t.Fragment, { children: pe(e) ? null : /* @__PURE__ */ t.jsx("ul", { className: "sortable-list", children: e.map((n, l) => /* @__PURE__ */ t.jsxs("li", { className: "sortable-list__item", children: [
  /* @__PURE__ */ t.jsx("div", { className: "sortable-list__item__order-number", children: l + 1 }),
  /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `sortable-list__item__drag-item ${u && u.draggedTo === Number(l) ? "dropArea" : ""}`,
      "data-position": l,
      draggable: !0,
      onDragStart: (p) => c(p, e),
      onDragOver: o,
      onDrop: m,
      onDragLeave: d,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "sortable-list__item__drag-item__title", children: X(n[a]) }),
        b(n[i]) ? null : /* @__PURE__ */ t.jsx("div", { className: "sortable-list__item__drag-item__subtitle", children: X(n[i]) })
      ]
    }
  ),
  /* @__PURE__ */ t.jsxs("div", { className: "sortable-list__item__buttons", children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        disabled: l === 0,
        onClick: () => r(l, -1, e),
        children: [
          /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-up" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Move Up" })
        ]
      }
    ),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        disabled: l + 1 >= e.length,
        onClick: () => r(l, 1, e),
        children: [
          /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-down" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Move Down" })
        ]
      }
    )
  ] })
] }, l)) }) }), sr = () => /* @__PURE__ */ t.jsxs("div", { className: "spinner-container", children: [
  /* @__PURE__ */ t.jsx("i", { className: "fa fa-spinner loading-spinner" }),
  /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Loading..." })
] }), ir = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: u = "",
  setDialogBoxOpen: c
}) => {
  const o = Se(null), m = i, d = u, r = e, n = q("modal-dialog", {
    "modal-sm": m === "sm",
    "modal-md": m === "md",
    "modal-lg": m === "lg",
    "modal-xl": m === "xl"
  });
  return W(() => {
    const l = o.current;
    if (!l) return;
    a ? l.showModal() : l.close();
    const p = (v) => {
      v.preventDefault(), a && c(!1);
    };
    return l.addEventListener("close", p), l.addEventListener("cancel", p), () => {
      l.removeEventListener("close", p), l.removeEventListener("cancel", p);
    };
  }, [a]), /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("dialog", { className: n, ref: o, closedby: "any", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ t.jsx("h5", { className: "modal-title", id: "exampleModalLabel", children: d }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => c(!a),
          title: "Close",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-close" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-body", children: r }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        onClick: () => c(!a),
        children: "OK"
      }
    ) })
  ] }) });
}, or = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: u = "",
  dialogBoxType: c = "",
  setDialogBoxContinue: o
}) => {
  const m = Se(null);
  let d = i, r = u, n = e;
  c === "confirmDelete" ? (d = "md", r = "Delete Record?", n = "Are you sure you want to delete this record?") : c === "confirmRemove" ? (d = "md", r = "Remove Record?", n = "Are you sure you want to remove this record?") : c === "confirmRemoveAll" ? (d = "md", r = "Remove All Records?", n = "Are you sure you want to remove all records?") : c === "changePagePrompt" ? (d = "md", r = "Save Changes?", n = "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?") : c === "logOut" ? (d = "md", r = "Log Out?", n = "Are you sure you want to log out?") : c === "closeProgram" && (d = "md", r = "Close Program?", n = "Are you sure you want to close this program?");
  const l = q("modal-dialog", {
    "modal-sm": d === "sm",
    "modal-md": d === "md",
    "modal-lg": d === "lg",
    "modal-xl": d === "xl"
  });
  return W(() => {
    const p = m.current;
    if (!p) return;
    a ? p.showModal() : p.close();
    const v = (T) => {
      T.preventDefault(), a && o(!1);
    };
    return p.addEventListener("close", v), p.addEventListener("cancel", v), () => {
      p.removeEventListener("close", v), p.removeEventListener("cancel", v);
    };
  }, [a]), /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("dialog", { className: l, ref: m, closedby: "any", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ t.jsx("h5", { className: "modal-title", id: "exampleModalLabel", children: r }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => o(!1),
          title: "Close",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-close" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-body", children: n }),
    /* @__PURE__ */ t.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "btn btn-primary",
          onClick: () => o(!0),
          children: "OK"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: "btn btn-cancel",
          onClick: () => o(!1),
          children: "Cancel"
        }
      )
    ] })
  ] }) });
}, _t = (e, a) => {
  const [i, u] = F(a);
  return W(() => {
    const c = (o) => {
      e.current && o.target instanceof Node && !e.current.contains(o.target) && u(!i);
    };
    return i && window.addEventListener("click", c), () => {
      window.removeEventListener("click", c);
    };
  }, [i, e]), [i, u];
}, Fe = (e, a) => {
  let i = "";
  return a.type === "property" ? i = e[a.text] : a.type === "string" && (i = X(a.text)), i;
}, lr = ({
  id: e = "",
  legend: a = "",
  optionData: i = [],
  optionID: u = "",
  optionText: c = [],
  value: o = [],
  columns: m = 1,
  disabled: d = !1,
  hint: r = "",
  inlineError: n = "",
  isRequired: l = !1,
  placeholder: p = "Select Value",
  srOnly: v = !1,
  updateValue: T
}) => {
  const C = Se(null), [R, x] = _t(C, !1), _ = q("form-group checkbox-dropdown-group", {
    "input-disabled": d
  }), E = q("", {
    "sr-only": v
  }), w = q("checkbox-dropdown-container", {
    // "show": !isDropdownOpen,
    "input-error": !b(n)
  }), P = (s) => {
    const f = s.target.value;
    s.target.checked ? T([...o, f]) : T(o.filter((h) => h !== f));
  };
  return /* @__PURE__ */ t.jsxs("fieldset", { className: _, ref: C, children: [
    /* @__PURE__ */ t.jsxs("legend", { className: E, children: [
      a,
      " ",
      l ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }),
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "btn btn-transparent open-dropdown-button",
        onClick: () => x(!R),
        children: [
          K(o) ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            o.length,
            " selected"
          ] }) : p,
          R ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-up" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-down" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
          ] })
        ]
      }
    ),
    R ? /* @__PURE__ */ t.jsx("div", { className: w, children: /* @__PURE__ */ t.jsxs("ul", { className: "checkbox-dropdown", style: { columns: m }, children: [
      b(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(r) }),
      K(i) && !b(u) && K(c) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: i.map((s) => {
        if (s.active === !0 || b(s.active)) {
          const f = Oe(s[u]), h = o.includes(f);
          return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                id: `${e}${f}`,
                value: f,
                checked: h,
                disabled: d,
                onChange: P
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "checkbox-label-text", children: c.map((y, N) => /* @__PURE__ */ t.jsx(Ie, { children: Fe(s, y) }, N)) })
          ] }) }, f);
        } else
          return null;
      }) }) : null
    ] }) }) : null,
    b(n) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: X(n) })
  ] });
}, cr = ({
  id: e = "",
  legend: a = "",
  value: i = [],
  optionData: u = [],
  optionID: c = "",
  optionText: o = [],
  collapseList: m = !1,
  columns: d = 1,
  disabled: r = !1,
  hint: n = "",
  inlineError: l = "",
  isCollapsible: p = !1,
  isRequired: v = !1,
  srOnly: T = !1,
  startCollapsed: C = !0,
  setCollapseList: R,
  updateValue: x
}) => {
  const [_, E] = F(!0), w = q("form-group", {
    "input-disabled": r
  }), P = q("", {
    "sr-only": T
  }), s = q("checkbox-group", {
    "is-collapsible": p,
    show: !_,
    "input-error": !b(l)
  });
  W(() => {
    E(!!p);
  }, [p]), W(() => {
    C === !1 && E(!1);
  }, [C]), W(() => {
    m && (E(!0), R?.(!1));
  }, [m]);
  const f = (h) => {
    const y = h.target.value;
    x(
      h.target.checked ? [...i, y] : i.filter((N) => N !== y)
    );
  };
  return /* @__PURE__ */ t.jsxs("fieldset", { className: w, children: [
    /* @__PURE__ */ t.jsx("legend", { className: P, children: p ? /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => E(!_),
        children: [
          a,
          v ? /* @__PURE__ */ t.jsx(ae, {}) : null,
          K(i) ? /* @__PURE__ */ t.jsx("div", { className: "search-filter-count", children: i.length }) : null,
          _ ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      a,
      v ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }) }),
    /* @__PURE__ */ t.jsxs("ul", { className: s, style: { columns: d }, children: [
      b(n) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(n) }),
      K(u) && !b(c) && K(o) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: u.map((h, y) => {
        if (h.active === !0 || b(h.active)) {
          const N = Oe(h[c]), D = i.includes(N);
          return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                id: `${e}${N}`,
                value: N,
                checked: D,
                disabled: r,
                onChange: f
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "checkbox-label-text", children: o.map((M, z) => /* @__PURE__ */ t.jsx(Ie, { children: Fe(h, M) }, z)) })
          ] }) }, y);
        } else
          return null;
      }) }) : null
    ] }),
    b(l) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: X(l) }),
    p ? /* @__PURE__ */ t.jsx("hr", {}) : null
  ] });
}, Jt = ({
  id: e = "",
  label: a = "",
  optionData: i = [],
  optionID: u = "",
  optionText: c = [],
  value: o = "",
  disabled: m = !1,
  emptyOption: d = !1,
  hint: r = "",
  inlineError: n = "",
  isRequired: l = !1,
  placeholder: p = "Select Value",
  srOnly: v = !1,
  useInputAddon: T = !1,
  updateValue: C
}) => {
  const R = q("", {
    "sr-only": v,
    "input-addon": T
  }), x = q("form-group", {
    "with-addon": T,
    "input-error": !b(n),
    "input-disabled": m
  }), _ = (E, w) => w.map(
    (P) => P.type === "property" ? String(E[P.text] ?? "") : P.text
  ).join(" ");
  return /* @__PURE__ */ t.jsxs("div", { className: x, children: [
    /* @__PURE__ */ t.jsxs("label", { htmlFor: e, className: R, children: [
      a,
      l === !0 ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }),
    b(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(r) }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        className: "form-control",
        id: e,
        value: o,
        disabled: m,
        onChange: (E) => C(E.target.value),
        children: [
          d ? null : /* @__PURE__ */ t.jsx("option", { value: "", children: p }),
          K(i) && !b(u) && K(c) ? i.map((E, w) => {
            const P = String(E[u] ?? "");
            return /* @__PURE__ */ t.jsx("option", { value: P, children: _(E, c) }, P || w);
          }) : null
        ]
      }
    ),
    b(n) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: X(n) })
  ] });
}, ur = ({
  id: e = "",
  optionData: a = [],
  optionID: i = "",
  optionText: u = [],
  value: c = "",
  collapseList: o = !1,
  columns: m = 1,
  disabled: d = !1,
  hint: r = "",
  inlineError: n = "",
  isCollapsible: l = !1,
  isRequired: p = !1,
  legend: v = "",
  srOnly: T = !1,
  startCollapsed: C = !0,
  setCollapseList: R,
  updateValue: x
}) => {
  const [_, E] = F(!0), w = q("form-group", {
    "input-disabled": d
  }), P = q("", {
    "sr-only": T
  }), s = q("radio-group", {
    "is-collapsible": l,
    show: !_,
    "input-error": !b(n)
  });
  return W(() => {
    E(l ? C : !1);
  }, [l, C]), W(() => {
    o && (E(!0), R?.(!1));
  }, [o, R]), /* @__PURE__ */ t.jsxs("fieldset", { className: w, children: [
    /* @__PURE__ */ t.jsx("legend", { className: P, children: l ? /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => E(!_),
        children: [
          v,
          p ? /* @__PURE__ */ t.jsx(ae, {}) : null,
          b(c) ? null : /* @__PURE__ */ t.jsx("div", { className: "search-filter-count", children: "1" }),
          _ ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      v,
      p ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }) }),
    /* @__PURE__ */ t.jsxs("ul", { className: s, style: { columns: m }, children: [
      b(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(r) }),
      K(a) && !b(i) && K(u) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: a.map((f) => {
        if (f.active === !0 || b(f.active)) {
          const h = Oe(f[i]), y = h === c;
          return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { className: y ? "active" : "", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "radio",
                id: `${e}${h}`,
                name: e,
                value: h,
                checked: y,
                disabled: d,
                onChange: (N) => x(N.target.value)
              }
            ),
            u.map((N, D) => /* @__PURE__ */ t.jsx(Ie, { children: Fe(f, N) }, D))
          ] }) }, h);
        } else
          return null;
      }) }) : null
    ] }),
    b(n) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: X(n) }),
    l ? /* @__PURE__ */ t.jsx("hr", {}) : null
  ] });
}, dr = ({
  id: e = "",
  label: a = "",
  value: i = !1,
  disabled: u = !1,
  falseValue: c = "No",
  hint: o = "",
  isRequired: m = !1,
  srOnly: d = !1,
  trueValue: r = "Yes",
  updateValue: n
}) => {
  const l = q("", {
    "sr-only": d
  }), p = q("form-group toggle-switch-container", {
    "input-disabled": u
  });
  return /* @__PURE__ */ t.jsxs("fieldset", { className: p, children: [
    /* @__PURE__ */ t.jsxs("legend", { className: l, children: [
      a,
      m ? /* @__PURE__ */ t.jsx(ae, {}) : null
    ] }),
    b(o) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: X(o) }),
    /* @__PURE__ */ t.jsxs("div", { className: "toggle-switch", onClick: () => !u && n(!i), children: [
      /* @__PURE__ */ t.jsx("div", { className: `toggle-switch__button ${i ? "active" : ""}` }),
      /* @__PURE__ */ t.jsx("div", { className: "toggle-switch__text", children: i ? /* @__PURE__ */ t.jsx(t.Fragment, { children: r }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: c }) }),
      /* @__PURE__ */ t.jsxs("label", { className: "sr-only", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            id: `${e}false`,
            checked: !i,
            value: "false",
            disabled: u,
            onChange: () => n(!1)
          }
        ),
        c
      ] }),
      /* @__PURE__ */ t.jsxs("label", { className: "sr-only", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            id: `${e}true`,
            checked: i,
            value: "true",
            disabled: u,
            onChange: () => n(!0)
          }
        ),
        r
      ] })
    ] })
  ] });
}, fr = ({ applicationVersion: e = "0.0.0", copyrightYear: a = "2026" }) => /* @__PURE__ */ t.jsxs("footer", { children: [
  "© ",
  a,
  " Orbis Education. All rights reserved. Version: ",
  e
] }), mr = ({ applicationName: e = "Application" }) => {
  const a = window.location.href.includes("intranet.orbiseducation.com") ? "./" : "/";
  return document.title = `Orbis Education | ${e}`, /* @__PURE__ */ t.jsxs("header", { children: [
    /* @__PURE__ */ t.jsx("a", { href: a, className: "orbis-logo-link", children: /* @__PURE__ */ t.jsx(Yt, {}) }),
    /* @__PURE__ */ t.jsx("h1", { children: e })
  ] });
}, pr = ({
  defaultResultsPerPage: e = 30,
  ddResultsPerPage: a = 30,
  currentPageNumber: i = 1,
  totalPages: u = 1,
  setDdResultsPerPage: c,
  setCurrentPageNumber: o
}) => {
  const m = (d) => {
    window.scrollTo(0, 0), o(d);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "pagination-section", children: [
    /* @__PURE__ */ t.jsx(
      Jt,
      {
        id: "ddResultsPerPage",
        label: "Results per Page",
        optionData: [
          { sizeID: String(e), optionText: e },
          { sizeID: String(e * 2), optionText: e * 2 },
          { sizeID: String(e * 3), optionText: e * 3 },
          { sizeID: "all", optionText: "All" }
        ],
        optionID: "sizeID",
        optionText: [{ type: "property", text: "optionText" }],
        emptyOption: !0,
        useInputAddon: !0,
        value: Number.isNaN(a) ? "all" : String(a),
        updateValue: (d) => {
          c(d === "all" ? Number.NaN : Number(d)), o(1);
        }
      }
    ),
    /* @__PURE__ */ t.jsxs("div", { className: "pagination-controls", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(1),
          disabled: i <= 1,
          title: "Go to First Page",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-double-left" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to First Page" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(i - 1),
          disabled: i <= 1,
          title: "Go to Previous Page",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to Previous Page" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs("strong", { children: [
        "Page ",
        i,
        " of ",
        u
      ] }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(i + 1),
          disabled: i >= u,
          title: "Go to Next Page",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to Next Page" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(u),
          disabled: i >= u,
          title: "Go to Last Page",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-double-right" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to Last Page" })
          ]
        }
      )
    ] })
  ] });
}, Nt = ({
  navigationItem: e = {
    name: "",
    componentName: "",
    isPresent: !0,
    type: "",
    onClick: le,
    children: null
  },
  returnActiveClass: a = le
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      role: "link",
      className: a(e?.componentName ?? ""),
      onClick: e.onClick,
      children: e.name
    }
  ),
  b(e.children) ? null : e.children
] }), Zt = ({
  navigationItem: e = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass: a = le
}) => {
  const i = Se(null), [u, c] = _t(i, !1), o = q("fa", {
    "fa-caret-up": u,
    "fa-caret-down": !u
  }), m = (e?.dropdownItems ?? []).filter(
    (r) => b(r.isPresent) || r.isPresent === !0
  ), d = b(e?.classes) ? "dropdown" : `dropdown ${e.classes}`;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("button", { type: "button", onClick: () => c(!u), ref: i, children: [
      e.name,
      " ",
      /* @__PURE__ */ t.jsx("i", { className: o })
    ] }),
    u === !0 && !pe(m) ? /* @__PURE__ */ t.jsx("ul", { className: d, children: m.map((r, n) => /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx(
      Nt,
      {
        navigationItem: r,
        returnActiveClass: a
      }
    ) }, n)) }) : null
  ] });
}, hr = ({ navigationItems: e = [], componentToLoad: a = "" }) => {
  const i = e.filter(
    (c) => b(c.isPresent) || c.isPresent === !0
  ), u = (c, o) => {
    let m = o ?? "";
    return m += a === c ? " active" : "", m;
  };
  return /* @__PURE__ */ t.jsx("nav", { className: "sub-header-nav", children: /* @__PURE__ */ t.jsx("ul", { children: pe(i) ? null : /* @__PURE__ */ t.jsx(t.Fragment, { children: i.map((c, o) => /* @__PURE__ */ t.jsx("li", { children: c.type === "dropdown" ? /* @__PURE__ */ t.jsx(
    Zt,
    {
      navigationItem: c,
      returnActiveClass: u
    }
  ) : /* @__PURE__ */ t.jsx(
    Nt,
    {
      navigationItem: c,
      returnActiveClass: u
    }
  ) }, o)) }) }) });
}, gr = () => {
  const [e, a] = F(""), [i, u] = F(""), [c, o] = F(""), [m, d] = F(""), [r, n] = F(!1), [l, p] = F(null), [v, T] = F(!1), [C, R] = F(!1), [x, _] = F(""), E = () => {
    u(""), o(""), d(""), a(""), n(!1), p(null), T(!1), R(!1);
  };
  W(() => {
    l !== null && (v ? l ? (_("D"), E()) : (E(), _("")) : C ? l ? (_("HD"), E()) : (E(), _("")) : E());
  }, [v, C, l]);
  const w = (y) => {
    b(y) || f(y);
  }, P = (y) => {
    const N = b(y?.dialogBoxType) ? "confirmRemove" : y?.dialogBoxType;
    T(!0), f({ dialogBoxType: N });
  }, s = (y) => {
    const N = b(y?.dialogBoxType) ? "confirmRemove" : y.dialogBoxType;
    R(!0), f({ dialogBoxType: N });
  }, f = (y) => {
    b(y) || (n(!0), u(y.dialogBoxSize || ""), o(y.dialogBoxTitle || ""), d(y.dialogBoxContent || ""), a(y.dialogBoxType || ""), p(null));
  };
  return {
    processTransactionValue: x,
    confirmationDialogBoxOpen: r,
    confirmationDialogBoxSize: i,
    confirmationDialogBoxTitle: c,
    confirmationDialogBoxContent: m,
    confirmationDialogBoxType: e,
    confirmationDialogBoxContinue: l,
    confirmAction: w,
    deleteRecord: P,
    hardDeleteRecord: s,
    closeDeleteDialogBox: () => {
      n(!1), a("");
    },
    setConfirmationDialogBoxContinue: p,
    setProcessTransactionValue: _
  };
}, vr = ({ updateArray: e, callback: a }) => {
  const [i, u] = F({
    draggedFrom: null,
    draggedTo: null,
    isDragging: !1,
    originalOrder: [],
    updatedOrder: []
  });
  return {
    dragAndDrop: i,
    handleDragStart: (n, l) => {
      const p = Number(n.currentTarget.dataset.position);
      u({
        ...i,
        draggedFrom: p,
        isDragging: !0,
        originalOrder: l
      });
    },
    handleDragOver: (n) => {
      if (n.preventDefault(), i.originalOrder && i.draggedFrom !== null) {
        let l = i.originalOrder;
        const p = i.draggedFrom, v = Number(n.currentTarget.dataset.position), T = l[p], C = l.filter((R, x) => x !== p);
        l = [
          ...C.slice(0, v),
          T,
          ...C.slice(v)
        ], v !== i.draggedTo && u({
          ...i,
          updatedOrder: l,
          draggedTo: v
        });
      }
    },
    handleDrop: () => {
      e(i.updatedOrder), pe(i.updatedOrder) || i.updatedOrder.forEach((n, l) => {
        a(n, l);
      }), u({
        ...i,
        draggedFrom: null,
        draggedTo: null,
        isDragging: !1
      });
    },
    onDragLeave: () => {
      u({
        ...i,
        draggedTo: null
      });
    },
    handleManualMove: (n, l, p) => {
      const v = n + l;
      if (v >= 0 && v < p.length) {
        const T = [...p], C = T[n], R = T[v];
        T[n] = R, T[v] = C, e(T), a(T[n], n), a(T[v], v);
      }
    }
  };
}, xr = ({
  allRecords: e = [],
  defaultResultsPerPage: a = 30
}) => {
  const [i, u] = F(a), [c, o] = F(1), [m, d] = F(1), [r, n] = F([]), l = (p) => {
    if (pe(p))
      n([]);
    else {
      const v = isNaN(i) ? p.length : i, T = c * v, C = T - v, R = Math.ceil(p.length / v), x = p.slice(C, T);
      d(R), n(x), c > R && o(R);
    }
  };
  return W(() => {
    pe(e) || l(e);
  }, [i, c]), {
    ddResultsPerPage: i,
    currentPageNumber: c,
    totalPages: m,
    currentPageRecords: r,
    setDdResultsPerPage: u,
    setCurrentPageNumber: o,
    setCurrentPageRecords: n,
    determineTotalPages: l
  };
};
export {
  we as AlertPopup,
  lr as CheckboxDropdown,
  cr as CheckboxGroup,
  er as CopyLink,
  ir as DialogBox,
  or as DialogBoxConfirmation,
  fr as Footer,
  Jt as FormDropdown,
  ke as FormInput,
  ur as FormRadioGroup,
  mr as Header,
  Qt as Messages,
  hr as Navigation,
  Zt as NavigationDropdown,
  Nt as NavigationLink,
  tr as NoResultsText,
  Yt as OrbisLogo,
  pr as Pagination,
  rr as Profile,
  ae as RequiredFieldAsterisk,
  nr as SortableColumnHeader,
  ar as SortableList,
  sr as Spinner,
  dr as ToggleSwitch,
  gr as useDialogBoxConfirmation,
  vr as useDragAndDropSort,
  _t as useNativeClickListener,
  xr as usePagination
};
