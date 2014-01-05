/* ===============================================
 * simple-server-jquery-clock.js v0.0.2
 * ===============================================
 *
 * Author: Nigel Greenway
 * Modified : Ahmed Abdelaziz
 * Date : 5/1/2014
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
                                    multi          : true,
									display        : 'all',
									h24        	: true
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
		if ( settings.display=='day') {
             this.html('<div class="'+ prefix +'date">'
                    + '<span class="day"></span>'
                    + '&nbsp;<span class="month"></span>'
                    + '&nbsp;<span class="year"></span>'
                + '</div>');
        }
		else if ( settings.display=='time') {
            this.html('<div class="'+prefix+'time">'
                    + '<span class="hour"></span>'
                    + settings.seperator
                    + '<span class="min"></span>'
                    + settings.seperator
                    + '<span class="sec"></span>'
                    + '&nbsp;<span class="ampm"></span>'
                + '</div>');
        }else{
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
		};
        setInterval( function() {
			if ( settings.display=='day'){
            $('.'+prefix+'date > .day').html(days[$datetime.getDay()]+' '+$datetime.getUTCDate());
            $('.'+prefix+'date > .month').html(months[$datetime.getMonth()]);
            $('.'+prefix+'date > .year').html($datetime.getFullYear());
			}
			else if ( settings.display=='time'){
				var $hours= $datetime.getHours();
			if (!settings.h24){
				 $hours > 12 ? $hours=$hours-12: $hours=$hours;
            $('.'+prefix+'time > .hour').html( $hours < 10 ? '0'+$hours : $hours);}else{ 
			$('.'+prefix+'time > .hour').html( $hours < 10 ? '0'+$hours : $hours);
				};
            $('.'+prefix+'time > .min').html($datetime.getMinutes() < 10 ? '0'+$datetime.getMinutes() : $datetime.getMinutes());
            $('.'+prefix+'time > .sec').html($datetime.getSeconds() < 10 ? '0'+$datetime.getSeconds() : $datetime.getSeconds());
			if (!settings.h24){
            $('.'+prefix+'time > .ampm').html($datetime.getHours() >= 12 ? 'pm' : 'am');
			}
			}else{
				$('.'+prefix+'date > .day').html(days[$datetime.getDay()]+' '+$datetime.getUTCDate());
				$('.'+prefix+'date > .month').html(months[$datetime.getMonth()]);
				$('.'+prefix+'date > .year').html($datetime.getFullYear());
				
				var $hours= $datetime.getHours();
			if (!settings.h24){
				 $hours > 12 ? $hours=$hours-12: $hours=$hours;
            $('.'+prefix+'time > .hour').html( $hours < 10 ? '0'+$hours : $hours);}else{ 
			$('.'+prefix+'time > .hour').html( $hours < 10 ? '0'+$hours : $hours);
				};
            $('.'+prefix+'time > .min').html($datetime.getMinutes() < 10 ? '0'+$datetime.getMinutes() : $datetime.getMinutes());
            $('.'+prefix+'time > .sec').html($datetime.getSeconds() < 10 ? '0'+$datetime.getSeconds() : $datetime.getSeconds());
			if (!settings.h24){
            $('.'+prefix+'time > .ampm').html($datetime.getHours() >= 12 ? 'pm' : 'am');
			}
				};
            $datetime = new Date($datetime.valueOf() + 1000);
		
        }, 1000);
    };


})(jQuery);
