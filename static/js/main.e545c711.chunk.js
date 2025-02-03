/*! For license information please see main.e545c711.chunk.js.LICENSE.txt */
(this["webpackJsonp@gorch/my00stv"] = this["webpackJsonp@gorch/my00stv"] || []).push([[0], [function(e, t, n) {
    "use strict";
    var o = n(4)
      , a = n.n(o);
    window.$ = a.a,
    window.jQuery = a.a,
    window.jQuery((function(e, t) {
        e.extend(!0, e, {
            support: {
                rgba: function() {
                    const t = e("script:first")
                      , n = t.css("color");
                    let o = !1;
                    if (/^rgba/.test(n))
                        o = !0;
                    else
                        try {
                            o = n !== t.css("color", "rgba(0, 0, 0, 0.5)").css("color"),
                            t.css("color", n)
                        } catch (a) {}
                    return t.removeAttr("style"),
                    o
                }()
            }
        });
        const n = e("html").prop("style");
        let o;
        function a(t) {
            const n = [];
            let o = 0;
            const a = t.length;
            function i() {
                const e = /^inset\b/.exec(t.substring(o));
                return null !== e && e.length > 0 && (d.inset = !0,
                o += e[0].length,
                !0)
            }
            function l() {
                const e = /^(-?[0-9\.]+)(?:px)?\s+(-?[0-9\.]+)(?:px)?(?:\s+(-?[0-9\.]+)(?:px)?)?(?:\s+(-?[0-9\.]+)(?:px)?)?/.exec(t.substring(o));
                return null !== e && e.length > 0 && (d.left = parseInt(e[1], 10),
                d.top = parseInt(e[2], 10),
                d.blur = e[3] ? parseInt(e[3], 10) : 0,
                d.spread = e[4] ? parseInt(e[4], 10) : 0,
                o += e[0].length,
                !0)
            }
            function s() {
                let e = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(t.substring(o));
                return null !== e && e.length > 0 ? (d.color = [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), 1],
                o += e[0].length,
                !0) : (e = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(t.substring(o)),
                null !== e && e.length > 0 ? (d.color = [17 * parseInt(e[1], 16), 17 * parseInt(e[2], 16), 17 * parseInt(e[3], 16), 1],
                o += e[0].length,
                !0) : (e = /^rgb\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(t.substring(o)),
                null !== e && e.length > 0 ? (d.color = [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), 1],
                o += e[0].length,
                !0) : (e = /^rgba\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(t.substring(o)),
                null !== e && e.length > 0 && (d.color = [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3], 10), parseFloat(e[4])],
                o += e[0].length,
                !0))))
            }
            function c() {
                const e = /^\s+/.exec(t.substring(o));
                return null !== e && e.length > 0 && (o += e[0].length,
                !0)
            }
            function r() {
                const e = /^\s*,\s*/.exec(t.substring(o));
                return null !== e && e.length > 0 && (o += e[0].length,
                !0)
            }
            function u(t) {
                if (e.isPlainObject(t)) {
                    let n, o, a = 0, i = [];
                    for (e.isArray(t.color) && (o = t.color,
                    a = o.length),
                    n = 0; n < 4; n++)
                        n < a ? i.push(o[n]) : 3 === n ? i.push(1) : i.push(0)
                }
                return e.extend({
                    left: 0,
                    top: 0,
                    blur: 0,
                    spread: 0
                }, t)
            }
            let d = u();
            for (; o < a; )
                if (i())
                    c();
                else if (l())
                    c();
                else if (s())
                    c();
                else {
                    if (!r())
                        break;
                    n.push(u(d)),
                    d = {}
                }
            return n.push(u(d)),
            n
        }
        e.each(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"], (function(e, t) {
            if ("undefined" !== typeof n[t])
                return o = t,
                !1
        }
        )),
        o && (e.Tween.propHooks.boxShadow = {
            get: function(t) {
                return e(t.elem).css(o)
            },
            set: function(t) {
                const n = t.elem.style
                  , i = a(e(t.elem)[0].style[o] || e(t.elem).css(o))
                  , l = a(t.end)
                  , s = Math.max(i.length, l.length);
                let c;
                for (c = 0; c < s; c++)
                    l[c] = e.extend({}, i[c], l[c]),
                    i[c] ? "color"in i[c] && !1 !== e.isArray(i[c].color) || (i[c].color = l[c].color || [0, 0, 0, 0]) : i[c] = a("0 0 0 0 rgba(0,0,0,0)")[0];
                t.run = function(t) {
                    const a = function(t, n, o) {
                        const a = [];
                        return e.each(t, (function(i) {
                            const l = []
                              , s = t[i]
                              , c = n[i];
                            if (s.inset && l.push("inset"),
                            "undefined" !== typeof c.left && l.push(parseFloat(s.left + o * (c.left - s.left)) + "px " + parseFloat(s.top + o * (c.top - s.top)) + "px"),
                            "undefined" !== typeof c.blur && l.push(parseFloat(s.blur + o * (c.blur - s.blur)) + "px"),
                            "undefined" !== typeof c.spread && l.push(parseFloat(s.spread + o * (c.spread - s.spread)) + "px"),
                            "undefined" !== typeof c.color) {
                                let t = "rgb" + (e.support.rgba ? "a" : "") + "(" + parseInt(s.color[0] + o * (c.color[0] - s.color[0]), 10) + "," + parseInt(s.color[1] + o * (c.color[1] - s.color[1]), 10) + "," + parseInt(s.color[2] + o * (c.color[2] - s.color[2]), 10);
                                e.support.rgba && (t += "," + parseFloat(s.color[3] + o * (c.color[3] - s.color[3]))),
                                t += ")",
                                l.push(t)
                            }
                            a.push(l.join(" "))
                        }
                        )),
                        a.join(", ")
                    }(i, l, t);
                    n[o] = a
                }
            }
        })
    }
    )),
    t.a = a.a
}
, function(e, t, n) {
    "use strict";
    n.d(t, "g", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "e", (function() {
        return i
    }
    )),
    n.d(t, "j", (function() {
        return l
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "h", (function() {
        return r
    }
    )),
    n.d(t, "d", (function() {
        return u
    }
    )),
    n.d(t, "i", (function() {
        return d
    }
    )),
    n.d(t, "f", (function() {
        return h
    }
    )),
    n.d(t, "k", (function() {
        return b
    }
    ));
    const {n6: o} = n(7);
    function a() {}
    function i(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    }
    function l(e) {
        for (let t, n, o = e.length; o; t = Math.floor(Math.random() * o),
        n = e[--o],
        e[o] = e[t],
        e[t] = n)
            ;
        return e
    }
    function s(e, t, n) {
        return e < t ? t : e > n ? n : e
    }
    function c(e) {
        const t = Math.ceil(e.length / 12)
          , n = new Array(t);
        let o, a;
        for (a = 0; a < t; a++)
            o = 12 * a,
            n[a] = e.substring(o, o + 12);
        return n
    }
    function r(e, t, n) {
        return n = n || " ",
        (e += "").length >= t ? e : new Array(t - e.length + 1).join(n) + e
    }
    function u(e, t) {
        e.css("opacity", t ? 1 : 0)
    }
    function d(e, t) {
        null === e || void 0 === e || e.css("visibility", t ? "visible" : "hidden")
    }
    function h(e, t) {
        e.css("color", t ? "#00ff00" : "#000000")
    }
    function b() {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeqsJAa9wRFhJfKI40aUYuvUipYIuen9rfE5IdgmSFHhV77fA/viewform", "_newtab")
    }
}
, function(e, t, n) {
    "use strict";
    let o = 0;
    const a = {
        c: {
            bit: o++,
            w4: "Cartoons",
            label: "CARTOON",
            u1: "Cartoon",
            p9: 0
        },
        s: {
            bit: o++,
            w4: "Comedy",
            label: "COMEDY",
            u1: "Comedy",
            p9: 0
        },
        a: {
            bit: o++,
            w4: "Commercials",
            label: "AD",
            u1: "Commercial",
            p9: 0
        },
        d: {
            bit: o++,
            w4: "Drama",
            label: "DRAMA",
            u1: "Drama",
            p9: 0
        },
        g: {
            bit: o++,
            w4: "Gameshows",
            label: "GAMESHOW",
            u1: "Game Show",
            p9: 0
        },
        k: {
            bit: o++,
            w4: "Kids",
            label: "KIDS",
            u1: "Kid Show",
            p9: 0
        },
        e: {
            bit: o++,
            w4: "Movies",
            label: "MOVIE",
            u1: "Movie",
            p9: 0
        },
        m: {
            bit: o++,
            w4: "Music",
            label: "MUSIC",
            u1: "Music",
            p9: 0
        },
        n: {
            bit: o++,
            w4: "News",
            label: "NEWS",
            u1: "News",
            p9: 0
        },
        o: {
            bit: o++,
            w4: "Other",
            label: "",
            u1: "",
            p9: 0
        },
        z: {
            bit: o++,
            w4: "Soaps",
            label: "SOAP",
            u1: "Soap",
            p9: 0
        },
        p: {
            bit: o++,
            w4: "Specials",
            label: "SPECIAL",
            u1: "Special",
            p9: 0
        },
        r: {
            bit: o++,
            w4: "Sports",
            label: "SPORTS",
            u1: "Sports",
            p9: 0
        },
        t: {
            bit: o++,
            w4: "Talkshows",
            label: "TALKSHOW",
            u1: "Talk Show",
            p9: 0
        },
        f: {
            bit: o++,
            w4: "Trailers",
            label: "TRAILER",
            u1: "Trailer",
            p9: 0
        },
        h: {
            bit: o++,
            w4: "",
            label: "",
            u1: "",
            p9: 0
        }
    };
    t.a = a
}
, function(e, t, n) {
    "use strict";
    function o(e) {
        return {
            t5: e
        }
    }
    t.a = class {
        constructor(e, t, n) {
            this.k7 = void 0,
            this.i4 = void 0,
            this.p4 = void 0,
            this.f3 = void 0,
            this.y = void 0,
            this.idx = void 0,
            this.k7 = t,
            this.y = n,
            this.p4 = o(e)
        }
        e2() {
            return this.i4 || 0
        }
        e3() {
            const e = this;
            e.i4 = 0,
            e.f3 && (e.p4 = e.f3[0])
        }
        q0(e) {
            const t = this;
            t.f3 || (t.f3 = [t.p4]),
            t.f3.push(o(e))
        }
        j1() {
            var e, t;
            return null !== (e = null === (t = this.f3) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 1
        }
        a1() {
            const e = this;
            if (e.f3) {
                const t = e.f3.length;
                t > 1 && (e.i4 = (e.e2() + 1) % t,
                e.p4 = e.f3[e.i4])
            }
            return e.p4
        }
        p3() {
            return 0 === this.e2()
        }
        l5() {
            return !this.f3 || this.e2() === this.f3.length - 1
        }
        q6() {
            const e = this
              , t = e.l5();
            if (e.p4.m5 = 1,
            e.f3)
                for (let n = e.f3.length - 1; n >= 0; --n)
                    if (n !== e.e2() && !e.f3[n].m5)
                        return e.a1(),
                        !t
        }
    }
}
, , function(e, t, n) {
    n(14)
}
, function(e, t, n) {}
, function(e, t) {
    e.exports = {
        n6: function(e) {
            const t = e.length
              , n = e => e.reduce(( (e, t) => e + +t.charCodeAt(0)), 0) % t;
            return {
                ez: t => {
                    const o = []
                      , a = t.split("")
                      , i = e[n(a)];
                    return a.forEach(( (e, t) => {
                        o[i[t]] = e
                    }
                    )),
                    o.join("")
                }
                ,
                dz: t => {
                    const o = t.split("");
                    return e[n(o)].map((e => o[e])).join("")
                }
            }
        }
    }
}
, , , function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "default", (function() {
        return i
    }
    ));
    var o = n(3)
      , a = n(1);
    function i(e, t, n) {
        e.h6 = n.list;
        const i = new o.a("000000","0",0);
        i.idx = 0;
        const l = [];
        let s = 0
          , c = []
          , r = 0
          , u = 0;
        for (let o = 0; o < 10; ++o)
            l.push({
                digit: o,
                name: e.r2 + o,
                valid: 1,
                p1: 0
            });
        return setTimeout(( () => {
            t()
        }
        ), 1),
        {
            r0: a.a,
            x4: a.a,
            j4: function(t) {
                if (!s && t) {
                    const {gtag: n} = window;
                    n("event", "h6", {
                        event_category: "custom",
                        event_label: "playlist",
                        value: e.h6
                    }),
                    n("event", "listIdYT", {
                        event_category: "custom",
                        event_label: e.h6
                    }),
                    s = t.length,
                    e.k4 = s,
                    c = t.map(( (e, t) => {
                        const n = new o.a(e);
                        return n.idx = t,
                        n
                    }
                    )),
                    u = s.toString().length,
                    Object(a.j)(c)
                }
            },
            d9: function(e) {
                s && (r = (r + e + s) % s)
            },
            k2: function() {
                return s && e.s6 >= 1980 ? `CH ${Object(a.h)(r + 1, u, "0")}` : ""
            },
            u6: () => c[r] || i,
            d2: () => {
                var e;
                return (null === (e = c[r]) || void 0 === e ? void 0 : e.idx) || 0
            }
            ,
            k5: () => 0,
            t2: () => l,
            l6: a.a,
            m9: function(e) {
                if (s) {
                    const t = c[r].idx;
                    e ? c = Object(a.j)(c) : c.sort(( (e, t) => e.idx < t.idx ? -1 : e.idx > t.idx ? 1 : 0)),
                    r = c.findIndex((e => e.idx === t))
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "default", (function() {
        return c
    }
    ));
    var o = n(0)
      , a = n(3)
      , i = n(1)
      , l = n(2);
    const s = 10;
    function c(e, t, n) {
        const {ez: c} = e
          , r = [];
        let u = []
          , d = []
          , h = 0
          , b = -1
          , p = 0
          , g = 0
          , f = [];
        for (let o = 0; o < s; ++o)
            r.push({
                digit: o,
                name: e.r2 + o,
                valid: 1,
                p1: 0
            });
        function m(e, t) {
            const n = e >= 0 ? 1 : -1;
            let o = g;
            for (h = (h + e + g) % g; 0 === (t & 1 << l.a[u[d[h]].k7].bit) && (h = (h + n + g) % g,
            !(--o < -1)); )
                ;
            const a = u[d[h]];
            r[a.y].p1 = h;
            for (let i = 0; i < s; ++i)
                if (i === a.y)
                    return b = i,
                    !0;
            return !1
        }
        return setTimeout(( () => {
            o.a.getJSON("./d.json", (function(n) {
                f = n.x,
                e.lu = new Date(n.d).toLocaleDateString(),
                t()
            }
            ))
        }
        ), 1),
        {
            r0: function(e) {
                for (let t = 0; t < s; ++t)
                    r[t].valid = 0;
                for (let t = 0; t < g; ++t) {
                    const n = u[d[t]].k7;
                    0 !== (e & 1 << l.a[n].bit) && (r[u[d[t]].y].valid = 1)
                }
            },
            x4: function(e) {
                let t, o, y, C, v, O, S, w;
                for (u = [],
                o = 0; o < s; ++o) {
                    if (n.y && n.y !== "" + o)
                        continue;
                    const e = {};
                    for (w = Object(i.b)(f[o]),
                    f[o] = null,
                    C = w.length,
                    w = Object(i.j)(w),
                    y = 0; y < C; ++y) {
                        const t = w[y]
                          , n = t.substr(0, 11);
                        v = t.slice(-1);
                        const i = v === v.toLowerCase();
                        if (v = v.toLowerCase(),
                        i) {
                            if (e[v]) {
                                u[e[v]].q0(n),
                                l.a[v].p9++,
                                5 === u[e[v]].j1() && delete e[v];
                                continue
                            }
                            e[v] = g
                        }
                        const s = new a.a(n,v,o);
                        u.push(s),
                        l.a[v].p9++,
                        ++g
                    }
                }
                for (f = null,
                p = g.toString().length,
                d = Array.from({
                    length: g
                }, ( (e, t) => t)),
                S = 0; S < s; ++S)
                    for (o = 0; o < g; ++o)
                        if (u[d[o]].y === S) {
                            r[S].p1 = o;
                            break
                        }
                if (e)
                    for (t = c(e),
                    o = 0; o < g; ++o) {
                        const e = u[d[o]]
                          , n = e.f3;
                        if (n) {
                            for (y = n.length - 1; y >= 0; --y)
                                if (n[y].t5 === t)
                                    return O = n[y].t5,
                                    n[y].t5 = n[0].t5,
                                    n[0].t5 = O,
                                    h = o,
                                    void (r[e.y].p1 = o)
                        } else if (e.p4.t5 === t)
                            return h = o,
                            r[e.y].p1 = o,
                            g
                    }
                else
                    b = Object(i.e)(0, s),
                    h = r[b].p1,
                    m(1, 1 << l.a.m.bit);
                return g
            },
            d9: m,
            k2: function() {
                const t = u[d[h]].k7
                  , n = Object(i.h)(h + 1, p);
                let o = l.a[t].label;
                return e.s6 <= 1970 ? `CH ${n} ${o}:` : ("" !== o && (o += " -"),
                `${o} CH ${n}`)
            },
            u6: () => u[d[h]],
            d2: () => h,
            k5: () => b,
            t2: () => r,
            l6: function(e, t) {
                if (r[e].valid && e !== b) {
                    const n = r[e];
                    for (let o = 0; o < g; ++o) {
                        const a = (n.p1 + o) % g
                          , i = u[d[a]];
                        if (0 !== (t & 1 << l.a[i.k7].bit))
                            return b = e,
                            h = a,
                            !0
                    }
                }
            },
            m9: function(e) {
                const t = d[h];
                let n;
                if (e)
                    d = Object(i.j)(d);
                else
                    for (n = 0; n < g; ++n)
                        d[n] = n;
                for (n = 0; n < g; ++n)
                    t === d[n] && (h = n)
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "default", (function() {
        return u
    }
    ));
    var o = n(0)
      , a = n(1);
    const i = e => e.val / 100 * 180
      , l = [{
        id: "knob-col",
        val: 50,
        tip: "COLOR"
    }, {
        id: "knob-bri",
        val: 50,
        tip: "BRIGHTNESS"
    }, {
        id: "knob-con",
        val: 50,
        tip: "CONTRAST"
    }, {
        id: "knob-sha",
        val: 100,
        tip: "SHARPNESS"
    }, {
        id: "knob-tin",
        val: 0,
        tip: "TINT"
    }, {
        id: "knob-vol",
        val: 100,
        tip: "VOLUME"
    }];
    function s() {
        let e = "";
        return e += `saturate(${2 * l[0].val}%) `,
        e += `brightness(${2 * l[1].val}%) `,
        e += `contrast(${2 * l[2].val}%) `,
        e += `blur(${Math.floor(10 * (1 - l[3].val / 100))}px) `,
        e += `hue-rotate(${Math.floor(l[4].val / 100 * 360)}deg) `,
        e
    }
    function c(e, t, n) {
        let o = i(t);
        void 0 !== n && (t.val = Object(a.c)(t.val + n, 0, 100),
        o = i(t),
        (o > 180 || o < 0) && (t.val = 0,
        o = 0)),
        e.css("transform", `rotate(${o + -89}deg)`)
    }
    let r;
    function u(e, t, n) {
        r = n;
        for (const a of l) {
            const n = Object(o.a)(`#${a.id}`)
              , i = n.children("img:first");
            i.css("transition", "none"),
            c(i, a),
            i.css("transition", "all 0.75s ease"),
            t(n, .45, `Reduce ${a.tip}`, `Increase ${a.tip}`, (t => {
                c(i, a, 10 * t),
                "knob-vol" === a.id ? e.s7(t, !0) : e.k0(s()),
                r(`${a.tip} is now ${a.val}%`)
            }
            ))
        }
        return Object(o.a)("#myytplayer").css("transition", "filter 0.75s ease"),
        {
            setVolume: e => {
                const t = l[5];
                c(Object(o.a)("#knob-vol").children("img:first"), t, e - t.val)
            }
        }
    }
}
, function(e) {
    e.exports = JSON.parse("[[8,0,3,4,5,7,10,6,2,1,9],[3,4,2,6,1,8,0,7,5,9,10],[5,4,1,0,9,2,3,6,10,7,8],[6,5,3,2,1,8,4,7,0,9,10],[10,1,8,6,5,2,7,4,0,3,9],[6,2,5,4,7,10,9,0,1,8,3],[2,3,0,8,10,6,5,9,1,4,7],[5,8,2,1,7,10,3,9,0,6,4],[4,6,10,3,1,0,2,8,9,7,5],[7,8,3,4,10,1,9,5,2,6,0],[5,1,9,4,10,7,3,6,2,8,0],[3,5,4,8,10,0,1,2,7,9,6],[8,5,3,0,7,9,4,1,2,6,10],[6,4,0,8,2,3,5,1,10,9,7],[5,6,4,1,7,8,9,10,2,3,0],[0,9,1,10,4,5,3,7,2,6,8],[5,6,1,8,4,2,3,0,9,10,7],[7,9,4,0,1,8,6,5,2,3,10],[2,1,4,3,0,9,6,7,10,5,8],[8,5,6,2,10,9,7,4,3,0,1],[4,2,6,1,7,5,3,0,10,9,8],[7,5,0,10,9,1,2,6,8,3,4],[0,7,6,8,9,1,3,10,2,4,5],[0,6,9,4,10,1,3,2,8,7,5],[1,9,6,7,3,10,5,2,8,0,4],[7,1,0,9,2,6,5,4,10,8,3],[4,0,7,2,3,10,1,9,5,8,6],[10,4,8,2,3,6,9,5,7,0,1],[4,10,7,8,3,6,2,0,5,9,1],[8,2,6,10,9,4,3,0,1,5,7],[7,0,10,2,3,6,1,8,9,5,4],[3,5,10,7,8,0,2,9,6,1,4]]")
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(6);
    const o = {}
      , a = window.location;
    if (a.search) {
        const e = a.search.substring(1).split("&");
        for (let t = 0; t < e.length; t++) {
            const n = e[t].split("=");
            n[0] && (o[n[0]] = n[1] || !0)
        }
    }
    var i = o
      , l = n(0)
      , s = n(1);
    var c = n(2);
    const {Howl: r} = n(8);
    let u, d, h = 0;
    const b = () => u
      , p = /v=([a-zA-Z0-9_-]{11})/
      , g = Object(l.a)("#btn_menu")
      , f = Object(l.a)("#btn_next")
      , m = Object(l.a)("#btn_power")
      , y = Object(l.a)("#btn_prev")
      , C = Object(l.a)("#btn_voldn")
      , v = Object(l.a)("#btn_volup")
      , O = Object(l.a)(".chanspan")
      , S = Object(l.a)("#glass")
      , w = Object(l.a)("#hand")
      , T = Object(l.a)("#iconreport")
      , _ = Object(l.a)("#iconsuggest")
      , j = Object(l.a)("#iconbsky")
      , k = Object(l.a)("#lcdbar")
      , A = Object(l.a)("#remotestatus")
      , x = Object(l.a)(".status")
      , E = Object(l.a)("#tvdial")
      , I = Object(l.a)("#tvdial2")
      , R = E.children("img:first")
      , M = I.children("img:first")
      , D = Object(l.a)("#tvfilters")
      , F = Object(l.a)("#tvknob")
      , P = Object(l.a)("#tvknob2")
      , Y = Object(l.a)("#tvknob3")
      , L = Object(l.a)("#tvknobmini")
      , V = Object(l.a)("#tvknobstar")
      , N = Object(l.a)("#tvled")
      , $ = Object(l.a)("#tvled2")
      , G = Object(l.a)("#tvled3")
      , H = Object(l.a)("#tvledmini")
      , B = Object(l.a)("#tvpanel_chdn")
      , z = Object(l.a)("#tvpanel_chup")
      , W = Object(l.a)("#tvpanel_menu")
      , U = Object(l.a)("#tvpanel_voldn")
      , X = Object(l.a)("#tvpanel_volup")
      , q = Object(l.a)(".tvremote")
      , K = Object(l.a)("#tvstatic")
      , J = Object(l.a)("#tvtopknob")
      , Z = Object(l.a)(".wrapper")
      , Q = Object(l.a)("#yearbar");
    var ee;
    const {ez: te, dz: ne} = Object(s.g)(n(13))
      , oe = null !== (ee = i.noiseMode) && void 0 !== ee ? ee : 0;
    !function(e) {
        const {ez: t, dz: o} = e;
        let a, ee, te, ne, oe, ae, ie = 0, le = 1, se = 0, ce = 0, re = 0, ue = 0, de = 0, he = 0;
        const be = () => oe
          , pe = () => te;
        setTimeout((function() {
            const t = Object(l.a)(document)
              , n = Math.min(t.innerWidth() / e.y7, t.innerHeight() / e.y6);
            ae = `scale(${n})`,
            Z.css("transform", ae)
        }
        ), 1);
        const ge = function(e) {
            const {setLoader: t, incProg: n, NUM_STEPS: o, STEP: a} = window;
            let i = 0;
            return function() {
                clearTimeout(window.loaderTid),
                window.loaderCurr = ++i * a,
                i === o ? (window.loaderCurr = 100,
                t(),
                setTimeout(( () => {
                    Object(l.a)("#loader").remove(),
                    e()
                }
                ), 100)) : (window.loaderNext = (i + 1) * a,
                window.loaderTid = setTimeout(n, 200))
            }
        }(( () => {
            we.h3()
        }
        ))
          , fe = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document ? 0 : 1e3
          , me = Object(l.a)("#myytplayer")
          , ye = {
            left: me.position().left - fe,
            top: me.position().top,
            width: me.width() + 2 * fe,
            height: me.height()
        }
          , Ce = {
            left: K.position().left,
            top: K.position().top,
            width: K.width(),
            height: K.height()
        }
          , ve = {
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
        }
          , Oe = (i.list ? n(10).default : n(11).default)(e, ge, i);
        Object(l.a)("#iconbsky").on("click", ( () => {
            const t = `https://${e.a5}/`
              , n = encodeURIComponent(t)
              , o = `https://bsky.app/intent/compose?text=${encodeURIComponent(`Channel-surf the nostalgic ${e.s6}'s with me at #MyRetroTVs \ud83d\udcfa `)}%20 ${n}`
              , a = window.screen.width
              , i = window.screen.height
              , l = Math.min(1600, .9 * a)
              , s = Math.min(900, .9 * i)
              , c = (a - l) / 2
              , r = (i - s) / 2;
            window.open(o, "", `width=${l},height=${s},menubar=no,toolbar=no,resizable=yes,scrollbars=yes,left=${c},top=${r}`)
        }
        )),
        a = document.URL.split("#")[1] || i.v;
        const Se = (e, t, n, o) => {
            e.on("mouseenter", ( () => {
                A.text(t),
                null === n || void 0 === n || n()
            }
            )).on("mouseleave", ( () => {
                A.text(""),
                null === o || void 0 === o || o()
            }
            ))
        }
          , we = new class {
            constructor() {
                this.u9 = void 0,
                this.on = void 0,
                this.e5 = void 0,
                this.z4 = void 0,
                this.u9 = "",
                this.on = !1,
                this.e5 = !1,
                this.z4 = !1
            }
            h3() {
                const t = this;
                t.e5 = !1;
                const n = Oe.x4(a);
                n && A.html(`<div style="font-family:'cpufont'; "><small>Last updated ${e.lu}<br/>( ${n} channels )</small></div>`),
                ke.h3(),
                e.s6 < 1990 && t.h2(36 * Oe.k5(), !0),
                t.v8(),
                t.v6(),
                ne.o7(),
                te = function(e, t, n) {
                    let {e0: o, d1: a} = e;
                    const i = Object(l.a)("#tubeglow");
                    let c, r, u, d, h, b = !1;
                    function p() {
                        return c = Object(s.e)(o, a) + 15,
                        `0 0 ${c}px ${c}px rgba(255,255,255,0.4)`
                    }
                    function g() {
                        return c = Object(s.e)(o, a),
                        r = Object(s.e)(0, 3) / 10,
                        u = Object(s.e)(100, 255),
                        d = Object(s.e)(100, 255),
                        h = Object(s.e)(100, 255),
                        `0 0 ${c}px ${c}px rgba(${u},${d},${h},${r})`
                    }
                    function f() {
                        return b ? 400 : Object(s.e)(300, 400)
                    }
                    function m() {
                        Object(l.a)(this).animate({
                            boxShadow: b ? p() : g()
                        }, f(), y)
                    }
                    function y() {
                        Object(l.a)(this).trigger("glow-cycle")
                    }
                    return i.on("dblclick", ( () => {
                        t.on && !n.z1 && n.b1()
                    }
                    )),
                    Object(l.a)("#glass").on("dblclick", ( () => {
                        n.b1()
                    }
                    )),
                    i.bind("glow-cycle", (function() {
                        Object(l.a)(this).animate({
                            boxShadow: b ? p() : g()
                        }, f(), m)
                    }
                    )),
                    {
                        l1: e => b = e,
                        s1: () => {
                            i.trigger("glow-cycle")
                        }
                        ,
                        u5: () => {
                            i.stop().css("boxShadow", "0 0 0px 0px rgba(255,255,255,0)")
                        }
                        ,
                        k9: e => {
                            Object(s.i)(i, e)
                        }
                    }
                }(e, t, ne),
                e.h6 ? I.length > 0 && Object(s.i)(I, !1) : Object(s.i)(D, !0),
                Object(l.a)("#iconreport").on("click", ( () => {
                    var t, n;
                    const o = e.s6 + Oe.k5()
                      , a = null === (t = window.location.href.split("#")) || void 0 === t ? void 0 : t[1]
                      , i = Oe.u6()
                      , l = null === i || void 0 === i ? void 0 : i.k7
                      , s = `https://docs.google.com/forms/d/e/1FAIpQLSfKUKsfO8M6n-90H41cbjfgCnzHnGi-F99ONdzbw21h2zMUiA/viewform?entry.395176289=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${a}&entry.617550367=${null === c.a || void 0 === c.a || null === (n = c.a[l]) || void 0 === n ? void 0 : n.w4}&entry.338539129=${o}`;
                    window.open(s, "_newtab")
                }
                )),
                Object(l.a)("#lcdbar").text(`Welcome back to the ${e.r2}0's! Click on power button to begin journey.`),
                ne.z5()
            }
            x0() {
                const e = this;
                ne.b0(),
                ue && clearTimeout(ue),
                ue = setTimeout(( () => e.u7()), 1)
            }
            u7() {
                const e = this.on
                  , t = ne.z1;
                Object(l.a)("#myytplayer").css({
                    ...t ? ve : ye,
                    zIndex: e ? t ? 20 : 2 : 0,
                    visibility: e ? "visible" : "hidden"
                }),
                K.css({
                    ...t ? ve : Ce,
                    zIndex: t ? 99999 : 2
                });
                const n = t && e;
                Object(l.a)(".wrapper").css("transform", n ? "" : ae),
                S.css("zIndex", n ? 1e5 : 0),
                te.k9(!t),
                e || k.text(t ? "Fullscreen mode active - Turn on TV to view ( or press ESC to exit )" : "Click on power button to turn on the TV again"),
                ne.t4(e)
            }
            v6() {
                const t = this;
                Se(_, "Suggestion Box"),
                Se(j, "Share on Bluesky"),
                Se(T, "Report Video Correction"),
                E.length > 0 && je(E, .4, "Change to previous channel", "Change to next channel", (e => {
                    we.g0(e, !0)
                }
                )),
                I.length > 0 && !e.h6 && je(I, .4, "Change to previous year", "Change to next year", (e => {
                    we.l3(e)
                }
                ), ( () => !t.on && x.html("When TV is powered on, this dial changes the current year")), ( () => x.html(""))),
                Se(F, "Power button"),
                Se(P, "Toggle Playlist Mode"),
                Se(Y, "Toggle Shuffle Mode"),
                Se(L, "Toggle B&W Mode"),
                Se(V, "Toggle Color Scheme"),
                Se(B, "Channel Down"),
                Se(z, "Channel Up"),
                Se(W, "Toggle Menu"),
                Se(U, "Volume Down"),
                Se(X, "Volume Up"),
                Se(J, "Toggle Full-screen mode"),
                Se(Object(l.a)("#guide"), "TV Guide")
            }
            b7() {
                const e = this;
                le = le || 1,
                e.g0(le);
                const t = i.surfSecs || 15;
                d = setTimeout(( () => {
                    e.b7()
                }
                ), 1e3 * t)
            }
            d6() {
                this.q8(),
                this.b7()
            }
            q8() {
                d && (clearTimeout(d),
                d = 0)
            }
            p5() {
                const e = this;
                this.e1();
                const t = i.idleSecs || 60;
                se = setTimeout((function() {
                    e.d6(),
                    e.p5()
                }
                ), 1e3 * t)
            }
            e1() {
                se && (clearTimeout(se),
                se = 0)
            }
            s8() {
                const t = this;
                if (t.on && !t.z4)
                    return;
                const n = t.on = !t.on;
                ne.t4(n),
                e.s6 < 1990 && F.css("opacity", n ? 1 : 0),
                Object(s.d)(N, n),
                e.s6 <= 1980 && (Object(s.d)($, n && ne.b2),
                Object(s.d)(G, n && ne.x1)),
                Object(s.i)(H, n),
                oe.c5("power"),
                n ? (ne.showHelp && ne.m8(),
                t.b8(),
                m.css("color", "#0f0"),
                e.s6 > 1960 && q.toggleClass("tvremotebutton-on", !0),
                Object(s.i)(w, !1),
                e.h6 || (Object(s.i)(Q, !0),
                Object(s.i)(D, !0),
                Object(s.i)(T, !0)),
                ne.q4 && te.s1()) : (t.c4(!0),
                ne.q4 && te.u5(),
                O.text(""),
                ce && (clearTimeout(ce),
                ce = 0),
                Ae().stopVideo(),
                m.css("color", "#f00"),
                e.s6 > 1960 && q.toggleClass("tvremotebutton-on", !1),
                t.z4 = !1,
                document.location.hash = "",
                t.e5 = !1,
                Object(s.f)(y, !1),
                Object(s.f)(f, !1),
                Object(s.i)(Q, !1),
                Object(s.i)(T, !1),
                ne.b5()),
                t.x0()
            }
            e4() {
                const t = this;
                if (t.on) {
                    const n = Ae();
                    if (null !== n) {
                        const a = Math.floor(n.getCurrentTime());
                        t.s8();
                        const i = e.h6 ? `&list=${e.h6}` : "";
                        window.open(`https://www.youtube.com/watch?v=${o(t.u9)}${i}#t=${a}s`).focus()
                    }
                }
            }
            v8() {
                w.on("mouseenter", ( () => w.remove())),
                Z.css("opacity", 1).removeClass("noclicky")
            }
            h4(e, t, n, o) {
                let a = (n - t) % 360;
                return a > 180 ? a -= 360 : a < -180 && (a += 360),
                n = t + a % 360,
                o ? e.css("transition", "none") : e.css("transition", "all 0.75s ease"),
                e.css("transform", `rotate(${n}deg)`),
                n
            }
            r1(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.n2 = this.h4(R, e.n2, t, n)
            }
            h2(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.f8 = this.h4(M, e.f8, t, n)
            }
            c2() {
                de && clearTimeout(de)
            }
            g0(t) {
                const n = this;
                return 0 === t || re ? 0 : (ne.b2 && (re = setTimeout((function() {
                    re = 0
                }
                ), 500)),
                oe.c5("click"),
                e.s6 < 1990 && n.r1(e.n2 + 10 * t),
                !!n.on && (le = t || le,
                n.c2(),
                null !== Ae() && (-1 === t ? (Object(s.f)(y, !0),
                Object(s.f)(f, !1)) : 1 === t && (Object(s.f)(y, !1),
                Object(s.f)(f, !0)),
                Oe.d9(t, ke.y0()),
                ne.b2 && Oe.u6().e3(),
                n.b8()),
                !0))
            }
            b8() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const n = this;
                if (n.on && (n.c2(),
                k.text("LOADING..."),
                null !== Ae())) {
                    const o = ke.y0();
                    Oe.d9(0, o) && Te.f7(o),
                    e.s6 < 1990 && n.h2(36 * Oe.k5()),
                    t || n.d8(),
                    t || n.g4(),
                    n.j9()
                }
            }
            d8() {
                this.s2(Oe.k2())
            }
            s2(e) {
                O.text(e),
                ce && clearTimeout(ce),
                ce = setTimeout(( () => O.html("")), 5e3)
            }
            j9() {
                const t = Oe.u6();
                let n;
                ee = Date.now(),
                this.e5 = !0,
                t.p4.p6 && !ne.b2 && (n = Math.floor((ee - t.t9) / 1e3),
                ee > t.k8 ? t.j1() > 1 ? (t.a1(),
                ie = 0) : ie = n % Math.floor(t.p4.w6) : ie = n),
                e.h6 ? (e.i8 || (_e(`Custom playlist detected. Click <a href="https://www.${e.a5}">here</a> to load main site instead.`, 1e4),
                e.i8 = !0),
                Ae().loadPlaylist({
                    list: e.h6,
                    listType: "playlist",
                    index: Oe.d2(),
                    startSeconds: 0
                })) : (Ae().loadVideoById(o(t.p4.t5), 0, ne.z1 ? "default" : "medium"),
                document.location.hash = o(t.p4.t5))
            }
            z2(t) {
                const n = Oe.u6();
                n.p4.t5;
                if (e.k4)
                    return k.text(`[${Oe.d2() + 1}/${e.k4}] ${t}`),
                    void this.s2(Oe.k2());
                if ("h" === n.k7)
                    k.text("");
                else {
                    const n = e.s6 <= 1970 ? Oe.k2() : ""
                      , o = Oe.u6()
                      , a = o.j1()
                      , i = o.e2() + 1;
                    let l = "";
                    a > 1 && (l = `[${i}/${a}]`),
                    k.html(`${n}${l}${t}`)
                }
            }
            s5() {
                Ae().setLoop(!0);
                const e = Oe.u6();
                if (!ne.b2 && !e.rew) {
                    const t = e.p4;
                    if (!t.p6) {
                        if (t.w6 = Ae().getDuration(),
                        e.p3()) {
                            const e = Object(s.e)(0, t.w6 - 5);
                            ie = a ? 0 : e
                        } else
                            ie = 0;
                        t.p6 = 1
                    }
                    e.t9 = ee - 1e3 * ie,
                    e.k8 = e.t9 + 1e3 * (t.w6 - ie)
                }
                a && (a = 0),
                !ie || ne.b2 && !e.rew || Ae().seekTo(ie, !0),
                e.rew = !1;
                const n = Ae().getVideoUrl();
                this.u9 = t(p.exec(n)[1])
            }
            f1() {
                ge()
            }
            m0() {
                const e = this;
                e.g4(),
                e.c2(),
                de = setTimeout((function() {
                    Oe.u6().q6() ? e.b8(!0) : e.g0(le)
                }
                ), 3e3)
            }
            n4(e) {
                Oe.j4(e)
            }
            z0(e) {
                const t = this;
                t.e5 && (t.e5 = !1,
                t.s5(),
                t.c4(!1),
                Object(s.f)(y, !1),
                Object(s.f)(f, !1)),
                t.z4 || (t.x0(),
                t.z4 = !0),
                t.z2(e)
            }
            w7() {
                const e = this
                  , t = Oe.u6()
                  , n = t.l5();
                if (ne.b2) {
                    if (n)
                        return void e.g0(1);
                    t.a1()
                } else
                    t.k8 = 0;
                e.b8(!n)
            }
            d3(t) {
                if (e.h6)
                    return;
                const n = ke.y0();
                Oe.l6(t, n) && (oe.c5("warp"),
                this.b8(),
                Te.f7(n))
            }
            g4() {
                !ne.s3 && e.s6 >= 2e3 && Object(l.a)("img", K).css("visibility", "hidden"),
                te.l1(!0),
                K.addClass("notransitions"),
                K.css("opacity", 1),
                ne.b2 || oe.o8(),
                Object(s.i)(H, !1)
            }
            c4(t) {
                Object(l.a)("img", K).css("visibility", "visible"),
                te.l1(!1),
                (t || !ne.s3) && e.s6 >= 2e3 ? (K.addClass("notransitions"),
                oe.a9()) : (K.removeClass("notransitions").css("transition", "opacity 1s"),
                setTimeout(( () => {
                    oe.a9()
                }
                ), 200)),
                K.css("opacity", this.on ? e.j6 : 0),
                Object(s.i)(H, this.on)
            }
            l3(e) {
                this.on && this.d3((10 + Oe.k5() + e) % 10)
            }
        }
          , Te = function(e, t, n) {
            let {r2: o, o4: a, b4: i, n0: s, i6: c, w0: r, c8: u, e7: d} = n;
            const h = Object(l.a)(".year");
            return h.on("mouseenter", (function() {
                const t = +Object(l.a)(this).attr("name");
                if (!e.t2()[t].valid)
                    return;
                const n = t === e.k5();
                Object(l.a)(this).css({
                    fontSize: c,
                    color: n ? a : i,
                    cursor: n ? "default" : "pointer"
                })
            }
            )).on("mouseleave", (function() {
                const t = +Object(l.a)(this).attr("name");
                if (!e.t2()[t].valid)
                    return;
                const n = t === e.k5();
                Object(l.a)(this).css({
                    fontSize: n ? c : s,
                    color: n ? a : r
                })
            }
            )).on("click", (function() {
                const e = Object(l.a)(this).attr("name");
                t.d3(+e)
            }
            )),
            h.each((function(e) {
                Object(l.a)(this).css("left", e * d)
            }
            )),
            {
                f7: function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && e.r0(t);
                    const n = e.k5()
                      , i = e.t2();
                    h.each((function(e) {
                        const t = Object(l.a)(this)
                          , d = t.attr("name")
                          , h = e === n
                          , b = i[e].valid;
                        t.text(o + d),
                        t.css({
                            fontSize: h ? c : s,
                            color: h ? a : b ? r : u,
                            cursor: b && !h ? "pointer" : "default"
                        })
                    }
                    ))
                }
            }
        }(Oe, we, e);
        function _e(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4e3;
            x.html(e),
            he && clearTimeout(he),
            he = setTimeout(( () => x.html("")), t)
        }
        function je(e, t, n, o, a, i, s) {
            const c = Object(l.a)("#remotestatus")
              , r = t * e.width();
            i && e.on("mouseenter", ( () => {
                null === i || void 0 === i || i()
            }
            )),
            s && e.on("mouseleave", ( () => {
                c.text(""),
                null === s || void 0 === s || s()
            }
            )),
            e.on("mousemove", (e => {
                e.offsetX < r ? c.text(n) : c.text(o)
            }
            )).on("mouseleave", ( () => {
                Object(l.a)("#remotestatus").text("")
            }
            )),
            e.on("click", (e => {
                const t = e.offsetX < r ? -1 : 1;
                a(t)
            }
            ))
        }
        document.body.onload = function() {
            ne = function(e, t, n, o, a, i, c, r, u) {
                const d = Object(l.a)("#btn_voldn")
                  , h = Object(l.a)("#btn_volup")
                  , b = Object(l.a)("#helpback")
                  , p = Object(l.a)("#tvbackground")
                  , g = Object(l.a)("#tvdial").children("img:first")
                  , f = Object(l.a)("#tvdial2").children("img:first")
                  , m = Object(l.a)("#tvknob")
                  , y = Object(l.a)("#tvknob2")
                  , C = Object(l.a)("#tvknob3")
                  , v = Object(l.a)("#tvknobmini")
                  , O = Object(l.a)("#tvknobstar")
                  , S = Object(l.a)("#tvled2")
                  , w = Object(l.a)("#tvled3")
                  , T = Object(l.a)("#tvstencil")
                  , _ = Object(l.a)("#help");
                let j = !1
                  , k = null;
                const A = new class {
                    constructor() {
                        this.v1 = void 0,
                        this.s3 = void 0,
                        this.q4 = void 0,
                        this.r7 = void 0,
                        this.b2 = void 0,
                        this.x1 = void 0,
                        this.z1 = void 0,
                        this.Volume = void 0,
                        this.b6 = void 0,
                        this.v1 = !0,
                        this.q4 = !0,
                        this.r7 = r.y9 || 0,
                        this.b2 = !1,
                        this.x1 = !1,
                        this.z1 = !1,
                        this.s3 = !0,
                        this.Volume = 1
                    }
                    o7() {
                        const t = this;
                        Object(l.a)(document).on("keydown", (function(n) {
                            const o = (n = n || window.event).which;
                            switch (o) {
                            case 72:
                                t.m8();
                                break;
                            case 77:
                                t.v3();
                                break;
                            case 78:
                                t.n5();
                                break;
                            case 79:
                                t.j5();
                                break;
                            case 71:
                                t.n1();
                                break;
                            case 89:
                                e.e4();
                                break;
                            case 32:
                                e.s8();
                                break;
                            case 187:
                            case 107:
                            case 61:
                                t.s7(1);
                                break;
                            case 189:
                            case 109:
                            case 173:
                                t.s7(-1);
                                break;
                            case 37:
                            case 40:
                                e.g0(-1, !0);
                                break;
                            case 38:
                            case 39:
                                e.g0(1, !0);
                                break;
                            case 66:
                                1970 === r.s6 && t.v9();
                                break;
                            case 67:
                                1970 === r.s6 && t.j7();
                                break;
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                r.h6 || e.d3(o - 48);
                                break;
                            case 70:
                                t.b1();
                                break;
                            case 80:
                                t.d7();
                                break;
                            case 83:
                                t.c1();
                                break;
                            default:
                                return !0
                            }
                            return n.preventDefault(),
                            !1
                        }
                        ))
                    }
                    v3() {
                        o().c5("click"),
                        this.v1 = !this.v1,
                        u(this.v1 ? "Sound effects are now enabled" : "Sound effects are now <span class='status-red'>disabled</span>")
                    }
                    m8() {
                        if (j = !j,
                        j) {
                            let e = "H : Show or hide this help screen<br>";
                            e += "Space : Power on and off the television<br>",
                            e += "+ - : Change Volume<br>",
                            e += "m : Toggle TV Sound Effects<br>",
                            e += "g : Toggle TV Tube Glow Effect<br>",
                            e += `o : Toggle TV Static Overlay${r.s6 >= 2e3 ? "" : " Sound"}<br>`,
                            e += "n : Change TV Vintage Picture Noise<br>",
                            e += "Arrow Keys : Change Channel<br>",
                            e += "0,1,2,3,4,5,6,7,8,9 : Set Year (Jumps to " + r.r2 + "#)<br>",
                            e += "F : Change Fullscreen Settings (ESC to exit)<br>",
                            e += "P : Toggle Playlist Mode<br>",
                            e += "S : Toggle Shuffle Mode<br>",
                            e += "Y : Continue watching current clip on YouTube<br>",
                            _.html(e),
                            _.css("visibility", "visible")
                        } else
                            _.css("visibility", "hidden");
                        Object(s.i)(b, j)
                    }
                    v9() {
                        if (o().c5("click"),
                        e.on) {
                            const e = Object(l.a)("#myytplayer");
                            e.toggleClass("tvgrayscale"),
                            e.hasClass("tvgrayscale") ? (u("Black & White mode is now on"),
                            v.css("opacity", 1)) : (u("Black & White mode is now <span class='status-red'>off</span>"),
                            v.css("opacity", 0))
                        }
                    }
                    j7() {
                        [p, T, m, y, C, v, O, g, f].forEach((e => e.toggleClass("tvgreen"))),
                        o().c5("click"),
                        p.hasClass("tvgreen") ? (u("Color scheme is now green"),
                        O.css("opacity", 1)) : (u("Color scheme is now orange"),
                        O.css("opacity", 0))
                    }
                    n5() {
                        o().c5("click");
                        const t = this.r7 = (this.r7 + 1) % 5;
                        t ? (r.j6 = r.y3 * t,
                        u("Vintage picture noise is now enabled (" + t + "x)"),
                        e.on && e.c4(!1)) : (r.j6 = 0,
                        u("Vintage picture noise is now <span class='status-red'>disabled</span>"),
                        e.on && e.c4(!1))
                    }
                    j5() {
                        o().c5("click");
                        const e = this.s3 = !this.s3;
                        r.s6 >= 2e3 ? u(e ? "Static transition overlay is now enabled" : "Static transition overlay is now <span class='status-red'>disabled</span>") : u(e ? "Static transition sound is now enabled" : "Static transition sound is now <span class='status-red'>disabled</span>")
                    }
                    n1() {
                        const t = this;
                        o().c5("click"),
                        t.q4 = !t.q4,
                        t.q4 ? (u("Tube glow effect is now enabled"),
                        e.on && n().s1()) : (u("Tube glow effect is now <span class='status-red'>disabled</span>"),
                        e.on && n().u5())
                    }
                    d7() {
                        o().c5("click");
                        const t = this.b2 = !this.b2;
                        r.s6 <= 1980 && (Object(l.a)("#tvknob2").css("opacity", t ? 1 : 0),
                        Object(s.d)(S, e.on && t)),
                        u(this.b2 ? "Playlist mode is on ( Channels play from start to end then switch )" : "Playlist mode is <span class='status-red'>off</span> ( Each channel loops continuously )"),
                        e.s2("PLAYLIST MODE: " + (t ? "ON" : "OFF"))
                    }
                    c1() {
                        o().c5("click");
                        const n = this.x1 = !this.x1;
                        t.m9(n),
                        r.s6 <= 1980 && (Object(l.a)("#tvknob3").css("opacity", n ? 1 : 0),
                        Object(s.d)(w, e.on && n)),
                        r.h6 ? u(n ? "Shuffle mode is on (Custom playlist is randomized)" : "Shuffle mode is <span class='status-red'>off</span>") : u(n ? "Shuffle mode is on (Entire decade is randomized)" : "Shuffle mode is <span class='status-red'>off</span>"),
                        e.s2("SHUFFLE MODE: " + (n ? "ON" : "OFF"))
                    }
                    z5() {
                        const t = this;
                        function n() {
                            document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? t.z1 = !0 : t.z1 = !1,
                            o().c5("click"),
                            Object(l.a)("#tvtopknob").css("opacity", t.z1 ? 1 : 0),
                            e.x0()
                        }
                        document.addEventListener("fullscreenchange", n),
                        document.addEventListener("webkitfullscreenchange", n),
                        document.addEventListener("mozfullscreenchange", n),
                        document.addEventListener("MSFullscreenChange", n)
                    }
                    b1() {
                        this.z1 ? document.exitFullscreen() : function(e) {
                            const t = {
                                navigationUI: "hide"
                            };
                            e.requestFullscreen ? e.requestFullscreen(t) : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(t) : e.msRequestFullscreen && e.msRequestFullscreen(t)
                        }(document.documentElement)
                    }
                    s7(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!e.on && !n)
                            return;
                        n || o().c5("click");
                        const l = a();
                        if (null !== l) {
                            const e = Math.min(Math.max(l.getVolume() + 10 * t, 0), 100);
                            var c;
                            l.setVolume(e),
                            n || null === (c = i()) || void 0 === c || c.setVolume(e);
                            const a = this;
                            o().q1(a.Volume = Object(s.c)(a.Volume + .1 * t, 0, 1)),
                            Object(s.f)(1 === t ? h : d, !0),
                            k && clearTimeout(k),
                            k = setTimeout(( () => a.b5()), 500)
                        }
                    }
                    b5() {
                        Object(s.f)(d, !1),
                        Object(s.f)(h, !1)
                    }
                    k0(e) {
                        Object(l.a)("#myytplayer").css("filter", this.b6 = e)
                    }
                    b0() {
                        Object(l.a)("#myytplayer").css("filter", "")
                    }
                    t4(e) {
                        Object(l.a)("#myytplayer").css("filter", e && this.b6 || "")
                    }
                }
                ;
                return A
            }(we, Oe, pe, be, Ae, b, 0, e, _e),
            oe = function(e, t) {
                let n, o, a = !1;
                function i() {
                    t()
                }
                return setTimeout(( () => {
                    o = new r({
                        src: ["sfx/static.ogg", "sfx/static.mp3"],
                        volume: .5,
                        loop: !0,
                        onload: i
                    })
                }
                ), 1),
                setTimeout(( () => {
                    n = new r({
                        src: ["sfx/misc.ogg", "sfx/misc.mp3"],
                        sprite: {
                            power: [0, 264.9433106575963],
                            click: [2e3, 47.25623582766447],
                            warp: [4e3, 289.1609977324263]
                        },
                        onload: i
                    })
                }
                ), 1),
                {
                    c5: t => {
                        e.v1 && n.play(t)
                    }
                    ,
                    o8: () => {
                        a || (e.v1 && e.s3 && o.play(),
                        a = !0)
                    }
                    ,
                    a9: () => {
                        a && (o.stop(),
                        a = !1)
                    }
                    ,
                    q1: e => o.volume(.5 * e)
                }
            }(ne, ge),
            e.s6 <= 1960 && (u = n(12).default(ne, je, _e)),
            setTimeout(( () => {
                ge()
            }
            ), 10),
            g.on("click", ( () => ne.m8())),
            f.on("click", ( () => we.g0(1, !0))),
            m.on("click", ( () => we.s8())),
            y.on("click", ( () => we.g0(-1, !0))),
            C.on("click", ( () => ne.s7(-1))),
            v.on("click", ( () => ne.s7(1))),
            _.on("click", ( () => Object(s.k)())),
            F.on("click", ( () => we.s8())),
            P.on("click", ( () => ne.d7())),
            Y.on("click", ( () => ne.c1())),
            L.on("click", ( () => ne.v9())),
            V.on("click", ( () => ne.j7())),
            B.on("click", ( () => we.g0(-1, !0))),
            z.on("click", ( () => we.g0(1, !0))),
            W.on("click", ( () => ne.m8())),
            U.on("click", ( () => ne.s7(-1))),
            X.on("click", ( () => ne.s7(1))),
            J.on("click", ( () => ne.b1()))
        }
        ,
        document.body.onblur = function() {
            document.activeElement === Object(l.a)("#myytplayer")[0] && setTimeout((function() {
                window.focus()
            }
            ), 0)
        }
        ;
        const ke = function(e, t) {
            const n = Object(l.a)("#filter_all")
              , o = Object(l.a)("#filter_none")
              , a = Object.keys(c.a).length
              , s = 1 << c.a.h.bit;
            let r = s;
            return "true" === i.onlymusic && (r |= 1 << c.a.m.bit),
            new class {
                h3() {
                    const t = this;
                    for (const n in c.a)
                        if ("h" !== n) {
                            const o = c.a[n];
                            Object(l.a)(`label[for="box_${n}"]`).text(`${o.w4} (${o.p9}) `),
                            Object(l.a)(`input[id="box_${n}"]`).on("click", ( () => {
                                e().c5("click"),
                                t.w3()
                            }
                            ))
                        }
                    n.on("click", ( () => t.z6())),
                    o.on("click", ( () => t.m2())),
                    "true" === i.onlymusic ? (Object(l.a)('input[id="box_m"]').prop("checked", !0),
                    t.w3()) : t.z6(!0)
                }
                z6() {
                    !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && e().c5("click"),
                    Object(l.a)(":checkbox").each((function() {
                        this.checked = !0
                    }
                    )),
                    this.w3()
                }
                m2() {
                    e().c5("click"),
                    Object(l.a)(":checkbox").each((function() {
                        this.checked = !1
                    }
                    )),
                    this.w3()
                }
                w3() {
                    let e;
                    r = s,
                    Object(l.a)("input:checked").each((function() {
                        e = parseInt(Object(l.a)(this).val()),
                        r |= 1 << e
                    }
                    ));
                    const i = r === s
                      , c = r === (1 << a) - 1;
                    o.css({
                        textDecoration: i ? "none" : "underline",
                        cursor: i ? "default" : "pointer"
                    }),
                    n.css({
                        textDecoration: c ? "none" : "underline",
                        cursor: c ? "default" : "pointer"
                    }),
                    t().f7(r, !0)
                }
                y0() {
                    return r
                }
            }
        }(be, ( () => Te))
          , Ae = function(e, t) {
            let n = null;
            function o(o) {
                n = o.target,
                null === e || void 0 === e || e.f1(),
                t.h6 && setTimeout(( () => n.cuePlaylist({
                    list: t.h6,
                    listType: "playlist",
                    index: 0,
                    startSeconds: 0
                })), 1)
            }
            function a() {
                null === e || void 0 === e || e.m0()
            }
            function i(o) {
                var a, i;
                switch (h && (clearTimeout(h),
                h = 0),
                o.data) {
                case -1:
                    break;
                case 0:
                    null === e || void 0 === e || e.w7();
                    break;
                case 1:
                    null === e || void 0 === e || e.z0((null === (a = n.getVideoData()) || void 0 === a || null === (i = a.title) || void 0 === i ? void 0 : i.trim()) || "---");
                    break;
                case 2:
                    null === e || void 0 === e || e.w7();
                    break;
                case 3:
                    h = setTimeout(( () => {
                        null !== e && void 0 !== e && e.on && (null === e || void 0 === e || e.m0())
                    }
                    ), 8e3);
                    break;
                case 5:
                    var l, s;
                    t.h6 && !t.x9 && (t.x9 = null === (l = (s = n).getPlaylist) || void 0 === l ? void 0 : l.call(s),
                    null === e || void 0 === e || e.n4(t.x9))
                }
            }
            return setTimeout(( () => {
                window.onYouTubeIframeAPIReady = function() {
                    n = new window.YT.Player("myytplayer",{
                        width: Object(l.a)("#myytplayer").width(),
                        height: Object(l.a)("#myytplayer").height(),
                        playerVars: {
                            enablejsapi: 1,
                            playerapiid: "ytplayer",
                            version: 3,
                            autoplay: 0,
                            autohide: 1,
                            controls: 0,
                            fs: 0,
                            rel: 0,
                            loop: 1,
                            origin: t.a5,
                            modestbranding: 1,
                            showinfo: 0,
                            iv_load_policy: 3,
                            wmode: "opaque",
                            playsinline: 1
                        },
                        events: {
                            onReady: o,
                            onError: a,
                            onStateChange: i
                        }
                    })
                }
                ;
                const e = document.createElement("script");
                e.src = "https://www.youtube.com/iframe_api";
                const s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(e, s)
            }
            ), 2),
            function() {
                return n
            }
        }(we, e)
    }({
        r2: "200",
        y9: oe,
        d1: 60,
        e0: 5,
        y6: 627,
        y7: 1270,
        y3: .08,
        e9: "my2000stv",
        a5: "https://00s.myretrotvs.com",
        s6: 2e3,
        c8: "#444",
        b4: "#fff",
        w0: "#aaa",
        o4: "#0f0",
        i6: "22px",
        n0: "20px",
        e7: 68,
        p2: "AIzaSyCHTqwWmrDdStnnsOI7pDTicXqKVALBxY0",
        j6: .08 * oe,
        n2: 0,
        f8: 0,
        ez: te,
        dz: ne
    })
}
], [[5, 1, 2]]]);
