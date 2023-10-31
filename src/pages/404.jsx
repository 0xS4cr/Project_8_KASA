import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Importation des composants personnalisés
import Header from '../components/header';
import Footer from '../components/Footer';

// Définition de la fonction de la page "À propos"
export default function NotFound() { // Utilisez le nom correct "NotFound" ici
  // Utilisation du hook useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Rendu de la page d'erreur 404
  return (
    <div className="notfound">
      <>
        {/* Rendu du composant Header */}
        <Header />

        <div className='notfound__ctn'>
            <h1 className='notfound__title'>404</h1>
            <p className='notfound__txt'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/Accueil" className="back__link">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>

        {/* Rendu du composant Footer */}
        <Footer />
      </>
    </div>
  );
}
