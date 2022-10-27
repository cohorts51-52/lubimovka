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

function openPopup(){
  popup.classList.add('popup_active');
  document.addEventListener('click', handleClickIconCLose);
  document.addEventListener('keyup', handleEscClose);
}

function closePopup() {
  popup.classList.remove('popup_active');
  document.addEventListener('click', handleClickIconCLose);
  document.removeEventListener('keyup', handleEscClose);
}

function handleClickIconCLose (e) {
  if (e.target.classList.contains('popup') || e.target.classList.contains('popup__icon-close')) {
    closePopup();
  };
}

function handleEscClose (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

buttonBurgerMenu.addEventListener('click', openPopup)
