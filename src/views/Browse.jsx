import Navbar from "../components/Navbar";
import { Read, Listen } from "../components/BrowseComponent";

function Browse() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='p-4 mx-4 md:mx-10 lg:mx-36'>
        <h1 className='font-bold text-3xl mb-6'>Browse</h1>
        <Read />
        <Listen className="my-10" />
      </div>
    </div>
  );
}

export default Browse;
