var Jr = Object.defineProperty;
var Qr = (r, e, t) => e in r ? Jr(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : r[e] = t;
var F = (r, e, t) => Qr(r, typeof e != "symbol" ? e + "" : e, t);
import {
    c3 as en,
    c4 as fr,
    c5 as tn,
    c6 as pr,
    c7 as at,
    c8 as hr,
    c9 as yt,
    ca as rn,
    cb as nn,
    cc as Vt,
    cd as _t,
    ce as Gt,
    cf as Et,
    cg as an,
    ch as sn,
    ci as on,
    cj as ln,
    ck as gr,
    cl as mr,
    cm as cn,
    cn as dn,
    co as vn,
    cp as qt,
    cq as un,
    cr as fn,
    cs as pn,
    ct as hn,
    cu as gn,
    n as dt,
    t as T,
    $ as me,
    h as _,
    aI as te,
    a3 as xe,
    aJ as Ct,
    B as x,
    V as Z,
    _ as be,
    k as D,
    F as z,
    m as O,
    X as xr,
    p as Y,
    N as B,
    x as W,
    f as X,
    G as ee,
    Y as ke,
    K as de,
    j as K,
    y as wr,
    z as he,
    D as R,
    cv as mn,
    M as N,
    cw as xn,
    a1 as Oe,
    b7 as kt,
    a4 as wn,
    q as ve,
    v as J,
    s as vt,
    O as Ot,
    bx as At,
    cx as bn,
    ae as Je,
    b2 as Ue,
    ao as U,
    cy as je,
    ar as re,
    A as Le,
    bN as Xe,
    aT as yn,
    aU as _n,
    J as Qe,
    d as Pt,
    cz as En,
    bu as Cn,
    a_ as br,
    cA as kn,
    cB as yr,
    cC as On,
    cD as Yt,
    cE as An,
    cF as Pn,
    cG as _r,
    H as et,
    w as Dn,
    ap as $e,
    I as Te,
    cH as Ln,
    ah as Er,
    cI as $n,
    L as Kt,
    b5 as Mn,
    b8 as Sn,
    cJ as Tn,
    cK as In,
    bP as Fn,
    bM as Cr,
    b3 as ot,
    ba as jn,
    ag as qe,
    cL as Ye,
    cM as Bn,
    bU as kr,
    cN as Rn,
    o as Hn,
    cO as Wn,
    cP as Nn,
    cQ as Or,
    cR as Un,
    cS as zn,
    a2 as Ar,
    bC as Pr,
    cT as Xn,
    cU as Vn,
    cV as Gn,
    bE as qn,
    cW as Dr,
    cX as Yn,
    cY as Dt,
    cZ as Kn,
    c_ as Zn,
    c$ as Jn,
    d0 as Ce,
    d1 as Qn,
    d2 as ei,
    d3 as ti,
    d4 as ri,
    d5 as ni,
    d6 as ii,
    d7 as ai,
    d8 as si,
    d9 as oi,
    da as li,
    db as ci,
    dc as di,
    dd as vi,
    de as ui,
    df as fi,
    dg as pi,
    bG as hi,
    dh as gi,
    di as mi,
    dj as Zt,
    c0 as xi,
    dk as Lr,
    dl as wi,
    dm as bi,
    dn as yi,
    aq as _i,
    b_ as Ei,
    dp as $r,
    dq as Ci,
    aD as Jt,
    au as Qt,
    Q as ki,
    dr as Oi
} from "./main-CWfC9NIU.js";

function Ai(r, e) {
    return e
}

function Pi(r, e, t, n) {
    for (var i = [], a = e.length, l = 0; l < a; l++) sn(e[l].e, i, !0);
    var o = a > 0 && i.length === 0 && t !== null;
    if (o) {
        var s = t.parentNode;
        on(s), s.append(t), n.clear(), De(r, e[0].prev, e[a - 1].next)
    }
    ln(i, () => {
        for (var f = 0; f < a; f++) {
            var c = e[f];
            o || (n.delete(c.k), De(r, c.prev, c.next)), gr(c.e, !o)
        }
    })
}

function ut(r, e, t, n, i, a = null) {
    var l = r,
        o = {
            flags: e,
            items: new Map,
            first: null
        },
        s = (e & mr) !== 0;
    if (s) {
        var f = r;
        l = f.appendChild(en())
    }
    var c = null,
        m = !1;
    fr(() => {
        var g = t(),
            d = tn(g) ? g : g == null ? [] : pr(g),
            u = d.length;
        if (!(m && u === 0)) {
            m = u === 0; {
                var v = cn;
                Di(d, o, l, i, e, (v.f & at) !== 0, n)
            }
            a !== null && (u === 0 ? c ? hr(c) : c = yt(() => a(l)) : c !== null && rn(c, () => {
                c = null
            })), t()
        }
    })
}

function Di(r, e, t, n, i, a, l, o) {
    var V, H, $, j;
    var s = (i & dn) !== 0,
        f = (i & (_t | Et)) !== 0,
        c = r.length,
        m = e.items,
        g = e.first,
        d = g,
        u, v = null,
        h, w = [],
        E = [],
        C, b, p, y;
    if (s)
        for (y = 0; y < c; y += 1) C = r[y], b = l(C, y), p = m.get(b), p !== void 0 && ((V = p.a) == null || V.measure(), (h ? ? (h = new Set)).add(p));
    for (y = 0; y < c; y += 1) {
        if (C = r[y], b = l(C, y), p = m.get(b), p === void 0) {
            var A = d ? d.e.nodes_start : t;
            v = $i(A, e, v, v === null ? e.first : v.next, C, b, y, n, i), m.set(b, v), w = [], E = [], d = v.next;
            continue
        }
        if (f && Li(p, C, y, i), p.e.f & at && (hr(p.e), s && ((H = p.a) == null || H.unfix(), (h ? ? (h = new Set)).delete(p))), p !== d) {
            if (u !== void 0 && u.has(p)) {
                if (w.length < E.length) {
                    var L = E[0],
                        k;
                    v = L.prev;
                    var S = w[0],
                        P = w[w.length - 1];
                    for (k = 0; k < w.length; k += 1) er(w[k], L, t);
                    for (k = 0; k < E.length; k += 1) u.delete(E[k]);
                    De(e, S.prev, P.next), De(e, v, S), De(e, P, L), d = L, v = P, y -= 1, w = [], E = []
                } else u.delete(p), er(p, d, t), De(e, p.prev, p.next), De(e, p, v === null ? e.first : v.next), De(e, v, p), v = p;
                continue
            }
            for (w = [], E = []; d !== null && d.k !== b;)(a || !(d.e.f & at)) && (u ? ? (u = new Set)).add(d), E.push(d), d = d.next;
            if (d === null) continue;
            p = d
        }
        w.push(p), v = p, d = p.next
    }
    if (d !== null || u !== void 0) {
        for (var I = u === void 0 ? [] : pr(u); d !== null;)(a || !(d.e.f & at)) && I.push(d), d = d.next;
        var M = I.length;
        if (M > 0) {
            var q = i & mr && c === 0 ? t : null;
            if (s) {
                for (y = 0; y < M; y += 1)($ = I[y].a) == null || $.measure();
                for (y = 0; y < M; y += 1)(j = I[y].a) == null || j.fix()
            }
            Pi(e, I, q, m)
        }
    }
    s && nn(() => {
        var G;
        if (h !== void 0)
            for (p of h)(G = p.a) == null || G.apply()
    }), Vt.first = e.first && e.first.e, Vt.last = v && v.e
}

function Li(r, e, t, n) {
    n & _t && Gt(r.v, e), n & Et ? Gt(r.i, t) : r.i = t
}

function $i(r, e, t, n, i, a, l, o, s, f) {
    var c = (s & _t) !== 0,
        m = (s & un) === 0,
        g = c ? m ? vn(i) : qt(i) : i,
        d = s & Et ? qt(l) : l,
        u = {
            i: d,
            v: g,
            k: a,
            a: null,
            e: null,
            prev: t,
            next: n
        };
    try {
        return u.e = yt(() => o(r, g, d), an), u.e.prev = t && t.e, u.e.next = n && n.e, t === null ? e.first = u : (t.next = u, t.e.next = u.e), n !== null && (n.prev = u, n.e.prev = u.e), u
    } finally {}
}

function er(r, e, t) {
    for (var n = r.next ? r.next.e.nodes_start : t, i = e ? e.e.nodes_start : t, a = r.e.nodes_start; a !== n;) {
        var l = fn(a);
        i.before(a), a = l
    }
}

function De(r, e, t) {
    e === null ? r.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e)
}

function tr(r, e, t, n, i) {
    var a = r,
        l = "",
        o;
    fr(() => {
        l !== (l = e() ? ? "") && (o !== void 0 && (gr(o), o = void 0), l !== "" && (o = yt(() => {
            var s = l + "",
                f = pn(s);
            hn(gn(f), f.lastChild), a.before(f)
        })))
    })
}
const Mi = r => {
        if (r) return `${r}?size=80`;
        const {
            widgetV3Url: e
        } = dt.getOptions();
        return `${e}/assets/images/default-avatar.png`
    },
    Si = {
        Enter: "Enter"
    },
    mt = 2e3,
    Ti = 2e3;

function Ii(r) {
    const e = r - 1;
    return e * e * e + 1
}

function Fi(r, {
    delay: e = 0,
    duration: t = 400,
    easing: n = Ii,
    x: i = 0,
    y: a = 0,
    opacity: l = 0
} = {}) {
    const o = getComputedStyle(r),
        s = +o.opacity,
        f = o.transform === "none" ? "" : o.transform,
        c = s * (1 - l);
    let m, g = "px";
    if (typeof i == "string") {
        const v = i.match(/([-\d.]+)(\D+)/);
        v && (m = Number(v[1]), g = v[2])
    } else m = i;
    let d, u = "px";
    if (typeof a == "string") {
        const v = a.match(/([-\d.]+)(\D+)/);
        v && (d = Number(v[1]), u = v[2])
    } else d = a;
    return {
        delay: e,
        duration: t,
        easing: n,
        css: (v, h) => `
				transform: ${f} translate(${(1-v)*m}${g}, ${(1-v)*d}${u});
				opacity: ${s-c*h}`
    }
}
var ji = te('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"></path></svg>');

