/* eslint-disable */
import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';
import {declOfNum} from '../utils';

/*
Syntax: data-numerals="<eventname>|<words>|<delimeter>|<selector>"
- <eventname>: Event name to update value. Listened on window
- <words>:
- <delimeter>: Optional. If exists Number and words will be joined. Overwise displayed numbers only
- <selector>: Optional. If empty, then an element containing this attribute is used.

Example:
<span data-numerals='counter|эмоджи,эмоджи,эмоджи|1'>12 эмоджи</span>

---------------
Trigger events
$(window).trigger('<event>|<number>|<overrided_words>|<overrided_delimeter>');

*/


var inited;
var elements = {};

class Numerals extends Plugin {
  constructor($element) {
    super($element);

    if( !inited ){
    	$(window).on('numerals.change', (e,d)=>{
    		d = d.split('|');
    		var event_elements = elements[d[0]];
    		if(!event_elements) return;
    		const val = parseFloat(d[1]);
    		const overrided_words = d[2] ? d[2].split(',') : undefined;
    		const overrided_delimeter = d[3] ? d[3] : undefined;
    		// console.log('numerals. triggered', d, event_elements );
    		event_elements.forEach((e)=>{
    			e.$el.text( declOfNum( val, overrided_words || e.words, overrided_delimeter || e.delimeter ) )
    		})

    	})
    }

    var data = $element.data('numerals');
    if( !data ) return;

    data = data.split('|');
    data = {
    	$el: data[3] ? $(data[3]) : $element,
    	event: data[0],
    	words: data[1].split(','),
    	delimeter: data[2]
    }
    if( !elements[data.event] ) elements[data.event] = [];
    elements[data.event].push( data );
    // console.log('numerals', elements );
  }
}

registerPlugins(
  {
    "name": "numerals",
    "Constructor": Numerals,
    "selector": "[data-numerals]"
  }
);
