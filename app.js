import cards from "./cards.js";

console.log(cards[0]);

function generate_card_html(card) {
  return `<div class="flip-card-inner">
        <div class="flip-card-front">
              <h1 class="Notion"> Notion </h1>
              <p class="Question"> ${card.question} </p>
        </div>
        <div class="flip-card-back">
              <h1 class="Définition"> Définition </h1>
              <p class="Réponse"> ${card.reponse} </p>
        </div>
  </div>
  <div class="barre">
        <button class="bouton1"> je le sais  </button>
        <button class="bouton2"> à moitié  </button>
        <button class="bouton3"> pas du tout  </button>
  </div>`
}

document.getElementsByClassName("flip-card")[0].innerHTML = generate_card_html(cards[0]);
