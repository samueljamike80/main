const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = [window.parent.smartsupp.getAssetUrl("assets/WidgetMessenger-BDaHHdFY.js"), window.parent.smartsupp.getAssetUrl("assets/WidgetMessengerInput-Bl32ZTft.js"), window.parent.smartsupp.getAssetUrl("assets/WidgetPopup-D3FEoDN_.js")]))) => i.map(i => d[i]);
var Gc = Array.isArray,
    Af = Array.from,
    Ef = Object.defineProperty,
    gt = Object.getOwnPropertyDescriptor,
    Wc = Object.getOwnPropertyDescriptors,
    Ff = Object.prototype,
    Sf = Array.prototype,
    Li = Object.getPrototypeOf;

function Wt(e) {
    return typeof e == "function"
}
const ge = () => {};

function kf(e) {
    return e()
}

function br(e) {
    for (var t = 0; t < e.length; t++) e[t]()
}
const je = 2,
    Kc = 4,
    Mn = 8,
    Dr = 16,
    Ge = 32,
    Dn = 64,
    fi = 128,
    Lt = 256,
    Cr = 512,
    Ae = 1024,
    mt = 2048,
    Rn = 4096,
    Qt = 8192,
    on = 16384,
    Xc = 32768,
    an = 65536,
    xf = 1 << 17,
    Tf = 1 << 19,
    Zc = 1 << 20,
    Ze = Symbol("$state"),
    Yc = Symbol("legacy props"),
    Of = Symbol("");

function Jc(e) {
    return e === this.v
}

function Rr(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}

function Mf(e, t) {
    return e !== t
}

function $i(e) {
    return !Rr(e, this.v)
}

function Df(e) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function Rf() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function Bf(e) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function Pf() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function If(e) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Lf() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function $f() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function qf() {
    throw new Error("https://svelte.dev/e/state_unsafe_local_read")
}

function Nf() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let cn = !1;

function zf() {
    cn = !0
}
const dw = 1,
    hw = 2,
    pw = 4,
    gw = 8,
    vw = 16,
    jf = 1,
    Uf = 2,
    Vf = 4,
    Hf = 8,
    Gf = 16,
    Wf = 1,
    Kf = 2,
    Xf = 4,
    Zf = 1,
    Yf = 2,
    ye = Symbol();

function Ne(e, t) {
    var n = {
        f: 0,
        v: e,
        reactions: null,
        equals: Jc,
        version: 0
    };
    return n
}

function Be(e) {
    return Qc(Ne(e))
}

function qi(e, t = !1) {
    var r;
    const n = Ne(e);
    return t || (n.equals = $i), cn && N !== null && N.l !== null && ((r = N.l).s ? ? (r.s = [])).push(n), n
}

function Jf(e, t = !1) {
    return Qc(qi(e, t))
}

function Qc(e) {
    return z !== null && z.f & je && (Ye === null ? ud([e]) : Ye.push(e)), e
}

function q(e, t) {
    return z !== null && Pr() && z.f & (je | Dr) && (Ye === null || !Ye.includes(e)) && Nf(), Qf(e, t)
}

function Qf(e, t) {
    return e.equals(t) || (e.v = t, e.version = yu(), eu(e, mt), Pr() && $ !== null && $.f & Ae && !($.f & Ge) && (de !== null && de.includes(e) ? (et($, mt), $r($)) : vt === null ? ld([e]) : vt.push(e))), t
}

function eu(e, t) {
    var n = e.reactions;
    if (n !== null)
        for (var r = Pr(), i = n.length, a = 0; a < i; a++) {
            var l = n[a],
                u = l.f;
            u & mt || !r && l === $ || (et(l, t), u & (Ae | Lt) && (u & je ? eu(l, Rn) : $r(l)))
        }
}
let tu = !1;

function ie(e, t = null, n) {
    if (typeof e != "object" || e === null || Ze in e) return e;
    const r = Li(e);
    if (r !== Ff && r !== Sf) return e;
    var i = new Map,
        a = Gc(e),
        l = Ne(0);
    a && i.set("length", Ne(e.length));
    var u;
    return new Proxy(e, {
        defineProperty(d, c, o) {
            (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && Lf();
            var s = i.get(c);
            return s === void 0 ? (s = Ne(o.value), i.set(c, s)) : q(s, ie(o.value, u)), !0
        },
        deleteProperty(d, c) {
            var o = i.get(c);
            if (o === void 0) c in d && i.set(c, Ne(ye));
            else {
                if (a && typeof c == "string") {
                    var s = i.get("length"),
                        f = Number(c);
                    Number.isInteger(f) && f < s.v && q(s, f)
                }
                q(o, ye), Io(l)
            }
            return !0
        },
        get(d, c, o) {
            var p;
            if (c === Ze) return e;
            var s = i.get(c),
                f = c in d;
            if (s === void 0 && (!f || (p = gt(d, c)) != null && p.writable) && (s = Ne(ie(f ? d[c] : ye, u)), i.set(c, s)), s !== void 0) {
                var h = S(s);
                return h === ye ? void 0 : h
            }
            return Reflect.get(d, c, o)
        },
        getOwnPropertyDescriptor(d, c) {
            var o = Reflect.getOwnPropertyDescriptor(d, c);
            if (o && "value" in o) {
                var s = i.get(c);
                s && (o.value = S(s))
            } else if (o === void 0) {
                var f = i.get(c),
                    h = f == null ? void 0 : f.v;
                if (f !== void 0 && h !== ye) return {
                    enumerable: !0,
                    configurable: !0,
                    value: h,
                    writable: !0
                }
            }
            return o
        },
        has(d, c) {
            var h;
            if (c === Ze) return !0;
            var o = i.get(c),
                s = o !== void 0 && o.v !== ye || Reflect.has(d, c);
            if (o !== void 0 || $ !== null && (!s || (h = gt(d, c)) != null && h.writable)) {
                o === void 0 && (o = Ne(s ? ie(d[c], u) : ye), i.set(c, o));
                var f = S(o);
                if (f === ye) return !1
            }
            return s
        },
        set(d, c, o, s) {
            var b;
            var f = i.get(c),
                h = c in d;
            if (a && c === "length")
                for (var p = o; p < f.v; p += 1) {
                    var v = i.get(p + "");
                    v !== void 0 ? q(v, ye) : p in d && (v = Ne(ye), i.set(p + "", v))
                }
            f === void 0 ? (!h || (b = gt(d, c)) != null && b.writable) && (f = Ne(void 0), q(f, ie(o, u)), i.set(c, f)) : (h = f.v !== ye, q(f, ie(o, u)));
            var g = Reflect.getOwnPropertyDescriptor(d, c);
            if (g != null && g.set && g.set.call(s, o), !h) {
                if (a && typeof c == "string") {
                    var m = i.get("length"),
                        y = Number(c);
                    Number.isInteger(y) && y >= m.v && q(m, y + 1)
                }
                Io(l)
            }
            return !0
        },
        ownKeys(d) {
            S(l);
            var c = Reflect.ownKeys(d).filter(f => {
                var h = i.get(f);
                return h === void 0 || h.v !== ye
            });
            for (var [o, s] of i) s.v !== ye && !(o in d) && c.push(o);
            return c
        },
        setPrototypeOf() {
            $f()
        }
    })
}

function Io(e, t = 1) {
    q(e, e.v + t)
}

function Lo(e) {
    return e !== null && typeof e == "object" && Ze in e ? e[Ze] : e
}

function mw(e, t) {
    return Object.is(Lo(e), Lo(t))
}
var $o, nu, ru;

function ed() {
    if ($o === void 0) {
        $o = window;
        var e = Element.prototype,
            t = Node.prototype;
        nu = gt(t, "firstChild").get, ru = gt(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0
    }
}

function Ni(e = "") {
    return document.createTextNode(e)
}

function en(e) {
    return nu.call(e)
}

function zi(e) {
    return ru.call(e)
}

function P(e, t) {
    return en(e)
}

function ue(e, t) {
    {
        var n = en(e);
        return n instanceof Comment && n.data === "" ? zi(n) : n
    }
}

function U(e, t = 1, n = !1) {
    let r = e;
    for (; t--;) r = zi(r);
    return r
}

function yw(e) {
    e.textContent = ""
}

function te(e) {
    var t = je | mt;
    $ === null ? t |= Lt : $.f |= Zc;
    var n = z !== null && z.f & je ? z : null;
    const r = {
        children: null,
        ctx: N,
        deps: null,
        equals: Jc,
        f: t,
        fn: e,
        reactions: null,
        v: null,
        version: 0,
        parent: n ? ? $
    };
    return n !== null && (n.children ? ? (n.children = [])).push(r), r
}

function bn(e) {
    const t = te(e);
    return t.equals = $i, t
}

function su(e) {
    var t = e.children;
    if (t !== null) {
        e.children = null;
        for (var n = 0; n < t.length; n += 1) {
            var r = t[n];
            r.f & je ? ji(r) : yt(r)
        }
    }
}

function td(e) {
    for (var t = e.parent; t !== null;) {
        if (!(t.f & je)) return t;
        t = t.parent
    }
    return null
}

function iu(e) {
    var t, n = $;
    Ie(td(e));
    try {
        su(e), t = _u(e)
    } finally {
        Ie(n)
    }
    return t
}

function ou(e) {
    var t = iu(e),
        n = (Ot || e.f & Lt) && e.deps !== null ? Rn : Ae;
    et(e, n), e.equals(t) || (e.v = t, e.version = yu())
}

function ji(e) {
    su(e), Fn(e, 0), et(e, on), e.v = e.children = e.deps = e.ctx = e.reactions = null
}

function au(e) {
    $ === null && z === null && Bf(), z !== null && z.f & Lt && Rf(), Hi && Df()
}

function nd(e, t) {
    var n = t.last;
    n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e)
}

function un(e, t, n, r = !0) {
    var i = (e & Dn) !== 0,
        a = $,
        l = {
            ctx: N,
            deps: null,
            deriveds: null,
            nodes_start: null,
            nodes_end: null,
            f: e | mt,
            first: null,
            fn: t,
            last: null,
            next: null,
            parent: i ? null : a,
            prev: null,
            teardown: null,
            transitions: null,
            version: 0
        };
    if (n) {
        var u = Zt;
        try {
            No(!0), Lr(l), l.f |= Xc
        } catch (o) {
            throw yt(l), o
        } finally {
            No(u)
        }
    } else t !== null && $r(l);
    var d = n && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Zc) === 0;
    if (!d && !i && r && (a !== null && nd(l, a), z !== null && z.f & je)) {
        var c = z;
        (c.children ? ? (c.children = [])).push(l)
    }
    return l
}

function cu(e) {
    const t = un(Mn, null, !1);
    return et(t, Ae), t.teardown = e, t
}

function Je(e) {
    au();
    var t = $ !== null && ($.f & Ge) !== 0 && N !== null && !N.m;
    if (t) {
        var n = N;
        (n.e ? ? (n.e = [])).push({
            fn: e,
            effect: $,
            reaction: z
        })
    } else {
        var r = Bn(e);
        return r
    }
}

function rd(e) {
    return au(), Ui(e)
}

function sd(e) {
    const t = un(Dn, e, !0);
    return (n = {}) => new Promise(r => {
        n.outro ? wn(t, () => {
            yt(t), r(void 0)
        }) : (yt(t), r(void 0))
    })
}

function Bn(e) {
    return un(Kc, e, !1)
}

function Ui(e) {
    return un(Mn, e, !0)
}

function ne(e) {
    return Pn(e)
}

function Pn(e, t = 0) {
    return un(Mn | Dr | t, e, !0)
}

function tn(e, t = !0) {
    return un(Mn | Ge, e, !0, t)
}

function uu(e) {
    var t = e.teardown;
    if (t !== null) {
        const n = Hi,
            r = z;
        zo(!0), Qe(null);
        try {
            t.call(null)
        } finally {
            zo(n), Qe(r)
        }
    }
}

function lu(e) {
    var t = e.deriveds;
    if (t !== null) {
        e.deriveds = null;
        for (var n = 0; n < t.length; n += 1) ji(t[n])
    }
}

function fu(e, t = !1) {
    var n = e.first;
    for (e.first = e.last = null; n !== null;) {
        var r = n.next;
        yt(n, t), n = r
    }
}

function id(e) {
    for (var t = e.first; t !== null;) {
        var n = t.next;
        t.f & Ge || yt(t), t = n
    }
}

function yt(e, t = !0) {
    var n = !1;
    if ((t || e.f & Tf) && e.nodes_start !== null) {
        for (var r = e.nodes_start, i = e.nodes_end; r !== null;) {
            var a = r === i ? null : zi(r);
            r.remove(), r = a
        }
        n = !0
    }
    fu(e, t && !n), lu(e), Fn(e, 0), et(e, on);
    var l = e.transitions;
    if (l !== null)
        for (const d of l) d.stop();
    uu(e);
    var u = e.parent;
    u !== null && u.first !== null && du(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null
}

function du(e) {
    var t = e.parent,
        n = e.prev,
        r = e.next;
    n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n))
}

function wn(e, t) {
    var n = [];
    hu(e, n, !0), od(n, () => {
        yt(e), t && t()
    })
}

function od(e, t) {
    var n = e.length;
    if (n > 0) {
        var r = () => --n || t();
        for (var i of e) i.out(r)
    } else t()
}

function hu(e, t, n) {
    if (!(e.f & Qt)) {
        if (e.f ^= Qt, e.transitions !== null)
            for (const l of e.transitions)(l.is_global || n) && t.push(l);
        for (var r = e.first; r !== null;) {
            var i = r.next,
                a = (r.f & an) !== 0 || (r.f & Ge) !== 0;
            hu(r, t, a ? n : !1), r = i
        }
    }
}

function qo(e) {
    pu(e, !0)
}

function pu(e, t) {
    if (e.f & Qt) {
        In(e) && Lr(e), e.f ^= Qt;
        for (var n = e.first; n !== null;) {
            var r = n.next,
                i = (n.f & an) !== 0 || (n.f & Ge) !== 0;
            pu(n, i ? t : !1), n = r
        }
        if (e.transitions !== null)
            for (const a of e.transitions)(a.is_global || t) && a.in()
    }
}
let wr = !1,
    di = [];

function gu() {
    wr = !1;
    const e = di.slice();
    di = [], br(e)
}

function Br(e) {
    wr || (wr = !0, queueMicrotask(gu)), di.push(e)
}

function ad() {
    wr && gu()
}

function Vi(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
const vu = 0,
    cd = 1;
let dr = !1,
    hr = vu,
    An = !1,
    En = null,
    Zt = !1,
    Hi = !1;

function No(e) {
    Zt = e
}

function zo(e) {
    Hi = e
}
let Tt = [],
    Yt = 0;
let z = null;

function Qe(e) {
    z = e
}
let $ = null;

function Ie(e) {
    $ = e
}
let Ye = null;

function ud(e) {
    Ye = e
}
let de = null,
    Te = 0,
    vt = null;

function ld(e) {
    vt = e
}
let mu = 1,
    Ot = !1,
    N = null;

function yu() {
    return ++mu
}

function Pr() {
    return !cn || N !== null && N.l === null
}

function In(e) {
    var c;
    var t = e.f;
    if (t & mt) return !0;
    if (t & Rn) {
        var n = e.deps,
            r = (t & Lt) !== 0;
        if (n !== null) {
            var i, a, l = (t & Cr) !== 0,
                u = r && $ !== null && !Ot,
                d = n.length;
            if (l || u) {
                for (i = 0; i < d; i++) a = n[i], (c = a == null ? void 0 : a.reactions) != null && c.includes(e) || (a.reactions ? ? (a.reactions = [])).push(e);
                l && (e.f ^= Cr)
            }
            for (i = 0; i < d; i++)
                if (a = n[i], In(a) && ou(a), a.version > e.version) return !0
        }(!r || $ !== null && !Ot) && et(e, Ae)
    }
    return !1
}

function fd(e, t) {
    for (var n = t; n !== null;) {
        if (n.f & fi) try {
            n.fn(e);
            return
        } catch {
            n.f ^= fi
        }
        n = n.parent
    }
    throw dr = !1, e
}

function dd(e) {
    return (e.f & on) === 0 && (e.parent === null || (e.parent.f & fi) === 0)
}

function Ir(e, t, n, r) {
    if (dr) {
        if (n === null && (dr = !1), dd(t)) throw e;
        return
    }
    n !== null && (dr = !0); {
        fd(e, t);
        return
    }
}

function _u(e) {
    var f;
    var t = de,
        n = Te,
        r = vt,
        i = z,
        a = Ot,
        l = Ye,
        u = N,
        d = e.f;
    de = null, Te = 0, vt = null, z = d & (Ge | Dn) ? null : e, Ot = !Zt && (d & Lt) !== 0, Ye = null, N = e.ctx;
    try {
        var c = (0, e.fn)(),
            o = e.deps;
        if (de !== null) {
            var s;
            if (Fn(e, Te), o !== null && Te > 0)
                for (o.length = Te + de.length, s = 0; s < de.length; s++) o[Te + s] = de[s];
            else e.deps = o = de;
            if (!Ot)
                for (s = Te; s < o.length; s++)((f = o[s]).reactions ? ? (f.reactions = [])).push(e)
        } else o !== null && Te < o.length && (Fn(e, Te), o.length = Te);
        return c
    } finally {
        de = t, Te = n, vt = r, z = i, Ot = a, Ye = l, N = u
    }
}

function hd(e, t) {
    let n = t.reactions;
    if (n !== null) {
        var r = n.indexOf(e);
        if (r !== -1) {
            var i = n.length - 1;
            i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop())
        }
    }
    n === null && t.f & je && (de === null || !de.includes(t)) && (et(t, Rn), t.f & (Lt | Cr) || (t.f ^= Cr), Fn(t, 0))
}

function Fn(e, t) {
    var n = e.deps;
    if (n !== null)
        for (var r = t; r < n.length; r++) hd(e, n[r])
}

function Lr(e) {
    var t = e.f;
    if (!(t & on)) {
        et(e, Ae);
        var n = $,
            r = N;
        $ = e;
        try {
            t & Dr ? id(e) : fu(e), lu(e), uu(e);
            var i = _u(e);
            e.teardown = typeof i == "function" ? i : null, e.version = mu
        } catch (a) {
            Ir(a, e, n, r || e.ctx)
        } finally {
            $ = n
        }
    }
}

function bu() {
    if (Yt > 1e3) {
        Yt = 0;
        try {
            Pf()
        } catch (e) {
            if (En !== null) Ir(e, En, null);
            else throw e
        }
    }
    Yt++
}

function Cu(e) {
    var t = e.length;
    if (t !== 0) {
        bu();
        var n = Zt;
        Zt = !0;
        try {
            for (var r = 0; r < t; r++) {
                var i = e[r];
                i.f & Ae || (i.f ^= Ae);
                var a = [];
                wu(i, a), pd(a)
            }
        } finally {
            Zt = n
        }
    }
}

function pd(e) {
    var t = e.length;
    if (t !== 0)
        for (var n = 0; n < t; n++) {
            var r = e[n];
            if (!(r.f & (on | Qt))) try {
                In(r) && (Lr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? du(r) : r.fn = null))
            } catch (i) {
                Ir(i, r, null, r.ctx)
            }
        }
}

function gd() {
    if (An = !1, Yt > 1001) return;
    const e = Tt;
    Tt = [], Cu(e), An || (Yt = 0, En = null)
}

function $r(e) {
    hr === vu && (An || (An = !0, queueMicrotask(gd))), En = e;
    for (var t = e; t.parent !== null;) {
        t = t.parent;
        var n = t.f;
        if (n & (Dn | Ge)) {
            if (!(n & Ae)) return;
            t.f ^= Ae
        }
    }
    Tt.push(t)
}

function wu(e, t) {
    var n = e.first,
        r = [];
    e: for (; n !== null;) {
        var i = n.f,
            a = (i & Ge) !== 0,
            l = a && (i & Ae) !== 0,
            u = n.next;
        if (!l && !(i & Qt))
            if (i & Mn) {
                if (a) n.f ^= Ae;
                else try {
                    In(n) && Lr(n)
                } catch (s) {
                    Ir(s, n, null, n.ctx)
                }
                var d = n.first;
                if (d !== null) {
                    n = d;
                    continue
                }
            } else i & Kc && r.push(n);
        if (u === null) {
            let s = n.parent;
            for (; s !== null;) {
                if (e === s) break e;
                var c = s.next;
                if (c !== null) {
                    n = c;
                    continue e
                }
                s = s.parent
            }
        }
        n = u
    }
    for (var o = 0; o < r.length; o++) d = r[o], t.push(d), wu(d, t)
}

function Au(e) {
    var t = hr,
        n = Tt;
    try {
        bu();
        const i = [];
        hr = cd, Tt = i, An = !1, Cu(n);
        var r = e == null ? void 0 : e();
        return ad(), (Tt.length > 0 || i.length > 0) && Au(), Yt = 0, En = null, r
    } finally {
        hr = t, Tt = n
    }
}
async function vd() {
    await Promise.resolve(), Au()
}

function S(e) {
    var o;
    var t = e.f,
        n = (t & je) !== 0;
    if (n && t & on) {
        var r = iu(e);
        return ji(e), r
    }
    if (z !== null) {
        Ye !== null && Ye.includes(e) && qf();
        var i = z.deps;
        de === null && i !== null && i[Te] === e ? Te++ : de === null ? de = [e] : de.push(e), vt !== null && $ !== null && $.f & Ae && !($.f & Ge) && vt.includes(e) && (et($, mt), $r($))
    } else if (n && e.deps === null)
        for (var a = e, l = a.parent, u = a; l !== null;)
            if (l.f & je) {
                var d = l;
                u = d, l = d.parent
            } else {
                var c = l;
                (o = c.deriveds) != null && o.includes(u) || (c.deriveds ? ? (c.deriveds = [])).push(u);
                break
            }
    return n && (a = e, In(a) && ou(a)), e.v
}

function it(e) {
    const t = z;
    try {
        return z = null, e()
    } finally {
        z = t
    }
}
const md = ~(mt | Rn | Ae);

function et(e, t) {
    e.f = e.f & md | t
}

function _w(e) {
    return Eu().get(e)
}

function bw(e, t) {
    return Eu().set(e, t), t
}

function Eu(e) {
    return N === null && Vi(), N.c ? ? (N.c = new Map(yd(N) || void 0))
}

function yd(e) {
    let t = e.p;
    for (; t !== null;) {
        const n = t.c;
        if (n !== null) return n;
        t = t.p
    }
    return null
}

function ae(e, t = !1, n) {
    N = {
        p: N,
        c: null,
        e: null,
        m: !1,
        s: e,
        x: null,
        l: null
    }, cn && !t && (N.l = {
        s: null,
        u: null,
        r1: [],
        r2: Ne(!1)
    })
}

function ce(e) {
    const t = N;
    if (t !== null) {
        const l = t.e;
        if (l !== null) {
            var n = $,
                r = z;
            t.e = null;
            try {
                for (var i = 0; i < l.length; i++) {
                    var a = l[i];
                    Ie(a.effect), Qe(a.reaction), Bn(a.fn)
                }
            } finally {
                Ie(n), Qe(r)
            }
        }
        N = t.p, t.m = !0
    }
    return {}
}

function Fu(e) {
    if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
        if (Ze in e) hi(e);
        else if (!Array.isArray(e))
            for (let t in e) {
                const n = e[t];
                typeof n == "object" && n && Ze in n && hi(n)
            }
    }
}

function hi(e, t = new Set) {
    if (typeof e == "object" && e !== null && !(e instanceof EventTarget) && !t.has(e)) {
        t.add(e), e instanceof Date && e.getTime();
        for (let r in e) try {
            hi(e[r], t)
        } catch {}
        const n = Li(e);
        if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
            const r = Wc(n);
            for (let i in r) {
                const a = r[i].get;
                if (a) try {
                    a.call(e)
                } catch {}
            }
        }
    }
}

function _d(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const bd = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Cd(e) {
    return bd.includes(e)
}
const wd = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject"
};

function Ad(e) {
    return e = e.toLowerCase(), wd[e] ? ? e
}
const Ed = ["touchstart", "touchmove"];

function Fd(e) {
    return Ed.includes(e)
}

function Sd(e, t) {
    if (t) {
        const n = document.body;
        e.autofocus = !0, Br(() => {
            document.activeElement === n && e.focus()
        })
    }
}
let jo = !1;

function kd() {
    jo || (jo = !0, document.addEventListener("reset", e => {
        Promise.resolve().then(() => {
            var t;
            if (!e.defaultPrevented)
                for (const n of e.target.elements)(t = n.__on_r) == null || t.call(n)
        })
    }, {
        capture: !0
    }))
}

function Su(e) {
    var t = z,
        n = $;
    Qe(null), Ie(null);
    try {
        return e()
    } finally {
        Qe(t), Ie(n)
    }
}

function Cw(e, t, n, r = n) {
    e.addEventListener(t, () => Su(n));
    const i = e.__on_r;
    i ? e.__on_r = () => {
        i(), r(!0)
    } : e.__on_r = () => r(!0), kd()
}
const ku = new Set,
    pi = new Set;

function xu(e, t, n, r) {
    function i(a) {
        if (r.capture || _n.call(t, a), !a.cancelBubble) return Su(() => n.call(this, a))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Br(() => {
        t.addEventListener(e, i, r)
    }) : t.addEventListener(e, i, r), i
}

function os(e, t, n, r, i) {
    var a = {
            capture: r,
            passive: i
        },
        l = xu(e, t, n, a);
    (t === document.body || t === window || t === document) && cu(() => {
        t.removeEventListener(e, l, a)
    })
}

function qr(e) {
    for (var t = 0; t < e.length; t++) ku.add(e[t]);
    for (var n of pi) n(e)
}

function _n(e) {
    var y;
    var t = this,
        n = t.ownerDocument,
        r = e.type,
        i = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [],
        a = i[0] || e.target,
        l = 0,
        u = e.__root;
    if (u) {
        var d = i.indexOf(u);
        if (d !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var c = i.indexOf(t);
        if (c === -1) return;
        d <= c && (l = d)
    }
    if (a = i[l] || e.target, a !== t) {
        Ef(e, "currentTarget", {
            configurable: !0,
            get() {
                return a || n
            }
        });
        var o = z,
            s = $;
        Qe(null), Ie(null);
        try {
            for (var f, h = []; a !== null;) {
                var p = a.assignedSlot || a.parentNode || a.host || null;
                try {
                    var v = a["__" + r];
                    if (v !== void 0 && !a.disabled)
                        if (Gc(v)) {
                            var [g, ...m] = v;
                            g.apply(a, [e, ...m])
                        } else v.call(a, e)
                } catch (b) {
                    f ? h.push(b) : f = b
                }
                if (e.cancelBubble || p === t || p === null) break;
                a = p
            }
            if (f) {
                for (let b of h) queueMicrotask(() => {
                    throw b
                });
                throw f
            }
        } finally {
            e.__root = t, delete e.currentTarget, Qe(o), Ie(s)
        }
    }
}

function Tu(e) {
    var t = document.createElement("template");
    return t.innerHTML = e, t.content
}

function Sn(e, t) {
    var n = $;
    n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t)
}

function X(e, t) {
    var n = (t & Zf) !== 0,
        r = (t & Yf) !== 0,
        i, a = !e.startsWith("<!>");
    return () => {
        i === void 0 && (i = Tu(a ? e : "<!>" + e), n || (i = en(i)));
        var l = r ? document.importNode(i, !0) : i.cloneNode(!0);
        if (n) {
            var u = en(l),
                d = l.lastChild;
            Sn(u, d)
        } else Sn(l, l);
        return l
    }
}

function Ou(e, t, n = "svg") {
    var r = !e.startsWith("<!>"),
        i = `<${n}>${r?e:"<!>"+e}</${n}>`,
        a;
    return () => {
        if (!a) {
            var l = Tu(i),
                u = en(l);
            a = en(u)
        }
        var d = a.cloneNode(!0);
        return Sn(d, d), d
    }
}

function ww(e = "") {
    {
        var t = Ni(e + "");
        return Sn(t, t), t
    }
}

function he() {
    var e = document.createDocumentFragment(),
        t = document.createComment(""),
        n = Ni();
    return e.append(t, n), Sn(t, n), e
}

function R(e, t) {
    e !== null && e.before(t)
}
let gi = !0;

function Nr(e, t) {
    var n = t == null ? "" : typeof t == "object" ? t + "" : t;
    n !== (e.__t ? ? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n == null ? "" : n + "")
}

function Mu(e, t) {
    return xd(e, t)
}
const zt = new Map;

function xd(e, {
    target: t,
    anchor: n,
    props: r = {},
    events: i,
    context: a,
    intro: l = !0
}) {
    ed();
    var u = new Set,
        d = s => {
            for (var f = 0; f < s.length; f++) {
                var h = s[f];
                if (!u.has(h)) {
                    u.add(h);
                    var p = Fd(h);
                    t.addEventListener(h, _n, {
                        passive: p
                    });
                    var v = zt.get(h);
                    v === void 0 ? (document.addEventListener(h, _n, {
                        passive: p
                    }), zt.set(h, 1)) : zt.set(h, v + 1)
                }
            }
        };
    d(Af(ku)), pi.add(d);
    var c = void 0,
        o = sd(() => {
            var s = n ? ? t.appendChild(Ni());
            return tn(() => {
                if (a) {
                    ae({});
                    var f = N;
                    f.c = a
                }
                i && (r.$$events = i), gi = l, c = e(s, r) || {}, gi = !0, a && ce()
            }), () => {
                var p;
                for (var f of u) {
                    t.removeEventListener(f, _n);
                    var h = zt.get(f);
                    --h === 0 ? (document.removeEventListener(f, _n), zt.delete(f)) : zt.set(f, h)
                }
                pi.delete(d), s !== n && ((p = s.parentNode) == null || p.removeChild(s))
            }
        });
    return vi.set(c, o), c
}
let vi = new WeakMap;

function Uo(e, t) {
    const n = vi.get(e);
    return n ? (vi.delete(e), n(t)) : Promise.resolve()
}

function we(e, t, n = !1) {
    var r = e,
        i = null,
        a = null,
        l = ye,
        u = n ? an : 0,
        d = !1;
    const c = (s, f = !0) => {
            d = !0, o(f, s)
        },
        o = (s, f) => {
            l !== (l = s) && (l ? (i ? qo(i) : f && (i = tn(() => f(r))), a && wn(a, () => {
                a = null
            })) : (a ? qo(a) : f && (a = tn(() => f(r))), i && wn(i, () => {
                i = null
            })))
        };
    Pn(() => {
        d = !1, t(c), d || o(null, null)
    }, u)
}

function Td(e, t, n) {
    var r = e,
        i = ye,
        a, l = Pr() ? Mf : Rr;
    Pn(() => {
        l(i, i = t()) && (a && wn(a), a = tn(() => n(r)))
    })
}

function Ar(e, t, ...n) {
    var r = e,
        i = ge,
        a;
    Pn(() => {
        i !== (i = t()) && (a && (yt(a), a = null), a = tn(() => i(r, ...n)))
    }, an)
}

function Du(e, t, n) {
    var r = e,
        i, a;
    Pn(() => {
        i !== (i = t()) && (a && (wn(a), a = null), i && (a = tn(() => n(r, i))))
    }, an)
}

function Ln(e, t, n) {
    Bn(() => {
        var r = it(() => t(e, n == null ? void 0 : n()) || {});
        if (n && (r != null && r.update)) {
            var i = !1,
                a = {};
            Ui(() => {
                var l = n();
                Fu(l), i && Rr(a, l) && (a = l, r.update(l))
            }), i = !0
        }
        if (r != null && r.destroy) return () => r.destroy()
    })
}

function Ru(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = Ru(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Od() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = Ru(e)) && (r && (r += " "), r += t);
    return r
}

function kn(e) {
    return typeof e == "object" ? Od(e) : e ? ? ""
}

function Aw(e, t) {
    var n = e.__attributes ? ? (e.__attributes = {});
    n.value === (n.value = t ? ? void 0) || e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t)
}

function Md(e, t) {
    t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected")
}

function W(e, t, n, r) {
    var i = e.__attributes ? ? (e.__attributes = {});
    i[t] !== (i[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Of] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Bu(e).includes(t) ? e[t] = n : e.setAttribute(t, n))
}

function Dd(e, t, n, r, i = !1, a = !1, l = !1) {
    var u = t || {},
        d = e.tagName === "OPTION";
    for (var c in t) c in n || (n[c] = null);
    n.class && (n.class = kn(n.class)), r !== void 0 && (n.class = n.class ? n.class + " " + r : r);
    var o = Bu(e),
        s = e.__attributes ? ? (e.__attributes = {});
    for (const m in n) {
        let y = n[m];
        if (d && m === "value" && y == null) {
            e.value = e.__value = "", u[m] = y;
            continue
        }
        var f = u[m];
        if (y !== f) {
            u[m] = y;
            var h = m[0] + m[1];
            if (h !== "$$") {
                if (h === "on") {
                    const b = {},
                        _ = "$$" + m;
                    let w = m.slice(2);
                    var p = Cd(w);
                    if (_d(w) && (w = w.slice(0, -7), b.capture = !0), !p && f) {
                        if (y != null) continue;
                        e.removeEventListener(w, u[_], b), u[_] = null
                    }
                    if (y != null)
                        if (p) e[`__${w}`] = y, qr([w]);
                        else {
                            let F = function(C) {
                                u[m].call(this, C)
                            };
                            u[_] = xu(w, e, F, b)
                        }
                    else p && (e[`__${w}`] = void 0)
                } else if (m === "style" && y != null) e.style.cssText = y + "";
                else if (m === "autofocus") Sd(e, !!y);
                else if (m === "__value" || m === "value" && y != null) e.value = e[m] = e.__value = y;
                else if (m === "selected" && d) Md(e, y);
                else {
                    var v = m;
                    i || (v = Ad(v));
                    var g = v === "defaultValue" || v === "defaultChecked";
                    if (y == null && !a && !g)
                        if (s[m] = null, v === "value" || v === "checked") {
                            let b = e;
                            if (v === "value") {
                                let _ = b.defaultValue;
                                b.removeAttribute(v), b.defaultValue = _
                            } else {
                                let _ = b.defaultChecked;
                                b.removeAttribute(v), b.defaultChecked = _
                            }
                        } else e.removeAttribute(m);
                    else g || o.includes(v) && (a || typeof y != "string") ? e[v] = y : typeof y != "function" && W(e, v, y)
                }
                m === "style" && "__styles" in e && (e.__styles = {})
            }
        }
    }
    return u
}
var Vo = new Map;

function Bu(e) {
    var t = Vo.get(e.nodeName);
    if (t) return t;
    Vo.set(e.nodeName, t = []);
    for (var n, r = e, i = Element.prototype; i !== r;) {
        n = Wc(r);
        for (var a in n) n[a].set && t.push(a);
        r = Li(r)
    }
    return t
}

function Ew(e, t, n) {
    var r = e.__className,
        i = Pu(t, n);
    (r !== i || tu) && (i === "" ? e.removeAttribute("class") : e.setAttribute("class", i), e.__className = i)
}

function Bt(e, t, n) {
    var r = e.__className,
        i = Pu(t, n);
    (r !== i || tu) && (t == null && !n ? e.removeAttribute("class") : e.className = i, e.__className = i)
}

function Pu(e, t) {
    return (e ? ? "") + (t ? " " + t : "")
}

function Pe(e, t, n, r) {
    var i = e.__styles ? ? (e.__styles = {});
    i[t] !== n && (i[t] = n, n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, ""))
}
const Rd = () => performance.now(),
    st = {
        tick: e => requestAnimationFrame(e),
        now: () => Rd(),
        tasks: new Set
    };

function Iu() {
    const e = st.now();
    st.tasks.forEach(t => {
        t.c(e) || (st.tasks.delete(t), t.f())
    }), st.tasks.size !== 0 && st.tick(Iu)
}

function Bd(e) {
    let t;
    return st.tasks.size === 0 && st.tick(Iu), {
        promise: new Promise(n => {
            st.tasks.add(t = {
                c: e,
                f: n
            })
        }),
        abort() {
            st.tasks.delete(t)
        }
    }
}

function Kn(e, t) {
    e.dispatchEvent(new CustomEvent(t))
}

function Pd(e) {
    if (e === "float") return "cssFloat";
    if (e === "offset") return "cssOffset";
    if (e.startsWith("--")) return e;
    const t = e.split("-");
    return t.length === 1 ? t[0] : t[0] + t.slice(1).map(n => n[0].toUpperCase() + n.slice(1)).join("")
}

function Ho(e) {
    const t = {},
        n = e.split(";");
    for (const r of n) {
        const [i, a] = r.split(":");
        if (!i || a === void 0) break;
        const l = Pd(i.trim());
        t[l] = a.trim()
    }
    return t
}
const Id = e => e;

function _e(e, t, n, r) {
    var i = (e & Wf) !== 0,
        a = (e & Kf) !== 0,
        l = i && a,
        u = (e & Xf) !== 0,
        d = l ? "both" : i ? "in" : "out",
        c, o = t.inert,
        s, f;

    function h() {
        var y = z,
            b = $;
        Qe(null), Ie(null);
        try {
            return c ? ? (c = n()(t, (r == null ? void 0 : r()) ? ? {}, {
                direction: d
            }))
        } finally {
            Qe(y), Ie(b)
        }
    }
    var p = {
            is_global: u,
            in () {
                var y;
                if (t.inert = o, !i) {
                    f == null || f.abort(), (y = f == null ? void 0 : f.reset) == null || y.call(f);
                    return
                }
                a || s == null || s.abort(), Kn(t, "introstart"), s = mi(t, h(), f, 1, () => {
                    Kn(t, "introend"), s == null || s.abort(), s = c = void 0
                })
            },
            out(y) {
                if (!a) {
                    y == null || y(), c = void 0;
                    return
                }
                t.inert = !0, Kn(t, "outrostart"), f = mi(t, h(), s, 0, () => {
                    Kn(t, "outroend"), y == null || y()
                })
            },
            stop: () => {
                s == null || s.abort(), f == null || f.abort()
            }
        },
        v = $;
    if ((v.transitions ? ? (v.transitions = [])).push(p), i && gi) {
        var g = u;
        if (!g) {
            for (var m = v.parent; m && m.f & an;)
                for (;
                    (m = m.parent) && !(m.f & Dr););
            g = !m || (m.f & Xc) !== 0
        }
        g && Bn(() => {
            it(() => p.in())
        })
    }
}

function mi(e, t, n, r, i) {
    var a = r === 1;
    if (Wt(t)) {
        var l, u = !1;
        return Br(() => {
            if (!u) {
                var g = t({
                    direction: a ? "in" : "out"
                });
                l = mi(e, g, n, r, i)
            }
        }), {
            abort: () => {
                u = !0, l == null || l.abort()
            },
            deactivate: () => l.deactivate(),
            reset: () => l.reset(),
            t: () => l.t()
        }
    }
    if (n == null || n.deactivate(), !(t != null && t.duration)) return i(), {
        abort: ge,
        deactivate: ge,
        reset: ge,
        t: () => r
    };
    const {
        delay: d = 0,
        css: c,
        tick: o,
        easing: s = Id
    } = t;
    var f = [];
    if (a && n === void 0 && (o && o(0, 1), c)) {
        var h = Ho(c(0, 1));
        f.push(h, h)
    }
    var p = () => 1 - r,
        v = e.animate(f, {
            duration: d
        });
    return v.onfinish = () => {
        var g = (n == null ? void 0 : n.t()) ? ? 1 - r;
        n == null || n.abort();
        var m = r - g,
            y = t.duration * Math.abs(m),
            b = [];
        if (y > 0) {
            if (c)
                for (var _ = Math.ceil(y / 16.666666666666668), w = 0; w <= _; w += 1) {
                    var F = g + m * s(w / _),
                        C = c(F, 1 - F);
                    b.push(Ho(C))
                }
            p = () => {
                var A = v.currentTime;
                return g + m * s(A / y)
            }, o && Bd(() => {
                if (v.playState !== "running") return !1;
                var A = p();
                return o(A, 1 - A), !0
            })
        }
        v = e.animate(b, {
            duration: y,
            fill: "forwards"
        }), v.onfinish = () => {
            p = () => r, o == null || o(r, 1 - r), i()
        }
    }, {
        abort: () => {
            v && (v.cancel(), v.effect = null, v.onfinish = ge)
        },
        deactivate: () => {
            i = ge
        },
        reset: () => {
            r === 0 && (o == null || o(1, 0))
        },
        t: () => p()
    }
}

function Go(e, t) {
    return e === t || (e == null ? void 0 : e[Ze]) === t
}

function ln(e = {}, t, n, r) {
    return Bn(() => {
        var i, a;
        return Ui(() => {
            i = a, a = (r == null ? void 0 : r()) || [], it(() => {
                e !== n(...a) && (t(e, ...a), i && Go(n(...i), e) && t(null, ...i))
            })
        }), () => {
            Br(() => {
                a && Go(n(...a), e) && t(null, ...a)
            })
        }
    }), e
}

function $n(e = !1) {
    const t = N,
        n = t.l.u;
    if (!n) return;
    let r = () => Fu(t.s);
    if (e) {
        let i = 0,
            a = {};
        const l = te(() => {
            let u = !1;
            const d = t.s;
            for (const c in d) d[c] !== a[c] && (a[c] = d[c], u = !0);
            return u && i++, i
        });
        r = () => S(l)
    }
    n.b.length && rd(() => {
        Wo(t, r), br(n.b)
    }), Je(() => {
        const i = it(() => n.m.map(kf));
        return () => {
            for (const a of i) typeof a == "function" && a()
        }
    }), n.a.length && Je(() => {
        Wo(t, r), br(n.a)
    })
}

function Wo(e, t) {
    if (e.l.s)
        for (const n of e.l.s) S(n);
    t()
}

function Gi(e, t, n) {
    if (e == null) return t(void 0), n && n(void 0), ge;
    const r = it(() => e.subscribe(t, n));
    return r.unsubscribe ? () => r.unsubscribe() : r
}
let Xn = !1;

function Z(e, t, n) {
    const r = n[t] ? ? (n[t] = {
        store: null,
        source: qi(void 0),
        unsubscribe: ge
    });
    if (r.store !== e)
        if (r.unsubscribe(), r.store = e ? ? null, e == null) r.source.v = void 0, r.unsubscribe = ge;
        else {
            var i = !0;
            r.unsubscribe = Gi(e, a => {
                i ? r.source.v = a : q(r.source, a)
            }), i = !1
        }
    return S(r.source)
}

function Fw(e, t) {
    return e.set(t), t
}

function $e() {
    const e = {};
    return cu(() => {
        for (var t in e) e[t].unsubscribe()
    }), e
}

function Sw(e, t, n) {
    return e.set(n), t
}

function Ld(e) {
    var t = Xn;
    try {
        return Xn = !1, [e(), Xn]
    } finally {
        Xn = t
    }
}
const $d = {
    get(e, t) {
        if (!e.exclude.includes(t)) return e.props[t]
    },
    set(e, t) {
        return !1
    },
    getOwnPropertyDescriptor(e, t) {
        if (!e.exclude.includes(t) && t in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[t]
        }
    },
    has(e, t) {
        return e.exclude.includes(t) ? !1 : t in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(t => !e.exclude.includes(t))
    }
};

function qd(e, t, n) {
    return new Proxy({
        props: e,
        exclude: t
    }, $d)
}
const Nd = {
    get(e, t) {
        let n = e.props.length;
        for (; n--;) {
            let r = e.props[n];
            if (Wt(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t]
        }
    },
    set(e, t, n) {
        let r = e.props.length;
        for (; r--;) {
            let i = e.props[r];
            Wt(i) && (i = i());
            const a = gt(i, t);
            if (a && a.set) return a.set(n), !0
        }
        return !1
    },
    getOwnPropertyDescriptor(e, t) {
        let n = e.props.length;
        for (; n--;) {
            let r = e.props[n];
            if (Wt(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
                const i = gt(r, t);
                return i && !i.configurable && (i.configurable = !0), i
            }
        }
    },
    has(e, t) {
        if (t === Ze || t === Yc) return !1;
        for (let n of e.props)
            if (Wt(n) && (n = n()), n != null && t in n) return !0;
        return !1
    },
    ownKeys(e) {
        const t = [];
        for (let n of e.props) {
            Wt(n) && (n = n());
            for (const r in n) t.includes(r) || t.push(r)
        }
        return t
    }
};

function kw(...e) {
    return new Proxy({
        props: e
    }, Nd)
}

function Ko(e) {
    for (var t = $, n = $; t !== null && !(t.f & (Ge | Dn));) t = t.parent;
    try {
        return Ie(t), e()
    } finally {
        Ie(n)
    }
}

function Oe(e, t, n, r) {
    var C;
    var i = (n & jf) !== 0,
        a = !cn || (n & Uf) !== 0,
        l = (n & Hf) !== 0,
        u = (n & Gf) !== 0,
        d = !1,
        c;
    l ? [c, d] = Ld(() => e[t]) : c = e[t];
    var o = Ze in e || Yc in e,
        s = ((C = gt(e, t)) == null ? void 0 : C.set) ? ? (o && l && t in e ? A => e[t] = A : void 0),
        f = r,
        h = !0,
        p = !1,
        v = () => (p = !0, h && (h = !1, u ? f = it(r) : f = r), f);
    c === void 0 && r !== void 0 && (s && a && If(), c = v(), s && s(c));
    var g;
    if (a) g = () => {
        var A = e[t];
        return A === void 0 ? v() : (h = !0, p = !1, A)
    };
    else {
        var m = Ko(() => (i ? te : bn)(() => e[t]));
        m.f |= xf, g = () => {
            var A = S(m);
            return A !== void 0 && (f = void 0), A === void 0 ? f : A
        }
    }
    if (!(n & Vf)) return g;
    if (s) {
        var y = e.$$legacy;
        return function(A, k) {
            return arguments.length > 0 ? ((!a || !k || y || d) && s(k ? g() : A), A) : g()
        }
    }
    var b = !1,
        _ = !1,
        w = qi(c),
        F = Ko(() => te(() => {
            var A = g(),
                k = S(w);
            return b ? (b = !1, _ = !0, k) : (_ = !1, w.v = A)
        }));
    return i || (F.equals = $i),
        function(A, k) {
            if (arguments.length > 0) {
                const D = k ? S(F) : a && l ? ie(A) : A;
                return F.equals(D) || (b = !0, q(w, D), p && f !== void 0 && (f = D), it(() => S(F))), A
            }
            return S(F)
        }
}

function ot(e) {
    N === null && Vi(), cn && N.l !== null ? zd(N).m.push(e) : Je(() => {
        const t = it(e);
        if (typeof t == "function") return t
    })
}

function Lu(e) {
    N === null && Vi(), ot(() => () => it(e))
}

function zd(e) {
    var t = e.l;
    return t.u ? ? (t.u = {
        a: [],
        b: [],
        m: []
    })
}
const jt = [];

function jd(e, t) {
    return {
        subscribe: O(e, t).subscribe
    }
}

function O(e, t = ge) {
    let n = null;
    const r = new Set;

    function i(u) {
        if (Rr(e, u) && (e = u, n)) {
            const d = !jt.length;
            for (const c of r) c[1](), jt.push(c, e);
            if (d) {
                for (let c = 0; c < jt.length; c += 2) jt[c][0](jt[c + 1]);
                jt.length = 0
            }
        }
    }

    function a(u) {
        i(u(e))
    }

    function l(u, d = ge) {
        const c = [u, d];
        return r.add(c), r.size === 1 && (n = t(i, a) || ge), u(e), () => {
            r.delete(c), r.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: i,
        update: a,
        subscribe: l
    }
}

function M(e, t, n) {
    const r = !Array.isArray(e),
        i = r ? [e] : e;
    if (!i.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const a = t.length < 2;
    return jd(n, (l, u) => {
        let d = !1;
        const c = [];
        let o = 0,
            s = ge;
        const f = () => {
                if (o) return;
                s();
                const p = t(r ? c[0] : c, l, u);
                a ? l(p) : s = typeof p == "function" ? p : ge
            },
            h = i.map((p, v) => Gi(p, g => {
                c[v] = g, o &= ~(1 << v), d && f()
            }, () => {
                o |= 1 << v
            }));
        return d = !0, f(),
            function() {
                br(h), s(), d = !1
            }
    })
}

function E(e) {
    let t;
    return Gi(e, n => t = n)(), t
}
const Ud = () => {
        const e = new Map;
        return Object.freeze({
            on: (i, a) => {
                const l = e.get(i);
                l ? l.push(a) : e.set(i, [a])
            },
            off: (i, a) => {
                const l = e.get(i);
                l && e.set(i, l.filter(u => u !== a))
            },
            emit: (i, a) => {
                const l = e.get(i);
                l && l.forEach(u => u(a))
            }
        })
    },
    G = Ud(),
    Vd = "data-smartsupp-id",
    pr = () => window.top ? ? window.parent,
    se = () => window.parent,
    Mt = () => se().document,
    xw = e => e && e.ownerDocument || document,
    Hd = ({
        vid: e
    }) => {
        const t = se().smartsupp || {};
        t.vid = e, se().smartsupp = t
    },
    Gd = "debug",
    Wd = e => {
        try {
            const t = se().localStorage.getItem(Gd);
            if (!t) return !1;
            if (t === e || t === "*") return !0;
            const n = e.match(/^\w+:/g);
            return n ? t === `${n[0]}*` : !1
        } catch {
            return !1
        }
    },
    Kd = (e, t) => (n, ...r) => {
        Wd(e) && console.debug(`%c${e}`, `color: ${t};`, n, ...r)
    },
    Me = Kd("smartsupp:widget", "#1233df"),
    Xd = () => {
        let e = null;
        const t = [];
        return Object.freeze({
            init: l => {
                e = l, Me("widget options", l), t.forEach(u => u(l))
            },
            getOptions: () => {
                if (!e) throw new Error("Widget options not initialized");
                return e
            },
            awaitOptions: async () => e || new Promise(l => {
                t.push(l)
            }),
            updateOptions: l => {
                e = { ...e,
                    ...l
                }
            }
        })
    },
    x = Xd(),
    Wi = e => {
        const n = e.document.getElementsByTagName("body")[0].getAttribute(Vd);
        if (!n) throw new Error("Missing chat ID attribute on body element.");
        if (!e.parent.$smartsupp) throw new Error("Something went wrong. Seems like loader.js did not initialize widget.");
        if (!e.parent.$smartsupp.getWidget) throw new Error("Get widget function was not supplied by loader.js.");
        return e.parent.$smartsupp.getWidget(n)
    }; /*! js-cookie v3.0.5 | MIT */
function Zn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) e[r] = n[r]
    }
    return e
}
var Zd = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function yi(e, t) {
    function n(i, a, l) {
        if (!(typeof document > "u")) {
            l = Zn({}, t, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var u = "";
            for (var d in l) l[d] && (u += "; " + d, l[d] !== !0 && (u += "=" + l[d].split(";")[0]));
            return document.cookie = i + "=" + e.write(a, i) + u
        }
    }

    function r(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var a = document.cookie ? document.cookie.split("; ") : [], l = {}, u = 0; u < a.length; u++) {
                var d = a[u].split("="),
                    c = d.slice(1).join("=");
                try {
                    var o = decodeURIComponent(d[0]);
                    if (l[o] = e.read(c, o), i === o) break
                } catch {}
            }
            return i ? l[i] : l
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(i, a) {
            n(i, "", Zn({}, a, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return yi(this.converter, Zn({}, this.attributes, i))
        },
        withConverter: function(i) {
            return yi(Zn({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var Er = yi(Zd, {
    path: "/"
});
const _i = "ssupp",
    $u = 182,
    qu = (e = $u) => ({
        expires: e,
        domain: x.getOptions().cookieDomain,
        path: x.getOptions().cookiePath || "/",
        sameSite: "strict",
        secure: se().location.protocol === "https:"
    }),
    Ki = e => `${x.getOptions().cookiePrefix||""}${_i}.${e}`,
    Yd = ({
        name: e,
        value: t,
        expirationInDays: n = $u,
        options: r
    }) => {
        Er.set(Ki(e), t, { ...qu(n),
            ...r
        })
    },
    Jd = e => Er.get(Ki(e)),
    Qd = e => {
        const t = Ki(e);
        if (Er.get(t)) {
            const {
                path: r,
                domain: i
            } = qu();
            Er.remove(t, {
                path: r,
                domain: i
            })
        }
    },
    Nu = e => (t, ...n) => {
        e(`[Smartsupp] ${t}`, ...n)
    },
    K = Nu(console.warn),
    Ue = Nu(console.error),
    eh = () => {
        const {
            key: e
        } = x.getOptions();
        return `${se().SMARTSUPP_AUTOCREATE!==!1?_i:`${Wi(window).id}_${_i}`}_${e}`
    },
    Fr = e => `${eh()}${e?`_${e}`:""}`,
    zr = e => {
        try {
            const t = window.localStorage.getItem(Fr(e)) ? ? "{}";
            return JSON.parse(t)
        } catch {
            return {}
        }
    },
    Xi = (e, t) => {
        try {
            window.localStorage.setItem(Fr(t), JSON.stringify(e))
        } catch (n) {
            K("Set to local storage failed", n)
        }
    },
    th = (e, t) => {
        const r = { ...zr(),
            [e]: String(t)
        };
        Xi(r)
    },
    zu = e => {
        const t = zr();
        t[e] && (delete t[e], Xi(t))
    },
    nh = () => {
        window.localStorage.removeItem(Fr()), window.localStorage.removeItem(Fr("cards"))
    };
var j = (e => (e.AnalyticsConsent = "analyticsConsent", e.AuthForm = "authForm", e.IsMessengerFrameExpanded = "isMessengerFrameExpanded", e.IsMessengerFrameOpened = "opened", e.MarketingConsent = "marketingConsent", e.Message = "message", e.PopupClosedAt = "popupClosedAt", e.RatingText = "ratingText", e.SoundsEnabled = "enableSounds", e.VisitorId = "vid", e.Visits = "visits", e.TicketForm = "ticketForm", e.SessionId = "sessionId", e))(j || {});
const Ve = e => {
        let t = "";
        return e === j.VisitorId && x.getOptions().cookieDomain && (t = Jd(e)), t || zr()[e]
    },
    at = ({
        name: e,
        value: t
    }) => {
        e === j.VisitorId && x.getOptions().cookieDomain && Yd({
            name: e,
            value: t
        }), th(e, t)
    },
    rh = e => {
        zu(e)
    };
G.on("analyticsConsentChanged", e => {
    at({
        name: j.AnalyticsConsent,
        value: String(e)
    })
});
G.on("marketingConsentChanged", e => {
    at({
        name: j.MarketingConsent,
        value: String(e)
    })
});
const Zi = () => !!x.getOptions().consentModeEnabled,
    ju = () => {
        const e = Ve(j.AnalyticsConsent) === "true";
        return !(Zi() && !e)
    },
    Uu = () => {
        const e = Ve(j.MarketingConsent) === "true";
        return !(Zi() && !e)
    };

function Vu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Hu(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var as, Xo;

function sh() {
    if (Xo) return as;
    Xo = 1;
    var e = "sessionAccessId-";

    function t(n) {
        var r = void 0;
        return n && n.id && ~n.id.indexOf(e) && (r = n.id), r
    }
    return as = t, as
}
var cs, Zo;

function ih() {
    if (Zo) return cs;
    Zo = 1;

    function e(i) {
        if (Array.isArray(i)) {
            for (var a = 0, l = Array(i.length); a < i.length; a++) l[a] = i[a];
            return l
        } else return Array.from(i)
    }
    var t = sh(),
        n = "sessionAccessId-";

    function r() {
        return n + Date.now()
    }
    return cs = function(a, l) {
        l = l || document.body;
        var u = void 0,
            d = {},
            c = [],
            o = !1,
            s = !0,
            f = void 0,
            h = !1,
            p = document.createElement("iframe");
        p.src = a, p.width = 0, p.height = 0, p.style.display = "none", p.onload = function() {
            h = !0
        };

        function v() {
            l.appendChild(p), u = p.contentWindow, s = !1, window.addEventListener("message", g), F()
        }
        v();

        function g(C) {
            var A = C.data,
                k = t(A);
            if (k === "sessionAccessId-connected") {
                o = !0;
                return
            }
            if (A.connectError) {
                Object.keys(d).forEach(function(B) {
                    return d[B](A.error)
                }), d = {};
                return
            }
            var D = d[k];
            k && D && D(A.error, A.data)
        }

        function m() {
            clearTimeout(f), window.removeEventListener("message", g), p.parentNode.removeChild(p), o = !1, s = !0
        }

        function y(C, A, k, D) {
            s && v(), !o && C !== "connect" && c.push([C, A, k, D]);
            var B = r();
            d && typeof D == "function" && (d[B] = D), h && u.postMessage({
                method: C,
                key: A,
                value: k,
                id: B
            }, a)
        }

        function b(C, A) {
            if (!A) throw new Error("callback required for get");
            y("get", C, null, A)
        }

        function _(C, A, k) {
            y("set", C, A, k)
        }

        function w(C, A) {
            y("remove", C, null, A)
        }

        function F() {
            if (o) {
                for (clearTimeout(f); c.length;) y.apply(void 0, e(c.pop()));
                return
            }
            y("connect"), f = setTimeout(F, 125)
        }
        return {
            get: b,
            set: _,
            remove: w,
            close: m
        }
    }, cs
}
var us, Yo;

function oh() {
    return Yo || (Yo = 1, us = ih()), us
}
var ah = oh();
const ch = Vu(ah),
    uh = () => {
        const {
            storageUrl: e,
            key: t
        } = x.getOptions();
        if (!e) throw new Error("Storage url is missing");
        return `${e.replace(/{key}/g,t)}/index.html`
    },
    lh = () => {
        let e = null;
        return Object.freeze({
            getStorage: () => {
                if (e) return e;
                try {
                    const r = uh();
                    return e = ch(r), Me("cross domain storage created", r), e
                } catch {
                    throw new Error("Cross domain storage create failed")
                }
            },
            closeStorage: () => {
                e && (e.close(), Me("cross domain storage closed"))
            }
        })
    },
    Yi = lh(),
    fh = e => {
        const t = Yi.getStorage();
        return new Promise((n, r) => {
            t.get(e, (i, a) => i ? r(i) : (Me("get from cross domain storage", e, a), n(a)))
        })
    },
    dh = (e, t) => {
        const n = Yi.getStorage();
        return new Promise((r, i) => {
            n.set(e, t, a => a ? i(a) : (Me("set to cross domain storage", e, t), r()))
        })
    },
    hh = () => {
        Yi.closeStorage()
    },
    Gu = () => !!x.getOptions().crossDomainEnabled,
    ph = async () => Gu() ? fh(j.VisitorId) : Ve(j.VisitorId) || null,
    gh = async e => Gu() ? dh(j.VisitorId, String(e)) : at({
        name: j.VisitorId,
        value: String(e)
    }),
    vh = () => {
        if (Uu()) return Ve(j.Visits) ? Number(Ve(j.Visits)) : 0
    },
    mh = e => {
        Uu() && at({
            name: j.Visits,
            value: String(e)
        })
    };
G.on("marketingConsentChanged", e => {
    e || rh(j.Visits)
});
const Wu = (e, t, n) => {
        const {
            set: r,
            subscribe: i
        } = O(t, l => {
            const u = Ve(e);
            u && l(n ? n(u) : u)
        }), a = l => {
            at({
                name: e,
                value: String(l)
            })
        };
        return {
            set: l => {
                a(l), r(l)
            },
            subscribe: i
        }
    },
    yh = () => "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
    _h = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document,
    bh = 450,
    Ch = 500,
    jr = O(null),
    wh = O({
        width: se().innerWidth,
        height: se().innerHeight
    }),
    tt = M([jr, wh], ([e, t]) => {
        const {
            widgetBlockingOptions: n
        } = x.getOptions();
        if (n != null && n.enforceDesktopMode) return !1;
        if (e) {
            const {
                isMobile: r,
                isTablet: i
            } = e;
            if (i) return !1;
            if (r) return !0
        }
        return t.width < bh || t.height < Ch
    }),
    Ku = M([tt], ([e]) => {
        const {
            fullScreenEnabled: t
        } = x.getOptions();
        return !!(e || t)
    }),
    Ah = M([jr], ([e]) => !!(e != null && e.isDesktop) && !_h());
M([jr], ([e]) => !!(e != null && e.isTablet));
const Eh = () => {
        const e = O({}),
            {
                subscribe: t,
                update: n
            } = e;
        return {
            subscribe: t,
            add: l => {
                n(u => ({ ...u,
                    [l.id]: l
                }))
            },
            remove: l => {
                n(u => {
                    const {
                        [l]: d, ...c
                    } = u;
                    return c
                })
            },
            find: l => E(e)[l] || null
        }
    },
    Sr = Eh(),
    Tw = M([Sr], ([e]) => Object.values(e)),
    Ji = e => (t, n = 3e3) => {
        const r = `fm-${e}-${t}`,
            i = Sr.find(r);
        let a = 1;
        i && (clearTimeout(i.timeout), a = i.recurrence + 1);
        let l;
        return n > 0 && (l = window.setTimeout(() => {
            Jo(r)
        }, n)), Sr.add({
            id: r,
            type: e,
            text: t,
            timeout: l,
            recurrence: a
        }), () => Jo(r)
    },
    Jo = e => {
        Sr.remove(e)
    },
    Ow = Ji("success"),
    Pt = Ji("error"),
    Kt = Ji("warning");
var Xu = (e => (e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad", e))(Xu || {});
const Fh = {
        5: {
            value: 5,
            text: "agentRating.good.formText",
            name: "good"
        },
        3: {
            value: 3,
            text: "agentRating.normal.formText",
            name: "neutral"
        },
        1: {
            value: 1,
            text: "agentRating.bad.formText",
            name: "bad"
        }
    },
    Mw = Object.values(Fh).sort((e, t) => t.value - e.value),
    Ur = "rate_form_id",
    Qo = {
        id: Ur,
        type: "message",
        subType: "system",
        channel: {
            type: "default",
            id: null
        },
        chatId: "",
        visitorId: "",
        groupId: null,
        agentId: null,
        trigger: null,
        createdAt: "",
        content: {
            type: "rate_form",
            data: {}
        },
        attachments: [],
        widgetOptions: {
            disableInput: !1,
            disableAuthentication: !1,
            disableAttachments: !1
        }
    },
    Zu = O(null);
var hn = {},
    ut = {},
    rt = {},
    fe = {},
    Yn = {
        exports: {}
    },
    ls, ea;

function Sh() {
    if (ea) return ls;
    ea = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        i = r * 7,
        a = r * 365.25;
    ls = function(o, s) {
        s = s || {};
        var f = typeof o;
        if (f === "string" && o.length > 0) return l(o);
        if (f === "number" && isFinite(o)) return s.long ? d(o) : u(o);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o))
    };

    function l(o) {
        if (o = String(o), !(o.length > 100)) {
            var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
            if (s) {
                var f = parseFloat(s[1]),
                    h = (s[2] || "ms").toLowerCase();
                switch (h) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return f * a;
                    case "weeks":
                    case "week":
                    case "w":
                        return f * i;
                    case "days":
                    case "day":
                    case "d":
                        return f * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return f * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return f * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return f * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return f;
                    default:
                        return
                }
            }
        }
    }

    function u(o) {
        var s = Math.abs(o);
        return s >= r ? Math.round(o / r) + "d" : s >= n ? Math.round(o / n) + "h" : s >= t ? Math.round(o / t) + "m" : s >= e ? Math.round(o / e) + "s" : o + "ms"
    }

    function d(o) {
        var s = Math.abs(o);
        return s >= r ? c(o, s, r, "day") : s >= n ? c(o, s, n, "hour") : s >= t ? c(o, s, t, "minute") : s >= e ? c(o, s, e, "second") : o + " ms"
    }

    function c(o, s, f, h) {
        var p = s >= f * 1.5;
        return Math.round(o / f) + " " + h + (p ? "s" : "")
    }
    return ls
}
var fs, ta;

function kh() {
    if (ta) return fs;
    ta = 1;

    function e(t) {
        r.debug = r, r.default = r, r.coerce = c, r.disable = l, r.enable = a, r.enabled = u, r.humanize = Sh(), r.destroy = o, Object.keys(t).forEach(s => {
            r[s] = t[s]
        }), r.names = [], r.skips = [], r.formatters = {};

        function n(s) {
            let f = 0;
            for (let h = 0; h < s.length; h++) f = (f << 5) - f + s.charCodeAt(h), f |= 0;
            return r.colors[Math.abs(f) % r.colors.length]
        }
        r.selectColor = n;

        function r(s) {
            let f, h = null,
                p, v;

            function g(...m) {
                if (!g.enabled) return;
                const y = g,
                    b = Number(new Date),
                    _ = b - (f || b);
                y.diff = _, y.prev = f, y.curr = b, f = b, m[0] = r.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
                let w = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, (C, A) => {
                    if (C === "%%") return "%";
                    w++;
                    const k = r.formatters[A];
                    if (typeof k == "function") {
                        const D = m[w];
                        C = k.call(y, D), m.splice(w, 1), w--
                    }
                    return C
                }), r.formatArgs.call(y, m), (y.log || r.log).apply(y, m)
            }
            return g.namespace = s, g.useColors = r.useColors(), g.color = r.selectColor(s), g.extend = i, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => h !== null ? h : (p !== r.namespaces && (p = r.namespaces, v = r.enabled(s)), v),
                set: m => {
                    h = m
                }
            }), typeof r.init == "function" && r.init(g), g
        }

        function i(s, f) {
            const h = r(this.namespace + (typeof f > "u" ? ":" : f) + s);
            return h.log = this.log, h
        }

        function a(s) {
            r.save(s), r.namespaces = s, r.names = [], r.skips = [];
            let f;
            const h = (typeof s == "string" ? s : "").split(/[\s,]+/),
                p = h.length;
            for (f = 0; f < p; f++) h[f] && (s = h[f].replace(/\*/g, ".*?"), s[0] === "-" ? r.skips.push(new RegExp("^" + s.slice(1) + "$")) : r.names.push(new RegExp("^" + s + "$")))
        }

        function l() {
            const s = [...r.names.map(d), ...r.skips.map(d).map(f => "-" + f)].join(",");
            return r.enable(""), s
        }

        function u(s) {
            if (s[s.length - 1] === "*") return !0;
            let f, h;
            for (f = 0, h = r.skips.length; f < h; f++)
                if (r.skips[f].test(s)) return !1;
            for (f = 0, h = r.names.length; f < h; f++)
                if (r.names[f].test(s)) return !0;
            return !1
        }

        function d(s) {
            return s.toString().substring(2, s.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        function c(s) {
            return s instanceof Error ? s.stack || s.message : s
        }

        function o() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return r.enable(r.load()), r
    }
    return fs = e, fs
}
var na;

function xh() {
    return na || (na = 1, function(e, t) {
        var n = {};
        t.formatArgs = i, t.save = a, t.load = l, t.useColors = r, t.storage = u(), t.destroy = (() => {
            let c = !1;
            return () => {
                c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function r() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }

        function i(c) {
            if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const o = "color: " + this.color;
            c.splice(1, 0, o, "color: inherit");
            let s = 0,
                f = 0;
            c[0].replace(/%[a-zA-Z%]/g, h => {
                h !== "%%" && (s++, h === "%c" && (f = s))
            }), c.splice(f, 0, o)
        }
        t.log = console.debug || console.log || (() => {});

        function a(c) {
            try {
                c ? t.storage.setItem("debug", c) : t.storage.removeItem("debug")
            } catch {}
        }

        function l() {
            let c;
            try {
                c = t.storage.getItem("debug")
            } catch {}
            return !c && typeof process < "u" && "env" in process && (c = n.DEBUG), c
        }

        function u() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = kh()(t);
        const {
            formatters: d
        } = e.exports;
        d.j = function(c) {
            try {
                return JSON.stringify(c)
            } catch (o) {
                return "[UnexpectedJSONParseError]: " + o.message
            }
        }
    }(Yn, Yn.exports)), Yn.exports
}
var ra;

function nn() {
    if (ra) return fe;
    ra = 1;
    var e = fe.__extends || function() {
        var u = function(d, c) {
            return u = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(o, s) {
                o.__proto__ = s
            } || function(o, s) {
                for (var f in s) Object.prototype.hasOwnProperty.call(s, f) && (o[f] = s[f])
            }, u(d, c)
        };
        return function(d, c) {
            if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
            u(d, c);

            function o() {
                this.constructor = d
            }
            d.prototype = c === null ? Object.create(c) : (o.prototype = c.prototype, new o)
        }
    }();
    Object.defineProperty(fe, "__esModule", {
        value: !0
    }), fe.createEmitter = fe.createCallback = fe.bound = fe.createSocketError = fe.SocketError = fe.debug = void 0, fe.debug = t();

    function t() {
        try {
            return xh()("smartsupp:client")
        } catch {
            return function() {}
        }
    }
    var n = function(u) {
        e(d, u);

        function d(c, o) {
            var s = u.call(this, c) || this;
            return Object.setPrototypeOf(s, d.prototype), s.name = s.constructor.name, s.code = o.code, s.type = o.type, s.event = o.event, o && o.stack && (s.stack = "".concat(s.stack, `
Caused By: `).concat(o.stack)), s
        }
        return d
    }(Error);
    fe.SocketError = n;

    function r(u) {
        return new n(u.message, u)
    }
    fe.createSocketError = r;

    function i(u, d) {
        return function() {
            for (var c = [], o = 0; o < arguments.length; o++) c[o] = arguments[o];
            u[d].apply(u, c)
        }
    }
    fe.bound = i;

    function a(u, d) {
        return function(c, o) {
            c ? d(r(c)) : u(o)
        }
    }
    fe.createCallback = a;

    function l(u, d) {
        return function(c) {
            u.emit(d, c)
        }
    }
    return fe.createEmitter = l, fe
}
var ds = {
        exports: {}
    },
    sa;

function Yu() {
    return sa || (sa = 1, function(e) {
        var t = Object.prototype.hasOwnProperty,
            n = "~";

        function r() {}
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1));

        function i(d, c, o) {
            this.fn = d, this.context = c, this.once = o || !1
        }

        function a(d, c, o, s, f) {
            if (typeof o != "function") throw new TypeError("The listener must be a function");
            var h = new i(o, s || d, f),
                p = n ? n + c : c;
            return d._events[p] ? d._events[p].fn ? d._events[p] = [d._events[p], h] : d._events[p].push(h) : (d._events[p] = h, d._eventsCount++), d
        }

        function l(d, c) {
            --d._eventsCount === 0 ? d._events = new r : delete d._events[c]
        }

        function u() {
            this._events = new r, this._eventsCount = 0
        }
        u.prototype.eventNames = function() {
            var c = [],
                o, s;
            if (this._eventsCount === 0) return c;
            for (s in o = this._events) t.call(o, s) && c.push(n ? s.slice(1) : s);
            return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(o)) : c
        }, u.prototype.listeners = function(c) {
            var o = n ? n + c : c,
                s = this._events[o];
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var f = 0, h = s.length, p = new Array(h); f < h; f++) p[f] = s[f].fn;
            return p
        }, u.prototype.listenerCount = function(c) {
            var o = n ? n + c : c,
                s = this._events[o];
            return s ? s.fn ? 1 : s.length : 0
        }, u.prototype.emit = function(c, o, s, f, h, p) {
            var v = n ? n + c : c;
            if (!this._events[v]) return !1;
            var g = this._events[v],
                m = arguments.length,
                y, b;
            if (g.fn) {
                switch (g.once && this.removeListener(c, g.fn, void 0, !0), m) {
                    case 1:
                        return g.fn.call(g.context), !0;
                    case 2:
                        return g.fn.call(g.context, o), !0;
                    case 3:
                        return g.fn.call(g.context, o, s), !0;
                    case 4:
                        return g.fn.call(g.context, o, s, f), !0;
                    case 5:
                        return g.fn.call(g.context, o, s, f, h), !0;
                    case 6:
                        return g.fn.call(g.context, o, s, f, h, p), !0
                }
                for (b = 1, y = new Array(m - 1); b < m; b++) y[b - 1] = arguments[b];
                g.fn.apply(g.context, y)
            } else {
                var _ = g.length,
                    w;
                for (b = 0; b < _; b++) switch (g[b].once && this.removeListener(c, g[b].fn, void 0, !0), m) {
                    case 1:
                        g[b].fn.call(g[b].context);
                        break;
                    case 2:
                        g[b].fn.call(g[b].context, o);
                        break;
                    case 3:
                        g[b].fn.call(g[b].context, o, s);
                        break;
                    case 4:
                        g[b].fn.call(g[b].context, o, s, f);
                        break;
                    default:
                        if (!y)
                            for (w = 1, y = new Array(m - 1); w < m; w++) y[w - 1] = arguments[w];
                        g[b].fn.apply(g[b].context, y)
                }
            }
            return !0
        }, u.prototype.on = function(c, o, s) {
            return a(this, c, o, s, !1)
        }, u.prototype.once = function(c, o, s) {
            return a(this, c, o, s, !0)
        }, u.prototype.removeListener = function(c, o, s, f) {
            var h = n ? n + c : c;
            if (!this._events[h]) return this;
            if (!o) return l(this, h), this;
            var p = this._events[h];
            if (p.fn) p.fn === o && (!f || p.once) && (!s || p.context === s) && l(this, h);
            else {
                for (var v = 0, g = [], m = p.length; v < m; v++)(p[v].fn !== o || f && !p[v].once || s && p[v].context !== s) && g.push(p[v]);
                g.length ? this._events[h] = g.length === 1 ? g[0] : g : l(this, h)
            }
            return this
        }, u.prototype.removeAllListeners = function(c) {
            var o;
            return c ? (o = n ? n + c : c, this._events[o] && l(this, o)) : (this._events = new r, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, e.exports = u
    }(ds)), ds.exports
}
var Jn = {
        exports: {}
    },
    hs, ia;

function Th() {
    if (ia) return hs;
    ia = 1;
    var e = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        t = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    return hs = function(r) {
        var i = r,
            a = r.indexOf("["),
            l = r.indexOf("]");
        a != -1 && l != -1 && (r = r.substring(0, a) + r.substring(a, l).replace(/:/g, ";") + r.substring(l, r.length));
        for (var u = e.exec(r || ""), d = {}, c = 14; c--;) d[t[c]] = u[c] || "";
        return a != -1 && l != -1 && (d.source = i, d.host = d.host.substring(1, d.host.length - 1).replace(/;/g, ":"), d.authority = d.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), d.ipv6uri = !0), d
    }, hs
}
var Qn = {
        exports: {}
    },
    ps, oa;

function Oh() {
    if (oa) return ps;
    oa = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        i = r * 7,
        a = r * 365.25;
    ps = function(o, s) {
        s = s || {};
        var f = typeof o;
        if (f === "string" && o.length > 0) return l(o);
        if (f === "number" && isFinite(o)) return s.long ? d(o) : u(o);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(o))
    };

    function l(o) {
        if (o = String(o), !(o.length > 100)) {
            var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
            if (s) {
                var f = parseFloat(s[1]),
                    h = (s[2] || "ms").toLowerCase();
                switch (h) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return f * a;
                    case "weeks":
                    case "week":
                    case "w":
                        return f * i;
                    case "days":
                    case "day":
                    case "d":
                        return f * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return f * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return f * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return f * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return f;
                    default:
                        return
                }
            }
        }
    }

    function u(o) {
        var s = Math.abs(o);
        return s >= r ? Math.round(o / r) + "d" : s >= n ? Math.round(o / n) + "h" : s >= t ? Math.round(o / t) + "m" : s >= e ? Math.round(o / e) + "s" : o + "ms"
    }

    function d(o) {
        var s = Math.abs(o);
        return s >= r ? c(o, s, r, "day") : s >= n ? c(o, s, n, "hour") : s >= t ? c(o, s, t, "minute") : s >= e ? c(o, s, e, "second") : o + " ms"
    }

    function c(o, s, f, h) {
        var p = s >= f * 1.5;
        return Math.round(o / f) + " " + h + (p ? "s" : "")
    }
    return ps
}
var gs, aa;

function Mh() {
    if (aa) return gs;
    aa = 1;

    function e(t) {
        r.debug = r, r.default = r, r.coerce = o, r.disable = u, r.enable = l, r.enabled = d, r.humanize = Oh(), Object.keys(t).forEach(s => {
            r[s] = t[s]
        }), r.instances = [], r.names = [], r.skips = [], r.formatters = {};

        function n(s) {
            let f = 0;
            for (let h = 0; h < s.length; h++) f = (f << 5) - f + s.charCodeAt(h), f |= 0;
            return r.colors[Math.abs(f) % r.colors.length]
        }
        r.selectColor = n;

        function r(s) {
            let f;

            function h(...p) {
                if (!h.enabled) return;
                const v = h,
                    g = Number(new Date),
                    m = g - (f || g);
                v.diff = m, v.prev = f, v.curr = g, f = g, p[0] = r.coerce(p[0]), typeof p[0] != "string" && p.unshift("%O");
                let y = 0;
                p[0] = p[0].replace(/%([a-zA-Z%])/g, (_, w) => {
                    if (_ === "%%") return _;
                    y++;
                    const F = r.formatters[w];
                    if (typeof F == "function") {
                        const C = p[y];
                        _ = F.call(v, C), p.splice(y, 1), y--
                    }
                    return _
                }), r.formatArgs.call(v, p), (v.log || r.log).apply(v, p)
            }
            return h.namespace = s, h.enabled = r.enabled(s), h.useColors = r.useColors(), h.color = n(s), h.destroy = i, h.extend = a, typeof r.init == "function" && r.init(h), r.instances.push(h), h
        }

        function i() {
            const s = r.instances.indexOf(this);
            return s !== -1 ? (r.instances.splice(s, 1), !0) : !1
        }

        function a(s, f) {
            const h = r(this.namespace + (typeof f > "u" ? ":" : f) + s);
            return h.log = this.log, h
        }

        function l(s) {
            r.save(s), r.names = [], r.skips = [];
            let f;
            const h = (typeof s == "string" ? s : "").split(/[\s,]+/),
                p = h.length;
            for (f = 0; f < p; f++) h[f] && (s = h[f].replace(/\*/g, ".*?"), s[0] === "-" ? r.skips.push(new RegExp("^" + s.substr(1) + "$")) : r.names.push(new RegExp("^" + s + "$")));
            for (f = 0; f < r.instances.length; f++) {
                const v = r.instances[f];
                v.enabled = r.enabled(v.namespace)
            }
        }

        function u() {
            const s = [...r.names.map(c), ...r.skips.map(c).map(f => "-" + f)].join(",");
            return r.enable(""), s
        }

        function d(s) {
            if (s[s.length - 1] === "*") return !0;
            let f, h;
            for (f = 0, h = r.skips.length; f < h; f++)
                if (r.skips[f].test(s)) return !1;
            for (f = 0, h = r.names.length; f < h; f++)
                if (r.names[f].test(s)) return !0;
            return !1
        }

        function c(s) {
            return s.toString().substring(2, s.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        function o(s) {
            return s instanceof Error ? s.stack || s.message : s
        }
        return r.enable(r.load()), r
    }
    return gs = e, gs
}
var ca;

function Vr() {
    return ca || (ca = 1, function(e, t) {
        var n = {};
        t.log = a, t.formatArgs = i, t.save = l, t.load = u, t.useColors = r, t.storage = d(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function r() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }

        function i(o) {
            if (o[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + o[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const s = "color: " + this.color;
            o.splice(1, 0, s, "color: inherit");
            let f = 0,
                h = 0;
            o[0].replace(/%[a-zA-Z%]/g, p => {
                p !== "%%" && (f++, p === "%c" && (h = f))
            }), o.splice(h, 0, s)
        }

        function a(...o) {
            return typeof console == "object" && console.log && console.log(...o)
        }

        function l(o) {
            try {
                o ? t.storage.setItem("debug", o) : t.storage.removeItem("debug")
            } catch {}
        }

        function u() {
            let o;
            try {
                o = t.storage.getItem("debug")
            } catch {}
            return !o && typeof process < "u" && "env" in process && (o = n.DEBUG), o
        }

        function d() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = Mh()(t);
        const {
            formatters: c
        } = e.exports;
        c.j = function(o) {
            try {
                return JSON.stringify(o)
            } catch (s) {
                return "[UnexpectedJSONParseError]: " + s.message
            }
        }
    }(Qn, Qn.exports)), Qn.exports
}
var vs, ua;

function Dh() {
    if (ua) return vs;
    ua = 1;
    var e = Th(),
        t = Vr()("socket.io-client:url");
    vs = n;

    function n(r, i) {
        var a = r;
        i = i || typeof location < "u" && location, r == null && (r = i.protocol + "//" + i.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = i.protocol + r : r = i.host + r), /^(https?|wss?):\/\//.test(r) || (t("protocol-less url %s", r), typeof i < "u" ? r = i.protocol + "//" + r : r = "https://" + r), t("parse %s", r), a = e(r)), a.port || (/^(http|ws)$/.test(a.protocol) ? a.port = "80" : /^(http|ws)s$/.test(a.protocol) && (a.port = "443")), a.path = a.path || "/";
        var l = a.host.indexOf(":") !== -1,
            u = l ? "[" + a.host + "]" : a.host;
        return a.id = a.protocol + "://" + u + ":" + a.port, a.href = a.protocol + "://" + u + (i && i.port === a.port ? "" : ":" + a.port), a
    }
    return vs
}
var ms = {},
    er = {
        exports: {}
    },
    tr = {
        exports: {}
    },
    ys, la;

function Rh() {
    if (la) return ys;
    la = 1;
    var e = 1e3,
        t = e * 60,
        n = t * 60,
        r = n * 24,
        i = r * 365.25;
    ys = function(c, o) {
        o = o || {};
        var s = typeof c;
        if (s === "string" && c.length > 0) return a(c);
        if (s === "number" && isNaN(c) === !1) return o.long ? u(c) : l(c);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(c))
    };

    function a(c) {
        if (c = String(c), !(c.length > 100)) {
            var o = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);
            if (o) {
                var s = parseFloat(o[1]),
                    f = (o[2] || "ms").toLowerCase();
                switch (f) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return s * i;
                    case "days":
                    case "day":
                    case "d":
                        return s * r;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return s * n;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return s * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return s * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return s;
                    default:
                        return
                }
            }
        }
    }

    function l(c) {
        return c >= r ? Math.round(c / r) + "d" : c >= n ? Math.round(c / n) + "h" : c >= t ? Math.round(c / t) + "m" : c >= e ? Math.round(c / e) + "s" : c + "ms"
    }

    function u(c) {
        return d(c, r, "day") || d(c, n, "hour") || d(c, t, "minute") || d(c, e, "second") || c + " ms"
    }

    function d(c, o, s) {
        if (!(c < o)) return c < o * 1.5 ? Math.floor(c / o) + " " + s : Math.ceil(c / o) + " " + s + "s"
    }
    return ys
}
var fa;

function Bh() {
    return fa || (fa = 1, function(e, t) {
        t = e.exports = r.debug = r.default = r, t.coerce = d, t.disable = l, t.enable = a, t.enabled = u, t.humanize = Rh(), t.instances = [], t.names = [], t.skips = [], t.formatters = {};

        function n(c) {
            var o = 0,
                s;
            for (s in c) o = (o << 5) - o + c.charCodeAt(s), o |= 0;
            return t.colors[Math.abs(o) % t.colors.length]
        }

        function r(c) {
            var o;

            function s() {
                if (s.enabled) {
                    var f = s,
                        h = +new Date,
                        p = h - (o || h);
                    f.diff = p, f.prev = o, f.curr = h, o = h;
                    for (var v = new Array(arguments.length), g = 0; g < v.length; g++) v[g] = arguments[g];
                    v[0] = t.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
                    var m = 0;
                    v[0] = v[0].replace(/%([a-zA-Z%])/g, function(b, _) {
                        if (b === "%%") return b;
                        m++;
                        var w = t.formatters[_];
                        if (typeof w == "function") {
                            var F = v[m];
                            b = w.call(f, F), v.splice(m, 1), m--
                        }
                        return b
                    }), t.formatArgs.call(f, v);
                    var y = s.log || t.log || console.log.bind(console);
                    y.apply(f, v)
                }
            }
            return s.namespace = c, s.enabled = t.enabled(c), s.useColors = t.useColors(), s.color = n(c), s.destroy = i, typeof t.init == "function" && t.init(s), t.instances.push(s), s
        }

        function i() {
            var c = t.instances.indexOf(this);
            return c !== -1 ? (t.instances.splice(c, 1), !0) : !1
        }

        function a(c) {
            t.save(c), t.names = [], t.skips = [];
            var o, s = (typeof c == "string" ? c : "").split(/[\s,]+/),
                f = s.length;
            for (o = 0; o < f; o++) s[o] && (c = s[o].replace(/\*/g, ".*?"), c[0] === "-" ? t.skips.push(new RegExp("^" + c.substr(1) + "$")) : t.names.push(new RegExp("^" + c + "$")));
            for (o = 0; o < t.instances.length; o++) {
                var h = t.instances[o];
                h.enabled = t.enabled(h.namespace)
            }
        }

        function l() {
            t.enable("")
        }

        function u(c) {
            if (c[c.length - 1] === "*") return !0;
            var o, s;
            for (o = 0, s = t.skips.length; o < s; o++)
                if (t.skips[o].test(c)) return !1;
            for (o = 0, s = t.names.length; o < s; o++)
                if (t.names[o].test(c)) return !0;
            return !1
        }

        function d(c) {
            return c instanceof Error ? c.stack || c.message : c
        }
    }(tr, tr.exports)), tr.exports
}
var da;

function qn() {
    return da || (da = 1, function(e, t) {
        var n = {};
        t = e.exports = Bh(), t.log = a, t.formatArgs = i, t.save = l, t.load = u, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : d(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function r() {
            return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }
        t.formatters.j = function(c) {
            try {
                return JSON.stringify(c)
            } catch (o) {
                return "[UnexpectedJSONParseError]: " + o.message
            }
        };

        function i(c) {
            var o = this.useColors;
            if (c[0] = (o ? "%c" : "") + this.namespace + (o ? " %c" : " ") + c[0] + (o ? "%c " : " ") + "+" + t.humanize(this.diff), !!o) {
                var s = "color: " + this.color;
                c.splice(1, 0, s, "color: inherit");
                var f = 0,
                    h = 0;
                c[0].replace(/%[a-zA-Z%]/g, function(p) {
                    p !== "%%" && (f++, p === "%c" && (h = f))
                }), c.splice(h, 0, s)
            }
        }

        function a() {
            return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function l(c) {
            try {
                c == null ? t.storage.removeItem("debug") : t.storage.debug = c
            } catch {}
        }

        function u() {
            var c;
            try {
                c = t.storage.debug
            } catch {}
            return !c && typeof process < "u" && "env" in process && (c = n.DEBUG), c
        }
        t.enable(u());

        function d() {
            try {
                return window.localStorage
            } catch {}
        }
    }(er, er.exports)), er.exports
}
var _s = {
        exports: {}
    },
    ha;

function Hr() {
    return ha || (ha = 1, function(e) {
        e.exports = t;

        function t(r) {
            if (r) return n(r)
        }

        function n(r) {
            for (var i in t.prototype) r[i] = t.prototype[i];
            return r
        }
        t.prototype.on = t.prototype.addEventListener = function(r, i) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this
        }, t.prototype.once = function(r, i) {
            function a() {
                this.off(r, a), i.apply(this, arguments)
            }
            return a.fn = i, this.on(r, a), this
        }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var a = this._callbacks["$" + r];
            if (!a) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + r], this;
            for (var l, u = 0; u < a.length; u++)
                if (l = a[u], l === i || l.fn === i) {
                    a.splice(u, 1);
                    break
                }
            return a.length === 0 && delete this._callbacks["$" + r], this
        }, t.prototype.emit = function(r) {
            this._callbacks = this._callbacks || {};
            for (var i = new Array(arguments.length - 1), a = this._callbacks["$" + r], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
            if (a) {
                a = a.slice(0);
                for (var l = 0, u = a.length; l < u; ++l) a[l].apply(this, i)
            }
            return this
        }, t.prototype.listeners = function(r) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
        }, t.prototype.hasListeners = function(r) {
            return !!this.listeners(r).length
        }
    }(_s)), _s.exports
}
var pn = {},
    bs, pa;

function Qi() {
    if (pa) return bs;
    pa = 1;
    var e = {}.toString;
    return bs = Array.isArray || function(t) {
        return e.call(t) == "[object Array]"
    }, bs
}
var Cs, ga;

function Ju() {
    if (ga) return Cs;
    ga = 1, Cs = r;
    var e = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
        t = typeof ArrayBuffer == "function",
        n = function(i) {
            return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(i) : i.buffer instanceof ArrayBuffer
        };

    function r(i) {
        return e && Buffer.isBuffer(i) || t && (i instanceof ArrayBuffer || n(i))
    }
    return Cs
}
var va;

function Ph() {
    if (va) return pn;
    va = 1;
    var e = Qi(),
        t = Ju(),
        n = Object.prototype.toString,
        r = typeof Blob == "function" || typeof Blob < "u" && n.call(Blob) === "[object BlobConstructor]",
        i = typeof File == "function" || typeof File < "u" && n.call(File) === "[object FileConstructor]";
    pn.deconstructPacket = function(u) {
        var d = [],
            c = u.data,
            o = u;
        return o.data = a(c, d), o.attachments = d.length, {
            packet: o,
            buffers: d
        }
    };

    function a(u, d) {
        if (!u) return u;
        if (t(u)) {
            var c = {
                _placeholder: !0,
                num: d.length
            };
            return d.push(u), c
        } else if (e(u)) {
            for (var o = new Array(u.length), s = 0; s < u.length; s++) o[s] = a(u[s], d);
            return o
        } else if (typeof u == "object" && !(u instanceof Date)) {
            var o = {};
            for (var f in u) o[f] = a(u[f], d);
            return o
        }
        return u
    }
    pn.reconstructPacket = function(u, d) {
        return u.data = l(u.data, d), u.attachments = void 0, u
    };

    function l(u, d) {
        if (!u) return u;
        if (u && u._placeholder === !0) {
            var c = typeof u.num == "number" && u.num >= 0 && u.num < d.length;
            if (c) return d[u.num];
            throw new Error("illegal attachments")
        } else if (e(u))
            for (var o = 0; o < u.length; o++) u[o] = l(u[o], d);
        else if (typeof u == "object")
            for (var s in u) u[s] = l(u[s], d);
        return u
    }
    return pn.removeBlobs = function(u, d) {
        function c(f, h, p) {
            if (!f) return f;
            if (r && f instanceof Blob || i && f instanceof File) {
                o++;
                var v = new FileReader;
                v.onload = function() {
                    p ? p[h] = this.result : s = this.result, --o || d(s)
                }, v.readAsArrayBuffer(f)
            } else if (e(f))
                for (var g = 0; g < f.length; g++) c(f[g], g, f);
            else if (typeof f == "object" && !t(f))
                for (var m in f) c(f[m], m, f)
        }
        var o = 0,
            s = u;
        c(s), o || d(s)
    }, pn
}
var ma;

function eo() {
    return ma || (ma = 1, function(e) {
        var t = qn()("socket.io-parser"),
            n = Hr(),
            r = Ph(),
            i = Qi(),
            a = Ju();
        e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = l, e.Decoder = s;

        function l() {}
        var u = e.ERROR + '"encode error"';
        l.prototype.encode = function(g, m) {
            if (t("encoding packet %j", g), e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) o(g, m);
            else {
                var y = d(g);
                m([y])
            }
        };

        function d(g) {
            var m = "" + g.type;
            if ((e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) && (m += g.attachments + "-"), g.nsp && g.nsp !== "/" && (m += g.nsp + ","), g.id != null && (m += g.id), g.data != null) {
                var y = c(g.data);
                if (y !== !1) m += y;
                else return u
            }
            return t("encoded %j as %s", g, m), m
        }

        function c(g) {
            try {
                return JSON.stringify(g)
            } catch {
                return !1
            }
        }

        function o(g, m) {
            function y(b) {
                var _ = r.deconstructPacket(b),
                    w = d(_.packet),
                    F = _.buffers;
                F.unshift(w), m(F)
            }
            r.removeBlobs(g, y)
        }

        function s() {
            this.reconstructor = null
        }
        n(s.prototype), s.prototype.add = function(g) {
            var m;
            if (typeof g == "string") {
                if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                m = f(g), e.BINARY_EVENT === m.type || e.BINARY_ACK === m.type ? (this.reconstructor = new p(m), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", m)) : this.emit("decoded", m)
            } else if (a(g) || g.base64)
                if (this.reconstructor) m = this.reconstructor.takeBinaryData(g), m && (this.reconstructor = null, this.emit("decoded", m));
                else throw new Error("got binary data when not reconstructing a packet");
            else throw new Error("Unknown type: " + g)
        };

        function f(g) {
            var m = 0,
                y = {
                    type: Number(g.charAt(0))
                };
            if (e.types[y.type] == null) return v("unknown packet type " + y.type);
            if (e.BINARY_EVENT === y.type || e.BINARY_ACK === y.type) {
                for (var b = m + 1; g.charAt(++m) !== "-" && m != g.length;);
                var _ = g.substring(b, m);
                if (_ != Number(_) || g.charAt(m) !== "-") throw new Error("Illegal attachments");
                y.attachments = Number(_)
            }
            if (g.charAt(m + 1) === "/") {
                for (var b = m + 1; ++m;) {
                    var w = g.charAt(m);
                    if (w === "," || m === g.length) break
                }
                y.nsp = g.substring(b, m)
            } else y.nsp = "/";
            var F = g.charAt(m + 1);
            if (F !== "" && Number(F) == F) {
                for (var b = m + 1; ++m;) {
                    var w = g.charAt(m);
                    if (w == null || Number(w) != w) {
                        --m;
                        break
                    }
                    if (m === g.length) break
                }
                y.id = Number(g.substring(b, m + 1))
            }
            if (g.charAt(++m)) {
                var C = h(g.substr(m)),
                    A = C !== !1 && (y.type === e.ERROR || i(C));
                if (A) y.data = C;
                else return v("invalid payload")
            }
            return t("decoded %s as %j", g, y), y
        }

        function h(g) {
            try {
                return JSON.parse(g)
            } catch {
                return !1
            }
        }
        s.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        };

        function p(g) {
            this.reconPack = g, this.buffers = []
        }
        p.prototype.takeBinaryData = function(g) {
            if (this.buffers.push(g), this.buffers.length === this.reconPack.attachments) {
                var m = r.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), m
            }
            return null
        }, p.prototype.finishedReconstruction = function() {
            this.reconPack = null, this.buffers = []
        };

        function v(g) {
            return {
                type: e.ERROR,
                data: "parser error: " + g
            }
        }
    }(ms)), ms
}
var nr = {
        exports: {}
    },
    rr = {},
    sr = {
        exports: {}
    },
    ya;

function Ih() {
    if (ya) return sr.exports;
    ya = 1;
    try {
        sr.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
    } catch {
        sr.exports = !1
    }
    return sr.exports
}
var ws, _a;

function to() {
    return _a || (_a = 1, ws = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }()), ws
}
var As, ba;

function no() {
    if (ba) return As;
    ba = 1;
    var e = Ih(),
        t = to();
    return As = function(n) {
        var r = n.xdomain,
            i = n.xscheme,
            a = n.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!r || e)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !i && a) return new XDomainRequest
        } catch {}
        if (!r) try {
            return new t[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    }, As
}
var ir = {
        exports: {}
    },
    Es = {},
    Fs, Ca;

function Lh() {
    return Ca || (Ca = 1, Fs = Object.keys || function(t) {
        var n = [],
            r = Object.prototype.hasOwnProperty;
        for (var i in t) r.call(t, i) && n.push(i);
        return n
    }), Fs
}
var Ss, wa;

function Qu() {
    if (wa) return Ss;
    wa = 1;
    var e = Qi(),
        t = Object.prototype.toString,
        n = typeof Blob == "function" || typeof Blob < "u" && t.call(Blob) === "[object BlobConstructor]",
        r = typeof File == "function" || typeof File < "u" && t.call(File) === "[object FileConstructor]";
    Ss = i;

    function i(a) {
        if (!a || typeof a != "object") return !1;
        if (e(a)) {
            for (var l = 0, u = a.length; l < u; l++)
                if (i(a[l])) return !0;
            return !1
        }
        if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(a) || typeof ArrayBuffer == "function" && a instanceof ArrayBuffer || n && a instanceof Blob || r && a instanceof File) return !0;
        if (a.toJSON && typeof a.toJSON == "function" && arguments.length === 1) return i(a.toJSON(), !0);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d) && i(a[d])) return !0;
        return !1
    }
    return Ss
}
var ks, Aa;

function $h() {
    return Aa || (Aa = 1, ks = function(e, t, n) {
        var r = e.byteLength;
        if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
        if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || r === 0) return new ArrayBuffer(0);
        for (var i = new Uint8Array(e), a = new Uint8Array(n - t), l = t, u = 0; l < n; l++, u++) a[u] = i[l];
        return a.buffer
    }), ks
}
var xs, Ea;

function qh() {
    if (Ea) return xs;
    Ea = 1, xs = e;

    function e(n, r, i) {
        var a = !1;
        return i = i || t, l.count = n, n === 0 ? r() : l;

        function l(u, d) {
            if (l.count <= 0) throw new Error("after called too many times");
            --l.count, u ? (a = !0, r(u), r = i) : l.count === 0 && !a && r(null, d)
        }
    }

    function t() {}
    return xs
} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var Ts, Fa;

function Nh() {
    if (Fa) return Ts;
    Fa = 1;
    var e = String.fromCharCode;

    function t(h) {
        for (var p = [], v = 0, g = h.length, m, y; v < g;) m = h.charCodeAt(v++), m >= 55296 && m <= 56319 && v < g ? (y = h.charCodeAt(v++), (y & 64512) == 56320 ? p.push(((m & 1023) << 10) + (y & 1023) + 65536) : (p.push(m), v--)) : p.push(m);
        return p
    }

    function n(h) {
        for (var p = h.length, v = -1, g, m = ""; ++v < p;) g = h[v], g > 65535 && (g -= 65536, m += e(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), m += e(g);
        return m
    }

    function r(h, p) {
        if (h >= 55296 && h <= 57343) {
            if (p) throw Error("Lone surrogate U+" + h.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function i(h, p) {
        return e(h >> p & 63 | 128)
    }

    function a(h, p) {
        if (!(h & 4294967168)) return e(h);
        var v = "";
        return h & 4294965248 ? h & 4294901760 ? h & 4292870144 || (v = e(h >> 18 & 7 | 240), v += i(h, 12), v += i(h, 6)) : (r(h, p) || (h = 65533), v = e(h >> 12 & 15 | 224), v += i(h, 6)) : v = e(h >> 6 & 31 | 192), v += e(h & 63 | 128), v
    }

    function l(h, p) {
        p = p || {};
        for (var v = p.strict !== !1, g = t(h), m = g.length, y = -1, b, _ = ""; ++y < m;) b = g[y], _ += a(b, v);
        return _
    }

    function u() {
        if (s >= o) throw Error("Invalid byte index");
        var h = c[s] & 255;
        if (s++, (h & 192) == 128) return h & 63;
        throw Error("Invalid continuation byte")
    }

    function d(h) {
        var p, v, g, m, y;
        if (s > o) throw Error("Invalid byte index");
        if (s == o) return !1;
        if (p = c[s] & 255, s++, !(p & 128)) return p;
        if ((p & 224) == 192) {
            if (v = u(), y = (p & 31) << 6 | v, y >= 128) return y;
            throw Error("Invalid continuation byte")
        }
        if ((p & 240) == 224) {
            if (v = u(), g = u(), y = (p & 15) << 12 | v << 6 | g, y >= 2048) return r(y, h) ? y : 65533;
            throw Error("Invalid continuation byte")
        }
        if ((p & 248) == 240 && (v = u(), g = u(), m = u(), y = (p & 7) << 18 | v << 12 | g << 6 | m, y >= 65536 && y <= 1114111)) return y;
        throw Error("Invalid UTF-8 detected")
    }
    var c, o, s;

    function f(h, p) {
        p = p || {};
        var v = p.strict !== !1;
        c = t(h), o = c.length, s = 0;
        for (var g = [], m;
            (m = d(v)) !== !1;) g.push(m);
        return n(g)
    }
    return Ts = {
        version: "2.1.2",
        encode: l,
        decode: f
    }, Ts
}
var or = {},
    Sa;

function zh() {
    return Sa || (Sa = 1, function(e) {
        or.encode = function(t) {
            var n = new Uint8Array(t),
                r, i = n.length,
                a = "";
            for (r = 0; r < i; r += 3) a += e[n[r] >> 2], a += e[(n[r] & 3) << 4 | n[r + 1] >> 4], a += e[(n[r + 1] & 15) << 2 | n[r + 2] >> 6], a += e[n[r + 2] & 63];
            return i % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : i % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a
        }, or.decode = function(t) {
            var n = t.length * .75,
                r = t.length,
                i, a = 0,
                l, u, d, c;
            t[t.length - 1] === "=" && (n--, t[t.length - 2] === "=" && n--);
            var o = new ArrayBuffer(n),
                s = new Uint8Array(o);
            for (i = 0; i < r; i += 4) l = e.indexOf(t[i]), u = e.indexOf(t[i + 1]), d = e.indexOf(t[i + 2]), c = e.indexOf(t[i + 3]), s[a++] = l << 2 | u >> 4, s[a++] = (u & 15) << 4 | d >> 2, s[a++] = (d & 3) << 6 | c & 63;
            return o
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), or
}
var Os, ka;

function jh() {
    if (ka) return Os;
    ka = 1;
    var e = typeof e < "u" ? e : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        t = function() {
            try {
                var u = new Blob(["hi"]);
                return u.size === 2
            } catch {
                return !1
            }
        }(),
        n = t && function() {
            try {
                var u = new Blob([new Uint8Array([1, 2])]);
                return u.size === 2
            } catch {
                return !1
            }
        }(),
        r = e && e.prototype.append && e.prototype.getBlob;

    function i(u) {
        return u.map(function(d) {
            if (d.buffer instanceof ArrayBuffer) {
                var c = d.buffer;
                if (d.byteLength !== c.byteLength) {
                    var o = new Uint8Array(d.byteLength);
                    o.set(new Uint8Array(c, d.byteOffset, d.byteLength)), c = o.buffer
                }
                return c
            }
            return d
        })
    }

    function a(u, d) {
        d = d || {};
        var c = new e;
        return i(u).forEach(function(o) {
            c.append(o)
        }), d.type ? c.getBlob(d.type) : c.getBlob()
    }

    function l(u, d) {
        return new Blob(i(u), d || {})
    }
    return typeof Blob < "u" && (a.prototype = Blob.prototype, l.prototype = Blob.prototype), Os = function() {
        return t ? n ? Blob : l : r ? a : void 0
    }(), Os
}
var xa;

function rn() {
    return xa || (xa = 1, function(e) {
        var t = Lh(),
            n = Qu(),
            r = $h(),
            i = qh(),
            a = Nh(),
            l;
        typeof ArrayBuffer < "u" && (l = zh());
        var u = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
            d = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
            c = u || d;
        e.protocol = 3;
        var o = e.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            s = t(o),
            f = {
                type: "error",
                data: "parser error"
            },
            h = jh();
        e.encodePacket = function(_, w, F, C) {
            typeof w == "function" && (C = w, w = !1), typeof F == "function" && (C = F, F = null);
            var A = _.data === void 0 ? void 0 : _.data.buffer || _.data;
            if (typeof ArrayBuffer < "u" && A instanceof ArrayBuffer) return v(_, w, C);
            if (typeof h < "u" && A instanceof h) return m(_, w, C);
            if (A && A.base64) return p(_, C);
            var k = o[_.type];
            return _.data !== void 0 && (k += F ? a.encode(String(_.data), {
                strict: !1
            }) : String(_.data)), C("" + k)
        };

        function p(_, w) {
            var F = "b" + e.packets[_.type] + _.data.data;
            return w(F)
        }

        function v(_, w, F) {
            if (!w) return e.encodeBase64Packet(_, F);
            var C = _.data,
                A = new Uint8Array(C),
                k = new Uint8Array(1 + C.byteLength);
            k[0] = o[_.type];
            for (var D = 0; D < A.length; D++) k[D + 1] = A[D];
            return F(k.buffer)
        }

        function g(_, w, F) {
            if (!w) return e.encodeBase64Packet(_, F);
            var C = new FileReader;
            return C.onload = function() {
                e.encodePacket({
                    type: _.type,
                    data: C.result
                }, w, !0, F)
            }, C.readAsArrayBuffer(_.data)
        }

        function m(_, w, F) {
            if (!w) return e.encodeBase64Packet(_, F);
            if (c) return g(_, w, F);
            var C = new Uint8Array(1);
            C[0] = o[_.type];
            var A = new h([C.buffer, _.data]);
            return F(A)
        }
        e.encodeBase64Packet = function(_, w) {
            var F = "b" + e.packets[_.type];
            if (typeof h < "u" && _.data instanceof h) {
                var C = new FileReader;
                return C.onload = function() {
                    var I = C.result.split(",")[1];
                    w(F + I)
                }, C.readAsDataURL(_.data)
            }
            var A;
            try {
                A = String.fromCharCode.apply(null, new Uint8Array(_.data))
            } catch {
                for (var k = new Uint8Array(_.data), D = new Array(k.length), B = 0; B < k.length; B++) D[B] = k[B];
                A = String.fromCharCode.apply(null, D)
            }
            return F += btoa(A), w(F)
        }, e.decodePacket = function(_, w, F) {
            if (_ === void 0) return f;
            if (typeof _ == "string") {
                if (_.charAt(0) === "b") return e.decodeBase64Packet(_.substr(1), w);
                if (F && (_ = y(_), _ === !1)) return f;
                var A = _.charAt(0);
                return Number(A) != A || !s[A] ? f : _.length > 1 ? {
                    type: s[A],
                    data: _.substring(1)
                } : {
                    type: s[A]
                }
            }
            var C = new Uint8Array(_),
                A = C[0],
                k = r(_, 1);
            return h && w === "blob" && (k = new h([k])), {
                type: s[A],
                data: k
            }
        };

        function y(_) {
            try {
                _ = a.decode(_, {
                    strict: !1
                })
            } catch {
                return !1
            }
            return _
        }
        e.decodeBase64Packet = function(_, w) {
            var F = s[_.charAt(0)];
            if (!l) return {
                type: F,
                data: {
                    base64: !0,
                    data: _.substr(1)
                }
            };
            var C = l.decode(_.substr(1));
            return w === "blob" && h && (C = new h([C])), {
                type: F,
                data: C
            }
        }, e.encodePayload = function(_, w, F) {
            typeof w == "function" && (F = w, w = null);
            var C = n(_);
            if (w && C) return h && !c ? e.encodePayloadAsBlob(_, F) : e.encodePayloadAsArrayBuffer(_, F);
            if (!_.length) return F("0:");

            function A(D) {
                return D.length + ":" + D
            }

            function k(D, B) {
                e.encodePacket(D, C ? w : !1, !1, function(I) {
                    B(null, A(I))
                })
            }
            b(_, k, function(D, B) {
                return F(B.join(""))
            })
        };

        function b(_, w, F) {
            for (var C = new Array(_.length), A = i(_.length, F), k = function(B, I, J) {
                    w(I, function(Q, ee) {
                        C[B] = ee, J(Q, C)
                    })
                }, D = 0; D < _.length; D++) k(D, _[D], A)
        }
        e.decodePayload = function(_, w, F) {
            if (typeof _ != "string") return e.decodePayloadAsBinary(_, w, F);
            typeof w == "function" && (F = w, w = null);
            var C;
            if (_ === "") return F(f, 0, 1);
            for (var A = "", k, D, B = 0, I = _.length; B < I; B++) {
                var J = _.charAt(B);
                if (J !== ":") {
                    A += J;
                    continue
                }
                if (A === "" || A != (k = Number(A)) || (D = _.substr(B + 1, k), A != D.length)) return F(f, 0, 1);
                if (D.length) {
                    if (C = e.decodePacket(D, w, !1), f.type === C.type && f.data === C.data) return F(f, 0, 1);
                    var Q = F(C, B + k, I);
                    if (Q === !1) return
                }
                B += k, A = ""
            }
            if (A !== "") return F(f, 0, 1)
        }, e.encodePayloadAsArrayBuffer = function(_, w) {
            if (!_.length) return w(new ArrayBuffer(0));

            function F(C, A) {
                e.encodePacket(C, !0, !0, function(k) {
                    return A(null, k)
                })
            }
            b(_, F, function(C, A) {
                var k = A.reduce(function(I, J) {
                        var Q;
                        return typeof J == "string" ? Q = J.length : Q = J.byteLength, I + Q.toString().length + Q + 2
                    }, 0),
                    D = new Uint8Array(k),
                    B = 0;
                return A.forEach(function(I) {
                    var J = typeof I == "string",
                        Q = I;
                    if (J) {
                        for (var Ft = new Uint8Array(I.length), ee = 0; ee < I.length; ee++) Ft[ee] = I.charCodeAt(ee);
                        Q = Ft.buffer
                    }
                    J ? D[B++] = 0 : D[B++] = 1;
                    for (var Et = Q.byteLength.toString(), ee = 0; ee < Et.length; ee++) D[B++] = parseInt(Et[ee]);
                    D[B++] = 255;
                    for (var Ft = new Uint8Array(Q), ee = 0; ee < Ft.length; ee++) D[B++] = Ft[ee]
                }), w(D.buffer)
            })
        }, e.encodePayloadAsBlob = function(_, w) {
            function F(C, A) {
                e.encodePacket(C, !0, !0, function(k) {
                    var D = new Uint8Array(1);
                    if (D[0] = 1, typeof k == "string") {
                        for (var B = new Uint8Array(k.length), I = 0; I < k.length; I++) B[I] = k.charCodeAt(I);
                        k = B.buffer, D[0] = 0
                    }
                    for (var J = k instanceof ArrayBuffer ? k.byteLength : k.size, Q = J.toString(), ee = new Uint8Array(Q.length + 1), I = 0; I < Q.length; I++) ee[I] = parseInt(Q[I]);
                    if (ee[Q.length] = 255, h) {
                        var Et = new h([D.buffer, ee.buffer, k]);
                        A(null, Et)
                    }
                })
            }
            b(_, F, function(C, A) {
                return w(new h(A))
            })
        }, e.decodePayloadAsBinary = function(_, w, F) {
            typeof w == "function" && (F = w, w = null);
            for (var C = _, A = []; C.byteLength > 0;) {
                for (var k = new Uint8Array(C), D = k[0] === 0, B = "", I = 1; k[I] !== 255; I++) {
                    if (B.length > 310) return F(f, 0, 1);
                    B += k[I]
                }
                C = r(C, 2 + B.length), B = parseInt(B);
                var J = r(C, 0, B);
                if (D) try {
                    J = String.fromCharCode.apply(null, new Uint8Array(J))
                } catch {
                    var Q = new Uint8Array(J);
                    J = "";
                    for (var I = 0; I < Q.length; I++) J += String.fromCharCode(Q[I])
                }
                A.push(J), C = r(C, B)
            }
            var ee = A.length;
            A.forEach(function(Et, Ft) {
                F(e.decodePacket(Et, w, !0), Ft, ee)
            })
        }
    }(Es)), Es
}
var Ms, Ta;

function ro() {
    if (Ta) return Ms;
    Ta = 1;
    var e = rn(),
        t = Hr();
    Ms = n;

    function n(r) {
        this.path = r.path, this.hostname = r.hostname, this.port = r.port, this.secure = r.secure, this.query = r.query, this.timestampParam = r.timestampParam, this.timestampRequests = r.timestampRequests, this.readyState = "", this.agent = r.agent || !1, this.socket = r.socket, this.enablesXDR = r.enablesXDR, this.withCredentials = r.withCredentials, this.pfx = r.pfx, this.key = r.key, this.passphrase = r.passphrase, this.cert = r.cert, this.ca = r.ca, this.ciphers = r.ciphers, this.rejectUnauthorized = r.rejectUnauthorized, this.forceNode = r.forceNode, this.isReactNative = r.isReactNative, this.extraHeaders = r.extraHeaders, this.localAddress = r.localAddress
    }
    return t(n.prototype), n.prototype.onError = function(r, i) {
        var a = new Error(r);
        return a.type = "TransportError", a.description = i, this.emit("error", a), this
    }, n.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, n.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, n.prototype.send = function(r) {
        if (this.readyState === "open") this.write(r);
        else throw new Error("Transport not open")
    }, n.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, n.prototype.onData = function(r) {
        var i = e.decodePacket(r, this.socket.binaryType);
        this.onPacket(i)
    }, n.prototype.onPacket = function(r) {
        this.emit("packet", r)
    }, n.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, Ms
}
var ar = {},
    Oa;

function so() {
    return Oa || (Oa = 1, ar.encode = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t
    }, ar.decode = function(e) {
        for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
            var a = n[r].split("=");
            t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }
        return t
    }), ar
}
var Ds, Ma;

function Gr() {
    return Ma || (Ma = 1, Ds = function(e, t) {
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }), Ds
}
var Rs, Da;

function el() {
    if (Da) return Rs;
    Da = 1;
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        t = 64,
        n = {},
        r = 0,
        i = 0,
        a;

    function l(c) {
        var o = "";
        do o = e[c % t] + o, c = Math.floor(c / t); while (c > 0);
        return o
    }

    function u(c) {
        var o = 0;
        for (i = 0; i < c.length; i++) o = o * t + n[c.charAt(i)];
        return o
    }

    function d() {
        var c = l(+new Date);
        return c !== a ? (r = 0, a = c) : c + "." + l(r++)
    }
    for (; i < t; i++) n[e[i]] = i;
    return d.encode = l, d.decode = u, Rs = d, Rs
}
var Bs, Ra;

function tl() {
    if (Ra) return Bs;
    Ra = 1;
    var e = ro(),
        t = so(),
        n = rn(),
        r = Gr(),
        i = el(),
        a = qn()("engine.io-client:polling");
    Bs = u;
    var l = function() {
        var d = no(),
            c = new d({
                xdomain: !1
            });
        return c.responseType != null
    }();

    function u(d) {
        var c = d && d.forceBase64;
        (!l || c) && (this.supportsBinary = !1), e.call(this, d)
    }
    return r(u, e), u.prototype.name = "polling", u.prototype.doOpen = function() {
        this.poll()
    }, u.prototype.pause = function(d) {
        var c = this;
        this.readyState = "pausing";

        function o() {
            a("paused"), c.readyState = "paused", d()
        }
        if (this.polling || !this.writable) {
            var s = 0;
            this.polling && (a("we are currently polling - waiting to pause"), s++, this.once("pollComplete", function() {
                a("pre-pause polling complete"), --s || o()
            })), this.writable || (a("we are currently writing - waiting to pause"), s++, this.once("drain", function() {
                a("pre-pause writing complete"), --s || o()
            }))
        } else o()
    }, u.prototype.poll = function() {
        a("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, u.prototype.onData = function(d) {
        var c = this;
        a("polling got data %s", d);
        var o = function(s, f, h) {
            if (c.readyState === "opening" && c.onOpen(), s.type === "close") return c.onClose(), !1;
            c.onPacket(s)
        };
        n.decodePayload(d, this.socket.binaryType, o), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : a('ignoring poll - transport state "%s"', this.readyState))
    }, u.prototype.doClose = function() {
        var d = this;

        function c() {
            a("writing close packet"), d.write([{
                type: "close"
            }])
        }
        this.readyState === "open" ? (a("transport open - closing"), c()) : (a("transport not open - deferring close"), this.once("open", c))
    }, u.prototype.write = function(d) {
        var c = this;
        this.writable = !1;
        var o = function() {
            c.writable = !0, c.emit("drain")
        };
        n.encodePayload(d, this.supportsBinary, function(s) {
            c.doWrite(s, o)
        })
    }, u.prototype.uri = function() {
        var d = this.query || {},
            c = this.secure ? "https" : "http",
            o = "";
        this.timestampRequests !== !1 && (d[this.timestampParam] = i()), !this.supportsBinary && !d.sid && (d.b64 = 1), d = t.encode(d), this.port && (c === "https" && Number(this.port) !== 443 || c === "http" && Number(this.port) !== 80) && (o = ":" + this.port), d.length && (d = "?" + d);
        var s = this.hostname.indexOf(":") !== -1;
        return c + "://" + (s ? "[" + this.hostname + "]" : this.hostname) + o + this.path + d
    }, Bs
}
var Ba;

function Uh() {
    if (Ba) return ir.exports;
    Ba = 1;
    var e = no(),
        t = tl(),
        n = Hr(),
        r = Gr(),
        i = qn()("engine.io-client:polling-xhr"),
        a = to();
    ir.exports = u, ir.exports.Request = d;

    function l() {}

    function u(s) {
        if (t.call(this, s), this.requestTimeout = s.requestTimeout, this.extraHeaders = s.extraHeaders, typeof location < "u") {
            var f = location.protocol === "https:",
                h = location.port;
            h || (h = f ? 443 : 80), this.xd = typeof location < "u" && s.hostname !== location.hostname || h !== s.port, this.xs = s.secure !== f
        }
    }
    r(u, t), u.prototype.supportsBinary = !0, u.prototype.request = function(s) {
        return s = s || {}, s.uri = this.uri(), s.xd = this.xd, s.xs = this.xs, s.agent = this.agent || !1, s.supportsBinary = this.supportsBinary, s.enablesXDR = this.enablesXDR, s.withCredentials = this.withCredentials, s.pfx = this.pfx, s.key = this.key, s.passphrase = this.passphrase, s.cert = this.cert, s.ca = this.ca, s.ciphers = this.ciphers, s.rejectUnauthorized = this.rejectUnauthorized, s.requestTimeout = this.requestTimeout, s.extraHeaders = this.extraHeaders, new d(s)
    }, u.prototype.doWrite = function(s, f) {
        var h = typeof s != "string" && s !== void 0,
            p = this.request({
                method: "POST",
                data: s,
                isBinary: h
            }),
            v = this;
        p.on("success", f), p.on("error", function(g) {
            v.onError("xhr post error", g)
        }), this.sendXhr = p
    }, u.prototype.doPoll = function() {
        i("xhr poll");
        var s = this.request(),
            f = this;
        s.on("data", function(h) {
            f.onData(h)
        }), s.on("error", function(h) {
            f.onError("xhr poll error", h)
        }), this.pollXhr = s
    };

    function d(s) {
        this.method = s.method || "GET", this.uri = s.uri, this.xd = !!s.xd, this.xs = !!s.xs, this.async = s.async !== !1, this.data = s.data !== void 0 ? s.data : null, this.agent = s.agent, this.isBinary = s.isBinary, this.supportsBinary = s.supportsBinary, this.enablesXDR = s.enablesXDR, this.withCredentials = s.withCredentials, this.requestTimeout = s.requestTimeout, this.pfx = s.pfx, this.key = s.key, this.passphrase = s.passphrase, this.cert = s.cert, this.ca = s.ca, this.ciphers = s.ciphers, this.rejectUnauthorized = s.rejectUnauthorized, this.extraHeaders = s.extraHeaders, this.create()
    }
    if (n(d.prototype), d.prototype.create = function() {
            var s = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            s.pfx = this.pfx, s.key = this.key, s.passphrase = this.passphrase, s.cert = this.cert, s.ca = this.ca, s.ciphers = this.ciphers, s.rejectUnauthorized = this.rejectUnauthorized;
            var f = this.xhr = new e(s),
                h = this;
            try {
                i("xhr open %s: %s", this.method, this.uri), f.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders) {
                        f.setDisableHeaderCheck && f.setDisableHeaderCheck(!0);
                        for (var p in this.extraHeaders) this.extraHeaders.hasOwnProperty(p) && f.setRequestHeader(p, this.extraHeaders[p])
                    }
                } catch {}
                if (this.method === "POST") try {
                    this.isBinary ? f.setRequestHeader("Content-type", "application/octet-stream") : f.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
                try {
                    f.setRequestHeader("Accept", "*/*")
                } catch {}
                "withCredentials" in f && (f.withCredentials = this.withCredentials), this.requestTimeout && (f.timeout = this.requestTimeout), this.hasXDR() ? (f.onload = function() {
                    h.onLoad()
                }, f.onerror = function() {
                    h.onError(f.responseText)
                }) : f.onreadystatechange = function() {
                    if (f.readyState === 2) try {
                        var v = f.getResponseHeader("Content-Type");
                        (h.supportsBinary && v === "application/octet-stream" || v === "application/octet-stream; charset=UTF-8") && (f.responseType = "arraybuffer")
                    } catch {}
                    f.readyState === 4 && (f.status === 200 || f.status === 1223 ? h.onLoad() : setTimeout(function() {
                        h.onError(typeof f.status == "number" ? f.status : 0)
                    }, 0))
                }, i("xhr data %s", this.data), f.send(this.data)
            } catch (v) {
                setTimeout(function() {
                    h.onError(v)
                }, 0);
                return
            }
            typeof document < "u" && (this.index = d.requestsCount++, d.requests[this.index] = this)
        }, d.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, d.prototype.onData = function(s) {
            this.emit("data", s), this.onSuccess()
        }, d.prototype.onError = function(s) {
            this.emit("error", s), this.cleanup(!0)
        }, d.prototype.cleanup = function(s) {
            if (!(typeof this.xhr > "u" || this.xhr === null)) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, s) try {
                    this.xhr.abort()
                } catch {}
                typeof document < "u" && delete d.requests[this.index], this.xhr = null
            }
        }, d.prototype.onLoad = function() {
            var s;
            try {
                var f;
                try {
                    f = this.xhr.getResponseHeader("Content-Type")
                } catch {}
                f === "application/octet-stream" || f === "application/octet-stream; charset=UTF-8" ? s = this.xhr.response || this.xhr.responseText : s = this.xhr.responseText
            } catch (h) {
                this.onError(h)
            }
            s != null && this.onData(s)
        }, d.prototype.hasXDR = function() {
            return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
        }, d.prototype.abort = function() {
            this.cleanup()
        }, d.requestsCount = 0, d.requests = {}, typeof document < "u") {
        if (typeof attachEvent == "function") attachEvent("onunload", o);
        else if (typeof addEventListener == "function") {
            var c = "onpagehide" in a ? "pagehide" : "unload";
            addEventListener(c, o, !1)
        }
    }

    function o() {
        for (var s in d.requests) d.requests.hasOwnProperty(s) && d.requests[s].abort()
    }
    return ir.exports
}
var Ps, Pa;

function Vh() {
    if (Pa) return Ps;
    Pa = 1;
    var e = tl(),
        t = Gr(),
        n = to();
    Ps = u;
    var r = /\n/g,
        i = /\\n/g,
        a;

    function l() {}

    function u(d) {
        e.call(this, d), this.query = this.query || {}, a || (a = n.___eio = n.___eio || []), this.index = a.length;
        var c = this;
        a.push(function(o) {
            c.onData(o)
        }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
            c.script && (c.script.onerror = l)
        }, !1)
    }
    return t(u, e), u.prototype.supportsBinary = !1, u.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), e.prototype.doClose.call(this)
    }, u.prototype.doPoll = function() {
        var d = this,
            c = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), c.async = !0, c.src = this.uri(), c.onerror = function(f) {
            d.onError("jsonp poll error", f)
        };
        var o = document.getElementsByTagName("script")[0];
        o ? o.parentNode.insertBefore(c, o) : (document.head || document.body).appendChild(c), this.script = c;
        var s = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
        s && setTimeout(function() {
            var f = document.createElement("iframe");
            document.body.appendChild(f), document.body.removeChild(f)
        }, 100)
    }, u.prototype.doWrite = function(d, c) {
        var o = this;
        if (!this.form) {
            var s = document.createElement("form"),
                f = document.createElement("textarea"),
                h = this.iframeId = "eio_iframe_" + this.index,
                p;
            s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = h, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), f.name = "d", s.appendChild(f), document.body.appendChild(s), this.form = s, this.area = f
        }
        this.form.action = this.uri();

        function v() {
            g(), c()
        }

        function g() {
            if (o.iframe) try {
                o.form.removeChild(o.iframe)
            } catch (y) {
                o.onError("jsonp polling iframe removal error", y)
            }
            try {
                var m = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                p = document.createElement(m)
            } catch {
                p = document.createElement("iframe"), p.name = o.iframeId, p.src = "javascript:0"
            }
            p.id = o.iframeId, o.form.appendChild(p), o.iframe = p
        }
        g(), d = d.replace(i, `\\
`), this.area.value = d.replace(r, "\\n");
        try {
            this.form.submit()
        } catch {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            o.iframe.readyState === "complete" && v()
        } : this.iframe.onload = v
    }, Ps
}
const Hh = {},
    Gh = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Hh
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nl = Hu(Gh);
var Is, Ia;

function Wh() {
    if (Ia) return Is;
    Ia = 1;
    var e = ro(),
        t = rn(),
        n = so(),
        r = Gr(),
        i = el(),
        a = qn()("engine.io-client:websocket"),
        l, u;
    if (typeof WebSocket < "u" ? l = WebSocket : typeof self < "u" && (l = self.WebSocket || self.MozWebSocket), typeof window > "u") try {
        u = nl
    } catch {}
    var d = l || u;
    Is = c;

    function c(o) {
        var s = o && o.forceBase64;
        s && (this.supportsBinary = !1), this.perMessageDeflate = o.perMessageDeflate, this.usingBrowserWebSocket = l && !o.forceNode, this.protocols = o.protocols, this.usingBrowserWebSocket || (d = u), e.call(this, o)
    }
    return r(c, e), c.prototype.name = "websocket", c.prototype.supportsBinary = !0, c.prototype.doOpen = function() {
        if (this.check()) {
            var o = this.uri(),
                s = this.protocols,
                f = {};
            this.isReactNative || (f.agent = this.agent, f.perMessageDeflate = this.perMessageDeflate, f.pfx = this.pfx, f.key = this.key, f.passphrase = this.passphrase, f.cert = this.cert, f.ca = this.ca, f.ciphers = this.ciphers, f.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (f.headers = this.extraHeaders), this.localAddress && (f.localAddress = this.localAddress);
            try {
                this.ws = this.usingBrowserWebSocket && !this.isReactNative ? s ? new d(o, s) : new d(o) : new d(o, s, f)
            } catch (h) {
                return this.emit("error", h)
            }
            this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
        }
    }, c.prototype.addEventListeners = function() {
        var o = this;
        this.ws.onopen = function() {
            o.onOpen()
        }, this.ws.onclose = function() {
            o.onClose()
        }, this.ws.onmessage = function(s) {
            o.onData(s.data)
        }, this.ws.onerror = function(s) {
            o.onError("websocket error", s)
        }
    }, c.prototype.write = function(o) {
        var s = this;
        this.writable = !1;
        for (var f = o.length, h = 0, p = f; h < p; h++)(function(g) {
            t.encodePacket(g, s.supportsBinary, function(m) {
                if (!s.usingBrowserWebSocket) {
                    var y = {};
                    if (g.options && (y.compress = g.options.compress), s.perMessageDeflate) {
                        var b = typeof m == "string" ? Buffer.byteLength(m) : m.length;
                        b < s.perMessageDeflate.threshold && (y.compress = !1)
                    }
                }
                try {
                    s.usingBrowserWebSocket ? s.ws.send(m) : s.ws.send(m, y)
                } catch {
                    a("websocket closed before onclose event")
                }--f || v()
            })
        })(o[h]);

        function v() {
            s.emit("flush"), setTimeout(function() {
                s.writable = !0, s.emit("drain")
            }, 0)
        }
    }, c.prototype.onClose = function() {
        e.prototype.onClose.call(this)
    }, c.prototype.doClose = function() {
        typeof this.ws < "u" && this.ws.close()
    }, c.prototype.uri = function() {
        var o = this.query || {},
            s = this.secure ? "wss" : "ws",
            f = "";
        this.port && (s === "wss" && Number(this.port) !== 443 || s === "ws" && Number(this.port) !== 80) && (f = ":" + this.port), this.timestampRequests && (o[this.timestampParam] = i()), this.supportsBinary || (o.b64 = 1), o = n.encode(o), o.length && (o = "?" + o);
        var h = this.hostname.indexOf(":") !== -1;
        return s + "://" + (h ? "[" + this.hostname + "]" : this.hostname) + f + this.path + o
    }, c.prototype.check = function() {
        return !!d && !("__initialize" in d && this.name === c.prototype.name)
    }, Is
}
var La;

function $a() {
    if (La) return rr;
    La = 1;
    var e = no(),
        t = Uh(),
        n = Vh(),
        r = Wh();
    rr.polling = i, rr.websocket = r;

    function i(a) {
        var l, u = !1,
            d = !1,
            c = a.jsonp !== !1;
        if (typeof location < "u") {
            var o = location.protocol === "https:",
                s = location.port;
            s || (s = o ? 443 : 80), u = a.hostname !== location.hostname || s !== a.port, d = a.secure !== o
        }
        if (a.xdomain = u, a.xscheme = d, l = new e(a), "open" in l && !a.forceJSONP) return new t(a);
        if (!c) throw new Error("JSONP disabled");
        return new n(a)
    }
    return rr
}
var Ls, qa;

function rl() {
    if (qa) return Ls;
    qa = 1;
    var e = [].indexOf;
    return Ls = function(t, n) {
        if (e) return t.indexOf(n);
        for (var r = 0; r < t.length; ++r)
            if (t[r] === n) return r;
        return -1
    }, Ls
}
var $s, Na;

function Kh() {
    if (Na) return $s;
    Na = 1;
    var e = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        t = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    $s = function(a) {
        var l = a,
            u = a.indexOf("["),
            d = a.indexOf("]");
        u != -1 && d != -1 && (a = a.substring(0, u) + a.substring(u, d).replace(/:/g, ";") + a.substring(d, a.length));
        for (var c = e.exec(a || ""), o = {}, s = 14; s--;) o[t[s]] = c[s] || "";
        return u != -1 && d != -1 && (o.source = l, o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"), o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o.ipv6uri = !0), o.pathNames = n(o, o.path), o.queryKey = r(o, o.query), o
    };

    function n(i, a) {
        var l = /\/{2,9}/g,
            u = a.replace(l, "/").split("/");
        return (a.substr(0, 1) == "/" || a.length === 0) && u.splice(0, 1), a.substr(a.length - 1, 1) == "/" && u.splice(u.length - 1, 1), u
    }

    function r(i, a) {
        var l = {};
        return a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(u, d, c) {
            d && (l[d] = c)
        }), l
    }
    return $s
}
var qs, za;

function Xh() {
    if (za) return qs;
    za = 1;
    var e = $a(),
        t = Hr(),
        n = qn()("engine.io-client:socket"),
        r = rl(),
        i = rn(),
        a = Kh(),
        l = so();
    qs = u;

    function u(c, o) {
        if (!(this instanceof u)) return new u(c, o);
        o = o || {}, c && typeof c == "object" && (o = c, c = null), c ? (c = a(c), o.hostname = c.host, o.secure = c.protocol === "https" || c.protocol === "wss", o.port = c.port, c.query && (o.query = c.query)) : o.host && (o.hostname = a(o.host).host), this.secure = o.secure != null ? o.secure : typeof location < "u" && location.protocol === "https:", o.hostname && !o.port && (o.port = this.secure ? "443" : "80"), this.agent = o.agent || !1, this.hostname = o.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = o.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = o.query || {}, typeof this.query == "string" && (this.query = l.decode(this.query)), this.upgrade = o.upgrade !== !1, this.path = (o.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!o.forceJSONP, this.jsonp = o.jsonp !== !1, this.forceBase64 = !!o.forceBase64, this.enablesXDR = !!o.enablesXDR, this.withCredentials = o.withCredentials !== !1, this.timestampParam = o.timestampParam || "t", this.timestampRequests = o.timestampRequests, this.transports = o.transports || ["polling", "websocket"], this.transportOptions = o.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = o.policyPort || 843, this.rememberUpgrade = o.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = o.onlyBinaryUpgrades, this.perMessageDeflate = o.perMessageDeflate !== !1 ? o.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = o.pfx || null, this.key = o.key || null, this.passphrase = o.passphrase || null, this.cert = o.cert || null, this.ca = o.ca || null, this.ciphers = o.ciphers || null, this.rejectUnauthorized = o.rejectUnauthorized === void 0 ? !0 : o.rejectUnauthorized, this.forceNode = !!o.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (o.extraHeaders && Object.keys(o.extraHeaders).length > 0 && (this.extraHeaders = o.extraHeaders), o.localAddress && (this.localAddress = o.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    u.priorWebsocketSuccess = !1, t(u.prototype), u.protocol = i.protocol, u.Socket = u, u.Transport = ro(), u.transports = $a(), u.parser = rn(), u.prototype.createTransport = function(c) {
        n('creating transport "%s"', c);
        var o = d(this.query);
        o.EIO = i.protocol, o.transport = c;
        var s = this.transportOptions[c] || {};
        this.id && (o.sid = this.id);
        var f = new e[c]({
            query: o,
            socket: this,
            agent: s.agent || this.agent,
            hostname: s.hostname || this.hostname,
            port: s.port || this.port,
            secure: s.secure || this.secure,
            path: s.path || this.path,
            forceJSONP: s.forceJSONP || this.forceJSONP,
            jsonp: s.jsonp || this.jsonp,
            forceBase64: s.forceBase64 || this.forceBase64,
            enablesXDR: s.enablesXDR || this.enablesXDR,
            withCredentials: s.withCredentials || this.withCredentials,
            timestampRequests: s.timestampRequests || this.timestampRequests,
            timestampParam: s.timestampParam || this.timestampParam,
            policyPort: s.policyPort || this.policyPort,
            pfx: s.pfx || this.pfx,
            key: s.key || this.key,
            passphrase: s.passphrase || this.passphrase,
            cert: s.cert || this.cert,
            ca: s.ca || this.ca,
            ciphers: s.ciphers || this.ciphers,
            rejectUnauthorized: s.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: s.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: s.extraHeaders || this.extraHeaders,
            forceNode: s.forceNode || this.forceNode,
            localAddress: s.localAddress || this.localAddress,
            requestTimeout: s.requestTimeout || this.requestTimeout,
            protocols: s.protocols || void 0,
            isReactNative: this.isReactNative
        });
        return f
    };

    function d(c) {
        var o = {};
        for (var s in c) c.hasOwnProperty(s) && (o[s] = c[s]);
        return o
    }
    return u.prototype.open = function() {
        var c;
        if (this.rememberUpgrade && u.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) c = "websocket";
        else if (this.transports.length === 0) {
            var o = this;
            setTimeout(function() {
                o.emit("error", "No transports available")
            }, 0);
            return
        } else c = this.transports[0];
        this.readyState = "opening";
        try {
            c = this.createTransport(c)
        } catch {
            this.transports.shift(), this.open();
            return
        }
        c.open(), this.setTransport(c)
    }, u.prototype.setTransport = function(c) {
        n("setting transport %s", c.name);
        var o = this;
        this.transport && (n("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = c, c.on("drain", function() {
            o.onDrain()
        }).on("packet", function(s) {
            o.onPacket(s)
        }).on("error", function(s) {
            o.onError(s)
        }).on("close", function() {
            o.onClose("transport close")
        })
    }, u.prototype.probe = function(c) {
        n('probing transport "%s"', c);
        var o = this.createTransport(c, {
                probe: 1
            }),
            s = !1,
            f = this;
        u.priorWebsocketSuccess = !1;

        function h() {
            if (f.onlyBinaryUpgrades) {
                var _ = !this.supportsBinary && f.transport.supportsBinary;
                s = s || _
            }
            s || (n('probe transport "%s" opened', c), o.send([{
                type: "ping",
                data: "probe"
            }]), o.once("packet", function(w) {
                if (!s)
                    if (w.type === "pong" && w.data === "probe") {
                        if (n('probe transport "%s" pong', c), f.upgrading = !0, f.emit("upgrading", o), !o) return;
                        u.priorWebsocketSuccess = o.name === "websocket", n('pausing current transport "%s"', f.transport.name), f.transport.pause(function() {
                            s || f.readyState !== "closed" && (n("changing transport and sending upgrade packet"), b(), f.setTransport(o), o.send([{
                                type: "upgrade"
                            }]), f.emit("upgrade", o), o = null, f.upgrading = !1, f.flush())
                        })
                    } else {
                        n('probe transport "%s" failed', c);
                        var F = new Error("probe error");
                        F.transport = o.name, f.emit("upgradeError", F)
                    }
            }))
        }

        function p() {
            s || (s = !0, b(), o.close(), o = null)
        }

        function v(_) {
            var w = new Error("probe error: " + _);
            w.transport = o.name, p(), n('probe transport "%s" failed because of error: %s', c, _), f.emit("upgradeError", w)
        }

        function g() {
            v("transport closed")
        }

        function m() {
            v("socket closed")
        }

        function y(_) {
            o && _.name !== o.name && (n('"%s" works - aborting "%s"', _.name, o.name), p())
        }

        function b() {
            o.removeListener("open", h), o.removeListener("error", v), o.removeListener("close", g), f.removeListener("close", m), f.removeListener("upgrading", y)
        }
        o.once("open", h), o.once("error", v), o.once("close", g), this.once("close", m), this.once("upgrading", y), o.open()
    }, u.prototype.onOpen = function() {
        if (n("socket open"), this.readyState = "open", u.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
            n("starting upgrade probes");
            for (var c = 0, o = this.upgrades.length; c < o; c++) this.probe(this.upgrades[c])
        }
    }, u.prototype.onPacket = function(c) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (n('socket receive: type "%s", data "%s"', c.type, c.data), this.emit("packet", c), this.emit("heartbeat"), c.type) {
            case "open":
                this.onHandshake(JSON.parse(c.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var o = new Error("server error");
                o.code = c.data, this.onError(o);
                break;
            case "message":
                this.emit("data", c.data), this.emit("message", c.data);
                break
        } else n('packet received with socket readyState "%s"', this.readyState)
    }, u.prototype.onHandshake = function(c) {
        this.emit("handshake", c), this.id = c.sid, this.transport.query.sid = c.sid, this.upgrades = this.filterUpgrades(c.upgrades), this.pingInterval = c.pingInterval, this.pingTimeout = c.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, u.prototype.onHeartbeat = function(c) {
        clearTimeout(this.pingTimeoutTimer);
        var o = this;
        o.pingTimeoutTimer = setTimeout(function() {
            o.readyState !== "closed" && o.onClose("ping timeout")
        }, c || o.pingInterval + o.pingTimeout)
    }, u.prototype.setPing = function() {
        var c = this;
        clearTimeout(c.pingIntervalTimer), c.pingIntervalTimer = setTimeout(function() {
            n("writing ping packet - expecting pong within %sms", c.pingTimeout), c.ping(), c.onHeartbeat(c.pingTimeout)
        }, c.pingInterval)
    }, u.prototype.ping = function() {
        var c = this;
        this.sendPacket("ping", function() {
            c.emit("ping")
        })
    }, u.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
    }, u.prototype.flush = function() {
        this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (n("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, u.prototype.write = u.prototype.send = function(c, o, s) {
        return this.sendPacket("message", c, o, s), this
    }, u.prototype.sendPacket = function(c, o, s, f) {
        if (typeof o == "function" && (f = o, o = void 0), typeof s == "function" && (f = s, s = null), !(this.readyState === "closing" || this.readyState === "closed")) {
            s = s || {}, s.compress = s.compress !== !1;
            var h = {
                type: c,
                data: o,
                options: s
            };
            this.emit("packetCreate", h), this.writeBuffer.push(h), f && this.once("flush", f), this.flush()
        }
    }, u.prototype.close = function() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            var c = this;
            this.writeBuffer.length ? this.once("drain", function() {
                this.upgrading ? f() : o()
            }) : this.upgrading ? f() : o()
        }

        function o() {
            c.onClose("forced close"), n("socket closing - telling transport to close"), c.transport.close()
        }

        function s() {
            c.removeListener("upgrade", s), c.removeListener("upgradeError", s), o()
        }

        function f() {
            c.once("upgrade", s), c.once("upgradeError", s)
        }
        return this
    }, u.prototype.onError = function(c) {
        n("socket error %j", c), u.priorWebsocketSuccess = !1, this.emit("error", c), this.onClose("transport error", c)
    }, u.prototype.onClose = function(c, o) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            n('socket close with reason: "%s"', c);
            var s = this;
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", c, o), s.writeBuffer = [], s.prevBufferLen = 0
        }
    }, u.prototype.filterUpgrades = function(c) {
        for (var o = [], s = 0, f = c.length; s < f; s++) ~r(this.transports, c[s]) && o.push(c[s]);
        return o
    }, qs
}
var ja;

function Zh() {
    return ja || (ja = 1, nr.exports = Xh(), nr.exports.parser = rn()), nr.exports
}
var Ns = {
        exports: {}
    },
    zs = {
        exports: {}
    },
    Ua;

function sl() {
    return Ua || (Ua = 1, function(e) {
        e.exports = t;

        function t(r) {
            if (r) return n(r)
        }

        function n(r) {
            for (var i in t.prototype) r[i] = t.prototype[i];
            return r
        }
        t.prototype.on = t.prototype.addEventListener = function(r, i) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(i), this
        }, t.prototype.once = function(r, i) {
            function a() {
                this.off(r, a), i.apply(this, arguments)
            }
            return a.fn = i, this.on(r, a), this
        }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(r, i) {
            if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
            var a = this._callbacks["$" + r];
            if (!a) return this;
            if (arguments.length == 1) return delete this._callbacks["$" + r], this;
            for (var l, u = 0; u < a.length; u++)
                if (l = a[u], l === i || l.fn === i) {
                    a.splice(u, 1);
                    break
                }
            return this
        }, t.prototype.emit = function(r) {
            this._callbacks = this._callbacks || {};
            var i = [].slice.call(arguments, 1),
                a = this._callbacks["$" + r];
            if (a) {
                a = a.slice(0);
                for (var l = 0, u = a.length; l < u; ++l) a[l].apply(this, i)
            }
            return this
        }, t.prototype.listeners = function(r) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
        }, t.prototype.hasListeners = function(r) {
            return !!this.listeners(r).length
        }
    }(zs)), zs.exports
}
var js, Va;

function Yh() {
    if (Va) return js;
    Va = 1, js = e;

    function e(t, n) {
        var r = [];
        n = n || 0;
        for (var i = n || 0; i < t.length; i++) r[i - n] = t[i];
        return r
    }
    return js
}
var Us, Ha;

function il() {
    if (Ha) return Us;
    Ha = 1, Us = e;

    function e(t, n, r) {
        return t.on(n, r), {
            destroy: function() {
                t.removeListener(n, r)
            }
        }
    }
    return Us
}
var Vs, Ga;

function ol() {
    if (Ga) return Vs;
    Ga = 1;
    var e = [].slice;
    return Vs = function(t, n) {
        if (typeof n == "string" && (n = t[n]), typeof n != "function") throw new Error("bind() requires a function");
        var r = e.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(e.call(arguments)))
        }
    }, Vs
}
var cr = {},
    Wa;

function Jh() {
    return Wa || (Wa = 1, cr.encode = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t
    }, cr.decode = function(e) {
        for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
            var a = n[r].split("=");
            t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
        }
        return t
    }), cr
}
var Ka;

function al() {
    return Ka || (Ka = 1, function(e, t) {
        var n = eo(),
            r = sl(),
            i = Yh(),
            a = il(),
            l = ol(),
            u = Vr()("socket.io-client:socket"),
            d = Jh(),
            c = Qu();
        e.exports = f;
        var o = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            s = r.prototype.emit;

        function f(h, p, v) {
            this.io = h, this.nsp = p, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, v && v.query && (this.query = v.query), this.io.autoConnect && this.open()
        }
        r(f.prototype), f.prototype.subEvents = function() {
            if (!this.subs) {
                var h = this.io;
                this.subs = [a(h, "open", l(this, "onopen")), a(h, "packet", l(this, "onpacket")), a(h, "close", l(this, "onclose"))]
            }
        }, f.prototype.open = f.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(), this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
        }, f.prototype.send = function() {
            var h = i(arguments);
            return h.unshift("message"), this.emit.apply(this, h), this
        }, f.prototype.emit = function(h) {
            if (o.hasOwnProperty(h)) return s.apply(this, arguments), this;
            var p = i(arguments),
                v = {
                    type: (this.flags.binary !== void 0 ? this.flags.binary : c(p)) ? n.BINARY_EVENT : n.EVENT,
                    data: p
                };
            return v.options = {}, v.options.compress = !this.flags || this.flags.compress !== !1, typeof p[p.length - 1] == "function" && (u("emitting packet with ack id %d", this.ids), this.acks[this.ids] = p.pop(), v.id = this.ids++), this.connected ? this.packet(v) : this.sendBuffer.push(v), this.flags = {}, this
        }, f.prototype.packet = function(h) {
            h.nsp = this.nsp, this.io.packet(h)
        }, f.prototype.onopen = function() {
            if (u("transport is open - connecting"), this.nsp !== "/")
                if (this.query) {
                    var h = typeof this.query == "object" ? d.encode(this.query) : this.query;
                    u("sending connect packet with query %s", h), this.packet({
                        type: n.CONNECT,
                        query: h
                    })
                } else this.packet({
                    type: n.CONNECT
                })
        }, f.prototype.onclose = function(h) {
            u("close (%s)", h), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", h)
        }, f.prototype.onpacket = function(h) {
            var p = h.nsp === this.nsp,
                v = h.type === n.ERROR && h.nsp === "/";
            if (!(!p && !v)) switch (h.type) {
                case n.CONNECT:
                    this.onconnect();
                    break;
                case n.EVENT:
                    this.onevent(h);
                    break;
                case n.BINARY_EVENT:
                    this.onevent(h);
                    break;
                case n.ACK:
                    this.onack(h);
                    break;
                case n.BINARY_ACK:
                    this.onack(h);
                    break;
                case n.DISCONNECT:
                    this.ondisconnect();
                    break;
                case n.ERROR:
                    this.emit("error", h.data);
                    break
            }
        }, f.prototype.onevent = function(h) {
            var p = h.data || [];
            u("emitting event %j", p), h.id != null && (u("attaching ack callback to event"), p.push(this.ack(h.id))), this.connected ? s.apply(this, p) : this.receiveBuffer.push(p)
        }, f.prototype.ack = function(h) {
            var p = this,
                v = !1;
            return function() {
                if (!v) {
                    v = !0;
                    var g = i(arguments);
                    u("sending ack %j", g), p.packet({
                        type: c(g) ? n.BINARY_ACK : n.ACK,
                        id: h,
                        data: g
                    })
                }
            }
        }, f.prototype.onack = function(h) {
            var p = this.acks[h.id];
            typeof p == "function" ? (u("calling ack %s with %j", h.id, h.data), p.apply(this, h.data), delete this.acks[h.id]) : u("bad ack %s", h.id)
        }, f.prototype.onconnect = function() {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, f.prototype.emitBuffered = function() {
            var h;
            for (h = 0; h < this.receiveBuffer.length; h++) s.apply(this, this.receiveBuffer[h]);
            for (this.receiveBuffer = [], h = 0; h < this.sendBuffer.length; h++) this.packet(this.sendBuffer[h]);
            this.sendBuffer = []
        }, f.prototype.ondisconnect = function() {
            u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, f.prototype.destroy = function() {
            if (this.subs) {
                for (var h = 0; h < this.subs.length; h++) this.subs[h].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, f.prototype.close = f.prototype.disconnect = function() {
            return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({
                type: n.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, f.prototype.compress = function(h) {
            return this.flags.compress = h, this
        }, f.prototype.binary = function(h) {
            return this.flags.binary = h, this
        }
    }(Ns)), Ns.exports
}
var Hs, Xa;

function Qh() {
    if (Xa) return Hs;
    Xa = 1, Hs = e;

    function e(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }
    return e.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var n = Math.random(),
                r = Math.floor(n * this.jitter * t);
            t = Math.floor(n * 10) & 1 ? t + r : t - r
        }
        return Math.min(t, this.max) | 0
    }, e.prototype.reset = function() {
        this.attempts = 0
    }, e.prototype.setMin = function(t) {
        this.ms = t
    }, e.prototype.setMax = function(t) {
        this.max = t
    }, e.prototype.setJitter = function(t) {
        this.jitter = t
    }, Hs
}
var Gs, Za;

function Ya() {
    if (Za) return Gs;
    Za = 1;
    var e = Zh(),
        t = al(),
        n = sl(),
        r = eo(),
        i = il(),
        a = ol(),
        l = Vr()("socket.io-client:manager"),
        u = rl(),
        d = Qh(),
        c = Object.prototype.hasOwnProperty;
    Gs = o;

    function o(s, f) {
        if (!(this instanceof o)) return new o(s, f);
        s && typeof s == "object" && (f = s, s = void 0), f = f || {}, f.path = f.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = f, this.reconnection(f.reconnection !== !1), this.reconnectionAttempts(f.reconnectionAttempts || 1 / 0), this.reconnectionDelay(f.reconnectionDelay || 1e3), this.reconnectionDelayMax(f.reconnectionDelayMax || 5e3), this.randomizationFactor(f.randomizationFactor || .5), this.backoff = new d({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(f.timeout == null ? 2e4 : f.timeout), this.readyState = "closed", this.uri = s, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var h = f.parser || r;
        this.encoder = new h.Encoder, this.decoder = new h.Decoder, this.autoConnect = f.autoConnect !== !1, this.autoConnect && this.open()
    }
    return o.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var s in this.nsps) c.call(this.nsps, s) && this.nsps[s].emit.apply(this.nsps[s], arguments)
    }, o.prototype.updateSocketIds = function() {
        for (var s in this.nsps) c.call(this.nsps, s) && (this.nsps[s].id = this.generateId(s))
    }, o.prototype.generateId = function(s) {
        return (s === "/" ? "" : s + "#") + this.engine.id
    }, n(o.prototype), o.prototype.reconnection = function(s) {
        return arguments.length ? (this._reconnection = !!s, this) : this._reconnection
    }, o.prototype.reconnectionAttempts = function(s) {
        return arguments.length ? (this._reconnectionAttempts = s, this) : this._reconnectionAttempts
    }, o.prototype.reconnectionDelay = function(s) {
        return arguments.length ? (this._reconnectionDelay = s, this.backoff && this.backoff.setMin(s), this) : this._reconnectionDelay
    }, o.prototype.randomizationFactor = function(s) {
        return arguments.length ? (this._randomizationFactor = s, this.backoff && this.backoff.setJitter(s), this) : this._randomizationFactor
    }, o.prototype.reconnectionDelayMax = function(s) {
        return arguments.length ? (this._reconnectionDelayMax = s, this.backoff && this.backoff.setMax(s), this) : this._reconnectionDelayMax
    }, o.prototype.timeout = function(s) {
        return arguments.length ? (this._timeout = s, this) : this._timeout
    }, o.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }, o.prototype.open = o.prototype.connect = function(s, f) {
        if (l("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        l("opening %s", this.uri), this.engine = e(this.uri, this.opts);
        var h = this.engine,
            p = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var v = i(h, "open", function() {
                p.onopen(), s && s()
            }),
            g = i(h, "error", function(b) {
                if (l("connect_error"), p.cleanup(), p.readyState = "closed", p.emitAll("connect_error", b), s) {
                    var _ = new Error("Connection error");
                    _.data = b, s(_)
                } else p.maybeReconnectOnOpen()
            });
        if (this._timeout !== !1) {
            var m = this._timeout;
            l("connect attempt will timeout after %d", m);
            var y = setTimeout(function() {
                l("connect attempt timed out after %d", m), v.destroy(), h.close(), h.emit("error", "timeout"), p.emitAll("connect_timeout", m)
            }, m);
            this.subs.push({
                destroy: function() {
                    clearTimeout(y)
                }
            })
        }
        return this.subs.push(v), this.subs.push(g), this
    }, o.prototype.onopen = function() {
        l("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var s = this.engine;
        this.subs.push(i(s, "data", a(this, "ondata"))), this.subs.push(i(s, "ping", a(this, "onping"))), this.subs.push(i(s, "pong", a(this, "onpong"))), this.subs.push(i(s, "error", a(this, "onerror"))), this.subs.push(i(s, "close", a(this, "onclose"))), this.subs.push(i(this.decoder, "decoded", a(this, "ondecoded")))
    }, o.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, o.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, o.prototype.ondata = function(s) {
        this.decoder.add(s)
    }, o.prototype.ondecoded = function(s) {
        this.emit("packet", s)
    }, o.prototype.onerror = function(s) {
        l("error", s), this.emitAll("error", s)
    }, o.prototype.socket = function(s, f) {
        var h = this.nsps[s];
        if (!h) {
            h = new t(this, s, f), this.nsps[s] = h;
            var p = this;
            h.on("connecting", v), h.on("connect", function() {
                h.id = p.generateId(s)
            }), this.autoConnect && v()
        }

        function v() {
            ~u(p.connecting, h) || p.connecting.push(h)
        }
        return h
    }, o.prototype.destroy = function(s) {
        var f = u(this.connecting, s);
        ~f && this.connecting.splice(f, 1), !this.connecting.length && this.close()
    }, o.prototype.packet = function(s) {
        l("writing packet %j", s);
        var f = this;
        s.query && s.type === 0 && (s.nsp += "?" + s.query), f.encoding ? f.packetBuffer.push(s) : (f.encoding = !0, this.encoder.encode(s, function(h) {
            for (var p = 0; p < h.length; p++) f.engine.write(h[p], s.options);
            f.encoding = !1, f.processPacketQueue()
        }))
    }, o.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var s = this.packetBuffer.shift();
            this.packet(s)
        }
    }, o.prototype.cleanup = function() {
        l("cleanup");
        for (var s = this.subs.length, f = 0; f < s; f++) {
            var h = this.subs.shift();
            h.destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, o.prototype.close = o.prototype.disconnect = function() {
        l("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, o.prototype.onclose = function(s) {
        l("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", s), this._reconnection && !this.skipReconnect && this.reconnect()
    }, o.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var s = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) l("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var f = this.backoff.duration();
            l("will wait %dms before reconnect attempt", f), this.reconnecting = !0;
            var h = setTimeout(function() {
                s.skipReconnect || (l("attempting reconnect"), s.emitAll("reconnect_attempt", s.backoff.attempts), s.emitAll("reconnecting", s.backoff.attempts), !s.skipReconnect && s.open(function(p) {
                    p ? (l("reconnect attempt error"), s.reconnecting = !1, s.reconnect(), s.emitAll("reconnect_error", p.data)) : (l("reconnect success"), s.onreconnect())
                }))
            }, f);
            this.subs.push({
                destroy: function() {
                    clearTimeout(h)
                }
            })
        }
    }, o.prototype.onreconnect = function() {
        var s = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", s)
    }, Gs
}
var Ja;

function ep() {
    return Ja || (Ja = 1, function(e, t) {
        var n = Dh(),
            r = eo(),
            i = Ya(),
            a = Vr()("socket.io-client");
        e.exports = t = u;
        var l = t.managers = {};

        function u(d, c) {
            typeof d == "object" && (c = d, d = void 0), c = c || {};
            var o = n(d),
                s = o.source,
                f = o.id,
                h = o.path,
                p = l[f] && h in l[f].nsps,
                v = c.forceNew || c["force new connection"] || c.multiplex === !1 || p,
                g;
            return v ? (a("ignoring socket cache for %s", s), g = i(s, c)) : (l[f] || (a("new io instance for %s", s), l[f] = i(s, c)), g = l[f]), o.query && !c.query && (c.query = o.query), g.socket(o.path, c)
        }
        t.protocol = r.protocol, t.connect = u, t.Manager = Ya(), t.Socket = al()
    }(Jn, Jn.exports)), Jn.exports
}
var Ut = {};

function tp(e, t) {
    return t = t || {}, new Promise(function(n, r) {
        var i = new XMLHttpRequest,
            a = [],
            l = [],
            u = {},
            d = function() {
                return {
                    ok: (i.status / 100 | 0) == 2,
                    statusText: i.statusText,
                    status: i.status,
                    url: i.responseURL,
                    text: function() {
                        return Promise.resolve(i.responseText)
                    },
                    json: function() {
                        return Promise.resolve(i.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([i.response]))
                    },
                    clone: d,
                    headers: {
                        keys: function() {
                            return a
                        },
                        entries: function() {
                            return l
                        },
                        get: function(o) {
                            return u[o.toLowerCase()]
                        },
                        has: function(o) {
                            return o.toLowerCase() in u
                        }
                    }
                }
            };
        for (var c in i.open(t.method || "get", e, !0), i.onload = function() {
                i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(o, s, f) {
                    a.push(s = s.toLowerCase()), l.push([s, f]), u[s] = u[s] ? u[s] + "," + f : f
                }), n(d())
            }, i.onerror = r, i.withCredentials = t.credentials == "include", t.headers) i.setRequestHeader(c, t.headers[c]);
        i.send(t.body || null)
    })
}
const np = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tp
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Qa = Hu(np);
var Ws, ec;

function rp() {
    return ec || (ec = 1, Ws = self.fetch || (self.fetch = Qa.default || Qa)), Ws
}
var tc;

function sp() {
    if (tc) return Ut;
    tc = 1;
    var e = Ut.__importDefault || function(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    };
    Object.defineProperty(Ut, "__esModule", {
        value: !0
    }), Ut.fetchBalancerConfig = void 0;
    var t = nn(),
        n = e(rp()),
        r = function(i) {
            return (0, t.debug)("using balancer ".concat(i, " to get websocket url")), (0, n.default)("".concat(i)).then(function(a) {
                return a.json()
            }).then(function(a) {
                return a != null && a.url && (a != null && a.token) ? ((0, t.debug)("balancer returns url ".concat(a == null ? void 0 : a.url, " and token ").concat(a == null ? void 0 : a.token)), a) : ((0, t.debug)("balancer returns invalid response"), null)
            }).catch(function(a) {
                return (0, t.debug)("failed to resolve url: ".concat(a.message)), null
            })
        };
    return Ut.fetchBalancerConfig = r, Ut
}
var lt = {},
    nc;

function ip() {
    if (nc) return lt;
    nc = 1;
    var e = lt.__extends || function() {
            var l = function(u, d) {
                return l = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(c, o) {
                    c.__proto__ = o
                } || function(c, o) {
                    for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (c[s] = o[s])
                }, l(u, d)
            };
            return function(u, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
                l(u, d);

                function c() {
                    this.constructor = u
                }
                u.prototype = d === null ? Object.create(d) : (c.prototype = d.prototype, new c)
            }
        }(),
        t = lt.__spreadArray || function(l, u, d) {
            if (d || arguments.length === 2)
                for (var c = 0, o = u.length, s; c < o; c++)(s || !(c in u)) && (s || (s = Array.prototype.slice.call(u, 0, c)), s[c] = u[c]);
            return l.concat(s || Array.prototype.slice.call(u))
        },
        n = lt.__importDefault || function(l) {
            return l && l.__esModule ? l : {
                default: l
            }
        };
    Object.defineProperty(lt, "__esModule", {
        value: !0
    }), lt.SocketMock = void 0;
    var r = nn(),
        i = n(Yu()),
        a = function(l) {
            e(u, l);

            function u(d) {
                var c = l.call(this) || this;
                return c.options = d, c.id = "mock", c.connected = !1, c.disconnected = !0, c.binaryType = "blob", c
            }
            return u.prototype.open = function() {
                var d = this;
                return (0, r.debug)("SocketIOMock: connect"), this.once("visitor.connect", function(c, o) {
                    o(null, d.options.connectData)
                }), this.connected = !0, this.disconnected = !1, this.emit("connect"), this
            }, u.prototype.close = function() {
                return (0, r.debug)("SocketIOMock: disconnect"), this.connected = !1, this.disconnected = !1, this.emit("disconnect", "io client disconnect"), this
            }, u.prototype.emit = function(d) {
                for (var c = [], o = 1; o < arguments.length; o++) c[o - 1] = arguments[o];
                return r.debug.apply(void 0, t(["SocketIOMock: emit"], c, !1)), (d === "connect" || d === "disconnect" || d === "visitor.connect") && l.prototype.emit.apply(this, t([d], c, !1)), this
            }, u.prototype.send = function() {
                for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c];
                return this.emit(event, d)
            }, u.prototype.compress = function() {
                return this
            }, u.prototype.connect = function() {
                return this.open()
            }, u.prototype.disconnect = function() {
                return this.close()
            }, u.prototype.hasListeners = function(d) {
                return this.listenerCount(d) === 0
            }, u.prototype.addEventListener = function(d, c) {
                return this.addListener(d, c), this
            }, u.prototype.removeEventListener = function(d, c) {
                return this.removeListener(d, c), this
            }, u
        }(i.default);
    return lt.SocketMock = a, lt
}
var rc;

function cl() {
    return rc || (rc = 1, function(e) {
        var t = rt.__assign || function() {
                return t = Object.assign || function(p) {
                    for (var v, g = 1, m = arguments.length; g < m; g++) {
                        v = arguments[g];
                        for (var y in v) Object.prototype.hasOwnProperty.call(v, y) && (p[y] = v[y])
                    }
                    return p
                }, t.apply(this, arguments)
            },
            n = rt.__createBinding || (Object.create ? function(p, v, g, m) {
                m === void 0 && (m = g);
                var y = Object.getOwnPropertyDescriptor(v, g);
                (!y || ("get" in y ? !v.__esModule : y.writable || y.configurable)) && (y = {
                    enumerable: !0,
                    get: function() {
                        return v[g]
                    }
                }), Object.defineProperty(p, m, y)
            } : function(p, v, g, m) {
                m === void 0 && (m = g), p[m] = v[g]
            }),
            r = rt.__exportStar || function(p, v) {
                for (var g in p) g !== "default" && !Object.prototype.hasOwnProperty.call(v, g) && n(v, p, g)
            },
            i = rt.__awaiter || function(p, v, g, m) {
                function y(b) {
                    return b instanceof g ? b : new g(function(_) {
                        _(b)
                    })
                }
                return new(g || (g = Promise))(function(b, _) {
                    function w(A) {
                        try {
                            C(m.next(A))
                        } catch (k) {
                            _(k)
                        }
                    }

                    function F(A) {
                        try {
                            C(m.throw(A))
                        } catch (k) {
                            _(k)
                        }
                    }

                    function C(A) {
                        A.done ? b(A.value) : y(A.value).then(w, F)
                    }
                    C((m = m.apply(p, v || [])).next())
                })
            },
            a = rt.__generator || function(p, v) {
                var g = {
                        label: 0,
                        sent: function() {
                            if (b[0] & 1) throw b[1];
                            return b[1]
                        },
                        trys: [],
                        ops: []
                    },
                    m, y, b, _;
                return _ = {
                    next: w(0),
                    throw: w(1),
                    return: w(2)
                }, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
                    return this
                }), _;

                function w(C) {
                    return function(A) {
                        return F([C, A])
                    }
                }

                function F(C) {
                    if (m) throw new TypeError("Generator is already executing.");
                    for (; _ && (_ = 0, C[0] && (g = 0)), g;) try {
                        if (m = 1, y && (b = C[0] & 2 ? y.return : C[0] ? y.throw || ((b = y.return) && b.call(y), 0) : y.next) && !(b = b.call(y, C[1])).done) return b;
                        switch (y = 0, b && (C = [C[0] & 2, b.value]), C[0]) {
                            case 0:
                            case 1:
                                b = C;
                                break;
                            case 4:
                                return g.label++, {
                                    value: C[1],
                                    done: !1
                                };
                            case 5:
                                g.label++, y = C[1], C = [0];
                                continue;
                            case 7:
                                C = g.ops.pop(), g.trys.pop();
                                continue;
                            default:
                                if (b = g.trys, !(b = b.length > 0 && b[b.length - 1]) && (C[0] === 6 || C[0] === 2)) {
                                    g = 0;
                                    continue
                                }
                                if (C[0] === 3 && (!b || C[1] > b[0] && C[1] < b[3])) {
                                    g.label = C[1];
                                    break
                                }
                                if (C[0] === 6 && g.label < b[1]) {
                                    g.label = b[1], b = C;
                                    break
                                }
                                if (b && g.label < b[2]) {
                                    g.label = b[2], g.ops.push(C);
                                    break
                                }
                                b[2] && g.ops.pop(), g.trys.pop();
                                continue
                        }
                        C = v.call(p, g)
                    } catch (A) {
                        C = [6, A], y = 0
                    } finally {
                        m = b = 0
                    }
                    if (C[0] & 5) throw C[1];
                    return {
                        value: C[0] ? C[1] : void 0,
                        done: !0
                    }
                }
            },
            l = rt.__importDefault || function(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SocketError = void 0;
        var u = nn(),
            d = l(Yu()),
            c = l(ep()),
            o = sp(),
            s = {
                transports: ["websocket"],
                path: "/socket",
                reconnection: !0,
                reconnectionDelay: 1e3,
                reconnectionDelayMax: 5e3,
                reconnectionAttempts: Number.POSITIVE_INFINITY
            },
            f = function() {
                function p(v) {
                    this.options = v, this.initialized = !1, this.forceReconnect = !1, this.identity = null, this.connection = null, this.connectCallback = null, this.disconnectCallback = null, this.initData = null, this.internalReconnection = !1, this.internalReconnecting = !1, this.internalReconnectingAttempt = 0, this.emitter = new d.default, this.sendBuffer = [], this.options.options = t(t(t({}, s), this.options.options), {
                        autoConnect: !1
                    })
                }
                return p.prototype.initConnection = function() {
                    return i(this, void 0, void 0, function() {
                        var v;
                        return a(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    if (this.connection) throw new Error("Connection already exists");
                                    return this.options.socket ? ((0, u.debug)("using socket ".concat(this.options.socket.id)), this.internalReconnection = !1, this.setConnection(this.options.socket), [3, 4]) : [3, 1];
                                case 1:
                                    return this.options.balancerUrl ? [4, (0, o.fetchBalancerConfig)(this.options.balancerUrl)] : [3, 3];
                                case 2:
                                    return v = g.sent(), (0, u.debug)("creating socket to ".concat(v.url, " with token ").concat(v.token)), this.internalReconnection = !0, this.setConnection((0, c.default)(v.url, t(t({}, this.options.options), {
                                        autoConnect: !1,
                                        reconnection: !1,
                                        query: {
                                            token: v.token
                                        }
                                    })), !0), [3, 4];
                                case 3:
                                    if (this.options.url)(0, u.debug)("creating socket to ".concat(this.options.url)), this.internalReconnection = !1, this.setConnection((0, c.default)(this.options.url, t(t({}, this.options.options), {
                                        autoConnect: !1
                                    })));
                                    else throw new Error("Missing required parameter url");
                                    g.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, p.prototype.setConnection = function(v, g) {
                    var m = this;
                    g === void 0 && (g = !1), this.connection = v, this.forceReconnect = !1, this.internalReconnection = g, v.on("connect_error", function(y) {
                        m.internalReconnection && (m.connectCallback = null, (0, u.debug)("connection was not reconnected"), m.emitter.emit("reconnect_error", y), m.options.options.reconnectionAttempts > m.internalReconnectingAttempt + 1 ? m.reconnect(m.internalReconnectingAttempt + 1) : m.emitter.emit("reconnect_failed", m.internalReconnectingAttempt))
                    }), v.on("connect", function() {
                        (0, u.debug)("socket was connected"), m.initialized = !1, m.internalReconnecting ? ((0, u.debug)("connection is reconnected"), m.emitter.emit("reconnect"), m.internalReconnecting = !1, m.internalReconnectingAttempt = 0) : m.emitter.emit("connect"), m.initialize().then(function(y) {
                            return (0, u.debug)("socket was initialized"), m.onInitialized(y), m.connectCallback && (m.connectCallback(null, y), m.connectCallback = null), y
                        }).catch(function(y) {
                            (0, u.debug)("socket was not initialized ", t({}, y)), m.onInitializeError(y), m.connectCallback && (m.connectCallback(y), m.connectCallback = null)
                        })
                    }), v.on("disconnect", function(y) {
                        (0, u.debug)("socket was disconnected reason='".concat(y, "'")), m.initialized = !1, (!m.internalReconnecting || m.internalReconnectingAttempt === 1) && setTimeout(function() {
                            m.emitter.emit("disconnect", y), m.disconnectCallback && (m.disconnectCallback(), m.disconnectCallback = null)
                        }, 100), m.options.options.reconnection && m.internalReconnection && !m.internalReconnecting && (m.forceReconnect || y !== "io server disconnect") && m.reconnect()
                    }), v.on("reconnecting", function(y) {
                        m.emitter.emit("reconnecting", y)
                    }), v.on("reconnect", function() {
                        m.emitter.emit("reconnect")
                    }), v.on("reconnect_attempt", function(y) {
                        m.emitter.emit("reconnect_attempt", y)
                    }), v.on("reconnect_error", function(y) {
                        m.emitter.emit("reconnect_error", y)
                    }), v.on("reconnect_failed", function() {
                        m.emitter.emit("reconnect_failed")
                    }), v.on("force_reconnect", function() {
                        (0, u.debug)("received event force_reconnect, setting flag forceReconnect = true"), m.forceReconnect = !0
                    })
                }, p.prototype.getConnection = function() {
                    return this.connection
                }, p.prototype.isConnected = function() {
                    var v;
                    return ((v = this.connection) === null || v === void 0 ? void 0 : v.connected) || !1
                }, p.prototype.isInitialized = function() {
                    return this.initialized
                }, p.prototype.getInitData = function() {
                    return this.initData
                }, p.prototype.connect = function() {
                    return i(this, void 0, void 0, function() {
                        var v = this;
                        return a(this, function(g) {
                            switch (g.label) {
                                case 0:
                                    return this.connection ? [3, 2] : [4, this.initConnection()];
                                case 1:
                                    g.sent(), g.label = 2;
                                case 2:
                                    return [2, new Promise(function(m, y) {
                                        v.initialized ? m(v.initData) : ((0, u.debug)("starting connecting"), v.connectCallback = (0, u.createCallback)(m, y), v.connection.open())
                                    })]
                            }
                        })
                    })
                }, p.prototype.disconnect = function() {
                    var v = this;
                    return new Promise(function(g, m) {
                        !v.connection || v.connection.disconnected ? (v.connection = null, g()) : ((0, u.debug)("starting disconnecting"), v.disconnectCallback = (0, u.createCallback)(g, m), v.connection.close(), v.connection = null)
                    })
                }, p.prototype.reconnect = function(v) {
                    var g = this;
                    return v === void 0 && (v = 1), this.internalReconnecting = !0, this.internalReconnectingAttempt = v, this.disconnect().then(function() {
                        var m = Math.floor(Math.random() * (g.options.options.reconnectionDelayMax - g.options.options.reconnectionDelay) + g.options.options.reconnectionDelay);
                        return (0, u.debug)("connection will reconnect in ".concat(m, "ms")), g.emitter.emit("reconnecting", v), new Promise(function(y) {
                            setTimeout(y, m)
                        })
                    }).then(function() {
                        return (0, u.debug)("connection is starting reconnect"), g.emitter.emit("reconnect_attempt", v), g.connect()
                    })
                }, p.prototype.initialize = function() {
                    return new Promise(function(v) {
                        v({})
                    })
                }, p.prototype.onInitialized = function(v) {
                    var g = this;
                    this.initialized || (this.initialized = !0, this.initData = v, (0, u.debug)("emit initialized"), this.emitter.emit("initialized", v), setTimeout(function() {
                        if (g.sendBuffer.length > 0) {
                            (0, u.debug)("sending buffered ".concat(g.sendBuffer.length, " events"));
                            for (var m = 0; m < g.sendBuffer.length; m++) {
                                var y = g.sendBuffer[m];
                                g.connection.emit(y.name, y.data, y.callback)
                            }
                            g.sendBuffer = []
                        }
                    }, 1))
                }, p.prototype.onInitializeError = function(v) {
                    this.disconnect(), (0, u.debug)("emit initialize_error", t({}, v)), this.emitter.emit("initialize_error", v)
                }, p.prototype.send = function(v, g, m) {
                    this.initialized ? this.connection.emit(v, g, m) : this.sendBuffer.push({
                        name: v,
                        data: g,
                        callback: m
                    })
                }, p.prototype.on = function(v, g) {
                    return this.emitter.on(v, g), this
                }, p.prototype.once = function(v, g) {
                    return this.emitter.once(v, g), this
                }, p.prototype.removeAllListeners = function() {
                    for (var v, g = [], m = 0; m < arguments.length; m++) g[m] = arguments[m];
                    return (v = this.emitter).removeAllListeners.apply(v, g), this
                }, p
            }();
        e.default = f;
        var h = nn();
        Object.defineProperty(e, "SocketError", {
            enumerable: !0,
            get: function() {
                return h.SocketError
            }
        }), r(ip(), e)
    }(rt)), rt
}
var sc;

function ic() {
    return sc || (sc = 1, function(e) {
        var t = ut.__extends || function() {
                var c = function(o, s) {
                    return c = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(f, h) {
                        f.__proto__ = h
                    } || function(f, h) {
                        for (var p in h) Object.prototype.hasOwnProperty.call(h, p) && (f[p] = h[p])
                    }, c(o, s)
                };
                return function(o, s) {
                    if (typeof s != "function" && s !== null) throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
                    c(o, s);

                    function f() {
                        this.constructor = o
                    }
                    o.prototype = s === null ? Object.create(s) : (f.prototype = s.prototype, new f)
                }
            }(),
            n = ut.__assign || function() {
                return n = Object.assign || function(c) {
                    for (var o, s = 1, f = arguments.length; s < f; s++) {
                        o = arguments[s];
                        for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (c[h] = o[h])
                    }
                    return c
                }, n.apply(this, arguments)
            },
            r = ut.__awaiter || function(c, o, s, f) {
                function h(p) {
                    return p instanceof s ? p : new s(function(v) {
                        v(p)
                    })
                }
                return new(s || (s = Promise))(function(p, v) {
                    function g(b) {
                        try {
                            y(f.next(b))
                        } catch (_) {
                            v(_)
                        }
                    }

                    function m(b) {
                        try {
                            y(f.throw(b))
                        } catch (_) {
                            v(_)
                        }
                    }

                    function y(b) {
                        b.done ? p(b.value) : h(b.value).then(g, m)
                    }
                    y((f = f.apply(c, o || [])).next())
                })
            },
            i = ut.__generator || function(c, o) {
                var s = {
                        label: 0,
                        sent: function() {
                            if (p[0] & 1) throw p[1];
                            return p[1]
                        },
                        trys: [],
                        ops: []
                    },
                    f, h, p, v;
                return v = {
                    next: g(0),
                    throw: g(1),
                    return: g(2)
                }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
                    return this
                }), v;

                function g(y) {
                    return function(b) {
                        return m([y, b])
                    }
                }

                function m(y) {
                    if (f) throw new TypeError("Generator is already executing.");
                    for (; v && (v = 0, y[0] && (s = 0)), s;) try {
                        if (f = 1, h && (p = y[0] & 2 ? h.return : y[0] ? h.throw || ((p = h.return) && p.call(h), 0) : h.next) && !(p = p.call(h, y[1])).done) return p;
                        switch (h = 0, p && (y = [y[0] & 2, p.value]), y[0]) {
                            case 0:
                            case 1:
                                p = y;
                                break;
                            case 4:
                                return s.label++, {
                                    value: y[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, h = y[1], y = [0];
                                continue;
                            case 7:
                                y = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (p = s.trys, !(p = p.length > 0 && p[p.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                                    s = 0;
                                    continue
                                }
                                if (y[0] === 3 && (!p || y[1] > p[0] && y[1] < p[3])) {
                                    s.label = y[1];
                                    break
                                }
                                if (y[0] === 6 && s.label < p[1]) {
                                    s.label = p[1], p = y;
                                    break
                                }
                                if (p && s.label < p[2]) {
                                    s.label = p[2], s.ops.push(y);
                                    break
                                }
                                p[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        y = o.call(c, s)
                    } catch (b) {
                        y = [6, b], h = 0
                    } finally {
                        f = p = 0
                    }
                    if (y[0] & 5) throw y[1];
                    return {
                        value: y[0] ? y[1] : void 0,
                        done: !0
                    }
                }
            },
            a = ut.__importDefault || function(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.WebsocketVisitorClient = void 0;
        var l = a(cl()),
            u = nn(),
            d = function(c) {
                t(o, c);

                function o(s) {
                    var f = c.call(this, s.connection) || this;
                    return f.serverVersion = null, f.updatedValues = {}, f.connectData = s.data, f.identity = null, f
                }
                return o.prototype.setConnection = function(s) {
                    c.prototype.setConnection.call(this, s), s.on("server.error", (0, u.bound)(this, "onServerError")), s.on("account.updated", (0, u.createEmitter)(this.emitter, "account.updated")), s.on("agent.updated", (0, u.createEmitter)(this.emitter, "agent.updated")), s.on("agent.status_updated", (0, u.createEmitter)(this.emitter, "agent.status_updated")), s.on("agent.removed", (0, u.createEmitter)(this.emitter, "agent.removed")), s.on("visitor.updated", (0, u.bound)(this, "onVisitorUpdated")), s.on("chat.updated", (0, u.createEmitter)(this.emitter, "chat.updated")), s.on("chat.agent_joined", (0, u.createEmitter)(this.emitter, "chat.agent_joined")), s.on("chat.agent_assigned", (0, u.createEmitter)(this.emitter, "chat.agent_assigned")), s.on("chat.agent_unassigned", (0, u.createEmitter)(this.emitter, "chat.agent_unassigned")), s.on("chat.agent_left", (0, u.createEmitter)(this.emitter, "chat.agent_left")), s.on("chat.opened", (0, u.createEmitter)(this.emitter, "chat.opened")), s.on("chat.served", (0, u.createEmitter)(this.emitter, "chat.served")), s.on("chat.closed", (0, u.createEmitter)(this.emitter, "chat.closed")), s.on("chat.visitor_closed", (0, u.createEmitter)(this.emitter, "chat.visitor_closed")), s.on("chat.message_received", (0, u.createEmitter)(this.emitter, "chat.message_received")), s.on("chat.message_updated", (0, u.createEmitter)(this.emitter, "chat.message_updated")), s.on("chat.message_deleted", (0, u.createEmitter)(this.emitter, "chat.message_deleted")), s.on("chat.agent_typing", (0, u.createEmitter)(this.emitter, "chat.agent_typing")), s.on("chat.rated", (0, u.createEmitter)(this.emitter, "chat.rated")), s.on("chat.rating_cancelled", (0, u.createEmitter)(this.emitter, "chat.rating_cancelled")), s.on("chat.rating_suggested", (0, u.createEmitter)(this.emitter, "chat.rating_suggested")), s.on("chat.contact_read", (0, u.createEmitter)(this.emitter, "chat.contact_read")), s.on("chat.deleted", (0, u.createEmitter)(this.emitter, "chat.deleted")), s.on("chat.ticket_form_finish", (0, u.createEmitter)(this.emitter, "chat.ticket_form_finish")), s.on("chat.transcript_pdf", (0, u.createEmitter)(this.emitter, "chat.transcript_pdf")), s.on("contact.acquired", (0, u.createEmitter)(this.emitter, "contact.acquired"))
                }, o.prototype.on = function(s, f) {
                    return this.emitter.on(s, f), this
                }, o.prototype.once = function(s, f) {
                    return this.emitter.once(s, f), this
                }, o.prototype.getId = function() {
                    return this.identity ? this.identity.id : null
                }, o.prototype.getIdentity = function() {
                    return this.identity
                }, o.prototype.connect = function() {
                    return c.prototype.connect.call(this)
                }, o.prototype.disconnect = function(s) {
                    return s === void 0 && (s = !1), r(this, void 0, void 0, function() {
                        var f = this;
                        return i(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    return s ? [4, new Promise(function(p, v) {
                                        f.send("visitor.logout", {}, (0, u.createCallback)(p, v))
                                    })] : [3, 2];
                                case 1:
                                    h.sent(), h.label = 2;
                                case 2:
                                    return [2, c.prototype.disconnect.call(this)]
                            }
                        })
                    })
                }, o.prototype.update = function(s) {
                    s === void 0 && (s = {}), this.checkServerVersion();
                    for (var f in s) this.identity[f] = s[f], this.updatedValues[f] = s[f];
                    this.saveVisitorValues()
                }, o.prototype.authenticate = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("visitor.authenticate", {
                            values: s
                        }, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.notify = function(s, f) {
                    var h = this;
                    return f === void 0 && (f = null), this.checkServerVersion(), new Promise(function(p, v) {
                        h.send("visitor.notify", {
                            name: s,
                            value: f
                        }, (0, u.createCallback)(p, v))
                    })
                }, o.prototype.chatRead = function() {
                    this.checkServerVersion(), this.send("chat.read", null)
                }, o.prototype.chatTyping = function(s, f) {
                    f === void 0 && (f = null), this.checkServerVersion(), this.send("chat.typing", {
                        typing: {
                            is: s,
                            text: f
                        }
                    })
                }, o.prototype.chatMessage = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("chat.message", s, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.chatClose = function(s) {
                    s === void 0 && (s = null), this.checkServerVersion(), this.send("chat.close", {
                        type: s
                    })
                }, o.prototype.chatUploadInit = function() {
                    var s = this;
                    return this.checkServerVersion(), new Promise(function(f, h) {
                        s.send("chat.upload_init", null, (0, u.createCallback)(f, h))
                    })
                }, o.prototype.chatUploadFinish = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("chat.upload_finish", {
                            uploadToken: s
                        }, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.chatTranscript = function(s, f) {
                    var h = this;
                    return this.checkServerVersion(), new Promise(function(p, v) {
                        h.send("chat.transcript", {
                            email: s,
                            lang: f
                        }, (0, u.createCallback)(p, v))
                    })
                }, o.prototype.chatTicketFormFinish = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("chat.ticket_form_finish", s, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.chatRateInit = function() {
                    var s = this;
                    return this.checkServerVersion(), new Promise(function(f, h) {
                        s.send("chat.rate_init", null, (0, u.createCallback)(f, h))
                    })
                }, o.prototype.chatRate = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("chat.rate", s, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.chatTranscriptPdf = function() {
                    var s = this;
                    return this.checkServerVersion(), new Promise(function(f, h) {
                        s.send("chat.transcript_pdf", null, (0, u.createCallback)(f, h))
                    })
                }, o.prototype.linkOpened = function(s) {
                    var f = this;
                    return this.checkServerVersion(), new Promise(function(h, p) {
                        f.send("chat.link_opened", s, (0, u.createCallback)(h, p))
                    })
                }, o.prototype.visitorConnect = function() {
                    var s = this,
                        f = n({
                            version: o.CLIENT_VERSION
                        }, this.connectData);
                    for (var h in this.updatedValues) f[h] = this.updatedValues[h];
                    if (this.updatedValues = {}, this.identity)
                        for (var h in this.identity)["bannedAt", "chatId", "status"].includes(h) || (f[h] = this.identity[h]);
                    return this.emitter.emit("initialize", f), new Promise(function(p, v) {
                        s.connection.emit("visitor.connect", f, (0, u.createCallback)(p, v))
                    })
                }, o.prototype.visitorDisconnect = function() {
                    var s = this;
                    return new Promise(function(f, h) {
                        s.connection.emit("visitor.disconnect", {}, (0, u.createCallback)(f, h))
                    })
                }, o.prototype.onVisitorUpdated = function(s) {
                    var f = {};
                    for (var h in s.changes) o.identityProperties.includes(h) && (this.identity && (this.identity[h] = s.changes[h]), f[h] = s.changes[h]);
                    Object.getOwnPropertyNames(f).length > 0 && this.emitter.emit("visitor.updated", f)
                }, o.prototype.onServerError = function(s) {
                    var f = (0, u.createSocketError)(s);
                    this.emitter.emit("error", f)
                }, o.prototype.initialize = function() {
                    var s = this;
                    return this.visitorConnect().then(function(f) {
                        return s.serverVersion = f.serverVersion, s.identity = n(n({}, f.visitor), {
                            variables: n({}, f.visitor.variables)
                        }), f
                    })
                }, o.prototype.saveVisitorValues = function() {
                    var s = this;
                    this.initialized && setTimeout(function() {
                        if (!(!s.initialized || Object.getOwnPropertyNames(s.updatedValues).length === 0)) {
                            var f = {};
                            for (var h in s.updatedValues) f[h] = s.updatedValues[h];
                            s.send("visitor.update", {
                                values: f
                            }), s.updatedValues = {}
                        }
                    }, 1)
                }, o.prototype.checkServerVersion = function() {
                    if (this.serverVersion === null) throw new Error("Client not yet connected to server")
                }, o.CLIENT_VERSION = 6, o.identityProperties = ["id", "name", "email", "phone", "chatId", "variables", "lang", "group", "bannedAt", "triggerable", "visits", "gdprApproved"], o
            }(l.default);
        e.WebsocketVisitorClient = d,
            function(c) {
                (function(o) {
                    o.WidgetOpen = "widget_open", o.WidgetShow = "widget_show", o.VisitorActive = "visitor_active", o.VisitorInactive = "visitor_inactive"
                })(c.EventName || (c.EventName = {}))
            }(d = e.WebsocketVisitorClient || (e.WebsocketVisitorClient = {})), e.WebsocketVisitorClient = d
    }(ut)), ut
}
var Ks = {},
    oc;

function op() {
    return oc || (oc = 1, Object.defineProperty(Ks, "__esModule", {
        value: !0
    })), Ks
}
var Xs = {},
    ac;

function ap() {
    return ac || (ac = 1, function(e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RatingTarget = void 0,
            function(t) {
                t.Agent = "agent", t.Ai = "ai"
            }(e.RatingTarget || (e.RatingTarget = {}))
    }(Xs)), Xs
}
var Y = {},
    cc;

function cp() {
    return cc || (cc = 1, Object.defineProperty(Y, "__esModule", {
        value: !0
    }), Y.MessageDeliveryFailReason = Y.MessageDeliveryStatus = Y.AgentDevicePlatform = Y.AgentDeviceType = Y.VisitorStatus = Y.ChatReadInfoType = Y.ChatStatus = Y.AgentStatus = Y.AccountStatus = void 0, Y.AccountStatus = {
        Online: "online",
        Offline: "offline"
    }, Y.AgentStatus = {
        Online: "online",
        Offline: "offline"
    }, Y.ChatStatus = {
        Pending: "pending",
        Open: "open",
        Closed: "closed",
        Served: "served"
    }, Y.ChatReadInfoType = {
        Agent: "agent",
        Contact: "contact"
    }, Y.VisitorStatus = {
        Active: "active",
        Clicked: "clicked",
        Idle: "idle",
        Served: "served",
        Unserved: "unserved",
        Triggered: "triggered"
    }, Y.AgentDeviceType = {
        Browser: "browser",
        Mobile: "mobile",
        Xmpp: "xmpp",
        Other: "other"
    }, Y.AgentDevicePlatform = {
        IOS: "ios",
        ANDROID: "android"
    }, Y.MessageDeliveryStatus = {
        Ok: "ok",
        PermanentFail: "permanent_fail",
        TemporaryFail: "temporary_fail",
        Complained: "complained",
        Seen: "seen"
    }, Y.MessageDeliveryFailReason = {
        Facebook24hWindow: "facebook.outside_allowed_window"
    }), Y
}
var uc;

function up() {
    return uc || (uc = 1, function(e) {
        var t = hn.__createBinding || (Object.create ? function(a, l, u, d) {
                d === void 0 && (d = u);
                var c = Object.getOwnPropertyDescriptor(l, u);
                (!c || ("get" in c ? !l.__esModule : c.writable || c.configurable)) && (c = {
                    enumerable: !0,
                    get: function() {
                        return l[u]
                    }
                }), Object.defineProperty(a, d, c)
            } : function(a, l, u, d) {
                d === void 0 && (d = u), a[d] = l[u]
            }),
            n = hn.__exportStar || function(a, l) {
                for (var u in a) u !== "default" && !Object.prototype.hasOwnProperty.call(l, u) && t(l, a, u)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SocketError = e.default = void 0;
        var r = ic();
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return r.WebsocketVisitorClient
            }
        }), n(ic(), e), n(op(), e), n(ap(), e);
        var i = nn();
        Object.defineProperty(e, "SocketError", {
            enumerable: !0,
            get: function() {
                return i.SocketError
            }
        }), n(cp(), e)
    }(hn)), hn
}
var oe = up();
const io = Vu(oe),
    ul = O(null),
    lp = O(!1),
    oo = O([]),
    fp = e => {
        oo.update(t => [...t, e])
    },
    dp = () => {
        let e;
        return oo.update(t => (e = t.pop(), t)), e ? ? null
    },
    hp = () => E(oo).length === 0,
    ao = (e, {
        useStack: t = !1
    } = {}) => {
        ul.update(n => (t && n && fp(n), lp.set(n !== null), e))
    },
    ll = () => {
        let e = null;
        hp() || (e = dp()), ul.set(e)
    };
var Wr = (e => (e[e.Options = 0] = "Options", e[e.GdprAndPrivacy = 1] = "GdprAndPrivacy", e[e.AuthForm = 2] = "AuthForm", e[e.CloseChat = 3] = "CloseChat", e[e.ChatRating = 4] = "ChatRating", e[e.TicketForm = 5] = "TicketForm", e))(Wr || {});
const Dw = 500,
    Rw = 1e3,
    Bw = Symbol("contentListItem"),
    Pw = Symbol("contentMessageAttachment"),
    Iw = "-replies",
    pp = .35,
    gp = 5e3;
var gn = {},
    Zs = {},
    lc;

function vp() {
    return lc || (lc = 1, Object.defineProperty(Zs, "__esModule", {
        value: !0
    })), Zs
}
var vn = {},
    fc;

function mp() {
    return fc || (fc = 1, Object.defineProperty(vn, "__esModule", {
        value: !0
    }), vn.CardsLayout = void 0, vn.CardsLayout = {
        Grid: "grid",
        Carousel: "carousel"
    }), vn
}
var Ys = {},
    dc;

function yp() {
    return dc || (dc = 1, Object.defineProperty(Ys, "__esModule", {
        value: !0
    })), Ys
}
var Js = {},
    hc;

function _p() {
    return hc || (hc = 1, function(e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.RatingTarget = e.GroupType = e.ChannelType = e.MessageSubType = e.MessageType = e.AttachmentInvalidReason = e.AttachmentType = e.MessageActionType = void 0, e.MessageActionType = {
                Text: "text",
                OpenUrl: "open_url"
            }, e.AttachmentType = {
                Card: "card",
                Cards: "cards",
                File: "file",
                Image: "image",
                Media: "media",
                Invalid: "invalid"
            }, e.AttachmentInvalidReason = {
                InvalidSize: "invalid_size",
                InvalidType: "invalid_type"
            }, e.MessageType = {
                Message: "message",
                Event: "event",
                Help: "help"
            }, e.MessageSubType = {
                Agent: "agent",
                Contact: "contact",
                Trigger: "trigger",
                Bot: "bot",
                System: "system",
                AgentExternal: "agent_external",
                FoundEmail: "found_email",
                ChatResolve: "chat_resolve"
            }, e.ChannelType = {
                Default: "default",
                Email: "email",
                FacebookMessenger: "facebook_messenger",
                Smartsupp: "smartsupp"
            },
            function(t) {
                t.ai = "ai", t.chatbot = "chatbot", t.message = "message"
            }(e.GroupType || (e.GroupType = {})),
            function(t) {
                t.Agent = "agent", t.Ai = "ai"
            }(e.RatingTarget || (e.RatingTarget = {}))
    }(Js)), Js
}
var Qs = {},
    pc;

function bp() {
    return pc || (pc = 1, Object.defineProperty(Qs, "__esModule", {
        value: !0
    })), Qs
}
var ei = {},
    gc;

function Cp() {
    return gc || (gc = 1, function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.MessageContentType = e.MessageContent = void 0;
        var t;
        (function(n) {
            (function(r) {
                r.Type = {
                    Text: "text",
                    Upload: "upload",
                    RateForm: "rate_form",
                    TicketForm: "ticket_form"
                }
            })(n.Message || (n.Message = {})),
            function(r) {
                r.Type = {
                    AgentJoin: "agent_join",
                    AgentAssign: "agent_assign",
                    AgentUnassign: "agent_unassign",
                    AgentLeave: "agent_leave",
                    ChatClose: "chat_close",
                    ChatVisitorClose: "chat_visitor_close"
                }
            }(n.Event || (n.Event = {})),
            function(r) {
                r.Type = {
                    Text: "text",
                    FoundEmail: "found_email"
                }
            }(n.Help || (n.Help = {}))
        })(t = e.MessageContent || (e.MessageContent = {})), e.MessageContentType = { ...t.Message.Type,
            ...t.Event.Type,
            ...t.Help.Type
        }
    }(ei)), ei
}
var ti = {},
    vc;

function wp() {
    return vc || (vc = 1, Object.defineProperty(ti, "__esModule", {
        value: !0
    })), ti
}
var mc;

function Ap() {
    return mc || (mc = 1, function(e) {
        var t = gn.__createBinding || (Object.create ? function(r, i, a, l) {
                l === void 0 && (l = a);
                var u = Object.getOwnPropertyDescriptor(i, a);
                (!u || ("get" in u ? !i.__esModule : u.writable || u.configurable)) && (u = {
                    enumerable: !0,
                    get: function() {
                        return i[a]
                    }
                }), Object.defineProperty(r, l, u)
            } : function(r, i, a, l) {
                l === void 0 && (l = a), r[l] = i[a]
            }),
            n = gn.__exportStar || function(r, i) {
                for (var a in r) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, r, a)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(vp(), e), n(mp(), e), n(yp(), e), n(_p(), e), n(bp(), e), n(Cp(), e), n(wp(), e)
    }(gn)), gn
}
var T = Ap();
const Ep = "default",
    Kr = (e, t) => {
        const n = {};
        for (const r of t) {
            const i = String(r[e]);
            n[i] = r
        }
        return n
    },
    Fp = () => {
        const e = O({}),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setGroups: i => {
                n(Kr("key", i))
            }
        }
    },
    co = Fp(),
    fl = M([co], ([e]) => Object.values(e));
var Sp = cl();
const Ee = {
        authFormDrawer: "authFormDrawer",
        authFormPrivacyNotice: "authFormPrivacyNotice",
        authFormPrivacyNoticeSwitch: "authFormPrivacyNoticeSwitch",
        authFormSubmitButton: "authFormSubmitButton",
        avatarAgent: "avatarAgent",
        avatarBot: "avatarBot",
        avatarGroup: "avatarGroup",
        avatarInfo: "avatarInfo",
        buttonAttachment: "buttonAttachment",
        buttonCloseChat: "buttonCloseChat",
        buttonCloseDrawer: "buttonCloseDrawer",
        buttonCollapseChat: "buttonCollapseChat",
        buttonEmoji: "buttonEmoji",
        buttonExpandChat: "buttonExpandChat",
        buttonMinimizeChat: "buttonMinimizeChat",
        buttonOptions: "buttonOptions",
        buttonSend: "buttonSend",
        chatRatingDrawer: "chatRatingDrawer",
        chatRatingEmojiButton: "chatRatingEmoji",
        chatRatingSendButton: "chatRatingSendButton",
        chatRatingTextarea: "chatRatingTextarea",
        chatRatingFeedbackButton: "chatRatingFeedbackButton",
        chatRatingButtonAi: "chatRatingButtonAi",
        chatRatingButtonAgent: "chatRatingButtonAgent",
        closeChatConfirmButton: "closeChatConfirmButton",
        closeChatDeclineButton: "closeChatDeclineButton",
        closeChatDrawer: "closeChatDrawer",
        flashMessage: "flashMessage",
        gdprDrawer: "gdprDrawer",
        headerTitle: "headerTitle",
        headerStatus: "headerStatus",
        headerBadge: "headerBadge",
        messageAttachment: "messageAttachment",
        messageAgent: "messageAgent",
        messageBot: "messageBot",
        messageBotReply: "messageBotReply",
        messageBotBack: "messageBotBack",
        messageContact: "messageContact",
        messageFile: "messageFile",
        messageGroup: "messageGroup",
        messageImage: "messageImage",
        optionsDrawer: "optionsDrawer",
        optionsPrivacyNotice: "optionsPrivacyNotice",
        optionsSounds: "optionsSounds",
        optionsTranscript: "optionsTranscript",
        popup: "popup",
        popupMessage: "popupMessage",
        popupButton: "popupButton",
        popupButtonClose: "popupButtonClose",
        productCard: "productCard",
        productCardArrowLeft: "productCardArrowLeft",
        productCardArrowRight: "productCardArrowRight",
        productCardButton: "productCardButton",
        productCardCarousel: "productCardCarousel",
        productCardDescription: "productCardDescription",
        productCardImage: "productCardImage",
        productCardInfo: "productCardInfo",
        productCardTitle: "productCardTitle",
        systemMessage: "systemMessage",
        textarea: "textarea",
        textareaPreviewFile: "textareaPreviewFile",
        textareaPreviewImage: "textareaPreviewImage",
        transcriptInput: "transcriptInput",
        transcriptSendButton: "transcriptSend",
        ticketFormDrawer: "ticketFormDrawer",
        ticketFormSubmitButton: "ticketFormSubmitButton",
        widgetButton: "widgetButton",
        widgetButtonFrame: "widgetButtonFrame",
        widgetButtonText: "widgetButtontext",
        widgetImagePreview: "widgetImagePreview",
        widgetMessenger: "widgetMessenger",
        widgetMessengerFrame: "widgetMessengerFrame",
        widgetOnlineBadge: "widgetOnlineBadge",
        widgetPopupFrame: "widgetPopupFrame",
        widgetTypingFrame: "widgetTypingFrame",
        widgetUnreadMessagesBadge: "widgetUnreadMessagesBadge",
        widgetHeader: "widgetHeader"
    },
    Lw = "https://www.smartsupp.com",
    $w = "/powered-by-smartsupp",
    qw = ["cs", "es", "fr", "hu", "it", "de", "nl", "pl"],
    kp = "3.0",
    Nw = "https://www.smartsupp.com/my-data-and-gdpr",
    uo = O(!1),
    yc = Wu(j.SessionId, ""),
    xp = () => {
        const {
            protocol: e,
            host: t
        } = x.getOptions();
        return `${e==="http"?"http":"https"}://${t}`
    },
    Tp = async () => {
        const {
            mobileSdk: e,
            visitorId: t
        } = x.getOptions();
        if (e && t) return t;
        try {
            return await ph()
        } catch (n) {
            return K(String(n)), null
        }
    },
    Op = (e, t) => {
        let n = pr().location.href;
        return e && t && (n = `${n}${n.includes("?")?"&":"?"}ss-bot-run=${t}`), n
    },
    dl = () => {
        H.clearMessages(), Dv(), bt.clearAssignedAgentIds(), nh(), Qd(j.VisitorId)
    },
    Mp = async e => {
        try {
            await gh(e), hh()
        } catch (t) {
            K(String(t))
        }
    },
    Dp = async (e = !1) => {
        const {
            key: t,
            lang: n,
            isPreviewMode: r,
            previewWithoutReset: i,
            sitePlatform: a,
            triggerable: l,
            _chatMaxReopenTime: u,
            botId: d
        } = x.getOptions();
        (r && !i || e) && dl();
        const c = await Tp(),
            o = E(Do);
        return {
            key: t,
            id: c,
            isPreviewMode: r,
            sitePlatform: a,
            triggerable: l,
            _chatMaxReopenTime: u,
            name: o.name,
            email: o.email,
            phone: o.phone,
            group: o.group,
            lang: o.lang ? ? n,
            variables: o.variables,
            widgetVersion: kp,
            visits: vh(),
            isWidgetVisible: E(wt),
            isWidgetOpen: E(be),
            pageUrl: Op(r, d),
            pageTitle: pr().document.title,
            domain: pr().location.hostname || "unknown",
            referer: pr().document.referrer,
            bundleVersion: "8a4b6e65595ca224e9fdd33843ff057bd63e60e8"
        }
    },
    Rp = (e, t) => {
        const {
            isPreviewMode: n
        } = x.getOptions();
        !e && t !== E(yc) && !n && (dl(), E(be) && be.set(!1)), yc.set(t)
    },
    Bp = () => {
        const e = O(),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            initialize: i => n(i)
        }
    },
    lo = Bp(),
    Cn = 5,
    Pp = "FILE",
    zw = 2e3,
    jw = e => e.split("/")[0] === "image",
    Uw = e => !!e.match(/^video\/(?:mp4|webm|ogg){1}$/);
async function Ip(e) {
    if (!FileReader) return Ue("FileReader not supported"), null;
    const t = new FileReader;
    return new Promise(n => {
        t.onload = () => {
            if (!t.result) {
                n(null);
                return
            }
            let r;
            typeof t.result == "string" ? r = t.result : r = String(t.result), r.startsWith("data:image") || (r = null), n(r)
        }, t.onerror = () => {
            Ue("Failed to load image data"), n(null)
        }, t.readAsDataURL(e)
    })
}
async function Lp(e) {
    return new Promise(t => {
        const n = document.createElement("img");
        n.onload = () => {
            t({
                width: n.width,
                height: n.height
            })
        }, n.onerror = () => {
            Ue("Failed to obtain image dimensions"), t(null)
        }, n.src = e
    })
}

function $p(e) {
    return {
        horizontal: e.width > e.height,
        vertical: e.height > e.width
    }
}
const qp = "ar",
    Np = "az",
    zp = "bg",
    jp = "br",
    Up = "bs",
    Vp = "ca",
    Hp = "cn",
    Gp = "cs",
    Wp = "da",
    Kp = "de",
    Xp = "el",
    hl = "en",
    Zp = "es",
    Yp = "fa",
    Jp = "fi",
    Qp = "fil",
    eg = "fr",
    tg = "he",
    ng = "hi",
    rg = "hr",
    sg = "hu",
    ig = "is",
    og = "it",
    ag = "ja",
    cg = "ka",
    ug = "lt",
    lg = "lv",
    fg = "mk",
    dg = "nl",
    hg = "no",
    pg = "pl",
    gg = "pt",
    vg = "ro",
    mg = "ru",
    yg = "sk",
    _g = "sl",
    bg = "sr",
    Cg = "sv",
    wg = "th",
    Ag = "tr",
    Eg = "tw",
    Fg = "uk",
    pl = hl,
    Sg = [qp, Np, zp, jp, Up, Vp, Hp, Gp, Wp, Kp, Xp, hl, Zp, Yp, Jp, Qp, eg, tg, ng, rg, sg, ig, og, ag, cg, ug, lg, fg, dg, hg, pg, gg, vg, mg, yg, _g, bg, Cg, wg, Ag, Eg, Fg];
var Vt = {},
    _c;

function kg() {
    if (_c) return Vt;
    _c = 1;
    var e = Vt.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    };
    Object.defineProperty(Vt, "__esModule", {
        value: !0
    }), Vt.FetchAdapter = void 0;
    const t = e(nl);
    class n {
        constructor(i) {
            this.options = {}, this.options = i
        }
        async request(i, a, l, u, d) {
            const c = { ...this.options,
                    ...d
                },
                o = u ? "?" + t.default.stringify(u) : "";
            try {
                const s = await fetch(`${c.baseURL||""}${a}${o}`, {
                    method: i,
                    body: l ? JSON.stringify(l) : null,
                    ...c
                });
                return {
                    status: s.status,
                    statusText: s.statusText,
                    data: await s.json(),
                    headers: [...s.headers.entries()].reduce((f, [h, p]) => (f[h] = p, f), {})
                }
            } catch (s) {
                throw s.isOpenApiError = !0, s
            }
        }
        withOptions(i) {
            return new n(i)
        }
    }
    return Vt.FetchAdapter = n, Vt
}
var xg = kg(),
    mn = {},
    St = {},
    bc;

function Tg() {
    return bc || (bc = 1, Object.defineProperty(St, "__esModule", {
        value: !0
    }), St.ProjectName = St.ErrorCode = void 0, St.ErrorCode = {
        BadRequest: "bad_request",
        NotAllowed: "not_allowed",
        NotFound: "not_found",
        Forbidden: "forbidden",
        TooManyRequests: "too_many_requests",
        Unauthorized: "unauthorized",
        Unprocessable: "unprocessable"
    }, St.ProjectName = {
        Widget: "widget",
        Chatbot: "chatbot"
    }), St
}
var Ht = {},
    kt = {},
    Cc;

function gl() {
    if (Cc) return kt;
    Cc = 1, Object.defineProperty(kt, "__esModule", {
        value: !0
    }), kt.TranslationsClientRaw = kt.TranslationsClient = void 0;
    class e {
        constructor(i) {
            this.adapter = i, this.raw = new t(this.adapter)
        }
        getDefaults(i, a, l) {
            return this.adapter.request("get", `/${i}/translations/lang/${a}/defaults`, null, null, l).then(n)
        }
    }
    kt.TranslationsClient = e;
    class t {
        constructor(i) {
            this.adapter = i
        }
        getDefaults(i, a, l) {
            return this.adapter.request("get", `/${i}/translations/lang/${a}/defaults`, null, null, l)
        }
    }
    kt.TranslationsClientRaw = t;

    function n(r) {
        return r.data
    }
    return kt
}
var wc;

function Ac() {
    if (wc) return Ht;
    wc = 1, Object.defineProperty(Ht, "__esModule", {
        value: !0
    }), Ht.SmartsuppTranslationsClientApi = void 0;
    const e = gl();
    class t {
        constructor(r) {
            this.adapter = r, this.translations = new e.TranslationsClient(r)
        }
        withOptions(r) {
            return new t(this.adapter.withOptions(r))
        }
    }
    return Ht.SmartsuppTranslationsClientApi = t, Ht.default = t, Ht
}
var Ec;

function Og() {
    return Ec || (Ec = 1, function(e) {
        var t = mn.__createBinding || (Object.create ? function(i, a, l, u) {
                u === void 0 && (u = l);
                var d = Object.getOwnPropertyDescriptor(a, l);
                (!d || ("get" in d ? !a.__esModule : d.writable || d.configurable)) && (d = {
                    enumerable: !0,
                    get: function() {
                        return a[l]
                    }
                }), Object.defineProperty(i, u, d)
            } : function(i, a, l, u) {
                u === void 0 && (u = l), i[u] = a[l]
            }),
            n = mn.__exportStar || function(i, a) {
                for (var l in i) l !== "default" && !Object.prototype.hasOwnProperty.call(a, l) && t(a, i, l)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n(Tg(), e), n(Ac(), e), n(gl(), e);
        const r = Ac();
        e.default = r.SmartsuppTranslationsClientApi
    }(mn)), mn
}
var vl = Og();
const ml = e => Sg.includes(e),
    Mg = e => ml(e) ? e : pl,
    Dg = () => {
        const {
            lang: e
        } = x.getOptions(), {
            lang: t
        } = E(Do);
        return Mg(t ? ? e)
    };

function Rg() {
    return new vl.TranslationsClient(new xg.FetchAdapter({
        baseURL: `${x.getOptions().translationsBaseUrl}/api/v1`
    }))
}
const Bg = async e => Rg().getDefaults(vl.ProjectName.Widget, e),
    Pg = (e, t) => {
        const {
            translates: n
        } = x.getOptions();
        return { ...e,
            ...n[t] && n[t]
        }
    },
    Nn = O(pl),
    sn = O({}),
    yl = async e => {
        try {
            const t = await Bg(e),
                n = Pg(t, e);
            sn.update(r => ({ ...r,
                [e]: n
            }))
        } catch {
            Ue(`Fetch translations of '${e}' language failed.`)
        }
    },
    Ig = async e => {
        E(sn)[e] || await yl(e), Nn.set(e)
    },
    Lg = async () => {
        const e = Dg();
        Nn.set(e), await yl(e)
    },
    $g = e => {
        const t = E(Nn),
            r = { ...E(sn)[t],
                ...e
            };
        sn.update(i => ({ ...i,
            [t]: r
        }))
    },
    qg = (e, t, n) => {
        var l;
        const r = E(sn),
            i = `|${t}|`;
        if (Object.keys(r).length === 0) return i;
        let a = ((l = r[e]) == null ? void 0 : l[t]) || i;
        return Object.keys(n).map(u => {
            const d = new RegExp(`{${u}}`, "g");
            a = a.replace(d, n[u])
        }), a
    },
    ve = M([Nn, sn], ([e]) => (t, n = {}) => qg(e, t, n)),
    Ng = () => {
        const e = O([]),
            {
                subscribe: t,
                update: n
            } = e,
            r = () => E(e).map(g => g.file),
            i = (g, m) => (m || E(e)).find(y => y.file.name === g) || null,
            a = g => ({
                file: g,
                preview: {},
                previewState: "none",
                uploadStatus: "none"
            }),
            l = g => {
                const m = Array.isArray(g) ? g : [g];
                n(y => y.length + m.length > Cn ? (Pt(`${E(ve)("fileUpload.tooManyFiles")} ${Cn}`), y) : [...y, ...m.map(a)]), p(m)
            },
            u = g => {
                n(m => m.filter(y => y.file !== g))
            },
            d = () => E(e).length,
            c = () => d() >= Cn,
            o = () => e.set([]),
            s = () => {
                e.update(g => (g.forEach(m => m.uploadStatus = "in-progress"), g))
            },
            f = g => {
                e.update(m => {
                    const y = i(g, m);
                    return y && (y.uploadStatus = "done"), m
                })
            },
            h = g => {
                var m;
                return ((m = i(g.name)) == null ? void 0 : m.previewState) !== "none"
            },
            p = g => {
                g.forEach(m => void v(m))
            },
            v = async g => {
                if (h(g)) return;
                const m = await Ip(g),
                    y = m ? await Lp(m) : null,
                    b = y ? $p(y) : null;
                e.update(_ => {
                    const w = i(g.name, _);
                    return w ? (w.previewState = "ready", w.preview = {
                        data: m,
                        dimensions: y,
                        orientation: b
                    }, [..._]) : _
                })
            };
        return {
            subscribe: t,
            getFiles: r,
            find: i,
            add: l,
            remove: u,
            count: d,
            isLimitReached: c,
            clear: o,
            setUploadingStatus: s,
            setFileUploaded: f
        }
    },
    Dt = Ng(),
    zg = () => {
        const e = [];
        return Object.freeze({
            push: r => {
                e.push(r)
            },
            executeAll: () => {
                for (; e.length > 0;) {
                    const r = e.shift();
                    r && r()
                }
            }
        })
    },
    zn = zg(),
    jg = () => {
        const e = O({}),
            {
                update: t,
                subscribe: n,
                set: r
            } = e;
        return {
            subscribe: n,
            setIdentities: u => {
                r(Kr("id", u))
            },
            addIdentity: u => {
                t(d => ({ ...d,
                    [u.id]: u
                }))
            },
            updateIdentity: (u, d) => {
                t(c => c[u] ? { ...c,
                    [u]: { ...c[u],
                        ...d
                    }
                } : c)
            }
        }
    },
    Ug = jg(),
    Vg = e => {
        var n, r;
        Me("init data", e), uo.set(!0), Rp(e.chat, e.sessionId);
        const t = e.visitor.id;
        Mp(t), mh(e.visitor.visits), We.setVisitorData(e.visitor), Hd({
            vid: t
        }), lo.initialize(e.fileUpload), jr.set(e.browser), _t.setAgents(e.account.agents), Ug.setIdentities(e.account.botIdentities), ((n = e.chat) == null ? void 0 : n.virtualAgent) !== void 0 && _t.setVirtualAgent((r = e.chat) == null ? void 0 : r.virtualAgent), co.setGroups(e.account.groups), $t.set(e.account.status), e.chat && (Un() && xn.set(e.chat.ratingSuggestedTarget || null), Ke.set(e.chat.status), fn(e.chat.isClosed), jn.set(e.chat.unreadInfo.lastReadAt), H.setMessages(e.chat.messages), bt.setAssignedAgentIds(e.chat.assignedIds ? ? []), e.chat.widgetOptions && Ct.updateGeneralOptions(e.chat.widgetOptions)), De.set(!0), G.emit("widgetInit", !0), zn.executeAll()
    },
    Hg = e => {
        console.error(e)
    },
    Gg = () => {
        uo.set(!1)
    },
    Wg = ({
        chatId: e
    }) => {
        po.set(!1), Cl.set(e), Ke.set(oe.ChatStatus.Open), Ct.setMessageOptions({
            disableAttachments: !1
        })
    },
    Kg = () => {
        Ke.set(oe.ChatStatus.Served), fn(!1)
    },
    Xg = ({
        message: e
    }) => {
        const {
            closeType: t
        } = e.content.data;
        (t === "agent_close" || t === "bot_close") && (bt.setAssignedAgentIds([]), Ke.set(oe.ChatStatus.Closed), H.addMessage(e), G.emit("chatClosed", e))
    },
    Zg = ({
        message: e
    }) => {
        Un() && mo(Ur), fn(!0, {
            byVisitor: !0
        }), H.addMessage(e), G.emit("chatVisitorClosed", e)
    },
    Yg = ({
        changes: e
    }) => {
        e.widgetOptions && Ct.updateGeneralOptions(e.widgetOptions), e.isClosed !== void 0 && fn(e.isClosed), e.virtualAgent !== void 0 && _t.setVirtualAgent(e.virtualAgent)
    },
    Jg = async ({
        message: e
    }) => {
        const t = E(n_) && Yr(e);
        !E(be) && Jr(e) && !t ? Hm(e) : await H.addMessage(e), El(), e.widgetOptions && Ct.setMessageOptions(e.widgetOptions), t && Jt(), G.emit("messageReceived", e)
    },
    Qg = e => {
        Jg(e)
    },
    ev = ({
        messageId: e
    }) => {
        H.deleteMessage(e)
    },
    tv = ({
        message: e
    }) => {
        H.replaceMessage(e), e.widgetOptions && e.id === E(vo) && Ct.setMessageOptions(e.widgetOptions)
    },
    nv = ({
        message: e,
        agent: t
    }) => {
        bt.addAssignedAgentId(e.content.data.agentId), H.addMessage(e), G.emit("agentJoined", t)
    },
    rv = ({
        message: e
    }) => {
        bt.removeAssignedAgentId(e.content.data.agentId), H.addMessage(e)
    },
    sv = ({
        message: e
    }) => {
        bt.addAssignedAgentId(e.content.data.assigned), H.addMessage(e)
    },
    iv = ({
        message: e
    }) => {
        bt.removeAssignedAgentId(e.content.data.unassigned), H.addMessage(e)
    },
    ov = e => {
        !e.typing.is && E(po) || ho.set(e.typing.is)
    },
    av = e => {
        jn.set(e.lastReadAt)
    },
    cv = ({
        message: e,
        rating: t
    }) => {
        H.updateMessageRating(e), G.emit("chatRated", t)
    },
    uv = e => {
        G.emit("transcriptPdf", e)
    },
    lv = ({
        id: e,
        changes: t
    }) => {
        _t.updateAgent(e, t)
    },
    fv = ({
        id: e,
        status: t
    }) => {
        _t.updateAgent(e, {
            status: t
        })
    },
    dv = ({
        status: e
    }) => {
        $t.set(e)
    },
    hv = e => {
        We.updateVisitorData(e)
    },
    pv = e => {
        G.emit("contactAcquired", e)
    },
    gv = e => {
        (Un() || Nl()) && xn.set(e.ratingSuggestedTarget)
    },
    vv = () => {
        E(xn) && xn.set(null)
    },
    mv = async e => {
        const t = await x.awaitOptions(),
            n = {
                data: e,
                connection: {
                    url: xp(),
                    socket: t.mock ? new Sp.SocketMock(t.mock) : void 0,
                    balancerUrl: t.balancerUrl,
                    options: {
                        path: "/socket",
                        autoConnect: !1,
                        reconnection: !0
                    }
                }
            };
        return new io(n)
    },
    yv = () => {
        let e = null;
        const t = () => !!e,
            n = () => {
                if (!e) throw new Error("Visitor client is not initialized");
                return e
            },
            r = async a => {
                const l = await Dp(a);
                e = await mv(l), e && (_v(e), await e.connect().catch(u => {
                    Ue("Failed connect to server.", u)
                }))
            };
        return Object.freeze({
            getClient: n,
            initClient: r,
            reloadClient: async (a, l) => {
                await (e == null ? void 0 : e.disconnect()), a && x.updateOptions({
                    mock: a
                }), await r(l)
            },
            isInitialized: t
        })
    },
    _v = e => {
        e.on("initialized", Vg), e.on("error", Hg), e.on("disconnect", Gg), e.on("chat.opened", Wg), e.on("chat.served", Kg), e.on("chat.closed", Xg), e.on("chat.visitor_closed", Zg), e.on("chat.updated", Yg), e.on("chat.message_received", Qg), e.on("chat.message_updated", tv), e.on("chat.message_deleted", ev), e.on("chat.agent_joined", nv), e.on("chat.agent_left", rv), e.on("chat.agent_assigned", sv), e.on("chat.agent_unassigned", iv), e.on("chat.agent_typing", ov), e.on("chat.contact_read", av), e.on("chat.rated", cv), e.on("chat.rating_suggested", gv), e.on("chat.rating_cancelled", vv), e.on("chat.transcript_pdf", uv), e.on("agent.updated", lv), e.on("agent.status_updated", fv), e.on("account.updated", dv), e.on("visitor.updated", hv), e.on("contact.acquired", pv)
    },
    me = yv(),
    bv = () => {
        const e = O(null),
            {
                subscribe: t,
                set: n,
                update: r
            } = e,
            i = o => {
                n(o)
            },
            a = o => {
                r(s => s ? { ...s,
                    ...o
                } : null)
            },
            l = (o, s) => {
                try {
                    me.getClient().update({
                        [o]: s
                    })
                } catch (f) {
                    Ue(`Update of visitor property '${o}' failed.`, String(f))
                }
            };
        return {
            subscribe: t,
            setVisitorData: i,
            updateVisitorData: a,
            updateVisitorProperty: (o, s) => {
                if (!E(De)) {
                    yr(o, s);
                    return
                }
                a({
                    [o]: s
                }), l(o, s)
            },
            updateVisitorVariables: o => {
                if (!E(De)) {
                    yr("variables", o);
                    return
                }
                const s = E(e);
                if (!s) return;
                const f = s.variables;
                a({
                    variables: { ...f,
                        ...o
                    }
                });
                let h = {};
                Object.keys(o).forEach(p => {
                    o[p] !== f[p] && (h = { ...h,
                        [p]: o[p]
                    })
                }), Object.keys(h).length !== 0 && l("variables", h)
            },
            updateVisitorContactData: o => {
                var p;
                if (!E(De)) {
                    yr("contactData", {
                        properties: o
                    });
                    return
                }
                const s = E(e);
                if (!s) return;
                const f = (p = s == null ? void 0 : s.contactData) == null ? void 0 : p.properties;
                a({
                    variables: { ...f,
                        ...o
                    }
                });
                let h = {};
                Object.keys(o).forEach(v => {
                    (!f || o[v] !== f[v]) && (h = { ...h,
                        [v]: o[v]
                    })
                }), Object.keys(h).length !== 0 && l("contactData", {
                    properties: o
                })
            }
        }
    },
    We = bv(),
    Cv = (e, t) => e.hasOwnProperty(t),
    _l = e => typeof e == "boolean",
    bl = e => typeof e == "number",
    Xr = e => typeof e == "object" && e !== null && !Array.isArray(e),
    It = e => typeof e == "string" || e instanceof String,
    Fc = e => It(e) || bl(e) || _l(e),
    wv = e => {
        const t = {};
        return Object.keys(e).forEach(n => {
            const r = e[n];
            Fc(r) ? t[n] = r : Xr(r) && Cv(r, "value") && Fc(r.value) && (t[n] = r.value)
        }), t
    },
    Av = () => {
        const e = O({}),
            {
                update: t,
                subscribe: n,
                set: r
            } = e;
        return {
            subscribe: n,
            setAgents: d => {
                r(Kr("id", d))
            },
            addAgent: d => {
                t(c => ({ ...c,
                    [d.id]: d
                }))
            },
            updateAgent: (d, c) => {
                t(o => o[d] ? { ...o,
                    [d]: { ...o[d],
                        ...c
                    }
                } : o)
            },
            setVirtualAgent: d => {
                const {
                    description: c,
                    avatar: o,
                    name: s
                } = d, f = {};
                c && (f.description = c), o && (f.avatar = o), s && (f.fullname = s), t(h => (Object.keys(h).forEach(p => {
                    h[p] = { ...h[p],
                        ...f
                    }
                }), h))
            }
        }
    },
    _t = Av(),
    Vw = e => M([_t], ([t]) => t[e] ? ? null),
    Ev = M([_t], ([e]) => Object.values(e).filter(t => !t.disabled)),
    Fv = M([Ev, We], ([e, t]) => {
        const n = t == null ? void 0 : t.group;
        return !n || n === Ep ? e : e.filter(r => r.groups.length === 0 || r.groups.includes(n))
    }),
    Hw = M([Fv], ([e]) => e.filter(t => t.status === oe.AgentStatus.Online)),
    Sv = () => {
        const e = O([]),
            {
                subscribe: t,
                set: n,
                update: r
            } = e;
        return {
            subscribe: t,
            setAssignedAgentIds: d => {
                n(d)
            },
            addAssignedAgentId: d => {
                r(c => [...new Set([...c, d])])
            },
            removeAssignedAgentId: d => {
                r(c => c.filter(o => o !== d))
            },
            clearAssignedAgentIds: () => {
                n([])
            }
        }
    },
    bt = Sv(),
    fo = M([bt, _t], ([e, t]) => e.map(n => t[n]).filter(Boolean)),
    Gw = M([fo], ([e]) => e.length > 0),
    kv = M([fo], ([e]) => e.filter(t => !t.disabled)),
    Ww = M([fo], ([e]) => e.some(t => t.status === oe.AgentStatus.Online)),
    xv = () => {
        const e = O({
                disableAttachments: !1,
                disableAuthentication: !1,
                disableInput: !1
            }),
            t = O({}),
            n = a => {
                e.update(l => ({ ...l,
                    ...a
                }))
            },
            r = a => {
                t.set(a)
            };
        return {
            subscribe: M([e, t], ([a, l]) => ({ ...a,
                ...l
            })).subscribe,
            updateGeneralOptions: n,
            setMessageOptions: r
        }
    },
    Ct = xv(),
    Kw = M([Ct], ([e]) => e.disableAttachments),
    $t = O(oe.AccountStatus.Offline),
    Ke = O(null),
    bi = O(0),
    ho = O(!1),
    jn = O(null),
    xn = O(null),
    Cl = O(""),
    wl = M([Ke], ([e]) => e === oe.ChatStatus.Pending);
M([Ke], ([e]) => e !== null);
const Tv = M([Ke], ([e]) => e === oe.ChatStatus.Served),
    Xw = M([Ke], ([e]) => e === oe.ChatStatus.Open),
    Zw = M([Ke], ([e]) => e === oe.ChatStatus.Closed),
    Yw = M([Tv, bi], ([e, t]) => e && t === 0),
    fn = (e, {
        byVisitor: t = !1
    } = {}) => {
        e ? bi.set(t ? 2 : 1) : bi.set(0)
    },
    Ov = M([$t, kv], ([e, t]) => t.length === 0 ? e === oe.AccountStatus.Online : t.some(n => n.status === oe.AgentStatus.Online)),
    Mv = M([Ct], ([e]) => e.disableAuthentication),
    Dv = () => {
        ho.set(!1), Ke.set(null), fn(!1), jn.set(null)
    },
    Al = () => {
        jn.set(new Date().toISOString()), me.getClient().chatRead()
    },
    El = () => {
        const e = Mt().visibilityState === "visible";
        !E(Km) || !E(be) || !e || Al()
    },
    Rv = e => ({ ...Qo,
        chatId: E(Cl),
        createdAt: new Date().toISOString(),
        content: { ...Qo.content,
            data: {
                target: e
            }
        }
    }),
    Jw = () => {
        fn(!0, {
            byVisitor: !0
        }), me.getClient().chatClose(), ll(), Un() || Or()
    },
    Qw = async e => {
        await H.addMessage(Rv(e))
    },
    Bv = () => {
        H.deleteMessage(Ur)
    };

function dn(e) {
    return e.length === 0 ? null : e[e.length - 1]
}
const Pv = e => e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase(),
    Iv = e => {
        let t = e,
            n = 0;
        const r = ["B", "KB", "MB", "GB"];
        for (; t >= 1024 && n < r.length - 1;) t /= 1024, n++;
        return {
            size: Math.floor(t),
            unit: r[n]
        }
    },
    e1 = e => {
        const t = e.split("."),
            n = dn(t);
        return n ? n.toUpperCase() : Pp
    },
    t1 = (e, t) => `${e}?name=${t}`,
    Lv = async (e, t) => {
        const n = me.getClient(),
            r = [];
        for (const {
                file: i
            } of e) {
            const a = await n.chatUploadInit(),
                l = new FormData;
            l.append("file", i, i.name);
            try {
                if (!(await fetch(a.url, {
                        method: "post",
                        body: l
                    })).ok) throw new Error("Upload failed");
                r.push(a.token)
            } catch {
                Ue(`File [${i.name}] upload failed`), Pt(E(ve)("fileUpload.filesWerentProcessed"))
            } finally {
                t(i)
            }
        }
        return r
    },
    $v = async e => {
        const t = me.getClient();
        try {
            await t.chatUploadFinish(e)
        } catch {
            Ue(`Failed to finish file upload for ${e}`)
        }
    },
    qv = 1e3,
    Ci = 6e4,
    Nv = 36e5,
    Fl = 864e5,
    zv = 2628e6,
    jv = 31536e6,
    Sc = e => Math.floor(e / Ci) * Ci,
    Uv = (e, t) => Sc(new Date(e).getTime()) === Sc(new Date(t).getTime()),
    Vv = (e, t) => {
        const n = new Date(e),
            r = new Date(t);
        return n.getDate() === r.getDate() && n.getMonth() === r.getMonth() && n.getFullYear() === r.getFullYear()
    },
    n1 = (e, t) => e.getTime() - t.getTime(),
    Hv = new Intl.DateTimeFormat(void 0, {
        hour: "numeric",
        minute: "numeric"
    }),
    Gv = new Intl.DateTimeFormat(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }),
    r1 = e => Vv(new Date, e) ? Hv : Gv,
    Wv = () => typeof Intl < "u" && "RelativeTimeFormat" in Intl,
    Kv = e => Wv() ? new Intl.RelativeTimeFormat(e, {
        numeric: "auto"
    }) : null,
    Xv = [{
        unit: "year",
        amount: jv
    }, {
        unit: "month",
        amount: zv
    }, {
        unit: "day",
        amount: Fl
    }, {
        unit: "hour",
        amount: Nv
    }, {
        unit: "minute",
        amount: Ci
    }, {
        unit: "second",
        amount: qv
    }],
    s1 = (e, t) => {
        const n = Kv(t);
        if (!n) return K("Relative time format not supported"), "";
        for (const {
                unit: r,
                amount: i
            } of Xv) {
            if (r === "second") return n.format(0, "second");
            if (Math.abs(e) > i) return n.format(Math.round(e / i), r)
        }
        return ""
    },
    Zv = (e, t = 300) => {
        let n;
        return (...i) => {
            n || (e(...i), n = setTimeout(() => n = null, t))
        }
    },
    Yv = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    Jv = /[\0-\x1F\x7F-\x9F]/,
    Qv = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
    em = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

function tm(e) {
    const t = {};
    e = e || {}, t.src_Any = Yv.source, t.src_Cc = Jv.source, t.src_Z = em.source, t.src_P = Qv.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    const n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
}

function wi(e) {
    return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
        n && Object.keys(n).forEach(function(r) {
            e[r] = n[r]
        })
    }), e
}

function Zr(e) {
    return Object.prototype.toString.call(e)
}

function nm(e) {
    return Zr(e) === "[object String]"
}

function rm(e) {
    return Zr(e) === "[object Object]"
}

function sm(e) {
    return Zr(e) === "[object RegExp]"
}

function kc(e) {
    return Zr(e) === "[object Function]"
}

function im(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
}
const Sl = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
};

function om(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t || Sl.hasOwnProperty(n)
    }, !1)
}
const am = {
        "http:": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0
            }
        },
        "mailto:": {
            validate: function(e, t, n) {
                const r = e.slice(t);
                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
            }
        }
    },
    cm = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    um = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

function lm(e) {
    e.__index__ = -1, e.__text_cache__ = ""
}

function fm(e) {
    return function(t, n) {
        const r = t.slice(n);
        return e.test(r) ? r.match(e)[0].length : 0
    }
}

function xc() {
    return function(e, t) {
        t.normalize(e)
    }
}

function kr(e) {
    const t = e.re = tm(e.__opts__),
        n = e.__tlds__.slice();
    e.onCompile(), e.__tlds_replaced__ || n.push(cm), n.push(t.src_xn), t.src_tlds = n.join("|");

    function r(u) {
        return u.replace("%TLDS%", t.src_tlds)
    }
    t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
    const i = [];
    e.__compiled__ = {};

    function a(u, d) {
        throw new Error('(LinkifyIt) Invalid schema "' + u + '": ' + d)
    }
    Object.keys(e.__schemas__).forEach(function(u) {
        const d = e.__schemas__[u];
        if (d === null) return;
        const c = {
            validate: null,
            link: null
        };
        if (e.__compiled__[u] = c, rm(d)) {
            sm(d.validate) ? c.validate = fm(d.validate) : kc(d.validate) ? c.validate = d.validate : a(u, d), kc(d.normalize) ? c.normalize = d.normalize : d.normalize ? a(u, d) : c.normalize = xc();
            return
        }
        if (nm(d)) {
            i.push(u);
            return
        }
        a(u, d)
    }), i.forEach(function(u) {
        e.__compiled__[e.__schemas__[u]] && (e.__compiled__[u].validate = e.__compiled__[e.__schemas__[u]].validate, e.__compiled__[u].normalize = e.__compiled__[e.__schemas__[u]].normalize)
    }), e.__compiled__[""] = {
        validate: null,
        normalize: xc()
    };
    const l = Object.keys(e.__compiled__).filter(function(u) {
        return u.length > 0 && e.__compiled__[u]
    }).map(im).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), lm(e)
}

function dm(e, t) {
    const n = e.__index__,
        r = e.__last_index__,
        i = e.__text_cache__.slice(n, r);
    this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = i, this.text = i, this.url = i
}

function Ai(e, t) {
    const n = new dm(e, t);
    return e.__compiled__[n.schema].normalize(n, e), n
}

function Fe(e, t) {
    if (!(this instanceof Fe)) return new Fe(e, t);
    t || om(e) && (t = e, e = {}), this.__opts__ = wi({}, Sl, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = wi({}, am, e), this.__compiled__ = {}, this.__tlds__ = um, this.__tlds_replaced__ = !1, this.re = {}, kr(this)
}
Fe.prototype.add = function(t, n) {
    return this.__schemas__[t] = n, kr(this), this
};
Fe.prototype.set = function(t) {
    return this.__opts__ = wi(this.__opts__, t), this
};
Fe.prototype.test = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
    let n, r, i, a, l, u, d, c, o;
    if (this.re.schema_test.test(t)) {
        for (d = this.re.schema_search, d.lastIndex = 0;
            (n = d.exec(t)) !== null;)
            if (a = this.testSchemaAt(t, n[2], d.lastIndex), a) {
                this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + a;
                break
            }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (r = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (l = r.index + r[1].length, (this.__index__ < 0 || l < this.__index__) && (this.__schema__ = "", this.__index__ = l, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (o = t.indexOf("@"), o >= 0 && (i = t.match(this.re.email_fuzzy)) !== null && (l = i.index + i[1].length, u = i.index + i[0].length, (this.__index__ < 0 || l < this.__index__ || l === this.__index__ && u > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = l, this.__last_index__ = u))), this.__index__ >= 0
};
Fe.prototype.pretest = function(t) {
    return this.re.pretest.test(t)
};
Fe.prototype.testSchemaAt = function(t, n, r) {
    return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, r, this) : 0
};
Fe.prototype.match = function(t) {
    const n = [];
    let r = 0;
    this.__index__ >= 0 && this.__text_cache__ === t && (n.push(Ai(this, r)), r = this.__last_index__);
    let i = r ? t.slice(r) : t;
    for (; this.test(i);) n.push(Ai(this, r)), i = i.slice(this.__last_index__), r += this.__last_index__;
    return n.length ? n : null
};
Fe.prototype.matchAtStart = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
    const n = this.re.schema_at_start.exec(t);
    if (!n) return null;
    const r = this.testSchemaAt(t, n[2], n[0].length);
    return r ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + r, Ai(this, 0)) : null
};
Fe.prototype.tlds = function(t, n) {
    return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(r, i, a) {
        return r !== a[i - 1]
    }).reverse(), kr(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, kr(this), this)
};
Fe.prototype.normalize = function(t) {
    t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url)
};
Fe.prototype.onCompile = function() {};
const kl = JSON.parse('["aaa","aarp","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","actor","ad","ads","adult","ae","aeg","aero","aetna","af","afl","africa","ag","agakhan","agency","ai","aig","airbus","airforce","airtel","akdn","al","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","amazon","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","arab","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","casa","case","cash","casino","cat","catering","catholic","cba","cbn","cbre","cc","cd","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","co","coach","codes","coffee","college","cologne","com","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cool","coop","corsica","country","coupon","coupons","courses","cpa","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dog","domains","dot","download","drive","dtv","dubai","dunlop","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","edu","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","er","ericsson","erni","es","esq","estate","et","eu","eurovision","eus","events","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontier","ftr","fujitsu","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gay","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","gov","gp","gq","gr","grainger","graphics","gratis","green","gripe","grocery","group","gs","gt","gu","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","horse","hospital","host","hosting","hot","hotels","hotmail","house","how","hr","hsbc","ht","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","inc","industries","infiniti","info","ing","ink","institute","insurance","insure","int","international","intuit","investments","io","ipiranga","iq","ir","irish","is","ismaili","ist","istanbul","it","itau","itv","jaguar","java","jcb","je","jeep","jetzt","jewelry","jio","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kids","kim","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","lamborghini","lamer","lancaster","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","link","lipsy","live","living","lk","llc","llp","loan","loans","locker","locus","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","luxe","luxury","lv","ly","ma","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","mattel","mba","mc","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","moda","moe","moi","mom","monash","money","monster","mormon","mortgage","moscow","moto","motorcycles","mov","movie","mp","mq","mr","ms","msd","mt","mtn","mtr","mu","museum","music","mv","mw","mx","my","mz","na","nab","nagoya","name","natura","navy","nba","nc","ne","nec","net","netbank","netflix","network","neustar","new","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","office","okinawa","olayan","olayangroup","ollo","om","omega","one","ong","onl","online","ooo","open","oracle","orange","org","organic","origins","osaka","otsuka","ott","ovh","pa","page","panasonic","paris","pars","partners","parts","party","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","phd","philips","phone","photo","photography","photos","physio","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","racing","radio","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","ril","rio","rip","ro","rocks","rodeo","rogers","room","rs","rsvp","ru","rugby","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sb","sbi","sbs","sc","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scot","sd","se","search","seat","secure","security","seek","select","sener","services","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","spa","space","sport","spot","sr","srl","ss","st","stada","staples","star","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiss","sx","sy","sydney","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","ug","uk","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","vermögensberater","vermögensberatung","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","viva","vivo","vlaanderen","vn","vodka","volvo","vote","voting","voto","voyage","vu","wales","walmart","walter","wang","wanggou","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xihuan","xin","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zm","zone","zuerich","zw","ελ","ευ","бг","бел","дети","ею","католик","ком","мкд","мон","москва","онлайн","орг","рус","рф","сайт","срб","укр","қаз","հայ","ישראל","קום","ابوظبي","ارامكو","الاردن","البحرين","الجزائر","السعودية","العليان","المغرب","امارات","ایران","بارت","بازار","بيتك","بھارت","تونس","سودان","سورية","شبكة","عراق","عرب","عمان","فلسطين","قطر","كاثوليك","كوم","مصر","مليسيا","موريتانيا","موقع","همراه","پاکستان","ڀارت","कॉम","नेट","भारत","भारतम्","भारोत","संगठन","বাংলা","ভারত","ভাৰত","ਭਾਰਤ","ભારત","ଭାରତ","இந்தியா","இலங்கை","சிங்கப்பூர்","భారత్","ಭಾರತ","ഭാരതം","ලංකා","คอม","ไทย","ລາວ","გე","みんな","アマゾン","クラウド","グーグル","コム","ストア","セール","ファッション","ポイント","世界","中信","中国","中國","中文网","亚马逊","企业","佛山","信息","健康","八卦","公司","公益","台湾","台灣","商城","商店","商标","嘉里","嘉里大酒店","在线","大拿","天主教","娱乐","家電","广东","微博","慈善","我爱你","手机","招聘","政务","政府","新加坡","新闻","时尚","書籍","机构","淡马锡","游戏","澳門","点看","移动","组织机构","网址","网店","网站","网络","联通","谷歌","购物","通販","集团","電訊盈科","飞利浦","食品","餐厅","香格里拉","香港","닷넷","닷컴","삼성","한국"]'),
    hm = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
    i1 = /((?:www.)?[^\s.]+\.[^\s/]+\/[^\s.]+)/,
    Tc = /[&<>"']/g,
    ni = e => {
        const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            n = RegExp(Tc.source);
        return e && n.test(e) ? e.replace(Tc, r => t[r]) : e || ""
    },
    pm = "overflow: hidden; display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; word-break: break-all;",
    gm = new Fe().tlds(kl).set({
        fuzzyIP: !0
    }),
    vm = new Fe().tlds(kl),
    mm = (e, t, n) => {
        const r = se().location.hostname,
            i = r.length > 0 && e.includes(r) ? "_parent" : "_blank";
        return `<a href="${e}" target="${i}" rel="noreferrer noopener" title="${e}" style="${n!=null&&n.clamp&&!(n!=null&&n.replaceText)?pm:""}">${t}</a>`
    },
    o1 = (e, t) => {
        if (e === "") return e;
        const n = gm.match(e);
        if (!n) return ni(e);
        let r = "",
            i = 0;
        return n.forEach(a => {
            var o;
            let l = "",
                u = "";
            const d = xl(e, a),
                c = (t == null ? void 0 : t.clamp) && a.text.length > 30 && !d;
            a.index > i && (l = e.substring(i, a.index)), u = mm(a.url, a.text, { ...t,
                clamp: c
            }), i = a.lastIndex, d && (l = l.substring(0, l.length - 1), i += 1), c && !ym(e, a) && (u = `
${u}
`, l = l.trimEnd(), (o = e[i]) != null && o.match(/\s/) && (i += 1)), r += ni(l) + u
        }), e.length > i && (r += ni(e.substring(i))), r
    },
    xl = (e, t) => e[t.index - 1] === '"' && e[t.lastIndex] === '"',
    ym = (e, t) => !!(t.index <= 1 && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && t.lastIndex > e.length - 3 || t.index <= 1 && t.lastIndex >= e.length - 2),
    Tl = e => {
        const t = ["mailto:", "ftp:", "//"],
            n = vm.match(e);
        return n ? n.filter(r => !t.includes(r.schema)) : null
    },
    _m = () => zr("cards"),
    bm = e => {
        Xi({ ...e
        }, "cards")
    },
    Cm = async e => {
        const t = new Headers,
            {
                widgetApiUrl: n
            } = x.getOptions();
        t.append("Content-Type", "application/json");
        const r = JSON.stringify({
            links: e
        });
        try {
            const i = await fetch(`${n}/links/preview`, {
                method: "POST",
                headers: t,
                body: r
            });
            return i.ok && i.json ? await i.json() : null
        } catch {
            return null
        }
    },
    wm = e => {
        const t = e.find(n => n.type === "open_url");
        return (t == null ? void 0 : t.value) || ""
    },
    Am = e => {
        const t = e.filter(n => n.title && n.image && !Fm(wm(n.actions)));
        return t.length && e.length > 1 ? e : t.length === 1 ? t : []
    },
    Em = e => {
        const t = new Date().getTime();
        return Object.keys(e).forEach(r => {
            (!e[r].expiration || e[r].expiration && e[r].expiration < t) && delete e[r]
        }), e
    },
    Fm = e => {
        const {
            acceptedFileExtensions: t
        } = E(lo), n = e.match(/(\.)([^.]{3,4})$/m);
        return n && n[2] && t.includes(n[2])
    },
    a1 = async e => {
        try {
            await me.getClient().linkOpened({
                url: e
            })
        } catch (t) {
            Ue("Sending link opened analytics event failed", String(t))
        }
    };
let Oc = !1;
const Ei = O(),
    Fi = O(!1),
    Si = O(!1),
    Sm = (e, t, n) => {
        const r = {},
            i = new Date().getTime() + Fl;
        e.forEach((l, u) => r[l] = {
            expiration: i,
            card: t[u]
        });
        const a = { ...n,
            ...r
        };
        Ei.set(a), bm(a)
    },
    km = async (e, t, n = !1) => {
        let r = [];
        const i = {
            type: "cards",
            layout: "carousel",
            items: []
        };
        Oc || (Ei.set(_m()), Oc = !0);
        const a = Tl(e);
        if (!a) return null;
        const l = Em(E(Ei)),
            u = [];
        if (a.forEach(d => {
                xl(e, d) || (l[d.url] ? r.push(l[d.url].card) : u.push(d.url))
            }), u.length > 0) {
            t && Fi.set(!0), n && Si.set(!0);
            const d = await Cm(u);
            d && (Sm(u, d, l), r = [...r, ...d])
        }
        return i.items = Am(r), Fi.set(!1), Si.set(!1), i.items.length > 0 ? i : null
    };
var ze = (e => (e.ContactMessage = "contact-message", e.AgentMessage = "agent-message", e.BotMessage = "bot-message", e.BotReplies = "bot-replies", e))(ze || {});
const Mc = async ({
        text: e,
        quickReply: t
    }) => {
        try {
            return await me.getClient().chatMessage({
                content: {
                    type: T.MessageContentType.Text,
                    text: e
                },
                quickReply: t
            }) ? ? null
        } catch {
            return null
        }
    },
    Yr = e => e.subType === T.MessageSubType.Bot || e.subType === T.MessageSubType.Trigger,
    xm = e => e.subType === T.MessageSubType.System,
    Jr = e => e.subType === T.MessageSubType.Agent || Yr(e),
    Tm = (e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime(),
    Ol = (e, t) => t === ze.BotReplies ? `${e.id}-replies` : e.id,
    Ml = e => {
        const t = {
                isRight: !1,
                isLeft: !1
            },
            n = {
                isPrimary: !1,
                isSecondary: !1
            };
        switch (e) {
            case ze.ContactMessage:
                t.isRight = !0, n.isPrimary = !0;
                break;
            default:
                t.isLeft = !0, n.isSecondary = !0
        }
        return {
            align: t,
            variant: n
        }
    },
    Om = e => !!e.agentId || e.subType === T.MessageSubType.Bot && e.content.type !== T.MessageContentType.TicketForm,
    Dl = (e, t) => e.subType === T.MessageSubType.System || t === ze.BotReplies || e.content.type === T.MessageContentType.TicketForm,
    Mm = e => {
        const t = [];
        let n = null,
            r = null;
        for (const i of e) {
            if (i.content.type === T.MessageContentType.RateForm && (i.content.data.target === T.RatingTarget.Ai && !Nl() || i.content.data.target === T.RatingTarget.Agent && !Un())) continue;
            n && !Lm(i, n) && (t.push(n), n = null, r = null), n = n || Dm(i);
            const a = Dc(i, n);
            if (r) {
                const u = Pl(r),
                    d = Rl(r);
                a.neighbors.hasTop = u, d.any.neighbors.hasBottom = u, d.attachmentContext && (d.attachmentContext.extraSpaces.hasBottom = gr(d.attachmentContext.attachment))
            }
            const l = Pm(i);
            if (l && Bm(l, a, r), n.messagesContext.push(a), r = a, (Yr(i) || xm(i)) && jm(i)) {
                t.push(n);
                const u = Rm(i);
                u.messagesContext.push(Dc(i, u)), t.push(u), n = null
            }
        }
        return n && t.push(n), t
    },
    Dm = e => {
        const t = Bl(e),
            n = e.subType === T.MessageSubType.Bot || e.subType === T.MessageSubType.Trigger,
            {
                align: r,
                variant: i
            } = Ml(t);
        return {
            type: t,
            isBot: n,
            id: Ol(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: r,
            variant: i,
            messagesContext: [],
            showAvatar: Om(e),
            useFullWidth: Dl(e, t)
        }
    },
    Rm = e => {
        const t = ze.BotReplies,
            {
                align: n,
                variant: r
            } = Ml(t);
        return {
            type: ze.BotReplies,
            isBot: !0,
            id: Ol(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: n,
            variant: r,
            messagesContext: [],
            showAvatar: !1,
            useFullWidth: Dl(e, t)
        }
    },
    Dc = (e, t) => ({
        group: t,
        message: e,
        neighbors: {
            hasTop: !1,
            hasBottom: !1
        },
        attachmentsContext: []
    }),
    Bm = (e, t, n) => {
        let r = null;
        for (const i of e) {
            const a = Rc(i),
                l = {
                    hasTop: !1,
                    hasBottom: !1
                },
                u = gr(i),
                d = {
                    hasTop: u,
                    hasBottom: !1
                };
            if (r) {
                const o = Rc(r.attachment),
                    s = gr(r.attachment);
                r.neighbors.hasBottom = o && a, l.hasTop = o && a, r.extraSpaces.hasBottom = !u && s
            } else if (t.neighbors.hasBottom = a, l.hasTop = a, Im(t.message))
                if (l.hasTop = !1, t.neighbors.hasTop = !1, t.neighbors.hasBottom = !1, n) {
                    const o = Pl(n),
                        s = Rl(n);
                    l.hasTop = o && a, s.any.neighbors.hasBottom = o && a;
                    const f = s.attachmentContext;
                    f && (f.extraSpaces.hasBottom = !u && gr(f.attachment))
                } else d.hasTop = !1;
            const c = {
                attachment: i,
                neighbors: l,
                extraSpaces: d,
                messageContext: t
            };
            t.attachmentsContext.push(c), r = { ...c
            }
        }
    },
    Rl = e => {
        const t = dn(e.attachmentsContext) || void 0;
        return {
            attachmentContext: t,
            any: t || e
        }
    },
    Pm = e => {
        var t;
        return e ? ((t = e.content) == null ? void 0 : t.type) === T.MessageContentType.Upload ? [e.content.data] : e.attachments : []
    },
    Im = e => !e.content.text,
    Lm = (e, t) => {
        const n = Bl(e),
            r = n === ze.AgentMessage && e.agentId === t.agentId,
            i = n === ze.ContactMessage,
            a = e.subType !== T.MessageSubType.Bot || (e.content.quickReplies || []).length === 0;
        return t.type === n && (r || i) && a && Uv(t.date, e.createdAt)
    },
    Bl = e => {
        switch (e.subType) {
            case T.MessageSubType.Agent:
                return ze.AgentMessage;
            case T.MessageSubType.Contact:
                return ze.ContactMessage;
            case T.MessageSubType.Bot:
                return ze.BotMessage
        }
        return null
    },
    Pl = e => {
        const t = e.attachmentsContext.length;
        return !(t > 0 && e.attachmentsContext[t - 1].attachment.type === T.AttachmentType.File)
    },
    Rc = e => e.type !== T.AttachmentType.File && e.type !== T.AttachmentType.Cards,
    gr = e => !!e && (e.type === T.AttachmentType.File || e.type === T.AttachmentType.Cards),
    Il = () => {
        const e = c0();
        e.volume = pp, e.addEventListener("canplaythrough", () => {
            e.play().catch(t => K("Could not play message sound.", t))
        })
    },
    $m = Zv(Il, gp),
    qm = e => e.filter(t => t.type === T.MessageType.Message && (t.subType === T.MessageSubType.Agent || t.subType === T.MessageSubType.Contact)),
    Nm = (e, t = !0) => {
        const n = e.reduce((r, i) => (r.push(i), i.content.type === T.MessageContentType.ChatClose || i.content.type === T.MessageContentType.ChatVisitorClose ? [] : r), []);
        return t ? n.filter(r => r.type === T.MessageType.Message && r.subType !== T.MessageSubType.System) : n
    },
    zm = e => {
        const t = {};
        return e.forEach(n => {
            n.trigger && (t[n.trigger.id] = {
                sent: !0
            })
        }), t
    },
    jm = e => !!(e.content.quickReplies && e.content.quickReplies.length > 0),
    ki = async (e, t = !1) => {
        var i;
        const n = Jr(e),
            r = !t && n;
        if ((i = e.content) != null && i.text && x.getOptions().urlCardsEnabled) {
            const a = await km(e.content.text, e.subType === T.MessageSubType.Contact, r);
            a && a.items.length > 0 && e.attachments.push(a)
        }
        return ho.set(!1), e
    },
    Um = async e => (x.getOptions().urlCardsEnabled && await Promise.all(e.map(async t => await ki(t))), e),
    c1 = e => e.findIndex(t => t.message.channel.type === "email") > -1,
    u1 = e => {
        var n, r;
        const t = e.find(i => {
            var a, l;
            return (l = (a = i.message) == null ? void 0 : a.trigger) == null ? void 0 : l.identityId
        });
        return (r = (n = t == null ? void 0 : t.message) == null ? void 0 : n.trigger) == null ? void 0 : r.identityId
    },
    Vm = () => {
        const e = O({}),
            {
                subscribe: t,
                update: n,
                set: r
            } = e,
            i = async f => {
                r(Kr("id", await Um(f)))
            },
            a = async f => {
                const h = await ki(f);
                Yr(f) && po.set(!1), n(p => ({ ...p,
                    [f.id]: h
                })), Gm(h)
            },
            l = async f => {
                if (!E(nt).some(v => v.id === f.id)) return;
                const p = E(vo) === f.id ? await ki(f, !0) : f;
                n(v => ({ ...v,
                    [f.id]: p
                }))
            };
        return {
            subscribe: t,
            setMessages: i,
            addMessage: a,
            deleteMessage: f => {
                n(h => {
                    const {
                        [f]: p, ...v
                    } = h;
                    return v
                })
            },
            replaceMessage: l,
            updateMessageRating: f => {
                var h;
                E(xn) === ((h = f.content.data) == null ? void 0 : h.target) && Bv(), n(p => !f || f.content.type !== T.MessageContentType.RateForm ? { ...p
                } : (p[f.id] || mo(f.id), { ...p,
                    [f.id]: f
                }))
            },
            sendMessage: async (f, h) => {
                xi.set(f);
                const p = await Mc({
                    text: f
                });
                p && (xi.set(null), await a(p), G.emit("messageSent", p), t0(E($t))), await Promise.all(h.map(v => $v(v)))
            },
            sendBotReply: async (f, h, p) => {
                const v = await Mc({
                    text: h,
                    quickReply: {
                        replyTo: f,
                        payload: p
                    }
                });
                p.isGoBackButton || By(h), v && await l(v)
            },
            clearMessages: () => {
                r({})
            }
        }
    },
    H = Vm(),
    Hm = e => {
        E(wt) || So(), o_(), setTimeout(() => {
            H.addMessage(e), ef()
        }, 1600)
    },
    Gm = e => {
        e && E(xr) && E(wt) && !(E(Wl) && E(be)) && u0(e) && $m()
    },
    po = O(!1),
    Ll = M([H], ([e]) => {
        const t = Object.values(e).filter(Jr);
        if (!t) return null;
        const n = t.sort((r, i) => new Date(r.createdAt).getTime() - new Date(i.createdAt).getTime());
        return dn(n)
    }),
    go = M([H, jn], ([e, t]) => {
        const n = Object.values(e).filter(Jr);
        return t ? n.filter(r => new Date(r.createdAt) > new Date(t)) : n
    }),
    Wm = M([go], ([e]) => dn(e)),
    $l = M([go], ([e]) => e.length),
    Km = M([$l], ([e]) => e > 0),
    nt = M([H], ([e]) => Object.values(e).sort(Tm)),
    l1 = M([nt], ([e]) => Mm(e)),
    vo = M([nt], ([e]) => {
        const t = dn(e);
        return (t == null ? void 0 : t.id) ? ? null
    }),
    f1 = M([H], ([e]) => {
        var r;
        const t = Object.values(e).filter(i => {
                var a;
                return typeof((a = i.widgetOptions) == null ? void 0 : a.disableInput) == "boolean"
            }),
            n = dn(t);
        return ((r = n == null ? void 0 : n.widgetOptions) == null ? void 0 : r.disableInput) ? ? !1
    }),
    ql = M([H], ([e]) => Object.values(e).filter(t => t.subType === "contact" || t.subType === "agent").length > 0),
    d1 = M([H], ([e]) => Object.values(e).filter(t => t.subType === T.MessageSubType.Contact).length > 0),
    h1 = M([H, Zu], ([e, t], n) => {
        var r, i, a;
        if (t) {
            const l = e[t];
            l && l.content.type === T.MessageContentType.RateForm && n({
                messageId: l.id,
                value: (r = l.content.data) == null ? void 0 : r.value,
                text: (i = l.content.data) == null ? void 0 : i.text,
                target: (a = l.content.data) == null ? void 0 : a.target
            })
        } else n(null)
    }),
    Xm = M([nt], ([e]) => e.slice().reverse().find(n => n.subType === T.MessageSubType.Contact) || null),
    xi = O(null),
    Un = () => !!x.getOptions().ratingEnabled,
    Nl = () => !!x.getOptions().aiRatingEnabled,
    mo = e => {
        Zu.set(e), ao(Wr.ChatRating)
    },
    p1 = async ({
        messageId: e,
        rating: {
            text: t,
            value: n
        },
        onSuccess: r
    }) => {
        const i = E(H)[e],
            a = e === Ur ? void 0 : e;
        try {
            await me.getClient().chatRate({
                messageId: a,
                value: n,
                text: t ? ? void 0
            }), r && r()
        } catch (l) {
            i && await H.replaceMessage(i), Ue("Chat rating failed.", String(l)), Pt(E(ve)("form.submit.error"))
        }
    },
    g1 = e => {
        const {
            widgetV3Url: t
        } = x.getOptions();
        return `${t}/assets/images/rating/${e}.svg`
    },
    Zm = /(G-([A-Z,0-9]*))/g,
    dt = [];
let yo = !1,
    pe, _o = !1,
    Tn;
const Ti = e => e.match(Zm),
    Ym = () => {
        const {
            googleAnalyticsEnabled: e
        } = x.getOptions();
        pe = window.top || window, e && (pe.gtag && (Tn = pe.gtag, _o = !0), G.on("analyticsConsentChanged", Jm), !yo && ju() && zl())
    },
    Jm = e => {
        !yo && e && zl()
    },
    zl = () => {
        const {
            gaKey: e,
            gaOptions: t,
            googleAnalyticsManual: n,
            googleAnalyticsMeasurementIds: r
        } = x.getOptions(), i = t || {
            cookieDomain: "auto"
        };
        if (e) Ti(e) && dt.push({
            key: e,
            options: i
        });
        else if (n && r) r.forEach(a => {
            Ti(a) && dt.push({
                key: a,
                options: i
            })
        });
        else try {
            dt.push(...jl())
        } catch (a) {
            const l = a instanceof Error ? a.message : a;
            Me("Error during getting GA top trackers", l)
        }
        dt.length > 0 && !_o && Qm(), dt.length !== 0 ? (ty(), yo = !0, Me("GA initialized")) : Me("No GA to setup")
    },
    jl = () => {
        const e = [];
        return pe.google_tag_manager && Object.keys(pe.google_tag_manager).forEach(n => {
            Ti(n) && e.push({
                key: n,
                options: {
                    cookieDomain: "auto"
                }
            })
        }), e
    },
    Qm = () => {
        const e = pe.document,
            {
                head: t
            } = e,
            n = e.createElement("script");
        n.id = "gtag", n.type = "text/javascript", n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js", t.insertBefore(n, t.firstChild), pe.dataLayer = pe.dataLayer || [], pe.gtag = function() {
            pe.dataLayer.push(arguments)
        }, Tn = pe.gtag, Tn("js", new Date)
    },
    ey = () => {
        let e = [];
        if (_o) {
            const t = jl();
            dt.forEach(n => {
                t.find(({
                    key: r
                }) => r === n.key) || e.push(n)
            })
        } else e = [...dt];
        return e
    },
    ty = () => {
        ey().forEach(e => {
            const {
                key: t,
                options: n
            } = e;
            let r = {};
            n ? (r = {
                cookie_domain: n.cookieDomain
            }, n.name && (r.name = n.name)) : r = {
                cookie_domain: (pe == null ? void 0 : pe.location.hostname) || ""
            }, Tn("config", t, r)
        })
    },
    ny = (e, t) => {
        const {
            googleAnalyticsEnabled: n
        } = x.getOptions();
        if (!(!n || !pe.gtag || !ju() || pe.document.hidden)) try {
            dt.forEach(r => {
                t.send_to = r.key, Tn("event", e, t), Me(`Smartsupp: GA event ${e} - ${JSON.stringify(t)}`)
            })
        } catch (r) {
            const i = r instanceof Error ? r.message : r;
            Me("Smartsupp: GA error:", i)
        }
    },
    ry = "Visitor_started_conversation",
    sy = "Trigger_message_sent",
    iy = "Trigger_message_viewed",
    oy = "Trigger_visitor_reaction",
    ay = "Auto_message_sent",
    cy = "Auto_message_viewed",
    uy = "Auto_message_visitor_reaction",
    ly = "Chatbot_sent",
    fy = "Chatbot_viewed",
    dy = "Chatbot_interaction",
    hy = "Chatbot_button_interaction",
    py = "Chatbot_visitor_reaction",
    gy = "Ai_chatbot_interaction",
    vy = "Ai_chatbot_visitor_reaction",
    my = "Agent_served_conversation",
    yy = "Contact_acquired",
    _y = "Auth_form_filled",
    by = "Offline_message_sent",
    Cy = "Feedback_sent",
    wy = "Feedback_text_sent",
    Ay = "Url_card_opened",
    Ey = {
        event_category: "Smartsupp_v3",
        non_interaction: !0
    },
    re = (e, t) => {
        const n = { ...Ey,
            ...t
        };
        ny(e, n)
    },
    Fy = (e = "") => re(sy, {
        event_label: e
    }),
    Sy = e => re(iy, {
        event_label: e
    }),
    ky = (e = "") => re(oy, {
        event_label: e
    }),
    xy = (e = "") => re(ay, {
        event_label: e
    }),
    Ty = e => re(cy, {
        event_label: e
    }),
    Oy = (e = "") => re(uy, {
        event_label: e
    }),
    My = (e = "") => re(ly, {
        event_label: e
    }),
    Dy = e => re(fy, {
        event_label: e
    }),
    Ry = (e = "") => re(dy, {
        event_label: e
    }),
    By = (e = "") => re(hy, {
        event_label: e
    }),
    Py = (e = "") => re(py, {
        event_label: e
    }),
    Iy = () => re(ry),
    Ly = e => re(my, {
        event_label: e
    }),
    $y = () => re(_y),
    qy = () => re(by),
    Ny = (e, t) => {
        const n = {
            event_label: t || Xu[e] || "",
            value: e
        };
        re(t ? wy : Cy, n)
    },
    zy = e => re(yy, {
        event_label: e
    }),
    v1 = e => re(Ay, {
        event_label: e
    }),
    jy = (e = "") => re(gy, {
        event_label: e
    }),
    Uy = (e = "") => re(vy, {
        event_label: e
    });
let Oi = !1,
    Ce = {};
const Ul = () => {
        Oi = !1
    },
    Vy = () => {
        const e = E(nt);
        Ce = zm(e)
    },
    Hy = (e, t) => Oi ? !1 : Nm(e).length === 1 && t === T.MessageSubType.Contact ? (Oi = !0, !0) : !1,
    Gy = (e, t) => {
        var r, i;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === T.MessageSubType.Contact && e.subType === T.MessageSubType.Trigger && !((i = Ce[n]) != null && i.visitorResponded) ? (Ce[n].visitorResponded = !0, !0) : !1
    },
    Wy = (e, t) => {
        var r, i;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === T.MessageSubType.Contact && !(t.content.quickReplies || t.content.quickReply) && e.subType === T.MessageSubType.Bot && !((i = Ce[n]) != null && i.visitorResponded) && n ? (Ce[n].visitorResponded = !0, !0) : !1
    },
    Ky = (e, t) => {
        var r, i, a;
        const n = ((r = e.trigger) == null ? void 0 : r.id) || "";
        return t.subType === T.MessageSubType.Contact && ((i = e.trigger) == null ? void 0 : i.groupType) === T.GroupType.chatbot && !((a = Ce[n]) != null && a.reacted) ? (Ce[n].reacted = !0, !0) : !1
    },
    Xy = e => {
        var n, r, i;
        const t = ((n = e.trigger) == null ? void 0 : n.id) || "";
        return ((r = e.trigger) == null ? void 0 : r.groupType) === T.GroupType.ai && !((i = Ce[t]) != null && i.reacted) ? (Ce[t].reacted = !0, !0) : !1
    },
    ft = (e, t, n = !1) => {
        var r;
        if (e.length > 0 && !n) {
            const i = e.slice(-2).filter(a => a.trigger);
            return i ? (r = i[i.length - 1].trigger) == null ? void 0 : r.name : ""
        } else return t.trigger ? t.trigger.name : ""
    },
    Zy = e => {
        const t = E(nt);
        Jy(t, e), Qy(t, e), Hy(t, e.subType) && Iy()
    },
    Yy = e => {
        var i;
        let t = e;
        const r = E(nt).filter(a => a.trigger);
        r && r.length > 0 && (t = ((i = r[r.length - 1].trigger) == null ? void 0 : i.name) ? ? e), zy(t)
    },
    Jy = (e, t) => {
        var i, a, l, u, d, c, o, s;
        const n = ((i = t.trigger) == null ? void 0 : i.id) || "";
        t.subType === T.MessageSubType.Bot && !((a = Ce[n]) != null && a.sent) && (((l = t.trigger) == null ? void 0 : l.groupType) === T.GroupType.chatbot && (My(ft(e, t, !0)), Ce[n] = {
            sent: !0
        }), ((u = t.trigger) == null ? void 0 : u.groupType) === T.GroupType.message && (xy(ft(e, t, !0)), Ce[n] = {
            sent: !0
        }), ((d = t.trigger) == null ? void 0 : d.groupType) === T.GroupType.ai && (Ce[n] = {
            sent: !0
        }));
        const r = e.length > 1 ? e[e.length - 2] : void 0;
        r && (Wy(r, t) ? (((c = r.trigger) == null ? void 0 : c.groupType) === T.GroupType.chatbot && Py(ft(e, t)), ((o = r.trigger) == null ? void 0 : o.groupType) === T.GroupType.message && Oy(ft(e, t)), ((s = r.trigger) == null ? void 0 : s.groupType) === T.GroupType.ai && Uy(ft(e, t))) : Ky(r, t) ? Ry(ft(e, t)) : Xy(t) && jy(ft(e, t)))
    },
    Qy = (e, t) => {
        var r, i;
        t.subType === T.MessageSubType.Trigger && (Fy((r = t == null ? void 0 : t.trigger) == null ? void 0 : r.name), Ce[((i = t.trigger) == null ? void 0 : i.id) || ""] = {
            sent: !0
        });
        const n = e.length > 1 ? e[e.length - 2] : void 0;
        n && Gy(n, t) && ky(ft(e, t))
    },
    e0 = () => {
        const e = E(go).filter(n => n.trigger),
            t = e[e.length - 1];
        t && t.trigger && (t.subType === T.MessageSubType.Bot && t.content.quickReplies ? Dy(t.trigger.name) : t.subType === T.MessageSubType.Bot ? Ty(t.trigger.name) : t.subType === T.MessageSubType.Trigger && Sy(t.trigger.name))
    },
    t0 = e => {
        e === oe.AccountStatus.Offline && qy()
    };
G.on("messageReceived", Zy);
G.on("agentJoined", e => {
    Ly(e.fullname)
});
G.on("chatRated", e => {
    Ny(e.value, e.text)
});
G.on("chatClosed", () => {
    Ul()
});
G.on("chatVisitorClosed", () => {
    Ul()
});
G.on("contactAcquired", ({
    acquiredBy: e
}) => {
    Yy(e)
});
zn.push(Vy);
const bo = (e, t = 300) => {
        let n;
        return (...i) => {
            clearTimeout(n), n = setTimeout(() => e(...i), t)
        }
    },
    n0 = 500,
    r0 = 1500,
    s0 = ["smartsupp.dev", "smartsuppchat.loc"];
var Vl = (e => (e.Default = "blackberry2.mp3", e))(Vl || {}),
    ht = (e => (e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", e))(ht || {}),
    Mi = (e => (e.Image = "image", e.Video = "video", e))(Mi || {});
const i0 = e => {
        const t = () => {
            El()
        };
        ot(() => (e.addEventListener("visibilitychange", t), () => e.removeEventListener("visibilitychange", t)))
    },
    o0 = e => {
        const t = () => {
            E(be) && Or(!0)
        };
        ot(() => (e.addEventListener("popstate", t), () => e.removeEventListener("popstate", t)))
    },
    a0 = () => {
        const e = se()._smartsupp || {};
        e.appVersion = "0.0.1", e.commitHash = "8a4b6e65595ca224e9fdd33843ff057bd63e60e8", e.commitInfo = "8a4b6e65595ca224e9fdd33843ff057bd63e60e8 - Merge pull request #355 from smartsupp/develop - 2025-05-12 10:28:34 +0200", se()._smartsupp = e
    },
    c0 = (e = Vl.Default) => {
        const {
            widgetV3Url: t
        } = x.getOptions(), n = new Audio(`${t}/assets/sounds/${e}`);
        return n.crossOrigin = "anonymous", n.load(), n
    },
    u0 = e => e.subType !== T.MessageSubType.Contact && ![T.MessageContentType.RateForm, T.MessageContentType.AgentJoin, T.MessageContentType.AgentLeave, T.MessageContentType.AgentAssign, T.MessageContentType.AgentUnassign].includes(e.content.type),
    Hl = e => {
        me.isInitialized() && me.getClient().notify(e)
    },
    l0 = () => {
        x.getOptions().isPreviewMode || Hl(io.EventName.WidgetOpen)
    },
    f0 = () => Hl(io.EventName.WidgetShow),
    Gl = () => document.visibilityState === "visible",
    d0 = () => {
        if (E(tt)) {
            Di.set(!0);
            const e = se();
            e.history.pushState(null, "", e.location.href)
        }
    },
    De = O(!1),
    h0 = O(!1),
    Di = O(!1),
    p0 = e => !!s0.find(t => e.includes(t)),
    xr = O(!0);
x.awaitOptions().then(e => {
    const t = Ve(j.SoundsEnabled);
    t ? xr.set(t === "true") : typeof e.enableSounds == "boolean" && xr.set(e.enableSounds), h0.set(p0(e.bootstrapUrl))
});
const m1 = e => {
        xr.set(e), at({
            name: j.SoundsEnabled,
            value: e.toString()
        }), e && Il()
    },
    Wl = O(Gl()),
    g0 = bo(() => Wl.set(Gl()), n0);
se().addEventListener("visibilitychange", () => {
    g0()
});
const v0 = O(0),
    y1 = () => v0.update(e => e + 1),
    Kl = 255,
    m0 = 32,
    _1 = 500,
    b1 = e => {
        const t = {};
        return e.filter(n => !n.isHidden).reduce((n, r) => (n[r.name] = r.value, n), t)
    },
    C1 = e => {
        const t = {};
        return e.reduce((n, r) => (n[r.name] = r.validators, n), t)
    },
    w1 = (e, t, n) => {
        e.update(r => ({ ...r,
            [t]: n
        }))
    },
    A1 = (e, t) => {
        const n = {};
        for (const r in e) n[r] = t;
        return n
    },
    E1 = () => Math.random().toString(36),
    y0 = e => {
        if (!e) return !1;
        const t = e.split("@");
        if (t.length !== 2) return !1;
        const n = t[0],
            r = t[1];
        return n.length > 64 || r.length > 255 || r.split(".").some(a => a.length > 63) ? !1 : hm.test(e)
    };
var qt = (e => (e.Text = "text", e.Checkbox = "checkbox", e.Select = "select", e))(qt || {});
const Qr = () => e => {
        let t = !0;
        return e == null && (t = !1), It(e) && (t = e.trim().length > 0), {
            type: "required",
            isValid: t
        }
    },
    _0 = () => e => ({
        type: "checked",
        isValid: It(e) ? e === "true" : e === !0
    }),
    b0 = () => e => ({
        type: "email",
        isValid: y0(String(e))
    }),
    C0 = () => e => ({
        type: "phone",
        isValid: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/.test(String(e))
    }),
    ri = O(void 0),
    w0 = e => {
        const {
            emailControl: t
        } = x.getOptions(), n = !!(e != null && e.email);
        return t && !n
    },
    A0 = e => {
        const {
            nameControl: t
        } = x.getOptions(), n = !!(e != null && e.name);
        return t && !n
    },
    E0 = e => {
        const {
            numberControl: t
        } = x.getOptions(), n = !!(e != null && e.phone);
        return !!t && !n
    },
    F0 = () => {
        const {
            groupSelectEnabled: e
        } = x.getOptions(), t = E(fl);
        return !!e && t.length > 0
    },
    S0 = () => {
        const {
            privacyNoticeEnabled: e,
            privacyNoticeCheckRequired: t
        } = x.getOptions(), n = $0();
        return !!e && t && !n
    },
    k0 = e => {
        var r;
        const {
            privacyNoticeEnabled: t
        } = x.getOptions(), n = !!((r = e == null ? void 0 : e.variables) != null && r.personalDataProcessingConsent);
        return !!t && !n
    },
    x0 = () => ({
        type: qt.Text,
        subType: "email",
        name: "email",
        label: "authForm.label.email",
        placeholder: "authForm.yourEmail",
        value: "",
        validators: [Qr(), b0()],
        maxLength: Kl
    }),
    T0 = () => ({
        type: qt.Text,
        subType: "text",
        name: "name",
        label: "authForm.label.name",
        placeholder: "authForm.yourName",
        value: "",
        validators: [Qr()],
        maxLength: Kl
    }),
    O0 = () => ({
        type: qt.Text,
        subType: "tel",
        name: "phone",
        label: "authForm.label.phone",
        placeholder: "authForm.yourPhone",
        value: "",
        validators: [Qr(), C0()],
        maxLength: m0
    }),
    M0 = e => {
        const t = E(fl);
        return {
            type: qt.Select,
            name: "group",
            label: "authForm.label.group",
            placeholder: "authForm.group",
            value: (e == null ? void 0 : e.group) ? ? "",
            validators: [Qr()],
            options: t.map(n => ({
                text: n.name,
                value: n.key
            }))
        }
    },
    D0 = () => ({
        type: qt.Checkbox,
        name: "personalDataProcessingConsent",
        label: "authForm.acceptTerms",
        value: !1,
        validators: [_0()]
    }),
    R0 = () => ({
        type: qt.Checkbox,
        name: "personalDataProcessingConsent",
        label: "topBar.gdprTitle",
        value: !1,
        validators: [],
        isHidden: !0
    }),
    Xl = e => ({
        showEmail: w0(e),
        showName: A0(e),
        showPhone: E0(e),
        showGroups: F0(),
        showConsent: S0()
    }),
    B0 = e => ({
        showEmail: !!e.emailControl,
        showName: !!e.nameControl,
        showPhone: !!e.numberControl,
        showGroups: !!e.groupSelectEnabled,
        showConsent: !!e.privacyNoticeEnabled && e.privacyNoticeCheckRequired
    }),
    P0 = e => Object.values(Xl(e)).some(t => t),
    F1 = (e, t) => {
        const n = [],
            {
                showEmail: r,
                showName: i,
                showPhone: a,
                showGroups: l,
                showConsent: u
            } = t ? B0(t) : Xl(e);
        return i && n.push(T0()), r && n.push(x0()), a && n.push(O0()), l && n.push(M0(e)), u ? n.push(D0()) : n.length > 0 && (t ? t != null && t.privacyNoticeEnabled : k0(e)) && n.push(R0()), n
    },
    I0 = () => {
        const e = Ve(j.AuthForm);
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch {
            return null
        }
    },
    S1 = (e, t) => {
        const n = I0(),
            r = {
                [e]: t
            },
            i = n ? { ...n,
                ...r
            } : r;
        at({
            name: j.AuthForm,
            value: JSON.stringify(i)
        })
    },
    k1 = () => {
        zu(j.AuthForm)
    },
    L0 = () => {
        var t;
        const e = E(We);
        return !!((t = e == null ? void 0 : e.variables) != null && t.authenticated)
    },
    $0 = () => {
        var e;
        return ((e = E(We)) == null ? void 0 : e.gdprApproved) || !1
    },
    Bc = () => {
        const {
            isPreviewMode: e
        } = x.getOptions();
        if (e || E(Mv) || L0()) return !1;
        const t = E(We);
        if (!P0(t)) return !1;
        const {
            requireLogin: n
        } = x.getOptions(), r = E($t) === oe.AccountStatus.Offline;
        return !!n || r
    },
    x1 = async e => {
        const {
            privacyNoticeCheckRequired: t
        } = x.getOptions(), n = E(We), r = (n == null ? void 0 : n.name) ? ? e.name, i = (n == null ? void 0 : n.email) ? ? e.email, a = (n == null ? void 0 : n.phone) ? ? e.phone, l = e.group ? ? (n == null ? void 0 : n.group), u = e.personalDataProcessingConsent, d = { ...r && {
                name: r
            },
            ...i && {
                email: i
            },
            ...a && {
                phone: a
            },
            ...l && {
                group: l
            },
            ...u && t && {
                personalDataProcessingConsent: u
            }
        };
        await me.getClient().authenticate(d), $y(), await Ql(), ll()
    },
    Co = O(!1),
    Pc = O(!1),
    Zl = O(!1);
se().addEventListener("offline", () => Co.set(!0));
se().addEventListener("online", () => Co.set(!1));
const Yl = M([uo, Co, Zl], ([e, t, n]) => n ? ht.Connected : !e || t ? ht.Disconnected : ht.Connected, ht.Connecting);
let yn;
const Ic = bo(e => {
    e && !yn && (yn = Kt(E(ve)("error.noInternet"), 0)), !e && yn && (yn(), yn = void 0)
}, r0);
Yl.subscribe(e => {
    e === ht.Disconnected && (Pc.set(!0), Ic(!0)), e === ht.Connected && (Pc.set(!1), Ic(!1))
});
const q0 = () => {
        const e = E(Yl),
            t = E(ql),
            n = E(Ct);
        return e === ht.Disconnected || !t || n.disableAttachments
    },
    vr = O(!1),
    T1 = e => {
        if (E(vr)) {
            K("There is already file upload in progress");
            return
        }
        if (e.length === 0) return;
        const t = N0(e);
        t.length > 0 && Dt.add(t)
    },
    N0 = e => e.length > Cn ? (Pt(`${E(ve)("fileUpload.tooManyFiles")} ${Cn}`), []) : e.filter(t => z0(t)),
    z0 = e => {
        const {
            acceptedFileExtensions: t,
            acceptedFileTypes: n,
            maxFileSize: r
        } = E(lo);
        if (!e) return !1;
        const i = t.includes(Pv(e.name)),
            a = n.some(l => l === e.type);
        if (q0()) return K("File upload is disabled"), !1;
        if (!E(ql)) return Pt(E(ve)("warningBar.uploadFileNotFirst")), !1;
        if (e.size > r) {
            const l = Iv(r);
            return Pt(`${E(ve)("fileUpload.fileTooBig")} ${l.size} ${l.unit}`), !1
        }
        return i || a ? !0 : (Pt(E(ve)("fileUpload.badFileType")), !1)
    },
    j0 = () => Dt.count() === 0 ? [] : (Dt.setUploadingStatus(), Lv(E(Dt), e => Dt.setFileUploaded(e.name))),
    Lc = 10,
    U0 = 1e4,
    V0 = 3e4,
    H0 = 20,
    Ri = {
        ":)": "🙂",
        ":-)": "🙂",
        ":D": "😀",
        ":-D": "😀",
        ";)": "😉",
        ";-)": "😉",
        "<3": "❤️",
        ":(": "😞",
        ":-(": "😞",
        ":P": "😛",
        ":-P": "😛",
        ":-o": "😮",
        ":O": "😮",
        ":/": "😕",
        ":-/": "😕"
    },
    G0 = e => {
        const t = `(${e?"$|":""} )`;
        return new RegExp(Object.keys(Ri).map(n => `${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`).join("|"), "gi")
    },
    Jl = (e, t = !1) => {
        const n = G0(t);
        return e.replace(n, r => {
            const i = Object.keys(Ri).find(l => r.toUpperCase().includes(l));
            if (!i) return r;
            const a = r.endsWith(" ") ? " " : "";
            return `${Ri[i]}${a}`
        })
    },
    W0 = e => {
        if (e.length > 0 && e.length % Lc === 0) {
            const t = e.slice(-Lc),
                n = new Date(e[e.length - 1].createdAt).getTime();
            if (new Date().getTime() - n > V0 || !t.every(i => i.subType === T.MessageSubType.Contact)) return !1;
            const r = new Date(t[0].createdAt).getTime();
            if (n - r < U0) return !0
        }
        return !1
    },
    K0 = e => {
        const t = Tl(e);
        return t ? t.length > H0 : !1
    },
    wo = O(),
    Tr = O(!1),
    O1 = O(),
    X0 = 200,
    Z0 = O(!1),
    Vn = M([wo], ([e]) => typeof e > "u" ? Ve(j.Message) ? ? "" : e),
    Ao = M([Vn], ([e]) => e.trim().length === 0),
    Eo = e => {
        wo.set(Jl(e))
    },
    M1 = (e, t) => {
        const n = E(Vn) ? ? "",
            r = n.slice(0, t),
            i = n.slice(t),
            a = `${r}${e}${i}`;
        wo.set(a)
    },
    D1 = () => {
        if (E(Tr)) return;
        me.getClient().chatTyping(!0), Tr.set(!0)
    },
    Y0 = () => {
        if (!E(Tr)) return;
        me.getClient().chatTyping(!1), Tr.set(!1)
    },
    Ql = async (e = []) => {
        if (E(Ao) && e.length === 0) return;
        const t = Jl(E(Vn), !0).trim();
        await H.sendMessage(t, e), Eo(""), Y0(), Z0.set(!0), Al()
    },
    J0 = bo(async () => {
        const e = Dt.count() > 0;
        if (E(Ao) && !e) return;
        if (!E(be) && Bc() && Jt(), Q0() && !e) {
            Kt(E(ve)("warningBar.sameMessageTwice"));
            return
        }
        if (W0(E(nt))) {
            Kt(E(ve)("warningBar.spamProtection"));
            return
        }
        if (E(vr)) {
            Ue(E(ve)("chat.fileUpload.error.stillUploading"));
            return
        }
        if (E(Fi)) {
            Kt(E(ve)("card.sendingInProgress"));
            return
        }
        if (K0(E(Vn))) {
            Kt(E(ve)("card.linksLimitReached"));
            return
        }
        if (Bc()) {
            ao(Wr.AuthForm);
            return
        }
        let t = [];
        e && (vr.set(!0), t = await j0(), Dt.clear(), vr.set(!1)), await Ql(t)
    }, X0),
    Q0 = () => {
        const e = E(Xm),
            t = E(xi),
            n = E(Vn).trim();
        return e && n === e.content.text || t && n === t
    },
    Gt = (e, t) => (Me(`widget visible: ${String(t)} => reason: ${e}`), t && t !== E(wt) && f0(), t),
    Fo = O(),
    So = () => Fo.set(!0),
    e_ = () => Fo.set(!1),
    t_ = M([$t, nt, Ao, wl], ([e, t, n, r]) => {
        const {
            hideOfflineChat: i,
            isPreviewMode: a
        } = x.getOptions();
        return e === oe.AccountStatus.Offline && !!i && qm(t).length === 0 && n && !r && !a
    }),
    wt = M([We, tt, Fo, Ke, wl, t_], ([e, t, n, r, i, a]) => {
        const {
            hideMobileWidget: l,
            hideWidget: u
        } = x.getOptions();
        return e != null && e.bannedAt ? Gt("visitor is banned", !1) : t && l ? Gt("option 'hideMobileWidget' is true", !1) : typeof n == "boolean" ? Gt("set by API command", n) : r && !i ? Gt("chat status is not pending", !0) : a ? Gt("option 'hideOfflineChat' is true", !1) : Gt(`option 'hideWidget' is ${String(u)}`, !u)
    }),
    n_ = M([tt], ([e]) => {
        const {
            openOnTrigger: t
        } = x.getOptions();
        return t && !e
    }),
    be = Wu(j.IsMessengerFrameOpened, !1, e => !E(tt) && e === "true"),
    Jt = () => {
        d0(), be.set(!0), a_(), e0(), l0()
    },
    Or = e => {
        if (E(tt) && E(Di) && !e) return Di.set(!1), se().history.back();
        G.emit("messengerClose", !0), be.set(!1)
    },
    r_ = M([De, wt, be], ([e, t, n]) => e && t && n);

function s_() {
    const e = O(!1),
        {
            subscribe: t
        } = e;
    let n = null;
    return {
        subscribe: t,
        handleDragOver: (a, l = !0) => {
            l && a.preventDefault(), E(e) || e.set(!0), n && clearTimeout(n), n = window.setTimeout(() => {
                e.set(!1)
            }, 200)
        },
        handleDrop: a => {
            var u;
            a.preventDefault(), n && clearTimeout(n), e.set(!1);
            const l = (u = a.dataTransfer) != null && u.files ? [...a.dataTransfer.files] : [];
            return l.length === 0 && Kt("Dropped item(s) are not processable files"), {
                droppedFiles: l
            }
        }
    }
}
const R1 = s_(),
    i_ = M([De, wt, be], ([e, t, n]) => e && t && !n),
    ko = O(!1),
    es = O(!1),
    o_ = () => {
        ko.set(!0), es.set(!1)
    },
    ef = () => {
        es.set(!0), ko.set(!1)
    },
    a_ = (e = !1) => {
        es.set(!1), e && at({
            name: j.PopupClosedAt,
            value: new Date().toISOString()
        })
    },
    tf = M([tt], ([e]) => {
        const {
            mobilePopupsEnabled: t
        } = x.getOptions();
        return e ? !!t : !0
    }),
    c_ = M([Ll], ([e]) => {
        const t = Ve(j.PopupClosedAt) ? ? null;
        if (!t || !e) return !0;
        const n = new Date(e.createdAt).getTime(),
            r = new Date(t).getTime();
        return n > r
    }),
    u_ = M([De, wt, ko, be, tf], ([e, t, n, r, i]) => e && t && n && !r && i),
    l_ = M([De, wt, es, be, Ll, c_, tf, Si], ([e, t, n, r, i, a, l, u]) => e && t && n && i && a && !r && l && !u),
    On = {
        white: "#ffffff",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
        slate300: "#cbd5e1",
        slate900: "#0f172a",
        blue700: "#1d4ed8",
        smartsuppBlue: "#1233df"
    };

function le(e, t) {
    f_(e) && (e = "100%");
    const n = d_(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}

function ur(e) {
    return Math.min(1, Math.max(0, e))
}

function f_(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}

function d_(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}

function nf(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function lr(e) {
    return Number(e) <= 1 ? `${Number(e)*100}%` : e
}

function Rt(e) {
    return e.length === 1 ? "0" + e : String(e)
}

function h_(e, t, n) {
    return {
        r: le(e, 255) * 255,
        g: le(t, 255) * 255,
        b: le(n, 255) * 255
    }
}

function $c(e, t, n) {
    e = le(e, 255), t = le(t, 255), n = le(n, 255);
    const r = Math.max(e, t, n),
        i = Math.min(e, t, n);
    let a = 0,
        l = 0;
    const u = (r + i) / 2;
    if (r === i) l = 0, a = 0;
    else {
        const d = r - i;
        switch (l = u > .5 ? d / (2 - r - i) : d / (r + i), r) {
            case e:
                a = (t - n) / d + (t < n ? 6 : 0);
                break;
            case t:
                a = (n - e) / d + 2;
                break;
            case n:
                a = (e - t) / d + 4;
                break
        }
        a /= 6
    }
    return {
        h: a,
        s: l,
        l: u
    }
}

function si(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function p_(e, t, n) {
    let r, i, a;
    if (e = le(e, 360), t = le(t, 100), n = le(n, 100), t === 0) i = n, a = n, r = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            u = 2 * n - l;
        r = si(u, l, e + 1 / 3), i = si(u, l, e), a = si(u, l, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: a * 255
    }
}

function qc(e, t, n) {
    e = le(e, 255), t = le(t, 255), n = le(n, 255);
    const r = Math.max(e, t, n),
        i = Math.min(e, t, n);
    let a = 0;
    const l = r,
        u = r - i,
        d = r === 0 ? 0 : u / r;
    if (r === i) a = 0;
    else {
        switch (r) {
            case e:
                a = (t - n) / u + (t < n ? 6 : 0);
                break;
            case t:
                a = (n - e) / u + 2;
                break;
            case n:
                a = (e - t) / u + 4;
                break
        }
        a /= 6
    }
    return {
        h: a,
        s: d,
        v: l
    }
}

function g_(e, t, n) {
    e = le(e, 360) * 6, t = le(t, 100), n = le(n, 100);
    const r = Math.floor(e),
        i = e - r,
        a = n * (1 - t),
        l = n * (1 - i * t),
        u = n * (1 - (1 - i) * t),
        d = r % 6,
        c = [n, l, a, a, u, n][d],
        o = [u, n, n, l, a, a][d],
        s = [a, a, u, n, n, l][d];
    return {
        r: c * 255,
        g: o * 255,
        b: s * 255
    }
}

function Nc(e, t, n, r) {
    const i = [Rt(Math.round(e).toString(16)), Rt(Math.round(t).toString(16)), Rt(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function v_(e, t, n, r, i) {
    const a = [Rt(Math.round(e).toString(16)), Rt(Math.round(t).toString(16)), Rt(Math.round(n).toString(16)), Rt(y_(r))];
    return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
}

function m_(e, t, n, r) {
    const i = e / 100,
        a = t / 100,
        l = n / 100,
        u = r / 100,
        d = 255 * (1 - i) * (1 - u),
        c = 255 * (1 - a) * (1 - u),
        o = 255 * (1 - l) * (1 - u);
    return {
        r: d,
        g: c,
        b: o
    }
}

function zc(e, t, n) {
    let r = 1 - e / 255,
        i = 1 - t / 255,
        a = 1 - n / 255,
        l = Math.min(r, i, a);
    return l === 1 ? (r = 0, i = 0, a = 0) : (r = (r - l) / (1 - l) * 100, i = (i - l) / (1 - l) * 100, a = (a - l) / (1 - l) * 100), l *= 100, {
        c: Math.round(r),
        m: Math.round(i),
        y: Math.round(a),
        k: Math.round(l)
    }
}

function y_(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}

function jc(e) {
    return xe(e) / 255
}

function xe(e) {
    return parseInt(e, 16)
}

function __(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
const Bi = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function b_(e) {
    let t = {
            r: 0,
            g: 0,
            b: 0
        },
        n = 1,
        r = null,
        i = null,
        a = null,
        l = !1,
        u = !1;
    return typeof e == "string" && (e = A_(e)), typeof e == "object" && (Se(e.r) && Se(e.g) && Se(e.b) ? (t = h_(e.r, e.g, e.b), l = !0, u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Se(e.h) && Se(e.s) && Se(e.v) ? (r = lr(e.s), i = lr(e.v), t = g_(e.h, r, i), l = !0, u = "hsv") : Se(e.h) && Se(e.s) && Se(e.l) ? (r = lr(e.s), a = lr(e.l), t = p_(e.h, r, a), l = !0, u = "hsl") : Se(e.c) && Se(e.m) && Se(e.y) && Se(e.k) && (t = m_(e.c, e.m, e.y, e.k), l = !0, u = "cmyk"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = nf(n), {
        ok: l,
        format: e.format || u,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
const C_ = "[-\\+]?\\d+%?",
    w_ = "[-\\+]?\\d*\\.\\d+%?",
    pt = "(?:" + w_ + ")|(?:" + C_ + ")",
    ii = "[\\s|\\(]+(" + pt + ")[,|\\s]+(" + pt + ")[,|\\s]+(" + pt + ")\\s*\\)?",
    fr = "[\\s|\\(]+(" + pt + ")[,|\\s]+(" + pt + ")[,|\\s]+(" + pt + ")[,|\\s]+(" + pt + ")\\s*\\)?",
    Re = {
        CSS_UNIT: new RegExp(pt),
        rgb: new RegExp("rgb" + ii),
        rgba: new RegExp("rgba" + fr),
        hsl: new RegExp("hsl" + ii),
        hsla: new RegExp("hsla" + fr),
        hsv: new RegExp("hsv" + ii),
        hsva: new RegExp("hsva" + fr),
        cmyk: new RegExp("cmyk" + fr),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function A_(e) {
    if (e = e.trim().toLowerCase(), e.length === 0) return !1;
    let t = !1;
    if (Bi[e]) e = Bi[e], t = !0;
    else if (e === "transparent") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    let n = Re.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = Re.rgba.exec(e), n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = Re.hsl.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = Re.hsla.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = Re.hsv.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = Re.hsva.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = Re.cmyk.exec(e), n ? {
        c: n[1],
        m: n[2],
        y: n[3],
        k: n[4]
    } : (n = Re.hex8.exec(e), n ? {
        r: xe(n[1]),
        g: xe(n[2]),
        b: xe(n[3]),
        a: jc(n[4]),
        format: t ? "name" : "hex8"
    } : (n = Re.hex6.exec(e), n ? {
        r: xe(n[1]),
        g: xe(n[2]),
        b: xe(n[3]),
        format: t ? "name" : "hex"
    } : (n = Re.hex4.exec(e), n ? {
        r: xe(n[1] + n[1]),
        g: xe(n[2] + n[2]),
        b: xe(n[3] + n[3]),
        a: jc(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = Re.hex3.exec(e), n ? {
        r: xe(n[1] + n[1]),
        g: xe(n[2] + n[2]),
        b: xe(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1))))))))))
}

function Se(e) {
    return typeof e == "number" ? !Number.isNaN(e) : Re.CSS_UNIT.test(e)
}
class V {
    constructor(t = "", n = {}) {
        if (t instanceof V) return t;
        typeof t == "number" && (t = __(t)), this.originalInput = t;
        const r = b_(t);
        this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = n.format ? ? r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok
    }
    isDark() {
        return this.getBrightness() < 128
    }
    isLight() {
        return !this.isDark()
    }
    getBrightness() {
        const t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }
    getLuminance() {
        const t = this.toRgb();
        let n, r, i;
        const a = t.r / 255,
            l = t.g / 255,
            u = t.b / 255;
        return a <= .03928 ? n = a / 12.92 : n = Math.pow((a + .055) / 1.055, 2.4), l <= .03928 ? r = l / 12.92 : r = Math.pow((l + .055) / 1.055, 2.4), u <= .03928 ? i = u / 12.92 : i = Math.pow((u + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * i
    }
    getAlpha() {
        return this.a
    }
    setAlpha(t) {
        return this.a = nf(t), this.roundA = Math.round(100 * this.a) / 100, this
    }
    isMonochrome() {
        const {
            s: t
        } = this.toHsl();
        return t === 0
    }
    toHsv() {
        const t = qc(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    toHsvString() {
        const t = qc(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
        return this.a === 1 ? `hsv(${n}, ${r}%, ${i}%)` : `hsva(${n}, ${r}%, ${i}%, ${this.roundA})`
    }
    toHsl() {
        const t = $c(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    toHslString() {
        const t = $c(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
        return this.a === 1 ? `hsl(${n}, ${r}%, ${i}%)` : `hsla(${n}, ${r}%, ${i}%, ${this.roundA})`
    }
    toHex(t = !1) {
        return Nc(this.r, this.g, this.b, t)
    }
    toHexString(t = !1) {
        return "#" + this.toHex(t)
    }
    toHex8(t = !1) {
        return v_(this.r, this.g, this.b, this.a, t)
    }
    toHex8String(t = !1) {
        return "#" + this.toHex8(t)
    }
    toHexShortString(t = !1) {
        return this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }
    toRgb() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    toRgbString() {
        const t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
        return this.a === 1 ? `rgb(${t}, ${n}, ${r})` : `rgba(${t}, ${n}, ${r}, ${this.roundA})`
    }
    toPercentageRgb() {
        const t = n => `${Math.round(le(n,255)*100)}%`;
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    toPercentageRgbString() {
        const t = n => Math.round(le(n, 255) * 100);
        return this.a === 1 ? `rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)` : `rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`
    }
    toCmyk() {
        return { ...zc(this.r, this.g, this.b)
        }
    }
    toCmykString() {
        const {
            c: t,
            m: n,
            y: r,
            k: i
        } = zc(this.r, this.g, this.b);
        return `cmyk(${t}, ${n}, ${r}, ${i})`
    }
    toName() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        const t = "#" + Nc(this.r, this.g, this.b, !1);
        for (const [n, r] of Object.entries(Bi))
            if (t === r) return n;
        return !1
    }
    toString(t) {
        const n = !!t;
        t = t ? ? this.format;
        let r = !1;
        const i = this.a < 1 && this.a >= 0;
        return !n && i && (t.startsWith("hex") || t === "name") ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), t === "cmyk" && (r = this.toCmykString()), r || this.toHexString())
    }
    toNumber() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    clone() {
        return new V(this.toString())
    }
    lighten(t = 10) {
        const n = this.toHsl();
        return n.l += t / 100, n.l = ur(n.l), new V(n)
    }
    brighten(t = 10) {
        const n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new V(n)
    }
    darken(t = 10) {
        const n = this.toHsl();
        return n.l -= t / 100, n.l = ur(n.l), new V(n)
    }
    tint(t = 10) {
        return this.mix("white", t)
    }
    shade(t = 10) {
        return this.mix("black", t)
    }
    desaturate(t = 10) {
        const n = this.toHsl();
        return n.s -= t / 100, n.s = ur(n.s), new V(n)
    }
    saturate(t = 10) {
        const n = this.toHsl();
        return n.s += t / 100, n.s = ur(n.s), new V(n)
    }
    greyscale() {
        return this.desaturate(100)
    }
    spin(t) {
        const n = this.toHsl(),
            r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new V(n)
    }
    mix(t, n = 50) {
        const r = this.toRgb(),
            i = new V(t).toRgb(),
            a = n / 100,
            l = {
                r: (i.r - r.r) * a + r.r,
                g: (i.g - r.g) * a + r.g,
                b: (i.b - r.b) * a + r.b,
                a: (i.a - r.a) * a + r.a
            };
        return new V(l)
    }
    analogous(t = 6, n = 30) {
        const r = this.toHsl(),
            i = 360 / n,
            a = [this];
        for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, a.push(new V(r));
        return a
    }
    complement() {
        const t = this.toHsl();
        return t.h = (t.h + 180) % 360, new V(t)
    }
    monochromatic(t = 6) {
        const n = this.toHsv(),
            {
                h: r
            } = n,
            {
                s: i
            } = n;
        let {
            v: a
        } = n;
        const l = [],
            u = 1 / t;
        for (; t--;) l.push(new V({
            h: r,
            s: i,
            v: a
        })), a = (a + u) % 1;
        return l
    }
    splitcomplement() {
        const t = this.toHsl(),
            {
                h: n
            } = t;
        return [this, new V({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new V({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }
    onBackground(t) {
        const n = this.toRgb(),
            r = new V(t).toRgb(),
            i = n.a + r.a * (1 - n.a);
        return new V({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
            a: i
        })
    }
    triad() {
        return this.polyad(3)
    }
    tetrad() {
        return this.polyad(4)
    }
    polyad(t) {
        const n = this.toHsl(),
            {
                h: r
            } = n,
            i = [this],
            a = 360 / t;
        for (let l = 1; l < t; l++) i.push(new V({
            h: (r + l * a) % 360,
            s: n.s,
            l: n.l
        }));
        return i
    }
    equals(t) {
        const n = new V(t);
        return this.format === "cmyk" || n.format === "cmyk" ? this.toCmykString() === n.toCmykString() : this.toRgbString() === n.toRgbString()
    }
}
const E_ = .299,
    F_ = .587,
    S_ = .114,
    k_ = 180,
    x_ = -20,
    T_ = -.25,
    O_ = .2,
    M_ = -5,
    D_ = .03,
    R_ = .5,
    Uc = 5,
    mr = (e, t) => new V(e).darken(t).toHexString(),
    B_ = e => {
        const t = new V(e).toRgb();
        return `${t.r}, ${t.g}, ${t.b}`
    },
    Mr = e => /^#[0-9A-F]{6}$/i.test(e),
    ts = e => {
        const {
            r: t,
            g: n,
            b: r
        } = new V(e).toRgb();
        return Math.sqrt(E_ * (t * t) + F_ * (n * n) + S_ * (r * r)) > k_
    },
    P_ = e => {
        const t = new V(e),
            {
                s: n,
                l: r
            } = t.toHsl();
        return t.spin(x_).desaturate(n * T_).lighten(r * O_).toHexString()
    },
    I_ = (e, t = R_) => {
        const n = new V(e),
            {
                s: r,
                l: i
            } = n.toHsl();
        return n.spin(M_).saturate(r * D_).darken(i * t).toHexString()
    },
    L_ = e => {
        const {
            color: t,
            color2: n,
            colorGradient: r
        } = e;
        return r ? n ? {
            from: t,
            to: n
        } : ts(t) ? {
            from: t,
            to: I_(t)
        } : {
            from: t,
            to: P_(t)
        } : {
            from: t,
            to: t
        }
    },
    $_ = e => ts(e) ? On.slate900 : On.white,
    q_ = e => ts(e) ? .1 : .2,
    N_ = e => {
        if (ts(e)) {
            const t = new V(e).getLuminance();
            return t > .8 ? mr(e, Math.pow(10 * t, t)) : e
        }
        return e
    },
    ke = (e, t, n) => {
        e.documentElement.style.setProperty(t, n)
    },
    z_ = (e, t) => {
        const {
            color: n
        } = t, r = L_(t), i = r.from === "#ffffff" && r.from === r.to ? {
            from: On.slate300,
            to: On.slate300
        } : r, a = $_(n);
        ke(e, "--color-primary", n), ke(e, "--color-primary-content", a), ke(e, "--color-primary-content-rgb", B_(a)), ke(e, "--color-primary-gradient-from", r.from), ke(e, "--color-primary-gradient-to", r.to), ke(e, "--color-primary-gradient-button-from", i.from), ke(e, "--color-primary-gradient-button-to", i.to), ke(e, "--color-primary-gradient-hover-from", mr(r.from, Uc)), ke(e, "--color-primary-gradient-hover-to", mr(r.to, Uc));
        const l = N_(n);
        ke(e, "--color-primary-button", l), ke(e, "--color-primary-button-hover", mr(l, 10)), ke(e, "--color-primary-button-content", a), ke(e, "--opacity-primary-content", String(q_(n)))
    },
    j_ = () => {
        const e = O({
                color: On.smartsuppBlue,
                color2: null,
                colorGradient: !0
            }),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setThemeColor: i => {
                const {
                    color: a,
                    color2: l,
                    colorGradient: u
                } = i;
                if (Mr(a)) {
                    if (u && l && !Mr(l)) {
                        K(`Provided color '${l}' is not valid. Default color will be used instead.`);
                        return
                    }
                } else {
                    K(`Provided color '${a}' is not valid. Default color will be used instead.`);
                    return
                }
                n({
                    color: a,
                    color2: l,
                    colorGradient: u
                })
            }
        }
    },
    xo = j_(),
    rf = 24,
    sf = 12,
    U_ = 300,
    of = 56,
    af = of ,
    V_ = 166,
    H_ = af + 16,
    G_ = 380,
    W_ = 672,
    K_ = 12,
    X_ = 560,
    Z_ = 840,
    Y_ = 104,
    J_ = 60,
    B1 = M([Ku], ([e]) => e ? J_ : Y_),
    Le = e => `${e}px`,
    cf = e => {
        if (e) return It(e) ? parseInt(e, 10) : e
    },
    Q_ = (e, t) => {
        const {
            widgetBlockingOptions: n
        } = x.getOptions();
        return e || n != null && n.headlessMode ? {
            width: "100%",
            height: "100%"
        } : t ? {
            width: X_,
            height: Z_
        } : {
            width: G_,
            height: W_
        }
    },
    eb = e => {
        const {
            widgetBlockingOptions: t
        } = x.getOptions();
        e.style.borderRadius = Le(K_), t != null && t.headlessMode ? e.style.boxShadow = "none" : t != null && t.limitShadow ? e.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 5px 12px" : e.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"
    },
    uf = () => {
        const {
            offsetY: e
        } = x.getOptions();
        return cf(e) ? ? rf
    },
    lf = () => {
        const {
            offsetX: e
        } = x.getOptions();
        return cf(e) ? ? sf
    },
    tb = e => {
        const {
            widgetBlockingOptions: t
        } = x.getOptions();
        return e || t != null && t.headlessMode ? 0 : rf
    },
    nb = e => {
        const {
            widgetBlockingOptions: t
        } = x.getOptions();
        return e || t != null && t.headlessMode ? 0 : sf
    },
    To = () => {
        const {
            position: e
        } = x.getOptions();
        return e === "fixed"
    },
    Oo = e => {
        To() && (e.style.position = "fixed")
    },
    ns = (e, t) => {
        To() && (e.style.bottom = Le(t))
    },
    rs = (e, t) => {
        if (To()) {
            const {
                orientation: n
            } = x.getOptions();
            n === "right" ? (e.style.left = "initial", e.style.right = Le(t)) : (e.style.left = Le(t), e.style.right = "initial")
        }
    },
    ss = e => {
        const {
            zIndex: t
        } = x.getOptions();
        e.style.zIndex = String(t ? ? "auto")
    },
    ff = e => {
        e.style.overflow = "hidden"
    },
    Hn = e => {
        const t = document.createElement("iframe");
        return t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.display = "block", t.style.textAlign = "left", t.style.margin = "0", t.style.padding = "0", t.style.top = "0", t.style.left = "0", t.style.opacity = "1", e && e(t), t.getAttribute("style") ? ? ""
    },
    rb = e => {
        Oo(e), ns(e, uf()), rs(e, lf()), ss(e)
    },
    sb = (e, t) => {
        Oo(e), ns(e, tb(t)), rs(e, nb(t)), ss(e), ff(e), t || eb(e)
    },
    df = e => {
        Oo(e), ns(e, uf() + H_), rs(e, lf()), ss(e), ff(e)
    },
    ib = e => {
        e.style.position = "fixed", e.style.width = "100%", e.style.height = "100%", ns(e, 0), rs(e, 0), ss(e)
    },
    oi = e => {
        rb(e)
    },
    ai = (e, t) => {
        sb(e, t)
    },
    ci = e => {
        df(e)
    },
    ui = e => {
        df(e)
    },
    li = e => {
        ib(e)
    },
    hf = O(U_),
    ob = O(V_),
    ab = O(!1),
    pf = O(void 0),
    Mo = M([tt, pf], ([e, t]) => {
        const {
            buttonStyle: n
        } = x.getOptions();
        return t ? t === "bubble" : e || n === "bubble"
    }),
    cb = M([Mo, hf], ([e, t]) => e ? of : t),
    gf = O(),
    ub = M([gf], ([e]) => typeof e > "u" ? Ve(j.IsMessengerFrameExpanded) === "true" : e),
    P1 = e => {
        at({
            name: j.IsMessengerFrameExpanded,
            value: e.toString()
        }), gf.set(e)
    };
var L = (e => (e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.ContactData = "contactData", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.ChatMessage = "chat:message", e.ChatSend = "chat:send", e.HtmlApply = "html:apply", e.On = "on", e.AnalyticsConsent = "analyticsConsent", e.MarketingConsent = "marketingConsent", e.OpenRateForm = "openRateForm", e.OpenAuthForm = "openAuthForm", e.WidgetStatus = "widgetStatus", e.Translations = "translations", e.AuthFormFields = "authFormFields", e.ButtonStyle = "buttonStyle", e.PreviewTranslate = "previewTranslate", e.DisableConnectionStatus = "disableConnectionStatus", e.ReloadWithMockData = "reloadWithMockData", e.Reload = "reload", e))(L || {}),
    Xt = (e => (e.MessageSent = "message_sent", e.MessageReceived = "message_received", e.MessengerClose = "messenger_close", e.WidgetInit = "widget_init", e))(Xt || {});
const lb = e => {
        G.on("messageSent", e)
    },
    fb = e => {
        G.on("messageReceived", e)
    },
    db = e => {
        G.on("messengerClose", e)
    },
    hb = e => {
        G.on("widgetInit", e)
    },
    pb = {
        [Xt.MessageSent]: lb,
        [Xt.MessageReceived]: fb,
        [Xt.MessengerClose]: db,
        [Xt.WidgetInit]: hb
    },
    gb = (e, t) => {
        const n = pb[e];
        n && n(t)
    },
    At = "https://docs.smartsupp.com/chat-box/",
    vb = `${At}localization/#supported-languages`,
    mb = `${At}visitor-identification/#custom-visitor-data`,
    yb = `${At}visitor-identification/#custom-contact-data`,
    _b = `${At}javascript-api/events/`,
    bb = "https://www.smartsupp.com/help/cookie-consent/#where-to-enable-cookie-consent-in-smartsupp",
    vf = "https://www.smartsupp.com/pricing",
    Do = O({}),
    yr = (e, t) => {
        Do.update(n => ({ ...n,
            [e]: t
        }))
    },
    Cb = e => Object.values(L).some(t => t === e),
    ct = (e, t) => It(t) ? !0 : (K(`Parameter of '${e}' API command must be type string. See ${At} for more information.`), !1),
    Gn = (e, t) => _l(t) ? !0 : (K(`Parameter of '${e}' API command must be type boolean. See ${At} for more information.`), !1),
    wb = (e, t) => typeof t != "function" ? (K(`Parameter of '${e}' API command must be type function. See ${At} for more information.`), !1) : !0,
    is = (e, t) => Xr(t) ? !0 : (K(`Parameter of '${e}' API command must be type object. See ${mb} for more information.`), !1),
    Ab = (e, t) => Xr(t) ? !0 : (K(`Parameter of '${e}' API command must be type object. See ${yb} for more information.`), !1),
    Eb = (e, t) => Xr(t) ? !0 : (K(`Parameter of '${e}' API command must be type object.`), !1),
    Fb = (e, t) => {
        const n = Object.values(Xt);
        return n.includes(t) ? !0 : (K(`Unknown event: '${t}'. Available event names are: ${n.join(", ")}. See ${_b} for more information.`), !1)
    },
    mf = e => {
        K(`Unknown API command: '${e}'. See ${At} to check available API commands.`)
    },
    yf = () => {
        var e;
        return !!((e = x.getOptions().features) != null && e.api)
    },
    Sb = () => {
        var e;
        return !!((e = x.getOptions().features) != null && e.groups)
    },
    kb = () => x.getOptions().isPreviewMode,
    Nt = () => !yf() && !kb() ? (K(`Chat box API feature is not enabled. See ${vf} to upgrade your package.`), !1) : !0,
    xb = () => !yf() || !Sb() ? (K(`Chat box Groups feature is not enabled. See ${vf} to upgrade your package.`), !1) : !0,
    _f = () => {
        Zi() || K(`Enable managing cookie consent in widget settings to allow this command. See ${bb} for more information.`)
    },
    Tb = () => {
        const e = () => {
            Jt(), So()
        };
        if (!E(De)) {
            zn.push(e);
            return
        }
        e()
    },
    Ob = () => {
        if (Nt()) {
            if (!E(De)) {
                zn.push(Or);
                return
            }
            Or()
        }
    },
    Mb = () => {
        Nt() && So()
    },
    Db = () => {
        Nt() && e_()
    },
    Rb = (e, t) => {
        if (Nt() && e === L.Language && ct(e, t)) {
            if (!ml(t)) {
                K(`Provided language '${t}' is not supported. See ${vb} to check supported languages.`);
                return
            }
            if (!E(De)) {
                yr("lang", t);
                return
            }
            Ig(t)
        }
    },
    Bb = (e, t) => {
        let n, r = null,
            i = !0;
        if (Nt()) {
            if (typeof t == "string" && ct(e, t)) n = t;
            else if (is(e, t)) {
                if (n = t.color, r = t.color2, i = t.colorGradient, !Gn(e, i)) return
            } else return;
            if (Mr(n)) {
                if (i && r && !Mr(r)) {
                    K(`Provided color '${r}' is not valid. Default color will be used instead.`);
                    return
                }
            } else {
                K(`Provided color '${n}' is not valid. Please use hex color code.`);
                return
            }
            xo.setThemeColor({
                color: n,
                color2: r,
                colorGradient: i
            })
        }
    },
    Pb = (e, t) => {
        Nt() && ct(e, t) && Eo(t)
    },
    Ib = (e, t) => {
        Nt() && ct(e, t) && (Eo(t), J0())
    },
    Lb = (e, t, n) => {
        ct(e, t) && Fb(e, t) && wb(e, n) && gb(t, n)
    },
    $b = (e, t) => {
        is(e, t) && We.updateVisitorVariables(wv(t))
    },
    _r = (e, t) => {
        e !== L.Name && e !== L.Email && e !== L.Phone && e !== L.Group || ct(e, t) && We.updateVisitorProperty(e, t)
    },
    qb = (e, t) => {
        if (!xb() || !ct(e, t)) return;
        const n = E(co)[t];
        if (E(De) && !n) {
            K(`Group with key '${t}' does not exist. Please provide correct group key from your group settings.`);
            return
        }
        _r(e, t)
    },
    Nb = (e, t) => {
        Ab(e, t) && We.updateVisitorContactData(t)
    },
    zb = (e, t) => {
        Gn(e, t) && (_f(), G.emit("analyticsConsentChanged", !!t))
    },
    jb = (e, t) => {
        Gn(e, t) && (_f(), G.emit("marketingConsentChanged", !!t))
    },
    Ub = () => {
        mo(E(vo) || "")
    },
    Vb = () => {
        ao(Wr.AuthForm)
    },
    Hb = (e, t) => {
        ct(e, t) && (t !== oe.AccountStatus.Online && t !== oe.AccountStatus.Offline || $t.set(t))
    },
    Gb = (e, t) => {
        is(e, t) && $g(t)
    },
    Wb = (e, t) => {
        is(e, t) && (E(ri) || ri.set(x.getOptions()), ri.update(n => ({ ...n,
            ...t
        })))
    },
    Kb = (e, t) => {
        ct(e, t) && pf.set(t)
    },
    Xb = () => {
        let e = () => {};
        e = Nn.subscribe(() => {
            E(nt).forEach(t => {
                var r;
                const n = ((r = t.content) == null ? void 0 : r.data) || "";
                typeof n == "string" && n.match(/widgetPreview\..*/) && (t.content.text = E(ve)(n), H.replaceMessage(t))
            }), e()
        })
    },
    Zb = (e, t) => {
        Gn(e, t) && Zl.set(t)
    },
    Yb = (e, t) => {
        Eb(e, t) && me.reloadClient(t)
    },
    Jb = (e, t) => {
        Gn(e, t) && me.reloadClient(void 0, t)
    },
    Qb = {
        version: "8a4b6e65595ca224e9fdd33843ff057bd63e60e8",
        execute: e => {
            const t = e[0];
            if (typeof t == "function") {
                nC(t);
                return
            }
            if (!Cb(t)) {
                mf(String(t));
                return
            }
            tC(t, e[1], ...e.slice(2))
        },
        exec: function(...e) {
            this.execute(e)
        }
    },
    eC = {
        [L.ChatOpen]: Tb,
        [L.ChatClose]: Ob,
        [L.ChatShow]: Mb,
        [L.ChatHide]: Db,
        [L.ChatMessage]: Pb,
        [L.ChatSend]: Ib,
        [L.Language]: Rb,
        [L.ThemeColor]: Bb,
        [L.On]: Lb,
        [L.Variables]: $b,
        [L.ContactData]: Nb,
        [L.Name]: _r,
        [L.Group]: qb,
        [L.Email]: _r,
        [L.Phone]: _r,
        [L.AnalyticsConsent]: zb,
        [L.MarketingConsent]: jb,
        [L.HtmlApply]: null,
        [L.OpenRateForm]: Ub,
        [L.OpenAuthForm]: Vb,
        [L.WidgetStatus]: Hb,
        [L.Translations]: Gb,
        [L.AuthFormFields]: Wb,
        [L.ButtonStyle]: Kb,
        [L.PreviewTranslate]: Xb,
        [L.DisableConnectionStatus]: Zb,
        [L.ReloadWithMockData]: Yb,
        [L.Reload]: Jb
    },
    tC = (e, t, ...n) => {
        const r = eC[e];
        if (r === void 0) {
            mf(e);
            return
        }
        r !== null && (r(e, t, ...n), Me(`🧙‍♂️[API] ${e}${t?":":""}`, t ? ? ""))
    },
    nC = e => {
        E(De) ? e() : zn.push(e)
    },
    rC = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(rC);
var sC = X("<div><!></div>");

function iC(e, t) {
    ae(t, !0);
    let n = Be(null);
    const r = `${se().SMARTSUPP_AUTOCREATE!==!1?"smartsupp":Wi(window).id}-widget-container`;
    ot(() => {
        S(n) && Mt().body.appendChild(S(n))
    }), Lu(() => {
        var l;
        (l = Mt().getElementById(r)) == null || l.remove()
    });
    var i = sC();
    W(i, "id", r);
    var a = P(i);
    Ar(a, () => t.children ? ? ge), ln(i, l => q(n, l), () => S(n)), R(e, i), ce()
}
const oC = e => e;

function Ro(e) {
    const t = e - 1;
    return t * t * t + 1
}

function Vc(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}

function aC(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = oC
} = {}) {
    const i = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: a => `opacity: ${a*i}`
    }
}

function He(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Ro,
    x: i = 0,
    y: a = 0,
    opacity: l = 0
} = {}) {
    const u = getComputedStyle(e),
        d = +u.opacity,
        c = u.transform === "none" ? "" : u.transform,
        o = d * (1 - l),
        [s, f] = Vc(i),
        [h, p] = Vc(a);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (v, g) => `
			transform: ${c} translate(${(1-v)*s}${f}, ${(1-v)*h}${p});
			opacity: ${d-o*g}`
    }
}

function I1(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Ro,
    axis: i = "y"
} = {}) {
    const a = getComputedStyle(e),
        l = +a.opacity,
        u = i === "y" ? "height" : "width",
        d = parseFloat(a[u]),
        c = i === "y" ? ["top", "bottom"] : ["left", "right"],
        o = c.map(m => `${m[0].toUpperCase()}${m.slice(1)}`),
        s = parseFloat(a[`padding${o[0]}`]),
        f = parseFloat(a[`padding${o[1]}`]),
        h = parseFloat(a[`margin${o[0]}`]),
        p = parseFloat(a[`margin${o[1]}`]),
        v = parseFloat(a[`border${o[0]}Width`]),
        g = parseFloat(a[`border${o[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: m => `overflow: hidden;opacity: ${Math.min(m*20,1)*l};${u}: ${m*d}px;padding-${c[0]}: ${m*s}px;padding-${c[1]}: ${m*f}px;margin-${c[0]}: ${m*h}px;margin-${c[1]}: ${m*p}px;border-${c[0]}-width: ${m*v}px;border-${c[1]}-width: ${m*g}px;`
    }
}

function Bo(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = Ro,
    start: i = 0,
    opacity: a = 0
} = {}) {
    const l = getComputedStyle(e),
        u = +l.opacity,
        d = l.transform === "none" ? "" : l.transform,
        c = 1 - i,
        o = u * (1 - a);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (s, f) => `
			transform: ${d} scale(${1-c*f});
			opacity: ${u-o*f}
		`
    }
}
var cC = X('<iframe allowfullscreen scrolling="no"></iframe>');

function Wn(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(xo, "$themeColor", n);
    let i = Be(void 0),
        a = Be(null),
        l;
    Je(() => {
        S(a) && u(S(a))
    }), Je(() => {
        S(a) && d(r())
    });
    const u = async h => {
            l && await Uo(l), h && t.component && (l = Mu(t.component, {
                target: h.body
            }))
        },
        d = h => {
            S(a) && z_(S(a), h)
        },
        c = h => {
            if (!S(a)) return;
            const p = S(a).createElement("style");
            return p.textContent = h, S(a).head.appendChild(p), p
        },
        o = () => {
            for (const h of window.document.styleSheets) {
                let p = "";
                try {
                    p = [...h.cssRules].map(g => g.cssText).join("")
                } catch {
                    continue
                }
                if (!c(p)) return
            }
        },
        s = () => {
            !S(i) || !S(i).contentDocument || (q(a, ie(S(i).contentDocument)), o())
        };
    ot(async () => {
        var h, p;
        await vd(), (h = S(i)) != null && h.contentDocument && S(i).contentDocument.readyState === "complete" && S(i).contentDocument.defaultView ? s() : (p = S(i)) == null || p.addEventListener("load", s)
    }), Lu(async () => {
        S(i) && S(i).removeEventListener("load", s), l && await Uo(l)
    });
    var f = cC();
    ln(f, h => q(i, h), () => S(i)), ne(() => {
        W(f, "id", t.id), W(f, "title", t.title), W(f, "style", t.frameStyle)
    }), R(e, f), ce()
}
zf();
var uC = Ou('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"></path></svg>');

function lC(e, t) {
    let n = Oe(t, "iconSize", 3, 16);
    var r = uC();
    ne(() => {
        W(r, "width", n()), W(r, "height", n())
    }), R(e, r)
}

function fC(e, t) {
    ae(t, !0);
    let n = Be(!1);
    ot(() => {
        q(n, !0)
    });
    var r = he(),
        i = ue(r); {
        var a = l => {
            var u = he(),
                d = ue(u);
            Ar(d, () => t.children ? ? ge), R(l, u)
        };
        we(i, l => {
            S(n) && l(a)
        })
    }
    R(e, r), ce()
}
var dC = X('<div class="transform transition-transform duration-300 group-hover:scale-115"><!></div>');

function bf(e) {
    fC(e, {
        children: (t, n) => {
            var r = dC(),
                i = P(r);
            lC(i, {
                iconSize: 24
            }), _e(3, r, () => Bo, () => ({
                delay: 200,
                duration: 300,
                start: .6,
                opacity: .8
            })), R(t, r)
        },
        $$slots: {
            default: !0
        }
    })
}
var hC = X('<div class="p-1"><div class="flex-center w-12 h-12 bg-white bg-opacity-10 rounded-full"><!></div></div>');

function pC(e) {
    var t = hC(),
        n = P(t),
        r = P(n);
    bf(r), R(e, t)
}
var gC = X('<div class="flex"><div class="flex-center whitespace-nowrap pl-4 pr-1"> </div> <!></div>');

function vC(e, t) {
    ae(t, !1);
    const n = $e(),
        r = () => Z(ve, "$t", n);
    let i = Jf();
    ot(() => {
        const c = Math.ceil(S(i).getBoundingClientRect().width);
        hf.set(c)
    }), $n();
    var a = gC(),
        l = P(a),
        u = P(l);
    ne(() => Nr(u, r()("button.greeting")));
    var d = U(l, 2);
    pC(d), ln(a, c => q(i, c), () => S(i)), ne(() => W(l, "data-testid", Ee.widgetButtonText)), R(e, a), ce()
}
var mC = X('<div id="widget-online-badge" class="absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"></div>');

function yC(e, t) {
    ae(t, !1);
    const n = $e(),
        r = () => Z(Ov, "$isWidgetOnline", n);
    $n();
    var i = he(),
        a = ue(i); {
        var l = u => {
            var d = mC();
            ne(() => W(d, "data-testid", Ee.widgetOnlineBadge)), _e(3, d, () => Bo), R(u, d)
        };
        we(a, u => {
            r() && u(l)
        })
    }
    R(e, i), ce()
}
var _C = X('<div id="widget-unread-messages-badge" class="absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"> </div>');

function bC(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z($l, "$unreadMessagesCount", n);
    let i = te(() => r() > 0);
    var a = he(),
        l = ue(a); {
        var u = d => {
            var c = _C(),
                o = P(c);
            ne(() => {
                W(c, "data-testid", Ee.widgetUnreadMessagesBadge), Nr(o, r() > 99 ? "99+" : r())
            }), _e(3, c, () => Bo), R(d, c)
        };
        we(l, d => {
            S(i) && d(u)
        })
    }
    R(e, a), ce()
}
var CC = X('<div id="smartsupp-widget-button" class="h-full w-full relative flex justify-end"><div role="button" class="group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"><!> <!></div> <!></div>');

function wC(e, t) {
    ae(t, !1);
    const n = $e(),
        r = () => Z(Mo, "$isWidgetButtonBubble", n);
    $n();
    var i = CC(),
        a = P(i);
    W(a, "tabindex", 0), a.__click = function(...s) {
        Jt == null || Jt.apply(this, s)
    };
    var l = P(a); {
        var u = s => {
                bf(s)
            },
            d = s => {
                vC(s, {})
            };
        we(l, s => {
            r() ? s(u) : s(d, !1)
        })
    }
    var c = U(l, 2);
    yC(c, {});
    var o = U(a, 2);
    bC(o, {}), ne(() => W(a, "data-testid", Ee.widgetButton)), R(e, i), ce()
}
qr(["click"]);
var AC = X("<div><!></div>");

function EC(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(cb, "$buttonFrameWidth", n),
        i = () => Z(i_, "$shouldRenderButtonFrame", n),
        a = () => Z(Mo, "$isWidgetButtonBubble", n),
        l = () => Z(ve, "$t", n);
    let u = Be(void 0);
    const d = h => {
            S(u) && (S(u).style.width = `${h}px`)
        },
        {
            widgetBlockingOptions: c
        } = x.getOptions();
    Je(() => {
        S(u) && d(r())
    });
    var o = he(),
        s = ue(o); {
        var f = h => {
            var p = AC();
            const v = te(() => Le(af));
            var g = P(p);
            Td(g, () => a() || l(), m => {
                var y = te(Hn);
                Wn(m, {
                    component: wC,
                    get id() {
                        return Ee.widgetButtonFrame
                    },
                    title: "Smartsupp widget button",
                    get frameStyle() {
                        return S(y)
                    }
                })
            }), ln(p, m => q(u, m), () => S(u)), Ln(p, m => oi == null ? void 0 : oi(m)), ne(() => {
                W(p, "style", `border-radius: 9999px; box-shadow: rgb(0 0 0 / 6%) 0px 1px 6px, rgb(0 0 0 / ${c!=null&&c.limitShadow?"20%) 0px 2px 12px":"12%) 0px 2px 32px"}; color-scheme: normal;`), W(p, "data-testid", Ee.widgetButtonFrame), Pe(p, "height", S(v))
            }), _e(1, p, () => He, () => ({
                y: 20,
                delay: 150,
                duration: 300
            })), _e(2, p, () => aC, () => ({
                duration: 250
            })), R(h, p)
        };
        we(s, h => {
            i() && h(f)
        })
    }
    R(e, o), ce()
}
var FC = X("<div></div>");

function Xe(e, t) {
    ae(t, !0);
    let n = Oe(t, "height", 3, 20),
        r = Oe(t, "width", 3, "100%"),
        i = Oe(t, "colorScheme", 3, "gray");
    const l = `${Oe(t,"roundedStyle",3,"rounded-full")()} animate-pulse`;
    var u = FC();
    const d = te(() => Le(n())),
        c = te(() => bl(r()) ? Le(r()) : r());
    ne(() => {
        Bt(u, kn([l, i() === "gray" && "bg-gray-200", i() === "darkGray" && "bg-gray-300"]), ""), Pe(u, "height", S(d)), Pe(u, "width", S(c))
    }), R(e, u), ce()
}

function xt(e, t) {
    let n = Oe(t, "size", 3, 20);
    Xe(e, {
        colorScheme: "darkGray",
        get width() {
            return n()
        },
        get height() {
            return n()
        }
    })
}
var qe = (e => (e[e.Initialized = 0] = "Initialized", e[e.Loading = 1] = "Loading", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error", e))(qe || {});
const Pi = new Map,
    SC = async e => {
        const t = (await e()).default;
        return Pi.set(e, t), t
    };

function Cf(e, t) {
    ae(t, !0);
    const n = Oe(t, "delay", 3, 200);
    let r = Be(ie(qe.Initialized)),
        i = Be(void 0),
        a = Be(void 0),
        l = Be(void 0);
    const u = te(() => S(i)),
        d = () => {
            window.clearTimeout(S(l))
        },
        c = async () => {
            d(), q(a, void 0), q(i, void 0), n() > 0 ? (q(r, ie(qe.Initialized)), q(l, ie(window.setTimeout(() => {
                q(r, ie(qe.Loading))
            }, n())))) : q(r, ie(qe.Loading));
            try {
                q(i, ie(await SC(t.loader))), q(r, ie(qe.Success))
            } catch (p) {
                if (q(r, ie(qe.Error)), p instanceof Error) q(a, ie(p));
                else throw p
            }
            d()
        };
    Pi.has(t.loader) ? (q(r, ie(qe.Success)), q(i, ie(Pi.get(t.loader)))) : ot(() => {
        c()
    });
    var o = he(),
        s = ue(o); {
        var f = p => {
                var v = he(),
                    g = ue(v);
                Ar(g, () => t.error, () => ({
                    error: S(a)
                })), R(p, v)
            },
            h = p => {
                var v = he(),
                    g = ue(v); {
                    var m = b => {
                            var _ = he(),
                                w = ue(_);
                            Ar(w, () => t.loading), R(b, _)
                        },
                        y = b => {
                            var _ = he(),
                                w = ue(_); {
                                var F = C => {
                                    var A = he(),
                                        k = ue(A);
                                    Du(k, () => S(u), (D, B) => {
                                        B(D, {})
                                    }), R(C, A)
                                };
                                we(w, C => {
                                    S(r) === qe.Success && C(F)
                                }, !0)
                            }
                            R(b, _)
                        };
                    we(g, b => {
                        S(r) === qe.Loading ? b(m) : b(y, !1)
                    }, !0)
                }
                R(p, v)
            };
        we(s, p => {
            S(r) === qe.Error && t.error ? p(f) : p(h, !1)
        })
    }
    R(e, o), ce()
}
const kC = "modulepreload",
    xC = function(e, t) {
        return new URL(e, t).href
    },
    Hc = {},
    wf = function(t, n, r) {
        let i = Promise.resolve();
        if (n && n.length > 0) {
            const l = document.getElementsByTagName("link"),
                u = document.querySelector("meta[property=csp-nonce]"),
                d = (u == null ? void 0 : u.nonce) || (u == null ? void 0 : u.getAttribute("nonce"));
            i = Promise.allSettled(n.map(c => {
                if (c = xC(c, r), c in Hc) return;
                Hc[c] = !0;
                const o = c.endsWith(".css"),
                    s = o ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let p = l.length - 1; p >= 0; p--) {
                        const v = l[p];
                        if (v.href === c && (!o || v.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${c}"]${s}`)) return;
                const h = document.createElement("link");
                if (h.rel = o ? "stylesheet" : kC, o || (h.as = "script"), h.crossOrigin = "", h.href = c, d && h.setAttribute("nonce", d), document.head.appendChild(h), o) return new Promise((p, v) => {
                    h.addEventListener("load", p), h.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${c}`)))
                })
            }))
        }

        function a(l) {
            const u = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (u.payload = l, window.dispatchEvent(u), !u.defaultPrevented) throw l
        }
        return i.then(l => {
            for (const u of l || []) u.status === "rejected" && a(u.reason);
            return t().catch(a)
        })
    },
    TC = () => wf(() =>
        import ("./WidgetMessenger-BDaHHdFY.js"), __vite__mapDeps([0, 1]),
        import.meta.url),
    OC = e => {
        var t = DC(),
            n = P(t),
            r = P(n),
            i = P(r);
        xt(i, {
            size: 32
        });
        var a = U(r, 2),
            l = P(a);
        xt(l, {
            size: 32
        });
        var u = U(l, 2);
        xt(u, {
            size: 32
        });
        var d = U(u, 2);
        xt(d, {
            size: 32
        });
        var c = U(n, 2),
            o = P(c),
            s = P(o);
        xt(s, {
            size: 44
        });
        var f = U(o, 2),
            h = P(f);
        Xe(h, {
            height: 20,
            width: 270
        });
        var p = U(h, 2);
        Xe(p, {
            height: 20,
            width: 122
        });
        var v = U(c, 2),
            g = P(v),
            m = P(g);
        xt(m, {
            size: 28
        });
        var y = U(g, 2),
            b = P(y);
        Xe(b, {
            height: 112,
            width: 295,
            roundedStyle: "rounded-6"
        });
        var _ = U(v, 2),
            w = P(_);
        Xe(w, {
            height: 32,
            width: 295
        });
        var F = U(w, 2);
        Xe(F, {
            height: 32,
            width: 148
        });
        var C = U(F, 2);
        Xe(C, {
            height: 32,
            width: 224
        }), R(e, t)
    },
    MC = (e, t) => {
        let n = () => t == null ? void 0 : t().error;
        var r = RC(),
            i = U(P(r), 2),
            a = P(i);
        ne(() => Nr(a, n())), R(e, r)
    };
var DC = X('<div class="h-full p-2 bg-white" id="TODO test"><div class="flex justify-between"><div class="flex"><!></div> <div class="flex space-x-2"><!> <!> <!></div></div> <div class="flex mt-2"><div class="flex ml-1 mr-2"><!></div> <div class="flex-bottom space-y-2"><!> <!></div></div> <div class="flex items-baseline mt-8"><div class="flex ml-1 mr-2"><!></div> <div class="space-y-2"><!></div></div> <div class="flex flex-col items-end space-y-5 mt-8 mr-1"><!> <!> <!></div></div>'),
    RC = X('<div class="h-full p-4 bg-white text-red-500"><div class="text-lg font-bold">Failed to load widget</div> <div class="text-xs"> </div></div>');

function BC(e) {
    Cf(e, {
        loader: TC,
        delay: 0,
        error: MC,
        loading: OC
    })
}
var PC = X("<div><!></div>");

function IC(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(Ku, "$isFullScreenEnabled", n),
        i = () => Z(ub, "$isMessengerFrameExpanded", n),
        a = () => Z(tt, "$isMobileDevice", n),
        l = () => Z(r_, "$shouldRenderMessengerFrame", n);
    let u = Be(void 0);
    const d = "MobileWidgetMessengerOpen",
        c = (p, v) => {
            if (!S(u)) return;
            const {
                widgetBlockingOptions: g
            } = x.getOptions(), {
                width: m,
                height: y
            } = Q_(p, v);
            S(u).style.maxHeight = It(y) ? y : Le(y), S(u).style.width = It(m) ? m : Le(m), S(u).style.height = p || g != null && g.headlessMode ? "100%" : "calc(100% - 40px)"
        };
    Je(() => {
        S(u) && c(r(), i())
    });
    let o = Be(!1);
    Je(() => {
        if (a()) {
            if (l() && !S(o)) {
                const p = Mt().createElement("style");
                p.textContent = "* {overflow: hidden}", p.className = d, Mt().head.appendChild(p), q(o, !0)
            }
            if (!l() && S(o)) {
                const p = Mt().head.getElementsByClassName(d);
                for (let v = 0; v < p.length; v++) Mt().head.removeChild(p[v]);
                q(o, !1)
            }
        }
    });
    var s = he(),
        f = ue(s); {
        var h = p => {
            var v = PC(),
                g = P(v),
                m = te(Hn);
            Wn(g, {
                component: BC,
                get id() {
                    return Ee.widgetMessengerFrame
                },
                title: "Smartsupp widget messenger",
                get frameStyle() {
                    return S(m)
                }
            }), Ln(v, (y, b) => ai == null ? void 0 : ai(y, b), r), ln(v, y => q(u, y), () => S(u)), ne(() => {
                W(v, "data-testid", Ee.widgetMessengerFrame), Pe(v, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
            }), _e(1, v, () => He, () => ({
                y: 20,
                duration: 200
            })), _e(2, v, () => He, () => ({
                y: 10,
                duration: 150
            })), R(p, v)
        };
        we(f, p => {
            l() && p(h)
        })
    }
    R(e, s), ce()
}
const LC = () => wf(() =>
        import ("./WidgetPopup-D3FEoDN_.js"), __vite__mapDeps([2, 1]),
        import.meta.url),
    $C = e => {
        var t = qC(),
            n = P(t);
        xt(n, {
            size: 44
        });
        var r = U(n, 2),
            i = P(r);
        Xe(i, {
            height: 20,
            width: 270
        });
        var a = U(i, 2);
        Xe(a, {
            height: 20,
            width: 270
        });
        var l = U(a, 2);
        Xe(l, {
            height: 20,
            width: 122
        }), R(e, t)
    };
var qC = X('<div class="h-full p-2 bg-white"><!> <div class="mt-4 space-y-2"><!> <!> <!></div></div>');

function NC(e) {
    Cf(e, {
        loader: LC,
        delay: 0,
        loading: $C
    })
}
var zC = X('<div style="height: calc(100% - 40px); border-radius: 12px; transition: box-shadow 0.2s ease-in-out; transition: max-height 250ms ease-in-out"><!></div>');

function jC(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(ob, "$popupFrameHeight", n),
        i = () => Z(ab, "$hasPopupFrameHover", n),
        a = () => Z(l_, "$shouldRenderPopupFrame", n);
    let l = Be(void 0);
    const u = h => {
            S(l) && (S(l).style.maxHeight = `${h}px`)
        },
        {
            widgetBlockingOptions: d
        } = x.getOptions();
    Je(() => {
        S(l) && u(r())
    });
    let c = te(() => i() ? .28 : .16);
    var o = he(),
        s = ue(o); {
        var f = h => {
            var p = zC();
            const v = te(() => Le(300));
            var g = P(p),
                m = te(Hn);
            Wn(g, {
                component: NC,
                get id() {
                    return Ee.widgetPopupFrame
                },
                title: "Smartsupp widget popup",
                get frameStyle() {
                    return S(m)
                }
            }), ln(p, y => q(l, y), () => S(l)), Ln(p, y => ci == null ? void 0 : ci(y)), ne(() => {
                W(p, "data-testid", Ee.widgetPopupFrame), Pe(p, "width", S(v)), Pe(p, "box-shadow", `rgba(0, 0, 0, ${d!=null&&d.limitShadow?"0.2) 0px 3px 12px":`${S(c)}) 0px 3px 16px`}`)
            }), _e(1, p, () => He, () => ({
                y: 20,
                delay: 300,
                duration: 400
            })), _e(2, p, () => He, () => ({
                y: 10,
                duration: 400
            })), R(h, p)
        };
        we(s, h => {
            a() && h(f)
        })
    }
    R(e, o), ce()
}
var UC = X('<div class="flex p-2"><div></div> <div></div> <div></div></div>');

function VC(e, t) {
    let n = Oe(t, "size", 3, "md"),
        r = Oe(t, "color", 3, "black"),
        i = te(() => t.iterations ? ? "infinite");
    var a = UC(),
        l = P(a),
        u = U(l, 2),
        d = U(u, 2);
    ne(() => {
        Bt(l, `${`typing-indicator ${n()} indicator-color-${r()} animate-typing`??""} svelte-13wgl1n`), Pe(l, "animation-iteration-count", S(i)), Bt(u, `${`typing-indicator ${n()} indicator-color-${r()} typing-indicator-second animate-typing`??""} svelte-13wgl1n`), Pe(u, "animation-iteration-count", S(i)), Bt(d, `${`typing-indicator ${n()} indicator-color-${r()} typing-indicator-third animate-typing`??""} svelte-13wgl1n`), Pe(d, "animation-iteration-count", S(i))
    }), R(e, a)
}
var HC = X('<div class="flex-center h-full bg-white rounded-lg"><!></div>');

function GC(e) {
    var t = HC(),
        n = P(t);
    VC(n, {
        iterations: 2
    }), R(e, t)
}
var WC = X("<div><!></div>");

function KC(e, t) {
    ae(t, !1);
    const n = $e(),
        r = () => Z(u_, "$shouldRenderTypingFrame", n),
        {
            widgetBlockingOptions: i
        } = x.getOptions();
    $n();
    var a = he(),
        l = ue(a); {
        var u = d => {
            var c = WC();
            const o = bn(() => Le(40)),
                s = bn(() => Le(70));
            var f = P(c),
                h = bn(Hn);
            Wn(f, {
                component: GC,
                get id() {
                    return Ee.widgetTypingFrame
                },
                title: "Smartsupp widget typing",
                get frameStyle() {
                    return S(h)
                }
            }), Ln(c, p => ui == null ? void 0 : ui(p)), ne(() => {
                W(c, "style", `box-shadow: rgba(0, 0, 0, 0.2) ${i!=null&&i.limitShadow?"0px 3px 12px":"0px 3px 16px"}; border-radius: 24px;`), W(c, "data-testid", Ee.widgetTypingFrame), Pe(c, "height", S(o)), Pe(c, "width", S(s))
            }), _e(1, c, () => He, () => ({
                y: 20,
                delay: 300,
                duration: 400
            })), _e(2, c, () => He, () => ({
                y: 10,
                duration: 250
            })), R(d, c)
        };
        we(l, d => {
            r() && d(u)
        })
    }
    R(e, a), ce()
}
const Ii = O(null),
    XC = M([Ii], ([e]) => !!e);
var ZC = Ou('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></path></svg>');

function YC(e, t) {
    const n = qd(t, ["$$slots", "$$events", "$$legacy"]);
    var r = ZC();
    let i;
    ne(() => i = Dd(r, i, {
        viewBox: "0 0 24 24",
        width: "1.2em",
        height: "1.2em",
        ...n
    }, void 0, !0)), R(e, r)
}
const JC = (e, t) => {
    e.stopPropagation(), t.onClick && t.onClick(e)
};
var QC = X('<button type="button" tabindex="0"><div><!></div></button>');

function ew(e, t) {
    ae(t, !0);
    let n = Oe(t, "iconOrientation", 3, "right"),
        r = Oe(t, "iconAnimation", 3, "none"),
        i = Oe(t, "size", 3, "md"),
        a = Oe(t, "variant", 3, "ghost");
    const l = n() === "right" ? 1 : -1;
    let u = te(() => i() === "xl" ? 1.5 : 1.2);
    const d = te(() => t.icon);
    var c = QC();
    const o = te(() => kn([`btn btn-${a()} btn-${i()}`, !!t.disabled && "btn-disabled", yh() ? "cursor-auto" : "cursor-pointer"]));
    c.__click = [JC, t];
    var s = P(c),
        f = P(s),
        h = te(() => `transform: scale(${S(u)}) scaleX(${l});`);
    Du(f, () => S(d), (p, v) => {
        v(p, {
            width: "1em",
            height: "1em",
            get style() {
                return S(h)
            }
        })
    }), ne(() => {
        W(c, "aria-label", t.iconDescription), Bt(c, S(o), "svelte-1lb2fzt"), c.disabled = t.disabled, W(c, "data-testid", t.testId), Bt(s, kn(["w-full h-full flex items-center justify-center", r() === "spin" && "animate-spin"]), "svelte-1lb2fzt")
    }), R(e, c), ce()
}
qr(["click"]);
var tw = (e, t) => t("overlay"),
    nw = e => e.stopPropagation(),
    rw = X('<img class="m-auto max-h-full max-w-full select-none bg-black" width="auto" height="auto">'),
    sw = e => e.stopPropagation(),
    iw = X('<video controls class="m-auto max-h-full max-w-full bg-black object-contain"><track kind="captions"> <source></video>', 2),
    ow = X('<div class="w-full h-full flex flex-col"><div class="flex-shrink flex flex-row w-full bg-black text-white"><div class="flex-grow flex items-center text-md px-4 overflow-hidden"><span class="whitespace-nowrap text-ellipsis overflow-hidden"> </span></div> <div class="flex-shrink"><!></div></div> <div><!></div></div>');

function aw(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(Ah, "$isDesktop", n),
        i = () => Z(Ii, "$previewedMedia", n);
    let a = te(r);
    const l = y => {
        y === "overlay" && !S(a) || Ii.set(null)
    };
    var u = ow(),
        d = P(u),
        c = P(d),
        o = P(c),
        s = P(o),
        f = U(c, 2),
        h = P(f);
    ew(h, {
        onClick: () => l("button"),
        icon: YC,
        iconDescription: "Close",
        size: "xl"
    });
    var p = U(d, 2);
    p.__click = [tw, l];
    var v = P(p); {
        var g = y => {
                var b = rw();
                b.__click = [nw], ne(() => {
                    var _, w;
                    W(b, "src", (_ = i()) == null ? void 0 : _.attachment.url), W(b, "alt", (w = i()) == null ? void 0 : w.attachment.fileName)
                }), os("keypress", b, () => {}), R(y, b)
            },
            m = y => {
                var b = he(),
                    _ = ue(b); {
                    var w = F => {
                        var C = iw();
                        C.__click = [sw], C.autoplay = !0, C.loop = !0;
                        var A = U(P(C), 2);
                        ne(() => W(A, "src", i().attachment.url)), os("keypress", C, () => {}), R(F, C)
                    };
                    we(_, F => {
                        var C;
                        ((C = i()) == null ? void 0 : C.type) === Mi.Video && F(w)
                    }, !0)
                }
                R(y, b)
            };
        we(v, y => {
            var b;
            ((b = i()) == null ? void 0 : b.type) === Mi.Image ? y(g) : y(m, !1)
        })
    }
    ne(() => {
        var y;
        Nr(s, (y = i()) == null ? void 0 : y.attachment.fileName), Bt(p, kn(["relative overflow-hidden flex-grow flex items-center bg-black/80 z-10", r() ? "p-8" : "p-4"]), "")
    }), os("keypress", p, () => {}), _e(1, u, () => He, () => ({
        y: 20,
        delay: 300,
        duration: 400
    })), _e(2, u, () => He, () => ({
        y: 10,
        duration: 250
    })), R(e, u), ce()
}
qr(["click"]);
var cw = X("<div><!></div>");

function uw(e, t) {
    ae(t, !1);
    const n = $e(),
        r = () => Z(XC, "$shouldRenderMediaPreview", n);
    $n();
    var i = he(),
        a = ue(i); {
        var l = u => {
            var d = cw(),
                c = P(d),
                o = bn(() => Hn(s => {
                    s.style.position = "fixed"
                }));
            Wn(c, {
                component: aw,
                get id() {
                    return Ee.widgetImagePreview
                },
                title: "Smartsupp widget image preview",
                get frameStyle() {
                    return S(o)
                }
            }), Ln(d, s => li == null ? void 0 : li(s)), ne(() => {
                W(d, "data-testid", Ee.widgetImagePreview), Pe(d, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
            }), _e(1, d, () => He, () => ({
                y: 20,
                delay: 100,
                duration: 250
            })), _e(2, d, () => He, () => ({
                y: 10,
                duration: 250
            })), R(u, d)
        };
        we(a, u => {
            r() && u(l)
        })
    }
    R(e, i), ce()
}
var lw = X("<!> <!> <!> <!> <!>", 1);

function fw(e, t) {
    ae(t, !0);
    const n = $e(),
        r = () => Z(Wm, "$lastUnreadMessage", n),
        i = () => Z(be, "$isMessengerFrameOpen", n);
    ot(() => {
        (async () => {
            await Lg(), await me.initClient()
        })()
    }), Je(() => {
        r() && !i() && ef()
    }), i0(se()), E(tt) && o0(se()), iC(e, {
        children: (a, l) => {
            var u = lw(),
                d = ue(u);
            KC(d, {});
            var c = U(d, 2);
            jC(c, {});
            var o = U(c, 2);
            EC(o, {});
            var s = U(o, 2);
            IC(s, {});
            var f = U(s, 2);
            uw(f, {}), R(a, u)
        },
        $$slots: {
            default: !0
        }
    }), ce()
}
const Po = Wi(window);
x.init(Po.options);
Po.installApi(Qb);
xo.setThemeColor(Po.options);
a0();
Ym();
Mu(fw, {
    target: document.getElementById("app")
});
export {
    Dd as $, se as A, S as B, bn as C, Z as D, Nn as E, te as F, Ee as G, ve as H, ew as I, qr as J, _e as K, aC as L, Oe as M, U as N, ge as O, $w as P, Pe as Q, Le as R, Lw as S, K_ as T, lp as U, Bt as V, qw as W, YC as X, Nr as Y, E1 as Z, kn as _, mw as a, c1 as a$, Kl as a0, yh as a1, Ah as a2, qd as a3, kw as a4, F1 as a5, b1 as a6, C1 as a7, S1 as a8, x1 as a9, p1 as aA, rh as aB, y1 as aC, at as aD, Fh as aE, I1 as aF, Jw as aG, i1 as aH, Ou as aI, Du as aJ, Xw as aK, Tv as aL, Zw as aM, G as aN, me as aO, Me as aP, c0 as aQ, xr as aR, m1 as aS, ao as aT, Wr as aU, Qr as aV, b0 as aW, zu as aX, ul as aY, Vw as aZ, T as a_, k1 as aa, Ow as ab, Ue as ac, Pt as ad, ot as ae, I0 as af, Je as ag, os as ah, We as ai, ri as aj, qt as ak, Sw as al, ll as am, Td as an, q as ao, ie as ap, Pc as aq, Be as ar, _p as as, Ve as at, j as au, h1 as av, Zu as aw, g1 as ax, Mw as ay, _1 as az, A1 as b, Al as b$, u1 as b0, VC as b1, ln as b2, He as b3, ub as b4, _w as b5, Pw as b6, tt as b7, Bw as b8, t1 as b9, Bv as bA, l1 as bB, Vn as bC, ho as bD, O1 as bE, v0 as bF, vd as bG, Yw as bH, Or as bI, Ku as bJ, bt as bK, P1 as bL, Ov as bM, Bo as bN, $t as bO, fo as bP, Gw as bQ, Ww as bR, B1 as bS, R1 as bT, T1 as bU, El as bV, uo as bW, Ll as bX, Wm as bY, ob as bZ, Jt as b_, e1 as ba, Uw as bb, Ii as bc, Mi as bd, Iv as be, bw as bf, Fw as bg, r1 as bh, n1 as bi, s1 as bj, Wv as bk, vo as bl, Dw as bm, Rw as bn, po as bo, Iw as bp, H as bq, jm as br, Hv as bs, mo as bt, oe as bu, xn as bv, ze as bw, Lu as bx, Ur as by, Qw as bz, w1 as c, pl as c$, a_ as c0, ab as c1, d1 as c2, Ni as c3, Pn as c4, Gc as c5, Af as c6, Qt as c7, qo as c8, tn as c9, nt as cA, Ug as cB, Ke as cC, Nw as cD, ni as cE, o1 as cF, a1 as cG, wm as cH, v1 as cI, Fv as cJ, Hw as cK, Dt as cL, K as cM, lo as cN, Cn as cO, jw as cP, vr as cQ, Jf as cR, Aw as cS, Eo as cT, Kt as cU, D1 as cV, bo as cW, Y0 as cX, be as cY, wf as cZ, Dg as c_, wn as ca, Br as cb, $ as cc, dw as cd, Qf as ce, hw as cf, tu as cg, hu as ch, yw as ci, od as cj, yt as ck, pw as cl, z as cm, gw as cn, qi as co, Ne as cp, vw as cq, zi as cr, Tu as cs, Sn as ct, en as cu, Tw as cv, Ew as cw, xw as cx, Ln as cy, dn as cz, M as d, Xe as d0, xt as d1, hl as d2, Gp as d3, qp as d4, Kp as d5, Zp as d6, Yp as d7, eg as d8, og as d9, ag as da, dg as db, pg as dc, gg as dd, mg as de, Fg as df, M1 as dg, _h as dh, zw as di, Z0 as dj, Ao as dk, Fi as dl, q0 as dm, Kw as dn, J0 as dp, f1 as dq, ql as dr, Bn as e, W as f, E as g, R as h, Pr as i, ce as j, X as k, Cw as l, P as m, x as n, $n as o, ae as p, he as q, Ui as r, Ar as s, ne as t, it as u, ue as v, O as w, we as x, ww as y, $e as z
};
//# sourceMappingURL=main-CWfC9NIU.js.map