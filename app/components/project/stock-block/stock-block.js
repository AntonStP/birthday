import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class StockBlock extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "stockBlock",
    "Constructor": StockBlock,
    "selector": ".stock-block"
  }
);
