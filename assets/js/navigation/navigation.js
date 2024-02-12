document.addEventListener('DOMContentLoaded', function() {
    
    var nav = document.querySelector('.nav');
    var navhamburger = document.querySelector('.header__hamburger');
    
    navhamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
   
});
