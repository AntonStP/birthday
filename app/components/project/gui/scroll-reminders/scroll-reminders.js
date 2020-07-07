import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';
import $ from "jquery";

class ScrollReminders extends Plugin {
  constructor($element) {
    super($element);
  }

}

$(".scroll-reminders").on('click', function () {
  var dest = $(this).attr('href');
  if (dest !== undefined && dest !== '')
    $('html,body').animate({
        scrollTop: $(dest).offset().top
      }, 500
    );
});

registerPlugins(
  {
    "name": "scrollReminders",
    "Constructor": ScrollReminders,
    "selector": ".scroll-reminders"
  }
);
