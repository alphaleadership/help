// Fonction pour réinitialiser le formulaire d'édition
function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("resume").value = "";
  document.getElementById("categorie").value = "";
  document.getElementById("link").value = "";
  document.getElementById("pu1d-checkbox").checked = false;
  document.getElementById("pr1d-checkbox").checked = false;
  document.getElementById("pu2d-checkbox").checked = false;
  document.getElementById("pr2d-checkbox").checked = false;
  document.getElementById("lyc-checkbox").checked = false;

  // Mettre à jour la variable editMode
  editMode = false;
  // Mettre à jour le texte du bouton d'enregistrement du formulaire
  document.getElementById("save-button").textContent = "Enregistrer";
}
