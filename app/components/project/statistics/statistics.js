import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Statistics extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "statistics",
    "Constructor": Statistics,
    "selector": ".statistics"
  }
);
