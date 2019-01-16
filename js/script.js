'use strict'

var mySidebar = document.querySelector('.sidebar');

var myButton = document.getElementById('hamburger');

var myRightSide = document.querySelector('.col-12')

myButton.addEventListener('click', function(){
  mySidebar.classList.toggle('show');
});

myButton.addEventListener('click', function(){
  myRightSide.classList.toggle('col-10');
});