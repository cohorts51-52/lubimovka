import '../pages/index.css';
import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.two-video-slider', {
  spaceBetween: 30,
  breakpoints: {
    414: {
      slidesPerView: 1.35,
    },
    768: {
      slidesPerView: 2,
    },
  },
})

new Swiper('.three-video-slider', {
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

new Swiper('.cards-piece-slider ', {
  spaceBetween:30,
  slidesPerView:'auto'
})
