const Btn = document.querySelectorAll("button");
const re = document.getElementById('rest');

for (let i = 0; i < Btn.length; i++) {
  const element = Btn[i];
  const joueur = element.innerHTML;
  element.addEventListener("click", () => {
    const robot = Btn[Math.floor(Math.random() * Btn.length)].innerHTML;
    let resultat = "";

    if (joueur === robot) {
      resultat = "Egalité";
    } else if (
      (joueur === "Pierre" && robot === "Ciseaux") ||
      (joueur === " Feuille" && robot === "Pierre") ||
      (joueur === "Ciseaux" && robot === "Feuille")
    ) {
      resultat = "Gagné";
    } else if (
      (joueur === "Puit" && robot === "Ciseaux") ||
      (joueur === "Puit" && robot === "Pierre") ||
      (joueur === "Feuille" && robot === "Puit")
    ) {
      resultat = "Gagné avec la technique secrette";
    } else {
      resultat = "Perdu";
    }
    rest = document.querySelector(".rest").innerHTML = `
    Joueur : ${joueur} </br>
    Robot : ${robot} </br>
    ${resultat}
    `;
  });
}



