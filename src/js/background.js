const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.getElementById("backgroundBtn");

const changeColor = () => {
  let random1 = Math.floor(Math.random() * colors.length);
  let random2 = Math.floor(Math.random() * colors.length);
  const backgroundColors = [colors[random1], colors[random2]];
  localStorage.setItem("backgroundColors", JSON.stringify(backgroundColors));

  document.body.style.background = `linear-gradient(to right, ${backgroundColors[0]}, ${backgroundColors[1]})`;
};

btn.addEventListener("click", changeColor);

window.addEventListener("DOMContentLoaded", () => {
  const storedColors = localStorage.getItem("backgroundColors");
  if (storedColors) {
    const backgroundColors = JSON.parse(storedColors);
    document.body.style.background = `linear-gradient(to right, ${backgroundColors[0]}, ${backgroundColors[1]})`;
  }
});