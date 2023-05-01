/*jslint browser:true */

function editNav() {
  "use strict";
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // On sélectionne l'élément HTML qui représente la modale (fond + form) à l'aide de la méthode querySelector()
const modalBtn = document.querySelectorAll(".modal-btn"); // On sélectionne le bouton d'ouverture de modale ("Je m'inscris")
const modalClose = document.querySelector(".close"); // On sélectionne le bouton de fermeture de la modale (x) à l'aide de la méthode querySelector()
// const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const modalConfirmation = document.querySelector(".bground-confirmation");
const modalCloseConfirmation = document.querySelector(
  ".bground-confirmation .close"
); // On sélectionne l'élément HTML qui représente le bouton de fermeture de la modale à l'aide de la méthode querySelector()
const modalCloseBtnConfirmation = document.querySelector(
  ".close-btn-confirmation"
); // On sélectionne le bouton "Fermer" de la modale de confirmation

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // On ajoute un event listener sur les 2 boutons de la 'hero section' (1 bouton est visible et l'autre non en fonction de la résolution de l'écran < 768px >)
// La fonction callback est appelée au clique et permet d'afficher la modale, qui change son display 'none' en display 'block'

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal); // On ajoute un événement de clic sur le bouton de fermeture en utilisant la méthode addEventListener()

// close modal confirmation event
modalCloseConfirmation.addEventListener("click", closeModalConfirmation); // On ajoute un événement de clic sur le bouton de fermeture en utilisant la méthode addEventListener()
modalCloseBtnConfirmation.addEventListener("click", closeModalConfirmation); // On ajoute un événement de clic sur le bouton de fermeture en utilisant la méthode addEventListener()

// close modal function
function closeModal() {
  modalbg.style.display = "none";
  // modalConfirmation.style.display = "none";
} // On créé une fonction closeModal() qui modifie la propriété display de l'élément HTML représentant la modale pour la masquer en utilisant la valeur none

// close modal function
function closeModalConfirmation() {
  modalConfirmation.style.display = "none";
} // On créé une fonction closeModal() qui modifie la propriété display de l'élément HTML représentant la modale pour la masquer en utilisant la valeur none

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche l'envoi du formulaire si les champs ne sont pas valides
  if (validate()) {
    modalbg.style.display = "none"; // on masque la modale formulaire
    modalConfirmation.style.display = "block"; // on affiche la modale de confirmation
  }
});

