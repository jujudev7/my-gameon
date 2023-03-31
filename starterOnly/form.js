function validate() {
    // récupérer les valeurs des champs
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var quantity = document.getElementById('quantity').value;
    var location = document.getElementsByName('location');
    var checkbox1 = document.getElementById('checkbox1');
    
    // vérifier que le champ Prénom est valide
    if (firstname.length < 2) {
      alert('Le champ Prénom doit comporter au moins 2 caractères');
      return false;
    }
    
    // vérifier que le champ Nom est valide
    if (lastname.length < 2) {
      alert('Le champ Nom doit comporter au moins 2 caractères');
      return false;
    }
    
    // vérifier que l'adresse électronique est valide
    if (!validateEmail(email)) {
      alert('L\'adresse électronique est invalide');
      return false;
    }
    
    // vérifier que la quantité est un nombre
    if (isNaN(quantity)) {
      alert('La quantité doit être un nombre');
      return false;
    }
    
    // vérifier qu'un bouton radio est sélectionné
    var locationChecked = false;
    for (var i = 0; i < location.length; i++) {
      if (location[i].checked) {
        locationChecked = true;
        break;
      }
    }
    if (!locationChecked) {
      alert('Veuillez sélectionner une ville');
      return false;
    }
    
    // vérifier que la case des conditions générales est cochée
    if (!checkbox1.checked) {
      alert('Veuillez accepter les conditions d\'utilisation');
      return false;
    }
    
    // si toutes les validations sont réussies, renvoyer true pour soumettre le formulaire
    return true;
  }
  
  // fonction pour valider l'adresse électronique
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }