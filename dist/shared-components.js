import { jsx as l, jsxs as b, Fragment as I } from "react/jsx-runtime";
import lt, { useEffect as V, useState as M, useRef as we, Fragment as Ae } from "react";
function ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Se = { exports: {} };
var Me;
function Nt() {
  return Me || (Me = 1, (function(e) {
    (function() {
      var a = {}.hasOwnProperty;
      function i() {
        for (var o = "", m = 0; m < arguments.length; m++) {
          var d = arguments[m];
          d && (o = f(o, c(d)));
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
        for (var d in o)
          a.call(o, d) && o[d] && (m = f(m, d));
        return m;
      }
      function f(o, m) {
        return m ? o ? o + " " + m : o + m : o;
      }
      e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
    })();
  })(Se)), Se.exports;
}
var _t = Nt();
const F = /* @__PURE__ */ ct(_t);
var me = {}, ie = {}, Ne = {}, J = {}, te = {}, Oe = {}, Ie;
function ut() {
  return Ie || (Ie = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
    var a;
    (function(c) {
      c.Root = "root", c.Text = "text", c.Directive = "directive", c.Comment = "comment", c.Script = "script", c.Style = "style", c.Tag = "tag", c.CDATA = "cdata", c.Doctype = "doctype";
    })(a = e.ElementType || (e.ElementType = {}));
    function i(c) {
      return c.type === a.Tag || c.type === a.Script || c.type === a.Style;
    }
    e.isTag = i, e.Root = a.Root, e.Text = a.Text, e.Directive = a.Directive, e.Comment = a.Comment, e.Script = a.Script, e.Style = a.Style, e.Tag = a.Tag, e.CDATA = a.CDATA, e.Doctype = a.Doctype;
  })(Oe)), Oe;
}
var k = {}, je;
function Fe() {
  if (je) return k;
  je = 1;
  var e = k && k.__extends || /* @__PURE__ */ (function() {
    var r = function(u, h) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, E) {
        g.__proto__ = E;
      } || function(g, E) {
        for (var S in E) Object.prototype.hasOwnProperty.call(E, S) && (g[S] = E[S]);
      }, r(u, h);
    };
    return function(u, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      r(u, h);
      function g() {
        this.constructor = u;
      }
      u.prototype = h === null ? Object.create(h) : (g.prototype = h.prototype, new g());
    };
  })(), a = k && k.__assign || function() {
    return a = Object.assign || function(r) {
      for (var u, h = 1, g = arguments.length; h < g; h++) {
        u = arguments[h];
        for (var E in u) Object.prototype.hasOwnProperty.call(u, E) && (r[E] = u[E]);
      }
      return r;
    }, a.apply(this, arguments);
  };
  Object.defineProperty(k, "__esModule", { value: !0 }), k.cloneNode = k.hasChildren = k.isDocument = k.isDirective = k.isComment = k.isText = k.isCDATA = k.isTag = k.Element = k.Document = k.CDATA = k.NodeWithChildren = k.ProcessingInstruction = k.Comment = k.Text = k.DataNode = k.Node = void 0;
  var i = /* @__PURE__ */ ut(), c = (
    /** @class */
    (function() {
      function r() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(r.prototype, "parentNode", {
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
      }), Object.defineProperty(r.prototype, "previousSibling", {
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
      }), Object.defineProperty(r.prototype, "nextSibling", {
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
      }), r.prototype.cloneNode = function(u) {
        return u === void 0 && (u = !1), O(this, u);
      }, r;
    })()
  );
  k.Node = c;
  var f = (
    /** @class */
    (function(r) {
      e(u, r);
      function u(h) {
        var g = r.call(this) || this;
        return g.data = h, g;
      }
      return Object.defineProperty(u.prototype, "nodeValue", {
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
      }), u;
    })(c)
  );
  k.DataNode = f;
  var o = (
    /** @class */
    (function(r) {
      e(u, r);
      function u() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Text, h;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(f)
  );
  k.Text = o;
  var m = (
    /** @class */
    (function(r) {
      e(u, r);
      function u() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Comment, h;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(f)
  );
  k.Comment = m;
  var d = (
    /** @class */
    (function(r) {
      e(u, r);
      function u(h, g) {
        var E = r.call(this, g) || this;
        return E.name = h, E.type = i.ElementType.Directive, E;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(f)
  );
  k.ProcessingInstruction = d;
  var t = (
    /** @class */
    (function(r) {
      e(u, r);
      function u(h) {
        var g = r.call(this) || this;
        return g.children = h, g;
      }
      return Object.defineProperty(u.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var h;
          return (h = this.children[0]) !== null && h !== void 0 ? h : null;
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
        set: function(h) {
          this.children = h;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(c)
  );
  k.NodeWithChildren = t;
  var n = (
    /** @class */
    (function(r) {
      e(u, r);
      function u() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.CDATA, h;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(t)
  );
  k.CDATA = n;
  var s = (
    /** @class */
    (function(r) {
      e(u, r);
      function u() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Root, h;
      }
      return Object.defineProperty(u.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(t)
  );
  k.Document = s;
  var p = (
    /** @class */
    (function(r) {
      e(u, r);
      function u(h, g, E, S) {
        E === void 0 && (E = []), S === void 0 && (S = h === "script" ? i.ElementType.Script : h === "style" ? i.ElementType.Style : i.ElementType.Tag);
        var L = r.call(this, E) || this;
        return L.name = h, L.attribs = g, L.type = S, L;
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
        set: function(h) {
          this.name = h;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(u.prototype, "attributes", {
        get: function() {
          var h = this;
          return Object.keys(this.attribs).map(function(g) {
            var E, S;
            return {
              name: g,
              value: h.attribs[g],
              namespace: (E = h["x-attribsNamespace"]) === null || E === void 0 ? void 0 : E[g],
              prefix: (S = h["x-attribsPrefix"]) === null || S === void 0 ? void 0 : S[g]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), u;
    })(t)
  );
  k.Element = p;
  function v(r) {
    return (0, i.isTag)(r);
  }
  k.isTag = v;
  function T(r) {
    return r.type === i.ElementType.CDATA;
  }
  k.isCDATA = T;
  function w(r) {
    return r.type === i.ElementType.Text;
  }
  k.isText = w;
  function _(r) {
    return r.type === i.ElementType.Comment;
  }
  k.isComment = _;
  function y(r) {
    return r.type === i.ElementType.Directive;
  }
  k.isDirective = y;
  function N(r) {
    return r.type === i.ElementType.Root;
  }
  k.isDocument = N;
  function R(r) {
    return Object.prototype.hasOwnProperty.call(r, "children");
  }
  k.hasChildren = R;
  function O(r, u) {
    u === void 0 && (u = !1);
    var h;
    if (w(r))
      h = new o(r.data);
    else if (_(r))
      h = new m(r.data);
    else if (v(r)) {
      var g = u ? x(r.children) : [], E = new p(r.name, a({}, r.attribs), g);
      g.forEach(function(z) {
        return z.parent = E;
      }), r.namespace != null && (E.namespace = r.namespace), r["x-attribsNamespace"] && (E["x-attribsNamespace"] = a({}, r["x-attribsNamespace"])), r["x-attribsPrefix"] && (E["x-attribsPrefix"] = a({}, r["x-attribsPrefix"])), h = E;
    } else if (T(r)) {
      var g = u ? x(r.children) : [], S = new n(g);
      g.forEach(function(A) {
        return A.parent = S;
      }), h = S;
    } else if (N(r)) {
      var g = u ? x(r.children) : [], L = new s(g);
      g.forEach(function(A) {
        return A.parent = L;
      }), r["x-mode"] && (L["x-mode"] = r["x-mode"]), h = L;
    } else if (y(r)) {
      var $ = new d(r.name, r.data);
      r["x-name"] != null && ($["x-name"] = r["x-name"], $["x-publicId"] = r["x-publicId"], $["x-systemId"] = r["x-systemId"]), h = $;
    } else
      throw new Error("Not implemented yet: ".concat(r.type));
    return h.startIndex = r.startIndex, h.endIndex = r.endIndex, r.sourceCodeLocation != null && (h.sourceCodeLocation = r.sourceCodeLocation), h;
  }
  k.cloneNode = O;
  function x(r) {
    for (var u = r.map(function(g) {
      return O(g, !0);
    }), h = 1; h < u.length; h++)
      u[h].prev = u[h - 1], u[h - 1].next = u[h];
    return u;
  }
  return k;
}
var $e;
function dt() {
  return $e || ($e = 1, (function(e) {
    var a = te && te.__createBinding || (Object.create ? (function(d, t, n, s) {
      s === void 0 && (s = n);
      var p = Object.getOwnPropertyDescriptor(t, n);
      (!p || ("get" in p ? !t.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
        return t[n];
      } }), Object.defineProperty(d, s, p);
    }) : (function(d, t, n, s) {
      s === void 0 && (s = n), d[s] = t[n];
    })), i = te && te.__exportStar || function(d, t) {
      for (var n in d) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && a(t, d, n);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var c = /* @__PURE__ */ ut(), f = /* @__PURE__ */ Fe();
    i(/* @__PURE__ */ Fe(), e);
    var o = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, m = (
      /** @class */
      (function() {
        function d(t, n, s) {
          this.dom = [], this.root = new f.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (s = n, n = o), typeof t == "object" && (n = t, t = void 0), this.callback = t ?? null, this.options = n ?? o, this.elementCB = s ?? null;
        }
        return d.prototype.onparserinit = function(t) {
          this.parser = t;
        }, d.prototype.onreset = function() {
          this.dom = [], this.root = new f.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, d.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, d.prototype.onerror = function(t) {
          this.handleCallback(t);
        }, d.prototype.onclosetag = function() {
          this.lastNode = null;
          var t = this.tagStack.pop();
          this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t);
        }, d.prototype.onopentag = function(t, n) {
          var s = this.options.xmlMode ? c.ElementType.Tag : void 0, p = new f.Element(t, n, void 0, s);
          this.addNode(p), this.tagStack.push(p);
        }, d.prototype.ontext = function(t) {
          var n = this.lastNode;
          if (n && n.type === c.ElementType.Text)
            n.data += t, this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
          else {
            var s = new f.Text(t);
            this.addNode(s), this.lastNode = s;
          }
        }, d.prototype.oncomment = function(t) {
          if (this.lastNode && this.lastNode.type === c.ElementType.Comment) {
            this.lastNode.data += t;
            return;
          }
          var n = new f.Comment(t);
          this.addNode(n), this.lastNode = n;
        }, d.prototype.oncommentend = function() {
          this.lastNode = null;
        }, d.prototype.oncdatastart = function() {
          var t = new f.Text(""), n = new f.CDATA([t]);
          this.addNode(n), t.parent = n, this.lastNode = t;
        }, d.prototype.oncdataend = function() {
          this.lastNode = null;
        }, d.prototype.onprocessinginstruction = function(t, n) {
          var s = new f.ProcessingInstruction(t, n);
          this.addNode(s);
        }, d.prototype.handleCallback = function(t) {
          if (typeof this.callback == "function")
            this.callback(t, this.dom);
          else if (t)
            throw t;
        }, d.prototype.addNode = function(t) {
          var n = this.tagStack[this.tagStack.length - 1], s = n.children[n.children.length - 1];
          this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), n.children.push(t), s && (t.prev = s, s.next = t), t.parent = n, this.lastNode = null;
        }, d;
      })()
    );
    e.DomHandler = m, e.default = m;
  })(te)), te;
}
var ke = {}, He;
function Tt() {
  return He || (He = 1, (function(e) {
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
    }, {}), e.CARRIAGE_RETURN = "\r", e.CARRIAGE_RETURN_REGEX = new RegExp(e.CARRIAGE_RETURN, "g"), e.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(), "__"), e.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER, "g");
  })(ke)), ke;
}
var ze;
function ft() {
  if (ze) return J;
  ze = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.formatAttributes = c, J.hasOpenTag = o, J.escapeSpecialCharacters = m, J.revertEscapedCharacters = d, J.formatDOM = t;
  var e = /* @__PURE__ */ dt(), a = Tt();
  function i(n) {
    return a.CASE_SENSITIVE_TAG_NAMES_MAP[n];
  }
  function c(n) {
    for (var s = {}, p = 0, v = n.length; p < v; p++) {
      var T = n[p];
      s[T.name] = T.value;
    }
    return s;
  }
  function f(n) {
    n = n.toLowerCase();
    var s = i(n);
    return s || n;
  }
  function o(n, s) {
    var p = "<" + s, v = n.toLowerCase().indexOf(p);
    if (v === -1)
      return !1;
    var T = n[v + p.length];
    return T === ">" || T === " " || T === "	" || T === `
` || T === "\r" || T === "/";
  }
  function m(n) {
    return n.replace(a.CARRIAGE_RETURN_REGEX, a.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function d(n) {
    return n.replace(a.CARRIAGE_RETURN_PLACEHOLDER_REGEX, a.CARRIAGE_RETURN);
  }
  function t(n, s, p) {
    var v, T, w, _;
    s === void 0 && (s = null);
    for (var y = [], N, R = 0, O = n.length; R < O; R++) {
      var x = n[R];
      switch (x.nodeType) {
        case 1: {
          var r = f(x.nodeName);
          N = new e.Element(r, c(x.attributes)), N.children = t(
            // template children are on content
            r === "template" ? x.content.childNodes : x.childNodes,
            N
          );
          break;
        }
        case 3:
          N = new e.Text(d((v = x.nodeValue) !== null && v !== void 0 ? v : ""));
          break;
        case 8:
          N = new e.Comment((T = x.nodeValue) !== null && T !== void 0 ? T : "");
          break;
        default:
          continue;
      }
      var u = (w = y[R - 1]) !== null && w !== void 0 ? w : null;
      u && (u.next = N), N.parent = s, N.prev = u, N.next = null, y.push(N);
    }
    return p && (N = new e.ProcessingInstruction(p.substring(0, p.indexOf(" ")).toLowerCase(), p), N.next = (_ = y[0]) !== null && _ !== void 0 ? _ : null, N.parent = s, y.unshift(N), y[1] && (y[1].prev = y[0])), y;
  }
  return J;
}
var Ge;
function Ct() {
  if (Ge) return Ne;
  Ge = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.default = w;
  var e = ft(), a = "html", i = "head", c = "body", f = /<([a-zA-Z]+[0-9]?)/, o = function(_, y) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, m = function(_, y) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, d = typeof window == "object" && window.DOMParser;
  if (typeof d == "function") {
    var t = new d(), n = "text/html";
    m = function(_, y) {
      return y && (_ = "<".concat(y, ">").concat(_, "</").concat(y, ">")), t.parseFromString(_, n);
    }, o = m;
  }
  if (typeof document == "object" && document.implementation) {
    var s = document.implementation.createHTMLDocument();
    o = function(_, y) {
      if (y) {
        var N = s.documentElement.querySelector(y);
        return N && (N.innerHTML = _), s;
      }
      return s.documentElement.innerHTML = _, s;
    };
  }
  var p = typeof document == "object" && document.createElement("template"), v;
  p && p.content && (v = function(_) {
    return p.innerHTML = _, p.content.childNodes;
  });
  var T = (
    /* istanbul ignore next */
    function() {
      return document.createDocumentFragment().childNodes;
    }
  );
  function w(_) {
    var y, N, R, O, x, r;
    _ = (0, e.escapeSpecialCharacters)(_);
    var u = f.exec(_), h = (y = u?.[1]) === null || y === void 0 ? void 0 : y.toLowerCase();
    switch (h) {
      case a: {
        var g = m(_);
        if (!(0, e.hasOpenTag)(_, i)) {
          var E = g.querySelector(i);
          (N = E?.parentNode) === null || N === void 0 || N.removeChild(E);
        }
        if (!(0, e.hasOpenTag)(_, c)) {
          var E = g.querySelector(c);
          (R = E?.parentNode) === null || R === void 0 || R.removeChild(E);
        }
        return g.querySelectorAll(a);
      }
      case i:
      case c: {
        var S = o(_).querySelectorAll(h);
        return (0, e.hasOpenTag)(_, c) && (0, e.hasOpenTag)(_, i) ? (x = (O = S[0].parentNode) === null || O === void 0 ? void 0 : O.childNodes) !== null && x !== void 0 ? x : T() : S;
      }
      // low-level tag or text
      default: {
        if (v)
          return v(_);
        var E = o(_, c).querySelector(c);
        return (r = E?.childNodes) !== null && r !== void 0 ? r : T();
      }
    }
  }
  return Ne;
}
var qe;
function wt() {
  if (qe) return ie;
  qe = 1;
  var e = ie && ie.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.default = f;
  var a = e(Ct()), i = ft(), c = /<(![a-zA-Z\s]+)>/;
  function f(o) {
    if (typeof o != "string")
      throw new TypeError("First argument must be a string");
    if (!o)
      return [];
    var m = c.exec(o), d = m ? m[1] : void 0;
    return (0, i.formatDOM)((0, a.default)(o), null, d);
  }
  return ie;
}
var _e = {}, X = {}, ge = {}, Be;
function Rt() {
  if (Be) return ge;
  Be = 1;
  var e = 0;
  ge.SAME = e;
  var a = 1;
  return ge.CAMELCASE = a, ge.possibleStandardNames = {
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
  }, ge;
}
var Ve;
function St() {
  if (Ve) return X;
  Ve = 1;
  const e = 0, a = 1, i = 2, c = 3, f = 4, o = 5, m = 6;
  function d(r) {
    return n.hasOwnProperty(r) ? n[r] : null;
  }
  function t(r, u, h, g, E, S, L) {
    this.acceptsBooleans = u === i || u === c || u === f, this.attributeName = g, this.attributeNamespace = E, this.mustUseProperty = h, this.propertyName = r, this.type = u, this.sanitizeURL = S, this.removeEmptyString = L;
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      e,
      !1,
      // mustUseProperty
      r,
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
  ].forEach(([r, u]) => {
    n[r] = new t(
      r,
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
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((r) => {
    n[r] = new t(
      r,
      i,
      !1,
      // mustUseProperty
      r.toLowerCase(),
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      i,
      !1,
      // mustUseProperty
      r,
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      c,
      !1,
      // mustUseProperty
      r.toLowerCase(),
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      c,
      !0,
      // mustUseProperty
      r,
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      f,
      !1,
      // mustUseProperty
      r,
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
  ].forEach((r) => {
    n[r] = new t(
      r,
      m,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((r) => {
    n[r] = new t(
      r,
      o,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const p = /[\-\:]([a-z])/g, v = (r) => r[1].toUpperCase();
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
  ].forEach((r) => {
    const u = r.replace(p, v);
    n[u] = new t(
      u,
      a,
      !1,
      // mustUseProperty
      r,
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
  ].forEach((r) => {
    const u = r.replace(p, v);
    n[u] = new t(
      u,
      a,
      !1,
      // mustUseProperty
      r,
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
  ].forEach((r) => {
    const u = r.replace(p, v);
    n[u] = new t(
      u,
      a,
      !1,
      // mustUseProperty
      r,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((r) => {
    n[r] = new t(
      r,
      a,
      !1,
      // mustUseProperty
      r.toLowerCase(),
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
  n[T] = new t(
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
  ), ["src", "href", "action", "formAction"].forEach((r) => {
    n[r] = new t(
      r,
      a,
      !1,
      // mustUseProperty
      r.toLowerCase(),
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
    CAMELCASE: w,
    SAME: _,
    possibleStandardNames: y
  } = Rt(), R = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", O = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + R + "]*$")
  ), x = Object.keys(
    y
  ).reduce((r, u) => {
    const h = y[u];
    return h === _ ? r[u] = u : h === w ? r[u.toLowerCase()] = u : r[u] = h, r;
  }, {});
  return X.BOOLEAN = c, X.BOOLEANISH_STRING = i, X.NUMERIC = o, X.OVERLOADED_BOOLEAN = f, X.POSITIVE_NUMERIC = m, X.RESERVED = e, X.STRING = a, X.getPropertyInfo = d, X.isCustomAttribute = O, X.possibleStandardNames = x, X;
}
var ve = {}, se = {}, xe, Ue;
function Ot() {
  if (Ue) return xe;
  Ue = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, f = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, m = /^[;\s]*/, d = /^\s+|\s+$/g, t = `
`, n = "/", s = "*", p = "", v = "comment", T = "declaration";
  function w(y, N) {
    if (typeof y != "string")
      throw new TypeError("First argument must be a string");
    if (!y) return [];
    N = N || {};
    var R = 1, O = 1;
    function x(A) {
      var D = A.match(a);
      D && (R += D.length);
      var G = A.lastIndexOf(t);
      O = ~G ? A.length - G : O + A.length;
    }
    function r() {
      var A = { line: R, column: O };
      return function(D) {
        return D.position = new u(A), E(), D;
      };
    }
    function u(A) {
      this.start = A, this.end = { line: R, column: O }, this.source = N.source;
    }
    u.prototype.content = y;
    function h(A) {
      var D = new Error(
        N.source + ":" + R + ":" + O + ": " + A
      );
      if (D.reason = A, D.filename = N.source, D.line = R, D.column = O, D.source = y, !N.silent) throw D;
    }
    function g(A) {
      var D = A.exec(y);
      if (D) {
        var G = D[0];
        return x(G), y = y.slice(G.length), D;
      }
    }
    function E() {
      g(i);
    }
    function S(A) {
      var D;
      for (A = A || []; D = L(); )
        D !== !1 && A.push(D);
      return A;
    }
    function L() {
      var A = r();
      if (!(n != y.charAt(0) || s != y.charAt(1))) {
        for (var D = 2; p != y.charAt(D) && (s != y.charAt(D) || n != y.charAt(D + 1)); )
          ++D;
        if (D += 2, p === y.charAt(D - 1))
          return h("End of comment missing");
        var G = y.slice(2, D - 2);
        return O += 2, x(G), y = y.slice(D), O += 2, A({
          type: v,
          comment: G
        });
      }
    }
    function $() {
      var A = r(), D = g(c);
      if (D) {
        if (L(), !g(f)) return h("property missing ':'");
        var G = g(o), U = A({
          type: T,
          property: _(D[0].replace(e, p)),
          value: G ? _(G[0].replace(e, p)) : p
        });
        return g(m), U;
      }
    }
    function z() {
      var A = [];
      S(A);
      for (var D; D = $(); )
        D !== !1 && (A.push(D), S(A));
      return A;
    }
    return E(), z();
  }
  function _(y) {
    return y ? y.replace(d, p) : p;
  }
  return xe = w, xe;
}
var Xe;
function kt() {
  if (Xe) return se;
  Xe = 1;
  var e = se && se.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(se, "__esModule", { value: !0 }), se.default = i;
  const a = e(Ot());
  function i(c, f) {
    let o = null;
    if (!c || typeof c != "string")
      return o;
    const m = (0, a.default)(c), d = typeof f == "function";
    return m.forEach((t) => {
      if (t.type !== "declaration")
        return;
      const { property: n, value: s } = t;
      d ? f(n, s, t) : s && (o = o || {}, o[n] = s);
    }), o;
  }
  return se;
}
var ye = {}, We;
function xt() {
  if (We) return ye;
  We = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, f = /^-(ms)-/, o = function(n) {
    return !n || i.test(n) || e.test(n);
  }, m = function(n, s) {
    return s.toUpperCase();
  }, d = function(n, s) {
    return "".concat(s, "-");
  }, t = function(n, s) {
    return s === void 0 && (s = {}), o(n) ? n : (n = n.toLowerCase(), s.reactCompat ? n = n.replace(f, d) : n = n.replace(c, d), n.replace(a, m));
  };
  return ye.camelCase = t, ye;
}
var Ee, Ye;
function At() {
  if (Ye) return Ee;
  Ye = 1;
  var e = Ee && Ee.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  }, a = e(kt()), i = xt();
  function c(f, o) {
    var m = {};
    return !f || typeof f != "string" || (0, a.default)(f, function(d, t) {
      d && t && (m[(0, i.camelCase)(d, o)] = t);
    }), m;
  }
  return c.default = c, Ee = c, Ee;
}
var Ze;
function ht() {
  return Ze || (Ze = 1, (function(e) {
    var a = ve && ve.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = o, e.setStyleProp = d;
    var i = lt, c = a(At()), f = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function o(s, p) {
      return s.includes("-") ? !f.has(s) : !!(p && typeof p.is == "string");
    }
    var m = {
      reactCompat: !0
    };
    function d(s, p) {
      if (typeof s == "string") {
        if (!s.trim()) {
          p.style = {};
          return;
        }
        try {
          p.style = (0, c.default)(s, m);
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
    var t = function(s) {
      return !e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(s.name);
    };
    e.canTextBeChildOfNode = t;
    var n = function(s) {
      return s;
    };
    e.returnFirstArg = n;
  })(ve)), ve;
}
var Ke;
function pt() {
  if (Ke) return _e;
  Ke = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.default = o;
  var e = St(), a = ht(), i = ["checked", "value"], c = ["input", "select", "textarea"], f = {
    reset: !0,
    submit: !0
  };
  function o(d, t) {
    d === void 0 && (d = {});
    var n = {}, s = !!(d.type && f[d.type]);
    for (var p in d) {
      var v = d[p];
      if ((0, e.isCustomAttribute)(p)) {
        n[p] = v;
        continue;
      }
      var T = p.toLowerCase(), w = m(T);
      if (w) {
        var _ = (0, e.getPropertyInfo)(w);
        switch (i.includes(w) && c.includes(t) && !s && (w = m("default" + T)), n[w] = v, _?.type) {
          case e.BOOLEAN:
            n[w] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            v === "" && (n[w] = !0);
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
  return _e;
}
var oe = {}, Je;
function Dt() {
  if (Je) return oe;
  Je = 1;
  var e = oe && oe.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(oe, "__esModule", { value: !0 }), oe.default = o;
  var a = lt, i = e(pt()), c = ht(), f = {
    cloneElement: a.cloneElement,
    createElement: a.createElement,
    isValidElement: a.isValidElement
  };
  function o(d, t) {
    var n, s, p, v, T;
    t === void 0 && (t = {});
    for (var w = [], _ = typeof t.replace == "function", y = (n = t.transform) !== null && n !== void 0 ? n : c.returnFirstArg, N = (s = t.library) !== null && s !== void 0 ? s : f, R = N.cloneElement, O = N.createElement, x = N.isValidElement, r = d.length, u = 0; u < r; u++) {
      var h = d[u];
      if (_) {
        var g = (p = t.replace) === null || p === void 0 ? void 0 : p.call(t, h, u);
        if (x(g)) {
          r > 1 && (g = R(g, {
            key: (v = g.key) !== null && v !== void 0 ? v : u
          })), w.push(y(g, h, u));
          continue;
        }
      }
      if (h.type === "text") {
        var E = !h.data.trim().length;
        if (E && h.parent && !(0, c.canTextBeChildOfNode)(h.parent) || t.trim && E)
          continue;
        w.push(y(h.data, h, u));
        continue;
      }
      var S = h, L = {};
      m(S) ? ((0, c.setStyleProp)(S.attribs.style, S.attribs), L = S.attribs) : S.attribs && (L = (0, i.default)(S.attribs, S.name));
      var $ = void 0;
      switch (h.type) {
        case "script":
        case "style":
          h.children[0] && (L.dangerouslySetInnerHTML = {
            __html: h.children[0].data
          });
          break;
        case "tag":
          h.name === "textarea" && h.children[0] ? L.defaultValue = h.children[0].data : !((T = h.children) === null || T === void 0) && T.length && ($ = o(h.children, t));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      r > 1 && (L.key = u), w.push(y(O(h.name, L, $), h, u));
    }
    return w.length === 1 ? w[0] : w;
  }
  function m(d) {
    return c.PRESERVE_CUSTOM_ATTRIBUTES && d.type === "tag" && (0, c.isCustomComponent)(d.name, d.attribs);
  }
  return oe;
}
var Qe;
function Pt() {
  return Qe || (Qe = 1, (function(e) {
    var a = me && me.__importDefault || function(t) {
      return t && t.__esModule ? t : { default: t };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = d;
    var i = a(wt());
    e.htmlToDOM = i.default;
    var c = a(pt());
    e.attributesToProps = c.default;
    var f = a(Dt());
    e.domToReact = f.default;
    var o = /* @__PURE__ */ dt();
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
    function d(t, n) {
      var s;
      if (typeof t != "string")
        throw new TypeError("First argument must be a string");
      return t ? (0, f.default)((0, i.default)(t, (s = n?.htmlparser2) !== null && s !== void 0 ? s : m), n) : [];
    }
  })(me)), me;
}
var Lt = Pt();
const et = /* @__PURE__ */ ct(Lt), tt = et.default || et, Mt = {}, nt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, re = () => {
  console.log("A function wasn't passed as a props when it needed to be.");
}, C = (e) => e == null || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0, Q = () => {
  const e = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  return new Date((/* @__PURE__ */ new Date()).getTime() - e).toISOString().slice(0, 19).replace("T", " ");
}, Y = (e) => {
  let a = !1;
  return Array.isArray(e) && e.length > 0 && (a = !0), a;
}, ue = (e) => {
  let a = !0;
  return Array.isArray(e) && e.length > 0 && (a = !1), a;
}, It = (e) => {
  let a = {};
  return Y(e) && !C(e[0]) && (a = e[0]), a;
}, de = (e) => {
  let a = e;
  return C(e) || (a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&#039;")), a;
}, B = (e) => e === null || e === void 0 ? "" : e === "NaN" || isNaN(e) && typeof e == "number" || isNaN(e) && e === "" || e === "" ? null : e, ne = (e) => {
  let a = "";
  return C(e) || (a = Re(e).trim()), a;
}, Re = (e) => {
  let a = "";
  return C(e) || (a = e.toString()), a;
}, rt = (e, a, i, c, f) => {
  let o = "Add log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    const m = "Add Log", d = `${e}logs/`;
    let t, n = "";
    fetch(d, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: f })
    }).then((s) => {
      if (t = s, t.status === 200) return t.json();
      ce(e, a, i, c, {
        operation: `${m} SQL Server`,
        transactionData: {
          url: d,
          response: {
            ok: t.ok,
            redirected: t.redirected,
            status: t.status,
            statusText: t.statusText,
            type: t.type,
            url: t.url
          },
          data: n,
          logObject: f
        },
        errorData: { message: `${t.status} ${t.statusText} ${t.url}` },
        dateEntered: Q()
      }), o = `${m}: ${t.status} ${t.statusText} ${t.url}`;
    }).then((s) => {
      n = s, o = s;
    }).catch((s) => {
      ce(e, a, i, c, {
        operation: m,
        transactionData: {
          url: d,
          response: {
            ok: t.ok,
            redirected: t.redirected,
            status: t.status,
            statusText: t.statusText,
            type: t.type,
            url: t.url
          },
          data: n,
          logObject: f
        },
        errorData: {
          name: s.name,
          message: s.message,
          stack: s.stack
        },
        dateEntered: Q()
      }), o = `${m}: ${de(s.name)}: ${de(s.message)}`;
    });
  }
  return o;
}, ce = (e, a, i, c, f) => {
  let o = "Add error log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    const m = "Add Error Log", d = `${e}errorLogs/`;
    let t;
    fetch(d, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: f })
    }).then((n) => {
      if (t = n, t.status === 200) return t.json();
      o = `${m}: ${t.status} ${t.statusText} ${t.url}`;
    }).then((n) => {
      o = n;
    }).catch((n) => {
      o = `${m}: ${de(n.name)}: ${de(n.message)}`;
    });
  }
  return o;
}, q = (e, a) => {
  let i = e;
  return C(e) || (C(a) ? i = tt(e) : i = tt(e, a)), i;
}, at = () => ({
  appCodeName: navigator.appCodeName,
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  cookieEnabled: navigator.cookieEnabled,
  language: navigator.language,
  onLine: navigator.onLine,
  platform: navigator.platform,
  product: navigator.product,
  userAgent: navigator.userAgent
}), mt = () => {
  let e = "";
  try {
    typeof import.meta < "u" && (e = "production");
  } catch {
  }
  return e === "development";
}, jt = () => window?.electronEnvironment?.inElectron ?? !1, Ft = () => !!(mt() || jt() || window.location.href.includes("orbiseducation.com")), le = () => {
  const e = Mt?.VITE_ALLOW_DEVELOPMENT_COMPUTERLOG;
  return !!(Ft() && (!mt() || e === "True"));
}, Te = ({
  alertType: e = "",
  message: a = "",
  includeResetButton: i = !1,
  setMessage: c
}) => {
  const f = F("alert", {
    "alert-success": e === "success",
    "alert-warning": e === "warning",
    "alert-info": e === "info",
    "alert-danger": e === "error"
  });
  return /* @__PURE__ */ l("div", { className: "alert-container", children: /* @__PURE__ */ b("div", { className: f, children: [
    /* @__PURE__ */ l("div", { className: "alert__message-text", children: q(a) }),
    i ? /* @__PURE__ */ l("button", { type: "button", className: "refresh", onClick: () => window.location.reload(), children: "Refresh" }) : null,
    /* @__PURE__ */ l("button", { type: "button", className: "alert__close-button", onClick: () => c(""), children: /* @__PURE__ */ l("i", { className: "fas fa-close" }) })
  ] }) });
}, Ut = ({
  informationMessage: e = "",
  successMessage: a = "",
  warningMessage: i = "",
  errorMessage: c = "",
  informationMessageVisible: f = !1,
  successMessageVisible: o = !1,
  warningMessageVisible: m = !1,
  errorMessageVisible: d = !1,
  addInformationMessage: t = re,
  addSuccessMessage: n = re,
  addWarningMessage: s = re,
  addErrorMessage: p = re
}) => (V(() => {
  C(a) || setTimeout(() => {
    n("");
  }, 5e3);
}, [a]), /* @__PURE__ */ b("div", { className: "alert-messages-container", children: [
  f ? /* @__PURE__ */ l(
    Te,
    {
      message: e,
      setMessage: (y) => {
        t(y);
      },
      alertType: "info"
    }
  ) : null,
  o ? /* @__PURE__ */ l(
    Te,
    {
      message: a,
      setMessage: (y) => {
        n(y);
      },
      alertType: "success"
    }
  ) : null,
  m ? /* @__PURE__ */ l(
    Te,
    {
      message: i,
      setMessage: (y) => {
        s(y);
      },
      alertType: "warning"
    }
  ) : null,
  d ? /* @__PURE__ */ l(Te, { message: c, setMessage: (y) => {
    p(y);
  }, alertType: "error" }) : null
] })), Xt = ({
  urlToCopy: e,
  label: a = "Copy URL",
  disabled: i,
  buttonType: c = "default",
  tooltipStyle: f = ""
}) => {
  const [o, m] = M(!1), d = F("btn", {
    "btn-success": o,
    "btn-light-gray": !o
  }), t = F("btn btn-transparent tooltip-container", {
    "tooltip-right": f === "right",
    "tooltip-left": f === "left",
    "tooltip-down": f === "down"
  }), n = (s) => {
    s.stopPropagation(), C(e) || (navigator.clipboard.writeText(e), m(!0), setTimeout(() => {
      m(!1);
    }, 2e3));
  };
  return /* @__PURE__ */ l(I, { children: c === "icon" ? /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      className: t,
      "data-tooltip": o ? "Copied" : a,
      onClick: n,
      disabled: i,
      children: o ? /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ l("i", { className: "fa fa-check green-text" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Copied" })
      ] }) : /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ l("i", { className: "fa fa-copy" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: a })
      ] })
    }
  ) : /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      className: d,
      onClick: n,
      disabled: i,
      children: o ? /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ l("i", { className: "fas fa-check" }),
        " Copied"
      ] }) : a
    }
  ) });
}, Wt = ({ children: e = "No search results." }) => /* @__PURE__ */ b("span", { className: "text-center no-results-message", children: [
  /* @__PURE__ */ l("i", { className: "fa fa-exclamation-triangle red-text" }),
  " ",
  e
] }), $t = ({ classes: e = "orbis-logo", width: a = "100%" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: e,
    width: a,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1624.91 556.67",
    children: [
      /* @__PURE__ */ l(
        "path",
        {
          fill: "#2e3192",
          d: "M1606.78 424.92v-14.83c-.14-16.25-.4-32.51-.42-48.77 0-5-1.86-7.74-7-7.89-2.21-.06-5 .27-4-4h29.1c1 2.34.7 4.05-2.34 3.91-7.27-.35-8.38 3.84-8.47 10-.39 25.42-.58 50.84.1 76.25v4.43c-7-.34-12.37-2-16.83-7.67-16.65-21.28-33.79-42.18-50.76-63.21-1.81-2.24-3.75-4.37-5.53-6.45-1.89.82-1.53 2.12-1.52 3.15.09 19.92.38 39.85.27 59.77 0 5.41 1.73 8.16 7.28 8.29 2.2.05 5 0 3.53 4.13h-29c-1.56-4.46 1.88-4.24 4.09-4.26 5.14 0 6.73-2.79 6.75-7.37q.21-34.69.52-69.39c0-5.37-3.17-7.15-7.82-7.52-2.52-.2-5.44 0-3.7-4.53 6.69 0 13.54.15 20.37-.06 3.56-.11 4.59 2.63 6.2 4.68q24.93 31.51 49.77 63.1c2.37 3 5 5.8 7.51 8.7zm-873.59 17.71c10.38-14.69 5.51-30.38 6.41-45.23.72-11.84-.34-23.78-.13-35.68.1-5.45-1.86-8.14-7.26-8.36-2-.08-4.43.28-3.88-3.53.22-1.07 1.43-1 2.55-1 16 0 32-.15 48-.07 26.83.13 44.5 15 46.21 38.68C827 413.31 809.23 437 785 441.21c-16.86 2.94-33.79-.12-51.81 1.42zm19.75-7.29c19.62 1.33 38.58 3.56 50.9-15.17 10-15.27 9.65-40.46-1.21-53.08-13.51-15.7-31.58-13.11-49.58-11.32-1.45 26.76-.57 52.73-.11 79.57zm686.06 9.03c-28.53-.08-47.2-19.2-47.25-48.38 0-29.54 20.67-49.28 51.56-49.12 29.94.15 48.56 17.79 48.43 45.88-.15 30.89-21.42 51.7-52.74 51.62zm-33.11-53.63c.21 13 2.72 24.72 10.59 34.66 8.47 10.68 19.75 14.25 33 12.2 13.42-2.08 21.62-10.16 25.46-22.86a59.69 59.69 0 00-1.39-39.69c-6.18-16-20-23.75-38.46-21.94-15.13 1.48-25.42 11.51-28.43 28a85 85 0 00-.79 9.63zM698.1 419.25c-.57 7.75-1.1 15-1.67 22.76h-64.38c0-.67-.41-2.08-.09-2.26 6.52-3.61 5.36-9.81 5.39-15.59.1-20.15.06-40.3.29-60.45.07-5.94-.76-10.63-8.2-10.35-2.94.11-3.52-1.39-2.65-4.24h67.5c-.64 6.07-1.32 12.05-1.9 18-.15 1.55-.5 2.64-2.34 2.6s-1.79-1.42-2.08-2.79c-2.28-10.57-2.31-10.57-13.66-11.78-7.51-.81-15-1.15-22.91.67v34.77a88.64 88.64 0 0024.51 0c4.35-.52 3.85-3.71 4.21-6.6.24-1.86-.5-4.71 2.79-4.34 2.6.29 1.91 2.74 1.92 4.43.07 7.31 0 14.62 0 21.92 0 1.77.41 4.05-2.34 4.07s-2.55-2.31-2.47-4c.29-6.69-3.46-8.76-9.39-8.7-6.35.07-12.7 0-19.37 0-1.32 12.92-.93 25.19-.2 38.32 11.62.2 23.14.63 34.7-.63 5.71-.63 5.24-5.36 6.59-9 .96-2.64-.35-6.99 5.75-6.81zm157.26-69.96h38.56c1 4.23-1.67 4.15-4 4-7-.44-9 3.32-9 9.68.17 16.25-.11 32.51.11 48.76.21 15.71 6 21.92 21.64 23.64a44.33 44.33 0 0015-.91c11.57-2.67 17-7.86 17.77-19.49 1.24-18.51.59-37.07.29-55.62-.08-5.09-3.55-5.73-7.45-6-2.26-.17-5.48.87-4.81-4.5h29.73c1.27 0 2.25.4 2.43 1.81.23 1.75-.84 2.24-2.35 2.65-10.56 2.84-10.49 2.87-10.59 14.17-.14 16 .3 32.09-.78 48.05-1.09 16.31-9.3 24.92-25.31 27.74-10.63 1.87-21.42 1.9-31.85-1.94s-16.1-11-16.3-22.15c-.33-19-.69-38-.66-57 0-6.06-2.14-9-8.26-8.86-2.47.05-5.47.4-4.17-4.03zm308.58 92.9c1.76-7.62 8.87-2.76 12.21-7.11-1.71-7.39-5.61-14.61-8.47-22.18-.83-2.21-3-1.79-4.74-1.79h-29.53a3.85 3.85 0 01-.68 0c-3.84-.56-4.57 2.48-5.38 5-2.14 6.56-7.54 12.25-6.18 19.66.41 2.24 4 1.55 6.22 1.75 3.09.29 4.87 1.08 3.36 4.69h-29.42c-1.18-2.66-.86-4.56 2.47-4.51 5.46.08 7.37-3.77 9.16-7.83 11.26-25.48 22.46-51 33.82-76.4 1-2.22.77-5.88 4.72-5.8s3.64 3.65 4.61 5.91c10.52 24.3 20.84 48.69 31.38 73 2.19 5.06 3.53 11.14 11.09 11.38 2.05.07 1.54 2.37 1.09 4.27zm-32.09-37.14h32.41l-16-38.63zm-60.61-51.9c-.74 5.61-1.39 10.56-2 15.52-.23 1.74.1 4-2.7 3.81-2.11-.12-2.71-1.74-2.46-3.41 1.6-10.66-6.51-12.51-13.65-14.33-15.35-3.91-30.17-2.28-41 10.27-12.26 14.25-12.48 31.22-5.6 47.81 6.62 15.94 20.16 23 37 24.15 10.91.75 21.13-1.88 31.48-8-.61 4.46-1.06 7.52-4.41 9.12-19.73 9.44-53.84 10.25-71.68-10.92-12.38-14.69-14.1-31.59-8.06-49 6.31-18.21 20.8-27.32 39.15-30.31a78.32 78.32 0 0143.93 5.29zm224.3-3.92v18.58c0 1.45-.39 2.78-2.2 2.86-2.19.1-2.33-1.41-2.7-3.13-2.53-11.91-2.57-11.9-15-11.9h-11.16c-1.74 13.5-.84 26.52-1 39.5-.12 11.23.07 22.47 0 33.7 0 5.63 1.84 9.22 8.32 8.88 2.37-.12 5.37-.07 4.54 4.78h-36.06c-1.25 0-2.29-.33-2.46-1.75-.28-2.18 1.28-3.07 2.92-2.92 10.11.93 10.13-5.76 10.08-12.84-.15-21.55-.17-43.09-.27-64.64 0-1.32-.23-2.64-.38-4.24-7.36-.88-14.41-.49-21.44-.19-4.29.18-3.63 3.7-4.6 6.41s1.52 7.83-4.87 8.5c-.34-7.23-.67-14.2-1-21.6zm28.76-.03h38.64c1 3.95-1.29 4.27-3.75 4.1-6.42-.43-9.14 2.63-9.13 8.88q.11 33.35 0 66.7c0 5.66 2 9.15 8.41 8.86 2.29-.1 5.51-.21 4.49 4.35h-38.67c-1.08-4.9 2.56-4.42 5-4.38 5.68.1 7.8-2.93 7.79-8 0-22.69-.18-45.37-.11-68.06 0-5.81-2.6-8.32-8.21-8.29-2.44-.01-5.47.46-4.46-4.16z",
          id: "prefix__Education"
        }
      ),
      /* @__PURE__ */ l("path", { fill: "#02a04e", d: "M630.82 316.18h993.59v5.62H630.82z", id: "prefix__Line" }),
      /* @__PURE__ */ l(
        "path",
        {
          fill: "#2e3192",
          d: "M976.61 203.58c19.75 25.55 37.8 51.19 57.66 75.46a15.18 15.18 0 0010.44 6c6.83.71 6.86.91 4.87 8.38a177 177 0 00-31.39.13c-3.93.43-5-2.83-6.68-5-16.89-21.68-32-44.72-49.49-65.94-5-6-10-11.94-15-17.94-1.25-1.51-3.16-2.77-2.07-5.32 1.16-2.73 3.42-1.77 5.31-1.68 9.94.46 19.7-.3 29-4.12a37.07 37.07 0 0020.3-47.93c-4.73-11.69-14.51-16.76-26-18.95-10.92-2.07-21.87-1.09-32.74 1.2-4.4.92-5 3.67-5.19 7.45-1.47 23.35-1 46.72-.93 70.09 0 22.22-.67 44.45.65 66.66.62 10.48 1.84 11.6 12.1 12.65 3.65.37 7.29.72 11.06 1.09 1.54 2.26.94 4.69.25 8.1a568.35 568.35 0 00-71.26.21c-2.63-2.64-2-5.09-1.43-8.16 4.82-.5 9.73-1.15 14.67-1.51 5.79-.42 8.72-3.41 9-9.15 0-.92.16-1.83.18-2.75.7-45.37.8-90.74-.13-136.11-.19-9.12-2.29-10.95-11.63-11.59-2.06-.14-4.12-.13-6.18-.25-6.73-.4-6.91-.67-5.57-8 7 0 14-.23 21.06 0 24.28.93 48.52-1.28 72.79-.73a133 133 0 0114.33 1.45c34.41 4.56 42.71 42.51 22.2 66.1-10.37 11.89-24.24 16.75-40.18 20.16zm238.88-10.3c3.82.61 7.44 1.15 11 1.75 27.54 4.58 41.17 25.23 34.7 52.54-5.41 22.78-28.14 41.82-53.43 45.11-11.21 1.46-22.39 1.23-33.59.63a256.21 256.21 0 00-40.83.6c-2.05-4.27-1.17-6.93 2.68-8.09 5.38-1.62 6.45-5.56 6.7-10.52 1.91-38.45 1.47-76.91 1.16-115.38 0-6.87 0-13.74-.24-20.61-.39-12.71-1.54-14-14.37-14.54-5.85-.23-8.82-1.77-6.51-8.23 6.34 0 12.67-.19 19 0 21.53.73 43-1 64.51-1.17a87.46 87.46 0 0119.76 2c24.76 5.52 35.37 30.08 22.7 52.13-6 10.51-15.35 16.68-26.38 20.77-2.25.9-4.87.97-6.86 3.01zm-47 7v63.5c0 18.71 0 18.71 18.78 19.1 32.32.67 49.94-16.59 48.27-48-.69-13.22-5.56-24.83-18.88-30.16-15.41-6.14-31.66-5.32-48.16-4.4zm-.25-10.94c14.75.28 29 1.83 42.45-4.08 13-5.72 17.45-16.93 17.7-30.07.25-12.91-6-22.16-17.46-26-13.54-4.55-27.34-3.86-41.27-1.06-2.08 20.39-1.15 40.32-1.41 61.25zm-462.55-77.11c35.25.22 59.55 6.23 79 25.66 19 18.94 24.46 42.65 22.74 68.15C802.58 278.55 727 320.57 662.32 287c-24.66-12.82-37.62-34.44-42.26-60.94-6.77-38.73 1.93-72.51 35.37-96.62 17.5-12.64 37.57-17.44 50.26-17.21zm74.68 95.49c0-4.12.37-8.28-.06-12.35-4.41-41.51-25.3-73.14-74.78-72-27.38.62-49.59 16.73-57 43.12-8.3 29.5-5.1 58.17 9.35 85.14 9.93 18.54 25.39 30.53 46.72 33.4 28.81 3.87 59.09-6 70.65-41.53 3.75-11.67 5.82-23.5 5.12-35.78zm828.77-50c-1.13.1-2.22.28-3.32.28-1.36 0-2.71-.13-4.66-.24-.27-4.9-.84-9.63-.69-14.34a11.68 11.68 0 00-5.62-10.94c-13.55-9-28.17-11.88-43.85-7.15a34.69 34.69 0 00-23.36 41.23c2.84 11.49 11 17.72 22.14 19.95s22.56 3.8 33.83 5.8c18 3.2 34 9.56 38.93 29.51 5.21 21-.19 39.48-16.08 54.42-21.53 20.23-47.65 23.65-75.55 19.82a94.91 94.91 0 01-23.12-6.25c-2.52-1-4.26-2.15-4-5.41a326.32 326.32 0 001.46-34.73c2.79-1.67 5.22-1.1 8.32-.66.4 4.67 1.09 9.38 1.14 14.09.07 6.13 2.65 10.6 7.9 13.48 19.48 10.68 39.62 12.64 59.81 2.69 16-7.88 23.66-27.59 18.51-44.6-3.26-10.79-11.16-16.6-21.55-19-11.34-2.64-22.87-4.52-34.31-6.76-24.5-4.79-37.6-17.1-39.73-37.31-2.55-24.23 9.26-45.6 31.15-54.18 24.91-9.77 49.42-5.66 73.46 4.09 2.26.92 3.11 2.25 2.81 4.72-1.26 10.37-2.4 20.77-3.62 31.49zm-186.96 128.11a10.84 10.84 0 01-.5 8.1c-23.81-1.59-48-1.25-71.83 0-2-2.9-1.49-5.28-.83-8.05 4.06-.43 8.1-.88 12.15-1.28 9.69-1 11.31-2.43 11.79-12.29.42-8.46.47-16.94.45-25.41-.08-35.52-.12-71-.45-106.54-.14-13.92-1.66-15.11-15.49-15.79-2.72-.13-5.43-.45-8-.66-1.63-2.44-1-4.68-.71-8 24.32.73 48.64 1.14 72.76-.2 1.76 2.88 1.3 5.26.67 7.65-3.6 1.39-7.31 1.07-10.94 1.29-10.78.64-12.62 2.22-13.08 13.19-.43 10.3-.44 20.61-.43 30.92q0 49.15.22 98.3c0 2.29.19 4.58.26 6.86.22 6.85 3.49 10.49 10.59 10.66 4.36.14 8.67.8 13.37 1.25z",
          id: "prefix__Orbis"
        }
      ),
      /* @__PURE__ */ b("g", { id: "prefix__Layer_6", "data-name": "Layer 6", children: [
        /* @__PURE__ */ l(
          "path",
          {
            fill: "#2e3192",
            d: "M525.46 150.48a279 279 0 00-30.17-46.32C368.48 118.08 239.74 83.72 196.2 12.31a277.63 277.63 0 00-91.52 48.52C225 135.9 368.16 159.12 525.46 150.48z"
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            fill: "#02a04e",
            d: "M551.87 227.49A275.59 275.59 0 00536.31 174c-182.93 35.69-346.18 18.14-492.11-46.2a277 277 0 00-31.93 68.32c183.88 61.78 363.04 63.25 539.6 31.37z"
          }
        ),
        /* @__PURE__ */ l(
          "path",
          {
            fill: "#2e3192",
            d: "M477.88 84.48A277.42 277.42 0 00278.25 0c-5.15 0-10.25.17-15.36.44 31.67 51.22 136.16 84.63 214.99 84.04zM0 281.64c1.77 152.19 125.64 275 278.25 275 153.72 0 278.34-124.62 278.34-278.34a279.74 279.74 0 00-3-40.57C379.36 303 194.09 314 0 281.64z"
          }
        )
      ] })
    ]
  }
), ee = () => /* @__PURE__ */ b("span", { className: "required", children: [
  " ",
  "* ",
  /* @__PURE__ */ l("span", { className: "sr-only", children: "required" })
] }), Ce = ({
  id: e = "",
  label: a = "",
  value: i,
  autoComplete: c,
  autoFocus: f = !1,
  disabled: o = !1,
  hint: m = "",
  inlineError: d = "",
  isRequired: t = !1,
  list: n = "",
  max: s = null,
  maxLength: p = null,
  min: v = null,
  placeholder: T = "",
  rows: w = 10,
  step: _ = null,
  srOnly: y = !1,
  type: N = "text",
  useInputAddon: R = !1,
  onKeyDown: O = () => {
  },
  // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  updateValue: x = (r) => {
  }
}) => {
  const [r, u] = M("password"), h = F("", {
    "sr-only": y,
    "input-addon": R
  }), g = F("form-group", {
    "with-addon": R,
    "input-error": !C(d),
    "input-disabled": o
  }), E = {};
  v != null && (E.min = v), s != null && (E.max = s), _ != null && (E.step = _), p != null && (E.maxLength = p);
  const S = (L) => {
    const $ = L.target.value;
    if (N === "number") {
      const A = $ === "" ? "" : Number($);
      x(Number.isNaN(A) ? $ : A);
      return;
    }
    let z = $;
    p != null && z.length > p && (z = z.slice(0, p)), x(z);
  };
  return /* @__PURE__ */ b("div", { className: g, children: [
    /* @__PURE__ */ b("label", { htmlFor: e, className: h, children: [
      a,
      t ? /* @__PURE__ */ l(ee, {}) : null
    ] }),
    C(m) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(m) }),
    N === "textarea" ? /* @__PURE__ */ l(
      "textarea",
      {
        id: e,
        autoComplete: c,
        name: e,
        placeholder: T,
        rows: w,
        value: i == null ? "" : String(i),
        disabled: o,
        onChange: S,
        onKeyDown: O
      }
    ) : null,
    N === "color" ? /* @__PURE__ */ b("div", { className: "color-input-container", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: N,
          id: e,
          autoComplete: c,
          placeholder: T,
          value: i,
          disabled: o,
          onChange: S,
          autoFocus: f
        }
      ),
      i
    ] }) : null,
    N === "password" ? /* @__PURE__ */ b("div", { className: "form-group__password-input-group", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: r,
          id: e,
          autoComplete: c,
          placeholder: T,
          value: i,
          disabled: o,
          onChange: S,
          autoFocus: f
        }
      ),
      /* @__PURE__ */ b(
        "div",
        {
          className: "form-group__password-input-group__password-addon",
          onMouseOver: () => u("text"),
          onMouseOut: () => u("password"),
          title: "Hover to show password.",
          children: [
            /* @__PURE__ */ l("i", { className: "fas fa-eye" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Hover to show password." })
          ]
        }
      )
    ] }) : null,
    N !== "textarea" && N !== "toggle" && N !== "password" && N !== "color" ? /* @__PURE__ */ l(
      "input",
      {
        type: N,
        id: e,
        autoComplete: c,
        placeholder: T,
        value: i,
        disabled: o,
        onChange: S,
        list: n,
        autoFocus: f,
        ...E
      }
    ) : null,
    C(d) ? null : /* @__PURE__ */ l("div", { className: "inline-alert inline-alert-danger", children: q(d) })
  ] });
}, it = () => {
}, Ht = (e, a, i) => "", st = (e) => {
}, zt = (e) => {
}, ot = (e) => {
}, Yt = ({
  applicationVersion: e = "",
  baseURL: a = "",
  computerLog: i = {},
  userIdentifier: c = "",
  demonstrationMode: f = !1,
  environmentMode: o = "",
  databaseAvailable: m = !0,
  sessionToken: d = null,
  loggedInUser: t = null,
  disabled: n = !1,
  sessionTokenName: s = "",
  handleNavigation: p = it,
  setFetchAuthorization: v = Ht,
  setDatabaseAvailable: T = st,
  setUserTokenExpired: w = st,
  setLoggedInUser: _ = zt,
  addSuccessMessage: y = ot,
  addErrorMessage: N = ot,
  clearMessages: R = it
}) => {
  const [O, x] = M(null), [r, u] = M(null), [h, g] = M(""), [E, S] = M(""), [L, $] = M(""), [z, A] = M(""), [D, G] = M(""), [U, fe] = M({});
  V(() => {
    const be = localStorage.getItem(s);
    (C(be) || C(t)) && (rt(
      a,
      v("", o, f),
      m,
      le(),
      {
        operation: "Attempted Page Visit",
        userIdentifier: c,
        href: window.location.href,
        applicationVersion: e,
        browserData: JSON.stringify(at()),
        transactionData: { loggedInUser: t, computerLog: i },
        dateEntered: Q()
      }
    ), p());
  }, [t]);
  const Pe = () => {
    if (t) {
      x(t), u(t.userID ?? null), g(t.username ?? ""), S(t.firstName ?? ""), $(t.lastName ?? ""), A(t.email ?? ""), G("");
      return;
    }
    x(null), u(null), g(""), S(""), $(""), A(""), G("");
  };
  V(() => {
    Pe();
  }, [t]), V(() => {
    C(U) || (!C(U.txtFirstName) && !C(E) && fe({
      ...U,
      txtFirstName: ""
    }), !C(U.txtLastName) && !C(L) && fe({
      ...U,
      txtLastName: ""
    }), !C(U.txtEmail) && !C(z) && !C(z.match(nt)) && fe({
      ...U,
      txtEmail: ""
    }));
  }, [E, L, z, U]);
  const yt = () => {
    R();
    const be = "Save Record";
    let K = !1, P = "", H = "", j = {};
    C(ne(E)) && (j = {
      ...j,
      txtFirstName: "Please enter the <strong>First Name</strong>."
    }), C(ne(L)) && (j = {
      ...j,
      txtLastName: "Please enter the <strong>Last Name</strong>."
    }), C(ne(z)) ? j = {
      ...j,
      txtEmail: "Please enter the <strong>Email</strong>."
    } : C(z.match(nt)) && (j = {
      ...j,
      txtEmail: "Please enter a valid email address for the <strong>Email</strong>."
    }), C(j) || (H = `${H}<br />Please fix the errors with the indicated fields in the form.`), C(P) || (P = `Please enter the user's${P.replace(/^,/, "")}.`), C(H) || (C(P) ? P = H.replace(/<br\s*\/?>/, "") : P = P + H), !C(P) || !C(j) ? (C(P) || N(`${be}: ${P}`), C(j) || fe(j), K = !1) : K = !0, K === !0 && Et();
  }, Et = (be) => {
    const K = `${a}users/`;
    let P, H, j = "", Le = "";
    const he = t, pe = r, ae = {
      // username: convertNullEmptyString(formatTrim(txtUsername)),
      firstName: B(ne(E)),
      lastName: B(ne(L)),
      email: B(ne(z)),
      password: B(ne(D)),
      updatedBy: t?.userID ?? null
    };
    j = "Updated User Profile", Le = "PUT", ae.userID = pe, fetch(K, {
      method: Le,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: v(d, o, f)
      }),
      body: JSON.stringify({ recordObject: ae })
    }).then((Z) => (P = Z, P.status === 200 ? P.json() : (ce(
      a,
      v("", o, f),
      m,
      le(),
      {
        operation: `${j} SQL Server`,
        transactionData: {
          url: K,
          response: {
            ok: P.ok,
            redirected: P.redirected,
            status: P.status,
            statusText: P.statusText,
            type: P.type,
            url: P.url
          },
          data: H,
          primaryKeyID: pe,
          previousRecord: he,
          recordObject: ae,
          applicationVersion: e,
          loggedInUser: t,
          computerLog: i
        },
        errorData: { message: `${P.status} ${P.statusText} ${P.url}` },
        dateEntered: Q()
      }
    ), P.status === 401 && w(!0), Promise.reject(Error(P.status + " Fetch failed."))))).then((Z) => {
      if (H = Z, C(H))
        N(`${j}: No Results Returned.`), ce(
          a,
          v("", o, f),
          m,
          le(),
          {
            operation: `${j} SQL Server`,
            transactionData: {
              url: K,
              response: {
                ok: P.ok,
                redirected: P.redirected,
                status: P.status,
                statusText: P.statusText,
                type: P.type,
                url: P.url
              },
              data: H,
              primaryKeyID: pe,
              previousRecord: he,
              recordObject: ae,
              applicationVersion: e,
              loggedInUser: t,
              computerLog: i
            },
            errorData: { message: "No Results Returned." },
            dateEntered: Q()
          }
        );
      else if (H.transactionSuccess && !C(H.records)) {
        const W = It(H.records);
        g(B(W.username)), S(B(W.firstName)), $(B(W.lastName)), A(B(W.email)), G(B(W.password));
        const bt = {
          ...O ?? t,
          username: B(W.username),
          firstName: B(W.firstName),
          lastName: B(W.lastName),
          email: B(W.email),
          password: B(W.password)
        };
        _(bt), T(!0), rt(
          a,
          v("", o, f),
          m,
          le(),
          {
            operation: j,
            userIdentifier: c,
            href: window.location.href,
            applicationVersion: e,
            browserData: JSON.stringify(at()),
            transactionData: { dataRecord: W, previousRecord: he, loggedInUser: t, computerLog: i },
            dateEntered: Q()
          }
        ), y(`${j}: ${H.message}`);
      } else
        N(`${j}: ${H.message}`), ce(
          a,
          v("", o, f),
          m,
          le(),
          {
            operation: `${j} SQL Server`,
            transactionData: {
              url: K,
              response: {
                ok: P.ok,
                redirected: P.redirected,
                status: P.status,
                statusText: P.statusText,
                type: P.type,
                url: P.url
              },
              data: H,
              primaryKeyID: pe,
              previousRecord: he,
              recordObject: ae,
              applicationVersion: e,
              loggedInUser: t,
              computerLog: i
            },
            errorData: { message: H.message },
            dateEntered: Q()
          }
        );
    }).catch((Z) => {
      N(
        `${j}: ${de(Z.name)}: ${de(Z.message)}`
      ), ce(
        a,
        v("", o, f),
        m,
        le(),
        {
          operation: j,
          userIdentifier: c,
          transactionData: {
            primaryKeyID: pe,
            previousRecord: he,
            recordObject: ae,
            applicationVersion: e,
            loggedInUser: t,
            computerLog: i
          },
          errorData: {
            name: Z.name,
            message: Z.message,
            inner: Z.inner,
            stack: Z.stack
          },
          dateEntered: Q()
        }
      ), T(!1);
    });
  };
  return /* @__PURE__ */ b("section", { className: "section-block large", children: [
    /* @__PURE__ */ l("h2", { children: "Profile" }),
    /* @__PURE__ */ b("div", { className: "field-legend-container", children: [
      /* @__PURE__ */ l("div", { className: "field-legend", children: /* @__PURE__ */ l("em", { children: "Note: Form fields that are grayed out are not able to be changed." }) }),
      /* @__PURE__ */ b("div", { className: "field-legend", children: [
        /* @__PURE__ */ l("span", { className: "required", children: " * " }),
        "indicates a required field."
      ] })
    ] }),
    /* @__PURE__ */ b("form", { className: "admin-form", children: [
      /* @__PURE__ */ b("p", { children: [
        /* @__PURE__ */ l("strong", { children: "Username" }),
        ": ",
        h
      ] }),
      /* @__PURE__ */ l(
        Ce,
        {
          id: "txtFirstName",
          type: "text",
          label: "First Name",
          isRequired: !0,
          inlineError: U.txtFirstName ?? "",
          disabled: n,
          value: E,
          updateValue: S
        }
      ),
      /* @__PURE__ */ l(
        Ce,
        {
          id: "txtLastName",
          type: "text",
          label: "Last Name",
          isRequired: !0,
          inlineError: U.txtLastName ?? "",
          disabled: n,
          value: L,
          updateValue: $
        }
      ),
      /* @__PURE__ */ l(
        Ce,
        {
          id: "txtEmail",
          type: "text",
          label: "Email",
          isRequired: !0,
          inlineError: U.txtEmail ?? "",
          disabled: n,
          value: z,
          updateValue: A
        }
      ),
      /* @__PURE__ */ l(
        Ce,
        {
          id: "txtPassword",
          type: "text",
          label: "Password (Only updated if a value is entered)",
          isRequired: !0,
          disabled: n,
          value: D,
          updateValue: G
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex-row", children: [
        /* @__PURE__ */ l("button", { type: "button", className: "btn btn-primary", onClick: yt, children: "Save" }),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: "btn btn-dark-gray",
            onClick: () => {
              Pe(), R(), fe({});
            },
            children: "Reset"
          }
        )
      ] })
    ] })
  ] });
}, Zt = ({
  columnPropertyName: e = "",
  columnText: a = "",
  setSortDirection: i,
  setSortProperty: c,
  sortDirection: f = "",
  sortProperty: o = ""
}) => {
  const m = F("fa", {
    "fa-sort-up": o === e && f === "asc",
    "fa-sort-down": o === e && f === "desc",
    "fa-sort": o !== e || f === "unsorted"
  }), d = (t) => {
    f === "unsorted" || t !== o ? (c(t), i("asc")) : f === "asc" ? (c(t), i("desc")) : (c(""), i("unsorted"));
  };
  return /* @__PURE__ */ b("div", { className: "sortable-column-heading", children: [
    a,
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "btn btn-transparent sort-button",
        onClick: () => d(e),
        children: /* @__PURE__ */ l("i", { className: m })
      }
    )
  ] });
}, Kt = ({
  list: e = [],
  titleField: a = "",
  subtitleField: i = "",
  dragAndDrop: c = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: !1,
    originalOrder: [],
    updatedOrder: []
  },
  handleDragStart: f,
  handleDragOver: o,
  handleDrop: m,
  onDragLeave: d,
  handleManualMove: t
}) => /* @__PURE__ */ l(I, { children: ue(e) ? null : /* @__PURE__ */ l("ul", { className: "sortable-list", children: e.map((n, s) => /* @__PURE__ */ b("li", { className: "sortable-list__item", children: [
  /* @__PURE__ */ l("div", { className: "sortable-list__item__order-number", children: s + 1 }),
  /* @__PURE__ */ b(
    "div",
    {
      className: `sortable-list__item__drag-item ${c && c.draggedTo === Number(s) ? "dropArea" : ""}`,
      "data-position": s,
      draggable: !0,
      onDragStart: (p) => f(p, e),
      onDragOver: o,
      onDrop: m,
      onDragLeave: d,
      children: [
        /* @__PURE__ */ l("div", { className: "sortable-list__item__drag-item__title", children: q(n[a]) }),
        C(n[i]) ? null : /* @__PURE__ */ l("div", { className: "sortable-list__item__drag-item__subtitle", children: q(n[i]) })
      ]
    }
  ),
  /* @__PURE__ */ b("div", { className: "sortable-list__item__buttons", children: [
    /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        disabled: s === 0,
        onClick: () => t(s, -1, e),
        children: [
          /* @__PURE__ */ l("i", { className: "fa fa-chevron-up" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Move Up" })
        ]
      }
    ),
    /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        disabled: s + 1 >= e.length,
        onClick: () => t(s, 1, e),
        children: [
          /* @__PURE__ */ l("i", { className: "fa fa-chevron-down" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Move Down" })
        ]
      }
    )
  ] })
] }, s)) }) }), Jt = () => /* @__PURE__ */ b("div", { className: "spinner-container", children: [
  /* @__PURE__ */ l("i", { className: "fa fa-spinner loading-spinner" }),
  /* @__PURE__ */ l("span", { className: "sr-only", children: "Loading..." })
] }), Qt = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  setDialogBoxOpen: f
}) => {
  const o = we(null), m = i, d = c, t = e, n = F("modal-dialog", {
    "modal-sm": m === "sm",
    "modal-md": m === "md",
    "modal-lg": m === "lg",
    "modal-xl": m === "xl"
  });
  return V(() => {
    const s = o.current;
    if (!s) return;
    a ? s.showModal() : s.close();
    const p = (v) => {
      v.preventDefault(), a && f(!1);
    };
    return s.addEventListener("close", p), s.addEventListener("cancel", p), () => {
      s.removeEventListener("close", p), s.removeEventListener("cancel", p);
    };
  }, [a]), /* @__PURE__ */ l(I, { children: /* @__PURE__ */ b("dialog", { className: n, ref: o, closedby: "any", children: [
    /* @__PURE__ */ b("div", { className: "modal-header", children: [
      /* @__PURE__ */ l("h5", { className: "modal-title", id: "exampleModalLabel", children: d }),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => f(!a),
          title: "Close",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-close" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "modal-body", children: t }),
    /* @__PURE__ */ l("div", { className: "modal-footer", children: /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        onClick: () => f(!a),
        children: "OK"
      }
    ) })
  ] }) });
}, en = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  dialogBoxType: f = "",
  setDialogBoxContinue: o
}) => {
  const m = we(null);
  let d = i, t = c, n = e;
  f === "confirmDelete" ? (d = "md", t = "Delete Record?", n = "Are you sure you want to delete this record?") : f === "confirmRemove" ? (d = "md", t = "Remove Record?", n = "Are you sure you want to remove this record?") : f === "confirmRemoveAll" ? (d = "md", t = "Remove All Records?", n = "Are you sure you want to remove all records?") : f === "changePagePrompt" ? (d = "md", t = "Save Changes?", n = "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?") : f === "logOut" ? (d = "md", t = "Log Out?", n = "Are you sure you want to log out?") : f === "closeProgram" && (d = "md", t = "Close Program?", n = "Are you sure you want to close this program?");
  const s = F("modal-dialog", {
    "modal-sm": d === "sm",
    "modal-md": d === "md",
    "modal-lg": d === "lg",
    "modal-xl": d === "xl"
  });
  return V(() => {
    const p = m.current;
    if (!p) return;
    a ? p.showModal() : p.close();
    const v = (T) => {
      T.preventDefault(), a && o(!1);
    };
    return p.addEventListener("close", v), p.addEventListener("cancel", v), () => {
      p.removeEventListener("close", v), p.removeEventListener("cancel", v);
    };
  }, [a]), /* @__PURE__ */ l(I, { children: /* @__PURE__ */ b("dialog", { className: s, ref: m, closedby: "any", children: [
    /* @__PURE__ */ b("div", { className: "modal-header", children: [
      /* @__PURE__ */ l("h5", { className: "modal-title", id: "exampleModalLabel", children: t }),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => o(!1),
          title: "Close",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-close" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "modal-body", children: n }),
    /* @__PURE__ */ b("div", { className: "modal-footer", children: [
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: "btn btn-primary",
          onClick: () => o(!0),
          children: "OK"
        }
      ),
      /* @__PURE__ */ l(
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
}, gt = (e, a) => {
  const [i, c] = M(a);
  return V(() => {
    const f = (o) => {
      e.current && o.target instanceof Node && !e.current.contains(o.target) && c(!i);
    };
    return i && window.addEventListener("click", f), () => {
      window.removeEventListener("click", f);
    };
  }, [i, e]), [i, c];
}, De = (e, a) => {
  let i = "";
  return a.type === "property" ? i = e[a.text] : a.type === "string" && (i = q(a.text)), i;
}, tn = ({
  id: e = "",
  legend: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: f = [],
  value: o = [],
  columns: m = 1,
  disabled: d = !1,
  hint: t = "",
  inlineError: n = "",
  isRequired: s = !1,
  placeholder: p = "Select Value",
  srOnly: v = !1,
  updateValue: T
}) => {
  const w = we(null), [_, y] = gt(w, !1), N = F("form-group checkbox-dropdown-group", {
    "input-disabled": d
  }), R = F("", {
    "sr-only": v
  }), O = F("checkbox-dropdown-container", {
    // "show": !isDropdownOpen,
    "input-error": !C(n)
  }), x = (r) => {
    const u = r.target.value;
    r.target.checked ? T([...o, u]) : T(o.filter((h) => h !== u));
  };
  return /* @__PURE__ */ b("fieldset", { className: N, ref: w, children: [
    /* @__PURE__ */ b("legend", { className: R, children: [
      a,
      " ",
      s ? /* @__PURE__ */ l(ee, {}) : null
    ] }),
    /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent open-dropdown-button",
        onClick: () => y(!_),
        children: [
          Y(o) ? /* @__PURE__ */ b(I, { children: [
            o.length,
            " selected"
          ] }) : p,
          _ ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-up" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-down" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Open" })
          ] })
        ]
      }
    ),
    _ ? /* @__PURE__ */ l("div", { className: O, children: /* @__PURE__ */ b("ul", { className: "checkbox-dropdown", style: { columns: m }, children: [
      C(t) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(t) }),
      Y(i) && !C(c) && Y(f) ? /* @__PURE__ */ l(I, { children: i.map((r) => {
        if (r.active === !0 || C(r.active)) {
          const u = Re(r[c]), h = o.includes(u);
          return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ b("label", { children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "checkbox",
                id: `${e}${u}`,
                value: u,
                checked: h,
                disabled: d,
                onChange: x
              }
            ),
            /* @__PURE__ */ l("span", { className: "checkbox-label-text", children: f.map((g, E) => /* @__PURE__ */ l(Ae, { children: De(r, g) }, E)) })
          ] }) }, u);
        } else
          return null;
      }) }) : null
    ] }) }) : null,
    C(n) ? null : /* @__PURE__ */ l("div", { className: "inline-alert inline-alert-danger", children: q(n) })
  ] });
}, nn = ({
  id: e = "",
  legend: a = "",
  value: i = [],
  optionData: c = [],
  optionID: f = "",
  optionText: o = [],
  collapseList: m = !1,
  columns: d = 1,
  disabled: t = !1,
  hint: n = "",
  inlineError: s = "",
  isCollapsible: p = !1,
  isRequired: v = !1,
  srOnly: T = !1,
  startCollapsed: w = !0,
  setCollapseList: _,
  updateValue: y
}) => {
  const [N, R] = M(!0), O = F("form-group", {
    "input-disabled": t
  }), x = F("", {
    "sr-only": T
  }), r = F("checkbox-group", {
    "is-collapsible": p,
    show: !N,
    "input-error": !C(s)
  });
  V(() => {
    R(!!p);
  }, [p]), V(() => {
    w === !1 && R(!1);
  }, [w]), V(() => {
    m && (R(!0), _?.(!1));
  }, [m]);
  const u = (h) => {
    const g = h.target.value;
    y(
      h.target.checked ? [...i, g] : i.filter((E) => E !== g)
    );
  };
  return /* @__PURE__ */ b("fieldset", { className: O, children: [
    /* @__PURE__ */ l("legend", { className: x, children: p ? /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => R(!N),
        children: [
          a,
          v ? /* @__PURE__ */ l(ee, {}) : null,
          Y(i) ? /* @__PURE__ */ l("div", { className: "search-filter-count", children: i.length }) : null,
          N ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ b(I, { children: [
      a,
      v ? /* @__PURE__ */ l(ee, {}) : null
    ] }) }),
    /* @__PURE__ */ b("ul", { className: r, style: { columns: d }, children: [
      C(n) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(n) }),
      Y(c) && !C(f) && Y(o) ? /* @__PURE__ */ l(I, { children: c.map((h, g) => {
        if (h.active === !0 || C(h.active)) {
          const E = Re(h[f]), S = i.includes(E);
          return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ b("label", { children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "checkbox",
                id: `${e}${E}`,
                value: E,
                checked: S,
                disabled: t,
                onChange: u
              }
            ),
            /* @__PURE__ */ l("span", { className: "checkbox-label-text", children: o.map((L, $) => /* @__PURE__ */ l(Ae, { children: De(h, L) }, $)) })
          ] }) }, g);
        } else
          return null;
      }) }) : null
    ] }),
    C(s) ? null : /* @__PURE__ */ l("div", { className: "inline-alert inline-alert-danger", children: q(s) }),
    p ? /* @__PURE__ */ l("hr", {}) : null
  ] });
}, Gt = ({
  id: e = "",
  label: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: f = [],
  value: o = "",
  autoComplete: m,
  disabled: d = !1,
  emptyOption: t = !1,
  hint: n = "",
  inlineError: s = "",
  isRequired: p = !1,
  placeholder: v = "Select Value",
  srOnly: T = !1,
  useInputAddon: w = !1,
  updateValue: _
}) => {
  const y = F("", {
    "sr-only": T,
    "input-addon": w
  }), N = F("form-group", {
    "with-addon": w,
    "input-error": !C(s),
    "input-disabled": d
  }), R = (O, x) => x.map(
    (r) => r.type === "property" ? String(O[r.text] ?? "") : r.text
  ).join(" ");
  return /* @__PURE__ */ b("div", { className: N, children: [
    /* @__PURE__ */ b("label", { htmlFor: e, className: y, children: [
      a,
      p === !0 ? /* @__PURE__ */ l(ee, {}) : null
    ] }),
    C(n) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(n) }),
    /* @__PURE__ */ b(
      "select",
      {
        className: "form-control",
        id: e,
        autoComplete: m,
        value: o,
        disabled: d,
        onChange: (O) => _(O.target.value),
        children: [
          t ? null : /* @__PURE__ */ l("option", { value: "", children: v }),
          Y(i) && !C(c) && Y(f) ? i.map((O, x) => {
            const r = String(O[c] ?? "");
            return /* @__PURE__ */ l("option", { value: r, children: R(O, f) }, r || x);
          }) : null
        ]
      }
    ),
    C(s) ? null : /* @__PURE__ */ l("div", { className: "inline-alert inline-alert-danger", children: q(s) })
  ] });
}, rn = ({
  id: e = "",
  optionData: a = [],
  optionID: i = "",
  optionText: c = [],
  value: f = "",
  collapseList: o = !1,
  columns: m = 1,
  disabled: d = !1,
  hint: t = "",
  inlineError: n = "",
  isCollapsible: s = !1,
  isRequired: p = !1,
  legend: v = "",
  srOnly: T = !1,
  startCollapsed: w = !0,
  setCollapseList: _,
  updateValue: y
}) => {
  const [N, R] = M(!0), O = F("form-group", {
    "input-disabled": d
  }), x = F("", {
    "sr-only": T
  }), r = F("radio-group", {
    "is-collapsible": s,
    show: !N,
    "input-error": !C(n)
  });
  return V(() => {
    R(s ? w : !1);
  }, [s, w]), V(() => {
    o && (R(!0), _?.(!1));
  }, [o, _]), /* @__PURE__ */ b("fieldset", { className: O, children: [
    /* @__PURE__ */ l("legend", { className: x, children: s ? /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => R(!N),
        children: [
          v,
          p ? /* @__PURE__ */ l(ee, {}) : null,
          C(f) ? null : /* @__PURE__ */ l("div", { className: "search-filter-count", children: "1" }),
          N ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ l("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ b(I, { children: [
      v,
      p ? /* @__PURE__ */ l(ee, {}) : null
    ] }) }),
    /* @__PURE__ */ b("ul", { className: r, style: { columns: m }, children: [
      C(t) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(t) }),
      Y(a) && !C(i) && Y(c) ? /* @__PURE__ */ l(I, { children: a.map((u) => {
        if (u.active === !0 || C(u.active)) {
          const h = Re(u[i]), g = h === f;
          return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ b("label", { className: g ? "active" : "", children: [
            /* @__PURE__ */ l(
              "input",
              {
                type: "radio",
                id: `${e}${h}`,
                name: e,
                value: h,
                checked: g,
                disabled: d,
                onChange: (E) => y(E.target.value)
              }
            ),
            c.map((E, S) => /* @__PURE__ */ l(Ae, { children: De(u, E) }, S))
          ] }) }, h);
        } else
          return null;
      }) }) : null
    ] }),
    C(n) ? null : /* @__PURE__ */ l("div", { className: "inline-alert inline-alert-danger", children: q(n) }),
    s ? /* @__PURE__ */ l("hr", {}) : null
  ] });
}, an = ({
  id: e = "",
  label: a = "",
  value: i = !1,
  disabled: c = !1,
  falseValue: f = "No",
  hint: o = "",
  isRequired: m = !1,
  srOnly: d = !1,
  trueValue: t = "Yes",
  updateValue: n
}) => {
  const s = F("", {
    "sr-only": d
  }), p = F("form-group toggle-switch-container", {
    "input-disabled": c
  });
  return /* @__PURE__ */ b("fieldset", { className: p, children: [
    /* @__PURE__ */ b("legend", { className: s, children: [
      a,
      m ? /* @__PURE__ */ l(ee, {}) : null
    ] }),
    C(o) ? null : /* @__PURE__ */ l("p", { className: "input-hint", children: q(o) }),
    /* @__PURE__ */ b("div", { className: "toggle-switch", onClick: () => !c && n(!i), children: [
      /* @__PURE__ */ l("div", { className: `toggle-switch__button ${i ? "active" : ""}` }),
      /* @__PURE__ */ l("div", { className: "toggle-switch__text", children: i ? /* @__PURE__ */ l(I, { children: t }) : /* @__PURE__ */ l(I, { children: f }) }),
      /* @__PURE__ */ b("label", { className: "sr-only", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "radio",
            id: `${e}false`,
            checked: !i,
            value: "false",
            disabled: c,
            onChange: () => n(!1)
          }
        ),
        f
      ] }),
      /* @__PURE__ */ b("label", { className: "sr-only", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "radio",
            id: `${e}true`,
            checked: i,
            value: "true",
            disabled: c,
            onChange: () => n(!0)
          }
        ),
        t
      ] })
    ] })
  ] });
}, sn = ({ applicationVersion: e = "0.0.0", copyrightYear: a = "2026" }) => /* @__PURE__ */ b("footer", { children: [
  "© ",
  a,
  " Orbis Education. All rights reserved. Version: ",
  e
] }), on = ({ applicationName: e = "Application" }) => {
  const a = window.location.href.includes("intranet.orbiseducation.com") ? "./" : "/";
  return document.title = `Orbis Education | ${e}`, /* @__PURE__ */ b("header", { children: [
    /* @__PURE__ */ l("a", { href: a, className: "orbis-logo-link", children: /* @__PURE__ */ l($t, {}) }),
    /* @__PURE__ */ l("h1", { children: e })
  ] });
}, ln = ({
  defaultResultsPerPage: e = 30,
  ddResultsPerPage: a = 30,
  currentPageNumber: i = 1,
  totalPages: c = 1,
  setDdResultsPerPage: f,
  setCurrentPageNumber: o
}) => {
  const m = (d) => {
    window.scrollTo(0, 0), o(d);
  };
  return /* @__PURE__ */ b("div", { className: "pagination-section", children: [
    /* @__PURE__ */ l(
      Gt,
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
          f(d === "all" ? Number.NaN : Number(d)), o(1);
        }
      }
    ),
    /* @__PURE__ */ b("div", { className: "pagination-controls", children: [
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(1),
          disabled: i <= 1,
          title: "Go to First Page",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-double-left" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Go to First Page" })
          ]
        }
      ),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(i - 1),
          disabled: i <= 1,
          title: "Go to Previous Page",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Go to Previous Page" })
          ]
        }
      ),
      /* @__PURE__ */ b("strong", { children: [
        "Page ",
        i,
        " of ",
        c
      ] }),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(i + 1),
          disabled: i >= c,
          title: "Go to Next Page",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Go to Next Page" })
          ]
        }
      ),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => m(c),
          disabled: i >= c,
          title: "Go to Last Page",
          children: [
            /* @__PURE__ */ l("i", { className: "fa fa-angle-double-right" }),
            /* @__PURE__ */ l("span", { className: "sr-only", children: "Go to Last Page" })
          ]
        }
      )
    ] })
  ] });
}, vt = ({
  navigationItem: e = {
    name: "",
    componentName: "",
    isPresent: !0,
    type: "",
    onClick: re,
    children: null
  },
  returnActiveClass: a = re
}) => /* @__PURE__ */ b(I, { children: [
  /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      role: "link",
      className: a(e?.componentName ?? ""),
      onClick: e.onClick,
      children: e.name
    }
  ),
  C(e.children) ? null : e.children
] }), qt = ({
  navigationItem: e = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass: a = re
}) => {
  const i = we(null), [c, f] = gt(i, !1), o = F("fa", {
    "fa-caret-up": c,
    "fa-caret-down": !c
  }), m = (e?.dropdownItems ?? []).filter(
    (t) => C(t.isPresent) || t.isPresent === !0
  ), d = C(e?.classes) ? "dropdown" : `dropdown ${e.classes}`;
  return /* @__PURE__ */ b(I, { children: [
    /* @__PURE__ */ b("button", { type: "button", onClick: () => f(!c), ref: i, children: [
      e.name,
      " ",
      /* @__PURE__ */ l("i", { className: o })
    ] }),
    c === !0 && !ue(m) ? /* @__PURE__ */ l("ul", { className: d, children: m.map((t, n) => /* @__PURE__ */ l("li", { children: /* @__PURE__ */ l(
      vt,
      {
        navigationItem: t,
        returnActiveClass: a
      }
    ) }, n)) }) : null
  ] });
}, cn = ({ navigationItems: e = [], componentToLoad: a = "" }) => {
  const i = e.filter(
    (f) => C(f.isPresent) || f.isPresent === !0
  ), c = (f, o) => {
    let m = o ?? "";
    return m += a === f ? " active" : "", m;
  };
  return /* @__PURE__ */ l("nav", { className: "sub-header-nav", children: /* @__PURE__ */ l("ul", { children: ue(i) ? null : /* @__PURE__ */ l(I, { children: i.map((f, o) => /* @__PURE__ */ l("li", { children: f.type === "dropdown" ? /* @__PURE__ */ l(
    qt,
    {
      navigationItem: f,
      returnActiveClass: c
    }
  ) : /* @__PURE__ */ l(
    vt,
    {
      navigationItem: f,
      returnActiveClass: c
    }
  ) }, o)) }) }) });
}, un = () => {
  const [e, a] = M(""), [i, c] = M(""), [f, o] = M(""), [m, d] = M(""), [t, n] = M(!1), [s, p] = M(null), [v, T] = M(!1), [w, _] = M(!1), [y, N] = M(""), R = () => {
    c(""), o(""), d(""), a(""), n(!1), p(null), T(!1), _(!1);
  };
  V(() => {
    s !== null && (v ? s ? (N("D"), R()) : (R(), N("")) : w ? s ? (N("HD"), R()) : (R(), N("")) : R());
  }, [v, w, s]);
  const O = (g) => {
    C(g) || u(g);
  }, x = (g) => {
    const E = C(g?.dialogBoxType) ? "confirmRemove" : g?.dialogBoxType;
    T(!0), u({ dialogBoxType: E });
  }, r = (g) => {
    const E = C(g?.dialogBoxType) ? "confirmRemove" : g.dialogBoxType;
    _(!0), u({ dialogBoxType: E });
  }, u = (g) => {
    C(g) || (n(!0), c(g.dialogBoxSize || ""), o(g.dialogBoxTitle || ""), d(g.dialogBoxContent || ""), a(g.dialogBoxType || ""), p(null));
  };
  return {
    processTransactionValue: y,
    confirmationDialogBoxOpen: t,
    confirmationDialogBoxSize: i,
    confirmationDialogBoxTitle: f,
    confirmationDialogBoxContent: m,
    confirmationDialogBoxType: e,
    confirmationDialogBoxContinue: s,
    confirmAction: O,
    deleteRecord: x,
    hardDeleteRecord: r,
    closeDeleteDialogBox: () => {
      n(!1), a("");
    },
    setConfirmationDialogBoxContinue: p,
    setProcessTransactionValue: N
  };
}, dn = ({ updateArray: e, callback: a }) => {
  const [i, c] = M({
    draggedFrom: null,
    draggedTo: null,
    isDragging: !1,
    originalOrder: [],
    updatedOrder: []
  });
  return {
    dragAndDrop: i,
    handleDragStart: (n, s) => {
      const p = Number(n.currentTarget.dataset.position);
      c({
        ...i,
        draggedFrom: p,
        isDragging: !0,
        originalOrder: s
      });
    },
    handleDragOver: (n) => {
      if (n.preventDefault(), i.originalOrder && i.draggedFrom !== null) {
        let s = i.originalOrder;
        const p = i.draggedFrom, v = Number(n.currentTarget.dataset.position), T = s[p], w = s.filter((_, y) => y !== p);
        s = [
          ...w.slice(0, v),
          T,
          ...w.slice(v)
        ], v !== i.draggedTo && c({
          ...i,
          updatedOrder: s,
          draggedTo: v
        });
      }
    },
    handleDrop: () => {
      e(i.updatedOrder), ue(i.updatedOrder) || i.updatedOrder.forEach((n, s) => {
        a(n, s);
      }), c({
        ...i,
        draggedFrom: null,
        draggedTo: null,
        isDragging: !1
      });
    },
    onDragLeave: () => {
      c({
        ...i,
        draggedTo: null
      });
    },
    handleManualMove: (n, s, p) => {
      const v = n + s;
      if (v >= 0 && v < p.length) {
        const T = [...p], w = T[n], _ = T[v];
        T[n] = _, T[v] = w, e(T), a(T[n], n), a(T[v], v);
      }
    }
  };
}, fn = ({
  allRecords: e = [],
  defaultResultsPerPage: a = 30
}) => {
  const [i, c] = M(a), [f, o] = M(1), [m, d] = M(1), [t, n] = M([]), s = (p) => {
    if (ue(p))
      n([]);
    else {
      const v = isNaN(i) ? p.length : i, T = f * v, w = T - v, _ = Math.ceil(p.length / v), y = p.slice(w, T);
      d(_), n(y), f > _ && o(_);
    }
  };
  return V(() => {
    ue(e) || s(e);
  }, [i, f]), {
    ddResultsPerPage: i,
    currentPageNumber: f,
    totalPages: m,
    currentPageRecords: t,
    setDdResultsPerPage: c,
    setCurrentPageNumber: o,
    setCurrentPageRecords: n,
    determineTotalPages: s
  };
};
export {
  Te as AlertPopup,
  tn as CheckboxDropdown,
  nn as CheckboxGroup,
  Xt as CopyLink,
  Qt as DialogBox,
  en as DialogBoxConfirmation,
  sn as Footer,
  Gt as FormDropdown,
  Ce as FormInput,
  rn as FormRadioGroup,
  on as Header,
  Ut as Messages,
  cn as Navigation,
  qt as NavigationDropdown,
  vt as NavigationLink,
  Wt as NoResultsText,
  $t as OrbisLogo,
  ln as Pagination,
  Yt as Profile,
  ee as RequiredFieldAsterisk,
  Zt as SortableColumnHeader,
  Kt as SortableList,
  Jt as Spinner,
  an as ToggleSwitch,
  un as useDialogBoxConfirmation,
  dn as useDragAndDropSort,
  gt as useNativeClickListener,
  fn as usePagination
};