function Mr(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = ji();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Bi = te('<svg width="100%" height="100%" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><g transform="matrix(5.55556,0,0,5.55556,0,0)"><g transform="matrix(-1,1.22465e-16,-1.22465e-16,-1,12.005,12)"><path d="M6,8L6,6M6,4L6.005,4"></path></g></g></svg>');

function Ri(r) {
    var e = Bi();
    _(r, e)
}
var Hi = te('<svg width="100%" height="100%" viewBox="0 0 67 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><g transform="matrix(5.55556,0,0,5.55556,0,0)"><g><path d="M6,8L6,6M6,4L6.005,4"></path></g></g></svg>');

function Wi(r) {
    var e = Hi();
    _(r, e)
}
var Ni = D("<div><!></div>");

function Ui(r, e) {
    const t = {
        success: Mr,
        error: xr,
        warning: Ri,
        info: Wi
    };
    let n = z(() => t[e.type]);
    const i = z(() => x(n));
    var a = Ni(),
        l = O(a);
    Ct(l, () => x(i), (o, s) => {
        s(o, {})
    }), T(() => Z(a, be(["flex-center flex-none w-6 h-6 mr-2 rounded-full", e.type === "success" && "bg-green-500", e.type === "error" && "bg-red-500", e.type === "warning" && "bg-orange-500", e.type === "info" && "bg-slate-500"]), "")), _(r, a)
}
var zi = D('<div class="flex-center py-2 pl-2 pr-4 bg-black/80 text-white text-sm rounded-full shadow-sm first-of-type:mt-2 not-last-of-type:mb-1"><!> <!> </div>');

function Xi(r, e) {
    Y(e, !0);
    var t = zi(),
        n = O(t);
    Ui(n, {
        get type() {
            return e.data.type
        }
    });
    var i = B(n, 2); {
        var a = o => {
            var s = wr();
            T(() => ke(s, `(${e.data.recurrence??""})`)), _(o, s)
        };
        W(i, o => {
            e.data.recurrence > 1 && o(a)
        })
    }
    var l = B(i);
    T(() => {
        X(t, "data-testid", ee.flashMessage), ke(l, ` ${e.data.text??""}`)
    }), de(3, t, () => Fi, () => ({
        y: "-100%"
    })), _(r, t), K()
}
var Vi = D('<div class="absolute flex flex-col items-center w-full z-10 px-3"></div>');

function Ho(r) {
    const e = he(),
        t = () => R(mn, "$flashMessagesList", e);
    var n = Vi();
    ut(n, 5, t, i => i.id, (i, a) => {
        Xi(i, {
            get data() {
                return x(a)
            }
        })
    }), _(r, n)
}
var Gi = te('<svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>');

function qi(r, e) {
    let t = N(e, "spinnerSize", 3, "current"),
        n = N(e, "color", 3, "primary");
    const i = {
            primary: "fill-primary-button",
            primaryContent: "fill-primary-button-content"
        },
        a = {
            current: "w-[1.2em] h-[1.2em]",
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8"
        },
        l = m => i[m],
        o = m => a[m];
    let s = z(() => l(n())),
        f = z(() => o(t()));
    var c = Gi();
    T(() => xn(c, `inline ${x(f)??""} ${x(s)??""} text-white text-opacity-20 animate-spin`)), _(r, c)
}
var Yi = D('<span class="mr-2"><!></span>'),
    Ki = D("<button><!> <!></button>");

function Zi(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(kt, "$isMobileDevice", t);
    let i = N(e, "variant", 3, "primary"),
        a = N(e, "size", 3, "md"),
        l = xe(e, ["$$slots", "$$events", "$$legacy", "variant", "size", "icon", "iconDescription", "disabled", "isBlock", "isLoading", "testId", "onClick", "children"]),
        o = z(() => e.isLoading ? qi : e.icon),
        s = z(() => e.isLoading ? {
            color: "primaryContent"
        } : {}),
        f = z(() => !!e.disabled || !!e.isLoading);
    var c = Ki();
    let m;
    var g = O(c); {
        var d = h => {
            var w = Yi();
            const E = z(() => x(o));
            var C = O(w);
            Ct(C, () => x(E), (b, p) => {
                p(b, wn({
                    "aria-hidden": "true",
                    get "aria-label" () {
                        return e.iconDescription
                    }
                }, () => x(s)))
            }), _(h, w)
        };
        W(g, h => {
            x(o) && h(d)
        })
    }
    var u = B(g, 2); {
        var v = h => {
            var w = ve(),
                E = J(w);
            vt(E, () => e.children ? ? Ot), _(h, w)
        };
        W(u, h => {
            e.isLoading || h(v)
        })
    }
    T(() => m = me(c, m, {
        type: "button",
        tabindex: "0",
        ...l,
        class: [`btn btn-${i()} btn-${a()} text-base`, !n() && "text-sm", x(f) && "btn-disabled", !!e.isBlock && "w-full", Oe() ? "cursor-auto" : "cursor-pointer"],
        disabled: x(f),
        "data-testid": e.testId,
        onclick: e.onClick
    }, "svelte-ssg3a6")), _(r, c), K()
}
var ie = "top",
    fe = "bottom",
    pe = "right",
    ae = "left",
    Lt = "auto",
    tt = [ie, fe, pe, ae],
    Re = "start",
    Ke = "end",
    Ji = "clippingParents",
    Sr = "viewport",
    ze = "popper",
    Qi = "reference",
    rr = tt.reduce(function(r, e) {
        return r.concat([e + "-" + Re, e + "-" + Ke])
    }, []),
    Tr = [].concat(tt, [Lt]).reduce(function(r, e) {
        return r.concat([e, e + "-" + Re, e + "-" + Ke])
    }, []),
    ea = "beforeRead",
    ta = "read",
    ra = "afterRead",
    na = "beforeMain",
    ia = "main",
    aa = "afterMain",
    sa = "beforeWrite",
    oa = "write",
    la = "afterWrite",
    ca = [ea, ta, ra, na, ia, aa, sa, oa, la];

function ye(r) {
    return r ? (r.nodeName || "").toLowerCase() : null
}

function oe(r) {
    if (r == null) return window;
    if (r.toString() !== "[object Window]") {
        var e = r.ownerDocument;
        return e && e.defaultView || window
    }
    return r
}

function Fe(r) {
    var e = oe(r).Element;
    return r instanceof e || r instanceof Element
}

function ue(r) {
    var e = oe(r).HTMLElement;
    return r instanceof e || r instanceof HTMLElement
}

function $t(r) {
    if (typeof ShadowRoot > "u") return !1;
    var e = oe(r).ShadowRoot;
    return r instanceof e || r instanceof ShadowRoot
}

function da(r) {
    var e = r.state;
    Object.keys(e.elements).forEach(function(t) {
        var n = e.styles[t] || {},
            i = e.attributes[t] || {},
            a = e.elements[t];
        !ue(a) || !ye(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(l) {
            var o = i[l];
            o === !1 ? a.removeAttribute(l) : a.setAttribute(l, o === !0 ? "" : o)
        }))
    })
}

function va(r) {
    var e = r.state,
        t = {
            popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
        function() {
            Object.keys(e.elements).forEach(function(n) {
                var i = e.elements[n],
                    a = e.attributes[n] || {},
                    l = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]),
                    o = l.reduce(function(s, f) {
                        return s[f] = "", s
                    }, {});
                !ue(i) || !ye(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(s) {
                    i.removeAttribute(s)
                }))
            })
        }
}
const ua = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: da,
    effect: va,
    requires: ["computeStyles"]
};

function we(r) {
    return r.split("-")[0]
}
var Ie = Math.max,
    lt = Math.min,
    He = Math.round;

function xt() {
    var r = navigator.userAgentData;
    return r != null && r.brands && Array.isArray(r.brands) ? r.brands.map(function(e) {
        return e.brand + "/" + e.version
    }).join(" ") : navigator.userAgent
}

function Ir() {
    return !/^((?!chrome|android).)*safari/i.test(xt())
}

function We(r, e, t) {
    e === void 0 && (e = !1), t === void 0 && (t = !1);
    var n = r.getBoundingClientRect(),
        i = 1,
        a = 1;
    e && ue(r) && (i = r.offsetWidth > 0 && He(n.width) / r.offsetWidth || 1, a = r.offsetHeight > 0 && He(n.height) / r.offsetHeight || 1);
    var l = Fe(r) ? oe(r) : window,
        o = l.visualViewport,
        s = !Ir() && t,
        f = (n.left + (s && o ? o.offsetLeft : 0)) / i,
        c = (n.top + (s && o ? o.offsetTop : 0)) / a,
        m = n.width / i,
        g = n.height / a;
    return {
        width: m,
        height: g,
        top: c,
        right: f + m,
        bottom: c + g,
        left: f,
        x: f,
        y: c
    }
}

function Mt(r) {
    var e = We(r),
        t = r.offsetWidth,
        n = r.offsetHeight;
    return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
        x: r.offsetLeft,
        y: r.offsetTop,
        width: t,
        height: n
    }
}

function Fr(r, e) {
    var t = e.getRootNode && e.getRootNode();
    if (r.contains(e)) return !0;
    if (t && $t(t)) {
        var n = e;
        do {
            if (n && r.isSameNode(n)) return !0;
            n = n.parentNode || n.host
        } while (n)
    }
    return !1
}

function Ae(r) {
    return oe(r).getComputedStyle(r)
}

function fa(r) {
    return ["table", "td", "th"].indexOf(ye(r)) >= 0
}

function Me(r) {
    return ((Fe(r) ? r.ownerDocument : r.document) || window.document).documentElement
}

function ft(r) {
    return ye(r) === "html" ? r : r.assignedSlot || r.parentNode || ($t(r) ? r.host : null) || Me(r)
}

function nr(r) {
    return !ue(r) || Ae(r).position === "fixed" ? null : r.offsetParent
}

function pa(r) {
    var e = /firefox/i.test(xt()),
        t = /Trident/i.test(xt());
    if (t && ue(r)) {
        var n = Ae(r);
        if (n.position === "fixed") return null
    }
    var i = ft(r);
    for ($t(i) && (i = i.host); ue(i) && ["html", "body"].indexOf(ye(i)) < 0;) {
        var a = Ae(i);
        if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || e && a.willChange === "filter" || e && a.filter && a.filter !== "none") return i;
        i = i.parentNode
    }
    return null
}

function rt(r) {
    for (var e = oe(r), t = nr(r); t && fa(t) && Ae(t).position === "static";) t = nr(t);
    return t && (ye(t) === "html" || ye(t) === "body" && Ae(t).position === "static") ? e : t || pa(r) || e
}

function St(r) {
    return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y"
}

function Ve(r, e, t) {
    return Ie(r, lt(e, t))
}

function ha(r, e, t) {
    var n = Ve(r, e, t);
    return n > t ? t : n
}

function jr() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Br(r) {
    return Object.assign({}, jr(), r)
}

function Rr(r, e) {
    return e.reduce(function(t, n) {
        return t[n] = r, t
    }, {})
}
var ga = function(e, t) {
    return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
        placement: t.placement
    })) : e, Br(typeof e != "number" ? e : Rr(e, tt))
};

function ma(r) {
    var e, t = r.state,
        n = r.name,
        i = r.options,
        a = t.elements.arrow,
        l = t.modifiersData.popperOffsets,
        o = we(t.placement),
        s = St(o),
        f = [ae, pe].indexOf(o) >= 0,
        c = f ? "height" : "width";
    if (!(!a || !l)) {
        var m = ga(i.padding, t),
            g = Mt(a),
            d = s === "y" ? ie : ae,
            u = s === "y" ? fe : pe,
            v = t.rects.reference[c] + t.rects.reference[s] - l[s] - t.rects.popper[c],
            h = l[s] - t.rects.reference[s],
            w = rt(a),
            E = w ? s === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
            C = v / 2 - h / 2,
            b = m[d],
            p = E - g[c] - m[u],
            y = E / 2 - g[c] / 2 + C,
            A = Ve(b, y, p),
            L = s;
        t.modifiersData[n] = (e = {}, e[L] = A, e.centerOffset = A - y, e)
    }
}

function xa(r) {
    var e = r.state,
        t = r.options,
        n = t.element,
        i = n === void 0 ? "[data-popper-arrow]" : n;
    i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || Fr(e.elements.popper, i) && (e.elements.arrow = i))
}
const wa = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: ma,
    effect: xa,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Ne(r) {
    return r.split("-")[1]
}
var ba = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function ya(r, e) {
    var t = r.x,
        n = r.y,
        i = e.devicePixelRatio || 1;
    return {
        x: He(t * i) / i || 0,
        y: He(n * i) / i || 0
    }
}

