/*
* @param {Event} event - L'objet événement de la soumission du formulair
*/
function handleFormSubmit(event) {
    event.preventDefault();
  
    if (editMode) {
      updateArticle();
    } else {
      saveArticle();
    }
  }
  
