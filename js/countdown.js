const startingMinutes = 30;
let time = startingMinutes * 60;

const countdounEl = document.getElementById('countdown__dellivery');

setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;


    countdounEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    if (time <= 0 || time < 1) {
        endTime();
        return;

    }

}

function endTime() {
    countdounEl.innerHTML = 'Delivery completed';
}











