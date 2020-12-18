$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            loop:true
        },
        600:{
            items:1,
            nav:false,
            loop:true
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})
  

$(function(){
        $('#menu').slicknav({
            prependTo: '.mobile_menu',
            allowParentLink:true,
        });
    });
