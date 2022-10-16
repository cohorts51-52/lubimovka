import '../pages/index.css';
import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.video-slider', {
  spaceBetween: 30,
  breakpoints: {
    414: {
      slidesPerView: 1.35,
    },
    768: {
      slidesPerView: 2.70,
    },
    1024: {
      slidesPerView: 3,
    }
  },
})
