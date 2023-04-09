function validate() {
  const firstName = document.forms["reserve"]["firstname"].value.trim(); // on crée une constante qui cible la valeur du Prénom et on ajoute la fonction .trim() afin d'éliminer tout espace potentiel
  const firstNameError = document.querySelector("#firstname + div.error"); // on crée une constante qui cible la div qui suit le champ Prénom afin d'y injecter le message d'erreur
  const lastName = document.forms["reserve"]["lastname"].value.trim(); // on crée une constante qui cible la valeur du Nom, et on ajoute la fonction .trim() afin d'éliminer tout espace potentiel
  const lastNameError = document.querySelector("#lastname + div.error"); // on crée une constante qui cible la div qui suit le champ Nom afin d'y injecter le message d'erreur
  const email = document.forms["reserve"]["email"].value.trim(); // on crée une constante qui cible la valeur de l'e-mail, et on ajoute la fonction .trim() afin d'éliminer tout espace potentiel
  const emailError = document.querySelector("#email + div.error"); // on crée une constante qui cible la div qui suit le champ e-mail afin d'y injecter le message d'erreur
  const quantity = document.forms["reserve"]["quantity"].value.trim(); // on crée une constante qui cible la valeur de quantity, et on ajoute la fonction .trim() afin d'éliminer tout espace potentiel
  const quantityError = document.querySelector("#quantity + div.error"); // on crée une constante qui cible la div qui suit le champ quantity afin d'y injecter le message d'erreur
  const location = document.forms["reserve"]["location"].value; // on crée une constante qui cible la valeur de la location
  const locationError = document.querySelector(".formData.location > div.error"); // on crée une constante qui cible la div qui suit le champ quantity afin d'y injecter le message d'erreur
  const checkbox1 = document.getElementById("checkbox1"); // on cible la checkbox1 (acceptation des conditions d'utilisation)
  const checkbox1Error = document.querySelector(".formData.cgu > div.error"); // on crée une constante qui cible la div qui suit la checkbox1 afin d'y injecter le message d'erreur

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // if (firstName == "") {
  //   // on crée une condition dans le cas où le champ est vide
  //   firstNameError.innerHTML = "Vous devez indiquer votre prénom"; // on envoie le message d'erreur
  //   return false;
  // } else if (firstName.length < 2) {
  //   // on ajoute une 2e condition pour vérifier si le Prénom contient au moins 2 caractères
  //   firstNameError.innerHTML = "Le prénom doit comporter au moins 2 caractères"; // Si moins de 2 caractères, on envoie le message d'erreur
  //   return false;
  // } else {
  //   validate(firstName);
  // }

  // if (lastName == "") {
  //   // on crée une condition dans le cas où le champ est vide
  //   lastNameError.innerHTML = "Vous devez indiquer votre nom"; // on envoie le message d'erreur
  //   return false;
  // } else if (lastName.length < 2) {
  //   // on ajoute une 2e condition pour vérifier si le Prénom contient au moins 2 caractères
  //   lastNameError.innerHTML = "Le nom doit comporter au moins 2 caractères"; // Si moins de 2 caractères, on envoie le message d'erreur
  //   return false;
  // } else {
  //   validate(lastName); // si le Prénom passe les 2 conditions précédentes, alors l'input est valide
  // }

  // if (email === "") {
  //     emailError.innerHTML = "Vous devez indiquer votre e-mail"; // on envoie le message d'erreur
  //     return false;
  //   } else if (!isValidEmail(email)) {
  //   emailError.innerHTML = "Renseignez une adresse e-mail valide";
  //   return false;
  // } else {
  //   validate(email); // si l'e-mail saisi passe les 2 conditions précédentes, alors il est valide
  // }

  // on vérifie que le nombre de tournois est valide
  // if (quantity === "") {
  //   quantityError.innerHTML = "Veuillez indiquer le nombre de tournois auxquels vous avez participé";
  //   return false;
  // } else if (isNaN(quantity)) {
  //   quantityError.innerHTML = "Veuillez indiquer un chiffre svp";
  //   return false;
  // } else {
  //   validate(quantity);
  // }

  // on vérifie qu'une ville est bien sélectionnée
  // if (location === "") {
  //   locationError.innerHTML = "Veuillez sélectionner une ville svp";
  //   return false;
  // } else {
  //   validate(location);
  // }

  // on vérifie que la case des conditions générales est bien cochée
  if (!checkbox1.checked) {
    checkbox1Error.innerHTML = "Veuillez accepter les conditions d'utilisation";
    return false;
  } else {
    validate(checkbox1);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
