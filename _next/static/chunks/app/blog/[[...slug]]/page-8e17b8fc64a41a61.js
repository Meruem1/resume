(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5667], {
        225: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 72105)), Promise.resolve().then(r.t.bind(r, 65878, 23)), Promise.resolve().then(r.t.bind(r, 72972, 23)), Promise.resolve().then(r.bind(r, 81523)), Promise.resolve().then(r.bind(r, 70049)), Promise.resolve().then(r.bind(r, 16683)), Promise.resolve().then(r.bind(r, 44927)), Promise.resolve().then(r.bind(r, 18190)), Promise.resolve().then(r.bind(r, 47535)), Promise.resolve().then(r.bind(r, 8537)), Promise.resolve().then(r.bind(r, 65117)), Promise.resolve().then(r.bind(r, 53594)), Promise.resolve().then(r.bind(r, 28260)), Promise.resolve().then(r.bind(r, 44023)), Promise.resolve().then(r.bind(r, 1272)), Promise.resolve().then(r.bind(r, 38964)), Promise.resolve().then(r.bind(r, 54896)), Promise.resolve().then(r.bind(r, 96246)), Promise.resolve().then(r.bind(r, 74291)), Promise.resolve().then(r.bind(r, 31593))
        },
        33145: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return o.a
                }
            });
            var n = r(48461),
                o = r.n(n)
        },
        48461: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return s
                    }
                });
            let n = r(47043),
                o = r(55346),
                a = r(65878),
                i = n._(r(5084));

            function s(e) {
                let {
                    props: t
                } = (0, o.getImgProps)(e, {
                    defaultLoader: i.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let l = a.Image
        },
        14264: function(e, t) {
            "use strict";
            /**
             * @license React
             * react.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = Symbol.for("react.element"),
                n = (Symbol.for("react.portal"), Symbol.for("react.fragment"), Symbol.for("react.strict_mode"), Symbol.for("react.profiler"), Symbol.for("react.provider"), Symbol.for("react.context"), Symbol.for("react.forward_ref")),
                o = (Symbol.for("react.suspense"), Symbol.for("react.memo"), Symbol.for("react.lazy"), {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                }),
                a = Object.assign,
                i = {};

            function s(e, t, r) {
                this.props = e, this.context = t, this.refs = i, this.updater = r || o
            }

            function l() {}

            function c(e, t, r) {
                this.props = e, this.context = t, this.refs = i, this.updater = r || o
            }
            s.prototype.isReactComponent = {}, s.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, s.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, l.prototype = s.prototype;
            var d = c.prototype = new l;
            d.constructor = c, a(d, s.prototype), d.isPureReactComponent = !0;
            var u = Object.prototype.hasOwnProperty,
                m = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };
            t.createElement = function(e, t, n) {
                var o, a = {},
                    i = null,
                    s = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (i = "" + t.key), t) u.call(t, o) && !m.hasOwnProperty(o) && (a[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) a.children = n;
                else if (1 < l) {
                    for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
                    a.children = c
                }
                if (e && e.defaultProps)
                    for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: i,
                    ref: s,
                    props: a,
                    _owner: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: n,
                    render: e
                }
            }
        },
        94746: function(e, t, r) {
            "use strict";
            e.exports = r(14264)
        },
        16683: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(26705),
                o = r(52078),
                a = r(69508),
                i = r(93448);
            t.default = () => {
                let e = (0, a._)(".blog-hero-content-container", -.25);
                return (0, n.jsx)(o.Z, {
                    classNames: {
                        root: (0, i.cn)({
                            "opacity-0": null === e
                        }),
                        container: (0, i.cn)({
                            [(0, i.cn)("max-w-full border-transparent bg-transparent", "supports-[backdrop-filter]:bg-transparent supports-[backdrop-filter]:backdrop-blur-none", "dark:bg-transparent dark:border-transparent", "dark:supports-[backdrop-filter]:bg-transparent")]: !e
                        })
                    },
                    themeSwitch: {
                        variant: e ? void 0 : "link"
                    }
                })
            }
        },
        44927: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r(26705),
                o = r(27648),
                a = {
                    src: "/_next/static/media/black-button.6a71dfd1.png",
                    height: 306,
                    width: 1090,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEU8OjQqKiomJiY1NTU/QEJcW1RNTUtmXzJsYixcAAAAA3RSTlP88PDvqV3LAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGklEQVR4nGNgYGVmZmZmYWJgYGdhY2BhZQQAAcIAM47b0ogAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 2
                },
                i = {
                    src: "/_next/static/media/white-button.87f2b9b0.png",
                    height: 306,
                    width: 1090,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEXz8/Xm5uTu7N/m5unIx8bb2+Lf3+Lm3rPR0dQBvlM+AAAAA3RSTlP1+vuNRVdGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGklEQVR4nGNgZGFmZmBmY2BgYmflYGZlYQAAAcoANzx6ocUAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 2
                },
                s = r(33145),
                l = r(93448),
                c = r(17397),
                d = () => (0, n.jsxs)(o.default, {
                    href: "https://buymeacoffee.com/maxijonson",
                    target: "_blank",
                    className: "mx-auto",
                    onClick: () => {
                        c.o.track("bmc_click")
                    },
                    children: [(0, n.jsx)(s.default, {
                        src: a,
                        alt: "Buy Me a Coffee",
                        className: (0, l.cn)("hidden max-h-12 w-auto rounded-lg border border-transparent", "md:max-h-10", "dark:block")
                    }), (0, n.jsx)(s.default, {
                        src: i,
                        alt: "Buy Me a Coffee",
                        className: (0, l.cn)("max-h-12 w-auto rounded-lg border border-stone-500", "md:max-h-10", "dark:hidden")
                    })]
                })
        },
        18190: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r(26705),
                o = r(68841),
                a = r(50279),
                i = r(20955);

            function s({
                id: e,
                host: t,
                repo: o,
                repoId: a,
                category: s,
                categoryId: l,
                mapping: c,
                term: d,
                strict: u,
                reactionsEnabled: m,
                emitMetadata: f,
                inputPosition: h,
                theme: p,
                lang: b,
                loading: g
            }) {
                let [v, A] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    v || (r.e(6581).then(r.bind(r, 66581)), A(!0))
                }, []), v ? (0, n.jsx)("giscus-widget", {
                    id: e,
                    host: t,
                    repo: o,
                    repoid: a,
                    category: s,
                    categoryid: l,
                    mapping: c,
                    term: d,
                    strict: u,
                    reactionsenabled: m,
                    emitmetadata: f,
                    inputposition: h,
                    theme: p,
                    lang: b,
                    loading: g
                }) : null
            }
            var l = r(25922),
                c = e => {
                    let {
                        resolvedTheme: t
                    } = (0, l.F)(), r = "production" === o.x.NEXT_PUBLIC_VERCEL_ENV ? e.term : (0, a.B)().hostname.startsWith("staging") ? "".concat(e.term, " (staging)") : "".concat(e.term, " (dev)");
                    return (0, n.jsx)(s, {
                        repo: "maxijonson/website-v6",
                        repoId: "R_kgDOLkocoQ",
                        category: "Blog Posts Comments",
                        categoryId: "DIC_kwDOLkococ4Ce_uW",
                        mapping: "specific",
                        term: r,
                        strict: "1",
                        reactionsEnabled: "1",
                        emitMetadata: "1",
                        inputPosition: "top",
                        theme: "dark" === t ? "noborder_gray" : "noborder_light",
                        lang: "en",
                        loading: "lazy"
                    })
                }
        },
        8537: function(e, t, r) {
            "use strict";
            var n = r(26705),
                o = r(17397),
                a = r(12381),
                i = r(93448),
                s = r(20955),
                l = r(11140);
            t.default = e => {
                let {
                    url: t,
                    className: r
                } = e, [c, d] = (0, s.useState)(!1);
                return (0, n.jsx)(a.z, {
                    size: "icon",
                    variant: "link",
                    className: (0, i.cn)("rounded-full", r),
                    title: "Copy link to clipboard",
                    onClick: () => {
                        c || (o.o.track("post_share", {
                            share_type: "copy"
                        }), navigator.clipboard.writeText(t), d(!0), setTimeout(() => {
                            d(!1)
                        }, 1e3))
                    },
                    children: c ? (0, n.jsx)(l.oFd, {
                        className: "size-5"
                    }) : (0, n.jsx)(l.Gzp, {
                        className: "size-5"
                    })
                })
            }
        },
        65117: function(e, t, r) {
            "use strict";
            var n = r(26705),
                o = r(17397),
                a = r(12381),
                i = r(93448),
                s = r(27648);
            t.default = e => {
                let {
                    name: t,
                    url: r,
                    children: l,
                    className: c,
                    type: d
                } = e;
                return (0, n.jsx)(a.z, {
                    asChild: !0,
                    size: "icon",
                    variant: "link",
                    className: (0, i.cn)("rounded-full", c),
                    children: (0, n.jsx)(s.default, {
                        href: r,
                        target: "_blank",
                        title: t,
                        onClick: () => {
                            o.o.track("post_share", {
                                share_type: d
                            })
                        },
                        children: l
                    })
                })
            }
        },
        53594: function(e, t, r) {
            "use strict";
            var n = r(26705),
                o = r(69508),
                a = r(93448),
                i = r(27648),
                s = r(20955);
            t.default = e => {
                let {
                    id: t,
                    level: r,
                    text: l
                } = e, c = (0, o._)("#".concat(t), -40, !0), [d, u] = (0, s.useState)(!1);
                return (0, s.useLayoutEffect)(() => {
                    if (!c) return u(!1);
                    let e = () => requestAnimationFrame(() => {
                        let e = document.querySelectorAll(".table-of-contents-entry--active"),
                            r = e[e.length - 1];
                        r && u(r.getAttribute("data-slug") === t)
                    });
                    return window.addEventListener("scroll", e), e(), () => window.removeEventListener("scroll", e)
                }, [t, c]), (0, n.jsx)(i.default, {
                    href: "#".concat(t),
                    "data-slug": t,
                    className: (0, a.cn)("table-of-contents-entry", "inline-block font-light leading-5 text-stone-500 transition-all", "hover:font-normal hover:text-stone-600", "dark:text-stone-500", "dark:hover:text-stone-400", {
                        "pl-2": 2 === r,
                        "pl-4": 3 === r,
                        "pl-6": 4 === r
                    }, {
                        [(0, a.cn)("table-of-contents-entry--active font-normal text-stone-800", "hover:text-stone-800", "dark:text-stone-200", "dark:hover:text-stone-200")]: c
                    }, {
                        [(0, a.cn)("font-bold tracking-wide text-stone-950 hover:font-bold", "hover:text-stone-950", "dark:text-stone-50", "dark:hover:text-stone-50")]: d
                    }),
                    children: l
                })
            }
        },
        52078: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(26705),
                o = r(73293),
                a = r(45939),
                i = r(93448),
                s = r(27648),
                l = r(12381),
                c = () => (0, n.jsx)("nav", {
                    className: (0, i.cn)("grow px-2", "md:px-4"),
                    children: (0, n.jsx)("ul", {
                        className: "flex gap-2",
                        children: (0, n.jsx)("li", {
                            children: (0, n.jsx)(s.default, {
                                href: "/blog",
                                children: (0, n.jsx)(l.z, {
                                    variant: "ghost",
                                    children: "Blog"
                                })
                            })
                        })
                    })
                }),
                d = e => {
                    let {
                        className: t,
                        classNames: r = {},
                        themeSwitch: l
                    } = e;
                    return (0, n.jsx)("header", {
                        className: (0, i.cn)("fixed left-0 right-0 top-0 z-40 flex flex-col items-center px-2 pt-2 opacity-100 transition-[opacity]", "md:px-5 md:pt-3", t, r.root),
                        children: (0, n.jsxs)("div", {
                            className: (0, i.cn)("relative flex w-full max-w-screen-lg items-center rounded-md border-[1px] border-stone-400 bg-white p-2 transition-[background-color,border-color,max-width,opacity] ease-in-out", "supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:backdrop-blur", "dark:border-stone-800 dark:bg-stone-950", "dark:supports-[backdrop-filter]:bg-stone-950/70", r.container),
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center",
                                children: (0, n.jsx)(s.default, {
                                    href: "/",
                                    children: (0, n.jsx)(o.default, {
                                        className: "size-12"
                                    })
                                })
                            }), (0, n.jsx)(c, {}), (0, n.jsx)("div", {
                                className: "flex items-center",
                                children: (0, n.jsx)(a.default, { ...l
                                })
                            })]
                        })
                    })
                }
        },
        96246: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Avatar: function() {
                    return s
                },
                AvatarFallback: function() {
                    return c
                },
                AvatarImage: function() {
                    return l
                }
            });
            var n = r(26705),
                o = r(20955),
                a = r(70650),
                i = r(93448);
            let s = o.forwardRef((e, t) => {
                let {
                    className: r,
                    ...o
                } = e;
                return (0, n.jsx)(a.fC, {
                    ref: t,
                    className: (0, i.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", r),
                    ...o
                })
            });
            s.displayName = a.fC.displayName;
            let l = o.forwardRef((e, t) => {
                let {
                    className: r,
                    ...o
                } = e;
                return (0, n.jsx)(a.Ee, {
                    ref: t,
                    className: (0, i.cn)("aspect-square h-full w-full", r),
                    ...o
                })
            });
            l.displayName = a.Ee.displayName;
            let c = o.forwardRef((e, t) => {
                let {
                    className: r,
                    ...o
                } = e;
                return (0, n.jsx)(a.NY, {
                    ref: t,
                    className: (0, i.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", r),
                    ...o
                })
            });
            c.displayName = a.NY.displayName
        },
        50279: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return n
                }
            }), r(68841);
            let n = () => new URL("/", window.location.origin)
        },
        70650: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ee: function() {
                    return y
                },
                NY: function() {
                    return x
                },
                fC: function() {
                    return A
                }
            });
            var n = r(20955),
                o = r(73966),
                a = r(26606),
                i = r(61188),
                s = r(66840),
                l = r(26705),
                c = "Avatar",
                [d, u] = (0, o.b)(c),
                [m, f] = d(c),
                h = n.forwardRef((e, t) => {
                    let {
                        __scopeAvatar: r,
                        ...o
                    } = e, [a, i] = n.useState("idle");
                    return (0, l.jsx)(m, {
                        scope: r,
                        imageLoadingStatus: a,
                        onImageLoadingStatusChange: i,
                        children: (0, l.jsx)(s.WV.span, { ...o,
                            ref: t
                        })
                    })
                });
            h.displayName = c;
            var p = "AvatarImage",
                b = n.forwardRef((e, t) => {
                    let {
                        __scopeAvatar: r,
                        src: o,
                        onLoadingStatusChange: c = () => {},
                        ...d
                    } = e, u = f(p, r), m = function(e) {
                        let [t, r] = n.useState("idle");
                        return (0, i.b)(() => {
                            if (!e) {
                                r("error");
                                return
                            }
                            let t = !0,
                                n = new window.Image,
                                o = e => () => {
                                    t && r(e)
                                };
                            return r("loading"), n.onload = o("loaded"), n.onerror = o("error"), n.src = e, () => {
                                t = !1
                            }
                        }, [e]), t
                    }(o), h = (0, a.W)(e => {
                        c(e), u.onImageLoadingStatusChange(e)
                    });
                    return (0, i.b)(() => {
                        "idle" !== m && h(m)
                    }, [m, h]), "loaded" === m ? (0, l.jsx)(s.WV.img, { ...d,
                        ref: t,
                        src: o
                    }) : null
                });
            b.displayName = p;
            var g = "AvatarFallback",
                v = n.forwardRef((e, t) => {
                    let {
                        __scopeAvatar: r,
                        delayMs: o,
                        ...a
                    } = e, i = f(g, r), [c, d] = n.useState(void 0 === o);
                    return n.useEffect(() => {
                        if (void 0 !== o) {
                            let e = window.setTimeout(() => d(!0), o);
                            return () => window.clearTimeout(e)
                        }
                    }, [o]), c && "loaded" !== i.imageLoadingStatus ? (0, l.jsx)(s.WV.span, { ...a,
                        ref: t
                    }) : null
                });
            v.displayName = g;
            var A = h,
                y = b,
                x = v
        },
        55156: function(e, t, r) {
            "use strict";
            r.d(t, {
                f: function() {
                    return c
                }
            });
            var n = r(20955),
                o = r(66840),
                a = r(26705),
                i = "horizontal",
                s = ["horizontal", "vertical"],
                l = n.forwardRef((e, t) => {
                    let {
                        decorative: r,
                        orientation: n = i,
                        ...l
                    } = e, c = s.includes(n) ? n : i;
                    return (0, a.jsx)(o.WV.div, {
                        "data-orientation": c,
                        ...r ? {
                            role: "none"
                        } : {
                            "aria-orientation": "vertical" === c ? c : void 0,
                            role: "separator"
                        },
                        ...l,
                        ref: t
                    })
                });
            l.displayName = "Separator";
            var c = l
        },
        25922: function(e, t, r) {
            "use strict";
            r.d(t, {
                F: function() {
                    return c
                },
                f: function() {
                    return d
                }
            });
            var n = r(20955),
                o = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                i = "undefined" == typeof window,
                s = n.createContext(void 0),
                l = {
                    setTheme: e => {},
                    themes: []
                },
                c = () => {
                    var e;
                    return null != (e = n.useContext(s)) ? e : l
                },
                d = e => n.useContext(s) ? e.children : n.createElement(m, { ...e
                }),
                u = ["light", "dark"],
                m = e => {
                    let {
                        forcedTheme: t,
                        disableTransitionOnChange: r = !1,
                        enableSystem: i = !0,
                        enableColorScheme: l = !0,
                        storageKey: c = "theme",
                        themes: d = u,
                        defaultTheme: m = i ? "system" : "light",
                        attribute: g = "data-theme",
                        value: v,
                        children: A,
                        nonce: y
                    } = e, [x, w] = n.useState(() => h(c, m)), [k, S] = n.useState(() => h(c)), N = v ? Object.values(v) : d, j = n.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && i && (t = b());
                        let n = v ? v[t] : t,
                            a = r ? p() : null,
                            s = document.documentElement;
                        if ("class" === g ? (s.classList.remove(...N), n && s.classList.add(n)) : n ? s.setAttribute(g, n) : s.removeAttribute(g), l) {
                            let e = o.includes(m) ? m : null,
                                r = o.includes(t) ? t : e;
                            s.style.colorScheme = r
                        }
                        null == a || a()
                    }, []), C = n.useCallback(e => {
                        let t = "function" == typeof e ? e(e) : e;
                        w(t);
                        try {
                            localStorage.setItem(c, t)
                        } catch (e) {}
                    }, [t]), E = n.useCallback(e => {
                        S(b(e)), "system" === x && i && !t && j("system")
                    }, [x, t]);
                    n.useEffect(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(E), E(e), () => e.removeListener(E)
                    }, [E]), n.useEffect(() => {
                        let e = e => {
                            e.key === c && C(e.newValue || m)
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [C]), n.useEffect(() => {
                        j(null != t ? t : x)
                    }, [t, x]);
                    let P = n.useMemo(() => ({
                        theme: x,
                        setTheme: C,
                        forcedTheme: t,
                        resolvedTheme: "system" === x ? k : x,
                        themes: i ? [...d, "system"] : d,
                        systemTheme: i ? k : void 0
                    }), [x, C, t, k, i, d]);
                    return n.createElement(s.Provider, {
                        value: P
                    }, n.createElement(f, {
                        forcedTheme: t,
                        disableTransitionOnChange: r,
                        enableSystem: i,
                        enableColorScheme: l,
                        storageKey: c,
                        themes: d,
                        defaultTheme: m,
                        attribute: g,
                        value: v,
                        children: A,
                        attrs: N,
                        nonce: y
                    }), A)
                },
                f = n.memo(e => {
                    let {
                        forcedTheme: t,
                        storageKey: r,
                        attribute: i,
                        enableSystem: s,
                        enableColorScheme: l,
                        defaultTheme: c,
                        value: d,
                        attrs: u,
                        nonce: m
                    } = e, f = "system" === c, h = "class" === i ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(u.map(e => "'".concat(e, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(i, "',s='setAttribute';"), p = l ? (o.includes(c) ? c : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", b = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            n = d ? d[e] : e,
                            a = t ? e + "|| ''" : "'".concat(n, "'"),
                            s = "";
                        return l && r && !t && o.includes(e) && (s += "d.style.colorScheme = '".concat(e, "';")), "class" === i ? t || n ? s += "c.add(".concat(a, ")") : s += "null" : n && (s += "d[s](n,".concat(a, ")")), s
                    }, g = t ? "!function(){".concat(h).concat(b(t), "}()") : s ? "!function(){try{".concat(h, "var e=localStorage.getItem('").concat(r, "');if('system'===e||(!e&&").concat(f, ")){var t='").concat(a, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(b("dark"), "}else{").concat(b("light"), "}}else if(e){").concat(d ? "var x=".concat(JSON.stringify(d), ";") : "").concat(b(d ? "x[e]" : "e", !0), "}").concat(f ? "" : "else{" + b(c, !1, !1) + "}").concat(p, "}catch(e){}}()") : "!function(){try{".concat(h, "var e=localStorage.getItem('").concat(r, "');if(e){").concat(d ? "var x=".concat(JSON.stringify(d), ";") : "").concat(b(d ? "x[e]" : "e", !0), "}else{").concat(b(c, !1, !1), ";}").concat(p, "}catch(t){}}();");
                    return n.createElement("script", {
                        nonce: m,
                        dangerouslySetInnerHTML: {
                            __html: g
                        }
                    })
                }),
                h = (e, t) => {
                    let r;
                    if (!i) {
                        try {
                            r = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return r || t
                    }
                },
                p = () => {
                    let e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(e)
                        }, 1)
                    }
                },
                b = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
        }
    },
    function(e) {
        e.O(0, [3358, 5957, 1779, 8310, 4574, 7483, 87, 8802, 4121, 831, 1744], function() {
            return e(e.s = 225)
        }), _N_E = e.O()
    }
]);