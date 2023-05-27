const loginForm = document.getElementById("loginForm");
const loginInput = document.querySelector("#loginForm input");
const title = document.querySelector("#title");

const HIDDEN_CALSS = "hidden";
const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  title.innerText = `Hello ${username}`;
  title.classList.add("changeMood");
  title.classList.remove(HIDDEN_CALSS);
}

function handleLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CALSS);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}
loginForm.addEventListener("submit", handleLoginSubmit);

if (savedUserName === null) {
  title.innerText = "Your Chorme App";
  loginForm.classList.remove(HIDDEN_CALSS);
} else {
  paintGreetings(savedUserName);
}