const validate = () => {
  let valid = true; // on crée une variable pour vérifier la validité de chaque champ

  const firstName = document.querySelector("#firstname").value.trim(); // on récupère dans une constante la valeur du Prénom, que l'on assainit avec .trim() pour exclure les potentiels blancs
  const lastName = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const birthdate = document.querySelector("#birthdate").value.trim();
  const quantity = document.querySelector("#quantity").value.trim();
  const locations = document.getElementsByName("location");
  const checkbox1 = document.querySelector("#checkbox1");

  let selectedLocation = false; // on crée une variable pour vérifier si une ville a bien été sélectionnée

  const errorFirstname = document.querySelector(".error-firstname"); // on utilise des constantes error afin de pouvoir afficher les messages d'erreur sous chaque input
  const errorLastname = document.querySelector(".error-lastname");
  const errorEmail = document.querySelector(".error-email");
  const errorBirthdate = document.querySelector(".error-birthdate");
  const errorQuantity = document.querySelector(".error-quantity");
  const errorLocation = document.querySelector(".error-location");
  const errorCheckbox1 = document.querySelector(".error-checkbox1");

  const inputFirstname = document.querySelector("#firstname"); // on sélectionne chaque input afin d'indiquer à l'utilisateur si le champ est valide ou non
  const inputLastname = document.querySelector("#lastname");
  const inputEmail = document.querySelector("#email");
  const inputBirthdate = document.querySelector("#birthdate");
  const inputQuantity = document.querySelector("#quantity");
  const checkboxIcons = document.querySelectorAll(".location .checkbox-icon");
  const inputCheckbox1 = document.querySelector(".cgu .checkbox-icon");

  const dateValue = new Date(birthdate); // on transforme la chaîne de caractères au format ISO 8601 (ex: "2023-04-21" pour le 21 avril 2023) en un objet Date
  const currentDate = new Date(); // on crée un nouvel objet Date qui représente la date actuelle
  const limitDate = new Date("1900-01-01"); // on crée une date limite en-dessous de laquelle la date sera considérée comme trop ancienne

  const regexName = /^[a-zÀ-ÿ]([a-zÀ-ÿ ,.'-]+)?[a-zÀ-ÿ\.]$/i; // on crée une regex pour vérifier les Nom/Prénom. Les accents sont acceptés, mais les 1er et dernier caractères ne peuvent pas être un nombre ou un caractère spécial (possibilité de point final, ex: Neymar Jr.)

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }; // on vérifie si l'email est valide grâce à un pattern sophistiqué, qui vérifie notamment la présence d'un arobase et d'un nom de domaine

  if (firstName === "") {
    // on crée une condition pour vérifier si le champ Prénom est pas vide
    errorFirstname.textContent = "Veuillez renseigner votre prénom svp"; // s'il est vide, on envoie un message d'erreur
    inputFirstname.style.border = "2px solid red"; // et on fait passer la bordure de l'input en rouge
    valid = false;
  } else if (firstName.length < 2) {
    // on vérifie si le champ comporte au moins 2 caractères
    errorFirstname.textContent =
      "Le prénom doit contenir au moins 2 caractères !";
    inputFirstname.style.border = "2px solid red";
    valid = false;
  } else if (!regexName.test(firstName)) {
    // on vérifie si le prénom a un format valide grâce à une RegEx (pas de nombre, etc.)
    errorFirstname.textContent = "Veuillez renseigner un prénom valide svp";
    inputFirstname.style.border = "2px solid red";
    valid = false;
  } else {
    errorFirstname.textContent = "";
    inputFirstname.style.border = "2px solid #3BE282";
  }

  if (lastName === "") {
    errorLastname.textContent = "Veuillez renseigner votre nom svp";
    inputLastname.style.border = "2px solid red";
    valid = false;
  } else if (lastName.length < 2) {
    errorLastname.textContent = "Le nom doit contenir au moins 2 caractères !";
    inputLastname.style.border = "2px solid red";
    valid = false;
  } else if (!regexName.test(lastName)) {
    errorLastname.textContent = "Veuillez renseigner un nom valide svp";
    inputLastname.style.border = "2px solid red";
    valid = false;
  } else {
    errorLastname.textContent = "";
    inputLastname.style.border = "2px solid #3BE282";
  }

  if (email === "") {
    errorEmail.textContent = "Veuillez renseigner votre adresse e-mail svp";
    inputEmail.style.border = "2px solid red";
    valid = false;
  } else if (!isValidEmail(email)) {
    // on vérifie que l'email a un format valide grâce à une RegEx (@, nom de domaine, etc.)
    errorEmail.textContent =
      "Veuillez renseigner une adresse e-mail valide svp";
    inputEmail.style.border = "2px solid red";
    valid = false;
  } else {
    errorEmail.textContent = "";
    inputEmail.style.border = "2px solid #3BE282";
  }

  if (birthdate === "" || dateValue > currentDate) {
    // on vérifie que la date ne soit ni vide, ni située dans le futur
    errorBirthdate.textContent =
      "Veuillez renseigner une date de naissance valide svp";
    inputBirthdate.style.border = "2px solid red";
    valid = false;
  } else if (dateValue < limitDate) {
    // on vérifie que la date ne soit pas + ancienne que la date limite (01/01/1900)
    errorBirthdate.textContent =
      "Allons, vous n'êtes pas si vieux ! Votre vraie date de naissance svp";
    inputBirthdate.style.border = "2px solid red";
    valid = false;
  } else {
    errorBirthdate.textContent = "";
    inputBirthdate.style.border = "2px solid #3BE282";
  }

  if (quantity === "") {
    errorQuantity.textContent =
      "Veuillez indiquer le nombre de tournois auxquels vous avez participé svp";
    inputQuantity.style.border = "2px solid red";
    valid = false;
  } else if (quantity < 0 || quantity > 99) {
    errorQuantity.textContent =
      "Veuillez renseigner un nombre entre 0 et 99 svp";
    inputQuantity.style.border = "2px solid red";
    valid = false;
  } else {
    errorQuantity.textContent = "";
    inputQuantity.style.border = "2px solid #3BE282";
  }

  if (!checkbox1.checked) {
    // on vérifie que les CGU soient bien acceptées par l'utilisateur
    errorCheckbox1.textContent =
      "Veuillez accepter les conditions d'utilisation svp";
    inputCheckbox1.style.border = "2px solid red";
    valid = false;
  } else {
    errorCheckbox1.textContent = "";
    inputCheckbox1.style.border = "2px solid #3BE282";
  }

  for (let i = 0; i < locations.length; i++) {
    // On crée une boucle pour vérifier qu'une ville a été sélectionnée. Si oui, la boucle s'arrête
    if (locations[i].checked) {
      selectedLocation = true;
      break;
    }
  }

  if (!selectedLocation) {
    // si aucune ville n'a été sélectionnée, on envoie un message d'erreur et les bordures passent en rouge
    for (let i = 0; i < checkboxIcons.length; i++) {
      checkboxIcons[i].style.border = "2px solid red";
      errorLocation.innerHTML = "Veuillez sélectionner une ville svp";
    }
    return false;
  } else {
    for (let i = 0; i < checkboxIcons.length; i++) {
      errorLocation.innerHTML = "";
      checkboxIcons[i].style.border = "";
    }
  }

  return valid; // lorsque toutes les conditions précédentes sont remplies, on peut valider le formulaire
};
