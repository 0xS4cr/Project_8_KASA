// Importation des modules nécessaires depuis les bibliothèques React et react-helmet
import React from 'react';
import { Helmet } from 'react-helmet';

// Importation des modules nécessaires depuis la bibliothèque react-router-dom
import { Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';

// Importation des composants de pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FichesLogements from './pages/FichesLogements';
import NotFound from './pages/404'; // Importez votre composant NotFound

// Importation des données de logements depuis le fichier logements.json
import logementsData from './data/logements.json';

// Composant principal de l'application
function App() {
  // Obtention de l'emplacement actuel de l'application
  const location = useLocation();
  // Extraction du nom de la dernière partie du chemin de l'emplacement
  const routeName = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div className="App">
      {/* Utilisation de react-helmet pour mettre à jour le titre de la page */}
      <Helmet>
        <title>{routeName}</title>
      </Helmet>
      {/* Configuration des routes de l'application */}
      <Routes>
        {/* Redirection page racine vers page accueil */}
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="Accueil" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        {/* Route avec un paramètre dynamique pour les fiches de logements */}
        <Route path="fiches/:index" element={<FicheLogementWithParams />} />
        
        {/* Redirection vers la page 404 en cas de route non trouvée */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Composant pour afficher les détails d'un logement en utilisant des paramètres de route
function FicheLogementWithParams() {
  // Obtention du paramètre 'index' depuis les paramètres de la route
  const { index } = useParams();
  // Récupération des données du logement en utilisant l'index
  const logement = logementsData[parseInt(index)];

  // Rendu du composant FichesLogements avec les données du logement
  return <FichesLogements logement={logement} />;
}

// Exportation du composant principal de l'application
export default App;
