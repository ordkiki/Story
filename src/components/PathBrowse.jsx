import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
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


export function PathRead(props) {
  const location = useLocation(); 
  const { title } = location.state || {};

  return (
    <div className='mx-40 m-5'>
        <h1 className='flex items-center text-xl'>
            <Link to="/Browse" className='transition-all hover:scale-[1.1]'>Browse</Link> 
            <FaAngleRight/> 
            <Link to="/ReadMore" className='transition-all hover:scale-[1.1]'>Read</Link> 
            <FaAngleRight/> 
            {props.title || "Titre non disponible"} 
        </h1>
    </div>
  )
}
export default PathBrowse