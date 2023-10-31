// Importation des modules nécessaires depuis React
import React, { useState } from 'react';

// Importation des modules de routage depuis react-router-dom
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Importation des données de logements depuis un fichier JSON
import logementsData from '../data/logements.json';

// Importation des composants personnalisés
import Header from '../components/header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Grid from '../components/Grid';

// Importation de l'image de bannière depuis les ressources
import imageAccueil from '../assets/HomeBanner.jpg';

// Définition de la fonction pour la page d'accueil
export default function HomePage() {
  // Utilisation du hook useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Utilisation du hook useState pour gérer l'état de la page active
  const [activePage, setActivePage] = useState(location.pathname);

  // Rendu de la page d'accueil
  return (
    <div className="home">
      <>
        {/* Rendu du composant Header en passant la page active en tant que prop */}
        <Header activePage={activePage} />

        {/* Rendu du composant Banner avec l'image et le texte de bannière en tant que props */}
        <Banner imageBanner={imageAccueil} textBanner={"Chez vous, partout et ailleurs"} />

        {/* Rendu du composant Grid en passant les données de logements en tant que prop */}
        <Grid logements={logementsData} />

        {/* Rendu du composant Footer */}
        <Footer />
      </>
    </div>
  );
}
