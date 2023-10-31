// Composant Grid affiche une grille de cartes de logements
import React, { useState } from 'react';
// Importation du composant Link de react-router-dom pour la navigation
import { Link } from 'react-router-dom';

// Composant Grid
function Grid({ logements }) {
  // État pour suivre le logement sélectionné
  const [selectedLogement, setSelectedLogement] = useState(null);

  // Gestionnaire de clic sur une carte de logement
  const handleCardClick = (logement) => {
    setSelectedLogement(logement);
  };

  // Rendu du composant Grid
  return (
    <div className="grid-container">
      {/* Parcours des logements pour chaque carte */}
      {logements.map((logement, index) => (
        <Link
          to={`/fiches/${index}`}
          className="card"
          key={index}
          onClick={() => handleCardClick(logement)}
        >
          {/* Affichage de l'image de couverture du logement en arrière-plan */}
          <div className="card__image" style={{ backgroundImage: `url(${logement.cover})` }}>
            {/* Filtre d'image */}
            <div className="image__filter" />
            {/* Détails de la carte */}
            <div className="card__details">
              <h2 className="card__title">{logement.title}</h2>
              <p className="card__location">{logement.location}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Exportation du composant Grid pour une utilisation ailleurs
export default Grid;
