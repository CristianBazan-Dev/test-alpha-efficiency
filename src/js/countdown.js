let countdownTo = new Date("Oct 31, 2023 22:40:50").getTime();

let interval = setInterval(() => {
  let current = new Date().getTime();

  let dif = countdownTo - current;

  let days = Math.floor(dif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dif % (1000 * 60)) / 1000);

  let showDays = document.getElementById("days");
  let showHours = document.getElementById("hours");
  let showMinutes = document.getElementById("minutes");
  let showSeconds = document.getElementById("seconds");

  showDays.innerHTML = days;
  showHours.innerHTML = hours;
  showMinutes.innerHTML = minutes;
  showSeconds.innerHTML = seconds;

  if (dif < 0) {
    clearInterval(interval);
    const announce = document.querySelector(".offer-announce");
    announce.innerHTML = "¡The offer has ended! <br>Contact us to know more about our services."
    showDays.innerHTML = 0;
    showHours.innerHTML = 0;
    showMinutes.innerHTML = 0;
    showSeconds.innerHTML = 0;
  }
}, 1000);
