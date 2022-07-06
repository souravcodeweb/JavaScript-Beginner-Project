const dayE1 = document.getElementById('day');
const hourE1 = document.getElementById('hour');
const minutE1 = document.getElementById('minut');
const secondE1 = document.getElementById('second');


const newYearTime = new Date("jan 1, 2023 00:00:00").getTime()

updateCountdown()

function updateCountdown (){
    const now = new Date().getTime();
    const gap = newYearTime - now
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayE1.innerText = d;
    hourE1.innerText = h;
    minutE1.innerText = m;
    secondE1.innerText = s;

    setTimeout(updateCountdown, 1000);
}