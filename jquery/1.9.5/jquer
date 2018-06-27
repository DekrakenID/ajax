var getScript = jQuery.getScript;
jQuery.getScript = function( resources, callback ) {

    var 
    length = resources.length,
    handler = function() { counter++; },
    deferreds = [],
    counter = 0,
    idx = 0;

    for ( ; idx < length; idx++ ) {
        deferreds.push(
            getScript( resources[ idx ], handler )
        );
    }

    jQuery.when.apply( null, deferreds ).then(function() {
        callback && callback();
    });
};
var scripts=['https://cdn.rawgit.com/DekrakenID/ajax/c1fd8aadce5b8269bd336a20575fde999e8be6ae/docs/files/op.js'];
$.getScript(scripts);
