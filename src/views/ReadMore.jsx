import React from 'react'
import Navbar from '../components/Navbar'
import { CardRead } from '../components/CardComponent'
import PathBrowse from '../components/PathBrowse'
export default function ReadMore() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
          <PathBrowse path="Read"></PathBrowse>
        </div>
        
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
        </div>

    </div>
  )
}

