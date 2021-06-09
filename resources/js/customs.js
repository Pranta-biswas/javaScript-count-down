//  get Elements By Id

const year = document.getElementById('year');
const day = document.getElementById('day');
const hours = document.getElementById('hours');
const minit = document.getElementById('minit');
const seconds = document.getElementById('seconds');

// current year ;

const currentYear = new Date().getFullYear();
const countDownYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);


// create a function

function countYear(){
    const currentTime =  new Date();
    const diff = countDownYear - currentTime; // result in millisecond
 
    // millisecond convert day , minite , hour , second 
    const s = Math.floor((diff / 1000) % 60);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const d = Math.floor((diff / 1000 / 60 / 60 /24));

    seconds.innerHTML = (s < 10)? '0' + s : s;
    minit.innerHTML = (m < 10)? '0' + m : m;
    hours.innerHTML = (h < 10)? '0' + h : h;
    day.innerHTML = (d < 10)? '0' + d : d;
   
}

setInterval(countYear,1000);
year.innerHTML = countDownYear.getFullYear();
// countYear();




