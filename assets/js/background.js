const colorPickerWrap = document.querySelector(".color-picker-wrap");
const colorPicker = document.getElementById("color-picker");
const body = document.querySelector("body");
const startBtn = document.querySelector("#bottom-bar button");

const BG_KEY = "bg";

const colors = [
  "000000", "7f7f7f", "74160f", "7a8029", "377e22",
  "398183", "030175", "771578", "7f7c52", "1a3941",
  "3879e4", "1b3d7a", "3b0af1", "754419",
  "fdfdfd", "c1c1c1", "dc3124", "faf856", "74f94c",
  "73f6f9", "0100e7", "e432f2", "f4f5a9", "75fa8a",
  "a5faf7", "827df0", "e93482", "ee874e"
];

for(let i = 0; i < colors.length; i++) {
  let colorLi = document.createElement("li");
  colorPicker.appendChild(colorLi);
  colorLi.style.backgroundColor = "#" + colors[i];
  colorLi.id = `color${colors[i]}`;

  colorLi.addEventListener("click", bodyColorChange);
}

function openStart() {
  colorPickerWrap.classList.toggle(HIDDEN_CLASSNAME);
}
function bodyColorChange(event) {
  const colorOfLi = event.target.id.replace("color","");
  body.style.backgroundColor = "#" + colorOfLi;
  localStorage.setItem(BG_KEY, colorOfLi);
}

const savedBg = localStorage.getItem(BG_KEY);
body.style.backgroundColor = "#" + savedBg;
startBtn.addEventListener("click", openStart);
