import React, { useState, useEffect } from 'react';
import List from './listModel.jsx';
import images from "../assets/image/LOGO.png";
import axios from "axios";
import { PopUp } from './CreationStoryComponent.jsx';

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
        //mbola  tsy tena izy
        const url = import.meta.env.VITE_API_URL + "/Read"
        try {
            const response = await axios.get(url);
            if (response.data.status === "success") {
                setData(response.data.results[0]);
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
            <div className='p-4 mx-36 flex items-center justify-between'>
                <h1 className='font-bold text-3xl'>My contents</h1>
                <button onClick={openPopup} className='font-bold bg-black px-[1.7vw] py-[0.5vw] text-white hover:bg-slate-800 rounded-[10px]'>
                    Create Story
                </button>
            </div>

            {isPopupVisible && <PopUp onClose={closePopup} />}


            <div className='p-4 mx-36 flex items-center'>
                <button
                    onClick={ListeRead} 
                    className={`font-bold px-[1.7vw] py-[0.5vw] rounded-t-[10px] ${afficheRead ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                    Read({setreadDonne.length+1})
                </button>
                <button
                    onClick={ListeListen} 
                    className={`font-bold px-[1.7vw] py-[0.5vw] text-gray-700 rounded-t-[10px] ${afficheListen ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                    Listen({listenDonne.length+1})
                </button>
            </div>

            <div className='w-screen flex justify-center items-center'>
                <hr className='border-[1px] w-[83.3vw] border-black' />
            </div>

            <div className='p-4 mx-36 flex items-center justify-between'>
                <div className='flex'>
                    <h1 className='px-[2vw] font-bold'>#</h1>
                    <h1 className='px-[2vw] font-bold'>Cover</h1>
                    <h1 className='px-[2vw] font-bold'>Title</h1>
                </div>
                <div className='flex'>
                    <h1 className='px-[2vw] font-bold'>Genre</h1>
                    <h1 className='px-[2vw] font-bold'>Views</h1>
                    <h1 className='px-[2vw] font-bold'>Status</h1>
                    <h1 className='px-[2vw] font-bold'>Updated date</h1>
                </div>
            </div>

            <div className='w-screen flex justify-center items-center'>
                <hr className='border-[1px] w-[83.3vw] border-black' />
            </div>
            {
                afficheRead ? 
                    readDonne.length > 0 ? 
                    readDonne.map((donne, index) => (
                        <List
                            key={donne.id_histories}
                            id={index}
                            image={images}
                            Titre={donne.title || "Titre non disponible"}
                            genre={donne.types || "Genre non disponible"}
                            views={"+250 views"}
                            status={"published"}
                            date={getDateOnly(donne.created_at)}
                        />
                    )):<p>Aucune donnée à afficher 5 (READ).</p>
                :listenDonne.length > 0 ? 
                    listenDonne.map((donne, index) => (
                        <List
                            key={donne.id_histories}
                            id={index}
                            image={images}
                            Titre={donne.title || "Titre non disponible"}
                            genre={donne.types || "Genre non disponible"}
                            views={"+250 views"}
                            status={"published"}
                            date={getDateOnly(donne.created_at)}
                        />
                    )):<p>Aucune donnée à afficher 5 (READ).</p>
            }
        </div>
    );
}

export default ListComponent;