function ir(r) {
    var e, t = r.popper,
        n = r.popperRect,
        i = r.placement,
        a = r.variation,
        l = r.offsets,
        o = r.position,
        s = r.gpuAcceleration,
        f = r.adaptive,
        c = r.roundOffsets,
        m = r.isFixed,
        g = l.x,
        d = g === void 0 ? 0 : g,
        u = l.y,
        v = u === void 0 ? 0 : u,
        h = typeof c == "function" ? c({
            x: d,
            y: v
        }) : {
            x: d,
            y: v
        };
    d = h.x, v = h.y;
    var w = l.hasOwnProperty("x"),
        E = l.hasOwnProperty("y"),
        C = ae,
        b = ie,
        p = window;
    if (f) {
        var y = rt(t),
            A = "clientHeight",
            L = "clientWidth";
        if (y === oe(t) && (y = Me(t), Ae(y).position !== "static" && o === "absolute" && (A = "scrollHeight", L = "scrollWidth")), y = y, i === ie || (i === ae || i === pe) && a === Ke) {
            b = fe;
            var k = m && y === p && p.visualViewport ? p.visualViewport.height : y[A];
            v -= k - n.height, v *= s ? 1 : -1
        }
        if (i === ae || (i === ie || i === fe) && a === Ke) {
            C = pe;
            var S = m && y === p && p.visualViewport ? p.visualViewport.width : y[L];
            d -= S - n.width, d *= s ? 1 : -1
        }
    }
    var P = Object.assign({
            position: o
        }, f && ba),
        I = c === !0 ? ya({
            x: d,
            y: v
        }, oe(t)) : {
            x: d,
            y: v
        };
    if (d = I.x, v = I.y, s) {
        var M;
        return Object.assign({}, P, (M = {}, M[b] = E ? "0" : "", M[C] = w ? "0" : "", M.transform = (p.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + v + "px)" : "translate3d(" + d + "px, " + v + "px, 0)", M))
    }
    return Object.assign({}, P, (e = {}, e[b] = E ? v + "px" : "", e[C] = w ? d + "px" : "", e.transform = "", e))
}

function _a(r) {
    var e = r.state,
        t = r.options,
        n = t.gpuAcceleration,
        i = n === void 0 ? !0 : n,
        a = t.adaptive,
        l = a === void 0 ? !0 : a,
        o = t.roundOffsets,
        s = o === void 0 ? !0 : o,
        f = {
            placement: we(e.placement),
            variation: Ne(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: i,
            isFixed: e.options.strategy === "fixed"
        };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, ir(Object.assign({}, f, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: l,
        roundOffsets: s
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, ir(Object.assign({}, f, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
    })
}
const Ea = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: _a,
    data: {}
};
var it = {
    passive: !0
};

function Ca(r) {
    var e = r.state,
        t = r.instance,
        n = r.options,
        i = n.scroll,
        a = i === void 0 ? !0 : i,
        l = n.resize,
        o = l === void 0 ? !0 : l,
        s = oe(e.elements.popper),
        f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return a && f.forEach(function(c) {
            c.addEventListener("scroll", t.update, it)
        }), o && s.addEventListener("resize", t.update, it),
        function() {
            a && f.forEach(function(c) {
                c.removeEventListener("scroll", t.update, it)
            }), o && s.removeEventListener("resize", t.update, it)
        }
}
const ka = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: Ca,
    data: {}
};
var Oa = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function st(r) {
    return r.replace(/left|right|bottom|top/g, function(e) {
        return Oa[e]
    })
}
var Aa = {
    start: "end",
    end: "start"
};

function ar(r) {
    return r.replace(/start|end/g, function(e) {
        return Aa[e]
    })
}

function Tt(r) {
    var e = oe(r),
        t = e.pageXOffset,
        n = e.pageYOffset;
    return {
        scrollLeft: t,
        scrollTop: n
    }
}

function It(r) {
    return We(Me(r)).left + Tt(r).scrollLeft
}

function Pa(r, e) {
    var t = oe(r),
        n = Me(r),
        i = t.visualViewport,
        a = n.clientWidth,
        l = n.clientHeight,
        o = 0,
        s = 0;
    if (i) {
        a = i.width, l = i.height;
        var f = Ir();
        (f || !f && e === "fixed") && (o = i.offsetLeft, s = i.offsetTop)
    }
    return {
        width: a,
        height: l,
        x: o + It(r),
        y: s
    }
}

function Da(r) {
    var e, t = Me(r),
        n = Tt(r),
        i = (e = r.ownerDocument) == null ? void 0 : e.body,
        a = Ie(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
        l = Ie(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
        o = -n.scrollLeft + It(r),
        s = -n.scrollTop;
    return Ae(i || t).direction === "rtl" && (o += Ie(t.clientWidth, i ? i.clientWidth : 0) - a), {
        width: a,
        height: l,
        x: o,
        y: s
    }
}

function Ft(r) {
    var e = Ae(r),
        t = e.overflow,
        n = e.overflowX,
        i = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(t + i + n)
}

function Hr(r) {
    return ["html", "body", "#document"].indexOf(ye(r)) >= 0 ? r.ownerDocument.body : ue(r) && Ft(r) ? r : Hr(ft(r))
}

function Ge(r, e) {
    var t;
    e === void 0 && (e = []);
    var n = Hr(r),
        i = n === ((t = r.ownerDocument) == null ? void 0 : t.body),
        a = oe(n),
        l = i ? [a].concat(a.visualViewport || [], Ft(n) ? n : []) : n,
        o = e.concat(l);
    return i ? o : o.concat(Ge(ft(l)))
}

function wt(r) {
    return Object.assign({}, r, {
        left: r.x,
        top: r.y,
        right: r.x + r.width,
        bottom: r.y + r.height
    })
}

function La(r, e) {
    var t = We(r, !1, e === "fixed");
    return t.top = t.top + r.clientTop, t.left = t.left + r.clientLeft, t.bottom = t.top + r.clientHeight, t.right = t.left + r.clientWidth, t.width = r.clientWidth, t.height = r.clientHeight, t.x = t.left, t.y = t.top, t
}

function sr(r, e, t) {
    return e === Sr ? wt(Pa(r, t)) : Fe(e) ? La(e, t) : wt(Da(Me(r)))
}

function $a(r) {
    var e = Ge(ft(r)),
        t = ["absolute", "fixed"].indexOf(Ae(r).position) >= 0,
        n = t && ue(r) ? rt(r) : r;
    return Fe(n) ? e.filter(function(i) {
        return Fe(i) && Fr(i, n) && ye(i) !== "body"
    }) : []
}

function Ma(r, e, t, n) {
    var i = e === "clippingParents" ? $a(r) : [].concat(e),
        a = [].concat(i, [t]),
        l = a[0],
        o = a.reduce(function(s, f) {
            var c = sr(r, f, n);
            return s.top = Ie(c.top, s.top), s.right = lt(c.right, s.right), s.bottom = lt(c.bottom, s.bottom), s.left = Ie(c.left, s.left), s
        }, sr(r, l, n));
    return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
}

function Wr(r) {
    var e = r.reference,
        t = r.element,
        n = r.placement,
        i = n ? we(n) : null,
        a = n ? Ne(n) : null,
        l = e.x + e.width / 2 - t.width / 2,
        o = e.y + e.height / 2 - t.height / 2,
        s;
    switch (i) {
        case ie:
            s = {
                x: l,
                y: e.y - t.height
            };
            break;
        case fe:
            s = {
                x: l,
                y: e.y + e.height
            };
            break;
        case pe:
            s = {
                x: e.x + e.width,
                y: o
            };
            break;
        case ae:
            s = {
                x: e.x - t.width,
                y: o
            };
            break;
        default:
            s = {
                x: e.x,
                y: e.y
            }
    }
    var f = i ? St(i) : null;
    if (f != null) {
        var c = f === "y" ? "height" : "width";
        switch (a) {
            case Re:
                s[f] = s[f] - (e[c] / 2 - t[c] / 2);
                break;
            case Ke:
                s[f] = s[f] + (e[c] / 2 - t[c] / 2);
                break
        }
    }
    return s
}

function Ze(r, e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.placement,
        i = n === void 0 ? r.placement : n,
        a = t.strategy,
        l = a === void 0 ? r.strategy : a,
        o = t.boundary,
        s = o === void 0 ? Ji : o,
        f = t.rootBoundary,
        c = f === void 0 ? Sr : f,
        m = t.elementContext,
        g = m === void 0 ? ze : m,
        d = t.altBoundary,
        u = d === void 0 ? !1 : d,
        v = t.padding,
        h = v === void 0 ? 0 : v,
        w = Br(typeof h != "number" ? h : Rr(h, tt)),
        E = g === ze ? Qi : ze,
        C = r.rects.popper,
        b = r.elements[u ? E : g],
        p = Ma(Fe(b) ? b : b.contextElement || Me(r.elements.popper), s, c, l),
        y = We(r.elements.reference),
        A = Wr({
            reference: y,
            element: C,
            strategy: "absolute",
            placement: i
        }),
        L = wt(Object.assign({}, C, A)),
        k = g === ze ? L : y,
        S = {
            top: p.top - k.top + w.top,
            bottom: k.bottom - p.bottom + w.bottom,
            left: p.left - k.left + w.left,
            right: k.right - p.right + w.right
        },
        P = r.modifiersData.offset;
    if (g === ze && P) {
        var I = P[i];
        Object.keys(S).forEach(function(M) {
            var q = [pe, fe].indexOf(M) >= 0 ? 1 : -1,
                V = [ie, fe].indexOf(M) >= 0 ? "y" : "x";
            S[M] += I[V] * q
        })
    }
    return S
}

function Sa(r, e) {
    e === void 0 && (e = {});
    var t = e,
        n = t.placement,
        i = t.boundary,
        a = t.rootBoundary,
        l = t.padding,
        o = t.flipVariations,
        s = t.allowedAutoPlacements,
        f = s === void 0 ? Tr : s,
        c = Ne(n),
        m = c ? o ? rr : rr.filter(function(u) {
            return Ne(u) === c
        }) : tt,
        g = m.filter(function(u) {
            return f.indexOf(u) >= 0
        });
    g.length === 0 && (g = m);
    var d = g.reduce(function(u, v) {
        return u[v] = Ze(r, {
            placement: v,
            boundary: i,
            rootBoundary: a,
            padding: l
        })[we(v)], u
    }, {});
    return Object.keys(d).sort(function(u, v) {
        return d[u] - d[v]
    })
}

function Ta(r) {
    if (we(r) === Lt) return [];
    var e = st(r);
    return [ar(r), e, ar(e)]
}

function Ia(r) {
    var e = r.state,
        t = r.options,
        n = r.name;
    if (!e.modifiersData[n]._skip) {
        for (var i = t.mainAxis, a = i === void 0 ? !0 : i, l = t.altAxis, o = l === void 0 ? !0 : l, s = t.fallbackPlacements, f = t.padding, c = t.boundary, m = t.rootBoundary, g = t.altBoundary, d = t.flipVariations, u = d === void 0 ? !0 : d, v = t.allowedAutoPlacements, h = e.options.placement, w = we(h), E = w === h, C = s || (E || !u ? [st(h)] : Ta(h)), b = [h].concat(C).reduce(function(se, ce) {
                return se.concat(we(ce) === Lt ? Sa(e, {
                    placement: ce,
                    boundary: c,
                    rootBoundary: m,
                    padding: f,
                    flipVariations: u,
                    allowedAutoPlacements: v
                }) : ce)
            }, []), p = e.rects.reference, y = e.rects.popper, A = new Map, L = !0, k = b[0], S = 0; S < b.length; S++) {
            var P = b[S],
                I = we(P),
                M = Ne(P) === Re,
                q = [ie, fe].indexOf(I) >= 0,
                V = q ? "width" : "height",
                H = Ze(e, {
                    placement: P,
                    boundary: c,
                    rootBoundary: m,
                    altBoundary: g,
                    padding: f
                }),
                $ = q ? M ? pe : ae : M ? fe : ie;
            p[V] > y[V] && ($ = st($));
            var j = st($),
                G = [];
            if (a && G.push(H[I] <= 0), o && G.push(H[$] <= 0, H[j] <= 0), G.every(function(se) {
                    return se
                })) {
                k = P, L = !1;
                break
            }
            A.set(P, G)
        }
        if (L)
            for (var le = u ? 3 : 1, _e = function(ce) {
                    var ge = b.find(function(Pe) {
                        var Ee = A.get(Pe);
                        if (Ee) return Ee.slice(0, ce).every(function(pt) {
                            return pt
                        })
                    });
                    if (ge) return k = ge, "break"
                }, ne = le; ne > 0; ne--) {
                var Q = _e(ne);
                if (Q === "break") break
            }
        e.placement !== k && (e.modifiersData[n]._skip = !0, e.placement = k, e.reset = !0)
    }
}
const Fa = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Ia,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function or(r, e, t) {
    return t === void 0 && (t = {
        x: 0,
        y: 0
    }), {
        top: r.top - e.height - t.y,
        right: r.right - e.width + t.x,
        bottom: r.bottom - e.height + t.y,
        left: r.left - e.width - t.x
    }
}

function lr(r) {
    return [ie, pe, fe, ae].some(function(e) {
        return r[e] >= 0
    })
}

function ja(r) {
    var e = r.state,
        t = r.name,
        n = e.rects.reference,
        i = e.rects.popper,
        a = e.modifiersData.preventOverflow,
        l = Ze(e, {
            elementContext: "reference"
        }),
        o = Ze(e, {
            altBoundary: !0
        }),
        s = or(l, n),
        f = or(o, i, a),
        c = lr(s),
        m = lr(f);
    e.modifiersData[t] = {
        referenceClippingOffsets: s,
        popperEscapeOffsets: f,
        isReferenceHidden: c,
        hasPopperEscaped: m
    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": c,
        "data-popper-escaped": m
    })
}
const Ba = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: ja
};

function Ra(r, e, t) {
    var n = we(r),
        i = [ae, ie].indexOf(n) >= 0 ? -1 : 1,
        a = typeof t == "function" ? t(Object.assign({}, e, {
            placement: r
        })) : t,
        l = a[0],
        o = a[1];
    return l = l || 0, o = (o || 0) * i, [ae, pe].indexOf(n) >= 0 ? {
        x: o,
        y: l
    } : {
        x: l,
        y: o
    }
}

function Ha(r) {
    var e = r.state,
        t = r.options,
        n = r.name,
        i = t.offset,
        a = i === void 0 ? [0, 0] : i,
        l = Tr.reduce(function(c, m) {
            return c[m] = Ra(m, e.rects, a), c
        }, {}),
        o = l[e.placement],
        s = o.x,
        f = o.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = l
}
const Wa = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Ha
};

function Na(r) {
    var e = r.state,
        t = r.name;
    e.modifiersData[t] = Wr({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
    })
}
const Ua = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Na,
    data: {}
};

