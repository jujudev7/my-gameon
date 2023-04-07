function validate() {
  let isValid = true;
  // Récupérer les valeurs saisies par l'utilisateur
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const nbTournamentsPlayed = document.getElementById("quantity").value;
  const location = document.querySelector('input[name="location"]:checked');
  const checkbox1 = document.getElementById("checkbox1").checked;

  // Vérifier si le champ Prénom est valide
  if (firstname === "" || firstname.length < 2) {
    document.getElementById("firstname").nextSibling.innerHTML =
      "Le prénom doit comporter au moins 2 caractères.";
    isValid = false;
  } else {
    document.getElementById("firstname").nextSibling.innerHTML = "";
  }


  // Vérifier si le champ Nom est valide
  if (lastname === "" || lastname.length < 2) {
    document.getElementById("lastname").nextSibling.innerHTML =
      "Le nom doit comporter au moins 2 caractères.";
    isValid = false;
  } else {
    document.getElementById("lastname").nextSibling.innerHTML = "";
  }

  // Vérifier si le champ Email est valide
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !regexEmail.test(email)) {
    document.getElementById("email").nextSibling.innerHTML =
      "Veuillez saisir une adresse email valide.";
    isValid = false;
  } else {
    document.getElementById("email").nextSibling.innerHTML = "";
  }

  // Vérifier si le champ du nombre de tournois joués est valide
  if (nbTournamentsPlayed === "") {
    document.getElementById("quantity").nextSibling.innerHTML =
      "Veuillez saisir le nombre de tournois joués.";
    isValid = false;
  } else {
    document.getElementById("quantity").nextSibling.innerHTML = "";
  }

  // Vérifier si un bouton radio a été sélectionné
  if (location === null) {
    document.querySelector(".formData").nextSibling.innerHTML =
      "Veuillez sélectionner un tournoi.";
    isValid = false;
  } else {
    document.querySelector(".formData").nextSibling.innerHTML = "";
  }

  // Vérifier si la case des conditions générales a été cochée
  if (!checkbox1) {
    document.getElementById("checkbox1").nextSibling.innerHTML =
      "Vous devez accepter les conditions générales.";
    isValid = false;
  } else {
    document.getElementById("checkbox1").nextSibling.innerHTML = "";
  }
  console.log(validate);
  console.log(isValid);
  return isValid;
}
