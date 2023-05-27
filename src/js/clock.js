const clockTitle = document.querySelector(".js-clock");

function dDayForChristmas() {
  const now = new Date();
  const yaer = now.getFullYear();
  const date = String(now.getMonth()+1).padStart(2, "0");
  const hour = String(Math.floor((now / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((now / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((now / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${yaer}.${date}.${hour}.${minutes}.${seconds}`;
}
dDayForChristmas();
setInterval(dDayForChristmas, 900);
