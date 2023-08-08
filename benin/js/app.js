// Sélectionnez le bouton "Connecter"
var connectBtn = document.getElementById("connectBtn");

// Sélectionnez le conteneur du formulaire de connexion
var loginFormContainer = document.getElementById("loginFormContainer");

// Ajoutez un gestionnaire d'événement de clic au bouton "Connecter"
connectBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement de lien par défaut
  
  // Ajoutez une classe CSS pour afficher le formulaire de connexion
  loginFormContainer.classList.add("show");
});
