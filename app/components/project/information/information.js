import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";

class Information extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
  }
}

registerPlugins({
  name: "information",
  Constructor: Information,
  selector: ".information"
});
