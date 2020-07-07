/* eslint-disable */
import $ from 'jquery';
import {registerPlugins, Plugin} from '../../../framework/jquery/plugins/plugins.js';

import Swiper from "swiper";

const PRESETS = {
  default: {
    // preloadImages: false,
    // // Enable lazy loading
    // lazy: true,
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    centeredSlides: true,
    pagination: {
      el: '.carousel__pagination',
      clickable: true
    },
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  },

  feedbackDesktop:{
    loop: false,
    centeredSlides: false,
    slidesPerView: 'auto',
    direction: 'vertical',
    navigation: {
      nextEl: ".feedback__list-btn_next",
      prevEl: ".feedback__list-btn_prev"
    }
  },
  feedbackMobile:{
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".feedback__list-btn_next",
      prevEl: ".feedback__list-btn_prev"
    }
  },
  mobile:{
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".carousel__btn_next",
      prevEl: ".carousel__btn_prev"
    }
  },

  desktop:{
    loop: false,
    slidesPerView: 3,
    slidesPerColumn: 2,
    centeredSlides: false,
    navigation: {
      nextEl: ".carousel__btn_next",
      prevEl: ".carousel__btn_prev"
    }
  },
  free_scroll: {
    freeMode: true
  }
};

export class Carousel extends Plugin {
  constructor($element) {
    super($element);
    let data = $element.data('carousel');
    if (typeof data === 'string') {
      data = PRESETS[data];
    }

    $element.on("get-carousel", (e)=>{
      e.$sender.trigger({type:"return-carousel", carousel:this.carousel});
    });

    this.carousel = new Swiper(
      $element.get(0),
      $.extend({}, PRESETS.default, data)
    );
  }

  destroy(){
    super.destroy();
    if (this.carousel)
      this.carousel.destroy();
    this.carousel = null;
  }

}

registerPlugins(
  {
    'name': 'carousel',
    'Constructor': Carousel,
    'selector': '.carousel'
  }
);
