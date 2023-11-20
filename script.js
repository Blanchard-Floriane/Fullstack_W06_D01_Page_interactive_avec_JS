//Fonctionnalité 1 : 
let clickerFooter = document.getElementsByTagName("footer")[0];
let numFooterClick = 0

let onFooterClick = function() {
  numFooterClick++
  console.log("Clic numéro " + numFooterClick);
};

clickerFooter.addEventListener("click", onFooterClick);

//Fonctionnalité 2
let navbarHeader = document.getElementById('navbarHeader');
let navbarToggler = document.querySelectorAll('button.navbar-toggler')[0]; //[0] sélectionne le 1er élément de la NodeListaccède au 1er élément trouvé

navbarToggler.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse"); //toggle fait que si la classe existe elle sera supprimée, si elle n'existe pas il l'ajoute
});

//Fonctionnalité 3
let firstCard = document.getElementsByClassName('card')[0];
let editBtnFirstCard = document.querySelectorAll('button.btn-outline-secondary')[0];

editBtnFirstCard.addEventListener("click", function() {
  firstCard.style.color = "red";
});

//Fonctionnalité 4
let secondCard = document.getElementsByClassName('card')[1];
let editBtnSecondCard = document.querySelectorAll('button.btn-outline-secondary')[1];

editBtnSecondCard.addEventListener("click", function() {
  if (secondCard.style.color === "green"){
    secondCard.style.color = "#212529";
  }
  else {
    secondCard.style.color = "green";
  }
});

//Fonctionnalité 5
let header = document.querySelector('header');
let linkBoostrap = document.querySelector('link');

let enabled = true;

header.addEventListener('dblclick', function() {
  if (enabled) {
    linkBoostrap.disabled = true;
  }
  else {
    linkBoostrap.disabled = false;
  }
  enabled = !enabled;
});

//Fonctionnalité 6


//Fonctionnalité 7
//Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris `==>`, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

//**Indice :** Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

//**Petite remarque :** tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.
