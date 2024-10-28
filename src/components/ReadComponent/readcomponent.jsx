import React from 'react';
import { useLocation } from 'react-router-dom';
import { PathRead } from '../PathBrowse';
import ReadUser from './ReadUser';
import Fichiertext from './Fichiertext';

function Readcomponent() {
  const location = useLocation(); // Accéder à l'objet location
  const { title, description } = location.state || {}; // Extraire le titre et la description

  return (
    <div>
      {/* Passez le titre récupéré à PathRead */}
      <PathRead path={title} />
      <div className="mx-36 h-[23vh] rounded-[10px] flex items-center justify-center bg-slate-100">
        {/* Affichez d'autres éléments ou le contenu que vous souhaitez ici */}
      </div>
      <ReadUser
        titre={title} // Utiliser le titre récupéré
        genre="Horreur" // Vous pouvez passer d'autres props ici
        nameuser="Rolland"
        date="feb 22, 2024"
      />
      <Fichiertext
        text={description || "Aucune description disponible."} // Utiliser la description récupérée
      />
    </div>
  );
}

export default Readcomponent;
