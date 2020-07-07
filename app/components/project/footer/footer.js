import {registerPlugins} from '../../framework/jquery/plugins/plugins.js';


class Footer{
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
    "name": "footer",
    "Constructor": Footer,
    "selector": ".footer"
  }
);
