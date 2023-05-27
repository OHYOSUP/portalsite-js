const clockTitle = document.querySelector(".js-clock");

function dDayForChristmas() {
  const now = new Date();
  const yaer = now.getFullYear();
  const month = String(now.getMonth()+1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const hour = String(Math.floor((now / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((now / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((now / 1000) % 60)).padStart(2, "0");
  clockTitle.innerHTML = `
  <span>${yaer}-${month}-${date}</span></br>
  <span>${hour> 12 ? `오후 ${hour}` : `오전${hour}`}:${minutes}:${seconds}</span>
  
  `;
}
dDayForChristmas();
setInterval(dDayForChristmas, 900);
