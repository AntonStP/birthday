import {registerPlugins} from '../../../framework/jquery/plugins/plugins.js';


class SocialBlock{
  constructor($element) {

  }

  init(action, ...args){
    if (action && typeof this[action] === 'function') {
      return this[action].apply(this, args);
    }
  }

  destroy(){

  }
}
registerPlugins(
  {
    "name": "socialBlock",
    "Constructor": SocialBlock,
    "selector": ".social-block"
  }
);
