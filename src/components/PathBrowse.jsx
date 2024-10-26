import React from 'react'
import { FaAngleRight } from 'react-icons/fa'; // Importer l'icône pour "voir plus"

function PathBrowse(props) {
  return (
    <div className='mx-40 m-5'>
        <h1 className='flex items-center text-xl'>Browse <FaAngleRight/> {props.path}</h1>
    </div>
  )
}

export default PathBrowse