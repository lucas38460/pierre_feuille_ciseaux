const Btn = document.querySelectorAll("button");

for (let i = 0; i < Btn.length; i++) {
    const element = Btn[i];
    let resultat = "";
    element.addEventListener('click', ()=>{
      const robot = Btn[Math.floor(Math.random() * Btn.length)];
      const joueur = element;

      if(joueur === robot) {
        resultat = "Égalité";
      } else if () {
        resultat = "Vous avez gagné";
      } else  {
        resultat = "Vous avez perdu"
      }
    });
}