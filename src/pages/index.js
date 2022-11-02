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

function findVideos() {
  let videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL(media);

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video_enabled');
}

function parseMediaURL(media) {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();
