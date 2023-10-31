// Composant Header affiche l'en-tête de la page avec le logo et les liens de navigation
import React from 'react';
// Importation du composant Link de react-router-dom pour la navigation
import { Link } from 'react-router-dom';

// Composant Header
export default function Header({ activePage }) {
  // Rendu du composant Header
  return (
    <header className="header">
      {/* Contenu de l'en-tête */}
      <div className="header__ctn">
        {/* Lien du logo redirigeant vers la page d'accueil */}
        <Link to="/Accueil" className="logo-link">
          <img src="../src/assets/logo.jpg" alt="Logo de Kasa" />
        </Link>
        {/* Liste des liens de navigation */}
        <ul>
          {/* Lien vers la page d'accueil */}
          <li>
            <Link to="/Accueil" className={activePage === '/Accueil' || activePage === '/' ? 'active' : ''}>
              Accueil
            </Link>
          </li>
          {/* Lien vers la page À Propos */}
          <li>
            <Link to="/About" className={activePage === '/About' ? 'active' : ''}>
              À Propos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
