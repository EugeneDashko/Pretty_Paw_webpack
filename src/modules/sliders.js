import {Swiper, Pagination, Autoplay} from "swiper";
const params = {
    spaceBetween: 20,
    loop: true,
    autoPlay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 1, // кол-во отображаемых файлов
    pagination: {
        el: '.swiper-pagination',
        enabled: true,
    },
    modules: [Autoplay, Pagination]
};
export const slidersInit = (selectorSlider, newParams) => {
    new Swiper (selectorSlider, {
        ...params,
        ...newParams,
    })
}