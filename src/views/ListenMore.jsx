import Navbar from '../components/Navbar'
import { CardListen } from '../components/CardComponent'
import PathBrowse from '../components/PathBrowse'
export default function ReadMore() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
          <PathBrowse path="Listen"></PathBrowse>
        </div>
        
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>

    </div>
  )
}

