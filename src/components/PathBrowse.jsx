import React from 'react';
import { FaAngleRight } from 'react-icons/fa'; // Importer l'icône pour "voir plus"
import { Link, useLocation } from 'react-router-dom';


function PathBrowse(props) {
  return (
    <div className='mx-40 m-5'>
        <h1 className='flex items-center text-xl'>
            <Link to="/Browse" className='transition-all hover:scale-[1.1]'>Browse</Link> 
            <FaAngleRight/> 
            {props.path}
        </h1>
    </div>
  )
}


export function PathCollection(props) {
  return (
    <div className='mx-40 m-5'>
        <h1 className='flex items-center text-xl'>
            <Link to="/Collection" className='transition-all hover:scale-[1.1]'>Collection</Link> 
            <FaAngleRight/> 
            {props.path}
        </h1>
    </div>
  )
}


export function PathRead() {
  const location = useLocation(); // Accéder à l'objet location
  const { title } = location.state || {}; // Extraire uniquement le titre

  return (
    <div className='mx-40 m-5'>
        <h1 className='flex items-center text-xl'>
            <Link to="/Browse" className='transition-all hover:scale-[1.1]'>Browse</Link> 
            <FaAngleRight/> 
            <Link to="/ReadMore" className='transition-all hover:scale-[1.1]'>Read</Link> 
            <FaAngleRight/> 
            {title || "Titre non disponible"} {/* Affiche le titre ou un message par défaut */}
        </h1>
    </div>
  )
}
export default PathBrowse