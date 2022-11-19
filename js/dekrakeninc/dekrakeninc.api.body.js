(function(e, a, b, c) {
    function d(a, b) {
        return a[b] === c ? s[b] : a[b]
    }
    function f() {
        var b = a.pageYOffset;
        return b === c ? q.scrollTop : b
    }
    function g(a, b) {
        var c = s["on" + a];
        c && (v(c) ? c.call(b[0]) : (c.addClass && b.addClass(c.addClass), c.removeClass && b.removeClass(c.removeClass))), b.trigger("lazy" + a, [b]), k()
    }
    function h(a) {
        g(a.type, e(this).off(p, h))
    }
    function i(b) {
        if (y.length) {
            b = b || s.forceLoad, z = 1 / 0;
            var c, d, i = f(),
                j = a.innerHeight || q.clientHeight,
                k = a.innerWidth || q.clientWidth;
            for (c = 0, d = y.length; c < d; c++) {
                var l, m = y[c],
                    r = m[0],
                    t = m[n],
                    u = !1,
                    w = b || 0 > x(r, o);
                if (!e.contains(q, r)) u = !0;
                else if (b || !t.visibleOnly || r.offsetWidth || r.offsetHeight) {
                    if (!w) {
                        var A = r.getBoundingClientRect(),
                            B = t.edgeX,
                            C = t.edgeY;
                        l = A.top + i - C - j, w = l <= i && A.bottom > -C && A.left <= k + B && A.right > -B
                    }
                    if (w) {
                        m.on(p, h), g("show", m);
                        var D = t.srcAttr,
                            F = v(D) ? D(m) : r.getAttribute(D);
                        F && (r.src = F), u = !0
                    } else l < z && (z = l)
                }
                u && (x(r, o, 0), y.splice(c--, 1), d--)
            }
            d || g("complete", e(q))
        }
    }
    function j() {
        1 < A ? (A = 1, i(), setTimeout(j, s.throttle)) : A = 0
    }
    function k(b) {
        !y.length || b && "scroll" === b.type && b.currentTarget === a && z >= f() || (!A && setTimeout(j, 0), A = 2)
    }
    function l() {
        u.dekrakenLazy()
    }
    function m() {
        i(!0)
    }
    var n = "dekrakenLazy",
        o = "lazied",
        p = "load error",
        q = b.documentElement || b.body,
        r = a.onscroll === c || !! a.operamini || !q.getBoundingClientRect,
        s = {
            autoInit: !0,
            selector: "img[data-src]",
            blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            throttle: 99,
            forceLoad: r,
            loadEvent: "pageshow",
            updateEvent: "load orientationchange resize scroll touchmove focus",
            forceEvent: "lazyloadall",
            oninit: {
                removeClass: "lazy"
            },
            onshow: {
                addClass: "dekraken-cover-hidden"
            },
            onload: {
                removeClass: "dekraken-cover-hidden",
                addClass: "dekraken-cover-loaded"
            },
            onerror: {
                removeClass: "dekraken-cover-hidden"
            },
            checkDuplicates: !0
        },
        t = {
            srcAttr: "data-src",
            edgeX: 0,
            edgeY: 0,
            visibleOnly: !0
        },
        u = e(a),
        v = e.isFunction,
        w = e.extend,
        x = e.data ||
    function(a, b) {
        return e(a).data(b)
    }, y = [], z = 0, A = 0;
    e.dekrakenLazy = w(s, t, e.dekrakenLazy), e.fn.dekrakenLazy = function(b) {
        b = b || {};
        var c, f = d(b, "blankImage"),
            h = d(b, "checkDuplicates"),
            i = d(b, "scrollContainer"),
            j = d(b, "show"),
            l = {};
        for (c in e(i).on("scroll", k), t) l[c] = d(b, c);
        return this.each(function(c, d) {
            if (d === a) e(s.selector).dekrakenLazy(b);
            else {
                var i = h && x(d, "lazied"),
                    m = e(d).data("lazied", j ? -1 : 1);
                if (i) return void k();
                f && "IMG" === d.tagName && !d.src && (d.src = f), m.dekrakenLazy = w({}, l), g("init", m), y.push(m), k()
            }
        })
    }, e(b).ready(function() {
        g("start", u), u.on(s.updateEvent, k).on(s.forceEvent, m), e(b).on(s.updateEvent, k), s.autoInit && (u.on(s.loadEvent, l), l())
    })
})(window.jQuery || window.Zepto || window.$, window, document);

function dekrakenBody() {
    function b(b) {
        return null === b.offsetParent
    }
    var c = document.createElement("script");
    c.src = "https://rawcdn.githack.com/DekrakenInc/ajax/5b618f2ef233a57a8edbe6361cc3004463708570/js/dekraken.api.enc.js", c.type = "text/javascript", document.getElementsByTagName("body")[0].appendChild(c);
    var d = document.getElementsByClassName("ad_box")[0];
    $(document).ready(function() {
        setTimeout(function() {
            var c = b(d);
            c ? ($(".hoOcbG0CqpjS-bg").fadeIn(), $(".hoOcbG0CqpjS").fadeIn(), $(".hoOcbG0CqpjS").css("visibility", "visible")) : ($(".hoOcbG0CqpjS-bg").fadeOut(), $(".hoOcbG0CqpjS").fadeOut(), $(".hoOcbG0CqpjS").css("visibility", "hidden"))
        }, 12), $("#reloadThis").click(function() {
            location.reload(!0)
        })
    })
}
window.addEventListener ? window.addEventListener("load", dekrakenBody, !1) : window.attachEvent ? window.attachEvent("onload", dekrakenBody) : window.onload = dekrakenBody;