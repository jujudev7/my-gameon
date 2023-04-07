const form = document.querySelector("#form");

function validate() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };
    console.log("0000");

    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");

      errorDisplay.innerText = "";
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };

    const isValidEmail = (email) => {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    };
    
    // on récupère les valeurs des champs
    var firstname = document.getElementById("firstname").value.trim(); // La méthode trim() permet de retirer les blancs en début et fin de chaîne
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var quantity = document.getElementById("quantity").value.trim();
    var location = document.getElementsByName("location");
    var checkbox1 = document.getElementById("checkbox1");

    // on vérifie que le champ Prénom est valide
    if (firstname === "") {
      setError(firstname, "Le champ Prénom ne doit pas être vide");
      isValid = false;
    } else if (firstname.length < 2) {
      setError(firstname, "Le Prénom doit comporter au moins 2 caractères");
      isValid = false;
    } else {
      setSuccess(firstname);
    }

    // on vérifie que le champ Nom est valide
    if (lastname === "") {
      setError(lastname, "Le champ Nom ne doit pas être vide");
    } else if (lastname.length < 2) {
      setError(lastname, "Le Nom doit comporter au moins 2 caractères");
    } else {
      setSuccess(lastname);
    }

    // on vérifie que l'e-mail est valide
    if (email === "") {
      setError(email, "Le champ E-mail ne doit pas être vide");
    } else if (!isValidEmail(email)) {
      setError(email, "Renseignez une adresse e-mail valide");
    } else {
      setSuccess(email);
    }

    // on vérifie que le nombre de tournois est valide
    if (quantity === "") {
      setError(
        quantity,
        "Le nombre de tournoi auxquels vous avez participé est requis"
      );
    } else if (isNaN(quantity)) {
      setError(quantity, "Veuillez indiquer un chiffre");
    } else {
      setSuccess(quantity);
    }

    // on vérifie qu'une ville est bien sélectionnée
    if (location === "") {
      setError(location, "Vous devez sélectionner une ville");
    } else {
      setSuccess(location);
    }

    // on vérifie que la case des conditions générales est bien cochée
    if (!checkbox1.checked) {
      setError(checkbox1, "Veuillez accepter les conditions d'utilisation");
    } else {
      setSuccess(checkbox1);
    }
  });
}
