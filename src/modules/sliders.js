import {Swiper, Pagination, Autoplay} from "swiper";
const params = {
    spaceBetween: 20,
    loop: true,
    autoPlay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    sliderPerView: 1, // кол-во отображаемых файлов
    pagination: {
        el: '.swiper-pagination',
    },
    modules: [Autoplay, Pagination]
};
export const sliderInit = (selectorSlider, newParams) => {
    new Swiper (selectorSlider, {
        ...params,
        ...newParams,
    })
}