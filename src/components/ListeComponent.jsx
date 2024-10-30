import React, { useState, useEffect } from 'react';
import List from './listModel.jsx';
import images from "../assets/image/LOGO.png";
import axios from "axios";
import { PopUp } from './CreationStoryComponent.jsx';
import { Link } from 'react-router-dom';

function ListComponent() {
    const [data, setData] = useState([]);
    const [readDonne, setreadDonne] = useState([]);
    const [listenDonne, setlistenDonne] = useState([]);
    const [afficheRead, setAfficheRead] = useState(true);
    const [afficheListen, setAfficheListen] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    function ListeRead() {
        setAfficheRead(true);
        setAfficheListen(false);
    }

    function ListeListen() {
        setAfficheRead(false);
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

    const getDateOnly = (dateString) => {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('fr-FR', options);
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
        <div>
            <div className='flex items-center justify-between p-4 mx-36'>
                <h1 className='text-3xl font-bold'>My contents</h1>
                <button onClick={openPopup} className='font-bold bg-black px-[1.7vw] py-[0.5vw] text-white hover:bg-slate-800 rounded-[10px]'>
                    Create Story
                </button>
            </div>

            {isPopupVisible && <PopUp onClose={closePopup} />}

            <div className='flex items-center p-4 mx-36'>
                <button
                    onClick={ListeRead}
                    className={`font-bold px-[1.7vw] py-[0.5vw] rounded-t-[10px] ${afficheRead ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                    Read({readDonne.length})
                </button>
                <button
                    onClick={ListeListen}
                    className={`font-bold px-[1.7vw] py-[0.5vw] text-gray-700 rounded-t-[10px] ${afficheListen ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                    Listen({listenDonne.length})
                </button>
            </div>

            <div className='flex items-center justify-center w-screen'>
                <hr className='border-[1px] w-[83.3vw] border-black' />
            </div>

            {/* Table representation */}
            <div className='p-4 mx-36'>
            <table className='min-w-full border'>
    <thead>
        <tr className='text-center border-b'>
            <th className='px-4 py-2'>#</th>
            <th className='px-4 py-2'>Cover</th>
            <th className='px-4 py-2'>Title</th>
            <th className='px-4 py-2'>Genre</th>
            <th className='px-4 py-2'>Views</th>
            <th className='px-4 py-2'>Status</th>
            <th className='px-4 py-2'>Updated Date</th>
        </tr>
    </thead>
    <tbody>
        {afficheRead
            ? readDonne.length > 0
                ? readDonne.map((donne, index) => (
                    // <Link to={"/ReadMore/Read/"+donne.id_histories}>
                    // </Link>
                        <tr key={donne.id_histories} className='text-center border-b'>
                            <td className='px-4 py-2'>{index + 1}</td>
                            <td className='px-4 py-2'>
                                <img src={images} alt="cover" className='object-cover w-10 h-10 mx-auto' />
                            </td>
                            <td className='px-4 py-2'>{donne.title || "Titre non disponible"}</td>
                            <td className='px-4 py-2'>{donne.types || "Genre non disponible"}</td>
                            <td className='px-4 py-2'>+250 views</td>
                            <td className='px-4 py-2'>published</td>
                            <td className='px-4 py-2'>{getDateOnly(donne.created_at)}</td>
                        </tr>
                ))
                : <tr><td colSpan="7" className='px-4 py-2 text-center'>vous ne publiez pas des Story Texte , Esssayez</td></tr>
            : listenDonne.length > 0
                ? listenDonne.map((donne, index) => (
                    <tr key={donne.id_histories} className='text-center border-b'>
                        <td className='px-4 py-2'>{index + 1}</td>
                        <td className='px-4 py-2'>
                            <img src={images} alt="cover" className='object-cover w-10 h-10 mx-auto' />
                        </td>
                        <td className='px-4 py-2'>{donne.title || "Titre non disponible"}</td>
                        <td className='px-4 py-2'>{donne.types || "Genre non disponible"}</td>
                        <td className='px-4 py-2'>+250 views</td>
                        <td className='px-4 py-2'>published</td>
                        <td className='px-4 py-2'>{getDateOnly(donne.created_at)}</td>
                    </tr>
                ))
                : <tr><td colSpan="7" className='px-4 py-2 text-center'>vous ne publiez pas des Story audio , Esssayez</td></tr>
        }
    </tbody>
</table>

            </div>
        </div>
    );
}

export default ListComponent;
