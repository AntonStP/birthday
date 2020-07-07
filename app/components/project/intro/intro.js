import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';
import $ from 'jquery';

class Intro extends Plugin {
  constructor($element) {
    super($element);
  }
}

$(".intro__menu-item").on( 'click', function(){
  var dest = $(this).attr('href');
  if(dest !== undefined && dest !== '')
    $('html').animate({
        scrollTop: $(dest).offset().top
      }, 500
    );
});

registerPlugins(
  {
    "name": "intro",
    "Constructor": Intro,
    "selector": ".intro"
  }
);
