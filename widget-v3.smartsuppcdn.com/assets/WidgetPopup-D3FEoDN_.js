import {
    p as R,
    z as S,
    v as W,
    x as A,
    N as w,
    B as e,
    h as d,
    j as X,
    k as I,
    D as x,
    bX as N,
    F as p,
    t as L,
    f as Q,
    G as U,
    q as O,
    an as oe,
    V as ie,
    _ as de,
    m as v,
    a1 as ve,
    a_ as le,
    J as V,
    aZ as ce,
    Y as K,
    ae as pe,
    A as q,
    bx as ue,
    n as ge,
    ag as _e,
    bY as fe,
    bZ as he,
    bG as me,
    I as ye,
    X as $e,
    b2 as be,
    ao as xe,
    ah as z,
    b_ as Ie,
    b$ as ke,
    ar as Me,
    c0 as Ce,
    y as Pe,
    H as Be,
    c1 as J,
    br as we,
    c2 as We
} from "./main-CWfC9NIU.js";
import {
    M as Ae,
    L as Fe,
    C as Te,
    e as Le,
    b as Ee,
    i as He,
    W as Ue,
    g as De,
    a as Ge,
    F as je,
    A as Oe,
    B as Re,
    j as Se
} from "./WidgetMessengerInput-Bl32ZTft.js";
var Xe = I('<div class="text-sm leading-[22px] line-clamp-5 color-slate-800"><!></div>'),
    Ye = I('<div class="w-full flex-center pt-2"><div><!></div></div>'),
    Ze = I("<!> <!>", 1);

function qe(u, r) {
    R(r, !0);
    const o = S(),
        l = () => x(N, "$popupMessage", o),
        y = n => {
            const t = n.find(_ => _.type === le.AttachmentType.Cards);
            return t || null
        };
    let a = p(() => l() && y(l().attachments)),
        k = p(() => e(a) ? e(a).items.length === 1 : !1);
    var c = Ze(),
        g = W(c); {
        var F = n => {
            var t = Xe(),
                _ = v(t);
            Ae(_, {
                children: (b, f) => {
                    Fe(b, {
                        get text() {
                            return l().content.text
                        }
                    })
                },
                $$slots: {
                    default: !0
                }
            }), L(() => Q(t, "data-testid", U.popupMessage)), d(n, t)
        };
        A(g, n => {
            var t;
            (t = l()) != null && t.content.text && n(F)
        })
    }
    var $ = w(g, 2); {
        var M = n => {
            var t = O(),
                _ = W(t);
            oe(_, () => e(a).items.length, b => {
                var f = Ye(),
                    C = v(f),
                    h = v(C),
                    i = p(() => !ve());
                Te(h, {
                    controlsTop: "4rem",
                    get controls() {
                        return e(i)
                    },
                    children: (E, D) => {
                        var m = O(),
                            H = W(m);
                        Le(H, 17, () => e(a).items, He, (G, j) => {
                            Ee(G, {
                                get card() {
                                    return e(j)
                                },
                                isCompact: !0,
                                get fullWidth() {
                                    return e(k)
                                }
                            })
                        }), d(E, m)
                    },
                    $$slots: {
                        default: !0
                    }
                }), L(() => ie(C, de(["relative w-56", e(k) && "w-full"]), "")), d(b, f)
            }), d(n, t)
        };
        A($, n => {
            e(a) && n(M)
        })
    }
    d(u, c), X()
}
var ze = u => u.stopPropagation(),
    Je = () => {},
    Ne = () => {},
    Qe = I("<div><!></div>");

function Ve(u) {
    var r = Qe();
    r.__click = [ze], r.__keydown = [Je], r.__keyup = [Ne];
    var o = v(r);
    Ue(o, {}), d(u, r)
}
V(["click", "keydown", "keyup"]);
var Ke = I('<div class="flex-center flex-shrink-0"><!></div> <div class="ml-3 mr-10 font-bold truncate color-slate-800"> </div>', 1);

