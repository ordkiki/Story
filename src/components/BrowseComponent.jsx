import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardRead, CardListen } from './CardComponent';
import { FaAngleRight } from 'react-icons/fa';
import axios from "axios";

export function Listen() {
  const [data, setData] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState([]);
  

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Histories/Read"
    try {
      const response = await axios.get(url);
      if (response.data.status === "success") {
        console.log("Résultats:", response.data.results[0]);
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
    <div className='my-10 listen'>
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <h3 className='text-2xl font-medium'>Listen</h3>
        <Link to="/ListenMore" className='flex items-center mt-2 md:mt-0'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='flex flex-wrap justify-between p-4 card-vakiana'>
        {/* aza averina eto tsony ilay slice */}
        {donneesFiltres.length > 0 ? (
          donneesFiltres.slice(0,4).map((donne) => (
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

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Histories/Read"
    try {
      const response = await axios.get(url);
      if (response.data.status === "success") {
        console.log("Résultats:", response.data.results[0]);
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
    <div className='my-5 read'>
      <div className='flex flex-col items-center justify-between mb-4 md:flex-row'>
        <h3 className='text-xl font-medium md:text-2xl'>Read</h3>
        <Link to="/ReadMore" className='flex items-center mt-2 text-sm md:mt-0 md:text-base'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='flex flex-wrap p-2 card-vakiana'>
        {donneesFiltres.length > 0 ? (
          donneesFiltres.slice(0,4).map((donne) => (
            <CardRead key={donne.id_histories} id={donne.id_histories} title={donne.title || "Titre non disponible"} description={donne.content || "Description non disponible"} />
          ))
        ) : (
          <p>Aucune donnée à afficher.</p>
        )}
      </div>
    </div>
  );
}
