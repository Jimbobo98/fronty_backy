const button = document.getElementById("myBtn");
const coin = document.getElementById("coin");

button.addEventListener("click", () => {

  coin.classList.remove("flipping-heads", "flipping-tails");
  
  // Tvangs animation reset
  coin.classList.add("reset");
  void coin.offsetWidth; 
  coin.classList.remove("reset");

  const n = Math.floor(Math.random() * 2) + 1;
  coin.classList.add(n === 1 ? "flipping-heads" : "flipping-tails");
});