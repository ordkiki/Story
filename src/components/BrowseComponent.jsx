import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardRead, CardListen } from './CardComponent';
import { FaAngleRight } from 'react-icons/fa';
import axios from "axios";

export function Listen() {
  const [data, setData] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8001/Histories/Read");
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
    <div className='listen my-10'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h3 className='font-medium text-2xl'>Listen</h3>
        <Link to="/ListenMore" className='flex items-center mt-2 md:mt-0'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='p-4 card-vakiana flex flex-wrap justify-between'>
        {donneesFiltres.length > 0 ? (
          donneesFiltres.map((donne) => (
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
    try {
      const response = await axios.get("http://127.0.0.1:8001/Histories/Read");
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
    <div className='read my-5'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
        <h3 className='font-medium text-xl md:text-2xl'>Read</h3>
        <Link to="/ReadMore" className='flex items-center mt-2 md:mt-0 text-sm md:text-base'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='p-2 card-vakiana flex flex-wrap justify-between'>
        {donneesFiltres.length > 0 ? (
          donneesFiltres.map((donne) => (
            <CardRead key={donne.id_histories} title={donne.title || "Titre non disponible"} description={donne.content || "Description non disponible"} />
          ))
        ) : (
          <p>Aucune donnée à afficher.</p>
        )}
      </div>
    </div>
  );
}