function za(r) {
    return r === "x" ? "y" : "x"
}

function Xa(r) {
    var e = r.state,
        t = r.options,
        n = r.name,
        i = t.mainAxis,
        a = i === void 0 ? !0 : i,
        l = t.altAxis,
        o = l === void 0 ? !1 : l,
        s = t.boundary,
        f = t.rootBoundary,
        c = t.altBoundary,
        m = t.padding,
        g = t.tether,
        d = g === void 0 ? !0 : g,
        u = t.tetherOffset,
        v = u === void 0 ? 0 : u,
        h = Ze(e, {
            boundary: s,
            rootBoundary: f,
            padding: m,
            altBoundary: c
        }),
        w = we(e.placement),
        E = Ne(e.placement),
        C = !E,
        b = St(w),
        p = za(b),
        y = e.modifiersData.popperOffsets,
        A = e.rects.reference,
        L = e.rects.popper,
        k = typeof v == "function" ? v(Object.assign({}, e.rects, {
            placement: e.placement
        })) : v,
        S = typeof k == "number" ? {
            mainAxis: k,
            altAxis: k
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, k),
        P = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        I = {
            x: 0,
            y: 0
        };
    if (y) {
        if (a) {
            var M, q = b === "y" ? ie : ae,
                V = b === "y" ? fe : pe,
                H = b === "y" ? "height" : "width",
                $ = y[b],
                j = $ + h[q],
                G = $ - h[V],
                le = d ? -L[H] / 2 : 0,
                _e = E === Re ? A[H] : L[H],
                ne = E === Re ? -L[H] : -A[H],
                Q = e.elements.arrow,
                se = d && Q ? Mt(Q) : {
                    width: 0,
                    height: 0
                },
                ce = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : jr(),
                ge = ce[q],
                Pe = ce[V],
                Ee = Ve(0, A[H], se[H]),
                pt = C ? A[H] / 2 - le - Ee - ge - S.mainAxis : _e - Ee - ge - S.mainAxis,
                Vr = C ? -A[H] / 2 + le + Ee + Pe + S.mainAxis : ne + Ee + Pe + S.mainAxis,
                ht = e.elements.arrow && rt(e.elements.arrow),
                Gr = ht ? b === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0,
                jt = (M = P == null ? void 0 : P[b]) != null ? M : 0,
                qr = $ + pt - jt - Gr,
                Yr = $ + Vr - jt,
                Bt = Ve(d ? lt(j, qr) : j, $, d ? Ie(G, Yr) : G);
            y[b] = Bt, I[b] = Bt - $
        }
        if (o) {
            var Rt, Kr = b === "x" ? ie : ae,
                Zr = b === "x" ? fe : pe,
                Se = y[p],
                nt = p === "y" ? "height" : "width",
                Ht = Se + h[Kr],
                Wt = Se - h[Zr],
                gt = [ie, ae].indexOf(w) !== -1,
                Nt = (Rt = P == null ? void 0 : P[p]) != null ? Rt : 0,
                Ut = gt ? Ht : Se - A[nt] - L[nt] - Nt + S.altAxis,
                zt = gt ? Se + A[nt] + L[nt] - Nt - S.altAxis : Wt,
                Xt = d && gt ? ha(Ut, Se, zt) : Ve(d ? Ut : Ht, Se, d ? zt : Wt);
            y[p] = Xt, I[p] = Xt - Se
        }
        e.modifiersData[n] = I
    }
}
const Va = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Xa,
    requiresIfExists: ["offset"]
};

function Ga(r) {
    return {
        scrollLeft: r.scrollLeft,
        scrollTop: r.scrollTop
    }
}

function qa(r) {
    return r === oe(r) || !ue(r) ? Tt(r) : Ga(r)
}

function Ya(r) {
    var e = r.getBoundingClientRect(),
        t = He(e.width) / r.offsetWidth || 1,
        n = He(e.height) / r.offsetHeight || 1;
    return t !== 1 || n !== 1
}

function Ka(r, e, t) {
    t === void 0 && (t = !1);
    var n = ue(e),
        i = ue(e) && Ya(e),
        a = Me(e),
        l = We(r, i, t),
        o = {
            scrollLeft: 0,
            scrollTop: 0
        },
        s = {
            x: 0,
            y: 0
        };
    return (n || !n && !t) && ((ye(e) !== "body" || Ft(a)) && (o = qa(e)), ue(e) ? (s = We(e, !0), s.x += e.clientLeft, s.y += e.clientTop) : a && (s.x = It(a))), {
        x: l.left + o.scrollLeft - s.x,
        y: l.top + o.scrollTop - s.y,
        width: l.width,
        height: l.height
    }
}

function Za(r) {
    var e = new Map,
        t = new Set,
        n = [];
    r.forEach(function(a) {
        e.set(a.name, a)
    });

    function i(a) {
        t.add(a.name);
        var l = [].concat(a.requires || [], a.requiresIfExists || []);
        l.forEach(function(o) {
            if (!t.has(o)) {
                var s = e.get(o);
                s && i(s)
            }
        }), n.push(a)
    }
    return r.forEach(function(a) {
        t.has(a.name) || i(a)
    }), n
}

function Ja(r) {
    var e = Za(r);
    return ca.reduce(function(t, n) {
        return t.concat(e.filter(function(i) {
            return i.phase === n
        }))
    }, [])
}

function Qa(r) {
    var e;
    return function() {
        return e || (e = new Promise(function(t) {
            Promise.resolve().then(function() {
                e = void 0, t(r())
            })
        })), e
    }
}

function es(r) {
    var e = r.reduce(function(t, n) {
        var i = t[n.name];
        return t[n.name] = i ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data)
        }) : n, t
    }, {});
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}
var cr = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function dr() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
    return !e.some(function(n) {
        return !(n && typeof n.getBoundingClientRect == "function")
    })
}

function ts(r) {
    r === void 0 && (r = {});
    var e = r,
        t = e.defaultModifiers,
        n = t === void 0 ? [] : t,
        i = e.defaultOptions,
        a = i === void 0 ? cr : i;
    return function(o, s, f) {
        f === void 0 && (f = a);
        var c = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, cr, a),
                modifiersData: {},
                elements: {
                    reference: o,
                    popper: s
                },
                attributes: {},
                styles: {}
            },
            m = [],
            g = !1,
            d = {
                state: c,
                setOptions: function(w) {
                    var E = typeof w == "function" ? w(c.options) : w;
                    v(), c.options = Object.assign({}, a, c.options, E), c.scrollParents = {
                        reference: Fe(o) ? Ge(o) : o.contextElement ? Ge(o.contextElement) : [],
                        popper: Ge(s)
                    };
                    var C = Ja(es([].concat(n, c.options.modifiers)));
                    return c.orderedModifiers = C.filter(function(b) {
                        return b.enabled
                    }), u(), d.update()
                },
                forceUpdate: function() {
                    if (!g) {
                        var w = c.elements,
                            E = w.reference,
                            C = w.popper;
                        if (dr(E, C)) {
                            c.rects = {
                                reference: Ka(E, rt(C), c.options.strategy === "fixed"),
                                popper: Mt(C)
                            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(S) {
                                return c.modifiersData[S.name] = Object.assign({}, S.data)
                            });
                            for (var b = 0; b < c.orderedModifiers.length; b++) {
                                if (c.reset === !0) {
                                    c.reset = !1, b = -1;
                                    continue
                                }
                                var p = c.orderedModifiers[b],
                                    y = p.fn,
                                    A = p.options,
                                    L = A === void 0 ? {} : A,
                                    k = p.name;
                                typeof y == "function" && (c = y({
                                    state: c,
                                    options: L,
                                    name: k,
                                    instance: d
                                }) || c)
                            }
                        }
                    }
                },
                update: Qa(function() {
                    return new Promise(function(h) {
                        d.forceUpdate(), h(c)
                    })
                }),
                destroy: function() {
                    v(), g = !0
                }
            };
        if (!dr(o, s)) return d;
        d.setOptions(f).then(function(h) {
            !g && f.onFirstUpdate && f.onFirstUpdate(h)
        });

        function u() {
            c.orderedModifiers.forEach(function(h) {
                var w = h.name,
                    E = h.options,
                    C = E === void 0 ? {} : E,
                    b = h.effect;
                if (typeof b == "function") {
                    var p = b({
                            state: c,
                            name: w,
                            instance: d,
                            options: C
                        }),
                        y = function() {};
                    m.push(p || y)
                }
            })
        }

        function v() {
            m.forEach(function(h) {
                return h()
            }), m = []
        }
        return d
    }
}
var rs = [ka, Ua, Ea, ua, Wa, Fa, Va, wa, Ba],
    ns = ts({
        defaultModifiers: rs
    });

function Nr(r) {
    let e = null,
        t, n, i = r;
    const a = () => {
            t !== void 0 && n !== void 0 && (e = ns(t, n, i))
        },
        l = () => {
            e !== null && (e.destroy(), e = null)
        },
        o = c => "subscribe" in c ? (s(c), {}) : (t = c, a(), {
            destroy() {
                l()
            }
        }),
        s = c => {
            const m = c.subscribe(g => {
                t === void 0 ? (t = g, a()) : (Object.assign(t, g), e == null || e.update())
            });
            At(m)
        };
    return [o, (c, m) => (n = c, i = { ...r,
        ...m
    }, a(), {
        update(g) {
            i = { ...r,
                ...g
            }, e == null || e.setOptions(i)
        },
        destroy() {
            l()
        }
    }), () => e]
}
const Be = (r, e) => {
    const t = bn(r),
        n = i => {
            r && !r.contains(i.target) && !i.defaultPrevented && e()
        };
    return t.addEventListener("click", n, !0), {
        destroy() {
            t.removeEventListener("click", n, !0)
        }
    }
};
var is = D('<div id="tooltip" role="tooltip" class="z-10"><div> </div></div>'),
    as = D("<span><!></span> <!>", 1);

