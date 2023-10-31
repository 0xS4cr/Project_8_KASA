import React from 'react';

// Composant Star pour afficher une étoile pleine ou vide
function Star({ filled }) {
  // Détermine la couleur de remplissage en fonction de l'état "filled"
  const fillColor = filled ? 'var(--priColor)' : 'var(--bgcGrid)';

  // Retourne le code SVG représentant une étoile
  return (
    <svg className='star' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2.2l1.6 4.9h5.2l-4 2.9 1.5 4.9-4-3.1-4 3.1 1.5-4.9-4-2.9h5.2l1.6-4.9z" fill={fillColor} />
    </svg>
  );
}

// Composant Rating pour afficher une notation en étoiles
export default function Rating({ value }) {
  const stars = [];

  // Génère un tableau d'étoiles en fonction de la valeur donnée
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= value} />);
  }

  // Retourne une liste d'étoiles pour représenter la notation
  return (
    <div>
      {stars}
    </div>
  );
}
