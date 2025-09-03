const front = document.getElementById("front");
const back = document.getElementById("back");
const button = document.getElementById("myBtn");

button.addEventListener("click", () => {
  const n = Math.floor(Math.random() * 2) + 1;

  if (n === 1) {
    front.style.display = "flex";
    back.style.display = "none";
  } else {
    back.style.display = "flex";
    front.style.display = "none";
  }
});
