(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7483], {
        27648: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return i.a
                }
            });
            var r = n(72972),
                i = n.n(r)
        },
        99376: function(e, t, n) {
            "use strict";
            var r = n(35475);
            n.o(r, "useParams") && n.d(t, {
                useParams: function() {
                    return r.useParams
                }
            }), n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            }), n.o(r, "useRouter") && n.d(t, {
                useRouter: function() {
                    return r.useRouter
                }
            }), n.o(r, "useSearchParams") && n.d(t, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            }), n.o(r, "useServerInsertedHTML") && n.d(t, {
                useServerInsertedHTML: function() {
                    return r.useServerInsertedHTML
                }
            })
        },
        55449: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "addLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(33068);
            let r = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e
            };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        56958: function(e, t, n) {
            "use strict";

            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(33068), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        72972: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = n(47043),
                i = n(26705),
                s = r._(n(20955)),
                o = n(25246),
                a = n(53552),
                l = n(57497),
                u = n(3987),
                c = n(55449),
                d = n(25523),
                f = n(61956),
                h = n(16081),
                p = n(56958),
                v = n(1634),
                _ = n(24673),
                g = new Set;

            function m(e, t, n, r, i, s) {
                if ("undefined" != typeof window && (s || (0, a.isLocalURL)(t))) {
                    if (!r.bypassPrefetchedCheck) {
                        let i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (g.has(i)) return;
                        g.add(i)
                    }(async () => s ? e.prefetch(t, i) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function y(e) {
                return "string" == typeof e ? e : (0, l.formatUrl)(e)
            }
            let b = s.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: l,
                    as: g,
                    children: b,
                    prefetch: k = null,
                    passHref: w,
                    replace: x,
                    shallow: S,
                    scroll: E,
                    locale: R,
                    onClick: P,
                    onMouseEnter: T,
                    onTouchStart: I,
                    legacyBehavior: C = !1,
                    ...O
                } = e;
                n = b, C && ("string" == typeof n || "number" == typeof n) && (n = (0, i.jsx)("a", {
                    children: n
                }));
                let F = s.default.useContext(d.RouterContext),
                    N = s.default.useContext(f.AppRouterContext),
                    M = null != F ? F : N,
                    $ = !F,
                    j = !1 !== k,
                    A = null === k ? _.PrefetchKind.AUTO : _.PrefetchKind.FULL,
                    {
                        href: L,
                        as: D
                    } = s.default.useMemo(() => {
                        if (!F) {
                            let e = y(l);
                            return {
                                href: e,
                                as: g ? y(g) : e
                            }
                        }
                        let [e, t] = (0, o.resolveHref)(F, l, !0);
                        return {
                            href: e,
                            as: g ? (0, o.resolveHref)(F, g) : t || e
                        }
                    }, [F, l, g]),
                    q = s.default.useRef(L),
                    Z = s.default.useRef(D);
                C && (r = s.default.Children.only(n));
                let U = C ? r && "object" == typeof r && r.ref : t,
                    [B, z, H] = (0, h.useIntersection)({
                        rootMargin: "200px"
                    }),
                    W = s.default.useCallback(e => {
                        (Z.current !== D || q.current !== L) && (H(), Z.current = D, q.current = L), B(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                    }, [D, U, L, H, B]);
                s.default.useEffect(() => {
                    M && z && j && m(M, L, D, {
                        locale: R
                    }, {
                        kind: A
                    }, $)
                }, [D, L, z, R, j, null == F ? void 0 : F.locale, M, $, A]);
                let V = {
                    ref: W,
                    onClick(e) {
                        C || "function" != typeof P || P(e), C && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), M && !e.defaultPrevented && function(e, t, n, r, i, o, l, u, c) {
                            let {
                                nodeName: d
                            } = e.currentTarget;
                            if ("A" === d.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, a.isLocalURL)(n))) return;
                            e.preventDefault();
                            let f = () => {
                                let e = null == l || l;
                                "beforePopState" in t ? t[i ? "replace" : "push"](n, r, {
                                    shallow: o,
                                    locale: u,
                                    scroll: e
                                }) : t[i ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? s.default.startTransition(f) : f()
                        }(e, M, L, D, x, S, E, R, $)
                    },
                    onMouseEnter(e) {
                        C || "function" != typeof T || T(e), C && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), M && (j || !$) && m(M, L, D, {
                            locale: R,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, $)
                    },
                    onTouchStart: function(e) {
                        C || "function" != typeof I || I(e), C && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), M && (j || !$) && m(M, L, D, {
                            locale: R,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, $)
                    }
                };
                if ((0, u.isAbsoluteUrl)(D)) V.href = D;
                else if (!C || w || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== R ? R : null == F ? void 0 : F.locale,
                        t = (null == F ? void 0 : F.isLocaleDomain) && (0, p.getDomainLocale)(D, e, null == F ? void 0 : F.locales, null == F ? void 0 : F.domainLocales);
                    V.href = t || (0, v.addBasePath)((0, c.addLocale)(D, e, null == F ? void 0 : F.defaultLocale))
                }
                return C ? s.default.cloneElement(r, V) : (0, i.jsx)("a", { ...O,
                    ...V,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        63515: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    cancelIdleCallback: function() {
                        return r
                    },
                    requestIdleCallback: function() {
                        return n
                    }
                });
            let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
                    let t = Date.now();
                    return self.setTimeout(function() {
                        e({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - t))
                            }
                        })
                    }, 1)
                },
                r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
                    return clearTimeout(e)
                };
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        25246: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "resolveHref", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let r = n(48637),
                i = n(57497),
                s = n(17053),
                o = n(3987),
                a = n(33068),
                l = n(53552),
                u = n(86279),
                c = n(37205);

            function d(e, t, n) {
                let d;
                let f = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
                    h = f.match(/^[a-zA-Z]{1,}:\/\//),
                    p = h ? f.slice(h[0].length) : f;
                if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                    console.error("Invalid href '" + f + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                    let t = (0, o.normalizeRepeatedSlashes)(p);
                    f = (h ? h[0] : "") + t
                }
                if (!(0, l.isLocalURL)(f)) return n ? [f] : f;
                try {
                    d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n")
                } catch (e) {
                    d = new URL("/", "http://n")
                }
                try {
                    let e = new URL(f, d);
                    e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
                    let t = "";
                    if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && n) {
                        let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
                            {
                                result: o,
                                params: a
                            } = (0, c.interpolateAs)(e.pathname, e.pathname, n);
                        o && (t = (0, i.formatWithValidation)({
                            pathname: o,
                            hash: e.hash,
                            query: (0, s.omit)(n, a)
                        }))
                    }
                    let o = e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
                    return n ? [o, t || o] : o
                } catch (e) {
                    return n ? [f] : f
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16081: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(20955),
                i = n(63515),
                s = "function" == typeof IntersectionObserver,
                o = new Map,
                a = [];

            function l(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: l
                } = e, u = l || !s, [c, d] = (0, r.useState)(!1), f = (0, r.useRef)(null), h = (0, r.useCallback)(e => {
                    f.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (s) {
                        if (u || c) return;
                        let e = f.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: i,
                                elements: s
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = a.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = o.get(r))) return t;
                                let i = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = i.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: i
                                }, a.push(n), o.set(n, t), t
                            }(n);
                            return s.set(e, t), i.observe(e),
                                function() {
                                    if (s.delete(e), i.unobserve(e), 0 === s.size) {
                                        i.disconnect(), o.delete(r);
                                        let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && a.splice(e, 1)
                                    }
                                }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, i.requestIdleCallback)(() => d(!0));
                        return () => (0, i.cancelIdleCallback)(e)
                    }
                }, [u, n, t, c, f.current]), [h, c, (0, r.useCallback)(() => {
                    d(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        90042: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "escapeStringRegexp", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = /[|\\{}()[\]^$+*?.-]/,
                r = /[|\\{}()[\]^$+*?.-]/g;

            function i(e) {
                return n.test(e) ? e.replace(r, "\\$&") : e
            }
        },
        81523: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(18993);

            function i(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                if ("undefined" == typeof window) throw new r.BailoutToCSRError(t);
                return n
            }
        },
        70049: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(26705),
                i = n(20544);

            function s(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let n = (0, i.getExpectedRequestStore)("next/dynamic css"),
                    s = [];
                if (n.reactLoadableManifest && t) {
                    let e = n.reactLoadableManifest;
                    for (let n of t) {
                        if (!e[n]) continue;
                        let t = e[n].files.filter(e => e.endsWith(".css"));
                        s.push(...t)
                    }
                }
                return 0 === s.length ? null : (0, r.jsx)(r.Fragment, {
                    children: s.map(e => (0, r.jsx)("link", {
                        precedence: "dynamic",
                        rel: "stylesheet",
                        href: n.assetPrefix + "./_next/" + encodeURI(e),
                        as: "style"
                    }, e))
                })
            }
        },
        25523: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = n(47043)._(n(20955)).default.createContext(null)
        },
        57497: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    formatUrl: function() {
                        return s
                    },
                    formatWithValidation: function() {
                        return a
                    },
                    urlObjectKeys: function() {
                        return o
                    }
                });
            let r = n(53099)._(n(48637)),
                i = /https?|ftp|gopher|file/;

            function s(e) {
                let {
                    auth: t,
                    hostname: n
                } = e, s = e.protocol || "", o = e.pathname || "", a = e.hash || "", l = e.query || "", u = !1;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : n && (u = t + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (u += ":" + e.port)), l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
                let c = e.search || l && "?" + l || "";
                return s && !s.endsWith(":") && (s += ":"), e.slashes || (!s || i.test(s)) && !1 !== u ? (u = "//" + (u || ""), o && "/" !== o[0] && (o = "/" + o)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), "" + s + u + (o = o.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
            }
            let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

            function a(e) {
                return s(e)
            }
        },
        86279: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getSortedRoutes: function() {
                        return r.getSortedRoutes
                    },
                    isDynamicRoute: function() {
                        return i.isDynamicRoute
                    }
                });
            let r = n(14777),
                i = n(38104)
        },
        37205: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "interpolateAs", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(4199),
                i = n(9964);

            function s(e, t, n) {
                let s = "",
                    o = (0, i.getRouteRegex)(e),
                    a = o.groups,
                    l = (t !== e ? (0, r.getRouteMatcher)(o)(t) : "") || n;
                s = e;
                let u = Object.keys(a);
                return u.every(e => {
                    let t = l[e] || "",
                        {
                            repeat: n,
                            optional: r
                        } = a[e],
                        i = "[" + (n ? "..." : "") + e + "]";
                    return r && (i = (t ? "" : "/") + "[" + i + "]"), n && !Array.isArray(t) && (t = [t]), (r || e in l) && (s = s.replace(i, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
                }) || (s = ""), {
                    params: u,
                    result: s
                }
            }
        },
        38104: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isDynamicRoute", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(91182),
                i = /\/\[[^/]+?\](?=\/|$)/;

            function s(e) {
                return (0, r.isInterceptionRouteAppPath)(e) && (e = (0, r.extractInterceptionRouteInformation)(e).interceptedRoute), i.test(e)
            }
        },
        53552: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isLocalURL", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(3987),
                i = n(11283);

            function s(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, i.hasBasePath)(n.pathname)
                } catch (e) {
                    return !1
                }
            }
        },
        17053: function(e, t) {
            "use strict";

            function n(e, t) {
                let n = {};
                return Object.keys(e).forEach(r => {
                    t.includes(r) || (n[r] = e[r])
                }), n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "omit", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        48637: function(e, t) {
            "use strict";

            function n(e) {
                let t = {};
                return e.forEach((e, n) => {
                    void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e]
                }), t
            }

            function r(e) {
                return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
            }

            function i(e) {
                let t = new URLSearchParams;
                return Object.entries(e).forEach(e => {
                    let [n, i] = e;
                    Array.isArray(i) ? i.forEach(e => t.append(n, r(e))) : t.set(n, r(i))
                }), t
            }

            function s(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.forEach(t => {
                    Array.from(t.keys()).forEach(t => e.delete(t)), t.forEach((t, n) => e.append(n, t))
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    assign: function() {
                        return s
                    },
                    searchParamsToUrlQuery: function() {
                        return n
                    },
                    urlQueryToSearchParams: function() {
                        return i
                    }
                })
        },
        4199: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getRouteMatcher", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(3987);

            function i(e) {
                let {
                    re: t,
                    groups: n
                } = e;
                return e => {
                    let i = t.exec(e);
                    if (!i) return !1;
                    let s = e => {
                            try {
                                return decodeURIComponent(e)
                            } catch (e) {
                                throw new r.DecodeError("failed to decode param")
                            }
                        },
                        o = {};
                    return Object.keys(n).forEach(e => {
                        let t = n[e],
                            r = i[t.pos];
                        void 0 !== r && (o[e] = ~r.indexOf("/") ? r.split("/").map(e => s(e)) : t.repeat ? [s(r)] : s(r))
                    }), o
                }
            }
        },
        9964: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getNamedMiddlewareRegex: function() {
                        return f
                    },
                    getNamedRouteRegex: function() {
                        return d
                    },
                    getRouteRegex: function() {
                        return l
                    }
                });
            let r = n(91182),
                i = n(90042),
                s = n(26674);

            function o(e) {
                let t = e.startsWith("[") && e.endsWith("]");
                t && (e = e.slice(1, -1));
                let n = e.startsWith("...");
                return n && (e = e.slice(3)), {
                    key: e,
                    repeat: n,
                    optional: t
                }
            }

            function a(e) {
                let t = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
                    n = {},
                    a = 1;
                return {
                    parameterizedRoute: t.map(e => {
                        let t = r.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t)),
                            s = e.match(/\[((?:\[.*\])|.+)\]/);
                        if (t && s) {
                            let {
                                key: e,
                                optional: r,
                                repeat: l
                            } = o(s[1]);
                            return n[e] = {
                                pos: a++,
                                repeat: l,
                                optional: r
                            }, "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                        }
                        if (!s) return "/" + (0, i.escapeStringRegexp)(e); {
                            let {
                                key: e,
                                repeat: t,
                                optional: r
                            } = o(s[1]);
                            return n[e] = {
                                pos: a++,
                                repeat: t,
                                optional: r
                            }, t ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                        }
                    }).join(""),
                    groups: n
                }
            }

            function l(e) {
                let {
                    parameterizedRoute: t,
                    groups: n
                } = a(e);
                return {
                    re: RegExp("^" + t + "(?:/)?$"),
                    groups: n
                }
            }

            function u(e) {
                let {
                    interceptionMarker: t,
                    getSafeRouteKey: n,
                    segment: r,
                    routeKeys: s,
                    keyPrefix: a
                } = e, {
                    key: l,
                    optional: u,
                    repeat: c
                } = o(r), d = l.replace(/\W/g, "");
                a && (d = "" + a + d);
                let f = !1;
                (0 === d.length || d.length > 30) && (f = !0), isNaN(parseInt(d.slice(0, 1))) || (f = !0), f && (d = n()), a ? s[d] = "" + a + l : s[d] = l;
                let h = t ? (0, i.escapeStringRegexp)(t) : "";
                return c ? u ? "(?:/" + h + "(?<" + d + ">.+?))?" : "/" + h + "(?<" + d + ">.+?)" : "/" + h + "(?<" + d + ">[^/]+?)"
            }

            function c(e, t) {
                let n;
                let o = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
                    a = (n = 0, () => {
                        let e = "",
                            t = ++n;
                        for (; t > 0;) e += String.fromCharCode(97 + (t - 1) % 26), t = Math.floor((t - 1) / 26);
                        return e
                    }),
                    l = {};
                return {
                    namedParameterizedRoute: o.map(e => {
                        let n = r.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t)),
                            s = e.match(/\[((?:\[.*\])|.+)\]/);
                        if (n && s) {
                            let [n] = e.split(s[0]);
                            return u({
                                getSafeRouteKey: a,
                                interceptionMarker: n,
                                segment: s[1],
                                routeKeys: l,
                                keyPrefix: t ? "nxtI" : void 0
                            })
                        }
                        return s ? u({
                            getSafeRouteKey: a,
                            segment: s[1],
                            routeKeys: l,
                            keyPrefix: t ? "nxtP" : void 0
                        }) : "/" + (0, i.escapeStringRegexp)(e)
                    }).join(""),
                    routeKeys: l
                }
            }

            function d(e, t) {
                let n = c(e, t);
                return { ...l(e),
                    namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
                    routeKeys: n.routeKeys
                }
            }

            function f(e, t) {
                let {
                    parameterizedRoute: n
                } = a(e), {
                    catchAll: r = !0
                } = t;
                if ("/" === n) return {
                    namedRegex: "^/" + (r ? ".*" : "") + "$"
                };
                let {
                    namedParameterizedRoute: i
                } = c(e, !1);
                return {
                    namedRegex: "^" + i + (r ? "(?:(/.*)?)" : "") + "$"
                }
            }
        },
        14777: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSortedRoutes", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            class n {
                insert(e) {
                    this._insert(e.split("/").filter(Boolean), [], !1)
                }
                smoosh() {
                    return this._smoosh()
                }
                _smoosh(e) {
                    void 0 === e && (e = "/");
                    let t = [...this.children.keys()].sort();
                    null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
                    let n = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
                    if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")), !this.placeholder) {
                        let t = "/" === e ? "/" : e.slice(0, -1);
                        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
                        n.unshift(t)
                    }
                    return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")), n
                }
                _insert(e, t, r) {
                    if (0 === e.length) {
                        this.placeholder = !1;
                        return
                    }
                    if (r) throw Error("Catch-all must be the last part of the URL.");
                    let i = e[0];
                    if (i.startsWith("[") && i.endsWith("]")) {
                        let n = i.slice(1, -1),
                            o = !1;
                        if (n.startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1), o = !0), n.startsWith("...") && (n = n.substring(3), r = !0), n.startsWith("[") || n.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + n + "').");
                        if (n.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + n + "').");

                        function s(e, n) {
                            if (null !== e && e !== n) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "').");
                            t.forEach(e => {
                                if (e === n) throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
                                if (e.replace(/\W/g, "") === i.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + n + '" differ only by non-word symbols within a single dynamic path')
                            }), t.push(n)
                        }
                        if (r) {
                            if (o) {
                                if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
                                s(this.optionalRestSlugName, n), this.optionalRestSlugName = n, i = "[[...]]"
                            } else {
                                if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
                                s(this.restSlugName, n), this.restSlugName = n, i = "[...]"
                            }
                        } else {
                            if (o) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
                            s(this.slugName, n), this.slugName = n, i = "[]"
                        }
                    }
                    this.children.has(i) || this.children.set(i, new n), this.children.get(i)._insert(e.slice(1), t, r)
                }
                constructor() {
                    this.placeholder = !0, this.children = new Map, this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null
                }
            }

            function r(e) {
                let t = new n;
                return e.forEach(e => t.insert(e)), t.smoosh()
            }
        },
        3987: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DecodeError: function() {
                        return p
                    },
                    MiddlewareNotFoundError: function() {
                        return m
                    },
                    MissingStaticPage: function() {
                        return g
                    },
                    NormalizeError: function() {
                        return v
                    },
                    PageNotFoundError: function() {
                        return _
                    },
                    SP: function() {
                        return f
                    },
                    ST: function() {
                        return h
                    },
                    WEB_VITALS: function() {
                        return n
                    },
                    execOnce: function() {
                        return r
                    },
                    getDisplayName: function() {
                        return l
                    },
                    getLocationOrigin: function() {
                        return o
                    },
                    getURL: function() {
                        return a
                    },
                    isAbsoluteUrl: function() {
                        return s
                    },
                    isResSent: function() {
                        return u
                    },
                    loadGetInitialProps: function() {
                        return d
                    },
                    normalizeRepeatedSlashes: function() {
                        return c
                    },
                    stringifyError: function() {
                        return y
                    }
                });
            let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

            function r(e) {
                let t, n = !1;
                return function() {
                    for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                    return n || (n = !0, t = e(...i)), t
                }
            }
            let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                s = e => i.test(e);

            function o() {
                let {
                    protocol: e,
                    hostname: t,
                    port: n
                } = window.location;
                return e + "//" + t + (n ? ":" + n : "")
            }

            function a() {
                let {
                    href: e
                } = window.location, t = o();
                return e.substring(t.length)
            }

            function l(e) {
                return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
            }

            function u(e) {
                return e.finished || e.headersSent
            }

            function c(e) {
                let t = e.split("?");
                return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
            }
            async function d(e, t) {
                let n = t.res || t.ctx && t.ctx.res;
                if (!e.getInitialProps) return t.ctx && t.Component ? {
                    pageProps: await d(t.Component, t.ctx)
                } : {};
                let r = await e.getInitialProps(t);
                if (n && u(n)) return r;
                if (!r) throw Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.');
                return r
            }
            let f = "undefined" != typeof performance,
                h = f && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
            class p extends Error {}
            class v extends Error {}
            class _ extends Error {
                constructor(e) {
                    super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e
                }
            }
            class g extends Error {
                constructor(e, t) {
                    super(), this.message = "Failed to load static file for page: " + e + " " + t
                }
            }
            class m extends Error {
                constructor() {
                    super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
                }
            }

            function y(e) {
                return JSON.stringify({
                    message: e.message,
                    stack: e.stack
                })
            }
        },
        46214: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        u(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t, n) {
                return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, s = [],
                            o = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done) && (s.push(r.value), !t || s.length !== t); o = !0);
                        } catch (e) {
                            a = !0, i = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || f(e, t) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || f(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                }
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = f(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, o = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        a = !0, s = e
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                }
            }
            n.d(t, {
                ZP: function() {
                    return iA
                }
            });
            var v = {
                    DEBUG: !1,
                    LIB_VERSION: "1.143.0"
                },
                _ = Array.isArray,
                g = Object.prototype,
                m = g.hasOwnProperty,
                y = g.toString,
                b = _ || function(e) {
                    return "[object Array]" === y.call(e)
                },
                k = function(e) {
                    return "function" == typeof e
                },
                w = function(e) {
                    return e === Object(e) && !b(e)
                },
                x = function(e) {
                    if (w(e)) {
                        for (var t in e)
                            if (m.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                },
                S = function(e) {
                    return void 0 === e
                },
                E = function(e) {
                    return "[object String]" == y.call(e)
                },
                R = function(e) {
                    return E(e) && 0 === e.trim().length
                },
                P = function(e) {
                    return null === e
                },
                T = function(e) {
                    return S(e) || P(e)
                },
                I = function(e) {
                    return "[object Number]" == y.call(e)
                },
                C = function(e) {
                    return "[object Boolean]" === y.call(e)
                },
                O = "undefined" != typeof window ? window : void 0,
                F = "undefined" != typeof globalThis ? globalThis : O,
                N = Array.prototype,
                M = N.forEach,
                $ = N.indexOf,
                j = null == F ? void 0 : F.navigator,
                A = null == F ? void 0 : F.document,
                L = null == F ? void 0 : F.location,
                D = null == F ? void 0 : F.fetch,
                q = null != F && F.XMLHttpRequest && "withCredentials" in new F.XMLHttpRequest ? F.XMLHttpRequest : void 0,
                Z = null == F ? void 0 : F.AbortController,
                U = null == j ? void 0 : j.userAgent,
                B = null != O ? O : {},
                z = "[PostHog.js]",
                H = {
                    _log: function(e) {
                        if (O && (v.DEBUG || B.POSTHOG_DEBUG) && !S(O.console) && O.console) {
                            for (var t = ("__rrweb_original__" in O.console[e]) ? O.console[e].__rrweb_original__ : O.console[e], n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            t.apply(void 0, [z].concat(r))
                        }
                    },
                    info: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        H._log.apply(H, ["log"].concat(t))
                    },
                    warn: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        H._log.apply(H, ["warn"].concat(t))
                    },
                    error: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        H._log.apply(H, ["error"].concat(t))
                    },
                    critical: function() {
                        for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        (e = console).error.apply(e, [z].concat(n))
                    },
                    uninitializedWarning: function(e) {
                        H.error("You must initialize PostHog before calling ".concat(e))
                    }
                },
                W = {},
                V = function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                };

            function G(e, t, n) {
                if (b(e)) {
                    if (M && e.forEach === M) e.forEach(t, n);
                    else if ("length" in e && e.length === +e.length) {
                        for (var r = 0, i = e.length; r < i; r++)
                            if (r in e && t.call(n, e[r], r) === W) return
                    }
                }
            }

            function K(e, t, n) {
                if (!T(e)) {
                    if (b(e)) return G(e, t, n);
                    if (e instanceof FormData) {
                        var r, i = p(e.entries());
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var s = r.value;
                                if (t.call(n, s[1], s[0]) === W) return
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    } else
                        for (var o in e)
                            if (m.call(e, o) && t.call(n, e[o], o) === W) return
                }
            }
            var Y = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return G(n, function(t) {
                    for (var n in t) void 0 !== t[n] && (e[n] = t[n])
                }), e
            };

            function Q(e, t) {
                return -1 !== e.indexOf(t)
            }

            function J(e) {
                for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
                return r
            }
            var X, ee = function() {
                    return Date.now = Date.now || function() {
                        return +new Date
                    }, Date.now()
                },
                et = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                en = function(e) {
                    return function() {
                        try {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return e.apply(this, n)
                        } catch (e) {
                            H.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), H.critical(e)
                        }
                    }
                },
                er = function(e) {
                    var t = {};
                    return K(e, function(e, n) {
                        E(e) && e.length > 0 && (t[n] = e)
                    }), t
                },
                ei = function(e) {
                    return e.replace(/^\$/, "")
                },
                es = function(e) {
                    var t, n, r, i, s = "";
                    for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i = 0; i < r; i++) {
                        var o = e.charCodeAt(i),
                            a = null;
                        o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), P(a) || (n > t && (s += e.substring(t, n)), s += a, t = n = i + 1)
                    }
                    return n > t && (s += e.substring(t, e.length)), s
                },
                eo = function() {
                    function e(t) {
                        return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
                    }
                    return e.preventDefault = function() {
                            this.returnValue = !1
                        }, e.stopPropagation = function() {
                            this.cancelBubble = !0
                        },
                        function(t, n, r, i, s) {
                            if (t) {
                                if (t.addEventListener && !i) t.addEventListener(n, r, !!s);
                                else {
                                    var o = "on" + n,
                                        a = t[o];
                                    t[o] = function(n) {
                                        if (n = n || e(null == O ? void 0 : O.event)) {
                                            var i, s = !0;
                                            k(a) && (i = a(n));
                                            var o = r.call(t, n);
                                            return !1 !== i && !1 !== o || (s = !1), s
                                        }
                                    }
                                }
                            } else H.error("No valid element provided to register_event")
                        }
                }();

            function ea(e, t) {
                for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return e[n]
            }(eG = X || (X = {})).GZipJS = "gzip-js", eG.Base64 = "base64";
            var el = "$people_distinct_id",
                eu = "__alias",
                ec = "__timers",
                ed = "$autocapture_disabled_server_side",
                ef = "$heatmaps_enabled_server_side",
                eh = "$exception_capture_enabled_server_side",
                ep = "$web_vitals_enabled_server_side",
                ev = "$session_recording_enabled_server_side",
                e_ = "$console_log_recording_enabled_server_side",
                eg = "$session_recording_network_payload_capture",
                em = "$session_recording_canvas_recording",
                ey = "$replay_sample_rate",
                eb = "$replay_minimum_duration",
                ek = "$sesid",
                ew = "$session_is_sampled",
                ex = "$enabled_feature_flags",
                eS = "$early_access_features",
                eE = "$stored_person_properties",
                eR = "$stored_group_properties",
                eP = "$surveys",
                eT = "$surveys_activated",
                eI = "$flag_call_reported",
                eC = "$user_state",
                eO = "$client_session_props",
                eF = "$capture_rate_limit",
                eN = "$initial_campaign_params",
                eM = "$initial_referrer_info",
                e$ = "$initial_person_info",
                ej = "$epp",
                eA = "__POSTHOG_TOOLBAR__",
                eL = [el, eu, "__cmpns", ec, ev, ef, ek, ex, eC, eS, eR, eE, eP, eI, eO, eF, eN, eM, ej],
                eD = "$active_feature_flags",
                eq = "$override_feature_flags",
                eZ = "$feature_flag_payloads",
                eU = function(e) {
                    var t, n = {},
                        r = p(J(e || {}));
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var i = c(t.value, 2),
                                s = i[0],
                                o = i[1];
                            o && (n[s] = o)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return n
                },
                eB = function() {
                    function e(t) {
                        o(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
                    }
                    return l(e, [{
                        key: "getFlags",
                        value: function() {
                            return Object.keys(this.getFlagVariants())
                        }
                    }, {
                        key: "getFlagVariants",
                        value: function() {
                            var e = this.instance.get_property(ex),
                                t = this.instance.get_property(eq);
                            if (!t) return e || {};
                            for (var n = Y({}, e), r = Object.keys(t), i = 0; i < r.length; i++) n[r[i]] = t[r[i]];
                            return this._override_warning || (H.warn(" Overriding feature flags!", {
                                enabledFlags: e,
                                overriddenFlags: t,
                                finalFlags: n
                            }), this._override_warning = !0), n
                        }
                    }, {
                        key: "getFlagPayloads",
                        value: function() {
                            return this.instance.get_property(eZ) || {}
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
                        }
                    }, {
                        key: "setAnonymousDistinctId",
                        value: function(e) {
                            this.$anon_distinct_id = e
                        }
                    }, {
                        key: "setReloadingPaused",
                        value: function(e) {
                            this.reloadFeatureFlagsInAction = e
                        }
                    }, {
                        key: "resetRequestQueue",
                        value: function() {
                            this.reloadFeatureFlagsQueued = !1
                        }
                    }, {
                        key: "_startReloadTimer",
                        value: function() {
                            var e = this;
                            this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
                                !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
                            }, 5)
                        }
                    }, {
                        key: "_reloadFeatureFlagsRequest",
                        value: function() {
                            var e = this;
                            if (!this.instance.config.advanced_disable_feature_flags) {
                                this.setReloadingPaused(!0);
                                var t = this.instance.config.token,
                                    n = this.instance.get_property(eE),
                                    r = this.instance.get_property(eR),
                                    i = {
                                        token: t,
                                        distinct_id: this.instance.get_distinct_id(),
                                        groups: this.instance.getGroups(),
                                        $anon_distinct_id: this.$anon_distinct_id,
                                        person_properties: n,
                                        group_properties: r,
                                        disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
                                    };
                                this.instance._send_request({
                                    method: "POST",
                                    url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                    data: i,
                                    compression: this.instance.config.disable_compression ? void 0 : X.Base64,
                                    timeout: this.instance.config.feature_flag_request_timeout_ms,
                                    callback: function(t) {
                                        e.setReloadingPaused(!1);
                                        var n, r = !0;
                                        200 === t.statusCode && (e.$anon_distinct_id = void 0, r = !1), e.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, r), e._startReloadTimer()
                                    }
                                })
                            }
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
                                var n, r = this.getFlagVariants()[e],
                                    i = "".concat(r),
                                    s = this.instance.get_property(eI) || {};
                                return !t.send_event && "send_event" in t || e in s && s[e].includes(i) || (b(s[e]) ? s[e].push(i) : s[e] = [i], null === (n = this.instance.persistence) || void 0 === n || n.register(u({}, eI, s)), this.instance.capture("$feature_flag_called", {
                                    $feature_flag: e,
                                    $feature_flag_response: r
                                })), r
                            }
                            H.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            return this.getFlagPayloads()[e]
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                            H.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                        }
                    }, {
                        key: "addFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers.push(e)
                        }
                    }, {
                        key: "removeFeatureFlagsHandler",
                        value: function(e) {
                            this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t) {
                                return t !== e
                            })
                        }
                    }, {
                        key: "receivedFeatureFlags",
                        value: function(e, t) {
                            if (this.instance.persistence) {
                                this.instance.decideEndpointWasHit = !0;
                                var n = this.getFlagVariants(),
                                    r = this.getFlagPayloads();
                                (function(e, t) {
                                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        o = e.featureFlags,
                                        a = e.featureFlagPayloads;
                                    if (o) {
                                        if (b(o)) {
                                            var l, c = {};
                                            if (o)
                                                for (var d = 0; d < o.length; d++) c[o[d]] = !0;
                                            t && t.register((u(l = {}, eD, o), u(l, ex, c), l))
                                        } else {
                                            var f = o,
                                                h = a;
                                            e.errorsWhileComputingFlags && (f = i(i({}, r), f), h = i(i({}, s), h)), t && t.register((u(n = {}, eD, Object.keys(eU(f))), u(n, ex, f || {}), u(n, eZ, h || {}), n))
                                        }
                                    }
                                })(e, this.instance.persistence, n, r), this._fireFeatureFlagsCallbacks(t)
                            }
                        }
                    }, {
                        key: "override",
                        value: function(e) {
                            if (!this.instance.__loaded || !this.instance.persistence) return H.uninitializedWarning("posthog.feature_flags.override");
                            if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(eq);
                            else if (b(e)) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                                this.instance.persistence.register(u({}, eq, t))
                            } else this.instance.persistence.register(u({}, eq, e))
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            var t = this;
                            if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
                                var n = this._prepareFeatureFlagsForCallbacks();
                                e(n.flags, n.flagVariants)
                            }
                            return function() {
                                return t.removeFeatureFlagsHandler(e)
                            }
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            var n, r, s = u({}, "$feature_enrollment/".concat(e), t);
                            this.instance.capture("$feature_enrollment_update", {
                                $feature_flag: e,
                                $feature_enrollment: t,
                                $set: s
                            }), this.setPersonPropertiesForFlags(s, !1);
                            var o = i(i({}, this.getFlagVariants()), {}, u({}, e, t));
                            null === (n = this.instance.persistence) || void 0 === n || n.register((u(r = {}, eD, Object.keys(eU(o))), u(r, ex, o), r)), this._fireFeatureFlagsCallbacks()
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.instance.get_property(eS);
                            if (r && !n) return e(r);
                            this.instance._send_request({
                                transport: "XHR",
                                url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                                method: "GET",
                                callback: function(n) {
                                    var r;
                                    if (n.json) {
                                        var i = n.json.earlyAccessFeatures;
                                        return null === (r = t.instance.persistence) || void 0 === r || r.register(u({}, eS, i)), e(i)
                                    }
                                }
                            })
                        }
                    }, {
                        key: "_prepareFeatureFlagsForCallbacks",
                        value: function() {
                            var e = this.getFlags(),
                                t = this.getFlagVariants();
                            return {
                                flags: e.filter(function(e) {
                                    return t[e]
                                }),
                                flagVariants: Object.keys(t).filter(function(e) {
                                    return t[e]
                                }).reduce(function(e, n) {
                                    return e[n] = t[n], e
                                }, {})
                            }
                        }
                    }, {
                        key: "_fireFeatureFlagsCallbacks",
                        value: function(e) {
                            var t = this._prepareFeatureFlagsForCallbacks(),
                                n = t.flags,
                                r = t.flagVariants;
                            this.featureFlagEventHandlers.forEach(function(t) {
                                return t(n, r, {
                                    errorsLoading: e
                                })
                            })
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(eE) || {};
                            this.instance.register(u({}, eE, i(i({}, n), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.instance.unregister(eE)
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = this.instance.get_property(eR) || {};
                            0 !== Object.keys(n).length && Object.keys(n).forEach(function(t) {
                                n[t] = i(i({}, n[t]), e[t]), delete e[t]
                            }), this.instance.register(u({}, eR, i(i({}, n), e))), t && this.instance.reloadFeatureFlags()
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            if (e) {
                                var t = this.instance.get_property(eR) || {};
                                this.instance.register(u({}, eR, i(i({}, t), {}, u({}, e, {}))))
                            } else this.instance.unregister(eR)
                        }
                    }]), e
                }();
            Math.trunc || (Math.trunc = function(e) {
                return e < 0 ? Math.ceil(e) : Math.floor(e)
            }), Number.isInteger || (Number.isInteger = function(e) {
                return I(e) && isFinite(e) && Math.floor(e) === e
            });
            var ez = "0123456789abcdef",
                eH = function() {
                    function e(t) {
                        if (o(this, e), this.bytes = t, 16 !== t.length) throw TypeError("not 128-bit length")
                    }
                    return l(e, [{
                        key: "toString",
                        value: function() {
                            for (var e = "", t = 0; t < this.bytes.length; t++) e = e + ez.charAt(this.bytes[t] >>> 4) + ez.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                            if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
                            return e
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new e(this.bytes.slice(0))
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return 0 === this.compareTo(e)
                        }
                    }, {
                        key: "compareTo",
                        value: function(e) {
                            for (var t = 0; t < 16; t++) {
                                var n = this.bytes[t] - e.bytes[t];
                                if (0 !== n) return Math.sign(n)
                            }
                            return 0
                        }
                    }], [{
                        key: "fromFieldsV7",
                        value: function(t, n, r, i) {
                            if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || t < 0 || n < 0 || r < 0 || i < 0 || t > 0xffffffffffff || n > 4095 || r > 1073741823 || i > 4294967295) throw RangeError("invalid field value");
                            var s = new Uint8Array(16);
                            return s[0] = t / 1099511627776, s[1] = t / 4294967296, s[2] = t / 16777216, s[3] = t / 65536, s[4] = t / 256, s[5] = t, s[6] = 112 | n >>> 8, s[7] = n, s[8] = 128 | r >>> 24, s[9] = r >>> 16, s[10] = r >>> 8, s[11] = r, s[12] = i >>> 24, s[13] = i >>> 16, s[14] = i >>> 8, s[15] = i, new e(s)
                        }
                    }]), e
                }(),
                eW = function() {
                    function e() {
                        o(this, e), u(this, "timestamp", 0), u(this, "counter", 0), u(this, "random", new eQ)
                    }
                    return l(e, [{
                        key: "generate",
                        value: function() {
                            var e = this.generateOrAbort();
                            if (S(e)) {
                                this.timestamp = 0;
                                var t = this.generateOrAbort();
                                if (S(t)) throw Error("Could not generate UUID after timestamp reset");
                                return t
                            }
                            return e
                        }
                    }, {
                        key: "generateOrAbort",
                        value: function() {
                            var e = Date.now();
                            if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                            else {
                                if (!(e + 1e4 > this.timestamp)) return;
                                this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                            }
                            return eH.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 1073741824), 1073741823 & this.counter, this.random.nextUint32())
                        }
                    }, {
                        key: "resetCounter",
                        value: function() {
                            this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                        }
                    }]), e
                }(),
                eV = function(e) {
                    if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
                    for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
                    return e
                };
            O && !S(O.crypto) && crypto.getRandomValues && (eV = function(e) {
                return crypto.getRandomValues(e)
            });
            var eG, eK, eY, eQ = function() {
                    function e() {
                        o(this, e), u(this, "buffer", new Uint32Array(8)), u(this, "cursor", 1 / 0)
                    }
                    return l(e, [{
                        key: "nextUint32",
                        value: function() {
                            return this.cursor >= this.buffer.length && (eV(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                        }
                    }]), e
                }(),
                eJ = function() {
                    return eX().toString()
                },
                eX = function() {
                    return (eK || (eK = new eW)).generate()
                },
                e0 = "",
                e1 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
                e2 = {
                    is_supported: function() {
                        return !!A
                    },
                    error: function(e) {
                        H.error("cookieStore error: " + e)
                    },
                    get: function(e) {
                        if (A) {
                            try {
                                for (var t = e + "=", n = A.cookie.split(";").filter(function(e) {
                                        return e.length
                                    }), r = 0; r < n.length; r++) {
                                    for (var i = n[r];
                                        " " == i.charAt(0);) i = i.substring(1, i.length);
                                    if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                                }
                            } catch (e) {}
                            return null
                        }
                    },
                    parse: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e2.get(e)) || {}
                        } catch (e) {}
                        return t
                    },
                    set: function(e, t, n, r, i) {
                        if (A) try {
                            var s = "",
                                o = "",
                                a = function(e, t) {
                                    if (t) {
                                        var n = function(e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A;
                                            if (e0) return e0;
                                            if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                            for (var n = e.split("."), r = Math.min(n.length, 8), i = "dmn_chk_" + eJ(), s = RegExp("(^|;)\\s*" + i + "=1"); !e0 && r--;) {
                                                var o = n.slice(r).join("."),
                                                    a = i + "=1;domain=." + o;
                                                t.cookie = a, s.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", e0 = o)
                                            }
                                            return e0
                                        }(e);
                                        if (!n) {
                                            var r, i = (r = e.match(e1)) ? r[0] : "";
                                            i !== n && H.info("Warning: cookie subdomain discovery mismatch", i, n), n = i
                                        }
                                        return n ? "; domain=." + n : ""
                                    }
                                    return ""
                                }(A.location.hostname, r);
                            if (n) {
                                var l = new Date;
                                l.setTime(l.getTime() + 24 * n * 36e5), s = "; expires=" + l.toUTCString()
                            }
                            i && (o = "; secure");
                            var u = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + a + o;
                            return u.length > 3686.4 && H.warn("cookieStore warning: large cookie, len=" + u.length), A.cookie = u, u
                        } catch (e) {
                            return
                        }
                    },
                    remove: function(e, t) {
                        try {
                            e2.set(e, "", -1, t)
                        } catch (e) {
                            return
                        }
                    }
                },
                e3 = null,
                e5 = {
                    is_supported: function() {
                        if (!P(e3)) return e3;
                        var e = !0;
                        if (S(O)) e = !1;
                        else try {
                            var t = "__mplssupport__";
                            e5.set(t, "xyz"), '"xyz"' !== e5.get(t) && (e = !1), e5.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e || H.error("localStorage unsupported; falling back to cookie store"), e3 = e, e
                    },
                    error: function(e) {
                        H.error("localStorage error: " + e)
                    },
                    get: function(e) {
                        try {
                            return null == O ? void 0 : O.localStorage.getItem(e)
                        } catch (e) {
                            e5.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(e5.get(e)) || {}
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == O || O.localStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            e5.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == O || O.localStorage.removeItem(e)
                        } catch (e) {
                            e5.error(e)
                        }
                    }
                },
                e6 = ["distinct_id", ek, ew, ej],
                e4 = i(i({}, e5), {}, {
                    parse: function(e) {
                        try {
                            var t = {};
                            try {
                                t = e2.parse(e) || {}
                            } catch (e) {}
                            var n = Y(t, JSON.parse(e5.get(e) || "{}"));
                            return e5.set(e, n), n
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t, n, r, i) {
                        try {
                            e5.set(e, t);
                            var s = {};
                            e6.forEach(function(e) {
                                t[e] && (s[e] = t[e])
                            }), Object.keys(s).length && e2.set(e, s, n, r, i)
                        } catch (e) {
                            e5.error(e)
                        }
                    },
                    remove: function(e, t) {
                        try {
                            null == O || O.localStorage.removeItem(e), e2.remove(e, t)
                        } catch (e) {
                            e5.error(e)
                        }
                    }
                }),
                e9 = {},
                e8 = {
                    is_supported: function() {
                        return !0
                    },
                    error: function(e) {
                        H.error("memoryStorage error: " + e)
                    },
                    get: function(e) {
                        return e9[e] || null
                    },
                    parse: function(e) {
                        return e9[e] || null
                    },
                    set: function(e, t) {
                        e9[e] = t
                    },
                    remove: function(e) {
                        delete e9[e]
                    }
                },
                e7 = null,
                te = {
                    is_supported: function() {
                        if (!P(e7)) return e7;
                        if (e7 = !0, S(O)) e7 = !1;
                        else try {
                            var e = "__support__";
                            te.set(e, "xyz"), '"xyz"' !== te.get(e) && (e7 = !1), te.remove(e)
                        } catch (e) {
                            e7 = !1
                        }
                        return e7
                    },
                    error: function(e) {
                        H.error("sessionStorage error: ", e)
                    },
                    get: function(e) {
                        try {
                            return null == O ? void 0 : O.sessionStorage.getItem(e)
                        } catch (e) {
                            te.error(e)
                        }
                        return null
                    },
                    parse: function(e) {
                        try {
                            return JSON.parse(te.get(e)) || null
                        } catch (e) {}
                        return null
                    },
                    set: function(e, t) {
                        try {
                            null == O || O.sessionStorage.setItem(e, JSON.stringify(t))
                        } catch (e) {
                            te.error(e)
                        }
                    },
                    remove: function(e) {
                        try {
                            null == O || O.sessionStorage.removeItem(e)
                        } catch (e) {
                            te.error(e)
                        }
                    }
                },
                tt = ["localhost", "127.0.0.1"],
                tn = function(e) {
                    var t = null == A ? void 0 : A.createElement("a");
                    return S(t) ? null : (t.href = e, t)
                },
                tr = function(e, t) {
                    return !! function(e) {
                        try {
                            new RegExp(e)
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }(t) && new RegExp(t).test(e)
                },
                ti = function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                        i = [];
                    return K(e, function(e, r) {
                        S(e) || S(r) || "undefined" === r || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()), n = encodeURIComponent(r), i[i.length] = n + "=" + t)
                    }), i.join(r)
                },
                ts = function(e, t) {
                    for (var n, r = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), i = 0; i < r.length; i++) {
                        var s = r[i].split("=");
                        if (s[0] === t) {
                            n = s;
                            break
                        }
                    }
                    if (!b(n) || n.length < 2) return "";
                    var o = n[1];
                    try {
                        o = decodeURIComponent(o)
                    } catch (e) {
                        H.error("Skipping decoding for malformed query param: " + o)
                    }
                    return o.replace(/\+/g, " ")
                },
                to = function(e, t) {
                    var n = e.match(RegExp(t + "=([^&]*)"));
                    return n ? n[1] : null
                },
                ta = "Mobile",
                tl = "Android",
                tu = "Tablet",
                tc = tl + " " + tu,
                td = "iPad",
                tf = "Apple",
                th = tf + " Watch",
                tp = "Safari",
                tv = "BlackBerry",
                t_ = "Samsung",
                tg = t_ + "Browser",
                tm = t_ + " Internet",
                ty = "Chrome",
                tb = ty + " OS",
                tk = ty + " iOS",
                tw = "Internet Explorer",
                tx = tw + " " + ta,
                tS = "Opera",
                tE = tS + " Mini",
                tR = "Edge",
                tP = "Microsoft " + tR,
                tT = "Firefox",
                tI = tT + " iOS",
                tC = "Nintendo",
                tO = "PlayStation",
                tF = "Xbox",
                tN = tl + " " + ta,
                tM = ta + " " + tp,
                t$ = "Windows",
                tj = t$ + " Phone",
                tA = "Nokia",
                tL = "Ouya",
                tD = "Generic",
                tq = tD + " " + ta.toLowerCase(),
                tZ = tD + " " + tu.toLowerCase(),
                tU = "Konqueror",
                tB = "(\\d+(\\.\\d+)?)",
                tz = RegExp("Version/" + tB),
                tH = RegExp(tF, "i"),
                tW = RegExp(tO + " \\w+", "i"),
                tV = RegExp(tC + " \\w+", "i"),
                tG = RegExp(tv + "|PlayBook|BB10", "i"),
                tK = {
                    "NT3.51": "NT 3.11",
                    "NT4.0": "NT 4.0",
                    "5.0": "2000",
                    5.1: "XP",
                    5.2: "XP",
                    "6.0": "Vista",
                    6.1: "7",
                    6.2: "8",
                    6.3: "8.1",
                    6.4: "10",
                    "10.0": "10"
                },
                tY = function(e, t) {
                    var n, r;
                    return t = t || "", Q(e, " OPR/") && Q(e, "Mini") ? tE : Q(e, " OPR/") ? tS : tG.test(e) ? tv : Q(e, "IE" + ta) || Q(e, "WPDesktop") ? tx : Q(e, tg) ? tm : Q(e, tR) || Q(e, "Edg/") ? tP : Q(e, "FBIOS") ? "Facebook " + ta : Q(e, "UCWEB") || Q(e, "UCBrowser") ? "UC Browser" : Q(e, "CriOS") ? tk : Q(e, "CrMo") ? ty : Q(e, tl) && Q(e, tp) ? tN : Q(e, ty) ? ty : Q(e, "FxiOS") ? tI : Q(e.toLowerCase(), tU.toLowerCase()) ? tU : (n = e, (r = t) && Q(r, tf) || Q(n, tp) && !Q(n, ty) && !Q(n, tl)) ? Q(e, ta) ? tM : tp : Q(e, tT) ? tT : Q(e, "MSIE") || Q(e, "Trident/") ? tw : Q(e, "Gecko") ? tT : ""
                },
                tQ = (u(eY = {}, tx, [RegExp("rv:" + tB)]), u(eY, tP, [RegExp(tR + "?\\/" + tB)]), u(eY, ty, [RegExp("(" + ty + "|CrMo)\\/" + tB)]), u(eY, tk, [RegExp("CriOS\\/" + tB)]), u(eY, "UC Browser", [RegExp("(UCBrowser|UCWEB)\\/" + tB)]), u(eY, tp, [tz]), u(eY, tM, [tz]), u(eY, tS, [RegExp("(Opera|OPR)\\/" + tB)]), u(eY, tT, [RegExp(tT + "\\/" + tB)]), u(eY, tI, [RegExp("FxiOS\\/" + tB)]), u(eY, tU, [RegExp("Konqueror[:/]?" + tB, "i")]), u(eY, tv, [RegExp(tv + " " + tB), tz]), u(eY, tN, [RegExp("android\\s" + tB, "i")]), u(eY, tm, [RegExp(tg + "\\/" + tB)]), u(eY, tw, [RegExp("(rv:|MSIE )" + tB)]), u(eY, "Mozilla", [RegExp("rv:" + tB)]), eY),
                tJ = [
                    [RegExp(tF + "; " + tF + " (.*?)[);]", "i"), function(e) {
                        return [tF, e && e[1] || ""]
                    }],
                    [RegExp(tC, "i"), [tC, ""]],
                    [RegExp(tO, "i"), [tO, ""]],
                    [tG, [tv, ""]],
                    [RegExp(t$, "i"), function(e, t) {
                        if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tj, ""];
                        if (new RegExp(ta).test(t) && !/IEMobile\b/.test(t)) return [t$ + " " + ta, ""];
                        var n = /Windows NT ([0-9.]+)/i.exec(t);
                        if (n && n[1]) {
                            var r = tK[n[1]] || "";
                            return /arm/i.test(t) && (r = "RT"), [t$, r]
                        }
                        return [t$, ""]
                    }],
                    [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
                        return e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]
                    }],
                    [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
                        var t = "";
                        return e && e.length >= 3 && (t = S(e[2]) ? e[3] : e[2]), ["watchOS", t]
                    }],
                    [RegExp("(" + tl + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + tl + ")", "i"), function(e) {
                        return e && e[2] ? [tl, [e[2], e[3], e[4] || "0"].join(".")] : [tl, ""]
                    }],
                    [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
                        var t = ["Mac OS X", ""];
                        if (e && e[1]) {
                            var n = [e[1], e[2], e[3] || "0"];
                            t[1] = n.join(".")
                        }
                        return t
                    }],
                    [/Mac/i, ["Mac OS X", ""]],
                    [/CrOS/, [tb, ""]],
                    [/Linux|debian/i, ["Linux", ""]]
                ],
                tX = function(e) {
                    return tV.test(e) ? tC : tW.test(e) ? tO : tH.test(e) ? tF : RegExp(tL, "i").test(e) ? tL : RegExp("(" + tj + "|WPDesktop)", "i").test(e) ? tj : /iPad/.test(e) ? td : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? th : tG.test(e) ? tv : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(tA, "i").test(e) ? tA : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(ta).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? tl : tc : tl : RegExp("(pda|" + ta + ")", "i").test(e) ? tq : RegExp(tu, "i").test(e) && !RegExp(tu + " pc", "i").test(e) ? tZ : ""
                },
                t0 = "https?://(.*)",
                t1 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid"],
                t2 = {
                    campaignParams: function(e) {
                        return A ? this._campaignParamsFromUrl(A.URL, e) : {}
                    },
                    _campaignParamsFromUrl: function(e, t) {
                        var n = t1.concat(t || []),
                            r = {};
                        return K(n, function(t) {
                            var n = ts(e, t);
                            n && (r[t] = n)
                        }), r
                    },
                    _searchEngine: function(e) {
                        return e ? 0 === e.search(t0 + "google.([^/?]*)") ? "google" : 0 === e.search(t0 + "bing.com") ? "bing" : 0 === e.search(t0 + "yahoo.com") ? "yahoo" : 0 === e.search(t0 + "duckduckgo.com") ? "duckduckgo" : null : null
                    },
                    _searchInfoFromReferrer: function(e) {
                        var t = t2._searchEngine(e),
                            n = {};
                        if (!P(t)) {
                            n.$search_engine = t;
                            var r = A ? ts(A.referrer, "yahoo" != t ? "q" : "p") : "";
                            r.length && (n.ph_keyword = r)
                        }
                        return n
                    },
                    searchInfo: function() {
                        var e = null == A ? void 0 : A.referrer;
                        return e ? this._searchInfoFromReferrer(e) : {}
                    },
                    browser: tY,
                    browserVersion: function(e, t) {
                        var n = tQ[tY(e, t)];
                        if (S(n)) return null;
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                                s = e.match(i);
                            if (s) return parseFloat(s[s.length - 2])
                        }
                        return null
                    },
                    browserLanguage: function() {
                        return navigator.language || navigator.userLanguage
                    },
                    os: function(e) {
                        for (var t = 0; t < tJ.length; t++) {
                            var n = c(tJ[t], 2),
                                r = n[0],
                                i = n[1],
                                s = r.exec(e),
                                o = s && (k(i) ? i(s, e) : i);
                            if (o) return o
                        }
                        return ["", ""]
                    },
                    device: tX,
                    deviceType: function(e) {
                        var t = tX(e);
                        return t === td || t === tc || "Kobo" === t || "Kindle Fire" === t || t === tZ ? tu : t === tC || t === tF || t === tO || t === tL ? "Console" : t === th ? "Wearable" : t ? ta : "Desktop"
                    },
                    referrer: function() {
                        return (null == A ? void 0 : A.referrer) || "$direct"
                    },
                    referringDomain: function() {
                        var e;
                        return null != A && A.referrer && (null === (e = tn(A.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
                    },
                    referrerInfo: function() {
                        return {
                            $referrer: this.referrer(),
                            $referring_domain: this.referringDomain()
                        }
                    },
                    initialPersonInfo: function() {
                        return {
                            r: this.referrer(),
                            u: null == L ? void 0 : L.href
                        }
                    },
                    initialPersonPropsFromInfo: function(e) {
                        var t, n = e.r,
                            r = e.u,
                            i = {
                                $initial_referrer: n,
                                $initial_referring_domain: null == n ? void 0 : "$direct" == n ? "$direct" : null === (t = tn(n)) || void 0 === t ? void 0 : t.host
                            };
                        if (r) {
                            i.$initial_current_url = r;
                            var s = tn(r);
                            i.$initial_host = null == s ? void 0 : s.host, i.$initial_pathname = null == s ? void 0 : s.pathname, K(this._campaignParamsFromUrl(r), function(e, t) {
                                i["$initial_" + ei(t)] = e
                            })
                        }
                        return n && K(this._searchInfoFromReferrer(n), function(e, t) {
                            i["$initial_" + ei(t)] = e
                        }), i
                    },
                    properties: function() {
                        if (!U) return {};
                        var e = c(t2.os(U), 2);
                        return Y(er({
                            $os: e[0],
                            $os_version: e[1],
                            $browser: t2.browser(U, navigator.vendor),
                            $device: t2.device(U),
                            $device_type: t2.deviceType(U)
                        }), {
                            $current_url: null == L ? void 0 : L.href,
                            $host: null == L ? void 0 : L.host,
                            $pathname: null == L ? void 0 : L.pathname,
                            $raw_user_agent: U.length > 1e3 ? U.substring(0, 997) + "..." : U,
                            $browser_version: t2.browserVersion(U, navigator.vendor),
                            $browser_language: t2.browserLanguage(),
                            $screen_height: null == O ? void 0 : O.screen.height,
                            $screen_width: null == O ? void 0 : O.screen.width,
                            $viewport_height: null == O ? void 0 : O.innerHeight,
                            $viewport_width: null == O ? void 0 : O.innerWidth,
                            $lib: "web",
                            $lib_version: v.LIB_VERSION,
                            $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                            $time: ee() / 1e3
                        })
                    },
                    people_properties: function() {
                        if (!U) return {};
                        var e = c(t2.os(U), 2);
                        return Y(er({
                            $os: e[0],
                            $os_version: e[1],
                            $browser: t2.browser(U, navigator.vendor)
                        }), {
                            $browser_version: t2.browserVersion(U, navigator.vendor)
                        })
                    }
                },
                t3 = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
                t5 = function() {
                    function e(t) {
                        var n;
                        o(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = (n = "", t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + n + "_posthog"), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), this.save()
                    }
                    return l(e, [{
                        key: "buildStorage",
                        value: function(e) {
                            -1 === t3.indexOf(e.persistence.toLowerCase()) && (H.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
                            var t = e.persistence.toLowerCase();
                            return "localstorage" === t && e5.is_supported() ? e5 : "localstorage+cookie" === t && e4.is_supported() ? e4 : "sessionstorage" === t && te.is_supported() ? te : "memory" === t ? e8 : "cookie" === t ? e2 : e4.is_supported() ? e4 : e2
                        }
                    }, {
                        key: "properties",
                        value: function() {
                            var e = {};
                            return K(this.props, function(t, n) {
                                if (n === ex && w(t))
                                    for (var r, i = Object.keys(t), s = 0; s < i.length; s++) e["$feature/".concat(i[s])] = t[i[s]];
                                else r = !1, (P(eL) ? r : $ && eL.indexOf === $ ? -1 != eL.indexOf(n) : (K(eL, function(e) {
                                    if (r || (r = e === n)) return W
                                }), r)) || (e[n] = t)
                            }), e
                        }
                    }, {
                        key: "load",
                        value: function() {
                            if (!this.disabled) {
                                var e = this.storage.parse(this.name);
                                e && (this.props = Y({}, e))
                            }
                        }
                    }, {
                        key: "save",
                        value: function() {
                            this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.remove(), this.props = {}
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, n) {
                            var r = this;
                            if (w(e)) {
                                S(t) && (t = "None"), this.expire_days = S(n) ? this.default_expiry : n;
                                var i = !1;
                                if (K(e, function(e, n) {
                                        r.props.hasOwnProperty(n) && r.props[n] !== t || (r.props[n] = e, i = !0)
                                    }), i) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var n = this;
                            if (w(e)) {
                                this.expire_days = S(t) ? this.default_expiry : t;
                                var r = !1;
                                if (K(e, function(t, i) {
                                        e.hasOwnProperty(i) && n.props[i] !== t && (n.props[i] = t, r = !0)
                                    }), r) return this.save(), !0
                            }
                            return !1
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            e in this.props && (delete this.props[e], this.save())
                        }
                    }, {
                        key: "update_campaign_params",
                        value: function() {
                            this.campaign_params_saved || (this.register(t2.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = !0)
                        }
                    }, {
                        key: "update_search_keyword",
                        value: function() {
                            this.register(t2.searchInfo())
                        }
                    }, {
                        key: "update_referrer_info",
                        value: function() {
                            this.register(t2.referrerInfo())
                        }
                    }, {
                        key: "set_initial_person_info",
                        value: function() {
                            this.props[eN] || this.props[eM] || this.register_once(u({}, e$, t2.initialPersonInfo()), void 0)
                        }
                    }, {
                        key: "get_referrer_info",
                        value: function() {
                            return er({
                                $referrer: this.props.$referrer,
                                $referring_domain: this.props.$referring_domain
                            })
                        }
                    }, {
                        key: "get_initial_props",
                        value: function() {
                            var e = this,
                                t = {};
                            K([eM, eN], function(n) {
                                var r = e.props[n];
                                r && K(r, function(e, n) {
                                    t["$initial_" + ei(n)] = e
                                })
                            });
                            var n = this.props[e$];
                            return n && Y(t, t2.initialPersonPropsFromInfo(n)), t
                        }
                    }, {
                        key: "safe_merge",
                        value: function(e) {
                            return K(this.props, function(t, n) {
                                n in e || (e[n] = t)
                            }), e
                        }
                    }, {
                        key: "update_config",
                        value: function(e, t) {
                            if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
                                var n = this.buildStorage(e),
                                    r = this.props;
                                this.clear(), this.storage = n, this.props = r, this.save()
                            }
                        }
                    }, {
                        key: "set_disabled",
                        value: function(e) {
                            this.disabled = e, this.disabled ? this.remove() : this.save()
                        }
                    }, {
                        key: "set_cross_subdomain",
                        value: function(e) {
                            e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                        }
                    }, {
                        key: "get_cross_subdomain",
                        value: function() {
                            return !!this.cross_subdomain
                        }
                    }, {
                        key: "set_secure",
                        value: function(e) {
                            e !== this.secure && (this.secure = e, this.remove(), this.save())
                        }
                    }, {
                        key: "set_event_timer",
                        value: function(e, t) {
                            var n = this.props[ec] || {};
                            n[e] = t, this.props[ec] = n, this.save()
                        }
                    }, {
                        key: "remove_event_timer",
                        value: function(e) {
                            var t = (this.props[ec] || {})[e];
                            return S(t) || (delete this.props[ec][e], this.save()), t
                        }
                    }, {
                        key: "get_property",
                        value: function(e) {
                            return this.props[e]
                        }
                    }, {
                        key: "set_property",
                        value: function(e, t) {
                            this.props[e] = t, this.save()
                        }
                    }]), e
                }(),
                t6 = ((nR = t6 || {})[nR.DomContentLoaded = 0] = "DomContentLoaded", nR[nR.Load = 1] = "Load", nR[nR.FullSnapshot = 2] = "FullSnapshot", nR[nR.IncrementalSnapshot = 3] = "IncrementalSnapshot", nR[nR.Meta = 4] = "Meta", nR[nR.Custom = 5] = "Custom", nR[nR.Plugin = 6] = "Plugin", nR),
                t4 = ((nP = t4 || {})[nP.Mutation = 0] = "Mutation", nP[nP.MouseMove = 1] = "MouseMove", nP[nP.MouseInteraction = 2] = "MouseInteraction", nP[nP.Scroll = 3] = "Scroll", nP[nP.ViewportResize = 4] = "ViewportResize", nP[nP.Input = 5] = "Input", nP[nP.TouchMove = 6] = "TouchMove", nP[nP.MediaInteraction = 7] = "MediaInteraction", nP[nP.StyleSheetRule = 8] = "StyleSheetRule", nP[nP.CanvasMutation = 9] = "CanvasMutation", nP[nP.Font = 10] = "Font", nP[nP.Log = 11] = "Log", nP[nP.Drag = 12] = "Drag", nP[nP.StyleDeclaration = 13] = "StyleDeclaration", nP[nP.Selection = 14] = "Selection", nP[nP.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", nP[nP.CustomElement = 16] = "CustomElement", nP);

            function t9(e) {
                return e ? V(e).split(/\s+/) : []
            }

            function t8(e) {
                var t = "";
                switch (s(e.className)) {
                    case "string":
                        t = e.className;
                        break;
                    case "object":
                        t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                        break;
                    default:
                        t = ""
                }
                return t9(t)
            }

            function t7(e) {
                return T(e) ? null : V(e).split(/(\s+)/).filter(function(e) {
                    return nv(e)
                }).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
            }

            function ne(e) {
                var t = "";
                return na(e) && !nl(e) && e.childNodes && e.childNodes.length && K(e.childNodes, function(e) {
                    var n;
                    nr(e) && e.textContent && (t += null !== (n = t7(e.textContent)) && void 0 !== n ? n : "")
                }), V(t)
            }

            function nt(e) {
                return !!e && 1 === e.nodeType
            }

            function nn(e, t) {
                return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
            }

            function nr(e) {
                return !!e && 3 === e.nodeType
            }

            function ni(e) {
                return !!e && 11 === e.nodeType
            }
            var ns = ["a", "button", "form", "input", "select", "textarea", "label"];

            function no(e) {
                var t = e.parentNode;
                return !(!t || !nt(t)) && t
            }

            function na(e) {
                for (var t = e; t.parentNode && !nn(t, "body"); t = t.parentNode) {
                    var n = t8(t);
                    if (Q(n, "ph-sensitive") || Q(n, "ph-no-capture")) return !1
                }
                if (Q(t8(e), "ph-include")) return !0;
                var r = e.type || "";
                if (E(r)) switch (r.toLowerCase()) {
                    case "hidden":
                    case "password":
                        return !1
                }
                var i = e.name || e.id || "";
                return !(E(i) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")))
            }

            function nl(e) {
                return !!(nn(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || nn(e, "select") || nn(e, "textarea") || "true" === e.getAttribute("contenteditable"))
            }
            var nu = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
                nc = new RegExp("^(?:".concat(nu, ")$")),
                nd = new RegExp(nu),
                nf = "\\d{3}-?\\d{2}-?\\d{4}",
                nh = new RegExp("^(".concat(nf, ")$")),
                np = new RegExp("(".concat(nf, ")"));

            function nv(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return !(T(e) || E(e) && (e = V(e), (t ? nc : nd).test((e || "").replace(/[- ]/g, "")) || (t ? nh : np).test(e)))
            }

            function n_(e) {
                var t = ne(e);
                return nv(t = "".concat(t, " ").concat(function e(t) {
                    var n = "";
                    return t && t.childNodes && t.childNodes.length && K(t.childNodes, function(t) {
                        var r;
                        if (t && "span" === (null === (r = t.tagName) || void 0 === r ? void 0 : r.toLowerCase())) try {
                            var i = ne(t);
                            n = "".concat(n, " ").concat(i).trim(), t.childNodes && t.childNodes.length && (n = "".concat(n, " ").concat(e(t)).trim())
                        } catch (e) {
                            H.error(e)
                        }
                    }), n
                }(e)).trim()) ? t : ""
            }

            function ng(e) {
                return e.replace(/"|\\"/g, '\\"')
            }
            var nm = "[SessionRecording]",
                ny = "redacted",
                nb = {
                    initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
                    maskRequestFn: function(e) {
                        return e
                    },
                    recordHeaders: !1,
                    recordBody: !1,
                    recordInitialRequests: !1,
                    recordPerformance: !1,
                    performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
                    payloadSizeLimitBytes: 1e6
                },
                nk = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
                nw = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
                nx = ["/s/", "/e/", "/i/"];

            function nS(e, t, n, r) {
                if (T(e)) return e;
                var i = (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
                return E(i) && (i = parseInt(i)), i > n ? nm + " ".concat(r, " body too large to record (").concat(i, " bytes)") : e
            }

            function nE(e, t) {
                if (T(e)) return e;
                var n = e;
                return nv(n, !1) || (n = nm + " " + t + " body " + ny), K(nw, function(e) {
                    var r, i;
                    null !== (r = n) && void 0 !== r && r.length && -1 !== (null === (i = n) || void 0 === i ? void 0 : i.indexOf(e)) && (n = nm + " " + t + " body " + ny + " as might contain: " + e)
                }), n
            }
            var nR, nP, nT, nI = function(e, t) {
                    var n, r, s = {
                            payloadSizeLimitBytes: nb.payloadSizeLimitBytes,
                            performanceEntryTypeToObserve: d(nb.performanceEntryTypeToObserve)
                        },
                        o = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
                        a = !1 !== e.session_recording.recordBody && t.recordBody,
                        l = !1 !== e.capture_performance && t.recordPerformance,
                        u = (r = Math.min(1e6, null !== (n = s.payloadSizeLimitBytes) && void 0 !== n ? n : 1e6), function(e) {
                            return null != e && e.requestBody && (e.requestBody = nS(e.requestBody, e.requestHeaders, r, "Request")), null != e && e.responseBody && (e.responseBody = nS(e.responseBody, e.responseHeaders, r, "Response")), e
                        }),
                        c = function(e) {
                            var t;
                            return u(function(e) {
                                var t = tn(e.name);
                                if (!(t && t.pathname && nx.some(function(e) {
                                        return 0 === t.pathname.indexOf(e)
                                    }))) return e
                            }((T(t = e.requestHeaders) || K(Object.keys(null != t ? t : {}), function(e) {
                                nk.includes(e.toLowerCase()) && (t[e] = ny)
                            }), e)))
                        },
                        f = k(e.session_recording.maskNetworkRequestFn);
                    return f && k(e.session_recording.maskCapturedNetworkRequestFn) && H.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), f && (e.session_recording.maskCapturedNetworkRequestFn = function(t) {
                        var n = e.session_recording.maskNetworkRequestFn({
                            url: t.name
                        });
                        return i(i({}, t), {}, {
                            name: null == n ? void 0 : n.url
                        })
                    }), s.maskRequestFn = k(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
                        var n, r, i, s = c(t);
                        return s && null !== (n = null === (r = (i = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === r ? void 0 : r.call(i, s)) && void 0 !== n ? n : void 0
                    } : function(e) {
                        return function(e) {
                            if (!S(e)) return e.requestBody = nE(e.requestBody, "Request"), e.responseBody = nE(e.responseBody, "Response"), e
                        }(c(e))
                    }, i(i(i({}, nb), s), {}, {
                        recordHeaders: o,
                        recordBody: a,
                        recordPerformance: l,
                        recordInitialRequests: l
                    })
                },
                nC = l(function e(t) {
                    var n, r, i = this,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), u(this, "bucketSize", 100), u(this, "refillRate", 10), u(this, "mutationBuckets", {}), u(this, "loggedTracker", {}), u(this, "refillBuckets", function() {
                        Object.keys(i.mutationBuckets).forEach(function(e) {
                            i.mutationBuckets[e] = i.mutationBuckets[e] + i.refillRate, i.mutationBuckets[e] >= i.bucketSize && delete i.mutationBuckets[e]
                        })
                    }), u(this, "getNodeOrRelevantParent", function(e) {
                        var t = i.rrweb.mirror.getNode(e);
                        if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                            var n = t.closest("svg");
                            if (n) return [i.rrweb.mirror.getId(n), n]
                        }
                        return [e, t]
                    }), u(this, "numberOfChanges", function(e) {
                        var t, n, r, i, s, o, a, l;
                        return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (r = null === (i = e.attributes) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (l = e.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0)
                    }), u(this, "throttleMutations", function(e) {
                        if (3 !== e.type || 0 !== e.data.source) return e;
                        var t = e.data,
                            n = i.numberOfChanges(t);
                        t.attributes && (t.attributes = t.attributes.filter(function(e) {
                            var t, n, r, s = c(i.getNodeOrRelevantParent(e.id), 2),
                                o = s[0],
                                a = s[1];
                            return 0 !== i.mutationBuckets[o] && (i.mutationBuckets[o] = null !== (t = i.mutationBuckets[o]) && void 0 !== t ? t : i.bucketSize, i.mutationBuckets[o] = Math.max(i.mutationBuckets[o] - 1, 0), 0 === i.mutationBuckets[o] && (i.loggedTracker[o] || (i.loggedTracker[o] = !0, null === (n = (r = i.options).onBlockedNode) || void 0 === n || n.call(r, o, a))), e)
                        }));
                        var r = i.numberOfChanges(t);
                        return 0 !== r || n === r ? e : void 0
                    }), this.rrweb = t, this.options = s, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize, setInterval(function() {
                        i.refillBuckets()
                    }, 1e3)
                }),
                nO = [t4.MouseMove, t4.MouseInteraction, t4.Scroll, t4.ViewportResize, t4.Input, t4.TouchMove, t4.MediaInteraction, t4.Drag],
                nF = function(e) {
                    return {
                        rrwebMethod: e,
                        enqueuedAt: Date.now(),
                        attempt: 1
                    }
                },
                nN = "[SessionRecording]",
                nM = function() {
                    function e(t) {
                        var n = this;
                        if (o(this, e), u(this, "queuedRRWebEvents", []), u(this, "isIdle", !1), u(this, "_linkedFlagSeen", !1), u(this, "_lastActivityTimestamp", Date.now()), u(this, "_linkedFlag", null), u(this, "_forceAllowLocalhostNetworkCapture", !1), u(this, "_samplingSessionListener", null), this.instance = t, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == O || O.addEventListener("beforeunload", function() {
                                n._flushBuffer()
                            }), null == O || O.addEventListener("offline", function() {
                                n._tryAddCustomEvent("browser offline", {})
                            }), null == O || O.addEventListener("online", function() {
                                n._tryAddCustomEvent("browser online", {})
                            }), null == O || O.addEventListener("visibilitychange", function() {
                                if (null != A && A.visibilityState) {
                                    var e = "window " + A.visibilityState;
                                    n._tryAddCustomEvent(e, {})
                                }
                            }), !this.instance.sessionManager) throw H.error(nN + " started without valid sessionManager"), Error(nN + " started without valid sessionManager. This is a bug.");
                        var r = this.sessionManager.checkAndGetSessionAndWindowId(),
                            i = r.sessionId,
                            s = r.windowId;
                        this.sessionId = i, this.windowId = s, this.buffer = this.clearBuffer(), this._setupSampling()
                    }
                    return l(e, [{
                        key: "rrwebRecord",
                        get: function() {
                            var e;
                            return null == B || null === (e = B.rrweb) || void 0 === e ? void 0 : e.record
                        }
                    }, {
                        key: "started",
                        get: function() {
                            return this._captureStarted
                        }
                    }, {
                        key: "sessionManager",
                        get: function() {
                            if (!this.instance.sessionManager) throw Error(nN + " must be started with a valid sessionManager.");
                            return this.instance.sessionManager
                        }
                    }, {
                        key: "fullSnapshotIntervalMillis",
                        get: function() {
                            var e;
                            return (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.full_snapshot_interval_millis) || 3e5
                        }
                    }, {
                        key: "isSampled",
                        get: function() {
                            var e = this.instance.get_property(ew);
                            return C(e) ? e : null
                        }
                    }, {
                        key: "sessionDuration",
                        get: function() {
                            var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                                r = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                            return n ? n.timestamp - r : null
                        }
                    }, {
                        key: "isRecordingEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(ev),
                                t = !this.instance.config.disable_session_recording;
                            return O && e && t
                        }
                    }, {
                        key: "isConsoleLogCaptureEnabled",
                        get: function() {
                            var e = !!this.instance.get_property(e_),
                                t = this.instance.config.enable_recording_console_log;
                            return null != t ? t : e
                        }
                    }, {
                        key: "canvasRecording",
                        get: function() {
                            var e = this.instance.get_property(em);
                            return e && e.fps && e.quality ? {
                                enabled: e.enabled,
                                fps: e.fps,
                                quality: e.quality
                            } : void 0
                        }
                    }, {
                        key: "networkPayloadCapture",
                        get: function() {
                            var e, t, n = this.instance.get_property(eg),
                                r = {
                                    recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                                    recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                                },
                                i = (null == r ? void 0 : r.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
                                s = (null == r ? void 0 : r.recordBody) || (null == n ? void 0 : n.recordBody),
                                o = w(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
                                a = !!(C(o) ? o : null == n ? void 0 : n.capturePerformance);
                            return i || s || a ? {
                                recordHeaders: i,
                                recordBody: s,
                                recordPerformance: a
                            } : void 0
                        }
                    }, {
                        key: "sampleRate",
                        get: function() {
                            var e = this.instance.get_property(ey);
                            return I(e) ? e : null
                        }
                    }, {
                        key: "minimumDuration",
                        get: function() {
                            var e = this.instance.get_property(eb);
                            return I(e) ? e : null
                        }
                    }, {
                        key: "status",
                        get: function() {
                            return this.receivedDecide ? this.isRecordingEnabled ? T(this._linkedFlag) || this._linkedFlagSeen ? C(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
                        }
                    }, {
                        key: "startIfEnabledOrStop",
                        value: function() {
                            this.isRecordingEnabled ? (this._startCapture(), H.info(nN + " started")) : (this.stopRecording(), this.clearBuffer())
                        }
                    }, {
                        key: "stopRecording",
                        value: function() {
                            this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, H.info(nN + " stopped"))
                        }
                    }, {
                        key: "makeSamplingDecision",
                        value: function(e) {
                            var t, n, r = this.sessionId !== e,
                                i = this.sampleRate;
                            if (I(i)) {
                                var s, o = this.isSampled,
                                    a = r || !C(o);
                                (s = a ? Math.random() < i : o) || !a || H.warn(nN + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                                    sampleRate: i
                                }), null === (n = this.instance.persistence) || void 0 === n || n.register(u({}, ew, s))
                            } else null === (t = this.instance.persistence) || void 0 === t || t.register(u({}, ew, null))
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t, n, r, i = this;
                            if (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (n = e.sessionRecording) && void 0 !== n && n.endpoint && (this._endpoint = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.endpoint), this._setupSampling(), !T(this._linkedFlag)) {
                                var s = E(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                                    o = E(this._linkedFlag) ? null : this._linkedFlag.variant;
                                this.instance.onFeatureFlags(function(e, t) {
                                    var n = w(t) && s in t,
                                        r = o ? t[s] === o : n;
                                    if (r) {
                                        var a = {
                                                linkedFlag: s,
                                                linkedVariant: o
                                            },
                                            l = "linked flag matched";
                                        H.info(nN + " " + l, a), i._tryAddCustomEvent(l, a)
                                    }
                                    i._linkedFlagSeen = r
                                })
                            }
                            this.receivedDecide = !0, this.startIfEnabledOrStop()
                        }
                    }, {
                        key: "_setupSampling",
                        value: function() {
                            var e = this;
                            I(this.sampleRate) && P(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(function(t) {
                                e.makeSamplingDecision(t)
                            }))
                        }
                    }, {
                        key: "_persistDecideResponse",
                        value: function(e) {
                            if (this.instance.persistence) {
                                var t = this.instance.persistence,
                                    n = function() {
                                        var n, r, s, o, a, l, c, d, f = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.sampleRate,
                                            h = T(f) ? null : parseFloat(f),
                                            p = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.minimumDurationMilliseconds;
                                        t.register((u(d = {}, ev, !!e.sessionRecording), u(d, e_, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled), u(d, eg, i({
                                            capturePerformance: e.capturePerformance
                                        }, null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.networkPayloadCapture)), u(d, em, {
                                            enabled: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.recordCanvas,
                                            fps: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasFps,
                                            quality: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasQuality
                                        }), u(d, ey, h), u(d, eb, S(p) ? null : p), d))
                                    };
                                n(), this.sessionManager.onSessionId(n)
                            }
                        }
                    }, {
                        key: "log",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                            null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                                type: 6,
                                data: {
                                    plugin: "rrweb/console@1",
                                    payload: {
                                        level: n,
                                        trace: [],
                                        payload: [JSON.stringify(e)]
                                    }
                                },
                                timestamp: ee()
                            })
                        }
                    }, {
                        key: "_startCapture",
                        value: function() {
                            var e = this;
                            S(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut() || (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : this.instance.requestRouter.loadScript("/static/recorder.js?v=".concat(v.LIB_VERSION), function(t) {
                                if (t) return H.error(nN + " could not load recorder.js", t);
                                e._onScriptLoaded()
                            }))
                        }
                    }, {
                        key: "isInteractiveEvent",
                        value: function(e) {
                            var t;
                            return 3 === e.type && -1 !== nO.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                        }
                    }, {
                        key: "_updateWindowAndSessionIds",
                        value: function(e) {
                            var t = this.isInteractiveEvent(e);
                            t || this.isIdle || e.timestamp - this._lastActivityTimestamp > 3e5 && (this.isIdle = !0, clearTimeout(this._fullSnapshotTimer), this._flushBuffer());
                            var n = !1;
                            if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                                    reason: "user activity",
                                    type: e.type
                                }), n = !0)), !this.isIdle) {
                                var r = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                                    i = r.windowId,
                                    s = r.sessionId,
                                    o = this.sessionId !== s,
                                    a = this.windowId !== i;
                                this.windowId = i, this.sessionId = s, (n || -1 === [2, 4].indexOf(e.type) && (a || o || S(this._fullSnapshotTimer))) && this._tryTakeFullSnapshot()
                            }
                        }
                    }, {
                        key: "_tryRRWebMethod",
                        value: function(e) {
                            try {
                                return e.rrwebMethod(), !0
                            } catch (t) {
                                return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                                    enqueuedAt: e.enqueuedAt || Date.now(),
                                    attempt: e.attempt++,
                                    rrwebMethod: e.rrwebMethod
                                }) : H.warn(nN + " could not emit queued rrweb event.", t, e), !1
                            }
                        }
                    }, {
                        key: "_tryAddCustomEvent",
                        value: function(e, t) {
                            var n = this;
                            return this._tryRRWebMethod(nF(function() {
                                return n.rrwebRecord.addCustomEvent(e, t)
                            }))
                        }
                    }, {
                        key: "_tryTakeFullSnapshot",
                        value: function() {
                            var e = this;
                            return this._tryRRWebMethod(nF(function() {
                                return e.rrwebRecord.takeFullSnapshot()
                            }))
                        }
                    }, {
                        key: "_onScriptLoaded",
                        value: function() {
                            for (var e, t = this, n = {
                                    blockClass: "ph-no-capture",
                                    blockSelector: void 0,
                                    ignoreClass: "ph-ignore-input",
                                    maskTextClass: "ph-mask",
                                    maskTextSelector: void 0,
                                    maskTextFn: void 0,
                                    maskAllInputs: !0,
                                    maskInputOptions: {},
                                    maskInputFn: void 0,
                                    slimDOMOptions: {},
                                    collectFonts: !1,
                                    inlineStylesheet: !0,
                                    recordCrossOriginIframes: !1
                                }, r = this.instance.config.session_recording, s = 0, o = Object.entries(r || {}); s < o.length; s++) {
                                var a = c(o[s], 2),
                                    l = a[0],
                                    u = a[1];
                                l in n && (n[l] = u)
                            }
                            if (this.canvasRecording && this.canvasRecording.enabled && (n.recordCanvas = !0, n.sampling = {
                                    canvas: this.canvasRecording.fps
                                }, n.dataURLOptions = {
                                    type: "image/webp",
                                    quality: this.canvasRecording.quality
                                }), this.rrwebRecord) {
                                this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new nC(this.rrwebRecord, {
                                    onBlockedNode: function(e, n) {
                                        var r = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                        H.info(r, {
                                            node: n
                                        }), t.log(nN + " " + r, "warn")
                                    }
                                });
                                var d = this._gatherRRWebPlugins();
                                this.stopRrweb = this.rrwebRecord(i({
                                    emit: function(e) {
                                        t.onRRwebEmit(e)
                                    },
                                    plugins: d
                                }, n)), this.instance._addCaptureHook(function(e) {
                                    try {
                                        if ("$pageview" === e) {
                                            var n = O ? t._maskUrl(O.location.href) : "";
                                            if (!n) return;
                                            t._tryAddCustomEvent("$pageview", {
                                                href: n
                                            }), t._tryTakeFullSnapshot()
                                        }
                                    } catch (e) {
                                        H.error("Could not add $pageview to rrweb session", e)
                                    }
                                }), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                                    sessionRecordingOptions: n,
                                    activePlugins: d.map(function(e) {
                                        return null == e ? void 0 : e.name
                                    })
                                }), this._tryAddCustomEvent("$posthog_config", {
                                    config: this.instance.config
                                })
                            } else H.error(nN + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                        }
                    }, {
                        key: "_scheduleFullSnapshot",
                        value: function() {
                            var e = this;
                            if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
                                var t = this.fullSnapshotIntervalMillis;
                                t && (this._fullSnapshotTimer = setInterval(function() {
                                    e._tryTakeFullSnapshot()
                                }, t))
                            }
                        }
                    }, {
                        key: "_gatherRRWebPlugins",
                        value: function() {
                            var e = [];
                            return B.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(B.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && k(B.getRecordNetworkPlugin) && (!tt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(B.getRecordNetworkPlugin(nI(this.instance.config, this.networkPayloadCapture))) : H.info(nN + " NetworkCapture not started because we are on localhost.")), e
                        }
                    }, {
                        key: "onRRwebEmit",
                        value: function(e) {
                            if (this._processQueuedEvents(), e && w(e)) {
                                if (e.type === t6.Meta) {
                                    var t = this._maskUrl(e.data.href);
                                    if (this._lastHref = t, !t) return;
                                    e.data.href = t
                                } else this._pageViewFallBack();
                                e.type === t6.FullSnapshot && this._scheduleFullSnapshot();
                                var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                                if (n) {
                                    var r, i = function(e) {
                                            if (e && w(e) && 6 === e.type && w(e.data) && "rrweb/console@1" === e.data.plugin) {
                                                e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                                                for (var t = [], n = 0; n < e.data.payload.payload.length; n++) e.data.payload.payload[n] && e.data.payload.payload[n].length > 2e3 ? t.push(e.data.payload.payload[n].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[n]);
                                                return e.data.payload.payload = t, e
                                            }
                                            return e
                                        }(n),
                                        s = JSON.stringify(i, (r = [], function(e, t) {
                                            if (w(t)) {
                                                for (; r.length > 0 && r.at(-1) !== this;) r.pop();
                                                return r.includes(t) ? "[Circular]" : (r.push(t), t)
                                            }
                                            return t
                                        })).length;
                                    if (this._updateWindowAndSessionIds(i), !this.isIdle || i.type === t6.Custom) {
                                        var o = {
                                            $snapshot_bytes: s,
                                            $snapshot_data: i,
                                            $session_id: this.sessionId,
                                            $window_id: this.windowId
                                        };
                                        "disabled" !== this.status ? this._captureSnapshotBuffered(o) : this.clearBuffer()
                                    }
                                }
                            }
                        }
                    }, {
                        key: "_pageViewFallBack",
                        value: function() {
                            if (!this.instance.config.capture_pageview && O) {
                                var e = this._maskUrl(O.location.href);
                                this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                                    href: e
                                }), this._lastHref = e)
                            }
                        }
                    }, {
                        key: "_processQueuedEvents",
                        value: function() {
                            var e = this;
                            if (this.queuedRRWebEvents.length) {
                                var t = d(this.queuedRRWebEvents);
                                this.queuedRRWebEvents = [], t.forEach(function(t) {
                                    Date.now() - t.enqueuedAt <= 2e3 && e._tryRRWebMethod(t)
                                })
                            }
                        }
                    }, {
                        key: "_maskUrl",
                        value: function(e) {
                            var t = this.instance.config.session_recording;
                            if (t.maskNetworkRequestFn) {
                                var n, r = {
                                    url: e
                                };
                                return null === (n = r = t.maskNetworkRequestFn(r)) || void 0 === n ? void 0 : n.url
                            }
                            return e
                        }
                    }, {
                        key: "clearBuffer",
                        value: function() {
                            return this.buffer = {
                                size: 0,
                                data: [],
                                sessionId: this.sessionId,
                                windowId: this.windowId
                            }, this.buffer
                        }
                    }, {
                        key: "_flushBuffer",
                        value: function() {
                            var e = this;
                            this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                            var t = this.minimumDuration,
                                n = this.sessionDuration,
                                r = I(n) && n >= 0,
                                i = I(t) && r && n < t;
                            return "buffering" === this.status || i ? (this.flushBufferTimer = setTimeout(function() {
                                e._flushBuffer()
                            }, 2e3), this.buffer) : (this.buffer.data.length > 0 && this._captureSnapshot({
                                $snapshot_bytes: this.buffer.size,
                                $snapshot_data: this.buffer.data,
                                $session_id: this.buffer.sessionId,
                                $window_id: this.buffer.windowId
                            }), this.clearBuffer())
                        }
                    }, {
                        key: "_captureSnapshotBuffered",
                        value: function(e) {
                            var t, n = this,
                                r = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                            (this.buffer.size + e.$snapshot_bytes + r > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
                                n._flushBuffer()
                            }, 2e3))
                        }
                    }, {
                        key: "_captureSnapshot",
                        value: function(e) {
                            this.instance.capture("$snapshot", e, {
                                _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                                _noTruncate: !0,
                                _batchKey: "recordings",
                                _noHeatmaps: !0
                            })
                        }
                    }]), e
                }(),
                n$ = function() {
                    function e(t) {
                        o(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
                    }
                    return l(e, [{
                        key: "call",
                        value: function() {
                            var e = this,
                                t = {
                                    token: this.instance.config.token,
                                    distinct_id: this.instance.get_distinct_id(),
                                    groups: this.instance.getGroups(),
                                    person_properties: this.instance.get_property(eE),
                                    group_properties: this.instance.get_property(eR),
                                    disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
                                };
                            this.instance._send_request({
                                method: "POST",
                                url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                                data: t,
                                compression: this.instance.config.disable_compression ? void 0 : X.Base64,
                                timeout: this.instance.config.feature_flag_request_timeout_ms,
                                callback: function(t) {
                                    return e.parseDecideResponse(t.json)
                                }
                            })
                        }
                    }, {
                        key: "parseDecideResponse",
                        value: function(e) {
                            var t = this;
                            this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
                            var n = !e;
                            if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, n), n) H.error("Failed to fetch feature flags from PostHog.");
                            else {
                                if (!A || !A.body) return H.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
                                    t.parseDecideResponse(e)
                                }, 500);
                                if (this.instance._afterDecideResponse(e), e.siteApps) {
                                    if (this.instance.config.opt_in_site_apps) {
                                        var r, i = p(e.siteApps);
                                        try {
                                            for (i.s(); !(r = i.n()).done;)(function() {
                                                var e = r.value,
                                                    n = e.id,
                                                    i = e.url,
                                                    s = t.instance.requestRouter.endpointFor("api", i);
                                                B["__$$ph_site_app_".concat(n)] = t.instance, t.instance.requestRouter.loadScript(s, function(e) {
                                                    e && H.error("Error while initializing PostHog app with config id ".concat(n), e)
                                                })
                                            })()
                                        } catch (e) {
                                            i.e(e)
                                        } finally {
                                            i.f()
                                        }
                                    } else e.siteApps.length > 0 && H.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                                }
                            }
                        }
                    }]), e
                }(),
                nj = null != O && O.location ? to(O.location.hash, "__posthog") || to(location.hash, "state") : null,
                nA = "_postHogToolbarParams";
            (rp = nT || (nT = {}))[rp.UNINITIALIZED = 0] = "UNINITIALIZED", rp[rp.LOADING = 1] = "LOADING", rp[rp.LOADED = 2] = "LOADED";
            var nL = function() {
                    function e(t) {
                        o(this, e), this.instance = t
                    }
                    return l(e, [{
                        key: "setToolbarState",
                        value: function(e) {
                            B.ph_toolbar_state = e
                        }
                    }, {
                        key: "getToolbarState",
                        value: function() {
                            var e;
                            return null !== (e = B.ph_toolbar_state) && void 0 !== e ? e : nT.UNINITIALIZED
                        }
                    }, {
                        key: "maybeLoadToolbar",
                        value: function() {
                            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            if (!O || !A) return !1;
                            n = null !== (e = n) && void 0 !== e ? e : O.location, i = null !== (t = i) && void 0 !== t ? t : O.history;
                            try {
                                if (!r) {
                                    try {
                                        O.localStorage.setItem("test", "test"), O.localStorage.removeItem("test")
                                    } catch (e) {
                                        return !1
                                    }
                                    r = null == O ? void 0 : O.localStorage
                                }
                                var s, o = nj || to(n.hash, "__posthog") || to(n.hash, "state"),
                                    a = o ? et(function() {
                                        return JSON.parse(atob(decodeURIComponent(o)))
                                    }) || et(function() {
                                        return JSON.parse(decodeURIComponent(o))
                                    }) : null;
                                return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : i ? i.replaceState(i.state, "", n.pathname + n.search) : n.hash = "")) : ((s = JSON.parse(r.getItem(nA) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0)
                            } catch (e) {
                                return !1
                            }
                        }
                    }, {
                        key: "_callLoadToolbar",
                        value: function(e) {
                            (B.ph_load_toolbar || B.ph_load_editor)(e, this.instance)
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            var t = this,
                                n = !(null == A || !A.getElementById(eA));
                            if (!O || n) return !1;
                            var r = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                                s = i(i({
                                    token: this.instance.config.token
                                }, e), {}, {
                                    apiURL: this.instance.requestRouter.endpointFor("ui")
                                }, r ? {
                                    instrument: !1
                                } : {});
                            if (O.localStorage.setItem(nA, JSON.stringify(i(i({}, s), {}, {
                                    source: void 0
                                }))), this.getToolbarState() === nT.LOADED) this._callLoadToolbar(s);
                            else if (this.getToolbarState() === nT.UNINITIALIZED) {
                                this.setToolbarState(nT.LOADING);
                                var o = 3e5 * Math.floor(Date.now() / 3e5);
                                this.instance.requestRouter.loadScript("/static/toolbar.js?t=".concat(o), function(e) {
                                    if (e) return H.error("Failed to load toolbar", e), void t.setToolbarState(nT.UNINITIALIZED);
                                    t.setToolbarState(nT.LOADED), t._callLoadToolbar(s)
                                }), eo(O, "turbolinks:load", function() {
                                    t.setToolbarState(nT.UNINITIALIZED), t.loadToolbar(s)
                                })
                            }
                            return !0
                        }
                    }, {
                        key: "_loadEditor",
                        value: function(e) {
                            return this.loadToolbar(e)
                        }
                    }, {
                        key: "maybeLoadEditor",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            return this.maybeLoadToolbar(e, t, n)
                        }
                    }]), e
                }(),
                nD = function() {
                    function e(t) {
                        o(this, e), u(this, "isPaused", !0), u(this, "queue", []), u(this, "flushTimeoutMs", 3e3), this.sendRequest = t
                    }
                    return l(e, [{
                        key: "enqueue",
                        value: function(e) {
                            this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            var e = this;
                            this.clearFlushTimeout();
                            var t = Object.values(this.queue.length > 0 ? this.formatQueue() : {});
                            [].concat(d(t.filter(function(e) {
                                return 0 === e.url.indexOf("/e")
                            })), d(t.filter(function(e) {
                                return 0 !== e.url.indexOf("/e")
                            }))).map(function(t) {
                                e.sendRequest(i(i({}, t), {}, {
                                    transport: "sendBeacon"
                                }))
                            })
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.isPaused = !1, this.setFlushTimeout()
                        }
                    }, {
                        key: "setFlushTimeout",
                        value: function() {
                            var e = this;
                            this.isPaused || (this.flushTimeout = setTimeout(function() {
                                if (e.clearFlushTimeout(), e.queue.length > 0) {
                                    var t = e.formatQueue();
                                    for (var n in t)(function(n) {
                                        var r = t[n],
                                            i = (new Date).getTime();
                                        r.data && b(r.data) && K(r.data, function(e) {
                                            e.offset = Math.abs(e.timestamp - i), delete e.timestamp
                                        }), e.sendRequest(r)
                                    })(n)
                                }
                            }, this.flushTimeoutMs))
                        }
                    }, {
                        key: "clearFlushTimeout",
                        value: function() {
                            clearTimeout(this.flushTimeout), this.flushTimeout = void 0
                        }
                    }, {
                        key: "formatQueue",
                        value: function() {
                            var e = {};
                            return K(this.queue, function(t) {
                                var n, r = (t ? t.batchKey : null) || t.url;
                                S(e[r]) && (e[r] = i(i({}, t), {}, {
                                    data: []
                                })), null === (n = e[r].data) || void 0 === n || n.push(t.data)
                            }), this.queue = [], e
                        }
                    }]), e
                }(),
                nq = Uint8Array,
                nZ = Uint16Array,
                nU = Uint32Array,
                nB = new nq([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                nz = new nq([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                nH = new nq([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                nW = function(e, t) {
                    for (var n = new nZ(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
                    var i = new nU(n[30]);
                    for (r = 1; r < 30; ++r)
                        for (var s = n[r]; s < n[r + 1]; ++s) i[s] = s - n[r] << 5 | r;
                    return [n, i]
                },
                nV = nW(nB, 2),
                nG = nV[0],
                nK = nV[1];
            nG[28] = 258, nK[258] = 28;
            for (var nY = nW(nz, 0)[1], nQ = new nZ(32768), nJ = 0; nJ < 32768; ++nJ) {
                var nX = (43690 & nJ) >>> 1 | (21845 & nJ) << 1;
                nX = (61680 & (nX = (52428 & nX) >>> 2 | (13107 & nX) << 2)) >>> 4 | (3855 & nX) << 4, nQ[nJ] = ((65280 & nX) >>> 8 | (255 & nX) << 8) >>> 1
            }
            var n0 = function(e, t, n) {
                    for (var r = e.length, i = 0, s = new nZ(t); i < r; ++i) ++s[e[i] - 1];
                    var o, a = new nZ(t);
                    for (i = 0; i < t; ++i) a[i] = a[i - 1] + s[i - 1] << 1;
                    if (n) {
                        o = new nZ(1 << t);
                        var l = 15 - t;
                        for (i = 0; i < r; ++i)
                            if (e[i])
                                for (var u = i << 4 | e[i], c = t - e[i], d = a[e[i] - 1]++ << c, f = d | (1 << c) - 1; d <= f; ++d) o[nQ[d] >>> l] = u
                    } else
                        for (o = new nZ(r), i = 0; i < r; ++i) o[i] = nQ[a[e[i] - 1]++] >>> 15 - e[i];
                    return o
                },
                n1 = new nq(288);
            for (nJ = 0; nJ < 144; ++nJ) n1[nJ] = 8;
            for (nJ = 144; nJ < 256; ++nJ) n1[nJ] = 9;
            for (nJ = 256; nJ < 280; ++nJ) n1[nJ] = 7;
            for (nJ = 280; nJ < 288; ++nJ) n1[nJ] = 8;
            var n2 = new nq(32);
            for (nJ = 0; nJ < 32; ++nJ) n2[nJ] = 5;
            var n3 = n0(n1, 9, 0),
                n5 = n0(n2, 5, 0),
                n6 = function(e) {
                    return (e / 8 >> 0) + (7 & e && 1)
                },
                n4 = function(e, t, n) {
                    (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
                    var r = new(e instanceof nZ ? nZ : e instanceof nU ? nU : nq)(n - t);
                    return r.set(e.subarray(t, n)), r
                },
                n9 = function(e, t, n) {
                    n <<= 7 & t;
                    var r = t / 8 >> 0;
                    e[r] |= n, e[r + 1] |= n >>> 8
                },
                n8 = function(e, t, n) {
                    n <<= 7 & t;
                    var r = t / 8 >> 0;
                    e[r] |= n, e[r + 1] |= n >>> 8, e[r + 2] |= n >>> 16
                },
                n7 = function(e, t) {
                    for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({
                        s: r,
                        f: e[r]
                    });
                    var i = n.length,
                        s = n.slice();
                    if (!i) return [new nq(0), 0];
                    if (1 == i) {
                        var o = new nq(n[0].s + 1);
                        return o[n[0].s] = 1, [o, 1]
                    }
                    n.sort(function(e, t) {
                        return e.f - t.f
                    }), n.push({
                        s: -1,
                        f: 25001
                    });
                    var a = n[0],
                        l = n[1],
                        u = 0,
                        c = 1,
                        d = 2;
                    for (n[0] = {
                            s: -1,
                            f: a.f + l.f,
                            l: a,
                            r: l
                        }; c != i - 1;) a = n[n[u].f < n[d].f ? u++ : d++], l = n[u != c && n[u].f < n[d].f ? u++ : d++], n[c++] = {
                        s: -1,
                        f: a.f + l.f,
                        l: a,
                        r: l
                    };
                    var f = s[0].s;
                    for (r = 1; r < i; ++r) s[r].s > f && (f = s[r].s);
                    var h = new nZ(f + 1),
                        p = re(n[c - 1], h, 0);
                    if (p > t) {
                        r = 0;
                        var v = 0,
                            _ = p - t,
                            g = 1 << _;
                        for (s.sort(function(e, t) {
                                return h[t.s] - h[e.s] || e.f - t.f
                            }); r < i; ++r) {
                            var m = s[r].s;
                            if (!(h[m] > t)) break;
                            v += g - (1 << p - h[m]), h[m] = t
                        }
                        for (v >>>= _; v > 0;) {
                            var y = s[r].s;
                            h[y] < t ? v -= 1 << t - h[y]++ - 1 : ++r
                        }
                        for (; r >= 0 && v; --r) {
                            var b = s[r].s;
                            h[b] == t && (--h[b], ++v)
                        }
                        p = t
                    }
                    return [new nq(h), p]
                },
                re = function e(t, n, r) {
                    return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : n[t.s] = r
                },
                rt = function(e) {
                    for (var t = e.length; t && !e[--t];);
                    for (var n = new nZ(++t), r = 0, i = e[0], s = 1, o = function(e) {
                            n[r++] = e
                        }, a = 1; a <= t; ++a)
                        if (e[a] == i && a != t) ++s;
                        else {
                            if (!i && s > 2) {
                                for (; s > 138; s -= 138) o(32754);
                                s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                            } else if (s > 3) {
                                for (o(i), --s; s > 6; s -= 6) o(8304);
                                s > 2 && (o(s - 3 << 5 | 8208), s = 0)
                            }
                            for (; s--;) o(i);
                            s = 1, i = e[a]
                        }
                    return [n.subarray(0, r), t]
                },
                rn = function(e, t) {
                    for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
                    return n
                },
                rr = function(e, t, n) {
                    var r = n.length,
                        i = n6(t + 2);
                    e[i] = 255 & r, e[i + 1] = r >>> 8, e[i + 2] = 255 ^ e[i], e[i + 3] = 255 ^ e[i + 1];
                    for (var s = 0; s < r; ++s) e[i + s + 4] = n[s];
                    return 8 * (i + 4 + r)
                },
                ri = function(e, t, n, r, i, s, o, a, l, u, c) {
                    n9(t, c++, n), ++i[256];
                    for (var d = n7(i, 15), f = d[0], h = d[1], p = n7(s, 15), v = p[0], _ = p[1], g = rt(f), m = g[0], y = g[1], b = rt(v), k = b[0], w = b[1], x = new nZ(19), S = 0; S < m.length; ++S) x[31 & m[S]]++;
                    for (S = 0; S < k.length; ++S) x[31 & k[S]]++;
                    for (var E = n7(x, 7), R = E[0], P = E[1], T = 19; T > 4 && !R[nH[T - 1]]; --T);
                    var I, C, O, F, N = u + 5 << 3,
                        M = rn(i, n1) + rn(s, n2) + o,
                        $ = rn(i, f) + rn(s, v) + o + 14 + 3 * T + rn(x, R) + (2 * x[16] + 3 * x[17] + 7 * x[18]);
                    if (N <= M && N <= $) return rr(t, c, e.subarray(l, l + u));
                    if (n9(t, c, 1 + ($ < M)), c += 2, $ < M) {
                        I = n0(f, h, 0), C = f, O = n0(v, _, 0), F = v;
                        var j = n0(R, P, 0);
                        for (n9(t, c, y - 257), n9(t, c + 5, w - 1), n9(t, c + 10, T - 4), c += 14, S = 0; S < T; ++S) n9(t, c + 3 * S, R[nH[S]]);
                        c += 3 * T;
                        for (var A = [m, k], L = 0; L < 2; ++L) {
                            var D = A[L];
                            for (S = 0; S < D.length; ++S) {
                                var q = 31 & D[S];
                                n9(t, c, j[q]), c += R[q], q > 15 && (n9(t, c, D[S] >>> 5 & 127), c += D[S] >>> 12)
                            }
                        }
                    } else I = n3, C = n1, O = n5, F = n2;
                    for (S = 0; S < a; ++S)
                        if (r[S] > 255) {
                            n8(t, c, I[(q = r[S] >>> 18 & 31) + 257]), c += C[q + 257], q > 7 && (n9(t, c, r[S] >>> 23 & 31), c += nB[q]);
                            var Z = 31 & r[S];
                            n8(t, c, O[Z]), c += F[Z], Z > 3 && (n8(t, c, r[S] >>> 5 & 8191), c += nz[Z])
                        } else n8(t, c, I[r[S]]), c += C[r[S]];
                    return n8(t, c, I[256]), c + C[256]
                },
                rs = new nU([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                ro = new nq(0),
                ra = function() {
                    for (var e = new nU(256), t = 0; t < 256; ++t) {
                        for (var n = t, r = 9; --r;) n = (1 & n && 3988292384) ^ n >>> 1;
                        e[t] = n
                    }
                    return e
                }(),
                rl = function(e, t, n) {
                    for (; n; ++t) e[t] = n, n >>>= 8
                },
                ru = !!q || !!D,
                rc = "text/plain",
                rd = function(e, t) {
                    var n = c(e.split("?"), 2),
                        r = n[0],
                        s = n[1],
                        o = i({}, t);
                    null == s || s.split("&").forEach(function(e) {
                        var t = c(e.split("="), 1)[0];
                        delete o[t]
                    });
                    var a = ti(o);
                    return a = a ? (s ? s + "&" : "") + a : s, "".concat(r, "?").concat(a)
                },
                rf = function(e) {
                    var t, n, r, i, s, o, a, l, u, c = e.data,
                        d = e.compression;
                    if (c) return d === X.GZipJS ? {
                        contentType: rc,
                        body: new Blob([(t = function(e, t) {
                            var n = e.length;
                            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                            for (var r = new nq(e.length + (e.length >>> 1)), i = 0, s = function(e) {
                                    r[i++] = e
                                }, o = 0; o < n; ++o) {
                                if (i + 5 > r.length) {
                                    var a = new nq(i + 8 + (n - o << 1));
                                    a.set(r), r = a
                                }
                                var l = e.charCodeAt(o);
                                l < 128 ? s(l) : (l < 2048 ? s(192 | l >>> 6) : (l > 55295 && l < 57344 ? (s(240 | (l = 65536 + (1047552 & l) | 1023 & e.charCodeAt(++o)) >>> 18), s(128 | l >>> 12 & 63)) : s(224 | l >>> 12), s(128 | l >>> 6 & 63)), s(128 | 63 & l))
                            }
                            return n4(r, 0, i)
                        }(JSON.stringify(c)), n = {
                            mtime: 0
                        }, r = 4294967295, i = {
                            p: function(e) {
                                for (var t = r, n = 0; n < e.length; ++n) t = ra[255 & t ^ e[n]] ^ t >>> 8;
                                r = t
                            },
                            d: function() {
                                return 4294967295 ^ r
                            }
                        }, s = t.length, i.p(t), l = (o = 10 + (n.filename && n.filename.length + 1 || 0), a = function(e, t, n, r, i, s) {
                            var o = e.length,
                                a = new nq(r + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
                                l = a.subarray(r, a.length - 8),
                                u = 0;
                            if (!t || o < 8)
                                for (var c = 0; c <= o; c += 65535) {
                                    var d = c + 65535;
                                    d < o ? u = rr(l, u, e.subarray(c, d)) : (l[c] = s, u = rr(l, u, e.subarray(c, o)))
                                } else {
                                    for (var f = rs[t - 1], h = f >>> 13, p = 8191 & f, v = (1 << n) - 1, _ = new nZ(32768), g = new nZ(v + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
                                            return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & v
                                        }, k = new nU(25e3), w = new nZ(288), x = new nZ(32), S = 0, E = 0, R = (c = 0, 0), P = 0, T = 0; c < o; ++c) {
                                        var I = b(c),
                                            C = 32767 & c,
                                            O = g[I];
                                        if (_[C] = O, g[I] = C, P <= c) {
                                            var F = o - c;
                                            if ((S > 7e3 || R > 24576) && F > 423) {
                                                u = ri(e, l, 0, k, w, x, E, R, T, c - T, u), R = S = E = 0, T = c;
                                                for (var N = 0; N < 286; ++N) w[N] = 0;
                                                for (N = 0; N < 30; ++N) x[N] = 0
                                            }
                                            var M = 2,
                                                $ = 0,
                                                j = p,
                                                A = C - O & 32767;
                                            if (F > 2 && I == b(c - A))
                                                for (var L = Math.min(h, F) - 1, D = Math.min(32767, c), q = Math.min(258, F); A <= D && --j && C != O;) {
                                                    if (e[c + M] == e[c + M - A]) {
                                                        for (var Z = 0; Z < q && e[c + Z] == e[c + Z - A]; ++Z);
                                                        if (Z > M) {
                                                            if (M = Z, $ = A, Z > L) break;
                                                            var U = Math.min(A, Z - 2),
                                                                B = 0;
                                                            for (N = 0; N < U; ++N) {
                                                                var z = c - A + N + 32768 & 32767,
                                                                    H = z - _[z] + 32768 & 32767;
                                                                H > B && (B = H, O = z)
                                                            }
                                                        }
                                                    }
                                                    A += (C = O) - (O = _[C]) + 32768 & 32767
                                                }
                                            if ($) {
                                                k[R++] = 268435456 | nK[M] << 18 | nY[$];
                                                var W = 31 & nK[M],
                                                    V = 31 & nY[$];
                                                E += nB[W] + nz[V], ++w[257 + W], ++x[V], P = c + M, ++S
                                            } else k[R++] = e[c], ++w[e[c]]
                                        }
                                    }
                                    u = ri(e, l, s, k, w, x, E, R, T, c - T, u), s || (u = rr(l, u, ro))
                                }
                            return n4(a, 0, r + n6(u) + i)
                        }(t, null == n.level ? 6 : n.level, null == n.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + n.mem, o, 8, !0)).length, function(e, t) {
                            var n = t.filename;
                            if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && rl(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
                                e[3] = 8;
                                for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r)
                            }
                        }(a, n), rl(a, l - 8, i.d()), rl(a, l - 4, s), a)], {
                            type: rc
                        })
                    } : d === X.Base64 ? {
                        contentType: "application/x-www-form-urlencoded",
                        body: "data=" + encodeURIComponent("string" == typeof(u = function(e) {
                            var t, n, r, i, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                a = 0,
                                l = 0,
                                u = "",
                                c = [];
                            if (!e) return e;
                            e = es(e);
                            do t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, n = s >> 12 & 63, r = s >> 6 & 63, i = 63 & s, c[l++] = o.charAt(t) + o.charAt(n) + o.charAt(r) + o.charAt(i); while (a < e.length);
                            switch (u = c.join(""), e.length % 3) {
                                case 1:
                                    u = u.slice(0, -2) + "==";
                                    break;
                                case 2:
                                    u = u.slice(0, -1) + "="
                            }
                            return u
                        }(JSON.stringify(c))) ? u : JSON.stringify(u))
                    } : {
                        contentType: "application/json",
                        body: JSON.stringify(c)
                    }
                },
                rh = [];
            q && rh.push({
                transport: "XHR",
                method: function(e) {
                    var t, n = new q;
                    n.open(e.method || "GET", e.url, !0);
                    var r = null !== (t = rf(e)) && void 0 !== t ? t : {},
                        i = r.contentType,
                        s = r.body;
                    K(e.headers, function(e, t) {
                        n.setRequestHeader(t, e)
                    }), i && n.setRequestHeader("Content-Type", i), e.timeout && (n.timeout = e.timeout), n.withCredentials = !0, n.onreadystatechange = function() {
                        if (4 === n.readyState) {
                            var t, r = {
                                statusCode: n.status,
                                text: n.responseText
                            };
                            if (200 === n.status) try {
                                r.json = JSON.parse(n.responseText)
                            } catch (e) {}
                            null === (t = e.callback) || void 0 === t || t.call(e, r)
                        }
                    }, n.send(s)
                }
            }), D && rh.push({
                transport: "fetch",
                method: function(e) {
                    var t, n, r = null !== (t = rf(e)) && void 0 !== t ? t : {},
                        i = r.contentType,
                        s = r.body,
                        o = new Headers;
                    K(o, function(e, t) {
                        o.append(t, e)
                    }), i && o.append("Content-Type", i);
                    var a = e.url,
                        l = null;
                    if (Z) {
                        var u = new Z;
                        l = {
                            signal: u.signal,
                            timeout: setTimeout(function() {
                                return u.abort()
                            }, e.timeout)
                        }
                    }
                    D(a, {
                        method: (null == e ? void 0 : e.method) || "GET",
                        headers: o,
                        keepalive: "POST" === e.method,
                        body: s,
                        signal: null === (n = l) || void 0 === n ? void 0 : n.signal
                    }).then(function(t) {
                        return t.text().then(function(n) {
                            var r, i = {
                                statusCode: t.status,
                                text: n
                            };
                            if (200 === t.status) try {
                                i.json = JSON.parse(n)
                            } catch (e) {
                                H.error(e)
                            }
                            null === (r = e.callback) || void 0 === r || r.call(e, i)
                        })
                    }).catch(function(t) {
                        var n;
                        H.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
                            statusCode: 0,
                            text: t
                        })
                    }).finally(function() {
                        return l ? clearTimeout(l.timeout) : null
                    })
                }
            }), null != j && j.sendBeacon && rh.push({
                transport: "sendBeacon",
                method: function(e) {
                    var t = rd(e.url, {
                        beacon: "1"
                    });
                    try {
                        var n, r = null !== (n = rf(e)) && void 0 !== n ? n : {},
                            i = r.contentType,
                            s = r.body,
                            o = "string" == typeof s ? new Blob([s], {
                                type: i
                            }) : s;
                        j.sendBeacon(t, o)
                    } catch (e) {}
                }
            });
            var rp, rv, r_ = ["retriesPerformedSoFar"],
                rg = function() {
                    function e(t) {
                        var n = this;
                        o(this, e), u(this, "isPolling", !1), u(this, "pollIntervalMs", 3e3), u(this, "queue", []), this.instance = t, this.queue = [], this.areWeOnline = !0, !S(O) && "onLine" in O.navigator && (this.areWeOnline = O.navigator.onLine, O.addEventListener("online", function() {
                            n.areWeOnline = !0, n.flush()
                        }), O.addEventListener("offline", function() {
                            n.areWeOnline = !1
                        }))
                    }
                    return l(e, [{
                        key: "retriableRequest",
                        value: function(e) {
                            var t = this,
                                n = e.retriesPerformedSoFar,
                                r = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, i = function(e, t) {
                                        if (null == e) return {};
                                        var n, r, i = {},
                                            s = Object.keys(e);
                                        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                                        return i
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var s = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                                    }
                                    return i
                                }(e, r_);
                            I(n) && n > 0 && (r.url = rd(r.url, {
                                retry_count: n
                            })), this.instance._send_request(i(i({}, r), {}, {
                                callback: function(e) {
                                    var s;
                                    200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != n ? n : 0) < 10 ? t.enqueue(i({
                                        retriesPerformedSoFar: n
                                    }, r)) : null === (s = r.callback) || void 0 === s || s.call(r, e)
                                }
                            }))
                        }
                    }, {
                        key: "enqueue",
                        value: function(e) {
                            var t, n, r, i = e.retriesPerformedSoFar || 0;
                            e.retriesPerformedSoFar = i + 1;
                            var s = (r = (Math.random() - .5) * ((n = Math.min(18e5, t = 3e3 * Math.pow(2, i))) - t / 2), Math.ceil(n + r)),
                                o = Date.now() + s;
                            this.queue.push({
                                retryAt: o,
                                requestOptions: e
                            });
                            var a = "Enqueued failed request for retry in ".concat(s);
                            navigator.onLine || (a += " (Browser is offline)"), H.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
                        }
                    }, {
                        key: "poll",
                        value: function() {
                            var e = this;
                            this.poller && clearTimeout(this.poller), this.poller = setTimeout(function() {
                                e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                            }, this.pollIntervalMs)
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            var e = Date.now(),
                                t = [],
                                n = this.queue.filter(function(n) {
                                    return n.retryAt < e || (t.push(n), !1)
                                });
                            if (this.queue = t, n.length > 0) {
                                var r, i = p(n);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        var s = r.value.requestOptions;
                                        this.retriableRequest(s)
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            this.poller && (clearTimeout(this.poller), this.poller = void 0);
                            var e, t = p(this.queue);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value.requestOptions;
                                    try {
                                        this.instance._send_request(i(i({}, n), {}, {
                                            transport: "sendBeacon"
                                        }))
                                    } catch (e) {
                                        H.error(e)
                                    }
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this.queue = []
                        }
                    }]), e
                }(),
                rm = function() {
                    function e(t, n, r, i) {
                        o(this, e), u(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = r || eJ, this._windowIdGenerator = i || eJ;
                        var s, a = t.persistence_name || t.token,
                            l = t.session_idle_timeout_seconds || 1800;
                        if (I(l) ? l > 1800 ? H.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : l < 60 && H.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (H.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), l = 1800), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(l, 60), 1800), this._window_id_storage_key = "ph_" + a + "_window_id", this._primary_window_exists_storage_key = "ph_" + a + "_primary_window_exists", this._canUseSessionStorage()) {
                            var c = te.parse(this._window_id_storage_key),
                                d = te.parse(this._primary_window_exists_storage_key);
                            c && !d ? this._windowId = c : te.remove(this._window_id_storage_key), te.set(this._primary_window_exists_storage_key, !0)
                        }
                        if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
                            var f = function(e) {
                                var t = e.replace(/-/g, "");
                                if (32 !== t.length) throw Error("Not a valid UUID");
                                if ("7" !== t[12]) throw Error("Not a UUIDv7");
                                return parseInt(t.substring(0, 12), 16)
                            }(this.config.bootstrap.sessionID);
                            this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), f)
                        } catch (e) {
                            H.error("Invalid sessionID in bootstrap", e)
                        }
                        this._listenToReloadWindow()
                    }
                    return l(e, [{
                        key: "onSessionId",
                        value: function(e) {
                            var t = this;
                            return S(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId),
                                function() {
                                    t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function(t) {
                                        return t !== e
                                    })
                                }
                        }
                    }, {
                        key: "_canUseSessionStorage",
                        value: function() {
                            return "memory" !== this.config.persistence && !this.persistence.disabled && te.is_supported()
                        }
                    }, {
                        key: "_setWindowId",
                        value: function(e) {
                            e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && te.set(this._window_id_storage_key, e))
                        }
                    }, {
                        key: "_getWindowId",
                        value: function() {
                            return this._windowId ? this._windowId : this._canUseSessionStorage() ? te.parse(this._window_id_storage_key) : null
                        }
                    }, {
                        key: "_setSessionId",
                        value: function(e, t, n) {
                            e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(u({}, ek, [t, e, n])))
                        }
                    }, {
                        key: "_getSessionId",
                        value: function() {
                            if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                            var e = this.persistence.props[ek];
                            return b(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                        }
                    }, {
                        key: "resetSessionId",
                        value: function() {
                            this._setSessionId(null, null, null)
                        }
                    }, {
                        key: "_listenToReloadWindow",
                        value: function() {
                            var e = this;
                            null == O || O.addEventListener("beforeunload", function() {
                                e._canUseSessionStorage() && te.remove(e._primary_window_exists_storage_key)
                            })
                        }
                    }, {
                        key: "checkAndGetSessionAndWindowId",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
                                n = c(this._getSessionId(), 3),
                                r = n[0],
                                i = n[1],
                                s = n[2],
                                o = this._getWindowId(),
                                a = s && s > 0 && Math.abs(t - s) > 864e5,
                                l = !1,
                                u = !i,
                                d = !e && Math.abs(t - r) > this._sessionTimeoutMs;
                            u || d || a ? (i = this._sessionIdGenerator(), o = this._windowIdGenerator(), H.info("[SessionId] new session ID generated", {
                                sessionId: i,
                                windowId: o,
                                changeReason: {
                                    noSessionId: u,
                                    activityTimeout: d,
                                    sessionPastMaximumLength: a
                                }
                            }), s = t, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
                            var f = 0 === r || !e || a ? t : r,
                                h = 0 === s ? (new Date).getTime() : s;
                            return this._setWindowId(o), this._setSessionId(i, f, h), l && this._sessionIdChangedHandlers.forEach(function(e) {
                                return e(i, o)
                            }), {
                                sessionId: i,
                                windowId: o,
                                sessionStartTimestamp: h
                            }
                        }
                    }]), e
                }();
            (rx = rv || (rv = {})).US = "us", rx.EU = "eu", rx.CUSTOM = "custom";
            var ry = "i.posthog.com",
                rb = function() {
                    function e(t) {
                        o(this, e), u(this, "_regionCache", {}), this.instance = t
                    }
                    return l(e, [{
                        key: "apiHost",
                        get: function() {
                            return this.instance.config.api_host.trim().replace(/\/$/, "")
                        }
                    }, {
                        key: "uiHost",
                        get: function() {
                            var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
                            return "https://app.posthog.com" === t ? "https://us.posthog.com" : t
                        }
                    }, {
                        key: "region",
                        get: function() {
                            return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = rv.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = rv.EU : this._regionCache[this.apiHost] = rv.CUSTOM), this._regionCache[this.apiHost]
                        }
                    }, {
                        key: "endpointFor",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost.replace(".".concat(ry), ".posthog.com")) + t;
                            if (this.region === rv.CUSTOM) return this.apiHost + t;
                            var n = ry + t;
                            switch (e) {
                                case "assets":
                                    return "https://".concat(this.region, "-assets.").concat(n);
                                case "api":
                                    return "https://".concat(this.region, ".").concat(n)
                            }
                        }
                    }, {
                        key: "loadScript",
                        value: function(e, t) {
                            if (this.instance.config.disable_external_dependency_loading) return H.warn("".concat(e, " was requested but loading of external scripts is disabled.")), t("Loading of external scripts is disabled");
                            var n = "/" === e[0] ? this.endpointFor("assets", e) : e,
                                r = function() {
                                    if (!A) return t("document not found");
                                    var e = A.createElement("script");
                                    e.type = "text/javascript", e.src = n, e.onload = function(e) {
                                        return t(void 0, e)
                                    }, e.onerror = function(e) {
                                        return t(e)
                                    };
                                    var r, i = A.querySelectorAll("body > script");
                                    i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(e, i[0]) : A.body.appendChild(e)
                                };
                            null != A && A.body ? r() : null == A || A.addEventListener("DOMContentLoaded", r)
                        }
                    }]), e
                }(),
                rk = "posthog-js";

            function rw(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.organization,
                    r = t.projectId,
                    i = t.prefix,
                    s = t.severityAllowList,
                    o = void 0 === s ? ["error"] : s;
                return function(t) {
                    if (!("*" === o || o.includes(t.level)) || !e.__loaded) return t;
                    t.tags || (t.tags = {});
                    var s, a, l, u, c, d = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
                    t.tags["PostHog Person URL"] = d, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({
                        withTimestamp: !0
                    }));
                    var f = (null === (s = t.exception) || void 0 === s ? void 0 : s.values) || [],
                        h = {
                            $exception_message: (null === (a = f[0]) || void 0 === a ? void 0 : a.value) || t.message,
                            $exception_type: null === (l = f[0]) || void 0 === l ? void 0 : l.type,
                            $exception_personURL: d,
                            $exception_level: t.level,
                            $sentry_event_id: t.event_id,
                            $sentry_exception: t.exception,
                            $sentry_exception_message: (null === (u = f[0]) || void 0 === u ? void 0 : u.value) || t.message,
                            $sentry_exception_type: null === (c = f[0]) || void 0 === c ? void 0 : c.type,
                            $sentry_tags: t.tags,
                            $level: t.level
                        };
                    return n && r && (h.$sentry_url = (i || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + t.event_id), e.capture("$exception", h), t
                }
            }
            var rx, rS, rE, rR, rP = l(function e(t, n, r, i, s) {
                    o(this, e), this.name = rk, this.setupOnce = function(e) {
                        e(rw(t, {
                            organization: n,
                            projectId: r,
                            prefix: i,
                            severityAllowList: s
                        }))
                    }
                }),
                rT = function() {
                    function e(t) {
                        o(this, e), this._instance = t
                    }
                    return l(e, [{
                        key: "doPageView",
                        value: function() {
                            var e, t = this._previousScrollProperties();
                            return this._currentPath = null !== (e = null == O ? void 0 : O.location.pathname) && void 0 !== e ? e : "", this._instance.scrollManager.resetContext(), t
                        }
                    }, {
                        key: "doPageLeave",
                        value: function() {
                            return this._previousScrollProperties()
                        }
                    }, {
                        key: "_previousScrollProperties",
                        value: function() {
                            var e = this._currentPath,
                                t = this._instance.scrollManager.getContext();
                            if (!e || !t) return {};
                            var n = t.maxScrollHeight,
                                r = t.lastScrollY,
                                i = t.maxScrollY,
                                s = t.maxContentHeight,
                                o = t.lastContentY,
                                a = t.maxContentY;
                            return S(n) || S(r) || S(i) || S(s) || S(o) || S(a) ? {} : (n = Math.ceil(n), r = Math.ceil(r), i = Math.ceil(i), s = Math.ceil(s), o = Math.ceil(o), a = Math.ceil(a), {
                                $prev_pageview_pathname: e,
                                $prev_pageview_last_scroll: r,
                                $prev_pageview_last_scroll_percentage: n <= 1 ? 1 : rI(r / n, 0, 1),
                                $prev_pageview_max_scroll: i,
                                $prev_pageview_max_scroll_percentage: n <= 1 ? 1 : rI(i / n, 0, 1),
                                $prev_pageview_last_content: o,
                                $prev_pageview_last_content_percentage: s <= 1 ? 1 : rI(o / s, 0, 1),
                                $prev_pageview_max_content: a,
                                $prev_pageview_max_content_percentage: s <= 1 ? 1 : rI(a / s, 0, 1)
                            })
                        }
                    }]), e
                }();

            function rI(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }(rO = rS || (rS = {})).Popover = "popover", rO.API = "api", rO.Widget = "widget", (rF = rE || (rE = {})).Open = "open", rF.MultipleChoice = "multiple_choice", rF.SingleChoice = "single_choice", rF.Rating = "rating", rF.Link = "link", (rN = rR || (rR = {})).NextQuestion = "next_question", rN.End = "end", rN.ResponseBased = "response_based", rN.SpecificQuestion = "specific_question";
            var rC = function() {
                function e(t) {
                    o(this, e), this.persistence = t, this.eventRegistry = new Map
                }
                return l(e, [{
                    key: "register",
                    value: function(e) {
                        var t = this;
                        e.forEach(function(e) {
                            var n, r, i, s, o;
                            null !== (n = e.conditions) && void 0 !== n && n.events && null !== (r = e.conditions) && void 0 !== r && null !== (i = r.events) && void 0 !== i && i.values && (null === (s = e.conditions) || void 0 === s ? void 0 : s.events.values.length) > 0 && t.eventRegistry.set(e.id, null === (o = e.conditions) || void 0 === o ? void 0 : o.events.values.map(function(e) {
                                return e.name
                            }))
                        })
                    }
                }, {
                    key: "on",
                    value: function(t, n) {
                        var r, i = [],
                            s = (null === (r = this.persistence) || void 0 === r ? void 0 : r.props[eT]) || [];
                        if (e.SURVEY_SHOWN_EVENT_NAME == t && n && s.length > 0) {
                            var o, a = null == n || null === (o = n.properties) || void 0 === o ? void 0 : o.$survey_id;
                            if (a) {
                                var l = s.indexOf(a);
                                l >= 0 && s.splice(l, 1)
                            }
                        } else this.eventRegistry.forEach(function(e, n) {
                            e.includes(t) && i.push(n)
                        });
                        var u = s.concat(i);
                        this._saveSurveysToStorage(u)
                    }
                }, {
                    key: "getSurveys",
                    value: function() {
                        var e;
                        return (null === (e = this.persistence) || void 0 === e ? void 0 : e.props[eT]) || []
                    }
                }, {
                    key: "getEventRegistry",
                    value: function() {
                        return this.eventRegistry
                    }
                }, {
                    key: "_saveSurveysToStorage",
                    value: function(e) {
                        var t;
                        null === (t = this.persistence) || void 0 === t || t.register(u({}, eT, d(new Set(e))))
                    }
                }]), e
            }();
            u(rC, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
            var rO, rF, rN, rM, r$, rj, rA, rL, rD, rq, rZ, rU = {},
                rB = [],
                rz = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                rH = Array.isArray;

            function rW(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function rV(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function rG(e, t, n, r, i) {
                var s = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == i ? ++rj : i,
                    __i: -1,
                    __u: 0
                };
                return null == i && null != r$.vnode && r$.vnode(s), s
            }

            function rK(e) {
                return e.children
            }

            function rY(e, t) {
                this.props = e, this.context = t
            }

            function rQ(e, t) {
                if (null == t) return e.__ ? rQ(e.__, e.__i + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? rQ(e) : null
            }

            function rJ(e) {
                (!e.__d && (e.__d = !0) && rA.push(e) && !rX.__r++ || rL !== r$.debounceRendering) && ((rL = r$.debounceRendering) || rD)(rX)
            }

            function rX() {
                var e, t, n, r, i, s, o, a, l;
                for (rA.sort(rq); e = rA.shift();) e.__d && (t = rA.length, r = void 0, s = (i = (n = e).__v).__e, a = [], l = [], (o = n.__P) && ((r = rW({}, i)).__v = i.__v + 1, r$.vnode && r$.vnode(r), r6(o, r, i, n.__n, void 0 !== o.ownerSVGElement, 32 & i.__u ? [s] : null, a, null == s ? rQ(i) : s, !!(32 & i.__u), l), r.__.__k[r.__i] = r, function(e, t, n) {
                    t.__d = void 0;
                    for (var r = 0; r < n.length; r++) r4(n[r], n[++r], n[++r]);
                    r$.__c && r$.__c(t, e), e.some(function(t) {
                        try {
                            e = t.__h, t.__h = [], e.some(function(e) {
                                e.call(t)
                            })
                        } catch (e) {
                            r$.__e(e, t.__v)
                        }
                    })
                }(a, r, l), r.__e != s && function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                        for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                            if (null != (r = t.__k[n]) && null != r.__e) {
                                t.__e = t.__c.base = r.__e;
                                break
                            }
                        return e(t)
                    }
                }(r)), rA.length > t && rA.sort(rq));
                rX.__r = 0
            }

            function r0(e, t, n, r, i, s, o, a, l, u, c) {
                var d, f, h, p, v, _ = r && r.__k || rB,
                    g = t.length;
                for (n.__d = l, function(e, t, n) {
                        var r, i, s, o, a, l = t.length,
                            u = n.length,
                            c = u,
                            d = 0;
                        for (e.__k = [], r = 0; r < l; r++) null != (i = e.__k[r] = null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? rG(null, i, null, null, i) : rH(i) ? rG(rK, {
                            children: i
                        }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? rG(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e, i.__b = e.__b + 1, a = function(e, t, n, r) {
                            var i = e.key,
                                s = e.type,
                                o = n - 1,
                                a = n + 1,
                                l = t[n];
                            if (null === l || l && i == l.key && s === l.type) return n;
                            if (r > (null != l && 0 == (131072 & l.__u) ? 1 : 0))
                                for (; o >= 0 || a < t.length;) {
                                    if (o >= 0) {
                                        if ((l = t[o]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return o;
                                        o--
                                    }
                                    if (a < t.length) {
                                        if ((l = t[a]) && 0 == (131072 & l.__u) && i == l.key && s === l.type) return a;
                                        a++
                                    }
                                }
                            return -1
                        }(i, n, o = r + d, c), i.__i = a, s = null, -1 !== a && (c--, (s = n[a]) && (s.__u |= 131072)), null == s || null === s.__v ? (-1 == a && d--, "function" != typeof i.type && (i.__u |= 65536)) : a !== o && (a === o + 1 ? d++ : a > o ? c > l - o ? d += a - o : d-- : d = a < o && a == o - 1 ? a - o : 0, a !== r + d && (i.__u |= 65536))) : (s = n[r]) && null == s.key && s.__e && (s.__e == e.__d && (e.__d = rQ(s)), r9(s, s, !1), n[r] = null, c--);
                        if (c)
                            for (r = 0; r < u; r++) null != (s = n[r]) && 0 == (131072 & s.__u) && (s.__e == e.__d && (e.__d = rQ(s)), r9(s, s))
                    }(n, t, _), l = n.__d, d = 0; d < g; d++) null != (h = n.__k[d]) && "boolean" != typeof h && "function" != typeof h && (f = -1 === h.__i ? rU : _[h.__i] || rU, h.__i = d, r6(e, h, f, i, s, o, a, l, u, c), p = h.__e, h.ref && f.ref != h.ref && (f.ref && r4(f.ref, null, h), c.push(h.ref, h.__c || p, h)), null == v && null != p && (v = p), 65536 & h.__u || f.__k === h.__k ? l = function e(t, n, r) {
                    var i, s;
                    if ("function" == typeof t.type) {
                        for (i = t.__k, s = 0; i && s < i.length; s++) i[s] && (i[s].__ = t, n = e(i[s], n, r));
                        return n
                    }
                    return t.__e != n && (r.insertBefore(t.__e, n || null), n = t.__e), n && n.nextSibling
                }(h, l, e) : "function" == typeof h.type && void 0 !== h.__d ? l = h.__d : p && (l = p.nextSibling), h.__d = void 0, h.__u &= -196609);
                n.__d = l, n.__e = v
            }

            function r1(e, t, n) {
                "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || rz.test(t) ? n : n + "px"
            }

            function r2(e, t, n, r, i) {
                var s;
                e: if ("style" === t) {
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof r && (e.style.cssText = r = ""), r)
                            for (t in r) n && t in n || r1(e.style, t, "");
                        if (n)
                            for (t in n) r && n[t] === r[t] || r1(e.style, t, n[t])
                    }
                } else
                if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, s ? r5 : r3, s)) : e.removeEventListener(t, s ? r5 : r3, s);
                else {
                    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
                }
            }

            function r3(e) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u) return
                } else e.t = Date.now();
                return t(r$.event ? r$.event(e) : e)
            }

            function r5(e) {
                return this.l[e.type + !0](r$.event ? r$.event(e) : e)
            }

            function r6(e, t, n, r, i, s, o, a, l, u) {
                var c, d, f, h, p, v, _, g, m, y, b, k, w, x, S, E = t.type;
                if (void 0 !== t.constructor) return null;
                128 & n.__u && (l = !!(32 & n.__u), s = [a = t.__e = n.__e]), (c = r$.__b) && c(t);
                e: if ("function" == typeof E) try {
                    if (g = t.props, m = (c = E.contextType) && r[c.__c], y = c ? m ? m.props.value : c.__ : r, n.__c ? _ = (d = t.__c = n.__c).__ = d.__E : ("prototype" in E && E.prototype.render ? t.__c = d = new E(g, y) : (t.__c = d = new rY(g, y), d.constructor = E, d.render = r8), m && m.sub(d), d.props = g, d.state || (d.state = {}), d.context = y, d.__n = r, f = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != E.getDerivedStateFromProps && (d.__s == d.state && (d.__s = rW({}, d.__s)), rW(d.__s, E.getDerivedStateFromProps(g, d.__s))), h = d.props, p = d.state, d.__v = t, f) null == E.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == E.getDerivedStateFromProps && g !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(g, y), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(g, d.__s, y) || t.__v === n.__v)) {
                            for (t.__v !== n.__v && (d.props = g, d.state = d.__s, d.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                            d._sb = [], d.__h.length && o.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, y), null != d.componentDidUpdate && d.__h.push(function() {
                            d.componentDidUpdate(h, p, v)
                        })
                    }
                    if (d.context = y, d.props = g, d.__P = e, d.__e = !1, k = r$.__r, w = 0, "prototype" in E && E.prototype.render) {
                        for (d.state = d.__s, d.__d = !1, k && k(t), c = d.render(d.props, d.state, d.context), x = 0; x < d._sb.length; x++) d.__h.push(d._sb[x]);
                        d._sb = []
                    } else
                        do d.__d = !1, k && k(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++w < 25);
                    d.state = d.__s, null != d.getChildContext && (r = rW(rW({}, r), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(h, p)), r0(e, rH(S = null != c && c.type === rK && null == c.key ? c.props.children : c) ? S : [S], t, n, r, i, s, o, a, l, u), d.base = t.__e, t.__u &= -161, d.__h.length && o.push(d), _ && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null, l || null != s ? (t.__e = a, t.__u |= l ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), r$.__e(e, t, n)
                } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, i, s, o, a, l) {
                    var u, c, d, f, h, p, v, _ = n.props,
                        g = t.props,
                        m = t.type;
                    if ("svg" === m && (i = !0), null != s) {
                        for (u = 0; u < s.length; u++)
                            if ((h = s[u]) && "setAttribute" in h == !!m && (m ? h.localName === m : 3 === h.nodeType)) {
                                e = h, s[u] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === m) return document.createTextNode(g);
                        e = i ? document.createElementNS("http://www.w3.org/TR/SVG", m) : document.createElement(m, g.is && g), s = null, a = !1
                    }
                    if (null === m) _ === g || a && e.data === g || (e.data = g);
                    else {
                        if (s = s && rM.call(e.childNodes), _ = n.props || rU, !a && null != s)
                            for (_ = {}, u = 0; u < e.attributes.length; u++) _[(h = e.attributes[u]).name] = h.value;
                        for (u in _) h = _[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = h : "key" === u || u in g || r2(e, u, null, h, i));
                        for (u in g) h = g[u], "children" == u ? f = h : "dangerouslySetInnerHTML" == u ? c = h : "value" == u ? p = h : "checked" == u ? v = h : "key" === u || a && "function" != typeof h || _[u] === h || r2(e, u, h, _[u], i);
                        if (c) a || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
                        else if (d && (e.innerHTML = ""), r0(e, rH(f) ? f : [f], t, n, r, i && "foreignObject" !== m, s, o, s ? s[0] : n.__k && rQ(n, 0), a, l), null != s)
                            for (u = s.length; u--;) null != s[u] && rV(s[u]);
                        a || (u = "value", void 0 === p || p === e[u] && ("progress" !== m || p) && ("option" !== m || p === _[u]) || r2(e, u, p, _[u], !1), u = "checked", void 0 !== v && v !== e[u] && r2(e, u, v, _[u], !1))
                    }
                    return e
                }(n.__e, t, n, r, i, s, o, l, u);
                (c = r$.diffed) && c(t)
            }

            function r4(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    r$.__e(e, n)
                }
            }

            function r9(e, t, n) {
                var r, i;
                if (r$.unmount && r$.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || r4(r, null, t)), null != (r = e.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (e) {
                        r$.__e(e, t)
                    }
                    r.base = r.__P = null, e.__c = void 0
                }
                if (r = e.__k)
                    for (i = 0; i < r.length; i++) r[i] && r9(r[i], t, n || "function" != typeof e.type);
                n || null == e.__e || rV(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function r8(e, t, n) {
                return this.constructor(e, n)
            }
            rM = rB.slice, r$ = {
                __e: function(e, t, n, r) {
                    for (var i, s, o; t = t.__;)
                        if ((i = t.__c) && !i.__) try {
                            if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, rj = 0, rY.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = rW({}, this.state), "function" == typeof e && (e = e(rW({}, n), this.props)), e && rW(n, e), null != e && this.__v && (t && this._sb.push(t), rJ(this))
            }, rY.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), rJ(this))
            }, rY.prototype.render = rK, rA = [], rD = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, rq = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, rX.__r = 0, rZ = 0;
            var r7 = function(e) {
                var t, n, r, i, s, o;
                return null != (null === (t = e.conditions) || void 0 === t || null === (n = t.events) || void 0 === n || null === (r = n.values) || void 0 === r ? void 0 : r.length) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0
            };
            i_ = {
                isPreviewMode: !1,
                previewPageIndex: 0,
                handleCloseSurveyPopup: function() {}
            }, (im = {
                __c: ig = "__cC" + rZ++,
                __: i_,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var t, n;
                    return this.getChildContext || (t = [], (n = {})[ig] = this, this.getChildContext = function() {
                        return n
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && t.some(function(e) {
                            e.__e = !0, rJ(e)
                        })
                    }, this.sub = function(e) {
                        t.push(e);
                        var n = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            t.splice(t.indexOf(e), 1), n && n.call(e)
                        }
                    }), e.children
                }
            }).Provider.__ = im.Consumer.contextType = im;
            var ie = {
                    icontains: function(e) {
                        return !!O && O.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
                    },
                    not_icontains: function(e) {
                        return !!O && -1 === O.location.href.toLowerCase().indexOf(e.toLowerCase())
                    },
                    regex: function(e) {
                        return !!O && tr(O.location.href, e)
                    },
                    not_regex: function(e) {
                        return !!O && !tr(O.location.href, e)
                    },
                    exact: function(e) {
                        return (null == O ? void 0 : O.location.href) === e
                    },
                    is_not: function(e) {
                        return (null == O ? void 0 : O.location.href) !== e
                    }
                },
                it = function() {
                    function e(t) {
                        o(this, e), this.instance = t, this._surveyEventReceiver = null
                    }
                    return l(e, [{
                        key: "afterDecideResponse",
                        value: function(e) {
                            this._decideServerResponse = !!e.surveys, this.loadIfEnabled()
                        }
                    }, {
                        key: "loadIfEnabled",
                        value: function() {
                            var e = this,
                                t = null == B ? void 0 : B.extendPostHogWithSurveys;
                            this.instance.config.disable_surveys || !this._decideServerResponse || t || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new rC(this.instance.persistence)), this.instance.requestRouter.loadScript("/static/surveys.js", function(t) {
                                if (t) return H.error("Could not load surveys script", t);
                                B.extendPostHogWithSurveys(e.instance)
                            }))
                        }
                    }, {
                        key: "getSurveys",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.instance.config.disable_surveys) return e([]);
                            null == this._surveyEventReceiver && (this._surveyEventReceiver = new rC(this.instance.persistence));
                            var r = this.instance.get_property(eP);
                            if (r && !n) return e(r);
                            this.instance._send_request({
                                url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                                method: "GET",
                                transport: "XHR",
                                callback: function(n) {
                                    if (200 !== n.statusCode || !n.json) return e([]);
                                    var r, i, s = n.json.surveys || [],
                                        o = s.filter(function(e) {
                                            var t, n, r, i, s, o;
                                            return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (n = e.conditions) || void 0 === n || null === (r = n.events) || void 0 === r ? void 0 : r.values) && (null === (i = e.conditions) || void 0 === i || null === (s = i.events) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0
                                        });
                                    return o.length > 0 && !S(t.instance._addCaptureHook) && (null === (i = t._surveyEventReceiver) || void 0 === i || i.register(o), t.instance._addCaptureHook(function(e, n) {
                                        var r;
                                        null === (r = t._surveyEventReceiver) || void 0 === r || r.on(e, n)
                                    })), null === (r = t.instance.persistence) || void 0 === r || r.register(u({}, eP, s)), e(s)
                                }
                            })
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.getSurveys(function(n) {
                                var r, i = n.filter(function(e) {
                                        return !(!e.start_date || e.end_date)
                                    }).filter(function(e) {
                                        if (!e.conditions) return !0;
                                        var t, n, r, i, s = null === (t = e.conditions) || void 0 === t || !t.url || ie[null !== (n = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url),
                                            o = null === (i = e.conditions) || void 0 === i || !i.selector || (null == A ? void 0 : A.querySelector(e.conditions.selector));
                                        return s && o
                                    }),
                                    s = null === (r = t._surveyEventReceiver) || void 0 === r ? void 0 : r.getSurveys();
                                return e(i.filter(function(e) {
                                    if (!e.linked_flag_key && !e.targeting_flag_key && !e.internal_targeting_flag_key) return !0;
                                    var n, r, i = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                        o = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),
                                        a = !r7(e) || (null == s ? void 0 : s.includes(e.id)),
                                        l = !(null === (n = e.conditions) || void 0 === n || null === (r = n.events) || void 0 === r || !r.repeatedActivation || !r7(e)),
                                        u = !(e.internal_targeting_flag_key && !l) || t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key);
                                    return i && o && u && a
                                }))
                            }, n)
                        }
                    }, {
                        key: "getNextSurveyStep",
                        value: function(e, t, n) {
                            var r, i = e.questions[t],
                                s = t + 1;
                            if (null === (r = i.branching) || void 0 === r || !r.type) return t === e.questions.length - 1 ? rR.End : s;
                            if (i.branching.type === rR.End) return rR.End;
                            if (i.branching.type === rR.SpecificQuestion) {
                                if (Number.isInteger(i.branching.index)) return i.branching.index
                            } else if (i.branching.type === rR.ResponseBased) {
                                if (i.type === rE.SingleChoice) {
                                    var o, a, l = i.choices.indexOf("".concat(n));
                                    if (null !== (o = i.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(l)) {
                                        var u = i.branching.responseValues[l];
                                        return Number.isInteger(u) ? u : u === rR.End ? rR.End : s
                                    }
                                } else if (i.type === rE.Rating) {
                                    if ("number" != typeof n || !Number.isInteger(n)) throw Error("The response type must be an integer");
                                    var c, d, f = function(e, t) {
                                        if (3 === t) {
                                            if (e < 1 || e > 3) throw Error("The response must be in range 1-3");
                                            return 1 === e ? "negative" : 2 === e ? "neutral" : "positive"
                                        }
                                        if (5 === t) {
                                            if (e < 1 || e > 5) throw Error("The response must be in range 1-5");
                                            return e <= 2 ? "negative" : 3 === e ? "neutral" : "positive"
                                        }
                                        if (10 === t) {
                                            if (e < 0 || e > 10) throw Error("The response must be in range 0-10");
                                            return e <= 6 ? "detractors" : e <= 8 ? "passives" : "promoters"
                                        }
                                        throw Error("The scale must be one of: 3, 5, 10")
                                    }(n, i.scale);
                                    if (null !== (c = i.branching) && void 0 !== c && null !== (d = c.responseValues) && void 0 !== d && d.hasOwnProperty(f)) {
                                        var h = i.branching.responseValues[f];
                                        return Number.isInteger(h) ? h : h === rR.End ? rR.End : s
                                    }
                                }
                                return s
                            }
                            return console.warn("Falling back to next question index due to unexpected branching type"), s
                        }
                    }]), e
                }(),
                ir = function() {
                    function e(t) {
                        var n, r, i = this;
                        o(this, e), u(this, "serverLimits", {}), u(this, "lastEventRateLimited", !1), u(this, "checkForLimiting", function(e) {
                            var t = e.text;
                            if (t && t.length) try {
                                (JSON.parse(t).quota_limited || []).forEach(function(e) {
                                    H.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), i.serverLimits[e] = (new Date).getTime() + 6e4
                                })
                            } catch (e) {
                                return void H.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                                    text: t
                                })
                            }
                        }), this.instance = t, this.captureEventsPerSecond = (null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (r = t.config.rate_limiting) || void 0 === r ? void 0 : r.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
                    }
                    return l(e, [{
                        key: "clientRateLimitContext",
                        value: function() {
                            var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                i = (new Date).getTime(),
                                s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(eF)) && void 0 !== e ? e : {
                                    tokens: this.captureEventsBurstLimit,
                                    last: i
                                };
                            s.tokens += (i - s.last) / 1e3 * this.captureEventsPerSecond, s.last = i, s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
                            var o = s.tokens < 1;
                            return o || r || (s.tokens = Math.max(0, s.tokens - 1)), !o || this.lastEventRateLimited || r || this.instance.capture("$$client_ingestion_warning", {
                                $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
                            }, {
                                skip_client_rate_limiting: !0
                            }), this.lastEventRateLimited = o, null === (n = this.instance.persistence) || void 0 === n || n.set_property(eF, s), {
                                isRateLimited: o,
                                remainingTokens: s.tokens
                            }
                        }
                    }, {
                        key: "isServerRateLimited",
                        value: function(e) {
                            var t = this.serverLimits[e || "events"] || !1;
                            return !1 !== t && (new Date).getTime() < t
                        }
                    }]), e
                }(),
                ii = function() {
                    return i({
                        initialPathName: (null == L ? void 0 : L.pathname) || "",
                        referringDomain: t2.referringDomain()
                    }, t2.campaignParams())
                },
                is = function() {
                    function e(t, n, r) {
                        var i = this;
                        o(this, e), u(this, "_onSessionIdCallback", function(e) {
                            var t = i._getStoredProps();
                            if (!t || t.sessionId !== e) {
                                var n = {
                                    sessionId: e,
                                    props: i._sessionSourceParamGenerator()
                                };
                                i._persistence.register(u({}, eO, n))
                            }
                        }), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || ii, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
                    }
                    return l(e, [{
                        key: "_getStoredProps",
                        value: function() {
                            return this._persistence.props[eO]
                        }
                    }, {
                        key: "getSessionProps",
                        value: function() {
                            var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                            return t ? {
                                $client_session_initial_referring_host: t.referringDomain,
                                $client_session_initial_pathname: t.initialPathName,
                                $client_session_initial_utm_source: t.utm_source,
                                $client_session_initial_utm_campaign: t.utm_campaign,
                                $client_session_initial_utm_medium: t.utm_medium,
                                $client_session_initial_utm_content: t.utm_content,
                                $client_session_initial_utm_term: t.utm_term
                            } : {}
                        }
                    }]), e
                }(),
                io = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
                ia = function(e, t) {
                    if (!e) return !1;
                    var n = e.toLowerCase();
                    return io.concat(t || []).some(function(e) {
                        var t = e.toLowerCase();
                        return -1 !== n.indexOf(t)
                    })
                },
                il = function() {
                    function e() {
                        o(this, e), this.clicks = []
                    }
                    return l(e, [{
                        key: "isRageClick",
                        value: function(e, t, n) {
                            var r = this.clicks[this.clicks.length - 1];
                            if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                                if (this.clicks.push({
                                        x: e,
                                        y: t,
                                        timestamp: n
                                    }), 3 === this.clicks.length) return !0
                            } else this.clicks = [{
                                x: e,
                                y: t,
                                timestamp: n
                            }];
                            return !1
                        }
                    }]), e
                }();

            function iu(e) {
                var t;
                return e.id === eA || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + eA))
            }
            var ic = function() {
                    function e(t) {
                        var n;
                        o(this, e), u(this, "rageclicks", new il), u(this, "_enabledServerSide", !1), u(this, "_initialized", !1), this.instance = t, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ef])
                    }
                    return l(e, [{
                        key: "startIfEnabled",
                        value: function() {
                            this.isEnabled && !this._initialized && (H.info("[heatmaps] Heatmaps enabled, starting..."), this._setupListeners())
                        }
                    }, {
                        key: "isEnabled",
                        get: function() {
                            return S(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t = !!e.heatmaps;
                            this.instance.persistence && this.instance.persistence.register(u({}, ef, t)), this._enabledServerSide = t, this.startIfEnabled()
                        }
                    }, {
                        key: "getAndClearBuffer",
                        value: function() {
                            var e = this.buffer;
                            return this.buffer = void 0, e
                        }
                    }, {
                        key: "_setupListeners",
                        value: function() {
                            var e = this;
                            O && A && (eo(A, "click", function(t) {
                                return e._onClick(t || (null == O ? void 0 : O.event))
                            }, !1, !0), eo(A, "mousemove", function(t) {
                                return e._onMouseMove(t || (null == O ? void 0 : O.event))
                            }, !1, !0), this._initialized = !0)
                        }
                    }, {
                        key: "_getProperties",
                        value: function(e, t) {
                            var n = this.instance.scrollManager.scrollY(),
                                r = this.instance.scrollManager.scrollX(),
                                i = this.instance.scrollManager.scrollElement(),
                                s = function(e, t, n) {
                                    for (var r = e; r && !nn(r, "body") && r !== n;) {
                                        if (Q(t, null == O ? void 0 : O.getComputedStyle(r).position)) return !0;
                                        r = no(r)
                                    }
                                    return !1
                                }(e.target, ["fixed", "sticky"], i);
                            return {
                                x: e.clientX + (s ? 0 : r),
                                y: e.clientY + (s ? 0 : n),
                                target_fixed: s,
                                type: t
                            }
                        }
                    }, {
                        key: "_onClick",
                        value: function(e) {
                            var t;
                            if (!iu(e.target)) {
                                var n = this._getProperties(e, "click");
                                null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(i(i({}, n), {}, {
                                    type: "rageclick"
                                })), this._capture(n)
                            }
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function(e) {
                            var t = this;
                            iu(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(function() {
                                t._capture(t._getProperties(e, "mousemove"))
                            }, 500))
                        }
                    }, {
                        key: "_capture",
                        value: function(e) {
                            if (O) {
                                var t = O.location.href;
                                this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
                            }
                        }
                    }]), e
                }(),
                id = function() {
                    function e(t) {
                        var n = this;
                        o(this, e), u(this, "_updateScrollData", function() {
                            n.context || (n.context = {});
                            var e, t, r, i, s = n.scrollElement(),
                                o = n.scrollY(),
                                a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0,
                                l = o + ((null == s ? void 0 : s.clientHeight) || 0),
                                u = (null == s ? void 0 : s.scrollHeight) || 0;
                            n.context.lastScrollY = Math.ceil(o), n.context.maxScrollY = Math.max(o, null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0), n.context.maxScrollHeight = Math.max(a, null !== (t = n.context.maxScrollHeight) && void 0 !== t ? t : 0), n.context.lastContentY = l, n.context.maxContentY = Math.max(l, null !== (r = n.context.maxContentY) && void 0 !== r ? r : 0), n.context.maxContentHeight = Math.max(u, null !== (i = n.context.maxContentHeight) && void 0 !== i ? i : 0)
                        }), this.instance = t
                    }
                    return l(e, [{
                        key: "getContext",
                        value: function() {
                            return this.context
                        }
                    }, {
                        key: "resetContext",
                        value: function() {
                            var e = this.context;
                            return setTimeout(this._updateScrollData, 0), e
                        }
                    }, {
                        key: "startMeasuringScrollPosition",
                        value: function() {
                            null == O || O.addEventListener("scroll", this._updateScrollData, !0), null == O || O.addEventListener("scrollend", this._updateScrollData, !0), null == O || O.addEventListener("resize", this._updateScrollData)
                        }
                    }, {
                        key: "scrollElement",
                        value: function() {
                            if (!this.instance.config.scroll_root_selector) return null == O ? void 0 : O.document.documentElement;
                            var e, t = p(b(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var n = e.value,
                                        r = null == O ? void 0 : O.document.querySelector(n);
                                    if (r) return r
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        }
                    }, {
                        key: "scrollY",
                        value: function() {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement();
                                return e && e.scrollTop || 0
                            }
                            return O && (O.scrollY || O.pageYOffset || O.document.documentElement.scrollTop) || 0
                        }
                    }, {
                        key: "scrollX",
                        value: function() {
                            if (this.instance.config.scroll_root_selector) {
                                var e = this.scrollElement();
                                return e && e.scrollLeft || 0
                            }
                            return O && (O.scrollX || O.pageXOffset || O.document.documentElement.scrollLeft) || 0
                        }
                    }]), e
                }(),
                ih = function() {
                    function e() {
                        o(this, e), u(this, "events", {}), this.events = {}
                    }
                    return l(e, [{
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            return this.events[e] || (this.events[e] = []), this.events[e].push(t),
                                function() {
                                    n.events[e] = n.events[e].filter(function(e) {
                                        return e !== t
                                    })
                                }
                        }
                    }, {
                        key: "emit",
                        value: function(e, t) {
                            var n, r = p(this.events[e] || []);
                            try {
                                for (r.s(); !(n = r.n()).done;)(0, n.value)(t)
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var i, s = p(this.events["*"] || []);
                            try {
                                for (s.s(); !(i = s.n()).done;)(0, i.value)(e, t)
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                    }]), e
                }(),
                ip = "$copy_autocapture";

            function iv(e, t) {
                return t.length > e ? t.slice(0, e) + "..." : t
            }
            var i_, ig, im, iy, ib = function() {
                    function e(t) {
                        o(this, e), u(this, "_initialized", !1), u(this, "_isDisabledServerSide", null), u(this, "rageclicks", new il), u(this, "_elementsChainAsString", !1), this.instance = t
                    }
                    return l(e, [{
                        key: "config",
                        get: function() {
                            var e, t = w(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                            return t.url_allowlist = null === (e = t.url_allowlist) || void 0 === e ? void 0 : e.map(function(e) {
                                return new RegExp(e)
                            }), t
                        }
                    }, {
                        key: "_addDomEventHandlers",
                        value: function() {
                            var e = this;
                            if (this.isBrowserSupported()) {
                                if (O && A) {
                                    var t = function(t) {
                                            t = t || (null == O ? void 0 : O.event);
                                            try {
                                                e._captureEvent(t)
                                            } catch (e) {
                                                H.error("Failed to capture event", e)
                                            }
                                        },
                                        n = function(t) {
                                            t = t || (null == O ? void 0 : O.event), e._captureEvent(t, ip)
                                        };
                                    eo(A, "submit", t, !1, !0), eo(A, "change", t, !1, !0), eo(A, "click", t, !1, !0), this.config.capture_copied_text && (eo(A, "copy", n, !1, !0), eo(A, "cut", n, !1, !0))
                                }
                            } else H.info("Disabling Automatic Event Collection because this browser is not supported")
                        }
                    }, {
                        key: "startIfEnabled",
                        value: function() {
                            this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register(u({}, ed, !!e.autocapture_opt_out)), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
                        }
                    }, {
                        key: "isEnabled",
                        get: function() {
                            var e, t, n = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[ed];
                            if (P(this._isDisabledServerSide) && !C(n) && !this.instance.config.advanced_disable_decide) return !1;
                            var r = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!n;
                            return !!this.instance.config.autocapture && !r
                        }
                    }, {
                        key: "_previousElementSibling",
                        value: function(e) {
                            if (e.previousElementSibling) return e.previousElementSibling;
                            var t = e;
                            do t = t.previousSibling; while (t && !nt(t));
                            return t
                        }
                    }, {
                        key: "_getAugmentPropertiesFromElement",
                        value: function(e) {
                            if (!na(e)) return {};
                            var t = {};
                            return K(e.attributes, function(e) {
                                if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                                    var n = e.name.replace("data-ph-capture-attribute-", ""),
                                        r = e.value;
                                    n && r && nv(r) && (t[n] = r)
                                }
                            }), t
                        }
                    }, {
                        key: "_getPropertiesFromElement",
                        value: function(e, t, n) {
                            var r, i = e.tagName.toLowerCase(),
                                s = {
                                    tag_name: i
                                };
                            ns.indexOf(i) > -1 && !n && ("a" === i.toLowerCase() || "button" === i.toLowerCase() ? s.$el_text = iv(1024, n_(e)) : s.$el_text = iv(1024, ne(e)));
                            var o = t8(e);
                            o.length > 0 && (s.classes = o.filter(function(e) {
                                return "" !== e
                            }));
                            var a = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist;
                            K(e.attributes, function(n) {
                                var r;
                                if ((!nl(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(n.name)) && (null == a || !a.includes(n.name)) && !t && nv(n.value) && (!E(r = n.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) {
                                    var i = n.value;
                                    "class" === n.name && (i = t9(i).join(" ")), s["attr__" + n.name] = iv(1024, i)
                                }
                            });
                            for (var l = 1, u = 1, c = e; c = this._previousElementSibling(c);) l++, c.tagName === e.tagName && u++;
                            return s.nth_child = l, s.nth_of_type = u, s
                        }
                    }, {
                        key: "_getDefaultProperties",
                        value: function(e) {
                            return {
                                $event_type: e,
                                $ce_version: 1
                            }
                        }
                    }, {
                        key: "_getEventTarget",
                        value: function(e) {
                            var t;
                            return S(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
                        }
                    }, {
                        key: "_captureEvent",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
                            if (this.isEnabled) {
                                var r, o = this._getEventTarget(e);
                                nr(o) && (o = o.parentNode || null), "$autocapture" === n && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null !== (r = this.rageclicks) && void 0 !== r && r.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                                var a = n === ip;
                                if (o && function(e, t) {
                                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                            r = arguments.length > 3 ? arguments[3] : void 0,
                                            i = arguments.length > 4 ? arguments[4] : void 0;
                                        if (!O || !e || nn(e, "html") || !nt(e)) return !1;
                                        if (null != n && n.url_allowlist) {
                                            var o = O.location.href,
                                                a = n.url_allowlist;
                                            if (a && !a.some(function(e) {
                                                    return o.match(e)
                                                })) return !1
                                        }
                                        if (null != n && n.dom_event_allowlist) {
                                            var l = n.dom_event_allowlist;
                                            if (l && !l.some(function(e) {
                                                    return t.type === e
                                                })) return !1
                                        }
                                        for (var u = !1, c = [e], d = !0, f = e; f.parentNode && !nn(f, "body");)
                                            if (ni(f.parentNode)) c.push(f.parentNode.host), f = f.parentNode.host;
                                            else {
                                                if (!(d = no(f))) break;
                                                if (r || ns.indexOf(d.tagName.toLowerCase()) > -1) u = !0;
                                                else {
                                                    var h = O.getComputedStyle(d);
                                                    h && "pointer" === h.getPropertyValue("cursor") && (u = !0)
                                                }
                                                c.push(d), f = d
                                            }
                                        if (! function(e, t) {
                                                var n = null == t ? void 0 : t.element_allowlist;
                                                if (S(n)) return !0;
                                                var r, i = p(e);
                                                try {
                                                    for (i.s(); !(r = i.n()).done;) {
                                                        var o = function() {
                                                            var e = r.value;
                                                            if (n.some(function(t) {
                                                                    return e.tagName.toLowerCase() === t
                                                                })) return {
                                                                v: !0
                                                            }
                                                        }();
                                                        if ("object" === s(o)) return o.v
                                                    }
                                                } catch (e) {
                                                    i.e(e)
                                                } finally {
                                                    i.f()
                                                }
                                                return !1
                                            }(c, n) || ! function(e, t) {
                                                var n = null == t ? void 0 : t.css_selector_allowlist;
                                                if (S(n)) return !0;
                                                var r, i = p(e);
                                                try {
                                                    for (i.s(); !(r = i.n()).done;) {
                                                        var o = function() {
                                                            var e = r.value;
                                                            if (n.some(function(t) {
                                                                    return e.matches(t)
                                                                })) return {
                                                                v: !0
                                                            }
                                                        }();
                                                        if ("object" === s(o)) return o.v
                                                    }
                                                } catch (e) {
                                                    i.e(e)
                                                } finally {
                                                    i.f()
                                                }
                                                return !1
                                            }(c, n)) return !1;
                                        var v = O.getComputedStyle(e);
                                        if (v && "pointer" === v.getPropertyValue("cursor") && "click" === t.type) return !0;
                                        var _ = e.tagName.toLowerCase();
                                        switch (_) {
                                            case "html":
                                                return !1;
                                            case "form":
                                                return (i || ["submit"]).indexOf(t.type) >= 0;
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                return (i || ["change", "click"]).indexOf(t.type) >= 0;
                                            default:
                                                return u ? (i || ["click"]).indexOf(t.type) >= 0 : (i || ["click"]).indexOf(t.type) >= 0 && (ns.indexOf(_) > -1 || "true" === e.getAttribute("contenteditable"))
                                        }
                                    }(o, e, this.config, a, a ? ["copy", "cut"] : void 0)) {
                                    for (var l, u, d = [o], f = o; f.parentNode && !nn(f, "body");) ni(f.parentNode) ? (d.push(f.parentNode.host), f = f.parentNode.host) : (d.push(f.parentNode), f = f.parentNode);
                                    var h, v, _ = [],
                                        g = {},
                                        m = !1;
                                    if (K(d, function(e) {
                                            var n = na(e);
                                            "a" === e.tagName.toLowerCase() && (h = e.getAttribute("href"), h = n && nv(h) && h), Q(t8(e), "ph-no-capture") && (m = !0), _.push(t._getPropertiesFromElement(e, t.instance.config.mask_all_element_attributes, t.instance.config.mask_all_text)), Y(g, t._getAugmentPropertiesFromElement(e))
                                        }), this.instance.config.mask_all_text || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? _[0].$el_text = n_(o) : _[0].$el_text = ne(o)), h) {
                                        _[0].attr__href = h;
                                        var y, k, w = null === (y = tn(h)) || void 0 === y ? void 0 : y.host,
                                            x = null == O || null === (k = O.location) || void 0 === k ? void 0 : k.host;
                                        w && x && w !== x && (v = h)
                                    }
                                    if (m) return !1;
                                    var E = Y(this._getDefaultProperties(e.type), this._elementsChainAsString ? {
                                        $elements_chain: _.map(function(e) {
                                            var t, n, r, i = {
                                                text: null === (n = e.$el_text) || void 0 === n ? void 0 : n.slice(0, 400),
                                                tag_name: e.tag_name,
                                                href: null === (r = e.attr__href) || void 0 === r ? void 0 : r.slice(0, 2048),
                                                attr_class: (t = e.attr__class) ? b(t) ? t : t9(t) : void 0,
                                                attr_id: e.attr__id,
                                                nth_child: e.nth_child,
                                                nth_of_type: e.nth_of_type,
                                                attributes: {}
                                            };
                                            return J(e).filter(function(e) {
                                                return 0 === c(e, 1)[0].indexOf("attr__")
                                            }).forEach(function(e) {
                                                var t = c(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return i.attributes[n] = r
                                            }), i
                                        }).map(function(e) {
                                            var t, n, r = "";
                                            if (e.tag_name && (r += e.tag_name), e.attr_class) {
                                                e.attr_class.sort();
                                                var s, o = p(e.attr_class);
                                                try {
                                                    for (o.s(); !(s = o.n()).done;) {
                                                        var a = s.value;
                                                        r += ".".concat(a.replace(/"/g, ""))
                                                    }
                                                } catch (e) {
                                                    o.e(e)
                                                } finally {
                                                    o.f()
                                                }
                                            }
                                            var l = i(i(i(i({}, e.text ? {
                                                    text: e.text
                                                } : {}), {}, {
                                                    "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                                                    "nth-of-type": null !== (n = e.nth_of_type) && void 0 !== n ? n : 0
                                                }, e.href ? {
                                                    href: e.href
                                                } : {}), e.attr_id ? {
                                                    attr_id: e.attr_id
                                                } : {}), e.attributes),
                                                u = {};
                                            return J(l).sort(function(e, t) {
                                                var n = c(e, 1)[0],
                                                    r = c(t, 1)[0];
                                                return n.localeCompare(r)
                                            }).forEach(function(e) {
                                                var t = c(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return u[ng(n.toString())] = ng(r.toString())
                                            }), r += ":" + J(l).map(function(e) {
                                                var t = c(e, 2),
                                                    n = t[0],
                                                    r = t[1];
                                                return "".concat(n, '="').concat(r, '"')
                                            }).join("")
                                        }).join(";")
                                    } : {
                                        $elements: _
                                    }, null !== (l = _[0]) && void 0 !== l && l.$el_text ? {
                                        $el_text: null === (u = _[0]) || void 0 === u ? void 0 : u.$el_text
                                    } : {}, v && "click" === e.type ? {
                                        $external_click_url: v
                                    } : {}, g);
                                    if (n === ip) {
                                        var R, P = t7(null == O || null === (R = O.getSelection()) || void 0 === R ? void 0 : R.toString()),
                                            T = e.type || "clipboard";
                                        if (!P) return !1;
                                        E.$selected_content = P, E.$copy_type = T
                                    }
                                    return this.instance.capture(n, E), !0
                                }
                            }
                        }
                    }, {
                        key: "isBrowserSupported",
                        value: function() {
                            return k(null == A ? void 0 : A.querySelectorAll)
                        }
                    }]), e
                }(),
                ik = function() {
                    function e(t) {
                        var n = this;
                        o(this, e), u(this, "_restoreXHRPatch", void 0), u(this, "_restoreFetchPatch", void 0), u(this, "_startCapturing", function() {
                            S(n._restoreXHRPatch) && B.postHogTracingHeadersPatchFns._patchXHR(n.instance.sessionManager), S(n._restoreFetchPatch) && B.postHogTracingHeadersPatchFns._patchFetch(n.instance.sessionManager)
                        }), this.instance = t
                    }
                    return l(e, [{
                        key: "_loadScript",
                        value: function(e) {
                            B.postHogTracingHeadersPatchFns && e(), this.instance.requestRouter.loadScript("/static/tracing-headers.js?v=".concat(v.LIB_VERSION), function(t) {
                                t && H.error("[TRACING-HEADERS] failed to load script", t), e()
                            })
                        }
                    }, {
                        key: "startIfEnabledOrStop",
                        value: function() {
                            var e, t;
                            this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0)
                        }
                    }]), e
                }();
            (i$ = iy || (iy = {}))[i$.PENDING = -1] = "PENDING", i$[i$.DENIED = 0] = "DENIED", i$[i$.GRANTED = 1] = "GRANTED";
            var iw = function() {
                    function e(t) {
                        o(this, e), this.instance = t
                    }
                    return l(e, [{
                        key: "config",
                        get: function() {
                            return this.instance.config
                        }
                    }, {
                        key: "consent",
                        get: function() {
                            return this.getDnt() ? iy.DENIED : this.storedConsent
                        }
                    }, {
                        key: "isOptedOut",
                        value: function() {
                            return this.consent === iy.DENIED || this.consent === iy.PENDING && this.config.opt_out_capturing_by_default
                        }
                    }, {
                        key: "isOptedIn",
                        value: function() {
                            return !this.isOptedOut()
                        }
                    }, {
                        key: "optInOut",
                        value: function(e) {
                            this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            var e = this.instance.config,
                                t = e.token;
                            return (e.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + t
                        }
                    }, {
                        key: "storedConsent",
                        get: function() {
                            var e = this.storage.get(this.storageKey);
                            return "1" === e ? iy.GRANTED : "0" === e ? iy.DENIED : iy.PENDING
                        }
                    }, {
                        key: "storage",
                        get: function() {
                            if (!this._storage) {
                                var e = this.config.opt_out_capturing_persistence_type;
                                this._storage = "localStorage" === e ? e5 : e2;
                                var t = "localStorage" === e ? e2 : e5;
                                t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
                            }
                            return this._storage
                        }
                    }, {
                        key: "getDnt",
                        value: function() {
                            return !!this.config.respect_dnt && !!ea([null == j ? void 0 : j.doNotTrack, null == j ? void 0 : j.msDoNotTrack, B.doNotTrack], function(e) {
                                return Q([!0, 1, "1", "yes"], e)
                            })
                        }
                    }]), e
                }(),
                ix = "[Exception Capture]",
                iS = function() {
                    function e(t) {
                        var n, r = this;
                        o(this, e), u(this, "_endpoint", "/e/"), u(this, "originalOnUnhandledRejectionHandler", void 0), u(this, "startCapturing", function() {
                            var e;
                            if (O && r.isEnabled && !r.hasHandlers && (null === (e = O.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)) {
                                var t = O.posthogErrorWrappingFunctions.wrapOnError,
                                    n = O.posthogErrorWrappingFunctions.wrapUnhandledRejection;
                                if (t && n) try {
                                    r.unwrapOnError = t(r.captureException.bind(r)), r.unwrapUnhandledRejection = n(r.captureException.bind(r))
                                } catch (e) {
                                    H.error(ix + " failed to start", e), r.stopCapturing()
                                } else H.error(ix + " failed to load error wrapping functions - cannot start")
                            }
                        }), this.instance = t, this.remoteEnabled = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[eh]), this.startIfEnabled()
                    }
                    return l(e, [{
                        key: "isEnabled",
                        get: function() {
                            var e;
                            return null !== (e = this.remoteEnabled) && void 0 !== e && e
                        }
                    }, {
                        key: "isCapturing",
                        get: function() {
                            var e;
                            return !(null == O || null === (e = O.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
                        }
                    }, {
                        key: "hasHandlers",
                        get: function() {
                            return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
                        }
                    }, {
                        key: "startIfEnabled",
                        value: function() {
                            this.isEnabled && !this.isCapturing && (H.info(ix + " enabled, starting..."), this.loadScript(this.startCapturing))
                        }
                    }, {
                        key: "loadScript",
                        value: function(e) {
                            this.hasHandlers && e(), this.instance.requestRouter.loadScript(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js?v=".concat(v.LIB_VERSION)), function(t) {
                                t && H.error(ix + " failed to load script", t), e()
                            })
                        }
                    }, {
                        key: "stopCapturing",
                        value: function() {
                            var e, t;
                            null === (e = this.unwrapOnError) || void 0 === e || e.call(this), null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this)
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t = e.autocaptureExceptions;
                            this.remoteEnabled = !!t, this._endpoint = w(t) && t.endpoint || "/e/", this.instance.persistence && (this.instance.persistence.register(u({}, eh, this.remoteEnabled)), this.instance.persistence.register(u({}, "$exception_capture_endpoint", this._endpoint))), this.startIfEnabled()
                        }
                    }, {
                        key: "captureException",
                        value: function(e) {
                            var t = this.instance.requestRouter.endpointFor("ui");
                            e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.sendExceptionEvent(e)
                        }
                    }, {
                        key: "sendExceptionEvent",
                        value: function(e) {
                            this.instance.capture("$exception", e, {
                                _noTruncate: !0,
                                _batchKey: "exceptionEvent",
                                _noHeatmaps: !0,
                                _url: this._endpoint
                            })
                        }
                    }]), e
                }(),
                iE = "[Web Vitals]",
                iR = function() {
                    function e(t) {
                        var n, r = this;
                        o(this, e), u(this, "_enabledServerSide", !1), u(this, "_initialized", !1), u(this, "buffer", {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        }), u(this, "_flushToCapture", function() {
                            clearTimeout(r._delayedFlushTimer), 0 !== r.buffer.metrics.length && (r.instance.capture("$web_vitals", r.buffer.metrics.reduce(function(e, t) {
                                var n;
                                return i(i({}, e), {}, (u(n = {}, "$web_vitals_".concat(t.name, "_event"), i({}, t)), u(n, "$web_vitals_".concat(t.name, "_value"), t.value), n))
                            }, {})), r.buffer = {
                                url: void 0,
                                metrics: [],
                                firstMetricTimestamp: void 0
                            })
                        }), u(this, "_addToBuffer", function(e) {
                            var t, n = null === (t = r.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
                            if (S(n)) H.error(iE + "Could not read session ID. Dropping metrics!");
                            else {
                                r.buffer = r.buffer || {};
                                var s = r._currentURL();
                                S(s) || (T(null == e ? void 0 : e.name) || T(null == e ? void 0 : e.value) ? H.error(iE + "Invalid metric received", e) : (r.buffer.url !== s && (r._flushToCapture(), r._delayedFlushTimer = setTimeout(r._flushToCapture, 8e3)), S(r.buffer.url) && (r.buffer.url = s), r.buffer.firstMetricTimestamp = S(r.buffer.firstMetricTimestamp) ? Date.now() : r.buffer.firstMetricTimestamp, r.buffer.metrics.push(i(i({}, e), {}, {
                                    $current_url: s,
                                    $session_id: n.sessionId,
                                    $window_id: n.windowId,
                                    timestamp: Date.now()
                                })), 4 === r.buffer.metrics.length && r._flushToCapture()))
                            }
                        }), u(this, "_startCapturing", function() {
                            var e = B.postHogWebVitalsCallbacks,
                                t = e.onLCP,
                                n = e.onCLS,
                                i = e.onFCP,
                                s = e.onINP;
                            t(r._addToBuffer), n(r._addToBuffer), i(r._addToBuffer), s(r._addToBuffer), r._initialized = !0
                        }), this.instance = t, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ep]), this.startIfEnabled()
                    }
                    return l(e, [{
                        key: "isEnabled",
                        get: function() {
                            var e = w(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
                            return C(e) ? e : this._enabledServerSide
                        }
                    }, {
                        key: "startIfEnabled",
                        value: function() {
                            this.isEnabled && !this._initialized && (H.info(iE + " enabled, starting..."), this.loadScript(this._startCapturing))
                        }
                    }, {
                        key: "afterDecideResponse",
                        value: function(e) {
                            var t = w(e.capturePerformance) && !!e.capturePerformance.web_vitals;
                            this.instance.persistence && this.instance.persistence.register(u({}, ep, t)), this._enabledServerSide = t, this.startIfEnabled()
                        }
                    }, {
                        key: "loadScript",
                        value: function(e) {
                            O.postHogWebVitalsCallbacks && e(), this.instance.requestRouter.loadScript(this.instance.requestRouter.endpointFor("assets", "/static/web-vitals.js?v=".concat(v.LIB_VERSION)), function(t) {
                                t && H.error(iE + " failed to load script", t), e()
                            })
                        }
                    }, {
                        key: "_currentURL",
                        value: function() {
                            var e = O ? O.location.href : void 0;
                            return e || H.error(iE + "Could not determine current URL"), e
                        }
                    }]), e
                }(),
                iP = {},
                iT = function() {},
                iI = "posthog",
                iC = !ru && -1 === (null == U ? void 0 : U.indexOf("MSIE")) && -1 === (null == U ? void 0 : U.indexOf("Mozilla")),
                iO = function() {
                    var e, t, n;
                    return {
                        api_host: "https://us.i.posthog.com",
                        ui_host: null,
                        token: "",
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie: !!E(n = null == (t = null == A ? void 0 : A.location) ? void 0 : t.hostname) && "herokuapp.com" !== n.split(".").slice(-2).join("."),
                        persistence: "localStorage+cookie",
                        persistence_name: "",
                        loaded: iT,
                        store_google: !0,
                        custom_campaign_params: [],
                        custom_blocked_useragents: [],
                        save_referrer: !0,
                        capture_pageview: !0,
                        capture_pageleave: "if_capture_pageview",
                        debug: L && E(null == L ? void 0 : L.search) && -1 !== L.search.indexOf("__posthog_debug=true") || !1,
                        verbose: !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_surveys: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie: "https:" === (null == O || null === (e = O.location) || void 0 === e ? void 0 : e.protocol),
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_useragent_filter: !1,
                        opt_out_capturing_persistence_type: "localStorage",
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_denylist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        request_headers: {},
                        inapp_protocol: "//",
                        inapp_link_new_window: !1,
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        feature_flag_request_timeout_ms: 3e3,
                        on_request_error: function(e) {
                            var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                            H.error(t)
                        },
                        get_device_id: function(e) {
                            return e
                        },
                        _onCapture: iT,
                        capture_performance: void 0,
                        name: "posthog",
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800,
                        person_profiles: "always",
                        __add_tracing_headers: !1
                    }
                },
                iF = function(e) {
                    var t = {};
                    S(e.process_person) || (t.person_profiles = e.process_person), S(e.xhr_headers) || (t.request_headers = e.xhr_headers), S(e.cookie_name) || (t.persistence_name = e.cookie_name), S(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
                    var n = Y({}, t, e);
                    return b(e.property_blacklist) && (S(e.property_denylist) ? n.property_denylist = e.property_blacklist : b(e.property_denylist) ? n.property_denylist = [].concat(d(e.property_blacklist), d(e.property_denylist)) : H.error("Invalid value for property_denylist config: " + e.property_denylist)), n
                },
                iN = function() {
                    function e() {
                        o(this, e), u(this, "__forceAllowLocalhost", !1)
                    }
                    return l(e, [{
                        key: "_forceAllowLocalhost",
                        get: function() {
                            return this.__forceAllowLocalhost
                        },
                        set: function(e) {
                            H.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                        }
                    }]), e
                }(),
                iM = function() {
                    function e() {
                        var t = this;
                        o(this, e), u(this, "webPerformance", new iN), u(this, "_internalEventEmitter", new ih), this.config = iO(), this.decideEndpointWasHit = !1, this.SentryIntegration = rP, this.sentryIntegration = function(e) {
                            var n;
                            return n = rw(t, e), {
                                name: rk,
                                processEvent: function(e) {
                                    return n(e)
                                }
                            }
                        }, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.featureFlags = new eB(this), this.toolbar = new nL(this), this.scrollManager = new id(this), this.pageViewManager = new rT(this), this.surveys = new it(this), this.rateLimiter = new ir(this), this.requestRouter = new rb(this), this.consent = new iw(this), this.people = {
                            set: function(e, n, r) {
                                var i = E(e) ? u({}, e, n) : e;
                                t.setPersonProperties(i), null == r || r({})
                            },
                            set_once: function(e, n, r) {
                                var i = E(e) ? u({}, e, n) : e;
                                t.setPersonProperties(void 0, i), null == r || r({})
                            }
                        }, this.on("eventCaptured", function(e) {
                            return H.info("send", e)
                        })
                    }
                    return l(e, [{
                        key: "init",
                        value: function(t, n, r) {
                            if (r && r !== iI) {
                                var i, s = null !== (i = iP[r]) && void 0 !== i ? i : new e;
                                return s._init(t, n, r), iP[r] = s, iP[iI][r] = s, s
                            }
                            return this._init(t, n, r)
                        }
                    }, {
                        key: "_init",
                        value: function(e) {
                            var t, n, r = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 ? arguments[2] : void 0;
                            if (S(e) || R(e)) return H.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                            if (this.__loaded) return H.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                            if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(Y({}, iO(), iF(s), {
                                    name: o,
                                    token: e
                                })), this.compression = s.disable_compression ? void 0 : X.Base64, this.persistence = new t5(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new t5(i(i({}, this.config), {}, {
                                    persistence: "sessionStorage"
                                })), this._requestQueue = new nD(function(e) {
                                    return r._send_retriable_request(e)
                                }), this._retryQueue = new rg(this), this.__request_queue = [], this.sessionManager = new rm(this.config, this.persistence), this.sessionPropsManager = new is(this.sessionManager, this.persistence), new ik(this).startIfEnabledOrStop(), this.sessionRecording = new nM(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new ib(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new ic(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new iR(this), this.exceptionObserver = new iS(this), this.exceptionObserver.startIfEnabled(), v.DEBUG = v.DEBUG || this.config.debug, this._sync_opt_out_with_persistence(), void 0 !== (null === (t = s.bootstrap) || void 0 === t ? void 0 : t.distinctID)) {
                                var a, l, u = this.config.get_device_id(eJ()),
                                    c = null !== (a = s.bootstrap) && void 0 !== a && a.isIdentifiedID ? u : s.bootstrap.distinctID;
                                this.persistence.set_property(eC, null !== (l = s.bootstrap) && void 0 !== l && l.isIdentifiedID ? "identified" : "anonymous"), this.register({
                                    distinct_id: s.bootstrap.distinctID,
                                    $device_id: c
                                })
                            }
                            if (this._hasBootstrappedFeatureFlags()) {
                                var d, f, h = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlags) || {}).filter(function(e) {
                                        var t, n;
                                        return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e])
                                    }).reduce(function(e, t) {
                                        var n, r;
                                        return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (r = n.featureFlags) || void 0 === r ? void 0 : r[t]) || !1, e
                                    }, {}),
                                    p = Object.keys((null === (f = s.bootstrap) || void 0 === f ? void 0 : f.featureFlagPayloads) || {}).filter(function(e) {
                                        return h[e]
                                    }).reduce(function(e, t) {
                                        var n, r, i, o;
                                        return null !== (n = s.bootstrap) && void 0 !== n && null !== (r = n.featureFlagPayloads) && void 0 !== r && r[t] && (e[t] = null === (i = s.bootstrap) || void 0 === i || null === (o = i.featureFlagPayloads) || void 0 === o ? void 0 : o[t]), e
                                    }, {});
                                this.featureFlags.receivedFeatureFlags({
                                    featureFlags: h,
                                    featureFlagPayloads: p
                                })
                            }
                            if (!this.get_distinct_id()) {
                                var _ = this.config.get_device_id(eJ());
                                this.register_once({
                                    distinct_id: _,
                                    $device_id: _
                                }, ""), this.persistence.set_property(eC, "anonymous")
                            }
                            return null == O || null === (n = O.addEventListener) || void 0 === n || n.call(O, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s.segment ? function(e, t) {
                                var n = e.config.segment;
                                if (!n) return t();
                                ! function(e, t) {
                                    var n = e.config.segment;
                                    if (!n) return t();
                                    var r = function(n) {
                                            var r = function() {
                                                return n.anonymousId() || eJ()
                                            };
                                            e.config.get_device_id = r, n.id() && (e.register({
                                                distinct_id: n.id(),
                                                $device_id: r()
                                            }), e.persistence.set_property(eC, "identified")), t()
                                        },
                                        i = n.user();
                                    "then" in i && k(i.then) ? i.then(function(e) {
                                        return r(e)
                                    }) : r(i)
                                }(e, function() {
                                    var r;
                                    n.register((Promise && Promise.resolve || H.warn("This browser does not have Promise support, and can not use the segment integration"), r = function(t, n) {
                                        if (!n) return t;
                                        t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                                            distinct_id: t.event.userId
                                        }), e.reloadFeatureFlags());
                                        var r, i = e._calculate_event_properties(n, null !== (r = t.event.properties) && void 0 !== r ? r : {});
                                        return t.event.properties = Object.assign({}, i, t.event.properties), t
                                    }, {
                                        name: "PostHog JS",
                                        type: "enrichment",
                                        version: "1.0.0",
                                        isLoaded: function() {
                                            return !0
                                        },
                                        load: function() {
                                            return Promise.resolve()
                                        },
                                        track: function(e) {
                                            return r(e, e.event.event)
                                        },
                                        page: function(e) {
                                            return r(e, "$pageview")
                                        },
                                        identify: function(e) {
                                            return r(e, "$identify")
                                        },
                                        screen: function(e) {
                                            return r(e, "$screen")
                                        }
                                    })).then(function() {
                                        t()
                                    })
                                })
                            }(this, function() {
                                return r._loaded()
                            }) : this._loaded(), k(this.config._onCapture) && this.on("eventCaptured", function(e) {
                                return r.config._onCapture(e.event, e)
                            }), this
                        }
                    }, {
                        key: "_afterDecideResponse",
                        value: function(e) {
                            var t, n, r, i, s, o, a;
                            this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = Q(e.supportedCompression, X.GZipJS) ? X.GZipJS : Q(e.supportedCompression, X.Base64) ? X.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), null === (n = this.sessionRecording) || void 0 === n || n.afterDecideResponse(e), null === (r = this.autocapture) || void 0 === r || r.afterDecideResponse(e), null === (i = this.heatmaps) || void 0 === i || i.afterDecideResponse(e), null === (s = this.surveys) || void 0 === s || s.afterDecideResponse(e), null === (o = this.webVitalsAutocapture) || void 0 === o || o.afterDecideResponse(e), null === (a = this.exceptionObserver) || void 0 === a || a.afterDecideResponse(e)
                        }
                    }, {
                        key: "_loaded",
                        value: function() {
                            var e = this,
                                t = this.config.advanced_disable_decide;
                            t || this.featureFlags.setReloadingPaused(!0);
                            try {
                                this.config.loaded(this)
                            } catch (e) {
                                H.critical("`loaded` function failed", e)
                            }
                            this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(function() {
                                A && e.capture("$pageview", {
                                    title: A.title
                                }, {
                                    send_instantly: !0
                                })
                            }, 1), t || (new n$(this).call(), this.featureFlags.resetRequestQueue())
                        }
                    }, {
                        key: "_start_queue_if_opted_in",
                        value: function() {
                            var e;
                            this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
                        }
                    }, {
                        key: "_dom_loaded",
                        value: function() {
                            var e = this;
                            this.has_opted_out_capturing() || G(this.__request_queue, function(t) {
                                return e._send_retriable_request(t)
                            }), this.__request_queue = [], this._start_queue_if_opted_in()
                        }
                    }, {
                        key: "_handle_unload",
                        value: function() {
                            var e, t;
                            this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
                                transport: "sendBeacon"
                            })
                        }
                    }, {
                        key: "_send_request",
                        value: function(e) {
                            var t = this;
                            this.__loaded && (iC ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = rd(e.url, {
                                ip: this.config.ip ? 1 : 0
                            }), e.headers = this.config.request_headers, e.compression = "best-available" === e.compression ? this.compression : e.compression, function(e) {
                                var t, n, r, s = i({}, e);
                                s.timeout = s.timeout || 6e4, s.url = rd(s.url, {
                                    _: (new Date).getTime().toString(),
                                    ver: v.LIB_VERSION,
                                    compression: s.compression
                                });
                                var o = null !== (t = s.transport) && void 0 !== t ? t : "XHR",
                                    a = null !== (n = null === (r = ea(rh, function(e) {
                                        return e.transport === o
                                    })) || void 0 === r ? void 0 : r.method) && void 0 !== n ? n : rh[0].method;
                                if (!a) throw Error("No available transport method");
                                a(s)
                            }(i(i({}, e), {}, {
                                callback: function(n) {
                                    var r, i, s;
                                    t.rateLimiter.checkForLimiting(n), n.statusCode >= 400 && (null === (i = (s = t.config).on_request_error) || void 0 === i || i.call(s, n)), null === (r = e.callback) || void 0 === r || r.call(e, n)
                                }
                            }))))
                        }
                    }, {
                        key: "_send_retriable_request",
                        value: function(e) {
                            this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                        }
                    }, {
                        key: "_execute_array",
                        value: function(e) {
                            var t, n = this,
                                r = [],
                                i = [],
                                s = [];
                            G(e, function(e) {
                                e && (b(t = e[0]) ? s.push(e) : k(e) ? e.call(n) : b(e) && "alias" === t ? r.push(e) : b(e) && -1 !== t.indexOf("capture") && k(n[t]) ? s.push(e) : i.push(e))
                            });
                            var o = function(e, t) {
                                G(e, function(e) {
                                    if (b(e[0])) {
                                        var n = t;
                                        K(e, function(e) {
                                            n = n[e[0]].apply(n, e.slice(1))
                                        })
                                    } else this[e[0]].apply(this, e.slice(1))
                                }, t)
                            };
                            o(r, this), o(i, this), o(s, this)
                        }
                    }, {
                        key: "_hasBootstrappedFeatureFlags",
                        value: function() {
                            var e, t;
                            return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                        }
                    }, {
                        key: "push",
                        value: function(e) {
                            this._execute_array([e])
                        }
                    }, {
                        key: "capture",
                        value: function(e, t, n) {
                            var r;
                            if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return H.uninitializedWarning("posthog.capture");
                            if (!this.consent.isOptedOut()) {
                                if (!S(e) && E(e)) {
                                    if (!U || this.config.opt_out_useragent_filter || !ia(U, this.config.custom_blocked_useragents)) {
                                        var s = null != n && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                                        if (null == s || !s.isRateLimited) {
                                            this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                            var o, a, l, u, c = {
                                                uuid: eJ(),
                                                event: e,
                                                properties: this._calculate_event_properties(e, t || {}, n)
                                            };
                                            s && (c.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), (null == n ? void 0 : n.$set) && (c.$set = null == n ? void 0 : n.$set);
                                            var d = this._calculate_set_once_properties(null == n ? void 0 : n.$set_once);
                                            d && (c.$set_once = d), (o = c, a = null != n && n._noTruncate ? null : this.config.properties_string_max_length, l = function(e) {
                                                return E(e) && !P(a) ? e.slice(0, a) : e
                                            }, u = new Set, c = function e(t, n) {
                                                var r;
                                                return t !== Object(t) ? l ? l(t, n) : t : u.has(t) ? void 0 : (u.add(t), b(t) ? (r = [], G(t, function(t) {
                                                    r.push(e(t))
                                                })) : (r = {}, K(t, function(t, n) {
                                                    u.has(t) || (r[n] = e(t, n))
                                                })), r)
                                            }(o)).timestamp = (null == n ? void 0 : n.timestamp) || new Date, S(null == n ? void 0 : n.timestamp) || (c.properties.$event_time_override_provided = !0, c.properties.$event_time_override_system_time = new Date);
                                            var f = i(i({}, c.properties.$set), c.$set);
                                            x(f) || this.setPersonPropertiesForFlags(f), this._internalEventEmitter.emit("eventCaptured", c);
                                            var h = {
                                                method: "POST",
                                                url: null !== (r = null == n ? void 0 : n._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                                data: c,
                                                compression: "best-available",
                                                batchKey: null == n ? void 0 : n._batchKey
                                            };
                                            return !this.config.request_batching || n && (null == n || !n._batchKey) || null != n && n.send_instantly ? this._send_retriable_request(h) : this._requestQueue.enqueue(h), c
                                        }
                                        H.critical("This capture call is ignored due to client rate limiting.")
                                    }
                                } else H.error("No event name provided to posthog.capture")
                            }
                        }
                    }, {
                        key: "_addCaptureHook",
                        value: function(e) {
                            this.on("eventCaptured", function(t) {
                                return e(t.event, t)
                            })
                        }
                    }, {
                        key: "_calculate_event_properties",
                        value: function(e, t, n) {
                            if (!this.persistence || !this.sessionPersistence) return t;
                            var r = this.persistence.remove_event_timer(e),
                                s = i({}, t);
                            if (s.token = this.config.token, "$snapshot" === e) {
                                var o = i(i({}, this.persistence.properties()), this.sessionPersistence.properties());
                                return s.distinct_id = o.distinct_id, (!E(s.distinct_id) && !I(s.distinct_id) || R(s.distinct_id)) && H.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s
                            }
                            var a = t2.properties();
                            if (this.sessionManager) {
                                var l = this.sessionManager.checkAndGetSessionAndWindowId(),
                                    u = l.sessionId,
                                    c = l.windowId;
                                s.$session_id = u, s.$window_id = c
                            }
                            if (this.requestRouter.region === rv.CUSTOM && (s.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
                                var d = this.sessionPropsManager.getSessionProps();
                                s = Y(s, d)
                            }
                            if (!this.config.disable_scroll_properties) {
                                var f = {};
                                "$pageview" === e ? f = this.pageViewManager.doPageView() : "$pageleave" === e && (f = this.pageViewManager.doPageLeave()), s = Y(s, f)
                            }
                            if ("$pageview" === e && A && (s.title = A.title), !S(r)) {
                                var h = (new Date).getTime() - r;
                                s.$duration = parseFloat((h / 1e3).toFixed(3))
                            }
                            if (U && this.config.opt_out_useragent_filter && (s.$browser_type = ia(U, this.config.custom_blocked_useragents) ? "bot" : "browser"), (s = Y({}, a, this.persistence.properties(), this.sessionPersistence.properties(), s)).$is_identified = this._isIdentified(), null == n || !n._noHeatmaps) {
                                var p, v = null === (p = this.heatmaps) || void 0 === p ? void 0 : p.getAndClearBuffer();
                                v && (s.$heatmap_data = v)
                            }
                            b(this.config.property_denylist) ? K(this.config.property_denylist, function(e) {
                                delete s[e]
                            }) : H.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                            var _ = this.config.sanitize_properties;
                            return _ && (s = _(s, e)), s.$process_person_profile = this._hasPersonProcessing(), s
                        }
                    }, {
                        key: "_calculate_set_once_properties",
                        value: function(e) {
                            if (!this.persistence || !this._hasPersonProcessing()) return e;
                            var t = Y({}, this.persistence.get_initial_props(), e || {});
                            return x(t) ? void 0 : t
                        }
                    }, {
                        key: "register",
                        value: function(e, t) {
                            var n;
                            null === (n = this.persistence) || void 0 === n || n.register(e, t)
                        }
                    }, {
                        key: "register_once",
                        value: function(e, t, n) {
                            var r;
                            null === (r = this.persistence) || void 0 === r || r.register_once(e, t, n)
                        }
                    }, {
                        key: "register_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            var t;
                            null === (t = this.persistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "unregister_for_session",
                        value: function(e) {
                            var t;
                            null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                        }
                    }, {
                        key: "_register_single",
                        value: function(e, t) {
                            this.register(u({}, e, t))
                        }
                    }, {
                        key: "getFeatureFlag",
                        value: function(e, t) {
                            return this.featureFlags.getFeatureFlag(e, t)
                        }
                    }, {
                        key: "getFeatureFlagPayload",
                        value: function(e) {
                            var t = this.featureFlags.getFeatureFlagPayload(e);
                            try {
                                return JSON.parse(t)
                            } catch (e) {
                                return t
                            }
                        }
                    }, {
                        key: "isFeatureEnabled",
                        value: function(e, t) {
                            return this.featureFlags.isFeatureEnabled(e, t)
                        }
                    }, {
                        key: "reloadFeatureFlags",
                        value: function() {
                            this.featureFlags.reloadFeatureFlags()
                        }
                    }, {
                        key: "updateEarlyAccessFeatureEnrollment",
                        value: function(e, t) {
                            this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                        }
                    }, {
                        key: "getEarlyAccessFeatures",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.featureFlags.getEarlyAccessFeatures(e, t)
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            return this._internalEventEmitter.on(e, t)
                        }
                    }, {
                        key: "onFeatureFlags",
                        value: function(e) {
                            return this.featureFlags.onFeatureFlags(e)
                        }
                    }, {
                        key: "onSessionId",
                        value: function(e) {
                            var t, n;
                            return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t ? t : function() {}
                        }
                    }, {
                        key: "getSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getSurveys(e, t)
                        }
                    }, {
                        key: "getActiveMatchingSurveys",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.surveys.getActiveMatchingSurveys(e, t)
                        }
                    }, {
                        key: "getNextSurveyStep",
                        value: function(e, t, n) {
                            return this.surveys.getNextSurveyStep(e, t, n)
                        }
                    }, {
                        key: "identify",
                        value: function(e, t, n) {
                            if (!this.__loaded || !this.persistence) return H.uninitializedWarning("posthog.identify");
                            if (I(e) && (e = e.toString(), H.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
                                if (["distinct_id", "distinctid"].includes(e.toLowerCase())) H.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                                else if (this._requirePersonProcessing("posthog.identify")) {
                                    var r = this.get_distinct_id();
                                    this.register({
                                        $user_id: e
                                    }), this.get_property("$device_id") || this.register_once({
                                        $had_persisted_distinct_id: !0,
                                        $device_id: r
                                    }, ""), e !== r && e !== this.get_property(eu) && (this.unregister(eu), this.register({
                                        distinct_id: e
                                    }));
                                    var i = "anonymous" === (this.persistence.get_property(eC) || "anonymous");
                                    e !== r && i ? (this.persistence.set_property(eC, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
                                        distinct_id: e,
                                        $anon_distinct_id: r
                                    }, {
                                        $set: t || {},
                                        $set_once: n || {}
                                    }), this.featureFlags.setAnonymousDistinctId(r)) : (t || n) && this.setPersonProperties(t, n), e !== r && (this.reloadFeatureFlags(), this.unregister(eI))
                                }
                            } else H.error("Unique user id has not been set in posthog.identify")
                        }
                    }, {
                        key: "setPersonProperties",
                        value: function(e, t) {
                            (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
                                $set: e || {},
                                $set_once: t || {}
                            }))
                        }
                    }, {
                        key: "group",
                        value: function(e, t, n) {
                            if (e && t) {
                                if (this._requirePersonProcessing("posthog.group")) {
                                    var r = this.getGroups();
                                    r[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
                                        $groups: i(i({}, r), {}, u({}, e, t))
                                    }), n && (this.capture("$groupidentify", {
                                        $group_type: e,
                                        $group_key: t,
                                        $group_set: n
                                    }), this.setGroupPropertiesForFlags(u({}, e, n))), r[e] === t || n || this.reloadFeatureFlags()
                                }
                            } else H.error("posthog.group requires a group type and group key")
                        }
                    }, {
                        key: "resetGroups",
                        value: function() {
                            this.register({
                                $groups: {}
                            }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                        }
                    }, {
                        key: "setPersonPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetPersonPropertiesForFlags",
                        value: function() {
                            this.featureFlags.resetPersonPropertiesForFlags()
                        }
                    }, {
                        key: "setGroupPropertiesForFlags",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
                        }
                    }, {
                        key: "resetGroupPropertiesForFlags",
                        value: function(e) {
                            this.featureFlags.resetGroupPropertiesForFlags(e)
                        }
                    }, {
                        key: "reset",
                        value: function(e) {
                            if (!this.__loaded) return H.uninitializedWarning("posthog.reset");
                            var t, n, r, i, s = this.get_property("$device_id");
                            this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), null === (r = this.persistence) || void 0 === r || r.set_property(eC, "anonymous"), null === (i = this.sessionManager) || void 0 === i || i.resetSessionId();
                            var o = this.config.get_device_id(eJ());
                            this.register_once({
                                distinct_id: o,
                                $device_id: e ? o : s
                            }, "")
                        }
                    }, {
                        key: "get_distinct_id",
                        value: function() {
                            return this.get_property("distinct_id")
                        }
                    }, {
                        key: "getGroups",
                        value: function() {
                            return this.get_property("$groups") || {}
                        }
                    }, {
                        key: "get_session_id",
                        value: function() {
                            var e, t;
                            return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                        }
                    }, {
                        key: "get_session_replay_url",
                        value: function(e) {
                            if (!this.sessionManager) return "";
                            var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                n = t.sessionId,
                                r = t.sessionStartTimestamp,
                                i = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(n));
                            if (null != e && e.withTimestamp && r) {
                                var s, o = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
                                if (!r) return i;
                                var a = Math.max(Math.floor(((new Date).getTime() - r) / 1e3) - o, 0);
                                i += "?t=".concat(a)
                            }
                            return i
                        }
                    }, {
                        key: "alias",
                        value: function(e, t) {
                            return e === this.get_property(el) ? (H.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (S(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(eu, e), this.capture("$create_alias", {
                                alias: e,
                                distinct_id: t
                            })) : (H.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
                        }
                    }, {
                        key: "set_config",
                        value: function(e) {
                            var t, n, r, s, o = i({}, this.config);
                            w(e) && (Y(this.config, iF(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, o), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new t5(i(i({}, this.config), {}, {
                                persistence: "sessionStorage"
                            })), e5.is_supported() && "true" === e5.get("ph_debug") && (this.config.debug = !0), this.config.debug && (v.DEBUG = !0), null === (n = this.sessionRecording) || void 0 === n || n.startIfEnabledOrStop(), null === (r = this.autocapture) || void 0 === r || r.startIfEnabled(), null === (s = this.heatmaps) || void 0 === s || s.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
                        }
                    }, {
                        key: "startSessionRecording",
                        value: function(e) {
                            if (null != e && e.sampling) {
                                var t, n, r = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId();
                                null === (n = this.persistence) || void 0 === n || n.register(u({}, ew, !0)), H.info("Session recording started with sampling override for session: ", null == r ? void 0 : r.sessionId)
                            }
                            this.set_config({
                                disable_session_recording: !1
                            })
                        }
                    }, {
                        key: "stopSessionRecording",
                        value: function() {
                            this.set_config({
                                disable_session_recording: !0
                            })
                        }
                    }, {
                        key: "sessionRecordingStarted",
                        value: function() {
                            var e;
                            return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                        }
                    }, {
                        key: "loadToolbar",
                        value: function(e) {
                            return this.toolbar.loadToolbar(e)
                        }
                    }, {
                        key: "get_property",
                        value: function(e) {
                            var t;
                            return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "getSessionProperty",
                        value: function(e) {
                            var t;
                            return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            var e, t = null !== (e = this.config.name) && void 0 !== e ? e : iI;
                            return t !== iI && (t = iI + "." + t), t
                        }
                    }, {
                        key: "_isIdentified",
                        value: function() {
                            var e, t;
                            return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(eC)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(eC))
                        }
                    }, {
                        key: "_hasPersonProcessing",
                        value: function() {
                            var e, t, n, r;
                            return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && x(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[eu]) && (null === (n = this.persistence) || void 0 === n || null === (r = n.props) || void 0 === r || !r[ej]))
                        }
                    }, {
                        key: "_shouldCapturePageleave",
                        value: function() {
                            return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
                        }
                    }, {
                        key: "createPersonProfile",
                        value: function() {
                            this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
                        }
                    }, {
                        key: "_requirePersonProcessing",
                        value: function(e) {
                            return "never" === this.config.person_profiles ? (H.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(ej, !0), !0)
                        }
                    }, {
                        key: "_sync_opt_out_with_persistence",
                        value: function() {
                            var e, t, n, r, i = this.consent.isOptedOut(),
                                s = this.config.opt_out_persistence_by_default,
                                o = this.config.disable_persistence || i && !!s;
                            (null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (n = this.persistence) || void 0 === n || n.set_disabled(o)), (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (r = this.sessionPersistence) || void 0 === r || r.set_disabled(o))
                        }
                    }, {
                        key: "opt_in_capturing",
                        value: function(e) {
                            var t;
                            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), (S(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
                                send_instantly: !0
                            })
                        }
                    }, {
                        key: "opt_out_capturing",
                        value: function() {
                            this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
                        }
                    }, {
                        key: "has_opted_in_capturing",
                        value: function() {
                            return this.consent.isOptedIn()
                        }
                    }, {
                        key: "has_opted_out_capturing",
                        value: function() {
                            return this.consent.isOptedOut()
                        }
                    }, {
                        key: "clear_opt_in_out_capturing",
                        value: function() {
                            this.consent.reset(), this._sync_opt_out_with_persistence()
                        }
                    }, {
                        key: "debug",
                        value: function(e) {
                            !1 === e ? (null == O || O.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                                debug: !1
                            })) : (null == O || O.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                                debug: !0
                            }))
                        }
                    }]), e
                }();
            ! function(e, t) {
                for (var n = 0; n < t.length; n++) e.prototype[t[n]] = en(e.prototype[t[n]])
            }(iM, ["identify"]);
            var i$, ij, iA = (ij = iP[iI] = new iM, function() {
                function e() {
                    e.done || (e.done = !0, iC = !1, K(iP, function(e) {
                        e._dom_loaded()
                    }))
                }
                null != A && A.addEventListener && ("complete" === A.readyState ? e() : A.addEventListener("DOMContentLoaded", e, !1)), O && eo(O, "load", e, !0)
            }(), ij)
        },
        25566: function(e) {
            var t, n, r, i = e.exports = {};

            function s() {
                throw Error("setTimeout has not been defined")
            }

            function o() {
                throw Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    t = s
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                    n = o
                }
            }();
            var l = [],
                u = !1,
                c = -1;

            function d() {
                u && r && (u = !1, r.length ? l = r.concat(l) : c = -1, l.length && f())
            }

            function f() {
                if (!u) {
                    var e = a(d);
                    u = !0;
                    for (var t = l.length; t;) {
                        for (r = l, l = []; ++c < t;) r && r[c].run();
                        c = -1, t = l.length
                    }
                    r = null, u = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function p() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                l.push(new h(e, t)), 1 !== l.length || u || a(f)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        98575: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return i
                },
                e: function() {
                    return s
                }
            });
            var r = n(20955);

            function i(...e) {
                return t => e.forEach(e => {
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                })
            }

            function s(...e) {
                return r.useCallback(i(...e), e)
            }
        },
        37053: function(e, t, n) {
            "use strict";
            n.d(t, {
                g7: function() {
                    return o
                }
            });
            var r = n(20955),
                i = n(98575),
                s = n(26705),
                o = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...i
                    } = e, o = r.Children.toArray(n), l = o.find(u);
                    if (l) {
                        let e = l.props.children,
                            n = o.map(t => t !== l ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                        return (0, s.jsx)(a, { ...i,
                            ref: t,
                            children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, s.jsx)(a, { ...i,
                        ref: t,
                        children: n
                    })
                });
            o.displayName = "Slot";
            var a = r.forwardRef((e, t) => {
                let {
                    children: n,
                    ...s
                } = e;
                if (r.isValidElement(n)) {
                    let e, o;
                    let a = (e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                    return r.cloneElement(n, { ... function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let i = e[r],
                                    s = t[r];
                                /^on[A-Z]/.test(r) ? i && s ? n[r] = (...e) => {
                                    s(...e), i(...e)
                                } : i && (n[r] = i) : "style" === r ? n[r] = { ...i,
                                    ...s
                                } : "className" === r && (n[r] = [i, s].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(s, n.props),
                        ref: t ? (0, i.F)(t, a) : a
                    })
                }
                return r.Children.count(n) > 1 ? r.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            var l = ({
                children: e
            }) => (0, s.jsx)(s.Fragment, {
                children: e
            });

            function u(e) {
                return r.isValidElement(e) && e.type === l
            }
        },
        5264: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return o
                }
            });
            var r = n(31229),
                i = n(25566),
                s = n(25566);

            function o(e) {
                let t = "object" == typeof e.client ? e.client : {},
                    n = "object" == typeof e.server ? e.server : {},
                    o = e.shared,
                    a = e.runtimeEnv ? e.runtimeEnv : { ...s.env,
                        ...e.experimental__runtimeEnv
                    };
                return function(e) {
                    let t = e.runtimeEnvStrict ? ? e.runtimeEnv ? ? i.env;
                    if (e.emptyStringAsUndefined)
                        for (let [e, n] of Object.entries(t)) "" === n && delete t[e];
                    if (e.skipValidation) return t;
                    let n = "object" == typeof e.client ? e.client : {},
                        s = "object" == typeof e.server ? e.server : {},
                        o = "object" == typeof e.shared ? e.shared : {},
                        a = (0, r.Ry)(n),
                        l = (0, r.Ry)(s),
                        u = (0, r.Ry)(o),
                        c = e.isServer ? ? ("undefined" == typeof window || "Deno" in window),
                        d = a.merge(u),
                        f = l.merge(u).merge(a),
                        h = c ? f.safeParse(t) : d.safeParse(t),
                        p = e.onValidationError ? ? (e => {
                            throw console.error("❌ Invalid environment variables:", e.flatten().fieldErrors), Error("Invalid environment variables")
                        }),
                        v = e.onInvalidAccess ? ? (e => {
                            throw Error("❌ Attempted to access a server-side environment variable on the client")
                        });
                    if (!1 === h.success) return p(h.error);
                    let _ = t => !e.clientPrefix || !t.startsWith(e.clientPrefix) && !(t in u.shape),
                        g = e => c || !_(e),
                        m = e => "__esModule" === e || "$$typeof" === e,
                        y = (e.extends ? ? []).reduce((e, t) => Object.assign(e, t), {});
                    return new Proxy(Object.assign(h.data, y), {
                        get(e, t) {
                            if ("string" == typeof t && !m(t)) return g(t) ? Reflect.get(e, t) : v(t)
                        }
                    })
                }({ ...e,
                    shared: o,
                    client: t,
                    server: n,
                    clientPrefix: "NEXT_PUBLIC_",
                    runtimeEnv: a
                })
            }
        },
        77712: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return s
                }
            });
            let r = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                i = function() {
                    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                        var n, r, i = "";
                        if ("string" == typeof t || "number" == typeof t) i += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r);
                            else
                                for (n in t) t[n] && (i && (i += " "), i += n)
                        }
                        return i
                    }(e)) && (r && (r += " "), r += t);
                    return r
                },
                s = (e, t) => n => {
                    var s;
                    if ((null == t ? void 0 : t.variants) == null) return i(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: o,
                        defaultVariants: a
                    } = t, l = Object.keys(o).map(e => {
                        let t = null == n ? void 0 : n[e],
                            i = null == a ? void 0 : a[e];
                        if (null === t) return null;
                        let s = r(t) || r(i);
                        return o[e][s]
                    }), u = n && Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return void 0 === r || (e[n] = r), e
                    }, {});
                    return i(e, l, null == t ? void 0 : null === (s = t.compoundVariants) || void 0 === s ? void 0 : s.reduce((e, t) => {
                        let {
                            class: n,
                            className: r,
                            ...i
                        } = t;
                        return Object.entries(i).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({ ...a,
                                ...u
                            }[t]) : ({ ...a,
                                ...u
                            })[t] === n
                        }) ? [...e, n, r] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        61994: function(e, t, n) {
            "use strict";

            function r() {
                for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
                    var n, r, i = "";
                    if ("string" == typeof t || "number" == typeof t) i += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var s = t.length;
                            for (n = 0; n < s; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
                        } else
                            for (r in t) t[r] && (i && (i += " "), i += r)
                    }
                    return i
                }(e)) && (r && (r += " "), r += t);
                return r
            }
            n.d(t, {
                W: function() {
                    return r
                }
            })
        },
        53335: function(e, t, n) {
            "use strict";
            n.d(t, {
                m6: function() {
                    return j
                }
            });
            let r = /^\[(.+)\]$/;

            function i(e, t) {
                let n = e;
                return t.split("-").forEach(e => {
                    n.nextPart.has(e) || n.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), n = n.nextPart.get(e)
                }), n
            }
            let s = /\s+/;

            function o() {
                let e, t, n = 0,
                    r = "";
                for (; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                    let n;
                    if ("string" == typeof t) return t;
                    let r = "";
                    for (let i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (r && (r += " "), r += n);
                    return r
                }(e)) && (r && (r += " "), r += t);
                return r
            }

            function a(e) {
                let t = t => t[e] || [];
                return t.isThemeGetter = !0, t
            }
            let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                u = /^\d+\/\d+$/,
                c = new Set(["px", "full", "screen"]),
                d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                h = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                v = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function _(e) {
                return m(e) || c.has(e) || u.test(e)
            }

            function g(e) {
                return O(e, "length", F)
            }

            function m(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function y(e) {
                return O(e, "number", m)
            }

            function b(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function k(e) {
                return e.endsWith("%") && m(e.slice(0, -1))
            }

            function w(e) {
                return l.test(e)
            }

            function x(e) {
                return d.test(e)
            }
            let S = new Set(["length", "size", "percentage"]);

            function E(e) {
                return O(e, S, N)
            }

            function R(e) {
                return O(e, "position", N)
            }
            let P = new Set(["image", "url"]);

            function T(e) {
                return O(e, P, $)
            }

            function I(e) {
                return O(e, "", M)
            }

            function C() {
                return !0
            }

            function O(e, t, n) {
                let r = l.exec(e);
                return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
            }

            function F(e) {
                return f.test(e) && !h.test(e)
            }

            function N() {
                return !1
            }

            function M(e) {
                return p.test(e)
            }

            function $(e) {
                return v.test(e)
            }
            let j = function(e, ...t) {
                let n, a, l;
                let u = function(s) {
                    var o;
                    return a = (n = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let t = 0,
                                n = new Map,
                                r = new Map;

                            function i(i, s) {
                                n.set(i, s), ++t > e && (t = 0, r = n, n = new Map)
                            }
                            return {
                                get(e) {
                                    let t = n.get(e);
                                    return void 0 !== t ? t : void 0 !== (t = r.get(e)) ? (i(e, t), t) : void 0
                                },
                                set(e, t) {
                                    n.has(e) ? n.set(e, t) : i(e, t)
                                }
                            }
                        }((o = t.reduce((e, t) => t(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let t = e.separator,
                                n = 1 === t.length,
                                r = t[0],
                                i = t.length;
                            return function(e) {
                                let s;
                                let o = [],
                                    a = 0,
                                    l = 0;
                                for (let u = 0; u < e.length; u++) {
                                    let c = e[u];
                                    if (0 === a) {
                                        if (c === r && (n || e.slice(u, u + i) === t)) {
                                            o.push(e.slice(l, u)), l = u + i;
                                            continue
                                        }
                                        if ("/" === c) {
                                            s = u;
                                            continue
                                        }
                                    }
                                    "[" === c ? a++ : "]" === c && a--
                                }
                                let u = 0 === o.length ? e : e.substring(l),
                                    c = u.startsWith("!"),
                                    d = c ? u.substring(1) : u;
                                return {
                                    modifiers: o,
                                    hasImportantModifier: c,
                                    baseClassName: d,
                                    maybePostfixModifierPosition: s && s > l ? s - l : void 0
                                }
                            }
                        }(o),
                        ... function(e) {
                            let t = function(e) {
                                    var t;
                                    let {
                                        theme: n,
                                        prefix: r
                                    } = e, s = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (t = Object.entries(e.classGroups), r ? t.map(([e, t]) => [e, t.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [r + e, t])) : e)]) : t).forEach(([e, t]) => {
                                        (function e(t, n, r, s) {
                                            t.forEach(t => {
                                                if ("string" == typeof t) {
                                                    ("" === t ? n : i(n, t)).classGroupId = r;
                                                    return
                                                }
                                                if ("function" == typeof t) {
                                                    if (t.isThemeGetter) {
                                                        e(t(s), n, r, s);
                                                        return
                                                    }
                                                    n.validators.push({
                                                        validator: t,
                                                        classGroupId: r
                                                    });
                                                    return
                                                }
                                                Object.entries(t).forEach(([t, o]) => {
                                                    e(o, i(n, t), r, s)
                                                })
                                            })
                                        })(t, s, e, n)
                                    }), s
                                }(e),
                                {
                                    conflictingClassGroups: n,
                                    conflictingClassGroupModifiers: s
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let n = e.split("-");
                                    return "" === n[0] && 1 !== n.length && n.shift(),
                                        function e(t, n) {
                                            if (0 === t.length) return n.classGroupId;
                                            let r = t[0],
                                                i = n.nextPart.get(r),
                                                s = i ? e(t.slice(1), i) : void 0;
                                            if (s) return s;
                                            if (0 === n.validators.length) return;
                                            let o = t.join("-");
                                            return n.validators.find(({
                                                validator: e
                                            }) => e(o)) ? .classGroupId
                                        }(n, t) || function(e) {
                                            if (r.test(e)) {
                                                let t = r.exec(e)[1],
                                                    n = t ? .substring(0, t.indexOf(":"));
                                                if (n) return "arbitrary.." + n
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    let r = n[e] || [];
                                    return t && s[e] ? [...r, ...s[e]] : r
                                }
                            }
                        }(o)
                    }).cache.get, l = n.cache.set, u = c, c(s)
                };

                function c(e) {
                    let t = a(e);
                    if (t) return t;
                    let r = function(e, t) {
                        let {
                            splitModifiers: n,
                            getClassGroupId: r,
                            getConflictingClassGroupIds: i
                        } = t, o = new Set;
                        return e.trim().split(s).map(e => {
                            let {
                                modifiers: t,
                                hasImportantModifier: i,
                                baseClassName: s,
                                maybePostfixModifierPosition: o
                            } = n(e), a = r(o ? s.substring(0, o) : s), l = !!o;
                            if (!a) {
                                if (!o || !(a = r(s))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                l = !1
                            }
                            let u = (function(e) {
                                if (e.length <= 1) return e;
                                let t = [],
                                    n = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (t.push(...n.sort(), e), n = []) : n.push(e)
                                }), t.push(...n.sort()), t
                            })(t).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: i ? u + "!" : u,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: l
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: t,
                                classGroupId: n,
                                hasPostfixModifier: r
                            } = e, s = t + n;
                            return !o.has(s) && (o.add(s), i(n, r).forEach(e => o.add(t + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, n);
                    return l(e, r), r
                }
                return function() {
                    return u(o.apply(null, arguments))
                }
            }(function() {
                let e = a("colors"),
                    t = a("spacing"),
                    n = a("blur"),
                    r = a("brightness"),
                    i = a("borderColor"),
                    s = a("borderRadius"),
                    o = a("borderSpacing"),
                    l = a("borderWidth"),
                    u = a("contrast"),
                    c = a("grayscale"),
                    d = a("hueRotate"),
                    f = a("invert"),
                    h = a("gap"),
                    p = a("gradientColorStops"),
                    v = a("gradientColorStopPositions"),
                    S = a("inset"),
                    P = a("margin"),
                    O = a("opacity"),
                    F = a("padding"),
                    N = a("saturate"),
                    M = a("scale"),
                    $ = a("sepia"),
                    j = a("skew"),
                    A = a("space"),
                    L = a("translate"),
                    D = () => ["auto", "contain", "none"],
                    q = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    Z = () => ["auto", w, t],
                    U = () => [w, t],
                    B = () => ["", _, g],
                    z = () => ["auto", m, w],
                    H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    W = () => ["solid", "dashed", "dotted", "double", "none"],
                    V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    G = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    K = () => ["", "0", w],
                    Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    Q = () => [m, y],
                    J = () => [m, w];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [C],
                        spacing: [_, g],
                        blur: ["none", "", x, w],
                        brightness: Q(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", x, w],
                        borderSpacing: U(),
                        borderWidth: B(),
                        contrast: Q(),
                        grayscale: K(),
                        hueRotate: J(),
                        invert: K(),
                        gap: U(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [k, g],
                        inset: Z(),
                        margin: Z(),
                        opacity: Q(),
                        padding: U(),
                        saturate: Q(),
                        scale: Q(),
                        sepia: K(),
                        skew: J(),
                        space: U(),
                        translate: U()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", w]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [x]
                        }],
                        "break-after": [{
                            "break-after": Y()
                        }],
                        "break-before": [{
                            "break-before": Y()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...H(), w]
                        }],
                        overflow: [{
                            overflow: q()
                        }],
                        "overflow-x": [{
                            "overflow-x": q()
                        }],
                        "overflow-y": [{
                            "overflow-y": q()
                        }],
                        overscroll: [{
                            overscroll: D()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": D()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": D()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [S]
                        }],
                        "inset-x": [{
                            "inset-x": [S]
                        }],
                        "inset-y": [{
                            "inset-y": [S]
                        }],
                        start: [{
                            start: [S]
                        }],
                        end: [{
                            end: [S]
                        }],
                        top: [{
                            top: [S]
                        }],
                        right: [{
                            right: [S]
                        }],
                        bottom: [{
                            bottom: [S]
                        }],
                        left: [{
                            left: [S]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", b, w]
                        }],
                        basis: [{
                            basis: Z()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", w]
                        }],
                        grow: [{
                            grow: K()
                        }],
                        shrink: [{
                            shrink: K()
                        }],
                        order: [{
                            order: ["first", "last", "none", b, w]
                        }],
                        "grid-cols": [{
                            "grid-cols": [C]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", b, w]
                            }, w]
                        }],
                        "col-start": [{
                            "col-start": z()
                        }],
                        "col-end": [{
                            "col-end": z()
                        }],
                        "grid-rows": [{
                            "grid-rows": [C]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [b, w]
                            }, w]
                        }],
                        "row-start": [{
                            "row-start": z()
                        }],
                        "row-end": [{
                            "row-end": z()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", w]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", w]
                        }],
                        gap: [{
                            gap: [h]
                        }],
                        "gap-x": [{
                            "gap-x": [h]
                        }],
                        "gap-y": [{
                            "gap-y": [h]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...G()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...G(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...G(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [F]
                        }],
                        px: [{
                            px: [F]
                        }],
                        py: [{
                            py: [F]
                        }],
                        ps: [{
                            ps: [F]
                        }],
                        pe: [{
                            pe: [F]
                        }],
                        pt: [{
                            pt: [F]
                        }],
                        pr: [{
                            pr: [F]
                        }],
                        pb: [{
                            pb: [F]
                        }],
                        pl: [{
                            pl: [F]
                        }],
                        m: [{
                            m: [P]
                        }],
                        mx: [{
                            mx: [P]
                        }],
                        my: [{
                            my: [P]
                        }],
                        ms: [{
                            ms: [P]
                        }],
                        me: [{
                            me: [P]
                        }],
                        mt: [{
                            mt: [P]
                        }],
                        mr: [{
                            mr: [P]
                        }],
                        mb: [{
                            mb: [P]
                        }],
                        ml: [{
                            ml: [P]
                        }],
                        "space-x": [{
                            "space-x": [A]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [A]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", w, t]
                        }],
                        "min-w": [{
                            "min-w": [w, t, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [w, t, "none", "full", "min", "max", "fit", "prose", {
                                screen: [x]
                            }, x]
                        }],
                        h: [{
                            h: [w, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [w, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [w, t, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", x, g]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", y]
                        }],
                        "font-family": [{
                            font: [C]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", w]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", m, y]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _, w]
                        }],
                        "list-image": [{
                            "list-image": ["none", w]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", w]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [O]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [O]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...W(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", _, g]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", _, w]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: U()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", w]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", w]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [O]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...H(), R]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", E]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, T]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [v]
                        }],
                        "gradient-via-pos": [{
                            via: [v]
                        }],
                        "gradient-to-pos": [{
                            to: [v]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [s]
                        }],
                        "rounded-s": [{
                            "rounded-s": [s]
                        }],
                        "rounded-e": [{
                            "rounded-e": [s]
                        }],
                        "rounded-t": [{
                            "rounded-t": [s]
                        }],
                        "rounded-r": [{
                            "rounded-r": [s]
                        }],
                        "rounded-b": [{
                            "rounded-b": [s]
                        }],
                        "rounded-l": [{
                            "rounded-l": [s]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [s]
                        }],
                        "rounded-se": [{
                            "rounded-se": [s]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [s]
                        }],
                        "rounded-es": [{
                            "rounded-es": [s]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [s]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [s]
                        }],
                        "rounded-br": [{
                            "rounded-br": [s]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [s]
                        }],
                        "border-w": [{
                            border: [l]
                        }],
                        "border-w-x": [{
                            "border-x": [l]
                        }],
                        "border-w-y": [{
                            "border-y": [l]
                        }],
                        "border-w-s": [{
                            "border-s": [l]
                        }],
                        "border-w-e": [{
                            "border-e": [l]
                        }],
                        "border-w-t": [{
                            "border-t": [l]
                        }],
                        "border-w-r": [{
                            "border-r": [l]
                        }],
                        "border-w-b": [{
                            "border-b": [l]
                        }],
                        "border-w-l": [{
                            "border-l": [l]
                        }],
                        "border-opacity": [{
                            "border-opacity": [O]
                        }],
                        "border-style": [{
                            border: [...W(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [l]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [l]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [O]
                        }],
                        "divide-style": [{
                            divide: W()
                        }],
                        "border-color": [{
                            border: [i]
                        }],
                        "border-color-x": [{
                            "border-x": [i]
                        }],
                        "border-color-y": [{
                            "border-y": [i]
                        }],
                        "border-color-t": [{
                            "border-t": [i]
                        }],
                        "border-color-r": [{
                            "border-r": [i]
                        }],
                        "border-color-b": [{
                            "border-b": [i]
                        }],
                        "border-color-l": [{
                            "border-l": [i]
                        }],
                        "divide-color": [{
                            divide: [i]
                        }],
                        "outline-style": [{
                            outline: ["", ...W()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [_, w]
                        }],
                        "outline-w": [{
                            outline: [_, g]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: B()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [O]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [_, g]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", x, I]
                        }],
                        "shadow-color": [{
                            shadow: [C]
                        }],
                        opacity: [{
                            opacity: [O]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...V(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": V()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [n]
                        }],
                        brightness: [{
                            brightness: [r]
                        }],
                        contrast: [{
                            contrast: [u]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", x, w]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [d]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [N]
                        }],
                        sepia: [{
                            sepia: [$]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [n]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [r]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [u]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [d]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [O]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [N]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [$]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [o]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [o]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [o]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", w]
                        }],
                        duration: [{
                            duration: J()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", w]
                        }],
                        delay: [{
                            delay: J()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", w]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [M]
                        }],
                        "scale-x": [{
                            "scale-x": [M]
                        }],
                        "scale-y": [{
                            "scale-y": [M]
                        }],
                        rotate: [{
                            rotate: [b, w]
                        }],
                        "translate-x": [{
                            "translate-x": [L]
                        }],
                        "translate-y": [{
                            "translate-y": [L]
                        }],
                        "skew-x": [{
                            "skew-x": [j]
                        }],
                        "skew-y": [{
                            "skew-y": [j]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", w]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", w]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": U()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": U()
                        }],
                        "scroll-my": [{
                            "scroll-my": U()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": U()
                        }],
                        "scroll-me": [{
                            "scroll-me": U()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": U()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": U()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": U()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": U()
                        }],
                        "scroll-p": [{
                            "scroll-p": U()
                        }],
                        "scroll-px": [{
                            "scroll-px": U()
                        }],
                        "scroll-py": [{
                            "scroll-py": U()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": U()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": U()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": U()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": U()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": U()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": U()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", w]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [_, g, y]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        31229: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                IX: function() {
                    return eZ
                },
                Ry: function() {
                    return eU
                },
                Z_: function() {
                    return eT
                },
                z: function() {
                    return ta
                }
            }), (e8 = tt || (tt = {})).assertEqual = e => e, e8.assertIs = function(e) {}, e8.assertNever = function(e) {
                throw Error()
            }, e8.arrayToEnum = e => {
                let t = {};
                for (let n of e) t[n] = n;
                return t
            }, e8.getValidEnumValues = e => {
                let t = e8.objectKeys(e).filter(t => "number" != typeof e[e[t]]),
                    n = {};
                for (let r of t) n[r] = e[r];
                return e8.objectValues(n)
            }, e8.objectValues = e => e8.objectKeys(e).map(function(t) {
                return e[t]
            }), e8.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
                let t = [];
                for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }, e8.find = (e, t) => {
                for (let n of e)
                    if (t(n)) return n
            }, e8.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, e8.joinValues = function(e, t = " | ") {
                return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t)
            }, e8.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, (tn || (tn = {})).mergeShapes = (e, t) => ({ ...e,
                ...t
            });
            let i = tt.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                s = e => {
                    switch (typeof e) {
                        case "undefined":
                            return i.undefined;
                        case "string":
                            return i.string;
                        case "number":
                            return isNaN(e) ? i.nan : i.number;
                        case "boolean":
                            return i.boolean;
                        case "function":
                            return i.function;
                        case "bigint":
                            return i.bigint;
                        case "symbol":
                            return i.symbol;
                        case "object":
                            if (Array.isArray(e)) return i.array;
                            if (null === e) return i.null;
                            if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return i.promise;
                            if ("undefined" != typeof Map && e instanceof Map) return i.map;
                            if ("undefined" != typeof Set && e instanceof Set) return i.set;
                            if ("undefined" != typeof Date && e instanceof Date) return i.date;
                            return i.object;
                        default:
                            return i.unknown
                    }
                },
                o = tt.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
            class a extends Error {
                constructor(e) {
                    super(), this.issues = [], this.addIssue = e => {
                        this.issues = [...this.issues, e]
                    }, this.addIssues = (e = []) => {
                        this.issues = [...this.issues, ...e]
                    };
                    let t = new.target.prototype;
                    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
                }
                get errors() {
                    return this.issues
                }
                format(e) {
                    let t = e || function(e) {
                            return e.message
                        },
                        n = {
                            _errors: []
                        },
                        r = e => {
                            for (let i of e.issues)
                                if ("invalid_union" === i.code) i.unionErrors.map(r);
                                else if ("invalid_return_type" === i.code) r(i.returnTypeError);
                            else if ("invalid_arguments" === i.code) r(i.argumentsError);
                            else if (0 === i.path.length) n._errors.push(t(i));
                            else {
                                let e = n,
                                    r = 0;
                                for (; r < i.path.length;) {
                                    let n = i.path[r];
                                    r === i.path.length - 1 ? (e[n] = e[n] || {
                                        _errors: []
                                    }, e[n]._errors.push(t(i))) : e[n] = e[n] || {
                                        _errors: []
                                    }, e = e[n], r++
                                }
                            }
                        };
                    return r(this), n
                }
                static assert(e) {
                    if (!(e instanceof a)) throw Error(`Not a ZodError: ${e}`)
                }
                toString() {
                    return this.message
                }
                get message() {
                    return JSON.stringify(this.issues, tt.jsonStringifyReplacer, 2)
                }
                get isEmpty() {
                    return 0 === this.issues.length
                }
                flatten(e = e => e.message) {
                    let t = {},
                        n = [];
                    for (let r of this.issues) r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : n.push(e(r));
                    return {
                        formErrors: n,
                        fieldErrors: t
                    }
                }
                get formErrors() {
                    return this.flatten()
                }
            }
            a.create = e => new a(e);
            let l = (e, t) => {
                    let n;
                    switch (e.code) {
                        case o.invalid_type:
                            n = e.received === i.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
                            break;
                        case o.invalid_literal:
                            n = `Invalid literal value, expected ${JSON.stringify(e.expected,tt.jsonStringifyReplacer)}`;
                            break;
                        case o.unrecognized_keys:
                            n = `Unrecognized key(s) in object: ${tt.joinValues(e.keys,", ")}`;
                            break;
                        case o.invalid_union:
                            n = "Invalid input";
                            break;
                        case o.invalid_union_discriminator:
                            n = `Invalid discriminator value. Expected ${tt.joinValues(e.options)}`;
                            break;
                        case o.invalid_enum_value:
                            n = `Invalid enum value. Expected ${tt.joinValues(e.options)}, received '${e.received}'`;
                            break;
                        case o.invalid_arguments:
                            n = "Invalid function arguments";
                            break;
                        case o.invalid_return_type:
                            n = "Invalid function return type";
                            break;
                        case o.invalid_date:
                            n = "Invalid date";
                            break;
                        case o.invalid_string:
                            "object" == typeof e.validation ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : tt.assertNever(e.validation) : n = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
                            break;
                        case o.too_small:
                            n = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
                            break;
                        case o.too_big:
                            n = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
                            break;
                        case o.custom:
                            n = "Invalid input";
                            break;
                        case o.invalid_intersection_types:
                            n = "Intersection results could not be merged";
                            break;
                        case o.not_multiple_of:
                            n = `Number must be a multiple of ${e.multipleOf}`;
                            break;
                        case o.not_finite:
                            n = "Number must be finite";
                            break;
                        default:
                            n = t.defaultError, tt.assertNever(e)
                    }
                    return {
                        message: n
                    }
                },
                u = l;

            function c() {
                return u
            }
            let d = e => {
                let {
                    data: t,
                    path: n,
                    errorMaps: r,
                    issueData: i
                } = e, s = [...n, ...i.path || []], o = { ...i,
                    path: s
                };
                if (void 0 !== i.message) return { ...i,
                    path: s,
                    message: i.message
                };
                let a = "";
                for (let e of r.filter(e => !!e).slice().reverse()) a = e(o, {
                    data: t,
                    defaultError: a
                }).message;
                return { ...i,
                    path: s,
                    message: a
                }
            };

            function f(e, t) {
                let n = c(),
                    r = d({
                        issueData: t,
                        data: e.data,
                        path: e.path,
                        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === l ? void 0 : l].filter(e => !!e)
                    });
                e.common.issues.push(r)
            }
            class h {
                constructor() {
                    this.value = "valid"
                }
                dirty() {
                    "valid" === this.value && (this.value = "dirty")
                }
                abort() {
                    "aborted" !== this.value && (this.value = "aborted")
                }
                static mergeArray(e, t) {
                    let n = [];
                    for (let r of t) {
                        if ("aborted" === r.status) return p;
                        "dirty" === r.status && e.dirty(), n.push(r.value)
                    }
                    return {
                        status: e.value,
                        value: n
                    }
                }
                static async mergeObjectAsync(e, t) {
                    let n = [];
                    for (let e of t) {
                        let t = await e.key,
                            r = await e.value;
                        n.push({
                            key: t,
                            value: r
                        })
                    }
                    return h.mergeObjectSync(e, n)
                }
                static mergeObjectSync(e, t) {
                    let n = {};
                    for (let r of t) {
                        let {
                            key: t,
                            value: i
                        } = r;
                        if ("aborted" === t.status || "aborted" === i.status) return p;
                        "dirty" === t.status && e.dirty(), "dirty" === i.status && e.dirty(), "__proto__" !== t.value && (void 0 !== i.value || r.alwaysSet) && (n[t.value] = i.value)
                    }
                    return {
                        status: e.value,
                        value: n
                    }
                }
            }
            let p = Object.freeze({
                    status: "aborted"
                }),
                v = e => ({
                    status: "dirty",
                    value: e
                }),
                _ = e => ({
                    status: "valid",
                    value: e
                }),
                g = e => "aborted" === e.status,
                m = e => "dirty" === e.status,
                y = e => "valid" === e.status,
                b = e => "undefined" != typeof Promise && e instanceof Promise;

            function k(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            }

            function w(e, t, n, r, i) {
                if ("m" === r) throw TypeError("Private method is not writable");
                if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
            }
            "function" == typeof SuppressedError && SuppressedError, (e7 = tr || (tr = {})).errToObj = e => "string" == typeof e ? {
                message: e
            } : e || {}, e7.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
            class x {
                constructor(e, t, n, r) {
                    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r
                }
                get path() {
                    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                }
            }
            let S = (e, t) => {
                if (y(t)) return {
                    success: !0,
                    data: t.value
                };
                if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
                return {
                    success: !1,
                    get error() {
                        if (this._error) return this._error;
                        let t = new a(e.common.issues);
                        return this._error = t, this._error
                    }
                }
            };

            function E(e) {
                if (!e) return {};
                let {
                    errorMap: t,
                    invalid_type_error: n,
                    required_error: r,
                    description: i
                } = e;
                if (t && (n || r)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                return t ? {
                    errorMap: t,
                    description: i
                } : {
                    errorMap: (t, i) => {
                        var s, o;
                        let {
                            message: a
                        } = e;
                        return "invalid_enum_value" === t.code ? {
                            message: null != a ? a : i.defaultError
                        } : void 0 === i.data ? {
                            message: null !== (s = null != a ? a : r) && void 0 !== s ? s : i.defaultError
                        } : "invalid_type" !== t.code ? {
                            message: i.defaultError
                        } : {
                            message: null !== (o = null != a ? a : n) && void 0 !== o ? o : i.defaultError
                        }
                    },
                    description: i
                }
            }
            class R {
                constructor(e) {
                    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
                }
                get description() {
                    return this._def.description
                }
                _getType(e) {
                    return s(e.data)
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: s(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
                _processInputParams(e) {
                    return {
                        status: new h,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: s(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    }
                }
                _parseSync(e) {
                    let t = this._parse(e);
                    if (b(t)) throw Error("Synchronous parse encountered promise.");
                    return t
                }
                _parseAsync(e) {
                    return Promise.resolve(this._parse(e))
                }
                parse(e, t) {
                    let n = this.safeParse(e, t);
                    if (n.success) return n.data;
                    throw n.error
                }
                safeParse(e, t) {
                    var n;
                    let r = {
                            common: {
                                issues: [],
                                async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                                contextualErrorMap: null == t ? void 0 : t.errorMap
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: s(e)
                        },
                        i = this._parseSync({
                            data: e,
                            path: r.path,
                            parent: r
                        });
                    return S(r, i)
                }
                async parseAsync(e, t) {
                    let n = await this.safeParseAsync(e, t);
                    if (n.success) return n.data;
                    throw n.error
                }
                async safeParseAsync(e, t) {
                    let n = {
                            common: {
                                issues: [],
                                contextualErrorMap: null == t ? void 0 : t.errorMap,
                                async: !0
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: s(e)
                        },
                        r = this._parse({
                            data: e,
                            path: n.path,
                            parent: n
                        });
                    return S(n, await (b(r) ? r : Promise.resolve(r)))
                }
                refine(e, t) {
                    let n = e => "string" == typeof t || void 0 === t ? {
                        message: t
                    } : "function" == typeof t ? t(e) : t;
                    return this._refinement((t, r) => {
                        let i = e(t),
                            s = () => r.addIssue({
                                code: o.custom,
                                ...n(t)
                            });
                        return "undefined" != typeof Promise && i instanceof Promise ? i.then(e => !!e || (s(), !1)) : !!i || (s(), !1)
                    })
                }
                refinement(e, t) {
                    return this._refinement((n, r) => !!e(n) || (r.addIssue("function" == typeof t ? t(n, r) : t), !1))
                }
                _refinement(e) {
                    return new e_({
                        schema: this,
                        typeName: to.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    })
                }
                superRefine(e) {
                    return this._refinement(e)
                }
                optional() {
                    return eg.create(this, this._def)
                }
                nullable() {
                    return em.create(this, this._def)
                }
                nullish() {
                    return this.nullable().optional()
                }
                array() {
                    return X.create(this, this._def)
                }
                promise() {
                    return ev.create(this, this._def)
                }
                or(e) {
                    return et.create([this, e], this._def)
                }
                and(e) {
                    return ei.create(this, e, this._def)
                }
                transform(e) {
                    return new e_({ ...E(this._def),
                        schema: this,
                        typeName: to.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    })
                }
                default (e) {
                    return new ey({ ...E(this._def),
                        innerType: this,
                        defaultValue: "function" == typeof e ? e : () => e,
                        typeName: to.ZodDefault
                    })
                }
                brand() {
                    return new ex({
                        typeName: to.ZodBranded,
                        type: this,
                        ...E(this._def)
                    })
                } catch (e) {
                    return new eb({ ...E(this._def),
                        innerType: this,
                        catchValue: "function" == typeof e ? e : () => e,
                        typeName: to.ZodCatch
                    })
                }
                describe(e) {
                    return new this.constructor({ ...this._def,
                        description: e
                    })
                }
                pipe(e) {
                    return eS.create(this, e)
                }
                readonly() {
                    return eE.create(this)
                }
                isOptional() {
                    return this.safeParse(void 0).success
                }
                isNullable() {
                    return this.safeParse(null).success
                }
            }
            let P = /^c[^\s-]{8,}$/i,
                T = /^[0-9a-z]+$/,
                I = /^[0-9A-HJKMNP-TV-Z]{26}$/,
                C = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                O = /^[a-z0-9_-]{21}$/i,
                F = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
                N = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                M = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
                $ = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
                j = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
                A = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
                L = RegExp(`^${A}$`);

            function D(e) {
                let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
                return e.precision ? t = `${t}\\.\\d{${e.precision}}` : null == e.precision && (t = `${t}(\\.\\d+)?`), t
            }

            function q(e) {
                let t = `${A}T${D(e)}`,
                    n = [];
                return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, RegExp(`^${t}$`)
            }
            class Z extends R {
                _parse(e) {
                    var t, n;
                    let s;
                    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== i.string) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.string,
                            received: t.parsedType
                        }), p
                    }
                    let a = new h;
                    for (let i of this._def.checks)
                        if ("min" === i.kind) e.data.length < i.value && (f(s = this._getOrReturnCtx(e, s), {
                            code: o.too_small,
                            minimum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: i.message
                        }), a.dirty());
                        else if ("max" === i.kind) e.data.length > i.value && (f(s = this._getOrReturnCtx(e, s), {
                        code: o.too_big,
                        maximum: i.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: i.message
                    }), a.dirty());
                    else if ("length" === i.kind) {
                        let t = e.data.length > i.value,
                            n = e.data.length < i.value;
                        (t || n) && (s = this._getOrReturnCtx(e, s), t ? f(s, {
                            code: o.too_big,
                            maximum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: i.message
                        }) : n && f(s, {
                            code: o.too_small,
                            minimum: i.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: i.message
                        }), a.dirty())
                    } else if ("email" === i.kind) N.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "email",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("emoji" === i.kind) r || (r = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), r.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "emoji",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("uuid" === i.kind) C.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "uuid",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("nanoid" === i.kind) O.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "nanoid",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("cuid" === i.kind) P.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "cuid",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("cuid2" === i.kind) T.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "cuid2",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("ulid" === i.kind) I.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "ulid",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty());
                    else if ("url" === i.kind) try {
                        new URL(e.data)
                    } catch (t) {
                        f(s = this._getOrReturnCtx(e, s), {
                            validation: "url",
                            code: o.invalid_string,
                            message: i.message
                        }), a.dirty()
                    } else "regex" === i.kind ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "regex",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty())) : "trim" === i.kind ? e.data = e.data.trim() : "includes" === i.kind ? e.data.includes(i.value, i.position) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: {
                            includes: i.value,
                            position: i.position
                        },
                        message: i.message
                    }), a.dirty()) : "toLowerCase" === i.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === i.kind ? e.data = e.data.toUpperCase() : "startsWith" === i.kind ? e.data.startsWith(i.value) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: {
                            startsWith: i.value
                        },
                        message: i.message
                    }), a.dirty()) : "endsWith" === i.kind ? e.data.endsWith(i.value) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: {
                            endsWith: i.value
                        },
                        message: i.message
                    }), a.dirty()) : "datetime" === i.kind ? q(i).test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: "datetime",
                        message: i.message
                    }), a.dirty()) : "date" === i.kind ? L.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: "date",
                        message: i.message
                    }), a.dirty()) : "time" === i.kind ? RegExp(`^${D(i)}$`).test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        code: o.invalid_string,
                        validation: "time",
                        message: i.message
                    }), a.dirty()) : "duration" === i.kind ? F.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "duration",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty()) : "ip" === i.kind ? (t = e.data, ("v4" === (n = i.version) || !n) && M.test(t) || ("v6" === n || !n) && $.test(t) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "ip",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty())) : "base64" === i.kind ? j.test(e.data) || (f(s = this._getOrReturnCtx(e, s), {
                        validation: "base64",
                        code: o.invalid_string,
                        message: i.message
                    }), a.dirty()) : tt.assertNever(i);
                    return {
                        status: a.value,
                        value: e.data
                    }
                }
                _regex(e, t, n) {
                    return this.refinement(t => e.test(t), {
                        validation: t,
                        code: o.invalid_string,
                        ...tr.errToObj(n)
                    })
                }
                _addCheck(e) {
                    return new Z({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...tr.errToObj(e)
                    })
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...tr.errToObj(e)
                    })
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...tr.errToObj(e)
                    })
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...tr.errToObj(e)
                    })
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...tr.errToObj(e)
                    })
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...tr.errToObj(e)
                    })
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...tr.errToObj(e)
                    })
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...tr.errToObj(e)
                    })
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...tr.errToObj(e)
                    })
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...tr.errToObj(e)
                    })
                }
                datetime(e) {
                    var t, n;
                    return "string" == typeof e ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        local: !1,
                        message: e
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                        local: null !== (n = null == e ? void 0 : e.local) && void 0 !== n && n,
                        ...tr.errToObj(null == e ? void 0 : e.message)
                    })
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    })
                }
                time(e) {
                    return "string" == typeof e ? this._addCheck({
                        kind: "time",
                        precision: null,
                        message: e
                    }) : this._addCheck({
                        kind: "time",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        ...tr.errToObj(null == e ? void 0 : e.message)
                    })
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...tr.errToObj(e)
                    })
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...tr.errToObj(t)
                    })
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: null == t ? void 0 : t.position,
                        ...tr.errToObj(null == t ? void 0 : t.message)
                    })
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...tr.errToObj(t)
                    })
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...tr.errToObj(t)
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...tr.errToObj(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...tr.errToObj(t)
                    })
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...tr.errToObj(t)
                    })
                }
                nonempty(e) {
                    return this.min(1, tr.errToObj(e))
                }
                trim() {
                    return new Z({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    })
                }
                toLowerCase() {
                    return new Z({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toLowerCase"
                        }]
                    })
                }
                toUpperCase() {
                    return new Z({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toUpperCase"
                        }]
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(e => "datetime" === e.kind)
                }
                get isDate() {
                    return !!this._def.checks.find(e => "date" === e.kind)
                }
                get isTime() {
                    return !!this._def.checks.find(e => "time" === e.kind)
                }
                get isDuration() {
                    return !!this._def.checks.find(e => "duration" === e.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(e => "email" === e.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(e => "url" === e.kind)
                }
                get isEmoji() {
                    return !!this._def.checks.find(e => "emoji" === e.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(e => "uuid" === e.kind)
                }
                get isNANOID() {
                    return !!this._def.checks.find(e => "nanoid" === e.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(e => "cuid" === e.kind)
                }
                get isCUID2() {
                    return !!this._def.checks.find(e => "cuid2" === e.kind)
                }
                get isULID() {
                    return !!this._def.checks.find(e => "ulid" === e.kind)
                }
                get isIP() {
                    return !!this._def.checks.find(e => "ip" === e.kind)
                }
                get isBase64() {
                    return !!this._def.checks.find(e => "base64" === e.kind)
                }
                get minLength() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxLength() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            Z.create = e => {
                var t;
                return new Z({
                    checks: [],
                    typeName: to.ZodString,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...E(e)
                })
            };
            class U extends R {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== i.number) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.number,
                            received: t.parsedType
                        }), p
                    }
                    let n = new h;
                    for (let r of this._def.checks) "int" === r.kind ? tt.isInteger(e.data) || (f(t = this._getOrReturnCtx(e, t), {
                        code: o.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: r.message
                    }), n.dirty()) : "min" === r.kind ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_small,
                        minimum: r.value,
                        type: "number",
                        inclusive: r.inclusive,
                        exact: !1,
                        message: r.message
                    }), n.dirty()) : "max" === r.kind ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_big,
                        maximum: r.value,
                        type: "number",
                        inclusive: r.inclusive,
                        exact: !1,
                        message: r.message
                    }), n.dirty()) : "multipleOf" === r.kind ? 0 !== function(e, t) {
                        let n = (e.toString().split(".")[1] || "").length,
                            r = (t.toString().split(".")[1] || "").length,
                            i = n > r ? n : r;
                        return parseInt(e.toFixed(i).replace(".", "")) % parseInt(t.toFixed(i).replace(".", "")) / Math.pow(10, i)
                    }(e.data, r.value) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message
                    }), n.dirty()) : "finite" === r.kind ? Number.isFinite(e.data) || (f(t = this._getOrReturnCtx(e, t), {
                        code: o.not_finite,
                        message: r.message
                    }), n.dirty()) : tt.assertNever(r);
                    return {
                        status: n.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, tr.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, tr.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, tr.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, tr.toString(t))
                }
                setLimit(e, t, n, r) {
                    return new U({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: n,
                            message: tr.toString(r)
                        }]
                    })
                }
                _addCheck(e) {
                    return new U({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: tr.toString(e)
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: tr.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: tr.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: tr.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: tr.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: tr.toString(t)
                    })
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: tr.toString(e)
                    })
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: !0,
                        value: Number.MIN_SAFE_INTEGER,
                        message: tr.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: !0,
                        value: Number.MAX_SAFE_INTEGER,
                        message: tr.toString(e)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
                get isInt() {
                    return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && tt.isInteger(e.value))
                }
                get isFinite() {
                    let e = null,
                        t = null;
                    for (let n of this._def.checks) {
                        if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind) return !0;
                        "min" === n.kind ? (null === t || n.value > t) && (t = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value)
                    }
                    return Number.isFinite(t) && Number.isFinite(e)
                }
            }
            U.create = e => new U({
                checks: [],
                typeName: to.ZodNumber,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...E(e)
            });
            class B extends R {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== i.bigint) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.bigint,
                            received: t.parsedType
                        }), p
                    }
                    let n = new h;
                    for (let r of this._def.checks) "min" === r.kind ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_small,
                        type: "bigint",
                        minimum: r.value,
                        inclusive: r.inclusive,
                        message: r.message
                    }), n.dirty()) : "max" === r.kind ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_big,
                        type: "bigint",
                        maximum: r.value,
                        inclusive: r.inclusive,
                        message: r.message
                    }), n.dirty()) : "multipleOf" === r.kind ? e.data % r.value !== BigInt(0) && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.not_multiple_of,
                        multipleOf: r.value,
                        message: r.message
                    }), n.dirty()) : tt.assertNever(r);
                    return {
                        status: n.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, tr.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, tr.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, tr.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, tr.toString(t))
                }
                setLimit(e, t, n, r) {
                    return new B({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: n,
                            message: tr.toString(r)
                        }]
                    })
                }
                _addCheck(e) {
                    return new B({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !1,
                        message: tr.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !1,
                        message: tr.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !0,
                        message: tr.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !0,
                        message: tr.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: tr.toString(t)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            B.create = e => {
                var t;
                return new B({
                    checks: [],
                    typeName: to.ZodBigInt,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...E(e)
                })
            };
            class z extends R {
                _parse(e) {
                    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== i.boolean) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.boolean,
                            received: t.parsedType
                        }), p
                    }
                    return _(e.data)
                }
            }
            z.create = e => new z({
                typeName: to.ZodBoolean,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...E(e)
            });
            class H extends R {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== i.date) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.date,
                            received: t.parsedType
                        }), p
                    }
                    if (isNaN(e.data.getTime())) return f(this._getOrReturnCtx(e), {
                        code: o.invalid_date
                    }), p;
                    let n = new h;
                    for (let r of this._def.checks) "min" === r.kind ? e.data.getTime() < r.value && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_small,
                        message: r.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: r.value,
                        type: "date"
                    }), n.dirty()) : "max" === r.kind ? e.data.getTime() > r.value && (f(t = this._getOrReturnCtx(e, t), {
                        code: o.too_big,
                        message: r.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: r.value,
                        type: "date"
                    }), n.dirty()) : tt.assertNever(r);
                    return {
                        status: n.value,
                        value: new Date(e.data.getTime())
                    }
                }
                _addCheck(e) {
                    return new H({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: tr.toString(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: tr.toString(t)
                    })
                }
                get minDate() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
                get maxDate() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
            }
            H.create = e => new H({
                checks: [],
                coerce: (null == e ? void 0 : e.coerce) || !1,
                typeName: to.ZodDate,
                ...E(e)
            });
            class W extends R {
                _parse(e) {
                    if (this._getType(e) !== i.symbol) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.symbol,
                            received: t.parsedType
                        }), p
                    }
                    return _(e.data)
                }
            }
            W.create = e => new W({
                typeName: to.ZodSymbol,
                ...E(e)
            });
            class V extends R {
                _parse(e) {
                    if (this._getType(e) !== i.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.undefined,
                            received: t.parsedType
                        }), p
                    }
                    return _(e.data)
                }
            }
            V.create = e => new V({
                typeName: to.ZodUndefined,
                ...E(e)
            });
            class G extends R {
                _parse(e) {
                    if (this._getType(e) !== i.null) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.null,
                            received: t.parsedType
                        }), p
                    }
                    return _(e.data)
                }
            }
            G.create = e => new G({
                typeName: to.ZodNull,
                ...E(e)
            });
            class K extends R {
                constructor() {
                    super(...arguments), this._any = !0
                }
                _parse(e) {
                    return _(e.data)
                }
            }
            K.create = e => new K({
                typeName: to.ZodAny,
                ...E(e)
            });
            class Y extends R {
                constructor() {
                    super(...arguments), this._unknown = !0
                }
                _parse(e) {
                    return _(e.data)
                }
            }
            Y.create = e => new Y({
                typeName: to.ZodUnknown,
                ...E(e)
            });
            class Q extends R {
                _parse(e) {
                    let t = this._getOrReturnCtx(e);
                    return f(t, {
                        code: o.invalid_type,
                        expected: i.never,
                        received: t.parsedType
                    }), p
                }
            }
            Q.create = e => new Q({
                typeName: to.ZodNever,
                ...E(e)
            });
            class J extends R {
                _parse(e) {
                    if (this._getType(e) !== i.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.void,
                            received: t.parsedType
                        }), p
                    }
                    return _(e.data)
                }
            }
            J.create = e => new J({
                typeName: to.ZodVoid,
                ...E(e)
            });
            class X extends R {
                _parse(e) {
                    let {
                        ctx: t,
                        status: n
                    } = this._processInputParams(e), r = this._def;
                    if (t.parsedType !== i.array) return f(t, {
                        code: o.invalid_type,
                        expected: i.array,
                        received: t.parsedType
                    }), p;
                    if (null !== r.exactLength) {
                        let e = t.data.length > r.exactLength.value,
                            i = t.data.length < r.exactLength.value;
                        (e || i) && (f(t, {
                            code: e ? o.too_big : o.too_small,
                            minimum: i ? r.exactLength.value : void 0,
                            maximum: e ? r.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: r.exactLength.message
                        }), n.dirty())
                    }
                    if (null !== r.minLength && t.data.length < r.minLength.value && (f(t, {
                            code: o.too_small,
                            minimum: r.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: r.minLength.message
                        }), n.dirty()), null !== r.maxLength && t.data.length > r.maxLength.value && (f(t, {
                            code: o.too_big,
                            maximum: r.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: r.maxLength.message
                        }), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => r.type._parseAsync(new x(t, e, t.path, n)))).then(e => h.mergeArray(n, e));
                    let s = [...t.data].map((e, n) => r.type._parseSync(new x(t, e, t.path, n)));
                    return h.mergeArray(n, s)
                }
                get element() {
                    return this._def.type
                }
                min(e, t) {
                    return new X({ ...this._def,
                        minLength: {
                            value: e,
                            message: tr.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new X({ ...this._def,
                        maxLength: {
                            value: e,
                            message: tr.toString(t)
                        }
                    })
                }
                length(e, t) {
                    return new X({ ...this._def,
                        exactLength: {
                            value: e,
                            message: tr.toString(t)
                        }
                    })
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            X.create = (e, t) => new X({
                type: e,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: to.ZodArray,
                ...E(t)
            });
            class ee extends R {
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                }
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let e = this._def.shape(),
                        t = tt.objectKeys(e);
                    return this._cached = {
                        shape: e,
                        keys: t
                    }
                }
                _parse(e) {
                    if (this._getType(e) !== i.object) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.object,
                            received: t.parsedType
                        }), p
                    }
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e), {
                        shape: r,
                        keys: s
                    } = this._getCached(), a = [];
                    if (!(this._def.catchall instanceof Q && "strip" === this._def.unknownKeys))
                        for (let e in n.data) s.includes(e) || a.push(e);
                    let l = [];
                    for (let e of s) {
                        let t = r[e],
                            i = n.data[e];
                        l.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new x(n, i, n.path, e)),
                            alwaysSet: e in n.data
                        })
                    }
                    if (this._def.catchall instanceof Q) {
                        let e = this._def.unknownKeys;
                        if ("passthrough" === e)
                            for (let e of a) l.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: n.data[e]
                                }
                            });
                        else if ("strict" === e) a.length > 0 && (f(n, {
                            code: o.unrecognized_keys,
                            keys: a
                        }), t.dirty());
                        else if ("strip" === e);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let e = this._def.catchall;
                        for (let t of a) {
                            let r = n.data[t];
                            l.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new x(n, r, n.path, t)),
                                alwaysSet: t in n.data
                            })
                        }
                    }
                    return n.common.async ? Promise.resolve().then(async () => {
                        let e = [];
                        for (let t of l) {
                            let n = await t.key,
                                r = await t.value;
                            e.push({
                                key: n,
                                value: r,
                                alwaysSet: t.alwaysSet
                            })
                        }
                        return e
                    }).then(e => h.mergeObjectSync(t, e)) : h.mergeObjectSync(t, l)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(e) {
                    return tr.errToObj, new ee({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== e ? {
                            errorMap: (t, n) => {
                                var r, i, s, o;
                                let a = null !== (s = null === (i = (r = this._def).errorMap) || void 0 === i ? void 0 : i.call(r, t, n).message) && void 0 !== s ? s : n.defaultError;
                                return "unrecognized_keys" === t.code ? {
                                    message: null !== (o = tr.errToObj(e).message) && void 0 !== o ? o : a
                                } : {
                                    message: a
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new ee({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new ee({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                extend(e) {
                    return new ee({ ...this._def,
                        shape: () => ({ ...this._def.shape(),
                            ...e
                        })
                    })
                }
                merge(e) {
                    return new ee({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: () => ({ ...this._def.shape(),
                            ...e._def.shape()
                        }),
                        typeName: to.ZodObject
                    })
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    })
                }
                catchall(e) {
                    return new ee({ ...this._def,
                        catchall: e
                    })
                }
                pick(e) {
                    let t = {};
                    return tt.objectKeys(e).forEach(n => {
                        e[n] && this.shape[n] && (t[n] = this.shape[n])
                    }), new ee({ ...this._def,
                        shape: () => t
                    })
                }
                omit(e) {
                    let t = {};
                    return tt.objectKeys(this.shape).forEach(n => {
                        e[n] || (t[n] = this.shape[n])
                    }), new ee({ ...this._def,
                        shape: () => t
                    })
                }
                deepPartial() {
                    return function e(t) {
                        if (t instanceof ee) {
                            let n = {};
                            for (let r in t.shape) {
                                let i = t.shape[r];
                                n[r] = eg.create(e(i))
                            }
                            return new ee({ ...t._def,
                                shape: () => n
                            })
                        }
                        return t instanceof X ? new X({ ...t._def,
                            type: e(t.element)
                        }) : t instanceof eg ? eg.create(e(t.unwrap())) : t instanceof em ? em.create(e(t.unwrap())) : t instanceof es ? es.create(t.items.map(t => e(t))) : t
                    }(this)
                }
                partial(e) {
                    let t = {};
                    return tt.objectKeys(this.shape).forEach(n => {
                        let r = this.shape[n];
                        e && !e[n] ? t[n] = r : t[n] = r.optional()
                    }), new ee({ ...this._def,
                        shape: () => t
                    })
                }
                required(e) {
                    let t = {};
                    return tt.objectKeys(this.shape).forEach(n => {
                        if (e && !e[n]) t[n] = this.shape[n];
                        else {
                            let e = this.shape[n];
                            for (; e instanceof eg;) e = e._def.innerType;
                            t[n] = e
                        }
                    }), new ee({ ...this._def,
                        shape: () => t
                    })
                }
                keyof() {
                    return ef(tt.objectKeys(this.shape))
                }
            }
            ee.create = (e, t) => new ee({
                shape: () => e,
                unknownKeys: "strip",
                catchall: Q.create(),
                typeName: to.ZodObject,
                ...E(t)
            }), ee.strictCreate = (e, t) => new ee({
                shape: () => e,
                unknownKeys: "strict",
                catchall: Q.create(),
                typeName: to.ZodObject,
                ...E(t)
            }), ee.lazycreate = (e, t) => new ee({
                shape: e,
                unknownKeys: "strip",
                catchall: Q.create(),
                typeName: to.ZodObject,
                ...E(t)
            });
            class et extends R {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = this._def.options;
                    if (t.common.async) return Promise.all(n.map(async e => {
                        let n = { ...t,
                            common: { ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: n
                            }),
                            ctx: n
                        }
                    })).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status) return t.result;
                        for (let n of e)
                            if ("dirty" === n.result.status) return t.common.issues.push(...n.ctx.common.issues), n.result;
                        let n = e.map(e => new a(e.ctx.common.issues));
                        return f(t, {
                            code: o.invalid_union,
                            unionErrors: n
                        }), p
                    }); {
                        let e;
                        let r = [];
                        for (let i of n) {
                            let n = { ...t,
                                    common: { ...t.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                s = i._parseSync({
                                    data: t.data,
                                    path: t.path,
                                    parent: n
                                });
                            if ("valid" === s.status) return s;
                            "dirty" !== s.status || e || (e = {
                                result: s,
                                ctx: n
                            }), n.common.issues.length && r.push(n.common.issues)
                        }
                        if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                        let i = r.map(e => new a(e));
                        return f(t, {
                            code: o.invalid_union,
                            unionErrors: i
                        }), p
                    }
                }
                get options() {
                    return this._def.options
                }
            }
            et.create = (e, t) => new et({
                options: e,
                typeName: to.ZodUnion,
                ...E(t)
            });
            let en = e => {
                if (e instanceof ec) return en(e.schema);
                if (e instanceof e_) return en(e.innerType());
                if (e instanceof ed) return [e.value];
                if (e instanceof eh) return e.options;
                if (e instanceof ep) return tt.objectValues(e.enum);
                if (e instanceof ey) return en(e._def.innerType);
                if (e instanceof V) return [void 0];
                else if (e instanceof G) return [null];
                else if (e instanceof eg) return [void 0, ...en(e.unwrap())];
                else if (e instanceof em) return [null, ...en(e.unwrap())];
                else if (e instanceof ex) return en(e.unwrap());
                else if (e instanceof eE) return en(e.unwrap());
                else if (e instanceof eb) return en(e._def.innerType);
                else return []
            };
            class er extends R {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== i.object) return f(t, {
                        code: o.invalid_type,
                        expected: i.object,
                        received: t.parsedType
                    }), p;
                    let n = this.discriminator,
                        r = t.data[n],
                        s = this.optionsMap.get(r);
                    return s ? t.common.async ? s._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : s._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : (f(t, {
                        code: o.invalid_union_discriminator,
                        options: Array.from(this.optionsMap.keys()),
                        path: [n]
                    }), p)
                }
                get discriminator() {
                    return this._def.discriminator
                }
                get options() {
                    return this._def.options
                }
                get optionsMap() {
                    return this._def.optionsMap
                }
                static create(e, t, n) {
                    let r = new Map;
                    for (let n of t) {
                        let t = en(n.shape[e]);
                        if (!t.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        for (let i of t) {
                            if (r.has(i)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
                            r.set(i, n)
                        }
                    }
                    return new er({
                        typeName: to.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: r,
                        ...E(n)
                    })
                }
            }
            class ei extends R {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e), r = (e, r) => {
                        if (g(e) || g(r)) return p;
                        let a = function e(t, n) {
                            let r = s(t),
                                o = s(n);
                            if (t === n) return {
                                valid: !0,
                                data: t
                            };
                            if (r === i.object && o === i.object) {
                                let r = tt.objectKeys(n),
                                    i = tt.objectKeys(t).filter(e => -1 !== r.indexOf(e)),
                                    s = { ...t,
                                        ...n
                                    };
                                for (let r of i) {
                                    let i = e(t[r], n[r]);
                                    if (!i.valid) return {
                                        valid: !1
                                    };
                                    s[r] = i.data
                                }
                                return {
                                    valid: !0,
                                    data: s
                                }
                            }
                            if (r === i.array && o === i.array) {
                                if (t.length !== n.length) return {
                                    valid: !1
                                };
                                let r = [];
                                for (let i = 0; i < t.length; i++) {
                                    let s = e(t[i], n[i]);
                                    if (!s.valid) return {
                                        valid: !1
                                    };
                                    r.push(s.data)
                                }
                                return {
                                    valid: !0,
                                    data: r
                                }
                            }
                            return r === i.date && o === i.date && +t == +n ? {
                                valid: !0,
                                data: t
                            } : {
                                valid: !1
                            }
                        }(e.value, r.value);
                        return a.valid ? ((m(e) || m(r)) && t.dirty(), {
                            status: t.value,
                            value: a.data
                        }) : (f(n, {
                            code: o.invalid_intersection_types
                        }), p)
                    };
                    return n.common.async ? Promise.all([this._def.left._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    }), this._def.right._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    })]).then(([e, t]) => r(e, t)) : r(this._def.left._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    }), this._def.right._parseSync({
                        data: n.data,
                        path: n.path,
                        parent: n
                    }))
                }
            }
            ei.create = (e, t, n) => new ei({
                left: e,
                right: t,
                typeName: to.ZodIntersection,
                ...E(n)
            });
            class es extends R {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== i.array) return f(n, {
                        code: o.invalid_type,
                        expected: i.array,
                        received: n.parsedType
                    }), p;
                    if (n.data.length < this._def.items.length) return f(n, {
                        code: o.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), p;
                    !this._def.rest && n.data.length > this._def.items.length && (f(n, {
                        code: o.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), t.dirty());
                    let r = [...n.data].map((e, t) => {
                        let r = this._def.items[t] || this._def.rest;
                        return r ? r._parse(new x(n, e, n.path, t)) : null
                    }).filter(e => !!e);
                    return n.common.async ? Promise.all(r).then(e => h.mergeArray(t, e)) : h.mergeArray(t, r)
                }
                get items() {
                    return this._def.items
                }
                rest(e) {
                    return new es({ ...this._def,
                        rest: e
                    })
                }
            }
            es.create = (e, t) => {
                if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new es({
                    items: e,
                    typeName: to.ZodTuple,
                    rest: null,
                    ...E(t)
                })
            };
            class eo extends R {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== i.object) return f(n, {
                        code: o.invalid_type,
                        expected: i.object,
                        received: n.parsedType
                    }), p;
                    let r = [],
                        s = this._def.keyType,
                        a = this._def.valueType;
                    for (let e in n.data) r.push({
                        key: s._parse(new x(n, e, n.path, e)),
                        value: a._parse(new x(n, n.data[e], n.path, e)),
                        alwaysSet: e in n.data
                    });
                    return n.common.async ? h.mergeObjectAsync(t, r) : h.mergeObjectSync(t, r)
                }
                get element() {
                    return this._def.valueType
                }
                static create(e, t, n) {
                    return new eo(t instanceof R ? {
                        keyType: e,
                        valueType: t,
                        typeName: to.ZodRecord,
                        ...E(n)
                    } : {
                        keyType: Z.create(),
                        valueType: e,
                        typeName: to.ZodRecord,
                        ...E(t)
                    })
                }
            }
            class ea extends R {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== i.map) return f(n, {
                        code: o.invalid_type,
                        expected: i.map,
                        received: n.parsedType
                    }), p;
                    let r = this._def.keyType,
                        s = this._def.valueType,
                        a = [...n.data.entries()].map(([e, t], i) => ({
                            key: r._parse(new x(n, e, n.path, [i, "key"])),
                            value: s._parse(new x(n, t, n.path, [i, "value"]))
                        }));
                    if (n.common.async) {
                        let e = new Map;
                        return Promise.resolve().then(async () => {
                            for (let n of a) {
                                let r = await n.key,
                                    i = await n.value;
                                if ("aborted" === r.status || "aborted" === i.status) return p;
                                ("dirty" === r.status || "dirty" === i.status) && t.dirty(), e.set(r.value, i.value)
                            }
                            return {
                                status: t.value,
                                value: e
                            }
                        })
                    } {
                        let e = new Map;
                        for (let n of a) {
                            let r = n.key,
                                i = n.value;
                            if ("aborted" === r.status || "aborted" === i.status) return p;
                            ("dirty" === r.status || "dirty" === i.status) && t.dirty(), e.set(r.value, i.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                }
            }
            ea.create = (e, t, n) => new ea({
                valueType: t,
                keyType: e,
                typeName: to.ZodMap,
                ...E(n)
            });
            class el extends R {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== i.set) return f(n, {
                        code: o.invalid_type,
                        expected: i.set,
                        received: n.parsedType
                    }), p;
                    let r = this._def;
                    null !== r.minSize && n.data.size < r.minSize.value && (f(n, {
                        code: o.too_small,
                        minimum: r.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: r.minSize.message
                    }), t.dirty()), null !== r.maxSize && n.data.size > r.maxSize.value && (f(n, {
                        code: o.too_big,
                        maximum: r.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: r.maxSize.message
                    }), t.dirty());
                    let s = this._def.valueType;

                    function a(e) {
                        let n = new Set;
                        for (let r of e) {
                            if ("aborted" === r.status) return p;
                            "dirty" === r.status && t.dirty(), n.add(r.value)
                        }
                        return {
                            status: t.value,
                            value: n
                        }
                    }
                    let l = [...n.data.values()].map((e, t) => s._parse(new x(n, e, n.path, t)));
                    return n.common.async ? Promise.all(l).then(e => a(e)) : a(l)
                }
                min(e, t) {
                    return new el({ ...this._def,
                        minSize: {
                            value: e,
                            message: tr.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new el({ ...this._def,
                        maxSize: {
                            value: e,
                            message: tr.toString(t)
                        }
                    })
                }
                size(e, t) {
                    return this.min(e, t).max(e, t)
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            el.create = (e, t) => new el({
                valueType: e,
                minSize: null,
                maxSize: null,
                typeName: to.ZodSet,
                ...E(t)
            });
            class eu extends R {
                constructor() {
                    super(...arguments), this.validate = this.implement
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== i.function) return f(t, {
                        code: o.invalid_type,
                        expected: i.function,
                        received: t.parsedType
                    }), p;

                    function n(e, n) {
                        return d({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter(e => !!e),
                            issueData: {
                                code: o.invalid_arguments,
                                argumentsError: n
                            }
                        })
                    }

                    function r(e, n) {
                        return d({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, c(), l].filter(e => !!e),
                            issueData: {
                                code: o.invalid_return_type,
                                returnTypeError: n
                            }
                        })
                    }
                    let s = {
                            errorMap: t.common.contextualErrorMap
                        },
                        u = t.data;
                    if (this._def.returns instanceof ev) {
                        let e = this;
                        return _(async function(...t) {
                            let i = new a([]),
                                o = await e._def.args.parseAsync(t, s).catch(e => {
                                    throw i.addIssue(n(t, e)), i
                                }),
                                l = await Reflect.apply(u, this, o);
                            return await e._def.returns._def.type.parseAsync(l, s).catch(e => {
                                throw i.addIssue(r(l, e)), i
                            })
                        })
                    } {
                        let e = this;
                        return _(function(...t) {
                            let i = e._def.args.safeParse(t, s);
                            if (!i.success) throw new a([n(t, i.error)]);
                            let o = Reflect.apply(u, this, i.data),
                                l = e._def.returns.safeParse(o, s);
                            if (!l.success) throw new a([r(o, l.error)]);
                            return l.data
                        })
                    }
                }
                parameters() {
                    return this._def.args
                }
                returnType() {
                    return this._def.returns
                }
                args(...e) {
                    return new eu({ ...this._def,
                        args: es.create(e).rest(Y.create())
                    })
                }
                returns(e) {
                    return new eu({ ...this._def,
                        returns: e
                    })
                }
                implement(e) {
                    return this.parse(e)
                }
                strictImplement(e) {
                    return this.parse(e)
                }
                static create(e, t, n) {
                    return new eu({
                        args: e || es.create([]).rest(Y.create()),
                        returns: t || Y.create(),
                        typeName: to.ZodFunction,
                        ...E(n)
                    })
                }
            }
            class ec extends R {
                get schema() {
                    return this._def.getter()
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return this._def.getter()._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    })
                }
            }
            ec.create = (e, t) => new ec({
                getter: e,
                typeName: to.ZodLazy,
                ...E(t)
            });
            class ed extends R {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            received: t.data,
                            code: o.invalid_literal,
                            expected: this._def.value
                        }), p
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
                get value() {
                    return this._def.value
                }
            }

            function ef(e, t) {
                return new eh({
                    values: e,
                    typeName: to.ZodEnum,
                    ...E(t)
                })
            }
            ed.create = (e, t) => new ed({
                value: e,
                typeName: to.ZodLiteral,
                ...E(t)
            });
            class eh extends R {
                constructor() {
                    super(...arguments), ti.set(this, void 0)
                }
                _parse(e) {
                    if ("string" != typeof e.data) {
                        let t = this._getOrReturnCtx(e),
                            n = this._def.values;
                        return f(t, {
                            expected: tt.joinValues(n),
                            received: t.parsedType,
                            code: o.invalid_type
                        }), p
                    }
                    if (k(this, ti, "f") || w(this, ti, new Set(this._def.values), "f"), !k(this, ti, "f").has(e.data)) {
                        let t = this._getOrReturnCtx(e),
                            n = this._def.values;
                        return f(t, {
                            received: t.data,
                            code: o.invalid_enum_value,
                            options: n
                        }), p
                    }
                    return _(e.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Values() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                extract(e, t = this._def) {
                    return eh.create(e, { ...this._def,
                        ...t
                    })
                }
                exclude(e, t = this._def) {
                    return eh.create(this.options.filter(t => !e.includes(t)), { ...this._def,
                        ...t
                    })
                }
            }
            ti = new WeakMap, eh.create = ef;
            class ep extends R {
                constructor() {
                    super(...arguments), ts.set(this, void 0)
                }
                _parse(e) {
                    let t = tt.getValidEnumValues(this._def.values),
                        n = this._getOrReturnCtx(e);
                    if (n.parsedType !== i.string && n.parsedType !== i.number) {
                        let e = tt.objectValues(t);
                        return f(n, {
                            expected: tt.joinValues(e),
                            received: n.parsedType,
                            code: o.invalid_type
                        }), p
                    }
                    if (k(this, ts, "f") || w(this, ts, new Set(tt.getValidEnumValues(this._def.values)), "f"), !k(this, ts, "f").has(e.data)) {
                        let e = tt.objectValues(t);
                        return f(n, {
                            received: n.data,
                            code: o.invalid_enum_value,
                            options: e
                        }), p
                    }
                    return _(e.data)
                }
                get enum() {
                    return this._def.values
                }
            }
            ts = new WeakMap, ep.create = (e, t) => new ep({
                values: e,
                typeName: to.ZodNativeEnum,
                ...E(t)
            });
            class ev extends R {
                unwrap() {
                    return this._def.type
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return t.parsedType !== i.promise && !1 === t.common.async ? (f(t, {
                        code: o.invalid_type,
                        expected: i.promise,
                        received: t.parsedType
                    }), p) : _((t.parsedType === i.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                        path: t.path,
                        errorMap: t.common.contextualErrorMap
                    })))
                }
            }
            ev.create = (e, t) => new ev({
                type: e,
                typeName: to.ZodPromise,
                ...E(t)
            });
            class e_ extends R {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === to.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e), r = this._def.effect || null, i = {
                        addIssue: e => {
                            f(n, e), e.fatal ? t.abort() : t.dirty()
                        },
                        get path() {
                            return n.path
                        }
                    };
                    if (i.addIssue = i.addIssue.bind(i), "preprocess" === r.type) {
                        let e = r.transform(n.data, i);
                        if (n.common.async) return Promise.resolve(e).then(async e => {
                            if ("aborted" === t.value) return p;
                            let r = await this._def.schema._parseAsync({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === r.status ? p : "dirty" === r.status || "dirty" === t.value ? v(r.value) : r
                        }); {
                            if ("aborted" === t.value) return p;
                            let r = this._def.schema._parseSync({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === r.status ? p : "dirty" === r.status || "dirty" === t.value ? v(r.value) : r
                        }
                    }
                    if ("refinement" === r.type) {
                        let e = e => {
                            let t = r.refinement(e, i);
                            if (n.common.async) return Promise.resolve(t);
                            if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return e
                        };
                        if (!1 !== n.common.async) return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(n => "aborted" === n.status ? p : ("dirty" === n.status && t.dirty(), e(n.value).then(() => ({
                            status: t.value,
                            value: n.value
                        })))); {
                            let r = this._def.schema._parseSync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === r.status ? p : ("dirty" === r.status && t.dirty(), e(r.value), {
                                status: t.value,
                                value: r.value
                            })
                        }
                    }
                    if ("transform" === r.type) {
                        if (!1 !== n.common.async) return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(e => y(e) ? Promise.resolve(r.transform(e.value, i)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e); {
                            let e = this._def.schema._parseSync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            if (!y(e)) return e;
                            let s = r.transform(e.value, i);
                            if (s instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: t.value,
                                value: s
                            }
                        }
                    }
                    tt.assertNever(r)
                }
            }
            e_.create = (e, t, n) => new e_({
                schema: e,
                typeName: to.ZodEffects,
                effect: t,
                ...E(n)
            }), e_.createWithPreprocess = (e, t, n) => new e_({
                schema: t,
                effect: {
                    type: "preprocess",
                    transform: e
                },
                typeName: to.ZodEffects,
                ...E(n)
            });
            class eg extends R {
                _parse(e) {
                    return this._getType(e) === i.undefined ? _(void 0) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            eg.create = (e, t) => new eg({
                innerType: e,
                typeName: to.ZodOptional,
                ...E(t)
            });
            class em extends R {
                _parse(e) {
                    return this._getType(e) === i.null ? _(null) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            em.create = (e, t) => new em({
                innerType: e,
                typeName: to.ZodNullable,
                ...E(t)
            });
            class ey extends R {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = t.data;
                    return t.parsedType === i.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
                        data: n,
                        path: t.path,
                        parent: t
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            ey.create = (e, t) => new ey({
                innerType: e,
                typeName: to.ZodDefault,
                defaultValue: "function" == typeof t.default ? t.default : () => t.default,
                ...E(t)
            });
            class eb extends R {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = { ...t,
                        common: { ...t.common,
                            issues: []
                        }
                    }, r = this._def.innerType._parse({
                        data: n.data,
                        path: n.path,
                        parent: { ...n
                        }
                    });
                    return b(r) ? r.then(e => ({
                        status: "valid",
                        value: "valid" === e.status ? e.value : this._def.catchValue({
                            get error() {
                                return new a(n.common.issues)
                            },
                            input: n.data
                        })
                    })) : {
                        status: "valid",
                        value: "valid" === r.status ? r.value : this._def.catchValue({
                            get error() {
                                return new a(n.common.issues)
                            },
                            input: n.data
                        })
                    }
                }
                removeCatch() {
                    return this._def.innerType
                }
            }
            eb.create = (e, t) => new eb({
                innerType: e,
                typeName: to.ZodCatch,
                catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
                ...E(t)
            });
            class ek extends R {
                _parse(e) {
                    if (this._getType(e) !== i.nan) {
                        let t = this._getOrReturnCtx(e);
                        return f(t, {
                            code: o.invalid_type,
                            expected: i.nan,
                            received: t.parsedType
                        }), p
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
            }
            ek.create = e => new ek({
                typeName: to.ZodNaN,
                ...E(e)
            });
            let ew = Symbol("zod_brand");
            class ex extends R {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = t.data;
                    return this._def.type._parse({
                        data: n,
                        path: t.path,
                        parent: t
                    })
                }
                unwrap() {
                    return this._def.type
                }
            }
            class eS extends R {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.common.async) return (async () => {
                        let e = await this._def.in._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), v(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: n.path,
                            parent: n
                        })
                    })(); {
                        let e = this._def.in._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        });
                        return "aborted" === e.status ? p : "dirty" === e.status ? (t.dirty(), {
                            status: "dirty",
                            value: e.value
                        }) : this._def.out._parseSync({
                            data: e.value,
                            path: n.path,
                            parent: n
                        })
                    }
                }
                static create(e, t) {
                    return new eS({ in: e,
                        out: t,
                        typeName: to.ZodPipeline
                    })
                }
            }
            class eE extends R {
                _parse(e) {
                    let t = this._def.innerType._parse(e),
                        n = e => (y(e) && (e.value = Object.freeze(e.value)), e);
                    return b(t) ? t.then(e => n(e)) : n(t)
                }
                unwrap() {
                    return this._def.innerType
                }
            }

            function eR(e, t = {}, n) {
                return e ? K.create().superRefine((r, i) => {
                    var s, o;
                    if (!e(r)) {
                        let e = "function" == typeof t ? t(r) : "string" == typeof t ? {
                                message: t
                            } : t,
                            a = null === (o = null !== (s = e.fatal) && void 0 !== s ? s : n) || void 0 === o || o;
                        i.addIssue({
                            code: "custom",
                            ..."string" == typeof e ? {
                                message: e
                            } : e,
                            fatal: a
                        })
                    }
                }) : K.create()
            }
            eE.create = (e, t) => new eE({
                innerType: e,
                typeName: to.ZodReadonly,
                ...E(t)
            });
            let eP = {
                object: ee.lazycreate
            };
            (te = to || (to = {})).ZodString = "ZodString", te.ZodNumber = "ZodNumber", te.ZodNaN = "ZodNaN", te.ZodBigInt = "ZodBigInt", te.ZodBoolean = "ZodBoolean", te.ZodDate = "ZodDate", te.ZodSymbol = "ZodSymbol", te.ZodUndefined = "ZodUndefined", te.ZodNull = "ZodNull", te.ZodAny = "ZodAny", te.ZodUnknown = "ZodUnknown", te.ZodNever = "ZodNever", te.ZodVoid = "ZodVoid", te.ZodArray = "ZodArray", te.ZodObject = "ZodObject", te.ZodUnion = "ZodUnion", te.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", te.ZodIntersection = "ZodIntersection", te.ZodTuple = "ZodTuple", te.ZodRecord = "ZodRecord", te.ZodMap = "ZodMap", te.ZodSet = "ZodSet", te.ZodFunction = "ZodFunction", te.ZodLazy = "ZodLazy", te.ZodLiteral = "ZodLiteral", te.ZodEnum = "ZodEnum", te.ZodEffects = "ZodEffects", te.ZodNativeEnum = "ZodNativeEnum", te.ZodOptional = "ZodOptional", te.ZodNullable = "ZodNullable", te.ZodDefault = "ZodDefault", te.ZodCatch = "ZodCatch", te.ZodPromise = "ZodPromise", te.ZodBranded = "ZodBranded", te.ZodPipeline = "ZodPipeline", te.ZodReadonly = "ZodReadonly";
            let eT = Z.create,
                eI = U.create,
                eC = ek.create,
                eO = B.create,
                eF = z.create,
                eN = H.create,
                eM = W.create,
                e$ = V.create,
                ej = G.create,
                eA = K.create,
                eL = Y.create,
                eD = Q.create,
                eq = J.create,
                eZ = X.create,
                eU = ee.create,
                eB = ee.strictCreate,
                ez = et.create,
                eH = er.create,
                eW = ei.create,
                eV = es.create,
                eG = eo.create,
                eK = ea.create,
                eY = el.create,
                eQ = eu.create,
                eJ = ec.create,
                eX = ed.create,
                e0 = eh.create,
                e1 = ep.create,
                e2 = ev.create,
                e3 = e_.create,
                e5 = eg.create,
                e6 = em.create,
                e4 = e_.createWithPreprocess,
                e9 = eS.create;
            var e8, e7, te, tt, tn, tr, ti, ts, to, ta = Object.freeze({
                __proto__: null,
                defaultErrorMap: l,
                setErrorMap: function(e) {
                    u = e
                },
                getErrorMap: c,
                makeIssue: d,
                EMPTY_PATH: [],
                addIssueToContext: f,
                ParseStatus: h,
                INVALID: p,
                DIRTY: v,
                OK: _,
                isAborted: g,
                isDirty: m,
                isValid: y,
                isAsync: b,
                get util() {
                    return tt
                },
                get objectUtil() {
                    return tn
                },
                ZodParsedType: i,
                getParsedType: s,
                ZodType: R,
                datetimeRegex: q,
                ZodString: Z,
                ZodNumber: U,
                ZodBigInt: B,
                ZodBoolean: z,
                ZodDate: H,
                ZodSymbol: W,
                ZodUndefined: V,
                ZodNull: G,
                ZodAny: K,
                ZodUnknown: Y,
                ZodNever: Q,
                ZodVoid: J,
                ZodArray: X,
                ZodObject: ee,
                ZodUnion: et,
                ZodDiscriminatedUnion: er,
                ZodIntersection: ei,
                ZodTuple: es,
                ZodRecord: eo,
                ZodMap: ea,
                ZodSet: el,
                ZodFunction: eu,
                ZodLazy: ec,
                ZodLiteral: ed,
                ZodEnum: eh,
                ZodNativeEnum: ep,
                ZodPromise: ev,
                ZodEffects: e_,
                ZodTransformer: e_,
                ZodOptional: eg,
                ZodNullable: em,
                ZodDefault: ey,
                ZodCatch: eb,
                ZodNaN: ek,
                BRAND: ew,
                ZodBranded: ex,
                ZodPipeline: eS,
                ZodReadonly: eE,
                custom: eR,
                Schema: R,
                ZodSchema: R,
                late: eP,
                get ZodFirstPartyTypeKind() {
                    return to
                },
                coerce: {
                    string: e => Z.create({ ...e,
                        coerce: !0
                    }),
                    number: e => U.create({ ...e,
                        coerce: !0
                    }),
                    boolean: e => z.create({ ...e,
                        coerce: !0
                    }),
                    bigint: e => B.create({ ...e,
                        coerce: !0
                    }),
                    date: e => H.create({ ...e,
                        coerce: !0
                    })
                },
                any: eA,
                array: eZ,
                bigint: eO,
                boolean: eF,
                date: eN,
                discriminatedUnion: eH,
                effect: e3,
                enum: e0,
                function: eQ,
                instanceof: (e, t = {
                    message: `Input not instance of ${e.name}`
                }) => eR(t => t instanceof e, t),
                intersection: eW,
                lazy: eJ,
                literal: eX,
                map: eK,
                nan: eC,
                nativeEnum: e1,
                never: eD,
                null: ej,
                nullable: e6,
                number: eI,
                object: eU,
                oboolean: () => eF().optional(),
                onumber: () => eI().optional(),
                optional: e5,
                ostring: () => eT().optional(),
                pipeline: e9,
                preprocess: e4,
                promise: e2,
                record: eG,
                set: eY,
                strictObject: eB,
                string: eT,
                symbol: eM,
                transformer: e3,
                tuple: eV,
                undefined: e$,
                union: ez,
                unknown: eL,
                void: eq,
                NEVER: p,
                ZodIssueCode: o,
                quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
                ZodError: a
            })
        }
    }
]);