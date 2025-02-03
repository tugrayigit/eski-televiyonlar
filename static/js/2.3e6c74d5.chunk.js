/*! For license information please see 2.3e6c74d5.chunk.js.LICENSE.txt */
(this["webpackJsonp@gorch/my00stv"] = this["webpackJsonp@gorch/my00stv"] || []).push([[2], {
    4: function(e, t, n) {
        var r;
        !function(t, n) {
            "use strict";
            "object" === typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
        }("undefined" !== typeof window ? window : this, (function(n, o) {
            "use strict";
            var i = []
              , a = Object.getPrototypeOf
              , s = i.slice
              , u = i.flat ? function(e) {
                return i.flat.call(e)
            }
            : function(e) {
                return i.concat.apply([], e)
            }
              , l = i.push
              , c = i.indexOf
              , d = {}
              , f = d.toString
              , p = d.hasOwnProperty
              , h = p.toString
              , m = h.call(Object)
              , _ = {}
              , g = function(e) {
                return "function" === typeof e && "number" !== typeof e.nodeType && "function" !== typeof e.item
            }
              , y = function(e) {
                return null != e && e === e.window
            }
              , v = n.document
              , x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function b(e, t, n) {
                var r, o, i = (n = n || v).createElement("script");
                if (i.text = e,
                t)
                    for (r in x)
                        (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                n.head.appendChild(i).parentNode.removeChild(i)
            }
            function w(e) {
                return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? d[f.call(e)] || "object" : typeof e
            }
            var T = "3.6.3"
              , A = function(e, t) {
                return new A.fn.init(e,t)
            };
            function S(e) {
                var t = !!e && "length"in e && e.length
                  , n = w(e);
                return !g(e) && !y(e) && ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e)
            }
            A.fn = A.prototype = {
                jquery: T,
                constructor: A,
                length: 0,
                toArray: function() {
                    return s.call(this)
                },
                get: function(e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = A.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return A.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(A.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    }
                    )))
                },
                slice: function() {
                    return this.pushStack(s.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(A.grep(this, (function(e, t) {
                        return (t + 1) % 2
                    }
                    )))
                },
                odd: function() {
                    return this.pushStack(A.grep(this, (function(e, t) {
                        return t % 2
                    }
                    )))
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: i.sort,
                splice: i.splice
            },
            A.extend = A.fn.extend = function() {
                var e, t, n, r, o, i, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" === typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                "object" === typeof a || g(a) || (a = {}),
                s === u && (a = this,
                s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e)
                            r = e[t],
                            "__proto__" !== t && a !== r && (l && r && (A.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t],
                            i = o && !Array.isArray(n) ? [] : o || A.isPlainObject(n) ? n : {},
                            o = !1,
                            a[t] = A.extend(l, i, r)) : void 0 !== r && (a[t] = r));
                return a
            }
            ,
            A.extend({
                expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" === typeof (n = p.call(t, "constructor") && t.constructor) && h.call(n) === m)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (S(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                            ;
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r]))
                                break;
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (S(Object(e)) ? A.merge(n, "string" === typeof e ? [e] : e) : l.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : c.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                        e[o++] = t[r];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                        !t(e[o], o) !== a && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var r, o, i = 0, a = [];
                    if (S(e))
                        for (r = e.length; i < r; i++)
                            null != (o = t(e[i], i, n)) && a.push(o);
                    else
                        for (i in e)
                            null != (o = t(e[i], i, n)) && a.push(o);
                    return u(a)
                },
                guid: 1,
                support: _
            }),
            "function" === typeof Symbol && (A.fn[Symbol.iterator] = i[Symbol.iterator]),
            A.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                d["[object " + t + "]"] = t.toLowerCase()
            }
            ));
            var k = function(e) {
                var t, n, r, o, i, a, s, u, l, c, d, f, p, h, m, _, g, y, v, x = "sizzle" + 1 * new Date, b = e.document, w = 0, T = 0, A = ue(), S = ue(), k = ue(), C = ue(), E = function(e, t) {
                    return e === t && (d = !0),
                    0
                }, D = {}.hasOwnProperty, L = [], N = L.pop, j = L.push, H = L.push, I = L.slice, O = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", F = "\\[[\\x20\\t\\r\\n\\f]*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]", B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", R = new RegExp(P + "+","g"), W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"), $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), G = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), V = new RegExp(P + "|>"), X = new RegExp(B), U = new RegExp("^" + M + "$"), z = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),
                    bool: new RegExp("^(?:" + q + ")$","i"),
                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")
                }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ie = function() {
                    f()
                }, ae = xe((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }
                ), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    H.apply(L = I.call(b.childNodes), b.childNodes),
                    L[b.childNodes.length].nodeType
                } catch (Se) {
                    H = {
                        apply: L.length ? function(e, t) {
                            j.apply(e, I.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                function se(e, t, r, o) {
                    var i, s, l, c, d, h, g, y = t && t.ownerDocument, b = t ? t.nodeType : 9;
                    if (r = r || [],
                    "string" !== typeof e || !e || 1 !== b && 9 !== b && 11 !== b)
                        return r;
                    if (!o && (f(t),
                    t = t || p,
                    m)) {
                        if (11 !== b && (d = K.exec(e)))
                            if (i = d[1]) {
                                if (9 === b) {
                                    if (!(l = t.getElementById(i)))
                                        return r;
                                    if (l.id === i)
                                        return r.push(l),
                                        r
                                } else if (y && (l = y.getElementById(i)) && v(t, l) && l.id === i)
                                    return r.push(l),
                                    r
                            } else {
                                if (d[2])
                                    return H.apply(r, t.getElementsByTagName(e)),
                                    r;
                                if ((i = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return H.apply(r, t.getElementsByClassName(i)),
                                    r
                            }
                        if (n.qsa && !C[e + " "] && (!_ || !_.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
                            if (g = e,
                            y = t,
                            1 === b && (V.test(e) || G.test(e))) {
                                for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = x)),
                                s = (h = a(e)).length; s--; )
                                    h[s] = (c ? "#" + c : ":scope") + " " + ve(h[s]);
                                g = h.join(",")
                            }
                            try {
                                if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + g + "))"))
                                    throw new Error;
                                return H.apply(r, y.querySelectorAll(g)),
                                r
                            } catch (w) {
                                C(e, !0)
                            } finally {
                                c === x && t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace(W, "$1"), t, r, o)
                }
                function ue() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                        t[n + " "] = o
                    }
                }
                function le(e) {
                    return e[x] = !0,
                    e
                }
                function ce(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (Se) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function de(e, t) {
                    for (var n = e.split("|"), o = n.length; o--; )
                        r.attrHandle[n[o]] = t
                }
                function fe(e, t) {
                    var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function me(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function _e(e) {
                    return le((function(t) {
                        return t = +t,
                        le((function(n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--; )
                                n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        }
                        ))
                    }
                    ))
                }
                function ge(e) {
                    return e && "undefined" !== typeof e.getElementsByTagName && e
                }
                for (t in n = se.support = {},
                i = se.isXML = function(e) {
                    var t = e && e.namespaceURI
                      , n = e && (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }
                ,
                f = se.setDocument = function(e) {
                    var t, o, a = e ? e.ownerDocument || e : b;
                    return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement,
                    m = !i(p),
                    b != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                    n.scope = ce((function(e) {
                        return h.appendChild(e).appendChild(p.createElement("div")),
                        "undefined" !== typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }
                    )),
                    n.cssSupportsSelector = ce((function() {
                        return CSS.supports("selector(*)") && p.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                    }
                    )),
                    n.attributes = ce((function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }
                    )),
                    n.getElementsByTagName = ce((function(e) {
                        return e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                    }
                    )),
                    n.getElementsByClassName = J.test(p.getElementsByClassName),
                    n.getById = ce((function(e) {
                        return h.appendChild(e).id = x,
                        !p.getElementsByName || !p.getElementsByName(x).length
                    }
                    )),
                    n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    r.find.ID = function(e, t) {
                        if ("undefined" !== typeof t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (r.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    r.find.ID = function(e, t) {
                        if ("undefined" !== typeof t.getElementById && m) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if ((n = i.getAttributeNode("id")) && n.value === e)
                                    return [i];
                                for (o = t.getElementsByName(e),
                                r = 0; i = o[r++]; )
                                    if ((n = i.getAttributeNode("id")) && n.value === e)
                                        return [i]
                            }
                            return []
                        }
                    }
                    ),
                    r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, r = [], o = 0, i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }
                    ,
                    r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if ("undefined" !== typeof t.getElementsByClassName && m)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    g = [],
                    _ = [],
                    (n.qsa = J.test(p.querySelectorAll)) && (ce((function(e) {
                        var t;
                        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || _.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + q + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length || _.push("~="),
                        (t = p.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || _.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll(":checked").length || _.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length || _.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        _.push("[\\r\\n\\f]")
                    }
                    )),
                    ce((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && _.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"),
                        h.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        _.push(",.*:")
                    }
                    ))),
                    (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                        n.disconnectedMatch = y.call(e, "*"),
                        y.call(e, "[s!='']:x"),
                        g.push("!=", B)
                    }
                    )),
                    n.cssSupportsSelector || _.push(":has"),
                    _ = _.length && new RegExp(_.join("|")),
                    g = g.length && new RegExp(g.join("|")),
                    t = J.test(h.compareDocumentPosition),
                    v = t || J.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType && e.documentElement || e
                          , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    E = t ? function(e, t) {
                        if (e === t)
                            return d = !0,
                            0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == b && v(b, e) ? -1 : t == p || t.ownerDocument == b && v(b, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return d = !0,
                            0;
                        var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], s = [t];
                        if (!o || !i)
                            return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? O(c, e) - O(c, t) : 0;
                        if (o === i)
                            return fe(e, t);
                        for (n = e; n = n.parentNode; )
                            a.unshift(n);
                        for (n = t; n = n.parentNode; )
                            s.unshift(n);
                        for (; a[r] === s[r]; )
                            r++;
                        return r ? fe(a[r], s[r]) : a[r] == b ? -1 : s[r] == b ? 1 : 0
                    }
                    ,
                    p) : p
                }
                ,
                se.matches = function(e, t) {
                    return se(e, null, null, t)
                }
                ,
                se.matchesSelector = function(e, t) {
                    if (f(e),
                    n.matchesSelector && m && !C[t + " "] && (!g || !g.test(t)) && (!_ || !_.test(t)))
                        try {
                            var r = y.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (Se) {
                            C(t, !0)
                        }
                    return se(t, p, null, [e]).length > 0
                }
                ,
                se.contains = function(e, t) {
                    return (e.ownerDocument || e) != p && f(e),
                    v(e, t)
                }
                ,
                se.attr = function(e, t) {
                    (e.ownerDocument || e) != p && f(e);
                    var o = r.attrHandle[t.toLowerCase()]
                      , i = o && D.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                    return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
                ,
                se.escape = function(e) {
                    return (e + "").replace(re, oe)
                }
                ,
                se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                se.uniqueSort = function(e) {
                    var t, r = [], o = 0, i = 0;
                    if (d = !n.detectDuplicates,
                    c = !n.sortStable && e.slice(0),
                    e.sort(E),
                    d) {
                        for (; t = e[i++]; )
                            t === e[i] && (o = r.push(i));
                        for (; o--; )
                            e.splice(r[o], 1)
                    }
                    return c = null,
                    e
                }
                ,
                o = se.getText = function(e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" === typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += o(e)
                        } else if (3 === i || 4 === i)
                            return e.nodeValue
                    } else
                        for (; t = e[r++]; )
                            n += o(t);
                    return n
                }
                ,
                r = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: z,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = A[e + " "];
                            return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)")) && A(e, (function(e) {
                                return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                            }
                            ))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var o = se.attr(r, e);
                                return null == o ? "!=" === t : !t || (o += "",
                                "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                            return 1 === r && 0 === o ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, u) {
                                var l, c, d, f, p, h, m = i !== a ? "nextSibling" : "previousSibling", _ = t.parentNode, g = s && t.nodeName.toLowerCase(), y = !u && !s, v = !1;
                                if (_) {
                                    if (i) {
                                        for (; m; ) {
                                            for (f = t; f = f[m]; )
                                                if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType)
                                                    return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? _.firstChild : _.lastChild],
                                    a && y) {
                                        for (v = (p = (l = (c = (d = (f = _)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2],
                                        f = p && _.childNodes[p]; f = ++p && f && f[m] || (v = p = 0) || h.pop(); )
                                            if (1 === f.nodeType && ++v && f === t) {
                                                c[e] = [w, p, v];
                                                break
                                            }
                                    } else if (y && (v = p = (l = (c = (d = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && l[1]),
                                    !1 === v)
                                        for (; (f = ++p && f && f[m] || (v = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++v || (y && ((c = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [w, v]),
                                        f !== t)); )
                                            ;
                                    return (v -= o) === r || v % r === 0 && v / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                            r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                for (var r, i = o(e, t), a = i.length; a--; )
                                    e[r = O(e, i[a])] = !(n[r] = i[a])
                            }
                            )) : function(e) {
                                return o(e, 0, n)
                            }
                            ) : o
                        }
                    },
                    pseudos: {
                        not: le((function(e) {
                            var t = []
                              , n = []
                              , r = s(e.replace(W, "$1"));
                            return r[x] ? le((function(e, t, n, o) {
                                for (var i, a = r(e, null, o, []), s = e.length; s--; )
                                    (i = a[s]) && (e[s] = !(t[s] = i))
                            }
                            )) : function(e, o, i) {
                                return t[0] = e,
                                r(t, null, i, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }
                        )),
                        has: le((function(e) {
                            return function(t) {
                                return se(e, t).length > 0
                            }
                        }
                        )),
                        contains: le((function(e) {
                            return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || o(t)).indexOf(e) > -1
                            }
                        }
                        )),
                        lang: le((function(e) {
                            return U.test(e || "") || se.error("unsupported lang: " + e),
                            e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }
                        )),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Z.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: _e((function() {
                            return [0]
                        }
                        )),
                        last: _e((function(e, t) {
                            return [t - 1]
                        }
                        )),
                        eq: _e((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }
                        )),
                        even: _e((function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }
                        )),
                        odd: _e((function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }
                        )),
                        lt: _e((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }
                        )),
                        gt: _e((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        }
                        ))
                    }
                },
                r.pseudos.nth = r.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    r.pseudos[t] = pe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    r.pseudos[t] = he(t);
                function ye() {}
                function ve(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function xe(e, t, n) {
                    var r = t.dir
                      , o = t.next
                      , i = o || r
                      , a = n && "parentNode" === i
                      , s = T++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || a)
                                return e(t, n, o);
                        return !1
                    }
                    : function(t, n, u) {
                        var l, c, d, f = [w, s];
                        if (u) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || a) && e(t, n, u))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || a)
                                    if (c = (d = t[x] || (t[x] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                                    o && o === t.nodeName.toLowerCase())
                                        t = t[r] || t;
                                    else {
                                        if ((l = c[i]) && l[0] === w && l[1] === s)
                                            return f[2] = l[2];
                                        if (c[i] = f,
                                        f[2] = e(t, n, u))
                                            return !0
                                    }
                        return !1
                    }
                }
                function be(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var o = e.length; o--; )
                            if (!e[o](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function we(e, t, n, r, o) {
                    for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                        (i = e[s]) && (n && !n(i, r, o) || (a.push(i),
                        l && t.push(s)));
                    return a
                }
                function Te(e, t, n, r, o, i) {
                    return r && !r[x] && (r = Te(r)),
                    o && !o[x] && (o = Te(o, i)),
                    le((function(i, a, s, u) {
                        var l, c, d, f = [], p = [], h = a.length, m = i || function(e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++)
                                se(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []), _ = !e || !i && t ? m : we(m, f, e, s, u), g = n ? o || (i ? e : h || r) ? [] : a : _;
                        if (n && n(_, g, s, u),
                        r)
                            for (l = we(g, p),
                            r(l, [], s, u),
                            c = l.length; c--; )
                                (d = l[c]) && (g[p[c]] = !(_[p[c]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (l = [],
                                    c = g.length; c--; )
                                        (d = g[c]) && l.push(_[c] = d);
                                    o(null, g = [], l, u)
                                }
                                for (c = g.length; c--; )
                                    (d = g[c]) && (l = o ? O(i, d) : f[c]) > -1 && (i[l] = !(a[l] = d))
                            }
                        } else
                            g = we(g === a ? g.splice(h, g.length) : g),
                            o ? o(null, a, g, u) : H.apply(a, g)
                    }
                    ))
                }
                function Ae(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe((function(e) {
                        return e === t
                    }
                    ), s, !0), d = xe((function(e) {
                        return O(t, e) > -1
                    }
                    ), s, !0), f = [function(e, n, r) {
                        var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                        return t = null,
                        o
                    }
                    ]; u < i; u++)
                        if (n = r.relative[e[u].type])
                            f = [xe(be(f), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                                for (o = ++u; o < i && !r.relative[e[o].type]; o++)
                                    ;
                                return Te(u > 1 && be(f), u > 1 && ve(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, u < o && Ae(e.slice(u, o)), o < i && Ae(e = e.slice(o)), o < i && ve(e))
                            }
                            f.push(n)
                        }
                    return be(f)
                }
                return ye.prototype = r.filters = r.pseudos,
                r.setFilters = new ye,
                a = se.tokenize = function(e, t) {
                    var n, o, i, a, s, u, l, c = S[e + " "];
                    if (c)
                        return t ? 0 : c.slice(0);
                    for (s = e,
                    u = [],
                    l = r.preFilter; s; ) {
                        for (a in n && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                        u.push(i = [])),
                        n = !1,
                        (o = G.exec(s)) && (n = o.shift(),
                        i.push({
                            value: n,
                            type: o[0].replace(W, " ")
                        }),
                        s = s.slice(n.length)),
                        r.filter)
                            !(o = z[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(),
                            i.push({
                                value: n,
                                type: a,
                                matches: o
                            }),
                            s = s.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
                }
                ,
                s = se.compile = function(e, t) {
                    var n, o = [], i = [], s = k[e + " "];
                    if (!s) {
                        for (t || (t = a(e)),
                        n = t.length; n--; )
                            (s = Ae(t[n]))[x] ? o.push(s) : i.push(s);
                        s = k(e, function(e, t) {
                            var n = t.length > 0
                              , o = e.length > 0
                              , i = function(i, a, s, u, c) {
                                var d, h, _, g = 0, y = "0", v = i && [], x = [], b = l, T = i || o && r.find.TAG("*", c), A = w += null == b ? 1 : Math.random() || .1, S = T.length;
                                for (c && (l = a == p || a || c); y !== S && null != (d = T[y]); y++) {
                                    if (o && d) {
                                        for (h = 0,
                                        a || d.ownerDocument == p || (f(d),
                                        s = !m); _ = e[h++]; )
                                            if (_(d, a || p, s)) {
                                                u.push(d);
                                                break
                                            }
                                        c && (w = A)
                                    }
                                    n && ((d = !_ && d) && g--,
                                    i && v.push(d))
                                }
                                if (g += y,
                                n && y !== g) {
                                    for (h = 0; _ = t[h++]; )
                                        _(v, x, a, s);
                                    if (i) {
                                        if (g > 0)
                                            for (; y--; )
                                                v[y] || x[y] || (x[y] = N.call(u));
                                        x = we(x)
                                    }
                                    H.apply(u, x),
                                    c && !i && x.length > 0 && g + t.length > 1 && se.uniqueSort(u)
                                }
                                return c && (w = A,
                                l = b),
                                v
                            };
                            return n ? le(i) : i
                        }(i, o)),
                        s.selector = e
                    }
                    return s
                }
                ,
                u = se.select = function(e, t, n, o) {
                    var i, u, l, c, d, f = "function" === typeof e && e, p = !o && a(e = f.selector || e);
                    if (n = n || [],
                    1 === p.length) {
                        if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                                return n;
                            f && (t = t.parentNode),
                            e = e.slice(u.shift().value.length)
                        }
                        for (i = z.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i],
                        !r.relative[c = l.type]); )
                            if ((d = r.find[c]) && (o = d(l.matches[0].replace(te, ne), ee.test(u[0].type) && ge(t.parentNode) || t))) {
                                if (u.splice(i, 1),
                                !(e = o.length && ve(u)))
                                    return H.apply(n, o),
                                    n;
                                break
                            }
                    }
                    return (f || s(e, p))(o, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t),
                    n
                }
                ,
                n.sortStable = x.split("").sort(E).join("") === x,
                n.detectDuplicates = !!d,
                f(),
                n.sortDetached = ce((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }
                )),
                ce((function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }
                )) || de("type|href|height|width", (function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }
                )),
                n.attributes && ce((function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }
                )) || de("value", (function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }
                )),
                ce((function(e) {
                    return null == e.getAttribute("disabled")
                }
                )) || de(q, (function(e, t, n) {
                    var r;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }
                )),
                se
            }(n);
            A.find = k,
            A.expr = k.selectors,
            A.expr[":"] = A.expr.pseudos,
            A.uniqueSort = A.unique = k.uniqueSort,
            A.text = k.getText,
            A.isXMLDoc = k.isXML,
            A.contains = k.contains,
            A.escapeSelector = k.escape;
            var C = function(e, t, n) {
                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (o && A(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
              , E = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , D = A.expr.match.needsContext;
            function L(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function j(e, t, n) {
                return g(t) ? A.grep(e, (function(e, r) {
                    return !!t.call(e, r, e) !== n
                }
                )) : t.nodeType ? A.grep(e, (function(e) {
                    return e === t !== n
                }
                )) : "string" !== typeof t ? A.grep(e, (function(e) {
                    return c.call(t, e) > -1 !== n
                }
                )) : A.filter(t, e, n)
            }
            A.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? A.find.matchesSelector(r, e) ? [r] : [] : A.find.matches(e, A.grep(t, (function(e) {
                    return 1 === e.nodeType
                }
                )))
            }
            ,
            A.fn.extend({
                find: function(e) {
                    var t, n, r = this.length, o = this;
                    if ("string" !== typeof e)
                        return this.pushStack(A(e).filter((function() {
                            for (t = 0; t < r; t++)
                                if (A.contains(o[t], this))
                                    return !0
                        }
                        )));
                    for (n = this.pushStack([]),
                    t = 0; t < r; t++)
                        A.find(e, o[t], n);
                    return r > 1 ? A.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(j(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(j(this, e || [], !0))
                },
                is: function(e) {
                    return !!j(this, "string" === typeof e && D.test(e) ? A(e) : e || [], !1).length
                }
            });
            var H, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (A.fn.init = function(e, t, n) {
                var r, o;
                if (!e)
                    return this;
                if (n = n || H,
                "string" === typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof A ? t[0] : t,
                        A.merge(this, A.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                        N.test(r[1]) && A.isPlainObject(t))
                            for (r in t)
                                g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = v.getElementById(r[2])) && (this[0] = o,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(A) : A.makeArray(e, this)
            }
            ).prototype = A.fn,
            H = A(v);
            var O = /^(?:parents|prev(?:Until|All))/
              , q = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function P(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            A.fn.extend({
                has: function(e) {
                    var t = A(e, this)
                      , n = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < n; e++)
                            if (A.contains(this, t[e]))
                                return !0
                    }
                    ))
                },
                closest: function(e, t) {
                    var n, r = 0, o = this.length, i = [], a = "string" !== typeof e && A(e);
                    if (!D.test(e))
                        for (; r < o; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && A.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? A.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" === typeof e ? c.call(A(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(A.uniqueSort(A.merge(this.get(), A(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            A.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return P(e, "nextSibling")
                },
                prev: function(e) {
                    return P(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return E((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return E(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e),
                    A.merge([], e.childNodes))
                }
            }, (function(e, t) {
                A.fn[e] = function(n, r) {
                    var o = A.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n),
                    r && "string" === typeof r && (o = A.filter(r, o)),
                    this.length > 1 && (q[e] || A.uniqueSort(o),
                    O.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            }
            ));
            var M = /[^\x20\t\r\n\f]+/g;
            function F(e) {
                return e
            }
            function B(e) {
                throw e
            }
            function R(e, t, n, r) {
                var o;
                try {
                    e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            A.Callbacks = function(e) {
                e = "string" === typeof e ? function(e) {
                    var t = {};
                    return A.each(e.match(M) || [], (function(e, n) {
                        t[n] = !0
                    }
                    )),
                    t
                }(e) : A.extend({}, e);
                var t, n, r, o, i = [], a = [], s = -1, u = function() {
                    for (o = o || e.once,
                    r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length; )
                            !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    o && (i = n ? [] : "")
                }, l = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1,
                        a.push(n)),
                        function t(n) {
                            A.each(n, (function(n, r) {
                                g(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== w(r) && t(r)
                            }
                            ))
                        }(arguments),
                        n && !t && u()),
                        this
                    },
                    remove: function() {
                        return A.each(arguments, (function(e, t) {
                            for (var n; (n = A.inArray(t, i, n)) > -1; )
                                i.splice(n, 1),
                                n <= s && s--
                        }
                        )),
                        this
                    },
                    has: function(e) {
                        return e ? A.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []),
                        this
                    },
                    disable: function() {
                        return o = a = [],
                        i = n = "",
                        this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return o = a = [],
                        n || t || (i = n = ""),
                        this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                        a.push(n),
                        t || u()),
                        this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return l
            }
            ,
            A.extend({
                Deferred: function(e) {
                    var t = [["notify", "progress", A.Callbacks("memory"), A.Callbacks("memory"), 2], ["resolve", "done", A.Callbacks("once memory"), A.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", A.Callbacks("once memory"), A.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return A.Deferred((function(n) {
                                A.each(t, (function(t, r) {
                                    var o = g(e[r[4]]) && e[r[4]];
                                    i[r[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    }
                                    ))
                                }
                                )),
                                e = null
                            }
                            )).promise()
                        },
                        then: function(e, r, o) {
                            var i = 0;
                            function a(e, t, r, o) {
                                return function() {
                                    var s = this
                                      , u = arguments
                                      , l = function() {
                                        var n, l;
                                        if (!(e < i)) {
                                            if ((n = r.apply(s, u)) === t.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" === typeof n || "function" === typeof n) && n.then,
                                            g(l) ? o ? l.call(n, a(i, t, F, o), a(i, t, B, o)) : (i++,
                                            l.call(n, a(i, t, F, o), a(i, t, B, o), a(i, t, F, t.notifyWith))) : (r !== F && (s = void 0,
                                            u = [n]),
                                            (o || t.resolveWith)(s, u))
                                        }
                                    }
                                      , c = o ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            A.Deferred.exceptionHook && A.Deferred.exceptionHook(n, c.stackTrace),
                                            e + 1 >= i && (r !== B && (s = void 0,
                                            u = [n]),
                                            t.rejectWith(s, u))
                                        }
                                    }
                                    ;
                                    e ? c() : (A.Deferred.getStackHook && (c.stackTrace = A.Deferred.getStackHook()),
                                    n.setTimeout(c))
                                }
                            }
                            return A.Deferred((function(n) {
                                t[0][3].add(a(0, n, g(o) ? o : F, n.notifyWith)),
                                t[1][3].add(a(0, n, g(e) ? e : F)),
                                t[2][3].add(a(0, n, g(r) ? r : B))
                            }
                            )).promise()
                        },
                        promise: function(e) {
                            return null != e ? A.extend(e, o) : o
                        }
                    }
                      , i = {};
                    return A.each(t, (function(e, n) {
                        var a = n[2]
                          , s = n[5];
                        o[n[1]] = a.add,
                        s && a.add((function() {
                            r = s
                        }
                        ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                        a.add(n[3].fire),
                        i[n[0]] = function() {
                            return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                            this
                        }
                        ,
                        i[n[0] + "With"] = a.fireWith
                    }
                    )),
                    o.promise(i),
                    e && e.call(i, i),
                    i
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , r = Array(n)
                      , o = s.call(arguments)
                      , i = A.Deferred()
                      , a = function(e) {
                        return function(n) {
                            r[e] = this,
                            o[e] = arguments.length > 1 ? s.call(arguments) : n,
                            --t || i.resolveWith(r, o)
                        }
                    };
                    if (t <= 1 && (R(e, i.done(a(n)).resolve, i.reject, !t),
                    "pending" === i.state() || g(o[n] && o[n].then)))
                        return i.then();
                    for (; n--; )
                        R(o[n], a(n), i.reject);
                    return i.promise()
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            A.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
            ,
            A.readyException = function(e) {
                n.setTimeout((function() {
                    throw e
                }
                ))
            }
            ;
            var $ = A.Deferred();
            function G() {
                v.removeEventListener("DOMContentLoaded", G),
                n.removeEventListener("load", G),
                A.ready()
            }
            A.fn.ready = function(e) {
                return $.then(e).catch((function(e) {
                    A.readyException(e)
                }
                )),
                this
            }
            ,
            A.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --A.readyWait : A.isReady) || (A.isReady = !0,
                    !0 !== e && --A.readyWait > 0 || $.resolveWith(v, [A]))
                }
            }),
            A.ready.then = $.then,
            "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? n.setTimeout(A.ready) : (v.addEventListener("DOMContentLoaded", G),
            n.addEventListener("load", G));
            var V = function(e, t, n, r, o, i, a) {
                var s = 0
                  , u = e.length
                  , l = null == n;
                if ("object" === w(n))
                    for (s in o = !0,
                    n)
                        V(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0,
                g(r) || (a = !0),
                l && (a ? (t.call(e, r),
                t = null) : (l = t,
                t = function(e, t, n) {
                    return l.call(A(e), n)
                }
                )),
                t))
                    for (; s < u; s++)
                        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
            }
              , X = /^-ms-/
              , U = /-([a-z])/g;
            function z(e, t) {
                return t.toUpperCase()
            }
            function Y(e) {
                return e.replace(X, "ms-").replace(U, z)
            }
            var Q = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function Z() {
                this.expando = A.expando + Z.uid++
            }
            Z.uid = 1,
            Z.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" === typeof t)
                        o[Y(t)] = n;
                    else
                        for (r in t)
                            o[Y(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" === typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t))in r ? [t] : t.match(M) || []).length;
                            for (; n--; )
                                delete r[t[n]]
                        }
                        (void 0 === t || A.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !A.isEmptyObject(t)
                }
            };
            var J = new Z
              , K = new Z
              , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , te = /[A-Z]/g;
            function ne(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(te, "-$&").toLowerCase(),
                    "string" === typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (o) {}
                        K.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            A.extend({
                hasData: function(e) {
                    return K.hasData(e) || J.hasData(e)
                },
                data: function(e, t, n) {
                    return K.access(e, t, n)
                },
                removeData: function(e, t) {
                    K.remove(e, t)
                },
                _data: function(e, t, n) {
                    return J.access(e, t, n)
                },
                _removeData: function(e, t) {
                    J.remove(e, t)
                }
            }),
            A.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0], a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = K.get(i),
                        1 === i.nodeType && !J.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--; )
                                a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)),
                                ne(i, r, o[r]));
                            J.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" === typeof e ? this.each((function() {
                        K.set(this, e)
                    }
                    )) : V(this, (function(t) {
                        var n;
                        if (i && void 0 === t)
                            return void 0 !== (n = K.get(i, e)) || void 0 !== (n = ne(i, e)) ? n : void 0;
                        this.each((function() {
                            K.set(this, e, t)
                        }
                        ))
                    }
                    ), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        K.remove(this, e)
                    }
                    ))
                }
            }),
            A.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue",
                        r = J.get(e, t),
                        n && (!r || Array.isArray(n) ? r = J.access(e, t, A.makeArray(n)) : r.push(n)),
                        r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = A.queue(e, t)
                      , r = n.length
                      , o = n.shift()
                      , i = A._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(),
                    r--),
                    o && ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(e, (function() {
                        A.dequeue(e, t)
                    }
                    ), i)),
                    !r && i && i.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return J.get(e, n) || J.access(e, n, {
                        empty: A.Callbacks("once memory").add((function() {
                            J.remove(e, [t + "queue", n])
                        }
                        ))
                    })
                }
            }),
            A.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" !== typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? A.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = A.queue(this, e, t);
                        A._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && A.dequeue(this, e)
                    }
                    ))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        A.dequeue(this, e)
                    }
                    ))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1, o = A.Deferred(), i = this, a = this.length, s = function() {
                        --r || o.resolveWith(i, [i])
                    };
                    for ("string" !== typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; a--; )
                        (n = J.get(i[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                    return s(),
                    o.promise(t)
                }
            });
            var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
              , ie = ["Top", "Right", "Bottom", "Left"]
              , ae = v.documentElement
              , se = function(e) {
                return A.contains(e.ownerDocument, e)
            }
              , ue = {
                composed: !0
            };
            ae.getRootNode && (se = function(e) {
                return A.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument
            }
            );
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === A.css(e, "display")
            };
            function ce(e, t, n, r) {
                var o, i, a = 20, s = r ? function() {
                    return r.cur()
                }
                : function() {
                    return A.css(e, t, "")
                }
                , u = s(), l = n && n[3] || (A.cssNumber[t] ? "" : "px"), c = e.nodeType && (A.cssNumber[t] || "px" !== l && +u) && oe.exec(A.css(e, t));
                if (c && c[3] !== l) {
                    for (u /= 2,
                    l = l || c[3],
                    c = +u || 1; a--; )
                        A.style(e, t, c + l),
                        (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0),
                        c /= i;
                    c *= 2,
                    A.style(e, t, c + l),
                    n = n || []
                }
                return n && (c = +c || +u || 0,
                o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = l,
                r.start = c,
                r.end = o)),
                o
            }
            var de = {};
            function fe(e) {
                var t, n = e.ownerDocument, r = e.nodeName, o = de[r];
                return o || (t = n.body.appendChild(n.createElement(r)),
                o = A.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === o && (o = "block"),
                de[r] = o,
                o)
            }
            function pe(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                    (r = e[i]).style && (n = r.style.display,
                    t ? ("none" === n && (o[i] = J.get(r, "display") || null,
                    o[i] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (o[i] = fe(r))) : "none" !== n && (o[i] = "none",
                    J.set(r, "display", n)));
                for (i = 0; i < a; i++)
                    null != o[i] && (e[i].style.display = o[i]);
                return e
            }
            A.fn.extend({
                show: function() {
                    return pe(this, !0)
                },
                hide: function() {
                    return pe(this)
                },
                toggle: function(e) {
                    return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        le(this) ? A(this).show() : A(this).hide()
                    }
                    ))
                }
            });
            var he = /^(?:checkbox|radio)$/i
              , me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
              , _e = /^$|^module$|\/(?:java|ecma)script/i;
            !function() {
                var e = v.createDocumentFragment().appendChild(v.createElement("div"))
                  , t = v.createElement("input");
                t.setAttribute("type", "radio"),
                t.setAttribute("checked", "checked"),
                t.setAttribute("name", "t"),
                e.appendChild(t),
                _.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                e.innerHTML = "<textarea>x</textarea>",
                _.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
                e.innerHTML = "<option></option>",
                _.option = !!e.lastChild
            }();
            var ge = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function ye(e, t) {
                var n;
                return n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && L(e, t) ? A.merge([e], n) : n
            }
            function ve(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
            }
            ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
            ge.th = ge.td,
            _.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
            var xe = /<|&#?\w+;/;
            function be(e, t, n, r, o) {
                for (var i, a, s, u, l, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
                    if ((i = e[p]) || 0 === i)
                        if ("object" === w(i))
                            A.merge(f, i.nodeType ? [i] : i);
                        else if (xe.test(i)) {
                            for (a = a || d.appendChild(t.createElement("div")),
                            s = (me.exec(i) || ["", ""])[1].toLowerCase(),
                            u = ge[s] || ge._default,
                            a.innerHTML = u[1] + A.htmlPrefilter(i) + u[2],
                            c = u[0]; c--; )
                                a = a.lastChild;
                            A.merge(f, a.childNodes),
                            (a = d.firstChild).textContent = ""
                        } else
                            f.push(t.createTextNode(i));
                for (d.textContent = "",
                p = 0; i = f[p++]; )
                    if (r && A.inArray(i, r) > -1)
                        o && o.push(i);
                    else if (l = se(i),
                    a = ye(d.appendChild(i), "script"),
                    l && ve(a),
                    n)
                        for (c = 0; i = a[c++]; )
                            _e.test(i.type || "") && n.push(i);
                return d
            }
            var we = /^([^.]*)(?:\.(.+)|)/;
            function Te() {
                return !0
            }
            function Ae() {
                return !1
            }
            function Se(e, t) {
                return e === function() {
                    try {
                        return v.activeElement
                    } catch (e) {}
                }() === ("focus" === t)
            }
            function ke(e, t, n, r, o, i) {
                var a, s;
                if ("object" === typeof t) {
                    for (s in "string" !== typeof n && (r = r || n,
                    n = void 0),
                    t)
                        ke(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n,
                r = n = void 0) : null == o && ("string" === typeof n ? (o = r,
                r = void 0) : (o = r,
                r = n,
                n = void 0)),
                !1 === o)
                    o = Ae;
                else if (!o)
                    return e;
                return 1 === i && (a = o,
                o = function(e) {
                    return A().off(e),
                    a.apply(this, arguments)
                }
                ,
                o.guid = a.guid || (a.guid = A.guid++)),
                e.each((function() {
                    A.event.add(this, t, o, r, n)
                }
                ))
            }
            function Ce(e, t, n) {
                n ? (J.set(e, t, !1),
                A.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var r, o, i = J.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (i.length)
                                (A.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (i = s.call(arguments),
                            J.set(this, t, i),
                            r = n(this, t),
                            this[t](),
                            i !== (o = J.get(this, t)) || r ? J.set(this, t, !1) : o = {},
                            i !== o)
                                return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                o && o.value
                        } else
                            i.length && (J.set(this, t, {
                                value: A.event.trigger(A.extend(i[0], A.Event.prototype), i.slice(1), this)
                            }),
                            e.stopImmediatePropagation())
                    }
                })) : void 0 === J.get(e, t) && A.event.add(e, t, Te)
            }
            A.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, a, s, u, l, c, d, f, p, h, m, _ = J.get(e);
                    if (Q(e))
                        for (n.handler && (n = (i = n).handler,
                        o = i.selector),
                        o && A.find.matchesSelector(ae, o),
                        n.guid || (n.guid = A.guid++),
                        (u = _.events) || (u = _.events = Object.create(null)),
                        (a = _.handle) || (a = _.handle = function(t) {
                            return "undefined" !== typeof A && A.event.triggered !== t.type ? A.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        l = (t = (t || "").match(M) || [""]).length; l--; )
                            p = m = (s = we.exec(t[l]) || [])[1],
                            h = (s[2] || "").split(".").sort(),
                            p && (d = A.event.special[p] || {},
                            p = (o ? d.delegateType : d.bindType) || p,
                            d = A.event.special[p] || {},
                            c = A.extend({
                                type: p,
                                origType: m,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && A.expr.match.needsContext.test(o),
                                namespace: h.join(".")
                            }, i),
                            (f = u[p]) || ((f = u[p] = []).delegateCount = 0,
                            d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                            d.add && (d.add.call(e, c),
                            c.handler.guid || (c.handler.guid = n.guid)),
                            o ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                            A.event.global[p] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, u, l, c, d, f, p, h, m, _ = J.hasData(e) && J.get(e);
                    if (_ && (u = _.events)) {
                        for (l = (t = (t || "").match(M) || [""]).length; l--; )
                            if (p = m = (s = we.exec(t[l]) || [])[1],
                            h = (s[2] || "").split(".").sort(),
                            p) {
                                for (d = A.event.special[p] || {},
                                f = u[p = (r ? d.delegateType : d.bindType) || p] || [],
                                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                a = i = f.length; i--; )
                                    c = f[i],
                                    !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1),
                                    c.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, c));
                                a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, _.handle) || A.removeEvent(e, p, _.handle),
                                delete u[p])
                            } else
                                for (p in u)
                                    A.event.remove(e, p + t[l], n, r, !0);
                        A.isEmptyObject(u) && J.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, a, s = new Array(arguments.length), u = A.event.fix(e), l = (J.get(this, "events") || Object.create(null))[u.type] || [], c = A.event.special[u.type] || {};
                    for (s[0] = u,
                    t = 1; t < arguments.length; t++)
                        s[t] = arguments[t];
                    if (u.delegateTarget = this,
                    !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                        for (a = A.event.handlers.call(this, u, l),
                        t = 0; (o = a[t++]) && !u.isPropagationStopped(); )
                            for (u.currentTarget = o.elem,
                            n = 0; (i = o.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                                u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i,
                                u.data = i.data,
                                void 0 !== (r = ((A.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                                u.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, u),
                        u.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a, s = [], u = t.delegateCount, l = e.target;
                    if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (i = [],
                                a = {},
                                n = 0; n < u; n++)
                                    void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? A(o, this).index(l) > -1 : A.find(o, this, null, [l]).length),
                                    a[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return l = this,
                    u < t.length && s.push({
                        elem: l,
                        handlers: t.slice(u)
                    }),
                    s
                },
                addProp: function(e, t) {
                    Object.defineProperty(A.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[A.expando] ? e : new A.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && L(t, "input") && Ce(t, "click", Te),
                            !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return he.test(t.type) && t.click && L(t, "input") && Ce(t, "click"),
                            !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return he.test(t.type) && t.click && L(t, "input") && J.get(t, "click") || L(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            A.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            A.Event = function(e, t) {
                if (!(this instanceof A.Event))
                    return new A.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ae,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && A.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[A.expando] = !0
            }
            ,
            A.Event.prototype = {
                constructor: A.Event,
                isDefaultPrevented: Ae,
                isPropagationStopped: Ae,
                isImmediatePropagationStopped: Ae,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = Te,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = Te,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = Te,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            A.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, A.event.addProp),
            A.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                A.event.special[e] = {
                    setup: function() {
                        return Ce(this, e, Se),
                        !1
                    },
                    trigger: function() {
                        return Ce(this, e),
                        !0
                    },
                    _default: function(t) {
                        return J.get(t.target, e)
                    },
                    delegateType: t
                }
            }
            )),
            A.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                A.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, o = e.relatedTarget, i = e.handleObj;
                        return o && (o === r || A.contains(r, o)) || (e.type = i.origType,
                        n = i.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }
            )),
            A.fn.extend({
                on: function(e, t, n, r) {
                    return ke(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return ke(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj)
                        return r = e.handleObj,
                        A(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" === typeof e) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" !== typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = Ae),
                    this.each((function() {
                        A.event.remove(this, e, n, t)
                    }
                    ))
                }
            });
            var Ee = /<script|<style|<link/i
              , De = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Le = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function Ne(e, t) {
                return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && A(e).children("tbody")[0] || e
            }
            function je(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function He(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                e
            }
            function Ie(e, t) {
                var n, r, o, i, a, s;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (s = J.get(e).events))
                        for (o in J.remove(t, "handle events"),
                        s)
                            for (n = 0,
                            r = s[o].length; n < r; n++)
                                A.event.add(t, o, s[o][n]);
                    K.hasData(e) && (i = K.access(e),
                    a = A.extend({}, i),
                    K.set(t, a))
                }
            }
            function Oe(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function qe(e, t, n, r) {
                t = u(t);
                var o, i, a, s, l, c, d = 0, f = e.length, p = f - 1, h = t[0], m = g(h);
                if (m || f > 1 && "string" === typeof h && !_.checkClone && De.test(h))
                    return e.each((function(o) {
                        var i = e.eq(o);
                        m && (t[0] = h.call(this, o, i.html())),
                        qe(i, t, n, r)
                    }
                    ));
                if (f && (i = (o = be(t, e[0].ownerDocument, !1, e, r)).firstChild,
                1 === o.childNodes.length && (o = i),
                i || r)) {
                    for (s = (a = A.map(ye(o, "script"), je)).length; d < f; d++)
                        l = o,
                        d !== p && (l = A.clone(l, !0, !0),
                        s && A.merge(a, ye(l, "script"))),
                        n.call(e[d], l, d);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument,
                        A.map(a, He),
                        d = 0; d < s; d++)
                            l = a[d],
                            _e.test(l.type || "") && !J.access(l, "globalEval") && A.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? A._evalUrl && !l.noModule && A._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }, c) : b(l.textContent.replace(Le, ""), l, c))
                }
                return e
            }
            function Pe(e, t, n) {
                for (var r, o = t ? A.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
                    n || 1 !== r.nodeType || A.cleanData(ye(r)),
                    r.parentNode && (n && se(r) && ve(ye(r, "script")),
                    r.parentNode.removeChild(r));
                return e
            }
            A.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var r, o, i, a, s = e.cloneNode(!0), u = se(e);
                    if (!_.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !A.isXMLDoc(e))
                        for (a = ye(s),
                        r = 0,
                        o = (i = ye(e)).length; r < o; r++)
                            Oe(i[r], a[r]);
                    if (t)
                        if (n)
                            for (i = i || ye(e),
                            a = a || ye(s),
                            r = 0,
                            o = i.length; r < o; r++)
                                Ie(i[r], a[r]);
                        else
                            Ie(e, s);
                    return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
                    s
                },
                cleanData: function(e) {
                    for (var t, n, r, o = A.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (Q(n)) {
                            if (t = n[J.expando]) {
                                if (t.events)
                                    for (r in t.events)
                                        o[r] ? A.event.remove(n, r) : A.removeEvent(n, r, t.handle);
                                n[J.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }),
            A.fn.extend({
                detach: function(e) {
                    return Pe(this, e, !0)
                },
                remove: function(e) {
                    return Pe(this, e)
                },
                text: function(e) {
                    return V(this, (function(e) {
                        return void 0 === e ? A.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }
                        ))
                    }
                    ), null, e, arguments.length)
                },
                append: function() {
                    return qe(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                    }
                    ))
                },
                prepend: function() {
                    return qe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ne(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }
                    ))
                },
                before: function() {
                    return qe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }
                    ))
                },
                after: function() {
                    return qe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }
                    ))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (A.cleanData(ye(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map((function() {
                        return A.clone(this, e, t)
                    }
                    ))
                },
                html: function(e) {
                    return V(this, (function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" === typeof e && !Ee.test(e) && !ge[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = A.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    1 === (t = this[n] || {}).nodeType && (A.cleanData(ye(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (o) {}
                        }
                        t && this.empty().append(e)
                    }
                    ), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return qe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        A.inArray(this, e) < 0 && (A.cleanData(ye(this)),
                        n && n.replaceChild(t, this))
                    }
                    ), e)
                }
            }),
            A.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                A.fn[e] = function(e) {
                    for (var n, r = [], o = A(e), i = o.length - 1, a = 0; a <= i; a++)
                        n = a === i ? this : this.clone(!0),
                        A(o[a])[t](n),
                        l.apply(r, n.get());
                    return this.pushStack(r)
                }
            }
            ));
            var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
              , Fe = /^--/
              , Be = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                t.getComputedStyle(e)
            }
              , Re = function(e, t, n) {
                var r, o, i = {};
                for (o in t)
                    i[o] = e.style[o],
                    e.style[o] = t[o];
                for (o in r = n.call(e),
                t)
                    e.style[o] = i[o];
                return r
            }
              , We = new RegExp(ie.join("|"),"i")
              , $e = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g");
            function Ge(e, t, n) {
                var r, o, i, a, s = Fe.test(t), u = e.style;
                return (n = n || Be(e)) && (a = n.getPropertyValue(t) || n[t],
                s && a && (a = a.replace($e, "$1") || void 0),
                "" !== a || se(e) || (a = A.style(e, t)),
                !_.pixelBoxStyles() && Me.test(a) && We.test(t) && (r = u.width,
                o = u.minWidth,
                i = u.maxWidth,
                u.minWidth = u.maxWidth = u.width = a,
                a = n.width,
                u.width = r,
                u.minWidth = o,
                u.maxWidth = i)),
                void 0 !== a ? a + "" : a
            }
            function Ve(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function e() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        ae.appendChild(l).appendChild(c);
                        var e = n.getComputedStyle(c);
                        r = "1%" !== e.top,
                        u = 12 === t(e.marginLeft),
                        c.style.right = "60%",
                        a = 36 === t(e.right),
                        o = 36 === t(e.width),
                        c.style.position = "absolute",
                        i = 12 === t(c.offsetWidth / 3),
                        ae.removeChild(l),
                        c = null
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var r, o, i, a, s, u, l = v.createElement("div"), c = v.createElement("div");
                c.style && (c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                _.clearCloneStyle = "content-box" === c.style.backgroundClip,
                A.extend(_, {
                    boxSizingReliable: function() {
                        return e(),
                        o
                    },
                    pixelBoxStyles: function() {
                        return e(),
                        a
                    },
                    pixelPosition: function() {
                        return e(),
                        r
                    },
                    reliableMarginLeft: function() {
                        return e(),
                        u
                    },
                    scrollboxSize: function() {
                        return e(),
                        i
                    },
                    reliableTrDimensions: function() {
                        var e, t, r, o;
                        return null == s && (e = v.createElement("table"),
                        t = v.createElement("tr"),
                        r = v.createElement("div"),
                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        t.style.cssText = "border:1px solid",
                        t.style.height = "1px",
                        r.style.height = "9px",
                        r.style.display = "block",
                        ae.appendChild(e).appendChild(t).appendChild(r),
                        o = n.getComputedStyle(t),
                        s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight,
                        ae.removeChild(e)),
                        s
                    }
                }))
            }();
            var Xe = ["Webkit", "Moz", "ms"]
              , Ue = v.createElement("div").style
              , ze = {};
            function Ye(e) {
                var t = A.cssProps[e] || ze[e];
                return t || (e in Ue ? e : ze[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--; )
                        if ((e = Xe[n] + t)in Ue)
                            return e
                }(e) || e)
            }
            var Qe = /^(none|table(?!-c[ea]).+)/
              , Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Je = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Ke(e, t, n) {
                var r = oe.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function et(e, t, n, r, o, i) {
                var a = "width" === t ? 1 : 0
                  , s = 0
                  , u = 0;
                if (n === (r ? "border" : "content"))
                    return 0;
                for (; a < 4; a += 2)
                    "margin" === n && (u += A.css(e, n + ie[a], !0, o)),
                    r ? ("content" === n && (u -= A.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n && (u -= A.css(e, "border" + ie[a] + "Width", !0, o))) : (u += A.css(e, "padding" + ie[a], !0, o),
                    "padding" !== n ? u += A.css(e, "border" + ie[a] + "Width", !0, o) : s += A.css(e, "border" + ie[a] + "Width", !0, o));
                return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0),
                u
            }
            function tt(e, t, n) {
                var r = Be(e)
                  , o = (!_.boxSizingReliable() || n) && "border-box" === A.css(e, "boxSizing", !1, r)
                  , i = o
                  , a = Ge(e, t, r)
                  , s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Me.test(a)) {
                    if (!n)
                        return a;
                    a = "auto"
                }
                return (!_.boxSizingReliable() && o || !_.reliableTrDimensions() && L(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === A.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === A.css(e, "boxSizing", !1, r),
                (i = s in e) && (a = e[s])),
                (a = parseFloat(a) || 0) + et(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
            }
            function nt(e, t, n, r, o) {
                return new nt.prototype.init(e,t,n,r,o)
            }
            A.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ge(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = Y(t), u = Fe.test(t), l = e.style;
                        if (u || (t = Ye(s)),
                        a = A.cssHooks[t] || A.cssHooks[s],
                        void 0 === n)
                            return a && "get"in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                        "string" === (i = typeof n) && (o = oe.exec(n)) && o[1] && (n = ce(e, t, o),
                        i = "number"),
                        null != n && n === n && ("number" !== i || u || (n += o && o[3] || (A.cssNumber[s] ? "" : "px")),
                        _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, a, s = Y(t);
                    return Fe.test(t) || (t = Ye(s)),
                    (a = A.cssHooks[t] || A.cssHooks[s]) && "get"in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = Ge(e, t, r)),
                    "normal" === o && t in Je && (o = Je[t]),
                    "" === n || n ? (i = parseFloat(o),
                    !0 === n || isFinite(i) ? i || 0 : o) : o
                }
            }),
            A.each(["height", "width"], (function(e, t) {
                A.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return !Qe.test(A.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Re(e, Ze, (function() {
                                return tt(e, t, r)
                            }
                            ))
                    },
                    set: function(e, n, r) {
                        var o, i = Be(e), a = !_.scrollboxSize() && "absolute" === i.position, s = (a || r) && "border-box" === A.css(e, "boxSizing", !1, i), u = r ? et(e, t, r, s, i) : 0;
                        return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - et(e, t, "border", !1, i) - .5)),
                        u && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                        n = A.css(e, t)),
                        Ke(0, n, u)
                    }
                }
            }
            )),
            A.cssHooks.marginLeft = Ve(_.reliableMarginLeft, (function(e, t) {
                if (t)
                    return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }
                    ))) + "px"
            }
            )),
            A.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                A.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, o = {}, i = "string" === typeof n ? n.split(" ") : [n]; r < 4; r++)
                            o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                },
                "margin" !== e && (A.cssHooks[e + t].set = Ke)
            }
            )),
            A.fn.extend({
                css: function(e, t) {
                    return V(this, (function(e, t, n) {
                        var r, o, i = {}, a = 0;
                        if (Array.isArray(t)) {
                            for (r = Be(e),
                            o = t.length; a < o; a++)
                                i[t[a]] = A.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? A.style(e, t, n) : A.css(e, t)
                    }
                    ), e, t, arguments.length > 1)
                }
            }),
            A.Tween = nt,
            nt.prototype = {
                constructor: nt,
                init: function(e, t, n, r, o, i) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || A.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = i || (A.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = nt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = nt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = A.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                }
            },
            nt.prototype.init.prototype = nt.prototype,
            nt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = A.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        A.fx.step[e.prop] ? A.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !A.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : A.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            A.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            A.fx = nt.prototype.init,
            A.fx.step = {};
            var rt, ot, it = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
            function st() {
                ot && (!1 === v.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, A.fx.interval),
                A.fx.tick())
            }
            function ut() {
                return n.setTimeout((function() {
                    rt = void 0
                }
                )),
                rt = Date.now()
            }
            function lt(e, t) {
                var n, r = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                    o["margin" + (n = ie[r])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                o
            }
            function ct(e, t, n) {
                for (var r, o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                    if (r = o[i].call(n, t, e))
                        return r
            }
            function dt(e, t, n) {
                var r, o, i = 0, a = dt.prefilters.length, s = A.Deferred().always((function() {
                    delete u.elem
                }
                )), u = function() {
                    if (o)
                        return !1;
                    for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++)
                        l.tweens[i].run(r);
                    return s.notifyWith(e, [l, r, n]),
                    r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l]),
                    !1)
                }, l = s.promise({
                    elem: e,
                    props: A.extend({}, t),
                    opts: A.extend(!0, {
                        specialEasing: {},
                        easing: A.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = A.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                        r
                    },
                    stop: function(t) {
                        var n = 0
                          , r = t ? l.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; n < r; n++)
                            l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]),
                        s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                        this
                    }
                }), c = l.props;
                for (!function(e, t) {
                    var n, r, o, i, a;
                    for (n in e)
                        if (o = t[r = Y(n)],
                        i = e[n],
                        Array.isArray(i) && (o = i[1],
                        i = e[n] = i[0]),
                        n !== r && (e[r] = i,
                        delete e[n]),
                        (a = A.cssHooks[r]) && "expand"in a)
                            for (n in i = a.expand(i),
                            delete e[r],
                            i)
                                n in e || (e[n] = i[n],
                                t[n] = o);
                        else
                            t[r] = o
                }(c, l.opts.specialEasing); i < a; i++)
                    if (r = dt.prefilters[i].call(l, e, c, l.opts))
                        return g(r.stop) && (A._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                        r;
                return A.map(c, ct, l),
                g(l.opts.start) && l.opts.start.call(e, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                A.fx.timer(A.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l
            }
            A.Animation = A.extend(dt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return ce(n.elem, e, oe.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    g(e) ? (t = e,
                    e = ["*"]) : e = e.match(M);
                    for (var n, r = 0, o = e.length; r < o; r++)
                        n = e[r],
                        dt.tweeners[n] = dt.tweeners[n] || [],
                        dt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var r, o, i, a, s, u, l, c, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, m = e.nodeType && le(e), _ = J.get(e, "fxshow");
                    for (r in n.queue || (null == (a = A._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                    s = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || s()
                    }
                    ),
                    a.unqueued++,
                    f.always((function() {
                        f.always((function() {
                            a.unqueued--,
                            A.queue(e, "fx").length || a.empty.fire()
                        }
                        ))
                    }
                    ))),
                    t)
                        if (o = t[r],
                        it.test(o)) {
                            if (delete t[r],
                            i = i || "toggle" === o,
                            o === (m ? "hide" : "show")) {
                                if ("show" !== o || !_ || void 0 === _[r])
                                    continue;
                                m = !0
                            }
                            p[r] = _ && _[r] || A.style(e, r)
                        }
                    if ((u = !A.isEmptyObject(t)) || !A.isEmptyObject(p))
                        for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                        null == (l = _ && _.display) && (l = J.get(e, "display")),
                        "none" === (c = A.css(e, "display")) && (l ? c = l : (pe([e], !0),
                        l = e.style.display || l,
                        c = A.css(e, "display"),
                        pe([e]))),
                        ("inline" === c || "inline-block" === c && null != l) && "none" === A.css(e, "float") && (u || (f.done((function() {
                            h.display = l
                        }
                        )),
                        null == l && (c = h.display,
                        l = "none" === c ? "" : c)),
                        h.display = "inline-block")),
                        n.overflow && (h.overflow = "hidden",
                        f.always((function() {
                            h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                        }
                        ))),
                        u = !1,
                        p)
                            u || (_ ? "hidden"in _ && (m = _.hidden) : _ = J.access(e, "fxshow", {
                                display: l
                            }),
                            i && (_.hidden = !m),
                            m && pe([e], !0),
                            f.done((function() {
                                for (r in m || pe([e]),
                                J.remove(e, "fxshow"),
                                p)
                                    A.style(e, r, p[r])
                            }
                            ))),
                            u = ct(m ? _[r] : 0, r, f),
                            r in _ || (_[r] = u.start,
                            m && (u.end = u.start,
                            u.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }),
            A.speed = function(e, t, n) {
                var r = e && "object" === typeof e ? A.extend({}, e) : {
                    complete: n || !n && t || g(e) && e,
                    duration: e,
                    easing: n && t || t && !g(t) && t
                };
                return A.fx.off ? r.duration = 0 : "number" !== typeof r.duration && (r.duration in A.fx.speeds ? r.duration = A.fx.speeds[r.duration] : r.duration = A.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    g(r.old) && r.old.call(this),
                    r.queue && A.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            A.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var o = A.isEmptyObject(e)
                      , i = A.speed(t, n, r)
                      , a = function() {
                        var t = dt(this, A.extend({}, e), i);
                        (o || J.get(this, "finish")) && t.stop(!0)
                    };
                    return a.finish = a,
                    o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" !== typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && this.queue(e || "fx", []),
                    this.each((function() {
                        var t = !0
                          , o = null != e && e + "queueHooks"
                          , i = A.timers
                          , a = J.get(this);
                        if (o)
                            a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a)
                                a[o] && a[o].stop && at.test(o) && r(a[o]);
                        for (o = i.length; o--; )
                            i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                            t = !1,
                            i.splice(o, 1));
                        !t && n || A.dequeue(this, e)
                    }
                    ))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each((function() {
                        var t, n = J.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = A.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                        A.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length; t--; )
                            i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                            i.splice(t, 1));
                        for (t = 0; t < a; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    }
                    ))
                }
            }),
            A.each(["toggle", "show", "hide"], (function(e, t) {
                var n = A.fn[t];
                A.fn[t] = function(e, r, o) {
                    return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, o)
                }
            }
            )),
            A.each({
                slideDown: lt("show"),
                slideUp: lt("hide"),
                slideToggle: lt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                A.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }
            )),
            A.timers = [],
            A.fx.tick = function() {
                var e, t = 0, n = A.timers;
                for (rt = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || A.fx.stop(),
                rt = void 0
            }
            ,
            A.fx.timer = function(e) {
                A.timers.push(e),
                A.fx.start()
            }
            ,
            A.fx.interval = 13,
            A.fx.start = function() {
                ot || (ot = !0,
                st())
            }
            ,
            A.fx.stop = function() {
                ot = null
            }
            ,
            A.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            A.fn.delay = function(e, t) {
                return e = A.fx && A.fx.speeds[e] || e,
                t = t || "fx",
                this.queue(t, (function(t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(o)
                    }
                }
                ))
            }
            ,
            function() {
                var e = v.createElement("input")
                  , t = v.createElement("select").appendChild(v.createElement("option"));
                e.type = "checkbox",
                _.checkOn = "" !== e.value,
                _.optSelected = t.selected,
                (e = v.createElement("input")).value = "t",
                e.type = "radio",
                _.radioValue = "t" === e.value
            }();
            var ft, pt = A.expr.attrHandle;
            A.fn.extend({
                attr: function(e, t) {
                    return V(this, A.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        A.removeAttr(this, e)
                    }
                    ))
                }
            }),
            A.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i)
                        return "undefined" === typeof e.getAttribute ? A.prop(e, t, n) : (1 === i && A.isXMLDoc(e) || (o = A.attrHooks[t.toLowerCase()] || (A.expr.match.bool.test(t) ? ft : void 0)),
                        void 0 !== n ? null === n ? void A.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = A.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!_.radioValue && "radio" === t && L(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0, o = t && t.match(M);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++]; )
                            e.removeAttribute(n)
                }
            }),
            ft = {
                set: function(e, t, n) {
                    return !1 === t ? A.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            A.each(A.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = pt[t] || A.find.attr;
                pt[t] = function(e, t, r) {
                    var o, i, a = t.toLowerCase();
                    return r || (i = pt[a],
                    pt[a] = o,
                    o = null != n(e, t, r) ? a : null,
                    pt[a] = i),
                    o
                }
            }
            ));
            var ht = /^(?:input|select|textarea|button)$/i
              , mt = /^(?:a|area)$/i;
            function _t(e) {
                return (e.match(M) || []).join(" ")
            }
            function gt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function yt(e) {
                return Array.isArray(e) ? e : "string" === typeof e && e.match(M) || []
            }
            A.fn.extend({
                prop: function(e, t) {
                    return V(this, A.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[A.propFix[e] || e]
                    }
                    ))
                }
            }),
            A.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i)
                        return 1 === i && A.isXMLDoc(e) || (t = A.propFix[t] || t,
                        o = A.propHooks[t]),
                        void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = A.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ht.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            _.optSelected || (A.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            A.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                A.propFix[this.toLowerCase()] = this
            }
            )),
            A.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, a;
                    return g(e) ? this.each((function(t) {
                        A(this).addClass(e.call(this, t, gt(this)))
                    }
                    )) : (t = yt(e)).length ? this.each((function() {
                        if (r = gt(this),
                        n = 1 === this.nodeType && " " + _t(r) + " ") {
                            for (i = 0; i < t.length; i++)
                                o = t[i],
                                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            a = _t(n),
                            r !== a && this.setAttribute("class", a)
                        }
                    }
                    )) : this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, a;
                    return g(e) ? this.each((function(t) {
                        A(this).removeClass(e.call(this, t, gt(this)))
                    }
                    )) : arguments.length ? (t = yt(e)).length ? this.each((function() {
                        if (r = gt(this),
                        n = 1 === this.nodeType && " " + _t(r) + " ") {
                            for (i = 0; i < t.length; i++)
                                for (o = t[i]; n.indexOf(" " + o + " ") > -1; )
                                    n = n.replace(" " + o + " ", " ");
                            a = _t(n),
                            r !== a && this.setAttribute("class", a)
                        }
                    }
                    )) : this : this.attr("class", "")
                },
                toggleClass: function(e, t) {
                    var n, r, o, i, a = typeof e, s = "string" === a || Array.isArray(e);
                    return g(e) ? this.each((function(n) {
                        A(this).toggleClass(e.call(this, n, gt(this), t), t)
                    }
                    )) : "boolean" === typeof t && s ? t ? this.addClass(e) : this.removeClass(e) : (n = yt(e),
                    this.each((function() {
                        if (s)
                            for (i = A(this),
                            o = 0; o < n.length; o++)
                                r = n[o],
                                i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                        else
                            void 0 !== e && "boolean" !== a || ((r = gt(this)) && J.set(this, "__className__", r),
                            this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : J.get(this, "__className__") || ""))
                    }
                    )))
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + _t(gt(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var vt = /\r/g;
            A.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = g(e),
                    this.each((function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = r ? e.call(this, n, A(this).val()) : e) ? o = "" : "number" === typeof o ? o += "" : Array.isArray(o) && (o = A.map(o, (function(e) {
                            return null == e ? "" : e + ""
                        }
                        ))),
                        (t = A.valHooks[this.type] || A.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    }
                    ))) : o ? (t = A.valHooks[o.type] || A.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" === typeof (n = o.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
                }
            }),
            A.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = A.find.attr(e, "value");
                            return null != t ? t : _t(A.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, o = e.options, i = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? i + 1 : o.length;
                            for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                    if (t = A(n).val(),
                                    a)
                                        return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options, i = A.makeArray(t), a = o.length; a--; )
                                ((r = o[a]).selected = A.inArray(A.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            i
                        }
                    }
                }
            }),
            A.each(["radio", "checkbox"], (function() {
                A.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = A.inArray(A(e).val(), t) > -1
                    }
                },
                _.checkOn || (A.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            }
            )),
            _.focusin = "onfocusin"in n;
            var xt = /^(?:focusinfocus|focusoutblur)$/
              , bt = function(e) {
                e.stopPropagation()
            };
            A.extend(A.event, {
                trigger: function(e, t, r, o) {
                    var i, a, s, u, l, c, d, f, h = [r || v], m = p.call(e, "type") ? e.type : e, _ = p.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = f = s = r = r || v,
                    3 !== r.nodeType && 8 !== r.nodeType && !xt.test(m + A.event.triggered) && (m.indexOf(".") > -1 && (_ = m.split("."),
                    m = _.shift(),
                    _.sort()),
                    l = m.indexOf(":") < 0 && "on" + m,
                    (e = e[A.expando] ? e : new A.Event(m,"object" === typeof e && e)).isTrigger = o ? 2 : 3,
                    e.namespace = _.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = r),
                    t = null == t ? [e] : A.makeArray(t, [e]),
                    d = A.event.special[m] || {},
                    o || !d.trigger || !1 !== d.trigger.apply(r, t))) {
                        if (!o && !d.noBubble && !y(r)) {
                            for (u = d.delegateType || m,
                            xt.test(u + m) || (a = a.parentNode); a; a = a.parentNode)
                                h.push(a),
                                s = a;
                            s === (r.ownerDocument || v) && h.push(s.defaultView || s.parentWindow || n)
                        }
                        for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                            f = a,
                            e.type = i > 1 ? u : d.bindType || m,
                            (c = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && c.apply(a, t),
                            (c = l && a[l]) && c.apply && Q(a) && (e.result = c.apply(a, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = m,
                        o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), t) || !Q(r) || l && g(r[m]) && !y(r) && ((s = r[l]) && (r[l] = null),
                        A.event.triggered = m,
                        e.isPropagationStopped() && f.addEventListener(m, bt),
                        r[m](),
                        e.isPropagationStopped() && f.removeEventListener(m, bt),
                        A.event.triggered = void 0,
                        s && (r[l] = s)),
                        e.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = A.extend(new A.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    A.event.trigger(r, null, t)
                }
            }),
            A.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        A.event.trigger(e, t, this)
                    }
                    ))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return A.event.trigger(e, t, n, !0)
                }
            }),
            _.focusin || A.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    A.event.simulate(t, e.target, A.event.fix(e))
                };
                A.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this.document || this
                          , o = J.access(r, t);
                        o || r.addEventListener(e, n, !0),
                        J.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this.document || this
                          , o = J.access(r, t) - 1;
                        o ? J.access(r, t, o) : (r.removeEventListener(e, n, !0),
                        J.remove(r, t))
                    }
                }
            }
            ));
            var wt = n.location
              , Tt = {
                guid: Date.now()
            }
              , At = /\?/;
            A.parseXML = function(e) {
                var t, r;
                if (!e || "string" !== typeof e)
                    return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (o) {}
                return r = t && t.getElementsByTagName("parsererror")[0],
                t && !r || A.error("Invalid XML: " + (r ? A.map(r.childNodes, (function(e) {
                    return e.textContent
                }
                )).join("\n") : e)),
                t
            }
            ;
            var St = /\[\]$/
              , kt = /\r?\n/g
              , Ct = /^(?:submit|button|image|reset|file)$/i
              , Et = /^(?:input|select|textarea|keygen)/i;
            function Dt(e, t, n, r) {
                var o;
                if (Array.isArray(t))
                    A.each(t, (function(t, o) {
                        n || St.test(e) ? r(e, o) : Dt(e + "[" + ("object" === typeof o && null != o ? t : "") + "]", o, n, r)
                    }
                    ));
                else if (n || "object" !== w(t))
                    r(e, t);
                else
                    for (o in t)
                        Dt(e + "[" + o + "]", t[o], n, r)
            }
            A.param = function(e, t) {
                var n, r = [], o = function(e, t) {
                    var n = g(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (null == e)
                    return "";
                if (Array.isArray(e) || e.jquery && !A.isPlainObject(e))
                    A.each(e, (function() {
                        o(this.name, this.value)
                    }
                    ));
                else
                    for (n in e)
                        Dt(n, e[n], t, o);
                return r.join("&")
            }
            ,
            A.fn.extend({
                serialize: function() {
                    return A.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = A.prop(this, "elements");
                        return e ? A.makeArray(e) : this
                    }
                    )).filter((function() {
                        var e = this.type;
                        return this.name && !A(this).is(":disabled") && Et.test(this.nodeName) && !Ct.test(e) && (this.checked || !he.test(e))
                    }
                    )).map((function(e, t) {
                        var n = A(this).val();
                        return null == n ? null : Array.isArray(n) ? A.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(kt, "\r\n")
                            }
                        }
                        )) : {
                            name: t.name,
                            value: n.replace(kt, "\r\n")
                        }
                    }
                    )).get()
                }
            });
            var Lt = /%20/g
              , Nt = /#.*$/
              , jt = /([?&])_=[^&]*/
              , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , It = /^(?:GET|HEAD)$/
              , Ot = /^\/\//
              , qt = {}
              , Pt = {}
              , Mt = "*/".concat("*")
              , Ft = v.createElement("a");
            function Bt(e) {
                return function(t, n) {
                    "string" !== typeof t && (n = t,
                    t = "*");
                    var r, o = 0, i = t.toLowerCase().match(M) || [];
                    if (g(n))
                        for (; r = i[o++]; )
                            "+" === r[0] ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function Rt(e, t, n, r) {
                var o = {}
                  , i = e === Pt;
                function a(s) {
                    var u;
                    return o[s] = !0,
                    A.each(e[s] || [], (function(e, s) {
                        var l = s(t, n, r);
                        return "string" !== typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        a(l),
                        !1)
                    }
                    )),
                    u
                }
                return a(t.dataTypes[0]) || !o["*"] && a("*")
            }
            function Wt(e, t) {
                var n, r, o = A.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                return r && A.extend(!0, e, r),
                e
            }
            Ft.href = wt.href,
            A.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Mt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": A.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Wt(Wt(e, A.ajaxSettings), t) : Wt(A.ajaxSettings, e)
                },
                ajaxPrefilter: Bt(qt),
                ajaxTransport: Bt(Pt),
                ajax: function(e, t) {
                    "object" === typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var r, o, i, a, s, u, l, c, d, f, p = A.ajaxSetup({}, t), h = p.context || p, m = p.context && (h.nodeType || h.jquery) ? A(h) : A.event, _ = A.Deferred(), g = A.Callbacks("once memory"), y = p.statusCode || {}, x = {}, b = {}, w = "canceled", T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!a)
                                    for (a = {}; t = Ht.exec(i); )
                                        a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return l ? i : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e,
                            x[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (p.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l)
                                    T.always(e[T.status]);
                                else
                                    for (t in e)
                                        y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return r && r.abort(t),
                            S(0, t),
                            this
                        }
                    };
                    if (_.promise(T),
                    p.url = ((e || p.url || wt.href) + "").replace(Ot, wt.protocol + "//"),
                    p.type = t.method || t.type || p.method || p.type,
                    p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""],
                    null == p.crossDomain) {
                        u = v.createElement("a");
                        try {
                            u.href = p.url,
                            u.href = u.href,
                            p.crossDomain = Ft.protocol + "//" + Ft.host !== u.protocol + "//" + u.host
                        } catch (k) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" !== typeof p.data && (p.data = A.param(p.data, p.traditional)),
                    Rt(qt, p, t, T),
                    l)
                        return T;
                    for (d in (c = A.event && p.global) && 0 === A.active++ && A.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !It.test(p.type),
                    o = p.url.replace(Nt, ""),
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (f = p.url.slice(o.length),
                    p.data && (p.processData || "string" === typeof p.data) && (o += (At.test(o) ? "&" : "?") + p.data,
                    delete p.data),
                    !1 === p.cache && (o = o.replace(jt, "$1"),
                    f = (At.test(o) ? "&" : "?") + "_=" + Tt.guid++ + f),
                    p.url = o + f),
                    p.ifModified && (A.lastModified[o] && T.setRequestHeader("If-Modified-Since", A.lastModified[o]),
                    A.etag[o] && T.setRequestHeader("If-None-Match", A.etag[o])),
                    (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                    T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : p.accepts["*"]),
                    p.headers)
                        T.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || l))
                        return T.abort();
                    if (w = "abort",
                    g.add(p.complete),
                    T.done(p.success),
                    T.fail(p.error),
                    r = Rt(Pt, p, t, T)) {
                        if (T.readyState = 1,
                        c && m.trigger("ajaxSend", [T, p]),
                        l)
                            return T;
                        p.async && p.timeout > 0 && (s = n.setTimeout((function() {
                            T.abort("timeout")
                        }
                        ), p.timeout));
                        try {
                            l = !1,
                            r.send(x, S)
                        } catch (k) {
                            if (l)
                                throw k;
                            S(-1, k)
                        }
                    } else
                        S(-1, "No Transport");
                    function S(e, t, a, u) {
                        var d, f, v, x, b, w = t;
                        l || (l = !0,
                        s && n.clearTimeout(s),
                        r = void 0,
                        i = u || "",
                        T.readyState = e > 0 ? 4 : 0,
                        d = e >= 200 && e < 300 || 304 === e,
                        a && (x = function(e, t, n) {
                            for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                                u.shift(),
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (o in s)
                                    if (s[o] && s[o].test(r)) {
                                        u.unshift(o);
                                        break
                                    }
                            if (u[0]in n)
                                i = u[0];
                            else {
                                for (o in n) {
                                    if (!u[0] || e.converters[o + " " + u[0]]) {
                                        i = o;
                                        break
                                    }
                                    a || (a = o)
                                }
                                i = i || a
                            }
                            if (i)
                                return i !== u[0] && u.unshift(i),
                                n[i]
                        }(p, T, a)),
                        !d && A.inArray("script", p.dataTypes) > -1 && A.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                        ),
                        x = function(e, t, n, r) {
                            var o, i, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            for (i = c.shift(); i; )
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                u = i,
                                i = c.shift())
                                    if ("*" === i)
                                        i = u;
                                    else if ("*" !== u && u !== i) {
                                        if (!(a = l[u + " " + i] || l["* " + i]))
                                            for (o in l)
                                                if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0],
                                                    c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws)
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (k) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? k : "No conversion from " + u + " to " + i
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, x, T, d),
                        d ? (p.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (A.lastModified[o] = b),
                        (b = T.getResponseHeader("etag")) && (A.etag[o] = b)),
                        204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state,
                        f = x.data,
                        d = !(v = x.error))) : (v = w,
                        !e && w || (w = "error",
                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || w) + "",
                        d ? _.resolveWith(h, [f, w, T]) : _.rejectWith(h, [T, w, v]),
                        T.statusCode(y),
                        y = void 0,
                        c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [T, p, d ? f : v]),
                        g.fireWith(h, [T, w]),
                        c && (m.trigger("ajaxComplete", [T, p]),
                        --A.active || A.event.trigger("ajaxStop")))
                    }
                    return T
                },
                getJSON: function(e, t, n) {
                    return A.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return A.get(e, void 0, t, "script")
                }
            }),
            A.each(["get", "post"], (function(e, t) {
                A[t] = function(e, n, r, o) {
                    return g(n) && (o = o || r,
                    r = n,
                    n = void 0),
                    A.ajax(A.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, A.isPlainObject(e) && e))
                }
            }
            )),
            A.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers)
                    "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }
            )),
            A._evalUrl = function(e, t, n) {
                return A.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        A.globalEval(e, t, n)
                    }
                })
            }
            ,
            A.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (g(e) && (e = e.call(this[0])),
                    t = A(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map((function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }
                    )).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return g(e) ? this.each((function(t) {
                        A(this).wrapInner(e.call(this, t))
                    }
                    )) : this.each((function() {
                        var t = A(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                    ))
                },
                wrap: function(e) {
                    var t = g(e);
                    return this.each((function(n) {
                        A(this).wrapAll(t ? e.call(this, n) : e)
                    }
                    ))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        A(this).replaceWith(this.childNodes)
                    }
                    )),
                    this
                }
            }),
            A.expr.pseudos.hidden = function(e) {
                return !A.expr.pseudos.visible(e)
            }
            ,
            A.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            A.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var $t = {
                0: 200,
                1223: 204
            }
              , Gt = A.ajaxSettings.xhr();
            _.cors = !!Gt && "withCredentials"in Gt,
            _.ajax = Gt = !!Gt,
            A.ajaxTransport((function(e) {
                var t, r;
                if (_.cors || Gt && !e.crossDomain)
                    return {
                        send: function(o, i) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (a in e.xhrFields)
                                    s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                            e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                            o)
                                s.setRequestHeader(a, o[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                    "abort" === e ? s.abort() : "error" === e ? "number" !== typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" !== typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }
                            ,
                            s.onload = t(),
                            r = s.onerror = s.ontimeout = t("error"),
                            void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && n.setTimeout((function() {
                                    t && r()
                                }
                                ))
                            }
                            ,
                            t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (u) {
                                if (t)
                                    throw u
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
            }
            )),
            A.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            }
            )),
            A.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return A.globalEval(e),
                        e
                    }
                }
            }),
            A.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }
            )),
            A.ajaxTransport("script", (function(e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs)
                    return {
                        send: function(r, o) {
                            t = A("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && o("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            v.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
            }
            ));
            var Vt = []
              , Xt = /(=)\?(?=&|$)|\?\?/;
            A.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vt.pop() || A.expando + "_" + Tt.guid++;
                    return this[e] = !0,
                    e
                }
            }),
            A.ajaxPrefilter("json jsonp", (function(e, t, r) {
                var o, i, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0])
                    return o = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    s ? e[s] = e[s].replace(Xt, "$1" + o) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    e.converters["script json"] = function() {
                        return a || A.error(o + " was not called"),
                        a[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    i = n[o],
                    n[o] = function() {
                        a = arguments
                    }
                    ,
                    r.always((function() {
                        void 0 === i ? A(n).removeProp(o) : n[o] = i,
                        e[o] && (e.jsonpCallback = t.jsonpCallback,
                        Vt.push(o)),
                        a && g(i) && i(a[0]),
                        a = i = void 0
                    }
                    )),
                    "script"
            }
            )),
            _.createHTMLDocument = function() {
                var e = v.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
            }(),
            A.parseHTML = function(e, t, n) {
                return "string" !== typeof e ? [] : ("boolean" === typeof t && (n = t,
                t = !1),
                t || (_.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
                t.head.appendChild(r)) : t = v),
                i = !n && [],
                (o = N.exec(e)) ? [t.createElement(o[1])] : (o = be([e], t, i),
                i && i.length && A(i).remove(),
                A.merge([], o.childNodes)));
                var r, o, i
            }
            ,
            A.fn.load = function(e, t, n) {
                var r, o, i, a = this, s = e.indexOf(" ");
                return s > -1 && (r = _t(e.slice(s)),
                e = e.slice(0, s)),
                g(t) ? (n = t,
                t = void 0) : t && "object" === typeof t && (o = "POST"),
                a.length > 0 && A.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    i = arguments,
                    a.html(r ? A("<div>").append(A.parseHTML(e)).find(r) : e)
                }
                )).always(n && function(e, t) {
                    a.each((function() {
                        n.apply(this, i || [e.responseText, t, e])
                    }
                    ))
                }
                ),
                this
            }
            ,
            A.expr.pseudos.animated = function(e) {
                return A.grep(A.timers, (function(t) {
                    return e === t.elem
                }
                )).length
            }
            ,
            A.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s, u, l = A.css(e, "position"), c = A(e), d = {};
                    "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    i = A.css(e, "top"),
                    u = A.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
                    o = r.left) : (a = parseFloat(i) || 0,
                    o = parseFloat(u) || 0),
                    g(t) && (t = t.call(e, n, A.extend({}, s))),
                    null != t.top && (d.top = t.top - s.top + a),
                    null != t.left && (d.left = t.left - s.left + o),
                    "using"in t ? t.using.call(e, d) : c.css(d)
                }
            },
            A.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each((function(t) {
                            A.offset.setOffset(this, e, t)
                        }
                        ));
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                    {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0], o = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === A.css(r, "position"))
                            t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === A.css(e, "position"); )
                                e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((o = A(e).offset()).top += A.css(e, "borderTopWidth", !0),
                            o.left += A.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - o.top - A.css(r, "marginTop", !0),
                            left: t.left - o.left - A.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === A.css(e, "position"); )
                            e = e.offsetParent;
                        return e || ae
                    }
                    ))
                }
            }),
            A.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = "pageYOffset" === t;
                A.fn[e] = function(r) {
                    return V(this, (function(e, r, o) {
                        var i;
                        if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                            return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                    }
                    ), e, r, arguments.length)
                }
            }
            )),
            A.each(["top", "left"], (function(e, t) {
                A.cssHooks[t] = Ve(_.pixelPosition, (function(e, n) {
                    if (n)
                        return n = Ge(e, t),
                        Me.test(n) ? A(e).position()[t] + "px" : n
                }
                ))
            }
            )),
            A.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                A.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, r) {
                    A.fn[r] = function(o, i) {
                        var a = arguments.length && (n || "boolean" !== typeof o)
                          , s = n || (!0 === o || !0 === i ? "margin" : "border");
                        return V(this, (function(t, n, o) {
                            var i;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? A.css(t, n, s) : A.style(t, n, o, s)
                        }
                        ), t, a ? o : void 0, a)
                    }
                }
                ))
            }
            )),
            A.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                A.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }
            )),
            A.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            A.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                A.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }
            ));
            var Ut = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            A.proxy = function(e, t) {
                var n, r, o;
                if ("string" === typeof t && (n = e[t],
                t = e,
                e = n),
                g(e))
                    return r = s.call(arguments, 2),
                    o = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }
                    ,
                    o.guid = e.guid = e.guid || A.guid++,
                    o
            }
            ,
            A.holdReady = function(e) {
                e ? A.readyWait++ : A.ready(!0)
            }
            ,
            A.isArray = Array.isArray,
            A.parseJSON = JSON.parse,
            A.nodeName = L,
            A.isFunction = g,
            A.isWindow = y,
            A.camelCase = Y,
            A.type = w,
            A.now = Date.now,
            A.isNumeric = function(e) {
                var t = A.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }
            ,
            A.trim = function(e) {
                return null == e ? "" : (e + "").replace(Ut, "$1")
            }
            ,
            void 0 === (r = function() {
                return A
            }
            .apply(t, [])) || (e.exports = r);
            var zt = n.jQuery
              , Yt = n.$;
            return A.noConflict = function(e) {
                return n.$ === A && (n.$ = Yt),
                e && n.jQuery === A && (n.jQuery = zt),
                A
            }
            ,
            "undefined" === typeof o && (n.jQuery = n.$ = A),
            A
        }
        ))
    },
    8: function(e, t, n) {
        (function(n) {
            var r;
            !function() {
                "use strict";
                var o = function() {
                    this.init()
                };
                o.prototype = {
                    init: function() {
                        var e = this || i;
                        return e._counter = 1e3,
                        e._html5AudioPool = [],
                        e.html5PoolSize = 10,
                        e._codecs = {},
                        e._howls = [],
                        e._muted = !1,
                        e._volume = 1,
                        e._canPlayEvent = "canplaythrough",
                        e._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null,
                        e.masterGain = null,
                        e.noAudio = !1,
                        e.usingWebAudio = !0,
                        e.autoSuspend = !0,
                        e.ctx = null,
                        e.autoUnlock = !0,
                        e._setup(),
                        e
                    },
                    volume: function(e) {
                        var t = this || i;
                        if (e = parseFloat(e),
                        t.ctx || p(),
                        "undefined" !== typeof e && e >= 0 && e <= 1) {
                            if (t._volume = e,
                            t._muted)
                                return t;
                            t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
                            for (var n = 0; n < t._howls.length; n++)
                                if (!t._howls[n]._webAudio)
                                    for (var r = t._howls[n]._getSoundIds(), o = 0; o < r.length; o++) {
                                        var a = t._howls[n]._soundById(r[o]);
                                        a && a._node && (a._node.volume = a._volume * e)
                                    }
                            return t
                        }
                        return t._volume
                    },
                    mute: function(e) {
                        var t = this || i;
                        t.ctx || p(),
                        t._muted = e,
                        t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, i.ctx.currentTime);
                        for (var n = 0; n < t._howls.length; n++)
                            if (!t._howls[n]._webAudio)
                                for (var r = t._howls[n]._getSoundIds(), o = 0; o < r.length; o++) {
                                    var a = t._howls[n]._soundById(r[o]);
                                    a && a._node && (a._node.muted = !!e || a._muted)
                                }
                        return t
                    },
                    stop: function() {
                        for (var e = this || i, t = 0; t < e._howls.length; t++)
                            e._howls[t].stop();
                        return e
                    },
                    unload: function() {
                        for (var e = this || i, t = e._howls.length - 1; t >= 0; t--)
                            e._howls[t].unload();
                        return e.usingWebAudio && e.ctx && "undefined" !== typeof e.ctx.close && (e.ctx.close(),
                        e.ctx = null,
                        p()),
                        e
                    },
                    codecs: function(e) {
                        return (this || i)._codecs[e.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var e = this || i;
                        if (e.state = e.ctx && e.ctx.state || "suspended",
                        e._autoSuspend(),
                        !e.usingWebAudio)
                            if ("undefined" !== typeof Audio)
                                try {
                                    "undefined" === typeof (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                                } catch (t) {
                                    e.noAudio = !0
                                }
                            else
                                e.noAudio = !0;
                        try {
                            (new Audio).muted && (e.noAudio = !0)
                        } catch (t) {}
                        return e.noAudio || e._setupCodecs(),
                        e
                    },
                    _setupCodecs: function() {
                        var e = this || i
                          , t = null;
                        try {
                            t = "undefined" !== typeof Audio ? new Audio : null
                        } catch (c) {
                            return e
                        }
                        if (!t || "function" !== typeof t.canPlayType)
                            return e;
                        var n = t.canPlayType("audio/mpeg;").replace(/^no$/, "")
                          , r = e._navigator ? e._navigator.userAgent : ""
                          , o = r.match(/OPR\/([0-6].)/g)
                          , a = o && parseInt(o[0].split("/")[1], 10) < 33
                          , s = -1 !== r.indexOf("Safari") && -1 === r.indexOf("Chrome")
                          , u = r.match(/Version\/(.*?) /)
                          , l = s && u && parseInt(u[1], 10) < 15;
                        return e._codecs = {
                            mp3: !(a || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!n,
                            opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                            aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            webm: !(l || !t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                        },
                        e
                    },
                    _unlockAudio: function() {
                        var e = this || i;
                        if (!e._audioUnlocked && e.ctx) {
                            e._audioUnlocked = !1,
                            e.autoUnlock = !1,
                            e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0,
                            e.unload()),
                            e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                            var t = function(n) {
                                for (; e._html5AudioPool.length < e.html5PoolSize; )
                                    try {
                                        var r = new Audio;
                                        r._unlocked = !0,
                                        e._releaseHtml5Audio(r)
                                    } catch (n) {
                                        e.noAudio = !0;
                                        break
                                    }
                                for (var o = 0; o < e._howls.length; o++)
                                    if (!e._howls[o]._webAudio)
                                        for (var i = e._howls[o]._getSoundIds(), a = 0; a < i.length; a++) {
                                            var s = e._howls[o]._soundById(i[a]);
                                            s && s._node && !s._node._unlocked && (s._node._unlocked = !0,
                                            s._node.load())
                                        }
                                e._autoResume();
                                var u = e.ctx.createBufferSource();
                                u.buffer = e._scratchBuffer,
                                u.connect(e.ctx.destination),
                                "undefined" === typeof u.start ? u.noteOn(0) : u.start(0),
                                "function" === typeof e.ctx.resume && e.ctx.resume(),
                                u.onended = function() {
                                    u.disconnect(0),
                                    e._audioUnlocked = !0,
                                    document.removeEventListener("touchstart", t, !0),
                                    document.removeEventListener("touchend", t, !0),
                                    document.removeEventListener("click", t, !0),
                                    document.removeEventListener("keydown", t, !0);
                                    for (var n = 0; n < e._howls.length; n++)
                                        e._howls[n]._emit("unlock")
                                }
                            };
                            return document.addEventListener("touchstart", t, !0),
                            document.addEventListener("touchend", t, !0),
                            document.addEventListener("click", t, !0),
                            document.addEventListener("keydown", t, !0),
                            e
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var e = this || i;
                        if (e._html5AudioPool.length)
                            return e._html5AudioPool.pop();
                        var t = (new Audio).play();
                        return t && "undefined" !== typeof Promise && (t instanceof Promise || "function" === typeof t.then) && t.catch((function() {}
                        )),
                        new Audio
                    },
                    _releaseHtml5Audio: function(e) {
                        var t = this || i;
                        return e._unlocked && t._html5AudioPool.push(e),
                        t
                    },
                    _autoSuspend: function() {
                        var e = this;
                        if (e.autoSuspend && e.ctx && "undefined" !== typeof e.ctx.suspend && i.usingWebAudio) {
                            for (var t = 0; t < e._howls.length; t++)
                                if (e._howls[t]._webAudio)
                                    for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                        if (!e._howls[t]._sounds[n]._paused)
                                            return e;
                            return e._suspendTimer && clearTimeout(e._suspendTimer),
                            e._suspendTimer = setTimeout((function() {
                                if (e.autoSuspend) {
                                    e._suspendTimer = null,
                                    e.state = "suspending";
                                    var t = function() {
                                        e.state = "suspended",
                                        e._resumeAfterSuspend && (delete e._resumeAfterSuspend,
                                        e._autoResume())
                                    };
                                    e.ctx.suspend().then(t, t)
                                }
                            }
                            ), 3e4),
                            e
                        }
                    },
                    _autoResume: function() {
                        var e = this;
                        if (e.ctx && "undefined" !== typeof e.ctx.resume && i.usingWebAudio)
                            return "running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer ? (clearTimeout(e._suspendTimer),
                            e._suspendTimer = null) : "suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state ? (e.ctx.resume().then((function() {
                                e.state = "running";
                                for (var t = 0; t < e._howls.length; t++)
                                    e._howls[t]._emit("resume")
                            }
                            )),
                            e._suspendTimer && (clearTimeout(e._suspendTimer),
                            e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0),
                            e
                    }
                };
                var i = new o
                  , a = function(e) {
                    e.src && 0 !== e.src.length && this.init(e)
                };
                a.prototype = {
                    init: function(e) {
                        var t = this;
                        return i.ctx || p(),
                        t._autoplay = e.autoplay || !1,
                        t._format = "string" !== typeof e.format ? e.format : [e.format],
                        t._html5 = e.html5 || !1,
                        t._muted = e.mute || !1,
                        t._loop = e.loop || !1,
                        t._pool = e.pool || 5,
                        t._preload = "boolean" !== typeof e.preload && "metadata" !== e.preload || e.preload,
                        t._rate = e.rate || 1,
                        t._sprite = e.sprite || {},
                        t._src = "string" !== typeof e.src ? e.src : [e.src],
                        t._volume = void 0 !== e.volume ? e.volume : 1,
                        t._xhr = {
                            method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                            headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                            withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials
                        },
                        t._duration = 0,
                        t._state = "unloaded",
                        t._sounds = [],
                        t._endTimers = {},
                        t._queue = [],
                        t._playLock = !1,
                        t._onend = e.onend ? [{
                            fn: e.onend
                        }] : [],
                        t._onfade = e.onfade ? [{
                            fn: e.onfade
                        }] : [],
                        t._onload = e.onload ? [{
                            fn: e.onload
                        }] : [],
                        t._onloaderror = e.onloaderror ? [{
                            fn: e.onloaderror
                        }] : [],
                        t._onplayerror = e.onplayerror ? [{
                            fn: e.onplayerror
                        }] : [],
                        t._onpause = e.onpause ? [{
                            fn: e.onpause
                        }] : [],
                        t._onplay = e.onplay ? [{
                            fn: e.onplay
                        }] : [],
                        t._onstop = e.onstop ? [{
                            fn: e.onstop
                        }] : [],
                        t._onmute = e.onmute ? [{
                            fn: e.onmute
                        }] : [],
                        t._onvolume = e.onvolume ? [{
                            fn: e.onvolume
                        }] : [],
                        t._onrate = e.onrate ? [{
                            fn: e.onrate
                        }] : [],
                        t._onseek = e.onseek ? [{
                            fn: e.onseek
                        }] : [],
                        t._onunlock = e.onunlock ? [{
                            fn: e.onunlock
                        }] : [],
                        t._onresume = [],
                        t._webAudio = i.usingWebAudio && !t._html5,
                        "undefined" !== typeof i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(),
                        i._howls.push(t),
                        t._autoplay && t._queue.push({
                            event: "play",
                            action: function() {
                                t.play()
                            }
                        }),
                        t._preload && "none" !== t._preload && t.load(),
                        t
                    },
                    load: function() {
                        var e = this
                          , t = null;
                        if (i.noAudio)
                            e._emit("loaderror", null, "No audio support.");
                        else {
                            "string" === typeof e._src && (e._src = [e._src]);
                            for (var n = 0; n < e._src.length; n++) {
                                var r, o;
                                if (e._format && e._format[n])
                                    r = e._format[n];
                                else {
                                    if ("string" !== typeof (o = e._src[n])) {
                                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }
                                    (r = /^data:audio\/([^;,]+);/i.exec(o)) || (r = /\.([^.]+)$/.exec(o.split("?", 1)[0])),
                                    r && (r = r[1].toLowerCase())
                                }
                                if (r && i.codecs(r)) {
                                    t = e._src[n];
                                    break
                                }
                            }
                            if (t)
                                return e._src = t,
                                e._state = "loading",
                                "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0,
                                e._webAudio = !1),
                                new s(e),
                                e._webAudio && l(e),
                                e;
                            e._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                    },
                    play: function(e, t) {
                        var n = this
                          , r = null;
                        if ("number" === typeof e)
                            r = e,
                            e = null;
                        else {
                            if ("string" === typeof e && "loaded" === n._state && !n._sprite[e])
                                return null;
                            if ("undefined" === typeof e && (e = "__default",
                            !n._playLock)) {
                                for (var o = 0, a = 0; a < n._sounds.length; a++)
                                    n._sounds[a]._paused && !n._sounds[a]._ended && (o++,
                                    r = n._sounds[a]._id);
                                1 === o ? e = null : r = null
                            }
                        }
                        var s = r ? n._soundById(r) : n._inactiveSound();
                        if (!s)
                            return null;
                        if (r && !e && (e = s._sprite || "__default"),
                        "loaded" !== n._state) {
                            s._sprite = e,
                            s._ended = !1;
                            var u = s._id;
                            return n._queue.push({
                                event: "play",
                                action: function() {
                                    n.play(u)
                                }
                            }),
                            u
                        }
                        if (r && !s._paused)
                            return t || n._loadQueue("play"),
                            s._id;
                        n._webAudio && i._autoResume();
                        var l = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3)
                          , c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - l)
                          , d = 1e3 * c / Math.abs(s._rate)
                          , f = n._sprite[e][0] / 1e3
                          , p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                        s._sprite = e,
                        s._ended = !1;
                        var h = function() {
                            s._paused = !1,
                            s._seek = l,
                            s._start = f,
                            s._stop = p,
                            s._loop = !(!s._loop && !n._sprite[e][2])
                        };
                        if (!(l >= p)) {
                            var m = s._node;
                            if (n._webAudio) {
                                var _ = function() {
                                    n._playLock = !1,
                                    h(),
                                    n._refreshBuffer(s);
                                    var e = s._muted || n._muted ? 0 : s._volume;
                                    m.gain.setValueAtTime(e, i.ctx.currentTime),
                                    s._playStart = i.ctx.currentTime,
                                    "undefined" === typeof m.bufferSource.start ? s._loop ? m.bufferSource.noteGrainOn(0, l, 86400) : m.bufferSource.noteGrainOn(0, l, c) : s._loop ? m.bufferSource.start(0, l, 86400) : m.bufferSource.start(0, l, c),
                                    d !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d)),
                                    t || setTimeout((function() {
                                        n._emit("play", s._id),
                                        n._loadQueue()
                                    }
                                    ), 0)
                                };
                                "running" === i.state && "interrupted" !== i.ctx.state ? _() : (n._playLock = !0,
                                n.once("resume", _),
                                n._clearTimer(s._id))
                            } else {
                                var g = function() {
                                    m.currentTime = l,
                                    m.muted = s._muted || n._muted || i._muted || m.muted,
                                    m.volume = s._volume * i.volume(),
                                    m.playbackRate = s._rate;
                                    try {
                                        var r = m.play();
                                        if (r && "undefined" !== typeof Promise && (r instanceof Promise || "function" === typeof r.then) ? (n._playLock = !0,
                                        h(),
                                        r.then((function() {
                                            n._playLock = !1,
                                            m._unlocked = !0,
                                            t ? n._loadQueue() : n._emit("play", s._id)
                                        }
                                        )).catch((function() {
                                            n._playLock = !1,
                                            n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),
                                            s._ended = !0,
                                            s._paused = !0
                                        }
                                        ))) : t || (n._playLock = !1,
                                        h(),
                                        n._emit("play", s._id)),
                                        m.playbackRate = s._rate,
                                        m.paused)
                                            return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d) : (n._endTimers[s._id] = function() {
                                            n._ended(s),
                                            m.removeEventListener("ended", n._endTimers[s._id], !1)
                                        }
                                        ,
                                        m.addEventListener("ended", n._endTimers[s._id], !1))
                                    } catch (o) {
                                        n._emit("playerror", s._id, o)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === m.src && (m.src = n._src,
                                m.load());
                                var y = window && window.ejecta || !m.readyState && i._navigator.isCocoonJS;
                                if (m.readyState >= 3 || y)
                                    g();
                                else {
                                    n._playLock = !0,
                                    n._state = "loading";
                                    var v = function() {
                                        n._state = "loaded",
                                        g(),
                                        m.removeEventListener(i._canPlayEvent, v, !1)
                                    };
                                    m.addEventListener(i._canPlayEvent, v, !1),
                                    n._clearTimer(s._id)
                                }
                            }
                            return s._id
                        }
                        n._ended(s)
                    },
                    pause: function(e) {
                        var t = this;
                        if ("loaded" !== t._state || t._playLock)
                            return t._queue.push({
                                event: "pause",
                                action: function() {
                                    t.pause(e)
                                }
                            }),
                            t;
                        for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                            t._clearTimer(n[r]);
                            var o = t._soundById(n[r]);
                            if (o && !o._paused && (o._seek = t.seek(n[r]),
                            o._rateSeek = 0,
                            o._paused = !0,
                            t._stopFade(n[r]),
                            o._node))
                                if (t._webAudio) {
                                    if (!o._node.bufferSource)
                                        continue;
                                    "undefined" === typeof o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0),
                                    t._cleanBuffer(o._node)
                                } else
                                    isNaN(o._node.duration) && o._node.duration !== 1 / 0 || o._node.pause();
                            arguments[1] || t._emit("pause", o ? o._id : null)
                        }
                        return t
                    },
                    stop: function(e, t) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock)
                            return n._queue.push({
                                event: "stop",
                                action: function() {
                                    n.stop(e)
                                }
                            }),
                            n;
                        for (var r = n._getSoundIds(e), o = 0; o < r.length; o++) {
                            n._clearTimer(r[o]);
                            var i = n._soundById(r[o]);
                            i && (i._seek = i._start || 0,
                            i._rateSeek = 0,
                            i._paused = !0,
                            i._ended = !0,
                            n._stopFade(r[o]),
                            i._node && (n._webAudio ? i._node.bufferSource && ("undefined" === typeof i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0),
                            n._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0,
                            i._node.pause(),
                            i._node.duration === 1 / 0 && n._clearSound(i._node))),
                            t || n._emit("stop", i._id))
                        }
                        return n
                    },
                    mute: function(e, t) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock)
                            return n._queue.push({
                                event: "mute",
                                action: function() {
                                    n.mute(e, t)
                                }
                            }),
                            n;
                        if ("undefined" === typeof t) {
                            if ("boolean" !== typeof e)
                                return n._muted;
                            n._muted = e
                        }
                        for (var r = n._getSoundIds(t), o = 0; o < r.length; o++) {
                            var a = n._soundById(r[o]);
                            a && (a._muted = e,
                            a._interval && n._stopFade(a._id),
                            n._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime) : a._node && (a._node.muted = !!i._muted || e),
                            n._emit("mute", a._id))
                        }
                        return n
                    },
                    volume: function() {
                        var e, t, n, r = this, o = arguments;
                        if (0 === o.length)
                            return r._volume;
                        if (1 === o.length || 2 === o.length && "undefined" === typeof o[1]) {
                            var a = r._getSoundIds()
                              , s = a.indexOf(o[0]);
                            s >= 0 ? t = parseInt(o[0], 10) : e = parseFloat(o[0])
                        } else
                            o.length >= 2 && (e = parseFloat(o[0]),
                            t = parseInt(o[1], 10));
                        if (!("undefined" !== typeof e && e >= 0 && e <= 1))
                            return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
                        if ("loaded" !== r._state || r._playLock)
                            return r._queue.push({
                                event: "volume",
                                action: function() {
                                    r.volume.apply(r, o)
                                }
                            }),
                            r;
                        "undefined" === typeof t && (r._volume = e),
                        t = r._getSoundIds(t);
                        for (var u = 0; u < t.length; u++)
                            (n = r._soundById(t[u])) && (n._volume = e,
                            o[2] || r._stopFade(t[u]),
                            r._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, i.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * i.volume()),
                            r._emit("volume", n._id));
                        return r
                    },
                    fade: function(e, t, n, r) {
                        var o = this;
                        if ("loaded" !== o._state || o._playLock)
                            return o._queue.push({
                                event: "fade",
                                action: function() {
                                    o.fade(e, t, n, r)
                                }
                            }),
                            o;
                        e = Math.min(Math.max(0, parseFloat(e)), 1),
                        t = Math.min(Math.max(0, parseFloat(t)), 1),
                        n = parseFloat(n),
                        o.volume(e, r);
                        for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
                            var u = o._soundById(a[s]);
                            if (u) {
                                if (r || o._stopFade(a[s]),
                                o._webAudio && !u._muted) {
                                    var l = i.ctx.currentTime
                                      , c = l + n / 1e3;
                                    u._volume = e,
                                    u._node.gain.setValueAtTime(e, l),
                                    u._node.gain.linearRampToValueAtTime(t, c)
                                }
                                o._startFadeInterval(u, e, t, n, a[s], "undefined" === typeof r)
                            }
                        }
                        return o
                    },
                    _startFadeInterval: function(e, t, n, r, o, i) {
                        var a = this
                          , s = t
                          , u = n - t
                          , l = Math.abs(u / .01)
                          , c = Math.max(4, l > 0 ? r / l : r)
                          , d = Date.now();
                        e._fadeTo = n,
                        e._interval = setInterval((function() {
                            var o = (Date.now() - d) / r;
                            d = Date.now(),
                            s += u * o,
                            s = Math.round(100 * s) / 100,
                            s = u < 0 ? Math.max(n, s) : Math.min(n, s),
                            a._webAudio ? e._volume = s : a.volume(s, e._id, !0),
                            i && (a._volume = s),
                            (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval),
                            e._interval = null,
                            e._fadeTo = null,
                            a.volume(n, e._id),
                            a._emit("fade", e._id))
                        }
                        ), c)
                    },
                    _stopFade: function(e) {
                        var t = this
                          , n = t._soundById(e);
                        return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(i.ctx.currentTime),
                        clearInterval(n._interval),
                        n._interval = null,
                        t.volume(n._fadeTo, e),
                        n._fadeTo = null,
                        t._emit("fade", e)),
                        t
                    },
                    loop: function() {
                        var e, t, n, r = this, o = arguments;
                        if (0 === o.length)
                            return r._loop;
                        if (1 === o.length) {
                            if ("boolean" !== typeof o[0])
                                return !!(n = r._soundById(parseInt(o[0], 10))) && n._loop;
                            e = o[0],
                            r._loop = e
                        } else
                            2 === o.length && (e = o[0],
                            t = parseInt(o[1], 10));
                        for (var i = r._getSoundIds(t), a = 0; a < i.length; a++)
                            (n = r._soundById(i[a])) && (n._loop = e,
                            r._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e,
                            e && (n._node.bufferSource.loopStart = n._start || 0,
                            n._node.bufferSource.loopEnd = n._stop,
                            r.playing(i[a]) && (r.pause(i[a], !0),
                            r.play(i[a], !0)))));
                        return r
                    },
                    rate: function() {
                        var e, t, n, r = this, o = arguments;
                        if (0 === o.length)
                            t = r._sounds[0]._id;
                        else if (1 === o.length) {
                            var a = r._getSoundIds()
                              , s = a.indexOf(o[0]);
                            s >= 0 ? t = parseInt(o[0], 10) : e = parseFloat(o[0])
                        } else
                            2 === o.length && (e = parseFloat(o[0]),
                            t = parseInt(o[1], 10));
                        if ("number" !== typeof e)
                            return (n = r._soundById(t)) ? n._rate : r._rate;
                        if ("loaded" !== r._state || r._playLock)
                            return r._queue.push({
                                event: "rate",
                                action: function() {
                                    r.rate.apply(r, o)
                                }
                            }),
                            r;
                        "undefined" === typeof t && (r._rate = e),
                        t = r._getSoundIds(t);
                        for (var u = 0; u < t.length; u++)
                            if (n = r._soundById(t[u])) {
                                r.playing(t[u]) && (n._rateSeek = r.seek(t[u]),
                                n._playStart = r._webAudio ? i.ctx.currentTime : n._playStart),
                                n._rate = e,
                                r._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime) : n._node && (n._node.playbackRate = e);
                                var l = r.seek(t[u])
                                  , c = (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 - l
                                  , d = 1e3 * c / Math.abs(n._rate);
                                !r._endTimers[t[u]] && n._paused || (r._clearTimer(t[u]),
                                r._endTimers[t[u]] = setTimeout(r._ended.bind(r, n), d)),
                                r._emit("rate", n._id)
                            }
                        return r
                    },
                    seek: function() {
                        var e, t, n = this, r = arguments;
                        if (0 === r.length)
                            n._sounds.length && (t = n._sounds[0]._id);
                        else if (1 === r.length) {
                            var o = n._getSoundIds()
                              , a = o.indexOf(r[0]);
                            a >= 0 ? t = parseInt(r[0], 10) : n._sounds.length && (t = n._sounds[0]._id,
                            e = parseFloat(r[0]))
                        } else
                            2 === r.length && (e = parseFloat(r[0]),
                            t = parseInt(r[1], 10));
                        if ("undefined" === typeof t)
                            return 0;
                        if ("number" === typeof e && ("loaded" !== n._state || n._playLock))
                            return n._queue.push({
                                event: "seek",
                                action: function() {
                                    n.seek.apply(n, r)
                                }
                            }),
                            n;
                        var s = n._soundById(t);
                        if (s) {
                            if (!("number" === typeof e && e >= 0)) {
                                if (n._webAudio) {
                                    var u = n.playing(t) ? i.ctx.currentTime - s._playStart : 0
                                      , l = s._rateSeek ? s._rateSeek - s._seek : 0;
                                    return s._seek + (l + u * Math.abs(s._rate))
                                }
                                return s._node.currentTime
                            }
                            var c = n.playing(t);
                            c && n.pause(t, !0),
                            s._seek = e,
                            s._ended = !1,
                            n._clearTimer(t),
                            n._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e);
                            var d = function() {
                                c && n.play(t, !0),
                                n._emit("seek", t)
                            };
                            if (c && !n._webAudio) {
                                var f = function() {
                                    n._playLock ? setTimeout(f, 0) : d()
                                };
                                setTimeout(f, 0)
                            } else
                                d()
                        }
                        return n
                    },
                    playing: function(e) {
                        var t = this;
                        if ("number" === typeof e) {
                            var n = t._soundById(e);
                            return !!n && !n._paused
                        }
                        for (var r = 0; r < t._sounds.length; r++)
                            if (!t._sounds[r]._paused)
                                return !0;
                        return !1
                    },
                    duration: function(e) {
                        var t = this
                          , n = t._duration
                          , r = t._soundById(e);
                        return r && (n = t._sprite[r._sprite][1] / 1e3),
                        n
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
                            t[n]._paused || e.stop(t[n]._id),
                            e._webAudio || (e._clearSound(t[n]._node),
                            t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
                            t[n]._node.removeEventListener(i._canPlayEvent, t[n]._loadFn, !1),
                            t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
                            i._releaseHtml5Audio(t[n]._node)),
                            delete t[n]._node,
                            e._clearTimer(t[n]._id);
                        var r = i._howls.indexOf(e);
                        r >= 0 && i._howls.splice(r, 1);
                        var o = !0;
                        for (n = 0; n < i._howls.length; n++)
                            if (i._howls[n]._src === e._src || e._src.indexOf(i._howls[n]._src) >= 0) {
                                o = !1;
                                break
                            }
                        return u && o && delete u[e._src],
                        i.noAudio = !1,
                        e._state = "unloaded",
                        e._sounds = [],
                        e = null,
                        null
                    },
                    on: function(e, t, n, r) {
                        var o = this["_on" + e];
                        return "function" === typeof t && o.push(r ? {
                            id: n,
                            fn: t,
                            once: r
                        } : {
                            id: n,
                            fn: t
                        }),
                        this
                    },
                    off: function(e, t, n) {
                        var r = this
                          , o = r["_on" + e]
                          , i = 0;
                        if ("number" === typeof t && (n = t,
                        t = null),
                        t || n)
                            for (i = 0; i < o.length; i++) {
                                var a = n === o[i].id;
                                if (t === o[i].fn && a || !t && a) {
                                    o.splice(i, 1);
                                    break
                                }
                            }
                        else if (e)
                            r["_on" + e] = [];
                        else {
                            var s = Object.keys(r);
                            for (i = 0; i < s.length; i++)
                                0 === s[i].indexOf("_on") && Array.isArray(r[s[i]]) && (r[s[i]] = [])
                        }
                        return r
                    },
                    once: function(e, t, n) {
                        return this.on(e, t, n, 1),
                        this
                    },
                    _emit: function(e, t, n) {
                        for (var r = this, o = r["_on" + e], i = o.length - 1; i >= 0; i--)
                            o[i].id && o[i].id !== t && "load" !== e || (setTimeout(function(e) {
                                e.call(this, t, n)
                            }
                            .bind(r, o[i].fn), 0),
                            o[i].once && r.off(e, o[i].fn, o[i].id));
                        return r._loadQueue(e),
                        r
                    },
                    _loadQueue: function(e) {
                        var t = this;
                        if (t._queue.length > 0) {
                            var n = t._queue[0];
                            n.event === e && (t._queue.shift(),
                            t._loadQueue()),
                            e || n.action()
                        }
                        return t
                    },
                    _ended: function(e) {
                        var t = this
                          , n = e._sprite;
                        if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
                            return setTimeout(t._ended.bind(t, e), 100),
                            t;
                        var r = !(!e._loop && !t._sprite[n][2]);
                        if (t._emit("end", e._id),
                        !t._webAudio && r && t.stop(e._id, !0).play(e._id),
                        t._webAudio && r) {
                            t._emit("play", e._id),
                            e._seek = e._start || 0,
                            e._rateSeek = 0,
                            e._playStart = i.ctx.currentTime;
                            var o = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), o)
                        }
                        return t._webAudio && !r && (e._paused = !0,
                        e._ended = !0,
                        e._seek = e._start || 0,
                        e._rateSeek = 0,
                        t._clearTimer(e._id),
                        t._cleanBuffer(e._node),
                        i._autoSuspend()),
                        t._webAudio || r || t.stop(e._id, !0),
                        t
                    },
                    _clearTimer: function(e) {
                        var t = this;
                        if (t._endTimers[e]) {
                            if ("function" !== typeof t._endTimers[e])
                                clearTimeout(t._endTimers[e]);
                            else {
                                var n = t._soundById(e);
                                n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
                            }
                            delete t._endTimers[e]
                        }
                        return t
                    },
                    _soundById: function(e) {
                        for (var t = this, n = 0; n < t._sounds.length; n++)
                            if (e === t._sounds[n]._id)
                                return t._sounds[n];
                        return null
                    },
                    _inactiveSound: function() {
                        var e = this;
                        e._drain();
                        for (var t = 0; t < e._sounds.length; t++)
                            if (e._sounds[t]._ended)
                                return e._sounds[t].reset();
                        return new s(e)
                    },
                    _drain: function() {
                        var e = this
                          , t = e._pool
                          , n = 0
                          , r = 0;
                        if (!(e._sounds.length < t)) {
                            for (r = 0; r < e._sounds.length; r++)
                                e._sounds[r]._ended && n++;
                            for (r = e._sounds.length - 1; r >= 0; r--) {
                                if (n <= t)
                                    return;
                                e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0),
                                e._sounds.splice(r, 1),
                                n--)
                            }
                        }
                    },
                    _getSoundIds: function(e) {
                        if ("undefined" === typeof e) {
                            for (var t = [], n = 0; n < this._sounds.length; n++)
                                t.push(this._sounds[n]._id);
                            return t
                        }
                        return [e]
                    },
                    _refreshBuffer: function(e) {
                        return e._node.bufferSource = i.ctx.createBufferSource(),
                        e._node.bufferSource.buffer = u[this._src],
                        e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
                        e._node.bufferSource.loop = e._loop,
                        e._loop && (e._node.bufferSource.loopStart = e._start || 0,
                        e._node.bufferSource.loopEnd = e._stop || 0),
                        e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime),
                        this
                    },
                    _cleanBuffer: function(e) {
                        var t = i._navigator && i._navigator.vendor.indexOf("Apple") >= 0;
                        if (i._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null,
                        e.bufferSource.disconnect(0),
                        t))
                            try {
                                e.bufferSource.buffer = i._scratchBuffer
                            } catch (n) {}
                        return e.bufferSource = null,
                        this
                    },
                    _clearSound: function(e) {
                        /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                };
                var s = function(e) {
                    this._parent = e,
                    this.init()
                };
                s.prototype = {
                    init: function() {
                        var e = this
                          , t = e._parent;
                        return e._muted = t._muted,
                        e._loop = t._loop,
                        e._volume = t._volume,
                        e._rate = t._rate,
                        e._seek = 0,
                        e._paused = !0,
                        e._ended = !0,
                        e._sprite = "__default",
                        e._id = ++i._counter,
                        t._sounds.push(e),
                        e.create(),
                        e
                    },
                    create: function() {
                        var e = this
                          , t = e._parent
                          , n = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
                        return t._webAudio ? (e._node = "undefined" === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(),
                        e._node.gain.setValueAtTime(n, i.ctx.currentTime),
                        e._node.paused = !0,
                        e._node.connect(i.masterGain)) : i.noAudio || (e._node = i._obtainHtml5Audio(),
                        e._errorFn = e._errorListener.bind(e),
                        e._node.addEventListener("error", e._errorFn, !1),
                        e._loadFn = e._loadListener.bind(e),
                        e._node.addEventListener(i._canPlayEvent, e._loadFn, !1),
                        e._endFn = e._endListener.bind(e),
                        e._node.addEventListener("ended", e._endFn, !1),
                        e._node.src = t._src,
                        e._node.preload = !0 === t._preload ? "auto" : t._preload,
                        e._node.volume = n * i.volume(),
                        e._node.load()),
                        e
                    },
                    reset: function() {
                        var e = this
                          , t = e._parent;
                        return e._muted = t._muted,
                        e._loop = t._loop,
                        e._volume = t._volume,
                        e._rate = t._rate,
                        e._seek = 0,
                        e._rateSeek = 0,
                        e._paused = !0,
                        e._ended = !0,
                        e._sprite = "__default",
                        e._id = ++i._counter,
                        e
                    },
                    _errorListener: function() {
                        var e = this;
                        e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
                        e._node.removeEventListener("error", e._errorFn, !1)
                    },
                    _loadListener: function() {
                        var e = this
                          , t = e._parent;
                        t._duration = Math.ceil(10 * e._node.duration) / 10,
                        0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }),
                        "loaded" !== t._state && (t._state = "loaded",
                        t._emit("load"),
                        t._loadQueue()),
                        e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1)
                    },
                    _endListener: function() {
                        var e = this
                          , t = e._parent;
                        t._duration === 1 / 0 && (t._duration = Math.ceil(10 * e._node.duration) / 10,
                        t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = 1e3 * t._duration),
                        t._ended(e)),
                        e._node.removeEventListener("ended", e._endFn, !1)
                    }
                };
                var u = {}
                  , l = function(e) {
                    var t = e._src;
                    if (u[t])
                        return e._duration = u[t].duration,
                        void f(e);
                    if (/^data:[^;]+;base64,/.test(t)) {
                        for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), o = 0; o < n.length; ++o)
                            r[o] = n.charCodeAt(o);
                        d(r.buffer, e)
                    } else {
                        var i = new XMLHttpRequest;
                        i.open(e._xhr.method, t, !0),
                        i.withCredentials = e._xhr.withCredentials,
                        i.responseType = "arraybuffer",
                        e._xhr.headers && Object.keys(e._xhr.headers).forEach((function(t) {
                            i.setRequestHeader(t, e._xhr.headers[t])
                        }
                        )),
                        i.onload = function() {
                            var t = (i.status + "")[0];
                            "0" === t || "2" === t || "3" === t ? d(i.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".")
                        }
                        ,
                        i.onerror = function() {
                            e._webAudio && (e._html5 = !0,
                            e._webAudio = !1,
                            e._sounds = [],
                            delete u[t],
                            e.load())
                        }
                        ,
                        c(i)
                    }
                }
                  , c = function(e) {
                    try {
                        e.send()
                    } catch (t) {
                        e.onerror()
                    }
                }
                  , d = function(e, t) {
                    var n = function() {
                        t._emit("loaderror", null, "Decoding audio data failed.")
                    }
                      , r = function(e) {
                        e && t._sounds.length > 0 ? (u[t._src] = e,
                        f(t, e)) : n()
                    };
                    "undefined" !== typeof Promise && 1 === i.ctx.decodeAudioData.length ? i.ctx.decodeAudioData(e).then(r).catch(n) : i.ctx.decodeAudioData(e, r, n)
                }
                  , f = function(e, t) {
                    t && !e._duration && (e._duration = t.duration),
                    0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }),
                    "loaded" !== e._state && (e._state = "loaded",
                    e._emit("load"),
                    e._loadQueue())
                }
                  , p = function() {
                    if (i.usingWebAudio) {
                        try {
                            "undefined" !== typeof AudioContext ? i.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? i.ctx = new webkitAudioContext : i.usingWebAudio = !1
                        } catch (o) {
                            i.usingWebAudio = !1
                        }
                        i.ctx || (i.usingWebAudio = !1);
                        var e = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform)
                          , t = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
                          , n = t ? parseInt(t[1], 10) : null;
                        if (e && n && n < 9) {
                            var r = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                            i._navigator && !r && (i.usingWebAudio = !1)
                        }
                        i.usingWebAudio && (i.masterGain = "undefined" === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(),
                        i.masterGain.gain.setValueAtTime(i._muted ? 0 : i._volume, i.ctx.currentTime),
                        i.masterGain.connect(i.ctx.destination)),
                        i._setup()
                    }
                };
                void 0 === (r = function() {
                    return {
                        Howler: i,
                        Howl: a
                    }
                }
                .apply(t, [])) || (e.exports = r),
                t.Howler = i,
                t.Howl = a,
                "undefined" !== typeof n ? (n.HowlerGlobal = o,
                n.Howler = i,
                n.Howl = a,
                n.Sound = s) : "undefined" !== typeof window && (window.HowlerGlobal = o,
                window.Howler = i,
                window.Howl = a,
                window.Sound = s)
            }(),
            function() {
                "use strict";
                var e;
                HowlerGlobal.prototype._pos = [0, 0, 0],
                HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0],
                HowlerGlobal.prototype.stereo = function(e) {
                    var t = this;
                    if (!t.ctx || !t.ctx.listener)
                        return t;
                    for (var n = t._howls.length - 1; n >= 0; n--)
                        t._howls[n].stereo(e);
                    return t
                }
                ,
                HowlerGlobal.prototype.pos = function(e, t, n) {
                    var r = this;
                    return r.ctx && r.ctx.listener ? (t = "number" !== typeof t ? r._pos[1] : t,
                    n = "number" !== typeof n ? r._pos[2] : n,
                    "number" !== typeof e ? r._pos : (r._pos = [e, t, n],
                    "undefined" !== typeof r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1),
                    r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1),
                    r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]),
                    r)) : r
                }
                ,
                HowlerGlobal.prototype.orientation = function(e, t, n, r, o, i) {
                    var a = this;
                    if (!a.ctx || !a.ctx.listener)
                        return a;
                    var s = a._orientation;
                    return t = "number" !== typeof t ? s[1] : t,
                    n = "number" !== typeof n ? s[2] : n,
                    r = "number" !== typeof r ? s[3] : r,
                    o = "number" !== typeof o ? s[4] : o,
                    i = "number" !== typeof i ? s[5] : i,
                    "number" !== typeof e ? s : (a._orientation = [e, t, n, r, o, i],
                    "undefined" !== typeof a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1),
                    a.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1),
                    a.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1),
                    a.ctx.listener.upX.setTargetAtTime(r, Howler.ctx.currentTime, .1),
                    a.ctx.listener.upY.setTargetAtTime(o, Howler.ctx.currentTime, .1),
                    a.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, t, n, r, o, i),
                    a)
                }
                ,
                Howl.prototype.init = (e = Howl.prototype.init,
                function(t) {
                    var n = this;
                    return n._orientation = t.orientation || [1, 0, 0],
                    n._stereo = t.stereo || null,
                    n._pos = t.pos || null,
                    n._pannerAttr = {
                        coneInnerAngle: "undefined" !== typeof t.coneInnerAngle ? t.coneInnerAngle : 360,
                        coneOuterAngle: "undefined" !== typeof t.coneOuterAngle ? t.coneOuterAngle : 360,
                        coneOuterGain: "undefined" !== typeof t.coneOuterGain ? t.coneOuterGain : 0,
                        distanceModel: "undefined" !== typeof t.distanceModel ? t.distanceModel : "inverse",
                        maxDistance: "undefined" !== typeof t.maxDistance ? t.maxDistance : 1e4,
                        panningModel: "undefined" !== typeof t.panningModel ? t.panningModel : "HRTF",
                        refDistance: "undefined" !== typeof t.refDistance ? t.refDistance : 1,
                        rolloffFactor: "undefined" !== typeof t.rolloffFactor ? t.rolloffFactor : 1
                    },
                    n._onstereo = t.onstereo ? [{
                        fn: t.onstereo
                    }] : [],
                    n._onpos = t.onpos ? [{
                        fn: t.onpos
                    }] : [],
                    n._onorientation = t.onorientation ? [{
                        fn: t.onorientation
                    }] : [],
                    e.call(this, t)
                }
                ),
                Howl.prototype.stereo = function(e, n) {
                    var r = this;
                    if (!r._webAudio)
                        return r;
                    if ("loaded" !== r._state)
                        return r._queue.push({
                            event: "stereo",
                            action: function() {
                                r.stereo(e, n)
                            }
                        }),
                        r;
                    var o = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if ("undefined" === typeof n) {
                        if ("number" !== typeof e)
                            return r._stereo;
                        r._stereo = e,
                        r._pos = [e, 0, 0]
                    }
                    for (var i = r._getSoundIds(n), a = 0; a < i.length; a++) {
                        var s = r._soundById(i[a]);
                        if (s) {
                            if ("number" !== typeof e)
                                return s._stereo;
                            s._stereo = e,
                            s._pos = [e, 0, 0],
                            s._node && (s._pannerAttr.panningModel = "equalpower",
                            s._panner && s._panner.pan || t(s, o),
                            "spatial" === o ? "undefined" !== typeof s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                            s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                            s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(e, 0, 0) : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
                            r._emit("stereo", s._id)
                        }
                    }
                    return r
                }
                ,
                Howl.prototype.pos = function(e, n, r, o) {
                    var i = this;
                    if (!i._webAudio)
                        return i;
                    if ("loaded" !== i._state)
                        return i._queue.push({
                            event: "pos",
                            action: function() {
                                i.pos(e, n, r, o)
                            }
                        }),
                        i;
                    if (n = "number" !== typeof n ? 0 : n,
                    r = "number" !== typeof r ? -.5 : r,
                    "undefined" === typeof o) {
                        if ("number" !== typeof e)
                            return i._pos;
                        i._pos = [e, n, r]
                    }
                    for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
                        var u = i._soundById(a[s]);
                        if (u) {
                            if ("number" !== typeof e)
                                return u._pos;
                            u._pos = [e, n, r],
                            u._node && (u._panner && !u._panner.pan || t(u, "spatial"),
                            "undefined" !== typeof u._panner.positionX ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                            u._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime),
                            u._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : u._panner.setPosition(e, n, r)),
                            i._emit("pos", u._id)
                        }
                    }
                    return i
                }
                ,
                Howl.prototype.orientation = function(e, n, r, o) {
                    var i = this;
                    if (!i._webAudio)
                        return i;
                    if ("loaded" !== i._state)
                        return i._queue.push({
                            event: "orientation",
                            action: function() {
                                i.orientation(e, n, r, o)
                            }
                        }),
                        i;
                    if (n = "number" !== typeof n ? i._orientation[1] : n,
                    r = "number" !== typeof r ? i._orientation[2] : r,
                    "undefined" === typeof o) {
                        if ("number" !== typeof e)
                            return i._orientation;
                        i._orientation = [e, n, r]
                    }
                    for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
                        var u = i._soundById(a[s]);
                        if (u) {
                            if ("number" !== typeof e)
                                return u._orientation;
                            u._orientation = [e, n, r],
                            u._node && (u._panner || (u._pos || (u._pos = i._pos || [0, 0, -.5]),
                            t(u, "spatial")),
                            "undefined" !== typeof u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
                            u._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime),
                            u._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : u._panner.setOrientation(e, n, r)),
                            i._emit("orientation", u._id)
                        }
                    }
                    return i
                }
                ,
                Howl.prototype.pannerAttr = function() {
                    var e, n, r, o = this, i = arguments;
                    if (!o._webAudio)
                        return o;
                    if (0 === i.length)
                        return o._pannerAttr;
                    if (1 === i.length) {
                        if ("object" !== typeof i[0])
                            return (r = o._soundById(parseInt(i[0], 10))) ? r._pannerAttr : o._pannerAttr;
                        e = i[0],
                        "undefined" === typeof n && (e.pannerAttr || (e.pannerAttr = {
                            coneInnerAngle: e.coneInnerAngle,
                            coneOuterAngle: e.coneOuterAngle,
                            coneOuterGain: e.coneOuterGain,
                            distanceModel: e.distanceModel,
                            maxDistance: e.maxDistance,
                            refDistance: e.refDistance,
                            rolloffFactor: e.rolloffFactor,
                            panningModel: e.panningModel
                        }),
                        o._pannerAttr = {
                            coneInnerAngle: "undefined" !== typeof e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                            coneOuterAngle: "undefined" !== typeof e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                            coneOuterGain: "undefined" !== typeof e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : o._coneOuterGain,
                            distanceModel: "undefined" !== typeof e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : o._distanceModel,
                            maxDistance: "undefined" !== typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : o._maxDistance,
                            refDistance: "undefined" !== typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : o._refDistance,
                            rolloffFactor: "undefined" !== typeof e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : o._rolloffFactor,
                            panningModel: "undefined" !== typeof e.pannerAttr.panningModel ? e.pannerAttr.panningModel : o._panningModel
                        })
                    } else
                        2 === i.length && (e = i[0],
                        n = parseInt(i[1], 10));
                    for (var a = o._getSoundIds(n), s = 0; s < a.length; s++)
                        if (r = o._soundById(a[s])) {
                            var u = r._pannerAttr;
                            u = {
                                coneInnerAngle: "undefined" !== typeof e.coneInnerAngle ? e.coneInnerAngle : u.coneInnerAngle,
                                coneOuterAngle: "undefined" !== typeof e.coneOuterAngle ? e.coneOuterAngle : u.coneOuterAngle,
                                coneOuterGain: "undefined" !== typeof e.coneOuterGain ? e.coneOuterGain : u.coneOuterGain,
                                distanceModel: "undefined" !== typeof e.distanceModel ? e.distanceModel : u.distanceModel,
                                maxDistance: "undefined" !== typeof e.maxDistance ? e.maxDistance : u.maxDistance,
                                refDistance: "undefined" !== typeof e.refDistance ? e.refDistance : u.refDistance,
                                rolloffFactor: "undefined" !== typeof e.rolloffFactor ? e.rolloffFactor : u.rolloffFactor,
                                panningModel: "undefined" !== typeof e.panningModel ? e.panningModel : u.panningModel
                            };
                            var l = r._panner;
                            l ? (l.coneInnerAngle = u.coneInnerAngle,
                            l.coneOuterAngle = u.coneOuterAngle,
                            l.coneOuterGain = u.coneOuterGain,
                            l.distanceModel = u.distanceModel,
                            l.maxDistance = u.maxDistance,
                            l.refDistance = u.refDistance,
                            l.rolloffFactor = u.rolloffFactor,
                            l.panningModel = u.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]),
                            t(r, "spatial"))
                        }
                    return o
                }
                ,
                Sound.prototype.init = function(e) {
                    return function() {
                        var t = this
                          , n = t._parent;
                        t._orientation = n._orientation,
                        t._stereo = n._stereo,
                        t._pos = n._pos,
                        t._pannerAttr = n._pannerAttr,
                        e.call(this),
                        t._stereo ? n.stereo(t._stereo) : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
                    }
                }(Sound.prototype.init),
                Sound.prototype.reset = function(e) {
                    return function() {
                        var t = this
                          , n = t._parent;
                        return t._orientation = n._orientation,
                        t._stereo = n._stereo,
                        t._pos = n._pos,
                        t._pannerAttr = n._pannerAttr,
                        t._stereo ? n.stereo(t._stereo) : t._pos ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0),
                        t._panner = void 0,
                        n._refreshBuffer(t)),
                        e.call(this)
                    }
                }(Sound.prototype.reset);
                var t = function(e, t) {
                    "spatial" === (t = t || "spatial") ? (e._panner = Howler.ctx.createPanner(),
                    e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle,
                    e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle,
                    e._panner.coneOuterGain = e._pannerAttr.coneOuterGain,
                    e._panner.distanceModel = e._pannerAttr.distanceModel,
                    e._panner.maxDistance = e._pannerAttr.maxDistance,
                    e._panner.refDistance = e._pannerAttr.refDistance,
                    e._panner.rolloffFactor = e._pannerAttr.rolloffFactor,
                    e._panner.panningModel = e._pannerAttr.panningModel,
                    "undefined" !== typeof e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
                    e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
                    e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                    "undefined" !== typeof e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
                    e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
                    e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(),
                    e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
                    e._panner.connect(e._node),
                    e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
                }
            }()
        }
        ).call(this, n(9))
    },
    9: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (r) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }
}]);
