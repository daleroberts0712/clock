const timer = setInterval(myTimer, 1000);
function myTimer(){
const time = document.querySelector('.time');
time.textContent = new Date().toLocaleTimeString();
}

const date = new Date();
const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WESNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const current = document.querySelector('#date li').innerHTML = days[date.getDay()];
