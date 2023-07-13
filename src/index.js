import './index.html';

//new modules:
import 'swiper/scss'; // из mobule swiper (импортировали стили для свайпера из библиотеки swiper)
import 'swiper/scss/pagination';// из mobule swiper
import './index.scss';
import { slidersInit } from './modules/sliders.js';
import { videoBackgroundInit } from './modules/videoBackGround.js';
import { menuControl } from './modules/menuControl.js';

//use modules
videoBackgroundInit();
menuControl();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
})

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: false
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 26,
          pagination: false
        },
        // when window width is >= 640px
        1240: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: false
        }
      }
})

