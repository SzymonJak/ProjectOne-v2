'use strict'

var navLeft = document.querySelector('.navLeft');

var mySidebar = document.getElementById('hamburger');

mySidebar.addEventListener('click', function(){
  navLeft.classList.toggle('show');
});


var addNewButtons = document.getElementsByClassName('btn-attract');
var addNewModal = document.getElementById('myModal');

Array.prototype.forEach.call(addNewButtons,function(item) {
  item.addEventListener('click', function() {
    openModal(addNewModal);
  }); 
})
// addNewButtons.map(function(item) {
//   item.addEventListener('click', openModal); 
// })

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
});

function openModal(modal) {
  console.log(modal); 
  document.querySelector('#overlay').classList.add('show')
  modal.classList.add('show')
}

var ctx = document.getElementById('myChart');
if (ctx) {
  ctx.getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: '#8dbec8',
      borderColor: '#8dbec8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: "FTD",
      backgroundColor: '#f29e4e',
      borderColor: '#f29e4e',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: "Earned",
      backgroundColor: '#71b374',
      borderColor: '#71b374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
});
}