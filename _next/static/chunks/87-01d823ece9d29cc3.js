"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87, 2105], {
        12119: function(e, n, t) {
            Object.defineProperty(n, "$", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = t(83079);

            function o(e) {
                let {
                    createServerReference: n
                } = t(12139);
                return n(e, r.callServer)
            }
        },
        65878: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = t(47043),
                o = t(53099),
                l = t(26705),
                i = o._(t(20955)),
                a = r._(t(3190)),
                u = r._(t(38293)),
                c = t(55346),
                s = t(90128),
                f = t(62589);
            t(31765);
            let d = t(25523),
                p = r._(t(5084)),
                h = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function g(e, n, t, r, o, l, i) {
                let a = null == e ? void 0 : e.src;
                e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== n && o(!0), null == t ? void 0 : t.current) {
                            let n = new Event("load");
                            Object.defineProperty(n, "target", {
                                writable: !1,
                                value: e
                            });
                            let r = !1,
                                o = !1;
                            t.current({ ...n,
                                nativeEvent: n,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => r,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    r = !0, n.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, n.stopPropagation()
                                }
                            })
                        }(null == r ? void 0 : r.current) && r.current(e)
                    }
                }))
            }

            function m(e) {
                return i.use ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
            let v = (0, i.forwardRef)((e, n) => {
                let {
                    src: t,
                    srcSet: r,
                    sizes: o,
                    height: a,
                    width: u,
                    decoding: c,
                    className: s,
                    style: f,
                    fetchPriority: d,
                    placeholder: p,
                    loading: h,
                    unoptimized: v,
                    fill: y,
                    onLoadRef: b,
                    onLoadingCompleteRef: w,
                    setBlurComplete: x,
                    setShowAltText: E,
                    sizesInput: S,
                    onLoad: O,
                    onError: k,
                    ...C
                } = e;
                return (0, l.jsx)("img", { ...C,
                    ...m(d),
                    loading: h,
                    width: u,
                    height: a,
                    decoding: c,
                    "data-nimg": y ? "fill" : "1",
                    className: s,
                    style: f,
                    sizes: o,
                    srcSet: r,
                    src: t,
                    ref: (0, i.useCallback)(e => {
                        n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e)), e && (k && (e.src = e.src), e.complete && g(e, p, b, w, x, v, S))
                    }, [t, p, b, w, x, k, v, S, n]),
                    onLoad: e => {
                        g(e.currentTarget, p, b, w, x, v, S)
                    },
                    onError: e => {
                        E(!0), "empty" !== p && x(!0), k && k(e)
                    }
                })
            });

            function y(e) {
                let {
                    isAppRouter: n,
                    imgAttributes: t
                } = e, r = {
                    as: "image",
                    imageSrcSet: t.srcSet,
                    imageSizes: t.sizes,
                    crossOrigin: t.crossOrigin,
                    referrerPolicy: t.referrerPolicy,
                    ...m(t.fetchPriority)
                };
                return n && a.default.preload ? (a.default.preload(t.src, r), null) : (0, l.jsx)(u.default, {
                    children: (0, l.jsx)("link", {
                        rel: "preload",
                        href: t.srcSet ? void 0 : t.src,
                        ...r
                    }, "__nimg-" + t.src + t.srcSet + t.sizes)
                })
            }
            let b = (0, i.forwardRef)((e, n) => {
                let t = (0, i.useContext)(d.RouterContext),
                    r = (0, i.useContext)(f.ImageConfigContext),
                    o = (0, i.useMemo)(() => {
                        let e = h || r || s.imageConfigDefault,
                            n = [...e.deviceSizes, ...e.imageSizes].sort((e, n) => e - n),
                            t = e.deviceSizes.sort((e, n) => e - n);
                        return { ...e,
                            allSizes: n,
                            deviceSizes: t
                        }
                    }, [r]),
                    {
                        onLoad: a,
                        onLoadingComplete: u
                    } = e,
                    g = (0, i.useRef)(a);
                (0, i.useEffect)(() => {
                    g.current = a
                }, [a]);
                let m = (0, i.useRef)(u);
                (0, i.useEffect)(() => {
                    m.current = u
                }, [u]);
                let [b, w] = (0, i.useState)(!1), [x, E] = (0, i.useState)(!1), {
                    props: S,
                    meta: O
                } = (0, c.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: b,
                    showAltText: x
                });
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(v, { ...S,
                        unoptimized: O.unoptimized,
                        placeholder: O.placeholder,
                        fill: O.fill,
                        onLoadRef: g,
                        onLoadingCompleteRef: m,
                        setBlurComplete: w,
                        setShowAltText: E,
                        sizesInput: e.sizes,
                        ref: n
                    }), O.priority ? (0, l.jsx)(y, {
                        isAppRouter: !t,
                        imgAttributes: S
                    }) : null]
                })
            });
            ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
                value: !0
            }), Object.assign(n.default, n), e.exports = n.default)
        },
        91436: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = t(47043)._(t(20955)).default.createContext({})
        },
        23964: function(e, n) {
            function t(e) {
                let {
                    ampFirst: n = !1,
                    hybrid: t = !1,
                    hasQuery: r = !1
                } = void 0 === e ? {} : e;
                return n || t && r
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return t
                }
            })
        },
        55346: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), t(31765);
            let r = t(96496),
                o = t(90128);

            function l(e) {
                return void 0 !== e.default
            }

            function i(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function a(e, n) {
                var t;
                let a, u, c, {
                        src: s,
                        sizes: f,
                        unoptimized: d = !1,
                        priority: p = !1,
                        loading: h,
                        className: g,
                        quality: m,
                        width: v,
                        height: y,
                        fill: b = !1,
                        style: w,
                        overrideSrc: x,
                        onLoad: E,
                        onLoadingComplete: S,
                        placeholder: O = "empty",
                        blurDataURL: k,
                        fetchPriority: C,
                        layout: P,
                        objectFit: j,
                        objectPosition: N,
                        lazyBoundary: M,
                        lazyRoot: A,
                        ...R
                    } = e,
                    {
                        imgConf: T,
                        showAltText: L,
                        blurComplete: D,
                        defaultLoader: I
                    } = n,
                    _ = T || o.imageConfigDefault;
                if ("allSizes" in _) a = _;
                else {
                    let e = [..._.deviceSizes, ..._.imageSizes].sort((e, n) => e - n),
                        n = _.deviceSizes.sort((e, n) => e - n);
                    a = { ..._,
                        allSizes: e,
                        deviceSizes: n
                    }
                }
                if (void 0 === I) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let z = R.loader || I;
                delete R.loader, delete R.srcSet;
                let F = "__next_img_default" in z;
                if (F) {
                    if ("custom" === a.loader) throw Error('Image with src "' + s + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = z;
                    z = n => {
                        let {
                            config: t,
                            ...r
                        } = n;
                        return e(r)
                    }
                }
                if (P) {
                    "fill" === P && (b = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[P];
                    e && (w = { ...w,
                        ...e
                    });
                    let n = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[P];
                    n && !f && (f = n)
                }
                let U = "",
                    W = i(v),
                    B = i(y);
                if ("object" == typeof(t = s) && (l(t) || void 0 !== t.src)) {
                    let e = l(s) ? s.default : s;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (u = e.blurWidth, c = e.blurHeight, k = k || e.blurDataURL, U = e.src, !b) {
                        if (W || B) {
                            if (W && !B) {
                                let n = W / e.width;
                                B = Math.round(e.height * n)
                            } else if (!W && B) {
                                let n = B / e.height;
                                W = Math.round(e.width * n)
                            }
                        } else W = e.width, B = e.height
                    }
                }
                let H = !p && ("lazy" === h || void 0 === h);
                (!(s = "string" == typeof s ? s : U) || s.startsWith("data:") || s.startsWith("blob:")) && (d = !0, H = !1), a.unoptimized && (d = !0), F && s.endsWith(".svg") && !a.dangerouslyAllowSVG && (d = !0), p && (C = "high");
                let $ = i(m),
                    V = Object.assign(b ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: j,
                        objectPosition: N
                    } : {}, L ? {} : {
                        color: "transparent"
                    }, w),
                    q = D || "empty" === O ? null : "blur" === O ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({
                        widthInt: W,
                        heightInt: B,
                        blurWidth: u,
                        blurHeight: c,
                        blurDataURL: k || "",
                        objectFit: V.objectFit
                    }) + '")' : 'url("' + O + '")',
                    K = q ? {
                        backgroundSize: V.objectFit || "cover",
                        backgroundPosition: V.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: q
                    } : {},
                    Y = function(e) {
                        let {
                            config: n,
                            src: t,
                            unoptimized: r,
                            width: o,
                            quality: l,
                            sizes: i,
                            loader: a
                        } = e;
                        if (r) return {
                            src: t,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: c
                        } = function(e, n, t) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (t) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    n = [];
                                for (let r; r = e.exec(t); r) n.push(parseInt(r[2]));
                                if (n.length) {
                                    let e = .01 * Math.min(...n);
                                    return {
                                        widths: o.filter(n => n >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            return "number" != typeof n ? {
                                widths: r,
                                kind: "w"
                            } : {
                                widths: [...new Set([n, 2 * n].map(e => o.find(n => n >= e) || o[o.length - 1]))],
                                kind: "x"
                            }
                        }(n, o, i), s = u.length - 1;
                        return {
                            sizes: i || "w" !== c ? i : "100vw",
                            srcSet: u.map((e, r) => a({
                                config: n,
                                src: t,
                                quality: l,
                                width: e
                            }) + " " + ("w" === c ? e : r + 1) + c).join(", "),
                            src: a({
                                config: n,
                                src: t,
                                quality: l,
                                width: u[s]
                            })
                        }
                    }({
                        config: a,
                        src: s,
                        unoptimized: d,
                        width: W,
                        quality: $,
                        sizes: f,
                        loader: z
                    });
                return {
                    props: { ...R,
                        loading: H ? "lazy" : h,
                        fetchPriority: C,
                        width: W,
                        height: B,
                        decoding: "async",
                        className: g,
                        style: { ...V,
                            ...K
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: x || Y.src
                    },
                    meta: {
                        unoptimized: d,
                        priority: p,
                        placeholder: O,
                        fill: b
                    }
                }
            }
        },
        38293: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                    value: !0
                }),
                function(e, n) {
                    for (var t in n) Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n[t]
                    })
                }(n, {
                    default: function() {
                        return g
                    },
                    defaultHead: function() {
                        return f
                    }
                });
            let r = t(47043),
                o = t(53099),
                l = t(26705),
                i = o._(t(20955)),
                a = r._(t(17421)),
                u = t(91436),
                c = t(48701),
                s = t(23964);

            function f(e) {
                void 0 === e && (e = !1);
                let n = [(0, l.jsx)("meta", {
                    charSet: "utf-8"
                })];
                return e || n.push((0, l.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), n
            }

            function d(e, n) {
                return "string" == typeof n || "number" == typeof n ? e : n.type === i.default.Fragment ? e.concat(i.default.Children.toArray(n.props.children).reduce((e, n) => "string" == typeof n || "number" == typeof n ? e : e.concat(n), [])) : e.concat(n)
            }
            t(31765);
            let p = ["name", "httpEquiv", "charSet", "itemProp"];

            function h(e, n) {
                let {
                    inAmpMode: t
                } = n;
                return e.reduce(d, []).reverse().concat(f(t).reverse()).filter(function() {
                    let e = new Set,
                        n = new Set,
                        t = new Set,
                        r = {};
                    return o => {
                        let l = !0,
                            i = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            i = !0;
                            let n = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(n) ? l = !1 : e.add(n)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                n.has(o.type) ? l = !1 : n.add(o.type);
                                break;
                            case "meta":
                                for (let e = 0, n = p.length; e < n; e++) {
                                    let n = p[e];
                                    if (o.props.hasOwnProperty(n)) {
                                        if ("charSet" === n) t.has(n) ? l = !1 : t.add(n);
                                        else {
                                            let e = o.props[n],
                                                t = r[n] || new Set;
                                            ("name" !== n || !i) && t.has(e) ? l = !1 : (t.add(e), r[n] = t)
                                        }
                                    }
                                }
                        }
                        return l
                    }
                }()).reverse().map((e, n) => {
                    let r = e.key || n;
                    if (!t && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(n => e.props.href.startsWith(n))) {
                        let n = { ...e.props || {}
                        };
                        return n["data-href"] = n.href, n.href = void 0, n["data-optimized-fonts"] = !0, i.default.cloneElement(e, n)
                    }
                    return i.default.cloneElement(e, {
                        key: r
                    })
                })
            }
            let g = function(e) {
                let {
                    children: n
                } = e, t = (0, i.useContext)(u.AmpStateContext), r = (0, i.useContext)(c.HeadManagerContext);
                return (0, l.jsx)(a.default, {
                    reduceComponentsToState: h,
                    headManager: r,
                    inAmpMode: (0, s.isInAmpMode)(t),
                    children: n
                })
            };
            ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
                value: !0
            }), Object.assign(n.default, n), e.exports = n.default)
        },
        96496: function(e, n) {
            function t(e) {
                let {
                    widthInt: n,
                    heightInt: t,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: l,
                    objectFit: i
                } = e, a = r ? 40 * r : n, u = o ? 40 * o : t, c = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/TR/SVG' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === i ? "xMidYMid" : "cover" === i ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + l + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return t
                }
            })
        },
        62589: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = t(47043)._(t(20955)),
                o = t(90128),
                l = r.default.createContext(o.imageConfigDefault)
        },
        90128: function(e, n) {
            Object.defineProperty(n, "__esModule", {
                    value: !0
                }),
                function(e, n) {
                    for (var t in n) Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n[t]
                    })
                }(n, {
                    VALID_LOADERS: function() {
                        return t
                    },
                    imageConfigDefault: function() {
                        return r
                    }
                });
            let t = ["default", "imgix", "cloudinary", "akamai", "custom"],
                r = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        5084: function(e, n) {
            function t(e) {
                let {
                    config: n,
                    src: t,
                    width: r,
                    quality: o
                } = e;
                return n.path + "?url=" + encodeURIComponent(t) + "&w=" + r + "&q=" + (o || 75)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), t.__next_img_default = !0;
            let r = t
        },
        17421: function(e, n, t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = t(20955),
                o = "undefined" == typeof window,
                l = o ? () => {} : r.useLayoutEffect,
                i = o ? () => {} : r.useEffect;

            function a(e) {
                let {
                    headManager: n,
                    reduceComponentsToState: t
                } = e;

                function a() {
                    if (n && n.mountedInstances) {
                        let o = r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));
                        n.updateHead(t(o, e))
                    }
                }
                if (o) {
                    var u;
                    null == n || null == (u = n.mountedInstances) || u.add(e.children), a()
                }
                return l(() => {
                    var t;
                    return null == n || null == (t = n.mountedInstances) || t.add(e.children), () => {
                        var t;
                        null == n || null == (t = n.mountedInstances) || t.delete(e.children)
                    }
                }), l(() => (n && (n._pendingUpdate = a), () => {
                    n && (n._pendingUpdate = a)
                })), i(() => (n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null), () => {
                    n && n._pendingUpdate && (n._pendingUpdate(), n._pendingUpdate = null)
                })), null
            }
        },
        17325: function(e, n, t) {
            t.d(n, {
                q: function() {
                    return a
                }
            });
            var r = t(20955);

            function o(e, n) {
                return "function" == typeof e ? e(n) : e && (e.current = n), e
            }
            var l = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                i = new WeakMap;

            function a(e, n) {
                var t, a, u, c = (t = n || null, a = function(n) {
                    return e.forEach(function(e) {
                        return o(e, n)
                    })
                }, (u = (0, r.useState)(function() {
                    return {
                        value: t,
                        callback: a,
                        facade: {
                            get current() {
                                return u.value
                            },
                            set current(value) {
                                var e = u.value;
                                e !== value && (u.value = value, u.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = a, u.facade);
                return l(function() {
                    var n = i.get(c);
                    if (n) {
                        var t = new Set(n),
                            r = new Set(e),
                            l = c.current;
                        t.forEach(function(e) {
                            r.has(e) || o(e, null)
                        }), r.forEach(function(e) {
                            t.has(e) || o(e, l)
                        })
                    }
                    i.set(c, e)
                }, [e]), c
            }
        },
        31412: function(e, n, t) {
            t.d(n, {
                _: function() {
                    return a
                },
                s: function() {
                    return i
                }
            });
            var r = t(5853);

            function o(e) {
                return e
            }

            function l(e, n) {
                void 0 === n && (n = o);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = n(e, r);
                        return t.push(o),
                            function() {
                                t = t.filter(function(e) {
                                    return e !== o
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; t.length;) {
                            var n = t;
                            t = [], n.forEach(e)
                        }
                        t = {
                            push: function(n) {
                                return e(n)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var n = [];
                        if (t.length) {
                            var o = t;
                            t = [], o.forEach(e), n = t
                        }
                        var l = function() {
                                var t = n;
                                n = [], t.forEach(e)
                            },
                            i = function() {
                                return Promise.resolve().then(l)
                            };
                        i(), t = {
                            push: function(e) {
                                n.push(e), i()
                            },
                            filter: function(e) {
                                return n = n.filter(e), t
                            }
                        }
                    }
                }
            }

            function i(e, n) {
                return void 0 === n && (n = o), l(e, n)
            }

            function a(e) {
                void 0 === e && (e = {});
                var n = l(null);
                return n.options = (0, r.pi)({
                    async: !0,
                    ssr: !1
                }, e), n
            }
        },
        59646: function(e, n, t) {
            let r;
            t.d(n, {
                JO: function() {
                    return ew
                }
            });
            var o, l = t(20955);
            let i = Object.freeze({
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16
                }),
                a = Object.freeze({
                    rotate: 0,
                    vFlip: !1,
                    hFlip: !1
                }),
                u = Object.freeze({ ...i,
                    ...a
                }),
                c = Object.freeze({ ...u,
                    body: "",
                    hidden: !1
                });

            function s(e, n) {
                let t = function(e, n) {
                    let t = {};
                    !e.hFlip != !n.hFlip && (t.hFlip = !0), !e.vFlip != !n.vFlip && (t.vFlip = !0);
                    let r = ((e.rotate || 0) + (n.rotate || 0)) % 4;
                    return r && (t.rotate = r), t
                }(e, n);
                for (let r in c) r in a ? r in e && !(r in t) && (t[r] = a[r]) : r in n ? t[r] = n[r] : r in e && (t[r] = e[r]);
                return t
            }

            function f(e, n) {
                let t = [];
                if ("object" != typeof e || "object" != typeof e.icons) return t;
                e.not_found instanceof Array && e.not_found.forEach(e => {
                    n(e, null), t.push(e)
                });
                let r = function(e, n) {
                    let t = e.icons,
                        r = e.aliases || Object.create(null),
                        o = Object.create(null);
                    return Object.keys(t).concat(Object.keys(r)).forEach(function e(n) {
                        if (t[n]) return o[n] = [];
                        if (!(n in o)) {
                            o[n] = null;
                            let t = r[n] && r[n].parent,
                                l = t && e(t);
                            l && (o[n] = [t].concat(l))
                        }
                        return o[n]
                    }), o
                }(e);
                for (let o in r) {
                    let l = r[o];
                    l && (n(o, function(e, n, t) {
                        let r = e.icons,
                            o = e.aliases || Object.create(null),
                            l = {};

                        function i(e) {
                            l = s(r[e] || o[e], l)
                        }
                        return i(n), t.forEach(i), s(e, l)
                    }(e, o, l)), t.push(o))
                }
                return t
            }
            let d = /^[a-z0-9]+(-[a-z0-9]+)*$/,
                p = function(e, n, t) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        o = e.split(":");
                    if ("@" === e.slice(0, 1)) {
                        if (o.length < 2 || o.length > 3) return null;
                        r = o.shift().slice(1)
                    }
                    if (o.length > 3 || !o.length) return null;
                    if (o.length > 1) {
                        let e = o.pop(),
                            t = o.pop(),
                            l = {
                                provider: o.length > 0 ? o[0] : r,
                                prefix: t,
                                name: e
                            };
                        return n && !h(l) ? null : l
                    }
                    let l = o[0],
                        i = l.split("-");
                    if (i.length > 1) {
                        let e = {
                            provider: r,
                            prefix: i.shift(),
                            name: i.join("-")
                        };
                        return n && !h(e) ? null : e
                    }
                    if (t && "" === r) {
                        let e = {
                            provider: r,
                            prefix: "",
                            name: l
                        };
                        return n && !h(e, t) ? null : e
                    }
                    return null
                },
                h = (e, n) => !!e && !!(("" === e.provider || e.provider.match(d)) && (n && "" === e.prefix || e.prefix.match(d)) && e.name.match(d)),
                g = {
                    provider: "",
                    aliases: {},
                    not_found: {},
                    ...i
                };

            function m(e, n) {
                for (let t in n)
                    if (t in e && typeof e[t] != typeof n[t]) return !1;
                return !0
            }

            function v(e) {
                if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !m(e, g)) return null;
                let n = e.icons;
                for (let e in n) {
                    let t = n[e];
                    if (!e.match(d) || "string" != typeof t.body || !m(t, c)) return null
                }
                let t = e.aliases || Object.create(null);
                for (let e in t) {
                    let r = t[e],
                        o = r.parent;
                    if (!e.match(d) || "string" != typeof o || !n[o] && !t[o] || !m(r, c)) return null
                }
                return e
            }
            let y = Object.create(null);

            function b(e, n) {
                let t = y[e] || (y[e] = Object.create(null));
                return t[n] || (t[n] = {
                    provider: e,
                    prefix: n,
                    icons: Object.create(null),
                    missing: new Set
                })
            }

            function w(e, n) {
                return v(n) ? f(n, (n, t) => {
                    t ? e.icons[n] = t : e.missing.add(n)
                }) : []
            }
            let x = !1;

            function E(e) {
                return "boolean" == typeof e && (x = e), x
            }

            function S(e) {
                let n = "string" == typeof e ? p(e, !0, x) : e;
                if (n) {
                    let e = b(n.provider, n.prefix),
                        t = n.name;
                    return e.icons[t] || (e.missing.has(t) ? null : void 0)
                }
            }
            let O = Object.freeze({
                    width: null,
                    height: null
                }),
                k = Object.freeze({ ...O,
                    ...a
                }),
                C = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                P = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

            function j(e, n, t) {
                if (1 === n) return e;
                if (t = t || 100, "number" == typeof e) return Math.ceil(e * n * t) / t;
                if ("string" != typeof e) return e;
                let r = e.split(C);
                if (null === r || !r.length) return e;
                let o = [],
                    l = r.shift(),
                    i = P.test(l);
                for (;;) {
                    if (i) {
                        let e = parseFloat(l);
                        isNaN(e) ? o.push(l) : o.push(Math.ceil(e * n * t) / t)
                    } else o.push(l);
                    if (void 0 === (l = r.shift())) return o.join("");
                    i = !i
                }
            }
            let N = e => "unset" === e || "undefined" === e || "none" === e,
                M = /\sid="(\S+)"/g,
                A = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16),
                R = 0,
                T = Object.create(null);

            function L(e) {
                return T[e] || T[""]
            }

            function D(e) {
                let n;
                if ("string" == typeof e.resources) n = [e.resources];
                else if (!((n = e.resources) instanceof Array) || !n.length) return null;
                return {
                    resources: n,
                    path: e.path || "/",
                    maxURL: e.maxURL || 500,
                    rotate: e.rotate || 750,
                    timeout: e.timeout || 5e3,
                    random: !0 === e.random,
                    index: e.index || 0,
                    dataAfterTimeout: !1 !== e.dataAfterTimeout
                }
            }
            let I = Object.create(null),
                _ = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                z = [];
            for (; _.length > 0;) 1 === _.length ? z.push(_.shift()) : Math.random() > .5 ? z.push(_.shift()) : z.push(_.pop());
            I[""] = D({
                resources: ["https://api.iconify.design"].concat(z)
            });
            let F = (() => {
                let e;
                try {
                    if (e = fetch, "function" == typeof e) return e
                } catch (e) {}
            })();

            function U(e, n) {
                e.forEach(e => {
                    let t = e.loaderCallbacks;
                    t && (e.loaderCallbacks = t.filter(e => e.id !== n))
                })
            }
            let W = 0;
            var B = {
                resources: [],
                index: 0,
                timeout: 2e3,
                rotate: 750,
                random: !1,
                dataAfterTimeout: !1
            };

            function H(e) {
                let n = { ...B,
                        ...e
                    },
                    t = [];

                function r() {
                    t = t.filter(e => "pending" === e().status)
                }
                return {
                    query: function(e, o, l) {
                        let i = function(e, n, t, r) {
                            let o, l;
                            let i = e.resources.length,
                                a = e.random ? Math.floor(Math.random() * i) : e.index;
                            if (e.random) {
                                let n = e.resources.slice(0);
                                for (o = []; n.length > 1;) {
                                    let e = Math.floor(Math.random() * n.length);
                                    o.push(n[e]), n = n.slice(0, e).concat(n.slice(e + 1))
                                }
                                o = o.concat(n)
                            } else o = e.resources.slice(a).concat(e.resources.slice(0, a));
                            let u = Date.now(),
                                c = "pending",
                                s = 0,
                                f = null,
                                d = [],
                                p = [];

                            function h() {
                                f && (clearTimeout(f), f = null)
                            }

                            function g() {
                                "pending" === c && (c = "aborted"), h(), d.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), d = []
                            }

                            function m(e, n) {
                                n && (p = []), "function" == typeof e && p.push(e)
                            }

                            function v() {
                                c = "failed", p.forEach(e => {
                                    e(void 0, l)
                                })
                            }

                            function y() {
                                d.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), d = []
                            }
                            return "function" == typeof r && p.push(r), setTimeout(function r() {
                                    if ("pending" !== c) return;
                                    h();
                                    let i = o.shift();
                                    if (void 0 === i) {
                                        if (d.length) {
                                            f = setTimeout(() => {
                                                h(), "pending" === c && (y(), v())
                                            }, e.timeout);
                                            return
                                        }
                                        v();
                                        return
                                    }
                                    let a = {
                                        status: "pending",
                                        resource: i,
                                        callback: (n, t) => {
                                            ! function(n, t, i) {
                                                let a = "success" !== t;
                                                switch (d = d.filter(e => e !== n), c) {
                                                    case "pending":
                                                        break;
                                                    case "failed":
                                                        if (a || !e.dataAfterTimeout) return;
                                                        break;
                                                    default:
                                                        return
                                                }
                                                if ("abort" === t) {
                                                    l = i, v();
                                                    return
                                                }
                                                if (a) {
                                                    l = i, d.length || (o.length ? r() : v());
                                                    return
                                                }
                                                if (h(), y(), !e.random) {
                                                    let t = e.resources.indexOf(n.resource); - 1 !== t && t !== e.index && (e.index = t)
                                                }
                                                c = "completed", p.forEach(e => {
                                                    e(i)
                                                })
                                            }(a, n, t)
                                        }
                                    };
                                    d.push(a), s++, f = setTimeout(r, e.rotate), t(i, n, a.callback)
                                }),
                                function() {
                                    return {
                                        startTime: u,
                                        payload: n,
                                        status: c,
                                        queriesSent: s,
                                        queriesPending: d.length,
                                        subscribe: m,
                                        abort: g
                                    }
                                }
                        }(n, e, o, (e, n) => {
                            r(), l && l(e, n)
                        });
                        return t.push(i), i
                    },
                    find: function(e) {
                        return t.find(n => e(n)) || null
                    },
                    setIndex: e => {
                        n.index = e
                    },
                    getIndex: () => n.index,
                    cleanup: r
                }
            }
            let $ = Object.create(null),
                V = "iconify2",
                q = "iconify",
                K = q + "-count",
                Y = q + "-version";

            function X(e, n) {
                try {
                    return e.getItem(n)
                } catch (e) {}
            }

            function G(e, n, t) {
                try {
                    return e.setItem(n, t), !0
                } catch (e) {}
            }

            function J(e, n) {
                try {
                    e.removeItem(n)
                } catch (e) {}
            }

            function Z(e, n) {
                return G(e, K, n.toString())
            }

            function Q(e) {
                return parseInt(X(e, K)) || 0
            }
            let ee = {
                    local: !0,
                    session: !0
                },
                en = {
                    local: new Set,
                    session: new Set
                },
                et = !1,
                er = "undefined" == typeof window ? {} : window;

            function eo(e) {
                let n = e + "Storage";
                try {
                    if (er && er[n] && "number" == typeof er[n].length) return er[n]
                } catch (e) {}
                ee[e] = !1
            }

            function el(e, n) {
                let t = eo(e);
                if (!t) return;
                let r = X(t, Y);
                if (r !== V) {
                    if (r) {
                        let e = Q(t);
                        for (let n = 0; n < e; n++) J(t, q + n.toString())
                    }
                    G(t, Y, V), Z(t, 0);
                    return
                }
                let o = Math.floor(Date.now() / 36e5) - 168,
                    l = e => {
                        let r = q + e.toString(),
                            l = X(t, r);
                        if ("string" == typeof l) {
                            try {
                                let t = JSON.parse(l);
                                if ("object" == typeof t && "number" == typeof t.cached && t.cached > o && "string" == typeof t.provider && "object" == typeof t.data && "string" == typeof t.data.prefix && n(t, e)) return !0
                            } catch (e) {}
                            J(t, r)
                        }
                    },
                    i = Q(t);
                for (let n = i - 1; n >= 0; n--) l(n) || (n === i - 1 ? Z(t, --i) : en[e].add(n))
            }

            function ei() {
                if (!et)
                    for (let e in et = !0, ee) el(e, e => {
                        let n = e.data,
                            t = b(e.provider, n.prefix);
                        if (!w(t, n).length) return !1;
                        let r = n.lastModified || -1;
                        return t.lastModifiedCached = t.lastModifiedCached ? Math.min(t.lastModifiedCached, r) : r, !0
                    })
            }

            function ea() {}
            let eu = (e, n) => {
                    let t, r;
                    let o = function(e) {
                        let n = {
                                loaded: [],
                                missing: [],
                                pending: []
                            },
                            t = Object.create(null);
                        e.sort((e, n) => e.provider !== n.provider ? e.provider.localeCompare(n.provider) : e.prefix !== n.prefix ? e.prefix.localeCompare(n.prefix) : e.name.localeCompare(n.name));
                        let r = {
                            provider: "",
                            prefix: "",
                            name: ""
                        };
                        return e.forEach(e => {
                            if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
                            r = e;
                            let o = e.provider,
                                l = e.prefix,
                                i = e.name,
                                a = t[o] || (t[o] = Object.create(null)),
                                u = a[l] || (a[l] = b(o, l));
                            (i in u.icons ? n.loaded : "" === l || u.missing.has(i) ? n.missing : n.pending).push({
                                provider: o,
                                prefix: l,
                                name: i
                            })
                        }), n
                    }(function(e) {
                        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = [];
                        return e.forEach(e => {
                            let o = "string" == typeof e ? p(e, n, t) : e;
                            o && r.push(o)
                        }), r
                    }(e, !0, E()));
                    if (!o.pending.length) {
                        let e = !0;
                        return n && setTimeout(() => {
                            e && n(o.loaded, o.missing, o.pending, ea)
                        }), () => {
                            e = !1
                        }
                    }
                    let l = Object.create(null),
                        i = [];
                    return o.pending.forEach(e => {
                        let {
                            provider: n,
                            prefix: o
                        } = e;
                        if (o === r && n === t) return;
                        t = n, r = o, i.push(b(n, o));
                        let a = l[n] || (l[n] = Object.create(null));
                        a[o] || (a[o] = [])
                    }), o.pending.forEach(e => {
                        let {
                            provider: n,
                            prefix: t,
                            name: r
                        } = e, o = b(n, t), i = o.pendingIcons || (o.pendingIcons = new Set);
                        i.has(r) || (i.add(r), l[n][t].push(r))
                    }), i.forEach(e => {
                        let {
                            provider: n,
                            prefix: t
                        } = e;
                        if (l[n][t].length) {
                            var r;
                            r = l[n][t], e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(r).sort() : e.iconsToLoad = r, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
                                let n;
                                e.iconsQueueFlag = !1;
                                let {
                                    provider: t,
                                    prefix: r
                                } = e, o = e.iconsToLoad;
                                delete e.iconsToLoad, o && (n = L(t)) && n.prepare(t, r, o).forEach(n => {
                                    ! function(e, n, t) {
                                        let r, o;
                                        if ("string" == typeof e) {
                                            let n = L(e);
                                            if (!n) return t(void 0, 424);
                                            o = n.send;
                                            let l = function(e) {
                                                if (!$[e]) {
                                                    let n = I[e];
                                                    if (!n) return;
                                                    let t = H(n);
                                                    $[e] = {
                                                        config: n,
                                                        redundancy: t
                                                    }
                                                }
                                                return $[e]
                                            }(e);
                                            l && (r = l.redundancy)
                                        } else {
                                            let n = D(e);
                                            if (n) {
                                                r = H(n);
                                                let t = L(e.resources ? e.resources[0] : "");
                                                t && (o = t.send)
                                            }
                                        }
                                        r && o ? r.query(n, o, t)().abort : t(void 0, 424)
                                    }(t, n, t => {
                                        if ("object" != typeof t) n.icons.forEach(n => {
                                            e.missing.add(n)
                                        });
                                        else try {
                                            let n = w(e, t);
                                            if (!n.length) return;
                                            let r = e.pendingIcons;
                                            r && n.forEach(e => {
                                                    r.delete(e)
                                                }),
                                                function(e, n) {
                                                    function t(t) {
                                                        let r, o;
                                                        if (!ee[t] || !(r = eo(t))) return;
                                                        let l = en[t];
                                                        if (l.size) l.delete(o = Array.from(l).shift());
                                                        else if ((o = Q(r)) >= 50 || !Z(r, o + 1)) return;
                                                        let i = {
                                                            cached: Math.floor(Date.now() / 36e5),
                                                            provider: e.provider,
                                                            data: n
                                                        };
                                                        return G(r, q + o.toString(), JSON.stringify(i))
                                                    }
                                                    et || ei(), (!n.lastModified || function(e, n) {
                                                        let t = e.lastModifiedCached;
                                                        if (t && t >= n) return t === n;
                                                        if (e.lastModifiedCached = n, t)
                                                            for (let t in ee) el(t, t => {
                                                                let r = t.data;
                                                                return t.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === n
                                                            });
                                                        return !0
                                                    }(e, n.lastModified)) && Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), t("local") || t("session"))
                                                }(e, t)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                        e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
                                            e.iconsLoaderFlag = !1, e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
                                                e.pendingCallbacksFlag = !1;
                                                let n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                                if (!n.length) return;
                                                let t = !1,
                                                    r = e.provider,
                                                    o = e.prefix;
                                                n.forEach(n => {
                                                    let l = n.icons,
                                                        i = l.pending.length;
                                                    l.pending = l.pending.filter(n => {
                                                        if (n.prefix !== o) return !0;
                                                        let i = n.name;
                                                        if (e.icons[i]) l.loaded.push({
                                                            provider: r,
                                                            prefix: o,
                                                            name: i
                                                        });
                                                        else {
                                                            if (!e.missing.has(i)) return t = !0, !0;
                                                            l.missing.push({
                                                                provider: r,
                                                                prefix: o,
                                                                name: i
                                                            })
                                                        }
                                                        return !1
                                                    }), l.pending.length !== i && (t || U([e], n.id), n.callback(l.loaded.slice(0), l.missing.slice(0), l.pending.slice(0), n.abort))
                                                })
                                            }))
                                        }))
                                    })
                                })
                            }))
                        }
                    }), n ? function(e, n, t) {
                        let r = W++,
                            o = U.bind(null, t, r);
                        if (!n.pending.length) return o;
                        let l = {
                            id: r,
                            icons: n,
                            callback: e,
                            abort: o
                        };
                        return t.forEach(e => {
                            (e.loaderCallbacks || (e.loaderCallbacks = [])).push(l)
                        }), o
                    }(n, o, i) : ea
                },
                ec = /[\s,]+/,
                es = { ...k,
                    inline: !1
                },
                ef = {
                    xmlns: "http://www.w3.org/TR/SVG",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    "aria-hidden": !0,
                    role: "img"
                },
                ed = {
                    display: "inline-block"
                },
                ep = {
                    backgroundColor: "currentColor"
                },
                eh = {
                    backgroundColor: "transparent"
                },
                eg = {
                    Image: "var(--svg)",
                    Repeat: "no-repeat",
                    Size: "100% 100%"
                },
                em = {
                    WebkitMask: ep,
                    mask: ep,
                    background: eh
                };
            for (let e in em) {
                let n = em[e];
                for (let t in eg) n[e + t] = eg[t]
            }
            let ev = { ...es,
                inline: !0
            };

            function ey(e) {
                return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
            }
            let eb = (e, n, t) => {
                let o = n.inline ? ev : es,
                    i = function(e, n) {
                        let t = { ...e
                        };
                        for (let e in n) {
                            let r = n[e],
                                o = typeof r;
                            e in O ? (null === r || r && ("string" === o || "number" === o)) && (t[e] = r) : o === typeof t[e] && (t[e] = "rotate" === e ? r % 4 : r)
                        }
                        return t
                    }(o, n),
                    a = n.mode || "svg",
                    c = {},
                    s = n.style || {},
                    f = { ..."svg" === a ? ef : {}
                    };
                if (t) {
                    let e = p(t, !1, !0);
                    if (e) {
                        let n = ["iconify"];
                        for (let t of ["provider", "prefix"]) e[t] && n.push("iconify--" + e[t]);
                        f.className = n.join(" ")
                    }
                }
                for (let e in n) {
                    let t = n[e];
                    if (void 0 !== t) switch (e) {
                        case "icon":
                        case "style":
                        case "children":
                        case "onLoad":
                        case "mode":
                        case "ssr":
                            break;
                        case "_ref":
                            f.ref = t;
                            break;
                        case "className":
                            f[e] = (f[e] ? f[e] + " " : "") + t;
                            break;
                        case "inline":
                        case "hFlip":
                        case "vFlip":
                            i[e] = !0 === t || "true" === t || 1 === t;
                            break;
                        case "flip":
                            "string" == typeof t && function(e, n) {
                                n.split(ec).forEach(n => {
                                    switch (n.trim()) {
                                        case "horizontal":
                                            e.hFlip = !0;
                                            break;
                                        case "vertical":
                                            e.vFlip = !0
                                    }
                                })
                            }(i, t);
                            break;
                        case "color":
                            c.color = t;
                            break;
                        case "rotate":
                            "string" == typeof t ? i[e] = function(e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    t = e.replace(/^-?[0-9.]*/, "");

                                function r(e) {
                                    for (; e < 0;) e += 4;
                                    return e % 4
                                }
                                if ("" === t) {
                                    let n = parseInt(e);
                                    return isNaN(n) ? 0 : r(n)
                                }
                                if (t !== e) {
                                    let n = 0;
                                    switch (t) {
                                        case "%":
                                            n = 25;
                                            break;
                                        case "deg":
                                            n = 90
                                    }
                                    if (n) {
                                        let o = parseFloat(e.slice(0, e.length - t.length));
                                        return isNaN(o) ? 0 : (o /= n) % 1 == 0 ? r(o) : 0
                                    }
                                }
                                return n
                            }(t) : "number" == typeof t && (i[e] = t);
                            break;
                        case "ariaHidden":
                        case "aria-hidden":
                            !0 !== t && "true" !== t && delete f["aria-hidden"];
                            break;
                        default:
                            void 0 === o[e] && (f[e] = t)
                    }
                }
                let d = function(e, n) {
                        let t, r;
                        let o = { ...u,
                                ...e
                            },
                            l = { ...k,
                                ...n
                            },
                            i = {
                                left: o.left,
                                top: o.top,
                                width: o.width,
                                height: o.height
                            },
                            a = o.body;
                        [o, l].forEach(e => {
                            let n;
                            let t = [],
                                r = e.hFlip,
                                o = e.vFlip,
                                l = e.rotate;
                            switch (r ? o ? l += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : o && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0), l < 0 && (l -= 4 * Math.floor(l / 4)), l %= 4) {
                                case 1:
                                    t.unshift("rotate(90 " + (n = i.height / 2 + i.top).toString() + " " + n.toString() + ")");
                                    break;
                                case 2:
                                    t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
                                    break;
                                case 3:
                                    t.unshift("rotate(-90 " + (n = i.width / 2 + i.left).toString() + " " + n.toString() + ")")
                            }
                            l % 2 == 1 && (i.left !== i.top && (n = i.left, i.left = i.top, i.top = n), i.width !== i.height && (n = i.width, i.width = i.height, i.height = n)), t.length && (a = function(e, n, t) {
                                var r, o;
                                let l = function(e) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "defs",
                                        t = "",
                                        r = e.indexOf("<" + n);
                                    for (; r >= 0;) {
                                        let o = e.indexOf(">", r),
                                            l = e.indexOf("</" + n);
                                        if (-1 === o || -1 === l) break;
                                        let i = e.indexOf(">", l);
                                        if (-1 === i) break;
                                        t += e.slice(o + 1, l).trim(), e = e.slice(0, r).trim() + e.slice(i + 1)
                                    }
                                    return {
                                        defs: t,
                                        content: e
                                    }
                                }(e);
                                return r = l.defs, o = n + l.content + t, r ? "<defs>" + r + "</defs>" + o : o
                            }(a, '<g transform="' + t.join(" ") + '">', "</g>"))
                        });
                        let c = l.width,
                            s = l.height,
                            f = i.width,
                            d = i.height;
                        null === c ? t = j(r = null === s ? "1em" : "auto" === s ? d : s, f / d) : (t = "auto" === c ? f : c, r = null === s ? j(t, d / f) : "auto" === s ? d : s);
                        let p = {},
                            h = (e, n) => {
                                N(n) || (p[e] = n.toString())
                            };
                        h("width", t), h("height", r);
                        let g = [i.left, i.top, f, d];
                        return p.viewBox = g.join(" "), {
                            attributes: p,
                            viewBox: g,
                            body: a
                        }
                    }(e, i),
                    h = d.attributes;
                if (i.inline && (c.verticalAlign = "-0.125em"), "svg" === a) {
                    var g;
                    f.style = { ...c,
                        ...s
                    }, Object.assign(f, h);
                    let e = 0,
                        t = n.id;
                    return "string" == typeof t && (t = t.replace(/-/g, "_")), f.dangerouslySetInnerHTML = {
                        __html: (g = function(e) {
                            let n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A,
                                r = [];
                            for (; n = M.exec(e);) r.push(n[1]);
                            if (!r.length) return e;
                            let o = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
                            return r.forEach(n => {
                                let r = "function" == typeof t ? t(n) : t + (R++).toString(),
                                    l = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                e = e.replace(RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"), "$1" + r + o + "$3")
                            }), e = e.replace(RegExp(o, "g"), "")
                        }(d.body, t ? () => t + "ID" + e++ : "iconifyReact"), void 0 === r && function() {
                            try {
                                r = window.trustedTypes.createPolicy("iconify", {
                                    createHTML: e => e
                                })
                            } catch (e) {
                                r = null
                            }
                        }(), r ? r.createHTML(g) : g)
                    }, (0, l.createElement)("svg", f)
                }
                let {
                    body: m,
                    width: v,
                    height: y
                } = e, b = "mask" === a || "bg" !== a && -1 !== m.indexOf("currentColor"), w = function(e, n) {
                    let t = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                    for (let e in n) t += " " + e + '="' + n[e] + '"';
                    return '<svg xmlns="http://www.w3.org/TR/SVG"' + t + ">" + e + "</svg>"
                }(m, { ...h,
                    width: v + "",
                    height: y + ""
                });
                return f.style = { ...c,
                    "--svg": 'url("data:image/svg+xml,' + w.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                    width: ey(h.width),
                    height: ey(h.height),
                    ...ed,
                    ...b ? ep : eh,
                    ...s
                }, (0, l.createElement)("span", f)
            };
            if (E(!0), o = {
                    prepare: (e, n, t) => {
                        let r = [],
                            o = function(e, n) {
                                let t;
                                let r = I[e];
                                if (!r) return 0;
                                if (r.maxURL) {
                                    let e = 0;
                                    r.resources.forEach(n => {
                                        e = Math.max(e, n.length)
                                    }), t = r.maxURL - e - r.path.length - (n + ".json?icons=").length
                                } else t = 0;
                                return t
                            }(e, n),
                            l = "icons",
                            i = {
                                type: l,
                                provider: e,
                                prefix: n,
                                icons: []
                            },
                            a = 0;
                        return t.forEach((t, u) => {
                            (a += t.length + 1) >= o && u > 0 && (r.push(i), i = {
                                type: l,
                                provider: e,
                                prefix: n,
                                icons: []
                            }, a = t.length), i.icons.push(t)
                        }), r.push(i), r
                    },
                    send: (e, n, t) => {
                        if (!F) {
                            t("abort", 424);
                            return
                        }
                        let r = function(e) {
                            if ("string" == typeof e) {
                                let n = I[e];
                                if (n) return n.path
                            }
                            return "/"
                        }(n.provider);
                        switch (n.type) {
                            case "icons":
                                r += n.prefix + ".json?" + new URLSearchParams({
                                    icons: n.icons.join(",")
                                }).toString();
                                break;
                            case "custom":
                                {
                                    let e = n.uri;r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                                    break
                                }
                            default:
                                t("abort", 400);
                                return
                        }
                        let o = 503;
                        F(e + r).then(e => {
                            let n = e.status;
                            if (200 !== n) {
                                setTimeout(() => {
                                    t(404 === n ? "abort" : "next", n)
                                });
                                return
                            }
                            return o = 501, e.json()
                        }).then(e => {
                            if ("object" != typeof e || null === e) {
                                setTimeout(() => {
                                    404 === e ? t("abort", e) : t("next", o)
                                });
                                return
                            }
                            setTimeout(() => {
                                t("success", e)
                            })
                        }).catch(() => {
                            t("next", o)
                        })
                    }
                }, T[""] = o, "undefined" != typeof document && "undefined" != typeof window) {
                ei();
                let e = window;
                if (void 0 !== e.IconifyPreload) {
                    let n = e.IconifyPreload,
                        t = "Invalid IconifyPreload syntax.";
                    "object" == typeof n && null !== n && (n instanceof Array ? n : [n]).forEach(e => {
                        try {
                            ("object" != typeof e || null === e || e instanceof Array || "object" != typeof e.icons || "string" != typeof e.prefix || ! function(e, n) {
                                if ("object" != typeof e) return !1;
                                if ("string" != typeof n && (n = e.provider || ""), x && !n && !e.prefix) {
                                    let n = !1;
                                    return v(e) && (e.prefix = "", f(e, (e, t) => {
                                        t && function(e, n) {
                                            let t = p(e, !0, x);
                                            return !!t && function(e, n, t) {
                                                try {
                                                    if ("string" == typeof t.body) return e.icons[n] = { ...t
                                                    }, !0
                                                } catch (e) {}
                                                return !1
                                            }(b(t.provider, t.prefix), t.name, n)
                                        }(e, t) && (n = !0)
                                    })), n
                                }
                                let t = e.prefix;
                                return !!h({
                                    provider: n,
                                    prefix: t,
                                    name: "a"
                                }) && !!w(b(n, t), e)
                            }(e)) && console.error(t)
                        } catch (e) {
                            console.error(t)
                        }
                    })
                }
                if (void 0 !== e.IconifyProviders) {
                    let n = e.IconifyProviders;
                    if ("object" == typeof n && null !== n)
                        for (let e in n) {
                            let t = "IconifyProviders[" + e + "] is invalid.";
                            try {
                                let r = n[e];
                                if ("object" != typeof r || !r || void 0 === r.resources) continue;
                                ! function(e, n) {
                                    let t = D(n);
                                    return null !== t && (I[e] = t, !0)
                                }(e, r) && console.error(t)
                            } catch (e) {
                                console.error(t)
                            }
                        }
                }
            }
            let ew = (0, l.forwardRef)((e, n) => (function(e) {
                let [n, t] = (0, l.useState)(!!e.ssr), [r, o] = (0, l.useState)({}), [i, a] = (0, l.useState)(function(n) {
                    if (n) {
                        let n = e.icon;
                        if ("object" == typeof n) return {
                            name: "",
                            data: n
                        };
                        let t = S(n);
                        if (t) return {
                            name: n,
                            data: t
                        }
                    }
                    return {
                        name: ""
                    }
                }(!!e.ssr));

                function c() {
                    let e = r.callback;
                    e && (e(), o({}))
                }

                function s(e) {
                    if (JSON.stringify(i) !== JSON.stringify(e)) return c(), a(e), !0
                }(0, l.useEffect)(() => (t(!0), c), []), (0, l.useEffect)(() => {
                    n && function n() {
                        var t;
                        let r = e.icon;
                        if ("object" == typeof r) {
                            s({
                                name: "",
                                data: r
                            });
                            return
                        }
                        let l = S(r);
                        s({
                            name: r,
                            data: l
                        }) && (void 0 === l ? o({
                            callback: eu([r], n)
                        }) : l && (null === (t = e.onLoad) || void 0 === t || t.call(e, r)))
                    }()
                }, [e.icon, n]);
                let {
                    name: f,
                    data: d
                } = i;
                return d ? eb({ ...u,
                    ...d
                }, e, f) : e.children ? e.children : (0, l.createElement)("span", {})
            })({ ...e,
                _ref: n
            }))
        },
        73966: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return i
                },
                k: function() {
                    return l
                }
            });
            var r = t(20955),
                o = t(26705);

            function l(e, n) {
                let t = r.createContext(n);

                function l(e) {
                    let {
                        children: n,
                        ...l
                    } = e, i = r.useMemo(() => l, Object.values(l));
                    return (0, o.jsx)(t.Provider, {
                        value: i,
                        children: n
                    })
                }
                return l.displayName = e + "Provider", [l, function(o) {
                    let l = r.useContext(t);
                    if (l) return l;
                    if (void 0 !== n) return n;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function i(e, n = []) {
                let t = [],
                    l = () => {
                        let n = t.map(e => r.createContext(e));
                        return function(t) {
                            let o = t ? .[e] || n;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...t,
                                    [e]: o
                                }
                            }), [t, o])
                        }
                    };
                return l.scopeName = e, [function(n, l) {
                    let i = r.createContext(l),
                        a = t.length;

                    function u(n) {
                        let {
                            scope: t,
                            children: l,
                            ...u
                        } = n, c = t ? .[e][a] || i, s = r.useMemo(() => u, Object.values(u));
                        return (0, o.jsx)(c.Provider, {
                            value: s,
                            children: l
                        })
                    }
                    return t = [...t, l], u.displayName = n + "Provider", [u, function(t, o) {
                        let u = o ? .[e][a] || i,
                            c = r.useContext(u);
                        if (c) return c;
                        if (void 0 !== l) return l;
                        throw Error(`\`${t}\` must be used within \`${n}\``)
                    }]
                }, function(...e) {
                    let n = e[0];
                    if (1 === e.length) return n;
                    let t = () => {
                        let t = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = t.reduce((n, {
                                useScope: t,
                                scopeName: r
                            }) => {
                                let o = t(e)[`__scope${r}`];
                                return { ...n,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${n.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return t.scopeName = n.scopeName, t
                }(l, ...n)]
            }
        },
        35954: function(e, n, t) {
            let r;
            t.d(n, {
                x8: function() {
                    return no
                },
                VY: function() {
                    return nn
                },
                dk: function() {
                    return nr
                },
                aV: function() {
                    return ne
                },
                h_: function() {
                    return e7
                },
                fC: function() {
                    return e4
                },
                Dx: function() {
                    return nt
                },
                xz: function() {
                    return e8
                }
            });
            var o, l, i, a = t(20955),
                u = t.t(a, 2);

            function c(e, n, {
                checkForDefaultPrevented: t = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === t || !r.defaultPrevented) return n ? .(r)
                }
            }
            var s = t(98575),
                f = t(73966),
                d = t(61188),
                p = u["useId".toString()] || (() => void 0),
                h = 0;

            function g(e) {
                let [n, t] = a.useState(p());
                return (0, d.b)(() => {
                    e || t(e => e ? ? String(h++))
                }, [e]), e || (n ? `radix-${n}` : "")
            }
            var m = t(26606),
                v = t(66840),
                y = t(26705),
                b = "dismissableLayer.update",
                w = a.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                x = a.forwardRef((e, n) => {
                    var t, r;
                    let {
                        disableOutsidePointerEvents: o = !1,
                        onEscapeKeyDown: i,
                        onPointerDownOutside: u,
                        onFocusOutside: f,
                        onInteractOutside: d,
                        onDismiss: p,
                        ...h
                    } = e, g = a.useContext(w), [x, O] = a.useState(null), k = null !== (r = null == x ? void 0 : x.ownerDocument) && void 0 !== r ? r : null === (t = globalThis) || void 0 === t ? void 0 : t.document, [, C] = a.useState({}), P = (0, s.e)(n, e => O(e)), j = Array.from(g.layers), [N] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), M = j.indexOf(N), A = x ? j.indexOf(x) : -1, R = g.layersWithOutsidePointerEventsDisabled.size > 0, T = A >= M, L = function(e) {
                        var n;
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (n = globalThis) || void 0 === n ? void 0 : n.document,
                            r = (0, m.W)(e),
                            o = a.useRef(!1),
                            l = a.useRef(() => {});
                        return a.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let n = function() {
                                                S("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (t.removeEventListener("click", l.current), l.current = n, t.addEventListener("click", l.current, {
                                            once: !0
                                        })) : n()
                                    } else t.removeEventListener("click", l.current);
                                    o.current = !1
                                },
                                n = window.setTimeout(() => {
                                    t.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(n), t.removeEventListener("pointerdown", e), t.removeEventListener("click", l.current)
                            }
                        }, [t, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let n = e.target,
                            t = [...g.branches].some(e => e.contains(n));
                        !T || t || (null == u || u(e), null == d || d(e), e.defaultPrevented || null == p || p())
                    }, k), D = function(e) {
                        var n;
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (n = globalThis) || void 0 === n ? void 0 : n.document,
                            r = (0, m.W)(e),
                            o = a.useRef(!1);
                        return a.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && S("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
                        }, [t, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let n = e.target;
                        [...g.branches].some(e => e.contains(n)) || (null == f || f(e), null == d || d(e), e.defaultPrevented || null == p || p())
                    }, k);
                    return ! function(e, n = globalThis ? .document) {
                        let t = (0, m.W)(e);
                        a.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && t(e)
                            };
                            return n.addEventListener("keydown", e, {
                                capture: !0
                            }), () => n.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [t, n])
                    }(e => {
                        A !== g.layers.size - 1 || (null == i || i(e), !e.defaultPrevented && p && (e.preventDefault(), p()))
                    }, k), a.useEffect(() => {
                        if (x) return o && (0 === g.layersWithOutsidePointerEventsDisabled.size && (l = k.body.style.pointerEvents, k.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(x)), g.layers.add(x), E(), () => {
                            o && 1 === g.layersWithOutsidePointerEventsDisabled.size && (k.body.style.pointerEvents = l)
                        }
                    }, [x, k, o, g]), a.useEffect(() => () => {
                        x && (g.layers.delete(x), g.layersWithOutsidePointerEventsDisabled.delete(x), E())
                    }, [x, g]), a.useEffect(() => {
                        let e = () => C({});
                        return document.addEventListener(b, e), () => document.removeEventListener(b, e)
                    }, []), (0, y.jsx)(v.WV.div, { ...h,
                        ref: P,
                        style: {
                            pointerEvents: R ? T ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: c(e.onFocusCapture, D.onFocusCapture),
                        onBlurCapture: c(e.onBlurCapture, D.onBlurCapture),
                        onPointerDownCapture: c(e.onPointerDownCapture, L.onPointerDownCapture)
                    })
                });

            function E() {
                let e = new CustomEvent(b);
                document.dispatchEvent(e)
            }

            function S(e, n, t, r) {
                let {
                    discrete: o
                } = r, l = t.originalEvent.target, i = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: t
                });
                n && l.addEventListener(e, n, {
                    once: !0
                }), o ? (0, v.jH)(l, i) : l.dispatchEvent(i)
            }
            x.displayName = "DismissableLayer", a.forwardRef((e, n) => {
                let t = a.useContext(w),
                    r = a.useRef(null),
                    o = (0, s.e)(n, r);
                return a.useEffect(() => {
                    let e = r.current;
                    if (e) return t.branches.add(e), () => {
                        t.branches.delete(e)
                    }
                }, [t.branches]), (0, y.jsx)(v.WV.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var O = "focusScope.autoFocusOnMount",
                k = "focusScope.autoFocusOnUnmount",
                C = {
                    bubbles: !1,
                    cancelable: !0
                },
                P = a.forwardRef((e, n) => {
                    let {
                        loop: t = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: l,
                        ...i
                    } = e, [u, c] = a.useState(null), f = (0, m.W)(o), d = (0, m.W)(l), p = a.useRef(null), h = (0, s.e)(n, e => c(e)), g = a.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    a.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (g.paused || !u) return;
                                    let n = e.target;
                                    u.contains(n) ? p.current = n : M(p.current, {
                                        select: !0
                                    })
                                },
                                n = function(e) {
                                    if (g.paused || !u) return;
                                    let n = e.relatedTarget;
                                    null === n || u.contains(n) || M(p.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", n);
                            let t = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let n of e) n.removedNodes.length > 0 && M(u)
                            });
                            return u && t.observe(u, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", n), t.disconnect()
                            }
                        }
                    }, [r, u, g.paused]), a.useEffect(() => {
                        if (u) {
                            A.add(g);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let n = new CustomEvent(O, C);
                                u.addEventListener(O, f), u.dispatchEvent(n), n.defaultPrevented || (function(e) {
                                    let {
                                        select: n = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = document.activeElement;
                                    for (let r of e)
                                        if (M(r, {
                                                select: n
                                            }), document.activeElement !== t) return
                                }(j(u).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && M(u))
                            }
                            return () => {
                                u.removeEventListener(O, f), setTimeout(() => {
                                    let n = new CustomEvent(k, C);
                                    u.addEventListener(k, d), u.dispatchEvent(n), n.defaultPrevented || M(null != e ? e : document.body, {
                                        select: !0
                                    }), u.removeEventListener(k, d), A.remove(g)
                                }, 0)
                            }
                        }
                    }, [u, f, d, g]);
                    let b = a.useCallback(e => {
                        if (!t && !r || g.paused) return;
                        let n = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (n && o) {
                            let n = e.currentTarget,
                                [r, l] = function(e) {
                                    let n = j(e);
                                    return [N(n, e), N(n.reverse(), e)]
                                }(n);
                            r && l ? e.shiftKey || o !== l ? e.shiftKey && o === r && (e.preventDefault(), t && M(l, {
                                select: !0
                            })) : (e.preventDefault(), t && M(r, {
                                select: !0
                            })) : o === n && e.preventDefault()
                        }
                    }, [t, r, g.paused]);
                    return (0, y.jsx)(v.WV.div, {
                        tabIndex: -1,
                        ...i,
                        ref: h,
                        onKeyDown: b
                    })
                });

            function j(e) {
                let n = [],
                    t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let n = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || n ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; t.nextNode();) n.push(t.currentNode);
                return n
            }

            function N(e, n) {
                for (let t of e)
                    if (! function(e, n) {
                            let {
                                upTo: t
                            } = n;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(t, {
                            upTo: n
                        })) return t
            }

            function M(e) {
                let {
                    select: n = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var t;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (t = e) instanceof HTMLInputElement && "select" in t && n && e.select()
                }
            }
            P.displayName = "FocusScope";
            var A = (r = [], {
                add(e) {
                    let n = r[0];
                    e !== n && (null == n || n.pause()), (r = R(r, e)).unshift(e)
                },
                remove(e) {
                    var n;
                    null === (n = (r = R(r, e))[0]) || void 0 === n || n.resume()
                }
            });

            function R(e, n) {
                let t = [...e],
                    r = t.indexOf(n);
                return -1 !== r && t.splice(r, 1), t
            }
            var T = t(3190),
                L = a.forwardRef((e, n) => {
                    var t, r;
                    let {
                        container: o,
                        ...l
                    } = e, [i, u] = a.useState(!1);
                    (0, d.b)(() => u(!0), []);
                    let c = o || i && (null === (r = globalThis) || void 0 === r ? void 0 : null === (t = r.document) || void 0 === t ? void 0 : t.body);
                    return c ? T.createPortal((0, y.jsx)(v.WV.div, { ...l,
                        ref: n
                    }), c) : null
                });
            L.displayName = "Portal";
            var D = e => {
                var n, t;
                let r, o;
                let {
                    present: l,
                    children: i
                } = e, u = function(e) {
                    var n, t;
                    let [r, o] = a.useState(), l = a.useRef({}), i = a.useRef(e), u = a.useRef("none"), [c, s] = (n = e ? "mounted" : "unmounted", t = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, a.useReducer((e, n) => {
                        let r = t[e][n];
                        return null != r ? r : e
                    }, n));
                    return a.useEffect(() => {
                        let e = I(l.current);
                        u.current = "mounted" === c ? e : "none"
                    }, [c]), (0, d.b)(() => {
                        let n = l.current,
                            t = i.current;
                        if (t !== e) {
                            let r = u.current,
                                o = I(n);
                            e ? s("MOUNT") : "none" === o || (null == n ? void 0 : n.display) === "none" ? s("UNMOUNT") : t && r !== o ? s("ANIMATION_OUT") : s("UNMOUNT"), i.current = e
                        }
                    }, [e, s]), (0, d.b)(() => {
                        if (r) {
                            let e = e => {
                                    let n = I(l.current).includes(e.animationName);
                                    e.target === r && n && T.flushSync(() => s("ANIMATION_END"))
                                },
                                n = e => {
                                    e.target === r && (u.current = I(l.current))
                                };
                            return r.addEventListener("animationstart", n), r.addEventListener("animationcancel", e), r.addEventListener("animationend", e), () => {
                                r.removeEventListener("animationstart", n), r.removeEventListener("animationcancel", e), r.removeEventListener("animationend", e)
                            }
                        }
                        s("ANIMATION_END")
                    }, [r, s]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(c),
                        ref: a.useCallback(e => {
                            e && (l.current = getComputedStyle(e)), o(e)
                        }, [])
                    }
                }(l), c = "function" == typeof i ? i({
                    present: u.isPresent
                }) : a.Children.only(i), f = (0, s.e)(u.ref, (r = null === (n = Object.getOwnPropertyDescriptor(c.props, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning ? c.ref : (r = null === (t = Object.getOwnPropertyDescriptor(c, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in r && r.isReactWarning ? c.props.ref : c.props.ref || c.ref);
                return "function" == typeof i || u.isPresent ? a.cloneElement(c, {
                    ref: f
                }) : null
            };

            function I(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            D.displayName = "Presence";
            var _ = 0;

            function z() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var F = t(5853),
                U = "right-scroll-bar-position",
                W = "width-before-scroll-bar",
                B = t(17325),
                H = (0, t(31412)._)(),
                $ = function() {},
                V = a.forwardRef(function(e, n) {
                    var t = a.useRef(null),
                        r = a.useState({
                            onScrollCapture: $,
                            onWheelCapture: $,
                            onTouchMoveCapture: $
                        }),
                        o = r[0],
                        l = r[1],
                        i = e.forwardProps,
                        u = e.children,
                        c = e.className,
                        s = e.removeScrollBar,
                        f = e.enabled,
                        d = e.shards,
                        p = e.sideCar,
                        h = e.noIsolation,
                        g = e.inert,
                        m = e.allowPinchZoom,
                        v = e.as,
                        y = e.gapMode,
                        b = (0, F._T)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        w = (0, B.q)([t, n]),
                        x = (0, F.pi)((0, F.pi)({}, b), o);
                    return a.createElement(a.Fragment, null, f && a.createElement(p, {
                        sideCar: H,
                        removeScrollBar: s,
                        shards: d,
                        noIsolation: h,
                        inert: g,
                        setCallbacks: l,
                        allowPinchZoom: !!m,
                        lockRef: t,
                        gapMode: y
                    }), i ? a.cloneElement(a.Children.only(u), (0, F.pi)((0, F.pi)({}, x), {
                        ref: w
                    })) : a.createElement(void 0 === v ? "div" : v, (0, F.pi)({}, x, {
                        className: c,
                        ref: w
                    }), u))
                });
            V.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, V.classNames = {
                fullWidth: W,
                zeroRight: U
            };
            var q = function(e) {
                var n = e.sideCar,
                    t = (0, F._T)(e, ["sideCar"]);
                if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = n.read();
                if (!r) throw Error("Sidecar medium not found");
                return a.createElement(r, (0, F.pi)({}, t))
            };
            q.isSideCarExport = !0;
            var K = function() {
                    var e = 0,
                        n = null;
                    return {
                        add: function(r) {
                            if (0 == e && (n = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var n = i || t.nc;
                                    return n && e.setAttribute("nonce", n), e
                                }())) {
                                var o, l;
                                (o = n).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), l = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(l)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !n || (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                Y = function() {
                    var e = K();
                    return function(n, t) {
                        a.useEffect(function() {
                            return e.add(n),
                                function() {
                                    e.remove()
                                }
                        }, [n && t])
                    }
                },
                X = function() {
                    var e = Y();
                    return function(n) {
                        return e(n.styles, n.dynamic), null
                    }
                },
                G = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                J = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                Z = function(e) {
                    var n = window.getComputedStyle(document.body),
                        t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = n["padding" === e ? "paddingTop" : "marginTop"],
                        o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [J(t), J(r), J(o)]
                },
                Q = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return G;
                    var n = Z(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: n[0],
                        top: n[1],
                        right: n[2],
                        gap: Math.max(0, r - t + n[2] - n[0])
                    }
                },
                ee = X(),
                en = "data-scroll-locked",
                et = function(e, n, t, r) {
                    var o = e.left,
                        l = e.top,
                        i = e.right,
                        a = e.gap;
                    return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(en, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(l, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(U, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(W, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(U, " .").concat(U, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(W, " .").concat(W, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(en, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
                },
                er = function() {
                    var e = parseInt(document.body.getAttribute(en) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                eo = function() {
                    a.useEffect(function() {
                        return document.body.setAttribute(en, (er() + 1).toString()),
                            function() {
                                var e = er() - 1;
                                e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString())
                            }
                    }, [])
                },
                el = function(e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    eo();
                    var l = a.useMemo(function() {
                        return Q(o)
                    }, [o]);
                    return a.createElement(ee, {
                        styles: et(l, !n, o, t ? "" : "!important")
                    })
                },
                ei = !1;
            if ("undefined" != typeof window) try {
                var ea = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ei = !0, !0
                    }
                });
                window.addEventListener("test", ea, ea), window.removeEventListener("test", ea, ea)
            } catch (e) {
                ei = !1
            }
            var eu = !!ei && {
                    passive: !1
                },
                ec = function(e, n) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t[n] && !(t.overflowY === t.overflowX && "TEXTAREA" !== e.tagName && "visible" === t[n])
                },
                es = function(e, n) {
                    var t = n.ownerDocument,
                        r = n;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), ef(e, r)) {
                            var o = ed(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== t.body);
                    return !1
                },
                ef = function(e, n) {
                    return "v" === e ? ec(n, "overflowY") : ec(n, "overflowX")
                },
                ed = function(e, n) {
                    return "v" === e ? [n.scrollTop, n.scrollHeight, n.clientHeight] : [n.scrollLeft, n.scrollWidth, n.clientWidth]
                },
                ep = function(e, n, t, r, o) {
                    var l, i = (l = window.getComputedStyle(n).direction, "h" === e && "rtl" === l ? -1 : 1),
                        a = i * r,
                        u = t.target,
                        c = n.contains(u),
                        s = !1,
                        f = a > 0,
                        d = 0,
                        p = 0;
                    do {
                        var h = ed(e, u),
                            g = h[0],
                            m = h[1] - h[2] - i * g;
                        (g || m) && ef(e, u) && (d += m, p += g), u instanceof ShadowRoot ? u = u.host : u = u.parentNode
                    } while (!c && u !== document.body || c && (n.contains(u) || n === u));
                    return f && (o && 1 > Math.abs(d) || !o && a > d) ? s = !0 : !f && (o && 1 > Math.abs(p) || !o && -a > p) && (s = !0), s
                },
                eh = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                eg = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                em = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ev = 0,
                ey = [],
                eb = (o = function(e) {
                    var n = a.useRef([]),
                        t = a.useRef([0, 0]),
                        r = a.useRef(),
                        o = a.useState(ev++)[0],
                        l = a.useState(X)[0],
                        i = a.useRef(e);
                    a.useEffect(function() {
                        i.current = e
                    }, [e]), a.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var n = (0, F.ev)([e.lockRef.current], (e.shards || []).map(em), !0).filter(Boolean);
                            return n.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), n.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = a.useCallback(function(e, n) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o, l = eh(e),
                                a = t.current,
                                u = "deltaX" in e ? e.deltaX : a[0] - l[0],
                                c = "deltaY" in e ? e.deltaY : a[1] - l[1],
                                s = e.target,
                                f = Math.abs(u) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === f && "range" === s.type) return !1;
                            var d = es(f, s);
                            if (!d) return !0;
                            if (d ? o = f : (o = "v" === f ? "h" : "v", d = es(f, s)), !d) return !1;
                            if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return ep(p, n, e, "h" === p ? u : c, !0)
                        }, []),
                        c = a.useCallback(function(e) {
                            if (ey.length && ey[ey.length - 1] === l) {
                                var t = "deltaY" in e ? eg(e) : eh(e),
                                    r = n.current.filter(function(n) {
                                        var r;
                                        return n.name === e.type && (n.target === e.target || e.target === n.shadowParent) && (r = n.delta)[0] === t[0] && r[1] === t[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (i.current.shards || []).map(em).filter(Boolean).filter(function(n) {
                                        return n.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        s = a.useCallback(function(e, t, r, o) {
                            var l = {
                                name: e,
                                delta: t,
                                target: r,
                                should: o,
                                shadowParent: function(e) {
                                    for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
                                    return n
                                }(r)
                            };
                            n.current.push(l), setTimeout(function() {
                                n.current = n.current.filter(function(e) {
                                    return e !== l
                                })
                            }, 1)
                        }, []),
                        f = a.useCallback(function(e) {
                            t.current = eh(e), r.current = void 0
                        }, []),
                        d = a.useCallback(function(n) {
                            s(n.type, eg(n), n.target, u(n, e.lockRef.current))
                        }, []),
                        p = a.useCallback(function(n) {
                            s(n.type, eh(n), n.target, u(n, e.lockRef.current))
                        }, []);
                    a.useEffect(function() {
                        return ey.push(l), e.setCallbacks({
                                onScrollCapture: d,
                                onWheelCapture: d,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", c, eu), document.addEventListener("touchmove", c, eu), document.addEventListener("touchstart", f, eu),
                            function() {
                                ey = ey.filter(function(e) {
                                    return e !== l
                                }), document.removeEventListener("wheel", c, eu), document.removeEventListener("touchmove", c, eu), document.removeEventListener("touchstart", f, eu)
                            }
                    }, []);
                    var h = e.removeScrollBar,
                        g = e.inert;
                    return a.createElement(a.Fragment, null, g ? a.createElement(l, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, h ? a.createElement(el, {
                        gapMode: e.gapMode
                    }) : null)
                }, H.useMedium(o), q),
                ew = a.forwardRef(function(e, n) {
                    return a.createElement(V, (0, F.pi)({}, e, {
                        ref: n,
                        sideCar: eb
                    }))
                });
            ew.classNames = V.classNames;
            var ex = new WeakMap,
                eE = new WeakMap,
                eS = {},
                eO = 0,
                ek = function(e) {
                    return e && (e.host || ek(e.parentNode))
                },
                eC = function(e, n, t, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (n.contains(e)) return e;
                        var t = ek(e);
                        return t && n.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", n, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    eS[t] || (eS[t] = new WeakMap);
                    var l = eS[t],
                        i = [],
                        a = new Set,
                        u = new Set(o),
                        c = function(e) {
                            !e || a.has(e) || (a.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var s = function(e) {
                        !e || u.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (a.has(e)) s(e);
                            else try {
                                var n = e.getAttribute(r),
                                    o = null !== n && "false" !== n,
                                    u = (ex.get(e) || 0) + 1,
                                    c = (l.get(e) || 0) + 1;
                                ex.set(e, u), l.set(e, c), i.push(e), 1 === u && o && eE.set(e, !0), 1 === c && e.setAttribute(t, "true"), o || e.setAttribute(r, "true")
                            } catch (n) {
                                console.error("aria-hidden: cannot operate on ", e, n)
                            }
                        })
                    };
                    return s(n), a.clear(), eO++,
                        function() {
                            i.forEach(function(e) {
                                var n = ex.get(e) - 1,
                                    o = l.get(e) - 1;
                                ex.set(e, n), l.set(e, o), n || (eE.has(e) || e.removeAttribute(r), eE.delete(e)), o || e.removeAttribute(t)
                            }), --eO || (ex = new WeakMap, ex = new WeakMap, eE = new WeakMap, eS = {})
                        }
                },
                eP = function(e, n, t) {
                    void 0 === t && (t = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = n || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eC(r, o, t, "aria-hidden")) : function() {
                        return null
                    }
                },
                ej = t(37053),
                eN = "Dialog",
                [eM, eA] = (0, f.b)(eN),
                [eR, eT] = eM(eN),
                eL = e => {
                    let {
                        __scopeDialog: n,
                        children: t,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: l,
                        modal: i = !0
                    } = e, u = a.useRef(null), c = a.useRef(null), [s = !1, f] = function({
                        prop: e,
                        defaultProp: n,
                        onChange: t = () => {}
                    }) {
                        let [r, o] = function({
                            defaultProp: e,
                            onChange: n
                        }) {
                            let t = a.useState(e),
                                [r] = t,
                                o = a.useRef(r),
                                l = (0, m.W)(n);
                            return a.useEffect(() => {
                                o.current !== r && (l(r), o.current = r)
                            }, [r, o, l]), t
                        }({
                            defaultProp: n,
                            onChange: t
                        }), l = void 0 !== e, i = l ? e : r, u = (0, m.W)(t);
                        return [i, a.useCallback(n => {
                            if (l) {
                                let t = "function" == typeof n ? n(e) : n;
                                t !== e && u(t)
                            } else o(n)
                        }, [l, e, o, u])]
                    }({
                        prop: r,
                        defaultProp: o,
                        onChange: l
                    });
                    return (0, y.jsx)(eR, {
                        scope: n,
                        triggerRef: u,
                        contentRef: c,
                        contentId: g(),
                        titleId: g(),
                        descriptionId: g(),
                        open: s,
                        onOpenChange: f,
                        onOpenToggle: a.useCallback(() => f(e => !e), [f]),
                        modal: i,
                        children: t
                    })
                };
            eL.displayName = eN;
            var eD = "DialogTrigger",
                eI = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = eT(eD, t), l = (0, s.e)(n, o.triggerRef);
                    return (0, y.jsx)(v.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": e1(o.open),
                        ...r,
                        ref: l,
                        onClick: c(e.onClick, o.onOpenToggle)
                    })
                });
            eI.displayName = eD;
            var e_ = "DialogPortal",
                [ez, eF] = eM(e_, {
                    forceMount: void 0
                }),
                eU = e => {
                    let {
                        __scopeDialog: n,
                        forceMount: t,
                        children: r,
                        container: o
                    } = e, l = eT(e_, n);
                    return (0, y.jsx)(ez, {
                        scope: n,
                        forceMount: t,
                        children: a.Children.map(r, e => (0, y.jsx)(D, {
                            present: t || l.open,
                            children: (0, y.jsx)(L, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            eU.displayName = e_;
            var eW = "DialogOverlay",
                eB = a.forwardRef((e, n) => {
                    let t = eF(eW, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        l = eT(eW, e.__scopeDialog);
                    return l.modal ? (0, y.jsx)(D, {
                        present: r || l.open,
                        children: (0, y.jsx)(eH, { ...o,
                            ref: n
                        })
                    }) : null
                });
            eB.displayName = eW;
            var eH = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = eT(eW, t);
                    return (0, y.jsx)(ew, {
                        as: ej.g7,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, y.jsx)(v.WV.div, {
                            "data-state": e1(o.open),
                            ...r,
                            ref: n,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                e$ = "DialogContent",
                eV = a.forwardRef((e, n) => {
                    let t = eF(e$, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        l = eT(e$, e.__scopeDialog);
                    return (0, y.jsx)(D, {
                        present: r || l.open,
                        children: l.modal ? (0, y.jsx)(eq, { ...o,
                            ref: n
                        }) : (0, y.jsx)(eK, { ...o,
                            ref: n
                        })
                    })
                });
            eV.displayName = e$;
            var eq = a.forwardRef((e, n) => {
                    let t = eT(e$, e.__scopeDialog),
                        r = a.useRef(null),
                        o = (0, s.e)(n, t.contentRef, r);
                    return a.useEffect(() => {
                        let e = r.current;
                        if (e) return eP(e)
                    }, []), (0, y.jsx)(eY, { ...e,
                        ref: o,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: c(e.onCloseAutoFocus, e => {
                            var n;
                            e.preventDefault(), null === (n = t.triggerRef.current) || void 0 === n || n.focus()
                        }),
                        onPointerDownOutside: c(e.onPointerDownOutside, e => {
                            let n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey;
                            (2 === n.button || t) && e.preventDefault()
                        }),
                        onFocusOutside: c(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                eK = a.forwardRef((e, n) => {
                    let t = eT(e$, e.__scopeDialog),
                        r = a.useRef(!1),
                        o = a.useRef(!1);
                    return (0, y.jsx)(eY, { ...e,
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: n => {
                            var l, i;
                            null === (l = e.onCloseAutoFocus) || void 0 === l || l.call(e, n), n.defaultPrevented || (r.current || null === (i = t.triggerRef.current) || void 0 === i || i.focus(), n.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: n => {
                            var l, i;
                            null === (l = e.onInteractOutside) || void 0 === l || l.call(e, n), n.defaultPrevented || (r.current = !0, "pointerdown" !== n.detail.originalEvent.type || (o.current = !0));
                            let a = n.target;
                            (null === (i = t.triggerRef.current) || void 0 === i ? void 0 : i.contains(a)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && o.current && n.preventDefault()
                        }
                    })
                }),
                eY = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: l,
                        ...i
                    } = e, u = eT(e$, t), c = a.useRef(null), f = (0, s.e)(n, c);
                    return a.useEffect(() => {
                        var e, n;
                        let t = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = t[0]) && void 0 !== e ? e : z()), document.body.insertAdjacentElement("beforeend", null !== (n = t[1]) && void 0 !== n ? n : z()), _++, () => {
                            1 === _ && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), _--
                        }
                    }, []), (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(P, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: l,
                            children: (0, y.jsx)(x, {
                                role: "dialog",
                                id: u.contentId,
                                "aria-describedby": u.descriptionId,
                                "aria-labelledby": u.titleId,
                                "data-state": e1(u.open),
                                ...i,
                                ref: f,
                                onDismiss: () => u.onOpenChange(!1)
                            })
                        }), (0, y.jsxs)(y.Fragment, {
                            children: [(0, y.jsx)(e9, {
                                titleId: u.titleId
                            }), (0, y.jsx)(e6, {
                                contentRef: c,
                                descriptionId: u.descriptionId
                            })]
                        })]
                    })
                }),
                eX = "DialogTitle",
                eG = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = eT(eX, t);
                    return (0, y.jsx)(v.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: n
                    })
                });
            eG.displayName = eX;
            var eJ = "DialogDescription",
                eZ = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = eT(eJ, t);
                    return (0, y.jsx)(v.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: n
                    })
                });
            eZ.displayName = eJ;
            var eQ = "DialogClose",
                e0 = a.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = eT(eQ, t);
                    return (0, y.jsx)(v.WV.button, {
                        type: "button",
                        ...r,
                        ref: n,
                        onClick: c(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function e1(e) {
                return e ? "open" : "closed"
            }
            e0.displayName = eQ;
            var e2 = "DialogTitleWarning",
                [e5, e3] = (0, f.k)(e2, {
                    contentName: e$,
                    titleName: eX,
                    docsSlug: "dialog"
                }),
                e9 = e => {
                    let {
                        titleId: n
                    } = e, t = e3(e2), r = "`".concat(t.contentName, "` requires a `").concat(t.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(t.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(t.docsSlug);
                    return a.useEffect(() => {
                        n && !document.getElementById(n) && console.error(r)
                    }, [r, n]), null
                },
                e6 = e => {
                    let {
                        contentRef: n,
                        descriptionId: t
                    } = e, r = e3("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                    return a.useEffect(() => {
                        var e;
                        let r = null === (e = n.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        t && r && !document.getElementById(t) && console.warn(o)
                    }, [o, n, t]), null
                },
                e4 = eL,
                e8 = eI,
                e7 = eU,
                ne = eB,
                nn = eV,
                nt = eG,
                nr = eZ,
                no = e0
        },
        66840: function(e, n, t) {
            t.d(n, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return u
                }
            });
            var r = t(20955),
                o = t(3190),
                l = t(37053),
                i = t(26705),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
                    let t = r.forwardRef((e, t) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, a = r ? l.g7 : n;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, { ...o,
                            ref: t
                        })
                    });
                    return t.displayName = `Primitive.${n}`, { ...e,
                        [n]: t
                    }
                }, {});

            function u(e, n) {
                e && o.flushSync(() => e.dispatchEvent(n))
            }
        },
        26606: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return o
                }
            });
            var r = t(20955);

            function o(e) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    n.current = e
                }), r.useMemo(() => (...e) => n.current ? .(...e), [])
            }
        },
        61188: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return o
                }
            });
            var r = t(20955),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        },
        3607: function(e, n, t) {
            t.d(n, {
                C: function() {
                    return i
                },
                N: function() {
                    return c
                }
            });
            var r = {
                    0: 8203,
                    1: 8204,
                    2: 8205,
                    3: 8290,
                    4: 8291,
                    5: 8288,
                    6: 65279,
                    7: 8289,
                    8: 119155,
                    9: 119156,
                    a: 119157,
                    b: 119158,
                    c: 119159,
                    d: 119160,
                    e: 119161,
                    f: 119162
                },
                o = {
                    0: 8203,
                    1: 8204,
                    2: 8205,
                    3: 65279
                },
                l = [, , , , ].fill(String.fromCodePoint(o[0])).join("");

            function i(e, n, t = "auto") {
                let r;
                return !0 === t || "auto" === t && (!(!Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e)) && Date.parse(e) || function(e) {
                    try {
                        new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
                    } catch {
                        return !1
                    }
                    return !0
                }(e)) ? e : `${e}${r=JSON.stringify(n),`${l}${Array.from(r).map(e=>{let n=e.charCodeAt(0);if(n>255)throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${r} on character ${e} (${n})`);return Array.from(n.toString(4).padStart(4,"0")).map(e=>String.fromCodePoint(o[e])).join("")}).join("")}`}`
            }
            Object.fromEntries(Object.entries(o).map(e => e.reverse())), Object.fromEntries(Object.entries(r).map(e => e.reverse()));
            var a = `${Object.values(r).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
                u = RegExp(`[${a}]{4,}`, "gu");

            function c(e) {
                var n, t;
                return e && JSON.parse({
                    cleaned: (n = JSON.stringify(e)).replace(u, ""),
                    encoded: (null == (t = n.match(u)) ? void 0 : t[0]) || ""
                }.cleaned)
            }
        },
        72105: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var r = t(99376);
            t(83079);
            var o = (0, t(12119).$)("6d69f692d78a8846fad1639385fd46ffd3739cd7"),
                l = t(20955);

            function i(e) {
                let n = e.indexOf("#"),
                    t = e.indexOf("?"),
                    r = t > -1 && (n < 0 || t < n);
                return r || n > -1 ? {
                    pathname: e.substring(0, r ? t : n),
                    query: r ? e.substring(t, n > -1 ? n : void 0) : "",
                    hash: n > -1 ? e.slice(n) : ""
                } : {
                    pathname: e,
                    query: "",
                    hash: ""
                }
            }

            function a(e, n) {
                if (! function(e, n) {
                        if ("string" != typeof e) return !1;
                        let {
                            pathname: t
                        } = i(e);
                        return t === n || t.startsWith("".concat(n, "/"))
                    }(e, n)) return e;
                let t = e.slice(n.length);
                return t.startsWith("/") ? t : "/".concat(t)
            }
            let u = (e, n) => {
                let {
                    pathname: t,
                    query: r,
                    hash: o
                } = i(e);
                return n ? t.endsWith("/") ? "".concat(t).concat(r).concat(o) : "".concat(t, "/").concat(r).concat(o) : "".concat(t.replace(/\/$/, "") || "/").concat(r).concat(o)
            };

            function c(e) {
                let {
                    refresh: n,
                    zIndex: c,
                    basePath: s = "",
                    trailingSlash: f = !1
                } = e, d = (0, r.useRouter)(), p = (0, l.useRef)(d), [h, g] = (0, l.useState)();
                (0, l.useEffect)(() => {
                    p.current = d
                }, [d]), (0, l.useEffect)(() => {
                    let e = function(e = {}) {
                            let n = new AbortController;
                            return Promise.all([t.e(1145), t.e(2539)]).then(t.bind(t, 95533)).then(({
                                renderVisualEditing: t
                            }) => {
                                let {
                                    signal: r
                                } = n;
                                r.aborted || t(r, e)
                            }), () => {
                                n.abort()
                            }
                        }({
                            zIndex: c,
                            refresh: n || (e => {
                                switch (e.source) {
                                    case "manual":
                                        return e.livePreviewEnabled ? r() : l();
                                    case "mutation":
                                        return e.livePreviewEnabled ? i() : u();
                                    default:
                                        throw Error("Unknown refresh source", {
                                            cause: e
                                        })
                                }
                            }),
                            history: {
                                subscribe: e => (g(() => e), () => g(void 0)),
                                update: e => {
                                    switch (e.type) {
                                        case "push":
                                            return p.current.push(a(e.url, s));
                                        case "pop":
                                            return p.current.back();
                                        case "replace":
                                            return p.current.replace(a(e.url, s));
                                        default:
                                            throw Error("Unknown update type: ".concat(e.type))
                                    }
                                }
                            }
                        }),
                        r = () => (console.debug("Live preview is setup, calling router.refresh() to refresh the server components without refetching cached data"), p.current.refresh(), Promise.resolve()),
                        l = () => (console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout"), o()),
                        i = () => (console.debug("Live preview is setup, mutation is skipped assuming its handled by the live preview"), !1),
                        u = () => (console.debug("No loaders in live mode detected, or preview kit setup, revalidating root layout"), o());
                    return () => e()
                }, [s, n, c]);
                let m = (0, r.usePathname)(),
                    v = (0, r.useSearchParams)();
                return (0, l.useEffect)(() => {
                    h && h({
                        type: "push",
                        url: u(function(e, n) {
                            if (!e.startsWith("/") || !n) return e;
                            if ("/" === e && n) return n;
                            let {
                                pathname: t,
                                query: r,
                                hash: o
                            } = i(e);
                            return "".concat(n).concat(t).concat(r).concat(o)
                        }("".concat(m).concat(null != v && v.size ? "?".concat(v) : ""), s), f)
                    })
                }, [s, h, m, v, f]), null
            }
        },
        46231: function(e, n, t) {
            t.d(n, {
                w_: function() {
                    return s
                }
            });
            var r = t(20955),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                l = r.createContext && r.createContext(o),
                i = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function c(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? u(Object(t), !0).forEach(function(n) {
                        var r, o;
                        r = n, o = t[n], (r = function(e) {
                            var n = function(e, n) {
                                if ("object" != typeof e || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var r = t.call(e, n || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === n ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof n ? n : n + ""
                        }(r)) in e ? Object.defineProperty(e, r, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[r] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    })
                }
                return e
            }

            function s(e) {
                return n => r.createElement(f, a({
                    attr: c({}, e.attr)
                }, n), function e(n) {
                    return n && n.map((n, t) => r.createElement(n.tag, c({
                        key: t
                    }, n.attr), e(n.child)))
                }(e.child))
            }

            function f(e) {
                var n = n => {
                    var t, {
                            attr: o,
                            size: l,
                            title: u
                        } = e,
                        s = function(e, n) {
                            if (null == e) return {};
                            var t, r, o = function(e, n) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                                        if (n.indexOf(r) >= 0) continue;
                                        t[r] = e[r]
                                    }
                                return t
                            }(e, n);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < l.length; r++) t = l[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                            }
                            return o
                        }(e, i),
                        f = l || n.size || "1em";
                    return n.className && (t = n.className), e.className && (t = (t ? t + " " : "") + e.className), r.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, n.attr, o, s, {
                        className: t,
                        style: c(c({
                            color: e.color || n.color
                        }, n.style), e.style),
                        height: f,
                        width: f,
                        xmlns: "http://www.w3.org/TR/SVG"
                    }), u && r.createElement("title", null, u), e.children)
                };
                return void 0 !== l ? r.createElement(l.Consumer, null, e => n(e)) : n(o)
            }
        },
        25158: function(e, n, t) {
            t.d(n, {
                iV: function() {
                    return eV
                },
                MP: function() {
                    return eK
                },
                HT: function() {
                    return eq
                }
            });
            var r = {};
            t.r(r), t.d(r, {
                boolean: function() {
                    return s
                },
                booleanish: function() {
                    return f
                },
                commaOrSpaceSeparated: function() {
                    return m
                },
                commaSeparated: function() {
                    return g
                },
                number: function() {
                    return p
                },
                overloadedBoolean: function() {
                    return d
                },
                spaceSeparated: function() {
                    return h
                }
            });
            var o = t(26705);
            class l {
                constructor(e, n, t) {
                    this.property = e, this.normal = n, t && (this.space = t)
                }
            }

            function i(e, n) {
                let t = {},
                    r = {},
                    o = -1;
                for (; ++o < e.length;) Object.assign(t, e[o].property), Object.assign(r, e[o].normal);
                return new l(t, r, n)
            }

            function a(e) {
                return e.toLowerCase()
            }
            l.prototype.property = {}, l.prototype.normal = {}, l.prototype.space = null;
            class u {
                constructor(e, n) {
                    this.property = e, this.attribute = n
                }
            }
            u.prototype.space = null, u.prototype.boolean = !1, u.prototype.booleanish = !1, u.prototype.overloadedBoolean = !1, u.prototype.number = !1, u.prototype.commaSeparated = !1, u.prototype.spaceSeparated = !1, u.prototype.commaOrSpaceSeparated = !1, u.prototype.mustUseProperty = !1, u.prototype.defined = !1;
            let c = 0,
                s = v(),
                f = v(),
                d = v(),
                p = v(),
                h = v(),
                g = v(),
                m = v();

            function v() {
                return 2 ** ++c
            }
            let y = Object.keys(r);
            class b extends u {
                constructor(e, n, t, o) {
                    var l, i;
                    let a = -1;
                    if (super(e, n), o && (this.space = o), "number" == typeof t)
                        for (; ++a < y.length;) {
                            let e = y[a];
                            l = y[a], (i = (t & r[e]) === r[e]) && (this[l] = i)
                        }
                }
            }
            b.prototype.defined = !0;
            let w = {}.hasOwnProperty;

            function x(e) {
                let n;
                let t = {},
                    r = {};
                for (n in e.properties)
                    if (w.call(e.properties, n)) {
                        let o = e.properties[n],
                            l = new b(n, e.transform(e.attributes || {}, n), o, e.space);
                        e.mustUseProperty && e.mustUseProperty.includes(n) && (l.mustUseProperty = !0), t[n] = l, r[a(n)] = n, r[a(l.attribute)] = n
                    }
                return new l(t, r, e.space)
            }
            let E = x({
                    space: "xlink",
                    transform: (e, n) => "xlink:" + n.slice(5).toLowerCase(),
                    properties: {
                        xLinkActuate: null,
                        xLinkArcRole: null,
                        xLinkHref: null,
                        xLinkRole: null,
                        xLinkShow: null,
                        xLinkTitle: null,
                        xLinkType: null
                    }
                }),
                S = x({
                    space: "xml",
                    transform: (e, n) => "xml:" + n.slice(3).toLowerCase(),
                    properties: {
                        xmlLang: null,
                        xmlBase: null,
                        xmlSpace: null
                    }
                });

            function O(e, n) {
                return n in e ? e[n] : n
            }

            function k(e, n) {
                return O(e, n.toLowerCase())
            }
            let C = x({
                    space: "xmlns",
                    attributes: {
                        xmlnsxlink: "xmlns:xlink"
                    },
                    transform: k,
                    properties: {
                        xmlns: null,
                        xmlnsXLink: null
                    }
                }),
                P = x({
                    transform: (e, n) => "role" === n ? n : "aria-" + n.slice(4).toLowerCase(),
                    properties: {
                        ariaActiveDescendant: null,
                        ariaAtomic: f,
                        ariaAutoComplete: null,
                        ariaBusy: f,
                        ariaChecked: f,
                        ariaColCount: p,
                        ariaColIndex: p,
                        ariaColSpan: p,
                        ariaControls: h,
                        ariaCurrent: null,
                        ariaDescribedBy: h,
                        ariaDetails: null,
                        ariaDisabled: f,
                        ariaDropEffect: h,
                        ariaErrorMessage: null,
                        ariaExpanded: f,
                        ariaFlowTo: h,
                        ariaGrabbed: f,
                        ariaHasPopup: null,
                        ariaHidden: f,
                        ariaInvalid: null,
                        ariaKeyShortcuts: null,
                        ariaLabel: null,
                        ariaLabelledBy: h,
                        ariaLevel: p,
                        ariaLive: null,
                        ariaModal: f,
                        ariaMultiLine: f,
                        ariaMultiSelectable: f,
                        ariaOrientation: null,
                        ariaOwns: h,
                        ariaPlaceholder: null,
                        ariaPosInSet: p,
                        ariaPressed: f,
                        ariaReadOnly: f,
                        ariaRelevant: null,
                        ariaRequired: f,
                        ariaRoleDescription: h,
                        ariaRowCount: p,
                        ariaRowIndex: p,
                        ariaRowSpan: p,
                        ariaSelected: f,
                        ariaSetSize: p,
                        ariaSort: null,
                        ariaValueMax: p,
                        ariaValueMin: p,
                        ariaValueNow: p,
                        ariaValueText: null,
                        role: null
                    }
                }),
                j = x({
                    space: "html",
                    attributes: {
                        acceptcharset: "accept-charset",
                        classname: "class",
                        htmlfor: "for",
                        httpequiv: "http-equiv"
                    },
                    transform: k,
                    mustUseProperty: ["checked", "multiple", "muted", "selected"],
                    properties: {
                        abbr: null,
                        accept: g,
                        acceptCharset: h,
                        accessKey: h,
                        action: null,
                        allow: null,
                        allowFullScreen: s,
                        allowPaymentRequest: s,
                        allowUserMedia: s,
                        alt: null,
                        as: null,
                        async: s,
                        autoCapitalize: null,
                        autoComplete: h,
                        autoFocus: s,
                        autoPlay: s,
                        blocking: h,
                        capture: null,
                        charSet: null,
                        checked: s,
                        cite: null,
                        className: h,
                        cols: p,
                        colSpan: null,
                        content: null,
                        contentEditable: f,
                        controls: s,
                        controlsList: h,
                        coords: p | g,
                        crossOrigin: null,
                        data: null,
                        dateTime: null,
                        decoding: null,
                        default: s,
                        defer: s,
                        dir: null,
                        dirName: null,
                        disabled: s,
                        download: d,
                        draggable: f,
                        encType: null,
                        enterKeyHint: null,
                        fetchPriority: null,
                        form: null,
                        formAction: null,
                        formEncType: null,
                        formMethod: null,
                        formNoValidate: s,
                        formTarget: null,
                        headers: h,
                        height: p,
                        hidden: s,
                        high: p,
                        href: null,
                        hrefLang: null,
                        htmlFor: h,
                        httpEquiv: h,
                        id: null,
                        imageSizes: null,
                        imageSrcSet: null,
                        inert: s,
                        inputMode: null,
                        integrity: null,
                        is: null,
                        isMap: s,
                        itemId: null,
                        itemProp: h,
                        itemRef: h,
                        itemScope: s,
                        itemType: h,
                        kind: null,
                        label: null,
                        lang: null,
                        language: null,
                        list: null,
                        loading: null,
                        loop: s,
                        low: p,
                        manifest: null,
                        max: null,
                        maxLength: p,
                        media: null,
                        method: null,
                        min: null,
                        minLength: p,
                        multiple: s,
                        muted: s,
                        name: null,
                        nonce: null,
                        noModule: s,
                        noValidate: s,
                        onAbort: null,
                        onAfterPrint: null,
                        onAuxClick: null,
                        onBeforeMatch: null,
                        onBeforePrint: null,
                        onBeforeToggle: null,
                        onBeforeUnload: null,
                        onBlur: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onContextLost: null,
                        onContextMenu: null,
                        onContextRestored: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFormData: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLanguageChange: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadEnd: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMessageError: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRejectionHandled: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onScrollEnd: null,
                        onSecurityPolicyViolation: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onSlotChange: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnhandledRejection: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onWheel: null,
                        open: s,
                        optimum: p,
                        pattern: null,
                        ping: h,
                        placeholder: null,
                        playsInline: s,
                        popover: null,
                        popoverTarget: null,
                        popoverTargetAction: null,
                        poster: null,
                        preload: null,
                        readOnly: s,
                        referrerPolicy: null,
                        rel: h,
                        required: s,
                        reversed: s,
                        rows: p,
                        rowSpan: p,
                        sandbox: h,
                        scope: null,
                        scoped: s,
                        seamless: s,
                        selected: s,
                        shadowRootClonable: s,
                        shadowRootDelegatesFocus: s,
                        shadowRootMode: null,
                        shape: null,
                        size: p,
                        sizes: null,
                        slot: null,
                        span: p,
                        spellCheck: f,
                        src: null,
                        srcDoc: null,
                        srcLang: null,
                        srcSet: null,
                        start: p,
                        step: null,
                        style: null,
                        tabIndex: p,
                        target: null,
                        title: null,
                        translate: null,
                        type: null,
                        typeMustMatch: s,
                        useMap: null,
                        value: f,
                        width: p,
                        wrap: null,
                        writingSuggestions: null,
                        align: null,
                        aLink: null,
                        archive: h,
                        axis: null,
                        background: null,
                        bgColor: null,
                        border: p,
                        borderColor: null,
                        bottomMargin: p,
                        cellPadding: null,
                        cellSpacing: null,
                        char: null,
                        charOff: null,
                        classId: null,
                        clear: null,
                        code: null,
                        codeBase: null,
                        codeType: null,
                        color: null,
                        compact: s,
                        declare: s,
                        event: null,
                        face: null,
                        frame: null,
                        frameBorder: null,
                        hSpace: p,
                        leftMargin: p,
                        link: null,
                        longDesc: null,
                        lowSrc: null,
                        marginHeight: p,
                        marginWidth: p,
                        noResize: s,
                        noHref: s,
                        noShade: s,
                        noWrap: s,
                        object: null,
                        profile: null,
                        prompt: null,
                        rev: null,
                        rightMargin: p,
                        rules: null,
                        scheme: null,
                        scrolling: f,
                        standby: null,
                        summary: null,
                        text: null,
                        topMargin: p,
                        valueType: null,
                        version: null,
                        vAlign: null,
                        vLink: null,
                        vSpace: p,
                        allowTransparency: null,
                        autoCorrect: null,
                        autoSave: null,
                        disablePictureInPicture: s,
                        disableRemotePlayback: s,
                        prefix: null,
                        property: null,
                        results: p,
                        security: null,
                        unselectable: null
                    }
                }),
                N = x({
                    space: "svg",
                    attributes: {
                        accentHeight: "accent-height",
                        alignmentBaseline: "alignment-baseline",
                        arabicForm: "arabic-form",
                        baselineShift: "baseline-shift",
                        capHeight: "cap-height",
                        className: "class",
                        clipPath: "clip-path",
                        clipRule: "clip-rule",
                        colorInterpolation: "color-interpolation",
                        colorInterpolationFilters: "color-interpolation-filters",
                        colorProfile: "color-profile",
                        colorRendering: "color-rendering",
                        crossOrigin: "crossorigin",
                        dataType: "datatype",
                        dominantBaseline: "dominant-baseline",
                        enableBackground: "enable-background",
                        fillOpacity: "fill-opacity",
                        fillRule: "fill-rule",
                        floodColor: "flood-color",
                        floodOpacity: "flood-opacity",
                        fontFamily: "font-family",
                        fontSize: "font-size",
                        fontSizeAdjust: "font-size-adjust",
                        fontStretch: "font-stretch",
                        fontStyle: "font-style",
                        fontVariant: "font-variant",
                        fontWeight: "font-weight",
                        glyphName: "glyph-name",
                        glyphOrientationHorizontal: "glyph-orientation-horizontal",
                        glyphOrientationVertical: "glyph-orientation-vertical",
                        hrefLang: "hreflang",
                        horizAdvX: "horiz-adv-x",
                        horizOriginX: "horiz-origin-x",
                        horizOriginY: "horiz-origin-y",
                        imageRendering: "image-rendering",
                        letterSpacing: "letter-spacing",
                        lightingColor: "lighting-color",
                        markerEnd: "marker-end",
                        markerMid: "marker-mid",
                        markerStart: "marker-start",
                        navDown: "nav-down",
                        navDownLeft: "nav-down-left",
                        navDownRight: "nav-down-right",
                        navLeft: "nav-left",
                        navNext: "nav-next",
                        navPrev: "nav-prev",
                        navRight: "nav-right",
                        navUp: "nav-up",
                        navUpLeft: "nav-up-left",
                        navUpRight: "nav-up-right",
                        onAbort: "onabort",
                        onActivate: "onactivate",
                        onAfterPrint: "onafterprint",
                        onBeforePrint: "onbeforeprint",
                        onBegin: "onbegin",
                        onCancel: "oncancel",
                        onCanPlay: "oncanplay",
                        onCanPlayThrough: "oncanplaythrough",
                        onChange: "onchange",
                        onClick: "onclick",
                        onClose: "onclose",
                        onCopy: "oncopy",
                        onCueChange: "oncuechange",
                        onCut: "oncut",
                        onDblClick: "ondblclick",
                        onDrag: "ondrag",
                        onDragEnd: "ondragend",
                        onDragEnter: "ondragenter",
                        onDragExit: "ondragexit",
                        onDragLeave: "ondragleave",
                        onDragOver: "ondragover",
                        onDragStart: "ondragstart",
                        onDrop: "ondrop",
                        onDurationChange: "ondurationchange",
                        onEmptied: "onemptied",
                        onEnd: "onend",
                        onEnded: "onended",
                        onError: "onerror",
                        onFocus: "onfocus",
                        onFocusIn: "onfocusin",
                        onFocusOut: "onfocusout",
                        onHashChange: "onhashchange",
                        onInput: "oninput",
                        onInvalid: "oninvalid",
                        onKeyDown: "onkeydown",
                        onKeyPress: "onkeypress",
                        onKeyUp: "onkeyup",
                        onLoad: "onload",
                        onLoadedData: "onloadeddata",
                        onLoadedMetadata: "onloadedmetadata",
                        onLoadStart: "onloadstart",
                        onMessage: "onmessage",
                        onMouseDown: "onmousedown",
                        onMouseEnter: "onmouseenter",
                        onMouseLeave: "onmouseleave",
                        onMouseMove: "onmousemove",
                        onMouseOut: "onmouseout",
                        onMouseOver: "onmouseover",
                        onMouseUp: "onmouseup",
                        onMouseWheel: "onmousewheel",
                        onOffline: "onoffline",
                        onOnline: "ononline",
                        onPageHide: "onpagehide",
                        onPageShow: "onpageshow",
                        onPaste: "onpaste",
                        onPause: "onpause",
                        onPlay: "onplay",
                        onPlaying: "onplaying",
                        onPopState: "onpopstate",
                        onProgress: "onprogress",
                        onRateChange: "onratechange",
                        onRepeat: "onrepeat",
                        onReset: "onreset",
                        onResize: "onresize",
                        onScroll: "onscroll",
                        onSeeked: "onseeked",
                        onSeeking: "onseeking",
                        onSelect: "onselect",
                        onShow: "onshow",
                        onStalled: "onstalled",
                        onStorage: "onstorage",
                        onSubmit: "onsubmit",
                        onSuspend: "onsuspend",
                        onTimeUpdate: "ontimeupdate",
                        onToggle: "ontoggle",
                        onUnload: "onunload",
                        onVolumeChange: "onvolumechange",
                        onWaiting: "onwaiting",
                        onZoom: "onzoom",
                        overlinePosition: "overline-position",
                        overlineThickness: "overline-thickness",
                        paintOrder: "paint-order",
                        panose1: "panose-1",
                        pointerEvents: "pointer-events",
                        referrerPolicy: "referrerpolicy",
                        renderingIntent: "rendering-intent",
                        shapeRendering: "shape-rendering",
                        stopColor: "stop-color",
                        stopOpacity: "stop-opacity",
                        strikethroughPosition: "strikethrough-position",
                        strikethroughThickness: "strikethrough-thickness",
                        strokeDashArray: "stroke-dasharray",
                        strokeDashOffset: "stroke-dashoffset",
                        strokeLineCap: "stroke-linecap",
                        strokeLineJoin: "stroke-linejoin",
                        strokeMiterLimit: "stroke-miterlimit",
                        strokeOpacity: "stroke-opacity",
                        strokeWidth: "stroke-width",
                        tabIndex: "tabindex",
                        textAnchor: "text-anchor",
                        textDecoration: "text-decoration",
                        textRendering: "text-rendering",
                        transformOrigin: "transform-origin",
                        typeOf: "typeof",
                        underlinePosition: "underline-position",
                        underlineThickness: "underline-thickness",
                        unicodeBidi: "unicode-bidi",
                        unicodeRange: "unicode-range",
                        unitsPerEm: "units-per-em",
                        vAlphabetic: "v-alphabetic",
                        vHanging: "v-hanging",
                        vIdeographic: "v-ideographic",
                        vMathematical: "v-mathematical",
                        vectorEffect: "vector-effect",
                        vertAdvY: "vert-adv-y",
                        vertOriginX: "vert-origin-x",
                        vertOriginY: "vert-origin-y",
                        wordSpacing: "word-spacing",
                        writingMode: "writing-mode",
                        xHeight: "x-height",
                        playbackOrder: "playbackorder",
                        timelineBegin: "timelinebegin"
                    },
                    transform: O,
                    properties: {
                        about: m,
                        accentHeight: p,
                        accumulate: null,
                        additive: null,
                        alignmentBaseline: null,
                        alphabetic: p,
                        amplitude: p,
                        arabicForm: null,
                        ascent: p,
                        attributeName: null,
                        attributeType: null,
                        azimuth: p,
                        bandwidth: null,
                        baselineShift: null,
                        baseFrequency: null,
                        baseProfile: null,
                        bbox: null,
                        begin: null,
                        bias: p,
                        by: null,
                        calcMode: null,
                        capHeight: p,
                        className: h,
                        clip: null,
                        clipPath: null,
                        clipPathUnits: null,
                        clipRule: null,
                        color: null,
                        colorInterpolation: null,
                        colorInterpolationFilters: null,
                        colorProfile: null,
                        colorRendering: null,
                        content: null,
                        contentScriptType: null,
                        contentStyleType: null,
                        crossOrigin: null,
                        cursor: null,
                        cx: null,
                        cy: null,
                        d: null,
                        dataType: null,
                        defaultAction: null,
                        descent: p,
                        diffuseConstant: p,
                        direction: null,
                        display: null,
                        dur: null,
                        divisor: p,
                        dominantBaseline: null,
                        download: s,
                        dx: null,
                        dy: null,
                        edgeMode: null,
                        editable: null,
                        elevation: p,
                        enableBackground: null,
                        end: null,
                        event: null,
                        exponent: p,
                        externalResourcesRequired: null,
                        fill: null,
                        fillOpacity: p,
                        fillRule: null,
                        filter: null,
                        filterRes: null,
                        filterUnits: null,
                        floodColor: null,
                        floodOpacity: null,
                        focusable: null,
                        focusHighlight: null,
                        fontFamily: null,
                        fontSize: null,
                        fontSizeAdjust: null,
                        fontStretch: null,
                        fontStyle: null,
                        fontVariant: null,
                        fontWeight: null,
                        format: null,
                        fr: null,
                        from: null,
                        fx: null,
                        fy: null,
                        g1: g,
                        g2: g,
                        glyphName: g,
                        glyphOrientationHorizontal: null,
                        glyphOrientationVertical: null,
                        glyphRef: null,
                        gradientTransform: null,
                        gradientUnits: null,
                        handler: null,
                        hanging: p,
                        hatchContentUnits: null,
                        hatchUnits: null,
                        height: null,
                        href: null,
                        hrefLang: null,
                        horizAdvX: p,
                        horizOriginX: p,
                        horizOriginY: p,
                        id: null,
                        ideographic: p,
                        imageRendering: null,
                        initialVisibility: null,
                        in: null,
                        in2: null,
                        intercept: p,
                        k: p,
                        k1: p,
                        k2: p,
                        k3: p,
                        k4: p,
                        kernelMatrix: m,
                        kernelUnitLength: null,
                        keyPoints: null,
                        keySplines: null,
                        keyTimes: null,
                        kerning: null,
                        lang: null,
                        lengthAdjust: null,
                        letterSpacing: null,
                        lightingColor: null,
                        limitingConeAngle: p,
                        local: null,
                        markerEnd: null,
                        markerMid: null,
                        markerStart: null,
                        markerHeight: null,
                        markerUnits: null,
                        markerWidth: null,
                        mask: null,
                        maskContentUnits: null,
                        maskUnits: null,
                        mathematical: null,
                        max: null,
                        media: null,
                        mediaCharacterEncoding: null,
                        mediaContentEncodings: null,
                        mediaSize: p,
                        mediaTime: null,
                        method: null,
                        min: null,
                        mode: null,
                        name: null,
                        navDown: null,
                        navDownLeft: null,
                        navDownRight: null,
                        navLeft: null,
                        navNext: null,
                        navPrev: null,
                        navRight: null,
                        navUp: null,
                        navUpLeft: null,
                        navUpRight: null,
                        numOctaves: null,
                        observer: null,
                        offset: null,
                        onAbort: null,
                        onActivate: null,
                        onAfterPrint: null,
                        onBeforePrint: null,
                        onBegin: null,
                        onCancel: null,
                        onCanPlay: null,
                        onCanPlayThrough: null,
                        onChange: null,
                        onClick: null,
                        onClose: null,
                        onCopy: null,
                        onCueChange: null,
                        onCut: null,
                        onDblClick: null,
                        onDrag: null,
                        onDragEnd: null,
                        onDragEnter: null,
                        onDragExit: null,
                        onDragLeave: null,
                        onDragOver: null,
                        onDragStart: null,
                        onDrop: null,
                        onDurationChange: null,
                        onEmptied: null,
                        onEnd: null,
                        onEnded: null,
                        onError: null,
                        onFocus: null,
                        onFocusIn: null,
                        onFocusOut: null,
                        onHashChange: null,
                        onInput: null,
                        onInvalid: null,
                        onKeyDown: null,
                        onKeyPress: null,
                        onKeyUp: null,
                        onLoad: null,
                        onLoadedData: null,
                        onLoadedMetadata: null,
                        onLoadStart: null,
                        onMessage: null,
                        onMouseDown: null,
                        onMouseEnter: null,
                        onMouseLeave: null,
                        onMouseMove: null,
                        onMouseOut: null,
                        onMouseOver: null,
                        onMouseUp: null,
                        onMouseWheel: null,
                        onOffline: null,
                        onOnline: null,
                        onPageHide: null,
                        onPageShow: null,
                        onPaste: null,
                        onPause: null,
                        onPlay: null,
                        onPlaying: null,
                        onPopState: null,
                        onProgress: null,
                        onRateChange: null,
                        onRepeat: null,
                        onReset: null,
                        onResize: null,
                        onScroll: null,
                        onSeeked: null,
                        onSeeking: null,
                        onSelect: null,
                        onShow: null,
                        onStalled: null,
                        onStorage: null,
                        onSubmit: null,
                        onSuspend: null,
                        onTimeUpdate: null,
                        onToggle: null,
                        onUnload: null,
                        onVolumeChange: null,
                        onWaiting: null,
                        onZoom: null,
                        opacity: null,
                        operator: null,
                        order: null,
                        orient: null,
                        orientation: null,
                        origin: null,
                        overflow: null,
                        overlay: null,
                        overlinePosition: p,
                        overlineThickness: p,
                        paintOrder: null,
                        panose1: null,
                        path: null,
                        pathLength: p,
                        patternContentUnits: null,
                        patternTransform: null,
                        patternUnits: null,
                        phase: null,
                        ping: h,
                        pitch: null,
                        playbackOrder: null,
                        pointerEvents: null,
                        points: null,
                        pointsAtX: p,
                        pointsAtY: p,
                        pointsAtZ: p,
                        preserveAlpha: null,
                        preserveAspectRatio: null,
                        primitiveUnits: null,
                        propagate: null,
                        property: m,
                        r: null,
                        radius: null,
                        referrerPolicy: null,
                        refX: null,
                        refY: null,
                        rel: m,
                        rev: m,
                        renderingIntent: null,
                        repeatCount: null,
                        repeatDur: null,
                        requiredExtensions: m,
                        requiredFeatures: m,
                        requiredFonts: m,
                        requiredFormats: m,
                        resource: null,
                        restart: null,
                        result: null,
                        rotate: null,
                        rx: null,
                        ry: null,
                        scale: null,
                        seed: null,
                        shapeRendering: null,
                        side: null,
                        slope: null,
                        snapshotTime: null,
                        specularConstant: p,
                        specularExponent: p,
                        spreadMethod: null,
                        spacing: null,
                        startOffset: null,
                        stdDeviation: null,
                        stemh: null,
                        stemv: null,
                        stitchTiles: null,
                        stopColor: null,
                        stopOpacity: null,
                        strikethroughPosition: p,
                        strikethroughThickness: p,
                        string: null,
                        stroke: null,
                        strokeDashArray: m,
                        strokeDashOffset: null,
                        strokeLineCap: null,
                        strokeLineJoin: null,
                        strokeMiterLimit: p,
                        strokeOpacity: p,
                        strokeWidth: null,
                        style: null,
                        surfaceScale: p,
                        syncBehavior: null,
                        syncBehaviorDefault: null,
                        syncMaster: null,
                        syncTolerance: null,
                        syncToleranceDefault: null,
                        systemLanguage: m,
                        tabIndex: p,
                        tableValues: null,
                        target: null,
                        targetX: p,
                        targetY: p,
                        textAnchor: null,
                        textDecoration: null,
                        textRendering: null,
                        textLength: null,
                        timelineBegin: null,
                        title: null,
                        transformBehavior: null,
                        type: null,
                        typeOf: m,
                        to: null,
                        transform: null,
                        transformOrigin: null,
                        u1: null,
                        u2: null,
                        underlinePosition: p,
                        underlineThickness: p,
                        unicode: null,
                        unicodeBidi: null,
                        unicodeRange: null,
                        unitsPerEm: p,
                        values: null,
                        vAlphabetic: p,
                        vMathematical: p,
                        vectorEffect: null,
                        vHanging: p,
                        vIdeographic: p,
                        version: null,
                        vertAdvY: p,
                        vertOriginX: p,
                        vertOriginY: p,
                        viewBox: null,
                        viewTarget: null,
                        visibility: null,
                        width: null,
                        widths: null,
                        wordSpacing: null,
                        writingMode: null,
                        x: null,
                        x1: null,
                        x2: null,
                        xChannelSelector: null,
                        xHeight: p,
                        y: null,
                        y1: null,
                        y2: null,
                        yChannelSelector: null,
                        z: null,
                        zoomAndPan: null
                    }
                }),
                M = i([S, E, C, P, j], "html");
            i([S, E, C, P, N], "svg");
            let A = /^data[-\w.:]+$/i,
                R = /-[a-z]/g,
                T = /[A-Z]/g;

            function L(e) {
                return "-" + e.toLowerCase()
            }

            function D(e) {
                return e.charAt(1).toUpperCase()
            }
            let I = /[#.]/g;

            function _(e) {
                let n = String(e || "").trim();
                return n ? n.split(/[ \t\n\r\f]+/g) : []
            }

            function z(e) {
                let n = [],
                    t = String(e || ""),
                    r = t.indexOf(","),
                    o = 0,
                    l = !1;
                for (; !l;) {
                    -1 === r && (r = t.length, l = !0);
                    let e = t.slice(o, r).trim();
                    (e || !l) && n.push(e), o = r + 1, r = t.indexOf(",", o)
                }
                return n
            }
            let F = new Set(["menu", "submit", "reset", "button"]),
                U = {}.hasOwnProperty;

            function W(e, n, t) {
                if ("string" == typeof t) {
                    if (e.number && t && !Number.isNaN(Number(t))) return Number(t);
                    if ((e.boolean || e.overloadedBoolean) && ("" === t || a(t) === a(n))) return !0
                }
                return t
            }
            let B = function(e, n, t) {
                    let r = void 0;
                    return function(n, t, ...o) {
                        let l, i = -1;
                        if (null == n) l = {
                            type: "root",
                            children: []
                        }, o.unshift(t);
                        else {
                            var c;
                            if ((l = function(e, n) {
                                    let t, r;
                                    let o = e || "",
                                        l = {},
                                        i = 0;
                                    for (; i < o.length;) {
                                        I.lastIndex = i;
                                        let e = I.exec(o),
                                            n = o.slice(i, e ? e.index : o.length);
                                        n && (t ? "#" === t ? l.id = n : Array.isArray(l.className) ? l.className.push(n) : l.className = [n] : r = n, i += n.length), e && (t = e[0], i++)
                                    }
                                    return {
                                        type: "element",
                                        tagName: r || "div",
                                        properties: l,
                                        children: []
                                    }
                                }(n, 0)).tagName = l.tagName.toLowerCase(), r && U.call(r, l.tagName) && (l.tagName = r[l.tagName]), c = l.tagName, !(null == t || "object" != typeof t || Array.isArray(t)) && ("input" === c || !t.type || "string" != typeof t.type || !("children" in t && Array.isArray(t.children)) && ("button" === c ? F.has(t.type.toLowerCase()) : !("value" in t)))) {
                                let n;
                                for (n in t) U.call(t, n) && function(e, n, t, r) {
                                    let o;
                                    let l = function(e, n) {
                                            let t = a(n),
                                                r = n,
                                                o = u;
                                            if (t in e.normal) return e.property[e.normal[t]];
                                            if (t.length > 4 && "data" === t.slice(0, 4) && A.test(n)) {
                                                if ("-" === n.charAt(4)) {
                                                    let e = n.slice(5).replace(R, D);
                                                    r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                                                } else {
                                                    let e = n.slice(4);
                                                    if (!R.test(e)) {
                                                        let t = e.replace(T, L);
                                                        "-" !== t.charAt(0) && (t = "-" + t), n = "data" + t
                                                    }
                                                }
                                                o = b
                                            }
                                            return new o(r, n)
                                        }(e, t),
                                        i = -1;
                                    if (null != r) {
                                        if ("number" == typeof r) {
                                            if (Number.isNaN(r)) return;
                                            o = r
                                        } else o = "boolean" == typeof r ? r : "string" == typeof r ? l.spaceSeparated ? _(r) : l.commaSeparated ? z(r) : l.commaOrSpaceSeparated ? _(z(r).join(" ")) : W(l, l.property, r) : Array.isArray(r) ? r.concat() : "style" === l.property ? function(e) {
                                            let n;
                                            let t = [];
                                            for (n in e) U.call(e, n) && t.push([n, e[n]].join(": "));
                                            return t.join("; ")
                                        }(r) : String(r);
                                        if (Array.isArray(o)) {
                                            let e = [];
                                            for (; ++i < o.length;) e[i] = W(l, l.property, o[i]);
                                            o = e
                                        }
                                        "className" === l.property && Array.isArray(n.className) && (o = n.className.concat(o)), n[l.property] = o
                                    }
                                }(e, l.properties, n, t[n])
                            } else o.unshift(t)
                        }
                        for (; ++i < o.length;) ! function e(n, t) {
                            let r = -1;
                            if (null == t);
                            else if ("string" == typeof t || "number" == typeof t) n.push({
                                type: "text",
                                value: String(t)
                            });
                            else if (Array.isArray(t))
                                for (; ++r < t.length;) e(n, t[r]);
                            else if ("object" == typeof t && "type" in t) "root" === t.type ? e(n, t.children) : n.push(t);
                            else throw Error("Expected node, nodes, or string, got `" + t + "`")
                        }(l.children, o[i]);
                        return "element" === l.type && "template" === l.tagName && (l.content = {
                            type: "root",
                            children: l.children
                        }, l.children = []), l
                    }
                }(M, 0),
                H = ["AElig", "AMP", "Aacute", "Acirc", "Agrave", "Aring", "Atilde", "Auml", "COPY", "Ccedil", "ETH", "Eacute", "Ecirc", "Egrave", "Euml", "GT", "Iacute", "Icirc", "Igrave", "Iuml", "LT", "Ntilde", "Oacute", "Ocirc", "Ograve", "Oslash", "Otilde", "Ouml", "QUOT", "REG", "THORN", "Uacute", "Ucirc", "Ugrave", "Uuml", "Yacute", "aacute", "acirc", "acute", "aelig", "agrave", "amp", "aring", "atilde", "auml", "brvbar", "ccedil", "cedil", "cent", "copy", "curren", "deg", "divide", "eacute", "ecirc", "egrave", "eth", "euml", "frac12", "frac14", "frac34", "gt", "iacute", "icirc", "iexcl", "igrave", "iquest", "iuml", "laquo", "lt", "macr", "micro", "middot", "nbsp", "not", "ntilde", "oacute", "ocirc", "ograve", "ordf", "ordm", "oslash", "otilde", "ouml", "para", "plusmn", "pound", "quot", "raquo", "reg", "sect", "shy", "sup1", "sup2", "sup3", "szlig", "thorn", "times", "uacute", "ucirc", "ugrave", "uml", "uuml", "yacute", "yen", "yuml"],
                $ = {
                    0: "�",
                    128: "€",
                    130: "‚",
                    131: "ƒ",
                    132: "„",
                    133: "…",
                    134: "†",
                    135: "‡",
                    136: "ˆ",
                    137: "‰",
                    138: "Š",
                    139: "‹",
                    140: "Œ",
                    142: "Ž",
                    145: "‘",
                    146: "’",
                    147: "“",
                    148: "”",
                    149: "•",
                    150: "–",
                    151: "—",
                    152: "˜",
                    153: "™",
                    154: "š",
                    155: "›",
                    156: "œ",
                    158: "ž",
                    159: "Ÿ"
                };

            function V(e) {
                let n = "string" == typeof e ? e.charCodeAt(0) : e;
                return n >= 48 && n <= 57
            }

            function q(e) {
                let n = "string" == typeof e ? e.charCodeAt(0) : e;
                return n >= 97 && n <= 102 || n >= 65 && n <= 70 || n >= 48 && n <= 57
            }

            function K(e) {
                return function(e) {
                    let n = "string" == typeof e ? e.charCodeAt(0) : e;
                    return n >= 97 && n <= 122 || n >= 65 && n <= 90
                }(e) || V(e)
            }
            let Y = document.createElement("i");

            function X(e) {
                let n = "&" + e + ";";
                Y.innerHTML = n;
                let t = Y.textContent;
                return (59 !== t.charCodeAt(t.length - 1) || "semi" === e) && t !== n && t
            }
            let G = String.fromCharCode,
                J = ["", "Named character references must be terminated by a semicolon", "Numeric character references must be terminated by a semicolon", "Named character references cannot be empty", "Numeric character references cannot be empty", "Named character references must be known", "Numeric character references cannot be disallowed", "Numeric character references cannot be outside the permissible Unicode range"];
            var Z = 0,
                Q = {},
                ee = {
                    util: {
                        type: function(e) {
                            return Object.prototype.toString.call(e).slice(8, -1)
                        },
                        objId: function(e) {
                            return e.__id || Object.defineProperty(e, "__id", {
                                value: ++Z
                            }), e.__id
                        },
                        clone: function e(n, t) {
                            var r, o;
                            switch (t = t || {}, ee.util.type(n)) {
                                case "Object":
                                    if (t[o = ee.util.objId(n)]) return t[o];
                                    for (var l in r = {}, t[o] = r, n) n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                    return r;
                                case "Array":
                                    if (t[o = ee.util.objId(n)]) return t[o];
                                    return r = [], t[o] = r, n.forEach(function(n, o) {
                                        r[o] = e(n, t)
                                    }), r;
                                default:
                                    return n
                            }
                        }
                    },
                    languages: {
                        plain: Q,
                        plaintext: Q,
                        text: Q,
                        txt: Q,
                        extend: function(e, n) {
                            var t = ee.util.clone(ee.languages[e]);
                            for (var r in n) t[r] = n[r];
                            return t
                        },
                        insertBefore: function(e, n, t, r) {
                            var o = (r = r || ee.languages)[e],
                                l = {};
                            for (var i in o)
                                if (o.hasOwnProperty(i)) {
                                    if (i == n)
                                        for (var a in t) t.hasOwnProperty(a) && (l[a] = t[a]);
                                    t.hasOwnProperty(i) || (l[i] = o[i])
                                }
                            var u = r[e];
                            return r[e] = l, ee.languages.DFS(ee.languages, function(n, t) {
                                t === u && n != e && (this[n] = l)
                            }), l
                        },
                        DFS: function e(n, t, r, o) {
                            o = o || {};
                            var l = ee.util.objId;
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    t.call(n, i, n[i], r || i);
                                    var a = n[i],
                                        u = ee.util.type(a);
                                    "Object" !== u || o[l(a)] ? "Array" !== u || o[l(a)] || (o[l(a)] = !0, e(a, t, i, o)) : (o[l(a)] = !0, e(a, t, null, o))
                                }
                        }
                    },
                    plugins: {},
                    highlight: function(e, n, t) {
                        var r = {
                            code: e,
                            grammar: n,
                            language: t
                        };
                        if (ee.hooks.run("before-tokenize", r), !r.grammar) throw Error('The language "' + r.language + '" has no grammar.');
                        return r.tokens = ee.tokenize(r.code, r.grammar), ee.hooks.run("after-tokenize", r), en.stringify(ee.util.encode(r.tokens), r.language)
                    },
                    tokenize: function(e, n) {
                        var t = n.rest;
                        if (t) {
                            for (var r in t) n[r] = t[r];
                            delete n.rest
                        }
                        var o = new er;
                        return eo(o, o.head, e),
                            function e(n, t, r, o, l, i) {
                                for (var a in r)
                                    if (r.hasOwnProperty(a) && r[a]) {
                                        var u = r[a];
                                        u = Array.isArray(u) ? u : [u];
                                        for (var c = 0; c < u.length; ++c) {
                                            if (i && i.cause == a + "," + c) return;
                                            var s = u[c],
                                                f = s.inside,
                                                d = !!s.lookbehind,
                                                p = !!s.greedy,
                                                h = s.alias;
                                            if (p && !s.pattern.global) {
                                                var g = s.pattern.toString().match(/[imsuy]*$/)[0];
                                                s.pattern = RegExp(s.pattern.source, g + "g")
                                            }
                                            for (var m = s.pattern || s, v = o.next, y = l; v !== t.tail && (!i || !(y >= i.reach)); y += v.value.length, v = v.next) {
                                                var b, w = v.value;
                                                if (t.length > n.length) return;
                                                if (!(w instanceof en)) {
                                                    var x = 1;
                                                    if (p) {
                                                        if (!(b = et(m, y, n, d)) || b.index >= n.length) break;
                                                        var E = b.index,
                                                            S = b.index + b[0].length,
                                                            O = y;
                                                        for (O += v.value.length; E >= O;) O += (v = v.next).value.length;
                                                        if (O -= v.value.length, y = O, v.value instanceof en) continue;
                                                        for (var k = v; k !== t.tail && (O < S || "string" == typeof k.value); k = k.next) x++, O += k.value.length;
                                                        x--, w = n.slice(y, O), b.index -= y
                                                    } else if (!(b = et(m, 0, w, d))) continue;
                                                    var E = b.index,
                                                        C = b[0],
                                                        P = w.slice(0, E),
                                                        j = w.slice(E + C.length),
                                                        N = y + w.length;
                                                    i && N > i.reach && (i.reach = N);
                                                    var M = v.prev;
                                                    if (P && (M = eo(t, M, P), y += P.length), function(e, n, t) {
                                                            for (var r = n.next, o = 0; o < t && r !== e.tail; o++) r = r.next;
                                                            n.next = r, r.prev = n, e.length -= o
                                                        }(t, M, x), v = eo(t, M, new en(a, f ? ee.tokenize(C, f) : C, h, C)), j && eo(t, v, j), x > 1) {
                                                        var A = {
                                                            cause: a + "," + c,
                                                            reach: N
                                                        };
                                                        e(n, t, r, v.prev, y, A), i && A.reach > i.reach && (i.reach = A.reach)
                                                    }
                                                }
                                            }
                                        }
                                    }
                            }(e, o, n, o.head, 0),
                            function(e) {
                                for (var n = [], t = e.head.next; t !== e.tail;) n.push(t.value), t = t.next;
                                return n
                            }(o)
                    },
                    hooks: {
                        all: {},
                        add: function(e, n) {
                            var t = ee.hooks.all;
                            t[e] = t[e] || [], t[e].push(n)
                        },
                        run: function(e, n) {
                            var t = ee.hooks.all[e];
                            if (t && t.length)
                                for (var r, o = 0; r = t[o++];) r(n)
                        }
                    },
                    Token: en
                };

            function en(e, n, t, r) {
                this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length
            }

            function et(e, n, t, r) {
                e.lastIndex = n;
                var o = e.exec(t);
                if (o && r && o[1]) {
                    var l = o[1].length;
                    o.index += l, o[0] = o[0].slice(l)
                }
                return o
            }

            function er() {
                var e = {
                        value: null,
                        prev: null,
                        next: null
                    },
                    n = {
                        value: null,
                        prev: e,
                        next: null
                    };
                e.next = n, this.head = e, this.tail = n, this.length = 0
            }

            function eo(e, n, t) {
                var r = n.next,
                    o = {
                        value: t,
                        prev: n,
                        next: r
                    };
                return n.next = o, r.prev = o, e.length++, o
            }
            let el = {}.hasOwnProperty;

            function ei() {}
            ei.prototype = ee;
            let ea = new ei;
            ea.highlight = function(e, n) {
                let t, r;
                if ("string" != typeof e) throw TypeError("Expected `string` for `value`, got `" + e + "`");
                if (n && "object" == typeof n) t = n;
                else {
                    if ("string" != typeof(r = n)) throw TypeError("Expected `string` for `name`, got `" + r + "`");
                    if (el.call(ea.languages, r)) t = ea.languages[r];
                    else throw Error("Unknown language: `" + r + "` is not registered")
                }
                return {
                    type: "root",
                    children: ee.highlight.call(ea, e, t, r)
                }
            }, ea.register = function(e) {
                if ("function" != typeof e || !e.displayName) throw Error("Expected `function` for `syntax`, got `" + e + "`");
                el.call(ea.languages, e.displayName) || e(ea)
            }, ea.alias = function(e, n) {
                let t;
                let r = ea.languages,
                    o = {};
                for (t in "string" == typeof e ? n && (o[e] = n) : o = e, o)
                    if (el.call(o, t)) {
                        let e = o[t],
                            n = "string" == typeof e ? [e] : e,
                            l = -1;
                        for (; ++l < n.length;) r[n[l]] = r[t]
                    }
            }, ea.registered = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `string` for `aliasOrLanguage`, got `" + e + "`");
                return el.call(ea.languages, e)
            }, ea.listLanguages = function() {
                let e;
                let n = ea.languages,
                    t = [];
                for (e in n) el.call(n, e) && "object" == typeof n[e] && t.push(e);
                return t
            }, ea.util.encode = function(e) {
                return e
            }, ea.Token.stringify = function e(n, t) {
                if ("string" == typeof n) return {
                    type: "text",
                    value: n
                };
                if (Array.isArray(n)) {
                    let r = [],
                        o = -1;
                    for (; ++o < n.length;) "" !== n[o] && null !== n[o] && void 0 !== n[o] && r.push(e(n[o], t));
                    return r
                }
                let r = {
                    type: n.type,
                    content: e(n.content, t),
                    tag: "span",
                    classes: ["token", n.type],
                    attributes: {},
                    language: t
                };
                return n.alias && r.classes.push(..."string" == typeof n.alias ? [n.alias] : n.alias), ea.hooks.run("wrap", r), B(r.tag + "." + r.classes.join("."), function(e) {
                    let n;
                    for (n in e) el.call(e, n) && (e[n] = function(e, n = {}) {
                        let t, r, o;
                        let l = "string" == typeof n.additional ? n.additional.charCodeAt(0) : n.additional,
                            i = [],
                            a = 0,
                            u = -1,
                            c = "";
                        n.position && ("start" in n.position || "indent" in n.position ? (r = n.position.indent, t = n.position.start) : t = n.position);
                        let s = (t ? t.line : 0) || 1,
                            f = (t ? t.column : 0) || 1,
                            d = g();
                        for (a--; ++a <= e.length;)
                            if (10 === o && (f = (r ? r[u] : 0) || 1), 38 === (o = e.charCodeAt(a))) {
                                let t;
                                let r = e.charCodeAt(a + 1);
                                if (9 === r || 10 === r || 12 === r || 32 === r || 38 === r || 60 === r || Number.isNaN(r) || l && r === l) {
                                    c += G(o), f++;
                                    continue
                                }
                                let u = a + 1,
                                    s = u,
                                    y = u;
                                if (35 === r) {
                                    y = ++s;
                                    let n = e.charCodeAt(y);
                                    88 === n || 120 === n ? (t = "hexadecimal", y = ++s) : t = "decimal"
                                } else t = "named";
                                let b = "",
                                    w = "",
                                    x = "",
                                    E = "named" === t ? K : "decimal" === t ? V : q;
                                for (y--; ++y <= e.length;) {
                                    let n = e.charCodeAt(y);
                                    if (!E(n)) break;
                                    x += G(n), "named" === t && H.includes(x) && (b = x, w = X(x))
                                }
                                let S = 59 === e.charCodeAt(y);
                                if (S) {
                                    y++;
                                    let e = "named" === t && X(x);
                                    e && (b = x, w = e)
                                }
                                let O = 1 + y - u,
                                    k = "";
                                if (S || !1 !== n.nonTerminated) {
                                    if (x) {
                                        if ("named" === t) {
                                            if (S && !w) m(5, 1);
                                            else if (b !== x && (O = 1 + (y = s + b.length) - s, S = !1), !S) {
                                                let t = b ? 1 : 3;
                                                if (n.attribute) {
                                                    let n = e.charCodeAt(y);
                                                    61 === n ? (m(t, O), w = "") : K(n) ? w = "" : m(t, O)
                                                } else m(t, O)
                                            }
                                            k = w
                                        } else {
                                            var p, h;
                                            S || m(2, O);
                                            let e = Number.parseInt(x, "hexadecimal" === t ? 16 : 10);
                                            if ((p = e) >= 55296 && p <= 57343 || p > 1114111) m(7, O), k = G(65533);
                                            else if (e in $) m(6, O), k = $[e];
                                            else {
                                                let n = "";
                                                ((h = e) >= 1 && h <= 8 || 11 === h || h >= 13 && h <= 31 || h >= 127 && h <= 159 || h >= 64976 && h <= 65007 || (65535 & h) == 65535 || (65535 & h) == 65534) && m(6, O), e > 65535 && (e -= 65536, n += G(e >>> 10 | 55296), e = 56320 | 1023 & e), k = n + G(e)
                                            }
                                        }
                                    } else "named" !== t && m(4, O)
                                }
                                if (k) {
                                    v(), d = g(), a = y - 1, f += y - u + 1, i.push(k);
                                    let t = g();
                                    t.offset++, n.reference && n.reference.call(n.referenceContext, k, {
                                        start: d,
                                        end: t
                                    }, e.slice(u - 1, y)), d = t
                                } else x = e.slice(u - 1, y), c += x, f += x.length, a = y - 1
                            } else 10 === o && (s++, u++, f = 0), Number.isNaN(o) ? v() : (c += G(o), f++);
                        return i.join("");

                        function g() {
                            return {
                                line: s,
                                column: f,
                                offset: a + ((t ? t.offset : 0) || 0)
                            }
                        }

                        function m(e, t) {
                            let r;
                            n.warning && (r = g(), r.column += t, r.offset += t, n.warning.call(n.warningContext, J[e], r, e))
                        }

                        function v() {
                            c && (i.push(c), n.text && n.text.call(n.textContext, c, {
                                start: d,
                                end: g()
                            }), c = "")
                        }
                    }(e[n]));
                    return e
                }(r.attributes), r.content)
            };
            let eu = function(e) {
                if (null == e) return es;
                if ("function" == typeof e) return ec(e);
                if ("object" == typeof e) return Array.isArray(e) ? function(e) {
                    let n = [],
                        t = -1;
                    for (; ++t < e.length;) n[t] = eu(e[t]);
                    return ec(function(...e) {
                        let t = -1;
                        for (; ++t < n.length;)
                            if (n[t].apply(this, e)) return !0;
                        return !1
                    })
                }(e) : ec(function(n) {
                    let t;
                    for (t in e)
                        if (n[t] !== e[t]) return !1;
                    return !0
                });
                if ("string" == typeof e) return ec(function(n) {
                    return n && n.type === e
                });
                throw Error("Expected function, string, or object as test")
            };

            function ec(e) {
                return function(n, t, r) {
                    var o;
                    return !!(null !== (o = n) && "object" == typeof o && "type" in o && e.call(this, n, "number" == typeof t ? t : void 0, r || void 0))
                }
            }

            function es() {
                return !0
            }
            let ef = {}.hasOwnProperty,
                ed = [];

            function ep(e, n, t, r) {
                let o;
                "function" == typeof n && "function" != typeof t ? (r = t, t = n) : o = n;
                let l = eu(o),
                    i = r ? -1 : 1;
                (function e(o, a, u) {
                    let c = o && "object" == typeof o ? o : {};
                    if ("string" == typeof c.type) {
                        let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
                        Object.defineProperty(s, "name", {
                            value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")"
                        })
                    }
                    return s;

                    function s() {
                        var c;
                        let s, f, d, p = ed;
                        if ((!n || l(o, a, u[u.length - 1] || void 0)) && !1 === (p = Array.isArray(c = t(o, u)) ? c : "number" == typeof c ? [!0, c] : null == c ? ed : [c])[0]) return p;
                        if ("children" in o && o.children && o.children && "skip" !== p[0])
                            for (f = (r ? o.children.length : -1) + i, d = u.concat(o); f > -1 && f < o.children.length;) {
                                if (!1 === (s = e(o.children[f], f, d)())[0]) return s;
                                f = "number" == typeof s[1] ? s[1] : f + i
                            }
                        return p
                    }
                })(e, void 0, [])()
            }
            var eh = t(20955),
                eg = Object.defineProperty,
                em = Object.defineProperties,
                ev = Object.getOwnPropertyDescriptors,
                ey = Object.getOwnPropertySymbols,
                eb = Object.prototype.hasOwnProperty,
                ew = Object.prototype.propertyIsEnumerable,
                ex = (e, n, t) => n in e ? eg(e, n, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[n] = t,
                eE = (e, n) => {
                    for (var t in n || (n = {})) eb.call(n, t) && ex(e, t, n[t]);
                    if (ey)
                        for (var t of ey(n)) ew.call(n, t) && ex(e, t, n[t]);
                    return e
                },
                eS = (e, n) => em(e, ev(n));

            function eO(e, n = 1) {
                return e.data && "number" == typeof e.data.lineStart ? e.data.lineStart : n
            }

            function ek(e, n = 1) {
                return e.data && "number" == typeof e.data.lineEnd ? e.data.lineEnd : n
            }

            function eC(e, n, t) {
                return e.data || (e.data = {}), e.data.lineStart = n, e.data.lineEnd = t, e
            }
            var eP = Object.defineProperty,
                ej = Object.defineProperties,
                eN = Object.getOwnPropertyDescriptors,
                eM = Object.getOwnPropertySymbols,
                eA = Object.prototype.hasOwnProperty,
                eR = Object.prototype.propertyIsEnumerable,
                eT = (e, n, t) => n in e ? eP(e, n, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[n] = t,
                eL = (e, n) => {
                    for (var t in n || (n = {})) eA.call(n, t) && eT(e, t, n[t]);
                    if (eM)
                        for (var t of eM(n)) eR.call(n, t) && eT(e, t, n[t]);
                    return e
                },
                eD = (e, n) => ej(e, eN(n)),
                eI = Object.defineProperty,
                e_ = Object.defineProperties,
                ez = Object.getOwnPropertyDescriptors,
                eF = Object.getOwnPropertySymbols,
                eU = Object.prototype.hasOwnProperty,
                eW = Object.prototype.propertyIsEnumerable,
                eB = (e, n, t) => n in e ? eI(e, n, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[n] = t,
                eH = (e, n) => {
                    for (var t in n || (n = {})) eU.call(n, t) && eB(e, t, n[t]);
                    if (eF)
                        for (var t of eF(n)) eW.call(n, t) && eB(e, t, n[t]);
                    return e
                },
                e$ = (e, n) => e_(e, ez(n));

            function eV(e) {
                let n = e.className || "refractor",
                    t = `language-${e.language}`,
                    r = {
                        className: t
                    },
                    l = [n, t].filter(Boolean).join(" ");
                if (e.inline && (r.style = {
                        display: "inline"
                    }, r.className = n), e.plainText) {
                    let n = (0, o.jsx)("code", e$(eH({}, r), {
                        children: e.value
                    }));
                    return e.inline ? n : (0, o.jsx)("pre", {
                        className: l,
                        children: n
                    })
                }
                let i = ea.highlight(e.value, e.language);
                e.markers && e.markers.length > 0 && (i = function(e, n) {
                    let t = n.markers.map(e => "number" == typeof e ? {
                            line: e
                        } : e).sort((e, n) => e.line - n.line),
                        r = function e(n, t = {
                            lineNumber: 1
                        }) {
                            return n.reduce((n, r) => {
                                let o = t.lineNumber;
                                if ("text" === r.type) {
                                    if (-1 === r.value.indexOf(`
`)) return eC(r, o, o), n.nodes.push(r), n;
                                    let e = r.value.split(`
`);
                                    for (let r = 0; r < e.length; r++) {
                                        let o = 0 === r ? t.lineNumber : ++t.lineNumber;
                                        n.nodes.push(eC({
                                            type: "text",
                                            value: r === e.length - 1 ? e[r] : `${e[r]}
`
                                        }, o, o))
                                    }
                                    return n.lineNumber = t.lineNumber, n
                                }
                                if (r.children) {
                                    let l = e(r.children, t),
                                        i = l.nodes[0],
                                        a = l.nodes[l.nodes.length - 1];
                                    return eC(r, i ? eO(i, o) : o, a ? ek(a, o) : o), r.children = l.nodes, n.lineNumber = l.lineNumber, n.nodes.push(r), n
                                }
                                return n.nodes.push(r), n
                            }, {
                                nodes: [],
                                lineNumber: t.lineNumber
                            })
                        }(e.children).nodes;
                    return 0 === t.length || 0 === r.length ? eS(eE({}, e), {
                        children: r
                    }) : function(e, n, t) {
                        let r = n.reduce((e, n) => (function(e, n) {
                                let t = {
                                        type: "root",
                                        children: n
                                    },
                                    r = new WeakMap,
                                    o = new WeakMap,
                                    l = new WeakMap,
                                    i = [];

                                function a(e, n, r) {
                                    i.push(n), r.forEach(n => {
                                        e.has(n) || (e.set(n, Object.assign({}, n, {
                                            children: []
                                        })), n !== t && i.push(n))
                                    });
                                    let o = r.length;
                                    for (; o--;) {
                                        let t = e.get(r[o]),
                                            l = r[o + 1],
                                            i = e.get(l) || n; - 1 === t.children.indexOf(i) && t.children.push(i)
                                    }
                                }
                                ep(t, (n, t) => {
                                    if (!("children" in n)) {
                                        if (eO(n) < e) {
                                            a(r, n, t);
                                            return
                                        }
                                        if (eO(n) === e) {
                                            a(o, n, t);
                                            return
                                        }
                                        ek(n) > e && i.some(e => t.includes(e)) && a(l, n, t)
                                    }
                                });
                                let u = function(e, n, t) {
                                        let r = eu(n),
                                            o = n && "object" == typeof n && "cascade" in n ? n.cascade : void 0,
                                            l = null == o || o;
                                        return function e(n, t, o) {
                                            let i;
                                            let a = [];
                                            if (!r(n, t, o)) return;
                                            if ("children" in n && void 0 !== n.children) {
                                                let t = -1;
                                                for (; ++t < n.children.length;) {
                                                    let r = e(n.children[t], t, n);
                                                    r && a.push(r)
                                                }
                                                if (l && n.children.length > 0 && 0 === a.length) return
                                            }
                                            let u = {};
                                            for (i in n) ef.call(n, i) && (u[i] = "children" === i ? a : n[i]);
                                            return u
                                        }(e)
                                    }(t, e => -1 === i.indexOf(e)),
                                    c = e => {
                                        let n = e.get(t);
                                        return n ? (ep(n, (e, n) => {
                                            if (e.children) {
                                                eC(e, 0, 0);
                                                return
                                            }
                                            n.forEach(n => {
                                                eC(n, Math.max(eO(n), eO(e)), Math.max(ek(n), ek(e)))
                                            })
                                        }), n.children) : []
                                    };
                                return [...c(r), ...c(o), ...c(l), ...u ? u.children : []]
                            })(n.line, e), e),
                            o = [],
                            l = 0;
                        for (let e = 0; e < n.length; e++) {
                            let i = n[e];
                            for (let e = r[l]; e && ek(e) < i.line; e = r[++l]) o.push(e);
                            let a = [];
                            for (let e = r[l]; e && ek(e) === i.line; e = r[++l]) a.push(e);
                            a.length > 0 && o.push(function(e, n, t) {
                                let r = n.className || "refractor-marker",
                                    o = {
                                        lineStart: n.line,
                                        lineEnd: ek(e[e.length - 1]),
                                        isMarker: !0
                                    };
                                return {
                                    type: "element",
                                    tagName: "div",
                                    data: n.component ? eS(eE({}, o), {
                                        component: n.component,
                                        markerProperties: t
                                    }) : o,
                                    properties: {
                                        className: r
                                    },
                                    children: e
                                }
                            }(a, i, t))
                        }
                        for (; l < r.length;) o.push(r[l++]);
                        return {
                            type: "root",
                            children: o
                        }
                    }(r, t, n)
                }(i, {
                    markers: e.markers
                }));
                let a = 0 === i.children.length ? e.value : i.children.map(function e(n) {
                        return function(t, r) {
                            return function(n, t, r) {
                                var o;
                                if (!("tagName" in n)) return n.value;
                                let l = "";
                                "u" > typeof n.properties && (l = Array.isArray(n.properties.className) ? n.properties.className.join(" ") : `${n.properties.className}`);
                                let i = `fract-${r}-${t}`,
                                    a = n.children && n.children.map(e(r + 1));
                                return "object" == typeof(o = n.data) && null !== o && "component" in o && "markerProperties" in o ? (0, eh.createElement)(n.data.component, eD(eL(eL({
                                    key: i
                                }, n.properties), n.data.markerProperties), {
                                    className: l
                                }), a) : (0, eh.createElement)(n.tagName, {
                                    key: i,
                                    className: l
                                }, a)
                            }(t, r, n)
                        }
                    }(0)),
                    u = (0, o.jsx)("code", e$(eH({}, r), {
                        children: a
                    }));
                return e.inline ? u : (0, o.jsx)("pre", {
                    className: l,
                    children: u
                })
            }
            let eq = e => ea.register(e),
                eK = e => ea.registered(e)
        },
        5853: function(e, n, t) {
            t.d(n, {
                CR: function() {
                    return s
                },
                FC: function() {
                    return h
                },
                Jh: function() {
                    return u
                },
                KL: function() {
                    return g
                },
                XA: function() {
                    return c
                },
                ZT: function() {
                    return o
                },
                _T: function() {
                    return i
                },
                ev: function() {
                    return d
                },
                fl: function() {
                    return f
                },
                mG: function() {
                    return a
                },
                pi: function() {
                    return l
                },
                qq: function() {
                    return p
                }
            });
            var r = function(e, n) {
                return (r = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                })(e, n)
            };

            function o(e, n) {
                if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");

                function t() {
                    this.constructor = e
                }
                r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
            }
            var l = function() {
                return (l = Object.assign || function(e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                        for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                    return e
                }).apply(this, arguments)
            };

            function i(e, n) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > n.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
                return t
            }

            function a(e, n, t, r) {
                return new(t || (t = Promise))(function(o, l) {
                    function i(e) {
                        try {
                            u(r.next(e))
                        } catch (e) {
                            l(e)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (e) {
                            l(e)
                        }
                    }

                    function u(e) {
                        var n;
                        e.done ? o(e.value) : ((n = e.value) instanceof t ? n : new t(function(e) {
                            e(n)
                        })).then(i, a)
                    }
                    u((r = r.apply(e, n || [])).next())
                })
            }

            function u(e, n) {
                var t, r, o, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (t) throw TypeError("Generator is already executing.");
                            for (; l && (l = 0, a[0] && (i = 0)), i;) try {
                                if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                t = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            }

            function c(e) {
                var n = "function" == typeof Symbol && Symbol.iterator,
                    t = n && e[n],
                    r = 0;
                if (t) return t.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function s(e, n) {
                var t = "function" == typeof Symbol && e[Symbol.iterator];
                if (!t) return e;
                var r, o, l = t.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === n || n-- > 0) && !(r = l.next()).done;) i.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (t = l.return) && t.call(l)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return i
            }

            function f() {
                for (var e = [], n = 0; n < arguments.length; n++) e = e.concat(s(arguments[n]));
                return e
            }

            function d(e, n, t) {
                if (t || 2 == arguments.length)
                    for (var r, o = 0, l = n.length; o < l; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
                return e.concat(r || Array.prototype.slice.call(n))
            }

            function p(e) {
                return this instanceof p ? (this.v = e, this) : new p(e)
            }

            function h(e, n, t) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r, o = t.apply(e, n || []),
                    l = [];
                return r = {}, i("next"), i("throw"), i("return", function(e) {
                    return function(n) {
                        return Promise.resolve(n).then(e, c)
                    }
                }), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function i(e, n) {
                    o[e] && (r[e] = function(n) {
                        return new Promise(function(t, r) {
                            l.push([e, n, t, r]) > 1 || a(e, n)
                        })
                    }, n && (r[e] = n(r[e])))
                }

                function a(e, n) {
                    try {
                        var t;
                        (t = o[e](n)).value instanceof p ? Promise.resolve(t.value.v).then(u, c) : s(l[0][2], t)
                    } catch (e) {
                        s(l[0][3], e)
                    }
                }

                function u(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function s(e, n) {
                    e(n), l.shift(), l.length && a(l[0][0], l[0][1])
                }
            }

            function g(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, t = e[Symbol.asyncIterator];
                return t ? t.call(e) : (e = c(e), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n);

                function r(t) {
                    n[t] = e[t] && function(n) {
                        return new Promise(function(r, o) {
                            ! function(e, n, t, r) {
                                Promise.resolve(r).then(function(n) {
                                    e({
                                        value: n,
                                        done: t
                                    })
                                }, n)
                            }(r, o, (n = e[t](n)).done, n.value)
                        })
                    }
                }
            }
            "function" == typeof SuppressedError && SuppressedError
        }
    }
]);