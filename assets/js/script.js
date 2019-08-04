$(document).ready(function(){
    var offset = 300;
    var duration = 500;
 

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('#goTopBtn').fadeIn(duration); 
        }
        else{
            $('#goTopBtn').fadeOut(duration); 
        }
    });
    $('#goTopBtn').click(function(){
        $('body,html').animate({scrollTop: 0 }, duration);
    });
});
 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation='';

         }else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.4}s`
         }

    burger.classList.toggle('toggle');
         
});
    
}
