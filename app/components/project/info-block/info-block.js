import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class InfoBlock extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "infoBlock",
    "Constructor": InfoBlock,
    "selector": ".info-block"
  }
);
