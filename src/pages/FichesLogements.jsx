import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Importation des composants personnalisés
import Header from '../components/header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import HostName from '../components/SplitName';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';

// Importation des styles
import '../sass/variables.scss';

// Composant FichesLogements pour afficher les détails d'un logement
export default function FichesLogements({ logement }) {
    return (
        <div className="fiches">
            {/* Configuration des métadonnées pour le titre de la page */}
            <Helmet>
                <title>{logement.title}</title>
            </Helmet>

            {/* Inclusion du composant Header */}
            <Header />

            {/* Conteneur principal pour les détails du logement */}
            <div className='ficheLogement__ctn'>
                {/* Composant Carousel pour afficher les images */}
                <Carousel images={logement.pictures} />

                {/* Conteneur d'informations du logement */}
                <div className='information__ctn'>
                    <div className='information'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        {/* Composant Tags pour afficher les balises associées */}
                        <Tags noms={logement.tags} />
                    </div>
                    <div className='host__ctn'>
                        <div className='hostId'>
                            {/* Composant HostName pour afficher le nom de l'hôte */}
                            <HostName hostName={logement.host.name} />
                            <img src={logement.host.picture} alt="photo du propriétaire" />
                        </div>
                        <div className='stars__ctn'>
                            {/* Composant Rating pour afficher la note du logement */}
                            <Rating value={logement.rating} />
                        </div>
                    </div>
                </div>
                
                {/* Conteneur pour les sections "Collapse" */}
                <div className='Collapses__ctn'>
                    {/* Composant Collapse pour afficher des sections pliables */}
                    <Collapse className='collapse__item'
                        data={[
                            { title: 'Description', description: logement.description },
                            { title: 'Équipements', description: <ul>{logement.equipments.map((item, index) => <li key={index}>{item}</li>)}</ul> }
                        ]}
                    />
                </div>
            </div>
            
            {/* Inclusion du composant Footer */}
            <Footer />
        </div>
    );
}
