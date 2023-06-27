// Fonction pour enregistrer les clés dans le localStorage avec l'identifiant de l'article créé
function saveKeys(articleId, keysObject) {
  for (var key in keysObject) {
    if (keysObject.hasOwnProperty(key)) {
      var storedValue = localStorage.getItem(key);
      var updatedValue;
      if (storedValue) {
        // Si une valeur est déjà stockée dans le localStorage pour la clé donnée, on la compile avec la nouvelle valeur
        updatedValue = storedValue + "," + articleId;
      } else {
        // Sinon, on crée une nouvelle valeur avec l'identifiant de l'article créé
        updatedValue = articleId;
      }
      localStorage.setItem(key, updatedValue);
    }
  }
}
