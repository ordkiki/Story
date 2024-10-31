import React from 'react'
import CreateReadComponent from '../components/CreationStoryComponent/createReadComponent'
import Navbar from '../components/Navbar'

function CreateRead() {
  return (
    <div>
        <Navbar></Navbar>
        <CreateReadComponent/>
    </div>
  )
}

export default CreateRead