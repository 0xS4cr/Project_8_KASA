import React, { useState } from 'react';
import arrowUp from '../assets/arrow_up.png'; // Import de l'icône de flèche

function Collapse({ data }) {
  const [openIndex, setOpenIndex] = useState(null); // État pour suivre l'index de l'élément ouvert

  // Fonction pour gérer le clic sur un élément de la liste
  const handleCollapseClick = (index) => {
    // Si l'élément est déjà ouvert, le ferme. Sinon, l'ouvre.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="collapse__ctn"> {/* Conteneur principal */}
      {data.map((item, index) => (
        <div className="collapse__item" key={index}> {/* Élément de la liste */}
          <div
            className={`collapse__title ${openIndex === index ? 'open' : ''}`}
            onClick={() => handleCollapseClick(index)} // Appelle la fonction de gestion du clic
          >
            {item.title} {/* Affiche le titre de l'élément */}
            <img
              src={arrowUp}
              alt="Flèche vers le haut"
              className={`arrow-icon ${openIndex === index ? 'rotate' : ''}`}
            />
          </div>
          {openIndex === index && ( // Si l'élément est ouvert, affiche la description
            <div className="collapse__description">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse; // Exporte le composant Collapse
