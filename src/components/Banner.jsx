// Composant Banner affiche une bannière avec une image et un texte
function Banner({ imageBanner, textBanner }) {
  // Assignation des valeurs des propriétés à des variables locales
  let image = imageBanner;
  let txtBanner = textBanner;

  // Rendu du composant Banner avec l'image et le texte fournis
  return (
    <div className="banner__ctn">
      {/* Affichage de l'image de la bannière */}
      <img className="img__banner" src={image} alt="image de bannierre" />
      {/* Affichage du texte de la bannière */}
      <h1 className="txt__banner">{txtBanner}</h1>
    </div>
  );
}

// Exportation du composant Banner pour une utilisation ailleurs
export default Banner;
