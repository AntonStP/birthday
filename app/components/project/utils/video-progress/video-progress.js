/* eslint-disable */
import {
  registerPlugins,
  Plugin
} from "../../../framework/jquery/plugins/plugins";

/*
Example
<video data-video-progress="<time-range>;<target>;<class>|<NEXT RANGE>">
- <time-range>: Time range. Examples:
	- "1-5" from 1st to 5th second
	- "1" from 1st second to the end
	- "-5" from the begining to 5th second
- <target>: Target selector to apply the class. If empty - used self.
- <class>: the Class name to applt to the Target
*/

class VideoProgress extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
    let _data = $element.data('video-progress');
    if(!_data) return;

    // var targets = {};

    _data = _data.split('|');
    _data = _data.map((e)=>{
      e = e.split(';');
      var t = e[0].split('-');
      var start = parseInt( t[0] ) || 0;
      var end = t.length > 1 ? parseInt(t[1]) : 99999999;
      var target = e[1] || $element;
      // if( !targets[target] )targets[target] = [];
      return {
        // t: t,
        start: start,
        end: end,
        target: target,
        // targetClassList: targets[target],
        className: e[2]
      };
    });

    var interval;
    var el = $element[0];

    $element
      .on("playing", function() {
        // console.log('videoProgress: play');

        clearInterval(interval);

        interval = setInterval(()=>{
          // console.log('videoProgress: ',el.currentTime);
          _data.forEach((e)=>{
            var $e = $(e.target);
            if( el.currentTime >= e.start && el.currentTime <= e.end ){ // in range
              /*
              if( e.targetClassList.indexOf(e.className) == -1 ){
                e.targetClassList.push(e.className);
                $(e.target).addClass(e.className);
              }
              */
              if( !$e.hasClass(e.className) ) {
                $e.addClass(e.className);
                // console.log('addClass: ', e.className);
              }
            }else{ // is out of range
              if( $e.hasClass(e.className) ) {
                $e.removeClass(e.className);
                // console.log('removeClass: ', e.className);
              }
            }
          });
        }, 200 );

      })
      .on("pause", function() {
        // console.log('videoProgress: pause');
        clearInterval(interval);
      })
    ;


    // console.log('videoProgress', _data, $element[0] );

  }
}

registerPlugins({
  name: "videoProgress",
  Constructor: VideoProgress,
  selector: "[data-video-progress]"
});
