import React from 'react';

// Composant HostName pour afficher le nom de l'hôte en parties séparées par des sauts de ligne
export default function HostName({ hostName }) {
    return (
        <div className='splitName'>
            {hostName && ( // Vérifie si un nom d'hôte est fourni
                <div>
                    {hostName.split(' ').map((namePart, index) => ( // Divise le nom en parties et les mappe
                        <React.Fragment key={index}>
                            {namePart}
                            {index !== hostName.split(' ').length - 1 && <br />} {/* Ajoute un saut de ligne sauf pour la dernière partie */}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}
