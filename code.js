const alarmvalue = document.getElementById("alarm-time");
const setalarm = document.getElementById("set-alarm-btn");
const snozzebutton = document.getElementById("snooze-btn");
const alarmSound = document.getElementById("alarm-sound");

let alarm_interval;
let snozzealarm;

setalarm.addEventListener("click", () => {
    const alarmTime = new Date(`2000-01-01T${alarmvalue.value}:00`);
    const now = new Date();

    let timesettoalarm = alarmTime.getTime() - now.getTime();
    if (timesettoalarm < 0) {
        timesettoalarm += 24 * 60 * 60 * 1000; 
    }

    alarm_interval = setTimeout(() => {
        alarmSound.play();
        snozzebutton.disabled = false;
        snozzealarm = setInterval(() => {
            alarmSound.pause();
            alarmSound.currentTime = 0;
            alarmSound.play();
        }, 9 * 60 * 1000); 
    }, timesettoalarm);
});

snozzebutton.addEventListener("click", () => {
    snozzebutton.disabled = true;
    clearInterval(snozzealarm);
    alarmSound.pause();
    alarmSound.currentTime = 0;
    setalarm.click();
});

