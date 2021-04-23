'use strict';

let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//Au click du bouton sélectionner :
//  1. vérifie si un nombre a été rentré
//  2. Condition : si le nombre !== au nombre à trouver :
//      - Inscrire le texte (nombre trop grand ou trop petit)
//      - Décrémenter de 1 le score
//  3. Si le nombre = le nombre à trouver :
//      - Changer le texte
//      - changer la couleur de fond
//      - Inscrire le nombre à la place de : ?
//      - Vérifier le highscore : si le nouveau score est supérieur : le changer sinon laisser l'ancien score.

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const decreaseScore = () => {
  score--;
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    document.querySelector('body').style.backgroundColor = '#df2727';
    displayMessage('Perdu !');
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').textContent = number;
  }
};

const saveHighscore = () => {
  if (score > highscore) highscore = score;
  document.querySelector('.highscore').textContent = highscore;
};

const checkNumber = () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) displayMessage('Devine un nombre !');

  if (guess < number) {
    displayMessage('Trop petit !');
    decreaseScore();
  } else if (guess > number) {
    displayMessage('Trop grand !');
    decreaseScore();
  } else {
    displayMessage('Bien joué !');
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    saveHighscore();
  }
};

const restart = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Commençons...');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
  number = Math.floor(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', checkNumber);

document.querySelector('.again').addEventListener('click', restart);
