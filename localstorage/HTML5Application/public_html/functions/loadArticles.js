// Fonction pour charger les articles depuis le local storage
function loadArticles() {
  var articlesList = document.getElementById("articles-list");
  articlesList.innerHTML = "";

  if (localStorage.length !== 0) {
    // Récupération des clés du localStorage commençant par "a"
    var keysStartingWithA = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith("a")) {
        keysStartingWithA.push(key);
      }
    }

    // Vérification si aucune clé ne commence par "a"
    if (keysStartingWithA.length === 0) {
      // Création de l'élément de notification
      var notificationElement = document.createElement("div");
      notificationElement.setAttribute("class", "notification is-info");
      notificationElement.innerHTML =
        'Aucun article enregistré avec une clé commençant par "a".';

      // Ajout de l'élément de notification à la liste des articles
      articlesList.appendChild(notificationElement);
    } else {
      // Parcours des clés commençant par "a"
      keysStartingWithA.forEach(function (key) {
        var article = JSON.parse(localStorage.getItem(key));

        // Création de l'élément d'affichage de l'article
        var articleElement = document.createElement("div");
        articleElement.setAttribute("class", "card mb-5");
        articleElement.innerHTML =
          '<header class="card-header"><p class="card-header-title">' +
          article.title +
          "</p></header>" +
          '<div class="card-content"><p>' +
          article.resume +
          "</p></div>" +
          '<footer class="card-footer"><a href="#" onclick="editArticle(\'' +
          article.id +
          '\')" class="card-footer-item">Modifier</a>' +
          '<a href="#" onclick="deleteArticle(\'' +
          article.id +
          '\')" class="card-footer-item">Supprimer</a></footer>';

        // Ajout de l'élément d'affichage à la liste des articles
        articlesList.appendChild(articleElement);
      });
    }
  }
}
