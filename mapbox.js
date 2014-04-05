! function t(e, i, n) {
    function o(a, r) {
        if (!i[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!r && l) return l(a, !0);
                if (s) return s(a, !0);
                throw new Error("Cannot find module '" + a + "'")
            }
            var h = i[a] = {
                exports: {}
            };
            e[a][0].call(h.exports, function (t) {
                var i = e[a][1][t];
                return o(i ? i : t)
            }, h, h.exports, t, e, i, n)
        }
        return i[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
    return o
}({
        1: [
            function (t) {
                t("./leaflet"), t("./mapbox")
            }, {
                "./leaflet": 2,
                "./mapbox": 3
            }
        ],
        2: [
            function (t) {
                window.L = t("leaflet/dist/leaflet-src")
            }, {
                "leaflet/dist/leaflet-src": 6
            }
        ],
        3: [
            function (t, e) {
                window.L.Icon.Default.imagePath = "//api.tiles.mapbox.com/mapbox.js/v" + t("./package.json").version + "/images", L.mapbox = e.exports = {
                    VERSION: t("./package.json").version,
                    geocoder: t("./src/geocoder"),
                    marker: t("./src/marker"),
                    simplestyle: t("./src/simplestyle"),
                    tileLayer: t("./src/tile_layer"),
                    infoControl: t("./src/info_control"),
                    shareControl: t("./src/share_control"),
                    legendControl: t("./src/legend_control"),
                    geocoderControl: t("./src/geocoder_control"),
                    gridControl: t("./src/grid_control"),
                    gridLayer: t("./src/grid_layer"),
                    featureLayer: t("./src/feature_layer"),
                    map: t("./src/map"),
                    config: t("./src/config"),
                    sanitize: t("sanitize-caja"),
                    template: t("mustache").to_html
                }, L.mapbox.markerLayer = L.mapbox.featureLayer
            }, {
                "./package.json": 10,
                "./src/config": 11,
                "./src/feature_layer": 12,
                "./src/geocoder": 13,
                "./src/geocoder_control": 14,
                "./src/grid_control": 16,
                "./src/grid_layer": 17,
                "./src/info_control": 18,
                "./src/legend_control": 19,
                "./src/map": 21,
                "./src/marker": 22,
                "./src/share_control": 24,
                "./src/simplestyle": 25,
                "./src/tile_layer": 26,
                mustache: 7,
                "sanitize-caja": 8
            }
        ],
        4: [
            function (t, e) {
                function i(t, e, i) {
                    function n(t) {
                        return t >= 200 && 300 > t || 304 === t
                    }

                    function o() {
                        void 0 === r.status || n(r.status) ? e.call(r, null, r) : e.call(r, r, null)
                    }
                    var s = !1;
                    if ("undefined" == typeof window.XMLHttpRequest) return e(Error("Browser not supported"));
                    if ("undefined" == typeof i) {
                        var a = t.match(/^\s*https?:\/\/[^\/]*/);
                        i = a && a[0] !== location.protocol + "//" + location.domain + (location.port ? ":" + location.port : "")
                    }
                    var r;
                    if (!i || "object" != typeof window.XDomainRequest && "function" != typeof window.XDomainRequest) r = new window.XMLHttpRequest;
                    else {
                        r = new window.XDomainRequest;
                        var l = e;
                        e = function () {
                            if (s) l.apply(this, arguments);
                            else {
                                var t = this,
                                    e = arguments;
                                setTimeout(function () {
                                    l.apply(t, e)
                                }, 0)
                            }
                        }
                    }
                    return "onload" in r ? r.onload = o : r.onreadystatechange = function () {
                        4 === r.readyState && o()
                    }, r.onerror = function (t) {
                        e.call(this, t || !0, null), e = function () {}
                    }, r.onprogress = function () {}, r.ontimeout = function (t) {
                        e.call(this, t, null), e = function () {}
                    }, r.onabort = function (t) {
                        e.call(this, t, null), e = function () {}
                    }, r.open("GET", t, !0), r.send(null), s = !0, r
                }
                "undefined" != typeof e && (e.exports = i)
            }, {}
        ],
        5: [
            function (t, e, i) {
                ! function (t) {
                    function e(t) {
                        if (e[t] !== s) return e[t];
                        var i;
                        if ("bug-string-char-index" == t) i = "a" != "a" [0];
                        else if ("json" == t) i = e("json-stringify") && e("json-parse");
                        else {
                            var n, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == t) {
                                var r = h.stringify,
                                    l = "function" == typeof r && u;
                                if (l) {
                                    (n = function () {
                                        return 1
                                    }).toJSON = n;
                                    try {
                                        l = "0" === r(0) && "0" === r(new Number) && '""' == r(new String) && r(a) === s && r(s) === s && r() === s && "1" === r(n) && "[1]" == r([n]) && "[null]" == r([s]) && "null" == r(null) && "[null,null,null]" == r([s, a, null]) && r({
                                            a: [n, !0, !1, null, "\x00\b\n\f\r	"]
                                        }) == o && "1" === r(null, n) && "[\n 1,\n 2\n]" == r([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == r(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == r(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == r(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == r(new Date(-1))
                                    } catch (c) {
                                        l = !1
                                    }
                                }
                                i = l
                            }
                            if ("json-parse" == t) {
                                var p = h.parse;
                                if ("function" == typeof p) try {
                                    if (0 === p("0") && !p(!1)) {
                                        n = p(o);
                                        var d = 5 == n.a.length && 1 === n.a[0];
                                        if (d) {
                                            try {
                                                d = !p('"	"')
                                            } catch (c) {}
                                            if (d) try {
                                                d = 1 !== p("01")
                                            } catch (c) {}
                                            if (d) try {
                                                d = 1 !== p("1.")
                                            } catch (c) {}
                                        }
                                    }
                                } catch (c) {
                                    d = !1
                                }
                                i = d
                            }
                        }
                        return e[t] = !! i
                    }
                    var n, o, s, a = {}.toString,
                        r = "function" == typeof define && define.amd,
                        l = "object" == typeof JSON && JSON,
                        h = "object" == typeof i && i && !i.nodeType && i;
                    h && l ? (h.stringify = l.stringify, h.parse = l.parse) : h = t.JSON = l || {};
                    var u = new Date(-0xc782b5b800cec);
                    try {
                        u = -109252 == u.getUTCFullYear() && 0 === u.getUTCMonth() && 1 === u.getUTCDate() && 10 == u.getUTCHours() && 37 == u.getUTCMinutes() && 6 == u.getUTCSeconds() && 708 == u.getUTCMilliseconds()
                    } catch (c) {}
                    if (!e("json")) {
                        var p = "[object Function]",
                            d = "[object Date]",
                            m = "[object Number]",
                            f = "[object String]",
                            _ = "[object Array]",
                            g = "[object Boolean]",
                            v = e("bug-string-char-index");
                        if (!u) var y = Math.floor,
                        L = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], b = function (t, e) {
                            return L[e] + 365 * (t - 1970) + y((t - 1969 + (e = +(e > 1))) / 4) - y((t - 1901 + e) / 100) + y((t - 1601 + e) / 400)
                        };
                        (n = {}.hasOwnProperty) || (n = function (t) {
                            var e, i = {};
                            return (i.__proto__ = null, i.__proto__ = {
                                toString: 1
                            }, i).toString != a ? n = function (t) {
                                var e = this.__proto__,
                                    i = t in (this.__proto__ = null, this);
                                return this.__proto__ = e, i
                            } : (e = i.constructor, n = function (t) {
                                var i = (this.constructor || e).prototype;
                                return t in this && !(t in i && this[t] === i[t])
                            }), i = null, n.call(this, t)
                        });
                        var P = {
                            "boolean": 1,
                            number: 1,
                            string: 1,
                            undefined: 1
                        }, T = function (t, e) {
                                var i = typeof t[e];
                                return "object" == i ? !! t[e] : !P[i]
                            };
                        if (o = function (t, e) {
                            var i, s, r, l = 0;
                            (i = function () {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, s = new i;
                            for (r in s) n.call(s, r) && l++;
                            return i = s = null, l ? o = 2 == l ? function (t, e) {
                                var i, o = {}, s = a.call(t) == p;
                                for (i in t) s && "prototype" == i || n.call(o, i) || !(o[i] = 1) || !n.call(t, i) || e(i)
                            } : function (t, e) {
                                var i, o, s = a.call(t) == p;
                                for (i in t) s && "prototype" == i || !n.call(t, i) || (o = "constructor" === i) || e(i);
                                (o || n.call(t, i = "constructor")) && e(i)
                            } : (s = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], o = function (t, e) {
                                var i, o, r = a.call(t) == p,
                                    l = !r && "function" != typeof t.constructor && T(t, "hasOwnProperty") ? t.hasOwnProperty : n;
                                for (i in t) r && "prototype" == i || !l.call(t, i) || e(i);
                                for (o = s.length; i = s[--o]; l.call(t, i) && e(i));
                            }), o(t, e)
                        }, !e("json-stringify")) {
                            var E = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            }, x = "000000",
                                w = function (t, e) {
                                    return (x + (e || 0)).slice(-t)
                                }, C = "\\u00",
                                M = function (t) {
                                    var e, i = '"',
                                        n = 0,
                                        o = t.length,
                                        s = o > 10 && v;
                                    for (s && (e = t.split("")); o > n; n++) {
                                        var a = t.charCodeAt(n);
                                        switch (a) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            i += E[a];
                                            break;
                                        default:
                                            if (32 > a) {
                                                i += C + w(2, a.toString(16));
                                                break
                                            }
                                            i += s ? e[n] : v ? t.charAt(n) : t[n]
                                        }
                                    }
                                    return i + '"'
                                }, D = function (t, e, i, r, l, h, u) {
                                    var c, p, v, L, P, T, E, x, C, S, k, A, U, O, I, R;
                                    try {
                                        c = e[t]
                                    } catch (z) {}
                                    if ("object" == typeof c && c)
                                        if (p = a.call(c), p != d || n.call(c, "toJSON")) "function" == typeof c.toJSON && (p != m && p != f && p != _ || n.call(c, "toJSON")) && (c = c.toJSON(t));
                                        else if (c > -1 / 0 && 1 / 0 > c) {
                                        if (b) {
                                            for (P = y(c / 864e5), v = y(P / 365.2425) + 1970 - 1; b(v + 1, 0) <= P; v++);
                                            for (L = y((P - b(v, 0)) / 30.42); b(v, L + 1) <= P; L++);
                                            P = 1 + P - b(v, L), T = (c % 864e5 + 864e5) % 864e5, E = y(T / 36e5) % 24, x = y(T / 6e4) % 60, C = y(T / 1e3) % 60, S = T % 1e3
                                        } else v = c.getUTCFullYear(), L = c.getUTCMonth(), P = c.getUTCDate(), E = c.getUTCHours(), x = c.getUTCMinutes(), C = c.getUTCSeconds(), S = c.getUTCMilliseconds();
                                        c = (0 >= v || v >= 1e4 ? (0 > v ? "-" : "+") + w(6, 0 > v ? -v : v) : w(4, v)) + "-" + w(2, L + 1) + "-" + w(2, P) + "T" + w(2, E) + ":" + w(2, x) + ":" + w(2, C) + "." + w(3, S) + "Z"
                                    } else c = null; if (i && (c = i.call(e, t, c)), null === c) return "null";
                                    if (p = a.call(c), p == g) return "" + c;
                                    if (p == m) return c > -1 / 0 && 1 / 0 > c ? "" + c : "null";
                                    if (p == f) return M("" + c);
                                    if ("object" == typeof c) {
                                        for (O = u.length; O--;)
                                            if (u[O] === c) throw TypeError();
                                        if (u.push(c), k = [], I = h, h += l, p == _) {
                                            for (U = 0, O = c.length; O > U; U++) A = D(U, c, i, r, l, h, u), k.push(A === s ? "null" : A);
                                            R = k.length ? l ? "[\n" + h + k.join(",\n" + h) + "\n" + I + "]" : "[" + k.join(",") + "]" : "[]"
                                        } else o(r || c, function (t) {
                                            var e = D(t, c, i, r, l, h, u);
                                            e !== s && k.push(M(t) + ":" + (l ? " " : "") + e)
                                        }), R = k.length ? l ? "{\n" + h + k.join(",\n" + h) + "\n" + I + "}" : "{" + k.join(",") + "}" : "{}";
                                        return u.pop(), R
                                    }
                                };
                            h.stringify = function (t, e, i) {
                                var n, o, s, r;
                                if ("function" == typeof e || "object" == typeof e && e)
                                    if ((r = a.call(e)) == p) o = e;
                                    else if (r == _) {
                                    s = {};
                                    for (var l, h = 0, u = e.length; u > h; l = e[h++], r = a.call(l), (r == f || r == m) && (s[l] = 1));
                                }
                                if (i)
                                    if ((r = a.call(i)) == m) {
                                        if ((i -= i % 1) > 0)
                                            for (n = "", i > 10 && (i = 10); n.length < i; n += " ");
                                    } else r == f && (n = i.length <= 10 ? i : i.slice(0, 10));
                                return D("", (l = {}, l[""] = t, l), o, s, n, "", [])
                            }
                        }
                        if (!e("json-parse")) {
                            var S, k, A = String.fromCharCode,
                                U = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "	",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                }, O = function () {
                                    throw S = k = null, SyntaxError()
                                }, I = function () {
                                    for (var t, e, i, n, o, s = k, a = s.length; a > S;) switch (o = s.charCodeAt(S)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        S++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return t = v ? s.charAt(S) : s[S], S++, t;
                                    case 34:
                                        for (t = "@", S++; a > S;)
                                            if (o = s.charCodeAt(S), 32 > o) O();
                                            else if (92 == o) switch (o = s.charCodeAt(++S)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            t += U[o], S++;
                                            break;
                                        case 117:
                                            for (e = ++S, i = S + 4; i > S; S++) o = s.charCodeAt(S), o >= 48 && 57 >= o || o >= 97 && 102 >= o || o >= 65 && 70 >= o || O();
                                            t += A("0x" + s.slice(e, S));
                                            break;
                                        default:
                                            O()
                                        } else {
                                            if (34 == o) break;
                                            for (o = s.charCodeAt(S), e = S; o >= 32 && 92 != o && 34 != o;) o = s.charCodeAt(++S);
                                            t += s.slice(e, S)
                                        } if (34 == s.charCodeAt(S)) return S++, t;
                                        O();
                                    default:
                                        if (e = S, 45 == o && (n = !0, o = s.charCodeAt(++S)), o >= 48 && 57 >= o) {
                                            for (48 == o && (o = s.charCodeAt(S + 1), o >= 48 && 57 >= o) && O(), n = !1; a > S && (o = s.charCodeAt(S), o >= 48 && 57 >= o); S++);
                                            if (46 == s.charCodeAt(S)) {
                                                for (i = ++S; a > i && (o = s.charCodeAt(i), o >= 48 && 57 >= o); i++);
                                                i == S && O(), S = i
                                            }
                                            if (o = s.charCodeAt(S), 101 == o || 69 == o) {
                                                for (o = s.charCodeAt(++S), (43 == o || 45 == o) && S++, i = S; a > i && (o = s.charCodeAt(i), o >= 48 && 57 >= o); i++);
                                                i == S && O(), S = i
                                            }
                                            return +s.slice(e, S)
                                        }
                                        if (n && O(), "true" == s.slice(S, S + 4)) return S += 4, !0;
                                        if ("false" == s.slice(S, S + 5)) return S += 5, !1;
                                        if ("null" == s.slice(S, S + 4)) return S += 4, null;
                                        O()
                                    }
                                    return "$"
                                }, R = function (t) {
                                    var e, i;
                                    if ("$" == t && O(), "string" == typeof t) {
                                        if ("@" == (v ? t.charAt(0) : t[0])) return t.slice(1);
                                        if ("[" == t) {
                                            for (e = []; t = I(), "]" != t; i || (i = !0)) i && ("," == t ? (t = I(), "]" == t && O()) : O()), "," == t && O(), e.push(R(t));
                                            return e
                                        }
                                        if ("{" == t) {
                                            for (e = {}; t = I(), "}" != t; i || (i = !0)) i && ("," == t ? (t = I(), "}" == t && O()) : O()), ("," == t || "string" != typeof t || "@" != (v ? t.charAt(0) : t[0]) || ":" != I()) && O(), e[t.slice(1)] = R(I());
                                            return e
                                        }
                                        O()
                                    }
                                    return t
                                }, z = function (t, e, i) {
                                    var n = B(t, e, i);
                                    n === s ? delete t[e] : t[e] = n
                                }, B = function (t, e, i) {
                                    var n, s = t[e];
                                    if ("object" == typeof s && s)
                                        if (a.call(s) == _)
                                            for (n = s.length; n--;) z(s, n, i);
                                        else o(s, function (t) {
                                            z(s, t, i)
                                        });
                                    return i.call(t, e, s)
                                };
                            h.parse = function (t, e) {
                                var i, n;
                                return S = 0, k = "" + t, i = R(I()), "$" != I() && O(), S = k = null, e && a.call(e) == p ? B((n = {}, n[""] = i, n), "", e) : i
                            }
                        }
                    }
                    r && define(function () {
                        return h
                    })
                }(this)
            }, {}
        ],
        6: [
            function (t, e) {
                ! function (t, i, n) {
                    var o = t.L,
                        s = {};
                    s.version = "0.7.2", "object" == typeof e && "object" == typeof e.exports ? e.exports = s : "function" == typeof define && define.amd && define(s), s.noConflict = function () {
                        return t.L = o, this
                    }, t.L = s, s.Util = {
                        extend: function (t) {
                            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                            for (i = 0, n = s.length; n > i; i++) {
                                o = s[i] || {};
                                for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
                            }
                            return t
                        },
                        bind: function (t, e) {
                            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                            return function () {
                                return t.apply(e, i || arguments)
                            }
                        },
                        stamp: function () {
                            var t = 0,
                                e = "_leaflet_id";
                            return function (i) {
                                return i[e] = i[e] || ++t, i[e]
                            }
                        }(),
                        invokeEach: function (t, e, i) {
                            var n, o;
                            if ("object" == typeof t) {
                                o = Array.prototype.slice.call(arguments, 3);
                                for (n in t) e.apply(i, [n, t[n]].concat(o));
                                return !0
                            }
                            return !1
                        },
                        limitExecByInterval: function (t, e, i) {
                            var n, o;
                            return function s() {
                                var a = arguments;
                                return n ? (o = !0, void 0) : (n = !0, setTimeout(function () {
                                    n = !1, o && (s.apply(i, a), o = !1)
                                }, e), t.apply(i, a), void 0)
                            }
                        },
                        falseFn: function () {
                            return !1
                        },
                        formatNum: function (t, e) {
                            var i = Math.pow(10, e || 5);
                            return Math.round(t * i) / i
                        },
                        trim: function (t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        },
                        splitWords: function (t) {
                            return s.Util.trim(t).split(/\s+/)
                        },
                        setOptions: function (t, e) {
                            return t.options = s.extend({}, t.options, e), t.options
                        },
                        getParamString: function (t, e, i) {
                            var n = [];
                            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                        },
                        template: function (t, e) {
                            return t.replace(/\{ *([\w_]+) *\}/g, function (t, i) {
                                var o = e[i];
                                if (o === n) throw new Error("No value provided for variable " + t);
                                return "function" == typeof o && (o = o(e)), o
                            })
                        },
                        isArray: Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    },
                    function () {
                        function e(e) {
                            var i, n, o = ["webkit", "moz", "o", "ms"];
                            for (i = 0; i < o.length && !n; i++) n = t[o[i] + e];
                            return n
                        }

                        function i(e) {
                            var i = +new Date,
                                o = Math.max(0, 16 - (i - n));
                            return n = i + o, t.setTimeout(e, o)
                        }
                        var n = 0,
                            o = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
                            a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
                                t.clearTimeout(e)
                            };
                        s.Util.requestAnimFrame = function (e, n, a, r) {
                            return e = s.bind(e, n), a && o === i ? (e(), void 0) : o.call(t, e, r)
                        }, s.Util.cancelAnimFrame = function (e) {
                            e && a.call(t, e)
                        }
                    }(), s.extend = s.Util.extend, s.bind = s.Util.bind, s.stamp = s.Util.stamp, s.setOptions = s.Util.setOptions, s.Class = function () {}, s.Class.extend = function (t) {
                        var e = function () {
                            this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                        }, i = function () {};
                        i.prototype = this.prototype;
                        var n = new i;
                        n.constructor = e, e.prototype = n;
                        for (var o in this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                        t.statics && (s.extend(e, t.statics), delete t.statics), t.includes && (s.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = s.extend({}, n.options, t.options)), s.extend(n, t), n._initHooks = [];
                        var a = this;
                        return e.__super__ = a.prototype, n.callInitHooks = function () {
                            if (!this._initHooksCalled) {
                                a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                                for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
                            }
                        }, e
                    }, s.Class.include = function (t) {
                        s.extend(this.prototype, t)
                    }, s.Class.mergeOptions = function (t) {
                        s.extend(this.prototype.options, t)
                    }, s.Class.addInitHook = function (t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i = "function" == typeof t ? t : function () {
                                this[t].apply(this, e)
                            };
                        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
                    };
                    var a = "_leaflet_events";
                    s.Mixin = {}, s.Mixin.Events = {
                        addEventListener: function (t, e, i) {
                            if (s.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                            var n, o, r, l, h, u, c, p = this[a] = this[a] || {}, d = i && i !== this && s.stamp(i);
                            for (t = s.Util.splitWords(t), n = 0, o = t.length; o > n; n++) r = {
                                action: e,
                                context: i || this
                            }, l = t[n], d ? (h = l + "_idx", u = h + "_len", c = p[h] = p[h] || {}, c[d] || (c[d] = [], p[u] = (p[u] || 0) + 1), c[d].push(r)) : (p[l] = p[l] || [], p[l].push(r));
                            return this
                        },
                        hasEventListeners: function (t) {
                            var e = this[a];
                            return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
                        },
                        removeEventListener: function (t, e, i) {
                            if (!this[a]) return this;
                            if (!t) return this.clearAllEventListeners();
                            if (s.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                            var n, o, r, l, h, u, c, p, d, m = this[a],
                                f = i && i !== this && s.stamp(i);
                            for (t = s.Util.splitWords(t), n = 0, o = t.length; o > n; n++)
                                if (r = t[n], u = r + "_idx", c = u + "_len", p = m[u], e) {
                                    if (l = f && p ? p[f] : m[r]) {
                                        for (h = l.length - 1; h >= 0; h--) l[h].action !== e || i && l[h].context !== i || (d = l.splice(h, 1), d[0].action = s.Util.falseFn);
                                        i && p && 0 === l.length && (delete p[f], m[c]--)
                                    }
                                } else delete m[r], delete m[u], delete m[c];
                            return this
                        },
                        clearAllEventListeners: function () {
                            return delete this[a], this
                        },
                        fireEvent: function (t, e) {
                            if (!this.hasEventListeners(t)) return this;
                            var i, n, o, r, l, h = s.Util.extend({}, e, {
                                    type: t,
                                    target: this
                                }),
                                u = this[a];
                            if (u[t])
                                for (i = u[t].slice(), n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            r = u[t + "_idx"];
                            for (l in r)
                                if (i = r[l].slice())
                                    for (n = 0, o = i.length; o > n; n++) i[n].action.call(i[n].context, h);
                            return this
                        },
                        addOneTimeEventListener: function (t, e, i) {
                            if (s.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                            var n = s.bind(function () {
                                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                            }, this);
                            return this.addEventListener(t, e, i).addEventListener(t, n, i)
                        }
                    }, s.Mixin.Events.on = s.Mixin.Events.addEventListener, s.Mixin.Events.off = s.Mixin.Events.removeEventListener, s.Mixin.Events.once = s.Mixin.Events.addOneTimeEventListener, s.Mixin.Events.fire = s.Mixin.Events.fireEvent,
                    function () {
                        var e = "ActiveXObject" in t,
                            o = e && !i.addEventListener,
                            a = navigator.userAgent.toLowerCase(),
                            r = -1 !== a.indexOf("webkit"),
                            l = -1 !== a.indexOf("chrome"),
                            h = -1 !== a.indexOf("phantom"),
                            u = -1 !== a.indexOf("android"),
                            c = -1 !== a.search("android [23]"),
                            p = -1 !== a.indexOf("gecko"),
                            d = typeof orientation != n + "",
                            m = t.navigator && t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints && !t.PointerEvent,
                            f = t.PointerEvent && t.navigator.pointerEnabled && t.navigator.maxTouchPoints || m,
                            _ = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia("(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
                            g = i.documentElement,
                            v = e && "transition" in g.style,
                            y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !c,
                            L = "MozPerspective" in g.style,
                            b = "OTransition" in g.style,
                            P = !t.L_DISABLE_3D && (v || y || L || b) && !h,
                            T = !t.L_NO_TOUCH && !h && function () {
                                var t = "ontouchstart";
                                if (f || t in g) return !0;
                                var e = i.createElement("div"),
                                    n = !1;
                                return e.setAttribute ? (e.setAttribute(t, "return;"), "function" == typeof e[t] && (n = !0), e.removeAttribute(t), e = null, n) : !1
                            }();
                        s.Browser = {
                            ie: e,
                            ielt9: o,
                            webkit: r,
                            gecko: p && !r && !t.opera && !e,
                            android: u,
                            android23: c,
                            chrome: l,
                            ie3d: v,
                            webkit3d: y,
                            gecko3d: L,
                            opera3d: b,
                            any3d: P,
                            mobile: d,
                            mobileWebkit: d && r,
                            mobileWebkit3d: d && y,
                            mobileOpera: d && t.opera,
                            touch: T,
                            msPointer: m,
                            pointer: f,
                            retina: _
                        }
                    }(), s.Point = function (t, e, i) {
                        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                    }, s.Point.prototype = {
                        clone: function () {
                            return new s.Point(this.x, this.y)
                        },
                        add: function (t) {
                            return this.clone()._add(s.point(t))
                        },
                        _add: function (t) {
                            return this.x += t.x, this.y += t.y, this
                        },
                        subtract: function (t) {
                            return this.clone()._subtract(s.point(t))
                        },
                        _subtract: function (t) {
                            return this.x -= t.x, this.y -= t.y, this
                        },
                        divideBy: function (t) {
                            return this.clone()._divideBy(t)
                        },
                        _divideBy: function (t) {
                            return this.x /= t, this.y /= t, this
                        },
                        multiplyBy: function (t) {
                            return this.clone()._multiplyBy(t)
                        },
                        _multiplyBy: function (t) {
                            return this.x *= t, this.y *= t, this
                        },
                        round: function () {
                            return this.clone()._round()
                        },
                        _round: function () {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        },
                        floor: function () {
                            return this.clone()._floor()
                        },
                        _floor: function () {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        },
                        distanceTo: function (t) {
                            t = s.point(t);
                            var e = t.x - this.x,
                                i = t.y - this.y;
                            return Math.sqrt(e * e + i * i)
                        },
                        equals: function (t) {
                            return t = s.point(t), t.x === this.x && t.y === this.y
                        },
                        contains: function (t) {
                            return t = s.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                        },
                        toString: function () {
                            return "Point(" + s.Util.formatNum(this.x) + ", " + s.Util.formatNum(this.y) + ")"
                        }
                    }, s.point = function (t, e, i) {
                        return t instanceof s.Point ? t : s.Util.isArray(t) ? new s.Point(t[0], t[1]) : t === n || null === t ? t : new s.Point(t, e, i)
                    }, s.Bounds = function (t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, s.Bounds.prototype = {
                        extend: function (t) {
                            return t = s.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                        },
                        getCenter: function (t) {
                            return new s.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                        },
                        getBottomLeft: function () {
                            return new s.Point(this.min.x, this.max.y)
                        },
                        getTopRight: function () {
                            return new s.Point(this.max.x, this.min.y)
                        },
                        getSize: function () {
                            return this.max.subtract(this.min)
                        },
                        contains: function (t) {
                            var e, i;
                            return t = "number" == typeof t[0] || t instanceof s.Point ? s.point(t) : s.bounds(t), t instanceof s.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                        },
                        intersects: function (t) {
                            t = s.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                a = o.x >= e.x && n.x <= i.x,
                                r = o.y >= e.y && n.y <= i.y;
                            return a && r
                        },
                        isValid: function () {
                            return !(!this.min || !this.max)
                        }
                    }, s.bounds = function (t, e) {
                        return !t || t instanceof s.Bounds ? t : new s.Bounds(t, e)
                    }, s.Transformation = function (t, e, i, n) {
                        this._a = t, this._b = e, this._c = i, this._d = n
                    }, s.Transformation.prototype = {
                        transform: function (t, e) {
                            return this._transform(t.clone(), e)
                        },
                        _transform: function (t, e) {
                            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                        },
                        untransform: function (t, e) {
                            return e = e || 1, new s.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
                        }
                    }, s.DomUtil = {
                        get: function (t) {
                            return "string" == typeof t ? i.getElementById(t) : t
                        },
                        getStyle: function (t, e) {
                            var n = t.style[e];
                            if (!n && t.currentStyle && (n = t.currentStyle[e]), (!n || "auto" === n) && i.defaultView) {
                                var o = i.defaultView.getComputedStyle(t, null);
                                n = o ? o[e] : null
                            }
                            return "auto" === n ? null : n
                        },
                        getViewportOffset: function (t) {
                            var e, n = 0,
                                o = 0,
                                a = t,
                                r = i.body,
                                l = i.documentElement;
                            do {
                                if (n += a.offsetTop || 0, o += a.offsetLeft || 0, n += parseInt(s.DomUtil.getStyle(a, "borderTopWidth"), 10) || 0, o += parseInt(s.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, e = s.DomUtil.getStyle(a, "position"), a.offsetParent === r && "absolute" === e) break;
                                if ("fixed" === e) {
                                    n += r.scrollTop || l.scrollTop || 0, o += r.scrollLeft || l.scrollLeft || 0;
                                    break
                                }
                                if ("relative" === e && !a.offsetLeft) {
                                    var h = s.DomUtil.getStyle(a, "width"),
                                        u = s.DomUtil.getStyle(a, "max-width"),
                                        c = a.getBoundingClientRect();
                                    ("none" !== h || "none" !== u) && (o += c.left + a.clientLeft), n += c.top + (r.scrollTop || l.scrollTop || 0);
                                    break
                                }
                                a = a.offsetParent
                            } while (a);
                            a = t;
                            do {
                                if (a === r) break;
                                n -= a.scrollTop || 0, o -= a.scrollLeft || 0, a = a.parentNode
                            } while (a);
                            return new s.Point(o, n)
                        },
                        documentIsLtr: function () {
                            return s.DomUtil._docIsLtrCached || (s.DomUtil._docIsLtrCached = !0, s.DomUtil._docIsLtr = "ltr" === s.DomUtil.getStyle(i.body, "direction")), s.DomUtil._docIsLtr
                        },
                        create: function (t, e, n) {
                            var o = i.createElement(t);
                            return o.className = e, n && n.appendChild(o), o
                        },
                        hasClass: function (t, e) {
                            if (t.classList !== n) return t.classList.contains(e);
                            var i = s.DomUtil._getClass(t);
                            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                        },
                        addClass: function (t, e) {
                            if (t.classList !== n)
                                for (var i = s.Util.splitWords(e), o = 0, a = i.length; a > o; o++) t.classList.add(i[o]);
                            else if (!s.DomUtil.hasClass(t, e)) {
                                var r = s.DomUtil._getClass(t);
                                s.DomUtil._setClass(t, (r ? r + " " : "") + e)
                            }
                        },
                        removeClass: function (t, e) {
                            t.classList !== n ? t.classList.remove(e) : s.DomUtil._setClass(t, s.Util.trim((" " + s.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
                        },
                        _setClass: function (t, e) {
                            t.className.baseVal === n ? t.className = e : t.className.baseVal = e
                        },
                        _getClass: function (t) {
                            return t.className.baseVal === n ? t.className : t.className.baseVal
                        },
                        setOpacity: function (t, e) {
                            if ("opacity" in t.style) t.style.opacity = e;
                            else if ("filter" in t.style) {
                                var i = !1,
                                    n = "DXImageTransform.Microsoft.Alpha";
                                try {
                                    i = t.filters.item(n)
                                } catch (o) {
                                    if (1 === e) return
                                }
                                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                            }
                        },
                        testProp: function (t) {
                            for (var e = i.documentElement.style, n = 0; n < t.length; n++)
                                if (t[n] in e) return t[n];
                            return !1
                        },
                        getTranslateString: function (t) {
                            var e = s.Browser.webkit3d,
                                i = "translate" + (e ? "3d" : "") + "(",
                                n = (e ? ",0" : "") + ")";
                            return i + t.x + "px," + t.y + "px" + n
                        },
                        getScaleString: function (t, e) {
                            var i = s.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
                                n = " scale(" + t + ") ";
                            return i + n
                        },
                        setPosition: function (t, e, i) {
                            t._leaflet_pos = e, !i && s.Browser.any3d ? t.style[s.DomUtil.TRANSFORM] = s.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                        },
                        getPosition: function (t) {
                            return t._leaflet_pos
                        }
                    }, s.DomUtil.TRANSFORM = s.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), s.DomUtil.TRANSITION = s.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), s.DomUtil.TRANSITION_END = "webkitTransition" === s.DomUtil.TRANSITION || "OTransition" === s.DomUtil.TRANSITION ? s.DomUtil.TRANSITION + "End" : "transitionend",
                    function () {
                        if ("onselectstart" in i) s.extend(s.DomUtil, {
                            disableTextSelection: function () {
                                s.DomEvent.on(t, "selectstart", s.DomEvent.preventDefault)
                            },
                            enableTextSelection: function () {
                                s.DomEvent.off(t, "selectstart", s.DomEvent.preventDefault)
                            }
                        });
                        else {
                            var e = s.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                            s.extend(s.DomUtil, {
                                disableTextSelection: function () {
                                    if (e) {
                                        var t = i.documentElement.style;
                                        this._userSelect = t[e], t[e] = "none"
                                    }
                                },
                                enableTextSelection: function () {
                                    e && (i.documentElement.style[e] = this._userSelect, delete this._userSelect)
                                }
                            })
                        }
                        s.extend(s.DomUtil, {
                            disableImageDrag: function () {
                                s.DomEvent.on(t, "dragstart", s.DomEvent.preventDefault)
                            },
                            enableImageDrag: function () {
                                s.DomEvent.off(t, "dragstart", s.DomEvent.preventDefault)
                            }
                        })
                    }(), s.LatLng = function (t, e, i) {
                        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                        this.lat = t, this.lng = e, i !== n && (this.alt = parseFloat(i))
                    }, s.extend(s.LatLng, {
                        DEG_TO_RAD: Math.PI / 180,
                        RAD_TO_DEG: 180 / Math.PI,
                        MAX_MARGIN: 1e-9
                    }), s.LatLng.prototype = {
                        equals: function (t) {
                            if (!t) return !1;
                            t = s.latLng(t);
                            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                            return e <= s.LatLng.MAX_MARGIN
                        },
                        toString: function (t) {
                            return "LatLng(" + s.Util.formatNum(this.lat, t) + ", " + s.Util.formatNum(this.lng, t) + ")"
                        },
                        distanceTo: function (t) {
                            t = s.latLng(t);
                            var e = 6378137,
                                i = s.LatLng.DEG_TO_RAD,
                                n = (t.lat - this.lat) * i,
                                o = (t.lng - this.lng) * i,
                                a = this.lat * i,
                                r = t.lat * i,
                                l = Math.sin(n / 2),
                                h = Math.sin(o / 2),
                                u = l * l + h * h * Math.cos(a) * Math.cos(r);
                            return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
                        },
                        wrap: function (t, e) {
                            var i = this.lng;
                            return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new s.LatLng(this.lat, i)
                        }
                    }, s.latLng = function (t, e) {
                        return t instanceof s.LatLng ? t : s.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new s.LatLng(t[0], t[1], t[2]) : null : t === n || null === t ? t : "object" == typeof t && "lat" in t ? new s.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : e === n ? null : new s.LatLng(t, e)
                    }, s.LatLngBounds = function (t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
                    }, s.LatLngBounds.prototype = {
                        extend: function (t) {
                            if (!t) return this;
                            var e = s.latLng(t);
                            return t = null !== e ? e : s.latLngBounds(t), t instanceof s.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new s.LatLng(t.lat, t.lng), this._northEast = new s.LatLng(t.lat, t.lng)) : t instanceof s.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
                        },
                        pad: function (t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new s.LatLngBounds(new s.LatLng(e.lat - n, e.lng - o), new s.LatLng(i.lat + n, i.lng + o))
                        },
                        getCenter: function () {
                            return new s.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                        },
                        getSouthWest: function () {
                            return this._southWest
                        },
                        getNorthEast: function () {
                            return this._northEast
                        },
                        getNorthWest: function () {
                            return new s.LatLng(this.getNorth(), this.getWest())
                        },
                        getSouthEast: function () {
                            return new s.LatLng(this.getSouth(), this.getEast())
                        },
                        getWest: function () {
                            return this._southWest.lng
                        },
                        getSouth: function () {
                            return this._southWest.lat
                        },
                        getEast: function () {
                            return this._northEast.lng
                        },
                        getNorth: function () {
                            return this._northEast.lat
                        },
                        contains: function (t) {
                            t = "number" == typeof t[0] || t instanceof s.LatLng ? s.latLng(t) : s.latLngBounds(t);
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            return t instanceof s.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                        },
                        intersects: function (t) {
                            t = s.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                a = o.lat >= e.lat && n.lat <= i.lat,
                                r = o.lng >= e.lng && n.lng <= i.lng;
                            return a && r
                        },
                        toBBoxString: function () {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                        },
                        equals: function (t) {
                            return t ? (t = s.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) : !1
                        },
                        isValid: function () {
                            return !(!this._southWest || !this._northEast)
                        }
                    }, s.latLngBounds = function (t, e) {
                        return !t || t instanceof s.LatLngBounds ? t : new s.LatLngBounds(t, e)
                    }, s.Projection = {}, s.Projection.SphericalMercator = {
                        MAX_LATITUDE: 85.0511287798,
                        project: function (t) {
                            var e = s.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = t.lng * e,
                                a = n * e;
                            return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new s.Point(o, a)
                        },
                        unproject: function (t) {
                            var e = s.LatLng.RAD_TO_DEG,
                                i = t.x * e,
                                n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                            return new s.LatLng(n, i)
                        }
                    }, s.Projection.LonLat = {
                        project: function (t) {
                            return new s.Point(t.lng, t.lat)
                        },
                        unproject: function (t) {
                            return new s.LatLng(t.y, t.x)
                        }
                    }, s.CRS = {
                        latLngToPoint: function (t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function (t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function (t) {
                            return this.projection.project(t)
                        },
                        scale: function (t) {
                            return 256 * Math.pow(2, t)
                        },
                        getSize: function (t) {
                            var e = this.scale(t);
                            return s.point(e, e)
                        }
                    }, s.CRS.Simple = s.extend({}, s.CRS, {
                        projection: s.Projection.LonLat,
                        transformation: new s.Transformation(1, 0, -1, 0),
                        scale: function (t) {
                            return Math.pow(2, t)
                        }
                    }), s.CRS.EPSG3857 = s.extend({}, s.CRS, {
                        code: "EPSG:3857",
                        projection: s.Projection.SphericalMercator,
                        transformation: new s.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                        project: function (t) {
                            var e = this.projection.project(t),
                                i = 6378137;
                            return e.multiplyBy(i)
                        }
                    }), s.CRS.EPSG900913 = s.extend({}, s.CRS.EPSG3857, {
                        code: "EPSG:900913"
                    }), s.CRS.EPSG4326 = s.extend({}, s.CRS, {
                        code: "EPSG:4326",
                        projection: s.Projection.LonLat,
                        transformation: new s.Transformation(1 / 360, .5, -1 / 360, .5)
                    }), s.Map = s.Class.extend({
                            includes: s.Mixin.Events,
                            options: {
                                crs: s.CRS.EPSG3857,
                                fadeAnimation: s.DomUtil.TRANSITION && !s.Browser.android23,
                                trackResize: !0,
                                markerZoomAnimation: s.DomUtil.TRANSITION && s.Browser.any3d
                            },
                            initialize: function (t, e) {
                                e = s.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = s.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== n && this.setView(s.latLng(e.center), e.zoom, {
                                    reset: !0
                                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
                            },
                            setView: function (t, e) {
                                return e = e === n ? this.getZoom() : e, this._resetView(s.latLng(t), this._limitZoom(e)), this
                            },
                            setZoom: function (t, e) {
                                return this._loaded ? this.setView(this.getCenter(), t, {
                                    zoom: e
                                }) : (this._zoom = this._limitZoom(t), this)
                            },
                            zoomIn: function (t, e) {
                                return this.setZoom(this._zoom + (t || 1), e)
                            },
                            zoomOut: function (t, e) {
                                return this.setZoom(this._zoom - (t || 1), e)
                            },
                            setZoomAround: function (t, e, i) {
                                var n = this.getZoomScale(e),
                                    o = this.getSize().divideBy(2),
                                    a = t instanceof s.Point ? t : this.latLngToContainerPoint(t),
                                    r = a.subtract(o).multiplyBy(1 - 1 / n),
                                    l = this.containerPointToLatLng(o.add(r));
                                return this.setView(l, e, {
                                    zoom: i
                                })
                            },
                            fitBounds: function (t, e) {
                                e = e || {}, t = t.getBounds ? t.getBounds() : s.latLngBounds(t);
                                var i = s.point(e.paddingTopLeft || e.padding || [0, 0]),
                                    n = s.point(e.paddingBottomRight || e.padding || [0, 0]),
                                    o = this.getBoundsZoom(t, !1, i.add(n)),
                                    a = n.subtract(i).divideBy(2),
                                    r = this.project(t.getSouthWest(), o),
                                    l = this.project(t.getNorthEast(), o),
                                    h = this.unproject(r.add(l).divideBy(2).add(a), o);
                                return o = e && e.maxZoom ? Math.min(e.maxZoom, o) : o, this.setView(h, o, e)
                            },
                            fitWorld: function (t) {
                                return this.fitBounds([
                                    [-90, -180],
                                    [90, 180]
                                ], t)
                            },
                            panTo: function (t, e) {
                                return this.setView(t, this._zoom, {
                                    pan: e
                                })
                            },
                            panBy: function (t) {
                                return this.fire("movestart"), this._rawPanBy(s.point(t)), this.fire("move"), this.fire("moveend")
                            },
                            setMaxBounds: function (t) {
                                return t = s.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                            },
                            panInsideBounds: function (t, e) {
                                var i = this.getCenter(),
                                    n = this._limitCenter(i, this._zoom, t);
                                return i.equals(n) ? this : this.panTo(n, e)
                            },
                            addLayer: function (t) {
                                var e = s.stamp(t);
                                return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && s.TileLayer && t instanceof s.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
                            },
                            removeLayer: function (t) {
                                var e = s.stamp(t);
                                return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                                    layer: t
                                }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && s.TileLayer && t instanceof s.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
                            },
                            hasLayer: function (t) {
                                return t ? s.stamp(t) in this._layers : !1
                            },
                            eachLayer: function (t, e) {
                                for (var i in this._layers) t.call(e, this._layers[i]);