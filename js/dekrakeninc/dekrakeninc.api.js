var ski = $(".skidikipapap"),
    deem = $(".deemphasize"),
    skid = " subscribers",
    deemv = "<svg class=\"max\" viewBox=\"0 0 6 12\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.72 11.46V6.233h1.69l.252-2.038H3.72v-1.3c0-.59.157-.992.97-.992h1.04V.08C5.55.055 4.934 0 4.216 0 2.72 0 1.694.95 1.694 2.693v1.502H0v2.038h1.694v5.227H3.72z\" fill-rule=\"evenodd\"></path></svg> Subscribe ";

function dekrakenSubscribers(a, b) {
    $.getJSON("https://graph.facebook.com/" + a + "?fields=name,fan_count&access_token=" + b + "", function(a) {
        ski.html(a.fan_count + skid), deem.html(deemv + a.fan_count)
    })
}
dekrakenSubscribers(name, token);