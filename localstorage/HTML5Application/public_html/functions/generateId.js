// Fonction pour générer un identifiant unique pour un article
function generateId() {
  var date = new Date();
  return "a" + date.getTime(); // Utilisation du temps en millisecondes comme identifiant
}
