// Fonction pour mettre à jour les données d'un article dans le local storage
function updateArticle() {
  var id = document.getElementById("id").value;
  var title = document.getElementById("title").value;
  var resume = document.getElementById("resume").value;
  var categorie = document.getElementById("categorie").value;
  var link = document.getElementById("link").value;
  var pu1d = document.getElementById("pu1d-checkbox").checked ? 1 : 0;
  var pr1d = document.getElementById("pr1d-checkbox").checked ? 1 : 0;
  var pu2d = document.getElementById("pu2d-checkbox").checked ? 1 : 0;
  var pr2d = document.getElementById("pr2d-checkbox").checked ? 1 : 0;
  var lyc = document.getElementById("lyc-checkbox").checked ? 1 : 0;

  var updatedArticle = {
    id: id,
    title: title,
    resume: resume,
    categorie: categorie,
    link: link,
    pu1d: pu1d,
    pr1d: pr1d,
    pu2d: pu2d,
    pr2d: pr2d,
    lyc: lyc,
  };

  // Mise à jour de local storage avec les nouvelles données de l'article.
  localStorage.setItem(id, JSON.stringify(updatedArticle));
  // Réinitialisation du formulaire d'édition
  resetForm();

  // Rechargement de la liste des articles
  loadArticles();
}
