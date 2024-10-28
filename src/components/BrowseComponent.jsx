// Composant Parent - Read

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardRead, CardListen } from './CardComponent';
import { FaAngleRight } from 'react-icons/fa';
import axios from "axios";

export function Listen() {
  const [data, setData] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState([]);
  
  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Read";
    try {
      const response = await axios.get(url);
      if (response.data.status === "success") {
        setData(response.data.results[0]);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDonneesFiltres(data.filter((donne) => donne.types === "audio"));
  }, [data]); 

  return (
    <div className='listen my-10'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h3 className='font-medium text-2xl'>Listen</h3>
        <Link to="/ListenMore" className='flex items-center mt-2 md:mt-0'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='p-4 card-vakiana flex flex-wrap justify-between'>
        {donneesFiltres.length > 0 ? (
          donneesFiltres.slice(0, 4).map((donne) => (
            <CardListen key={donne.id_histories} title={donne.title || "Titre non disponible"} description={donne.content || "Description non disponible"} />
          ))
        ) : (
          <p>Aucune donnée à afficher.</p>
        )}
      </div>
    </div>
  );
}

export function Read() {
  const [data, setData] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState([]);

  // Fonction changerPage déclarée dans le composant parent

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Read";
    try {
      const response = await axios.get(url);
      if (response.data.status === "success") {
        setData(response.data.results[0]);
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDonneesFiltres(data.filter((donne) => donne.types === "histoire"));
  }, [data]);

  return (
    <div className='read my-5'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
        <h3 className='font-medium text-xl md:text-2xl'>Read</h3>
        <Link to="/ReadMore" className='flex items-center mt-2 md:mt-0 text-sm md:text-base'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='p-2 card-vakiana flex flex-wrap justify-between'>
        {donneesFiltres.length > 0 ? (
          donneesFiltres.slice(0, 4).map((donne) => (
            <CardRead key={donne.id_histories} changerPage={changerPage} title={donne.title || "Titre non disponible"} description={donne.content || "Description non disponible"} />
          ))
        ) : (
          <p>Aucune donnée à afficher.</p>
        )}
      </div>
    </div>
  );
}
