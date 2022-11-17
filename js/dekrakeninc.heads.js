var keys = {};
$(document).on("keydown contextmenu mousemove", function (a) {
        keys[a.which] = !0, $("script:not([src=\"//dekraken.disqus.com/embed.js\"], [script])").remove(), $("meta*").remove()
    }),
    function (d) {
        d.fn.hsMenu = function (a) {
            var b = d.extend({
                bgFading: !0,
                outClickToClose: !0
            }, a);
            return this.each(function () {
                var a, c;
                a = d(".hs-navigation"), !0 == b.bgFading && (c = function () {
                    return document.createElement("div")
                }(), d(c).addClass("dim-overlay").insertAfter(a)), !0 == b.fixedMenubar && d(this).addClass("sticky"), d(".toggle").click(function () {
                    d(this).toggleClass("ripple-out"), $reveal = d(this).attr("data-reveal"), $allRevealable = ".grid-items, .user-penal,.user-info", d($reveal).hasClass("fadeInUp") ? d($reveal).removeClass("fadeInUp").fadeOut() : d($reveal).fadeIn().addClass("fadeInUp"), d($allRevealable).not($reveal).removeClass("fadeInUp ripple-out").fadeOut()
                }), d(".menu-trigger").click(function () {
                    d(this).toggleClass("ripple-out"), d(a).toggleClass("open"), d(c).toggle(100), d("body").toggleClass("yuhu")
                }), !0 == b.outClickToClose && d(window).click(function (b) {
                    d(b.target).closest(".more-trigger,.grid-trigger,.user-penal,.grid-items,.menu-trigger,.hs-navigation,.hs-user,.user-info").length || (d(".user-penal,.grid-items,.user-info").fadeOut().removeClass("fadeInUp"), d(a).removeClass("open"), d(c).fadeOut(), d("body").removeClass("yuhu"))
                })
            })
        }
    }(jQuery);
var curl = window.location.href; - 1 != curl.indexOf("m=1") && (curl = curl.replace("m=1", "m=0"), window.location.href = curl);
var uri = window.location.toString();
if (0 < uri.indexOf("%3D", "%3D")) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri)
}
var uri = window.location.toString();
if (0 < uri.indexOf("%3D%3D", "%3D%3D")) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri)
}
var uri = window.location.toString();
if (0 < uri.indexOf("&m=0", "&m=0")) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=0"));
    window.history.replaceState({}, document.title, clean_uri)
}
var uri = window.location.toString();
if (0 < uri.indexOf("?m=0", "?m=0")) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=0"));
    window.history.replaceState({}, document.title, clean_uri)
}

function dekrakenHeadJs() {
    function a() {
        dataLayer.push(arguments)
    }
    var b = document.createElement("script");
    b.src = "https://cdn.jsdelivr.net/gh/DekrakenInc/ajax@libs/js/dekrakeninc.timeago.js", b.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(b);
    var c = document.createElement("link");
    c.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", c.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(c);
    var d = document.createElement("script");
    f.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js", f.type = "text/javascript", f.setAttribute("crossorigin", "anonymous"), f.setAttribute("integrity", "sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"), document.getElementsByTagName("head")[0].appendChild(f);
    var g = document.createElement("script");
    g.src = "https://www.googletagmanager.com/gtag/js?id=UA-128390188-1", g.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(g), window.dataLayer = window.dataLayer || [], a("js", new Date), a("config", "UA-128390188-1")
}
window.addEventListener ? window.addEventListener("load", dekrakenHeadJs, !1) : window.attachEvent ? window.attachEvent("onload", dekrakenHeadJs) : window.onload = dekrakenHeadJs;