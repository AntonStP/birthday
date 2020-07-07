import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Lotomania extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "lotomania",
    "Constructor": Lotomania,
    "selector": ".lotomania"
  }
);
