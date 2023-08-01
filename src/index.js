import './index.html';
import './page.html';

//new modules:
import 'swiper/scss'; // из mobule swiper (импортировали стили для свайпера из библиотеки swiper)
import 'swiper/scss/pagination';// из mobule swiper
import './index.scss';
import { slidersInit } from './modules/sliders.js';
import { videoBackgroundInit } from './modules/videoBackGround.js';
import { menuControl } from './modules/menuControl.js';
import { locationHover } from './modules/locationHover.js';
import { initScrollTopButton } from './modules/scrollTopButton.js';
import { pageControlInit } from './modules/pageControl.js'
//use modules
videoBackgroundInit();
menuControl();
locationHover();
initScrollTopButton('arrow-top');
pageControlInit();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
        enabled: true,
    }
});

const careerImageItems = document.querySelectorAll('.career__image-item')
careerImageItems.forEach((item, index)=> {
  item.classList.add(`career__image-item_${index % 2 ? 'even' : 'odd'}`)
})

slidersInit('.career__slider', {
    pagination: {
        el: '.career__slider-pagination',
        enabled: true,
    },
    breakpoints: {
        // when window width is >= 320px
        576: {
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: {
            enabled: false,
          }
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 26,
          pagination: {
            enabled: false,
          }
        },
        // when window width is >= 640px
        1240: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: {
            enabled: false,
          }
        }
      }
})

