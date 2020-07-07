import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Intro extends Plugin {

  static DAY = 86400000;

  constructor($element) {
    super($element);

    const now = Date.now();

    const $dataHub = $element.find('.intro__head');

    const final = new Date($dataHub.attr("data-final")).getTime();

    const redirectTime = new Date($dataHub.attr("data-redirect-time")).getTime();

    if (now > redirectTime){
      window.location.replace($dataHub.attr("data-redirect-link"));
      return;
    }

    const diff = final - now;
    const days = Math.floor( diff / Intro.DAY);
    $element.find(".intro__timer-template").templateEngine({days})
  }
}

registerPlugins(
  {
    "name": "intro",
    "Constructor": Intro,
    "selector": ".intro"
  }
);
