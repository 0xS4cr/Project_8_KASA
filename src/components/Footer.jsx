// Composant Footer affiche les informations de pied de page
function Footer() {
  return (
    <footer className="footer">
      {/* Contenu du pied de page */}
      <div className="footer__ctn">
        {/* Affichage du logo de Kasa */}
        <img src="../src/assets/logo-footer.png" alt="Logo de Kasa" />
        {/* Mention des droits d'auteur */}
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

// Exportation du composant Footer pour une utilisation ailleurs
export default Footer;
