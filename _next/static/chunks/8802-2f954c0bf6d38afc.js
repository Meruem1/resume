(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8802], {
        73293: function(e, t, n) {
            "use strict";
            n.r(t);
            var s, i, a = n(94746);

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var s in n)({}).hasOwnProperty.call(n, s) && (e[s] = n[s])
                    }
                    return e
                }).apply(null, arguments)
            }
            var o = (0, a.forwardRef)(function(e, t) {
                return a.createElement("svg", r({
                    xmlns: "http://www.w3.org/TR/SVG",
                    width: 2815.219,
                    height: 3169.336,
                    viewBox: "0 0 2815.219 3169.336",
                    ref: t
                }, e), s || (s = a.createElement("path", {
                    xmlns: "http://www.w3.org/TR/SVG",
                    fill: "#253140",
                    d: "M1317.457 3060.44 174.821 2400.57a180.84 180.84 0 0 1-90.152-156.298V925.065a180.84 180.84 0 0 1 90.152-156.833l1142.636-659.336a180.84 180.84 0 0 1 180.838 0l1142.103 659.87a180.84 180.84 0 0 1 90.152 156.832v1318.674a180.84 180.84 0 0 1-90.152 156.832l-1142.103 659.337a180.84 180.84 0 0 1-180.838 0"
                })), i || (i = a.createElement("g", {
                    fill: "#f6f6f6"
                }, a.createElement("path", {
                    d: "M1267.361 1081.134v191.81h-249.066v810.18H809.308v-810.18H558.81v-191.81zM2252.175 1975.769c-88.748 80.159-207.555 121.67-340.677 121.67-280.557 0-522.467-210.418-522.467-515.31s241.91-515.31 522.467-515.31c131.69 0 249.067 42.943 334.951 118.808l-125.964 141.71c-52.962-37.216-124.533-64.413-197.535-64.413-180.359 0-316.343 133.121-316.343 319.205s135.984 319.206 316.343 319.206c75.865 0 150.298-28.628 204.692-71.57z"
                }))))
            });
            t.default = o
        },
        17397: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return i
                }
            });
            var s = n(81319);
            class i {
                static track() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.providers.forEach(e => {
                        e.track(...t)
                    })
                }
                static identify() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.providers.forEach(e => {
                        e.identify(...t)
                    })
                }
                static set() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.providers.forEach(e => {
                        e.set(...t)
                    })
                }
                static setOnce() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.providers.forEach(e => {
                        e.setOnce(...t)
                    })
                }
                static unset() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.providers.forEach(e => {
                        e.unset(...t)
                    })
                }
                static getProvider(e) {
                    var t;
                    return null !== (t = this.providers.find(t => t instanceof e)) && void 0 !== t ? t : null
                }
            }
            i.providers = [new s.t], window.AnalyticsManager = i, window.PostHogAnalytics = i.getProvider(s.t)
        },
        86883: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return i
                }
            });
            var s = n(33698);
            class i {
                get hasConsent() {
                    return this.cookieTypes.every(e => s.LO.getConsent(e))
                }
                queueTrack(e, t) {
                    this.queuedEvents.push([e, t]), this.log("Queued event", e, t)
                }
                queueIdentify() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.queuedIdentify = { ...this.queuedIdentify,
                        ...e
                    }, this.log("Queued identify", e)
                }
                queueSet(e) {
                    this.queuedSet = { ...this.queuedSet,
                        ...e
                    }, this.log("Queued set", e)
                }
                queueSetOnce(e) {
                    this.queuedSetOnce = { ...e,
                        ...this.queuedSetOnce
                    }, this.log("Queued setOnce", e)
                }
                queueUnset() {
                    for (var e, t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                    this.queuedUnset = [...null !== (e = this.queuedUnset) && void 0 !== e ? e : [], ...n], this.log("Queued unset", n)
                }
                trackQueuedData() {
                    if (this.isEnabled && (this.queuedIdentify || 0 !== this.queuedEvents.length))
                        for (this.log("Tracking queued data", {
                                identify: this.queuedIdentify ? { ...this.queuedIdentify
                                } : void 0,
                                events: [...this.queuedEvents],
                                set: this.queuedSet ? { ...this.queuedSet
                                } : void 0,
                                setOnce: this.queuedSetOnce ? { ...this.queuedSetOnce
                                } : void 0,
                                unset: this.queuedUnset ? [...this.queuedUnset] : void 0
                            }), this.queuedSet && (this.set(this.queuedSet), this.queuedSet = void 0), this.queuedSetOnce && (this.setOnce(this.queuedSetOnce), this.queuedSetOnce = void 0), this.queuedUnset && (this.unset(...this.queuedUnset), this.queuedUnset = void 0), this.queuedIdentify && (this.identify(this.queuedIdentify), this.queuedIdentify = void 0); this.queuedEvents.length > 0;) {
                            let [e, t] = this.queuedEvents.shift();
                            this.track(e, t)
                        }
                }
                log() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    i.enableLogging && ("trace" === i.enableLogging ? console.trace("[Analytics][".concat(this.name, "]"), ...t) : console.info("[Analytics][".concat(this.name, "]"), ...t))
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    i.enableLogging && console.warn("[Analytics][".concat(this.name, "]"), ...t)
                }
                error() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    i.enableLogging && console.error("[Analytics][".concat(this.name, "]"), ...t)
                }
                constructor() {
                    this.queuedEvents = []
                }
            }
            i.enableLogging = (() => {
                {
                    let e = new URLSearchParams(window.location.search);
                    return "trace" === e.get("debug-analytics") ? "trace" : e.has("debug-analytics")
                }
            })()
        },
        33698: function(e, t, n) {
            "use strict";
            n.d(t, {
                LO: function() {
                    return r
                },
                Zw: function() {
                    return i
                }
            });
            var s = n(31229);
            let i = "consent",
                a = s.z.object({
                    version: s.z.literal(1),
                    purposes: s.z.object({
                        cookieless: s.z.boolean()
                    })
                });
            class r {
                static init() {
                    if (!this.isReady) {
                        this.isReady = !0;
                        try {
                            let e = localStorage.getItem(i);
                            if (e) try {
                                let t = a.parse(JSON.parse(e));
                                this.consent = { ...t.purposes
                                }
                            } catch (t) {
                                this.warn("Failed to parse consent. Resetting consent.", e)
                            }
                        } catch (e) {
                            this.error("Failed to initialize consent API. Using defaults.")
                        }
                        this.fireReady({ ...this.consent
                        }), this.enableLogging && console.info("[Analytics][ConsentApi] Initialized")
                    }
                }
                static getConsent(e) {
                    return this.consent[e]
                }
                static setConsent(e) {
                    let t = { ...this.consent
                    };
                    this.consent = { ...e
                    };
                    let n = { ...this.consent
                    };
                    this.refreshStoredConsent(), this.fireConsentChange(n, t)
                }
                static setPurposeConsent(e, t) {
                    let n = { ...this.consent
                    };
                    this.consent[e] = t;
                    let s = { ...this.consent
                    };
                    this.refreshStoredConsent(), this.fireConsentChange(s, n)
                }
                static onConsentChange(e) {
                    this.changeListeners.push(e)
                }
                static offConsentChange(e) {
                    let t = this.changeListeners.indexOf(e); - 1 !== t && this.changeListeners.splice(t, 1)
                }
                static fireConsentChange() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.changeListeners.forEach(e => {
                        e(...t)
                    })
                }
                static onReady(e) {
                    if (this.isReady) {
                        e({ ...this.consent
                        });
                        return
                    }
                    this.readyListeners.push(e)
                }
                static offReady(e) {
                    let t = this.readyListeners.indexOf(e); - 1 !== t && this.readyListeners.splice(t, 1)
                }
                static fireReady() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.readyListeners.forEach(e => {
                        e(...t)
                    })
                }
                static refreshStoredConsent() {
                    try {
                        let e = a.parse({
                            version: 1,
                            purposes: this.consent
                        });
                        localStorage.setItem(i, JSON.stringify(e)), this.log("Updated consent", { ...this.consent
                        })
                    } catch (e) {
                        this.error("Failed to update consent", e)
                    }
                }
                static log() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.enableLogging && console.info("[Analytics][ConsentAPI]", ...t)
                }
                static warn() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.enableLogging && console.warn("[Analytics][ConsentAPI]", ...t)
                }
                static error() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.enableLogging && console.error("[Analytics][ConsentAPI]", ...t)
                }
            }
            r.enableLogging = new URLSearchParams(window.location.search).has("debug-analytics"), r.isReady = !1, r.consent = {
                cookieless: "1" !== navigator.doNotTrack
            }, r.changeListeners = [], r.readyListeners = [], window.ConsentApi = r, r.init()
        },
        81319: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return o
                }
            });
            var s = n(68841),
                i = n(46214),
                a = n(86883),
                r = n(33698);
            class o extends a.n {
                get isEnabled() {
                    return !!i.ZP && this.hasInit && this.isOptedIn && this.hasConsent
                }
                init() {
                    r.LO.onConsentChange((e, t) => {
                        this.onConsentApiEvent(e, t)
                    }), r.LO.onReady(e => this.onConsentApiEvent(e, e))
                }
                track(e, t) {
                    if (!this.isEnabled) return this.queueTrack(e, t);
                    i.ZP.capture(e, t)
                }
                identify(e) {}
                set(e) {
                    if (!this.isEnabled) return this.queueSet(e);
                    i.ZP.register(e), this.log("Set properties", e)
                }
                setOnce(e) {
                    if (!this.isEnabled) return this.queueSetOnce(e);
                    i.ZP.register_once(e), this.log("Set once properties", e)
                }
                unset() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (!this.isEnabled) return this.queueUnset(...t);
                    t.forEach(e => {
                        i.ZP.unregister(e)
                    }), this.log("Unset properties", t)
                }
                get isOptedIn() {
                    return !i.ZP.has_opted_out_capturing()
                }
                get hasInit() {
                    return i.ZP.__loaded
                }
                onConsentApiEvent(e, t) {
                    !this.hasInit && this.hasConsent && (this.log("Initializing"), i.ZP.init(s.x.NEXT_PUBLIC_POSTHOG_KEY, {
                        api_host: "/ingest",
                        ui_host: "https://eu.posthog.com",
                        capture_pageview: !1,
                        capture_pageleave: !1,
                        _onCapture: (e, t) => {
                            this.log("Tracked event", e, t.properties)
                        },
                        debug: !!a.n.enableLogging,
                        advanced_disable_decide: !0,
                        advanced_disable_feature_flags: !0,
                        advanced_disable_feature_flags_on_first_load: !0,
                        advanced_disable_toolbar_metrics: !0,
                        disable_session_recording: !0,
                        disable_persistence: !0,
                        disable_cookie: !0,
                        cookie_expiration: 0,
                        disable_surveys: !0,
                        disable_scroll_properties: !0,
                        enable_heatmaps: !1,
                        autocapture: !1,
                        save_referrer: !1,
                        persistence: "memory",
                        person_profiles: "never",
                        loaded: () => {
                            this.log("Initialized"), setTimeout(() => {
                                this.trackQueuedData()
                            }, 0)
                        }
                    })), this.hasInit && (this.hasConsent && (!this.isOptedIn || this.cookieTypes.some(n => e[n] !== t[n])) ? i.ZP.opt_in_capturing() : !this.hasConsent && this.isOptedIn && i.ZP.opt_out_capturing())
                }
                constructor(...e) {
                    super(...e), this.cookieTypes = ["cookieless"], this.name = "PostHog"
                }
            }
        },
        47535: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                POST_BODY_ID: function() {
                    return r
                }
            });
            var s = n(17397),
                i = n(69508),
                a = n(20955);
            let r = "blog-post-body";
            t.default = e => {
                let {
                    time: t,
                    depth: n,
                    event: o
                } = e, l = (0, a.useRef)(Date.now()), [c, u] = (0, a.useState)(!1), d = (0, i._)("#".concat(r), n), [h, f] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let e = setTimeout(() => {
                        u(!0)
                    }, t);
                    return () => {
                        clearTimeout(e)
                    }
                }, [t]), (0, a.useEffect)(() => {
                    if (c && d && !h) {
                        let e = Date.now() - l.current;
                        s.o.track(o, {
                            read_time_ms: e,
                            read_time_s: Math.round(e / 1e3)
                        }), f(!0)
                    }
                }, [c, d, h, o]), null
            }
        },
        28260: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(17397),
                i = n(3607),
                a = n(99376),
                r = n(20955);
            t.default = e => {
                let {
                    setProperties: t
                } = e, n = (0, a.usePathname)(), o = (0, r.useRef)("");
                return (0, r.useEffect)(() => (t && s.o.set((0, i.N)(t)), n === o.current || (o.current = n, s.o.track("$pageview", {
                    $current_url: window.origin + n
                })), () => {
                    t && s.o.unset(...Object.keys(t))
                }), [n, t]), null
            }
        },
        44023: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return v
                }
            });
            var s = n(26705),
                i = n(20955),
                a = n(26048),
                r = n(93448);
            let o = (0, r.cn)("scrollbar scrollbar-w-1 scrollbar-h-1 scrollbar-thumb-rounded-full scrollbar-thumb-stone-400 scrollbar-track-stone-200 scrollbar-corner", "[&.dark]:scrollbar-thumb-stone-600 [&.dark]:scrollbar-track-stone-800", "dark:scrollbar-thumb-stone-600 dark:scrollbar-track-stone-800");
            var l = n(25158),
                c = n(12381),
                u = n(11140),
                d = e => {
                    let {
                        code: t
                    } = e, [n, a] = (0, i.useState)(!1), r = (0, i.useRef)(null);
                    return ((0, i.useEffect)(() => (n && (r.current = window.setTimeout(() => {
                        a(!1)
                    }, 2e3)), () => {
                        r.current && clearTimeout(r.current)
                    }), [n]), t) ? (0, s.jsx)(c.z, {
                        variant: "ghost",
                        size: "icon",
                        className: "flex size-6 items-center justify-center p-0",
                        title: "Copy Code",
                        disabled: n,
                        onClick: () => {
                            !n && navigator.clipboard && t && (navigator.clipboard.writeText(t), a(!0))
                        },
                        children: n ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.IPg, {
                                className: "size-4"
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Code Copied"
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.EZF, {
                                className: "size-4"
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Copy Code"
                            })]
                        })
                    }) : null
                };
            n(58841);
            var h = e => {
                    let {
                        code: t,
                        language: n = "text",
                        highlightedLines: i,
                        className: c,
                        codeClassName: u,
                        allowCopy: h = !0
                    } = e, f = (0, a.U)(n);
                    return (0, s.jsxs)("div", {
                        className: (0, r.cn)("relative", c),
                        children: [h && (0, s.jsx)("div", {
                            className: "absolute right-0 top-0 z-10 p-1",
                            children: (0, s.jsx)(d, {
                                code: t
                            })
                        }), (0, s.jsx)(l.iV, {
                            className: (0, r.cn)(o, u),
                            language: f,
                            value: null != t ? t : "",
                            markers: i,
                            plainText: "text" === f
                        })]
                    })
                },
                f = n(55754),
                g = e => {
                    let {
                        language: t = "text",
                        ...n
                    } = e, i = (0, f.E)(t);
                    return (0, s.jsxs)("li", { ...n,
                        className: (0, r.cn)("m-0 flex min-w-48 max-w-48 items-center gap-1 truncate text-ellipsis text-nowrap bg-stone-200 p-2 text-xs text-stone-950", "dark:bg-stone-700 dark:text-stone-50", n.className),
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center justify-center",
                            title: t,
                            children: (0, s.jsx)(i, {
                                className: "size-4"
                            })
                        }), (0, s.jsx)("div", {
                            className: "grow truncate text-ellipsis",
                            children: n.children
                        })]
                    })
                },
                p = e => (0, s.jsx)("ul", { ...e,
                    className: (0, r.cn)(o, "relative -mb-2 flex gap-[1px] overflow-x-auto overflow-y-hidden rounded-t bg-stone-300 p-0", "dark:bg-stone-800 dark:text-stone-200", e.className),
                    children: e.children
                }),
                v = e => {
                    let {
                        snippets: t = []
                    } = e, [n, a] = (0, i.useState)(0);
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(p, {
                            children: t.map((e, i) => (0, s.jsxs)(g, {
                                title: e.filename,
                                language: e.language,
                                onClick: () => a(i),
                                className: (0, r.cn)({
                                    "cursor-pointer": t.length > 1,
                                    "relative w-full max-w-none": 1 === t.length,
                                    [(0, r.cn)("!bg-[#f5f2f0]", "dark:!bg-[#2d2d2d]")]: i === n
                                }),
                                children: [e.filename || 1 === t.length ? e.filename : (0, s.jsx)("span", {
                                    className: "text-stone-500 dark:text-stone-400",
                                    children: "Untitled"
                                }), 1 === t.length && (0, s.jsx)("div", {
                                    className: "absolute right-0 top-0 z-10 p-1",
                                    children: (0, s.jsx)(d, {
                                        code: e.code
                                    })
                                })]
                            }, i))
                        }), t.map((e, i) => e.code && (0, s.jsx)(h, { ...e,
                            codeClassName: "rounded-none rounded-b",
                            className: (0, r.cn)({
                                hidden: i !== n
                            }),
                            allowCopy: t.length > 1
                        }, i))]
                    })
                }
        },
        1272: function(e, t, n) {
            "use strict";
            var s = n(26705),
                i = n(12381),
                a = n(1326),
                r = n(20955),
                o = n(93448),
                l = n(17397);
            t.default = () => {
                let [e, t] = (0, r.useState)(!1), n = async () => {
                    if (!e) {
                        l.o.track("contact_click", {
                            contact_type: "email"
                        });
                        try {
                            await navigator.clipboard.writeText("tristan.chin@chintristan.io"), t(!0)
                        } catch (e) {
                            window.open("mailto:tristan.chin@chintristan.io")
                        }
                    }
                };
                return (0, r.useEffect)(() => {
                    if (!e) return;
                    let n = setTimeout(() => {
                        t(!1)
                    }, 2e3);
                    return () => clearTimeout(n)
                }, [e]), (0, s.jsxs)(i.z, {
                    onClick: n,
                    children: [(0, s.jsx)(a.cHm, {
                        className: "mr-2"
                    }), (0, s.jsxs)("div", {
                        className: "relative",
                        children: [(0, s.jsx)("span", {
                            className: (0, o.cn)("transition-opacity", {
                                "opacity-0": e
                            }),
                            children: "tristan.chin@chintristan.io"
                        }), (0, s.jsx)("span", {
                            className: (0, o.cn)("absolute left-0 top-0 w-full text-center opacity-0 transition-opacity", {
                                "opacity-100": e
                            }),
                            children: "Copied!"
                        })]
                    })]
                })
            }
        },
        38964: function(e, t, n) {
            "use strict";
            var s = n(26705),
                i = n(17397),
                a = n(12381),
                r = n(27648);
            t.default = e => {
                let {
                    name: t,
                    url: n,
                    children: o,
                    type: l
                } = e;
                return (0, s.jsx)(a.z, {
                    asChild: !0,
                    size: "icon",
                    variant: "outline",
                    className: "rounded-full",
                    children: (0, s.jsx)(r.default, {
                        href: n,
                        target: "_blank",
                        title: t,
                        onClick: () => {
                            i.o.track("contact_click", {
                                contact_type: l
                            })
                        },
                        children: o
                    })
                })
            }
        },
        54896: function(e, t, n) {
            "use strict";
            n.r(t);
            var s = n(26705),
                i = n(59646);
            t.default = e => (0, s.jsx)(i.JO, { ...e
            })
        },
        45939: function(e, t, n) {
            "use strict";
            var s = n(26705),
                i = n(20653),
                a = n(25922),
                r = n(12381),
                o = n(93448),
                l = n(20955);
            t.default = e => {
                let {
                    variant: t = "ghost"
                } = e, {
                    setTheme: n,
                    resolvedTheme: c
                } = (0, a.F)(), [u, d] = (0, l.useState)(!1), h = "absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all", f = "opacity-0 rotate-0", g = "opacity-100 rotate-[360deg]";
                return ((0, l.useEffect)(() => {
                    d(void 0 !== c)
                }, [c]), u) ? (0, s.jsxs)(r.z, {
                    variant: t,
                    size: "icon",
                    onClick: () => {
                        n("light" === c ? "dark" : "light")
                    },
                    className: "relative rounded-full",
                    children: [(0, s.jsx)(i.NWY, {
                        className: (0, o.cn)(h, {
                            [g]: "light" === c,
                            [f]: "light" !== c
                        })
                    }), (0, s.jsx)(i.kLh, {
                        className: (0, o.cn)(h, {
                            [g]: "dark" === c,
                            [f]: "dark" !== c
                        })
                    }), (0, s.jsx)("span", {
                        className: "sr-only",
                        children: "Toggle theme"
                    })]
                }) : null
            }
        },
        12381: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return c
                }
            });
            var s = n(26705),
                i = n(20955),
                a = n(37053),
                r = n(77712),
                o = n(93448);
            let l = (0, r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-9 px-4 py-2",
                            sm: "h-8 rounded-md px-3 text-xs",
                            lg: "h-10 rounded-md px-8",
                            icon: "h-9 w-9"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                c = i.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: i,
                        size: r,
                        asChild: c = !1,
                        ...u
                    } = e, d = c ? a.g7 : "button";
                    return (0, s.jsx)(d, {
                        className: (0, o.cn)(l({
                            variant: i,
                            size: r,
                            className: n
                        })),
                        ref: t,
                        ...u
                    })
                });
            c.displayName = "Button"
        },
        74291: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dialog: function() {
                    return l
                },
                DialogContent: function() {
                    return h
                },
                DialogTrigger: function() {
                    return c
                }
            });
            var s = n(26705),
                i = n(20955),
                a = n(35954),
                r = n(20653),
                o = n(93448);
            let l = a.fC,
                c = a.xz,
                u = a.h_;
            a.x8;
            let d = i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...i
                } = e;
                return (0, s.jsx)(a.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", n),
                    ...i
                })
            });
            d.displayName = a.aV.displayName;
            let h = i.forwardRef((e, t) => {
                let {
                    className: n,
                    children: i,
                    withCloseButton: l = !0,
                    ...c
                } = e;
                return (0, s.jsxs)(u, {
                    children: [(0, s.jsx)(d, {}), (0, s.jsxs)(a.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", n),
                        ...c,
                        children: [i, l && (0, s.jsxs)(a.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                            children: [(0, s.jsx)(r.Pxu, {
                                className: "h-4 w-4"
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            h.displayName = a.VY.displayName, i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...i
                } = e;
                return (0, s.jsx)(a.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", n),
                    ...i
                })
            }).displayName = a.Dx.displayName, i.forwardRef((e, t) => {
                let {
                    className: n,
                    ...i
                } = e;
                return (0, s.jsx)(a.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", n),
                    ...i
                })
            }).displayName = a.dk.displayName
        },
        31593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Separator: function() {
                    return o
                }
            });
            var s = n(26705),
                i = n(20955),
                a = n(55156),
                r = n(93448);
            let o = i.forwardRef((e, t) => {
                let {
                    className: n,
                    orientation: i = "horizontal",
                    decorative: o = !0,
                    ...l
                } = e;
                return (0, s.jsx)(a.f, {
                    ref: t,
                    decorative: o,
                    orientation: i,
                    className: (0, r.cn)("shrink-0 bg-border", "horizontal" === i ? "h-[1px] w-full" : "h-full w-[1px]", n),
                    ...l
                })
            });
            o.displayName = a.f.displayName
        },
        68841: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return r
                }
            });
            var s = n(5264),
                i = n(31229),
                a = n(25566);
            let r = (0, s.D)({
                client: {
                    NEXT_PUBLIC_SANITY_DATASET: i.z.string().min(1),
                    NEXT_PUBLIC_SANITY_PROJECT_ID: i.z.string().min(1),
                    NEXT_PUBLIC_SANITY_API_VERSION: i.z.string().optional().default("2024-03-24"),
                    NEXT_PUBLIC_SANITY_FORCE_USE_CDN: i.z.union([i.z.literal("true"), i.z.literal("false")]).optional().transform(e => {
                        if (e) return "true" === e
                    }),
                    NEXT_PUBLIC_VERCEL_ENV: i.z.union([i.z.literal("development"), i.z.literal("preview"), i.z.literal("production")]),
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: i.z.string().optional(),
                    NEXT_PUBLIC_VERCEL_URL: i.z.string().optional(),
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: i.z.string().optional(),
                    NEXT_PUBLIC_POSTHOG_KEY: i.z.string().min(1)
                },
                runtimeEnv: {
                    NEXT_PUBLIC_SANITY_DATASET: "production",
                    NEXT_PUBLIC_SANITY_PROJECT_ID: "elahh3kf",
                    NEXT_PUBLIC_SANITY_API_VERSION: a.env.NEXT_PUBLIC_SANITY_API_VERSION,
                    NEXT_PUBLIC_SANITY_FORCE_USE_CDN: a.env.NEXT_PUBLIC_SANITY_USE_CDN,
                    NEXT_PUBLIC_VERCEL_ENV: "production",
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: "main",
                    NEXT_PUBLIC_VERCEL_URL: "chintristan-6h3h2x9cr-chintristan.vercel.app",
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: "a126c6493f29c1ad6650392d88cc1c7d09298a0a",
                    NEXT_PUBLIC_POSTHOG_KEY: "phc_L9N6ZCR0GxaGCMIM8u8Cu9BIujpyu2rQzhCAIdFUQad"
                }
            })
        },
        26048: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var s = n(20955),
                i = n(25158);
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "text",
                    [t, a] = (0, s.useState)((0, i.MP)(e) ? e : "text");
                return (0, s.useEffect)(() => {
                    if ("text" === e || (0, i.MP)(e)) {
                        e !== t && a(e);
                        return
                    }(async () => {
                        try {
                            let t = null;
                            switch (e) {
                                case "tsx":
                                    let {
                                        default: s
                                    } = await n.e(17).then(n.bind(n, 90017));
                                    t = s;
                                    break;
                                case "typescript":
                                    let {
                                        default: r
                                    } = await n.e(3061).then(n.bind(n, 3061));
                                    t = r;
                                    break;
                                case "sh":
                                    let {
                                        default: o
                                    } = await n.e(3949).then(n.bind(n, 23949));
                                    t = o;
                                    break;
                                case "json":
                                    let {
                                        default: l
                                    } = await n.e(4539).then(n.bind(n, 64539));
                                    t = l
                            }
                            t ? ((0, i.HT)(t), a(e)) : console.error("[CodeSnippet] Language not supported:", e)
                        } catch (t) {
                            console.error("[CodeSnippet] Failed to load language:", e), console.error(t)
                        }
                    })()
                }, [t, e]), t
            }
        },
        69508: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var s = n(20955);
            let i = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    [i, a] = (0, s.useState)(null);
                return (0, s.useEffect)(() => {
                    let s = document.querySelector(e);
                    if (!s) {
                        a(null);
                        return
                    }
                    let i = () => {
                        let {
                            height: e,
                            y: i
                        } = s.getBoundingClientRect();
                        a(i + (n ? e + t : e * t) < 0)
                    };
                    return window.addEventListener("scroll", i), i(), () => window.removeEventListener("scroll", i)
                }, [e, t, n]), i
            }
        },
        93448: function(e, t, n) {
            "use strict";
            n.d(t, {
                cn: function() {
                    return a
                }
            });
            var s = n(61994),
                i = n(53335);
            let a = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, i.m6)((0, s.W)(t))
            }
        },
        55754: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var s = n(11140),
                i = n(32909);
            let a = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "text",
                    t = s.vX6;
                switch (e) {
                    case "tsx":
                        t = i.QHr;
                        break;
                    case "typescript":
                        t = i.WZi;
                        break;
                    case "sh":
                        t = s.Rhg;
                        break;
                    case "json":
                        t = s.rb6
                }
                return t
            }
        },
        58841: function() {}
    }
]);