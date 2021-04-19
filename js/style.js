$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $('.navbar').css('background-color',"#f6ac0e")
        }else{
            $('.navbar').css('background-color',"initial")
        }
    })
})
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });