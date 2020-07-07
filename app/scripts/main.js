// import 'babel-polyfill';
import '../components/project/project';
import {mobileLinksManager} from "../components/project/utils/mobileLinksManager";
// import {anchorSmoothScroll} from "../components/project/utils/anchorSmoothScroll";
import isMobile from 'ismobilejs';
import $ from 'jquery';
import '../components/project/utils/video-progress/video-progress';
import {fixLinks, getBaseUrlParams} from "../components/project/utils/url";

global.jQuery = global.$ = $;
global.isMobile = isMobile.any;

$.when(isDocumentReady())
  .done(onDocumentReady);

function onDocumentReady() {

  if ($.fn.initPlugins) {
    $(document.body).initPlugins();
  }

  if ($.fn.initPlugins) {

    $(document.body).initPlugins();


    // OS check
    // console.log('ismobile', isMobile);
    if(isMobile.apple.device) $('body').addClass('_ios');
    else if(isMobile.android.device) $('body').addClass('_android');



    // URL AND LINKS
    setTimeout(()=>{
      mobileLinksManager();
      getBaseUrlParams();
      fixLinks( "m.stoloto.ru" );
      fixLinks( "stoloto.ru", true );
    }, 600 );





  }

  // >>> Delayed Video SRC >>>
  $('[data-delayed-video]').each((i,e)=>{
    // console.log(">>>>>", i, e, e.dataset.delayedVideo );
    var data = (e.dataset.delayedVideo || '').split('|');
    if( !data || data.length<2 ) return;
    var delay = ~~(parseFloat(data.shift()*1000));
    // console.log('->>>', delay);
    setTimeout(()=>{
      var elements = '';
      data.forEach((ee)=>{
        elements+='<source src="'+ee+'" type="video/'+ee.split('.').pop()+'">';
      });
      e.innerHTML = elements;
      const $e = $(e);
      if($e.data('delayed-video-show')==='none'){
        $e.hide();
      }else {
        $e.fadeOut(0).fadeIn();
      }
    }, delay );
    //
  });
  // <<< Delayed Video SRC <<<

  $(document.documentElement).trigger("document:ready");

}


function isDocumentReady() {
  let def = $.Deferred();

  $(document).ready(()=>def.resolve());

  return def.promise();
}
