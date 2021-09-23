const mainSlider = new Swiper('.main__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 210,
  
});
const leftSlider = new Swiper('.left__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  
});
const rightSlider = new Swiper('.right__slider', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
});

let cookiesBtn = document.querySelector('.cookies__btn');
let cookies = document.querySelector('.cookies');

cookiesBtn.addEventListener('click', () =>{
  cookies.style.display = 'none';
});

let burgerBtn = document.querySelector('.burger'); 
let burgerMenu = document.querySelector('.burger__menu'); 

burgerBtn.addEventListener('click', () =>{
  burgerMenu.classList.toggle('active'); 
  burgerBtn.classList.toggle('open');
});

