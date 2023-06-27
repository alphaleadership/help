// Fonction pour supprimer un article du local storage
function deleteArticle(id) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
    // Suppression de l'article
    localStorage.removeItem(id);

    // Mise à jour des indexes des articles
    updateArticleIndexes(id);

    // Rechargement des articles pour affichage.
    loadArticles();
  }
}
