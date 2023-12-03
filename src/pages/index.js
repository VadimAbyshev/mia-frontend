const swiper = new Swiper('.swipe__images .swiper-container', {
  loop: true,

  direction: 'vertical', 

  slidesPerView: 1, 
  spaceBetween: 32,
  mousewheel: true,
 
  clickable: true,
  pagination: {
    el: '.swiper-pagination',
  },
  
  breakpoints: {// настройки для разных разрешений
    768: {
        slidesPerView: 'auto',
        spaceBetween: 8
    },
    1050: {
        slidesPerView: 1,
        spaceBetween: 8
    },
    1060: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerView: 'auto',
    },
    1700: {
      slidesPerView: 'auto',
      spaceBetween: 5,
  }
},
// autoplay: {
//   delay: 1000,
// },

});

const swiper1 = new Swiper('.product__images .swiper-container', {
  direction: 'vertical', 

  slidesPerView: 1, 
  spaceBetween: 32,
  mousewheel: true,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {// настройки для разных разрешений
    300: {
      slidesPerView: 4,
      spaceBetween: 8,
      direction: 'horizontal', 
      
    },
    1050: {
        slidesPerView: 4,
        spaceBetween: 8,
    },
    1060: {
      slidesPerView: 4,
        spaceBetween: 20,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 8,


  }
},
// autoplay: {
//   delay: 1000,
// },

});

const swiper2 = new Swiper('.analogic__swiper', {
  direction: 'horizontal', 

  slidesPerView: 10, 
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  clickable: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {// настройки для разных разрешений
    768: {
        slidesPerView: 3,
        spaceBetween: 8
    },
    1050: {
        slidesPerView: 3,
        spaceBetween: 24,
    },
    1060: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerView: 'auto',
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 24,

  }
},
// autoplay: {
//   delay: 1000,
// },

});

const accordion = document.querySelector('.accordion');
const accordionOpenButton = document.querySelectorAll('.accordion-button');

const burgerButton = document.querySelector('.header__burger')

const  buergerMenu = document.querySelector('.header__nav')


function openBurgerMenu(){
  buergerMenu.classList.add('header__nav-open')
}
function closeBurgerMenu(){
  buergerMenu.classList.remove('navigation_nav_open')
}




const accordionCatMobile = document.querySelector('.accordion-mobile');
const accordionOpenTitleButton = document.querySelector('.categories__button-title');


const accordionProductButton = document.querySelectorAll('.product__details-button')

accordionProductButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
 
      elem.parentNode.querySelector('.accordion').classList.toggle('accordion_opened')
      elem.parentNode.querySelector('.product__details-button').classList.toggle('product__details-button-active')

  })
})

accordionOpenButton.forEach((elem)=>{
  elem.addEventListener('click',()=>{
 
      elem.parentNode.querySelector('.accordion').classList.toggle('accordion_opened')

  })
})






burgerButton.addEventListener('click', openBurgerMenu)


const acc = document.querySelectorAll('.accordion');


const searchInput = document.querySelector('.header__form')
const openSearchButton = document.querySelector('.open-search')
const closeSearchButton = document.querySelector('.close-search')

function openSearch(){
  searchInput.classList.add('open-search')
}
function closeSearch(){
  searchInput.classList.remove('open-search')
}

openSearchButton.addEventListener('click', openSearch)
closeSearchButton.addEventListener('click', closeSearch)


// openSearchButton.forEach((elem)=>{
//   elem.addEventListener('click',()=>{
 
//       elem.parentNode.querySelector('.header__form').classList.add('open-search')

//   })
// })

// closeSearchButton.forEach((elem)=>{
//   elem.addEventListener('click',()=>{
 
//       elem.parentNode.querySelector('.header__form').classList.remove('open-search')

//   })
// })


if(accordionOpenTitleButton){
if (window.innerWidth > 690) {
  accordionOpenTitleButton.disabled = true;
} else {
  accordionOpenTitleButton.disabled = false;
}
}