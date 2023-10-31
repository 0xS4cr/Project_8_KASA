import React from 'react';

// Composant Tags pour afficher une liste de noms sous forme de "pillules"
export default function Tags({ noms }) {
    return (
        <div className="pillules">
            {noms.map((nom, index) => ( // Parcourt chaque nom dans la liste
                <div key={index} className="pillule"> {/* Crée une "pillule" pour chaque nom */}
                    {nom} {/* Affiche le nom dans la pillule */}
                </div>
            ))}
        </div>
    );
}