function ct(r, e) {
    Y(e, !0);
    let t = N(e, "variant", 3, "dark"),
        n = N(e, "placement", 3, "auto"),
        i = N(e, "delay", 3, 500),
        a = N(e, "isDisabledForTouchDevices", 3, !0),
        l = re(null),
        o, s = re(!1);
    const [f, c] = Nr({
        placement: n()
    }), m = {
        modifiers: [{
            name: "offset",
            options: {
                offset: [0, 8]
            }
        }, {
            name: "flip",
            options: {
                altBoundary: !0
            }
        }, {
            name: "preventOverflow",
            options: {
                altAxis: !0,
                padding: {
                    right: 4,
                    left: 4
                }
            }
        }]
    }, g = () => {
        U(s, !x(s))
    }, d = () => {
        o = Le().setTimeout(() => {
            U(s, !0)
        }, i())
    }, u = () => {
        o && (Le().clearTimeout(o), o = void 0), x(s) && U(s, !1)
    };
    Je(() => {
        if (!(Oe() && a()) && x(l)) return Oe() ? x(l).addEventListener("pointerdown", g) : (x(l).addEventListener("mouseenter", d), x(l).addEventListener("mouseleave", u)), () => {
            x(l) && (x(l).removeEventListener("pointerdown", g), x(l).removeEventListener("mouseenter", d), x(l).removeEventListener("mouseleave", u))
        }
    }), At(() => {
        o && Le().clearTimeout(o)
    });
    var v = as(),
        h = J(v),
        w = O(h);
    vt(w, () => e.children), Ue(h, b => U(l, b), () => x(l)), je(h, b => f == null ? void 0 : f(b));
    var E = B(h, 2); {
        var C = b => {
            var p = is(),
                y = O(p),
                A = O(y);
            je(y, (L, k) => Be == null ? void 0 : Be(L, k), () => () => U(s, !1)), je(p, (L, k) => c == null ? void 0 : c(L, k), () => m), T(() => {
                Z(y, be(["text-white text-xs rounded-md whitespace-nowrap", `${t()}`]), "svelte-cnpsh"), ke(A, e.content)
            }), de(3, y, () => Xe, () => ({
                duration: 250,
                start: .85
            })), _(b, p)
        };
        W(E, b => {
            x(s) && b(C)
        })
    }
    _(r, v), K()
}
const ss = (r, e) => {
    const {
        privacyNoticeUrl: t
    } = dt.getOptions();
    if (t && !e.isTicketForm) {
        Le().open(t, "_blank");
        return
    }
    yn(_n.GdprAndPrivacy, {
        useStack: !0
    })
};
var os = D('<div role="link" tabindex="0" class="inline-flex text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer transition-colors"> </div>');

function ls(r, e) {
    Y(e, !0);
    var t = os();
    t.__click = [ss, e];
    var n = O(t);
    T(() => ke(n, e.label)), _(r, t), K()
}
Qe(["click"]);
var cs = te('<svg viewBox="0 0 24 24" role="presentation" class="svelte-180fvoz"><path></path></svg>');

function ds(r, e) {
    var t = cs(),
        n = O(t);
    T(() => X(n, "d", e.path)), _(r, t)
}
const vs = "M20.579 9.062a5.946 5.946 0 0 0-5.759-4.48H14v-.744A2.337 2.337 0 0 0 12 2a2.337 2.337 0 0 0-2 1.838v.744H8.871a5.946 5.946 0 0 0-5.759 4.48C1.761 9.157 1 10 1 11.646v5.206a2.527 2.527 0 0 0 2.294 2.6 2.549 2.549 0 0 0 .827-.147 5.934 5.934 0 0 0 4.75 2.378h5.949a5.933 5.933 0 0 0 4.75-2.378 2.549 2.549 0 0 0 .827.147 2.6 2.6 0 0 0 2.6-2.6v-5.206a2.6 2.6 0 0 0-2.418-2.584zM10.358 16.48a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0zm5.949 0a1.487 1.487 0 1 1-2.974 0v-1.487a1.487 1.487 0 1 1 2.974 0z";

function us(r) {
    ds(r, {
        path: vs
    })
}
var fs = te('<svg><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>');

