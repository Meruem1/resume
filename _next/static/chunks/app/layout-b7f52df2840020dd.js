(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        40576: function(e, t, s) {
            Promise.resolve().then(s.t.bind(s, 32163, 23)), Promise.resolve().then(s.bind(s, 48467)), Promise.resolve().then(s.bind(s, 14095)), Promise.resolve().then(s.bind(s, 21289)), Promise.resolve().then(s.bind(s, 70393)), Promise.resolve().then(s.bind(s, 60951)), Promise.resolve().then(s.bind(s, 6990)), Promise.resolve().then(s.bind(s, 78076)), Promise.resolve().then(s.t.bind(s, 79001, 23)), Promise.resolve().then(s.bind(s, 52513))
        },
        17397: function(e, t, s) {
            "use strict";
            s.d(t, {
                o: function() {
                    return i
                }
            });
            var n = s(81319);
            class i {
                static track() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.providers.forEach(e => {
                        e.track(...t)
                    })
                }
                static identify() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.providers.forEach(e => {
                        e.identify(...t)
                    })
                }
                static set() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.providers.forEach(e => {
                        e.set(...t)
                    })
                }
                static setOnce() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.providers.forEach(e => {
                        e.setOnce(...t)
                    })
                }
                static unset() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.providers.forEach(e => {
                        e.unset(...t)
                    })
                }
                static getProvider(e) {
                    var t;
                    return null !== (t = this.providers.find(t => t instanceof e)) && void 0 !== t ? t : null
                }
            }
            i.providers = [new n.t], window.AnalyticsManager = i, window.PostHogAnalytics = i.getProvider(n.t)
        },
        86883: function(e, t, s) {
            "use strict";
            s.d(t, {
                n: function() {
                    return i
                }
            });
            var n = s(33698);
            class i {
                get hasConsent() {
                    return this.cookieTypes.every(e => n.LO.getConsent(e))
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
                    for (var e, t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                    this.queuedUnset = [...null !== (e = this.queuedUnset) && void 0 !== e ? e : [], ...s], this.log("Queued unset", s)
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
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    i.enableLogging && ("trace" === i.enableLogging ? console.trace("[Analytics][".concat(this.name, "]"), ...t) : console.info("[Analytics][".concat(this.name, "]"), ...t))
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    i.enableLogging && console.warn("[Analytics][".concat(this.name, "]"), ...t)
                }
                error() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
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
        33698: function(e, t, s) {
            "use strict";
            s.d(t, {
                LO: function() {
                    return o
                },
                Zw: function() {
                    return i
                }
            });
            var n = s(31229);
            let i = "consent",
                r = n.z.object({
                    version: n.z.literal(1),
                    purposes: n.z.object({
                        cookieless: n.z.boolean()
                    })
                });
            class o {
                static init() {
                    if (!this.isReady) {
                        this.isReady = !0;
                        try {
                            let e = localStorage.getItem(i);
                            if (e) try {
                                let t = r.parse(JSON.parse(e));
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
                    let s = { ...this.consent
                    };
                    this.refreshStoredConsent(), this.fireConsentChange(s, t)
                }
                static setPurposeConsent(e, t) {
                    let s = { ...this.consent
                    };
                    this.consent[e] = t;
                    let n = { ...this.consent
                    };
                    this.refreshStoredConsent(), this.fireConsentChange(n, s)
                }
                static onConsentChange(e) {
                    this.changeListeners.push(e)
                }
                static offConsentChange(e) {
                    let t = this.changeListeners.indexOf(e); - 1 !== t && this.changeListeners.splice(t, 1)
                }
                static fireConsentChange() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
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
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.readyListeners.forEach(e => {
                        e(...t)
                    })
                }
                static refreshStoredConsent() {
                    try {
                        let e = r.parse({
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
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.enableLogging && console.info("[Analytics][ConsentAPI]", ...t)
                }
                static warn() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.enableLogging && console.warn("[Analytics][ConsentAPI]", ...t)
                }
                static error() {
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    this.enableLogging && console.error("[Analytics][ConsentAPI]", ...t)
                }
            }
            o.enableLogging = new URLSearchParams(window.location.search).has("debug-analytics"), o.isReady = !1, o.consent = {
                cookieless: "1" !== navigator.doNotTrack
            }, o.changeListeners = [], o.readyListeners = [], window.ConsentApi = o, o.init()
        },
        81319: function(e, t, s) {
            "use strict";
            s.d(t, {
                t: function() {
                    return a
                }
            });
            var n = s(68841),
                i = s(46214),
                r = s(86883),
                o = s(33698);
            class a extends r.n {
                get isEnabled() {
                    return !!i.ZP && this.hasInit && this.isOptedIn && this.hasConsent
                }
                init() {
                    o.LO.onConsentChange((e, t) => {
                        this.onConsentApiEvent(e, t)
                    }), o.LO.onReady(e => this.onConsentApiEvent(e, e))
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
                    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
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
                    !this.hasInit && this.hasConsent && (this.log("Initializing"), i.ZP.init(n.x.NEXT_PUBLIC_POSTHOG_KEY, {
                        api_host: "/ingest",
                        ui_host: "https://eu.posthog.com",
                        capture_pageview: !1,
                        capture_pageleave: !1,
                        _onCapture: (e, t) => {
                            this.log("Tracked event", e, t.properties)
                        },
                        debug: !!r.n.enableLogging,
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
                    })), this.hasInit && (this.hasConsent && (!this.isOptedIn || this.cookieTypes.some(s => e[s] !== t[s])) ? i.ZP.opt_in_capturing() : !this.hasConsent && this.isOptedIn && i.ZP.opt_out_capturing())
                }
                constructor(...e) {
                    super(...e), this.cookieTypes = ["cookieless"], this.name = "PostHog"
                }
            }
        },
        14095: function(e, t, s) {
            "use strict";
            var n = s(17397),
                i = s(81319),
                r = s(20955);
            t.default = e => {
                let {
                    children: t
                } = e, [s, o] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    var e;
                    s || (o(!0), null === (e = n.o.getProvider(i.t)) || void 0 === e || e.init())
                }, [s]), t
            }
        },
        21289: function(e, t, s) {
            "use strict";
            var n = s(26705),
                i = s(68841),
                r = s(89914),
                o = s(20955);
            t.default = () => ((0, o.useEffect)(() => {
                "preview" !== i.x.NEXT_PUBLIC_VERCEL_ENV && window === parent && (location.href = "/api/sanity/disable-draft")
            }, []), (0, n.jsx)(r.QB, {}))
        },
        70393: function(e, t, s) {
            "use strict";
            var n = s(26705),
                i = s(33698),
                r = s(12381),
                o = s(93448),
                a = s(27648),
                c = s(20955);
            t.default = e => {
                let {} = e, [t, s] = (0, c.useState)(!1);
                return ((0, c.useEffect)(() => {
                    s(!localStorage.getItem(i.Zw))
                }, []), t) ? (0, n.jsx)("div", {
                    className: "fixed bottom-0 z-[9999] flex w-full justify-center p-4",
                    children: (0, n.jsxs)("div", {
                        className: (0, o.cn)("flex w-full max-w-screen-lg flex-col items-center gap-4 rounded-md border-[1px] border-stone-400 bg-white p-4 text-center text-xs transition-[background-color,border-color,max-width,opacity] ease-in-out", "md:flex-row md:text-left", "supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:backdrop-blur", "dark:border-stone-800 dark:bg-stone-950", "dark:supports-[backdrop-filter]:bg-stone-950/70"),
                        children: [(0, n.jsx)("p", {
                            className: "grow",
                            children: "This website collects anonymous analytics data to improve the user experience. You can learn more about this in the privacy policy."
                        }), (0, n.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, n.jsx)(a.default, {
                                href: "/privacy-policy",
                                children: (0, n.jsx)(r.z, {
                                    variant: "link",
                                    size: "sm",
                                    children: "Privacy Policy"
                                })
                            }), (0, n.jsx)(r.z, {
                                onClick: () => {
                                    i.LO.setPurposeConsent("cookieless", i.LO.getConsent("cookieless")), s(!1)
                                },
                                size: "sm",
                                children: "Understood"
                            })]
                        })]
                    })
                }) : null
            }
        },
        60951: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return g
                }
            });
            var n = s(26705),
                i = s(20955),
                r = () => (0, n.jsxs)("div", {
                    className: "bg-black p-2",
                    children: [(0, n.jsx)("span", {
                        className: "block sm:hidden",
                        children: "xs"
                    }), (0, n.jsx)("span", {
                        className: "hidden sm:block md:hidden",
                        children: "sm"
                    }), (0, n.jsx)("span", {
                        className: "hidden md:block lg:hidden",
                        children: "md"
                    }), (0, n.jsx)("span", {
                        className: "hidden lg:block xl:hidden",
                        children: "lg"
                    }), (0, n.jsx)("span", {
                        className: "hidden xl:block",
                        children: "xl"
                    })]
                }),
                o = s(25922),
                a = () => {
                    let {
                        setTheme: e,
                        theme: t
                    } = (0, o.F)();
                    return (0, i.useEffect)(() => {
                        window.toggleTheme = () => {
                            t && e("light" === t ? "dark" : "light")
                        }
                    }, [e, t]), null
                },
                c = s(99376),
                d = s(68841),
                u = s(50279),
                l = () => (0, n.jsx)("div", {
                    className: "bg-black p-2",
                    children: (0, u.B)().href
                });
            let h = () => {
                let e = (0, c.useSearchParams)();
                return "production" !== d.x.NEXT_PUBLIC_VERCEL_ENV || e.has("dev-utils") ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a, {}), (0, n.jsx)("div", {
                        className: "fixed bottom-0 left-0 z-[10000000] text-xs text-white opacity-20 hover:opacity-100",
                        children: (0, n.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, n.jsx)(r, {}), (0, n.jsx)(l, {})]
                        })
                    })]
                }) : null
            };
            var g = () => (0, n.jsx)(i.Suspense, {
                fallback: null,
                children: (0, n.jsx)(h, {})
            })
        },
        6990: function(e, t, s) {
            "use strict";
            var n = s(26705),
                i = s(86883),
                r = s(1952);
            t.default = () => (0, n.jsx)(r.c, {
                debug: !!i.n.enableLogging,
                beforeSend: e => new URL(e.url).pathname.startsWith("/studio") ? null : e
            })
        },
        78076: function(e, t, s) {
            "use strict";
            var n = s(26705),
                i = s(86883),
                r = s(49197);
            t.default = () => (0, n.jsx)(r.c, {
                debug: !!i.n.enableLogging,
                beforeSend: e => new URL(e.url).pathname.startsWith("/studio") ? null : e
            })
        },
        52513: function(e, t, s) {
            "use strict";
            var n = s(26705);
            s(20955);
            var i = s(25922);
            t.default = e => {
                let {
                    children: t,
                    ...s
                } = e;
                return (0, n.jsx)(i.f, { ...s,
                    children: t
                })
            }
        },
        12381: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return d
                }
            });
            var n = s(26705),
                i = s(20955),
                r = s(37053),
                o = s(77712),
                a = s(93448);
            let c = (0, o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
                d = i.forwardRef((e, t) => {
                    let {
                        className: s,
                        variant: i,
                        size: o,
                        asChild: d = !1,
                        ...u
                    } = e, l = d ? r.g7 : "button";
                    return (0, n.jsx)(l, {
                        className: (0, a.cn)(c({
                            variant: i,
                            size: o,
                            className: s
                        })),
                        ref: t,
                        ...u
                    })
                });
            d.displayName = "Button"
        },
        68841: function(e, t, s) {
            "use strict";
            s.d(t, {
                x: function() {
                    return o
                }
            });
            var n = s(5264),
                i = s(31229),
                r = s(25566);
            let o = (0, n.D)({
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
                    NEXT_PUBLIC_SANITY_API_VERSION: r.env.NEXT_PUBLIC_SANITY_API_VERSION,
                    NEXT_PUBLIC_SANITY_FORCE_USE_CDN: r.env.NEXT_PUBLIC_SANITY_USE_CDN,
                    NEXT_PUBLIC_VERCEL_ENV: "production",
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: "main",
                    NEXT_PUBLIC_VERCEL_URL: "chintristan-6h3h2x9cr-chintristan.vercel.app",
                    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: "a126c6493f29c1ad6650392d88cc1c7d09298a0a",
                    NEXT_PUBLIC_POSTHOG_KEY: "phc_L9N6ZCR0GxaGCMIM8u8Cu9BIujpyu2rQzhCAIdFUQad"
                }
            })
        },
        93448: function(e, t, s) {
            "use strict";
            s.d(t, {
                cn: function() {
                    return r
                }
            });
            var n = s(61994),
                i = s(53335);
            let r = function() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, i.m6)((0, n.W)(t))
            }
        },
        50279: function(e, t, s) {
            "use strict";
            s.d(t, {
                B: function() {
                    return n
                }
            }), s(68841);
            let n = () => new URL("/", window.location.origin)
        },
        79001: function() {},
        48467: function(e, t, s) {
            "use strict";
            s.r(t), t.default = {
                src: "/_next/static/media/og.98d36987.png",
                height: 1080,
                width: 1920,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEUMCggfHh8NEBZCQ1ArKCXrEyqCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgQAAmZiYIg5GZEcpggTIgAAAB1AATtJv2GAAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            }
        }
    },
    function(e) {
        e.O(0, [3608, 7483, 3794, 4121, 831, 1744], function() {
            return e(e.s = 40576)
        }), _N_E = e.O()
    }
]);