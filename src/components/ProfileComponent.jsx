import { useEffect, useState } from "react";
import ProfileModel from "./ProfileModel.jsx"
import axios from "axios";
import { Link } from "react-router-dom";
function ProfileComponent() {
    const [readDonne, setreadDonne] = useState([]);
    const [listenDonne, setlistenDonne] = useState([]);

    const [user ,setUser] = useState({});
    const [data, setData] = useState([]);

    axios.defaults.withCredentials = true;
    const fechUser = async () => {
      const url = import.meta.env.VITE_API_URL + "/user/get_info/" + localStorage.getItem("id_user");
      console.log(localStorage.getItem("id_user"))
      try {
        const response = await axios.get(url);
        const resultData = response.data; 
        console.log(response.data.username)
        setUser(resultData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    const fetchData = async () => {
        const url = import.meta.env.VITE_API_URL + "/Histories/get/" + localStorage.getItem("id_user");
        console.log(url);
        
        try {
            const response = await axios.get(url);
            if (response.status == 200) {
                const resultData = response.data.results;
                console.log(resultData);
                setData(resultData);
            
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }
    };
    
    useEffect(() => {
        fechUser();
        fetchData();
    }, []);
    useEffect(() => {
        setreadDonne(data.filter((donne) => donne.types === "histoire"));
    }, [data]);
    useEffect(() => {
        setlistenDonne(data.filter((donne) => donne.types === "audio"));
    }, [data]);
  return (
    <div>
        <div className="p-4 mx-36 flex items-center justify-between">
            <h1 className='font-bold text-3xl'>Profile</h1>
        </div>
        <div className=" mx-36 h-[15vh] rounded-[10px] flex items-center justify-center bg-slate-100">  
            <ProfileModel
                read={readDonne.length}
                audio={listenDonne.length}
                published={data.length}
                favorite="0"
            />
        </div>
        <br />
        <div className="mx-36 h-[45vh] rounded-t-[10px] p-[20px] justify-center bg-slate-100">
            <div>
                <h1 className="font-bold text-[20px]">Personal Information</h1>
                <h1>You can view and update your information here</h1>
            </div>
            <br />
            <div>
                <form action="">
                    <h1>username</h1>
                    <input type="text" placeholder={user.username} defaultValue={user.username} className="mt-[5px] w-[18vw] h-[4vh]"/>
                    <h1>email</h1>
                    <input type="text" placeholder={user.email_user} defaultValue={user.email_user}  className="mt-[5px] w-[18vw] h-[4vh]"/>
                    {/* <h1>password</h1>
                    <input type="email" className="mt-[5px] w-[18vw] h-[4vh]"/> */}
                </form>
            </div>
        </div>
        <div className='w-screen flex justify-center items-center'>
            <hr className='border-[1px] w-[85vw] border-gray-500'/>
        </div>
        <div className=" flex mx-36 h-[10vh] rounded-b-[10px] p-[20px] items-center justify-between bg-slate-100">
            <h1>Don't forget to save to apply your change</h1>
            <Link to="/Collection/Create_Read">
                <button className='font-bold bg-black px-[1.7vw] py-[0.5vw] text-white hover:bg-slate-800 rounded-[10px]'>Create Story</button>
            </Link>
        </div>
    </div>
  )
}

export default ProfileComponent