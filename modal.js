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
const modalBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close"); // On sélectionne l'élément HTML qui représente le bouton de fermeture de la modale à l'aide de la méthode querySelector()
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal); // On ajoute un événement de clic sur le bouton de fermeture en utilisant la méthode addEventListener()

// close modal function
function closeModal() {
  modalbg.style.display = "none";
} // On créé une fonction closeModal() qui modifie la propriété display de l'élément HTML représentant la modale pour la masquer en utilisant la valeur none

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  if (!validate()) {
    event.preventDefault(); // empêche l'envoi du formulaire si les champs ne sont pas valides
  }
});

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   validate();
// });

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validate = () => {
  let valid = true;
  const firstName = document.querySelector("#firstname").value.trim();
  const lastName = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email").value.trim();
  // const checkbox1 = document.querySelector("#checkbox1");

  const errorFirstname = document.querySelector(".error-firstname");
  const errorLastname = document.querySelector(".error-lastname");
  const errorEmail = document.querySelector(".error-email");

  const inputFirstname = document.querySelector("#firstname");
  const inputLastname = document.querySelector("#lastname");
  const inputEmail = document.querySelector("#email");

  // console.log("00000000002: " + errorFirstname)
  // console.log("00000000002: " + errorLastname)
  // console.log("00000000003: " + inputFirstname)

  // récupérer l'input
  // const errorFirstname = document.querySelector("#firstname +.error");
  // const errorLastname = document.querySelector("#firstname +.error");

  if (firstName === "") {
    errorFirstname.textContent = "Veuillez renseigner votre prénom svp";
    inputFirstname.style.border = "2px solid red";
    valid = false;
  } else if (firstName.length < 2) {
    errorFirstname.textContent =
      "Le prénom doit contenir au moins 2 caractères !";
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
  } else {
    errorLastname.textContent = "";
    inputLastname.style.border = "2px solid #3BE282";
  }

  if (email === "") {
    errorEmail.textContent = "Veuillez renseigner votre email svp";
    inputEmail.style.border = "2px solid red";
    valid = false;
  } else if (!isValidEmail(email)) {
    errorEmail.textContent = "Veuillez renseigner une adresse e-mail valide svp";
    inputEmail.style.border = "2px solid red";
    valid = false;
  } else {
    errorEmail.textContent = "";
    inputEmail.style.border = "2px solid #3BE282";
  }
  return valid;
};

//   if (email === "") {
//     document.querySelector(".email-error").innerHTML =
//       "Veuillez renseigner votre e-mail svp";
//   } else if (!isValidEmail(email)) {
//     document.querySelector(".email-error").innerHTML =
//       "Veuillez renseigner une adresse e-mail valide svp";
//   }

//   if (quantity === "") {
//     document.querySelector(".quantity-error").innerHTML =
//       "Veuillez indiquer le nombre de tournoi auxquels vous avez participé";
//   } else if (
//     parseInt(quantity) < 0 ||
//     parseInt(quantity) > 99) {
//     document.querySelector(".quantity-error").innerHTML =
//       "Veuillez renseigner un nombre compris entre 0 et 99 svp";
//   }
// // }  else if (isNaN(quantity)) {
// //   document.querySelector(".quantity-error").innerHTML =
// //     "Veuillez renseigner un nombre svp";

// // console.log(quantity)

//   // Vérifier si la date n'est pas vide
//   if (birthdate === "") {
//     document.querySelector(".birthdate-error").innerHTML = "Veuillez entrer une date de naissance valide svp";
//     // return false;
//   }

//   const radios = document.getElementsByName("location");
//   const formIsValid = false;

//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       formIsValid = true; // au moins un bouton radio est sélectionné
//       break;
//     }
//   }

//   if (!formIsValid) {
//     document.querySelector(".location-error").innerHTML =
//       "Veuillez choisir une ville svp";
//   }

//   if (!checkbox1.checked) {
//     document.querySelector(".checkbox1-error").innerHTML ="Veuillez accepter les conditions d'utilisation svp";
//   }
