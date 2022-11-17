function removeHtmlTag(e, f) {
    if (-1 != e.indexOf("<")) {
        for (var g = e.split("<"), h = 0; h < g.length; h++) - 1 != g[h].indexOf(">") && (g[h] = g[h].substring(g[h].indexOf(">") + 1, g[h].length));
        e = g.join("")
    }
    for (f = f < e.length - 1 ? f : e.length - 2;
        " " != e.charAt(f - 1) && -1 != e.indexOf(" ", f);) f++;
    return e = e.substring(0, f - 1), e + "..."
}

function suggestion(e) {
    for (var f = 0; f < pst; f++) {
        var t, g = e.feed.entry[f],
            h = g.title.$t,
            j = g.content.$t,
            l = g.author[0].name.$t,
            m = g.author[0].uri.$t,
            n = /\:blog-?(\d+)(\.|$)/.exec(g.id.$t)[1],
            o = g.id.$t.replace("tag:blogger.com,1999:blog-" + n + ".post-", ""),
            p = g.published.$t,
            q = g.updated.$t,
            r = p;
        if (f == e.feed.entry.length) break;
        for (var u = 0; u < g.link.length; u++)
            if ("alternate" == g.link[u].rel) {
                t = g.link[u].href;
                break
            } var w = r.split("T")[0].split("-");
        r = w[2] + " " + ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][+w[1] - 1] + " " + w[0];
        var x;
        try {
            x = g.media$thumbnail.url.replace("img.youtube", "i.ytimg").replace("default.jpg", "hqdefault.jpg").replace("s72-c", "s360")
        } catch (B) {
            s = g.content.$t, a = s.indexOf("<img"), b = s.indexOf("src=\"", a), c = s.indexOf("\"", b + 5), d = s.substr(b + 5, c - b - 5), x = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://2.bp.blogspot.com/-WDcvIW0XQ9E/XFRwttyckaI/AAAAAAAAAfc/3U1frUJDclQIAURqe8hgIpyA_s39S6OigCLcBGAs/s1600/dekraken_no_thumb.jpg"
        }
        if (document.write("<dekraken-video-renderer class=\"style-scope dekraken-item-section-renderer\" lockup=\"\" style=\"margin-bottom:0;\"><a name=\"" + o + "\"></a><div class=\"style-scope dekraken-video-renderer\" id=\"dismissable\"><dekraken-thumbnail class=\"style-scope dekraken-video-renderer\" id=\"summary" + o + "\" use-hovered-property=\"\" width=\"246\">" + j + "<div class=\"video-thumbnail-container-large center\"><div class=\"cover video-thumbnail-img video-thumbnail-bg\"></div><a class=\"dekraken-simple-endpoint inline-block style-scope dekraken-thumbnail\" href=\"" + t + "\" title=\"" + h + "\" id=\"thumbnail\" itemprop=\"url\"><div class=\"playbutton\"><dekraken-icon class=\"style-scope dekraken-moving-thumbnail-renderer show\" icon=\"play_all\" id=\"play\"><svg class=\"style-scope dekraken-icon\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\" viewBox=\"0 0 24 24\"><g class=\"style-scope dekraken-icon\"><path class=\"style-scope dekraken-icon\" d=\"M8 5v14l11-7z\"/></g></svg></dekraken-icon></div><dekraken-img-shadow class=\"style-scope dekraken-thumbnail\" loaded=\"\" style=\"background-color: transparent;\"><img class=\"opacita cover\" data-src=\"" + x + "\" id=\"img\" itemprop=\"thumbnailUrl\" width=\"246\"/></dekraken-img-shadow></a></div></dekraken-thumbnail><a href=\"" + t + "\"><div class=\"text-wrapper style-scope dekraken-video-renderer\"><div class=\"style-scope dekraken-video-renderer\" id=\"meta\">"), document.write("<div class=\"style-scope dekraken-video-renderer\" id=\"title-wrapper\"><h3 class=\"title-and-badge style-scope dekraken-video-renderer\"><div class=\"dekraken-simple-endpoint style-scope dekraken-video-renderer spf-link\" title=\"" + h + "\" id=\"video-title\">" + h + "</div></h3></div><dekraken-video-meta-block class=\"style-scope dekraken-video-renderer\"><div class=\"style-scope dekraken-video-meta-block\" id=\"metadata\"><div class=\"style-scope dekraken-video-meta-block\" id=\"byline-container\"> <div class=\"style-scope dekraken-video-meta-block\" id=\"byline-inner-container\"><dekraken-formatted-string class=\"style-scope dekraken-video-meta-block complex-string\" ellipsis-truncate=\"\" title=\"" + l + "\" has-link-only_=\"\" id=\"byline\"><div rel=\"author\" spellcheck=\"false\" style=\"color:var(--dekraken-metadata-line-color, var(--dekraken-spec-text-secondary));\">" + l + "</div></dekraken-formatted-string><dekraken-badge-supported-renderer class=\"style-scope dekraken-grid-video-renderer\" title=\"Verified Author\"><div class=\"badge badge-style-type-verified style-scope dekraken-badge-supported-renderer\" style=\"position: unset;margin:0;\"><dekraken-icon class=\"style-scope dekraken-badge-supported-renderer\"><svg class=\"style-scope dekraken-icon\" focusable=\"false\" preserveAspectRatio=\"xMidYMid meet\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\" viewBox=\"0 0 24 24\"><g class=\"style-scope dekraken-icon\"><path class=\"style-scope dekraken-icon\" clip-rule=\"evenodd\" d=\"M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z\" fill-rule=\"evenodd\"></path></g></svg></dekraken-icon></div></dekraken-badge-supported-renderer> </div><div class=\"style-scope dekraken-video-meta-block\" id=\"metadata-line\"> <span class=\"style-scope dekraken-grid-videos-renderer\"></span>&#160;views<span style=\"margin:0px 4px;user-select:none;-webkit-user-select:none\">&#8226;</span><span class=\"published updated timeago style-scope dekraken-grid-video-renderer\" title=\"" + p + "\">" + r + "</span></div></div></div></dekraken-video-meta-block>"), "content" in g) var y = g.content.$t;
        else if ("summary" in g) var y = g.summary.$t;
        else var y = "";
        var z = /<\S[^>]*>/g;
        if (y = y.replace(z, ""), !0 == su)
            if (y.length < ch) document.write("<dekraken-formatted-string class=\"style-scope dekraken-video-renderer\" id=\"description-text\">" + y + "</dekraken-formatted-string>");
            else {
                y = y.substring(0, ch);
                var A = y.lastIndexOf(" ");
                y = y.substring(0, A), document.write("<dekraken-formatted-string class=\"style-scope dekraken-video-renderer\" id=\"description-text\">" + y + " ...</dekraken-formatted-string>")
            } document.write("</div></div></a></div></dekraken-video-renderer>")
    }
}