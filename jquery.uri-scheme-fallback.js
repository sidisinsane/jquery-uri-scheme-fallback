/*
Usage:
    <ul>
        <li>Message: <span data-scheme="sms:001123123456">001 123 123456</span></li>
        <li>Call: <span data-scheme="tel:001123123456">001 123 123456</span></li>
        <li>Facetime: <span data-scheme="facetime:user@domain.tld">user@domain.tld</span></li>
        <li>Facebook: <a href="//www.facebook.com/xyz" data-scheme="fb://profile/123123456">www.facebook.com/xyz</a></li>
    </ul>
    <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="jquery.uri-scheme-fallback.js"></script>
    <script>
    (function($) { 
        $('[data-scheme]').uriSchemeFallback({
            'log': true
        });
    })(jQuery);
    </script>
*/
;(function ($, window, document, undefined) {
    'use strict';

    // ie console.log fallback
    typeof console     == 'undefined' && (console = {});
    typeof console.log == 'undefined' && (console.log = function(){});

    $.fn.extend({
        uriSchemeFallback: function (options) {
            var defaults = {
                log: false
            };
            var options = $.extend( {}, defaults, options );

            return this.each(function() {
                $(this).on('click', function (event) {
                    uriSchemeWithHyperlinkFallback($(this).data('scheme'), $(this).attr('href'), options.log);
                    event.preventDefault();
                });
            });
        }
    });

    // tries to execute the uri:scheme
    function uriSchemeWithHyperlinkFallback(uri, href, log) {
        // make href and log arguments optional
        href = typeof log !== 'undefined' ? href : false;
        log  = typeof log !== 'undefined' ? log : false;

        // set up a timer and start it
        var start = new Date().getTime(), 
            end, 
            elapsed;

        // attempt to redirect to the uri:scheme
        document.location = uri;

        // end timer
        end     = new Date().getTime();
        elapsed = (end - start);

        // if there's no elapsed time, then the scheme didn't fire, and we head to the url.
        if (href && elapsed < 1) {
            document.location = href;
            if (log) {
                console.log('Using Hyperlink: ' + href);
            }
        } else {
            if (log) {
                console.log('Trying to use URI Scheme: ' + uri);
            }
        }
    }

})( jQuery, window, document );

