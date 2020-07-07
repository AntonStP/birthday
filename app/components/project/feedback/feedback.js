import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class Feedback extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "feedback",
    "Constructor": Feedback,
    "selector": ".feedback"
  }
);
