function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close"); // On sélectionne l'élément HTML qui représente le bouton de fermeture de la modale à l'aide de la méthode querySelector()

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal); // On ajoute un événement de clic sur le bouton de fermeture en utilisant la méthode addEventListener()

// close modal function
function closeModal() {
  modalbg.style.display = "none";
} // On créé une fonction closeModal() qui modifie la propriété display de l'élément HTML représentant la modale pour la masquer en utilisant la valeur none
