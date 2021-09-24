const mainSlider = new Swiper('.main__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    320: {
      spaceBetween: 20
    },
    480: {
      spaceBetween: 40,
    },
    1000: {
      spaceBetween: 160,
    },
    1100: {
      spaceBetween: 210,
    }
  },

});
const mainSliderPage = new Swiper('.main__slider-page', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    320: {
      spaceBetween: 20
    },
    480: {
      spaceBetween: 40,
    },
    1100: {
      spaceBetween: 50,
    }
  },

});
const leftSlider = new Swiper('.left__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },

});
const leftSliderPage = new Swiper('.left__slider-page', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },

});
const rightSlider = new Swiper('.right__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
});
const rightSliderPage = new Swiper('.right__slider-page', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
});

let cookiesBtn = document.querySelector('.cookies__btn');
let cookies = document.querySelector('.cookies');

cookiesBtn.addEventListener('click', () => {
  cookies.style.display = 'none';
});

let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
});