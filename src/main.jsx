// Importation des modules nécessaires depuis les bibliothèques React et React-DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation du composant App depuis le fichier App.jsx
import App from './App.jsx';

// Importation du fichier de styles main.scss pour la mise en page
import './sass/main.scss';

// Importation du composant BrowserRouter pour la gestion des routes
import { BrowserRouter } from 'react-router-dom';

// Utilisation de ReactDOM.createRoot pour rendre l'application dans l'élément avec l'ID 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilisation de BrowserRouter comme conteneur principal pour les routes de l'application
  <BrowserRouter>
    {/* Rendu du composant App à l'intérieur de BrowserRouter */}
    <App />
  </BrowserRouter>,
);
