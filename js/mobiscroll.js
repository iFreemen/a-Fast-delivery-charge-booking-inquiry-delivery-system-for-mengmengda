(function (a) {
    a.widget("mobile.jqmMobiscroll", a.mobile.widget, {
        options: {
            theme: "jqm",
            preset: "date",
            animate: "pop"
        },
        _create: function () {
            var g = this.element,
                t = a.extend(this.options, g.jqmData("options"));
            g.mobiscroll(t)
        }
    });
    a(document).bind("pagebeforecreate", function (g) {
        a('input[type="date"]:jqmData(role="mobiscroll")', g.target).prop("type", "text")
    });
    a(document).bind("pagecreate create", function (g) {
        a(document).trigger("mobiscrollbeforecreate");
        a(':jqmData(role="mobiscroll")', g.target).each(function () {
            "undefined" ===
            typeof a(this).data("mobiscroll") && a(this).jqmMobiscroll()
        })
    })
})(jQuery);
(function (a) {
    function g(b, f) {
        function j(b) {
            return a.isArray(h.readonly) ? (b = a(".dwwl", o).index(b), h.readonly[b]) : h.readonly
        }

        function l(a) {
            var b = '<div class="dw-bf">',
                d = 1,
                h;
            for (h in ca[a]) 0 == d % 20 && (b += '</div><div class="dw-bf">'), b += '<div class="dw-li dw-v" data-val="' + h + '" style="height:' + K + "px;line-height:" + K + 'px;"><div class="dw-i">' + ca[a][h] + "</div></div>", d++;
            return b + "</div>"
        }

        function g(b) {
            c = a(".dw-li", b).index(a(".dw-v", b).eq(0));
            m = a(".dw-li", b).index(a(".dw-v", b).eq(-1));
            H = a(".dw-ul", o).index(b);
            e = K;
            x = i
        }

        function k(a) {
            var b = h.headerText;
            return b ? "function" == typeof b ? b.call(P, a) : b.replace(/\{value\}/i, a) : ""
        }

        function u() {
            i.temp = Z && null !== i.val && i.val != B.val() || null === i.values ? h.parseValue(B.val() || "", i) : i.values.slice(0);
            i.setValue(!0)
        }

        function da(b, h, d, c, e) {
            !1 !== M("validate", [o, h, b]) && (a(".dw-ul", o).each(function (d) {
                var r = a(this),
                    f = a('.dw-li[data-val="' + i.temp[d] + '"]', r),
                    z = a(".dw-li", r),
                    j = z.index(f),
                    l = z.length,
                    g = d == h || void 0 === h;
                if (!f.hasClass("dw-v")) {
                    for (var o = f, w = 0, U = 0; 0 <= j - w && !o.hasClass("dw-v");) w++,
                        o = z.eq(j - w);
                    for (; j + U < l && !f.hasClass("dw-v");) U++, f = z.eq(j + U);
                    (U < w && U && 2 !== c || !w || 0 > j - w || 1 == c) && f.hasClass("dw-v") ? j += U : (f = o, j -= w)
                }
                if (!f.hasClass("dw-sel") || g) i.temp[d] = f.attr("data-val"), a(".dw-sel", r).removeClass("dw-sel"), f.addClass("dw-sel"), i.scroll(r, d, j, g ? b : 0.1, g ? e : void 0)
            }), i.change(d))
        }

        function ga(b) {
            if (!("inline" == h.display || Q === a(window).width() && ha === a(window).height() && b)) {
                var d, c, e, r, f, i, j, z, w, l = 0,
                    g = 0,
                    b = a(window).scrollTop();
                r = a(".dwwr", o);
                var T = a(".dw", o),
                    m = {};
                f = void 0 === h.anchor ? B :
                    h.anchor;
                Q = a(window).width();
                ha = a(window).height();
                N = (N = window.innerHeight) || ha;
                /modal|bubble/.test(h.display) && (a(".dwc", o).each(function () {
                    d = a(this).outerWidth(!0);
                    l += d;
                    g = d > g ? d : g
                }), d = l > Q ? g : l, r.width(d));
                V = T.outerWidth();
                O = T.outerHeight(!0);
                "modal" == h.display ? (c = (Q - V) / 2, e = b + (N - O) / 2) : "bubble" == h.display ? (w = !0, z = a(".dw-arrw-i", o), c = f.offset(), i = c.top, j = c.left, r = f.outerWidth(), f = f.outerHeight(), c = j - (T.outerWidth(!0) - r) / 2, c = c > Q - V ? Q - (V + 20) : c, c = 0 <= c ? c : 20, e = i - O, e < b || i > b + N ? (T.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"),
                    e = i + f) : T.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), z = z.outerWidth(), r = j + r / 2 - (c + (V - z) / 2), a(".dw-arr", o).css({
                    left: r > z ? z : r
                })) : (m.width = "100%", "top" == h.display ? e = b : "bottom" == h.display && (e = b + N - O));
                m.top = 0 > e ? 0 : e;
                m.left = c;
                T.css(m);
                a(".dw-persp", o).height(0).height(e + O > a(document).height() ? e + O : a(document).height());
                w && (e + O > b + N || i > b + N) && a(window).scrollTop(e + O - N)
            }
        }

        function t(a) {
            if ("touchstart" === a.type) L = !0, setTimeout(function () {
                L = !1
            }, 500);
            else if (L) return L = !1;
            return !0
        }

        function M(b, d) {
            var c;
            d.push(i);
            a.each([ea, f], function (a, e) {
                e[b] && (c = e[b].apply(P, d))
            });
            return c
        }

        function S(a) {
            var b = +a.data("pos") + 1;
            p(a, b > m ? c : b, 1, !0)
        }

        function qa(a) {
            var b = +a.data("pos") - 1;
            p(a, b < c ? m : b, 2, !0)
        }
        var ma, K, D, o, Q, N, ha, V, O, R, na, i = this,
            ia = a.mobiscroll,
            P = b,
            B = a(P),
            ja, oa, h = C({}, pa),
            ea = {},
            ca = [],
            W = {},
            ka = {},
            Z = B.is("input"),
            X = !1;
        i.enable = function () {
            h.disabled = !1;
            Z && B.prop("disabled", !1)
        };
        i.disable = function () {
            h.disabled = !0;
            Z && B.prop("disabled", !0)
        };
        i.scroll = function (a, b, d, c, e) {
            function h() {
                clearInterval(W[b]);
                delete W[b];
                a.data("pos", d).closest(".dwwl").removeClass("dwa")
            }
            var r = (ma - d) * K,
                f;
            r == ka[b] && W[b] || (ka[b] = r, a.attr("style", Y + "-transition:all " + (c ? c.toFixed(3) : 0) + "s ease-out;" + ($ ? Y + "-transform:translate3d(0," + r + "px,0);" : "top:" + r + "px;")), W[b] && h(), c && void 0 !== e ? (f = 0, a.closest(".dwwl").addClass("dwa"), W[b] = setInterval(function () {
                f += 0.1;
                a.data("pos", Math.round((d - e) * Math.sin(f / c * (Math.PI / 2)) + e));
                f >= c && h()
            }, 100)) : a.data("pos", d))
        };
        i.setValue = function (b, d, c, e) {
            a.isArray(i.temp) || (i.temp = h.parseValue(i.temp + "", i));
            X && b && da(c);
            D = h.formatResult(i.temp);
            e || (i.values = i.temp.slice(0), i.val = D);
            d && Z && B.val(D).trigger("change")
        };
        i.getValues = function () {
            var a = [],
                b;
            for (b in i._selectedValues) a.push(i._selectedValues[b]);
            return a
        };
        i.validate = function (a, b, d, c) {
            da(d, a, !0, b, c)
        };
        i.change = function (b) {
            D = h.formatResult(i.temp);
            "inline" == h.display ? i.setValue(!1, b) : a(".dwv", o).html(k(D));
            b && M("onChange", [D])
        };
        i.changeWheel = function (b, d) {
            if (o) {
                var c = 0,
                    e, r, f = b.length;
                for (e in h.wheels)
                    for (r in h.wheels[e]) {
                        if (-1 < a.inArray(c, b) &&
                            (ca[c] = h.wheels[e][r], a(".dw-ul", o).eq(c).html(l(c)), f--, !f)) {
                            ga();
                            da(d, void 0, !0);
                            return
                        }
                        c++
                    }
            }
        };
        i.isVisible = function () {
            return X
        };
        i.tap = function (b, a) {
            var c, d;
            h.tap && b.bind("touchstart", function (b) {
                b.preventDefault();
                c = y(b, "X");
                d = y(b, "Y")
            }).bind("touchend", function (b) {
                20 > Math.abs(y(b, "X") - c) && 20 > Math.abs(y(b, "Y") - d) && a.call(this, b);
                J = !0;
                setTimeout(function () {
                    J = !1
                }, 300)
            });
            b.bind("click", function (b) {
                J || a.call(this, b)
            })
        };
        i.show = function (b) {
            if (h.disabled || X) return !1;
            "top" == h.display && (R = "slidedown");
            "bottom" ==
            h.display && (R = "slideup");
            u();
            M("onBeforeShow", [o]);
            var c = 0,
                e, f = "";
            R && !b && (f = "dw-" + R + " dw-in");
            for (var w = '<div class="dw-trans ' + h.theme + " dw-" + h.display + '">' + ("inline" == h.display ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dw-persp"><div class="dwo"></div><div class="dw dwbg ' + f + '"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr">' + (h.headerText ? '<div class="dwv"></div>' : "")), b = 0; b < h.wheels.length; b++) {
                w += '<div class="dwc' + ("scroller" !=
                    h.mode ? " dwpm" : " dwsc") + (h.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
                for (e in h.wheels[b]) ca[c] = h.wheels[b][e], w += '<td><div class="dwwl dwrc dwwl' + c + '">' + ("scroller" != h.mode ? '<div class="dwwb dwwbp" style="height:' + K + "px;line-height:" + K + 'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:' + K + "px;line-height:" + K + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + e + '</div><div class="dww" style="height:' + h.rows * K + "px;min-width:" +
                    h.width + 'px;"><div class="dw-ul">', w += l(c), w += '</div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>', c++;
                w += "</tr></table></div></div>"
            }
            w += ("inline" != h.display ? '<div class="dwbc' + (h.button3 ? " dwbc-p" : "") + '"><span class="dwbw dwb-s"><span class="dwb">' + h.setText + "</span></span>" + (h.button3 ? '<span class="dwbw dwb-n"><span class="dwb">' + h.button3Text + "</span></span>" : "") + '<span class="dwbw dwb-c"><span class="dwb">' + h.cancelText + "</span></span></div></div>" : '<div class="dwcc"></div>') +
                "</div></div></div>";
            o = a(w);
            da();
            M("onMarkupReady", [o]);
            "inline" != h.display ? (o.appendTo("body"), setTimeout(function () {
                o.removeClass("dw-trans").find(".dw").removeClass(f)
            }, 350)) : B.is("div") ? B.html(o) : o.insertAfter(B);
            X = !0;
            ja.init(o, i);
            "inline" != h.display && (i.tap(a(".dwb-s span", o), function () {
                if (i.hide(false, "set") !== false) {
                    i.setValue(false, true);
                    M("onSelect", [i.val])
                }
            }), i.tap(a(".dwb-c span", o), function () {
                i.cancel()
            }), h.button3 && i.tap(a(".dwb-n span", o), h.button3), h.scrollLock && o.bind("touchmove",
                function (b) {
                    O <= N && V <= Q && b.preventDefault()
                }), a("input,select,button").each(function () {
                a(this).prop("disabled") || a(this).addClass("dwtd").prop("disabled", true)
            }), ga(), a(window).bind("resize.dw", function () {
                clearTimeout(na);
                na = setTimeout(function () {
                    ga(true)
                }, 100)
            }));
            o.delegate(".dwwl", "DOMMouseScroll mousewheel", function (b) {
                if (!j(this)) {
                    b.preventDefault();
                    var b = b.originalEvent,
                        b = b.wheelDelta ? b.wheelDelta / 120 : b.detail ? -b.detail / 3 : 0,
                        c = a(".dw-ul", this),
                        d = +c.data("pos"),
                        d = Math.round(d - b);
                    g(c);
                    p(c, d, b < 0 ?
                        1 : 2)
                }
            }).delegate(".dwb, .dwwb", aa, function () {
                a(this).addClass("dwb-a")
            }).delegate(".dwwb", aa, function (b) {
                b.stopPropagation();
                b.preventDefault();
                var c = a(this).closest(".dwwl");
                if (t(b) && !j(c) && !c.hasClass("dwa")) {
                    v = true;
                    var d = c.find(".dw-ul"),
                        e = a(this).hasClass("dwwbp") ? S : qa;
                    g(d);
                    clearInterval(E);
                    E = setInterval(function () {
                        e(d)
                    }, h.delay);
                    e(d)
                }
            }).delegate(".dwwl", aa, function (b) {
                b.preventDefault();
                if (t(b) && !d && !j(this) && !v) {
                    d = true;
                    a(document).bind(r, z);
                    q = a(".dw-ul", this);
                    ba = h.mode != "clickpick";
                    I = +q.data("pos");
                    g(q);
                    la = W[H] !== void 0;
                    s = y(b, "Y");
                    G = new Date;
                    A = s;
                    i.scroll(q, H, I, 0.001);
                    ba && q.closest(".dwwl").addClass("dwa")
                }
            });
            M("onShow", [o, D])
        };
        i.hide = function (b, c) {
            if (!1 === M("onClose", [D, c])) return !1;
            a(".dwtd").prop("disabled", !1).removeClass("dwtd");
            B.blur();
            o && ("inline" != h.display && R && !b ? (o.addClass("dw-trans").find(".dw").addClass("dw-" + R + " dw-out"), setTimeout(function () {
                o.remove();
                o = null
            }, 350)) : (o.remove(), o = null), X = !1, ka = {}, a(window).unbind(".dw"))
        };
        i.cancel = function () {
            !1 !== i.hide(!1, "cancel") && M("onCancel", [i.val])
        };
        i.init = function (b) {
            ja = C({
                defaults: {},
                init: n
            }, ia.themes[b.theme || h.theme]);
            oa = ia.i18n[b.lang || h.lang];
            C(f, b);
            C(h, ja.defaults, oa, f);
            i.settings = h;
            B.unbind(".dw");
            if (b = ia.presets[h.preset]) ea = b.call(P, i), C(h, ea, f), C(fa, ea.methods);
            ma = Math.floor(h.rows / 2);
            K = h.height;
            R = h.animate;
            void 0 !== B.data("dwro") && (P.readOnly = F(B.data("dwro")));
            X && i.hide();
            "inline" == h.display ? i.show() : (u(), Z && h.showOnFocus && (B.data("dwro", P.readOnly), P.readOnly = !0, B.bind("focus.dw", function () {
                i.show()
            })))
        };
        i.trigger = function (b,
            a) {
            return M(b, a)
        };
        i.values = null;
        i.val = null;
        i.temp = null;
        i._selectedValues = {};
        i.init(f)
    }

    function t(b) {
        for (var a in b)
            if (void 0 !== S[b[a]]) return !0;
        return !1
    }

    function k(b) {
        return f[b.id]
    }

    function y(b, a) {
        var c = b.originalEvent,
            d = b.changedTouches;
        return d || c && c.changedTouches ? c ? c.changedTouches[0]["page" + a] : d[0]["page" + a] : b["page" + a]
    }

    function F(b) {
        return !0 === b || "true" == b
    }

    function j(b, a, c) {
        b = b > c ? c : b;
        return b < a ? a : b
    }

    function p(b, d, e, f, r) {
        var d = j(d, c, m),
            z = a(".dw-li", b).eq(d),
            l = void 0 === r ? d : r,
            g = H,
            n = f ? d == l ? 0.1 :
            Math.abs(0.1 * (d - l)) : 0;
        x.temp[g] = z.attr("data-val");
        x.scroll(b, g, d, n, r);
        setTimeout(function () {
            x.validate(g, e, n, r)
        }, 10)
    }

    function u(b, a, c) {
        return fa[a] ? fa[a].apply(b, Array.prototype.slice.call(c, 1)) : "object" === typeof a ? fa.init.call(b, a) : b
    }
    var f = {},
        E, n = function () {},
        e, c, m, x, l = (new Date).getTime(),
        d, v, q, H, s, A, G, I, la, ba, S = document.createElement("modernizr").style,
        $ = t(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
        Y = function () {
            var b = ["Webkit", "Moz", "O", "ms"],
                a;
            for (a in b)
                if (t([b[a] + "Transform"])) return "-" + b[a].toLowerCase();
            return ""
        }(),
        C = a.extend,
        J, L, aa = "touchstart mousedown",
        r = "touchmove mousemove",
        z = function (b) {
            ba && (b.preventDefault(), A = y(b, "Y"), x.scroll(q, H, j(I + (s - A) / e, c - 1, m + 1)));
            la = !0
        },
        pa = {
            width: 70,
            height: 40,
            rows: 3,
            delay: 300,
            disabled: !1,
            readonly: !1,
            showOnFocus: !0,
            showLabel: !0,
            wheels: [],
            theme: "",
            headerText: "{value}",
            display: "modal",
            mode: "scroller",
            preset: "",
            lang: "en-US",
            setText: "Set",
            cancelText: "Cancel",
            scrollLock: !0,
            tap: !0,
            formatResult: function (b) {
                return b.join(" ")
            },
            parseValue: function (b, a) {
                var c = a.settings.wheels,
                    d = b.split(" "),
                    e = [],
                    r = 0,
                    f, z, j;
                for (f = 0; f < c.length; f++)
                    for (z in c[f]) {
                        if (void 0 !== c[f][z][d[r]]) e.push(d[r]);
                        else
                            for (j in c[f][z]) {
                                e.push(j);
                                break
                            }
                        r++
                    }
                return e
            }
        },
        fa = {
            init: function (b) {
                void 0 === b && (b = {});
                return this.each(function () {
                    this.id || (l += 1, this.id = "scoller" + l);
                    f[this.id] = new g(this, b)
                })
            },
            enable: function () {
                return this.each(function () {
                    var b = k(this);
                    b && b.enable()
                })
            },
            disable: function () {
                return this.each(function () {
                    var b = k(this);
                    b && b.disable()
                })
            },
            isDisabled: function () {
                var b =
                    k(this[0]);
                if (b) return b.settings.disabled
            },
            isVisible: function () {
                var b = k(this[0]);
                if (b) return b.isVisible()
            },
            option: function (b, a) {
                return this.each(function () {
                    var c = k(this);
                    if (c) {
                        var d = {};
                        "object" === typeof b ? d = b : d[b] = a;
                        c.init(d)
                    }
                })
            },
            setValue: function (b, a, c, d) {
                return this.each(function () {
                    var e = k(this);
                    e && (e.temp = b, e.setValue(!0, a, c, d))
                })
            },
            getInst: function () {
                return k(this[0])
            },
            getValue: function () {
                var b = k(this[0]);
                if (b) return b.values
            },
            getValues: function () {
                var b = k(this[0]);
                if (b) return b.getValues()
            },
            show: function () {
                var b = k(this[0]);
                if (b) return b.show()
            },
            hide: function () {
                return this.each(function () {
                    var b = k(this);
                    b && b.hide()
                })
            },
            destroy: function () {
                return this.each(function () {
                    var b = k(this);
                    b && (b.hide(), a(this).unbind(".dw"), delete f[this.id], a(this).is("input") && (this.readOnly = F(a(this).data("dwro"))))
                })
            }
        };
    a(document).bind("touchend mouseup", function () {
        if (d) {
            var b = new Date - G,
                f = j(I + (s - A) / e, c - 1, m + 1),
                g, l = q.offset().top;
            300 > b ? (b = (A - s) / b, g = b * b / 0.0012, 0 > A - s && (g = -g)) : g = A - s;
            b = Math.round(I - g / e);
            if (!g && !la) {
                var l =
                    Math.floor((A - l) / e),
                    n = a(".dw-li", q).eq(l);
                g = ba;
                !1 !== x.trigger("onValueTap", [n]) ? b = l : g = !0;
                g && (n.addClass("dw-hl"), setTimeout(function () {
                    n.removeClass("dw-hl")
                }, 200))
            }
            ba && p(q, b, 0, !0, Math.round(f));
            d = !1;
            q = null;
            a(document).unbind(r, z)
        }
        v && (clearInterval(E), v = !1);
        a(".dwb-a").removeClass("dwb-a")
    }).bind("mouseover mouseup mousedown click", function (b) {
        if (J) return b.stopPropagation(), b.preventDefault(), !1
    });
    a.fn.mobiscroll = function (b) {
        C(this, a.mobiscroll.shorts);
        return u(this, b, arguments)
    };
    a.mobiscroll = a.mobiscroll || {
        setDefaults: function (b) {
            C(pa, b)
        },
        presetShort: function (b) {
            this.shorts[b] = function (a) {
                return u(this, C(a, {
                    preset: b
                }), arguments)
            }
        },
        shorts: {},
        presets: {},
        themes: {},
        i18n: {}
    };
    a.scroller = a.scroller || a.mobiscroll;
    a.fn.scroller = a.fn.scroller || a.fn.mobiscroll
})(jQuery);
(function (a) {
    var g = a.mobiscroll,
        t = new Date,
        k = {
            dateFormat: "mm/dd/yy",
            dateOrder: "mmddy",
            timeWheels: "hhiiA",
            timeFormat: "hh:ii A",
            startYear: t.getFullYear() - 100,
            endYear: t.getFullYear() + 1,
            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            shortYearCutoff: "+10",
            monthText: "Month",
            dayText: "Day",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            secText: "Seconds",
            ampmText: "&nbsp;",
            nowText: "Now",
            showNow: !1,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            separator: " "
        },
        y = function (F) {
            function j(a, c, d) {
                return void 0 !== l[c] ? +a[l[c]] : void 0 !== d ? d : y[v[c]] ? y[v[c]]() : v[c](y)
            }

            function p(a, c) {
                return Math.floor(a / c) * c
            }

            function u(a) {
                var c = j(a, "h", 0);
                return new Date(j(a, "y"), j(a, "m"), j(a, "d", 1), j(a, "a") ? c + 12 : c, j(a, "i", 0), j(a, "s", 0))
            }
            var f = a(this),
                E = {},
                n;
            if (f.is("input")) {
                switch (f.attr("type")) {
                case "date":
                    n =
                        "yy-mm-dd";
                    break;
                case "datetime":
                    n = "yy-mm-ddTHH:ii:ssZ";
                    break;
                case "datetime-local":
                    n = "yy-mm-ddTHH:ii:ss";
                    break;
                case "month":
                    n = "yy-mm";
                    E.dateOrder = "mmyy";
                    break;
                case "time":
                    n = "HH:ii:ss"
                }
                var e = f.attr("min"),
                    f = f.attr("max");
                e && (E.minDate = g.parseDate(n, e));
                f && (E.maxDate = g.parseDate(n, f))
            }
            var c = a.extend({}, k, E, F.settings),
                m = 0,
                E = [],
                x = [],
                l = {},
                d, v = {
                    y: "getFullYear",
                    m: "getMonth",
                    d: "getDate",
                    h: function (a) {
                        a = a.getHours();
                        a = I && 12 <= a ? a - 12 : a;
                        return p(a, S)
                    },
                    i: function (a) {
                        return p(a.getMinutes(), $)
                    },
                    s: function (a) {
                        return p(a.getSeconds(),
                            Y)
                    },
                    a: function (a) {
                        return G && 11 < a.getHours() ? 1 : 0
                    }
                },
                q = c.preset,
                H = c.dateOrder,
                s = c.timeWheels,
                A = H.match(/D/),
                G = s.match(/a/i),
                I = s.match(/h/),
                t = "datetime" == q ? c.dateFormat + c.separator + c.timeFormat : "time" == q ? c.timeFormat : c.dateFormat,
                y = new Date,
                S = c.stepHour,
                $ = c.stepMinute,
                Y = c.stepSecond,
                C = c.minDate || new Date(c.startYear, 0, 1),
                J = c.maxDate || new Date(c.endYear, 11, 31, 23, 59, 59);
            F.settings = c;
            n = n || t;
            if (q.match(/date/i)) {
                a.each(["y", "m", "d"], function (a, c) {
                    d = H.search(RegExp(c, "i")); - 1 < d && x.push({
                        o: d,
                        v: c
                    })
                });
                x.sort(function (a,
                    c) {
                    return a.o > c.o ? 1 : -1
                });
                a.each(x, function (a, c) {
                    l[c.v] = a
                });
                f = {};
                for (e = 0; 3 > e; e++)
                    if (e == l.y) {
                        m++;
                        f[c.yearText] = {};
                        var L = C.getFullYear(),
                            aa = J.getFullYear();
                        for (d = L; d <= aa; d++) f[c.yearText][d] = H.match(/yy/i) ? d : (d + "").substr(2, 2)
                    } else if (e == l.m) {
                    m++;
                    f[c.monthText] = {};
                    for (d = 0; 12 > d; d++) L = H.replace(/[dy]/gi, "").replace(/mm/, 9 > d ? "0" + (d + 1) : d + 1).replace(/m/, d + 1), f[c.monthText][d] = L.match(/MM/) ? L.replace(/MM/, '<span class="dw-mon">' + c.monthNames[d] + "</span>") : L.replace(/M/, '<span class="dw-mon">' + c.monthNamesShort[d] +
                        "</span>")
                } else if (e == l.d) {
                    m++;
                    f[c.dayText] = {};
                    for (d = 1; 32 > d; d++) f[c.dayText][d] = H.match(/dd/i) && 10 > d ? "0" + d : d
                }
                E.push(f)
            }
            if (q.match(/time/i)) {
                x = [];
                a.each(["h", "i", "s", "a"], function (a, c) {
                    a = s.search(RegExp(c, "i")); - 1 < a && x.push({
                        o: a,
                        v: c
                    })
                });
                x.sort(function (a, c) {
                    return a.o > c.o ? 1 : -1
                });
                a.each(x, function (a, c) {
                    l[c.v] = m + a
                });
                f = {};
                for (e = m; e < m + 4; e++)
                    if (e == l.h) {
                        m++;
                        f[c.hourText] = {};
                        for (d = 0; d < (I ? 12 : 24); d += S) f[c.hourText][d] = I && 0 == d ? 12 : s.match(/hh/i) && 10 > d ? "0" + d : d
                    } else if (e == l.i) {
                    m++;
                    f[c.minuteText] = {};
                    for (d = 0; 60 >
                        d; d += $) f[c.minuteText][d] = s.match(/ii/) && 10 > d ? "0" + d : d
                } else if (e == l.s) {
                    m++;
                    f[c.secText] = {};
                    for (d = 0; 60 > d; d += Y) f[c.secText][d] = s.match(/ss/) && 10 > d ? "0" + d : d
                } else e == l.a && (m++, q = s.match(/A/), f[c.ampmText] = {
                    "0": q ? "AM" : "am",
                    1: q ? "PM" : "pm"
                });
                E.push(f)
            }
            F.setDate = function (a, c, d, e) {
                for (var b in l) this.temp[l[b]] = a[v[b]] ? a[v[b]]() : v[b](a);
                this.setValue(!0, c, d, e)
            };
            F.getDate = function (a) {
                return u(a)
            };
            return {
                button3Text: c.showNow ? c.nowText : void 0,
                button3: c.showNow ? function () {
                    F.setDate(new Date, !1, 0.3, !0)
                } : void 0,
                wheels: E,
                headerText: function () {
                    return g.formatDate(t, u(F.temp), c)
                },
                formatResult: function (a) {
                    return g.formatDate(n, u(a), c)
                },
                parseValue: function (a) {
                    var d = new Date,
                        e, f = [];
                    try {
                        d = g.parseDate(n, a, c)
                    } catch (b) {}
                    for (e in l) f[l[e]] = d[v[e]] ? d[v[e]]() : v[e](d);
                    return f
                },
                validate: function (d) {
                    var e = F.temp,
                        f = {
                            y: C.getFullYear(),
                            m: 0,
                            d: 1,
                            h: 0,
                            i: 0,
                            s: 0,
                            a: 0
                        },
                        g = {
                            y: J.getFullYear(),
                            m: 11,
                            d: 31,
                            h: p(I ? 11 : 23, S),
                            i: p(59, $),
                            s: p(59, Y),
                            a: 1
                        },
                        b = !0,
                        m = !0;
                    a.each("y,m,d,a,h,i,s".split(","), function (n, k) {
                        if (l[k] !== void 0) {
                            var p = f[k],
                                q = g[k],
                                F = 31,
                                s =
                                j(e, k),
                                G = a(".dw-ul", d).eq(l[k]),
                                u, x;
                            if (k == "d") {
                                u = j(e, "y");
                                x = j(e, "m");
                                q = F = 32 - (new Date(u, x, 32)).getDate();
                                A && a(".dw-li", G).each(function () {
                                    var b = a(this),
                                        d = b.data("val"),
                                        e = (new Date(u, x, d)).getDay(),
                                        d = H.replace(/[my]/gi, "").replace(/dd/, d < 10 ? "0" + d : d).replace(/d/, d);
                                    a(".dw-i", b).html(d.match(/DD/) ? d.replace(/DD/, '<span class="dw-day">' + c.dayNames[e] + "</span>") : d.replace(/D/, '<span class="dw-day">' + c.dayNamesShort[e] + "</span>"))
                                })
                            }
                            b && C && (p = C[v[k]] ? C[v[k]]() : v[k](C));
                            m && J && (q = J[v[k]] ? J[v[k]]() : v[k](J));
                            if (k != "y") {
                                var E = a(".dw-li", G).index(a('.dw-li[data-val="' + p + '"]', G)),
                                    I = a(".dw-li", G).index(a('.dw-li[data-val="' + q + '"]', G));
                                a(".dw-li", G).removeClass("dw-v").slice(E, I + 1).addClass("dw-v");
                                k == "d" && a(".dw-li", G).removeClass("dw-h").slice(F).addClass("dw-h")
                            }
                            s < p && (s = p);
                            s > q && (s = q);
                            b && (b = s == p);
                            m && (m = s == q);
                            if (c.invalid && k == "d") {
                                var t = [];
                                c.invalid.dates && a.each(c.invalid.dates, function (a, b) {
                                    b.getFullYear() == u && b.getMonth() == x && t.push(b.getDate() - 1)
                                });
                                if (c.invalid.daysOfWeek) {
                                    var y = (new Date(u, x, 1)).getDay(),
                                        D;
                                    a.each(c.invalid.daysOfWeek, function (a, b) {
                                        for (D = b - y; D < F; D = D + 7) D >= 0 && t.push(D)
                                    })
                                }
                                c.invalid.daysOfMonth && a.each(c.invalid.daysOfMonth, function (a, b) {
                                    b = (b + "").split("/");
                                    b[1] ? b[0] - 1 == x && t.push(b[1] - 1) : t.push(b[0] - 1)
                                });
                                a.each(t, function (b, c) {
                                    a(".dw-li", G).eq(c).removeClass("dw-v")
                                })
                            }
                            e[l[k]] = s
                        }
                    })
                },
                methods: {
                    getDate: function (c) {
                        var d = a(this).mobiscroll("getInst");
                        if (d) return d.getDate(c ? d.temp : d.values)
                    },
                    setDate: function (c, d, e, f) {
                        void 0 == d && (d = !1);
                        return this.each(function () {
                            var b = a(this).mobiscroll("getInst");
                            b && b.setDate(c, d, e, f)
                        })
                    }
                }
            }
        };
    a.each(["date", "time", "datetime"], function (a, j) {
        g.presets[j] = y;
        g.presetShort(j)
    });
    g.formatDate = function (g, j, p) {
        if (!j) return null;
        var p = a.extend({}, k, p),
            u = function (a) {
                for (var c = 0; n + 1 < g.length && g.charAt(n + 1) == a;) c++, n++;
                return c
            },
            f = function (a, c, d) {
                c = "" + c;
                if (u(a))
                    for (; c.length < d;) c = "0" + c;
                return c
            },
            t = function (a, c, d, e) {
                return u(a) ? e[c] : d[c]
            },
            n, e = "",
            c = !1;
        for (n = 0; n < g.length; n++)
            if (c) "'" == g.charAt(n) && !u("'") ? c = !1 : e += g.charAt(n);
            else switch (g.charAt(n)) {
            case "d":
                e += f("d", j.getDate(),
                    2);
                break;
            case "D":
                e += t("D", j.getDay(), p.dayNamesShort, p.dayNames);
                break;
            case "o":
                e += f("o", (j.getTime() - (new Date(j.getFullYear(), 0, 0)).getTime()) / 864E5, 3);
                break;
            case "m":
                e += f("m", j.getMonth() + 1, 2);
                break;
            case "M":
                e += t("M", j.getMonth(), p.monthNamesShort, p.monthNames);
                break;
            case "y":
                e += u("y") ? j.getFullYear() : (10 > j.getYear() % 100 ? "0" : "") + j.getYear() % 100;
                break;
            case "h":
                var m = j.getHours(),
                    e = e + f("h", 12 < m ? m - 12 : 0 == m ? 12 : m, 2);
                break;
            case "H":
                e += f("H", j.getHours(), 2);
                break;
            case "i":
                e += f("i", j.getMinutes(), 2);
                break;
            case "s":
                e += f("s", j.getSeconds(), 2);
                break;
            case "a":
                e += 11 < j.getHours() ? "pm" : "am";
                break;
            case "A":
                e += 11 < j.getHours() ? "PM" : "AM";
                break;
            case "'":
                u("'") ? e += "'" : c = !0;
                break;
            default:
                e += g.charAt(n)
            }
            return e
    };
    g.parseDate = function (g, j, p) {
        var u = new Date;
        if (!g || !j) return u;
        var j = "object" == typeof j ? j.toString() : j + "",
            f = a.extend({}, k, p),
            t = f.shortYearCutoff,
            p = u.getFullYear(),
            n = u.getMonth() + 1,
            e = u.getDate(),
            c = -1,
            m = u.getHours(),
            u = u.getMinutes(),
            x = 0,
            l = -1,
            d = !1,
            v = function (a) {
                (a = A + 1 < g.length && g.charAt(A + 1) == a) && A++;
                return a
            },
            q = function (a) {
                v(a);
                a = j.substr(s).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));
                if (!a) return 0;
                s += a[0].length;
                return parseInt(a[0], 10)
            },
            y = function (a, c, d) {
                a = v(a) ? d : c;
                for (c = 0; c < a.length; c++)
                    if (j.substr(s, a[c].length).toLowerCase() == a[c].toLowerCase()) return s += a[c].length, c + 1;
                return 0
            },
            s = 0,
            A;
        for (A = 0; A < g.length; A++)
            if (d) "'" == g.charAt(A) && !v("'") ? d = !1 : s++;
            else switch (g.charAt(A)) {
            case "d":
                e = q("d");
                break;
            case "D":
                y("D", f.dayNamesShort, f.dayNames);
                break;
            case "o":
                c = q("o");
                break;
            case "m":
                n =
                    q("m");
                break;
            case "M":
                n = y("M", f.monthNamesShort, f.monthNames);
                break;
            case "y":
                p = q("y");
                break;
            case "H":
                m = q("H");
                break;
            case "h":
                m = q("h");
                break;
            case "i":
                u = q("i");
                break;
            case "s":
                x = q("s");
                break;
            case "a":
                l = y("a", ["am", "pm"], ["am", "pm"]) - 1;
                break;
            case "A":
                l = y("A", ["am", "pm"], ["am", "pm"]) - 1;
                break;
            case "'":
                v("'") ? s++ : d = !0;
                break;
            default:
                s++
            }
            100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= ("string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10)) ? 0 : -100));
        if (-1 < c) {
            n = 1;
            e = c;
            do {
                f = 32 -
                    (new Date(p, n - 1, 32)).getDate();
                if (e <= f) break;
                n++;
                e -= f
            } while (1)
        }
        m = new Date(p, n - 1, e, -1 == l ? m : l && 12 > m ? m + 12 : !l && 12 == m ? 0 : m, u, x);
        if (m.getFullYear() != p || m.getMonth() + 1 != n || m.getDate() != e) throw "Invalid date";
        return m
    }
})(jQuery);
(function (a) {
    a.mobiscroll.themes.android = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "clickpick",
            height: 50
        }
    }
})(jQuery);
(function (a) {
    var g = {
        defaults: {
            dateOrder: "Mddyy",
            mode: "mixed",
            rows: 5,
            width: 70,
            height: 36,
            showLabel: !1
        }
    };
    a.mobiscroll.themes["android-ics"] = g;
    a.mobiscroll.themes["android-ics light"] = g
})(jQuery);
(function (a) {
    a.mobiscroll.themes.ios = {
        defaults: {
            dateOrder: "MMdyy",
            rows: 5,
            height: 30,
            width: 55,
            headerText: !1,
            showLabel: !1
        }
    }
})(jQuery);
(function (a) {
    a.mobiscroll.themes.jqm = {
        defaults: {
            jqmBorder: "a",
            jqmBody: "c",
            jqmHeader: "b",
            jqmWheel: "d",
            jqmClickPick: "c",
            jqmSet: "b",
            jqmCancel: "c"
        },
        init: function (g, t) {
            var k = t.settings;
            a(".dw", g).removeClass("dwbg").addClass("ui-overlay-shadow ui-corner-all ui-body-" + k.jqmBorder);
            a(".dwb-s span", g).attr("data-role", "button").attr("data-theme", k.jqmSet);
            a(".dwb-n span", g).attr("data-role", "button").attr("data-theme", k.jqmCancel);
            a(".dwb-c span", g).attr("data-role", "button").attr("data-theme", k.jqmCancel);
            a(".dwwb", g).attr("data-role", "button").attr("data-theme", k.jqmClickPick);
            a(".dwv", g).addClass("ui-header ui-bar-" + k.jqmHeader);
            a(".dwwr", g).addClass("ui-body-" + k.jqmBody);
            a(".dwpm .dwwl", g).addClass("ui-body-" + k.jqmWheel);
            a(".dwpm .dwl", g).addClass("ui-body-" + k.jqmBody);
            g.trigger("create");
            a(".dwo", g).click(function () {
                t.cancel()
            })
        }
    }
})(jQuery);
(function (a) {
    a.mobiscroll.themes.wp = {
        defaults: {
            width: 70,
            height: 76,
            accent: "none",
            dateOrder: "mmMMddDDyy"
        },
        init: function (g, t) {
            var k, y;
            a(".dw", g).addClass("wp-" + t.settings.accent);
            a(".dwwl", g).bind("touchstart mousedown DOMMouseScroll mousewheel", function () {
                k = !0;
                y = a(this).hasClass("wpa");
                a(".dwwl", g).removeClass("wpa");
                a(this).addClass("wpa")
            }).bind("touchmove mousemove", function () {
                k = !1
            }).bind("touchend mouseup", function () {
                k && y && a(this).removeClass("wpa")
            })
        }
    };
    a.mobiscroll.themes["wp light"] = a.mobiscroll.themes.wp
})(jQuery);