function et(u, r) {
    R(r, !0);
    const o = S(),
        l = () => x(e(a), "$agent", o),
        y = () => x(e(k), "$identity", o);
    let a = p(() => ce(r.agentId ? ? "")),
        k = p(() => De(r.identityId || ""));
    var c = O(),
        g = W(c); {
        var F = $ => {
            var M = Ke(),
                n = W(M),
                t = v(n),
                _ = p(() => {
                    var h, i;
                    return ((h = y()) == null ? void 0 : h.avatarUrl) || ((i = l()) == null ? void 0 : i.avatar)
                }),
                b = p(() => !!r.identityId);
            Ge(t, {
                get avatar() {
                    return e(_)
                },
                get isBot() {
                    return e(b)
                }
            });
            var f = w(n, 2),
                C = v(f);
            L(() => {
                var h, i;
                return K(C, ((h = y()) == null ? void 0 : h.name) || ((i = l()) == null ? void 0 : i.fullname))
            }), d($, M)
        };
        A(g, $ => {
            (l() || y()) && $(F)
        })
    }
    d(u, c), X()
}
const tt = () => {
    Ie(), ke()
};
var at = I('<!> <div class="relative p-4 bg-white rounded-lg cursor-pointer"><div class="flex items-center mb-2"><!></div> <!> <div class="mt-4"><!></div> <div class="absolute top-2 right-2 text-gray-500"><!></div></div>', 1),
    st = I("<div><!></div>");

function ot(u, r) {
    R(r, !0);
    const o = S(),
        l = () => x(fe, "$lastUnreadMessage", o),
        y = () => x(We, "$hasContactMessage", o),
        a = () => x(N, "$popupMessage", o),
        k = () => x(Be, "$t", o);
    let c = Me(void 0),
        g = () => e(c) && he.set(e(c).getBoundingClientRect().height);
    pe(() => {
        g(), q().addEventListener("visibilitychange", g)
    }), ue(() => {
        q().removeEventListener("visibilitychange", g)
    });
    const F = () => {
            Ce(!0)
        },
        $ = () => {
            J.set(!0)
        },
        M = () => {
            J.set(!1)
        },
        n = async () => {
            await me(), g()
        },
        {
            popupTextareaEnabled: t
        } = ge.getOptions();
    _e(() => {
        l() && n()
    });
    let _ = p(() => y() ? "trigger.replyButton" : "trigger.openChatButton"),
        b = p(() => t && a() && !we(a()));
    var f = st(),
        C = v(f); {
        var h = i => {
            var E = at(),
                D = W(E);
            je(D);
            var m = w(D, 2);
            m.__click = [tt];
            var H = v(m),
                G = v(H); {
                var j = s => {
                        var P = p(() => {
                            var B, T;
                            return (T = (B = a()) == null ? void 0 : B.trigger) == null ? void 0 : T.identityId
                        });
                        et(s, {
                            get agentId() {
                                return a().agentId
                            },
                            get identityId() {
                                return e(P)
                            }
                        })
                    },
                    ee = s => {
                        Oe(s, {})
                    };
                A(G, s => {
                    var P, B;
                    a().agentId || (B = (P = a()) == null ? void 0 : P.trigger) != null && B.identityId ? s(j) : s(ee, !1)
                })
            }
            var Y = w(H, 2);
            qe(Y, {});
            var Z = w(Y, 2),
                te = v(Z); {
                var ae = s => {
                        Ve(s)
                    },
                    se = s => {
                        Re(s, {
                            icon: Se,
                            isBlock: !0,
                            get testId() {
                                return U.popupButton
                            },
                            children: (P, B) => {
                                var T = Pe();
                                L(() => K(T, k()(e(_)))), d(P, T)
                            },
                            $$slots: {
                                default: !0
                            }
                        })
                    };
                A(te, s => {
                    e(b) ? s(ae) : s(se, !1)
                })
            }
            var re = w(Z, 2),
                ne = v(re);
            ye(ne, {
                icon: $e,
                iconDescription: "Close",
                onClick: F,
                get testId() {
                    return U.popupButtonClose
                }
            }), be(m, s => xe(c, s), () => e(c)), z("mouseenter", m, $), z("mouseleave", m, M), d(i, E)
        };
        A(C, i => {
            a() && i(h)
        })
    }
    L(() => Q(f, "data-testid", U.popup)), d(u, f), X()
}
V(["click"]);
export {
    ot as
    default
};
//# sourceMappingURL=WidgetPopup-D3FEoDN_.js.map