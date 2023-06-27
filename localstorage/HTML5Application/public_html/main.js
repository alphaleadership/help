// tableau de fichiers
var fileNames = [
  "functions\\createKeysObject.js",
  "functions\\deleteArticle.js",
  "functions\\editArticle.js",
  "functions\\generateId.js",
  "functions\\getDataFromLocalStorage.js",
  "functions\\listenerToButton.js",
  "functions\\loadArticles.js",
  "functions\\resetForm.js",
  "functions\\saveArticle.js",
  "functions\\saveKeys.js",
  "functions\\updateArticle.js",
  "functions\\updateArticlesIndexes.js"
];t

// Fonction pour charger dynamiquement un fichier JavaScript
loadScript = (function (filesTable) {
  for (file of filesTable) {
    var script = document.createElement("script");
    script.src = file;
    document.head.appendChild(script);
  }
})

// Point d'entrée du programme
(function main() {
  // appel toute les fichiers 
  loadScript(fileNames) 

  // Sélectionner l'élément de formulaire avec l'ID "article-form"
  const form = document.getElementById('article-form');
  // Ajouter un gestionnaire d'événements à l'événement "submit" du formulaire
  form.addEventListener('submit', handleFormSubmit(Event));
      






  // Renitialiser le formulaire :
  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', resetForm());

  }
  )();
