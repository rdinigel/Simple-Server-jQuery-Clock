/* ===============================================
 * simple-server-jquery-clock.js v0.0.1
 * ===============================================
 *
 * Author: Nigel Greenway
 *
 * Wiki:   http://github.com/rdinigel/Simple-Server-jQuery-Clock/wiki
 * Issues: http://github.com/rdinigel/Simple-Server-jQuery-Clock/issues
 *
 * ============================================ */

( function ($) {

    $.fn.simpleServerClock = function(options) {
        var
            settings = $.extend(
                                {},
                                {
                                    serverDatetime : false,
                                    seperator      : ':',
                                    multi          : true
                                },
                                options
                            ),
            prefix   = '',
            months   = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            days     = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        if ( settings.serverDatetime != false ) {
            var
                $datetime = new Date(settings.serverDatetime),
                $localTime = new Date(),
                $timeDiff  = $datetime.getTime() - $localTime;
        } else {
            $datetime = new Date();
        }

        if ( settings.multi ) {
            prefix = Math.floor(Math.random() * 1000) + 2 + '--';
        }

        this.html('<div class="'+ prefix +'date">'
                    + '<span class="day"></span>'
                    + '&nbsp;<span class="month"></span>'
                    + '&nbsp;<span class="year"></span>'
                + '</div>'
                + '<div class="'+prefix+'time">'
                    + '<span class="hour"></span>'
                    + settings.seperator
                    + '<span class="min"></span>'
                    + settings.seperator
                    + '<span class="sec"></span>'
                    + '&nbsp;<span class="ampm"></span>'
                + '</div>');

        setInterval( function() {
            $('.'+prefix+'date > .day').html(days[$datetime.getDay()]);
            $('.'+prefix+'date > .month').html(months[$datetime.getMonth()]);
            $('.'+prefix+'date > .year').html($datetime.getFullYear());
            $('.'+prefix+'time > .hour').html($datetime.getHours() < 10 ? '0'+$datetime.getHours() : $datetime.getHours());
            $('.'+prefix+'time > .min').html($datetime.getMinutes() < 10 ? '0'+$datetime.getMinutes() : $datetime.getMinutes());
            $('.'+prefix+'time > .sec').html($datetime.getSeconds() < 10 ? '0'+$datetime.getSeconds() : $datetime.getSeconds());
            $('.'+prefix+'time > .ampm').html($datetime.getHours() >= 12 ? 'pm' : 'am');
            $datetime = new Date($datetime.valueOf() + 1000);
        }, 1000);
    };


})(jQuery);