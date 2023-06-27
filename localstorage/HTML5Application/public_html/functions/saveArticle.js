// Fonction pour enregistrer un nouvel article dans le local storage
function saveArticle() {
  var id = generateId();
  var title = document.getElementById("title").value;
  var resume = document.getElementById("resume").value;
  var categorie = document.getElementById("categorie").value;
  var link = document.getElementById("link").value;
  var pu1d = document.getElementById("pu1d-checkbox").checked ? 1 : 0;
  var pr1d = document.getElementById("pr1d-checkbox").checked ? 1 : 0;
  var pu2d = document.getElementById("pu2d-checkbox").checked ? 1 : 0;
  var pr2d = document.getElementById("pr2d-checkbox").checked ? 1 : 0;
  var lyc = document.getElementById("lyc-checkbox").checked ? 1 : 0;

  var article = {
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

  // Enregistrement de l'article dans le local storage
  localStorage.setItem(id, JSON.stringify(article));

  var keysObject = createKeysObject(pu1d, pr1d, pu2d, pr2d, lyc);

  // Appel de la fonction pour enregistrer les clés dans le localStorage
  saveKeys(id, keysObject);

  // Réinitialisation du formulaire
  resetForm();

  // Rechargement de la liste des articles
  loadArticles();
}
