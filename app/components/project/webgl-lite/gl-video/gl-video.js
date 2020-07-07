/* eslint-disable */
import {
  registerPlugins,
  Plugin
} from "../../../framework/jquery/plugins/plugins";
import * as GLVideoComponent from "./GLVideo";

class GlVideo extends Plugin {
  // eslint-disable-next-line no-useless-constructor

  constructor($element) {
    super($element);

    const videoData = $element.data('gl-video').split('|');
    console.log('videoUrl', videoData );
    if(!videoData) return;
    const delay = ~~((videoData[1] || 0)*1000);

    setTimeout(()=>{
      const videoOrURL = videoData[0]; // If nothing received use self element as a Video Source and its parent as a Container
      const upscale = parseFloat(videoData[2]);
      const $parent = $element.parent();
      const glvideo = this.glvideo = new GLVideoComponent.default( videoOrURL ? $element[0] : $parent[0], videoOrURL ? videoOrURL : $element[0], null, upscale );
      if(!videoOrURL) $('canvas',$parent).css({
        position: 'absolute',
        width: '100%',
        height: '100%'
      });
      $element.data('glvideo', glvideo );
      glvideo.play();
      this.resize();
      this.resize = this.resize.bind(this);
      $(window).resize(this.resize);
    }, delay );

  }

  resize(){
    this.glvideo.resize()
  }

  // init( param ){
  //   switch (param ) {
  //     case 'getComponent':
  //       console.log('>getComponent', this.glvideo )
  //       return this.glvideo;
  //       break;
  //   }
  // }

}

registerPlugins({
  name: "glVideo",
  Constructor: GlVideo,
  selector: "[data-gl-video]"
});

