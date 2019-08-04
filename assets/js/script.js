
 window.onscroll = () =>{
   var topBtn = document.getElementById('goTopBtn');
   if(window.pageYOffset >= 300){
      console.log(topBtn);
       topBtn.style.display = "block" ;  
   }
   else{
      topBtn.style.display = "none" ;  
   }
   topBtn.addEventListener("click",function(){
      window.scrollTo(0,0);
      window.scroll({behavior:'smooth'})
   });
 };
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
