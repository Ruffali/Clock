// digital clock

setInterval(displayclock, 500);

function displayclock() {
    let time = new Date();
    let hours = time.getHours(); //%12
    let minutes = time.getMinutes();
    let second = time.getSeconds();
    let am = 'AM'


    if (hours > 12) {
        am = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (second < 10) {
        second = '0' + second;
    }

    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + second + ' ' + am;
}

//digital clock    

let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');

function initClock(){
    let time = new Date();
    let hour = time.getHours()%12;
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let hourDeg = (hour * 30 ) + (0.5 * minute );
    let minuteDeg = (minute * 6) ;
    let secondDeg = (second * 6);

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';

    setTimeout(initClock, 100);
};
initClock();


