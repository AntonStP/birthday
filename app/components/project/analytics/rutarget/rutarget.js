import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';

class Rutarget extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "rutarget",
    "Constructor": Rutarget,
    "selector": ".rutarget"
  }
);
