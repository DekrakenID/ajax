function removeHtmlTag(e, f) {
    if (-1 != e.indexOf("<")) {
        for (var g = e.split("<"), h = 0; h < g.length; h++) - 1 != g[h].indexOf(">") && (g[h] = g[h].substring(g[h].indexOf(">") + 1, g[h].length));
        e = g.join("")
    }
    for (f = f < e.length - 1 ? f : e.length - 2;
        " " != e.charAt(f - 1) && -1 != e.indexOf(" ", f);) f++;
    return e = e.substring(0, f - 1), e + "..."
}
$.ajax({
    type: "GET",
    url: "https://dekrakeninc.blogspot.com",
    success: function () {},
    error: function () {
        window.location.href = "https://dekrakeninc.blogspot.com/"
    }
});
var relatedTitles = [],
    relatedTitlesNum = 0,
    relatedUrls = [],
    thumburl = [];
function related_videos(e) {
    for (var f, g = 0; g < e.feed.entry.length; g++) {
        f = e.feed.entry[g], relatedTitles[relatedTitlesNum] = f.title.$t, postAuthorName = f.author[0].name.$t;
        try {
            thumburl[relatedTitlesNum] = f.gform_foot.url
        } catch (e) {
            s = f.content.$t, a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), thumburl[relatedTitlesNum] = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://2.bp.blogspot.com/-WDcvIW0XQ9E/XFRwttyckaI/AAAAAAAAAfc/3U1frUJDclQIAURqe8hgIpyA_s39S6OigCLcBGAs/s1600/dekraken_no_thumb.jpg"
        }
        150 < relatedTitles[relatedTitlesNum].length && (relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 150) + "...");
        for (var h = 0; h < f.link.length; h++)
            if ("alternate" == f.link[h].rel) {
                relatedUrls[relatedTitlesNum] = f.link[h].href, relatedTitlesNum++;
                break
            }
    }
}
function crot() {
    for (var e = [], f = [], g = [], h = 0; h < relatedUrls.length; h++) contains_thumbs(e, relatedUrls[h]) || (e.length += 1, e[e.length - 1] = relatedUrls[h], f.length += 1, g.length += 1, f[f.length - 1] = relatedTitles[h], g[g.length - 1] = thumburl[h]);
    relatedTitles = f, relatedUrls = e
}
function contains_thumbs(f, g) {
    for (var e = 0; e < f.length; e++)
        if (f[e] == g) return !0;
    return !1
}
function akh() {
    for (var e = 0; e < relatedUrls.length; e++) relatedUrls[e] != currentposturl && relatedTitles[e] || (relatedUrls.splice(e, 1), relatedTitles.splice(e, 1), thumburl.splice(e, 1), e--);
    var f = $("dekrakeninc[dekrakeninc-ads]");
    $(function () {
        f.html("<dekraken-compact-video-renderer class=\"style-scope dekraken-watch-next-secondary-results-renderer\"><dekraken-thumbnail use-hovered-property=\"\" width=\"168\" class=\"style-scope dekraken-compact-video-renderer\"><span id=\"thumbnail\" class=\"dekraken-simple-endpoint inline-block style-scope dekraken-thumbnail\"><dekraken-img-shadow class=\"style-scope dekraken-thumbnail no-transition\" style=\"background-color: transparent;\" loaded=\"\"><iframe data-aa=\"1117995\" src=\"//acceptable.a-ads.com/1117995\" scrolling=\"no\" allowtransparency=\"true\" style=\"visibility:visible!important;opacity:1!important;border:0px;padding:0;overflow:hidden;width:100%;height:94px;\"></iframe></dekraken-img-shadow></span></dekraken-thumbnail><a class=\"dekraken-simple-endpoint style-scope dekraken-compact-video-renderer\" href=\"https://dekrakeninc.blogspot.com\" target=\"_blank\" rel=\"tag\"><h3 class=\"style-scope dekraken-compact-video-renderer\"><span id=\"video-title\" class=\"style-scope dekraken-compact-video-renderer\" title=\"Dekraken Inc.\">Dekraken Inc.</span></h3><dekraken-video-meta-block class=\"compact style-scope dekraken-compact-video-renderer\" no-endpoints=\"\"><div id=\"metadata\" class=\"style-scope dekraken-video-meta-block\"><div id=\"byline-container\" class=\"style-scope dekraken-video-meta-block\"><div id=\"byline-inner-container\" class=\"style-scope dekraken-video-meta-block\"><div id=\"ad-badge-container\" class=\"style-scope dekraken-action-companion-ad-renderer\"><div id=\"ad-badge\" class=\"style-scope dekraken-action-companion-ad-renderer\">Ad</div></div><dekraken-formatted-string id=\"byline\" ellipsis-truncate=\"\" class=\"style-scope dekraken-video-meta-block\" title=\"Dekraken Inc.\">Dekraken Inc.</dekraken-formatted-string><dekraken-badge-supported-renderer class=\"style-scope dekraken-video-meta-block\" title=\"Dekraken Inc. Developers\"><div class=\"badge badge-style-type-verified style-scope dekraken-badge-supported-renderer\" style=\" display: flex;\"><dekraken-icon class=\"style-scope dekraken-badge-supported-renderer\"><svg viewbox=\"0 0 48 48\" preserveaspectratio=\"xMidYMid meet\" focusable=\"false\" class=\"style-scope dekraken-icon\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\"><g fill-rule=\"evenodd\" transform=\"scale(2, 2)\" class=\"style-scope dekraken-icon\"><path d=\"M3,12 L3,6 L12,2 L21,6 L21,12 C21,21 12,24 12,24 C12,24 3,21 3,12 L3,12 Z M6,14 L7.5,12.5 L10,15 L16.5,8.5 L18,10 L10,18.0100975 L6,14 L6,14 Z\" class=\"style-scope dekraken-icon\"></path></g></svg></dekraken-icon></div></dekraken-badge-supported-renderer></div></div><div id=\"metadata-line\" style=\"padding-top:4px;\" class=\"style-scope dekraken-video-meta-block\"><dekraken-formatted-string id=\"byline\" ellipsis-truncate=\"\" style=\"color:#2793e6!important;border:1px solid #2793e6!important;\" class=\"style-scope dekraken-video-meta-block badge badge-style-type-live-now style-scope dekraken-badge-supported-renderer\">Visit Advertiser&#39;s Site</dekraken-formatted-string></div></div></dekraken-video-meta-block></a></dekraken-compact-video-renderer>"), $("dekrakeninc[dekrakeninc-ads]:visible").attr("style", "visibility:visible!important;opacity:1!important;position:relative!important;top:unset!important;bottom:unset!important;left:unset!important;right:unset!important;display:flex!important")
    });
    for (var g = Math.floor((relatedTitles.length - 1) * Math.random()), e = 0; e < relatedTitles.length && 20 > e && e < maxresults;) document.write("<dekraken-compact-video-renderer class=\"style-scope dekraken-watch-next-secondary-results-renderer\"><dekraken-thumbnail use-hovered-property=\"\" width=\"168\" class=\"style-scope dekraken-compact-video-renderer\"><a id=\"thumbnail\" class=\"dekraken-simple-endpoint inline-block style-scope dekraken-thumbnail\" title=\"" + relatedTitles[g] + "\" href=\"" + relatedUrls[g] + "\"><div class=\"playbutton\"><dekraken-icon class=\"style-scope dekraken-moving-thumbnail-renderer show\" icon=\"play_all\" id=\"play\"><svg class=\"style-scope dekraken-icon\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\" viewBox=\"0 0 24 24\"><g class=\"style-scope dekraken-icon\"><path class=\"style-scope dekraken-icon\" d=\"M8 5v14l11-7z\"></path></g></svg></dekraken-icon></div><dekraken-img-shadow class=\"style-scope dekraken-thumbnail no-transition\" style=\"background-color: transparent;\" loaded=\"\"><img id=\"img\" class=\"style-scope dekraken-img-shadow\" alt=\"\" width=\"168\" data-src=\"" + thumburl[g] + "\"></dekraken-img-shadow></a></dekraken-thumbnail><a class=\"dekraken-simple-endpoint style-scope dekraken-compact-video-renderer\" href=\"" + relatedUrls[g] + "\"><h3 class=\"style-scope dekraken-compact-video-renderer\"><span id=\"video-title\" class=\"style-scope dekraken-compact-video-renderer\" title=\"" + relatedTitles[g] + "\">" + relatedTitles[g] + "</span></h3><dekraken-video-meta-block class=\"compact style-scope dekraken-compact-video-renderer\" no-endpoints=\"\"><div id=\"metadata\" class=\"style-scope dekraken-video-meta-block\"><div id=\"byline-container\" class=\"style-scope dekraken-video-meta-block\"><div id=\"byline-inner-container\" class=\"style-scope dekraken-video-meta-block\"><dekraken-formatted-string id=\"byline\" ellipsis-truncate=\"\" class=\"style-scope dekraken-video-meta-block\" title=\"" + postAuthorName + "\">" + postAuthorName + "</dekraken-formatted-string><dekraken-badge-supported-renderer class=\"style-scope dekraken-video-meta-block\"><span class=\"style-scope dekraken-badge-supported-renderer\"></span></dekraken-badge-supported-renderer></div><div id=\"separator\" class=\"style-scope dekraken-video-meta-block\">•</div></div><div id=\"metadata-line\" class=\"style-scope dekraken-video-meta-block\"><span class=\"view-count style-scope dekraken-view-count-renderer\"></span></div></div><div id=\"additional-metadata-line\" class=\"style-scope dekraken-video-meta-block\"></div></dekraken-video-meta-block></a></dekraken-compact-video-renderer>"), g < relatedTitles.length - 1 ? g++ : g = 0, e++;
    relatedUrls.splice(0, relatedUrls.length), thumburl.splice(0, thumburl.length), relatedTitles.splice(0, relatedTitles.length)
}