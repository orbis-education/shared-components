import Me, { useEffect as V, useState as I, useRef as dt, Fragment as Fe } from "react";
function mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ce = { exports: {} }, xe = {};
var ze;
function _t() {
  if (ze) return xe;
  ze = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(c, l, o) {
    var m = null;
    if (o !== void 0 && (m = "" + o), l.key !== void 0 && (m = "" + l.key), "key" in l) {
      o = {};
      for (var f in l)
        f !== "key" && (o[f] = l[f]);
    } else o = l;
    return l = o.ref, {
      $$typeof: e,
      type: c,
      key: m,
      ref: l !== void 0 ? l : null,
      props: o
    };
  }
  return xe.Fragment = a, xe.jsx = i, xe.jsxs = i, xe;
}
var ye = {};
var He;
function Nt() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === M ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case _:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case R:
            return "Portal";
          case D:
            return h.displayName || "Context";
          case A:
            return (h._context.displayName || "Context") + ".Consumer";
          case n:
            var k = h.render;
            return h = h.displayName, h || (h = k.displayName || k.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case x:
            return k = h.displayName || null, k !== null ? k : e(h.type) || "Memo";
          case N:
            k = h._payload, h = h._init;
            try {
              return e(h(k));
            } catch {
            }
        }
      return null;
    }
    function a(h) {
      return "" + h;
    }
    function i(h) {
      try {
        a(h);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var L = k.error, T = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return L.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), a(h);
      }
    }
    function c(h) {
      if (h === g) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === N)
        return "<...>";
      try {
        var k = e(h);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var h = U.A;
      return h === null ? null : h.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function m(h) {
      if (W.call(h, "key")) {
        var k = Object.getOwnPropertyDescriptor(h, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function f(h, k) {
      function L() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: L,
        configurable: !0
      });
    }
    function r() {
      var h = e(this.type);
      return B[h] || (B[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function s(h, k, L, T, z, F) {
      var H = L.ref;
      return h = {
        $$typeof: C,
        type: h,
        key: k,
        props: L,
        _owner: T
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: r
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function d(h, k, L, T, z, F) {
      var H = k.children;
      if (H !== void 0)
        if (T)
          if (S(H)) {
            for (T = 0; T < H.length; T++)
              v(H[T]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(H);
      if (W.call(k, "key")) {
        H = e(h);
        var Z = Object.keys(k).filter(function(ne) {
          return ne !== "key";
        });
        T = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", je[H + T] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          H,
          Z,
          H
        ), je[H + T] = !0);
      }
      if (H = null, L !== void 0 && (i(L), H = "" + L), m(k) && (i(k.key), H = "" + k.key), "key" in k) {
        L = {};
        for (var te in k)
          te !== "key" && (L[te] = k[te]);
      } else L = k;
      return H && f(
        L,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), s(
        h,
        H,
        L,
        l(),
        z,
        F
      );
    }
    function v(h) {
      y(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === N && (h._payload.status === "fulfilled" ? y(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function y(h) {
      return typeof h == "object" && h !== null && h.$$typeof === C;
    }
    var j = Me, C = /* @__PURE__ */ Symbol.for("react.transitional.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), n = /* @__PURE__ */ Symbol.for("react.forward_ref"), u = /* @__PURE__ */ Symbol.for("react.suspense"), p = /* @__PURE__ */ Symbol.for("react.suspense_list"), x = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), M = /* @__PURE__ */ Symbol.for("react.client.reference"), U = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, S = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var q, B = {}, re = j.react_stack_bottom_frame.bind(
      j,
      o
    )(), ve = w(c(o)), je = {};
    ye.Fragment = g, ye.jsx = function(h, k, L) {
      var T = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        h,
        k,
        L,
        !1,
        T ? Error("react-stack-top-frame") : re,
        T ? w(c(h)) : ve
      );
    }, ye.jsxs = function(h, k, L) {
      var T = 1e4 > U.recentlyCreatedOwnerStacks++;
      return d(
        h,
        k,
        L,
        !0,
        T ? Error("react-stack-top-frame") : re,
        T ? w(c(h)) : ve
      );
    };
  })()), ye;
}
var Ge;
function Tt() {
  return Ge || (Ge = 1, process.env.NODE_ENV === "production" ? Ce.exports = _t() : Ce.exports = Nt()), Ce.exports;
}
var t = Tt(), Se = { exports: {} };
var qe;
function jt() {
  return qe || (qe = 1, (function(e) {
    (function() {
      var a = {}.hasOwnProperty;
      function i() {
        for (var o = "", m = 0; m < arguments.length; m++) {
          var f = arguments[m];
          f && (o = l(o, c(f)));
        }
        return o;
      }
      function c(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return i.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var m = "";
        for (var f in o)
          a.call(o, f) && o[f] && (m = l(m, f));
        return m;
      }
      function l(o, m) {
        return m ? o ? o + " " + m : o + m : o;
      }
      e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
    })();
  })(Se)), Se.exports;
}
var Ct = jt();
const G = /* @__PURE__ */ mt(Ct);
var Ee = {}, fe = {}, Re = {}, ie = {}, oe = {}, Pe = {}, Be;
function pt() {
  return Be || (Be = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var a;
    (function(c) {
      c.Root = "root", c.Text = "text", c.Directive = "directive", c.Comment = "comment", c.Script = "script", c.Style = "style", c.Tag = "tag", c.CDATA = "cdata", c.Doctype = "doctype";
    })(a = e.ElementType || (e.ElementType = {}));
    function i(c) {
      return c.type === a.Tag || c.type === a.Script || c.type === a.Style;
    }
    e.isTag = i, e.Root = a.Root, e.Text = a.Text, e.Directive = a.Directive, e.Comment = a.Comment, e.Script = a.Script, e.Style = a.Style, e.Tag = a.Tag, e.CDATA = a.CDATA, e.Doctype = a.Doctype;
  })(Pe)), Pe;
}
var O = {}, Ve;
function Ue() {
  if (Ve) return O;
  Ve = 1;
  var e = O && O.__extends || /* @__PURE__ */ (function() {
    var n = function(u, p) {
      return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(x, N) {
        x.__proto__ = N;
      } || function(x, N) {
        for (var P in N) Object.prototype.hasOwnProperty.call(N, P) && (x[P] = N[P]);
      }, n(u, p);
    };
    return function(u, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      n(u, p);
      function x() {
        this.constructor = u;
      }
      u.prototype = p === null ? Object.create(p) : (x.prototype = p.prototype, new x());
    };
  })(), a = O && O.__assign || function() {
    return a = Object.assign || function(n) {
      for (var u, p = 1, x = arguments.length; p < x; p++) {
        u = arguments[p];
        for (var N in u) Object.prototype.hasOwnProperty.call(u, N) && (n[N] = u[N]);
      }
      return n;
    }, a.apply(this, arguments);
  };
  Object.defineProperty(O, "__esModule", { value: !0 }), O.cloneNode = O.hasChildren = O.isDocument = O.isDirective = O.isComment = O.isText = O.isCDATA = O.isTag = O.Element = O.Document = O.CDATA = O.NodeWithChildren = O.ProcessingInstruction = O.Comment = O.Text = O.DataNode = O.Node = void 0;
  var i = /* @__PURE__ */ pt(), c = (
    /** @class */
    (function() {
      function n() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(n.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(u) {
          this.parent = u;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(u) {
          this.prev = u;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(n.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(u) {
          this.next = u;
        },
        enumerable: !1,
        configurable: !0
      }), n.prototype.cloneNode = function(u) {
        return u === void 0 && (u = !1), A(this, u);
      }, n;
    })()
  );
  O.Node = c;
  var l = (
    /** @class */
    (function(n) {
      e(u, n);
      function u(p) {
        var x = n.call(this) || this;
        return x.data = p, x;
      }
      return Object.defineProperty(u.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(p) {
          this.data = p;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(c)
  );
  O.DataNode = l;
  var o = (
    /** @class */
    (function(n) {
      e(u, n);
      function u() {
        var p = n !== null && n.apply(this, arguments) || this;
        return p.type = i.ElementType.Text, p;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(l)
  );
  O.Text = o;
  var m = (
    /** @class */
    (function(n) {
      e(u, n);
      function u() {
        var p = n !== null && n.apply(this, arguments) || this;
        return p.type = i.ElementType.Comment, p;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(l)
  );
  O.Comment = m;
  var f = (
    /** @class */
    (function(n) {
      e(u, n);
      function u(p, x) {
        var N = n.call(this, x) || this;
        return N.name = p, N.type = i.ElementType.Directive, N;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(l)
  );
  O.ProcessingInstruction = f;
  var r = (
    /** @class */
    (function(n) {
      e(u, n);
      function u(p) {
        var x = n.call(this) || this;
        return x.children = p, x;
      }
      return Object.defineProperty(u.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var p;
          return (p = this.children[0]) !== null && p !== void 0 ? p : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(u.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(u.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(p) {
          this.children = p;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(c)
  );
  O.NodeWithChildren = r;
  var s = (
    /** @class */
    (function(n) {
      e(u, n);
      function u() {
        var p = n !== null && n.apply(this, arguments) || this;
        return p.type = i.ElementType.CDATA, p;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(r)
  );
  O.CDATA = s;
  var d = (
    /** @class */
    (function(n) {
      e(u, n);
      function u() {
        var p = n !== null && n.apply(this, arguments) || this;
        return p.type = i.ElementType.Root, p;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(r)
  );
  O.Document = d;
  var v = (
    /** @class */
    (function(n) {
      e(u, n);
      function u(p, x, N, P) {
        N === void 0 && (N = []), P === void 0 && (P = p === "script" ? i.ElementType.Script : p === "style" ? i.ElementType.Style : i.ElementType.Tag);
        var M = n.call(this, N) || this;
        return M.name = p, M.attribs = x, M.type = P, M;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(u.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(p) {
          this.name = p;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(u.prototype, "attributes", {
        get: function() {
          var p = this;
          return Object.keys(this.attribs).map(function(x) {
            var N, P;
            return {
              name: x,
              value: p.attribs[x],
              namespace: (N = p["x-attribsNamespace"]) === null || N === void 0 ? void 0 : N[x],
              prefix: (P = p["x-attribsPrefix"]) === null || P === void 0 ? void 0 : P[x]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(r)
  );
  O.Element = v;
  function y(n) {
    return (0, i.isTag)(n);
  }
  O.isTag = y;
  function j(n) {
    return n.type === i.ElementType.CDATA;
  }
  O.isCDATA = j;
  function C(n) {
    return n.type === i.ElementType.Text;
  }
  O.isText = C;
  function R(n) {
    return n.type === i.ElementType.Comment;
  }
  O.isComment = R;
  function g(n) {
    return n.type === i.ElementType.Directive;
  }
  O.isDirective = g;
  function _(n) {
    return n.type === i.ElementType.Root;
  }
  O.isDocument = _;
  function b(n) {
    return Object.prototype.hasOwnProperty.call(n, "children");
  }
  O.hasChildren = b;
  function A(n, u) {
    u === void 0 && (u = !1);
    var p;
    if (C(n))
      p = new o(n.data);
    else if (R(n))
      p = new m(n.data);
    else if (y(n)) {
      var x = u ? D(n.children) : [], N = new v(n.name, a({}, n.attribs), x);
      x.forEach(function(W) {
        return W.parent = N;
      }), n.namespace != null && (N.namespace = n.namespace), n["x-attribsNamespace"] && (N["x-attribsNamespace"] = a({}, n["x-attribsNamespace"])), n["x-attribsPrefix"] && (N["x-attribsPrefix"] = a({}, n["x-attribsPrefix"])), p = N;
    } else if (j(n)) {
      var x = u ? D(n.children) : [], P = new s(x);
      x.forEach(function(S) {
        return S.parent = P;
      }), p = P;
    } else if (_(n)) {
      var x = u ? D(n.children) : [], M = new d(x);
      x.forEach(function(S) {
        return S.parent = M;
      }), n["x-mode"] && (M["x-mode"] = n["x-mode"]), p = M;
    } else if (g(n)) {
      var U = new f(n.name, n.data);
      n["x-name"] != null && (U["x-name"] = n["x-name"], U["x-publicId"] = n["x-publicId"], U["x-systemId"] = n["x-systemId"]), p = U;
    } else
      throw new Error("Not implemented yet: ".concat(n.type));
    return p.startIndex = n.startIndex, p.endIndex = n.endIndex, n.sourceCodeLocation != null && (p.sourceCodeLocation = n.sourceCodeLocation), p;
  }
  O.cloneNode = A;
  function D(n) {
    for (var u = n.map(function(x) {
      return A(x, !0);
    }), p = 1; p < u.length; p++)
      u[p].prev = u[p - 1], u[p - 1].next = u[p];
    return u;
  }
  return O;
}
var Xe;
function ht() {
  return Xe || (Xe = 1, (function(e) {
    var a = oe && oe.__createBinding || (Object.create ? (function(f, r, s, d) {
      d === void 0 && (d = s);
      var v = Object.getOwnPropertyDescriptor(r, s);
      (!v || ("get" in v ? !r.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
        return r[s];
      } }), Object.defineProperty(f, d, v);
    }) : (function(f, r, s, d) {
      d === void 0 && (d = s), f[d] = r[s];
    })), i = oe && oe.__exportStar || function(f, r) {
      for (var s in f) s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && a(r, f, s);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var c = /* @__PURE__ */ pt(), l = /* @__PURE__ */ Ue();
    i(/* @__PURE__ */ Ue(), e);
    var o = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, m = (
      /** @class */
      (function() {
        function f(r, s, d) {
          this.dom = [], this.root = new l.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof s == "function" && (d = s, s = o), typeof r == "object" && (s = r, r = void 0), this.callback = r ?? null, this.options = s ?? o, this.elementCB = d ?? null;
        }
        return f.prototype.onparserinit = function(r) {
          this.parser = r;
        }, f.prototype.onreset = function() {
          this.dom = [], this.root = new l.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, f.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, f.prototype.onerror = function(r) {
          this.handleCallback(r);
        }, f.prototype.onclosetag = function() {
          this.lastNode = null;
          var r = this.tagStack.pop();
          this.options.withEndIndices && (r.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(r);
        }, f.prototype.onopentag = function(r, s) {
          var d = this.options.xmlMode ? c.ElementType.Tag : void 0, v = new l.Element(r, s, void 0, d);
          this.addNode(v), this.tagStack.push(v);
        }, f.prototype.ontext = function(r) {
          var s = this.lastNode;
          if (s && s.type === c.ElementType.Text)
            s.data += r, this.options.withEndIndices && (s.endIndex = this.parser.endIndex);
          else {
            var d = new l.Text(r);
            this.addNode(d), this.lastNode = d;
          }
        }, f.prototype.oncomment = function(r) {
          if (this.lastNode && this.lastNode.type === c.ElementType.Comment) {
            this.lastNode.data += r;
            return;
          }
          var s = new l.Comment(r);
          this.addNode(s), this.lastNode = s;
        }, f.prototype.oncommentend = function() {
          this.lastNode = null;
        }, f.prototype.oncdatastart = function() {
          var r = new l.Text(""), s = new l.CDATA([r]);
          this.addNode(s), r.parent = s, this.lastNode = r;
        }, f.prototype.oncdataend = function() {
          this.lastNode = null;
        }, f.prototype.onprocessinginstruction = function(r, s) {
          var d = new l.ProcessingInstruction(r, s);
          this.addNode(d);
        }, f.prototype.handleCallback = function(r) {
          if (typeof this.callback == "function")
            this.callback(r, this.dom);
          else if (r)
            throw r;
        }, f.prototype.addNode = function(r) {
          var s = this.tagStack[this.tagStack.length - 1], d = s.children[s.children.length - 1];
          this.options.withStartIndices && (r.startIndex = this.parser.startIndex), this.options.withEndIndices && (r.endIndex = this.parser.endIndex), s.children.push(r), d && (r.prev = d, d.next = r), r.parent = s, this.lastNode = null;
        }, f;
      })()
    );
    e.DomHandler = m, e.default = m;
  })(oe)), oe;
}
var De = {}, Ye;
function Rt() {
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
function gt() {
  if (We) return ie;
  We = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.formatAttributes = c, ie.escapeSpecialCharacters = o, ie.revertEscapedCharacters = m, ie.formatDOM = f;
  var e = /* @__PURE__ */ ht(), a = Rt();
  function i(r) {
    return a.CASE_SENSITIVE_TAG_NAMES_MAP[r];
  }
  function c(r) {
    for (var s = {}, d = 0, v = r.length; d < v; d++) {
      var y = r[d];
      s[y.name] = y.value;
    }
    return s;
  }
  function l(r) {
    r = r.toLowerCase();
    var s = i(r);
    return s || r;
  }
  function o(r) {
    return r.replace(a.CARRIAGE_RETURN_REGEX, a.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function m(r) {
    return r.replace(a.CARRIAGE_RETURN_PLACEHOLDER_REGEX, a.CARRIAGE_RETURN);
  }
  function f(r, s, d) {
    s === void 0 && (s = null);
    for (var v = [], y, j = 0, C = r.length; j < C; j++) {
      var R = r[j];
      switch (R.nodeType) {
        case 1: {
          var g = l(R.nodeName);
          y = new e.Element(g, c(R.attributes)), y.children = f(
            // template children are on content
            g === "template" ? R.content.childNodes : R.childNodes,
            y
          );
          break;
        }
        case 3:
          y = new e.Text(m(R.nodeValue));
          break;
        case 8:
          y = new e.Comment(R.nodeValue);
          break;
        default:
          continue;
      }
      var _ = v[j - 1] || null;
      _ && (_.next = y), y.parent = s, y.prev = _, y.next = null, v.push(y);
    }
    return d && (y = new e.ProcessingInstruction(d.substring(0, d.indexOf(" ")).toLowerCase(), d), y.next = v[0] || null, y.parent = s, v.unshift(y), v[1] && (v[1].prev = v[0])), v;
  }
  return ie;
}
var $e;
function wt() {
  if ($e) return Re;
  $e = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.default = R;
  var e = gt(), a = "html", i = "head", c = "body", l = /<([a-zA-Z]+[0-9]?)/, o = /<head[^]*>/i, m = /<body[^]*>/i, f = function(g, _) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, r = function(g, _) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, s = typeof window == "object" && window.DOMParser;
  if (typeof s == "function") {
    var d = new s(), v = "text/html";
    r = function(g, _) {
      return _ && (g = "<".concat(_, ">").concat(g, "</").concat(_, ">")), d.parseFromString(g, v);
    }, f = r;
  }
  if (typeof document == "object" && document.implementation) {
    var y = document.implementation.createHTMLDocument();
    f = function(g, _) {
      if (_) {
        var b = y.documentElement.querySelector(_);
        return b && (b.innerHTML = g), y;
      }
      return y.documentElement.innerHTML = g, y;
    };
  }
  var j = typeof document == "object" && document.createElement("template"), C;
  j && j.content && (C = function(g) {
    return j.innerHTML = g, j.content.childNodes;
  });
  function R(g) {
    var _, b;
    g = (0, e.escapeSpecialCharacters)(g);
    var A = g.match(l), D = A && A[1] ? A[1].toLowerCase() : "";
    switch (D) {
      case a: {
        var n = r(g);
        if (!o.test(g)) {
          var u = n.querySelector(i);
          (_ = u?.parentNode) === null || _ === void 0 || _.removeChild(u);
        }
        if (!m.test(g)) {
          var u = n.querySelector(c);
          (b = u?.parentNode) === null || b === void 0 || b.removeChild(u);
        }
        return n.querySelectorAll(a);
      }
      case i:
      case c: {
        var p = f(g).querySelectorAll(D);
        return m.test(g) && o.test(g) ? p[0].parentNode.childNodes : p;
      }
      // low-level tag or text
      default: {
        if (C)
          return C(g);
        var u = f(g, c).querySelector(c);
        return u.childNodes;
      }
    }
  }
  return Re;
}
var Je;
function kt() {
  if (Je) return fe;
  Je = 1;
  var e = fe && fe.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(fe, "__esModule", { value: !0 }), fe.default = l;
  var a = e(wt()), i = gt(), c = /<(![a-zA-Z\s]+)>/;
  function l(o) {
    if (typeof o != "string")
      throw new TypeError("First argument must be a string");
    if (!o)
      return [];
    var m = o.match(c), f = m ? m[1] : void 0;
    return (0, i.formatDOM)((0, a.default)(o), null, f);
  }
  return fe;
}
var we = {}, K = {}, be = {}, Ze;
function At() {
  if (Ze) return be;
  Ze = 1;
  var e = 0;
  be.SAME = e;
  var a = 1;
  return be.CAMELCASE = a, be.possibleStandardNames = {
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
  }, be;
}
var Ke;
function Ot() {
  if (Ke) return K;
  Ke = 1;
  const e = 0, a = 1, i = 2, c = 3, l = 4, o = 5, m = 6;
  function f(n) {
    return s.hasOwnProperty(n) ? s[n] : null;
  }
  function r(n, u, p, x, N, P, M) {
    this.acceptsBooleans = u === i || u === c || u === l, this.attributeName = x, this.attributeNamespace = N, this.mustUseProperty = p, this.propertyName = n, this.type = u, this.sanitizeURL = P, this.removeEmptyString = M;
  }
  const s = {};
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      e,
      !1,
      // mustUseProperty
      n,
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
  ].forEach(([n, u]) => {
    s[n] = new r(
      n,
      a,
      !1,
      // mustUseProperty
      u,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((n) => {
    s[n] = new r(
      n,
      i,
      !1,
      // mustUseProperty
      n.toLowerCase(),
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      i,
      !1,
      // mustUseProperty
      n,
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      c,
      !1,
      // mustUseProperty
      n.toLowerCase(),
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      c,
      !0,
      // mustUseProperty
      n,
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      l,
      !1,
      // mustUseProperty
      n,
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
  ].forEach((n) => {
    s[n] = new r(
      n,
      m,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((n) => {
    s[n] = new r(
      n,
      o,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const v = /[\-\:]([a-z])/g, y = (n) => n[1].toUpperCase();
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
  ].forEach((n) => {
    const u = n.replace(v, y);
    s[u] = new r(
      u,
      a,
      !1,
      // mustUseProperty
      n,
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
  ].forEach((n) => {
    const u = n.replace(v, y);
    s[u] = new r(
      u,
      a,
      !1,
      // mustUseProperty
      n,
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
  ].forEach((n) => {
    const u = n.replace(v, y);
    s[u] = new r(
      u,
      a,
      !1,
      // mustUseProperty
      n,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((n) => {
    s[n] = new r(
      n,
      a,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const j = "xlinkHref";
  s[j] = new r(
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
  ), ["src", "href", "action", "formAction"].forEach((n) => {
    s[n] = new r(
      n,
      a,
      !1,
      // mustUseProperty
      n.toLowerCase(),
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
    possibleStandardNames: g
  } = At(), b = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", A = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + b + "]*$")
  ), D = Object.keys(
    g
  ).reduce((n, u) => {
    const p = g[u];
    return p === R ? n[u] = u : p === C ? n[u.toLowerCase()] = u : n[u] = p, n;
  }, {});
  return K.BOOLEAN = c, K.BOOLEANISH_STRING = i, K.NUMERIC = o, K.OVERLOADED_BOOLEAN = l, K.POSITIVE_NUMERIC = m, K.RESERVED = e, K.STRING = a, K.getPropertyInfo = f, K.isCustomAttribute = A, K.possibleStandardNames = D, K;
}
var _e = {}, de = {}, Le, Qe;
function St() {
  if (Qe) return Le;
  Qe = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, l = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, m = /^[;\s]*/, f = /^\s+|\s+$/g, r = `
`, s = "/", d = "*", v = "", y = "comment", j = "declaration";
  function C(g, _) {
    if (typeof g != "string")
      throw new TypeError("First argument must be a string");
    if (!g) return [];
    _ = _ || {};
    var b = 1, A = 1;
    function D(S) {
      var w = S.match(a);
      w && (b += w.length);
      var q = S.lastIndexOf(r);
      A = ~q ? S.length - q : A + S.length;
    }
    function n() {
      var S = { line: b, column: A };
      return function(w) {
        return w.position = new u(S), N(), w;
      };
    }
    function u(S) {
      this.start = S, this.end = { line: b, column: A }, this.source = _.source;
    }
    u.prototype.content = g;
    function p(S) {
      var w = new Error(
        _.source + ":" + b + ":" + A + ": " + S
      );
      if (w.reason = S, w.filename = _.source, w.line = b, w.column = A, w.source = g, !_.silent) throw w;
    }
    function x(S) {
      var w = S.exec(g);
      if (w) {
        var q = w[0];
        return D(q), g = g.slice(q.length), w;
      }
    }
    function N() {
      x(i);
    }
    function P(S) {
      var w;
      for (S = S || []; w = M(); )
        w !== !1 && S.push(w);
      return S;
    }
    function M() {
      var S = n();
      if (!(s != g.charAt(0) || d != g.charAt(1))) {
        for (var w = 2; v != g.charAt(w) && (d != g.charAt(w) || s != g.charAt(w + 1)); )
          ++w;
        if (w += 2, v === g.charAt(w - 1))
          return p("End of comment missing");
        var q = g.slice(2, w - 2);
        return A += 2, D(q), g = g.slice(w), A += 2, S({
          type: y,
          comment: q
        });
      }
    }
    function U() {
      var S = n(), w = x(c);
      if (w) {
        if (M(), !x(l)) return p("property missing ':'");
        var q = x(o), B = S({
          type: j,
          property: R(w[0].replace(e, v)),
          value: q ? R(q[0].replace(e, v)) : v
        });
        return x(m), B;
      }
    }
    function W() {
      var S = [];
      P(S);
      for (var w; w = U(); )
        w !== !1 && (S.push(w), P(S));
      return S;
    }
    return N(), W();
  }
  function R(g) {
    return g ? g.replace(f, v) : v;
  }
  return Le = C, Le;
}
var et;
function Pt() {
  if (et) return de;
  et = 1;
  var e = de && de.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(de, "__esModule", { value: !0 }), de.default = i;
  const a = e(St());
  function i(c, l) {
    let o = null;
    if (!c || typeof c != "string")
      return o;
    const m = (0, a.default)(c), f = typeof l == "function";
    return m.forEach((r) => {
      if (r.type !== "declaration")
        return;
      const { property: s, value: d } = r;
      f ? l(s, d, r) : d && (o = o || {}, o[s] = d);
    }), o;
  }
  return de;
}
var Ne = {}, tt;
function Dt() {
  if (tt) return Ne;
  tt = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, l = /^-(ms)-/, o = function(s) {
    return !s || i.test(s) || e.test(s);
  }, m = function(s, d) {
    return d.toUpperCase();
  }, f = function(s, d) {
    return "".concat(d, "-");
  }, r = function(s, d) {
    return d === void 0 && (d = {}), o(s) ? s : (s = s.toLowerCase(), d.reactCompat ? s = s.replace(l, f) : s = s.replace(c, f), s.replace(a, m));
  };
  return Ne.camelCase = r, Ne;
}
var Te, rt;
function Lt() {
  if (rt) return Te;
  rt = 1;
  var e = Te && Te.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  }, a = e(Pt()), i = Dt();
  function c(l, o) {
    var m = {};
    return !l || typeof l != "string" || (0, a.default)(l, function(f, r) {
      f && r && (m[(0, i.camelCase)(f, o)] = r);
    }), m;
  }
  return c.default = c, Te = c, Te;
}
var nt;
function vt() {
  return nt || (nt = 1, (function(e) {
    var a = _e && _e.__importDefault || function(d) {
      return d && d.__esModule ? d : { default: d };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = f;
    var i = Me, c = a(Lt()), l = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function o(d, v) {
      return d.includes("-") ? !l.has(d) : !!(v && typeof v.is == "string");
    }
    var m = {
      reactCompat: !0
    };
    function f(d, v) {
      if (typeof d == "string") {
        if (!d.trim()) {
          v.style = {};
          return;
        }
        try {
          v.style = (0, c.default)(d, m);
        } catch {
          v.style = {};
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
    var r = function(d) {
      return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(d.name);
    };
    e.canTextBeChildOfNode = r;
    var s = function(d) {
      return d;
    };
    e.returnFirstArg = s;
  })(_e)), _e;
}
var at;
function xt() {
  if (at) return we;
  at = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.default = o;
  var e = Ot(), a = vt(), i = ["checked", "value"], c = ["input", "select", "textarea"], l = {
    reset: !0,
    submit: !0
  };
  function o(f, r) {
    f === void 0 && (f = {});
    var s = {}, d = !!(f.type && l[f.type]);
    for (var v in f) {
      var y = f[v];
      if ((0, e.isCustomAttribute)(v)) {
        s[v] = y;
        continue;
      }
      var j = v.toLowerCase(), C = m(j);
      if (C) {
        var R = (0, e.getPropertyInfo)(C);
        switch (i.includes(C) && c.includes(r) && !d && (C = m("default" + j)), s[C] = y, R && R.type) {
          case e.BOOLEAN:
            s[C] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            y === "" && (s[C] = !0);
            break;
        }
        continue;
      }
      a.PRESERVE_CUSTOM_ATTRIBUTES && (s[v] = y);
    }
    return (0, a.setStyleProp)(f.style, s), s;
  }
  function m(f) {
    return e.possibleStandardNames[f];
  }
  return we;
}
var me = {}, st;
function Mt() {
  if (st) return me;
  st = 1;
  var e = me && me.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(me, "__esModule", { value: !0 }), me.default = o;
  var a = Me, i = e(xt()), c = vt(), l = {
    cloneElement: a.cloneElement,
    createElement: a.createElement,
    isValidElement: a.isValidElement
  };
  function o(f, r) {
    r === void 0 && (r = {});
    for (var s = [], d = typeof r.replace == "function", v = r.transform || c.returnFirstArg, y = r.library || l, j = y.cloneElement, C = y.createElement, R = y.isValidElement, g = f.length, _ = 0; _ < g; _++) {
      var b = f[_];
      if (d) {
        var A = r.replace(b, _);
        if (R(A)) {
          g > 1 && (A = j(A, {
            key: A.key || _
          })), s.push(v(A, b, _));
          continue;
        }
      }
      if (b.type === "text") {
        var D = !b.data.trim().length;
        if (D && b.parent && !(0, c.canTextBeChildOfNode)(b.parent) || r.trim && D)
          continue;
        s.push(v(b.data, b, _));
        continue;
      }
      var n = b, u = {};
      m(n) ? ((0, c.setStyleProp)(n.attribs.style, n.attribs), u = n.attribs) : n.attribs && (u = (0, i.default)(n.attribs, n.name));
      var p = void 0;
      switch (b.type) {
        case "script":
        case "style":
          b.children[0] && (u.dangerouslySetInnerHTML = {
            __html: b.children[0].data
          });
          break;
        case "tag":
          b.name === "textarea" && b.children[0] ? u.defaultValue = b.children[0].data : b.children && b.children.length && (p = o(b.children, r));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      g > 1 && (u.key = _), s.push(v(C(b.name, u, p), b, _));
    }
    return s.length === 1 ? s[0] : s;
  }
  function m(f) {
    return c.PRESERVE_CUSTOM_ATTRIBUTES && f.type === "tag" && (0, c.isCustomComponent)(f.name, f.attribs);
  }
  return me;
}
var it;
function Ft() {
  return it || (it = 1, (function(e) {
    var a = Ee && Ee.__importDefault || function(r) {
      return r && r.__esModule ? r : { default: r };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = f;
    var i = a(kt());
    e.htmlToDOM = i.default;
    var c = a(xt());
    e.attributesToProps = c.default;
    var l = a(Mt());
    e.domToReact = l.default;
    var o = /* @__PURE__ */ ht();
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
    function f(r, s) {
      if (typeof r != "string")
        throw new TypeError("First argument must be a string");
      return r ? (0, l.default)((0, i.default)(r, s?.htmlparser2 || m), s) : [];
    }
  })(Ee)), Ee;
}
var It = Ft();
const ot = /* @__PURE__ */ mt(It), lt = ot.default || ot, ct = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, X = () => {
  console.log("A function wasn't passed as a props when it needed to be.");
}, E = (e) => e == null || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0, ae = () => {
  let e = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  return new Date(/* @__PURE__ */ new Date() - e).toISOString().slice(0, 19).replace("T", " ");
}, Y = (e) => {
  let a = !1;
  return Array.isArray(e) && e.length > 0 && (a = !0), a;
}, Oe = (e) => {
  let a = !0;
  return Array.isArray(e) && e.length > 0 && (a = !1), a;
}, zt = (e) => {
  let a = null;
  return Y(e) && !E(e[0]) && (a = e[0]), a;
}, ge = (e) => {
  let a = e;
  return E(e) || (a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&#039;")), a;
}, $ = (e) => e === null || e === void 0 ? "" : e === "NaN" || isNaN(e) && typeof e == "number" || isNaN(e) && e === "" || e === "" ? null : e, le = (e) => {
  let a = "";
  return E(e) || (a = ce(e).trim()), a;
}, ce = (e) => {
  let a = "";
  return E(e) || (a = e.toString()), a;
}, ut = (e, a, i, c, l) => {
  let o = "Add log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    let m = "Add Log", f = `${e}logs/`, r = "", s = "";
    fetch(f, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: l })
    }).then((d) => {
      if (r = d, r.status === 200)
        return r.json();
      he(e, a, i, c, { operation: `${m} SQL Server`, transactionData: { url: f, response: { ok: r.ok, redirected: r.redirected, status: r.status, statusText: r.statusText, type: r.type, url: r.url }, data: s, logObject: l }, errorData: { message: `${r.status} ${r.statusText} ${r.url}` }, dateEntered: ae() }), o = `${m}: ${r.status} ${r.statusText} ${r.url}`;
    }).then((d) => {
      s = d, o = d;
    }).catch((d) => {
      he(e, a, i, c, { operation: m, transactionData: { url: f, response: { ok: r.ok, redirected: r.redirected, status: r.status, statusText: r.statusText, type: r.type, url: r.url }, data: s, logObject: l }, errorData: { name: d.name, message: d.message, stack: d.stack }, dateEntered: ae() }), o = `${m}: ${ge(d.name)}: ${ge(d.message)}`;
    });
  }
  return o;
}, he = (e, a, i, c, l) => {
  let o = "Add error log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    let m = "Add Error Log", f = `${e}errorLogs/`, r = "";
    fetch(f, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: l })
    }).then((s) => {
      if (r = s, r.status === 200)
        return r.json();
      logResult = `${m}: ${r.status} ${r.statusText} ${r.url}`;
    }).then((s) => {
      o = s;
    }).catch((s) => {
      o = `${m}: ${ge(s.name)}: ${ge(s.message)}`;
    });
  }
  return o;
}, J = (e, a) => {
  let i = e;
  return E(e) || (E(a) ? i = lt(e) : i = lt(e, a)), i;
}, ft = () => ({ appCodeName: navigator.appCodeName, appName: navigator.appName, appVersion: navigator.appVersion, cookieEnabled: navigator.cookieEnabled, language: navigator.language, onLine: navigator.onLine, platform: navigator.platform, product: navigator.product, userAgent: navigator.userAgent }), Ht = { BASE_URL: "./", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Gt = (e) => {
  let a = null, i = E(e) ? "" : e;
  try {
    typeof import.meta < "u" && (a = Ht?.[`VITE_${i}`]), typeof process > "u" && E(a) && typeof process.env < "u" && (a = process.env[`REACT_APP_${i}`]);
  } catch {
  }
  return a;
}, yt = () => {
  let e = "";
  try {
    typeof import.meta < "u" && (e = "production"), typeof process > "u" && E(e) && typeof process.env < "u" && (e = process.env?.NODE_ENV);
  } catch {
  }
  return e === "development";
}, qt = () => window?.electronEnvironment?.inElectron ?? !1, Bt = () => !!(yt() || qt() || window.location.href.includes("orbiseducation.com")), pe = () => {
  let e = Gt("ALLOW_DEVELOPMENT_COMPUTERLOG");
  return !!(Bt() && (!yt() || e === "True"));
}, ke = ({
  alertType: e = "",
  message: a = "",
  includeResetButton: i = !1,
  setMessage: c
}) => {
  const l = G("alert", {
    "alert-success": e === "success",
    "alert-warning": e === "warning",
    "alert-info": e === "info",
    "alert-danger": e === "error"
  });
  return /* @__PURE__ */ t.jsx("div", { className: "alert-container", children: /* @__PURE__ */ t.jsxs("div", { className: l, children: [
    /* @__PURE__ */ t.jsx("div", { className: "alert__message-text", children: J(a) }),
    i ? /* @__PURE__ */ t.jsx("button", { type: "button", className: "refresh", onClick: () => window.location.reload(), children: "Refresh" }) : null,
    /* @__PURE__ */ t.jsx("button", { type: "button", className: "alert__close-button", onClick: () => c(""), children: /* @__PURE__ */ t.jsx("i", { className: "fas fa-close" }) })
  ] }) });
}, Wt = ({
  informationMessage: e = "",
  successMessage: a = "",
  warningMessage: i = "",
  errorMessage: c = "",
  informationMessageVisible: l = !1,
  successMessageVisible: o = !1,
  warningMessageVisible: m = !1,
  errorMessageVisible: f = !1,
  addInformationMessage: r = X,
  addSuccessMessage: s = X,
  addWarningMessage: d = X,
  addErrorMessage: v = X
}) => {
  V(() => {
    E(a) || setTimeout(() => {
      s("");
    }, 5e3);
  }, [a]);
  const y = (g) => {
    r(g);
  }, j = (g) => {
    s(g);
  }, C = (g) => {
    d(g);
  }, R = (g) => {
    v(g);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "alert-messages-container", children: [
    l ? /* @__PURE__ */ t.jsx(ke, { message: e, setMessage: y, alertType: "info" }) : null,
    o ? /* @__PURE__ */ t.jsx(ke, { message: a, setMessage: j, alertType: "success" }) : null,
    m ? /* @__PURE__ */ t.jsx(ke, { message: i, setMessage: C, alertType: "warning" }) : null,
    f ? /* @__PURE__ */ t.jsx(ke, { message: c, setMessage: R, alertType: "error" }) : null
  ] });
}, $t = ({
  urlToCopy: e,
  label: a = "Copy URL",
  disabled: i,
  buttonType: c = "default",
  tooltipStyle: l = ""
}) => {
  const [o, m] = I(!1), f = G("btn", {
    "btn-success": o,
    "btn-light-gray": !o
  }), r = G("btn btn-transparent tooltip-container", {
    "tooltip-right": l === "right",
    "tooltip-left": l === "left",
    "tooltip-down": l === "down"
  }), s = (d) => {
    d.stopPropagation(), E(e) || (navigator.clipboard.writeText(e), m(!0), setTimeout(() => {
      m(!1);
    }, 2e3));
  };
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: c === "icon" ? /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      className: r,
      "data-tooltip": o ? "Copied" : a,
      onClick: s,
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
      className: f,
      onClick: s,
      disabled: i,
      children: o ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fas fa-check" }),
        " Copied"
      ] }) : a
    }
  ) });
}, Jt = ({ children: e = "No search results." }) => /* @__PURE__ */ t.jsxs("span", { className: "text-center no-results-message", children: [
  /* @__PURE__ */ t.jsx("i", { className: "fa fa-exclamation-triangle red-text" }),
  " ",
  e
] }), Vt = ({ classes: e = "orbis-logo", width: a = "100%" }) => /* @__PURE__ */ t.jsxs("svg", { className: e, width: a, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1624.91 556.67", children: [
  /* @__PURE__ */ t.jsx("path", { fill: "#2e3192", d: "M1606.78 424.92v-14.83c-.14-16.25-.4-32.51-.42-48.77 0-5-1.86-7.74-7-7.89-2.21-.06-5 .27-4-4h29.1c1 2.34.7 4.05-2.34 3.91-7.27-.35-8.38 3.84-8.47 10-.39 25.42-.58 50.84.1 76.25v4.43c-7-.34-12.37-2-16.83-7.67-16.65-21.28-33.79-42.18-50.76-63.21-1.81-2.24-3.75-4.37-5.53-6.45-1.89.82-1.53 2.12-1.52 3.15.09 19.92.38 39.85.27 59.77 0 5.41 1.73 8.16 7.28 8.29 2.2.05 5 0 3.53 4.13h-29c-1.56-4.46 1.88-4.24 4.09-4.26 5.14 0 6.73-2.79 6.75-7.37q.21-34.69.52-69.39c0-5.37-3.17-7.15-7.82-7.52-2.52-.2-5.44 0-3.7-4.53 6.69 0 13.54.15 20.37-.06 3.56-.11 4.59 2.63 6.2 4.68q24.93 31.51 49.77 63.1c2.37 3 5 5.8 7.51 8.7zm-873.59 17.71c10.38-14.69 5.51-30.38 6.41-45.23.72-11.84-.34-23.78-.13-35.68.1-5.45-1.86-8.14-7.26-8.36-2-.08-4.43.28-3.88-3.53.22-1.07 1.43-1 2.55-1 16 0 32-.15 48-.07 26.83.13 44.5 15 46.21 38.68C827 413.31 809.23 437 785 441.21c-16.86 2.94-33.79-.12-51.81 1.42zm19.75-7.29c19.62 1.33 38.58 3.56 50.9-15.17 10-15.27 9.65-40.46-1.21-53.08-13.51-15.7-31.58-13.11-49.58-11.32-1.45 26.76-.57 52.73-.11 79.57zm686.06 9.03c-28.53-.08-47.2-19.2-47.25-48.38 0-29.54 20.67-49.28 51.56-49.12 29.94.15 48.56 17.79 48.43 45.88-.15 30.89-21.42 51.7-52.74 51.62zm-33.11-53.63c.21 13 2.72 24.72 10.59 34.66 8.47 10.68 19.75 14.25 33 12.2 13.42-2.08 21.62-10.16 25.46-22.86a59.69 59.69 0 00-1.39-39.69c-6.18-16-20-23.75-38.46-21.94-15.13 1.48-25.42 11.51-28.43 28a85 85 0 00-.79 9.63zM698.1 419.25c-.57 7.75-1.1 15-1.67 22.76h-64.38c0-.67-.41-2.08-.09-2.26 6.52-3.61 5.36-9.81 5.39-15.59.1-20.15.06-40.3.29-60.45.07-5.94-.76-10.63-8.2-10.35-2.94.11-3.52-1.39-2.65-4.24h67.5c-.64 6.07-1.32 12.05-1.9 18-.15 1.55-.5 2.64-2.34 2.6s-1.79-1.42-2.08-2.79c-2.28-10.57-2.31-10.57-13.66-11.78-7.51-.81-15-1.15-22.91.67v34.77a88.64 88.64 0 0024.51 0c4.35-.52 3.85-3.71 4.21-6.6.24-1.86-.5-4.71 2.79-4.34 2.6.29 1.91 2.74 1.92 4.43.07 7.31 0 14.62 0 21.92 0 1.77.41 4.05-2.34 4.07s-2.55-2.31-2.47-4c.29-6.69-3.46-8.76-9.39-8.7-6.35.07-12.7 0-19.37 0-1.32 12.92-.93 25.19-.2 38.32 11.62.2 23.14.63 34.7-.63 5.71-.63 5.24-5.36 6.59-9 .96-2.64-.35-6.99 5.75-6.81zm157.26-69.96h38.56c1 4.23-1.67 4.15-4 4-7-.44-9 3.32-9 9.68.17 16.25-.11 32.51.11 48.76.21 15.71 6 21.92 21.64 23.64a44.33 44.33 0 0015-.91c11.57-2.67 17-7.86 17.77-19.49 1.24-18.51.59-37.07.29-55.62-.08-5.09-3.55-5.73-7.45-6-2.26-.17-5.48.87-4.81-4.5h29.73c1.27 0 2.25.4 2.43 1.81.23 1.75-.84 2.24-2.35 2.65-10.56 2.84-10.49 2.87-10.59 14.17-.14 16 .3 32.09-.78 48.05-1.09 16.31-9.3 24.92-25.31 27.74-10.63 1.87-21.42 1.9-31.85-1.94s-16.1-11-16.3-22.15c-.33-19-.69-38-.66-57 0-6.06-2.14-9-8.26-8.86-2.47.05-5.47.4-4.17-4.03zm308.58 92.9c1.76-7.62 8.87-2.76 12.21-7.11-1.71-7.39-5.61-14.61-8.47-22.18-.83-2.21-3-1.79-4.74-1.79h-29.53a3.85 3.85 0 01-.68 0c-3.84-.56-4.57 2.48-5.38 5-2.14 6.56-7.54 12.25-6.18 19.66.41 2.24 4 1.55 6.22 1.75 3.09.29 4.87 1.08 3.36 4.69h-29.42c-1.18-2.66-.86-4.56 2.47-4.51 5.46.08 7.37-3.77 9.16-7.83 11.26-25.48 22.46-51 33.82-76.4 1-2.22.77-5.88 4.72-5.8s3.64 3.65 4.61 5.91c10.52 24.3 20.84 48.69 31.38 73 2.19 5.06 3.53 11.14 11.09 11.38 2.05.07 1.54 2.37 1.09 4.27zm-32.09-37.14h32.41l-16-38.63zm-60.61-51.9c-.74 5.61-1.39 10.56-2 15.52-.23 1.74.1 4-2.7 3.81-2.11-.12-2.71-1.74-2.46-3.41 1.6-10.66-6.51-12.51-13.65-14.33-15.35-3.91-30.17-2.28-41 10.27-12.26 14.25-12.48 31.22-5.6 47.81 6.62 15.94 20.16 23 37 24.15 10.91.75 21.13-1.88 31.48-8-.61 4.46-1.06 7.52-4.41 9.12-19.73 9.44-53.84 10.25-71.68-10.92-12.38-14.69-14.1-31.59-8.06-49 6.31-18.21 20.8-27.32 39.15-30.31a78.32 78.32 0 0143.93 5.29zm224.3-3.92v18.58c0 1.45-.39 2.78-2.2 2.86-2.19.1-2.33-1.41-2.7-3.13-2.53-11.91-2.57-11.9-15-11.9h-11.16c-1.74 13.5-.84 26.52-1 39.5-.12 11.23.07 22.47 0 33.7 0 5.63 1.84 9.22 8.32 8.88 2.37-.12 5.37-.07 4.54 4.78h-36.06c-1.25 0-2.29-.33-2.46-1.75-.28-2.18 1.28-3.07 2.92-2.92 10.11.93 10.13-5.76 10.08-12.84-.15-21.55-.17-43.09-.27-64.64 0-1.32-.23-2.64-.38-4.24-7.36-.88-14.41-.49-21.44-.19-4.29.18-3.63 3.7-4.6 6.41s1.52 7.83-4.87 8.5c-.34-7.23-.67-14.2-1-21.6zm28.76-.03h38.64c1 3.95-1.29 4.27-3.75 4.1-6.42-.43-9.14 2.63-9.13 8.88q.11 33.35 0 66.7c0 5.66 2 9.15 8.41 8.86 2.29-.1 5.51-.21 4.49 4.35h-38.67c-1.08-4.9 2.56-4.42 5-4.38 5.68.1 7.8-2.93 7.79-8 0-22.69-.18-45.37-.11-68.06 0-5.81-2.6-8.32-8.21-8.29-2.44-.01-5.47.46-4.46-4.16z", id: "prefix__Education" }),
  /* @__PURE__ */ t.jsx("path", { fill: "#02a04e", d: "M630.82 316.18h993.59v5.62H630.82z", id: "prefix__Line" }),
  /* @__PURE__ */ t.jsx("path", { fill: "#2e3192", d: "M976.61 203.58c19.75 25.55 37.8 51.19 57.66 75.46a15.18 15.18 0 0010.44 6c6.83.71 6.86.91 4.87 8.38a177 177 0 00-31.39.13c-3.93.43-5-2.83-6.68-5-16.89-21.68-32-44.72-49.49-65.94-5-6-10-11.94-15-17.94-1.25-1.51-3.16-2.77-2.07-5.32 1.16-2.73 3.42-1.77 5.31-1.68 9.94.46 19.7-.3 29-4.12a37.07 37.07 0 0020.3-47.93c-4.73-11.69-14.51-16.76-26-18.95-10.92-2.07-21.87-1.09-32.74 1.2-4.4.92-5 3.67-5.19 7.45-1.47 23.35-1 46.72-.93 70.09 0 22.22-.67 44.45.65 66.66.62 10.48 1.84 11.6 12.1 12.65 3.65.37 7.29.72 11.06 1.09 1.54 2.26.94 4.69.25 8.1a568.35 568.35 0 00-71.26.21c-2.63-2.64-2-5.09-1.43-8.16 4.82-.5 9.73-1.15 14.67-1.51 5.79-.42 8.72-3.41 9-9.15 0-.92.16-1.83.18-2.75.7-45.37.8-90.74-.13-136.11-.19-9.12-2.29-10.95-11.63-11.59-2.06-.14-4.12-.13-6.18-.25-6.73-.4-6.91-.67-5.57-8 7 0 14-.23 21.06 0 24.28.93 48.52-1.28 72.79-.73a133 133 0 0114.33 1.45c34.41 4.56 42.71 42.51 22.2 66.1-10.37 11.89-24.24 16.75-40.18 20.16zm238.88-10.3c3.82.61 7.44 1.15 11 1.75 27.54 4.58 41.17 25.23 34.7 52.54-5.41 22.78-28.14 41.82-53.43 45.11-11.21 1.46-22.39 1.23-33.59.63a256.21 256.21 0 00-40.83.6c-2.05-4.27-1.17-6.93 2.68-8.09 5.38-1.62 6.45-5.56 6.7-10.52 1.91-38.45 1.47-76.91 1.16-115.38 0-6.87 0-13.74-.24-20.61-.39-12.71-1.54-14-14.37-14.54-5.85-.23-8.82-1.77-6.51-8.23 6.34 0 12.67-.19 19 0 21.53.73 43-1 64.51-1.17a87.46 87.46 0 0119.76 2c24.76 5.52 35.37 30.08 22.7 52.13-6 10.51-15.35 16.68-26.38 20.77-2.25.9-4.87.97-6.86 3.01zm-47 7v63.5c0 18.71 0 18.71 18.78 19.1 32.32.67 49.94-16.59 48.27-48-.69-13.22-5.56-24.83-18.88-30.16-15.41-6.14-31.66-5.32-48.16-4.4zm-.25-10.94c14.75.28 29 1.83 42.45-4.08 13-5.72 17.45-16.93 17.7-30.07.25-12.91-6-22.16-17.46-26-13.54-4.55-27.34-3.86-41.27-1.06-2.08 20.39-1.15 40.32-1.41 61.25zm-462.55-77.11c35.25.22 59.55 6.23 79 25.66 19 18.94 24.46 42.65 22.74 68.15C802.58 278.55 727 320.57 662.32 287c-24.66-12.82-37.62-34.44-42.26-60.94-6.77-38.73 1.93-72.51 35.37-96.62 17.5-12.64 37.57-17.44 50.26-17.21zm74.68 95.49c0-4.12.37-8.28-.06-12.35-4.41-41.51-25.3-73.14-74.78-72-27.38.62-49.59 16.73-57 43.12-8.3 29.5-5.1 58.17 9.35 85.14 9.93 18.54 25.39 30.53 46.72 33.4 28.81 3.87 59.09-6 70.65-41.53 3.75-11.67 5.82-23.5 5.12-35.78zm828.77-50c-1.13.1-2.22.28-3.32.28-1.36 0-2.71-.13-4.66-.24-.27-4.9-.84-9.63-.69-14.34a11.68 11.68 0 00-5.62-10.94c-13.55-9-28.17-11.88-43.85-7.15a34.69 34.69 0 00-23.36 41.23c2.84 11.49 11 17.72 22.14 19.95s22.56 3.8 33.83 5.8c18 3.2 34 9.56 38.93 29.51 5.21 21-.19 39.48-16.08 54.42-21.53 20.23-47.65 23.65-75.55 19.82a94.91 94.91 0 01-23.12-6.25c-2.52-1-4.26-2.15-4-5.41a326.32 326.32 0 001.46-34.73c2.79-1.67 5.22-1.1 8.32-.66.4 4.67 1.09 9.38 1.14 14.09.07 6.13 2.65 10.6 7.9 13.48 19.48 10.68 39.62 12.64 59.81 2.69 16-7.88 23.66-27.59 18.51-44.6-3.26-10.79-11.16-16.6-21.55-19-11.34-2.64-22.87-4.52-34.31-6.76-24.5-4.79-37.6-17.1-39.73-37.31-2.55-24.23 9.26-45.6 31.15-54.18 24.91-9.77 49.42-5.66 73.46 4.09 2.26.92 3.11 2.25 2.81 4.72-1.26 10.37-2.4 20.77-3.62 31.49zm-186.96 128.11a10.84 10.84 0 01-.5 8.1c-23.81-1.59-48-1.25-71.83 0-2-2.9-1.49-5.28-.83-8.05 4.06-.43 8.1-.88 12.15-1.28 9.69-1 11.31-2.43 11.79-12.29.42-8.46.47-16.94.45-25.41-.08-35.52-.12-71-.45-106.54-.14-13.92-1.66-15.11-15.49-15.79-2.72-.13-5.43-.45-8-.66-1.63-2.44-1-4.68-.71-8 24.32.73 48.64 1.14 72.76-.2 1.76 2.88 1.3 5.26.67 7.65-3.6 1.39-7.31 1.07-10.94 1.29-10.78.64-12.62 2.22-13.08 13.19-.43 10.3-.44 20.61-.43 30.92q0 49.15.22 98.3c0 2.29.19 4.58.26 6.86.22 6.85 3.49 10.49 10.59 10.66 4.36.14 8.67.8 13.37 1.25z", id: "prefix__Orbis" }),
  /* @__PURE__ */ t.jsxs("g", { id: "prefix__Layer_6", "data-name": "Layer 6", children: [
    /* @__PURE__ */ t.jsx("path", { fill: "#2e3192", d: "M525.46 150.48a279 279 0 00-30.17-46.32C368.48 118.08 239.74 83.72 196.2 12.31a277.63 277.63 0 00-91.52 48.52C225 135.9 368.16 159.12 525.46 150.48z" }),
    /* @__PURE__ */ t.jsx("path", { fill: "#02a04e", d: "M551.87 227.49A275.59 275.59 0 00536.31 174c-182.93 35.69-346.18 18.14-492.11-46.2a277 277 0 00-31.93 68.32c183.88 61.78 363.04 63.25 539.6 31.37z" }),
    /* @__PURE__ */ t.jsx("path", { fill: "#2e3192", d: "M477.88 84.48A277.42 277.42 0 00278.25 0c-5.15 0-10.25.17-15.36.44 31.67 51.22 136.16 84.63 214.99 84.04zM0 281.64c1.77 152.19 125.64 275 278.25 275 153.72 0 278.34-124.62 278.34-278.34a279.74 279.74 0 00-3-40.57C379.36 303 194.09 314 0 281.64z" })
  ] })
] }), se = () => /* @__PURE__ */ t.jsxs("span", { className: "required", children: [
  " * ",
  /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "required" })
] }), Ae = ({
  id: e = "",
  label: a = "",
  value: i = "",
  autoFocus: c = !1,
  disabled: l = !1,
  hint: o = "",
  inlineError: m = "",
  isRequired: f = !1,
  list: r = "",
  max: s = null,
  maxLength: d = null,
  min: v = null,
  placeholder: y = "",
  rows: j = 10,
  step: C = null,
  srOnly: R = !1,
  type: g = "text",
  useInputAddon: _ = !1,
  onKeyDown: b = () => {
  },
  // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  updateValue: A = () => {
  }
}) => {
  const [D, n] = I("password"), u = G("", {
    "sr-only": R,
    "input-addon": _
  }), p = G("form-group", {
    "with-addon": _,
    "input-error": !E(m),
    "input-disabled": l
  }), x = {};
  E(v) || (x.min = v), E(s) || (x.max = s), E(C) || (x.step = C), E(d) || (x.maxLength = d);
  const N = (P) => {
    if (g === "number")
      !E(P.target.value) && !isNaN(+P.target.value) ? A(+P.target.value) : A(P.target.value);
    else {
      let M = P.target.value;
      !E(d) && M.length > (d ?? 0) && (M = M.slice(0, d ?? void 0)), A(M);
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: p, children: [
    /* @__PURE__ */ t.jsxs("label", { htmlFor: e, className: u, children: [
      a,
      f ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }),
    E(o) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(o) }),
    g === "textarea" ? /* @__PURE__ */ t.jsx(
      "textarea",
      {
        id: e,
        name: e,
        placeholder: y,
        rows: j,
        value: i,
        disabled: l,
        onChange: N,
        onKeyDown: b
      }
    ) : null,
    g === "color" ? /* @__PURE__ */ t.jsxs("div", { className: "color-input-container", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: g,
          id: e,
          placeholder: y,
          value: i,
          disabled: l,
          onChange: N,
          autoFocus: c
        }
      ),
      i
    ] }) : null,
    g === "password" ? /* @__PURE__ */ t.jsxs("div", { className: "form-group__password-input-group", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: D,
          id: e,
          placeholder: y,
          value: i,
          disabled: l,
          onChange: N,
          autoFocus: c
        }
      ),
      /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "form-group__password-input-group__password-addon",
          onMouseOver: () => n("text"),
          onMouseOut: () => n("password"),
          title: "Hover to show password.",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fas fa-eye" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Hover to show password." })
          ]
        }
      )
    ] }) : null,
    g !== "textarea" && g !== "toggle" && g !== "password" && g !== "color" ? /* @__PURE__ */ t.jsx(
      "input",
      {
        type: g,
        id: e,
        placeholder: y,
        value: i,
        disabled: l,
        onChange: N,
        list: r,
        autoFocus: c,
        ...x
      }
    ) : null,
    E(m) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: J(m) })
  ] });
}, Zt = ({
  applicationVersion: e = "",
  baseURL: a = "",
  computerLog: i = {},
  userIdentifier: c = "",
  demonstrationMode: l = !1,
  environmentMode: o = "",
  databaseAvailable: m = !0,
  sessionToken: f = null,
  loggedInUser: r = null,
  disabled: s = !1,
  sessionTokenName: d = "",
  handleNavigation: v = X,
  setFetchAuthorization: y = X,
  setDatabaseAvailable: j = X,
  setUserTokenExpired: C = X,
  setLoggedInUser: R = X,
  addSuccessMessage: g = X,
  addErrorMessage: _ = X,
  clearMessages: b = X
}) => {
  const [A, D] = I(null), [n, u] = I(null), [p, x] = I(""), [N, P] = I(""), [M, U] = I(""), [W, S] = I(""), [w, q] = I(""), [B, re] = I({});
  V(() => {
    const k = localStorage.getItem(d);
    (E(k) || E(r)) && (ut(a, y("", o, l), m, pe(), { operation: "Attempted Page Visit", userIdentifier: c, href: window.location.href, applicationVersion: e, browserData: JSON.stringify(ft()), transactionData: { loggedInUser: r, computerLog: i }, dateEntered: ae() }), v());
  }, [r]);
  const ve = () => {
    r !== null ? (D(r), u(r.userID !== void 0 ? r.userID : null), x(r.username), P(r.firstName), U(r.lastName), S(r.email)) : (D(null), u(null), x(""), P(""), U(""), S(""), q(""));
  };
  V(() => {
    ve();
  }, [r]), V(() => {
    E(B) || (!E(B.txtFirstName) && !E(N) && re({
      ...B,
      txtFirstName: ""
    }), !E(B.txtLastName) && !E(M) && re({
      ...B,
      txtLastName: ""
    }), !E(B.txtEmail) && !E(W) && !E(W.match(ct)) && re({
      ...B,
      txtEmail: ""
    }));
  }, [N, M, W, B]);
  const je = () => {
    b();
    const k = "Save Record";
    let L = !1, T = "", z = "", F = {};
    E(le(N)) && (F = {
      ...F,
      txtFirstName: "Please enter the <strong>First Name</strong>."
    }), E(le(M)) && (F = {
      ...F,
      txtLastName: "Please enter the <strong>Last Name</strong>."
    }), E(le(W)) ? F = {
      ...F,
      txtEmail: "Please enter the <strong>Email</strong>."
    } : E(W.match(ct)) && (F = {
      ...F,
      txtEmail: "Please enter a valid email address for the <strong>Email</strong>."
    }), E(F) || (z = `${z}<br />Please fix the errors with the indicated fields in the form.`), E(T) || (T = `Please enter the user's${T.replace(/^,/, "")}.`), E(z) || (E(T) ? T = z.replace(/<br\s*\/?>/, "") : T = T + z), !E(T) || !E(F) ? (E(T) || _(`${k}: ${T}`), E(F) || re(F), L = !1) : L = !0, L === !0 && h();
  }, h = (k) => {
    const L = `${a}users/`;
    let T = "", z = "", F = "", H = "";
    const Z = r, te = n, ne = {
      // ?
      // username: convertNullEmptyString(formatTrim(txtUsername)),
      firstName: $(le(N)),
      lastName: $(le(M)),
      email: $(le(W)),
      password: $(le(w)),
      // updatedBy: !isEmpty(loggedInUser) && loggedInUser.userID
      updatedBy: r?.userID ?? null
    };
    F = "Updated User", H = "PUT", ne.userID = te, fetch(L, {
      method: H,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: y(f, o, l)
      }),
      body: JSON.stringify({ recordObject: ne })
    }).then((ee) => (T = ee, T.status === 200 ? T.json() : (he(a, y("", o, l), m, pe(), { operation: `${F} SQL Server`, transactionData: { url: L, response: { ok: T.ok, redirected: T.redirected, status: T.status, statusText: T.statusText, type: T.type, url: T.url }, data: z, primaryKeyID: te, previousRecord: Z, recordObject: ne, applicationVersion: e, loggedInUser: r, computerLog: i }, errorData: { message: `${T.status} ${T.statusText} ${T.url}` }, dateEntered: ae() }), T.status === 401 && C(!0), Promise.reject(Error(T.status + " Fetch failed."))))).then((ee) => {
      if (z = ee, E(z))
        _(`${F}: No Results Returned.`), he(a, y("", o, l), m, pe(), { operation: `${F} SQL Server`, transactionData: { url: L, response: { ok: T.ok, redirected: T.redirected, status: T.status, statusText: T.statusText, type: T.type, url: T.url }, data: z, primaryKeyID: te, previousRecord: Z, recordObject: ne, applicationVersion: e, loggedInUser: r, computerLog: i }, errorData: { message: "No Results Returned." }, dateEntered: ae() });
      else if (z.transactionSuccess && !E(z.records)) {
        const Q = zt(z.records);
        x($(Q.username)), P($(Q.firstName)), U($(Q.lastName)), S($(Q.email)), q($(Q.password));
        const ue = { ...A };
        ue.username = $(Q.username), ue.firstName = $(Q.firstName), ue.lastName = $(Q.lastName), ue.email = $(Q.email), ue.password = $(Q.password), R(ue), j(!0), ut(a, y("", o, l), m, pe(), { operation: F, userIdentifier: c, href: window.location.href, applicationVersion: e, browserData: JSON.stringify(ft()), transactionData: { dataRecord: Q, previousRecord: Z, loggedInUser: r, computerLog: i }, dateEntered: ae() }), g(`${F}: ${z.message}`);
      } else
        _(`${F}: ${z.message}`), he(a, y("", o, l), m, pe(), { operation: `${F} SQL Server`, transactionData: { url: L, response: { ok: T.ok, redirected: T.redirected, status: T.status, statusText: T.statusText, type: T.type, url: T.url }, data: z, primaryKeyID: te, previousRecord: Z, recordObject: ne, applicationVersion: e, loggedInUser: r, computerLog: i }, errorData: { message: z.message }, dateEntered: ae() });
    }).catch((ee) => {
      _(`${F}: ${ge(ee.name)}: ${ge(ee.message)}`), he(a, y("", o, l), m, pe(), { operation: F, userIdentifier: c, transactionData: { primaryKeyID: te, previousRecord: Z, recordObject: ne, applicationVersion: e, loggedInUser: r, computerLog: i }, errorData: { name: ee.name, message: ee.message, inner: ee.inner, stack: ee.stack }, dateEntered: ae() }), j(!1);
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
        p
      ] }),
      /* @__PURE__ */ t.jsx(
        Ae,
        {
          id: "txtFirstName",
          type: "text",
          label: "First Name",
          isRequired: !0,
          inlineError: B.txtFirstName,
          disabled: s,
          value: N,
          updateValue: P
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ae,
        {
          id: "txtLastName",
          type: "text",
          label: "Last Name",
          isRequired: !0,
          inlineError: B.txtLastName,
          disabled: s,
          value: M,
          updateValue: U
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ae,
        {
          id: "txtEmail",
          type: "text",
          label: "Email",
          isRequired: !0,
          inlineError: B.txtEmail,
          disabled: s,
          value: W,
          updateValue: S
        }
      ),
      /* @__PURE__ */ t.jsx(
        Ae,
        {
          id: "txtPassword",
          type: "text",
          label: "Password (Only updated if a value is entered)",
          isRequired: !0,
          disabled: s,
          value: w,
          updateValue: q
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex-row", children: [
        /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-primary", onClick: je, children: "Save" }),
        /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-dark-gray", onClick: () => {
          ve(), b(), re({});
        }, children: "Reset" })
      ] })
    ] })
  ] });
}, Kt = ({
  columnPropertyName: e = "",
  columnText: a = "",
  setSortDirection: i,
  setSortProperty: c,
  sortDirection: l = "",
  sortProperty: o = ""
}) => {
  const m = G("fa", {
    "fa-sort-up": o === e && l === "asc",
    "fa-sort-down": o === e && l === "desc",
    "fa-sort": o !== e || l === "unsorted"
  }), f = (r) => {
    l === "unsorted" || r !== o ? (c(r), i("asc")) : l === "asc" ? (c(r), i("desc")) : (c(""), i("unsorted"));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "sortable-column-heading", children: [
    a,
    /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-transparent sort-button", onClick: () => f(e), children: /* @__PURE__ */ t.jsx("i", { className: m }) })
  ] });
}, Qt = () => /* @__PURE__ */ t.jsxs("div", { className: "spinner-container", children: [
  /* @__PURE__ */ t.jsx("i", { className: "fa fa-spinner loading-spinner" }),
  /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Loading..." })
] }), er = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  setDialogBoxOpen: l
}) => {
  const o = i, m = c, f = e, r = G("modal-dialog", {
    "modal-sm": o === "sm",
    "modal-md": o === "md",
    "modal-lg": o === "lg",
    "modal-xl": o === "xl"
  });
  return V(() => {
    const s = (d) => {
      d.key === "Escape" && l(!1);
    };
    return window.addEventListener("keydown", s), () => {
      window.removeEventListener("keydown", s);
    };
  }, []), /* @__PURE__ */ t.jsx(t.Fragment, { children: a ? /* @__PURE__ */ t.jsxs("div", { className: "modal", tabIndex: -1, "aria-hidden": "true", children: [
    /* @__PURE__ */ t.jsx("div", { className: r, children: /* @__PURE__ */ t.jsxs("div", { className: "modal-content", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ t.jsx("h5", { className: "modal-title", id: "exampleModalLabel", children: m }),
        /* @__PURE__ */ t.jsxs("button", { type: "button", className: "close", onClick: () => l(!a), title: "Close", children: [
          /* @__PURE__ */ t.jsx("i", { className: "fa fa-close" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "modal-body", children: f }),
      /* @__PURE__ */ t.jsx("div", { className: "modal-footer", children: /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-primary", onClick: () => l(!a), children: "OK" }) })
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-backdrop", onClick: () => l(!a) })
  ] }) : null });
}, tr = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  dialogBoxType: l = "",
  setDialogBoxContinue: o
}) => {
  let m = i, f = c, r = e;
  l === "confirmDelete" ? (m = "md", f = "Delete Record?", r = "Are you sure you want to delete this record?") : l === "confirmRemove" ? (m = "md", f = "Remove Record?", r = "Are you sure you want to remove this record?") : l === "confirmRemoveAll" ? (m = "md", f = "Remove All Records?", r = "Are you sure you want to remove all records?") : l === "changePagePrompt" ? (m = "md", f = "Save Changes?", r = "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?") : l === "logOut" ? (m = "md", f = "Log Out?", r = "Are you sure you want to log out?") : l === "closeProgram" && (m = "md", f = "Close Program?", r = "Are you sure you want to close this program?"), V(() => {
    const d = (v) => {
      v.key === "Escape" && o(!1);
    };
    return window.addEventListener("keydown", d), () => {
      window.removeEventListener("keydown", d);
    };
  }, []);
  const s = G("modal-dialog", {
    "modal-sm": m === "sm",
    "modal-md": m === "md",
    "modal-lg": m === "lg",
    "modal-xl": m === "xl"
  });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: a === !0 ? /* @__PURE__ */ t.jsx("div", { className: "modal", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx("div", { className: s, children: /* @__PURE__ */ t.jsxs("div", { className: "modal-content", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ t.jsx("h5", { className: "modal-title", id: "exampleModalLabel", children: f }),
      /* @__PURE__ */ t.jsxs("button", { type: "button", className: "close", onClick: () => o(!1), title: "Close", children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-close" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "modal-body", children: r }),
    /* @__PURE__ */ t.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-primary", onClick: () => o(!0), children: "OK" }),
      /* @__PURE__ */ t.jsx("button", { type: "button", className: "btn btn-cancel", onClick: () => o(!1), children: "Cancel" })
    ] })
  ] }) }) }) : null });
}, Et = (e, a) => {
  const [i, c] = I(a);
  return V(() => {
    const l = (o) => {
      e.current && o.target instanceof Node && !e.current.contains(o.target) && c(!i);
    };
    return i && window.addEventListener("click", l), () => {
      window.removeEventListener("click", l);
    };
  }, [i, e]), [i, c];
}, Ie = (e, a) => {
  let i = "";
  return a.type === "property" ? i = e[a.text] : a.type === "string" && (i = J(a.text)), i;
}, rr = ({
  id: e = "",
  legend: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: l = [],
  value: o = [],
  columns: m = 1,
  disabled: f = !1,
  hint: r = "",
  inlineError: s = "",
  isRequired: d = !1,
  placeholder: v = "Select Value",
  srOnly: y = !1,
  updateValue: j
}) => {
  const C = dt(null), [R, g] = Et(C, !1), _ = G("form-group checkbox-dropdown-group", {
    "input-disabled": f
  }), b = G("", {
    "sr-only": y
  }), A = G("checkbox-dropdown-container", {
    // "show": !isDropdownOpen,
    "input-error": !E(s)
  }), D = (n) => {
    if (n.target.checked === !0) {
      const u = [...o, n.target.value];
      j(u);
    } else {
      const u = o.filter((p) => p !== n.target.value);
      j(u);
    }
  };
  return /* @__PURE__ */ t.jsxs("fieldset", { className: _, ref: C, children: [
    /* @__PURE__ */ t.jsxs("legend", { className: b, children: [
      a,
      " ",
      d ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }),
    /* @__PURE__ */ t.jsxs("button", { type: "button", className: "btn btn-transparent open-dropdown-button", onClick: () => g(!R), children: [
      Y(o) ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        o.length,
        " selected"
      ] }) : v,
      R ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-up" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
      ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-down" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
      ] })
    ] }),
    R ? /* @__PURE__ */ t.jsx("div", { className: A, children: /* @__PURE__ */ t.jsxs("ul", { className: "checkbox-dropdown", style: { columns: m }, children: [
      E(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(r) }),
      Y(i) && !E(c) && Y(l) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: i.map((n) => {
        if (n.active === !0 || E(n.active)) {
          const u = Y(o) ? o.filter((x) => x === ce(n[c])) : [], p = Y(u);
          return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                id: `${e}${n[c]}`,
                value: n[c],
                checked: p,
                disabled: f,
                onChange: D
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "checkbox-label-text", children: l.map((x, N) => /* @__PURE__ */ t.jsx(Fe, { children: Ie(n, x) }, N)) })
          ] }) }, n[c]);
        } else
          return null;
      }) }) : null
    ] }) }) : null,
    E(s) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: J(s) })
  ] });
}, nr = ({
  id: e = "",
  legend: a = "",
  value: i = [],
  optionData: c = [],
  optionID: l = "",
  optionText: o = [],
  collapseList: m = !1,
  columns: f = 1,
  disabled: r = !1,
  hint: s = "",
  inlineError: d = "",
  isCollapsible: v = !1,
  isRequired: y = !1,
  srOnly: j = !1,
  startCollapsed: C = !0,
  setCollapseList: R,
  updateValue: g
}) => {
  const [_, b] = I(!0), A = G("form-group", {
    "input-disabled": r
  }), D = G("", {
    "sr-only": j
  }), n = G("checkbox-group", {
    "is-collapsible": v,
    show: !_,
    "input-error": !E(d)
  });
  V(() => {
    b(!!v);
  }, [v]), V(() => {
    C === !1 && b(!1);
  }, [C]), V(() => {
    m && (b(!0), R?.(!1));
  }, [m]);
  const u = (p) => {
    if (p.target.checked === !0) {
      const x = [...i, p.target.value];
      g(x);
    } else {
      const x = i.filter((N) => N !== p.target.value);
      g(x);
    }
  };
  return /* @__PURE__ */ t.jsxs("fieldset", { className: A, children: [
    /* @__PURE__ */ t.jsx("legend", { className: D, children: v ? /* @__PURE__ */ t.jsxs("button", { type: "button", className: "btn btn-transparent collapse-checkboxes-button", onClick: () => b(!_), children: [
      a,
      y ? /* @__PURE__ */ t.jsx(se, {}) : null,
      Y(i) ? /* @__PURE__ */ t.jsx("div", { className: "search-filter-count", children: i.length }) : null,
      _ ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-down" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
      ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-up" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      a,
      y ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }) }),
    /* @__PURE__ */ t.jsxs("ul", { className: n, style: { columns: f }, children: [
      E(s) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(s) }),
      Y(c) && !E(l) && Y(o) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: c.map((p) => {
        if (p.active === !0 || E(p.active)) {
          const x = Y(i) ? i.filter((P) => P === ce(p[l])) : [], N = Y(x);
          return /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                id: `${e}${p[l]}`,
                value: p[l],
                checked: N,
                disabled: r,
                onChange: u
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "checkbox-label-text", children: o.map((P, M) => /* @__PURE__ */ t.jsx(Fe, { children: Ie(p, P) }, M)) })
          ] }) }, p[l]);
        } else
          return null;
      }) }) : null
    ] }),
    E(d) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: J(d) }),
    v ? /* @__PURE__ */ t.jsx("hr", {}) : null
  ] });
}, Ut = ({
  id: e = "",
  label: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: l = [],
  value: o = "",
  disabled: m = !1,
  emptyOption: f = !1,
  hint: r = "",
  inlineError: s = "",
  isRequired: d = !1,
  placeholder: v = "Select Value",
  srOnly: y = !1,
  useInputAddon: j = !1,
  updateValue: C
}) => {
  const R = G("", {
    "sr-only": y,
    "input-addon": j
  }), g = G("form-group", {
    "with-addon": j,
    "input-error": !E(s),
    "input-disabled": m
  }), _ = (b, A) => A.map(
    (D) => D.type === "property" ? b[D.text] : D.text
    // * Use direct string. -- 02/25/2025 JW
  ).join(" ");
  return /* @__PURE__ */ t.jsxs("div", { className: g, children: [
    /* @__PURE__ */ t.jsxs("label", { htmlFor: e, className: R, children: [
      a,
      d === !0 ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }),
    E(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(r) }),
    /* @__PURE__ */ t.jsxs(
      "select",
      {
        className: "form-control",
        id: e,
        value: o,
        disabled: m,
        onChange: (b) => C(b.target.value),
        children: [
          f ? null : /* @__PURE__ */ t.jsx("option", { value: "", children: v }),
          Y(i) && !E(c) && Y(l) ? i.map((b) => /* @__PURE__ */ t.jsx("option", { value: b[c], children: _(b, l) }, b[c])) : null
        ]
      }
    ),
    E(s) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: J(s) })
  ] });
}, ar = ({
  id: e = "",
  optionData: a = [],
  optionID: i = "",
  optionText: c = [],
  value: l = "",
  collapseList: o = !1,
  columns: m = 1,
  disabled: f = !1,
  hint: r = "",
  inlineError: s = "",
  isCollapsible: d = !1,
  isRequired: v = !1,
  legend: y = "",
  srOnly: j = !1,
  startCollapsed: C = !0,
  setCollapseList: R,
  updateValue: g
}) => {
  const [_, b] = I(!0), A = G("form-group", {
    "input-disabled": f
  }), D = G("", {
    "sr-only": j
  }), n = G("radio-group", {
    "is-collapsible": d,
    show: !_,
    "input-error": !E(s)
  });
  return V(() => {
    b(!!d);
  }, [d]), V(() => {
    C === !1 && b(!1);
  }, [C]), V(() => {
    o && (b(!0), R?.(!1));
  }, [o]), /* @__PURE__ */ t.jsxs("fieldset", { className: A, children: [
    /* @__PURE__ */ t.jsx("legend", { className: D, children: d ? /* @__PURE__ */ t.jsxs("button", { type: "button", className: "btn btn-transparent collapse-checkboxes-button", onClick: () => b(!_), children: [
      y,
      v ? /* @__PURE__ */ t.jsx(se, {}) : null,
      E(l) ? null : /* @__PURE__ */ t.jsx("div", { className: "search-filter-count", children: "1" }),
      _ ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-down" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Open" })
      ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx("i", { className: "fa fa-chevron-up" }),
        /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      y,
      v ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }) }),
    /* @__PURE__ */ t.jsxs("ul", { className: n, style: { columns: m }, children: [
      E(r) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(r) }),
      Y(a) && !E(i) && Y(c) ? /* @__PURE__ */ t.jsx(t.Fragment, { children: a.map((u) => {
        if (u.active === !0 || E(u.active)) {
          let p = l;
          return typeof p == "boolean" && (p = p === !0 ? 1 : 2), /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsxs("label", { className: `${ce(u[i]) === ce(p) ? "active" : ""}`, children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "radio",
                id: `${e}${u[i]}`,
                name: e,
                value: u[i],
                checked: ce(u[i]) === ce(p),
                disabled: f,
                onChange: (x) => g(x.target.value)
              }
            ),
            c.map((x, N) => /* @__PURE__ */ t.jsx(Fe, { children: Ie(u, x) }, N))
          ] }) }, u[i]);
        } else
          return null;
      }) }) : null
    ] }),
    E(s) ? null : /* @__PURE__ */ t.jsx("div", { className: "inline-alert inline-alert-danger", children: J(s) }),
    d ? /* @__PURE__ */ t.jsx("hr", {}) : null
  ] });
}, sr = ({
  id: e = "",
  label: a = "",
  value: i = !1,
  disabled: c = !1,
  falseValue: l = "No",
  hint: o = "",
  isRequired: m = !1,
  srOnly: f = !1,
  trueValue: r = "Yes",
  updateValue: s
}) => {
  const d = G("", {
    "sr-only": f
  }), v = G("form-group toggle-switch-container", {
    "input-disabled": c
  });
  return /* @__PURE__ */ t.jsxs("fieldset", { className: v, children: [
    /* @__PURE__ */ t.jsxs("legend", { className: d, children: [
      a,
      m ? /* @__PURE__ */ t.jsx(se, {}) : null
    ] }),
    E(o) ? null : /* @__PURE__ */ t.jsx("p", { className: "input-hint", children: J(o) }),
    /* @__PURE__ */ t.jsxs("div", { className: "toggle-switch", onClick: () => !c && s(!i), children: [
      /* @__PURE__ */ t.jsx("div", { className: `toggle-switch__button ${i ? "active" : ""}` }),
      /* @__PURE__ */ t.jsx("div", { className: "toggle-switch__text", children: i ? /* @__PURE__ */ t.jsx(t.Fragment, { children: r }) : /* @__PURE__ */ t.jsx(t.Fragment, { children: l }) }),
      /* @__PURE__ */ t.jsxs("label", { className: "sr-only", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            id: `${e}false`,
            checked: !i,
            value: "false",
            disabled: c,
            onChange: () => s(!1)
          }
        ),
        l
      ] }),
      /* @__PURE__ */ t.jsxs("label", { className: "sr-only", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            id: `${e}true`,
            checked: i,
            value: "true",
            disabled: c,
            onChange: () => s(!0)
          }
        ),
        r
      ] })
    ] })
  ] });
}, ir = ({ applicationVersion: e = "0.0.0", copyrightYear: a = "2026" }) => /* @__PURE__ */ t.jsxs("footer", { children: [
  "© ",
  a,
  " Orbis Education. All rights reserved. Version: ",
  e
] }), or = ({ applicationName: e = "Application" }) => {
  const a = window.location.href.includes("intranet.orbiseducation.com") ? "./" : "/";
  return document.title = `Orbis Education | ${e}`, /* @__PURE__ */ t.jsxs("header", { children: [
    /* @__PURE__ */ t.jsx("a", { href: a, className: "orbis-logo-link", children: /* @__PURE__ */ t.jsx(Vt, {}) }),
    /* @__PURE__ */ t.jsx("h1", { children: e })
  ] });
}, lr = ({
  defaultResultsPerPage: e = 30,
  ddResultsPerPage: a = 30,
  currentPageNumber: i = 1,
  totalPages: c = 1,
  setDdResultsPerPage: l,
  setCurrentPageNumber: o
}) => {
  const m = (f) => {
    window.scrollTo(0, 0), o(f);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "pagination-section", children: [
    /* @__PURE__ */ t.jsx(
      Ut,
      {
        id: "ddResultsPerPage",
        label: "Results per Page",
        optionData: [
          { sizeID: e, optionText: e },
          { sizeID: e * 2, optionText: e * 2 },
          { sizeID: e * 3, optionText: e * 3 },
          { sizeID: "all", optionText: "All" }
        ],
        optionID: "sizeID",
        optionText: [{ type: "property", text: "optionText" }],
        emptyOption: !0,
        useInputAddon: !0,
        value: a,
        updateValue: l
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
        c
      ] }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(i + 1),
          disabled: i >= c,
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
          onClick: () => m(c),
          disabled: i >= c,
          title: "Go to Last Page",
          children: [
            /* @__PURE__ */ t.jsx("i", { className: "fa fa-angle-double-right" }),
            /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Go to Last Page" })
          ]
        }
      )
    ] })
  ] });
}, bt = ({
  navigationItem: e = {
    name: "",
    componentName: "",
    isPresent: !0,
    type: "",
    onClick: X,
    children: null
  },
  returnActiveClass: a = X
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
  E(e.children) ? null : e.children
] }), Xt = ({
  navigationItem: e = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass: a = X
}) => {
  const i = dt(null), [c, l] = Et(i, !1), o = G("fa", {
    "fa-caret-up": c,
    "fa-caret-down": !c
  }), m = (e?.dropdownItems ?? []).filter((r) => E(r.isPresent) || r.isPresent === !0), f = E(e?.classes) ? "dropdown" : `dropdown ${e.classes}`;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        type: "button",
        onClick: () => l(!c),
        ref: i,
        children: [
          e.name,
          " ",
          /* @__PURE__ */ t.jsx("i", { className: o })
        ]
      }
    ),
    c === !0 && !Oe(m) ? /* @__PURE__ */ t.jsx("ul", { className: f, children: m.map((r, s) => /* @__PURE__ */ t.jsx("li", { children: /* @__PURE__ */ t.jsx(bt, { navigationItem: r, returnActiveClass: a }) }, s)) }) : null
  ] });
}, cr = ({
  navigationItems: e = [],
  componentToLoad: a = ""
}) => {
  const i = e.filter((l) => E(l.isPresent) || l.isPresent === !0), c = (l, o) => {
    let m = o ?? "";
    return m += a === l ? " active" : "", m;
  };
  return /* @__PURE__ */ t.jsx("nav", { className: "sub-header-nav", children: /* @__PURE__ */ t.jsx("ul", { children: Oe(i) ? null : /* @__PURE__ */ t.jsx(t.Fragment, { children: i.map((l, o) => /* @__PURE__ */ t.jsx("li", { children: l.type === "dropdown" ? /* @__PURE__ */ t.jsx(Xt, { navigationItem: l, returnActiveClass: c }) : /* @__PURE__ */ t.jsx(bt, { navigationItem: l, returnActiveClass: c }) }, o)) }) }) });
}, ur = () => {
  const [e, a] = I(""), [i, c] = I(""), [l, o] = I(""), [m, f] = I(""), [r, s] = I(!1), [d, v] = I(null), [y, j] = I(!1), [C, R] = I(!1), [g, _] = I("");
  V(() => {
    r && document.body.style.overflow !== "hidden" ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [r]);
  const b = () => {
    c(""), o(""), f(""), a(""), s(!1), v(null), j(!1), R(!1);
  };
  V(() => {
    d !== null && (y ? d ? (_("D"), b()) : (b(), _("")) : C ? d ? (_("HD"), b()) : (b(), _("")) : b());
  }, [y, C, d]);
  const A = (x) => {
    E(x) || u(x);
  }, D = (x) => {
    const N = E(x?.dialogBoxType) ? "confirmRemove" : x?.dialogBoxType;
    j(!0), u({ dialogBoxType: N });
  }, n = (x) => {
    const N = E(x?.dialogBoxType) ? "confirmRemove" : x.dialogBoxType;
    R(!0), u({ dialogBoxType: N });
  }, u = (x) => {
    E(x) || (s(!0), c(x.dialogBoxSize || ""), o(x.dialogBoxTitle || ""), f(x.dialogBoxContent || ""), a(x.dialogBoxType || ""), v(null));
  };
  return { processTransactionValue: g, confirmationDialogBoxOpen: r, confirmationDialogBoxSize: i, confirmationDialogBoxTitle: l, confirmationDialogBoxContent: m, confirmationDialogBoxType: e, confirmationDialogBoxContinue: d, confirmAction: A, deleteRecord: D, hardDeleteRecord: n, closeDeleteDialogBox: () => {
    s(!1), a("");
  }, setConfirmationDialogBoxContinue: v, setProcessTransactionValue: _ };
}, fr = ({
  allRecords: e = [],
  defaultResultsPerPage: a = 30
}) => {
  const [i, c] = I(a), [l, o] = I(1), [m, f] = I(1), [r, s] = I([]), d = (v) => {
    if (Oe(v))
      s([]);
    else {
      const y = isNaN(i) ? v.length : i, j = l * y, C = j - y, R = Math.ceil(v.length / y), g = v.slice(C, j);
      f(R), s(g), l > R && o(R);
    }
  };
  return V(() => {
    Oe(e) || d(e);
  }, [i, l]), { ddResultsPerPage: i, currentPageNumber: l, totalPages: m, currentPageRecords: r, setDdResultsPerPage: c, setCurrentPageNumber: o, setCurrentPageRecords: s, determineTotalPages: d };
};
export {
  ke as AlertPopup,
  rr as CheckboxDropdown,
  nr as CheckboxGroup,
  $t as CopyLink,
  er as DialogBox,
  tr as DialogBoxConfirmation,
  ir as Footer,
  Ut as FormDropdown,
  Ae as FormInput,
  ar as FormRadioGroup,
  or as Header,
  Wt as Messages,
  cr as Navigation,
  Xt as NavigationDropdown,
  bt as NavigationLink,
  Jt as NoResultsText,
  Vt as OrbisLogo,
  lr as Pagination,
  Zt as Profile,
  se as RequiredFieldAsterisk,
  Kt as SortableColumnHeader,
  Qt as Spinner,
  sr as ToggleSwitch,
  ur as useDialogBoxConfirmation,
  Et as useNativeClickListener,
  fr as usePagination
};
