$(document).ready(function() {
$(window).scroll(function(){
    if(this.scrolly > 20){
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");

    }
});
   $('menu-btn').click(function() {
   $('.navbar.menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
   });
});