function ps(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = fs();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var hs = D("<div><!></div>"),
    gs = D('<div class="absolute top-3.7 left-3.7 inline-block p-0.8 rounded-full bg-slate-100 text-primary"><!></div>'),
    ms = D('<img alt="Agent avatar"> <!>', 1),
    xs = D("<div><!></div>");

function vr(r, e) {
    Y(e, !0);
    let t = N(e, "size", 3, "md"),
        n = N(e, "isEmailType", 3, !1),
        i = N(e, "isBot", 3, !1),
        a = z(() => Mi(e.avatar));
    var l = xs(),
        o = O(l); {
        var s = c => {
                var m = hs(),
                    g = O(m);
                us(g), T(() => Z(m, be(["flex-center bg-slate-300 text-white rounded-full", t() === "sm" && "w-6 h-6 text-sm", t() === "md" && "w-8 h-8 text-lg", t() === "lg" && "w-11 h-11 text-2xl"]), "")), _(c, m)
            },
            f = c => {
                var m = ms(),
                    g = J(m),
                    d = B(g, 2); {
                    var u = v => {
                        var h = gs();
                        const w = z(() => ps);
                        var E = O(h);
                        Ct(E, () => x(w), (C, b) => {
                            b(C, {
                                class: "w-2.5 h-2.5 text-primary"
                            })
                        }), _(v, h)
                    };
                    W(d, v => {
                        n() && v(u)
                    })
                }
                T(() => {
                    X(g, "src", x(a)), X(g, "data-testid", ee.avatarAgent), Z(g, be(["rounded-full", t() === "sm" && "w-6 h-6", t() === "md" && "w-8 h-8", t() === "lg" && "w-11 h-11"]), "")
                }), _(c, m)
            };
        W(o, c => {
            !e.avatar && i() ? c(s) : c(f, !1)
        })
    }
    _(r, l), K()
}
const ws = Pt([kn, yr, On], ([r, e, t], n) => {
        var l;
        const i = En(r),
            a = (l = i == null ? void 0 : i.trigger) == null ? void 0 : l.identityId;
        t === Cn.ChatStatus.Served ? n(null) : (i == null ? void 0 : i.subType) === br.MessageSubType.Bot && a && e[a] && n(e[a])
    }),
    Wo = r => Pt([yr], ([e]) => e[r] ? ? null);
var bs = D('<!> <div class="flex items-left -mt-3 pb-1"><!></div>', 1),
    ys = D("<div><!></div>");

function No(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(et, "$t", t);
    let i = N(e, "replaceText", 3, ""),
        a = N(e, "clamp", 19, () => dt.getOptions().urlCardsEnabled),
        l = N(e, "shouldSendLinkOpenedEvent", 3, !1);
    const o = e.text.match(Yt);
    let s;
    const f = async u => {
        const v = u.target.closest("a");
        v && s.contains(v) && l() && await _r(v.href)
    };
    Je(() => {
        s && (s.addEventListener("click", u => void f(u)), s.addEventListener("auxclick", u => {
            u.button !== 2 && f(u)
        }), s.addEventListener("contextmenu", u => void f(u)))
    }), At(() => {
        s && (s.removeEventListener("click", u => void f(u)), s.removeEventListener("auxclick", u => void f(u)), s.removeEventListener("contextmenu", u => void f(u)))
    });
    var c = ys(),
        m = O(c); {
        var g = u => {
                var v = bs(),
                    h = J(v);
                tr(h, () => An(e.text.replace(Yt, "")));
                var w = B(h, 2),
                    E = O(w),
                    C = z(() => n()("topBar.gdprTitle"));
                ls(E, {
                    get label() {
                        return x(C)
                    }
                }), _(u, v)
            },
            d = u => {
                var v = ve(),
                    h = J(v);
                tr(h, () => Pn(e.text, {
                    replaceText: i(),
                    clamp: a()
                })), _(u, v)
            };
        W(m, u => {
            o ? u(g) : u(d, !1)
        })
    }
    Ue(c, u => s = u, () => s), _(r, c), K()
}
var _s = te('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"></path></svg>');

function Es(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = _s();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Cs = te('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></path></svg>');

function ks(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Cs();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
const bt = Dn(!1),
    ur = 16;
class Os {
    constructor(e) {
        F(this, "config");
        F(this, "selector");
        F(this, "selectorWidth");
        F(this, "innerElements");
        F(this, "currentSlide");
        F(this, "perPage", 0);
        F(this, "sliderFrame", document.createElement("div"));
        F(this, "pointerDown", !1);
        F(this, "drag");
        F(this, "mergeSettings", e => ({ ...{
                selector: ".carousel",
                easing: "ease-out",
                perPage: 1,
                startIndex: 0,
                draggable: !0,
                multipleDrag: !0,
                threshold: 20,
                rtl: !1,
                onInit: () => {},
                onChange: () => {}
            },
            ...e
        }));
        F(this, "attachEvents", () => {
            this.selector && this.config.draggable && (this.pointerDown = !1, this.drag = {
                startX: 0,
                endX: 0,
                startY: 0,
                letItGo: null,
                preventClick: !1
            }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler))
        });
        F(this, "detachEvents", () => {
            this.selector && (this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler))
        });
        F(this, "init", () => {
            this.selector && (this.attachEvents(), this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this))
        });
        F(this, "buildSliderFrame", () => {
            if (!this.selector) return;
            const e = this.selectorWidth / this.perPage;
            this.sliderFrame.style.width = `${e*this.innerElements.length}px`, this.sliderFrame.style.display = "flex", this.sliderFrame.style.gap = `${ur}px`, this.enableTransition(), this.sliderFrame.setAttribute("data-testid", ee.productCardCarousel), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            const t = document.createDocumentFragment();
            for (let n = 0; n < this.innerElements.length; n++) {
                const i = this.buildSliderFrameItem(this.innerElements[n]);
                t.appendChild(i)
            }
            this.sliderFrame.appendChild(t), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent()
        });
        F(this, "buildSliderFrameItem", e => {
            const t = document.createElement("div");
            return t.style.display = "flex", t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = `${100/this.innerElements.length}%`, t.appendChild(e), t
        });
        F(this, "resolveSlidesNumber", () => {
            if (typeof this.config.perPage == "number") this.perPage = this.config.perPage;
            else if (typeof this.config.perPage == "object") {
                this.perPage = 1;
                for (const e in this.config.perPage) window.innerWidth >= parseInt(e) && (this.perPage = this.config.perPage[e])
            }
        });
        F(this, "prev", (e = 1, t) => {
            if (this.innerElements.length <= this.perPage) return;
            const n = this.currentSlide;
            this.currentSlide = Math.max(this.currentSlide - e, 0), n !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
        });
        F(this, "next", (e = 1, t) => {
            if (this.innerElements.length <= this.perPage) return;
            const n = this.currentSlide;
            this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), n !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
        });
        F(this, "disableTransition", () => {
            this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`
        });
        F(this, "enableTransition", () => {
            this.sliderFrame.style.transition = `all 200ms ${this.config.easing}`
        });
        F(this, "goTo", (e, t) => {
            if (this.innerElements.length <= this.perPage) return;
            const n = this.currentSlide;
            this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), n !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
        });
        F(this, "slideToCurrent", e => {
            const t = (this.config.rtl ? 1 : -1) * this.currentSlide * (this.selectorWidth / this.perPage + ur / this.perPage);
            e ? requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.enableTransition(), this.sliderFrame.style.transform = `translate3d(${t}px, 0, 0)`
                })
            }) : this.sliderFrame.style.transform = `translate3d(${t}px, 0, 0)`
        });
        F(this, "updateAfterDrag", () => {
            if (!this.drag) return;
            const e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                t = Math.abs(e),
                n = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                i = e > 0 && this.currentSlide - n < 0,
                a = e < 0 && this.currentSlide + n > this.innerElements.length - this.perPage;
            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(n) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(n), this.slideToCurrent(i || a)
        });
        F(this, "clearDrag", () => {
            var e;
            this.drag = {
                startX: 0,
                endX: 0,
                startY: 0,
                letItGo: null,
                preventClick: ((e = this.drag) == null ? void 0 : e.preventClick) || !1
            }
        });
        F(this, "touchstartHandler", e => {
            var n;
            ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf((n = e.target) == null ? void 0 : n.nodeName) === -1 && (e.stopPropagation(), this.pointerDown = !0, this.drag && (this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY))
        });
        F(this, "touchendHandler", e => {
            var t;
            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), (t = this.drag) != null && t.endX && this.updateAfterDrag(), this.clearDrag()
        });
        F(this, "touchmoveHandler", e => {
            if (e.stopPropagation(), !!this.drag && (this.drag.letItGo === null && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo)) {
                e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`, this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
                const t = this.currentSlide * (this.selectorWidth / this.perPage),
                    n = this.drag.endX - this.drag.startX,
                    i = this.config.rtl ? t + n : t - n;
                this.sliderFrame.style.transform = `translate3d(${(this.config.rtl?1:-1)*i}px, 0, 0)`
            }
        });
        F(this, "mousedownHandler", e => {
            var n;
            ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf((n = e.target) == null ? void 0 : n.nodeName) === -1 && (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag && (this.drag.startX = e.pageX))
        });
        F(this, "mouseupHandler", e => {
            var t;
            this.selector && (e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), (t = this.drag) != null && t.endX && this.updateAfterDrag(), this.clearDrag())
        });
        F(this, "mousemoveHandler", e => {
            if (this.selector && (e.preventDefault(), this.pointerDown && this.drag)) {
                bt.set(!0), this.drag.preventClick = !0, this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`, this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
                const t = this.currentSlide * (this.selectorWidth / this.perPage),
                    n = this.drag.endX - this.drag.startX,
                    i = this.config.rtl ? t + n : t - n;
                this.sliderFrame.style.transform = `translate3d(${(this.config.rtl?1:-1)*i}px, 0, 0)`
            }
        });
        F(this, "mouseleaveHandler", e => {
            this.pointerDown && this.selector && this.drag && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag())
        });
        F(this, "clickHandler", e => {
            this.drag && (this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1, bt.set(!1))
        });
        F(this, "remove", (e, t) => {
            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
            const n = e < this.currentSlide,
                i = this.currentSlide + this.perPage - 1 === e;
            (n || i) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this)
        });
        F(this, "insert", (e, t, n) => {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
            if (this.innerElements.indexOf(e) !== -1) throw new Error("The same item in a carousel? Really? Nope 😭");
            const i = t <= this.currentSlide && this.currentSlide > 0 && this.innerElements.length;
            this.currentSlide = i ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), n && n.call(this)
        });
        F(this, "prepend", (e, t) => {
            this.insert(e, 0), t && t.call(this)
        });
        F(this, "append", (e, t) => {
            this.insert(e, this.innerElements.length + 1), t && t.call(this)
        });
        F(this, "destroy", (e = !1, t) => {
            if (this.selector) {
                if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
                    const n = document.createDocumentFragment();
                    for (let i = 0; i < this.innerElements.length; i++) n.appendChild(this.innerElements[i]);
                    this.selector.innerHTML = "", this.selector.appendChild(n), this.selector.removeAttribute("style")
                }
                t && t.call(this)
            }
        });
        if (this.config = this.mergeSettings(e), this.selector = typeof this.config.selector == "string" ? document.querySelector(this.config.selector) : this.config.selector, !this.selector) throw new Error("Something wrong with your selector 😭");
        this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.init()
    }
}
var As = D('<div class="button right svelte-yegdx6"><!></div>'),
    Ps = D('<div class="button left svelte-yegdx6"><!></div>'),
    Ds = D("<!> <!>", 1),
    Ls = D('<div class="carousel svelte-yegdx6"><div><!></div> <!></div>');

function Uo(r, e) {
    Y(e, !0);
    let t = N(e, "perPage", 3, 1),
        n = N(e, "easing", 3, "ease-out"),
        i = N(e, "startIndex", 3, 0),
        a = N(e, "draggable", 3, !0),
        l = N(e, "multipleDrag", 3, !0),
        o = N(e, "controls", 3, !0),
        s = N(e, "threshold", 3, 20),
        f = N(e, "rtl", 3, !1),
        c = N(e, "maxHeight", 3, "max-h-86"),
        m = N(e, "controlsTop", 3, "9rem"),
        g, d = re(void 0),
        u = re(!1),
        v = re(!0),
        h = z(() => x(d) ? x(d).innerElements : []);
    Je(() => (U(d, $e(new Os({
        selector: g,
        perPage: typeof t() == "object" ? t() : Number(t()),
        easing: n(),
        startIndex: i(),
        draggable: a(),
        multipleDrag: l(),
        threshold: s(),
        rtl: f(),
        onChange: C
    }))), () => {
        var k;
        (k = x(d)) == null || k.destroy()
    }));
    const w = () => {
            var k;
            (k = x(d)) == null || k.prev()
        },
        E = () => {
            var k;
            (k = x(d)) == null || k.next()
        },
        C = () => {
            x(d) && e.onChange && e.onChange({
                currentSlide: x(d).currentSlide,
                slideCount: x(d).innerElements.length
            }), U(u, $e(x(d) ? x(d).currentSlide === x(h).length - t() : !1)), U(v, $e(x(h) && x(d) ? x(d).currentSlide === 0 : !1))
        };
    var b = Ls(),
        p = O(b),
        y = O(p);
    vt(y, () => e.children ? ? Ot), Ue(p, k => g = k, () => g);
    var A = B(p, 2); {
        var L = k => {
            var S = Ds(),
                P = J(S); {
                var I = V => {
                    var H = As(),
                        $ = O(H);
                    Te($, {
                        icon: ks,
                        iconDescription: "right",
                        variant: "primary",
                        onClick: E,
                        size: "md"
                    }), T(() => {
                        X(H, "style", `top: ${m()}`), X(H, "data-testid", ee.productCardArrowRight)
                    }), _(V, H)
                };
                W(P, V => {
                    x(u) || V(I)
                })
            }
            var M = B(P, 2); {
                var q = V => {
                    var H = Ps(),
                        $ = O(H);
                    Te($, {
                        icon: Es,
                        iconDescription: "left",
                        variant: "primary",
                        onClick: w,
                        size: "md"
                    }), T(() => {
                        X(H, "style", `top: ${m()}`), X(H, "data-testid", ee.productCardArrowLeft)
                    }), _(V, H)
                };
                W(M, V => {
                    x(v) || V(q)
                })
            }
            _(k, S)
        };
        W(A, k => {
            o() && x(h).length > t() && k(L)
        })
    }
    T(() => Z(p, `${`slides ${c()} `??""} svelte-yegdx6`)), _(r, b), K()
}
var $s = te('<svg><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>');

function Ms(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = $s();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Ss = te('<svg width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"><g id="Group_8106" transform="matrix(1,0,0,1,-1995,-413)"><g id="Ellipse_1220" transform="matrix(1,0,0,1,1995,413)"><circle cx="12" cy="12" r="12" style="fill:rgb(148,163,184);fill-opacity:0.2;"></circle></g><g id="Ellipse_1221" transform="matrix(1,0,0,1,2000,418)"><circle cx="7" cy="7" r="7" style="fill:rgb(148,163,184);fill-opacity:0.5;"></circle></g><g transform="matrix(0.999984,0.00569827,-0.00569827,0.999984,1995.08,412.847)"><g id="Path_7134"><path d="M12,16L12,12" style="fill:none;fill-rule:nonzero;stroke:white;stroke-width:2px;"></path></g></g><g id="Path_7135" transform="matrix(1,0,0,1,1995,413.8)"><path d="M12,8L12.01,8" style="fill:none;fill-rule:nonzero;stroke:white;stroke-width:2px;"></path></g></g></svg>');

function Ts(r) {
    var e = Ss();
    _(r, e)
}
const Is = (r, e) => {
        Oe() || U(e, !0)
    },
    Fs = async (r, e, t, n) => {
        var l;
        if (e()) return;
        const i = Le().location.hostname,
            a = i.length > 0 && t.includes(i) ? "_parent" : "_blank";
        $n(t), window.open(t, a), ((l = x(n).trigger) == null ? void 0 : l.groupType) === br.GroupType.ai && await _r(t)
    };
var js = r => r.stopPropagation(),
    Bs = D('<img class="object-cover rounded-t-6 w-full h-full">'),
    Rs = D("<!> ", 1),
    Hs = D("<div></div>"),
    Ws = D("<p> </p>"),
    Ns = D("<div></div>"),
    Us = D('<div style="box-shadow: rgba(0, 0, 0, 0.05) 2px -2px 16px;"><div><!> <div class="absolute w-7 h-7 bottom-3 right-3"><!></div> <!></div> <div><p> </p> <!></div> <!></div>');

function zo(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(x(l), "$context", t),
        i = () => R(bt, "$isDraging", t),
        a = () => R(et, "$t", t);
    let l = z(() => Mn(Sn)),
        o = z(() => n().message),
        s = N(e, "isCompact", 3, !1),
        f = N(e, "fullWidth", 3, !1),
        c;
    const m = Ln(e.card.actions);
    let g = re(!1);
    const d = () => {
            U(g, !1)
        },
        u = $ => {
            $.stopPropagation(), $.preventDefault(), Oe() && (c && clearTimeout(c), U(g, !0), c = setTimeout(() => U(g, !1), 5e3))
        };
    var v = Us();
    const h = z(() => `flex flex-col ${f()?"w-full":"w-56"} rounded-6 border-slate-200 border-1 bg-slate-100 self-stretch ${Oe()?"":"cursor-pointer"}`);
    v.__click = [Fs, i, m, o], v.__pointerdown = [js];
    var w = O(v),
        E = O(w); {
        var C = $ => {
                var j = Bs();
                T(() => {
                    X(j, "src", e.card.image), X(j, "alt", e.card.title)
                }), _($, j)
            },
            b = $ => {
                var j = Rs(),
                    G = J(j);
                Ms(G, {
                    width: "2rem",
                    height: "2rem",
                    class: "text-primary-button mb-2"
                });
                var le = B(G);
                T(() => ke(le, ` ${a()("card.noPreviewTitle")??""}`)), _($, j)
            };
        W(E, $ => {
            e.card.image ? $(C) : $(b, !1)
        })
    }
    var p = B(E, 2);
    const y = z(() => `transition: scale 200ms; ${!Oe()&&x(g)?"scale: 1.2":"scale: 1.0"};`);
    p.__mouseover = [Is, g], p.__click = u;
    var A = O(p);
    Ts(A);
    var L = B(p, 2); {
        var k = $ => {
            var j = Hs();
            j.textContent = m, T(() => Z(j, `absolute ${s()?"top-30":"top-40"} rounded-2 right-2 w-52 text-xs p-1 text-white bg-slate-400 z-100 break-words overflow-hidden line-clamp-5`)), de(5, j, () => Kt, () => ({
                delay: 500,
                duration: 250
            })), de(6, j, () => Kt, () => ({
                duration: 250
            })), _($, j)
        };
        W(L, $ => {
            x(g) && $(k)
        })
    }
    var S = B(w, 2);
    Z(S, "font-200 mx-3 mt-3 grow");
    var P = O(S),
        I = O(P),
        M = B(P, 2); {
        var q = $ => {
            var j = Ws();
            Z(j, "text-xs line-clamp-3");
            var G = O(j);
            T(() => {
                X(j, "data-testid", ee.productCardDescription), ke(G, e.card.description)
            }), _($, j)
        };
        W(M, $ => {
            s() || $(q)
        })
    }
    var V = B(S, 2); {
        var H = $ => {
            var j = Ns();
            Z(j, "m-3 mt-2"), ut(j, 21, () => e.card.actions, Ai, (G, le) => {
                Zi(G, {
                    variant: "primary",
                    size: "sm",
                    isBlock: !0,
                    get testId() {
                        return ee.productCardButton
                    },
                    children: (_e, ne) => {
                        var Q = wr();
                        T(() => ke(Q, a()(x(le).title))), _(_e, Q)
                    },
                    $$slots: {
                        default: !0
                    }
                })
            }), _($, j)
        };
        W(V, $ => {
            s() || $(H)
        })
    }
    T(() => {
        Z(v, x(h)), X(v, "data-testid", ee.productCard), Z(w, `flex relative text-slate-500 ${s()?"h-30":"h-40"} w-full rounded-t-6	bg-white ${e.card.image?"":"flex-col text-sm font-light items-center justify-center"}`), X(w, "data-testid", ee.productCardImage), X(p, "style", x(y)), X(p, "data-testid", ee.productCardInfo), Z(P, be(["text-sm font-500 mb-2", s() ? "line-clamp-1" : "line-clamp-2", "break-words", s() && "overflow-hidden text-ellipsis"]), ""), X(P, "data-testid", ee.productCardTitle), ke(I, e.card.title || m)
    }), Er("mouseleave", p, d), _(r, v), K()
}
Qe(["click", "pointerdown", "mouseover"]);
var zs = D('<div class="message-content-text svelte-ctlsw6"><!></div>');

function Xo(r, e) {
    Y(e, !0);
    var t = zs(),
        n = O(t);
    vt(n, () => e.children ? ? Ot), _(r, t), K()
}
const Xs = {
        id: "",
        avatar: "",
        description: "",
        disabled: !1,
        fullname: "",
        groups: [],
        status: "online"
    },
    Vs = Pt([Tn, In, Fn, Cr], ([r, e, t, n]) => t.length > 0 ? [...t].reverse() : n ? e.length === 0 ? [Xs] : e : r);
var Gs = D("<div><!></div>"),
    qs = D("<div><!></div>"),
    Ys = D('<div class="group flex-center flex-shrink-0"><!></div>');

function Vo(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(Vs, "$groupedAgents", t),
        i = () => R(ws, "$messageWithBotIdentity", t);
    let a = N(e, "size", 3, "md");
    const l = 3,
        o = z(() => n().length > 0 ? n().slice(0, l) : []);
    var s = Ys(),
        f = O(s); {
        var c = g => {
                var d = Gs(),
                    u = O(d);
                vr(u, {
                    get avatar() {
                        return i().avatarUrl
                    },
                    get size() {
                        return a()
                    },
                    isBot: !0
                }), T(() => Z(d, `${`avatar-group-item avatar-${a()} transition-padding-400`??""} svelte-sm867b`)), de(5, d, () => ot, () => ({
                    duration: 300,
                    x: -10
                })), _(g, d)
            },
            m = g => {
                var d = ve(),
                    u = J(d);
                ut(u, 19, () => x(o), ({
                    id: v,
                    avatar: h
                }) => v, (v, h, w) => {
                    let E = () => x(h).avatar;
                    var C = qs();
                    const b = z(() => be(["avatar-group-item", `avatar-${a()}`, "transition-padding-400", !Oe() && "group-hover:not-first:pl-4"]));
                    var p = O(C);
                    vr(p, {
                        get avatar() {
                            return E()
                        },
                        get size() {
                            return a()
                        }
                    }), T(() => Z(C, x(b), "svelte-sm867b")), de(5, C, () => ot, () => ({
                        duration: x(w) * 300,
                        x: -10
                    })), _(v, C)
                }), _(g, d)
            };
        W(f, g => {
            i() ? g(c) : g(m, !1)
        })
    }
    T(() => X(s, "data-testid", ee.avatarGroup)), _(r, s), K()
}
var Ks = te('<svg><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15h6m-3-3v6"></path></g></svg>');

function Zs(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Ks();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Js = te('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>');

function Ur(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Js();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Qs = te('<svg><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></g></svg>');

function eo(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = Qs();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var to = D('<div class="flex flex-col items-center justify-center w-[50px] h-[50px] bg-slate-300 rounded-xl"><!> <span class="text-xs text-slate-400"> </span></div>');

function zr(r, e) {
    Y(e, !0);
    var t = to(),
        n = O(t);
    eo(n, {
        class: "text-sm text-slate-400"
    });
    var i = B(n, 2),
        a = O(i);
    T(() => ke(a, jn(e.file.name))), T(() => X(t, "data-testid", ee.textareaPreviewFile)), _(r, t), K()
}
var ro = D('<div class="w-full h-full rounded-xl overflow-hidden content-center"><img class="m-auto"></div>');

function no(r, e) {
    Y(e, !0);
    let t = re(void 0);
    qe(() => {
        const l = Ye.find(e.file.name);
        l && U(t, $e(l))
    });
    var n = ve(),
        i = J(n); {
        var a = l => {
            var o = ve(),
                s = J(o); {
                var f = m => {
                        var g = ro(),
                            d = O(g);
                        T(() => {
                            X(g, "data-testid", ee.textareaPreviewImage), X(d, "src", x(t).preview.data), X(d, "alt", e.file.name)
                        }), _(m, g)
                    },
                    c = m => {
                        zr(m, {
                            get file() {
                                return e.file
                            }
                        })
                    };
                W(s, m => {
                    var g, d;
                    (d = (g = x(t)) == null ? void 0 : g.preview) != null && d.data ? m(f) : m(c, !1)
                })
            }
            _(l, o)
        };
        W(i, l => {
            x(t) && x(t).previewState === "ready" && l(a)
        })
    }
    _(r, n), K()
}
const io = (r, e) => {
    const t = r.target;
    if (!t || !t.files) {
        Bn("No files to upload");
        return
    }
    kr([...t.files]), e(e().value = "", !0)
};
var ao = D('<input class="hidden" type="file">');

function Xr(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(Rn, "$fileUploadConfig", t);
    let i = N(e, "inputRef", 15),
        a = z(() => n().acceptedFileExtensions.map(o => `.${o}`).join(","));
    var l = ao();
    l.multiple = !0, l.__change = [io, i], Ue(l, o => i(o), () => i()), T(() => X(l, "accept", x(a))), _(r, l), K()
}
Qe(["change"]);
const so = (r, e) => {
    x(e).click()
};
var oo = D('<div class="attachmentWrapper relative w-[50px] h-[50px]"><button class="flex flex-col items-center justify-center w-[50px] h-[50px] bg-slate-200 text-md text-slate-400 rounded-xl border-none"><!></button> <!></div>'),
    lo = D('<button class="removeIcon absolute -right-[4px] -top-[4px] rounded-full bg-slate-400 text-white border-none text-sm p-1 svelte-7jjzqg"><!></button>'),
    co = D('<div class="absolute top-0 left-0 flex items-center justify-center w-full h-full rounded-lg bg-neutral-100/50 text-lg"><!></div>'),
    vo = D('<div class="attachmentWrapper relative w-[50px] h-[50px] svelte-7jjzqg"><!> <!></div>'),
    uo = D('<div class="flex flex-row gap-2 p-3 pb-0 select-none"><!> <!></div>');

function fo(r, e) {
    Y(e, !1);
    const t = he(),
        n = () => R(Ye, "$files", t),
        i = () => R(Or, "$fileUploadInProgress", t);
    let a = Un();
    Hn();
    var l = ve(),
        o = J(l); {
        var s = f => {
            var c = uo(),
                m = O(c); {
                var g = u => {
                    var v = oo(),
                        h = O(v);
                    h.__click = [so, a];
                    var w = O(h);
                    Zs(w, {});
                    var E = B(h, 2);
                    Xr(E, {
                        get inputRef() {
                            return x(a)
                        },
                        set inputRef(C) {
                            U(a, C)
                        },
                        $$legacy: !0
                    }), _(u, v)
                };
                W(m, u => {
                    n().length < Wn && u(g)
                })
            }
            var d = B(m, 2);
            ut(d, 3, n, ({
                file: u,
                uploadStatus: v
            }, h) => `${h}-${u.name}`, (u, v) => {
                let h = () => x(v).file,
                    w = () => x(v).uploadStatus;
                var E = vo(),
                    C = O(E);
                ct(C, {
                    get content() {
                        return h().name
                    },
                    placement: "top",
                    variant: "dark",
                    children: (A, L) => {
                        var k = ve(),
                            S = J(k); {
                            var P = M => {
                                    no(M, {
                                        get file() {
                                            return h()
                                        }
                                    })
                                },
                                I = M => {
                                    zr(M, {
                                        get file() {
                                            return h()
                                        }
                                    })
                                };
                            W(S, M => {
                                Nn(h().type) ? M(P) : M(I, !1)
                            })
                        }
                        _(A, k)
                    },
                    $$slots: {
                        default: !0
                    }
                });
                var b = B(C, 2); {
                    var p = A => {
                            var L = lo();
                            L.__click = () => Ye.remove(h());
                            var k = O(L);
                            xr(k, {}), _(A, L)
                        },
                        y = A => {
                            var L = ve(),
                                k = J(L); {
                                var S = P => {
                                    var I = co(),
                                        M = O(I);
                                    Ur(M, {
                                        color: "white",
                                        class: "animate-spin"
                                    }), _(P, I)
                                };
                                W(k, P => {
                                    w() === "in-progress" && P(S)
                                }, !0)
                            }
                            _(A, L)
                        };
                    W(b, A => {
                        i() ? A(y, !1) : A(p)
                    })
                }
                _(u, E)
            }), _(f, c)
        };
        W(o, f => {
            n().length > 0 && f(s)
        })
    }
    _(r, l), K()
}
Qe(["click"]);
const po = (r, e) => {
    const {
        key: t
    } = r;
    t === Si.Enter && !r.shiftKey && !Oe() && (r.preventDefault(), e.onKeyEnter())
};
var ho = D('<div><textarea rows="1"></textarea></div>');

function go(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(et, "$t", t),
        i = () => R(Dt, "$isMessengerFrameOpen", t),
        a = () => R(Ar, "$isDesktop", t),
        l = () => R(Pr, "$messengerInputValue", t);
    let o = N(e, "textareaRef", 15, null),
        s = N(e, "resizable", 3, !0);
    const f = () => o() ? o().parentNode : null,
        c = E => {
            const C = f();
            C && (C.dataset.textareaValue = E)
        },
        m = () => {
            const E = f();
            E && qn.set(E.clientHeight)
        },
        g = E => {
            const C = E.target;
            C.value = C.value.substring(0, mt), Xn(C.value), c(C.value), m(), v(), C.value.length === mt && Vn(n()("warningBar.maxLength"))
        },
        d = E => {
            var b;
            const C = (b = E.clipboardData) == null ? void 0 : b.files;
            !C || C.length === 0 || !i() || (E.preventDefault(), kr([...C]))
        },
        u = Dr(() => {
            Yn()
        }, 3e3),
        v = () => {
            Gn(), u()
        };
    qe(() => {
        o() && a() && o().focus()
    }), qe(() => {
        o() && c(l())
    });
    var h = ho(),
        w = O(h);
    T(() => X(w, "placeholder", n()("chatInput.placeholder"))), w.disabled = !Cr, X(w, "maxlength", mt), w.__input = g, w.__keydown = [po, e], Ue(w, E => o(E), () => o()), T(() => {
        Z(h, be(["textarea-container text-base-input", a() && "text-sm", s() && "textarea-container-resizable"]), "svelte-18b1tx"), Z(w, be(["bg-transparent resize-none overflow-hidden focus:outline-none", !s() && "truncate whitespace-pre"]), "svelte-18b1tx"), zn(w, l()), X(w, "data-testid", ee.textarea)
    }), Er("paste", w, d), _(r, h), K()
}
Qe(["input", "keydown"]);
var mo = te('<svg><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>');

function xo(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = mo();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var wo = D('<div class="flex flex-col space-y-4 p-4"><!> <div class="space-y-2"><!> <!> <!></div> <div class="space-y-2"><!> <!> <!> <!></div> <div class="flex space-x-2"><div class="flex-shrink-0"><!></div> <!></div></div>'),
    bo = D('<div class="h-full bg-white rounded-xl" style="box-shadow: rgb(0 0 0 / 12%) 0px 1px 15px 1px;"><!> <div></div></div>');

function yo(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(kt, "$isMobileDevice", t);
    let i = re(void 0),
        a = re(!0),
        l = n() ? 7 : 9,
        o = n() ? "none" : "bottom",
        s = n() ? "none" : "sticky";
    const f = [ei, ti, ri, ni, ii, ai, si, oi, li, ci, di, vi, ui, fi],
        c = () => {
            const v = Zn();
            return f.includes(v) ? v : Jn
        };
    Je(async () => {
        var b;
        const {
            Picker: v
        } = await Kn(async () => {
                const {
                    Picker: p
                } = await
                import ("./module-evC7HAOT.js");
                return {
                    Picker: p
                }
            }, [],
            import.meta.url), w = await (async () => (await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json())(), E = p => {
            e.onEmojiClick(p.native)
        }, C = new v({
            data: w,
            onEmojiSelect: E,
            previewPosition: o,
            searchPosition: s,
            navPosition: "bottom",
            perLine: l,
            theme: "light",
            locale: c()
        });
        C.setAttribute("data-testid", "emojiWrapper"), (b = x(i)) == null || b.appendChild(C), U(a, !1)
    });
    var m = bo(),
        g = O(m); {
        var d = v => {
            var h = wo(),
                w = O(h);
            Ce(w, {
                height: 30
            });
            var E = B(w, 2),
                C = O(E);
            Ce(C, {
                colorScheme: "darkGray",
                width: "40%"
            });
            var b = B(C, 2);
            Ce(b, {
                height: 30
            });
            var p = B(b, 2);
            Ce(p, {
                height: 30
            });
            var y = B(E, 2),
                A = O(y);
            Ce(A, {
                colorScheme: "darkGray",
                width: "40%"
            });
            var L = B(A, 2);
            Ce(L, {
                height: 30
            });
            var k = B(L, 2);
            Ce(k, {
                height: 30
            });
            var S = B(k, 2);
            Ce(S, {
                height: 30
            });
            var P = B(y, 2),
                I = O(P),
                M = O(I);
            Qn(M, {
                size: 40
            });
            var q = B(I, 2);
            Ce(q, {
                height: 40
            }), _(v, h)
        };
        W(g, v => {
            x(a) && v(d)
        })
    }
    var u = B(g, 2);
    Ue(u, v => U(i, v), () => x(i)), T(() => Z(u, be({
        hidden: x(a)
    }), "svelte-13bs878")), _(r, m), K()
}
var _o = D('<div id="tooltip" role="tooltip" class="z-10"><div><!></div></div>'),
    Eo = D("<div><div><!></div> <!></div>");

function Co(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(Ar, "$isDesktop", t),
        i = () => R(et, "$t", t),
        a = () => R(kt, "$isMobileDevice", t);
    let l = re(!1),
        o = 0;
    const [s, f] = Nr({
        placement: "top-start"
    }), c = {
        modifiers: [{
            name: "offset",
            options: {
                offset: [0, 12]
            }
        }, {
            name: "preventOverflow",
            options: {
                padding: {
                    right: 4,
                    left: 4
                }
            }
        }]
    }, m = () => {
        var p;
        U(l, !0), o = ((p = e.textareaRef) == null ? void 0 : p.selectionStart) ? ? 0
    }, g = () => {
        x(l) && U(l, !1)
    }, d = p => {
        p.stopPropagation(), x(l) ? g() : m()
    }, u = async p => {
        var y, A;
        pi(p, o), o = o + p.length, await hi(), gi() || (y = e.textareaRef) == null || y.setSelectionRange(o, o), n() && (g(), (A = e.textareaRef) == null || A.focus())
    };
    var v = Eo(),
        h = O(v),
        w = O(h),
        E = z(() => i()("tooltip.emoji"));
    ct(w, {
        get content() {
            return x(E)
        },
        placement: "bottom",
        delay: 1e3,
        children: (p, y) => {
            Te(p, {
                icon: xo,
                iconDescription: "Emoji picker",
                onClick: d,
                get testId() {
                    return ee.buttonEmoji
                }
            })
        },
        $$slots: {
            default: !0
        }
    }), je(h, p => s == null ? void 0 : s(p));
    var C = B(h, 2); {
        var b = p => {
            var y = _o(),
                A = O(y),
                L = O(A);
            yo(L, {
                onEmojiClick: u
            }), je(y, (k, S) => f == null ? void 0 : f(k, S), () => c), T(() => Z(A, be(["h-400px max-h-80vh", a() ? "w-280px" : "w-355px"]), "")), de(3, A, () => ot, () => ({
                duration: 250,
                y: 10
            })), _(p, y)
        };
        W(C, p => {
            x(l) && p(b)
        })
    }
    je(v, (p, y) => Be == null ? void 0 : Be(p, y), () => g), _(r, v), K()
}
var ko = te('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>');

function Oo(r, e) {
    const t = xe(e, ["$$slots", "$$events", "$$legacy"]);
    var n = ko();
    let i;
    T(() => i = me(n, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...t
    }, void 0, !0)), _(r, n)
}
var Ao = te('<svg width="1.2em" height="1.2em" viewBox="0 0 209 209" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M177.954,104.163l-110.066,-0m110.066,-0l-138.95,69.4l28.884,-69.4l-28.884,-69.584l138.95,69.584Z" style="fill:none;fill-rule:nonzero;stroke:currentColor;stroke-width:17.38px;"></path></svg>');

function Po(r) {
    var e = Ao();
    _(r, e)
}
var Do = D("<div><!></div>"),
    Lo = D("<!> <!>", 1),
    $o = D("<div><!></div>"),
    Mo = D("<div><!></div>"),
    So = D("<div><!></div>"),
    To = D('<div class="absolute bottom-0.5 right-0.5 text-slate-500"><!></div>');

function Io(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(Lr, "$isMessengerInputEmpty", t),
        i = () => R(Dt, "$isMessengerFrameOpen", t),
        a = () => R(Ye, "$files", t),
        l = () => R(yi, "$isAttachmentsDisabled", t),
        o = () => R(Or, "$fileUploadInProgress", t),
        s = () => R(wi, "$cardsInProgress", t),
        f = () => R(Zt, "$showSendSuccess", t),
        c = () => R(et, "$t", t),
        m = () => R(_i, "$isDisconnected", t),
        g = {
            duration: 250
        };
    let d = "lg",
        u = re("send"),
        v = re(null),
        h = re(!1),
        w = re(null);
    const E = () => {
            x(v) && x(v).click()
        },
        C = () => {
            n() && !i() ? Ei() : $r()
        };
    let b = z(() => a() && Ye.count() > 0),
        p = z(() => bi() && l());
    qe(() => {
        x(p), (!n() || x(b) || x(p)) && !o() ? U(u, "send") : !x(p) && i() && U(u, "file-upload"), (o() || s() && i()) && U(u, "loader"), !o() && x(h) && !x(w) && (U(u, "success"), U(w, $e(window.setTimeout(() => {
            U(w, null)
        }, mi)))), f() && !i() && (U(u, "success"), window.setTimeout(() => {
            Zt.set(!1), xi()
        }, Ti)), U(h, $e(o()))
    });
    const {
        buttonSend: y,
        buttonAttachment: A
    } = ee;
    var L = To(),
        k = O(L); {
        var S = I => {
                var M = Do(),
                    q = O(M),
                    V = z(() => c()("tooltip.send"));
                ct(q, {
                    get content() {
                        return x(V)
                    },
                    placement: "bottom",
                    delay: 1e3,
                    children: (H, $) => {
                        Te(H, {
                            size: d,
                            icon: Po,
                            variant: "primary",
                            get disabled() {
                                return m()
                            },
                            iconDescription: "Send message",
                            onClick: C,
                            testId: y
                        })
                    },
                    $$slots: {
                        default: !0
                    }
                }), de(5, M, () => Xe, () => g), _(I, M)
            },
            P = I => {
                var M = ve(),
                    q = J(M); {
                    var V = $ => {
                            var j = $o(),
                                G = O(j),
                                le = z(() => c()("tooltip.attachment"));
                            ct(G, {
                                get content() {
                                    return x(le)
                                },
                                placement: "bottom",
                                delay: 1e3,
                                children: (_e, ne) => {
                                    var Q = Lo(),
                                        se = J(Q);
                                    Te(se, {
                                        size: d,
                                        icon: Oo,
                                        iconDescription: "Upload file",
                                        get disabled() {
                                            return m()
                                        },
                                        onClick: E,
                                        testId: A
                                    });
                                    var ce = B(se, 2);
                                    Xr(ce, {
                                        get inputRef() {
                                            return x(v)
                                        },
                                        set inputRef(ge) {
                                            U(v, $e(ge))
                                        }
                                    }), _(_e, Q)
                                },
                                $$slots: {
                                    default: !0
                                }
                            }), de(5, j, () => Xe, () => g), _($, j)
                        },
                        H = $ => {
                            var j = ve(),
                                G = J(j); {
                                var le = ne => {
                                        var Q = Mo(),
                                            se = O(Q);
                                        Te(se, {
                                            size: d,
                                            icon: Ur,
                                            iconAnimation: "spin",
                                            variant: "ghost",
                                            iconDescription: "Uploading...",
                                            disabled: !0
                                        }), de(5, Q, () => Xe, () => g), _(ne, Q)
                                    },
                                    _e = ne => {
                                        var Q = ve(),
                                            se = J(Q); {
                                            var ce = ge => {
                                                var Pe = So(),
                                                    Ee = O(Pe);
                                                Te(Ee, {
                                                    size: d,
                                                    icon: Mr,
                                                    variant: "success",
                                                    iconDescription: "Success"
                                                }), de(5, Pe, () => Xe, () => g), _(ge, Pe)
                                            };
                                            W(se, ge => {
                                                x(u) === "success" && ge(ce)
                                            }, !0)
                                        }
                                        _(ne, Q)
                                    };
                                W(G, ne => {
                                    x(u) === "loader" ? ne(le) : ne(_e, !1)
                                }, !0)
                            }
                            _($, j)
                        };
                    W(q, $ => {
                        x(u) === "file-upload" ? $(V) : $(H, !1)
                    }, !0)
                }
                _(I, M)
            };
        W(k, I => {
            x(u) === "send" ? I(S) : I(P, !1)
        })
    }
    _(r, L), K()
}
var Fo = D('<div class="flex-shrink flex items-end py-1.5 pr-1.5 text-lg text-slate-500"><!></div>'),
    jo = D('<div class="relative flex items-end"><div class="flex flex-col bg-slate-100 rounded-3xl transition-all duration-250"><!> <div class="flex w-full"><!> <!></div></div> <!></div>');

function Go(r, e) {
    Y(e, !0);
    const t = he(),
        n = () => R(Pr, "$messengerInputValue", t),
        i = () => R(Dt, "$isMessengerFrameOpen", t),
        a = () => R(Oi, "$hasContactOrAgentMessage", t),
        l = () => R(Lr, "$isMessengerInputEmpty", t),
        o = () => R(Ci, "$isMessengerInputDisabled", t);
    let s = re(null);
    const {
        widgetBlockingOptions: f
    } = dt.getOptions();
    Je(() => {
        const h = () => {
            Jt({
                name: Qt.Message,
                value: n()
            })
        };
        return Le().addEventListener("pagehide", h), () => Le().removeEventListener("pagehide", h)
    });
    const c = Dr(h => Jt({
        name: Qt.Message,
        value: h
    }), 500);
    qe(() => {
        Le().SMARTSUPP_BFCACHE === !0 && c(n())
    });
    let m = z(i),
        g = z(() => x(m) ? a() || !l() : !0);
    var d = ve(),
        u = J(d); {
        var v = h => {
            var w = jo(),
                E = O(w),
                C = O(E); {
                var b = P => {
                    fo(P, {})
                };
                W(C, P => {
                    x(m) && P(b)
                })
            }
            var p = B(C, 2),
                y = O(p);
            go(y, {
                onKeyEnter: $r,
                get resizable() {
                    return x(m)
                },
                get textareaRef() {
                    return x(s)
                },
                set textareaRef(P) {
                    U(s, $e(P))
                }
            });
            var A = B(y, 2); {
                var L = P => {
                    var I = Fo(),
                        M = O(I);
                    Co(M, {
                        get textareaRef() {
                            return x(s)
                        }
                    }), _(P, I)
                };
                W(A, P => {
                    x(m) && P(L)
                })
            }
            var k = B(E, 2); {
                var S = P => {
                    Io(P, {})
                };
                W(k, P => {
                    x(g) && P(S)
                })
            }
            T(() => ki(E, "width", x(g) ? "calc(100% - 48px)" : "100%")), de(3, E, () => ot, () => ({
                y: 15,
                duration: 500
            })), _(h, w)
        };
        W(u, h => {
            !o() && !(f != null && f.disableTextarea) && h(v)
        })
    }
    _(r, d), K()
}
export {
    Vo as A, Zi as B, Uo as C, Ho as F, us as I, No as L, Xo as M, ls as P, qi as S, ct as T, Go as W, vr as a, zo as b, Wi as c, Vs as d, ut as e, Fi as f, Wo as g, tr as h, Ai as i, Po as j, ws as m
};
//# sourceMappingURL=WidgetMessengerInput-Bl32ZTft.js.map