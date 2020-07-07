import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class WebglLite extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "webglLite",
    "Constructor": WebglLite,
    "selector": ".webgl-lite"
  }
);
