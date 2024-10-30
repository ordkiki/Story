import React from 'react'
import Navbar from "../components/Navbar";
import { Read, Listen } from "../components/BrowseComponent";
import Readcomponent from '../components/ReadComponent/readcomponent';
import { useParams } from 'react-router-dom';

function read() {
  const param =useParams()
  return (
    <div>
        <Navbar/>
        <Readcomponent id={param.id}></Readcomponent>
        
    </div>
  )
}

export default read