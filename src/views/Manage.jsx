import ManageComponent from "../components/ManageComponent/ManageComponent"
import Navbar from "../components/Navbar"

function Manage() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='p-4 mx-4 md:mx-10 lg:mx-36'>
        <h1 className='font-bold text-3xl mb-6'>Manage Story</h1>
      </div>
      <ManageComponent></ManageComponent>
    </div>
  )
}

export default Manage