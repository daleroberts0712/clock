const time = setInterval(timer, 1000);
function timer(){

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

hours.innerHTML = new Date().getHours();
minutes.innerHTML = new Date().getMinutes();
seconds.innerHTML = new Date().getSeconds();
}

const date = new Date();
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WESNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const current = document.querySelector('#date li').innerHTML = days[date.getDay()];






