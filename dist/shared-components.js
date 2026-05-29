import { jsx as o, jsxs as b, Fragment as I } from "react/jsx-runtime";
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
        for (var l = "", p = 0; p < arguments.length; p++) {
          var f = arguments[p];
          f && (l = u(l, c(f)));
        }
        return l;
      }
      function c(l) {
        if (typeof l == "string" || typeof l == "number")
          return l;
        if (typeof l != "object")
          return "";
        if (Array.isArray(l))
          return i.apply(null, l);
        if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
          return l.toString();
        var p = "";
        for (var f in l)
          a.call(l, f) && l[f] && (p = u(p, f));
        return p;
      }
      function u(l, p) {
        return p ? l ? l + " " + p : l + p : l;
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
    var r = function(d, h) {
      return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, E) {
        g.__proto__ = E;
      } || function(g, E) {
        for (var O in E) Object.prototype.hasOwnProperty.call(E, O) && (g[O] = E[O]);
      }, r(d, h);
    };
    return function(d, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      r(d, h);
      function g() {
        this.constructor = d;
      }
      d.prototype = h === null ? Object.create(h) : (g.prototype = h.prototype, new g());
    };
  })(), a = k && k.__assign || function() {
    return a = Object.assign || function(r) {
      for (var d, h = 1, g = arguments.length; h < g; h++) {
        d = arguments[h];
        for (var E in d) Object.prototype.hasOwnProperty.call(d, E) && (r[E] = d[E]);
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
        set: function(d) {
          this.parent = d;
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
        set: function(d) {
          this.prev = d;
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
        set: function(d) {
          this.next = d;
        },
        enumerable: !1,
        configurable: !0
      }), r.prototype.cloneNode = function(d) {
        return d === void 0 && (d = !1), x(this, d);
      }, r;
    })()
  );
  k.Node = c;
  var u = (
    /** @class */
    (function(r) {
      e(d, r);
      function d(h) {
        var g = r.call(this) || this;
        return g.data = h, g;
      }
      return Object.defineProperty(d.prototype, "nodeValue", {
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
      }), d;
    })(c)
  );
  k.DataNode = u;
  var l = (
    /** @class */
    (function(r) {
      e(d, r);
      function d() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Text, h;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(u)
  );
  k.Text = l;
  var p = (
    /** @class */
    (function(r) {
      e(d, r);
      function d() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Comment, h;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(u)
  );
  k.Comment = p;
  var f = (
    /** @class */
    (function(r) {
      e(d, r);
      function d(h, g) {
        var E = r.call(this, g) || this;
        return E.name = h, E.type = i.ElementType.Directive, E;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(u)
  );
  k.ProcessingInstruction = f;
  var t = (
    /** @class */
    (function(r) {
      e(d, r);
      function d(h) {
        var g = r.call(this) || this;
        return g.children = h, g;
      }
      return Object.defineProperty(d.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var h;
          return (h = this.children[0]) !== null && h !== void 0 ? h : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(d.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(d.prototype, "childNodes", {
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
      }), d;
    })(c)
  );
  k.NodeWithChildren = t;
  var n = (
    /** @class */
    (function(r) {
      e(d, r);
      function d() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.CDATA, h;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(t)
  );
  k.CDATA = n;
  var s = (
    /** @class */
    (function(r) {
      e(d, r);
      function d() {
        var h = r !== null && r.apply(this, arguments) || this;
        return h.type = i.ElementType.Root, h;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(t)
  );
  k.Document = s;
  var m = (
    /** @class */
    (function(r) {
      e(d, r);
      function d(h, g, E, O) {
        E === void 0 && (E = []), O === void 0 && (O = h === "script" ? i.ElementType.Script : h === "style" ? i.ElementType.Style : i.ElementType.Tag);
        var L = r.call(this, E) || this;
        return L.name = h, L.attribs = g, L.type = O, L;
      }
      return Object.defineProperty(d.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(d.prototype, "tagName", {
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
      }), Object.defineProperty(d.prototype, "attributes", {
        get: function() {
          var h = this;
          return Object.keys(this.attribs).map(function(g) {
            var E, O;
            return {
              name: g,
              value: h.attribs[g],
              namespace: (E = h["x-attribsNamespace"]) === null || E === void 0 ? void 0 : E[g],
              prefix: (O = h["x-attribsPrefix"]) === null || O === void 0 ? void 0 : O[g]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), d;
    })(t)
  );
  k.Element = m;
  function y(r) {
    return (0, i.isTag)(r);
  }
  k.isTag = y;
  function T(r) {
    return r.type === i.ElementType.CDATA;
  }
  k.isCDATA = T;
  function w(r) {
    return r.type === i.ElementType.Text;
  }
  k.isText = w;
  function N(r) {
    return r.type === i.ElementType.Comment;
  }
  k.isComment = N;
  function v(r) {
    return r.type === i.ElementType.Directive;
  }
  k.isDirective = v;
  function C(r) {
    return r.type === i.ElementType.Root;
  }
  k.isDocument = C;
  function R(r) {
    return Object.prototype.hasOwnProperty.call(r, "children");
  }
  k.hasChildren = R;
  function x(r, d) {
    d === void 0 && (d = !1);
    var h;
    if (w(r))
      h = new l(r.data);
    else if (N(r))
      h = new p(r.data);
    else if (y(r)) {
      var g = d ? S(r.children) : [], E = new m(r.name, a({}, r.attribs), g);
      g.forEach(function(q) {
        return q.parent = E;
      }), r.namespace != null && (E.namespace = r.namespace), r["x-attribsNamespace"] && (E["x-attribsNamespace"] = a({}, r["x-attribsNamespace"])), r["x-attribsPrefix"] && (E["x-attribsPrefix"] = a({}, r["x-attribsPrefix"])), h = E;
    } else if (T(r)) {
      var g = d ? S(r.children) : [], O = new n(g);
      g.forEach(function(P) {
        return P.parent = O;
      }), h = O;
    } else if (C(r)) {
      var g = d ? S(r.children) : [], L = new s(g);
      g.forEach(function(P) {
        return P.parent = L;
      }), r["x-mode"] && (L["x-mode"] = r["x-mode"]), h = L;
    } else if (v(r)) {
      var $ = new f(r.name, r.data);
      r["x-name"] != null && ($["x-name"] = r["x-name"], $["x-publicId"] = r["x-publicId"], $["x-systemId"] = r["x-systemId"]), h = $;
    } else
      throw new Error("Not implemented yet: ".concat(r.type));
    return h.startIndex = r.startIndex, h.endIndex = r.endIndex, r.sourceCodeLocation != null && (h.sourceCodeLocation = r.sourceCodeLocation), h;
  }
  k.cloneNode = x;
  function S(r) {
    for (var d = r.map(function(g) {
      return x(g, !0);
    }), h = 1; h < d.length; h++)
      d[h].prev = d[h - 1], d[h - 1].next = d[h];
    return d;
  }
  return k;
}
var $e;
function dt() {
  return $e || ($e = 1, (function(e) {
    var a = te && te.__createBinding || (Object.create ? (function(f, t, n, s) {
      s === void 0 && (s = n);
      var m = Object.getOwnPropertyDescriptor(t, n);
      (!m || ("get" in m ? !t.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
        return t[n];
      } }), Object.defineProperty(f, s, m);
    }) : (function(f, t, n, s) {
      s === void 0 && (s = n), f[s] = t[n];
    })), i = te && te.__exportStar || function(f, t) {
      for (var n in f) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && a(t, f, n);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
    var c = /* @__PURE__ */ ut(), u = /* @__PURE__ */ Fe();
    i(/* @__PURE__ */ Fe(), e);
    var l = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, p = (
      /** @class */
      (function() {
        function f(t, n, s) {
          this.dom = [], this.root = new u.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof n == "function" && (s = n, n = l), typeof t == "object" && (n = t, t = void 0), this.callback = t ?? null, this.options = n ?? l, this.elementCB = s ?? null;
        }
        return f.prototype.onparserinit = function(t) {
          this.parser = t;
        }, f.prototype.onreset = function() {
          this.dom = [], this.root = new u.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, f.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, f.prototype.onerror = function(t) {
          this.handleCallback(t);
        }, f.prototype.onclosetag = function() {
          this.lastNode = null;
          var t = this.tagStack.pop();
          this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t);
        }, f.prototype.onopentag = function(t, n) {
          var s = this.options.xmlMode ? c.ElementType.Tag : void 0, m = new u.Element(t, n, void 0, s);
          this.addNode(m), this.tagStack.push(m);
        }, f.prototype.ontext = function(t) {
          var n = this.lastNode;
          if (n && n.type === c.ElementType.Text)
            n.data += t, this.options.withEndIndices && (n.endIndex = this.parser.endIndex);
          else {
            var s = new u.Text(t);
            this.addNode(s), this.lastNode = s;
          }
        }, f.prototype.oncomment = function(t) {
          if (this.lastNode && this.lastNode.type === c.ElementType.Comment) {
            this.lastNode.data += t;
            return;
          }
          var n = new u.Comment(t);
          this.addNode(n), this.lastNode = n;
        }, f.prototype.oncommentend = function() {
          this.lastNode = null;
        }, f.prototype.oncdatastart = function() {
          var t = new u.Text(""), n = new u.CDATA([t]);
          this.addNode(n), t.parent = n, this.lastNode = t;
        }, f.prototype.oncdataend = function() {
          this.lastNode = null;
        }, f.prototype.onprocessinginstruction = function(t, n) {
          var s = new u.ProcessingInstruction(t, n);
          this.addNode(s);
        }, f.prototype.handleCallback = function(t) {
          if (typeof this.callback == "function")
            this.callback(t, this.dom);
          else if (t)
            throw t;
        }, f.prototype.addNode = function(t) {
          var n = this.tagStack[this.tagStack.length - 1], s = n.children[n.children.length - 1];
          this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), n.children.push(t), s && (t.prev = s, s.next = t), t.parent = n, this.lastNode = null;
        }, f;
      })()
    );
    e.DomHandler = p, e.default = p;
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
  ze = 1, Object.defineProperty(J, "__esModule", { value: !0 }), J.formatAttributes = c, J.hasOpenTag = l, J.escapeSpecialCharacters = p, J.revertEscapedCharacters = f, J.formatDOM = t;
  var e = /* @__PURE__ */ dt(), a = Tt();
  function i(n) {
    return a.CASE_SENSITIVE_TAG_NAMES_MAP[n];
  }
  function c(n) {
    for (var s = {}, m = 0, y = n.length; m < y; m++) {
      var T = n[m];
      s[T.name] = T.value;
    }
    return s;
  }
  function u(n) {
    n = n.toLowerCase();
    var s = i(n);
    return s || n;
  }
  function l(n, s) {
    var m = "<" + s, y = n.toLowerCase().indexOf(m);
    if (y === -1)
      return !1;
    var T = n[y + m.length];
    return T === ">" || T === " " || T === "	" || T === `
` || T === "\r" || T === "/";
  }
  function p(n) {
    return n.replace(a.CARRIAGE_RETURN_REGEX, a.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function f(n) {
    return n.replace(a.CARRIAGE_RETURN_PLACEHOLDER_REGEX, a.CARRIAGE_RETURN);
  }
  function t(n, s, m) {
    var y, T, w, N;
    s === void 0 && (s = null);
    for (var v = [], C, R = 0, x = n.length; R < x; R++) {
      var S = n[R];
      switch (S.nodeType) {
        case 1: {
          var r = u(S.nodeName);
          C = new e.Element(r, c(S.attributes)), C.children = t(
            // template children are on content
            r === "template" ? S.content.childNodes : S.childNodes,
            C
          );
          break;
        }
        case 3:
          C = new e.Text(f((y = S.nodeValue) !== null && y !== void 0 ? y : ""));
          break;
        case 8:
          C = new e.Comment((T = S.nodeValue) !== null && T !== void 0 ? T : "");
          break;
        default:
          continue;
      }
      var d = (w = v[R - 1]) !== null && w !== void 0 ? w : null;
      d && (d.next = C), C.parent = s, C.prev = d, C.next = null, v.push(C);
    }
    return m && (C = new e.ProcessingInstruction(m.substring(0, m.indexOf(" ")).toLowerCase(), m), C.next = (N = v[0]) !== null && N !== void 0 ? N : null, C.parent = s, v.unshift(C), v[1] && (v[1].prev = v[0])), v;
  }
  return J;
}
var Ge;
function Ct() {
  if (Ge) return Ne;
  Ge = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.default = w;
  var e = ft(), a = "html", i = "head", c = "body", u = /<([a-zA-Z]+[0-9]?)/, l = function(N, v) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, p = function(N, v) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, f = typeof window == "object" && window.DOMParser;
  if (typeof f == "function") {
    var t = new f(), n = "text/html";
    p = function(N, v) {
      return v && (N = "<".concat(v, ">").concat(N, "</").concat(v, ">")), t.parseFromString(N, n);
    }, l = p;
  }
  if (typeof document == "object" && document.implementation) {
    var s = document.implementation.createHTMLDocument();
    l = function(N, v) {
      if (v) {
        var C = s.documentElement.querySelector(v);
        return C && (C.innerHTML = N), s;
      }
      return s.documentElement.innerHTML = N, s;
    };
  }
  var m = typeof document == "object" && document.createElement("template"), y;
  m && m.content && (y = function(N) {
    return m.innerHTML = N, m.content.childNodes;
  });
  var T = (
    /* istanbul ignore next */
    function() {
      return document.createDocumentFragment().childNodes;
    }
  );
  function w(N) {
    var v, C, R, x, S, r;
    N = (0, e.escapeSpecialCharacters)(N);
    var d = u.exec(N), h = (v = d?.[1]) === null || v === void 0 ? void 0 : v.toLowerCase();
    switch (h) {
      case a: {
        var g = p(N);
        if (!(0, e.hasOpenTag)(N, i)) {
          var E = g.querySelector(i);
          (C = E?.parentNode) === null || C === void 0 || C.removeChild(E);
        }
        if (!(0, e.hasOpenTag)(N, c)) {
          var E = g.querySelector(c);
          (R = E?.parentNode) === null || R === void 0 || R.removeChild(E);
        }
        return g.querySelectorAll(a);
      }
      case i:
      case c: {
        var O = l(N).querySelectorAll(h);
        return (0, e.hasOpenTag)(N, c) && (0, e.hasOpenTag)(N, i) ? (S = (x = O[0].parentNode) === null || x === void 0 ? void 0 : x.childNodes) !== null && S !== void 0 ? S : T() : O;
      }
      // low-level tag or text
      default: {
        if (y)
          return y(N);
        var E = l(N, c).querySelector(c);
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
  var e = ie && ie.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(ie, "__esModule", { value: !0 }), ie.default = u;
  var a = e(Ct()), i = ft(), c = /<(![a-zA-Z\s]+)>/;
  function u(l) {
    if (typeof l != "string")
      throw new TypeError("First argument must be a string");
    if (!l)
      return [];
    var p = c.exec(l), f = p ? p[1] : void 0;
    return (0, i.formatDOM)((0, a.default)(l), null, f);
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
  const e = 0, a = 1, i = 2, c = 3, u = 4, l = 5, p = 6;
  function f(r) {
    return n.hasOwnProperty(r) ? n[r] : null;
  }
  function t(r, d, h, g, E, O, L) {
    this.acceptsBooleans = d === i || d === c || d === u, this.attributeName = g, this.attributeNamespace = E, this.mustUseProperty = h, this.propertyName = r, this.type = d, this.sanitizeURL = O, this.removeEmptyString = L;
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
  ].forEach(([r, d]) => {
    n[r] = new t(
      r,
      a,
      !1,
      // mustUseProperty
      d,
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
      u,
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
      p,
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
      l,
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
  const m = /[\-\:]([a-z])/g, y = (r) => r[1].toUpperCase();
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
    const d = r.replace(m, y);
    n[d] = new t(
      d,
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
    const d = r.replace(m, y);
    n[d] = new t(
      d,
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
    const d = r.replace(m, y);
    n[d] = new t(
      d,
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
    SAME: N,
    possibleStandardNames: v
  } = Rt(), R = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", x = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + R + "]*$")
  ), S = Object.keys(
    v
  ).reduce((r, d) => {
    const h = v[d];
    return h === N ? r[d] = d : h === w ? r[d.toLowerCase()] = d : r[d] = h, r;
  }, {});
  return X.BOOLEAN = c, X.BOOLEANISH_STRING = i, X.NUMERIC = l, X.OVERLOADED_BOOLEAN = u, X.POSITIVE_NUMERIC = p, X.RESERVED = e, X.STRING = a, X.getPropertyInfo = f, X.isCustomAttribute = x, X.possibleStandardNames = S, X;
}
var ve = {}, se = {}, xe, Ue;
function Ot() {
  if (Ue) return xe;
  Ue = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, a = /\n/g, i = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, u = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, p = /^[;\s]*/, f = /^\s+|\s+$/g, t = `
`, n = "/", s = "*", m = "", y = "comment", T = "declaration";
  function w(v, C) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    C = C || {};
    var R = 1, x = 1;
    function S(P) {
      var A = P.match(a);
      A && (R += A.length);
      var z = P.lastIndexOf(t);
      x = ~z ? P.length - z : x + P.length;
    }
    function r() {
      var P = { line: R, column: x };
      return function(A) {
        return A.position = new d(P), E(), A;
      };
    }
    function d(P) {
      this.start = P, this.end = { line: R, column: x }, this.source = C.source;
    }
    d.prototype.content = v;
    function h(P) {
      var A = new Error(
        C.source + ":" + R + ":" + x + ": " + P
      );
      if (A.reason = P, A.filename = C.source, A.line = R, A.column = x, A.source = v, !C.silent) throw A;
    }
    function g(P) {
      var A = P.exec(v);
      if (A) {
        var z = A[0];
        return S(z), v = v.slice(z.length), A;
      }
    }
    function E() {
      g(i);
    }
    function O(P) {
      var A;
      for (P = P || []; A = L(); )
        A !== !1 && P.push(A);
      return P;
    }
    function L() {
      var P = r();
      if (!(n != v.charAt(0) || s != v.charAt(1))) {
        for (var A = 2; m != v.charAt(A) && (s != v.charAt(A) || n != v.charAt(A + 1)); )
          ++A;
        if (A += 2, m === v.charAt(A - 1))
          return h("End of comment missing");
        var z = v.slice(2, A - 2);
        return x += 2, S(z), v = v.slice(A), x += 2, P({
          type: y,
          comment: z
        });
      }
    }
    function $() {
      var P = r(), A = g(c);
      if (A) {
        if (L(), !g(u)) return h("property missing ':'");
        var z = g(l), U = P({
          type: T,
          property: N(A[0].replace(e, m)),
          value: z ? N(z[0].replace(e, m)) : m
        });
        return g(p), U;
      }
    }
    function q() {
      var P = [];
      O(P);
      for (var A; A = $(); )
        A !== !1 && (P.push(A), O(P));
      return P;
    }
    return E(), q();
  }
  function N(v) {
    return v ? v.replace(f, m) : m;
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
  function i(c, u) {
    let l = null;
    if (!c || typeof c != "string")
      return l;
    const p = (0, a.default)(c), f = typeof u == "function";
    return p.forEach((t) => {
      if (t.type !== "declaration")
        return;
      const { property: n, value: s } = t;
      f ? u(n, s, t) : s && (l = l || {}, l[n] = s);
    }), l;
  }
  return se;
}
var ye = {}, We;
function xt() {
  if (We) return ye;
  We = 1, Object.defineProperty(ye, "__esModule", { value: !0 }), ye.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, i = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, l = function(n) {
    return !n || i.test(n) || e.test(n);
  }, p = function(n, s) {
    return s.toUpperCase();
  }, f = function(n, s) {
    return "".concat(s, "-");
  }, t = function(n, s) {
    return s === void 0 && (s = {}), l(n) ? n : (n = n.toLowerCase(), s.reactCompat ? n = n.replace(u, f) : n = n.replace(c, f), n.replace(a, p));
  };
  return ye.camelCase = t, ye;
}
var Ee, Ye;
function At() {
  if (Ye) return Ee;
  Ye = 1;
  var e = Ee && Ee.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  }, a = e(kt()), i = xt();
  function c(u, l) {
    var p = {};
    return !u || typeof u != "string" || (0, a.default)(u, function(f, t) {
      f && t && (p[(0, i.camelCase)(f, l)] = t);
    }), p;
  }
  return c.default = c, Ee = c, Ee;
}
var Ze;
function ht() {
  return Ze || (Ze = 1, (function(e) {
    var a = ve && ve.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.returnFirstArg = e.canTextBeChildOfNode = e.ELEMENTS_WITH_NO_TEXT_CHILDREN = e.PRESERVE_CUSTOM_ATTRIBUTES = void 0, e.isCustomComponent = l, e.setStyleProp = f;
    var i = lt, c = a(At()), u = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function l(s, m) {
      return s.includes("-") ? !u.has(s) : !!(m && typeof m.is == "string");
    }
    var p = {
      reactCompat: !0
    };
    function f(s, m) {
      if (typeof s == "string") {
        if (!s.trim()) {
          m.style = {};
          return;
        }
        try {
          m.style = (0, c.default)(s, p);
        } catch {
          m.style = {};
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
  Ke = 1, Object.defineProperty(_e, "__esModule", { value: !0 }), _e.default = l;
  var e = St(), a = ht(), i = ["checked", "value"], c = ["input", "select", "textarea"], u = {
    reset: !0,
    submit: !0
  };
  function l(f, t) {
    f === void 0 && (f = {});
    var n = {}, s = !!(f.type && u[f.type]);
    for (var m in f) {
      var y = f[m];
      if ((0, e.isCustomAttribute)(m)) {
        n[m] = y;
        continue;
      }
      var T = m.toLowerCase(), w = p(T);
      if (w) {
        var N = (0, e.getPropertyInfo)(w);
        switch (i.includes(w) && c.includes(t) && !s && (w = p("default" + T)), n[w] = y, N?.type) {
          case e.BOOLEAN:
            n[w] = !0;
            break;
          case e.OVERLOADED_BOOLEAN:
            y === "" && (n[w] = !0);
            break;
        }
        continue;
      }
      a.PRESERVE_CUSTOM_ATTRIBUTES && (n[m] = y);
    }
    return (0, a.setStyleProp)(f.style, n), n;
  }
  function p(f) {
    return e.possibleStandardNames[f];
  }
  return _e;
}
var oe = {}, Je;
function Dt() {
  if (Je) return oe;
  Je = 1;
  var e = oe && oe.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(oe, "__esModule", { value: !0 }), oe.default = l;
  var a = lt, i = e(pt()), c = ht(), u = {
    cloneElement: a.cloneElement,
    createElement: a.createElement,
    isValidElement: a.isValidElement
  };
  function l(f, t) {
    var n, s, m, y, T;
    t === void 0 && (t = {});
    for (var w = [], N = typeof t.replace == "function", v = (n = t.transform) !== null && n !== void 0 ? n : c.returnFirstArg, C = (s = t.library) !== null && s !== void 0 ? s : u, R = C.cloneElement, x = C.createElement, S = C.isValidElement, r = f.length, d = 0; d < r; d++) {
      var h = f[d];
      if (N) {
        var g = (m = t.replace) === null || m === void 0 ? void 0 : m.call(t, h, d);
        if (S(g)) {
          r > 1 && (g = R(g, {
            key: (y = g.key) !== null && y !== void 0 ? y : d
          })), w.push(v(g, h, d));
          continue;
        }
      }
      if (h.type === "text") {
        var E = !h.data.trim().length;
        if (E && h.parent && !(0, c.canTextBeChildOfNode)(h.parent) || t.trim && E)
          continue;
        w.push(v(h.data, h, d));
        continue;
      }
      var O = h, L = {};
      p(O) ? ((0, c.setStyleProp)(O.attribs.style, O.attribs), L = O.attribs) : O.attribs && (L = (0, i.default)(O.attribs, O.name));
      var $ = void 0;
      switch (h.type) {
        case "script":
        case "style":
          h.children[0] && (L.dangerouslySetInnerHTML = {
            __html: h.children[0].data
          });
          break;
        case "tag":
          h.name === "textarea" && h.children[0] ? L.defaultValue = h.children[0].data : !((T = h.children) === null || T === void 0) && T.length && ($ = l(h.children, t));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      r > 1 && (L.key = d), w.push(v(x(h.name, L, $), h, d));
    }
    return w.length === 1 ? w[0] : w;
  }
  function p(f) {
    return c.PRESERVE_CUSTOM_ATTRIBUTES && f.type === "tag" && (0, c.isCustomComponent)(f.name, f.attribs);
  }
  return oe;
}
var Qe;
function Pt() {
  return Qe || (Qe = 1, (function(e) {
    var a = me && me.__importDefault || function(t) {
      return t && t.__esModule ? t : { default: t };
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.htmlToDOM = e.domToReact = e.attributesToProps = e.Text = e.ProcessingInstruction = e.Element = e.Comment = void 0, e.default = f;
    var i = a(wt());
    e.htmlToDOM = i.default;
    var c = a(pt());
    e.attributesToProps = c.default;
    var u = a(Dt());
    e.domToReact = u.default;
    var l = /* @__PURE__ */ dt();
    Object.defineProperty(e, "Comment", { enumerable: !0, get: function() {
      return l.Comment;
    } }), Object.defineProperty(e, "Element", { enumerable: !0, get: function() {
      return l.Element;
    } }), Object.defineProperty(e, "ProcessingInstruction", { enumerable: !0, get: function() {
      return l.ProcessingInstruction;
    } }), Object.defineProperty(e, "Text", { enumerable: !0, get: function() {
      return l.Text;
    } });
    var p = { lowerCaseAttributeNames: !1 };
    function f(t, n) {
      var s;
      if (typeof t != "string")
        throw new TypeError("First argument must be a string");
      return t ? (0, u.default)((0, i.default)(t, (s = n?.htmlparser2) !== null && s !== void 0 ? s : p), n) : [];
    }
  })(me)), me;
}
var Lt = Pt();
const et = /* @__PURE__ */ ct(Lt), tt = et.default || et, nt = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, re = () => {
  console.log("A function wasn't passed as a props when it needed to be.");
}, _ = (e) => e == null || typeof e == "object" && Object.keys(e).length === 0 || typeof e == "string" && e.trim().length === 0, Q = () => {
  let e = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
  return new Date(/* @__PURE__ */ new Date() - e).toISOString().slice(0, 19).replace("T", " ");
}, Y = (e) => {
  let a = !1;
  return Array.isArray(e) && e.length > 0 && (a = !0), a;
}, ue = (e) => {
  let a = !0;
  return Array.isArray(e) && e.length > 0 && (a = !1), a;
}, Mt = (e) => {
  let a = {};
  return Y(e) && !_(e[0]) && (a = e[0]), a;
}, de = (e) => {
  let a = e;
  return _(e) || (a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = a.replace(/"/g, "&quot;"), a = a.replace(/'/g, "&#039;")), a;
}, B = (e) => e === null || e === void 0 ? "" : e === "NaN" || isNaN(e) && typeof e == "number" || isNaN(e) && e === "" || e === "" ? null : e, ne = (e) => {
  let a = "";
  return _(e) || (a = Re(e).trim()), a;
}, Re = (e) => {
  let a = "";
  return _(e) || (a = e.toString()), a;
}, rt = (e, a, i, c, u) => {
  let l = "Add log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    let p = "Add Log", f = `${e}logs/`, t = "", n = "";
    fetch(f, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: u })
    }).then((s) => {
      if (t = s, t.status === 200)
        return t.json();
      ce(e, a, i, c, { operation: `${p} SQL Server`, transactionData: { url: f, response: { ok: t.ok, redirected: t.redirected, status: t.status, statusText: t.statusText, type: t.type, url: t.url }, data: n, logObject: u }, errorData: { message: `${t.status} ${t.statusText} ${t.url}` }, dateEntered: Q() }), l = `${p}: ${t.status} ${t.statusText} ${t.url}`;
    }).then((s) => {
      n = s, l = s;
    }).catch((s) => {
      ce(e, a, i, c, { operation: p, transactionData: { url: f, response: { ok: t.ok, redirected: t.redirected, status: t.status, statusText: t.statusText, type: t.type, url: t.url }, data: n, logObject: u }, errorData: { name: s.name, message: s.message, stack: s.stack }, dateEntered: Q() }), l = `${p}: ${de(s.name)}: ${de(s.message)}`;
    });
  }
  return l;
}, ce = (e, a, i, c, u) => {
  let l = "Add error log not attempted due to parameter values.";
  if (c === !0 && i !== !1) {
    let p = "Add Error Log", f = `${e}errorLogs/`, t = "";
    fetch(f, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: a
      }),
      body: JSON.stringify({ recordObject: u })
    }).then((n) => {
      if (t = n, t.status === 200)
        return t.json();
      logResult = `${p}: ${t.status} ${t.statusText} ${t.url}`;
    }).then((n) => {
      l = n;
    }).catch((n) => {
      l = `${p}: ${de(n.name)}: ${de(n.message)}`;
    });
  }
  return l;
}, G = (e, a) => {
  let i = e;
  return _(e) || (_(a) ? i = tt(e) : i = tt(e, a)), i;
}, at = () => ({ appCodeName: navigator.appCodeName, appName: navigator.appName, appVersion: navigator.appVersion, cookieEnabled: navigator.cookieEnabled, language: navigator.language, onLine: navigator.onLine, platform: navigator.platform, product: navigator.product, userAgent: navigator.userAgent }), It = {}, mt = () => {
  let e = "";
  try {
    typeof import.meta < "u" && (e = "production");
  } catch {
  }
  return e === "development";
}, jt = () => window?.electronEnvironment?.inElectron ?? !1, Ft = () => !!(mt() || jt() || window.location.href.includes("orbiseducation.com")), le = () => {
  const e = It?.VITE_ALLOW_DEVELOPMENT_COMPUTERLOG;
  return !!(Ft() && (!mt() || e === "True"));
}, Te = ({
  alertType: e = "",
  message: a = "",
  includeResetButton: i = !1,
  setMessage: c
}) => {
  const u = F("alert", {
    "alert-success": e === "success",
    "alert-warning": e === "warning",
    "alert-info": e === "info",
    "alert-danger": e === "error"
  });
  return /* @__PURE__ */ o("div", { className: "alert-container", children: /* @__PURE__ */ b("div", { className: u, children: [
    /* @__PURE__ */ o("div", { className: "alert__message-text", children: G(a) }),
    i ? /* @__PURE__ */ o("button", { type: "button", className: "refresh", onClick: () => window.location.reload(), children: "Refresh" }) : null,
    /* @__PURE__ */ o("button", { type: "button", className: "alert__close-button", onClick: () => c(""), children: /* @__PURE__ */ o("i", { className: "fas fa-close" }) })
  ] }) });
}, Ut = ({
  informationMessage: e = "",
  successMessage: a = "",
  warningMessage: i = "",
  errorMessage: c = "",
  informationMessageVisible: u = !1,
  successMessageVisible: l = !1,
  warningMessageVisible: p = !1,
  errorMessageVisible: f = !1,
  addInformationMessage: t = re,
  addSuccessMessage: n = re,
  addWarningMessage: s = re,
  addErrorMessage: m = re
}) => (V(() => {
  _(a) || setTimeout(() => {
    n("");
  }, 5e3);
}, [a]), /* @__PURE__ */ b("div", { className: "alert-messages-container", children: [
  u ? /* @__PURE__ */ o(
    Te,
    {
      message: e,
      setMessage: (v) => {
        t(v);
      },
      alertType: "info"
    }
  ) : null,
  l ? /* @__PURE__ */ o(
    Te,
    {
      message: a,
      setMessage: (v) => {
        n(v);
      },
      alertType: "success"
    }
  ) : null,
  p ? /* @__PURE__ */ o(
    Te,
    {
      message: i,
      setMessage: (v) => {
        s(v);
      },
      alertType: "warning"
    }
  ) : null,
  f ? /* @__PURE__ */ o(Te, { message: c, setMessage: (v) => {
    m(v);
  }, alertType: "error" }) : null
] })), Xt = ({
  urlToCopy: e,
  label: a = "Copy URL",
  disabled: i,
  buttonType: c = "default",
  tooltipStyle: u = ""
}) => {
  const [l, p] = M(!1), f = F("btn", {
    "btn-success": l,
    "btn-light-gray": !l
  }), t = F("btn btn-transparent tooltip-container", {
    "tooltip-right": u === "right",
    "tooltip-left": u === "left",
    "tooltip-down": u === "down"
  }), n = (s) => {
    s.stopPropagation(), _(e) || (navigator.clipboard.writeText(e), p(!0), setTimeout(() => {
      p(!1);
    }, 2e3));
  };
  return /* @__PURE__ */ o(I, { children: c === "icon" ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: t,
      "data-tooltip": l ? "Copied" : a,
      onClick: n,
      disabled: i,
      children: l ? /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ o("i", { className: "fa fa-check green-text" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Copied" })
      ] }) : /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ o("i", { className: "fa fa-copy" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: a })
      ] })
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      className: f,
      onClick: n,
      disabled: i,
      children: l ? /* @__PURE__ */ b(I, { children: [
        /* @__PURE__ */ o("i", { className: "fas fa-check" }),
        " Copied"
      ] }) : a
    }
  ) });
}, Wt = ({ children: e = "No search results." }) => /* @__PURE__ */ b("span", { className: "text-center no-results-message", children: [
  /* @__PURE__ */ o("i", { className: "fa fa-exclamation-triangle red-text" }),
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
      /* @__PURE__ */ o(
        "path",
        {
          fill: "#2e3192",
          d: "M1606.78 424.92v-14.83c-.14-16.25-.4-32.51-.42-48.77 0-5-1.86-7.74-7-7.89-2.21-.06-5 .27-4-4h29.1c1 2.34.7 4.05-2.34 3.91-7.27-.35-8.38 3.84-8.47 10-.39 25.42-.58 50.84.1 76.25v4.43c-7-.34-12.37-2-16.83-7.67-16.65-21.28-33.79-42.18-50.76-63.21-1.81-2.24-3.75-4.37-5.53-6.45-1.89.82-1.53 2.12-1.52 3.15.09 19.92.38 39.85.27 59.77 0 5.41 1.73 8.16 7.28 8.29 2.2.05 5 0 3.53 4.13h-29c-1.56-4.46 1.88-4.24 4.09-4.26 5.14 0 6.73-2.79 6.75-7.37q.21-34.69.52-69.39c0-5.37-3.17-7.15-7.82-7.52-2.52-.2-5.44 0-3.7-4.53 6.69 0 13.54.15 20.37-.06 3.56-.11 4.59 2.63 6.2 4.68q24.93 31.51 49.77 63.1c2.37 3 5 5.8 7.51 8.7zm-873.59 17.71c10.38-14.69 5.51-30.38 6.41-45.23.72-11.84-.34-23.78-.13-35.68.1-5.45-1.86-8.14-7.26-8.36-2-.08-4.43.28-3.88-3.53.22-1.07 1.43-1 2.55-1 16 0 32-.15 48-.07 26.83.13 44.5 15 46.21 38.68C827 413.31 809.23 437 785 441.21c-16.86 2.94-33.79-.12-51.81 1.42zm19.75-7.29c19.62 1.33 38.58 3.56 50.9-15.17 10-15.27 9.65-40.46-1.21-53.08-13.51-15.7-31.58-13.11-49.58-11.32-1.45 26.76-.57 52.73-.11 79.57zm686.06 9.03c-28.53-.08-47.2-19.2-47.25-48.38 0-29.54 20.67-49.28 51.56-49.12 29.94.15 48.56 17.79 48.43 45.88-.15 30.89-21.42 51.7-52.74 51.62zm-33.11-53.63c.21 13 2.72 24.72 10.59 34.66 8.47 10.68 19.75 14.25 33 12.2 13.42-2.08 21.62-10.16 25.46-22.86a59.69 59.69 0 00-1.39-39.69c-6.18-16-20-23.75-38.46-21.94-15.13 1.48-25.42 11.51-28.43 28a85 85 0 00-.79 9.63zM698.1 419.25c-.57 7.75-1.1 15-1.67 22.76h-64.38c0-.67-.41-2.08-.09-2.26 6.52-3.61 5.36-9.81 5.39-15.59.1-20.15.06-40.3.29-60.45.07-5.94-.76-10.63-8.2-10.35-2.94.11-3.52-1.39-2.65-4.24h67.5c-.64 6.07-1.32 12.05-1.9 18-.15 1.55-.5 2.64-2.34 2.6s-1.79-1.42-2.08-2.79c-2.28-10.57-2.31-10.57-13.66-11.78-7.51-.81-15-1.15-22.91.67v34.77a88.64 88.64 0 0024.51 0c4.35-.52 3.85-3.71 4.21-6.6.24-1.86-.5-4.71 2.79-4.34 2.6.29 1.91 2.74 1.92 4.43.07 7.31 0 14.62 0 21.92 0 1.77.41 4.05-2.34 4.07s-2.55-2.31-2.47-4c.29-6.69-3.46-8.76-9.39-8.7-6.35.07-12.7 0-19.37 0-1.32 12.92-.93 25.19-.2 38.32 11.62.2 23.14.63 34.7-.63 5.71-.63 5.24-5.36 6.59-9 .96-2.64-.35-6.99 5.75-6.81zm157.26-69.96h38.56c1 4.23-1.67 4.15-4 4-7-.44-9 3.32-9 9.68.17 16.25-.11 32.51.11 48.76.21 15.71 6 21.92 21.64 23.64a44.33 44.33 0 0015-.91c11.57-2.67 17-7.86 17.77-19.49 1.24-18.51.59-37.07.29-55.62-.08-5.09-3.55-5.73-7.45-6-2.26-.17-5.48.87-4.81-4.5h29.73c1.27 0 2.25.4 2.43 1.81.23 1.75-.84 2.24-2.35 2.65-10.56 2.84-10.49 2.87-10.59 14.17-.14 16 .3 32.09-.78 48.05-1.09 16.31-9.3 24.92-25.31 27.74-10.63 1.87-21.42 1.9-31.85-1.94s-16.1-11-16.3-22.15c-.33-19-.69-38-.66-57 0-6.06-2.14-9-8.26-8.86-2.47.05-5.47.4-4.17-4.03zm308.58 92.9c1.76-7.62 8.87-2.76 12.21-7.11-1.71-7.39-5.61-14.61-8.47-22.18-.83-2.21-3-1.79-4.74-1.79h-29.53a3.85 3.85 0 01-.68 0c-3.84-.56-4.57 2.48-5.38 5-2.14 6.56-7.54 12.25-6.18 19.66.41 2.24 4 1.55 6.22 1.75 3.09.29 4.87 1.08 3.36 4.69h-29.42c-1.18-2.66-.86-4.56 2.47-4.51 5.46.08 7.37-3.77 9.16-7.83 11.26-25.48 22.46-51 33.82-76.4 1-2.22.77-5.88 4.72-5.8s3.64 3.65 4.61 5.91c10.52 24.3 20.84 48.69 31.38 73 2.19 5.06 3.53 11.14 11.09 11.38 2.05.07 1.54 2.37 1.09 4.27zm-32.09-37.14h32.41l-16-38.63zm-60.61-51.9c-.74 5.61-1.39 10.56-2 15.52-.23 1.74.1 4-2.7 3.81-2.11-.12-2.71-1.74-2.46-3.41 1.6-10.66-6.51-12.51-13.65-14.33-15.35-3.91-30.17-2.28-41 10.27-12.26 14.25-12.48 31.22-5.6 47.81 6.62 15.94 20.16 23 37 24.15 10.91.75 21.13-1.88 31.48-8-.61 4.46-1.06 7.52-4.41 9.12-19.73 9.44-53.84 10.25-71.68-10.92-12.38-14.69-14.1-31.59-8.06-49 6.31-18.21 20.8-27.32 39.15-30.31a78.32 78.32 0 0143.93 5.29zm224.3-3.92v18.58c0 1.45-.39 2.78-2.2 2.86-2.19.1-2.33-1.41-2.7-3.13-2.53-11.91-2.57-11.9-15-11.9h-11.16c-1.74 13.5-.84 26.52-1 39.5-.12 11.23.07 22.47 0 33.7 0 5.63 1.84 9.22 8.32 8.88 2.37-.12 5.37-.07 4.54 4.78h-36.06c-1.25 0-2.29-.33-2.46-1.75-.28-2.18 1.28-3.07 2.92-2.92 10.11.93 10.13-5.76 10.08-12.84-.15-21.55-.17-43.09-.27-64.64 0-1.32-.23-2.64-.38-4.24-7.36-.88-14.41-.49-21.44-.19-4.29.18-3.63 3.7-4.6 6.41s1.52 7.83-4.87 8.5c-.34-7.23-.67-14.2-1-21.6zm28.76-.03h38.64c1 3.95-1.29 4.27-3.75 4.1-6.42-.43-9.14 2.63-9.13 8.88q.11 33.35 0 66.7c0 5.66 2 9.15 8.41 8.86 2.29-.1 5.51-.21 4.49 4.35h-38.67c-1.08-4.9 2.56-4.42 5-4.38 5.68.1 7.8-2.93 7.79-8 0-22.69-.18-45.37-.11-68.06 0-5.81-2.6-8.32-8.21-8.29-2.44-.01-5.47.46-4.46-4.16z",
          id: "prefix__Education"
        }
      ),
      /* @__PURE__ */ o("path", { fill: "#02a04e", d: "M630.82 316.18h993.59v5.62H630.82z", id: "prefix__Line" }),
      /* @__PURE__ */ o(
        "path",
        {
          fill: "#2e3192",
          d: "M976.61 203.58c19.75 25.55 37.8 51.19 57.66 75.46a15.18 15.18 0 0010.44 6c6.83.71 6.86.91 4.87 8.38a177 177 0 00-31.39.13c-3.93.43-5-2.83-6.68-5-16.89-21.68-32-44.72-49.49-65.94-5-6-10-11.94-15-17.94-1.25-1.51-3.16-2.77-2.07-5.32 1.16-2.73 3.42-1.77 5.31-1.68 9.94.46 19.7-.3 29-4.12a37.07 37.07 0 0020.3-47.93c-4.73-11.69-14.51-16.76-26-18.95-10.92-2.07-21.87-1.09-32.74 1.2-4.4.92-5 3.67-5.19 7.45-1.47 23.35-1 46.72-.93 70.09 0 22.22-.67 44.45.65 66.66.62 10.48 1.84 11.6 12.1 12.65 3.65.37 7.29.72 11.06 1.09 1.54 2.26.94 4.69.25 8.1a568.35 568.35 0 00-71.26.21c-2.63-2.64-2-5.09-1.43-8.16 4.82-.5 9.73-1.15 14.67-1.51 5.79-.42 8.72-3.41 9-9.15 0-.92.16-1.83.18-2.75.7-45.37.8-90.74-.13-136.11-.19-9.12-2.29-10.95-11.63-11.59-2.06-.14-4.12-.13-6.18-.25-6.73-.4-6.91-.67-5.57-8 7 0 14-.23 21.06 0 24.28.93 48.52-1.28 72.79-.73a133 133 0 0114.33 1.45c34.41 4.56 42.71 42.51 22.2 66.1-10.37 11.89-24.24 16.75-40.18 20.16zm238.88-10.3c3.82.61 7.44 1.15 11 1.75 27.54 4.58 41.17 25.23 34.7 52.54-5.41 22.78-28.14 41.82-53.43 45.11-11.21 1.46-22.39 1.23-33.59.63a256.21 256.21 0 00-40.83.6c-2.05-4.27-1.17-6.93 2.68-8.09 5.38-1.62 6.45-5.56 6.7-10.52 1.91-38.45 1.47-76.91 1.16-115.38 0-6.87 0-13.74-.24-20.61-.39-12.71-1.54-14-14.37-14.54-5.85-.23-8.82-1.77-6.51-8.23 6.34 0 12.67-.19 19 0 21.53.73 43-1 64.51-1.17a87.46 87.46 0 0119.76 2c24.76 5.52 35.37 30.08 22.7 52.13-6 10.51-15.35 16.68-26.38 20.77-2.25.9-4.87.97-6.86 3.01zm-47 7v63.5c0 18.71 0 18.71 18.78 19.1 32.32.67 49.94-16.59 48.27-48-.69-13.22-5.56-24.83-18.88-30.16-15.41-6.14-31.66-5.32-48.16-4.4zm-.25-10.94c14.75.28 29 1.83 42.45-4.08 13-5.72 17.45-16.93 17.7-30.07.25-12.91-6-22.16-17.46-26-13.54-4.55-27.34-3.86-41.27-1.06-2.08 20.39-1.15 40.32-1.41 61.25zm-462.55-77.11c35.25.22 59.55 6.23 79 25.66 19 18.94 24.46 42.65 22.74 68.15C802.58 278.55 727 320.57 662.32 287c-24.66-12.82-37.62-34.44-42.26-60.94-6.77-38.73 1.93-72.51 35.37-96.62 17.5-12.64 37.57-17.44 50.26-17.21zm74.68 95.49c0-4.12.37-8.28-.06-12.35-4.41-41.51-25.3-73.14-74.78-72-27.38.62-49.59 16.73-57 43.12-8.3 29.5-5.1 58.17 9.35 85.14 9.93 18.54 25.39 30.53 46.72 33.4 28.81 3.87 59.09-6 70.65-41.53 3.75-11.67 5.82-23.5 5.12-35.78zm828.77-50c-1.13.1-2.22.28-3.32.28-1.36 0-2.71-.13-4.66-.24-.27-4.9-.84-9.63-.69-14.34a11.68 11.68 0 00-5.62-10.94c-13.55-9-28.17-11.88-43.85-7.15a34.69 34.69 0 00-23.36 41.23c2.84 11.49 11 17.72 22.14 19.95s22.56 3.8 33.83 5.8c18 3.2 34 9.56 38.93 29.51 5.21 21-.19 39.48-16.08 54.42-21.53 20.23-47.65 23.65-75.55 19.82a94.91 94.91 0 01-23.12-6.25c-2.52-1-4.26-2.15-4-5.41a326.32 326.32 0 001.46-34.73c2.79-1.67 5.22-1.1 8.32-.66.4 4.67 1.09 9.38 1.14 14.09.07 6.13 2.65 10.6 7.9 13.48 19.48 10.68 39.62 12.64 59.81 2.69 16-7.88 23.66-27.59 18.51-44.6-3.26-10.79-11.16-16.6-21.55-19-11.34-2.64-22.87-4.52-34.31-6.76-24.5-4.79-37.6-17.1-39.73-37.31-2.55-24.23 9.26-45.6 31.15-54.18 24.91-9.77 49.42-5.66 73.46 4.09 2.26.92 3.11 2.25 2.81 4.72-1.26 10.37-2.4 20.77-3.62 31.49zm-186.96 128.11a10.84 10.84 0 01-.5 8.1c-23.81-1.59-48-1.25-71.83 0-2-2.9-1.49-5.28-.83-8.05 4.06-.43 8.1-.88 12.15-1.28 9.69-1 11.31-2.43 11.79-12.29.42-8.46.47-16.94.45-25.41-.08-35.52-.12-71-.45-106.54-.14-13.92-1.66-15.11-15.49-15.79-2.72-.13-5.43-.45-8-.66-1.63-2.44-1-4.68-.71-8 24.32.73 48.64 1.14 72.76-.2 1.76 2.88 1.3 5.26.67 7.65-3.6 1.39-7.31 1.07-10.94 1.29-10.78.64-12.62 2.22-13.08 13.19-.43 10.3-.44 20.61-.43 30.92q0 49.15.22 98.3c0 2.29.19 4.58.26 6.86.22 6.85 3.49 10.49 10.59 10.66 4.36.14 8.67.8 13.37 1.25z",
          id: "prefix__Orbis"
        }
      ),
      /* @__PURE__ */ b("g", { id: "prefix__Layer_6", "data-name": "Layer 6", children: [
        /* @__PURE__ */ o(
          "path",
          {
            fill: "#2e3192",
            d: "M525.46 150.48a279 279 0 00-30.17-46.32C368.48 118.08 239.74 83.72 196.2 12.31a277.63 277.63 0 00-91.52 48.52C225 135.9 368.16 159.12 525.46 150.48z"
          }
        ),
        /* @__PURE__ */ o(
          "path",
          {
            fill: "#02a04e",
            d: "M551.87 227.49A275.59 275.59 0 00536.31 174c-182.93 35.69-346.18 18.14-492.11-46.2a277 277 0 00-31.93 68.32c183.88 61.78 363.04 63.25 539.6 31.37z"
          }
        ),
        /* @__PURE__ */ o(
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
  /* @__PURE__ */ o("span", { className: "sr-only", children: "required" })
] }), Ce = ({
  id: e = "",
  label: a = "",
  value: i,
  autoFocus: c = !1,
  disabled: u = !1,
  hint: l = "",
  inlineError: p = "",
  isRequired: f = !1,
  list: t = "",
  max: n = null,
  maxLength: s = null,
  min: m = null,
  placeholder: y = "",
  rows: T = 10,
  step: w = null,
  srOnly: N = !1,
  type: v = "text",
  useInputAddon: C = !1,
  onKeyDown: R = () => {
  },
  // * Used an empty function instead of noFunctionAvailable so that console logs don't appear on every key down -- 09/02/2025 JH
  updateValue: x = (S) => {
  }
}) => {
  const [S, r] = M("password"), d = F("", {
    "sr-only": N,
    "input-addon": C
  }), h = F("form-group", {
    "with-addon": C,
    "input-error": !_(p),
    "input-disabled": u
  }), g = {};
  m != null && (g.min = m), n != null && (g.max = n), w != null && (g.step = w), s != null && (g.maxLength = s);
  const E = (O) => {
    const L = O.target.value;
    if (v === "number") {
      const q = L === "" ? "" : Number(L);
      x(Number.isNaN(q) ? L : q);
      return;
    }
    let $ = L;
    s != null && $.length > s && ($ = $.slice(0, s)), x($);
  };
  return /* @__PURE__ */ b("div", { className: h, children: [
    /* @__PURE__ */ b("label", { htmlFor: e, className: d, children: [
      a,
      f ? /* @__PURE__ */ o(ee, {}) : null
    ] }),
    _(l) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(l) }),
    v === "textarea" ? /* @__PURE__ */ o(
      "textarea",
      {
        id: e,
        name: e,
        placeholder: y,
        rows: T,
        value: i == null ? "" : String(i),
        disabled: u,
        onChange: E,
        onKeyDown: R
      }
    ) : null,
    v === "color" ? /* @__PURE__ */ b("div", { className: "color-input-container", children: [
      /* @__PURE__ */ o(
        "input",
        {
          type: v,
          id: e,
          placeholder: y,
          value: i,
          disabled: u,
          onChange: E,
          autoFocus: c
        }
      ),
      i
    ] }) : null,
    v === "password" ? /* @__PURE__ */ b("div", { className: "form-group__password-input-group", children: [
      /* @__PURE__ */ o(
        "input",
        {
          type: S,
          id: e,
          placeholder: y,
          value: i,
          disabled: u,
          onChange: E,
          autoFocus: c
        }
      ),
      /* @__PURE__ */ b(
        "div",
        {
          className: "form-group__password-input-group__password-addon",
          onMouseOver: () => r("text"),
          onMouseOut: () => r("password"),
          title: "Hover to show password.",
          children: [
            /* @__PURE__ */ o("i", { className: "fas fa-eye" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Hover to show password." })
          ]
        }
      )
    ] }) : null,
    v !== "textarea" && v !== "toggle" && v !== "password" && v !== "color" ? /* @__PURE__ */ o(
      "input",
      {
        type: v,
        id: e,
        placeholder: y,
        value: i,
        disabled: u,
        onChange: E,
        list: t,
        autoFocus: c,
        ...g
      }
    ) : null,
    _(p) ? null : /* @__PURE__ */ o("div", { className: "inline-alert inline-alert-danger", children: G(p) })
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
  demonstrationMode: u = !1,
  environmentMode: l = "",
  databaseAvailable: p = !0,
  sessionToken: f = null,
  loggedInUser: t = null,
  disabled: n = !1,
  sessionTokenName: s = "",
  handleNavigation: m = it,
  setFetchAuthorization: y = Ht,
  setDatabaseAvailable: T = st,
  setUserTokenExpired: w = st,
  setLoggedInUser: N = zt,
  addSuccessMessage: v = ot,
  addErrorMessage: C = ot,
  clearMessages: R = it
}) => {
  const [x, S] = M(null), [r, d] = M(null), [h, g] = M(""), [E, O] = M(""), [L, $] = M(""), [q, P] = M(""), [A, z] = M(""), [U, fe] = M({});
  V(() => {
    const be = localStorage.getItem(s);
    (_(be) || _(t)) && (rt(
      a,
      y("", l, u),
      p,
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
    ), m());
  }, [t]);
  const Pe = () => {
    if (t) {
      S(t), d(t.userID ?? null), g(t.username ?? ""), O(t.firstName ?? ""), $(t.lastName ?? ""), P(t.email ?? ""), z("");
      return;
    }
    S(null), d(null), g(""), O(""), $(""), P(""), z("");
  };
  V(() => {
    Pe();
  }, [t]), V(() => {
    _(U) || (!_(U.txtFirstName) && !_(E) && fe({
      ...U,
      txtFirstName: ""
    }), !_(U.txtLastName) && !_(L) && fe({
      ...U,
      txtLastName: ""
    }), !_(U.txtEmail) && !_(q) && !_(q.match(nt)) && fe({
      ...U,
      txtEmail: ""
    }));
  }, [E, L, q, U]);
  const yt = () => {
    R();
    const be = "Save Record";
    let K = !1, D = "", H = "", j = {};
    _(ne(E)) && (j = {
      ...j,
      txtFirstName: "Please enter the <strong>First Name</strong>."
    }), _(ne(L)) && (j = {
      ...j,
      txtLastName: "Please enter the <strong>Last Name</strong>."
    }), _(ne(q)) ? j = {
      ...j,
      txtEmail: "Please enter the <strong>Email</strong>."
    } : _(q.match(nt)) && (j = {
      ...j,
      txtEmail: "Please enter a valid email address for the <strong>Email</strong>."
    }), _(j) || (H = `${H}<br />Please fix the errors with the indicated fields in the form.`), _(D) || (D = `Please enter the user's${D.replace(/^,/, "")}.`), _(H) || (_(D) ? D = H.replace(/<br\s*\/?>/, "") : D = D + H), !_(D) || !_(j) ? (_(D) || C(`${be}: ${D}`), _(j) || fe(j), K = !1) : K = !0, K === !0 && Et();
  }, Et = (be) => {
    const K = `${a}users/`;
    let D, H, j = "", Le = "";
    const he = t, pe = r, ae = {
      // username: convertNullEmptyString(formatTrim(txtUsername)),
      firstName: B(ne(E)),
      lastName: B(ne(L)),
      email: B(ne(q)),
      password: B(ne(A)),
      updatedBy: t?.userID ?? null
    };
    j = "Updated User", Le = "PUT", ae.userID = pe, fetch(K, {
      method: Le,
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: y(f, l, u)
      }),
      body: JSON.stringify({ recordObject: ae })
    }).then((Z) => (D = Z, D.status === 200 ? D.json() : (ce(
      a,
      y("", l, u),
      p,
      le(),
      {
        operation: `${j} SQL Server`,
        transactionData: {
          url: K,
          response: {
            ok: D.ok,
            redirected: D.redirected,
            status: D.status,
            statusText: D.statusText,
            type: D.type,
            url: D.url
          },
          data: H,
          primaryKeyID: pe,
          previousRecord: he,
          recordObject: ae,
          applicationVersion: e,
          loggedInUser: t,
          computerLog: i
        },
        errorData: { message: `${D.status} ${D.statusText} ${D.url}` },
        dateEntered: Q()
      }
    ), D.status === 401 && w(!0), Promise.reject(Error(D.status + " Fetch failed."))))).then((Z) => {
      if (H = Z, _(H))
        C(`${j}: No Results Returned.`), ce(
          a,
          y("", l, u),
          p,
          le(),
          {
            operation: `${j} SQL Server`,
            transactionData: {
              url: K,
              response: {
                ok: D.ok,
                redirected: D.redirected,
                status: D.status,
                statusText: D.statusText,
                type: D.type,
                url: D.url
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
      else if (H.transactionSuccess && !_(H.records)) {
        const W = Mt(H.records);
        g(B(W.username)), O(B(W.firstName)), $(B(W.lastName)), P(B(W.email)), z(B(W.password));
        const bt = {
          ...x ?? t,
          username: B(W.username),
          firstName: B(W.firstName),
          lastName: B(W.lastName),
          email: B(W.email),
          password: B(W.password)
        };
        N(bt), T(!0), rt(
          a,
          y("", l, u),
          p,
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
        ), v(`${j}: ${H.message}`);
      } else
        C(`${j}: ${H.message}`), ce(
          a,
          y("", l, u),
          p,
          le(),
          {
            operation: `${j} SQL Server`,
            transactionData: {
              url: K,
              response: {
                ok: D.ok,
                redirected: D.redirected,
                status: D.status,
                statusText: D.statusText,
                type: D.type,
                url: D.url
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
      C(
        `${j}: ${de(Z.name)}: ${de(Z.message)}`
      ), ce(
        a,
        y("", l, u),
        p,
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
    /* @__PURE__ */ o("h2", { children: "Profile" }),
    /* @__PURE__ */ b("div", { className: "field-legend-container", children: [
      /* @__PURE__ */ o("div", { className: "field-legend", children: /* @__PURE__ */ o("em", { children: "Note: Form fields that are grayed out are not able to be changed." }) }),
      /* @__PURE__ */ b("div", { className: "field-legend", children: [
        /* @__PURE__ */ o("span", { className: "required", children: " * " }),
        "indicates a required field."
      ] })
    ] }),
    /* @__PURE__ */ b("form", { className: "admin-form", children: [
      /* @__PURE__ */ b("p", { children: [
        /* @__PURE__ */ o("strong", { children: "Username" }),
        ": ",
        h
      ] }),
      /* @__PURE__ */ o(
        Ce,
        {
          id: "txtFirstName",
          type: "text",
          label: "First Name",
          isRequired: !0,
          inlineError: U.txtFirstName ?? "",
          disabled: n,
          value: E,
          updateValue: O
        }
      ),
      /* @__PURE__ */ o(
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
      /* @__PURE__ */ o(
        Ce,
        {
          id: "txtEmail",
          type: "text",
          label: "Email",
          isRequired: !0,
          inlineError: U.txtEmail ?? "",
          disabled: n,
          value: q,
          updateValue: P
        }
      ),
      /* @__PURE__ */ o(
        Ce,
        {
          id: "txtPassword",
          type: "text",
          label: "Password (Only updated if a value is entered)",
          isRequired: !0,
          disabled: n,
          value: A,
          updateValue: z
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex-row", children: [
        /* @__PURE__ */ o("button", { type: "button", className: "btn btn-primary", onClick: yt, children: "Save" }),
        /* @__PURE__ */ o(
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
  sortDirection: u = "",
  sortProperty: l = ""
}) => {
  const p = F("fa", {
    "fa-sort-up": l === e && u === "asc",
    "fa-sort-down": l === e && u === "desc",
    "fa-sort": l !== e || u === "unsorted"
  }), f = (t) => {
    u === "unsorted" || t !== l ? (c(t), i("asc")) : u === "asc" ? (c(t), i("desc")) : (c(""), i("unsorted"));
  };
  return /* @__PURE__ */ b("div", { className: "sortable-column-heading", children: [
    a,
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "btn btn-transparent sort-button",
        onClick: () => f(e),
        children: /* @__PURE__ */ o("i", { className: p })
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
  handleDragStart: u,
  handleDragOver: l,
  handleDrop: p,
  onDragLeave: f,
  handleManualMove: t
}) => /* @__PURE__ */ o(I, { children: ue(e) ? null : /* @__PURE__ */ o("ul", { className: "sortable-list", children: e.map((n, s) => /* @__PURE__ */ b("li", { className: "sortable-list__item", children: [
  /* @__PURE__ */ o("div", { className: "sortable-list__item__order-number", children: s + 1 }),
  /* @__PURE__ */ b(
    "div",
    {
      className: `sortable-list__item__drag-item ${c && c.draggedTo === Number(s) ? "dropArea" : ""}`,
      "data-position": s,
      draggable: !0,
      onDragStart: (m) => u(m, e),
      onDragOver: l,
      onDrop: p,
      onDragLeave: f,
      children: [
        /* @__PURE__ */ o("div", { className: "sortable-list__item__drag-item__title", children: G(n[a]) }),
        _(n[i]) ? null : /* @__PURE__ */ o("div", { className: "sortable-list__item__drag-item__subtitle", children: G(n[i]) })
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
          /* @__PURE__ */ o("i", { className: "fa fa-chevron-up" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Move Up" })
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
          /* @__PURE__ */ o("i", { className: "fa fa-chevron-down" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Move Down" })
        ]
      }
    )
  ] })
] }, s)) }) }), Jt = () => /* @__PURE__ */ b("div", { className: "spinner-container", children: [
  /* @__PURE__ */ o("i", { className: "fa fa-spinner loading-spinner" }),
  /* @__PURE__ */ o("span", { className: "sr-only", children: "Loading..." })
] }), Qt = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  setDialogBoxOpen: u
}) => {
  const l = we(null), p = i, f = c, t = e, n = F("modal-dialog", {
    "modal-sm": p === "sm",
    "modal-md": p === "md",
    "modal-lg": p === "lg",
    "modal-xl": p === "xl"
  });
  return V(() => {
    const s = l.current;
    if (!s) return;
    a ? s.showModal() : s.close();
    const m = (y) => {
      y.preventDefault(), a && u(!1);
    };
    return s.addEventListener("close", m), s.addEventListener("cancel", m), () => {
      s.removeEventListener("close", m), s.removeEventListener("cancel", m);
    };
  }, [a]), /* @__PURE__ */ o(I, { children: /* @__PURE__ */ b("dialog", { className: n, ref: l, closedby: "any", children: [
    /* @__PURE__ */ b("div", { className: "modal-header", children: [
      /* @__PURE__ */ o("h5", { className: "modal-title", id: "exampleModalLabel", children: f }),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => u(!a),
          title: "Close",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-close" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "modal-body", children: t }),
    /* @__PURE__ */ o("div", { className: "modal-footer", children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "btn btn-primary",
        onClick: () => u(!a),
        children: "OK"
      }
    ) })
  ] }) });
}, en = ({
  dialogBoxContent: e = "",
  dialogBoxOpen: a = !1,
  dialogBoxSize: i = "",
  dialogBoxTitle: c = "",
  dialogBoxType: u = "",
  setDialogBoxContinue: l
}) => {
  const p = we(null);
  let f = i, t = c, n = e;
  u === "confirmDelete" ? (f = "md", t = "Delete Record?", n = "Are you sure you want to delete this record?") : u === "confirmRemove" ? (f = "md", t = "Remove Record?", n = "Are you sure you want to remove this record?") : u === "confirmRemoveAll" ? (f = "md", t = "Remove All Records?", n = "Are you sure you want to remove all records?") : u === "changePagePrompt" ? (f = "md", t = "Save Changes?", n = "You have unsaved changes. By clicking OK, these changes would be discarded. Do you want to proceed?") : u === "logOut" ? (f = "md", t = "Log Out?", n = "Are you sure you want to log out?") : u === "closeProgram" && (f = "md", t = "Close Program?", n = "Are you sure you want to close this program?");
  const s = F("modal-dialog", {
    "modal-sm": f === "sm",
    "modal-md": f === "md",
    "modal-lg": f === "lg",
    "modal-xl": f === "xl"
  });
  return V(() => {
    const m = p.current;
    if (!m) return;
    a ? m.showModal() : m.close();
    const y = (T) => {
      T.preventDefault(), a && l(!1);
    };
    return m.addEventListener("close", y), m.addEventListener("cancel", y), () => {
      m.removeEventListener("close", y), m.removeEventListener("cancel", y);
    };
  }, [a]), /* @__PURE__ */ o(I, { children: /* @__PURE__ */ b("dialog", { className: s, ref: p, closedby: "any", children: [
    /* @__PURE__ */ b("div", { className: "modal-header", children: [
      /* @__PURE__ */ o("h5", { className: "modal-title", id: "exampleModalLabel", children: t }),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => l(!1),
          title: "Close",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-close" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "modal-body", children: n }),
    /* @__PURE__ */ b("div", { className: "modal-footer", children: [
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: "btn btn-primary",
          onClick: () => l(!0),
          children: "OK"
        }
      ),
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: "btn btn-cancel",
          onClick: () => l(!1),
          children: "Cancel"
        }
      )
    ] })
  ] }) });
}, gt = (e, a) => {
  const [i, c] = M(a);
  return V(() => {
    const u = (l) => {
      e.current && l.target instanceof Node && !e.current.contains(l.target) && c(!i);
    };
    return i && window.addEventListener("click", u), () => {
      window.removeEventListener("click", u);
    };
  }, [i, e]), [i, c];
}, De = (e, a) => {
  let i = "";
  return a.type === "property" ? i = e[a.text] : a.type === "string" && (i = G(a.text)), i;
}, tn = ({
  id: e = "",
  legend: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: u = [],
  value: l = [],
  columns: p = 1,
  disabled: f = !1,
  hint: t = "",
  inlineError: n = "",
  isRequired: s = !1,
  placeholder: m = "Select Value",
  srOnly: y = !1,
  updateValue: T
}) => {
  const w = we(null), [N, v] = gt(w, !1), C = F("form-group checkbox-dropdown-group", {
    "input-disabled": f
  }), R = F("", {
    "sr-only": y
  }), x = F("checkbox-dropdown-container", {
    // "show": !isDropdownOpen,
    "input-error": !_(n)
  }), S = (r) => {
    const d = r.target.value;
    r.target.checked ? T([...l, d]) : T(l.filter((h) => h !== d));
  };
  return /* @__PURE__ */ b("fieldset", { className: C, ref: w, children: [
    /* @__PURE__ */ b("legend", { className: R, children: [
      a,
      " ",
      s ? /* @__PURE__ */ o(ee, {}) : null
    ] }),
    /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent open-dropdown-button",
        onClick: () => v(!N),
        children: [
          Y(l) ? /* @__PURE__ */ b(I, { children: [
            l.length,
            " selected"
          ] }) : m,
          N ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-up" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-down" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Open" })
          ] })
        ]
      }
    ),
    N ? /* @__PURE__ */ o("div", { className: x, children: /* @__PURE__ */ b("ul", { className: "checkbox-dropdown", style: { columns: p }, children: [
      _(t) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(t) }),
      Y(i) && !_(c) && Y(u) ? /* @__PURE__ */ o(I, { children: i.map((r) => {
        if (r.active === !0 || _(r.active)) {
          const d = Re(r[c]), h = l.includes(d);
          return /* @__PURE__ */ o("li", { children: /* @__PURE__ */ b("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                id: `${e}${d}`,
                value: d,
                checked: h,
                disabled: f,
                onChange: S
              }
            ),
            /* @__PURE__ */ o("span", { className: "checkbox-label-text", children: u.map((g, E) => /* @__PURE__ */ o(Ae, { children: De(r, g) }, E)) })
          ] }) }, d);
        } else
          return null;
      }) }) : null
    ] }) }) : null,
    _(n) ? null : /* @__PURE__ */ o("div", { className: "inline-alert inline-alert-danger", children: G(n) })
  ] });
}, nn = ({
  id: e = "",
  legend: a = "",
  value: i = [],
  optionData: c = [],
  optionID: u = "",
  optionText: l = [],
  collapseList: p = !1,
  columns: f = 1,
  disabled: t = !1,
  hint: n = "",
  inlineError: s = "",
  isCollapsible: m = !1,
  isRequired: y = !1,
  srOnly: T = !1,
  startCollapsed: w = !0,
  setCollapseList: N,
  updateValue: v
}) => {
  const [C, R] = M(!0), x = F("form-group", {
    "input-disabled": t
  }), S = F("", {
    "sr-only": T
  }), r = F("checkbox-group", {
    "is-collapsible": m,
    show: !C,
    "input-error": !_(s)
  });
  V(() => {
    R(!!m);
  }, [m]), V(() => {
    w === !1 && R(!1);
  }, [w]), V(() => {
    p && (R(!0), N?.(!1));
  }, [p]);
  const d = (h) => {
    const g = h.target.value;
    v(
      h.target.checked ? [...i, g] : i.filter((E) => E !== g)
    );
  };
  return /* @__PURE__ */ b("fieldset", { className: x, children: [
    /* @__PURE__ */ o("legend", { className: S, children: m ? /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => R(!C),
        children: [
          a,
          y ? /* @__PURE__ */ o(ee, {}) : null,
          Y(i) ? /* @__PURE__ */ o("div", { className: "search-filter-count", children: i.length }) : null,
          C ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ b(I, { children: [
      a,
      y ? /* @__PURE__ */ o(ee, {}) : null
    ] }) }),
    /* @__PURE__ */ b("ul", { className: r, style: { columns: f }, children: [
      _(n) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(n) }),
      Y(c) && !_(u) && Y(l) ? /* @__PURE__ */ o(I, { children: c.map((h, g) => {
        if (h.active === !0 || _(h.active)) {
          const E = Re(h[u]), O = i.includes(E);
          return /* @__PURE__ */ o("li", { children: /* @__PURE__ */ b("label", { children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                id: `${e}${E}`,
                value: E,
                checked: O,
                disabled: t,
                onChange: d
              }
            ),
            /* @__PURE__ */ o("span", { className: "checkbox-label-text", children: l.map((L, $) => /* @__PURE__ */ o(Ae, { children: De(h, L) }, $)) })
          ] }) }, g);
        } else
          return null;
      }) }) : null
    ] }),
    _(s) ? null : /* @__PURE__ */ o("div", { className: "inline-alert inline-alert-danger", children: G(s) }),
    m ? /* @__PURE__ */ o("hr", {}) : null
  ] });
}, Gt = ({
  id: e = "",
  label: a = "",
  optionData: i = [],
  optionID: c = "",
  optionText: u = [],
  value: l = "",
  disabled: p = !1,
  emptyOption: f = !1,
  hint: t = "",
  inlineError: n = "",
  isRequired: s = !1,
  placeholder: m = "Select Value",
  srOnly: y = !1,
  useInputAddon: T = !1,
  updateValue: w
}) => {
  const N = F("", {
    "sr-only": y,
    "input-addon": T
  }), v = F("form-group", {
    "with-addon": T,
    "input-error": !_(n),
    "input-disabled": p
  }), C = (R, x) => x.map(
    (S) => S.type === "property" ? String(R[S.text] ?? "") : S.text
  ).join(" ");
  return /* @__PURE__ */ b("div", { className: v, children: [
    /* @__PURE__ */ b("label", { htmlFor: e, className: N, children: [
      a,
      s === !0 ? /* @__PURE__ */ o(ee, {}) : null
    ] }),
    _(t) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(t) }),
    /* @__PURE__ */ b(
      "select",
      {
        className: "form-control",
        id: e,
        value: l,
        disabled: p,
        onChange: (R) => w(R.target.value),
        children: [
          f ? null : /* @__PURE__ */ o("option", { value: "", children: m }),
          Y(i) && !_(c) && Y(u) ? i.map((R, x) => {
            const S = String(R[c] ?? "");
            return /* @__PURE__ */ o("option", { value: S, children: C(R, u) }, S || x);
          }) : null
        ]
      }
    ),
    _(n) ? null : /* @__PURE__ */ o("div", { className: "inline-alert inline-alert-danger", children: G(n) })
  ] });
}, rn = ({
  id: e = "",
  optionData: a = [],
  optionID: i = "",
  optionText: c = [],
  value: u = "",
  collapseList: l = !1,
  columns: p = 1,
  disabled: f = !1,
  hint: t = "",
  inlineError: n = "",
  isCollapsible: s = !1,
  isRequired: m = !1,
  legend: y = "",
  srOnly: T = !1,
  startCollapsed: w = !0,
  setCollapseList: N,
  updateValue: v
}) => {
  const [C, R] = M(!0), x = F("form-group", {
    "input-disabled": f
  }), S = F("", {
    "sr-only": T
  }), r = F("radio-group", {
    "is-collapsible": s,
    show: !C,
    "input-error": !_(n)
  });
  return V(() => {
    R(s ? w : !1);
  }, [s, w]), V(() => {
    l && (R(!0), N?.(!1));
  }, [l, N]), /* @__PURE__ */ b("fieldset", { className: x, children: [
    /* @__PURE__ */ o("legend", { className: S, children: s ? /* @__PURE__ */ b(
      "button",
      {
        type: "button",
        className: "btn btn-transparent collapse-checkboxes-button",
        onClick: () => R(!C),
        children: [
          y,
          m ? /* @__PURE__ */ o(ee, {}) : null,
          _(u) ? null : /* @__PURE__ */ o("div", { className: "search-filter-count", children: "1" }),
          C ? /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-chevron-down" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Open" })
          ] }) : /* @__PURE__ */ b(I, { children: [
            /* @__PURE__ */ o("i", { className: "fa fa-chevron-up" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) : /* @__PURE__ */ b(I, { children: [
      y,
      m ? /* @__PURE__ */ o(ee, {}) : null
    ] }) }),
    /* @__PURE__ */ b("ul", { className: r, style: { columns: p }, children: [
      _(t) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(t) }),
      Y(a) && !_(i) && Y(c) ? /* @__PURE__ */ o(I, { children: a.map((d) => {
        if (d.active === !0 || _(d.active)) {
          const h = Re(d[i]), g = h === u;
          return /* @__PURE__ */ o("li", { children: /* @__PURE__ */ b("label", { className: g ? "active" : "", children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                id: `${e}${h}`,
                name: e,
                value: h,
                checked: g,
                disabled: f,
                onChange: (E) => v(E.target.value)
              }
            ),
            c.map((E, O) => /* @__PURE__ */ o(Ae, { children: De(d, E) }, O))
          ] }) }, h);
        } else
          return null;
      }) }) : null
    ] }),
    _(n) ? null : /* @__PURE__ */ o("div", { className: "inline-alert inline-alert-danger", children: G(n) }),
    s ? /* @__PURE__ */ o("hr", {}) : null
  ] });
}, an = ({
  id: e = "",
  label: a = "",
  value: i = !1,
  disabled: c = !1,
  falseValue: u = "No",
  hint: l = "",
  isRequired: p = !1,
  srOnly: f = !1,
  trueValue: t = "Yes",
  updateValue: n
}) => {
  const s = F("", {
    "sr-only": f
  }), m = F("form-group toggle-switch-container", {
    "input-disabled": c
  });
  return /* @__PURE__ */ b("fieldset", { className: m, children: [
    /* @__PURE__ */ b("legend", { className: s, children: [
      a,
      p ? /* @__PURE__ */ o(ee, {}) : null
    ] }),
    _(l) ? null : /* @__PURE__ */ o("p", { className: "input-hint", children: G(l) }),
    /* @__PURE__ */ b("div", { className: "toggle-switch", onClick: () => !c && n(!i), children: [
      /* @__PURE__ */ o("div", { className: `toggle-switch__button ${i ? "active" : ""}` }),
      /* @__PURE__ */ o("div", { className: "toggle-switch__text", children: i ? /* @__PURE__ */ o(I, { children: t }) : /* @__PURE__ */ o(I, { children: u }) }),
      /* @__PURE__ */ b("label", { className: "sr-only", children: [
        /* @__PURE__ */ o(
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
        u
      ] }),
      /* @__PURE__ */ b("label", { className: "sr-only", children: [
        /* @__PURE__ */ o(
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
    /* @__PURE__ */ o("a", { href: a, className: "orbis-logo-link", children: /* @__PURE__ */ o($t, {}) }),
    /* @__PURE__ */ o("h1", { children: e })
  ] });
}, ln = ({
  defaultResultsPerPage: e = 30,
  ddResultsPerPage: a = 30,
  currentPageNumber: i = 1,
  totalPages: c = 1,
  setDdResultsPerPage: u,
  setCurrentPageNumber: l
}) => {
  const p = (f) => {
    window.scrollTo(0, 0), l(f);
  };
  return /* @__PURE__ */ b("div", { className: "pagination-section", children: [
    /* @__PURE__ */ o(
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
        updateValue: (f) => {
          u(f === "all" ? Number.NaN : Number(f)), l(1);
        }
      }
    ),
    /* @__PURE__ */ b("div", { className: "pagination-controls", children: [
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => p(1),
          disabled: i <= 1,
          title: "Go to First Page",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-double-left" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Go to First Page" })
          ]
        }
      ),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => p(i - 1),
          disabled: i <= 1,
          title: "Go to Previous Page",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-left" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Go to Previous Page" })
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
          onClick: () => p(i + 1),
          disabled: i >= c,
          title: "Go to Next Page",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-right" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Go to Next Page" })
          ]
        }
      ),
      /* @__PURE__ */ b(
        "button",
        {
          type: "button",
          className: "btn btn-light-gray",
          onClick: () => p(c),
          disabled: i >= c,
          title: "Go to Last Page",
          children: [
            /* @__PURE__ */ o("i", { className: "fa fa-angle-double-right" }),
            /* @__PURE__ */ o("span", { className: "sr-only", children: "Go to Last Page" })
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
  /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      role: "link",
      className: a(e?.componentName ?? ""),
      onClick: e.onClick,
      children: e.name
    }
  ),
  _(e.children) ? null : e.children
] }), qt = ({
  navigationItem: e = { name: "", type: "", classes: "", dropdownItems: [] },
  returnActiveClass: a = re
}) => {
  const i = we(null), [c, u] = gt(i, !1), l = F("fa", {
    "fa-caret-up": c,
    "fa-caret-down": !c
  }), p = (e?.dropdownItems ?? []).filter(
    (t) => _(t.isPresent) || t.isPresent === !0
  ), f = _(e?.classes) ? "dropdown" : `dropdown ${e.classes}`;
  return /* @__PURE__ */ b(I, { children: [
    /* @__PURE__ */ b("button", { type: "button", onClick: () => u(!c), ref: i, children: [
      e.name,
      " ",
      /* @__PURE__ */ o("i", { className: l })
    ] }),
    c === !0 && !ue(p) ? /* @__PURE__ */ o("ul", { className: f, children: p.map((t, n) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(
      vt,
      {
        navigationItem: t,
        returnActiveClass: a
      }
    ) }, n)) }) : null
  ] });
}, cn = ({ navigationItems: e = [], componentToLoad: a = "" }) => {
  const i = e.filter(
    (u) => _(u.isPresent) || u.isPresent === !0
  ), c = (u, l) => {
    let p = l ?? "";
    return p += a === u ? " active" : "", p;
  };
  return /* @__PURE__ */ o("nav", { className: "sub-header-nav", children: /* @__PURE__ */ o("ul", { children: ue(i) ? null : /* @__PURE__ */ o(I, { children: i.map((u, l) => /* @__PURE__ */ o("li", { children: u.type === "dropdown" ? /* @__PURE__ */ o(
    qt,
    {
      navigationItem: u,
      returnActiveClass: c
    }
  ) : /* @__PURE__ */ o(
    vt,
    {
      navigationItem: u,
      returnActiveClass: c
    }
  ) }, l)) }) }) });
}, un = () => {
  const [e, a] = M(""), [i, c] = M(""), [u, l] = M(""), [p, f] = M(""), [t, n] = M(!1), [s, m] = M(null), [y, T] = M(!1), [w, N] = M(!1), [v, C] = M(""), R = () => {
    c(""), l(""), f(""), a(""), n(!1), m(null), T(!1), N(!1);
  };
  V(() => {
    s !== null && (y ? s ? (C("D"), R()) : (R(), C("")) : w ? s ? (C("HD"), R()) : (R(), C("")) : R());
  }, [y, w, s]);
  const x = (g) => {
    _(g) || d(g);
  }, S = (g) => {
    const E = _(g?.dialogBoxType) ? "confirmRemove" : g?.dialogBoxType;
    T(!0), d({ dialogBoxType: E });
  }, r = (g) => {
    const E = _(g?.dialogBoxType) ? "confirmRemove" : g.dialogBoxType;
    N(!0), d({ dialogBoxType: E });
  }, d = (g) => {
    _(g) || (n(!0), c(g.dialogBoxSize || ""), l(g.dialogBoxTitle || ""), f(g.dialogBoxContent || ""), a(g.dialogBoxType || ""), m(null));
  };
  return {
    processTransactionValue: v,
    confirmationDialogBoxOpen: t,
    confirmationDialogBoxSize: i,
    confirmationDialogBoxTitle: u,
    confirmationDialogBoxContent: p,
    confirmationDialogBoxType: e,
    confirmationDialogBoxContinue: s,
    confirmAction: x,
    deleteRecord: S,
    hardDeleteRecord: r,
    closeDeleteDialogBox: () => {
      n(!1), a("");
    },
    setConfirmationDialogBoxContinue: m,
    setProcessTransactionValue: C
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
      const m = Number(n.currentTarget.dataset.position);
      c({
        ...i,
        draggedFrom: m,
        isDragging: !0,
        originalOrder: s
      });
    },
    handleDragOver: (n) => {
      if (n.preventDefault(), i.originalOrder && i.draggedFrom !== null) {
        let s = i.originalOrder;
        const m = i.draggedFrom, y = Number(n.currentTarget.dataset.position), T = s[m], w = s.filter((N, v) => v !== m);
        s = [
          ...w.slice(0, y),
          T,
          ...w.slice(y)
        ], y !== i.draggedTo && c({
          ...i,
          updatedOrder: s,
          draggedTo: y
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
    handleManualMove: (n, s, m) => {
      const y = n + s;
      if (y >= 0 && y < m.length) {
        const T = [...m], w = T[n], N = T[y];
        T[n] = N, T[y] = w, e(T), a(T[n], n), a(T[y], y);
      }
    }
  };
}, fn = ({
  allRecords: e = [],
  defaultResultsPerPage: a = 30
}) => {
  const [i, c] = M(a), [u, l] = M(1), [p, f] = M(1), [t, n] = M([]), s = (m) => {
    if (ue(m))
      n([]);
    else {
      const y = isNaN(i) ? m.length : i, T = u * y, w = T - y, N = Math.ceil(m.length / y), v = m.slice(w, T);
      f(N), n(v), u > N && l(N);
    }
  };
  return V(() => {
    ue(e) || s(e);
  }, [i, u]), {
    ddResultsPerPage: i,
    currentPageNumber: u,
    totalPages: p,
    currentPageRecords: t,
    setDdResultsPerPage: c,
    setCurrentPageNumber: l,
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
