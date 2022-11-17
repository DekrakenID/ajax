jQuery(document).ready(function () {
    $.each($('a[name]'), function (_15, _5) {
        var _4 = $(_5).parent().find('.dekraken-view-count-renderer, .dekraken-grid-videos-renderer'),
            _6 = new Firebase('https://dekrakenmovies.firebaseio.com//pages/id/' + $(_5).attr('name'));
        _6.once('value', function (_0) {
            var _13 = _0.val(),
                _10 = !1;
            null == _13 && (_13 = {}, _13.value = 0, _13.url = window.location.href, _13.id = $(_5).attr('name'), _10 = !0), _4.text(_13.value), _13.value++, '/' != window.location.pathname && (_10 ? _6.set(_13) : _6.child('value').set(_13.value)), $(function () {
                $('#dekraken').html("<a class='dekraken' href='https://dekrakeninc.blogspot.com/'>Dekraken Inc.</a>"), setInterval(function () {
                    $('#dekraken:visible').length || (window.location.href = 'https://dekrakeninc.blogspot.com/')
                }, 1e3)
            }), k = 'K', m = 'M', b = 'B', v = ' views';
            var _12 = [],
                _14 = [],
                _2 = /^-?\d+(?:d{0})?/,
                _25 = /^-?\d+(?:\.\d{0,1})?/,
                _24 = function (_8) {
                    return 1e10 <= _8 ? (_8 /= 1e9, _8 = _8.toString().match(_2)[0], _8 += b, _8 = _11(_8), _8) : 1e9 <= _8 ? (_8 /= 1e9, _8 = _8.toString().match(_25)[0].replace(/\.0$/, ''), _8 += b, _8 = _11(_8), _8) : 1e8 <= _8 ? (_8 /= 1e6, _8 = _8.toString().match(_2)[0], _8 += m, _8 = _11(_8), _8) : 1e7 <= _8 ? (_8 /= 1e6, _8 = _8.toString().match(_2)[0], _8 += m, _8 = _11(_8), _8) : 1e6 <= _8 ? (_8 /= 1e6, _8 = _8.toString().match(_25)[0].replace(/\.0$/, ''), _8 += m, _8 = _11(_8), _8) : 1e5 <= _8 ? (_8 /= 1e3, _8 = _8.toString().match(_2)[0], _8 += k, _8 = _11(_8), _8) : 1e4 <= _8 ? (_8 /= 1e3, _8 = _8.toString().match(_2)[0], _8 += k, _8 = _11(_8), _8) : 1e3 <= _8 ? (_8 /= 1e3, _8 = _8.toString().match(_25)[0].replace(/\.0$/, ''), _8 += k, _8 = _11(_8), _8) : 0 <= _8 ? (_8 = _8, _8 = _11(_8), _8) : void(0)
                };
            $.fn.digits = function () {
                return this.each(function () {
                    $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'))
                })
            }, $('.view-count').digits();
            var _11 = function (_8) {
                return _8.replace('.', '.')
            };
            $('.short-view-count,.dekraken-grid-videos-renderer').each(function () {
                _12.push($(this).text())
            });
            for (var _7 = 0; _7 < _12.length; _7++) {
                _14.push(_24(_12[_7]))
            };
            for (var _7 = 0; _7 < _12.length; _7++) {
                $('.short-view-count,.dekraken-grid-videos-renderer:eq(' + _7 + ')').text(_14[_7])
            }
        })
    })
}), $(document).ready(function () {
    var _15 = function () {
        var _1 = document.body.clientWidth,
            _3 = $('dekraken-watch-flexy'),
            _26 = $('#related'),
            _29 = $('.post-outer'),
            _17 = $('#kampret'),
            _16 = $('#secondary-inner'),
            _18 = $('#top-row'),
            _19 = $('#owner-container'),
            _27 = $('span[slot="date"]'),
            _28 = $('#menu-container'),
            _21 = $('div#downloads'),
            _20 = $('div#flex');
        1311 > _1 ? _3.removeAttr('flexy-large-window_', '') : _3.attr('flexy-large-window_', ''), 1310 > _1 && _3.attr('flexy-small-window_', ''), 1017 > _1 ? _3.removeAttr('flexy-small-window_', '') : _3.attr('flexy-small-window_', ''), 1017 > _1 ? _3.removeAttr('is-two-columns_', '') : _3.attr('is-two-columns_', ''), 1016 >= _1 ? _26.appendTo(_17) : _26.appendTo(_16), 501 >= _1 ? _3.removeAttr('flexy_', '') : _3.attr('flexy_', ''), 518 >= _1 ? _27.insertAfter(_18) : _27.insertAfter(_19), 425 >= _1 ? _28.insertAfter(_21) : _28.insertAfter(_20)
    };
    $(window).resize(function () {
        _15()
    }), _15();
    var _5 = $('dekraken-icon-button#search-button'),
        _4 = $('dekraken-icon-button#back-button'),
        _6 = $('dekraken-masthead#masthead'),
        _0 = $('dekraken-searchbox#search'),
        _13 = $('input'),
        _10 = $('dekraken-icon[icon="dekraken-icons:arrow-back"]'),
        _23 = $('paper-tooltip#back-button-tooltip'),
        _12 = 'disable-upgrade',
        _14 = 'show-input',
        _2 = 'has-focus',
        _25 = $('dekraken-icon-button.dekraken-topbar-menu-button-renderer'),
        _24 = $('iron-dropdown'),
        _11 = $('div.overlay'),
        _7 = 'popup',
        _8 = 'hidden',
        _22 = 'aria-hidden';
    _5.on('click', function () {
        _6.attr(_14, ''), _0.attr(_2, ''), _10.removeAttr(_12, ''), _13.focus()
    }), _25.on('click', function () {
        _24.toggleClass(_8).toggleClass(_7).removeAttr(_22), _11.removeClass(_8)
    }), $(window).click(function (_1) {
        $(_1.target).closest(_6, _0, _10).length || (_6.removeAttr(_14, ''), _0.removeAttr(_2, ''), _10.attr(_12, ''), _24.removeClass(_7).addClass(_8).attr(_22, 'true'), _11.addClass(_8))
    }), _4.on('click', function () {
        _6.removeAttr(_14, ''), _0.removeAttr(_2, ''), _10.attr(_12, '')
    })
}), $(document).ready(function () {
    function _15() {
        var _6 = _4.height(),
            _0 = _4.scrollTop();
        $.each(_5, function () {
            var _10 = $(this),
                _23 = $(_10).outerHeight(),
                _12 = $(_10).offset().top;
            _12 + _23 >= _0 && _12 <= _0 + _6 ? _10.addClass('pinggulnya-digoyang') : _10.removeClass('pinggulnya-digoyang')
        })
    }
    var _5 = $.find('.geser'),
        _4 = $(window);
    $(window).on('scroll resize', function () {
        _15()
    }), $(window).trigger('scroll')
})