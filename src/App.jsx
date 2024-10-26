import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import "./index.css"
import Manage from './views/Manage'

import Browse from './views/Browse'
import Favoris from './views/Favoris'
import Collection from './views/Collection'
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Browse></Browse>}/>
        <Route index path='/Manage' element={<Manage/>}/>
        <Route index path='/Browse' element={<Browse/>}/>
        <Route index path='/Favoris' element={<Favoris/>}/>
        <Route index path='/Collection' element={<Collection/>}/>
      </Routes>
    </BrowserRouter>)
}

export default App
