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

const buttonBurgerMenu = document.querySelector('.header__menu-mobile');
const popup = document.querySelector('.popup');



buttonBurgerMenu.addEventListener('click', ()=>{
  console.log('открой бургер');
  popup.classList.add('popup_active');
})
