// Importation des modules nécessaires depuis React
import React, { useState } from 'react';

// Importation des modules de routage depuis react-router-dom
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Importation des composants personnalisés
import Header from '../components/header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

// Importation de l'image de bannière depuis les ressources
import imageAbout from '../assets/AboutBanner.jpg';

// Importation des données de collapsibles depuis un fichier JSON
import collapsesData from '../data/collapsesAbout.json';

// Définition de la fonction de la page "À propos"
export default function AboutPage() {
  // Utilisation du hook useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Utilisation du hook useState pour gérer l'état de la page active
  const [activePage, setActivePage] = useState(location.pathname);

  // Rendu de la page "À propos"
  return (
    <div className="about">
      <>
        {/* Rendu du composant Header en passant la page active en tant que prop */}
        <Header activePage={activePage} />

        {/* Rendu du composant Banner en passant l'image de bannière en tant que prop */}
        <div className='bannerAbout'><Banner imageBanner={imageAbout} /></div>

        {/* Rendu du composant Collapse en passant les données des collapsibles en tant que prop */}
        <Collapse data={collapsesData} />

        {/* Rendu du composant Footer */}
        <Footer />
      </>
    </div>
  );
}
