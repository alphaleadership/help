// Fonction pour éditer un article
function editArticle(id) {
  // Mettre à jour la variable editMode
  editMode = true;
  // Mettre à jour le texte du bouton d'enregistrement du formulaire
  document.getElementById("save-button").textContent = "Mettre à jour";

  var article = JSON.parse(localStorage.getItem(id));

  // Remplissage du formulaire d'édition avec les données de l'article
  document.getElementById("id").value = article.id;
  document.getElementById("title").value = article.title;
  document.getElementById("resume").value = article.resume;
  document.getElementById("categorie").value = article.categorie;
  document.getElementById("link").value = article.link;
  document.getElementById("pu1d-checkbox").checked = article.pu1d;
  document.getElementById("pr1d-checkbox").checked = article.pr1d;
  document.getElementById("pu2d-checkbox").checked = article.pu2d;
  document.getElementById("pr2d-checkbox").checked = article.pr2d;
  document.getElementById("lyc-checkbox").checked = article.lyc;
}
