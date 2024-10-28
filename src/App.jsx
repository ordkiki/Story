import { useState } from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import "./index.css"
import Manage from './views/Manage'

import Browse from './views/Browse'
import Favoris from './views/Favoris'
import Collection from './views/Collection'
import ReadMore from './views/ReadMore'
import ListenMore from './views/ListenMore'
import Profile from './views/Profile'
import CreateRead from './views/CreateRead'
import CreateListen from './views/CreateListen'
import Read from './views/Read'
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ReadMore/Read/:title" element={<Read/>} />
        <Route index path='/' element={<Browse></Browse>}/>
        <Route index path='/Manage' element={<Manage/>}/>
        <Route index path='/Browse' element={<Browse/>}/>
        <Route index path='/Favoris' element={<Favoris/>}/>
        <Route index path='/Collection' element={<Collection/>}/>
        <Route index path='/ReadMore' element={<ReadMore/>}/>
        <Route index path='/ListenMore' element={<ListenMore/>}/>
        <Route index path='/Profile' element={<Profile/>}/>
        <Route index path='/Collection/Create_Read' element={<CreateRead/>}/>
        <Route index path='/Collection/Create_Listen' element={<CreateListen/>}/>
      </Routes>
    </BrowserRouter>)
}

export default App
