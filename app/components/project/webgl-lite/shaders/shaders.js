import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';

class Shaders extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "shaders",
    "Constructor": Shaders,
    "selector": ".shaders"
  }
);
