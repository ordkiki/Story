import React from 'react'
import CreateListenComponent from '../components/CreationStoryComponent/createListenComponent'
import Navbar from '../components/Navbar'

function CreateRead() {
  return (
    <div>
        <Navbar></Navbar>
        <CreateListenComponent isRead={true} />
    </div>
  )
}

export default CreateRead