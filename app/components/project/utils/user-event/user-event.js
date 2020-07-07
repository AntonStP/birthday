/* eslint-disable */
import {
  registerPlugins,
  Plugin
} from "../../../framework/jquery/plugins/plugins";

class UserEvent extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);

	  /* Check event entries in markdown
		 * data-user-event="<JQ events>|<event name>|<param>;<next event ...>"
	   * example: data-user-event="click touchstart|gallery:swipe|1"
	   */
	  // $('[data-user-event]').each(function(i,e){
  	const e = $element;
  	let data = e.data('user-event');
  	data = data.split(';');
  	data.forEach(function(_data){
  		_data = _data.split('|');
  		console.log('user-event: ', _data );
  		e.on( _data[0], function(){
  			$(window).trigger(_data[1], _data[2] );
  		})
  	});
	  // })

  }
}

registerPlugins({
  name: "userEvent",
  Constructor: UserEvent,
  selector: "[data-user-event]"
});
