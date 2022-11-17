$(function (a) {
        a("span.timeago").timeago()
    }), 
    function (b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof module && "object" == typeof module.exports ? b(require("jquery")) : b(jQuery)
    }(function (x) {
        function d() {
            if (!x.contains(document.documentElement, this)) return x(this).timeago("dispose"), this;
            var d = c(this),
                e = f.settings;
            return !isNaN(d.datetime) && (0 == e.cutoff || Math.abs(a(d.datetime)) < e.cutoff) && x(this).text(b(d.datetime)), this
        }

        function c(a) {
            if (a = x(a), !a.data("timeago")) {
                a.data("timeago", {
                    datetime: f.datetime(a)
                });
                var b = x.trim(a.text());
                f.settings.localeTitle ? a.attr("title", a.data("timeago").datetime.toLocaleString()) : 0 < b.length && !(f.isTime(a) && a.attr("title")) && a.attr("title", b)
            }
            return a.data("timeago")
        }

        function b(b) {
            return f.inWords(a(b))
        }

        function a(a) {
            return new Date().getTime() - a.getTime()
        }
        x.timeago = function (a) {
            return a instanceof Date ? b(a) : "string" == typeof a ? b(x.timeago.parse(a)) : "number" == typeof a ? b(new Date(a)) : b(x.timeago.datetime(a))
        };
        var f = x.timeago;
        x.extend(x.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "just now",
                    inPast: "just now",
                    seconds: "seconds",
                    minute: "1 minute",
                    minutes: "%d minutes",
                    hour: "1 hour",
                    hours: "%d hours",
                    day: "1 day",
                    days: "%d days",
                    month: "1 month",
                    months: "%d months",
                    year: "1 year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function (a) {
                function b(b, d) {
                    var e = x.isFunction(b) ? b(d, a) : b,
                        f = c.numbers && c.numbers[d] || d;
                    return e.replace(/%d/i, f)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var c = this.settings.strings,
                    d = c.prefixAgo,
                    e = c.suffixAgo;
                if (this.settings.allowFuture && 0 > a && (d = c.prefixFromNow, e = c.suffixFromNow), !this.settings.allowPast && 0 <= a) return this.settings.strings.inPast;
                var f = Math.abs(a) / 1e3,
                    g = f / 60,
                    h = g / 60,
                    j = h / 24,
                    n = j / 365,
                    l = 45 > f && b(c.seconds, Math.round(f)) || 90 > f && b(c.minute, 1) || 45 > g && b(c.minutes, Math.round(g)) || 90 > g && b(c.hour, 1) || 24 > h && b(c.hours, Math.round(h)) || 42 > h && b(c.day, 1) || 30 > j && b(c.days, Math.round(j)) || 45 > j && b(c.month, 1) || 365 > j && b(c.months, Math.round(j / 30)) || 1.5 > n && b(c.year, 1) || b(c.years, Math.round(n)),
                    m = c.wordSeparator || "";
                return void 0 === c.wordSeparator && (m = " "), x.trim([d, l, e].join(m))
            },
            parse: function (a) {
                var b = x.trim(a);
                return b = b.replace(/\.\d+/, ""), b = b.replace(/-/, "/").replace(/-/, "/"), b = b.replace(/T/, " ").replace(/Z/, " UTC"), b = b.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), b = b.replace(/([\+\-]\d\d)$/, " $100"), new Date(b)
            },
            datetime: function (a) {
                var b = f.isTime(a) ? x(a).attr("datetime") : x(a).attr("title");
                return f.parse(b)
            },
            isTime: function (a) {
                return "time" === x(a).get(0).tagName.toLowerCase()
            }
        });
        var g = {
            init: function () {
                var a = x.proxy(d, this);
                a();
                var b = f.settings;
                0 < b.refreshMillis && (this._timeagoInterval = setInterval(a, b.refreshMillis))
            },
            update: function (a) {
                var b = f.parse(a);
                x(this).data("timeago", {
                    datetime: b
                }), f.settings.localeTitle && x(this).attr("title", b.toLocaleString()), d.apply(this)
            },
            updateFromDOM: function () {
                x(this).data("timeago", {
                    datetime: f.parse(f.isTime(this) ? x(this).attr("datetime") : x(this).attr("title"))
                }), d.apply(this)
            },
            dispose: function () {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
            }
        };
        x.fn.timeago = function (a, b) {
            var c = a ? g[a] : g.init;
            if (!c) throw new Error("Unknown function name '" + a + "' for timeago");
            return this.each(function () {
                c.call(this, b)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    });