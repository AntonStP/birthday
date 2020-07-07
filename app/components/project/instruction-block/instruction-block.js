import {registerPlugins, Plugin} from '../../framework/jquery/plugins/plugins.js';

class InstructionBlock extends Plugin {
  constructor($element) {
    super($element);
  }
}

registerPlugins(
  {
    "name": "instructionBlock",
    "Constructor": InstructionBlock,
    "selector": ".instruction-block"
  }
);
