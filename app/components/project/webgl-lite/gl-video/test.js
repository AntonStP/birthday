/* eslint-disabled */
window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    const $glVideo = $('.gl-video');

    const glVideoComponent = $glVideo.data('glvideo');
    console.log('TEST: glVideoComponent', glVideoComponent );

    // Get the Source Video and append it to DOM
    $('.video-input').append( glVideoComponent.video );

    $glVideo
      .click(()=>{
        if( glVideoComponent.enabled ){
          glVideoComponent.pause(); // Pause Video
        }else{
          glVideoComponent.play(); // Play Video
        }
      });


  },100);
});
