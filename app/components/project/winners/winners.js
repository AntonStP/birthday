import $ from "jquery";
import {
  registerPlugins,
  Plugin
} from "../../framework/jquery/plugins/plugins";
import '../../framework/template-engine/template-engine';
// import corsProxyRequest from "../utils/cors-proxy";

class Winners extends Plugin {
  // eslint-disable-next-line no-useless-constructor
  constructor($element) {
    super($element);
    this.$element = $element;

    const data = $element.data('winners');
    if( !data ) return;

    const sepIndex = data.indexOf('|');
    let url = data;
    let initDelay = 0;
    if( sepIndex !== -1 ){
      initDelay = parseInt(data.substr(0, sepIndex ));
      url = data.substr(sepIndex+1, data.length );
    }
    setTimeout(()=>{
      this.load( url );
      console.log('winners-startload');
    }, initDelay * 1000 );
    console.log('winners-init', initDelay, url );

  }

  load(url){
    /*
    corsProxyRequest( url +'&count=12', (data)=>{
      console.log('winners-data', data );
      $('.winners__list-tpl', this.$element).templateEngine(data);
      $('.winners__carousel-tpl', this.$element).templateEngine(data);
    });
    */


    $.getJSON(
      'http://5x36.stoloto.ru/exapim.php?url='+url,
      // 'https://dev.peppers-studio.ru/2020/200528/exapim.php?url='+url,
      // 'exapim.php?url='+url,
      (data)=>{
        const dt = data.contents;
        dt.persons.map((e)=>{
          if(e.draw) e.drawClear = e.draw.split('-')[0];
          return e;
        });
        console.log('winners-data', data, dt );
        $('.winners__list-tpl', this.$element).templateEngine(dt);
        $('.winners__carousel-tpl', this.$element).templateEngine(dt);
        $('.feedback__list-tpl').templateEngine(dt);
        $('.feedback__carousel-tpl').templateEngine(dt);
      }
    );

  }
}

registerPlugins({
  name: "winners",
  Constructor: Winners,
  selector: ".winners"
});
