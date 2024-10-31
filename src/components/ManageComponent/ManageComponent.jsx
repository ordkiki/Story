import React, { useState, useEffect } from 'react';

import images from "../../assets/image/LOGO.png"
import axios from "axios";
import { PopUp } from '../CreationStoryComponent.jsx';
import { Link } from 'react-router-dom';
import getDateOnly from '../../fonctionality/formateddate.jsx';
import List from '../listModel.jsx';
import { FaRemoveFormat } from 'react-icons/fa';

function ManageComponent() {
    const [data, setData] = useState([]);
    const [readDonne, setreadDonne] = useState([]);
    const [listenDonne, setlistenDonne] = useState([]);
    const [afficheUser, setAfficheUser] = useState(true);
    const [afficheListen, setAfficheListen] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    function ListeUser() {
        setAfficheUser(true);
        setAfficheListen(false);
    }

    function ListeListen() {
        setAfficheUser(false);
        setAfficheListen(true);
    }

    function openPopup() {
        setIsPopupVisible(true);
    }

    function closePopup() {
        setIsPopupVisible(false);
    }

    const fetchData = async () => {
        const url = import.meta.env.VITE_API_URL + "/Histories/get/" + localStorage.getItem("id_user");
        console.log(url);
        
        try {
            const response = await axios.get(url);
            if (response.data.status === "success") {
                setData(response.data.results);
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setreadDonne(data.filter((donne) => donne.types === "histoire"));
    }, [data]);
    useEffect(() => {
        setlistenDonne(data.filter((donne) => donne.types === "audio"));
    }, [data]);

    return (
        <div className='flex'>

            <div className=' items-center p-4 mx-36'>
                <div>
                    <button
                        onClick={ListeUser}
                        className={`font-bold px-[1.7vw] py-[0.5vw] rounded-t-[10px] ${afficheUser ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                        User({readDonne.length})
                    </button>
                </div>
                <div>

                    <button
                        onClick={ListeListen}
                        className={`font-bold px-[1.7vw] py-[0.5vw] text-gray-700 rounded-t-[10px] ${afficheListen ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                        Listen({listenDonne.length})
                    </button>
                </div>
            </div>

            <div className='p-4 h-[60vh] w-[60vw] overflow-y-scroll border-black border-l-[2px]'>
                <form action="" method="post">

                </form>
                        {afficheUser &&
                            <table className='min-w-full bg-white rounded shadow-sm '>
                                <thead>
                                    <tr className='text-center border-b'>
                                        <th className='px-4 py-2'>id</th>
                                        <th className='px-4 py-2'>name</th>
                                        <th className='px-4 py-2'>mdp</th>
                                        <th className='px-4 py-2'>email</th>
                                        <th className='px-4 py-2'>compte create at</th>
                                    </tr>
                                </thead>
                        

                                <tbody className=''>
                                
                                   <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>Username</td>
                                       <td className='px-4 py-2'>email</td>
                                       <td className='px-4 py-2'>mot de passe</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                   </tr>      



                                </tbody>
                            </table>
                        }
                        {afficheListen &&
                            <table className='min-w-full bg-white rounded shadow-sm '>
                                <thead>
                                    <tr className='text-center border-b'>
                                        <th className='px-4 py-2'>id</th>
                                        <th className='px-4 py-2'>title</th>
                                        <th className='px-4 py-2'>created by</th>
                                        <th className='px-4 py-2'>Approval</th>
                                        <th className='px-4 py-2'>create date</th>
                                    </tr>
                                </thead>
                        

                                <tbody className=''>
                                
                                   <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><FaRemoveFormat></FaRemoveFormat></td>

                                   </tr>      



                                </tbody>
                            </table>
                        }


            </div>
        </div>
    );
}

export default ManageComponent;
