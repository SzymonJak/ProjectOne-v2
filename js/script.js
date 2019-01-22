'use strict'

var navLeft = document.querySelector('.navLeft');

var mySidebar = document.getElementById('hamburger');

mySidebar.addEventListener('click', function(){
  navLeft.classList.toggle('show');
});