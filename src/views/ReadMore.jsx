import React from 'react'
import Navbar from '../components/Navbar'
import { CardRead } from '../components/CardComponent'
import PathBrowse from '../components/PathBrowse'
import SelectOption from '../components/ReadMoreComponent'
export default function ReadMore() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
          <PathBrowse path="Read"></PathBrowse>
        </div>
        <div className='flex justify-between px-40 my-5'>
          <div className=''>
            <div>
              <h1 className='text-3xl font-bold'>
                Read Stories
              </h1>
              <p>120 writtenContent Fetched</p>
            </div>

            <div>

            </div>
          </div>

          <div>
            <SelectOption>
            </SelectOption>
          </div>


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

