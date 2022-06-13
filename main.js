const Btn = document.querySelectorAll("button");
const p = document.getElementById('choice');
let resultat = "";
let timer = 0;

let timerVal = setInterval(() => {
  if (timer === 6) {
    console.log(resultat);
    clearInterval(timerVal);
  } else {
    timer++;
  }
}, 1000);

for (let i = 0; i < Btn.length; i++) {
  const element = Btn[i];
  const joueur = element.textContent;
  element.addEventListener("click", () => {
    p.innerHTML = `${element.textContent}`;
    const robot = Btn[Math.floor(Math.random() * Btn.length)].textContent;

    if (joueur === robot) {
      resultat = "Egalité";
    } else if (
      (joueur === "pierre" && robot === "ciseaux") ||
      (joueur === "feuille" && robot === "pierre") ||
      (joueur === "ciseaux" && robot === "feuille")
    ) {
      resultat = "Gagné";
    } else {
      resultat = "Perdu";
    }
  });
}