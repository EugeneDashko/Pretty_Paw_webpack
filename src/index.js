import './index.html';

//new modules:
import 'swiper/scss'; // из mobule swiper (импортировали стили для свайпера из библиотеки swiper)
import 'swiper/scss/pagination';// из mobule swiper
import './index.scss';
import { sliderInit } from './modules/sliders';

//use modules
sliderInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
})

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;