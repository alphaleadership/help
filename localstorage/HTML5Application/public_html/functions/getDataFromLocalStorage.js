// Fonction pour récupérer les données du local storage pour une clé donnée
function getDataFromLocalStorage(public) {
  // Récupération des données pour la clé donnée
  var data = localStorage.getItem(public);

  // Vérification si la clé existe dans le localStorage et si elle a une valeur
  if (
    !localStorage.hasOwnProperty(public) ||
    data === null ||
    data.trim() === ""
  ) {
    return null;
  } else {
    // Clé trouvée, récupération des données et conversion en tableau
    data = data.split(",");
    return data;
  }
}
