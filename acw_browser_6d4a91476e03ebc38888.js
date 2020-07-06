(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    0: function(e, t, r) {
        "use strict";
        function n(e) {
            return /^http[s]?:\/\//i.test(e)
        }
        function o(e) {
            if (null == e || e.length <= 0)
                return {};
            "?" === e[0] && (e = e.substring(1));
            for (var t = {}, r = e.split("&"), n = 0; n < r.length; ++n) {
                var o = r[n].split("=");
                if (null != o[0] && o[0].length > 0) {
                    var i = o[1] || "";
                    t[decodeURIComponent(o[0])] = decodeURIComponent(i)
                }
            }
            return t
        }
        function i(e) {
            return o((e.split("#")[0] || "").split("?")[1] || "")
        }
        function a() {
            return o(window.location.search)
        }
        function c() {
            var e = a();
            return JSON.parse(JSON.stringify(e))
        }
        function s(e) {
            var t = a();
            return t ? t[e] : null
        }
        function u() {
            for (var e = {}, t = 0; t < arguments.length; ++t) {
                var r = arguments[t];
                for (var n in r) {
                    var o = r[n];
                    null != n && null != o && (e[encodeURIComponent(n)] = encodeURIComponent(o))
                }
            }
            var i = "";
            for (var a in e)
                i.length > 0 && (i += "&"),
                i += a + "=" + e[a];
            return i
        }
        function l(e, t, r) {
            var n = document.createElement("a");
            if (n.href = t || location.href,
            null != r) {
                var i = n;
                (n = document.createElement("a")).href = r,
                i.pathname.length > 0 && (n.pathname = i.pathname),
                i.search.length > 0 && (n.search = i.search),
                i.hash.length > 0 && (n.hash = i.hash)
            }
            var a = o(n.search);
            for (var c in e) {
                var s = e[c];
                null == s ? delete a[c] : a[c] = s
            }
            var l = u(a);
            return l.length > 0 ? n.search = "?" + l : n.search = "",
            n.href
        }
        function p(e) {
            if (!document)
                return !1;
            var t = document.createElement("a");
            return t.href = e,
            t.href
        }
        function f(e) {
            var t = e.split("?")[0].split("/");
            return "/" + t[t.length - 1]
        }
        r.d(t, "g", function() {
            return n
        }),
        r.d(t, "h", function() {
            return o
        }),
        r.d(t, "i", function() {
            return i
        }),
        r.d(t, "e", function() {
            return c
        }),
        r.d(t, "d", function() {
            return s
        }),
        r.d(t, "a", function() {
            return u
        }),
        r.d(t, "b", function() {
            return l
        }),
        r.d(t, "c", function() {
            return p
        }),
        r.d(t, "f", function() {
            return f
        })
    },
    1: function(e, t, r) {
        "use strict";
        r.d(t, "d", function() {
            return n
        }),
        r.d(t, "e", function() {
            return o
        }),
        r.d(t, "b", function() {
            return i
        }),
        r.d(t, "a", function() {
            return a
        }),
        r.d(t, "c", function() {
            return c
        });
        var n = {
            Base: "snsapi_base",
            UserInfo: "snsapi_userinfo"
        }
          , o = {
            Base: "BASE",
            UserInfo: "USERINFO"
        }
          , i = {
            NeedAuthenticationLogin: 43058,
            DefaultLoginRisk: 54001,
            LoginVerifyRisk: 54002,
            LoginForbidden: 54003,
            OtherForbiden: 54004
        }
          , a = {
            AccessToken: "AccessToken",
            UID: "user_id",
            UIN: "user_uin",
            UA: "ua"
        }
          , c = {
            AccessToken: "9720291e90d99f18176068acbada512d",
            UID: "844f19a71a28ba75cd657fd9385df681",
            UIN: "ee3b63050cc7aed7696a97993de401a7"
        }
    },
    10: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , n = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return o(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return o(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function i(e) {
            if (null != e && "undefined" != typeof localStorage)
                return localStorage.getItem(e)
        }
        function a() {
            for (var e = (document.cookie || "").split("; "), t = {}, r = 0; r < e.length; r++) {
                var n = e[r].indexOf("=")
                  , o = e[r].substring(0, n)
                  , i = e[r].substring(n + 1);
                t[o] || (t[o] = []),
                t[o].push(i)
            }
            return t
        }
        function c(e) {
            var t = ""
              , r = a();
            for (var n in r)
                if (n === e) {
                    t = r[n][0];
                    break
                }
            return t
        }
        function s(e, t, r) {
            if (void 0 === t)
                return "";
            "number" == typeof (r = Object.assign({
                path: "/"
            }, r)).maxAge && (r["max-age"] = String(r.maxAge),
            r.maxAge = !1),
            t = encodeURIComponent(t),
            e = encodeURIComponent(e);
            var o = Object.entries(r).reduce(function(e, t) {
                var r = n(t, 2)
                  , o = r[0]
                  , i = r[1];
                return i ? (e += "; " + o,
                !0 === i ? e : e += "=" + i.split(";")[0]) : e
            }, "");
            return document.cookie = e + "=" + t + o
        }
        function u(e) {
            s(e, "", {
                maxAge: -1
            })
        }
        r.d(t, "c", function() {
            return i
        }),
        r.d(t, "b", function() {
            return c
        }),
        r.d(t, "d", function() {
            return s
        }),
        r.d(t, "a", function() {
            return u
        })
    },
    11: function(e, t, r) {
        "use strict";
        var n = r(9)
          , o = r(3)
          , i = r(0)
          , a = r(4)
          , c = r(6)
          , s = {
            TrackingChannels: ["src", "from", "campaign", "cid", "msgid"],
            ReferPageKeys: ["refer_page_name", "refer_page_section", "refer_page_element", "refer_page_id"],
            ReferShareKeys: ["refer_share_id", "refer_share_uid", "refer_share_channel", "refer_share_form"],
            ReferShareMapShort: {
                _sid: "refer_share_id",
                _suid: "refer_share_uid",
                _sc: "refer_share_channel",
                _sf: "refer_share_form"
            }
        };
        function u(e) {
            "@babel/helpers - typeof";
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function l(e) {
            var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 5).join("@").replace(/\?[^:]+/gi, "")
              , r = e.toString();
            return t.indexOf(r) < 0 && (t = r + "@" + t),
            t
        }
        function p(e) {
            if (function(e) {
                if ("object" !== u(e) || null === e)
                    return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }(e)) {
                var t = {};
                for (var r in e)
                    "object" === u(e[r]) ? t[r] = JSON.stringify(e[r]) : t[r] = e[r];
                return t
            }
            return null
        }
        function f(e) {
            return e && "string" != typeof e ? JSON.stringify(e) : e
        }
        function h() {
            return [Date.now(), Object(a.e)(16)].join("")
        }
        var d = r(34)
          , g = r.n(d);
        g.a.remoteFetching = !1,
        g.a.extendToAsynchronousCallbacks();
        var y = c.a.getInstance()
          , m = {}
          , v = function() {
            var e = y.getReferPageQuery();
            O.refer = e || {},
            O.hasReferQuery = !!e && "{}" !== JSON.stringify(e),
            O.isCached = O.hasReferQuery
        }
          , b = function(e) {
            var t = (e = e || {}).items;
            if ("string" == typeof t)
                try {
                    t = JSON.parse(t)
                } catch (e) {
                    console.log(e)
                }
            if (Array.isArray(e.items) && e.items.length > 0) {
                t = e.items,
                delete e.items;
                var r = t.map(function(t, r) {
                    t && !t.log_id && (t.log_id = h());
                    var n = Object.assign(e, t);
                    return ["ad", "p_rec"].forEach(function(e, t) {
                        n[e] && (n[e] = f(n[e]))
                    }),
                    n
                })
                  , n = r.reduce(function(e, t) {
                    var r = Object(i.a)(t);
                    return "".concat(e).concat(r, "$")
                }, "");
                return {
                    q: n = n.slice(0, n.length - 1),
                    entries: r
                }
            }
            return e.items = f(e.items),
            {
                q: Object(i.a)(e),
                oriParams: p(e),
                entries: []
            }
        }
          , w = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            O.isCached || v(),
            e.log_id = e.log_id || h(),
            e.user_id = e.user_id || Object(a.f)(),
            e.uin = e.uin || Object(a.g)(),
            e.app_id = e.app_id || Object(a.c)() || "",
            e.time = e.time || e.log_id.substring(0, 13),
            e.page_name = e.useExistsParams && e.page_name ? e.page_name : y.getPageName(),
            e.page_id = y.getPageID(),
            e.page_sn = y.getPageSN(),
            e = Object.assign({}, y.getKeyParams(), e),
            Object(a.h)(O.refer, e);
            var r = y.getExtendTransferParameters();
            if (Object(a.h)(r, e),
            ["pv", "click", "impr"].indexOf(e.op) >= 0) {
                s.TrackingChannels.forEach(function(t) {
                    var r = "refer_channel_" + t;
                    e[r] = e[r] || Object(i.d)(t)
                }),
                s.ReferShareKeys.forEach(function(t) {
                    var r = e[t] || Object(i.d)(t) || Object(i.d)(t.slice(6));
                    r && (e[t] = r)
                });
                var o = s.ReferShareMapShort;
                for (var c in o) {
                    var u = e[c] || Object(i.d)(c);
                    u && (e[o[c]] = u)
                }
            }
            if ("pv" === e.op) {
                var l = Object(i.e)();
                for (var p in l)
                    l.hasOwnProperty(p) && p && 0 === p.indexOf("_p_") && (e[p] = l[p]);
                e.event = "page_show",
                e.page_url = location.href
            }
            "1" === Object(i.d)("is_back") && (e.is_back = "1"),
            e.refer_channel_msgid = e.refer_channel_msgid || Object(i.d)("msgid"),
            delete e.useExistsParams,
            k && k.length > 0 && (e = k.reduce(function(e, t, r, n) {
                return t(e, r, n)
            }, e)),
            S.push(e),
            function(e) {
                if (0 !== S.length) {
                    for (var t = function() {
                        var e = S.pop();
                        "epv" === e.op ? r(e) : setTimeout(function() {
                            r(e)
                        }, 0)
                    }; S.length > 0; )
                        t();
                    e && setTimeout(e, 100)
                } else
                    e && e();
                function r(e) {
                    var t = n.a.loggingURL
                      , r = n.a.logRoutes || {};
                    window.location && "https:" === window.location.protocol && (r = n.a.httpsLogRoutes,
                    t = n.a.httpsLoggingURL);
                    var o = r[((e = Object.assign({}, _, e || {})).ad || "ad" === e.routeKey) && ["click", "impr"].indexOf(e.op) >= 0 ? "ad" : e.op] || t;
                    delete e.routeKey,
                    window.navigator.sendBeacon && (e.support_beacon = 1);
                    var i = b(e).q;
                    if ("real_error" === e.op && (e.status_code && (e.payload ? e.payload.status_code = e.status_code : e.payload = {
                        status_code: e.status_code
                    },
                    delete e.status_code),
                    e.error_message && (e.error_msg = e.error_message,
                    delete e.error_message),
                    e.params && (e.payload ? e.payload.params = e.params : e.payload = {
                        params: e.params
                    },
                    delete e.params),
                    e.sub_op && (e.payload ? e.payload.sub_op = e.sub_op : e.payload = {
                        sub_op: e.sub_op
                    },
                    delete e.sub_op),
                    e.debug_url && (e.payload ? e.payload.debug_url = e.debug_url : e.payload = {
                        debug_url: e.debug_url
                    },
                    delete e.debug_url),
                    e.log_version = "1.0.0",
                    i = JSON.stringify(e)),
                    !(window.navigator.sendBeacon && ["pv", "click", "impr"].indexOf(e.op) >= 0 && window.navigator.sendBeacon(o, i)))
                        try {
                            var a;
                            if (!window.XMLHttpRequest)
                                return;
                            (a = new XMLHttpRequest).open("POST", o, !0),
                            a.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                            a.withCredentials = !0,
                            a.send(i)
                        } catch (e) {}
                }
            }(t)
        }
          , _ = {
            screen_width: window.screen.width,
            screen_height: window.screen.height,
            dpr: window.devicePixelRatio,
            platform: o.b.Current
        }
          , O = {
            isCached: !1,
            hasReferQuery: !1,
            refer: {
                refer_page_id: null,
                refer_page_name: null,
                refer_page_section: null,
                refer_page_element: null
            }
        }
          , S = []
          , k = []
          , E = window.onerror;
        if (window.onerror = function(e, t, r, n, o) {
            if ("function" == typeof E && !E._raw) {
                var i = e;
                o && o.stack && (i = l(o)),
                function(e, t) {
                    return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]"
                }(i, "Event") && (i += i.type ? "--" + i.type + "--" + (i.target ? i.target.tagName + "::" + i.target.src : "") : ""),
                E(i, t, r, n, o)
            }
        }
        ,
        window.addEventListener("unhandledrejection", function(e) {
            var t = e.reason;
            t instanceof Error && (t = t && t.stack ? l(t) : t.message ? t.message : t),
            w({
                page: "unhandledrejection reason:" + function(e) {
                    return e && e.replace(/(AccessToken=|AccessToken=|"AccessToken":)\s*"?([^;,"]+)"?([;,]?\s*)/gi, function(e, t, r, n) {
                        return "".concat(t).concat(r.length).concat(n)
                    })
                }(JSON.stringify(t, function() {
                    var e = [];
                    return function(t, r) {
                        if (null != r && "object" === u(r)) {
                            if (e.indexOf(r) >= 0)
                                return;
                            e.push(r)
                        }
                        return r
                    }
                }())),
                op: "real_error",
                page_url: location.href
            })
        }),
        g.a.report.subscribe(function(e) {
            var t = "";
            if (e && (t = e.name + ":" + e.message,
            e.stack && e.stack.length))
                for (var r = 0; r < e.stack.length; r++)
                    t += "@ ".concat(e.stack[r].func, "(").concat(e.stack[r].url, ":").concat(e.stack[r].line, ":").concat(e.stack[r].column, ")");
            var n = location.search ? location.href + "&" + Object(i.a)({
                JS_ERROR: t
            }) : location.href + "?" + Object(i.a)({
                JS_ERROR: t
            });
            w({
                page: e ? e.name + " " + e.message + " " + JSON.stringify(e.stack) : "no info",
                op: "real_error",
                page_url: location.href,
                debug_url: n
            })
        }),
        location.search) {
            var I = Object(i.h)(location.search);
            I.JS_ERROR && console.error(I.JS_ERROR.replace(/\)@/g, "\n)@"))
        }
        m = {
            init: function() {
                var e = Date.now();
                void 0 !== document.hidden && window.addEventListener("visibilitychange", function() {
                    document.hidden ? w({
                        op: "epv",
                        sub_op: "leave",
                        enter_time: e,
                        time: Date.now()
                    }) : e = Date.now()
                }),
                window.addEventListener("unload", function() {
                    w({
                        op: "epv",
                        sub_op: "leave",
                        enter_time: e,
                        close_time: Date.now()
                    })
                })
            },
            addDefaultParams: function(e) {
                _ = Object.assign({}, _, e)
            },
            addMiddleware: function(e) {
                "function" == typeof e ? k.push(e) : Array.isArray(e) && e.forEach(function(e) {
                    k.push(e)
                })
            },
            trackingRecord: function(e, t) {
                null == n.a.loggingURL || n.a.loggingURL.length <= 0 || w(e, t)
            }
        };
        t.a = m
    },
    12: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var n = r(27)
          , o = r(17);
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object(n.a)(e).catch(function(e) {
                throw parseInt(e.errorCode, 10) === parseInt("40001", 10) && Object(o.e)(),
                e
            })
        }
    },
    17: function(e, t, r) {
        "use strict";
        var n = r(10)
          , o = r(9)
          , i = r(3)
          , a = r(24)
          , c = r(27)
          , s = r(0)
          , u = r(4);
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "UnLoginError";
            this.name = "UnLoginError",
            this.message = e,
            this.errorCode = 40001,
            this.stack = (new Error).stack
        }
        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "RedirectedError";
            this.name = "RedirectedError",
            this.message = e,
            this.errorCode = 302,
            this.stack = (new Error).stack
        }
        l.prototype = Object.create(Error.prototype),
        l.prototype.constructor = l,
        p.prototype = Object.create(Error.prototype),
        p.prototype.constructor = p;
        var f = r(1);
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    d(e, t, r[t])
                })
            }
            return e
        }
        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var g = function(e) {};
        function y() {
            a.a.replaceURL(location.origin + location.pathname + "?" + Object(s.a)(h({}, Object(s.h)(location.search), {
                code: null,
                state: null
            })))
        }
        function m(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.d.Base;
            e = e || location.href.split("#")[0],
            location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?" + Object(s.a)({
                response_type: "code",
                scope: t,
                appid: o.a.ApiKey.WeChat,
                redirect_uri: e,
                state: t === f.d.UserInfo ? f.e.UserInfo : f.e.Base
            }) + "#wechat_redirect"
        }
        function v() {
            var e = Object(s.h)(location.search).code
              , t = Object(s.h)(location.search).state;
            y();
            var r = {
                code: e,
                app_id: Object(u.c)()
            };
            return t === f.e.UserInfo && (r.is_auth = 1),
            function(e) {
                return Object(c.a)({
                    method: "post",
                    url: "login",
                    params: e
                }).catch(function(e) {
                    var t = e.errorCode;
                    if (t === f.b.NeedAuthenticationLogin && i.b.isWeChatPlatform())
                        throw m(null, f.d.UserInfo),
                        new p;
                    throw t === f.b.OtherForbiden && g("登录不成功，请稍后再试"),
                    e
                })
            }(r).then(function(e) {
                return h({}, e, {
                    accessToken: e.access_token
                })
            })
        }
        function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object(s.h)(location.search).code ? v() : (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = (e.from || location.href).split("#")[0];
                i.b.isWeChatPlatform() && m(t, e.forceLoginWithAuth ? f.d.UserInfo : f.d.Base)
            }(e),
            new Promise(function(e, t) {
                setTimeout(function() {
                    t(new p)
                }, 300)
            }
            ))
        }
        function w(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                maxAge: 864e4
            };
            t && Object(n.b)(e) !== t && Object(n.d)(e, t, r)
        }
        r.d(t, "d", function() {
            return k
        }),
        r.d(t, "a", function() {
            return E
        }),
        r.d(t, "b", function() {
            return I
        }),
        r.d(t, "c", function() {
            return P
        }),
        r.d(t, "e", function() {
            return T
        });
        var _ = {};
        function O(e) {
            var t = e.accessToken
              , r = e.uid
              , n = e.uin
              , o = void 0 === n ? "" : n
              , i = e.type;
            return function(e, t, r) {
                w(f.a.AccessToken, e),
                w(f.a.UID, t),
                w(f.a.UIN, r)
            }(t, r, o),
            function(e, t, r, n) {
                _ = {
                    accessToken: e,
                    uid: t,
                    uin: r,
                    type: n
                }
            }(t, r, o, i),
            function(e, t, r) {
                e && localStorage.setItem(f.c.AccessToken, e),
                t && localStorage.setItem(f.c.UID, (+t).toString(36)),
                r && localStorage.setItem(f.c.UIN, r)
            }(t, r, o),
            A = !1,
            {
                accessToken: t,
                uid: r,
                uin: o
            }
        }
        function S() {
            Object(n.a)(f.a.AccessToken),
            Object(n.a)(f.a.UID),
            Object(n.a)(f.a.UIN),
            _ = {},
            localStorage.removeItem(f.c.AccessToken),
            localStorage.removeItem(f.c.UID),
            localStorage.removeItem(f.c.UIN)
        }
        function k() {
            return !0,
            ["AccessToken", "UID", "UIN"].forEach(function(e) {
                var t = Object(n.b)(f.a[e]);
                t ? localStorage.setItem(f.c[e], "UID" === e ? (+t).toString(36) : t) : localStorage.removeItem(f.c[e])
            }),
            function() {
                var e = E()
                  , t = I()
                  , r = P()
                  , n = e ? Promise.resolve({
                    accessToken: e,
                    uid: t,
                    uin: r
                }) : Promise.reject(new l)
                  , o = Object(s.h)(location.search).code;
                return e ? (o && y(),
                n) : o ? v() : n
            }().then(O, function(e) {
                throw S(),
                e
            })
        }
        function E() {
            return _.accessToken || Object(n.b)(f.a.AccessToken)
        }
        function I() {
            return _.uid || Object(n.b)(f.a.UID)
        }
        function P() {
            return _.uin || Object(n.b)(f.a.UIN)
        }
        var R = null;
        var A = !1;
        function T(e) {
            if (A) {
                var t = new Error("repeatLogin");
                return Promise.reject(t)
            }
            return A = !0,
            S(),
            R ? R() : b(e).then(O)
        }
    },
    191: function(e, t, r) {
        var n;
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        !function(i, a) {
            void 0 === (n = function() {
                return function(e, t) {
                    function r(t, r, n) {
                        e.WeixinJSBridge ? WeixinJSBridge.invoke(t, i(r), function(e) {
                            c(t, e, n)
                        }) : u(t, n)
                    }
                    function n(t, r, n) {
                        e.WeixinJSBridge ? WeixinJSBridge.on(t, function(e) {
                            n && n.trigger && n.trigger(e),
                            c(t, e, r)
                        }) : u(t, n || r)
                    }
                    function i(e) {
                        return (e = e || {}).appId = R.appId,
                        e.verifyAppId = R.appId,
                        e.verifySignType = "sha1",
                        e.verifyTimestamp = R.timestamp + "",
                        e.verifyNonceStr = R.nonceStr,
                        e.verifySignature = R.signature,
                        e
                    }
                    function a(e) {
                        return {
                            timeStamp: e.timestamp + "",
                            nonceStr: e.nonceStr,
                            package: e.package,
                            paySign: e.paySign,
                            signType: e.signType || "SHA1"
                        }
                    }
                    function c(e, t, r) {
                        "openEnterpriseChat" == e && (t.errCode = t.err_code),
                        delete t.err_code,
                        delete t.err_desc,
                        delete t.err_detail;
                        var n = t.errMsg;
                        n || (n = t.err_msg,
                        delete t.err_msg,
                        n = function(e, t) {
                            var r = e
                              , n = g[r];
                            n && (r = n);
                            var o = "ok";
                            if (t) {
                                var i = t.indexOf(":");
                                "confirm" == (o = t.substring(i + 1)) && (o = "ok"),
                                "failed" == o && (o = "fail"),
                                -1 != o.indexOf("failed_") && (o = o.substring(7)),
                                -1 != o.indexOf("fail_") && (o = o.substring(5)),
                                "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"),
                                "config" == r && "function not exist" == o && (o = "ok"),
                                "" == o && (o = "fail")
                            }
                            return t = r + ":" + o
                        }(e, n),
                        t.errMsg = n),
                        (r = r || {})._complete && (r._complete(t),
                        delete r._complete),
                        n = t.errMsg || "",
                        R.debug && !r.isInnerInvoke && alert(JSON.stringify(t));
                        var o = n.indexOf(":");
                        switch (n.substring(o + 1)) {
                        case "ok":
                            r.success && r.success(t);
                            break;
                        case "cancel":
                            r.cancel && r.cancel(t);
                            break;
                        default:
                            r.fail && r.fail(t)
                        }
                        r.complete && r.complete(t)
                    }
                    function s(e) {
                        if (e) {
                            for (var t = 0, r = e.length; t < r; ++t) {
                                var n = e[t]
                                  , o = d[n];
                                o && (e[t] = o)
                            }
                            return e
                        }
                    }
                    function u(e, t) {
                        if (!(!R.debug || t && t.isInnerInvoke)) {
                            var r = g[e];
                            r && (e = r),
                            t && t._complete && delete t._complete,
                            console.log('"' + e + '",', t || "")
                        }
                    }
                    function l() {
                        return (new Date).getTime()
                    }
                    function p(t) {
                        O && (e.WeixinJSBridge ? t() : y.addEventListener && y.addEventListener("WeixinJSBridgeReady", t, !1))
                    }
                    function f() {
                        j.invoke || (j.invoke = function(t, r, n) {
                            e.WeixinJSBridge && WeixinJSBridge.invoke(t, i(r), n)
                        }
                        ,
                        j.on = function(t, r) {
                            e.WeixinJSBridge && WeixinJSBridge.on(t, r)
                        }
                        )
                    }
                    if (!e.jWeixin) {
                        var h, d = {
                            config: "preVerifyJSAPI",
                            onMenuShareTimeline: "menu:share:timeline",
                            onMenuShareAppMessage: "menu:share:appmessage",
                            onMenuShareQQ: "menu:share:qq",
                            onMenuShareWeibo: "menu:share:weiboApp",
                            onMenuShareQZone: "menu:share:QZone",
                            previewImage: "imagePreview",
                            getLocation: "geoLocation",
                            openProductSpecificView: "openProductViewWithPid",
                            addCard: "batchAddCard",
                            openCard: "batchViewCard",
                            chooseWXPay: "getBrandWCPayRequest",
                            openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                            startSearchBeacons: "startMonitoringBeacons",
                            stopSearchBeacons: "stopMonitoringBeacons",
                            onSearchBeacons: "onBeaconsInRange",
                            consumeAndShareCard: "consumedShareCard",
                            openAddress: "editAddress"
                        }, g = function() {
                            var e = {};
                            for (var t in d)
                                e[d[t]] = t;
                            return e
                        }(), y = e.document, m = y ? y.title : "", v = navigator.userAgent.toLowerCase(), b = navigator.platform.toLowerCase(), w = !(!b.match("mac") && !b.match("win")), _ = -1 != v.indexOf("wxdebugger"), O = -1 != v.indexOf("micromessenger"), S = -1 != v.indexOf("android"), k = -1 != v.indexOf("iphone") || -1 != v.indexOf("ipad"), E = function() {
                            var e = v.match(/micromessenger\/(\d+\.\d+\.\d+)/) || v.match(/micromessenger\/(\d+\.\d+)/);
                            return e ? e[1] : ""
                        }(), I = {
                            initStartTime: l(),
                            initEndTime: 0,
                            preVerifyStartTime: 0,
                            preVerifyEndTime: 0
                        }, P = {
                            version: 1,
                            appId: "",
                            initTime: 0,
                            preVerifyTime: 0,
                            networkType: "",
                            isPreVerifyOk: 1,
                            systemType: k ? 1 : S ? 2 : -1,
                            clientVersion: E,
                            url: encodeURIComponent(location.href)
                        }, R = {}, A = {
                            _completes: []
                        }, T = {
                            state: 0,
                            data: {}
                        };
                        p(function() {
                            I.initEndTime = l()
                        });
                        var D = !1
                          , C = []
                          , j = (o(h = {
                            config: function(e) {
                                R = e,
                                u("config", e);
                                var t = !1 !== R.check;
                                p(function() {
                                    if (t)
                                        r(d.config, {
                                            verifyJsApiList: s(R.jsApiList)
                                        }, function() {
                                            A._complete = function(e) {
                                                I.preVerifyEndTime = l(),
                                                T.state = 1,
                                                T.data = e
                                            }
                                            ,
                                            A.success = function(e) {
                                                P.isPreVerifyOk = 0
                                            }
                                            ,
                                            A.fail = function(e) {
                                                A._fail ? A._fail(e) : T.state = -1
                                            }
                                            ;
                                            var e = A._completes;
                                            return e.push(function() {
                                                !function(e) {
                                                    if (!(w || _ || R.debug || E < "6.0.2" || P.systemType < 0)) {
                                                        var t = new Image;
                                                        P.appId = R.appId,
                                                        P.initTime = I.initEndTime - I.initStartTime,
                                                        P.preVerifyTime = I.preVerifyEndTime - I.preVerifyStartTime,
                                                        j.getNetworkType({
                                                            isInnerInvoke: !0,
                                                            success: function(e) {
                                                                P.networkType = e.networkType;
                                                                var r = "https://open.weixin.qq.com/sdk/report?v=" + P.version + "&o=" + P.isPreVerifyOk + "&s=" + P.systemType + "&c=" + P.clientVersion + "&a=" + P.appId + "&n=" + P.networkType + "&i=" + P.initTime + "&p=" + P.preVerifyTime + "&u=" + P.url;
                                                                t.src = r
                                                            }
                                                        })
                                                    }
                                                }()
                                            }),
                                            A.complete = function(t) {
                                                for (var r = 0, n = e.length; r < n; ++r)
                                                    e[r]();
                                                A._completes = []
                                            }
                                            ,
                                            A
                                        }()),
                                        I.preVerifyStartTime = l();
                                    else {
                                        T.state = 1;
                                        for (var e = A._completes, n = 0, o = e.length; n < o; ++n)
                                            e[n]();
                                        A._completes = []
                                    }
                                }),
                                f()
                            },
                            ready: function(e) {
                                0 != T.state ? e() : (A._completes.push(e),
                                !O && R.debug && e())
                            },
                            error: function(e) {
                                E < "6.0.2" || (-1 == T.state ? e(T.data) : A._fail = e)
                            },
                            checkJsApi: function(e) {
                                r("checkJsApi", {
                                    jsApiList: s(e.jsApiList)
                                }, (e._complete = function(e) {
                                    if (S) {
                                        var t = e.checkResult;
                                        t && (e.checkResult = JSON.parse(t))
                                    }
                                    e = function(e) {
                                        var t = e.checkResult;
                                        for (var r in t) {
                                            var n = g[r];
                                            n && (t[n] = t[r],
                                            delete t[r])
                                        }
                                        return e
                                    }(e)
                                }
                                ,
                                e))
                            },
                            onMenuShareTimeline: function(e) {
                                n(d.onMenuShareTimeline, {
                                    complete: function() {
                                        r("shareTimeline", {
                                            title: e.title || m,
                                            desc: e.title || m,
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href,
                                            type: e.type || "link",
                                            data_url: e.dataUrl || ""
                                        }, e)
                                    }
                                }, e)
                            },
                            onMenuShareAppMessage: function(e) {
                                n(d.onMenuShareAppMessage, {
                                    complete: function(t) {
                                        "favorite" === t.scene ? r("sendAppMessage", {
                                            title: e.title || m,
                                            desc: e.desc || "",
                                            link: e.link || location.href,
                                            img_url: e.imgUrl || "",
                                            type: e.type || "link",
                                            data_url: e.dataUrl || ""
                                        }) : r("sendAppMessage", {
                                            title: e.title || m,
                                            desc: e.desc || "",
                                            link: e.link || location.href,
                                            img_url: e.imgUrl || "",
                                            type: e.type || "link",
                                            data_url: e.dataUrl || ""
                                        }, e)
                                    }
                                }, e)
                            },
                            onMenuShareQQ: function(e) {
                                n(d.onMenuShareQQ, {
                                    complete: function() {
                                        r("shareQQ", {
                                            title: e.title || m,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        }, e)
                                    }
                                }, e)
                            },
                            onMenuShareWeibo: function(e) {
                                n(d.onMenuShareWeibo, {
                                    complete: function() {
                                        r("shareWeiboApp", {
                                            title: e.title || m,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        }, e)
                                    }
                                }, e)
                            },
                            onMenuShareQZone: function(e) {
                                n(d.onMenuShareQZone, {
                                    complete: function() {
                                        r("shareQZone", {
                                            title: e.title || m,
                                            desc: e.desc || "",
                                            img_url: e.imgUrl || "",
                                            link: e.link || location.href
                                        }, e)
                                    }
                                }, e)
                            },
                            startRecord: function(e) {
                                r("startRecord", {}, e)
                            },
                            stopRecord: function(e) {
                                r("stopRecord", {}, e)
                            },
                            onVoiceRecordEnd: function(e) {
                                n("onVoiceRecordEnd", e)
                            },
                            playVoice: function(e) {
                                r("playVoice", {
                                    localId: e.localId
                                }, e)
                            },
                            pauseVoice: function(e) {
                                r("pauseVoice", {
                                    localId: e.localId
                                }, e)
                            },
                            stopVoice: function(e) {
                                r("stopVoice", {
                                    localId: e.localId
                                }, e)
                            },
                            onVoicePlayEnd: function(e) {
                                n("onVoicePlayEnd", e)
                            },
                            uploadVoice: function(e) {
                                r("uploadVoice", {
                                    localId: e.localId,
                                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                }, e)
                            },
                            downloadVoice: function(e) {
                                r("downloadVoice", {
                                    serverId: e.serverId,
                                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                }, e)
                            },
                            translateVoice: function(e) {
                                r("translateVoice", {
                                    localId: e.localId,
                                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                }, e)
                            },
                            chooseImage: function(e) {
                                r("chooseImage", {
                                    scene: "1|2",
                                    count: e.count || 9,
                                    sizeType: e.sizeType || ["original", "compressed"],
                                    sourceType: e.sourceType || ["album", "camera"]
                                }, (e._complete = function(e) {
                                    if (S) {
                                        var t = e.localIds;
                                        t && (e.localIds = JSON.parse(t))
                                    }
                                }
                                ,
                                e))
                            },
                            getLocation: function(e) {},
                            previewImage: function(e) {
                                r(d.previewImage, {
                                    current: e.current,
                                    urls: e.urls
                                }, e)
                            },
                            uploadImage: function(e) {
                                r("uploadImage", {
                                    localId: e.localId,
                                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                }, e)
                            },
                            downloadImage: function(e) {
                                r("downloadImage", {
                                    serverId: e.serverId,
                                    isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                                }, e)
                            },
                            getLocalImgData: function(e) {
                                !1 === D ? (D = !0,
                                r("getLocalImgData", {
                                    localId: e.localId
                                }, (e._complete = function(e) {
                                    if (D = !1,
                                    C.length > 0) {
                                        var t = C.shift();
                                        wx.getLocalImgData(t)
                                    }
                                }
                                ,
                                e))) : C.push(e)
                            },
                            getNetworkType: function(e) {
                                r("getNetworkType", {}, (e._complete = function(e) {
                                    e = function(e) {
                                        var t = e.errMsg;
                                        e.errMsg = "getNetworkType:ok";
                                        var r = e.subtype;
                                        if (delete e.subtype,
                                        r)
                                            e.networkType = r;
                                        else {
                                            var n = t.indexOf(":")
                                              , o = t.substring(n + 1);
                                            switch (o) {
                                            case "wifi":
                                            case "edge":
                                            case "wwan":
                                                e.networkType = o;
                                                break;
                                            default:
                                                e.errMsg = "getNetworkType:fail"
                                            }
                                        }
                                        return e
                                    }(e)
                                }
                                ,
                                e))
                            },
                            openLocation: function(e) {
                                r("openLocation", {
                                    latitude: e.latitude,
                                    longitude: e.longitude,
                                    name: e.name || "",
                                    address: e.address || "",
                                    scale: e.scale || 28,
                                    infoUrl: e.infoUrl || ""
                                }, e)
                            }
                        }, "getLocation", function(e) {
                            e = e || {},
                            r(d.getLocation, {
                                type: e.type || "wgs84"
                            }, (e._complete = function(e) {
                                delete e.type
                            }
                            ,
                            e))
                        }),
                        o(h, "hideOptionMenu", function(e) {
                            r("hideOptionMenu", {}, e)
                        }),
                        o(h, "showOptionMenu", function(e) {
                            r("showOptionMenu", {}, e)
                        }),
                        o(h, "closeWindow", function(e) {
                            r("closeWindow", {}, e = e || {})
                        }),
                        o(h, "hideMenuItems", function(e) {
                            r("hideMenuItems", {
                                menuList: e.menuList
                            }, e)
                        }),
                        o(h, "showMenuItems", function(e) {
                            r("showMenuItems", {
                                menuList: e.menuList
                            }, e)
                        }),
                        o(h, "hideAllNonBaseMenuItem", function(e) {
                            r("hideAllNonBaseMenuItem", {}, e)
                        }),
                        o(h, "showAllNonBaseMenuItem", function(e) {
                            r("showAllNonBaseMenuItem", {}, e)
                        }),
                        o(h, "scanQRCode", function(e) {
                            r("scanQRCode", {
                                needResult: (e = e || {}).needResult || 0,
                                scanType: e.scanType || ["qrCode", "barCode"]
                            }, (e._complete = function(e) {
                                if (k) {
                                    var t = e.resultStr;
                                    if (t) {
                                        var r = JSON.parse(t);
                                        e.resultStr = r && r.scan_code && r.scan_code.scan_result
                                    }
                                }
                            }
                            ,
                            e))
                        }),
                        o(h, "openAddress", function(e) {
                            r(d.openAddress, {}, (e._complete = function(e) {
                                e = function(e) {
                                    return e.postalCode = e.addressPostalCode,
                                    delete e.addressPostalCode,
                                    e.provinceName = e.proviceFirstStageName,
                                    delete e.proviceFirstStageName,
                                    e.cityName = e.addressCitySecondStageName,
                                    delete e.addressCitySecondStageName,
                                    e.countryName = e.addressCountiesThirdStageName,
                                    delete e.addressCountiesThirdStageName,
                                    e.detailInfo = e.addressDetailInfo,
                                    delete e.addressDetailInfo,
                                    e
                                }(e)
                            }
                            ,
                            e))
                        }),
                        o(h, "openProductSpecificView", function(e) {
                            r(d.openProductSpecificView, {
                                pid: e.productId,
                                view_type: e.viewType || 0,
                                ext_info: e.extInfo
                            }, e)
                        }),
                        o(h, "addCard", function(e) {
                            for (var t = e.cardList, n = [], o = 0, i = t.length; o < i; ++o) {
                                var a = t[o]
                                  , c = {
                                    card_id: a.cardId,
                                    card_ext: a.cardExt
                                };
                                n.push(c)
                            }
                            r(d.addCard, {
                                card_list: n
                            }, (e._complete = function(e) {
                                var t = e.card_list;
                                if (t) {
                                    for (var r = 0, n = (t = JSON.parse(t)).length; r < n; ++r) {
                                        var o = t[r];
                                        o.cardId = o.card_id,
                                        o.cardExt = o.card_ext,
                                        o.isSuccess = !!o.is_succ,
                                        delete o.card_id,
                                        delete o.card_ext,
                                        delete o.is_succ
                                    }
                                    e.cardList = t,
                                    delete e.card_list
                                }
                            }
                            ,
                            e))
                        }),
                        o(h, "chooseCard", function(e) {
                            r("chooseCard", {
                                app_id: R.appId,
                                location_id: e.shopId || "",
                                sign_type: e.signType || "SHA1",
                                card_id: e.cardId || "",
                                card_type: e.cardType || "",
                                card_sign: e.cardSign,
                                time_stamp: e.timestamp + "",
                                nonce_str: e.nonceStr
                            }, (e._complete = function(e) {
                                e.cardList = e.choose_card_info,
                                delete e.choose_card_info
                            }
                            ,
                            e))
                        }),
                        o(h, "openCard", function(e) {
                            for (var t = e.cardList, n = [], o = 0, i = t.length; o < i; ++o) {
                                var a = t[o]
                                  , c = {
                                    card_id: a.cardId,
                                    code: a.code
                                };
                                n.push(c)
                            }
                            r(d.openCard, {
                                card_list: n
                            }, e)
                        }),
                        o(h, "consumeAndShareCard", function(e) {
                            r(d.consumeAndShareCard, {
                                consumedCardId: e.cardId,
                                consumedCode: e.code
                            }, e)
                        }),
                        o(h, "chooseWXPay", function(e) {
                            r(d.chooseWXPay, a(e), e)
                        }),
                        o(h, "openEnterpriseRedPacket", function(e) {
                            r(d.openEnterpriseRedPacket, a(e), e)
                        }),
                        o(h, "startSearchBeacons", function(e) {
                            r(d.startSearchBeacons, {
                                ticket: e.ticket
                            }, e)
                        }),
                        o(h, "stopSearchBeacons", function(e) {
                            r(d.stopSearchBeacons, {}, e)
                        }),
                        o(h, "onSearchBeacons", function(e) {
                            n(d.onSearchBeacons, e)
                        }),
                        o(h, "openEnterpriseChat", function(e) {
                            r("openEnterpriseChat", {
                                useridlist: e.userIds,
                                chatname: e.groupName
                            }, e)
                        }),
                        o(h, "launchMiniProgram", function(e) {
                            r("launchMiniProgram", {
                                targetAppId: e.targetAppId,
                                path: function(e) {
                                    if ("string" == typeof e && e.length > 0) {
                                        var t = e.split("?")[0]
                                          , r = e.split("?")[1];
                                        return t += ".html",
                                        void 0 !== r ? t + "?" + r : t
                                    }
                                }(e.path),
                                envVersion: e.envVersion
                            }, e)
                        }),
                        o(h, "miniProgram", {
                            navigateBack: function(e) {
                                e = e || {},
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "navigateBack",
                                        arg: {
                                            delta: e.delta || 1
                                        }
                                    }, e)
                                })
                            },
                            navigateTo: function(e) {
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "navigateTo",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            redirectTo: function(e) {
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "redirectTo",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            switchTab: function(e) {
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "switchTab",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            reLaunch: function(e) {
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "reLaunch",
                                        arg: {
                                            url: e.url
                                        }
                                    }, e)
                                })
                            },
                            postMessage: function(e) {
                                p(function() {
                                    r("invokeMiniProgramAPI", {
                                        name: "postMessage",
                                        arg: e.data || {}
                                    }, e)
                                })
                            },
                            getEnv: function(t) {
                                p(function() {
                                    t({
                                        miniprogram: "miniprogram" === e.__wxjs_environment
                                    })
                                })
                            }
                        }),
                        h)
                          , x = 1
                          , L = {};
                        return y.addEventListener("error", function(e) {
                            if (!S) {
                                var t = e.target
                                  , r = t.tagName
                                  , n = t.src;
                                if (("IMG" == r || "VIDEO" == r || "AUDIO" == r || "SOURCE" == r) && -1 != n.indexOf("wxlocalresource://")) {
                                    e.preventDefault(),
                                    e.stopPropagation();
                                    var o = t["wx-id"];
                                    if (o || (o = x++,
                                    t["wx-id"] = o),
                                    L[o])
                                        return;
                                    L[o] = !0,
                                    wx.ready(function() {
                                        wx.getLocalImgData({
                                            localId: n,
                                            success: function(e) {
                                                t.src = e.localData
                                            }
                                        })
                                    })
                                }
                            }
                        }, !0),
                        y.addEventListener("load", function(e) {
                            if (!S) {
                                var t = e.target
                                  , r = t.tagName;
                                if (t.src,
                                "IMG" == r || "VIDEO" == r || "AUDIO" == r || "SOURCE" == r) {
                                    var n = t["wx-id"];
                                    n && (L[n] = !1)
                                }
                            }
                        }, !0),
                        j && (e.wx = e.jWeixin = j),
                        j
                    }
                }(i)
            }
            .call(t, r, t, e)) || (e.exports = n)
        }(window)
    },
    192: function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(48);
            t.a = function(t) {
                var r = Object(n.a)(t);
                return e(r).then(function() {}).catch(function() {})
            }
        }
        ).call(this, r(54))
    },
    193: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return l
        });
        r(78),
        r(79),
        r(80),
        r(82),
        r(83),
        r(84),
        r(60),
        r(85),
        r(86),
        r(87),
        r(88),
        r(89),
        r(90),
        r(91),
        r(93),
        r(94),
        r(95),
        r(96),
        r(97),
        r(98),
        r(99),
        r(100),
        r(101),
        r(102),
        r(103),
        r(104),
        r(105),
        r(106),
        r(107),
        r(108),
        r(109),
        r(110),
        r(111),
        r(112),
        r(113),
        r(114),
        r(115),
        r(116),
        r(117),
        r(118),
        r(119),
        r(120),
        r(121),
        r(122),
        r(123),
        r(124),
        r(125),
        r(126),
        r(127),
        r(128),
        r(129),
        r(130),
        r(131),
        r(132),
        r(133),
        r(134),
        r(135),
        r(136),
        r(137),
        r(138),
        r(139),
        r(140),
        r(142),
        r(143),
        r(144),
        r(145),
        r(146),
        r(147),
        r(148),
        r(149),
        r(150),
        r(151),
        r(152),
        r(153),
        r(154),
        r(155),
        r(156),
        r(76),
        r(157),
        r(158),
        r(159),
        r(160),
        r(161),
        r(162),
        r(163),
        r(164),
        r(165),
        r(166),
        r(167),
        r(168),
        r(169),
        r(170),
        r(171),
        r(172),
        r(173),
        r(174),
        r(175),
        r(176),
        r(177),
        r(178),
        r(179),
        r(180),
        r(181),
        r(182),
        r(183),
        r(184),
        r(185),
        r(186),
        r(187),
        r(188),
        r(189),
        r(190);
        var n = r(2)
          , o = r.n(n)
          , i = r(66)
          , a = r.n(i)
          , c = r(56)
          , s = r(0);
        function u(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function l(e) {
            return p.apply(this, arguments)
        }
        function p() {
            return (p = function(e) {
                return function() {
                    var t = this
                      , r = arguments;
                    return new Promise(function(n, o) {
                        var i = e.apply(t, r);
                        function a(e) {
                            u(i, n, o, a, c, "next", e)
                        }
                        function c(e) {
                            u(i, n, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    )
                }
            }(regeneratorRuntime.mark(function e(t) {
                var r, n, i, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = t.App,
                            n = t.prepareOptions,
                            i = function() {
                                return new Promise(function(e) {
                                    var t = document.createElement("script");
                                    t.type = "text/javascript",
                                    t.src = "//cdn.jsdelivr.net/npm/eruda",
                                    t.crossorigin = "anonymous",
                                    document.getElementsByTagName("head")[0].appendChild(t),
                                    t.onload = function() {
                                        eruda && eruda.init(),
                                        e()
                                    }
                                }
                                )
                            }
                            ,
                            !(Object(s.d)("eruda") || "")) {
                                e.next = 6;
                                break
                            }
                            return e.next = 6,
                            i();
                        case 6:
                            u = document.getElementById("main"),
                            Object(c.a)(n, function() {
                                a.a.render(o.a.createElement(r, null), u)
                            }, function(e) {
                                return e
                            });
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }))).apply(this, arguments)
        }
    },
    194: function(e, t, r) {
        "use strict";
        var n = r(212)
          , o = r.n(n)
          , i = function(e) {
            var t = o.a.create(e);
            return {
                http: t,
                usePlugins: function(e) {
                    return a(t, e)
                }
            }
        }
          , a = function(e, t) {
            return t.map(function(t) {
                return {
                    request: e.interceptors.request.use(t.request, t.requestError),
                    response: e.interceptors.response.use(t.response, t.responseError)
                }
            })
        }
          , c = r(41)
          , s = r.n(c);
        function u(e) {
            return s()(e).catch(function(t) {
                throw t.config = t.config || e,
                t
            })
        }
        function l(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        r.d(t, "a", function() {
            return p
        });
        var p = function(e, t) {
            var r = i(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {}
                      , n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))),
                    n.forEach(function(t) {
                        l(e, t, r[t])
                    })
                }
                return e
            }({
                baseURL: location.protocol + "//" + location.host + "/proxy/api/",
                withCredentials: !0,
                adapter: u,
                headers: {}
            }, t))
              , n = r.http;
            return (0,
            r.usePlugins)([{
                response: function(e) {
                    return e.data
                }
            }]),
            n
        }
    },
    21: function(e, t, r) {
        "use strict";
        var n = r(48);
        r.d(t, "b", function() {
            return n.a
        });
        var o = r(192);
        r.d(t, "c", function() {
            return o.a
        });
        var i = r(25);
        r.d(t, "a", function() {
            return i.a
        })
    },
    24: function(e, t, r) {
        "use strict";
        var n = r(6)
          , o = r(3)
          , i = r(0);
        function a(e) {
            "@babel/helpers - typeof";
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var c = n.a.getInstance()
          , s = {}
          , u = Object(i.h)(window.location.search);
        s = window.Navigation = {
            querySet: null,
            replaceQuery: function(e, t) {
                window.Navigation.querySet = Object.assign({}, window.Navigation.querySet, e),
                "function" == typeof t && t()
            },
            nextPageQuery: {},
            setNextPageQuery: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (e && "object" === a(e))
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = e[r];
                            "page_el_sn" === r ? window.Navigation.nextPageQuery.refer_page_el_sn = n : window.Navigation.nextPageQuery[r] = n
                        }
                t && "function" == typeof t && t()
            },
            getNextPageQuery: function() {
                return window.Navigation.nextPageQuery
            },
            reset: function(e, t) {
                var r = e || "";
                this.forward(r, t)
            },
            reload: function(e, t) {
                e = e ? c.addPageTransferParameters(e) : Object(i.b)(Object.assign({}, u, window.Navigation.querySet));
                try {
                    history.replaceState(null, "", e)
                } catch (e) {}
                setTimeout(function() {
                    window && window.location ? window.location = e : location.href = e,
                    "function" == typeof t && t()
                }, 0)
            },
            back: function(e, t) {
                setTimeout(function() {
                    null == e ? history.back() : location.href = e,
                    "function" == typeof t && t()
                }, 0)
            },
            forward: function(e, t) {
                e = this.prepareForwardUrl(e),
                this.webForward(e, t)
            },
            webForward: function(e, t) {
                setTimeout(function() {
                    location.href = e,
                    "function" == typeof t && t()
                }, 0)
            },
            prepareForwardUrl: function(e) {
                return window.Navigation.querySet = Object.assign({}, u, window.Navigation.querySet, {
                    is_back: "1"
                }),
                o.b.isWeChatMiniProgram() || window.Navigation.replaceURL(Object(i.b)(window.Navigation.querySet)),
                e = c.addPageTransferParameters(e),
                e = Object(i.b)(window.Navigation.nextPageQuery, e)
            },
            replaceURL: function(e, t) {
                !function() {
                    try {
                        history.replaceState(null, "", e)
                    } catch (e) {}
                    "function" == typeof t && t()
                }()
            },
            forwardInMiniProgram: function(e, t, r) {
                if (e && window.wx && window.wx.miniProgram && "function" == typeof window.wx.miniProgram.navigateTo) {
                    var n = this.prepareUrlInMiniProgram(e, window.Navigation.nextPageQuery);
                    window.wx.miniProgram.navigateTo({
                        url: n,
                        success: t || function() {}
                        ,
                        fail: r || function() {}
                    })
                } else
                    r && r()
            },
            reloadInMiniProgram: function(e, t, r) {
                if (e && window.wx && window.wx.miniProgram && "function" == typeof window.wx.miniProgram.redirectTo) {
                    var n = this.prepareUrlInMiniProgram(e);
                    window.wx.miniProgram.redirectTo({
                        url: n,
                        success: t || function() {}
                        ,
                        fail: r || function() {}
                    })
                } else
                    r && r()
            },
            prepareUrlInMiniProgram: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = e.split("?")
                  , n = {};
                r[1] && (n = Object(i.h)(r[1]));
                var o = {
                    refer_page_name: c.getPageName(),
                    refer_page_id: c.getPageID(),
                    refer_page_sn: c.getPageSN()
                };
                n.page_el_sn && (o.refer_page_el_sn = n.page_el_sn);
                var a = c.getExtendTransferParameters(!0)
                  , s = Object.assign({}, n, t, o, a);
                return [r[0], Object(i.a)(s)].join("?")
            }
        },
        t.a = s
    },
    25: function(e, t, r) {
        "use strict";
        t.a = {
            LINK_ACTIVATION: "/p",
            APK_ACTIVATION: "/p/app",
            LAUNCH_ACTIVATION: "pre",
            UNIVERSAL_LINK_ACTIVATION: "pre/ul"
        }
    },
    26: function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof window
          , o = {
            IOS_DEVICE_WEBVIEW_TYPES: {
                SAFARI: "SAFARI",
                UIWEBVIEW_LIKE_SAFARI: "UIWEBVIEW_LIKE_SAFARI",
                WKWEBVIEW_LIKE_SAFARI: "WKWEBVIEW_LIKE_SAFARI",
                UIWEBVIEW: "UIWEBVIEW",
                WKWEBVIEW: "WKWEBVIEW"
            },
            getIOSDeviceWebviewType: function() {
                if (!n)
                    return !1;
                if ("iP" === navigator.platform.substr(0, 2)) {
                    var e = /constructor/i.test(window.HTMLElement)
                      , t = window.navigator
                      , r = t.userAgent
                      , o = !!window.indexedDB;
                    if (-1 !== r.indexOf("Safari") && -1 !== r.indexOf("Version") && !t.standalone)
                        return !o && e || !window.statusbar.visible ? this.IOS_DEVICE_WEBVIEW_TYPES.UIWEBVIEW_LIKE_SAFARI : window.webkit && window.webkit.messageHandlers || !e || o ? this.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW_LIKE_SAFARI : this.IOS_DEVICE_WEBVIEW_TYPES.SAFARI;
                    if (!o && e || !window.statusbar.visible)
                        return this.IOS_DEVICE_WEBVIEW_TYPES.UIWEBVIEW;
                    if (window.webkit && window.webkit.messageHandlers || !e || o)
                        return this.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW
                }
                return !1
            }
        };
        o.doHackOfIOSWkWebViewPositionFixedFailureByKeyboard = function() {
            var e = o.getIOSDeviceWebviewType();
            return e === o.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW || e === o.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW_LIKE_SAFARI
        }(),
        o.isWKWebView = n && (window.__wxjs_is_wkwebview || function() {
            var e = o.getIOSDeviceWebviewType();
            return e === o.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW || e === o.IOS_DEVICE_WEBVIEW_TYPES.WKWEBVIEW_LIKE_SAFARI
        }()),
        t.a = o
    },
    27: function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return s
            });
            var n = r(0)
              , o = r(4)
              , i = r(11)
              , a = r(9)
              , c = r(36);
            function s() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , r = t.url;
                if (!r)
                    throw Error("apiRequest url should be passed");
                var u = "GET";
                if (t.method)
                    try {
                        u = t.method.toUpperCase()
                    } catch (e) {
                        throw new Error("apiRequest method should be a string")
                    }
                var l = t.params
                  , p = !0;
                !0 !== t.noOptions && !1 !== t.noOptions || (p = t.noOptions);
                var f = {
                    is_back: "1" === Object(n.d)("is_back") ? "1" : null
                }
                  , h = !1;
                0 === r.indexOf("http") && (h = !0);
                var d = r.split("?")
                  , g = "";
                g = h ? r : a.a.apiDomain + [d[0], (d[1] ? d[1] + "&" : "") + Object(n.a)(f)].join("?"),
                p && (g = g.replace(a.a.apiDomain, "//" + location.host + "/proxy/api/"));
                var y = !1;
                "GET" === u && (y = !0,
                g = Object(n.b)(l, g));
                var m = {}
                  , v = Object(o.b)();
                m.AccessToken = v,
                m["Content-Type"] = null == l ? "application/x-www-form-urlencoded;charset=UTF-8" : "application/json;charset=UTF-8";
                var b = {
                    method: u,
                    body: null == l || y ? null : JSON.stringify(l),
                    headers: m,
                    credentials: "include"
                }
                  , w = Date.now();
                return e(g, b).then(function(e) {
                    if (e.status < 500)
                        return e.json().then(function(t) {
                            return {
                                status: e.status,
                                responseJSON: t
                            }
                        });
                    var t = new Error(e.statusText);
                    return t.status = e.status,
                    e.json().then(function(e) {
                        throw t.data = e,
                        t.responseJSON = e,
                        t
                    }).catch(function() {
                        throw t.data || (t.responseJSON = {
                            error_code: 0
                        }),
                        t
                    })
                }).then(function(e) {
                    if (e.status >= 200 && e.status < 300)
                        return e.responseJSON;
                    var t = new Error(e.responseJSON.error_msg || "error");
                    throw t.responseJSON = e.responseJSON,
                    t.status = e.status,
                    t
                }).then(function(e) {
                    return Object(c.a)({
                        requestTime: w,
                        resTimeConsume: Date.now() - w,
                        reqData: t.params,
                        resData: e,
                        apiUrl: g,
                        statusCode: 200,
                        cmtURL: a.a.cmtURL
                    }),
                    e
                }).catch(function(e) {
                    var r = 0
                      , n = e && e.message;
                    null != e && (r = function(e) {
                        if (null == e)
                            return 0;
                        var t = e.error_code;
                        return null == t ? null : "number" == typeof t ? t : parseInt(t, 10)
                    }(e.responseJSON));
                    var o = n ? e.message : JSON.stringify(e)
                      , p = {
                        op: "real_error",
                        sub_op: "api_error",
                        url: u + ":" + g,
                        params: JSON.stringify(l || {}),
                        page_url: location.href,
                        error_message: o,
                        status_code: e && e.status,
                        error_code: r
                    };
                    return e.errorCode = r,
                    e.errorMsg = o,
                    i.a.trackingRecord(p),
                    Object(c.a)({
                        requestTime: w,
                        resTimeConsume: Date.now() - w,
                        reqData: t.params,
                        resData: e && e.responseJSON,
                        apiUrl: g,
                        statusCode: e && e.status,
                        cmtURL: a.a.cmtURL
                    }),
                    0 !== r || "POST" === u || t.disableRetry ? e : s(Object.assign({}, t, {
                        disableRetry: !0
                    }))
                }).then(function(e) {
                    if (function(e) {
                        return "[object Error]" === Object.prototype.toString.call(e)
                    }(e))
                        throw e;
                    return e
                })
            }
        }
        ).call(this, r(54))
    },
    29: function(e, t, r) {
        "use strict";
        function n(e) {
            "@babel/helpers - typeof";
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var o;
        r.d(t, "a", function() {
            return s
        });
        var i = 2e3
          , a = 2500
          , c = "唤起App失败";
        function s(e) {
            var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "com.tiantian.calc", s = arguments.length > 2 ? arguments[2] : void 0, l = (u() ? {
                appRouter: O,
                appRouterHw: O
            } : {
                appRouter: y,
                installShortcut: g,
                channelReady: m
            }).appRouter, p = s || {}, f = p.cipher, h = void 0 === f ? "" : f, d = p.downloadUrl, v = p.decoQuery, b = void 0 === v ? "" : v, w = p.autoDownload, _ = {
                cipher: h,
                jump_url: e,
                deco_query: b,
                auto_download: void 0 === w ? 1 : w
            };
            d && Object.assign(_, {
                download_url: d
            }),
            l(n, "index", _),
            void 0 !== document.hidden ? (t = "hidden",
            r = "visibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden",
            r = "webkitvisibilitychange");
            var S = Date.now();
            return new Promise(function(e, n) {
                function s(i) {
                    if (document.removeEventListener(r, s),
                    clearTimeout(o),
                    document[t] || i.hidden || "hidden" === document.visibilityState)
                        return e();
                    n(new Error(c))
                }
                document.addEventListener(r, s, !1),
                o = setTimeout(function() {
                    return document.removeEventListener(r, s),
                    document[t] || "hidden" === document.visibilityState ? e() : Date.now() - S > a ? e() : void n(new Error(c))
                }, i)
            }
            )
        }
        function u(e) {
            void 0 === e && (e = navigator.userAgent.toLowerCase());
            var t = e.indexOf("android")
              , r = e.indexOf("build/huawei")
              , n = e.indexOf("build/honor");
            return 0 <= t && (0 <= r || 0 <= n)
        }
        function l(e) {
            var t = +(e.match(/.*Android (\d+).*/i) || [])[1];
            return !isNaN(t) && t < 10
        }
        function p(e) {
            var t = +(e.match(/.*Android (\d+).*/i) || [])[1];
            return !isNaN(t) && 10 <= t
        }
        function f(e) {
            return 1 < (e.match(/.*(iPhone|Mac OS).*/i) || []).length
        }
        function h(e, t) {
            for (var r in t = t || {})
                e[r] = t[r];
            return e
        }
        function d(e, t, r) {
            var n = document.createElement("iframe")
              , o = "hwfastapp://" + e;
            t && (o = o + "/" + t),
            r && 0 < Object.keys(r).length && (o = o + "?" + (r = Object.keys(r).map(function(e) {
                return e + "=" + encodeURIComponent(r[e])
            }).join("&"))),
            n.src = o,
            document.body.appendChild(n),
            n.style.display = "none"
        }
        function g(e, t) {
            return v("command", "", {
                type: "shortcut",
                package: e,
                name: t
            })
        }
        function y(e, t, r, n) {
            return r = r || {},
            n && (r.__PROMPT__ = 1,
            r.__NAME__ = n),
            v(e, t, r)
        }
        function m(e) {
            var t = {
                available: new Function
            };
            "function" == typeof e ? t.available = e : "object" == n(e) && h(t, e);
            var r = !1
              , o = t.available;
            t.available = function() {
                r || (r = !0,
                o.apply(null, arguments))
            }
            ;
            var i = navigator.userAgent;
            f(i) || (l(i) ? w("http://thefatherofsalmon.com/images", t) : (p(i),
            w("http://thefatherofsalmon.com/images", t),
            w("http://v2.thefatherofsalmon.com/images", t)))
        }
        function v(e, t, r) {
            var n = navigator.userAgent;
            f(n) || (l(n) ? b("http://thefatherofsalmon.com", e, t, r) : (p(n),
            b("http://thefatherofsalmon.com", e, t, r),
            b("http://v2.thefatherofsalmon.com", e, t, r)))
        }
        function b(e, t, r, n) {
            var o = e
              , i = "";
            t && (o = o + "?i=" + t),
            r && (o = o + "&p=" + r),
            o += "&random=" + Math.random(),
            function(e) {
                if (!e)
                    return !0;
                var t = void 0;
                for (t in e)
                    return !1;
                return !0
            }(n) ? -1 < (e = window.location.search).indexOf("?") && (i = e.substr(1)) : i = Object.keys(n).map(function(e) {
                return e + "=" + encodeURIComponent(n[e])
            }).join("&"),
            "" !== i && (o = o + "&a=" + encodeURIComponent(i));
            var a = document.createElement("img");
            a.src = o,
            a.style.width = "1px",
            a.style.height = "1px",
            a.style.display = "none",
            document.body.appendChild(a)
        }
        function w(e, t) {
            var r = document.createElement("img");
            if (r.style.width = "1px",
            r.style.height = "1px",
            r.style.display = "none",
            e += "/" + 1e20 * Math.random(),
            r.src = e,
            document.body.appendChild(r),
            t = h({
                availableTimeout: 2e3
            }, t),
            r.complete)
                t.available.call(null, !0);
            else {
                r.onload = function() {
                    clearTimeout(n),
                    t.available.call(null, !0)
                }
                ;
                var n = setTimeout(function() {
                    t.available.call(null, !1)
                }, t.availableTimeout)
            }
        }
        function _() {
            var e = navigator.userAgent;
            if (e) {
                if (0 <= (e = e.toLowerCase()).indexOf("huaweibrowser"))
                    return !1;
                var t = e.indexOf("android")
                  , r = e.indexOf("build/huawei");
                if (r < 0 && (r = e.indexOf("build/honor")),
                0 <= t && 0 <= r) {
                    var n = e.slice(t + 8, t + 9);
                    if (8 <= parseInt(n, 10))
                        return !0;
                    if ((n = e.slice(t + 8, t + 10)) && n.indexOf(";") < 0 && 10 <= parseInt(n, 10))
                        return !0
                }
            }
            return !1
        }
        function O(e, t, r) {
            if (_()) {
                if (function(e, t, r) {
                    var n = "http://122.11.38.205/fastapprouter/"
                      , o = "";
                    if (n = n + (new Date).getTime() + "/",
                    !t || 0 == t.indexOf("/") && (t = 1 == t.length ? " " : t.substr(1)),
                    e && (n = n + "?i=" + e),
                    t && (n = n + "&p=" + t),
                    function(e) {
                        if (!e)
                            return !0;
                        var t = void 0;
                        for (t in e)
                            return !1;
                        return !0
                    }(r)) {
                        var i = window.location.search;
                        -1 < i.indexOf("?") && (o = i.substr(1))
                    } else
                        o = Object.keys(r).map(function(e) {
                            return e + "=" + encodeURIComponent(r[e])
                        }).join("&");
                    "" !== o && (n = n + "&a=" + encodeURIComponent(o));
                    var a = document.createElement("img");
                    a.src = n,
                    a.style.width = "1px",
                    a.style.height = "1px",
                    a.style.display = "none",
                    document.body.appendChild(a)
                }(e, t, r = r || {}),
                function() {
                    var e = navigator.userAgent;
                    if (e) {
                        var t = (e = e.toLowerCase()).indexOf("android")
                          , r = e.indexOf("build/huawei");
                        if (r < 0 && (r = e.indexOf("build/honor")),
                        0 <= t && 0 <= r) {
                            var n = e.slice(t + 8, t + 9);
                            if (9 <= parseInt(n, 10))
                                return !1;
                            if ((n = e.slice(t + 8, t + 10)) && n.indexOf(";") < 0 && 10 <= parseInt(n, 10))
                                return !1
                        }
                    }
                    return !0
                }()) {
                    var n = Date.now();
                    setTimeout(function() {
                        Date.now() - n <= 830 && d(e, t, r)
                    }, 800)
                }
            } else
                d(e, t, r)
        }
    },
    3: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        });
        var n = r(26);
        function o(e, t) {
            for (var r = function(e) {
                var t = [];
                return null == e || e.length <= 0 ? t : (e.split(".").forEach(function(e) {
                    t.push(parseInt(e, 10) || 0)
                }),
                t)
            }, n = r(e), o = r(t), i = Math.max(n.length, o.length), a = 0; a < i; ++a) {
                var c = n[a] || 0
                  , s = o[a] || 0;
                if (c !== s)
                    return c - s
            }
            return 0
        }
        var i = {
            Unknown: "unknown",
            WeChat: "wechat",
            Weibo: "weibo",
            QQ: "qq",
            WxApp: "wxapp",
            QQApp: "qqapp",
            WeChatAndroid: "wechat_android",
            WeChatIOS: "wechat_ios",
            WeChatUnknown: "wechat_unknown",
            WxAppAndroid: "wxapp_android",
            WxAppIOS: "wxapp_ios",
            WxAppUnknown: "wxapp_unknown"
        };
        function a(e, t) {
            return i.IOSSystemVersion = function() {
                var t = e;
                return t.match(/iphone|ipad|ipod/i) ? function(e) {
                    var r = t.match(/os (\d+)_(\d+)_?(\d+)?/i);
                    return "[object Array]" !== Object.prototype.toString.call(r) || r.length < 4 ? "" : [r[1], r[2], r[3]].map(function(e) {
                        return e ? parseInt(e, 10) : 0
                    }).join(".")
                }() : ""
            }(),
            i.AndroidSystemVersion = function() {
                var t = e;
                return t.match(/Android/i) ? function(e) {
                    var r = t.match(/Android (\d+).?(\d+)?.?(\d+)?/i);
                    return "[object Array]" !== Object.prototype.toString.call(r) || r.length < 4 ? "" : [r[1], r[2], r[3]].map(function(e) {
                        return e ? parseInt(e, 10) : 0
                    }).join(".")
                }() : ""
            }(),
            i.Current = function() {
                var t = e;
                if (i.isMobile = t.match(/Android|webOS|iPhone|iPad|iPod/i),
                null != t.match(/MicroMessenger/i)) {
                    var r = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        e || "undefined" == typeof navigator || (e = navigator.userAgent);
                        var t = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            t || "undefined" == typeof navigator || (t = navigator.userAgent);
                            var r = (t = t.toLowerCase()).indexOf(e);
                            if (r < 0)
                                return null;
                            var n = t.indexOf(" ", r);
                            return n < 0 && (n = t.length),
                            t.substring(r + e.length, n)
                        }("micromessenger/", e);
                        return null === t && (t = ""),
                        t
                    }(t);
                    return i.wechatVersion = r,
                    i.isSupportHistoryAPI = o(r, "6.5.1") > 0,
                    function(e) {
                        return null !== e.match(/miniprogram|miniProgram/i) || "undefined" != typeof window && "miniprogram" === window.__wxjs_environment
                    }(t) ? i.WxApp : i.WeChat
                }
                return null != t.match(/Weibo/i) ? i.Weibo : function(e) {
                    return null != e.match(/QQ\//i) && null != e.match(/miniprogram/i)
                }(t) ? i.QQApp : null != t.match(/(QQ\/[\d\.]+\s+)|Qzone/i) ? i.QQ : i.Unknown
            }(),
            i.WeChatCurrent = function() {
                if (i.Current !== i.WeChat)
                    return null;
                var t = e;
                return -1 !== (t = t.toUpperCase()).indexOf("ANDROID") ? i.WeChatAndroid : -1 !== t.indexOf("IPHONE") || -1 !== t.indexOf("IPAD") || -1 !== t.indexOf("ITOUCH") ? i.WeChatIOS : i.WeChatUnknown
            }(),
            i.WxAppCurrent = function() {
                if (i.Current !== i.WxApp)
                    return null;
                var t = e;
                return -1 !== (t = t.toUpperCase()).indexOf("ANDROID") ? i.WxAppAndroid : -1 !== t.indexOf("IPHONE") || -1 !== t.indexOf("IPAD") || -1 !== t.indexOf("ITOUCH") ? i.WxAppIOS : i.WxAppUnknown
            }(),
            i
        }
        var c = {}
          , s = function(e, t) {
            var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null) || a(e);
            return r.isPureWeChatPlatform = function() {
                return r.Current === r.WeChat
            }
            ,
            r.isWeChatMiniProgram = function() {
                return r.Current === r.WxApp
            }
            ,
            r.isWeChatPlatform = function() {
                return r.Current === r.WeChat || r.Current === r.WxApp
            }
            ,
            r.isEmbeddedBrowser = function() {
                return r.isWeChatPlatform()
            }
            ,
            r.isMobileBrowser = function() {
                return r.isMobile
            }
            ,
            r.isAndroidWeChatPlatform = function() {
                return r.isWeChatPlatform() && (r.WeChatCurrent === r.WeChatAndroid || r.WxAppCurrent === r.WxAppAndroid)
            }
            ,
            r.isIOSWeChatPlatform = function() {
                return r.isWeChatPlatform() && (r.WeChatCurrent === r.WeChatIOS || r.WxAppCurrent === r.WxAppIOS)
            }
            ,
            r
        }(window.navigator.userAgent, location.hostname);
        s.isIOSWeChatUIWebView = function() {
            return s.isIOSWeChatPlatform() && !n.a.isWKWebView
        }
        ,
        s.isWeChatPlatform() && r(191),
        c = s,
        t.b = c
    },
    308: function(e, t, r) {
        e.exports = r(386)
    },
    36: function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", function() {
                return u
            });
            var n = r(6)
              , o = r(4)
              , i = r(55)
              , a = n.a.getInstance()
              , c = 1
              , s = {
                unknown: 0,
                wifi: 1,
                "2g": 2,
                "3g": 3,
                "4g": 4
            };
            function u() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , r = t.requestTime
                  , n = t.resTimeConsume
                  , u = t.reqData
                  , l = t.resData
                  , p = t.apiUrl
                  , f = t.statusCode
                  , h = t.cmtURL;
                if (h) {
                    var d = 0
                      , g = 0;
                    u && (d = JSON.stringify(u).length),
                    l && (g = JSON.stringify(l).length);
                    var y = Math.pow(10, 5) + Math.floor(Math.random() * (Math.pow(10, 6) - Math.pow(10, 5)));
                    Object(o.d)().then(function(t) {
                        var u = {
                            v: c,
                            t: r,
                            r: y,
                            c: Object(i.a)(r + "-" + y),
                            d: {
                                t: Date.now(),
                                tu: p,
                                n: s[t] || 0,
                                c: f,
                                rt: n,
                                q: d,
                                p: g,
                                e: {
                                    uid: Object(o.f)(),
                                    page_id: a.getPageID(),
                                    model: navigator.userAgent
                                }
                            }
                        }
                          , l = {
                            method: "POST",
                            body: JSON.stringify(u),
                            headers: {
                                "Content-Type": "application/json;charset=UTF-8"
                            },
                            credentials: "include"
                        };
                        e(h, l)
                    })
                }
            }
        }
        ).call(this, r(54))
    },
    378: function(e, t, r) {},
    379: function(e, t, r) {},
    380: function(e, t, r) {},
    381: function(e, t, r) {},
    382: function(e, t, r) {},
    383: function(e, t, r) {},
    386: function(e, t, r) {
        "use strict";
        r.r(t);
        r(78),
        r(79),
        r(80),
        r(82),
        r(83),
        r(84),
        r(60),
        r(85),
        r(86),
        r(87),
        r(88),
        r(89),
        r(90),
        r(91),
        r(93),
        r(94),
        r(95),
        r(96),
        r(97),
        r(98),
        r(99),
        r(100),
        r(101),
        r(102),
        r(103),
        r(104),
        r(105),
        r(106),
        r(107),
        r(108),
        r(109),
        r(110),
        r(111),
        r(112),
        r(113),
        r(114),
        r(115),
        r(116),
        r(117),
        r(118),
        r(119),
        r(120),
        r(121),
        r(122),
        r(123),
        r(124),
        r(125),
        r(126),
        r(127),
        r(128),
        r(129),
        r(130),
        r(131),
        r(132),
        r(133),
        r(134),
        r(135),
        r(136),
        r(137),
        r(138),
        r(139),
        r(140),
        r(142),
        r(143),
        r(144),
        r(145),
        r(146),
        r(147),
        r(148),
        r(149),
        r(150),
        r(151),
        r(152),
        r(153),
        r(154),
        r(155),
        r(156),
        r(76),
        r(157),
        r(158),
        r(159),
        r(160),
        r(161),
        r(162),
        r(163),
        r(164),
        r(165),
        r(166),
        r(167),
        r(168),
        r(169),
        r(170),
        r(171),
        r(172),
        r(173),
        r(174),
        r(175),
        r(176),
        r(177),
        r(178),
        r(179),
        r(180),
        r(181),
        r(182),
        r(183),
        r(184),
        r(185),
        r(186),
        r(187),
        r(188),
        r(189),
        r(190);
        var n = r(2)
          , o = r.n(n)
          , i = r(7)
          , a = r.n(i)
          , c = r(0)
          , s = r(42)
          , u = r(67)
          , l = r(194)
          , p = r(243)
          , f = r(3)
          , h = r(8)
          , d = {
            OTHERS: 0,
            HUAWEI: 1,
            XIAOMI: 2,
            OPPO: 3,
            VIVO: 4
        }
          , g = "1"
          , y = "1.1"
          , m = "2"
          , v = "3"
          , b = "4"
          , w = "/images/home/default_bg_1.jpg"
          , _ = "https://a.app.qq.com/o/simple.jsp?pkgname=com.xunmeng.pinduoduo&ckey=CK1447264875786"
          , O = "https://apps.apple.com/cn/app/%E6%8B%BC%E5%A4%9A%E5%A4%9A-3%E4%BA%BF%E4%BA%BA%E9%83%BD%E5%9C%A8%E6%8B%BC%E7%9A%84%E8%B4%AD%E7%89%A9app/id1044283059?from=singlemessage&isappinstalled=0"
          , S = {
            launchUrl: "index.html",
            personal: !1,
            pkg: "",
            brand: d.OTHERS,
            trick: 0,
            isRedPack: !0,
            isBargain: !1
        }
          , k = (r(24),
        r(33))
          , E = r.n(k);
        var I = function(e, t) {
            var r = document.createElement("a");
            !function(e) {
                return /^[a-z][a-z\d+.-]*:/.test(e)
            }(t) ? r.href = "".concat(location.origin, "/").concat(t) : r.href = t;
            var n = Object.assign({}, Object(c.h)(r.search), e);
            return (r.pathname + "?" + Object(c.a)(n) + r.hash).slice(1)
        }
          , P = function(e) {
            return new Promise(function(t) {
                var r = document.createElement("script");
                r.type = "text/javascript",
                r.src = e,
                r.crossorigin = "anonymous",
                document.getElementsByTagName("head")[0].appendChild(r),
                r.onload = function() {
                    t()
                }
            }
            )
        }
          , R = function(e) {
            var t = e.name
              , r = e.reqId
              , n = new Event("__customClick__",{
                bubbles: !1,
                cancelable: !1,
                composed: !0
            });
            return n.__data__ = {
                type: "req",
                name: t,
                reqId: r
            },
            n
        }
          , A = function(e) {
            return "pinduoduo://com.xunmeng.pinduoduo/".concat(e || "")
        }
          , T = function(e) {
            var t = I({
                fastapp: 1
            }, e);
            return E.a.encode("pinduoduo://com.xunmeng.pinduoduo/".concat(t))
        }
          , D = function(e) {
            return ["text", "share_code", "mq_code"].reduce(function(t, r) {
                return t || a()(e, "".concat(r), "")
            }, "")
        };
        function C(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var j, x = {
            src: "staticpage"
        }, L = function(e, t) {
            var r = D(t)
              , n = a()(t, "campaign", "static_card")
              , o = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {}
                      , n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))),
                    n.forEach(function(t) {
                        C(e, t, r[t])
                    })
                }
                return e
            }({}, x, {
                cipher: r,
                campaign: n,
                refer_campaign: n
            }, e)
              , i = a()(t, "invite_code", "")
              , c = a()(t, "bgid", "")
              , s = Boolean(i)
              , u = Boolean(c);
            return i && Object.assign(o, {
                invite_code: i
            }),
            c && Object.assign(o, {
                bgid: c
            }),
            s && Object.assign(o, {
                campaign: "red_packet",
                refer_campaign: "red_packet"
            }),
            u && Object.assign(o, {
                campaign: "cutprice",
                refer_campaign: "cutprice"
            }),
            o
        };
        r(378);
        function U(e) {
            "@babel/helpers - typeof";
            return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function N(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function W(e, t) {
            return (W = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function M(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = B(e);
                if (t) {
                    var o = B(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === U(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function B(e) {
            return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Q, q = (function(e, t, r, n, o) {
            var i = {};
            Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null)
        }((j = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && W(e, t)
            }(r, n["PureComponent"]);
            var t = M(r);
            function r() {
                var e;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return (e = t.call.apply(t, [this].concat(o))).state = {
                    width: 10
                },
                e.timer = 0,
                e
            }
            return function(e, t, r) {
                t && N(e.prototype, t),
                r && N(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    var e = this.getShowWidth();
                    return o.a.createElement("div", {
                        className: "share-modal-fill rp-wait-fill",
                        onClick: this.close
                    }, o.a.createElement("div", {
                        className: "rp-wait-container"
                    }, o.a.createElement("div", {
                        className: "rp-wait-title"
                    }, "正在前往拼多多App"), o.a.createElement("div", {
                        className: "rp-wait-process"
                    }, o.a.createElement("div", {
                        style: {
                            width: "".concat(e, "%")
                        },
                        className: "rp-wait-process-main"
                    })), o.a.createElement("div", {
                        className: "rp-wait-hint"
                    }, "领取中 (", e, "%)")))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.timer = window.setInterval(function() {
                        var t = e.state.width
                          , r = Number(t) + 20;
                        r > 100 ? clearInterval(e.timer) : e.setState({
                            width: r
                        })
                    }, 1e3)
                }
            }, {
                key: "getShowWidth",
                value: function() {
                    var e = this.state.width
                      , t = this.props.installAkpProcess;
                    return Math.min(100, Math.max(e, t))
                }
            }, {
                key: "close",
                value: function(e) {
                    e && e.stopPropagation()
                }
            }]),
            r
        }()).prototype, "close", [h.a], Object.getOwnPropertyDescriptor(j.prototype, "close"), j.prototype),
        j);
        r(379);
        function H(e) {
            "@babel/helpers - typeof";
            return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function F(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function V(e, t) {
            return (V = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function K(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = z(e);
                if (t) {
                    var o = z(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === H(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function z(e) {
            return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var G = (function(e, t, r, n, o) {
            var i = {};
            Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null)
        }((Q = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && V(e, t)
            }(r, n["PureComponent"]);
            var t = K(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                t.apply(this, arguments)
            }
            return function(e, t, r) {
                t && F(e.prototype, t),
                r && F(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    return o.a.createElement("div", {
                        className: "share-modal-fill",
                        onClick: this.close
                    }, o.a.createElement("div", {
                        className: "rp-guide-container"
                    }, o.a.createElement("div", {
                        className: "rp-guide-wrapper"
                    }, o.a.createElement("div", {
                        className: "rp-guide-close"
                    }), o.a.createElement("div", {
                        className: "rp-guide-title"
                    }, o.a.createElement("i", {
                        className: "rp-guide-title-red"
                    }), "已到账，请进入拼多多领取"), o.a.createElement("div", {
                        className: "rp-guide-hint"
                    }, "如何领取"), o.a.createElement("div", {
                        className: "rp-guide-img-container"
                    }, o.a.createElement("img", {
                        src: "/images/red_pack_guide0203.gif"
                    })))))
                }
            }, {
                key: "close",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.props.close()
                }
            }]),
            r
        }()).prototype, "close", [h.a], Object.getOwnPropertyDescriptor(Q.prototype, "close"), Q.prototype),
        Q)
          , J = (r(380),
        r(381),
        r(65))
          , Y = r(11);
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    X(e, t, r[t])
                })
            }
            return e
        }
        function X(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var $ = {
            op: "impr"
        }
          , ee = {
            op: "click"
        }
          , te = function(e) {
            return Z({}, $, {
                page_el_sn: e
            })
        }
          , re = function(e) {
            return Z({}, ee, {
                page_el_sn: e
            })
        }
          , ne = {
            DownResult: te(1244630),
            RetentionDialogImpr: te(3068290)
        }
          , oe = {
            MainImgClick: re(1244629),
            RetentionDialogClick: re(3068290)
        };
        function ie(e) {
            "@babel/helpers - typeof";
            return (ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function ae(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ce(e, t) {
            return (ce = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function se(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = ue(e);
                if (t) {
                    var o = ue(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ie(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function ue(e) {
            return (ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var le = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ce(e, t)
            }(r, n["Component"]);
            var t = se(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).state = {
                    hasError: !1
                },
                n
            }
            return function(e, t, r) {
                t && ae(e.prototype, t),
                r && ae(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.fallback
                      , r = e.children;
                    return this.state.hasError ? t : r
                }
            }, {
                key: "componentDidCatch",
                value: function(e, t) {
                    var r = this.props
                      , n = r.onError;
                    !function(e) {
                        var t = e.error
                          , r = e.info
                          , n = e.errorType
                          , o = void 0 === n ? "" : n
                          , i = e.isLog
                          , a = void 0 !== i && i;
                        if (!t || !t.islogged) {
                            if (t)
                                try {
                                    t.islogged = !0
                                } catch (e) {}
                            try {
                                Y.a.trackingRecord({
                                    op: "error",
                                    event: a ? "static_front_error_log" : "static_front_error",
                                    error_info: JSON.stringify(r),
                                    error_message: function(e) {
                                        return e && e.replace(/(PDDAccessToken=|AccessToken=|"AccessToken":)\s*"?([^;,"]+)"?([;,]?\s*)/gi, function(e, t, r, n) {
                                            return "".concat(t).concat(r.length).concat(n)
                                        })
                                    }(JSON.stringify(t)),
                                    error_type: o,
                                    error_stack: t && t.stack,
                                    error_code: t && t.errorCode
                                })
                            } catch (e) {}
                        }
                    }({
                        error: e,
                        info: t,
                        errorType: r.errorType
                    }),
                    n && n()
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function() {
                    return {
                        hasError: !0
                    }
                }
            }]),
            r
        }();
        le.defaultProps = {
            fallback: null,
            errorType: "render"
        };
        var pe, fe = le, he = function(e) {
            try {
                history.replaceState(null, "", e)
            } catch (e) {}
            setTimeout(function() {
                window && window.location ? window.location.href = e : location.href = e
            }, 0)
        }, de = "唤起App失败", ge = function() {
            var e, t, r;
            void 0 !== document.hidden ? (t = "hidden",
            r = "visibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden",
            r = "webkitvisibilitychange");
            var n = Date.now();
            return new Promise(function(o, i) {
                function a(n) {
                    if (document.removeEventListener(r, a),
                    clearTimeout(e),
                    document[t] || n.hidden || "hidden" === document.visibilityState)
                        return o();
                    i(new Error(de))
                }
                document.addEventListener(r, a, !1),
                e = setTimeout(function() {
                    return document.removeEventListener(r, a),
                    document[t] || "hidden" === document.visibilityState ? o() : Date.now() - n > 2500 ? o() : void i(new Error(de))
                }, 2e3)
            }
            )
        };
        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    me(e, t, r[t])
                })
            }
            return e
        }
        function me(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function ve(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function be(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        ve(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        ve(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function we(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function _e(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Oe, Se = (_e((pe = function() {
            function e(t) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.bridgeReq = void 0,
                this.bridgeRes = void 0,
                this.props = void 0,
                this.pkg = "",
                this.data = void 0,
                this.imgUrl = void 0,
                this.bgGray = void 0,
                this.licGray = void 0,
                this.askApkDownloadTimer = void 0,
                this.beginDownloadTime = void 0,
                this.canTabLaunch = !1,
                this.hasInstall = !1,
                this.launchUrl = "index.html",
                this.props = t,
                this.bridgeReq = t.bridgeReq,
                this.bridgeRes = t.bridgeRes,
                this.data = t.data,
                this.licGray = t.licGray,
                this.bgGray = t.bgGray,
                this.imgUrl = t.imgUrl
            }
            return function(e, t, r) {
                t && we(e.prototype, t),
                r && we(e, r)
            }(e, [{
                key: "listenResCustomClick",
                value: function(e) {
                    var t = a()(e, "__data__", {});
                    switch (t.reqId) {
                    case y:
                        this.quietTestingInstall(t);
                        break;
                    case g:
                        this.isApkInstalled(t);
                        break;
                    case m:
                        this.installApp();
                        break;
                    case v:
                        this.isApkDownload(t);
                        break;
                    case b:
                        this.runApp()
                    }
                }
            }, {
                key: "updateLaunchUrl",
                value: function(e) {
                    e && (this.launchUrl = e)
                }
            }, {
                key: "tryTrigger",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    try {
                                        this.bridgeReq.current.dispatchEvent(R({
                                            name: g,
                                            reqId: y
                                        }))
                                    } catch (e) {}
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    throw new Error("go store");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "goQApp",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    throw new Error("go store");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "quietTestingInstall",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e(t) {
                        var r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = a()(t, "res", !1),
                                    Y.a.trackingRecord(ye({}, ne.DownResult, {
                                        down: Number(r),
                                        brand: this.props.brand || -1
                                    })),
                                    !r) {
                                        e.next = 16;
                                        break
                                    }
                                    if (this.hasInstall = !0,
                                    !!1) {
                                        e.next = 9;
                                        break
                                    }
                                    this.canTabLaunch = !0,
                                    e.next = 16;
                                    break;
                                case 9:
                                    return e.prev = 9,
                                    e.next = 12,
                                    this.goQApp();
                                case 12:
                                    e.next = 16;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t0 = e.catch(9);
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[9, 14]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "runApp",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    ge();
                                case 3:
                                    e.next = 8;
                                    break;
                                case 5:
                                    e.prev = 5,
                                    e.t0 = e.catch(0),
                                    this.wxDefaultLoad();
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[0, 5]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = be(regeneratorRuntime.mark(function e(t) {
                        var r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = a()(t, "res", !1),
                                    "Tk9UX1NVUFBPUlQ=" !== a()(t, "data", null)) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.prev = 3,
                                    e.next = 6,
                                    this.goQApp();
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(3),
                                    this.wxDefaultLoad();
                                case 11:
                                    return e.abrupt("return", !0);
                                case 12:
                                    if (r) {
                                        e.next = 16;
                                        break
                                    }
                                    return this.beginDownloadTime = Date.now(),
                                    this.bridgeReq.current.dispatchEvent(R({
                                        name: m,
                                        reqId: m
                                    })),
                                    e.abrupt("return", !0);
                                case 16:
                                    return e.abrupt("return", !1);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[3, 8]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "installApp",
                value: function() {
                    var e = this;
                    this.props.showRedPackWaitDialog();
                    var t = 0;
                    setTimeout(function() {
                        e.askApkDownloadTimer = window.setInterval(function() {
                            if (++t >= 15)
                                return clearInterval(e.askApkDownloadTimer),
                                void e.wxDefaultLoad();
                            e.bridgeReq.current.dispatchEvent(R({
                                name: v,
                                reqId: v
                            }))
                        }, 1e3)
                    }, 1e3)
                }
            }, {
                key: "isApkDownload",
                value: function(e) {
                    var t = this;
                    if (a()(e, "res", !1)) {
                        var r = Date.now() - this.beginDownloadTime;
                        Y.a.trackingRecord({
                            op: "impr",
                            mq_time: r
                        }),
                        this.props.setInstallAkpProcess(100),
                        this.askApkDownloadTimer && clearInterval(this.askApkDownloadTimer),
                        setTimeout(function() {
                            t.props.closeRedPackWaitDialog()
                        }, 2e3)
                    }
                }
            }, {
                key: "wxDefaultLoad",
                value: function() {
                    f.b.isIOSWeChatPlatform() ? he(O) : he(_)
                }
            }]),
            e
        }()).prototype, "listenResCustomClick", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "listenResCustomClick"), pe.prototype),
        _e(pe.prototype, "updateLaunchUrl", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "updateLaunchUrl"), pe.prototype),
        _e(pe.prototype, "tryTrigger", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "tryTrigger"), pe.prototype),
        _e(pe.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "triggerHandler"), pe.prototype),
        _e(pe.prototype, "goQApp", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "goQApp"), pe.prototype),
        _e(pe.prototype, "quietTestingInstall", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "quietTestingInstall"), pe.prototype),
        _e(pe.prototype, "runApp", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "runApp"), pe.prototype),
        _e(pe.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "isApkInstalled"), pe.prototype),
        _e(pe.prototype, "installApp", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "installApp"), pe.prototype),
        _e(pe.prototype, "isApkDownload", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "isApkDownload"), pe.prototype),
        _e(pe.prototype, "wxDefaultLoad", [h.a], Object.getOwnPropertyDescriptor(pe.prototype, "wxDefaultLoad"), pe.prototype),
        pe);
        function ke(e) {
            "@babel/helpers - typeof";
            return (ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ee(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function Ie(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Ee(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Ee(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function Pe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Re(e, t, r) {
            return (Re = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = De(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get ? o.get.call(r) : o.value
                }
            }
            )(e, t, r || e)
        }
        function Ae(e, t) {
            return (Ae = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Te(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = De(e);
                if (t) {
                    var o = De(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ke(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ce(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var je, xe = (Ce((Oe = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ae(e, t)
            }(r, Se);
            var t = Te(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                t.apply(this, arguments)
            }
            return function(e, t, r) {
                t && Pe(e.prototype, t),
                r && Pe(e, r)
            }(r, [{
                key: "triggerHandler",
                value: function() {
                    var e = Ie(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.canTabLaunch) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bridgeReq.current.dispatchEvent(R({
                                        name: b,
                                        reqId: b
                                    })),
                                    e.abrupt("return");
                                case 3:
                                    this.bridgeReq.current.dispatchEvent(R({
                                        name: g,
                                        reqId: g
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = Ie(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Re(De(r.prototype), "isApkInstalled", this).call(this, t);
                                case 2:
                                    if (!e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    this.wxDefaultLoad();
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(Oe.prototype, "triggerHandler"), Oe.prototype),
        Ce(Oe.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(Oe.prototype, "isApkInstalled"), Oe.prototype),
        Oe), Le = r(29), Ue = {
            DL_REDPACK: "dl_redpacket_new",
            DL_CJ: "dl_cj",
            DL_BARGAIN_2: "dl_bargain_2",
            DL_BARGAIN_TEST_1: "dl_bargain_test_1",
            DL_REDPACKET_TCN: "dl_redpacket_tcn",
            DL_REDPACKET_TEST: "dl_redpacket_test",
            KL_U: "scapes_kl_u"
        }, Ne = [], We = r(285), Me = r.n(We), Be = /^(\/[a-z]+)/, Qe = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "s1.ax1x.com";
            if (!Me()(e))
                return "";
            var r = e;
            return Be.test(r) || (r = "/" + r),
            r = (r = r.replace(/^\/mobile-spark/, "")).replace(/^\/images/, ""),
            "".concat("https://").concat(t).concat(r)
        };
        function qe(e) {
            "@babel/helpers - typeof";
            return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function He(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function Fe(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        He(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        He(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function Ve(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ke(e, t, r) {
            return (Ke = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Je(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get ? o.get.call(r) : o.value
                }
            }
            )(e, t, r || e)
        }
        function ze(e, t) {
            return (ze = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ge(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Je(e);
                if (t) {
                    var o = Je(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === qe(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function Je(e) {
            return (Je = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Ye(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Ze, Xe = (Ye((je = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ze(e, t)
            }(r, Se);
            var t = Ge(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).pkg = void 0,
                n.pkg = n.data.pkg || "com.select.duoduo",
                n
            }
            return function(e, t, r) {
                t && Ve(e.prototype, t),
                r && Ve(e, r)
            }(r, [{
                key: "goAutoDownloadQApp",
                value: function() {
                    var e = Fe(regeneratorRuntime.mark(function e() {
                        var t, r, n, o;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    n = a()(this.props, "queries.chron_activity_code", ""),
                                    o = "?".concat(Object(c.a)({
                                        is_custom: n,
                                        bg_image: Qe(a()(this.props, "queries.img_url", w))
                                    })),
                                    e.next = 6,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        decoQuery: o,
                                        autoDownload: 1,
                                        cipher: E.a.encode(r)
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "goQApp",
                value: function() {
                    var e = Fe(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    e.next = 4,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        cipher: E.a.encode(r)
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "tryTrigger",
                value: function() {
                    var e = Fe(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a()(this.props, "queries.host_scene_id", "") !== Ue.DL_REDPACKET_TEST) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.prev = 2,
                                    e.next = 5,
                                    this.goAutoDownloadQApp();
                                case 5:
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(2),
                                    this.wxDefaultLoad();
                                case 10:
                                    e.next = 14;
                                    break;
                                case 12:
                                    return e.next = 14,
                                    Ke(Je(r.prototype), "tryTrigger", this).call(this);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[2, 7]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = Fe(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.canTabLaunch) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bridgeReq.current.dispatchEvent(R({
                                        name: b,
                                        reqId: b
                                    })),
                                    e.abrupt("return");
                                case 3:
                                    if (e.prev = 3,
                                    t = this.licGray % 10,
                                    !(this.data.isRedPack && t < 2)) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 6,
                                    e.next = 9,
                                    this.goQApp();
                                case 9:
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(6),
                                    this.wxDefaultLoad();
                                case 14:
                                    this.bridgeReq.current.dispatchEvent(R({
                                        name: g,
                                        reqId: g
                                    })),
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17,
                                    e.t1 = e.catch(3),
                                    this.wxDefaultLoad();
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[3, 17], [6, 11]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = Fe(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Ke(Je(r.prototype), "isApkInstalled", this).call(this, t);
                                case 2:
                                    if (!e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    this.goQApp();
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(4),
                                    this.wxDefaultLoad();
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[4, 9]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "goAutoDownloadQApp", [h.a], Object.getOwnPropertyDescriptor(je.prototype, "goAutoDownloadQApp"), je.prototype),
        Ye(je.prototype, "goQApp", [h.a], Object.getOwnPropertyDescriptor(je.prototype, "goQApp"), je.prototype),
        Ye(je.prototype, "tryTrigger", [h.a], Object.getOwnPropertyDescriptor(je.prototype, "tryTrigger"), je.prototype),
        Ye(je.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(je.prototype, "triggerHandler"), je.prototype),
        Ye(je.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(je.prototype, "isApkInstalled"), je.prototype),
        je);
        function $e(e) {
            "@babel/helpers - typeof";
            return ($e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function et(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function tt(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        et(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        et(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function rt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function nt(e, t, r) {
            return (nt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = at(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get ? o.get.call(r) : o.value
                }
            }
            )(e, t, r || e)
        }
        function ot(e, t) {
            return (ot = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function it(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = at(e);
                if (t) {
                    var o = at(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === $e(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function at(e) {
            return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ct(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var st, ut = (ct((Ze = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ot(e, t)
            }(r, Se);
            var t = it(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).pkg = void 0,
                n.pkg = n.data.pkg || "com.select.duoduo",
                n
            }
            return function(e, t, r) {
                t && rt(e.prototype, t),
                r && rt(e, r)
            }(r, [{
                key: "goQApp",
                value: function() {
                    var e = tt(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    e.next = 4,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        cipher: E.a.encode(r)
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = tt(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.canTabLaunch) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bridgeReq.current.dispatchEvent(R({
                                        name: b,
                                        reqId: b
                                    })),
                                    e.abrupt("return");
                                case 3:
                                    try {
                                        this.bridgeReq.current.dispatchEvent(R({
                                            name: g,
                                            reqId: g
                                        }))
                                    } catch (e) {
                                        this.wxDefaultLoad()
                                    }
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = tt(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    nt(at(r.prototype), "isApkInstalled", this).call(this, t);
                                case 2:
                                    if (!e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    this.goQApp();
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(4),
                                    this.wxDefaultLoad();
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[4, 9]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "goQApp", [h.a], Object.getOwnPropertyDescriptor(Ze.prototype, "goQApp"), Ze.prototype),
        ct(Ze.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(Ze.prototype, "triggerHandler"), Ze.prototype),
        ct(Ze.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(Ze.prototype, "isApkInstalled"), Ze.prototype),
        Ze);
        function lt(e) {
            "@babel/helpers - typeof";
            return (lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function pt(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function ft(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        pt(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        pt(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function ht(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function dt(e, t, r) {
            return (dt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = mt(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get ? o.get.call(r) : o.value
                }
            }
            )(e, t, r || e)
        }
        function gt(e, t) {
            return (gt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function yt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = mt(e);
                if (t) {
                    var o = mt(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === lt(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function mt(e) {
            return (mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function vt(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var bt, wt = (vt((st = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && gt(e, t)
            }(r, Se);
            var t = yt(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).pkg = void 0,
                n.pkg = n.data.pkg || "com.select.duoduo",
                n
            }
            return function(e, t, r) {
                t && ht(e.prototype, t),
                r && ht(e, r)
            }(r, [{
                key: "goQApp",
                value: function() {
                    var e = ft(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    e.next = 4,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        autoDownload: 1,
                                        cipher: E.a.encode(r)
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = ft(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.canTabLaunch) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bridgeReq.current.dispatchEvent(R({
                                        name: b,
                                        reqId: b
                                    })),
                                    e.abrupt("return");
                                case 3:
                                    return e.prev = 3,
                                    e.next = 6,
                                    this.goQApp();
                                case 6:
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(3),
                                    this.wxDefaultLoad();
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[3, 8]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = ft(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    dt(mt(r.prototype), "isApkInstalled", this).call(this, t);
                                case 2:
                                    if (!e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    this.wxDefaultLoad();
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "goQApp", [h.a], Object.getOwnPropertyDescriptor(st.prototype, "goQApp"), st.prototype),
        vt(st.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(st.prototype, "triggerHandler"), st.prototype),
        vt(st.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(st.prototype, "isApkInstalled"), st.prototype),
        st);
        function _t(e) {
            "@babel/helpers - typeof";
            return (_t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ot(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function St(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        Ot(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        Ot(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function kt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Et(e, t, r) {
            return (Et = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, r) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Rt(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var o = Object.getOwnPropertyDescriptor(n, t);
                    return o.get ? o.get.call(r) : o.value
                }
            }
            )(e, t, r || e)
        }
        function It(e, t) {
            return (It = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Rt(e);
                if (t) {
                    var o = Rt(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === _t(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function Rt(e) {
            return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function At(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var Tt = (At((bt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && It(e, t)
            }(r, Se);
            var t = Pt(r);
            function r(e) {
                var n;
                if (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).pkg = void 0,
                n.pkg = n.data.pkg || "com.select.duoduo",
                a()(n.props, "queries.host_scene_id") === Ue.DL_BARGAIN_2 && "com.select.duoduo" === n.pkg) {
                    var o = ['?__SRC__={"packageName":"com.bbk.launcher2","type":"shortcut","extra":{"original":{"packageName":"com.tencent.mm","type":"url","extra":{"third_st_param":{"launchActivity":"com.tencent.mm.plugin.webview.ui.tools.WebViewUI"}}},"scene":"dialog"}}', '?__SRC__={"packageName":"com.bbk.launcher2","type":"sdk"}', '?__SRC__={"packageName":"com.quickapp.center","type":"quickApp","extra":{"third_st_param":{"source_version":32}}}']
                      , i = o[Math.floor(o.length * Math.random())];
                    n.pkg = "".concat(n.pkg).concat(i)
                }
                return n
            }
            return function(e, t, r) {
                t && kt(e.prototype, t),
                r && kt(e, r)
            }(r, [{
                key: "goQApp",
                value: function() {
                    var e = St(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    e.next = 4,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        cipher: E.a.encode(r)
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "goAutoDownloadQApp",
                value: function() {
                    var e = St(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = a()(this.props, "queries", {}),
                                    r = D(t),
                                    e.next = 4,
                                    Object(Le.a)(T(this.launchUrl), this.pkg, {
                                        cipher: E.a.encode(r),
                                        autoDownload: 1
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = St(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.canTabLaunch) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.bridgeReq.current.dispatchEvent(R({
                                        name: b,
                                        reqId: b
                                    })),
                                    e.abrupt("return");
                                case 3:
                                    if (e.prev = 3,
                                    a()(this.props, "queries.host_scene_id", "") === Ue.DL_REDPACK) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 8,
                                    this.goAutoDownloadQApp();
                                case 8:
                                    return e.abrupt("return");
                                case 9:
                                    this.bridgeReq.current.dispatchEvent(R({
                                        name: g,
                                        reqId: g
                                    })),
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(3),
                                    this.wxDefaultLoad();
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[3, 12]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "isApkInstalled",
                value: function() {
                    var e = St(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    Et(Rt(r.prototype), "isApkInstalled", this).call(this, t);
                                case 2:
                                    if (!e.sent) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    this.goQApp();
                                case 7:
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(4),
                                    this.wxDefaultLoad();
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[4, 9]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "goQApp", [h.a], Object.getOwnPropertyDescriptor(bt.prototype, "goQApp"), bt.prototype),
        At(bt.prototype, "goAutoDownloadQApp", [h.a], Object.getOwnPropertyDescriptor(bt.prototype, "goAutoDownloadQApp"), bt.prototype),
        At(bt.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(bt.prototype, "triggerHandler"), bt.prototype),
        At(bt.prototype, "isApkInstalled", [h.a], Object.getOwnPropertyDescriptor(bt.prototype, "isApkInstalled"), bt.prototype),
        bt);
        function Dt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var Ct = function(e, t) {
            var r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {}
                      , n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))),
                    n.forEach(function(t) {
                        Dt(e, t, r[t])
                    })
                }
                return e
            }({}, t, {
                brand: e
            });
            switch (e) {
            case d.HUAWEI:
                return new Xe(r);
            case d.OPPO:
                return new wt(r);
            case d.VIVO:
                return new Tt(r);
            case d.XIAOMI:
                return new ut(r);
            case d.OTHERS:
            default:
                return function(e) {
                    return /iphone|ipad|ipod/.test(e)
                }(navigator.userAgent.toLowerCase()) ? new Se(r) : new xe(r)
            }
        }
          , jt = r(64);
        function xt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    Lt(e, t, r[t])
                })
            }
            return e
        }
        function Lt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Ut(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        var Nt = function() {
            var e = function(e) {
                return function() {
                    var t = this
                      , r = arguments;
                    return new Promise(function(n, o) {
                        var i = e.apply(t, r);
                        function a(e) {
                            Ut(i, n, o, a, c, "next", e)
                        }
                        function c(e) {
                            Ut(i, n, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    )
                }
            }(regeneratorRuntime.mark(function e(t, r) {
                var n, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = a()(t, "queries", {}),
                            o = Object(jt.a)(r),
                            i = L({}, n),
                            e.next = 5,
                            Object(s.c)({
                                downloadParams: xt({}, i, {
                                    use_proxy_way: 1,
                                    launch_id: o
                                }),
                                timeout: 300
                            });
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();
        function Wt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var Mt, Bt = function(e) {
            var t = a()(e, "dialog", null)
              , r = a()(e, "dialogConfig", {})
              , n = a()(e, "closeDialog", function() {
                return null
            });
            return t ? o.a.createElement(t, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? Object(arguments[t]) : {}
                      , n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))),
                    n.forEach(function(t) {
                        Wt(e, t, r[t])
                    })
                }
                return e
            }({
                closeDialog: n
            }, r)) : null
        };
        r(382);
        function Qt(e) {
            "@babel/helpers - typeof";
            return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function qt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    Ht(e, t, r[t])
                })
            }
            return e
        }
        function Ht(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function Ft(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Vt(e, t) {
            return (Vt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Kt(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = zt(e);
                if (t) {
                    var o = zt(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Qt(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function zt(e) {
            return (zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Gt = (function(e, t, r, n, o) {
            var i = {};
            Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null)
        }((Mt = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Vt(e, t)
            }(r, n["Component"]);
            var t = Kt(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                t.apply(this, arguments)
            }
            return function(e, t, r) {
                t && Ft(e.prototype, t),
                r && Ft(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    return o.a.createElement("div", {
                        className: "share-modal-fill"
                    }, o.a.createElement("div", {
                        className: "act-retention-wrapper"
                    }, o.a.createElement("div", {
                        className: "act-retention-close",
                        onClick: this.confirmClick
                    }), o.a.createElement("div", {
                        className: "act-retention-main"
                    }, this.getTitle(), this.getConfirm(), this.getCancel())))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    Y.a.trackingRecord(qt({}, ne.RetentionDialogImpr))
                }
            }, {
                key: "getTitle",
                value: function() {
                    var e = a()(this.props, "data.isBargain", !1) ? "去拼多多领取0元商品～" : "你有福利待领取～";
                    return o.a.createElement("div", {
                        className: "act-retention-title"
                    }, e)
                }
            }, {
                key: "getConfirm",
                value: function() {
                    var e = a()(this.props, "data.isBargain", !1) ? "去领取商品" : "前往拼多多领取";
                    return o.a.createElement("div", {
                        className: "act-retention-confirm",
                        onClick: this.confirmClick
                    }, e)
                }
            }, {
                key: "getCancel",
                value: function() {
                    var e = a()(this.props, "data.isBargain", !1) ? "我不要" : "放弃";
                    return o.a.createElement("div", {
                        className: "act-retention-cancel",
                        onClick: this.confirmClick
                    }, e)
                }
            }, {
                key: "confirmClick",
                value: function(e) {
                    e && e.stopPropagation(),
                    Y.a.trackingRecord(qt({}, oe.RetentionDialogClick));
                    var t = a()(this.props, "closeDialog", function() {
                        return null
                    });
                    a()(this.props, "triggerHandler", function() {
                        return null
                    })(),
                    t()
                }
            }]),
            r
        }()).prototype, "confirmClick", [h.a], Object.getOwnPropertyDescriptor(Mt.prototype, "confirmClick"), Mt.prototype),
        Mt)
          , Jt = (r(383),
        Qe("/home/2020-06-22/4c64c080-621d-4acb-9055-ef67c250da64.png"))
          , Yt = function() {
            return o.a.createElement("div", {
                className: "share-modal-fill",
                onClick: function(e) {
                    e && e.stopPropagation(),
                    he("https://www.neuhf2.com/sgo_meat.html?thunder_scene=daily_cash_card")
                }
            }, o.a.createElement("div", {
                className: "act-retention-wrapper-card"
            }, o.a.createElement("img", {
                src: Jt
            })))
        };
        function Zt(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function Xt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var $t = function(e, t, r) {
            var n = e()
              , o = a()(r, "mobileEntity.hasInstall", !1)
              , i = a()(n, "queries.host_scene_id")
              , c = a()(n, "isAndroidWeChatPlatform")
              , s = a()(n, "data.sceneInfo.xcxDl05", 0);
            !o && s && c && i === Ue.DL_REDPACKET_TCN ? r.showDialog({
                dialog: Yt,
                dialogConfig: {}
            }) : r.showDialog({
                dialog: Gt,
                dialogConfig: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? Object(arguments[t]) : {}
                          , n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))),
                        n.forEach(function(t) {
                            Xt(e, t, r[t])
                        })
                    }
                    return e
                }({}, n, {
                    triggerHandler: r.triggerHandler
                })
            })
        }
          , er = function() {
            var e = function(e) {
                return function() {
                    var t = this
                      , r = arguments;
                    return new Promise(function(n, o) {
                        var i = e.apply(t, r);
                        function a(e) {
                            Zt(i, n, o, a, c, "next", e)
                        }
                        function c(e) {
                            Zt(i, n, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    )
                }
            }(regeneratorRuntime.mark(function e(t, r, n) {
                var o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (o = t(),
                            a()(o, "data.personal", !1)) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            (function() {
                                return window.history.state && window.history.state.hash
                            }
                            )() || window.history.replaceState({
                                name: "original"
                            }, null, "#"),
                            i = Object(c.d)("is_back") || "",
                            location.hash || "" || i || history && history.pushState && history.pushState({
                                hash: !0
                            }, "", "#back"),
                            window.onpopstate = function() {
                                Object(c.d)("is_back") || "" || !location || location.hash || $t(t, 0, n)
                            }
                            ;
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }, e)
            }));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }();
        var tr, rr = function(e) {
            setTimeout(function() {
                location.href = e
            }, 0)
        };
        function nr(e) {
            "@babel/helpers - typeof";
            return (nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function or(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function ir(e) {
            return function() {
                var t = this
                  , r = arguments;
                return new Promise(function(n, o) {
                    var i = e.apply(t, r);
                    function a(e) {
                        or(i, n, o, a, c, "next", e)
                    }
                    function c(e) {
                        or(i, n, o, a, c, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
        function ar(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    cr(e, t, r[t])
                })
            }
            return e
        }
        function cr(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function sr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ur(e, t) {
            return (ur = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function lr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = pr(e);
                if (t) {
                    var o = pr(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === nr(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function pr(e) {
            return (pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function fr(e, t, r, n, o) {
            var i = {};
            return Object.keys(n).forEach(function(e) {
                i[e] = n[e]
            }),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce(function(r, n) {
                return n(e, t, r) || r
            }, i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(e, t, i),
            i = null),
            i
        }
        var hr = (fr((tr = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ur(e, t)
            }(r, n["Component"]);
            var t = lr(r);
            function r(e) {
                var n;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).bgGray = void 0,
                n.licGray = void 0,
                n.askApkDownloadTimer = void 0,
                n.mobileEntity = void 0,
                n.initialState = {
                    guideDialog: !1,
                    showRangeString: !1,
                    dialog: null,
                    digestUrl: "",
                    dialogConfig: {},
                    redPackGuideDialog: !1,
                    redPackWaitDialog: !1,
                    installAkpProcess: 0
                },
                n.imgUrl = void 0,
                n.shareCode = void 0,
                n.originWindowWidth = window.innerWidth,
                n.webglSupport = function() {
                    try {
                        var e = document.createElement("canvas");
                        return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                    } catch (e) {
                        return !1
                    }
                }(),
                n.bridgeReq = o.a.createRef(),
                n.bridgeRes = o.a.createRef(),
                n.glRef = o.a.createRef(),
                n.iframeRef = o.a.createRef(),
                n.bgGray = Number(a()(n.props, "queries.bgid", "").slice(-2)) || 0,
                n.licGray = Number(a()(n.props, "queries.invite_code", "").slice(-2)) || 0;
                var i = a()(n.props, "queries", {});
                return n.imgUrl = Qe(a()(n.props, "queries.img_url", w)),
                n.shareCode = D(i),
                n.mobileEntity = Ct(a()(n.props, "data.brand", d.OTHERS), {
                    queries: i,
                    licGray: n.licGray,
                    bridgeReq: n.bridgeReq,
                    bridgeRes: n.bridgeRes,
                    bgGray: n.bgGray,
                    data: a()(n.props, "data", S),
                    imgUrl: n.imgUrl,
                    setInstallAkpProcess: n.setInstallAkpProcess,
                    showRedPackWaitDialog: n.showRedPackWaitDialog,
                    closeRedPackWaitDialog: n.closeRedPackWaitDialog
                }),
                n.updateCurrentLaunchUrl(),
                n.state = ar({}, n.initialState),
                n
            }
            return function(e, t, r) {
                t && sr(e.prototype, t),
                r && sr(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.redPackGuideDialog
                      , r = e.installAkpProcess
                      , n = e.redPackWaitDialog
                      , i = a()(this.props, "data", S);
                    return o.a.createElement(fe, null, o.a.createElement("div", {
                        onClick: this.triggerHandler,
                        className: "mobile-container"
                    }, o.a.createElement("div", {
                        ref: this.bridgeReq,
                        id: "dGJzcmVx"
                    }), o.a.createElement("div", {
                        ref: this.bridgeRes,
                        id: "dGJzUmVz"
                    }), this.getLGImage(), this.generateUlinkMask(), this.generateGuideDialog(), t && o.a.createElement(G, {
                        close: this.closeRedPackGuideDialog
                    }), n && o.a.createElement(q, {
                        data: i,
                        close: this.closeRedPackWaitDialog,
                        installAkpProcess: r
                    }), o.a.createElement(Bt, {
                        dialog: this.state.dialog,
                        closeDialog: this.closeDialog,
                        dialogConfig: this.state.dialogConfig
                    })))
                }
            }, {
                key: "ioRangeTrigger",
                value: function() {
                    var e = ir(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(l.a)(),
                                    e.next = 3,
                                    t.post("api/flow/jarvis/click/reports");
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "bridgeWork",
                value: function() {
                    var e = ir(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = a()(this.props, "data.sceneInfo.notBsgh", 0),
                                    r = a()(this.props, "queries.host_scene_id", ""),
                                    t) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (r.match(/^dl/g)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8,
                                    P("https://static.nvude3.com/cos_h5/static/2020-04-24/0a82f485-e6ee-4d31-9883-e7b3d78b178b.js");
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = ir(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = a()(this.props, "queries.host_scene_id", ""),
                                    location && location.hash && window.history.replaceState({
                                        name: "original"
                                    }, null, "#"),
                                    window.ioRangeFlag = 0,
                                    window.ioRangeTrigger = this.ioRangeTrigger,
                                    t === Ue.DL_BARGAIN_TEST_1 && document.addEventListener("WeixinJSBridgeReady", function() {
                                        window.WeixinJSBridge.call("hideOptionMenu")
                                    }),
                                    this.loggerPv(),
                                    r = a()(this.props, "data.personal", !1),
                                    this.props.isThirdBrowser && this.launchTarget(!1),
                                    this.props.isWeChatPlatform && this.bridgeWork(),
                                    !this.props.isAndroidWeChatPlatform) {
                                        e.next = 22;
                                        break
                                    }
                                    e.prev = 10,
                                    e.next = 14;
                                    break;
                                case 14:
                                    return e.next = 16,
                                    new Promise(function(e) {
                                        var t = document.createElement("script");
                                        t.type = "text/javascript";
                                        var r = Object({
                                            BROWSER: !0
                                        }).STAGING || location.hostname.includes("hutaojie") ? "http://www.2qrfef.com" : "";
                                        t.src = r + "/publics/js/4cbb1680-9b70-452c-a225-196bda40a64e.js",
                                        t.crossorigin = "anonymous",
                                        document.getElementsByTagName("head")[0].appendChild(t),
                                        t.onload = function() {
                                            e()
                                        }
                                    }
                                    );
                                case 16:
                                    this.bridgeRes.current.addEventListener("__customClick__", this.mobileEntity.listenResCustomClick),
                                    r && this.mobileEntity.tryTrigger(),
                                    e.next = 22;
                                    break;
                                case 20:
                                    e.prev = 20,
                                    e.t0 = e.catch(10);
                                case 22:
                                    this.drawMainImg(),
                                    er(this.getProps, this.getState, this);
                                case 24:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[10, 20]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "drawMainImg",
                value: function() {
                    var e = this;
                    if (this.glRef && this.glRef.current) {
                        var t = a()(this.props, "data.digestUrl", "")
                          , r = a()(this.props, "data.ioRangeString", "");
                        if (this.setState({
                            digestUrl: t
                        }),
                        !t)
                            try {
                                (this.iframeRef.current.contentDocument ? this.iframeRef.current.contentDocument : this.iframeRef.current.contentWindow.document).body.innerHTML = r
                            } catch (e) {}
                        u.e.skipHello(),
                        u.d.PREFER_ENV = u.b.WEBGL;
                        var n = new u.a({
                            width: window.innerWidth,
                            height: window.innerHeight,
                            backgroundColor: 16777215,
                            resolution: 1
                        })
                          , o = Qe(a()(this.props, "queries.back_ground_img", ""))
                          , i = Qe(a()(this.props, "queries.button_img", ""));
                        n.loader.add([{
                            name: "backgroundImg",
                            url: o
                        }, {
                            name: "backgroundBtn",
                            url: i
                        }]).load(function(t, r) {
                            var o = new u.c(r.backgroundImg.texture)
                              , c = new u.c(r.backgroundBtn.texture)
                              , s = window.innerWidth / o.width;
                            n.stage.scale.set(s);
                            var l = i.match(/_top_(\d+)/)
                              , f = Number(a()(l, "1", 0));
                            o.anchor.set(.5),
                            o.x = o.width / 2,
                            o.y = o.height / 2,
                            c.anchor.set(.5),
                            c.x = o.width / 2,
                            c.y = f ? 2 * f + c.height / 2 : .7 * o.height;
                            var h = 1;
                            f || (c.scale.set(.65),
                            h = .65),
                            n.stage.addChild(o),
                            n.stage.addChild(c),
                            e.glRef.current.appendChild(n.view),
                            e.setState({
                                showRangeString: !0
                            });
                            var d = window && "ontouchstart"in window ? "tap" : "click";
                            o.interactive = !0,
                            o.on(d, function() {
                                e.props.isIOSWeChatPlatform && (e.setState({
                                    showRangeString: !1
                                }),
                                setTimeout(function() {
                                    e.setState({
                                        showRangeString: !0
                                    })
                                }, 1e3)),
                                e.triggerHandler()
                            }),
                            new p.a.Tween({
                                scale: .95 * h
                            }).to({
                                scale: [1.05 * h, .95 * h]
                            }, 800).onUpdate(function(e) {
                                c.scale.set(a()(e, "scale", 1))
                            }).repeat(1 / 0).start()
                        }),
                        n.ticker.add(function() {
                            p.a.update()
                        })
                    }
                }
            }, {
                key: "generateImg",
                value: function() {
                    var e = this.imgUrl;
                    return o.a.createElement("img", {
                        src: e || w,
                        className: "act-img-url"
                    })
                }
            }, {
                key: "getLGImage",
                value: function() {
                    var e = a()(this.props, "data.sceneInfo.notGs", 0)
                      , t = a()(this.props, "data.sceneInfo.notBsgh", 0)
                      , r = a()(this.props, "queries.back_ground_img", "")
                      , i = a()(this.props, "queries.button_img", "")
                      , c = r && i
                      , s = this.state.digestUrl;
                    return this.webglSupport && e && !t && c ? o.a.createElement(n.Fragment, null, o.a.createElement("div", {
                        style: {
                            display: this.state.showRangeString ? "" : "none"
                        }
                    }, o.a.createElement("iframe", {
                        style: {
                            width: this.originWindowWidth
                        },
                        ref: this.iframeRef,
                        className: "act-iframe"
                    }), Boolean(s) && o.a.createElement("img", {
                        className: "act-iframe",
                        src: Qe(s),
                        style: {
                            width: this.originWindowWidth
                        }
                    })), o.a.createElement("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 99999
                        },
                        ref: this.glRef
                    })) : this.generateImg()
                }
            }, {
                key: "generateGuideDialog",
                value: function() {
                    return this.state.guideDialog ? o.a.createElement("div", {
                        className: "bg-fill",
                        onClick: this.closeGuideDialog
                    }, o.a.createElement("div", {
                        className: "share-point act-share-point"
                    }), this.props.isIOSWeChatPlatform && o.a.createElement("div", {
                        className: "act-guide-ios-mask"
                    }, o.a.createElement("div", null, "1. 点击右上角“···”按钮"), o.a.createElement("div", {
                        className: "act-guide-ios-second"
                    }, "2. 找到并选择", o.a.createElement("i", null))), this.props.isAndroidWeChatPlatform && o.a.createElement("div", {
                        className: "act-guide-android-mask"
                    }, "点击右上角使用浏览器打开")) : null
                }
            }, {
                key: "generateUlinkMask",
                value: function() {
                    var e = a()(this.props, "data.personal", !1)
                      , t = a()(this.props, "queries.host_scene_id", "");
                    if (!Ne.includes(t))
                        return null;
                    if (!this.props.isIOSWeChatPlatform)
                        return null;
                    if (!e)
                        return null;
                    if (!(Object(f.a)(f.b.IOSSystemVersion, "9") >= 0))
                        return null;
                    var r = this.getLaunchUrl()
                      , n = encodeURIComponent(A(r))
                      , i = "https://vnsiubvgs.com/eccymosis/universal-link?originalUrl=&scheme=".concat(n);
                    return o.a.createElement("div", {
                        onClick: this.uForward
                    }, o.a.createElement("a", {
                        className: "u-link-fill",
                        target: "_blank",
                        href: i
                    }))
                }
            }, {
                key: "getProps",
                value: function() {
                    return ar({}, this.props)
                }
            }, {
                key: "getState",
                value: function() {
                    return ar({}, this.state)
                }
            }, {
                key: "showDialog",
                value: function(e) {
                    var t = e.dialog
                      , r = e.dialogConfig;
                    this.setState({
                        dialog: t,
                        dialogConfig: r
                    })
                }
            }, {
                key: "closeDialog",
                value: function() {
                    this.setState({
                        dialog: null,
                        dialogConfig: {}
                    })
                }
            }, {
                key: "uForward",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.copyShareCode(),
                    setTimeout(function() {
                        window.location.reload()
                    }, 500)
                }
            }, {
                key: "loggerPv",
                value: function() {
                    var e = a()(this.props, "queries", {})
                      , t = L(ar({
                        op: "pv",
                        src: "staticpage"
                    }, e, {
                        pack_name: this.mobileEntity.pkg
                    }), e);
                    Y.a.trackingRecord(ar({}, t))
                }
            }, {
                key: "showGuideDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        guideDialog: !0
                    })
                }
            }, {
                key: "setInstallAkpProcess",
                value: function(e) {
                    this.setState({
                        installAkpProcess: e
                    })
                }
            }, {
                key: "showRedPackWaitDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        redPackWaitDialog: !0
                    })
                }
            }, {
                key: "closeRedPackWaitDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        redPackWaitDialog: !1
                    })
                }
            }, {
                key: "showRedPackGuideDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        redPackGuideDialog: !0
                    })
                }
            }, {
                key: "closeRedPackGuideDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        redPackGuideDialog: !1
                    })
                }
            }, {
                key: "clickSetCanShowAlert",
                value: function() {
                    window.ioRangeFlag = 1,
                    setTimeout(function() {
                        window.ioRangeFlag = 0
                    }, 2e3)
                }
            }, {
                key: "triggerHandler",
                value: function() {
                    var e = ir(regeneratorRuntime.mark(function e(t) {
                        var r, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t && t.stopPropagation(),
                                    r = a()(this.props, "data.personal", !1),
                                    this.copyShareCode(),
                                    this.clickSetCanShowAlert(),
                                    Y.a.trackingRecord(ar({}, oe.MainImgClick)),
                                    !this.props.isThirdBrowser) {
                                        e.next = 8;
                                        break
                                    }
                                    return this.launchTarget(!0),
                                    e.abrupt("return");
                                case 8:
                                    if (!r) {
                                        e.next = 22;
                                        break
                                    }
                                    return n = this.updateCurrentLaunchUrl(),
                                    Nt(this.props, n),
                                    e.prev = 11,
                                    e.next = 14,
                                    this.mobileEntity.triggerHandler();
                                case 14:
                                    return e.abrupt("return");
                                case 17:
                                    e.prev = 17,
                                    e.t0 = e.catch(11);
                                case 19:
                                    this.wxDefaultLoad(),
                                    e.next = 23;
                                    break;
                                case 22:
                                    this.wxDefaultLoad();
                                case 23:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[11, 17]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "wxDefaultLoad",
                value: function() {
                    this.props.isIOSWeChatPlatform ? he(O) : he(_)
                }
            }, {
                key: "closeGuideDialog",
                value: function(e) {
                    e && e.stopPropagation(),
                    this.setState({
                        guideDialog: !1
                    })
                }
            }, {
                key: "copyShareCode",
                value: function(e) {
                    e && e.stopPropagation();
                    var t = this.shareCode;
                    t && (new J.a).copy(t)
                }
            }, {
                key: "getLaunchUrl",
                value: function() {
                    var e = a()(this.props, "queries", {})
                      , t = L({}, e)
                      , r = I(ar({}, t), e.launch_url || "index.html")
                      , n = Object(s.b)(r).launchUrl.split("?")[1] || "";
                    return ((e.launch_url || "").replace(/\?/gi, "") || "index.html") + "?" + n || "index.html"
                }
            }, {
                key: "updateCurrentLaunchUrl",
                value: function() {
                    var e = this.getLaunchUrl();
                    return this.mobileEntity.updateLaunchUrl(e),
                    e
                }
            }, {
                key: "launchTarget",
                value: function() {
                    var e = ir(regeneratorRuntime.mark(function e() {
                        var t, r, n, o, i = arguments;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = !(i.length > 0 && void 0 !== i[0]) || i[0],
                                    r = f.b.IOSSystemVersion ? 2 : 1,
                                    n = Object(c.d)("launch_type") || r,
                                    o = this.updateCurrentLaunchUrl(),
                                    e.prev = 4,
                                    Nt(this.props, o),
                                    e.next = 8,
                                    new s.a({
                                        schemeURL: A(o),
                                        launchType: n
                                    }).open();
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(4),
                                    t && rr("/download.html?src=browser&campaign=acw_browser&cid=acw_browser&add_download_task=1&task_apk_tag=3&android_browser_download=1&ios_fast_download=1");
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[4, 10]])
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            r
        }()).prototype, "ioRangeTrigger", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "ioRangeTrigger"), tr.prototype),
        fr(tr.prototype, "bridgeWork", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "bridgeWork"), tr.prototype),
        fr(tr.prototype, "drawMainImg", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "drawMainImg"), tr.prototype),
        fr(tr.prototype, "getProps", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "getProps"), tr.prototype),
        fr(tr.prototype, "getState", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "getState"), tr.prototype),
        fr(tr.prototype, "showDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "showDialog"), tr.prototype),
        fr(tr.prototype, "closeDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "closeDialog"), tr.prototype),
        fr(tr.prototype, "uForward", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "uForward"), tr.prototype),
        fr(tr.prototype, "loggerPv", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "loggerPv"), tr.prototype),
        fr(tr.prototype, "showGuideDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "showGuideDialog"), tr.prototype),
        fr(tr.prototype, "setInstallAkpProcess", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "setInstallAkpProcess"), tr.prototype),
        fr(tr.prototype, "showRedPackWaitDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "showRedPackWaitDialog"), tr.prototype),
        fr(tr.prototype, "closeRedPackWaitDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "closeRedPackWaitDialog"), tr.prototype),
        fr(tr.prototype, "showRedPackGuideDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "showRedPackGuideDialog"), tr.prototype),
        fr(tr.prototype, "closeRedPackGuideDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "closeRedPackGuideDialog"), tr.prototype),
        fr(tr.prototype, "clickSetCanShowAlert", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "clickSetCanShowAlert"), tr.prototype),
        fr(tr.prototype, "triggerHandler", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "triggerHandler"), tr.prototype),
        fr(tr.prototype, "wxDefaultLoad", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "wxDefaultLoad"), tr.prototype),
        fr(tr.prototype, "closeGuideDialog", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "closeGuideDialog"), tr.prototype),
        fr(tr.prototype, "copyShareCode", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "copyShareCode"), tr.prototype),
        fr(tr.prototype, "getLaunchUrl", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "getLaunchUrl"), tr.prototype),
        fr(tr.prototype, "updateCurrentLaunchUrl", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "updateCurrentLaunchUrl"), tr.prototype),
        fr(tr.prototype, "launchTarget", [h.a], Object.getOwnPropertyDescriptor(tr.prototype, "launchTarget"), tr.prototype),
        tr);
        function dr(e) {
            "@babel/helpers - typeof";
            return (dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function gr() {
            return (gr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function yr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? Object(arguments[t]) : {}
                  , n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                n.forEach(function(t) {
                    mr(e, t, r[t])
                })
            }
            return e
        }
        function mr(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function vr(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function br(e, t) {
            return (br = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function wr(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = _r(e);
                if (t) {
                    var o = _r(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === dr(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function _r(e) {
            return (_r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Or = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && br(e, t)
            }(r, n["Component"]);
            var t = wr(r);
            function r(e) {
                var n;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).queries = void 0,
                n.data = void 0,
                n.platform = void 0,
                n.platform = {
                    isIOSWeChatPlatform: f.b.isIOSWeChatPlatform(),
                    isAndroidWeChatPlatform: f.b.isAndroidWeChatPlatform(),
                    isThirdBrowser: !f.b.isWeChatPlatform(),
                    isWeChatPlatform: f.b.isWeChatPlatform()
                };
                try {
                    var o = window.rawData.longUrl
                      , i = void 0 === o ? "" : o
                      , a = window.rawData
                      , s = yr({}, Object(c.h)(i), Object(c.e)())
                      , u = {};
                    Object.assign(u, yr({}, a, {
                        isRedPack: Boolean(s.invite_code),
                        isBargain: Boolean(s.bgid)
                    })),
                    n.queries = s,
                    n.data = u
                } catch (e) {
                    n.data = {},
                    n.queries = {}
                }
                return n
            }
            return function(e, t, r) {
                t && vr(e.prototype, t),
                r && vr(e, r)
            }(r, [{
                key: "render",
                value: function() {
                    return o.a.createElement(hr, gr({
                        queries: this.queries,
                        data: this.data
                    }, this.platform)) || null
                }
            }]),
            r
        }()
          , Sr = r(193);
        Object(Sr.a)({
            App: Or,
            prepareOptions: {
                title: "",
                shareInfo: null,
                skipPv: !0,
                loginParams: {
                    useWxSDK: !1,
                    requireLogin: !1
                },
                pageProperty: {
                    pageSN: "31875",
                    pageName: "acw_browser"
                }
            }
        })
    },
    4: function(e, t, r) {
        "use strict";
        r.d(t, "b", function() {
            return s
        }),
        r.d(t, "f", function() {
            return u
        }),
        r.d(t, "g", function() {
            return l
        }),
        r.d(t, "d", function() {
            return p
        }),
        r.d(t, "c", function() {
            return f
        }),
        r.d(t, "e", function() {
            return h
        }),
        r.d(t, "h", function() {
            return g
        }),
        r.d(t, "a", function() {
            return y
        });
        var n = r(1)
          , o = r(10)
          , i = r(9)
          , a = r(3);
        function c(e) {
            "@babel/helpers - typeof";
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function s() {
            return Object(o.b)(n.a.AccessToken) || Object(o.c)(n.c.AccessToken)
        }
        function u() {
            return Object(o.b)(n.a.UID) || Object(o.c)(n.c.UID)
        }
        function l() {
            return Object(o.b)(n.a.UIN) || Object(o.c)(n.c.UIN)
        }
        function p() {
            var e = "unknown";
            return new Promise(function(t, r) {
                window.WeixinJSBridge && window.wx && window.wx.getNetworkType ? window.wx.ready(function() {
                    window.wx.getNetworkType({
                        success: function(r) {
                            r && r.networkType && (e = r.networkType),
                            t(e)
                        },
                        fail: function() {
                            t(e)
                        }
                    })
                }) : (navigator && navigator.connection && (e = navigator.connection.type || "unknown"),
                t(e))
            }
            )
        }
        function f() {
            return a.b.isWeChatPlatform() ? i.a.AppID.WeChat : ""
        }
        function h(e) {
            e = e || 32;
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = t.length, n = "", o = 0; o < e; o++)
                n += t.charAt(Math.floor(Math.random() * r));
            return n
        }
        function d(e, t) {
            return "constructor" === e && "function" == typeof t || "__proto__" === e
        }
        function g(e, t) {
            if (null == e || null == t)
                return t;
            for (var r in e)
                "function" == typeof e[r] || d(r, t[r]) || (Array.isArray(e[r]) ? t[r] = e[r].concat() : "object" === c(e[r]) ? (null == t[r] && (t[r] = {}),
                g(e[r], t[r])) : t[r] = e[r]);
            return t
        }
        function y() {
            for (var e = {}, t = 0; t < arguments.length; t++)
                if ("object" === c(arguments[t]))
                    for (var r in arguments[t])
                        null != r && arguments[t].hasOwnProperty(r) && !d(r, e[r]) && (e[r] = arguments[t][r]);
            return e
        }
    },
    42: function(e, t, r) {
        "use strict";
        var n = r(21);
        var o = function(e) {
            var t = e || {};
            return t = Object.assign({}, t, {
                activationType: n.a.LAUNCH_ACTIVATION
            }),
            Object(n.c)(t)
        }
          , i = r(3);
        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var c = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.schemeURL = t.schemeURL || "",
                this.universalLink = t.universalLink || "",
                this.launchType = t.launchType || 0,
                this.defaultTagID = "mars-launch-node",
                this.env = {},
                this.checkBrowserEnv(),
                this.lock = !1
            }
            return function(e, t, r) {
                t && a(e.prototype, t),
                r && a(e, r)
            }(e, [{
                key: "checkBrowserEnv",
                value: function() {
                    var e = this.env;
                    e.ua = (navigator.userAgent || navigator.vendor || window.opera || "").toLowerCase(),
                    e.isIOS = !!i.b.IOSSystemVersion,
                    e.isAndroid = /android|adr/.test(e.ua) && !/windows phone/.test(e.ua),
                    e.isIOS9Above = Object(i.a)(i.b.IOSSystemVersion, "9.0.0") >= 0,
                    e.hasIntentTest = /chrome|samsung/.test(e.ua),
                    e.noIntentTest = /360 aphone|weibo|windvane|ucbrowser/.test(e.ua),
                    e.canIntent = e.hasIntentTest && e.isAndroid && !e.noIntentTest,
                    e.isChrome = /(?:chrome|crios)\/([\d\.]+)/.test(e.ua),
                    e.isQQ = /qq\/|mqqbrowser\/[\d\.]+/.test(e.ua),
                    e.isChrome && (e.isWebView = /version\/[\d\.]+\s*chrome/.test(e.ua)),
                    e.isOriginalChrome = e.isAndroid && e.isChrome && e.isWebView,
                    this.show(JSON.stringify(e))
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this;
                    return new Promise(function(r, n) {
                        t.lock = !0,
                        t.tryOpen(e),
                        t.poll(function(e) {
                            e ? r() : n()
                        })
                    }
                    )
                }
            }, {
                key: "poll",
                value: function(e) {
                    var t = function(t, r) {
                        if (t > 2500 || document.hidden || document.webkitHidden) {
                            var n = e;
                            e = null,
                            n && n(!0)
                        } else
                            r && e && e(!1)
                    }
                      , r = new Date
                      , n = 0
                      , o = setInterval(function() {
                        var e = new Date - r;
                        ++n >= 100 || e > 2500 ? (clearInterval(o),
                        t(e, !0)) : t(e, !1)
                    }, 20)
                }
            }, {
                key: "tryOpen",
                value: function(e) {
                    var t = e || this.schemeURL
                      , r = this.env || {};
                    if (this.show("url is ".concat(t)),
                    this.launchType)
                        switch (this.launchType) {
                        case 1:
                            this.tryOpenByTag(t);
                            break;
                        case 2:
                            this.tryOpenDirectly(t);
                            break;
                        case 3:
                            this.tryOpenByIframe(t)
                        }
                    else
                        r.isIOS ? this.tryOpenByTag(t) : r.isQQ ? this.tryOpenByTag(t) : r.isOriginalChrome ? this.tryOpenDirectly(t) : this.tryOpenByIframe(t)
                }
            }, {
                key: "tryOpenDirectly",
                value: function(e) {
                    this.show("tryOpenDirectly"),
                    window.location.href = e
                }
            }, {
                key: "tryOpenByIframe",
                value: function(e) {
                    this.show("tryOpenByIframe");
                    var t = document.createElement("iframe");
                    t.src = e,
                    t.style.display = "none",
                    document.body.appendChild(t)
                }
            }, {
                key: "tryOpenByTag",
                value: function(e) {
                    var t = this;
                    this.show("tryOpenByTag");
                    var r = document.getElementById(this.defaultTagID);
                    r || ((r = document.createElement("a")).id = this.defaultTagID,
                    r.style.display = "none",
                    document.body.appendChild(r),
                    r.onclick = function() {
                        t.show("clicked"),
                        window.location.href = e
                    }
                    ),
                    r.dispatchEvent(this.getCustomClickEvent())
                }
            }, {
                key: "getCustomClickEvent",
                value: function() {
                    var e = null;
                    return window.CustomEvent ? e = new window.CustomEvent("click",{
                        canBubble: !0,
                        cancelable: !0
                    }) : (e = document.createEvent("Event")).initEvent("click", !0, !0),
                    e
                }
            }, {
                key: "show",
                value: function(e) {
                    "development" === Object({
                        BROWSER: !0
                    }) && alert(e)
                }
            }]),
            e
        }()
          , s = r(0)
          , u = r(4)
          , l = r(6);
        var p = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index.html"
              , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (e.indexOf("_p_launch_id") >= 0)
                return e;
            var r = l.a.getInstance()
              , n = {};
            t && (n = r.getExtendTransferParameters(!0));
            var o = [r.getPageSN() || "", Date.now(), Object(u.e)(10)].join("_")
              , i = document.createElement("a");
            Object(s.g)(e) ? i.href = e : i.href = "".concat(location.origin).concat("/" === e[0] ? e : "/" + e);
            var a = Object.assign({}, Object(s.h)(i.search), n, {
                _p_launch_id: o
            });
            return (i.pathname + "?" + Object(s.a)(a) + i.hash).slice(1)
        }
          , f = r(64);
        var h = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index.html"
              , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , r = p(e, t);
            return {
                launchUrl: r,
                launchId: Object(f.a)(r)
            }
        };
        r.d(t, "c", function() {
            return o
        }),
        r.d(t, "a", function() {
            return c
        }),
        r.d(t, "b", function() {
            return h
        })
    },
    48: function(e, t, r) {
        "use strict";
        var n = r(3);
        var o = function(e) {
            var t = (e || {}).from_browser;
            t = parseInt(t, 10) || 0;
            var r = (e || {}).use_proxy_way;
            return r = parseInt(r, 10) || 0,
            n.b.isIOSWeChatPlatform() && t ? "".concat(location.origin, "/") : r ? "".concat(location.origin, "/") : location && location.hostname.indexOf("hutaojie") >= 0 ? "https://at.hutaojie.com" : "https://at.pinduoduo.com"
        }
          , i = r(25);
        var a = function(e, t) {
            var r = (t || {}).pds_scene;
            return r ? e === i.a.APK_ACTIVATION ? "/c/" + r : "/b/" + r : e === i.a.LINK_ACTIVATION ? "/r" : e
        }
          , c = r(10)
          , s = r(0)
          , u = r(4);
        function l(e, t) {
            return [].concat(e).filter(function(e) {
                return 0 === t.indexOf(e)
            }).length
        }
        var p = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            var n = u.a.apply(void 0, t.concat([{
                page_el_sn: null,
                page_id: null,
                page_sn: null,
                is_back: null,
                msgid: null
            }]))
              , o = {};
            for (var i in n)
                !n.hasOwnProperty(i) || !l(["refer_share"], i) && l(["refer", "_x_", "_ex_"], i) || (o[i] = n[i]);
            return o
        }
          , f = r(6);
        var h = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            var o = Object.assign.apply(Object, [{}].concat(t))
              , i = [Date.now(), Object(u.e)(16)].join("")
              , a = f.a.getInstance()
              , c = {
                log_id: i,
                user_id: Object(u.f)(),
                uin: Object(u.g)(),
                app_id: Object(u.c)(),
                platform: n.b.Current,
                time: i.substring(0, 13),
                refer_page_name: a.getPageName(),
                refer_page_id: a.getPageID(),
                refer_page_sn: a.getPageSN()
            };
            c = Object(u.a)(a.getKeyParams(), c),
            Object(u.h)(a.getExtendTransferParameters(!0), c),
            ["from"].forEach(function(e) {
                var t = "refer_channel_" + e
                  , r = o[e] || Object(s.d)(e);
                r && (c[t] = r)
            }),
            ["src", "campaign", "cid", "msgid", "scene"].forEach(function(e) {
                var t = "refer_" + e
                  , r = o[e] || Object(s.d)(e);
                r && (c[t] = r)
            }),
            ["refer_share_id", "refer_share_uid", "refer_share_channel", "refer_share_form"].forEach(function(e) {
                var t = Object(s.d)(e) || Object(s.d)(e.slice(6));
                t && (c[e] = t)
            });
            var l = {
                _sid: "refer_share_id",
                _suid: "refer_share_uid",
                _sc: "refer_share_channel",
                _sf: "refer_share_form"
            };
            for (var p in l) {
                var h = Object(s.d)(p);
                h && (c[l[p]] = h)
            }
            return c
        };
        function d(e) {
            return function(e) {
                if (Array.isArray(e))
                    return g(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return g(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return g(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        var y = function() {
            for (var e = {
                api_uid: Object(c.b)("api_uid")
            }, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
            var o = h.apply(void 0, r)
              , i = [].concat(e, r);
            return Object(s.a)(p.apply(void 0, d(i)), o)
        };
        t.a = function(e) {
            var t = e || {}
              , r = t.downloadParams || {}
              , n = t.activationType || i.a.LINK_ACTIVATION;
            return "".concat(o(r)).concat(a(n, r), "?").concat(y(r))
        }
    },
    55: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        });
        var n = function() {
            for (var e, t = [], r = 0; r < 256; r++) {
                e = r;
                for (var n = 0; n < 8; n++)
                    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[r] = e
            }
            return t
        }()
          , o = function(e, t) {
            e = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r);
                    n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
                    t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                    t += String.fromCharCode(n >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & n | 128))
                }
                return t
            }(e.toString()),
            "undefined" !== t && null !== t || (t = 0),
            t ^= -1;
            for (var r = 0; r < e.length; r++)
                t = t >>> 8 ^ n[255 & (t ^ e.charCodeAt(r))];
            return (-1 ^ t) >>> 0
        }
    },
    56: function(e, t, r) {
        "use strict";
        var n, o = r(17), i = r(11), a = r(24), c = r(6), s = r(0), u = r(12), l = r(9);
        function p(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var f = c.a.getInstance();
        function h(e) {
            if (e) {
                for (var t = [], r = 1; r < arguments.length; ++r)
                    t.push(arguments[r]);
                e.apply(this, t)
            }
        }
        var d = ["addDownloadTask", "queryDownloadTask", "installDownloadTask", "showMenuItems", "hideMenuItems", "onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareQZone", "onMenuShareWeibo", "addCard", "chooseCard", "openCard", "previewImage", "editAddress", "chooseImage", "uploadImage", "getLocation", "openAddress", "getInstallState", "launch3rdApp", "launchApplication", "startRecord", "stopRecord", "uploadVoice"]
          , g = {
            SHARE_SESSION: "menuItem:share:appMessage",
            SHARE_QQ: "menuItem:share:qq",
            SHARE_QZONE: "menuItem:share:QZone",
            SHARE_QQ_WEIBO: "menuItem:share:weiboApp",
            FAVORITE: "menuItem:favorite",
            OPEN_WITH_SAFARI: "menuItem:openWithSafari",
            SHARE_EMAIL: "menuItem:share:email",
            SHARE_TIMELINE: "menuItem:share:timeline",
            COPY_URL: "menuItem:copyUrl"
        }
          , y = [g.OPEN_WITH_SAFARI, g.SHARE_EMAIL]
          , m = {
            WECHAT_SESSION: 1,
            WECHAT_TIMELINE: 2,
            QQ_CHAT_SESSION: 4,
            QQ_ZONE: 5
        }
          , v = (p(n = {}, m.WECHAT_SESSION, g.SHARE_SESSION),
        p(n, m.WECHAT_TIMELINE, g.SHARE_TIMELINE),
        p(n, m.QQ_CHAT_SESSION, g.SHARE_QQ),
        p(n, m.QQ_ZONE, g.SHARE_QZONE),
        n)
          , b = Object.keys(m).reduce(function(e, t) {
            return e[m[t]] = 0,
            e
        }, {});
        function w() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , r = e.marketActivityID || ""
              , n = Math.random().toString().substring(2)
              , o = Date.now().toString()
              , a = (window.rawData && window.rawData.wechatShareDomain || {}).wechatKey || l.a.ApiKey.WeChat
              , c = function(r) {
                var c = r.signature
                  , s = r.shareDomain
                  , u = r.openAppID
                  , l = r.share
                  , p = r.mirror
                  , f = r.shareTypeEnable
                  , w = r.magicTrace;
                if (window.wx && c) {
                    var _ = {
                        mirror: p,
                        share: l,
                        shareDomain: s,
                        openAppID: u,
                        magicTrace: w
                    };
                    p ? a = u : l && u && (a = u,
                    c = " "),
                    _.wechatAppID = a,
                    window.wx.config({
                        debug: !1,
                        beta: !0,
                        appId: a,
                        timestamp: o,
                        nonceStr: n,
                        signature: c,
                        jsApiList: d
                    }),
                    window.wx.ready(function() {
                        var r = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                              , t = arguments.length > 1 ? arguments[1] : void 0;
                            return e = Object.assign({}, b, e),
                            Object.keys(e).reduce(function(r, n) {
                                n = parseInt(n, 10);
                                var o = v[n];
                                if (t && [m.WECHAT_SESSION, m.WECHAT_TIMELINE].indexOf(n) < 0)
                                    o && r.menuShareItemsToHide.push(o);
                                else {
                                    var i = e[n] ? r.menuShareItemsToShow : r.menuShareItemsToHide;
                                    o && i.push(o)
                                }
                                return r
                            }, {
                                menuShareItemsToShow: [],
                                menuShareItemsToHide: []
                            })
                        }(f, e.onlyWeChat)
                          , n = r.menuShareItemsToShow
                          , o = r.menuShareItemsToHide
                          , i = []
                          , a = y.concat(o);
                        e.disableShare ? a = a.concat(n) : i = i.concat(n),
                        e.disableCopyUrl && a.push(g.COPY_URL),
                        e.enableBroswerOpen && a.splice(0, 1),
                        window.wx.hideMenuItems({
                            menuList: a
                        }),
                        window.wx.showMenuItems({
                            menuList: i
                        }),
                        h(t, !0, _)
                    }),
                    window.wx.error(function(e) {
                        i.a.trackingRecord({
                            op: "error",
                            event: "wx_error",
                            signature: c,
                            res: JSON.stringify(e)
                        }),
                        h(t, !1, _)
                    })
                }
            }
              , p = "weixin/jsapi/signature?" + Object(s.a)({
                page_sn: f.getPageSN(),
                noncestr: n,
                timestamp: o,
                open_app_id: a,
                url: location.href.split("#")[0],
                activity: r
            });
            Object(u.a)({
                url: p,
                method: "GET"
            }).then(function(e) {
                return {
                    signature: e.signature,
                    openAppID: e.open_app_id,
                    shareDomain: e.share_domain,
                    share: !!parseInt(e.share, 10),
                    mirror: !!parseInt(e.mirror, 10),
                    shareTypeEnable: e.share_type_enable,
                    magicTrace: e.magic_trace
                }
            }).catch(function() {
                return {}
            }).then(function(e) {
                c(e)
            })
        }
        var _ = r(26)
          , O = 1
          , S = 2
          , k = 3
          , E = 4
          , I = 5
          , P = 6
          , R = 8
          , A = 9
          , T = 11
          , D = 12
          , C = {
            DEFAULT: 0,
            ON_SHARE_TRIGGER: 1,
            ON_SHARE_COMPLETED: 2,
            SDK_INIT_FAILED: 3,
            ON_SHARE_BUTTON_CLICKED: 4,
            ON_SHARE_PREPARE: 5,
            ON_SDK_READY: 6,
            ON_SHARE_INTERRUPT: 7,
            SHARE_LIMIT_LOAD_FAIL: 8,
            PERFORM_LOG_FAILED: 9,
            SHARE_REACH_LIMIT: 10
        }
          , j = r(77);
        var x = {
            DEFAULT: 0,
            SHARE_PARAMS_NOT_VALID: 1,
            SHARE_TYPE_DISABLED: 2,
            SHARE_TYPE_NOT_FOUND: 3,
            SHARE_ACTION_DISABLE: 4,
            SHARE_STATUS_ILLEGAL: 5,
            SHARE_NOT_SUPPORTED: 6,
            SHARE_LIMITER_NOT_INIT: 7
        }
          , L = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.errorCode = t.errorCode || x.DEFAULT,
            this.message = t.message || ""
        };
        L.create = function(e) {
            return new L({
                errorCode: e
            })
        }
        ,
        L.ShareErrorCode = x;
        var U = L
          , N = {
            DEFAULT: 0,
            REDIRECT: 1,
            SERVER_DOMAIN: 2,
            SERVER_CONTROL: 3,
            SERVER_SHORT_URL: 4,
            RAW: 5,
            SERVER_TINY_DOMAIN: 6,
            SERVER_DOMAIN_BASE64: 7,
            DOMAIN_REPLACE: 8,
            MAGIC_TRACE: 9,
            MAGIC_TRACE_DYNAMIC: 10
        };
        function W(e) {
            return [N.SERVER_CONTROL, N.SERVER_TINY_DOMAIN, N.SERVER_DOMAIN_BASE64, N.DOMAIN_REPLACE].indexOf(e) >= 0
        }
        var M = N;
        function B(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , n = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Q(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return Q(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Q(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function q(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var H = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.hostname = "",
                this.origin = "",
                this.pagename = "",
                this.pathname = "",
                this.port = 0,
                this.protocol = "",
                this.query = {},
                this.search = "",
                this.hashTag = "",
                this.parseURL(t)
            }
            return function(e, t, r) {
                t && q(e.prototype, t),
                r && q(e, r)
            }(e, [{
                key: "parseURL",
                value: function(e) {
                    var t = e.split("#")
                      , r = t[0] || "";
                    this.hashTag = t[1] || "";
                    var n = r.split("?")
                      , o = n[0] || ""
                      , i = n[1] || "";
                    this.search = "?" + i,
                    this.query = (i.split("&") || []).reduce(function(e) {
                        var t, r, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "").split("=");
                        try {
                            t = decodeURIComponent(n[0] || ""),
                            r = decodeURIComponent(n[1] || "")
                        } catch (e) {
                            t = ""
                        }
                        return t && (e[t] = r),
                        e
                    }, {});
                    var a = o.match(/^([a-zA-Z]+\:)\/\//) || [];
                    this.protocol = a[1] || "";
                    a[0] && (o = o.replace(a[0], ""));
                    var c = o.match(/^((:?[a-zA-Z0-9](:?[a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6})(\:\d+)?\//) || []
                      , s = B((c[0] || "").replace(/\//g, "").split(":"), 2)
                      , u = s[0]
                      , l = s[1];
                    this.hostname = u,
                    this.port = parseInt(l || 0, 10),
                    c[0] && (o = o.replace(c[0], "")),
                    this.protocol && this.hostname && (this.origin = "".concat(this.protocol, "//").concat(this.hostname)),
                    this.pathname = "/" + o.replace(/^\//, "");
                    var p = o.match(/\/?(\w+\.html)$/) || [];
                    this.pagename = p[1] || ""
                }
            }]),
            e
        }()
          , F = "undefined" != typeof window;
        var V = {
            DEFAULT: "",
            COMMAND: "kouling",
            IMAGE: "image",
            TEXT: "text",
            CARD: "card",
            WXAPP_CARD: "custom_card",
            COPY_LINK: ""
        }
          , K = ""
          , z = "sdk"
          , G = "manual";
        function J(e) {
            "@babel/helpers - typeof";
            return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Y = "weixin"
          , Z = "link"
          , X = "h5"
          , $ = [E, I, T, D]
          , ee = function(e) {
            return $.indexOf(e) >= 0
        };
        function te(e) {
            "@babel/helpers - typeof";
            return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var re = {
            CIPHER: "CIPHER_TEXT",
            LINK: "LINK",
            DOMAIN: "DOMAIN",
            NORMAL: "NORMAL",
            IMAGE: "IMAGE",
            COPY: "COPY"
        };
        function ne() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                title: e.title,
                message: e.message,
                thumb_url: e.thumbnailURL,
                share_url: e.shareURL
            }
        }
        var oe = r(3);
        function ie() {
            return oe.b.isWeChatPlatform() ? oe.b.WeChat : ""
        }
        function ae(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ce(e, t) {
            if (!(t && t.key && t.value && t.trace))
                return e;
            var r = new H(e)
              , n = t.key
              , o = t.value
              , i = (t.trace,
            t.trace);
            return Object(s.b)(Object.assign(function(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                e
            }({}, n, o), r.query), i, r.origin)
        }
        var se = function() {
            function e() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._isInited = !1,
                this._magicTrace = null
            }
            return function(e, t, r) {
                t && ae(e.prototype, t),
                r && ae(e, r)
            }(e, [{
                key: "build",
                value: function(e) {
                    var t = e.magicTrace
                      , r = void 0 === t ? {} : t;
                    return this._isInited ? Promise.resolve() : (r.key && r.value && r.trace && (this._magicTrace = r,
                    this._isInited = !0),
                    Promise.resolve())
                }
            }, {
                key: "isInited",
                value: function() {
                    return this._isInited
                }
            }, {
                key: "transform",
                value: function(e) {
                    return ce(e, this._magicTrace)
                }
            }, {
                key: "transformByShareEntity",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = {};
                        return r.origin = t.platform || "",
                        r.share_params = t.shareParams || {},
                        r.page_sn = t.pageSn || c.a.getInstance().getPageSN() + "",
                        r.page_info = t.pageInfo || {
                            page_name: c.a.getInstance().getPageName(),
                            page_url: location && location.href
                        },
                        t.payloadMixin && "object" === te(t.payloadMixin) && (r = Object.assign(r, t.payloadMixin)),
                        Object(u.a)({
                            url: "api/flow/audience/share/trace",
                            method: e,
                            params: r
                        }).then(function() {
                            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).magic_trace
                        })
                    }("post", {
                        platform: ie(),
                        shareParams: ne(e),
                        payloadMixin: e.payloadMixin
                    }).then(function(t) {
                        return ce(e.shareURL, t)
                    })
                }
            }]),
            e
        }()
          , ue = null;
        se.getInstance = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return ue || (ue = new se(e)),
            ue
        }
        ;
        var le = se;
        function pe(e, t, r, n, o, i, a) {
            try {
                var c = e[i](a)
                  , s = c.value
            } catch (e) {
                return void r(e)
            }
            c.done ? t(s) : Promise.resolve(s).then(n, o)
        }
        function fe(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var he = ["mobile.yangkeduo.com", "m.hutaojie.com", "panduoduo.yangkeduo.com"];
        var de = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.title = t.title || "",
                this.message = t.message || "",
                this.shareURL = t.shareURL || "",
                this.targetShareURL = "",
                this.realShareURL = "",
                this.shareDomain = t.shareDomain || "",
                this.thumbnailURL = t.thumbnailURL || "",
                this.timelineDomain = t.timelineDomain || "",
                this.timelineAppId = t.timelineAppId || "",
                this.marketActivityID = t.marketActivityID || 0,
                this.urlWrapType = t.urlWrapType || M.DEFAULT,
                this.shortURLApi = t.shortURLApi || "",
                this.domainURLApi = t.domainURLApi || "",
                this.payloadMixin = t.payloadMixin || null,
                this.requestUsePost = t.requestUsePost || !1
            }
            return function(e, t, r) {
                t && fe(e.prototype, t),
                r && fe(e, r)
            }(e, [{
                key: "normalize",
                value: function() {
                    var e = function(e) {
                        return function() {
                            var t = this
                              , r = arguments;
                            return new Promise(function(n, o) {
                                var i = e.apply(t, r);
                                function a(e) {
                                    pe(i, n, o, a, c, "next", e)
                                }
                                function c(e) {
                                    pe(i, n, o, a, c, "throw", e)
                                }
                                a(void 0)
                            }
                            )
                        }
                    }(regeneratorRuntime.mark(function e(t) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Promise.resolve({}));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setShareURLQueries",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.urlWrapType !== M.RAW && (this.shareID = e.refer_share_id,
                    this.shareURL = Object(s.b)(e, this.shareURL))
                }
            }, {
                key: "getShareForm",
                value: function(e) {
                    return V.DEFAULT
                }
            }, {
                key: "getShareMethod",
                value: function(e) {
                    return K
                }
            }]),
            e
        }();
        de.getWrappedShareURLInfo = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.shareURL || ""
              , r = e.urlWrapType;
            if (r === M.DEFAULT || r === M.RAW)
                return Promise.resolve({
                    realShareURL: t,
                    targetShareURL: t
                });
            if (e.timelineDomain && r === M.SERVER_DOMAIN)
                return Promise.resolve(de.getEncodedURLInfo(t, e.timelineDomain));
            if (e.marketActivityID && function(e) {
                return [N.SERVER_CONTROL, N.SERVER_SHORT_URL, N.SERVER_TINY_DOMAIN, N.SERVER_DOMAIN_BASE64, N.DOMAIN_REPLACE].indexOf(e) >= 0
            }(r)) {
                var n = W(r) ? Y : Z;
                return new Promise(function(o, i) {
                    var a = t.replace(/^(\w+\:)?\/\//, "");
                    (function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = {};
                        r.url = t.shareURL || "",
                        r.activity = t.marketActivityID || 0,
                        r.platform = t.platform || "",
                        r.page_sn = c.a.getInstance().getPageSN(),
                        t.payloadMixin && "object" === J(t.payloadMixin) && (r = Object.assign(r, t.payloadMixin));
                        var n = "api/flow/audience/activity/domain/weixin";
                        return t.shareDomainType === Z ? n = t.shortURLApi ? t.shortURLApi : t.shortCommandApi ? t.shortCommandApi : "api/flow/audience/activity/domain/short_url" : t.domainURLApi && (n = t.domainURLApi),
                        Object(u.a)({
                            url: n,
                            method: e,
                            params: r
                        }).then(function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return t.shortCommandApi ? {
                                shareText: e.share_text || ""
                            } : {
                                domain: e.domain,
                                openAppID: e.open_app_id || "",
                                shortURL: e.short_url || "",
                                shareText: e.share_text || ""
                            }
                        }, function() {
                            return null
                        })
                    }
                    )(e.requestUsePost ? "post" : "get", {
                        shareURL: a,
                        marketActivityID: e.marketActivityID,
                        platform: de.getShareDomainPlatform(),
                        shareDomainType: n,
                        shortURLApi: e.shortURLApi,
                        shortCommandApi: e.shortCommandApi,
                        domainURLApi: e.domainURLApi,
                        payloadMixin: e.payloadMixin
                    }).then(function(e) {
                        if (e) {
                            if (n === Y) {
                                var i = e.domain
                                  , a = void 0 === i ? "" : i
                                  , c = e.openAppID
                                  , s = void 0 === c ? "" : c;
                                return void o(de.getRedirectURLInfo(t, a, r === M.SERVER_TINY_DOMAIN ? "" : s))
                            }
                            if (n === Z)
                                return void o({
                                    useShortURL: !0,
                                    realShareURL: e.shortURL || t,
                                    targetShareURL: t,
                                    shareText: e.shareText
                                })
                        }
                        o({
                            realShareURL: t,
                            targetShareURL: t
                        })
                    })
                }
                )
            }
            if (r === M.MAGIC_TRACE) {
                var o = le.getInstance().transform(t);
                return Promise.resolve({
                    realShareURL: o,
                    targetShareURL: o
                })
            }
            return r === M.MAGIC_TRACE_DYNAMIC ? le.getInstance().transformByShareEntity(e).then(function(e) {
                return {
                    realShareURL: e,
                    targetShareURL: e
                }
            }, function() {
                return {
                    realShareURL: t,
                    targetShareURL: t
                }
            }) : Promise.resolve({
                realShareURL: t,
                targetShareURL: t
            })
        }
        ,
        de.getRedirectURLInfo = function(e, t, r) {
            var n = new H(e)
              , o = n.pathname + n.search
              , i = "http://".concat(t).concat(o);
            return r ? (i = "".concat(i, "&xxx_state=123"),
            {
                realShareURL: function(e) {
                    for (var t = [], r = 1; r < arguments.length; ++r)
                        t.push(arguments[r]);
                    return e.replace(/{(\d+)}/g, function(e, r) {
                        return 0 === t[r] ? 0 : t[r] || ""
                    })
                }("https://open.weixin.qq.com/connect/oauth2/authorize?response_type=code&scope=snsapi_base&appid={0}&redirect_uri={1}", r, encodeURIComponent(i)),
                targetShareURL: i
            }) : {
                realShareURL: i,
                targetShareURL: i
            }
        }
        ,
        de.getDomainReplacedURL = function(e, t) {
            var r = Object(s.b)({}, e, function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.match(/^http\:?/) ? e : F ? location.protocol ? "".concat(location.protocol, "//").concat(e) : void 0 : "http://".concat(e)
            }(t));
            return {
                targetShareURL: r,
                realShareURL: r
            }
        }
        ,
        de.getShareDomainPlatform = function() {
            return X
        }
        ,
        de.getQQShareURL = function(e, t) {
            if (!ee(e))
                return t;
            var r = new H(t).hostname;
            return he.indexOf(r) < 0 && (t = t.replace("//".concat(r), "//".concat("mobile.yangkeduo.com"))),
            t
        }
        ;
        var ge = de;
        function ye(e) {
            "@babel/helpers - typeof";
            return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function me(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function ve(e, t) {
            return (ve = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function be(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = we(e);
                if (t) {
                    var o = we(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === ye(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function we(e) {
            return (we = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var _e = U.ShareErrorCode
          , Oe = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ve(e, t)
            }(r, j["EventEmitter"]);
            var t = be(r);
            function r() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (e = t.call(this, n)).ShareEntityClass = ge,
                e._hasInited = !1,
                e.shareEntity = n.shareEntity,
                e.shareEntityMap = n.shareEntityMap || {},
                e.disableShareTypes = n.disableShareTypes || [],
                e
            }
            return function(e, t, r) {
                t && me(e.prototype, t),
                r && me(e, r)
            }(r, [{
                key: "initShare",
                value: function() {
                    this._hasInited || (this._hasInited = !0,
                    this.setMaxListeners(0),
                    this._setupShareTypes(),
                    this._setupPlatformShareSDK())
                }
            }, {
                key: "isInited",
                value: function() {
                    return this._hasInited
                }
            }, {
                key: "share",
                value: function(e) {
                    return _e.SHARE_ACTION_DISABLE
                }
            }, {
                key: "setShareCheck",
                value: function(e) {}
            }, {
                key: "checkShareTypeEnable",
                value: function(e) {
                    return 0
                }
            }, {
                key: "_setupShareTypes",
                value: function() {
                    return !0
                }
            }, {
                key: "_setupPlatformShareSDK",
                value: function() {
                    return Promise.resolve()
                }
            }, {
                key: "getShareEntityByShareType",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    return e ? this.shareEntityMap[e] || (t ? null : this.shareEntity) : this.shareEntity
                }
            }, {
                key: "refreshShare",
                value: function(e, t) {
                    return e ? (t ? this.shareEntityMap[t] = e : this.shareEntity = e,
                    this._setupPlatformShareSDK()) : Promise.resolve()
                }
            }, {
                key: "disableShare",
                value: function(e) {
                    var t = this;
                    if (e && "number" == typeof e)
                        this.disableShareTypes.indexOf(e) < 0 && this.disableShareTypes.push(e);
                    else {
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            return;
                        this.disableShareTypes = this.disableShareTypes.concat(e.filter(function(e) {
                            return (t.disableShareTypes || []).indexOf(e) < 0
                        }))
                    }
                    !this._setupShareTypes() && this._adjustMenu()
                }
            }, {
                key: "_adjustMenu",
                value: function() {}
            }, {
                key: "createShareEntity",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , r = arguments.length > 2 ? arguments[2] : void 0
                      , n = this.ShareEntityClass || ge;
                    if (r)
                        return new n(e);
                    var o = {};
                    if (t) {
                        var i = this.shareEntityMap[t];
                        o = i ? Object.assign({}, i, e) : Object.assign({}, this.shareEntity, e)
                    } else
                        o = Object.assign({}, this.shareEntity, e);
                    return new n(o)
                }
            }, {
                key: "setupNativeShareButton",
                value: function(e) {
                    return _e.SHARE_NOT_SUPPORTED
                }
            }, {
                key: "checkShareTypeEnable",
                value: function(e) {
                    return _e.SHARE_TYPE_DISABLED
                }
            }]),
            r
        }()
          , Se = 0
          , ke = 1
          , Ee = 2
          , Ie = 3;
        function Pe(e) {
            "@babel/helpers - typeof";
            return (Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Re(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ae(e, t) {
            return (Ae = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Te(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = De(e);
                if (t) {
                    var o = De(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === Pe(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var Ce, je = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ae(e, t)
            }(r, ge);
            var t = Te(r);
            function r() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                t.apply(this, arguments)
            }
            return function(e, t, r) {
                t && Re(e.prototype, t),
                r && Re(e, r)
            }(r, [{
                key: "normalize",
                value: function(e) {
                    var t = this;
                    return new Promise(function(r, n) {
                        var o = Object.assign({}, t)
                          , i = o.shareURL;
                        t.targetShareURL = t.shareURL,
                        t.realShareURL = t.shareURL,
                        t.useShortURL = !1,
                        e === S || e === O ? ge.getWrappedShareURLInfo(o).then(function(e) {
                            var n = e.realShareURL
                              , i = e.targetShareURL
                              , a = e.useShortURL;
                            t.useShortURL = a,
                            t.targetShareURL = i,
                            t.realShareURL = n,
                            r({
                                title: o.title,
                                desc: o.message,
                                imgUrl: o.thumbnailURL,
                                link: n
                            })
                        }, function() {}) : ee(e) ? (t.targetShareURL = ge.getQQShareURL(e, i),
                        t.realShareURL = t.targetShareURL,
                        r({
                            title: o.title,
                            desc: o.message,
                            imgUrl: o.thumbnailURL,
                            link: t.realShareURL
                        })) : r({
                            title: o.title,
                            desc: o.message,
                            imgUrl: o.thumbnailURL,
                            link: i
                        })
                    }
                    )
                }
            }, {
                key: "getShareForm",
                value: function(e) {
                    return V.CARD
                }
            }, {
                key: "getShareMethod",
                value: function(e) {
                    return z
                }
            }]),
            r
        }();
        function xe(e) {
            "@babel/helpers - typeof";
            return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Le(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Ue(e, t) {
            return (Ue = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Ne(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = We(e);
                if (t) {
                    var o = We(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === xe(t) || "function" == typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, r)
            }
        }
        function We(e) {
            return (We = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Me(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var Be = U.ShareErrorCode
          , Qe = (Me(Ce = {}, O, {
            name: "onMenuShareAppMessage",
            tag: "menuItem:share:appMessage"
        }),
        Me(Ce, S, {
            name: "onMenuShareTimeline",
            tag: "menuItem:share:timeline"
        }),
        Me(Ce, E, {
            name: "onMenuShareQQ",
            tag: "menuItem:share:qq"
        }),
        Me(Ce, I, {
            name: "onMenuShareQZone",
            tag: "menuItem:share:QZone"
        }),
        Me(Ce, P, {
            name: "onMenuShareWeibo",
            tag: "menuItem:share:weiboApp"
        }),
        Ce)
          , qe = [O, S, E, I, P]
          , He = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ue(e, t)
            }(r, Oe);
            var t = Ne(r);
            function r(e) {
                var n;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, r),
                (n = t.call(this, e)).ShareEntityClass = je,
                n._enableShareTypes = qe.concat(),
                n
            }
            return function(e, t, r) {
                t && Le(e.prototype, t),
                r && Le(e, r)
            }(r, [{
                key: "share",
                value: function() {
                    return Be.SHARE_ACTION_DISABLE
                }
            }, {
                key: "refreshShare",
                value: function(e, t) {
                    var r = this;
                    return e ? t ? (this.shareEntityMap[t] = e,
                    "undefined" == typeof wx ? (this.emit(C.SDK_INIT_FAILED),
                    Promise.resolve()) : this.refreshWeChatChannelShare(t)) : (this.shareEntity = e,
                    this._enableShareTypes.forEach(function(t) {
                        r.shareEntityMap[t] = r.createShareEntity(e, t)
                    }),
                    this._setupPlatformShareSDK()) : Promise.resolve()
                }
            }, {
                key: "_setupShareTypes",
                value: function() {
                    var e = this
                      , t = this._enableShareTypes.length;
                    return this._enableShareTypes = qe.filter(function(t) {
                        return e.disableShareTypes.indexOf(t) < 0
                    }),
                    t === this._enableShareTypes.length
                }
            }, {
                key: "_setupPlatformShareSDK",
                value: function() {
                    var e = this;
                    return "undefined" == typeof wx ? (this.emit(C.SDK_INIT_FAILED),
                    Promise.resolve()) : Promise.all(this._enableShareTypes.map(function(t) {
                        e.refreshWeChatChannelShare(t)
                    }))
                }
            }, {
                key: "_adjustMenu",
                value: function() {
                    var e = this
                      , t = qe.filter(function(t) {
                        return e._enableShareTypes.indexOf(t) < 0
                    }).map(function(e) {
                        return Qe[e].tag
                    });
                    window.wx && wx.hideMenuItems({
                        menuList: t
                    })
                }
            }, {
                key: "refreshWeChatChannelShare",
                value: function(e) {
                    var t = Qe[e];
                    return t ? this._setupWeChatChannelShare(e, t.name) : Promise.resolve()
                }
            }, {
                key: "_setupWeChatChannelShare",
                value: function(e) {
                    var t = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (!window.wx || "function" != typeof window.wx[r])
                        return Promise.resolve();
                    var n = this.shareEntityMap[e] || this.shareEntity;
                    return n ? (this.emit(C.ON_SHARE_PREPARE, {
                        shareType: e
                    }),
                    n.normalize(e).then(function(n) {
                        var o = Object.assign({
                            trigger: function() {
                                t.emit(C.ON_SHARE_TRIGGER, {
                                    shareType: e
                                })
                            },
                            success: function() {
                                t.emit(C.ON_SHARE_COMPLETED, {
                                    shareType: e,
                                    shareResultType: ke
                                }),
                                t.refreshWeChatChannelShare(e)
                            },
                            fail: function() {
                                t.emit(C.ON_SHARE_COMPLETED, {
                                    shareType: e,
                                    shareResultType: Ee
                                }),
                                t.refreshWeChatChannelShare(e)
                            },
                            cancel: function() {
                                t.emit(C.ON_SHARE_COMPLETED, {
                                    shareType: e,
                                    shareResultType: Ie
                                }),
                                t.refreshWeChatChannelShare(e)
                            }
                        }, n);
                        window.wx[r](o)
                    }, function() {
                        return Promise.resolve()
                    })) : Promise.resolve()
                }
            }, {
                key: "checkShareTypeEnable",
                value: function(e) {
                    return this._enableShareTypes.indexOf(e) < 0 ? Be.SHARE_TYPE_DISABLED : 0
                }
            }]),
            r
        }();
        He.SUPPORTED_SHARE_TYPE = qe.concat();
        var Fe = He
          , Ve = "success"
          , Ke = "fail"
          , ze = "cancel"
          , Ge = "complete"
          , Je = "error";
        function Ye(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var Ze = "event"
          , Xe = {
            SHARE: "share",
            SHARE_RESULT: "share_result"
        }
          , $e = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.userID = t.userID || "",
                this.shareID = t.shareID || "",
                this.op = t.op || Ze,
                this.subOP = t.subOP || "",
                this.shareChannel = t.shareChannel || "",
                this.shareResult = t.shareResult || "",
                this.shareURL = t.shareURL || "",
                this.shareDomain = t.shareDomain || "",
                this.shareForm = t.shareForm || "",
                this.shareMethod = t.shareMethod || "",
                this.shareAppID = t.shareAppID,
                this.pcode = t.pcode,
                this.wxShareCount = t.wxShareCount
            }
            return function(e, t, r) {
                t && Ye(e.prototype, t),
                r && Ye(e, r)
            }(e, [{
                key: "normalize",
                value: function(e) {
                    return this.subOP === Xe.SHARE ? {
                        op: this.op,
                        sub_op: this.subOP,
                        share_id: this.shareID,
                        share_channel: this.shareChannel,
                        share_url: this.shareURL,
                        share_domain: this.shareDomain,
                        share_form: this.shareForm,
                        share_method: this.shareMethod,
                        share_app_id: this.shareAppID,
                        pcode: this.pcode
                    } : this.subOP === Xe.SHARE_RESULT ? {
                        op: this.op,
                        sub_op: this.subOP,
                        event: "share_result",
                        share_id: this.shareID,
                        share_channel: this.shareChannel,
                        share_url: this.shareURL,
                        share_domain: this.shareDomain,
                        share_result: this.shareResult,
                        share_form: this.shareForm,
                        share_method: this.shareMethod,
                        share_app_id: this.shareAppID,
                        wx_share_count: this.wxShareCount,
                        pcode: this.pcode
                    } : {}
                }
            }, {
                key: "getShareURLTrackingQueries",
                value: function() {
                    return e.getTrackingQueries(this)
                }
            }]),
            e
        }();
        $e.TRACKING_SUB_OP = Xe,
        $e.getTrackingQueries = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                refer_share_id: e.shareID,
                refer_share_uid: e.userID,
                refer_share_channel: e.shareChannel
            }
        }
        ;
        var et = $e
          , tt = r(4);
        function rt(e) {
            return Object(tt.e)(e)
        }
        var nt, ot = {
            UNKNOWN: "unknown",
            APP_MESSAGE: "message",
            TIMELINE: "timeline",
            QQ: "qq",
            QQ_ZONE: "qzone",
            QQ_WEIBO: "qq_weibo",
            SINA_WEIBO: "weibo",
            CLIPBOARD: "copy_link"
        };
        function it(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var at, ct = (it(nt = {}, O, ot.APP_MESSAGE),
        it(nt, S, ot.TIMELINE),
        it(nt, k, ot.SINA_WEIBO),
        it(nt, E, ot.QQ),
        it(nt, I, ot.QQ_ZONE),
        nt);
        function st() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return ct[e] || ot.UNKNOWN
        }
        function ut() {
            return Object(o.b)() || 0
        }
        function lt(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var pt = {
            DEFAULT: 0,
            WECHAT: 1,
            QQ: 2,
            WEIBO: 3
        }
          , ft = (lt(at = {}, ot.UNKNOWN, pt.DEFAULT),
        lt(at, ot.APP_MESSAGE, pt.WECHAT),
        lt(at, ot.TIMELINE, pt.WECHAT),
        lt(at, ot.QQ, pt.QQ),
        lt(at, ot.QQ_ZONE, pt.QQ),
        lt(at, ot.QQ_WEIBO, pt.QQ),
        lt(at, ot.SINA_WEIBO, pt.WEIBO),
        at);
        var ht = function(e) {
            return ft[e] || pt.DEFAULT
        };
        function dt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var gt = function() {
            function e() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._venderAppIDs = {},
                this._isInited = !1
            }
            return function(e, t, r) {
                t && dt(e.prototype, t),
                r && dt(e, r)
            }(e, [{
                key: "build",
                value: function(e) {
                    var t = e.wechatAppID;
                    return this._isInited ? Promise.resolve() : (this._isInited = !0,
                    oe.b.isWeChatPlatform() ? this._buildWeChatCache(t) : Promise.resolve())
                }
            }, {
                key: "isInited",
                value: function() {
                    return this._isInited
                }
            }, {
                key: "_buildWeChatCache",
                value: function(e) {
                    return this._venderAppIDs[pt.WECHAT] = e,
                    Promise.resolve()
                }
            }, {
                key: "getAppIDSync",
                value: function(e) {
                    var t = ht(e);
                    return this._venderAppIDs[t]
                }
            }]),
            e
        }()
          , yt = null;
        gt.getInstance = function(e) {
            return yt || (yt = new gt(e)),
            yt
        }
        ;
        var mt = gt;
        function vt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function bt(e) {
            "@babel/helpers - typeof";
            return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var wt = U.ShareErrorCode
          , _t = et.TRACKING_SUB_OP;
        var Ot = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.transparentTransmission = t.transparentTransmission || {},
                this.trackingEntity = null,
                this.onTriggerListener = null,
                this.onCompletedListener = null,
                this.shareController = null,
                this._cachePrepareInfo = {}
            }
            return function(e, t, r) {
                t && vt(e.prototype, t),
                r && vt(e, r)
            }(e, [{
                key: "listen",
                value: function(e) {
                    e && e instanceof Oe && (this.shareController = e,
                    this._setupDefaultTrackListener(e))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.shareController && this._removeDefaultTrackListener(this.shareController)
                }
            }, {
                key: "updateTrackerTrans",
                value: function(e) {
                    this.transparentTransmission = Object.assign({}, this.transparentTransmission, e)
                }
            }, {
                key: "_setupDefaultTrackListener",
                value: function(e) {
                    this._removeDefaultTrackListener(e),
                    this.onPrepareListener = this._onDefaultSharePrepare.bind(this),
                    this.onTriggerListener = this._onDefaultShareTrigger.bind(this),
                    this.onCompletedListener = this._onDefaultShareCompleted.bind(this),
                    e.on(C.ON_SHARE_PREPARE, this.onPrepareListener),
                    e.on(C.ON_SHARE_TRIGGER, this.onTriggerListener),
                    e.on(C.ON_SHARE_COMPLETED, this.onCompletedListener)
                }
            }, {
                key: "_removeDefaultTrackListener",
                value: function(e) {
                    this.onPrepareListener && e.removeListener(C.ON_SHARE_PREPARE, this.onPrepareListener),
                    this.onTriggerListener && e.removeListener(C.ON_SHARE_TRIGGER, this.onTriggerListener),
                    this.onCompletedListener && e.removeListener(C.ON_SHARE_COMPLETED, this.onCompletedListener)
                }
            }, {
                key: "_sendLog",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = Object.assign(e, this.transparentTransmission);
                    i.a.trackingRecord(t)
                }
            }, {
                key: "_onDefaultSharePrepare",
                value: function(e) {
                    var t = e.shareType;
                    if (this._cachePrepareInfo[t]) {
                        var r = this.shareController.getShareEntityByShareType(t) || {}
                          , n = this._cachePrepareInfo[t];
                        return n.userID = ut(),
                        void r.setShareURLQueries(et.getTrackingQueries(n))
                    }
                    var o = this.shareController.getShareEntityByShareType(t)
                      , i = {
                        userID: ut(),
                        shareID: rt(),
                        shareChannel: st(t)
                    };
                    o && o.setShareURLQueries(et.getTrackingQueries(i)),
                    this._cachePrepareInfo[t] = i
                }
            }, {
                key: "_onDefaultShareTrigger",
                value: function(e) {
                    var t = e.shareType
                      , r = this.shareController.getShareEntityByShareType(t) || {}
                      , n = this._cachePrepareInfo[t];
                    this._cachePrepareInfo[t] = null;
                    var o = st(t)
                      , i = mt.getInstance();
                    if (this.trackingEntity = new et(Object.assign({
                        userID: ut(),
                        shareID: rt(),
                        subOP: _t.SHARE,
                        shareChannel: o,
                        timelineDomain: r.timelineDomain,
                        shareForm: r.getShareForm && r.getShareForm(t),
                        shareMethod: r.getShareMethod && r.getShareMethod(t),
                        shareAppID: i.getAppIDSync(o)
                    }, n)),
                    !n && r.setShareURLQueries(et.getTrackingQueries(this.trackingEntity)),
                    r.getShareForm(t) !== V.COMMAND) {
                        var a = r.targetShareURL || r.shareURL;
                        this.trackingEntity.shareURL = a,
                        this.trackingEntity.shareDomain = new H(a).origin
                    }
                    this._sendLog(this.trackingEntity.normalize(t))
                }
            }, {
                key: "_onDefaultShareCompleted",
                value: function(e) {
                    var t = e.shareType
                      , r = e.shareResultType
                      , n = e.useComplete
                      , o = e.responseData
                      , i = void 0 === o ? {} : o;
                    if (!this.trackingEntity)
                        return wt.SHARE_STATUS_ILLEGAL;
                    var a = this.shareController.getShareEntityByShareType(t) || {}
                      , c = this.getShareResultByType(r);
                    if (n && (c = Ge),
                    a.getShareForm(t) !== V.COMMAND) {
                        var s = a.realShareURL || a.shareURL;
                        this.trackingEntity.shareURL = s,
                        this.trackingEntity.shareDomain = new H(s).origin
                    } else
                        this.trackingEntity.pcode = a.pcode;
                    var u = function(e) {
                        return e && "object" === bt(e) ? "string" != typeof e.wx_app_id ? null : e.wx_app_id : null
                    }(i);
                    u && (this.trackingEntity.shareAppID = u),
                    i.hasOwnProperty("wx_share_count") && (this.trackingEntity.wxShareCount = i.wx_share_count,
                    delete i.wx_share_count),
                    this.trackingEntity.subOP = _t.SHARE_RESULT,
                    this.trackingEntity.shareResult = c,
                    a.forceDowngrade || (this._sendLog(this.trackingEntity.normalize(t)),
                    this.trackingEntity = null)
                }
            }, {
                key: "trackProlongation",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this.trackingEntity)
                        return !1;
                    this.trackingEntity.shareMethod = G,
                    this.trackingEntity.shareResult = Ge;
                    var n = Object.assign(this.trackingEntity.normalize(e), t);
                    return this.trackingEntity = null,
                    "function" == typeof r ? r(n) : this._sendLog(n),
                    !0
                }
            }, {
                key: "getShareResultByType",
                value: function() {
                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) {
                    case Se:
                        return Ge;
                    case ke:
                        return Ve;
                    case Ee:
                        return Ke;
                    case Ie:
                        return ze;
                    default:
                        return Je
                    }
                }
            }]),
            e
        }()
          , St = {
            REACH_HOUR_LIMIT: 43367,
            REACH_DAY_LIMIT: 43368
        };
        function kt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var Et = function() {
            function e() {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._shareController = null,
                this._onPerformShareErrorHandler = null
            }
            return function(e, t, r) {
                t && kt(e.prototype, t),
                r && kt(e, r)
            }(e, [{
                key: "listen",
                value: function(e) {
                    e && e instanceof Oe && (this._shareController = e,
                    this._setupListener(e))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.removeListener()
                }
            }, {
                key: "_setupListener",
                value: function(e) {
                    this.removeListener(),
                    this._onPerformShareErrorHandler = this._onPerformShareError.bind(this),
                    e.on(C.PERFORM_LOG_FAILED, this._onPerformShareErrorHandler)
                }
            }, {
                key: "removeListener",
                value: function() {
                    this._shareController && this._onPerformShareErrorHandler && this._shareController.removeListener(C.PERFORM_LOG_FAILED, this._onPerformShareErrorHandler)
                }
            }, {
                key: "_onPerformShareError",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.error || {}
                      , r = e.shareType
                      , n = parseInt(t.errorCode, 10) || 0;
                    [St.REACH_DAY_LIMIT, St.REACH_HOUR_LIMIT].indexOf(n) >= 0 && (this._shareController.emit(C.SHARE_REACH_LIMIT, {
                        shareType: r,
                        errorCode: n
                    }),
                    this.hideShareMenuOption(r))
                }
            }, {
                key: "hideShareMenuOption",
                value: function(e) {
                    var t = this._shareController;
                    e && t && t.disableShare(e)
                }
            }]),
            e
        }();
        function It(e) {
            var t = e.errorCode
              , r = void 0 === t ? 0 : t
              , n = e.message
              , o = void 0 === n ? "" : n
              , a = e.options
              , c = void 0 === a ? {} : a;
            return new Promise(function(e) {
                i.a.trackingRecord({
                    op: "real_error",
                    sub_op: "share_error",
                    url: "",
                    page_url: location.href,
                    error_code: r,
                    error_message: o,
                    params: JSON.stringify(c)
                }, function() {
                    e()
                })
            }
            ).catch(function(e) {})
        }
        function Pt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var Rt = "undefined" != typeof window
          , At = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.shareController = null,
                this.shareTracker = null,
                this.menuWatcher = null,
                this.platform = ie(),
                this._disableContentCheck = !1,
                this._disablePerformShareLog = !1,
                this.controllerOptions = t.controllerOptions || {},
                this.noDefaultShare = t.noDefaultShare || !1,
                this.disableShare = t.disableShare || !1
            }
            return function(e, t, r) {
                t && Pt(e.prototype, t),
                r && Pt(e, r)
            }(e, [{
                key: "setup",
                value: function() {
                    Rt && (this._setupController(),
                    this._setupShareTracker(),
                    this._setupMenuWatcher(),
                    this._setupPerformShareLog())
                }
            }, {
                key: "_setupController",
                value: function() {
                    if (!this.shareController) {
                        var e = this.controllerOptions;
                        this.shareController = new Fe(e),
                        this.noDefaultShare || this._prepareShareController()
                    }
                }
            }, {
                key: "_prepareShareController",
                value: function() {
                    this.shareController && !this.shareController.isInited() && this.shareController.initShare()
                }
            }, {
                key: "_setupMenuWatcher",
                value: function() {
                    this.menuWatcher || (this.menuWatcher = new Et,
                    this.menuWatcher.listen(this.shareController))
                }
            }, {
                key: "_setupShareTracker",
                value: function() {
                    this.disableTracker || this.shareTracker || (this.shareTracker = new Ot({
                        transparentTransmission: this.trackerTrans
                    }),
                    this.shareTracker.listen(this.shareController))
                }
            }, {
                key: "_setupPerformShareLog",
                value: function() {
                    var e = this;
                    this.shareController && this.shareController.on(C.ON_SHARE_COMPLETED, function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!e._disablePerformShareLog && t.shareResultType === ke) {
                            var r = t.shareType
                              , n = e.getShareEntity(r);
                            (function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                                  , r = {};
                                return r.share_params = t.shareParams || {},
                                r.share_type = t.shareType || 0,
                                r.share_method = t.shareMethod || "",
                                r.origin = t.platform || "",
                                r.page_sn = t.pageSn || c.a.getInstance().getPageSN(),
                                r.page_info = t.pageInfo || {
                                    page_name: c.a.getInstance().getPageName(),
                                    page_url: location && location.href
                                },
                                r.extra = t.extra || {},
                                Object(u.a)({
                                    method: e,
                                    url: "api/flow/audience/share/perform",
                                    params: r
                                })
                            }
                            )("post", {
                                platform: e.platform,
                                shareType: r,
                                shareParams: ne(n),
                                shareMethod: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                      , t = arguments.length > 1 ? arguments[1] : void 0;
                                    return e.urlWrapType === M.SERVER_SHORT_URL && e.marketActivityID && e.getShareForm(t) === V.COMMAND ? re.CIPHER : e.urlWrapType === M.SERVER_SHORT_URL && e.marketActivityID && e.getShareForm(t) === V.TEXT ? re.LINK : W(e.urlWrapType) && e.marketActivityID && e.getShareForm(t) === V.CARD ? re.DOMAIN : e.getShareForm(t) === V.IMAGE ? re.IMAGE : re.NORMAL
                                }(n, r),
                                extra: n.payloadMixin && n.payloadMixin.extra
                            }).catch(function(t) {
                                e.shareController.emit(C.PERFORM_LOG_FAILED, {
                                    shareType: r,
                                    error: t
                                })
                            })
                        }
                    })
                }
            }, {
                key: "share",
                value: function(e) {
                    var t = this;
                    if (!this.shareController || this.disableShare)
                        return Promise.reject();
                    this._prepareShareController();
                    return new Promise(function(r, n) {
                        var o = t
                          , i = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                              , o = t.shareResultType;
                            a(),
                            ke === o ? r(t) : (It({
                                errorCode: 0,
                                message: "分享操作失败",
                                options: {
                                    shareResultType: o,
                                    shareType: e,
                                    payload: t
                                }
                            }),
                            n(t))
                        };
                        function a() {
                            o.shareController.removeListener(C.ON_SHARE_COMPLETED, i)
                        }
                        t.shareController.on(C.ON_SHARE_COMPLETED, i);
                        var c = t.shareController.share(e);
                        c && (a(),
                        t.shareController.emit(C.ON_SHARE_INTERRUPT, {
                            shareType: e,
                            shareErrorType: c
                        }),
                        It({
                            errorCode: c,
                            message: "分享前置流程异常",
                            options: {
                                shareType: e
                            }
                        }),
                        n({
                            shareType: e,
                            shareErrorType: c
                        }))
                    }
                    )
                }
            }, {
                key: "checkShareContent",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._disableContentCheck ? Promise.resolve() : function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = {};
                        return r.share_params = t.shareParams || {},
                        r.origin = t.platform || "",
                        r.page_sn = t.pageSn || c.a.getInstance().getPageSN() + "",
                        r.page_info = t.pageInfo || {
                            page_name: c.a.getInstance().getPageName(),
                            page_url: location && location.href
                        },
                        Object(u.a)({
                            method: e,
                            url: "api/flow/audience/share/content",
                            params: r
                        })
                    }("post", {
                        platform: this.platform,
                        shareParams: ne(e)
                    })
                }
            }, {
                key: "setContentCheck",
                value: function(e) {
                    this._disableContentCheck = !e
                }
            }, {
                key: "setPerformShareLog",
                value: function(e) {
                    this._disablePerformShareLog = !e
                }
            }, {
                key: "prepareShare",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 ? arguments[1] : void 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!this.shareController)
                        return Promise.resolve();
                    this._prepareShareController();
                    var o = t.entityConfig
                      , i = void 0 === o ? {} : o
                      , a = t.statisticsConfig
                      , c = void 0 === a ? {} : a;
                    this.shareTracker && this.shareTracker.updateTrackerTrans(c);
                    var s = this.shareController.createShareEntity(i, r);
                    return n.skipShareContentCheck ? this.shareController.refreshShare(s, r) : this.checkShareContent(s).then(function() {
                        return e.shareController.refreshShare(s, r)
                    })
                }
            }, {
                key: "getShareController",
                value: function() {
                    return this.shareController
                }
            }, {
                key: "getShareTracker",
                value: function() {
                    return this.shareTracker
                }
            }, {
                key: "getShareEntity",
                value: function(e, t) {
                    return this.shareController ? this.shareController.getShareEntityByShareType(e, t) : null
                }
            }, {
                key: "setupNativeShareButton",
                value: function(e, t) {
                    this.shareController && (this.shareController.removeAllListeners(C.ON_SHARE_BUTTON_CLICKED),
                    "function" == typeof t && this.shareController.on(C.ON_SHARE_BUTTON_CLICKED, t),
                    this.shareController.setupNativeShareButton(e))
                }
            }]),
            e
        }()
          , Tt = {
            USELESS: -1,
            DEFAULT: 0,
            OUT_OF_DATE: 1,
            FORBIDDEN: 2,
            ABANDONED: 3
        }
          , Dt = {
            title: Tt.DEFAULT,
            message: Tt.DEFAULT,
            thumbnailURL: Tt.DEFAULT,
            shareURL: Tt.DEFAULT,
            shareDomain: Tt.DEFAULT,
            waterMark: Tt.DEFAULT,
            timelineDomain: Tt.DEFAULT,
            timelineAppId: Tt.DEFAULT,
            urlWrapType: Tt.DEFAULT,
            drawImageOptions: Tt.DEFAULT,
            drawImageClass: Tt.DEFAULT,
            marketActivityID: Tt.DEFAULT,
            addRandomPrefix: Tt.DEFAULT,
            miniObjectPath: Tt.DEFAULT,
            miniObjectID: Tt.DEFAULT,
            useWxAppShare: Tt.DEFAULT,
            shortURLApi: Tt.DEFAULT,
            shortCommandApi: Tt.DEFAULT,
            domainURLApi: Tt.DEFAULT,
            forceDowngrade: Tt.DEFAULT,
            payloadMixin: Tt.DEFAULT,
            requestUsePost: Tt.DEFAULT,
            excludeShareChoices: Tt.DEFAULT,
            thirdPartyOpenType: Tt.DEFAULT,
            needSharedAmount: Tt.DEFAULT,
            maskTemplateID: Tt.DEFAULT,
            maskData: Tt.DEFAULT
        }
          , Ct = {}
          , jt = {
            onlyWeChat: Tt.USELESS,
            noDefaultShare: Tt.DEFAULT,
            isSDKPrepare: Tt.DEFAULT,
            disableShare: Tt.DEFAULT,
            disableCopyUrl: Tt.USELESS,
            enableBroswerOpen: Tt.USELESS
        }
          , xt = {
            cid: Tt.DEFAULT,
            campaign: Tt.DEFAULT
        }
          , Lt = {
            wechatAppID: Tt.DEFAULT,
            magicTrace: Tt.DEFAULT,
            shareTypeEnable: Tt.DEFAULT
        };
        function Ut(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var Nt = Tt
          , Wt = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.cacheRaw = t.cacheRaw || !1,
                this.deleteAfterCollect = t.deleteAfterCollect || !1
            }
            return function(e, t, r) {
                t && Ut(e.prototype, t),
                r && Ut(e, r)
            }(e, [{
                key: "filter",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = this._filterShareEntity(e)
                      , r = this._filterShareCallbacks(e)
                      , n = this._filterStatistics(e)
                      , o = this._filterShareConfigFlag(e)
                      , i = this._filterShareOther(e);
                    return {
                        _rawShareInfo: this.cacheRaw ? e : null,
                        entityConfig: t,
                        callbackConfig: r,
                        statisticsConfig: n,
                        flowControllConfig: o,
                        otherConfig: i,
                        compatibleShareConfig: {}
                    }
                }
            }, {
                key: "_filterByItems",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = {};
                    return (Object.keys(r) || []).forEach(function(o, i) {
                        var a = r[o];
                        a === Nt.FORBIDDEN ? delete t[o] : a === Nt.ABANDONED ? delete t[o] : void 0 !== t[o] && (n[o] = t[o],
                        e.deleteAfterCollect && delete t[o])
                    }),
                    n
                }
            }, {
                key: "_filterShareEntity",
                value: function(e) {
                    return this._filterByItems(e, Dt)
                }
            }, {
                key: "_filterShareConfigFlag",
                value: function(e) {
                    return this._filterByItems(e, jt)
                }
            }, {
                key: "_filterShareCallbacks",
                value: function(e) {
                    return this._filterByItems(e, Ct)
                }
            }, {
                key: "_filterStatistics",
                value: function(e) {
                    return this._filterByItems(e, xt)
                }
            }, {
                key: "_filterShareOther",
                value: function(e) {
                    return this._filterByItems(e, Lt)
                }
            }]),
            e
        }()
          , Mt = "!share_v2";
        function Bt(e) {
            "@babel/helpers - typeof";
            return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Qt(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var qt = {
            code: null,
            from: null,
            isappinstalled: null,
            at: null,
            share_id: null,
            is_back: null,
            page_id: null,
            list_id: null
        }
          , Ht = ["refer_page_name", "refer_page_section", "refer_page_element", "refer_page_id", "refer_page_sn", "refer_page_el_sn", "refer_mid", "refer_adg", "refer_cam", "refer_ced"];
        var Ft = null
          , Vt = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this._hasInited = !1,
                this.opts = t || {},
                this.shopConfig = t.shopConfig,
                this.defaultShareEntityConfig = {},
                this.shareManager = null,
                this.shareInfoFilter = null,
                this._sdkPrepared = !1,
                this.setup()
            }
            return function(e, t, r) {
                t && Qt(e.prototype, t),
                r && Qt(e, r)
            }(e, [{
                key: "setup",
                value: function() {
                    this._hasInited || (this._hasInited = !0,
                    this._setupShareInfoFilter(),
                    this._setupShareManager(),
                    this._prepareDefaultShare(),
                    this.waitAppIDCacheBuild())
                }
            }, {
                key: "_setupShareInfoFilter",
                value: function() {
                    this.shareInfoFilter || (this.shareInfoFilter = new Wt(this.opts.shareInfoFilterConfig))
                }
            }, {
                key: "_setupShareManager",
                value: function() {
                    if (!this.shareManager) {
                        var e = Object.assign({}, {
                            noDefaultShare: !1,
                            disableShare: !1,
                            useNativeShareButton: !1
                        }, this.opts.shareManagerConfig);
                        this.shareManager = new At(e),
                        this.shareManager.setup()
                    }
                }
            }, {
                key: "_prepareDefaultShare",
                value: function() {
                    var e = (this.shopConfig || l.a.shop || {}).name || " ";
                    Object.assign(this.defaultShareEntityConfig, {
                        title: e,
                        message: " ",
                        thumbnailURL: "",
                        shareURL: "/"
                    }),
                    this.prepareShare(this.defaultShareEntityConfig, void 0, {
                        skipShareContentCheck: !0
                    })
                }
            }, {
                key: "_prepareShareByShareType",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , r = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this._hasInited)
                        return Promise.reject();
                    var n = e.entityConfig
                      , o = void 0 === n ? {} : n;
                    return this._buildThumbnailURL(o, t),
                    this._buildShareURL(o, t),
                    this.shareManager.prepareShare(e, t, r)
                }
            }, {
                key: "prepareShare",
                value: function(e, t) {
                    var r = this
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!this._hasInited)
                        return Promise.reject();
                    var o = this.shareInfoFilter.filter(e)
                      , i = this._prepareShareByShareType(o, t, n);
                    return !this._sdkPrepared && i.then(function(e) {
                        r._checkSDKPrepared(o)
                    }, function(e) {
                        r._checkSDKPrepared(o)
                    }),
                    i
                }
            }, {
                key: "prepareShareSafe",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 ? arguments[1] : void 0;
                    if (!this._hasInited)
                        return Promise.reject();
                    var n = this.shareInfoFilter.filter(t)
                      , o = n.flowControllConfig
                      , i = void 0 === o ? {} : o;
                    if (!this._sdkPrepared && !i.isSDKPrepare)
                        return this.waitSDKReady().then(function() {
                            return e._prepareShareByShareType(n, r)
                        });
                    var a = this._prepareShareByShareType(n, r);
                    return !this._sdkPrepared && a.then(function(t) {
                        e._checkSDKPrepared(n)
                    }, function(t) {
                        e._checkSDKPrepared(n)
                    }),
                    a
                }
            }, {
                key: "waitSDKReady",
                value: function() {
                    var e = this;
                    return this.waitWeChatSDKReady().then(function() {
                        return e.waitAppIDCacheBuild()
                    })
                }
            }, {
                key: "waitWeChatSDKReady",
                value: function() {
                    if (this._sdkPrepared)
                        return Promise.resolve();
                    if (this.sdkReadyPromise)
                        return this.sdkReadyPromise;
                    var e = this.shareManager.getShareController();
                    return e ? (this.sdkReadyPromise = new Promise(function(t, r) {
                        e.once(C.ON_SDK_READY, function() {
                            t()
                        })
                    }
                    ),
                    this.sdkReadyPromise) : Promise.resolve()
                }
            }, {
                key: "waitAppIDCacheBuild",
                value: function() {
                    var e = mt.getInstance();
                    if (e.isInited())
                        return Promise.resolve();
                    if (this._actualWeChatAppID)
                        return e.build({
                            wechatAppID: this._actualWeChatAppID
                        });
                    if (!this.appIDReadyPromise) {
                        var t = this.shareManager.getShareController();
                        if (!t)
                            return Promise.resolve();
                        this.appIDReadyPromise = new Promise(function(r, n) {
                            t.once(C.ON_SDK_READY, function(t) {
                                var n = t.wechatAppID
                                  , o = t.magicTrace;
                                Promise.all([e.build({
                                    wechatAppID: n
                                }), le.getInstance().build({
                                    magicTrace: o
                                })]).then(function() {
                                    r()
                                })
                            })
                        }
                        )
                    }
                    return this.appIDReadyPromise
                }
            }, {
                key: "share",
                value: function(e, t) {
                    var r = this;
                    return this._hasInited ? t ? this.prepareShareSafe(t, e).then(function() {
                        return r.shareManager.share(e)
                    }) : this.shareManager.share(e) : Promise.reject()
                }
            }, {
                key: "_buildThumbnailURL",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = (arguments.length > 1 && arguments[1],
                    e.thumbnailURL);
                    if (void 0 !== t) {
                        var r = e.waterMark
                          , n = t || "";
                        void 0 !== r && null !== r || (r = Mt),
                        n = ((n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                              , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return (e = e || "").indexOf("!") >= 0 && !r ? e : (e = e.split("!")[0],
                            e += t)
                        }(n, r)) || "").replace(/^\/\//, "http://"),
                        e.thumbnailURL = n
                    }
                }
            }, {
                key: "_buildShareURL",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , r = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    e.shareURL);
                    if (r) {
                        if (e.urlWrapType !== M.RAW) {
                            var n = new H(r)
                              , o = n.query || {}
                              , i = Object.keys(o).reduce(function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                return Ht.indexOf(t) >= 0 && (e[t] = null),
                                e
                            }, {})
                              , a = c.a.getInstance().getExtendTransferParameters(!0)
                              , u = {
                                _wv: 41729,
                                _wvx: 10
                            };
                            !oe.b.isWeChatPlatform() || t !== E && t !== I || (u.sf_tag = "wechat"),
                            t !== R && t !== A || (u.from = "qrImg");
                            var p = n.pathname || "";
                            e.addRandomPrefix && (p = p.replace(/(\w+)\.html/g, function(e) {
                                return Math.floor(1e3 * Math.random()) + "" + e
                            }));
                            var f = Object.assign({}, u, o, a, qt, i)
                              , h = e.shareDomain || l.a.shareDomain;
                            e.shareURL = Object(s.b)(f, Object(s.c)(p), h)
                        }
                    } else
                        delete e.shareURL
                }
            }, {
                key: "_checkSDKPrepared",
                value: function(e) {
                    var t = e.flowControllConfig
                      , r = void 0 === t ? {} : t
                      , n = e.otherConfig
                      , o = void 0 === n ? {} : n;
                    if (r.isSDKPrepare && !this._sdkPrepared) {
                        this._sdkPrepared = !0;
                        var i = this.shareManager.getShareController();
                        o.wechatAppID && (this._actualWeChatAppID = o.wechatAppID);
                        var a = o.shareTypeEnable;
                        if (a && "object" === Bt(a)) {
                            var c = Object.keys(a).filter(function(e) {
                                return !a[e]
                            }).map(function(e) {
                                return parseInt(e, 10)
                            });
                            i.disableShare(c)
                        }
                        i && i.emit(C.ON_SDK_READY, {
                            wechatAppID: o.wechatAppID,
                            magicTrace: o.magicTrace
                        })
                    }
                }
            }, {
                key: "getShareManager",
                value: function() {
                    return this.shareManager ? this.shareManager : null
                }
            }, {
                key: "setupNativeShareButton",
                value: function(e, t) {
                    if (this.shareManager)
                        return this.shareManager.setupNativeShareButton(e, t)
                }
            }]),
            e
        }();
        Vt.getInstance = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Ft || (Ft = new Vt(e)),
            Ft
        }
        ;
        var Kt = Vt;
        r.d(t, "a", function() {
            return Yt
        });
        var zt = c.a.getInstance()
          , Gt = !1
          , Jt = null;
        function Yt() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0
              , r = arguments.length > 2 ? arguments[2] : void 0;
            if (!Gt) {
                Gt = !0,
                null == e && (e = {});
                var n = e.shareInfo || {}
                  , c = e.loginParams || {};
                Object(s.d)("code") && (Jt = Object(s.d)("code")),
                _.a.isWKWebView && window.addEventListener("pageshow", function(e) {
                    e.persisted && location.reload()
                }),
                i.a.init(),
                zt.init(null, {
                    pageProperty: e.pageProperty,
                    callback: function() {
                        a.a.replaceQuery({
                            page_id: zt.getPageID()
                        }),
                        !Jt && Zt(e)
                    }
                });
                var u = Kt.getInstance(Object.assign({}, {
                    shareManagerConfig: {
                        disableShare: n.disableShare,
                        noDefaultShare: n.noDefaultShare
                    }
                }));
                u.setup();
                var l = function(r) {
                    c.useWxSDK && w(n, function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        !function(e, t) {
                            t.isSDKPrepare = !0,
                            e && u.prepareShare(t)
                        }(e, n = Object.assign(n, t))
                    }),
                    Jt && Zt(e),
                    t && t()
                }
                  , p = function() {
                    Jt && Zt(e),
                    "function" == typeof r && r()
                };
                Object(o.d)().then(l).catch(function(e) {
                    c.requireLogin ? 40001 === parseInt(e.errorCode, 10) ? Object(o.e)(c).then(l).catch(function() {
                        p()
                    }) : p() : l()
                })
            }
        }
        function Zt(e) {
            if (!e || !e.skipPv) {
                zt.setKeyParams(zt.getKeyParamsFromQuery());
                var t = {
                    op: "pv"
                };
                Jt && (t.auth_code = Jt,
                Jt = null),
                i.a.trackingRecord(t)
            }
        }
    },
    6: function(e, t, r) {
        "use strict";
        var n = r(0)
          , o = r(4);
        function i(e) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function a(e, t) {
            "object" === i(t) && (this.pageProperty = t),
            "string" != typeof e ? e && "object" === i(e) && this.initByOpts(e) : this.initByUrl(e)
        }
        a.prototype.initByUrl = function(e, t) {
            if (e = e || ("undefined" != typeof location ? location.href : "")) {
                var r = Object(n.i)(e);
                this.pageELSN = r.page_el_sn || null,
                this.query = Object.assign({}, Object(n.i)(e), t);
                var o = Object(n.f)(e).slice(1).split(".")[0];
                this.initWithPageKey(o)
            }
        }
        ,
        a.prototype.initByOpts = function(e) {
            (e = e || {}).url ? this.initByUrl(e.url, e.query) : e.pageKey && this.initWithPageKey(e.pageKey)
        }
        ,
        a.prototype.initWithPageKey = function(e) {
            e = e || this.pageKey,
            this.pageKey = e;
            var t = Object.assign({}, this.pageProperty || {});
            if (t || (t = {}),
            this.info = t,
            this.pageName = t.pageName || e,
            this.pageSN = t.pageSN || null,
            this.requireLogin = t.requireLogin || !1,
            this.title = t.title,
            this.tkShareClick = t.tkShareClick || !1,
            this.keyParams = t.keyParams || {},
            this.native = t.native || {},
            "undefined" != typeof window && window.rawData && window.rawData.pageID)
                this.pageID = window.rawData.pageID;
            else if (this.query && this.query.page_id)
                this.pageID = this.query.page_id;
            else {
                var r = this.pageName
                  , n = this.pageSN;
                this.pageID = function(e, t, r) {
                    return [t || e || r || "", Date.now(), Object(o.e)(10)].join("_")
                }(r, n, e)
            }
            this.pvInfo = t.pv || {}
        }
        ,
        a.prototype.getPageName = function() {
            return this.pageName
        }
        ,
        a.prototype.getPageSN = function() {
            return this.pageSN
        }
        ,
        a.prototype.getPageID = function() {
            return this.pageID
        }
        ,
        a.prototype.getQuery = function() {
            return this.query
        }
        ,
        a.prototype.getAdQuery = function() {
            return {
                cid: this.query.cid,
                src: this.query.src,
                campaign: this.query.campaign
            }
        }
        ,
        a.prototype.setKeyParams = function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && null == e[t] && delete e[t];
            this.keyParams = Object.assign({}, this.keyParams, e)
        }
        ,
        a.prototype.getKeyParams = function() {
            return this.keyParams
        }
        ,
        a.prototype.getKeyParamsFromQuery = function() {
            var e = this.pvInfo.keys || []
              , t = {}
              , r = this.getQuery();
            return e.forEach(function(e) {
                var n, o;
                "string" == typeof e ? o = r[n = e] : "object" === i(e) && (n = e.key,
                o = r[n],
                e.mapping && e.mapping.forEach(function(e) {
                    null != r[e] && (o = r[e])
                }),
                null == o && null != e.default && (o = e.default)),
                null != n && null != o && (t[n] = o)
            }),
            this.setKeyParams(t),
            this.getKeyParams()
        }
        ,
        a.prototype.hasIndividualPV = function() {
            return this.pvInfo.indiv
        }
        ;
        var c = a
          , s = ["refer_page_name", "refer_page_section", "refer_page_element", "refer_page_id"];
        function u() {}
        u.prototype.init = function(e, t) {
            if (t = t || {},
            !this.pageInfo && (e = ("undefined" != typeof location ? location.href : e) || "")) {
                if (this.pageInfo = new c(e,t.pageProperty),
                this.pageInfo) {
                    var r = function(e) {
                        e = e || {};
                        var t = {}
                          , r = !1;
                        for (var n in e)
                            if (e.hasOwnProperty(n) && (0 === n.indexOf("refer_") || 0 === n.indexOf("_ex_"))) {
                                var o = e[n];
                                o && (t[n] = o,
                                r = !0)
                            }
                        return r ? t : null
                    }(this.pageInfo.getQuery());
                    r && this.updateReferInfo(r)
                }
                (function(e) {
                    return "function" == typeof e
                }
                )(t.callback) && t.callback()
            }
        }
        ,
        u.prototype.getPageInfo = function() {
            return this.pageInfo || this.init(),
            this.pageInfo
        }
        ,
        u.prototype.getQuery = function() {
            return this.pageInfo || this.init(),
            this.pageInfo.getQuery()
        }
        ,
        u.prototype.getParameters = function() {
            return this.getQuery()
        }
        ,
        u.prototype.getParameter = function(e) {
            return (this.getQuery() || {})[e]
        }
        ,
        u.prototype.getPageName = function() {
            return this.pageInfo ? this.pageInfo.getPageName() : ""
        }
        ,
        u.prototype.getPageSN = function() {
            return this.pageInfo ? this.pageInfo.getPageSN() : ""
        }
        ,
        u.prototype.getPageID = function() {
            return this.pageInfo ? this.pageInfo.getPageID() : ""
        }
        ,
        u.prototype.setKeyParams = function(e) {
            this.pageInfo && this.pageInfo.setKeyParams(e)
        }
        ,
        u.prototype.getKeyParams = function() {
            return this.pageInfo ? this.pageInfo.getKeyParams() : null
        }
        ,
        u.prototype.getKeyParamsFromQuery = function() {
            if (this.pageInfo)
                return this.pageInfo.getKeyParamsFromQuery()
        }
        ,
        u.prototype.updateReferInfo = function(e) {
            for (var t in e = e || {},
            this.referInfo || (this.referInfo = {}),
            e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    t && r && ("refer" !== t.split("_")[0] && t.indexOf("_") > 0 ? t = ["refer", t].join("_") : 0 === t.indexOf("_") && (t = "refer_".concat(t.slice(4))),
                    this.referInfo[t] = r)
                }
        }
        ,
        u.prototype.getReferPageQuery = function() {
            if (!this.referInfo)
                return null;
            var e = {}
              , t = this;
            for (var r in s.forEach(function(r) {
                t.referInfo[r] && (e[r] = t.referInfo[r])
            }),
            t.referInfo)
                r.indexOf("refer_") > -1 && (e[r] = t.referInfo[r]);
            return e
        }
        ,
        u.prototype.getReferPageID = function() {
            return this.referInfo ? this.referInfo.refer_page_id : null
        }
        ,
        u.prototype.getReferPageName = function() {
            return this.referInfo ? this.referInfo.refer_page_name : null
        }
        ,
        u.prototype.getReferPageSection = function() {
            return this.referInfo ? this.referInfo.refer_page_section : null
        }
        ,
        u.prototype.getReferPageElement = function() {
            return this.referInfo ? this.referInfo.refer_page_element : null
        }
        ,
        u.prototype.getReferPageQueryString = function() {
            var e = this.getReferPageQuery();
            return Object(n.a)(e)
        }
        ,
        u.prototype.addReferPageQueryString = function(e) {
            var t = new c(e)
              , r = Object.assign({}, t.getQuery(), this.getReferPageQuery());
            return [e.split("?")[0], Object(n.a)(r)].join("?")
        }
        ,
        u.prototype.addPageAsRefer = function(e) {
            if (e) {
                var t = new c(e)
                  , r = {
                    refer_page_name: this.getPageName(),
                    refer_page_id: this.getPageID()
                }
                  , o = this.getPageSN();
                o && (r.refer_page_sn = o);
                var i = t.pageELSN || "";
                i && (r.refer_page_el_sn = i);
                var a = Object.assign({}, t.getQuery(), r);
                return [e.split("?")[0], Object(n.a)(a)].join("?")
            }
        }
        ,
        u.prototype.addPageTransferParameters = function(e) {
            if (e) {
                var t = new c(e)
                  , r = {
                    refer_page_name: this.getPageName(),
                    refer_page_id: this.getPageID()
                }
                  , o = this.getPageSN();
                o && (r.refer_page_sn = o);
                var i = t.pageELSN || "";
                i && (r.refer_page_el_sn = i);
                var a = this.getExtendTransferParameters(!0)
                  , s = Object.assign({}, t.getQuery(), r, a);
                return [e.split("?")[0], Object(n.a)(s)].join("?")
            }
        }
        ,
        u.prototype.getExtendTransferParameters = function(e) {
            var t = this.getQuery() || {}
              , r = {};
            for (var n in t)
                if (t.hasOwnProperty(n) && !r[n]) {
                    0 === n.indexOf("_x_") ? r[n] = t[n] : "xcx_trace_id" === n || "xcx_version" === n ? r[n] = t[n] : e && 0 === n.indexOf("_ex_") ? r[n.replace("_ex_", "_x_")] = t[n] : e && "msgid" === n ? r["_x_msgid"] = t[n] : e && "refer_share_id" === n && (r["_x_share_id"] = t[n])
                }
            return r
        }
        ,
        u.prototype.hasIndividualPV = function() {
            return this.pageInfo ? this.pageInfo.hasIndividualPV() : null
        }
        ,
        u.prototype.getAdQuery = function() {
            return this.pageInfo ? this.pageInfo.getAdQuery() : ""
        }
        ,
        u.prototype.getPageInfoByUrl = function(e) {
            return e ? new c(e) : null
        }
        ;
        var l = {
            instance: null,
            getInstance: function() {
                return this.instance || (this.instance = new u),
                this.instance
            }
        };
        t.a = l
    },
    64: function(e, t, r) {
        "use strict";
        var n = r(0);
        t.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index.html"
              , t = document.createElement("a");
            return t.href = e,
            Object(n.h)(t.search)._p_launch_id || ""
        }
    },
    65: function(e, t, r) {
        "use strict";
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        var o = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.textArea = null
            }
            return function(e, t, r) {
                t && n(e.prototype, t),
                r && n(e, r)
            }(e, [{
                key: "createTextArea",
                value: function(e) {
                    this.textArea = document.createElement("textArea"),
                    this.textArea.style.position = "fixed",
                    this.textArea.style.top = 0,
                    this.textArea.style.left = 0,
                    this.textArea.value = e,
                    this.textArea.hasAttribute("readonly") || this.textArea.setAttribute("readonly", ""),
                    document.body.appendChild(this.textArea)
                }
            }, {
                key: "selectText",
                value: function() {
                    var e, t;
                    !function(e) {
                        return /iphone|ipad|ipod/.test(e)
                    }(navigator.userAgent.toLowerCase()) ? this.textArea.select() : ((e = document.createRange()).selectNodeContents(this.textArea),
                    (t = window.getSelection()).removeAllRanges(),
                    t.addRange(e),
                    this.textArea.setSelectionRange(0, 999999))
                }
            }, {
                key: "copyToClipboard",
                value: function() {
                    document.execCommand("copy"),
                    document.body.removeChild(this.textArea)
                }
            }, {
                key: "copy",
                value: function(e) {
                    this.createTextArea(e),
                    this.selectText(),
                    this.copyToClipboard()
                }
            }]),
            e
        }();
        t.a = o
    },
    9: function(e, t, r) {
        "use strict";
        var n = "";
        n = location.protocol + "//" + location.hostname;
        var o = "m.hutaojie.com" === location.host ? {
            shop: {
                shopID: 1,
                name: "胡桃街"
            },
            apiDomain: "https:" === location.protocol ? "https://apiv2.hutaojie.com/" : "http://apiv2.hutaojie.com/",
            loggingURL: "http://sandbox-tk.pdd.net/t.gif",
            logRoutes: {
                real_error: "https://tne.htj.pdd.net/tne.gif"
            },
            httpsLoggingURL: "https://sandbox-tk.pdd.net/t.gif",
            httpsLogRoutes: {
                real_error: "https://tne.htj.yiran.com/tne.gif"
            },
            pushDomain: "ws://chat-ws.htj.yiran.com",
            chatDomain: "ws://chat-ws.htj.yiran.com",
            wssDomain: "wss://chat-ws.htj.yiran.com",
            fileDomain: "http://file.hutaojie.com/",
            httpsFileDomain: "https://file.hutaojie.com/",
            shareDomain: "http://m.hutaojie.com/",
            AppID: {
                WeChat: 1
            },
            ApiKey: {
                WeChat: "wx88f6836551e2b34e"
            }
        } : {
            shop: {
                shopID: 1,
                name: ""
            },
            apiDomain: n + "/proxy/api",
            loggingURL: n + "/proxy/th/t.gif",
            logRoutes: {
                error: n + "/proxy/te/te.gif",
                real_error: n + "/proxy/tne/tne.gif"
            },
            httpsLoggingURL: n + "/proxy/th/t.gif",
            httpsLogRoutes: {
                error: n + "/proxy/te/te.gif",
                real_error: n + "/proxy/tne/tne.gif"
            },
            AppID: {
                WeChat: 74
            },
            ApiKey: {
                WeChat: "wxbeed360e01d7ba93"
            }
        };
        r.d(t, "a", function() {
            return o
        })
    }
}, [[308, 0, 1]]]);