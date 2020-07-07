import {
  registerPlugins,
  Plugin
} from "../../../framework/jquery/plugins/plugins";
import GLImageComponent from "./GLImage";
import {$window} from "../../dom";

class GlImage extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
    const data = $element.data('image');
    this.image = new GLImageComponent($element[0], data);
    this.image.start();

    $window.on('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove({originalEvent}) {
    if (originalEvent.touches && !originalEvent.touches.length) {
      return;
    }
    const x = originalEvent.touches ? originalEvent.touches[0].clientX : originalEvent.clientX;
    const y = originalEvent.touches ? originalEvent.touches[0].clientY : originalEvent.clientY;

    this.image.mouse = {x: (x / window.innerWidth - 0.5) * 2, y: (y / window.innerHeight - 0.5) * 2}
  }
}

registerPlugins({
  name: "glImage",
  Constructor: GlImage,
  selector: ".gl-image"
});
