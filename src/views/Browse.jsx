import Navbar from "../components/Navbar";
import { Read, Listen } from "../components/BrowseComponent";
import axios from "axios";
import { useEffect, useState } from "react";

function Browse() {
  useEffect(()=>{
    fetcUser()
  },[])
  const [nomUser ,setNomUser] = useState()
  const fetcUser = async () => {
    const url = import.meta.env.VITE_API_URL + "/user/get_info/" + localStorage.getItem("id_user")
    console.log(url);
    
    try {
      const response = await axios.get(url)
      if(response.status == 200){
        setNomUser(response.data.username)
      }
    } catch (error) {
      
    }
  }
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='p-4 mx-4 md:mx-10 lg:mx-36'>
        <h1 className='font-bold text-3xl mb-6'>Browse</h1>
        <h3 className='text-2xl mb-6'>Welcome , {nomUser} !!!</h3>
        <Read />
        <Listen className="my-10" />
      </div>
    </div>
  );
}

export default Browse;
