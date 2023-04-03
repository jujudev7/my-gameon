const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validate();
});

function validate() {
  // Récupération des éléments du formulaire
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const quantity = document.getElementById("quantity");
  const location = document.getElementsByName("location");
  const checkbox1 = document.getElementById("checkbox1");

  // Initialisation de la variable de validation
  let isValid = true;

  // Vérification du champ Prénom
  if (firstName.value.trim() === "" || firstName.value.trim().length < 2) {
    firstName.nextElementSibling.innerHTML = "Le prénom doit contenir au moins 2 caractères.";
    isValid = false;
  } else {
    firstName.nextElementSibling.innerHTML = "";
  }

  // Vérification du champ Nom
  if (lastName.value.trim() === "" || lastName.value.trim().length < 2) {
    lastName.nextElementSibling.innerHTML = "Le nom doit contenir au moins 2 caractères.";
    isValid = false;
  } else {
    lastName.nextElementSibling.innerHTML = "";
  }

  // Vérification de l'adresse électronique
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
    email.nextElementSibling.innerHTML = "Veuillez saisir une adresse électronique valide.";
    isValid = false;
  } else {
    email.nextElementSibling.innerHTML = "";
  }

  // Vérification du champ du nombre de concours
  if (quantity.value.trim() === "" || isNaN(quantity.value.trim())) {
    quantity.nextElementSibling.innerHTML = "Veuillez saisir un nombre valide.";
    isValid = false;
  } else {
    quantity.nextElementSibling.innerHTML = "";
  }

  // Vérification du bouton radio
  let isChecked = false;
  for (let i = 0; i < location.length; i++) {
    if (location[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    location[0].parentNode.nextElementSibling.innerHTML = "Veuillez sélectionner une ville.";
    isValid = false;
  } else {
    location[0].parentNode.nextElementSibling.innerHTML = "";
  }

  // Vérification de la case des conditions générales
  if (!checkbox1.checked) {
    checkbox1.nextElementSibling.innerHTML = "Vous devez accepter les conditions générales.";
    isValid = false;
  } else {
    checkbox1.nextElementSibling.innerHTML = "";
  }

  // Retourne le résultat de la validation
  return isValid;
}
