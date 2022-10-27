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

const personSwiper = new Swiper('.persons-swiper', {
  breakpoints: {
    414: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 2.0,
    },
    700: {
      slidesPerView: 2.25,
    },
    900: {
      slidesPerView:3,
    },
    1024: {
      slidesPerView: 4,
    }
  },
})

personSwiper.updateSize()
