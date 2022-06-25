const grid = document.querySelector(".grid");

const character = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";
const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled_card");
  if (disabledCards.length === 18) {
    alert("Você venceu!#Em desenvolvimento");
  }
};

const checkCards = () => {
  const firsCharacter = firstCard.getAttribute("data_character");
  const secondCharacter = secondCard.getAttribute("data_character");
  if (firsCharacter == secondCharacter) {
    firstCard.firstChild.classList.add("disabled_card");
    secondCard.firstChild.classList.add("disabled_card");

    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal_card");
      secondCard.classList.remove("reveal_card");
      firstCard = "";
      secondCard = "";
    }, 500);
  }
};

const reveaalCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal_card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal_card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal_card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url(../media/${character}.jpg)`;

  card.appendChild(front);
  card.appendChild(back);
  card.addEventListener("click", reveaalCard);
  card.setAttribute("data_character", character);
  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...character, ...character];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
};
loadGame();
