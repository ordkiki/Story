import React from 'react'
import Navbar from "../components/Navbar";
import { Read, Listen } from "../components/BrowseComponent";
import Readcomponent from '../components/ReadComponent/readcomponent';

function read() {
  return (
    <div>
        <Navbar/>
        <Readcomponent></Readcomponent>
        
    </div>
  )
}

export default read