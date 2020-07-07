import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";

class Instruction extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
  }
}

registerPlugins({
  name: "instruction",
  Constructor: Instruction,
  selector: ".instruction"
});
