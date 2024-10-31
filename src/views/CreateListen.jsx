import React from 'react'
import Navbar from '../components/Navbar'
import CreateListenComponent from '../components/CreationStoryComponent/createListenComponent'
function CreateListen() {
  return (
    <div>
        <Navbar></Navbar>
        <CreateListenComponent isRead={false} />
    </div>
  )
}

export default CreateListen