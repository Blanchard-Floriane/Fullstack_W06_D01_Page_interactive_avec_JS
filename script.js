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
let greyButton = document.getElementsByClassName('btn-secondary')[0];

greyButton.addEventListener('click', function() {
  let allCards = document.body.querySelectorAll(".col-md-4"); 
  //ici getElement ne fonctionne pas + attention à bien prendre le contener le plus proche de la carte
  //en mettant mon code dans ma fonction, même si mes cards sont mélangées, la fonction s'applique toujours
  let lastCard = allCards[allCards.length - 1]; //_-1 dans un tableau prend le dernier élément
  lastCard.parentNode.insertBefore(lastCard, allCards[0]); //en 
});


//Fonctionnalité 8
let blueButton = document.getElementsByClassName('btn-primary')[0];
blueButton.setAttribute('href', '#'); //pour ne plus rediriger vers le site de the hacking project

blueButton.addEventListener('click', function() {
  let allCards = document.body.querySelectorAll(".col-md-4"); 
  let firstCard = allCards[0]; //sélectionne la 1ère carte
  firstCard.parentNode.insertBefore(firstCard, allCards[allCards.length -1].nextSibling); 
  //il faut ajouter .nextSibling sinon la carte ne va jamais en dernière position 
});

//Fonctionnalité 9
