import React, { useState, useEffect } from 'react';

import images from "../../assets/image/LOGO.png"
import axios from "axios";
import { PopUp } from '../CreationStoryComponent.jsx';
import { Link } from 'react-router-dom';
import getDateOnly from '../../fonctionality/formateddate.jsx';
import List from '../listModel.jsx';
import { BsThreeDotsVertical } from 'react-icons/bs';
function ManageComponent() {
    const [data, setData] = useState([]);
    const [openDropdown, setopenDropdown] = useState(false);

    const [readDonne, setreadDonne] = useState([]);
    const [listenDonne, setlistenDonne] = useState([]);
    const [afficheUser, setAfficheUser] = useState(true);
    const [afficheListen, setAfficheListen] = useState(false);
    function ListeUser() {
        setAfficheUser(true);
        setAfficheListen(false);
    }

    function ListeListen() {
        setAfficheUser(false);
        setAfficheListen(true);
    }

    function Toggle() {
        setopenDropdown(!openDropdown);
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

            <div className=' items-center p-4 ml-36'>
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

            <div className='p-4 w-[60vw]  border-black border-l-[2px]'>
                <form action="" method="post" className='flex items-center'>
                    <div>
                        <input 
                            type="search" 
                            name="search" 
                            className='border p-2 bg-gray-100 rounded'
                            placeholder='search' id="search" />
                    </div>

                    <div className=''>
                        <button onClick={Toggle} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="my-4  bg-white hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center  " type="button">All <svg className="w-2.5 h-2.5 ms-3 outline-none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        {openDropdown &&
                            <div id="dropdown" className="relative   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="absolute py-2 left-4 text-sm border bg-white z-10 text-gray-700" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Active</button>
                              </li>

                              <li>
                                <button href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Date</button>
                              </li>
                            </ul>
                            </div>         
                    }    
                    </div>

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
                                       <td className='px-4 py-2'>Status</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

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
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>      
                                   <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>                                         <tr  className='text-center border-b'>
                                       <td className='px-4 py-2'>#</td>
                                       <td className='px-4 py-2'>titre</td>
                                       <td className='px-4 py-2'>Jhone Doe</td>
                                       <td className='px-4 py-2'>pending</td>
                                       <td className='px-4 py-2'>creer en 12juillet</td>
                                       <td className='px-4 py-2'><BsThreeDotsVertical></BsThreeDotsVertical></td>

                                   </tr>      
                                



                                </tbody>
                            </table>
                        }


            </div>
        </div>
    );
}

export default ManageComponent;
