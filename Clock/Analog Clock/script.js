let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');

clockTick = () => {
    let date = new Date();
    let seconds = date.getSeconds() / 60;
    let minutes = date.getMinutes() / 60;
    let hours = date.getHours() / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);

}

rotateClockHand = (e, rotation) =>{
    e.style.setProperty('--rotate', rotation * 360)
}

setInterval(clockTick, 1000);