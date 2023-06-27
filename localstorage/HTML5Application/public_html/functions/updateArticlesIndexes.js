// Fonction pour mettre à jour les indexes des articles
function updateArticleIndexes(id) {
    var publicTypes = ["pu1d", "pr1d", "pu2d", "pr2d", "lyc"];

    // Parcours de chaque type de public
    publicTypes.forEach(function (publicType) {
      // Récupération de la clé correspondant au type de public
      var key = localStorage.getItem(publicType);

      // Vérification si la clé existe et contient l'id de l'article
      if (key && key.includes(id)) {
        // Suppression de l'id de l'article de la clé
        var updatedKey = key.replace(id, "");

        // Suppression des virgules en début et en fin de la clé
        updatedKey = updatedKey.replace(/^,|,$/g, "");

        // Mise à jour de la clé dans le localStorage
        localStorage.setItem(publicType, updatedKey);
      }
    });