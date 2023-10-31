// Importation des dépendances nécessaires depuis React

import React, { useState } from 'react';

// Importation des images pour les flèches gauche et droite
import arrowLeftImage from '../assets/arrow_left.png';
import arrowRightImage from '../assets/arrow_right.png';

// Définition du composant Carousel
const Carousel = ({ images }) => {
  // État pour suivre l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour afficher l'image suivante dans le carousel
  const showNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Fonction pour afficher l'image précédente dans le carousel
  const showPreviousImage = () => {
    // Utilisation du modulo pour gérer le défilement circulaire des images
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {/* Conteneur principal du carousel */}
      <div className="carousel">
        {/* Image en cours avec classe de style */}
        <img className="carousel-image" src={images[currentImageIndex]} alt="Image" />

        {/* Filtre sombre pour améliorer la lisibilité du texte */}
        <div className="image__filter" />

        {/* Flèche gauche pour afficher l'image précédente */}
        <div className="arrow arrow-left" onClick={showPreviousImage}>
          <img src={arrowLeftImage} alt="Left Arrow" />
        </div>

        {/* Flèche droite pour afficher l'image suivante */}
        <div className="arrow arrow-right" onClick={showNextImage}>
          <img src={arrowRightImage} alt="Right Arrow" />
        </div>

        {/* Affichage du compteur d'image */}
        <div className="image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

// Exportation du composant Carousel pour une utilisation ailleurs
export default Carousel;
