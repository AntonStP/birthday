import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Pages extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "pages",
    "Constructor": Pages,
    "selector": ".pages"
  }
);
