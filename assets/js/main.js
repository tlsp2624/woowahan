// @gnb영역
$('.header .sub li:first-child a').addClass('active');

$('.header .gnb .nav-item').hover(function(){
  if($(this).find('ul').length){
    $('.header').addClass('on')
    $(this).find('.sub').addClass('on')
  }
},function(){
  $('.header').removeClass('on')
  $('.header .sub').removeClass('on')
})

$('.header .sub li').hover(function(){
  $(this).find('a').addClass('active')
  $(this).siblings().find('a').removeClass('active')
},function(){
  $('.header .sub a').removeClass('active')
  $('.header .sub li:first-child a').addClass('active');
});

// @모바일 asaid 영역
$('.header-wrap .btn-menu').click(function(){
  $('.header .aside').addClass('on');
  $('body').addClass('hidden');
})
$('.aside .top-wrap .btn-close').click(function(){
  $('.header .aside').removeClass('on');
  $('body').removeClass('hidden');
})


// @모바일 asaid sub영역
$('.aside .menu-item').click(function(e){
  e.preventDefault();
  $(this).toggleClass('on');
})


// @visual 영역
const mainSlide = new Swiper('.sc-visual .swiper', {
  autoplay:{
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  loop: true,
})

// @vision video 영역
const vision = $('.sc-vision video').get(0);
$('.sc-vision .control').click(function(){
  if ($(this).hasClass('on')) {
    vision.currentTime=0;
    vision.play();    
  } else {
    vision.pause();
  }
  $(this).toggleClass('on')
})


// @stroy 영역
const storySlide = new Swiper('.sc-story .swiper',
{
  autoplay: {
      delay: 0,
      disableOnInteraction : false,
   },
   loop:true,
   speed:3000,
  slidesPerView:'auto',
  spaceBetween:16,
  freeMode: true,
})

$('.sc-story .swiper-slide').hover(function(){
  storySlide.autoplay.stop();
},function(){
  storySlide.autoplay.start();
})


// @site 영역
$('.footer .btn-site').click(function(){
  $('.site-area .site-list, .arrow').toggleClass('on')
})

// @site select외 선택시 닫힘
$(document).click(function(e){
  if ($('.site-area').has(e.target).length === 0) {
    $('.footer .site-area .site-list').removeClass('on')
  }
})