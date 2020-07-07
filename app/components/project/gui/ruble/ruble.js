import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';

class Ruble extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "ruble",
    "Constructor": Ruble,
    "selector": ".ruble"
  }
);
