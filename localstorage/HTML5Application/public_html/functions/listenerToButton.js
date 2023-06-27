// Fonction pour ajouter un écouteur d'événement aux boutons de choix
function generator() {
  const buttons = document.querySelectorAll(".filter-button");

  // Parcourir les boutons et ajouter un écouteur d'événement au clic
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Récupérer la valeur du bouton (correspondant au choix de filtre)
      const buttonChoice = event.target.value;

      // ID des articles du public sélectionné.
      var articlesId = getDataFromLocalStorage(buttonChoice);
      console.log(articlesId);

      if (articlesId === null) {
        // Clé non trouvée, ou sans données, ou avec une valeur vide, affichage d'une notification Bulma
        var notificationElement = document.createElement("div");
        notificationElement.setAttribute("class", "notification is-warning");
        notificationElement.innerHTML =
          "Aucune donnée trouvée pour la clé : " + buttonChoice;
        document.getElementById("generator").appendChild(notificationElement);

        // Suppression de la notification après 2 secondes avec un effet de disparition
        setTimeout(function () {
          notificationElement.classList.add("notification-fade-out");
          setTimeout(function () {
            notificationElement.remove();
          }, 1000);
        }, 2000);
      } else {
        articlesId.forEach((id) => {
          console.log(id);
          console.log(localStorage.getItem(id));
          let liste = localStorage.getItem(id);
          liste = JSON.parse(liste);
          console.log(liste["title"]);
        });

        // Création de l'élément <table>
        var tableau = document.createElement("table");
        tableau.classList.add("notification", "box");
        tableau.setAttribute("border", "1");

        // Récupération de l'élément conteneur
        var tableContainer = document.getElementById("table-container");

        // Suppression de tout contenu précédent dans le conteneur
        tableContainer.innerHTML = "";

        // Ajout du tableau dans le conteneur
        tableContainer.appendChild(tableau);

        // Génération de la note hebdo du public sélectionné.
      }
    });
  });
}
