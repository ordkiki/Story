import React from 'react'
import Card from './CardComponent'

function BrowseComponent() {
  return (
    <div className='p-4 mx-36'>
        <h1 className='font-bold text-3xl'>Browse</h1>
        <div className='read'>
            <h3 className='font-medium text-2xl'>Read</h3>
        </div>
        <Card></Card>
    </div>
  )
}

export default BrowseComponent