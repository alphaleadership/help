// Fonction pour créer un objet JavaScript contenant uniquement les clés "pu1d", "pr1d", "pu2d", "pr2d" et "lyc" si leur valeur est égale à 1
function createKeysObject(pu1d, pr1d, pu2d, pr2d, lyc) {
  var keysObject = {};
  if (pu1d === 1) {
    keysObject.pu1d = pu1d;
  }
  if (pr1d === 1) {
    keysObject.pr1d = pr1d;
  }
  if (pu2d === 1) {
    keysObject.pu2d = pu2d;
  }
  if (pr2d === 1) {
    keysObject.pr2d = pr2d;
  }
  if (lyc === 1) {
    keysObject.lyc = lyc;
  }
  return keysObject;
}
