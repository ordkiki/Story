import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PathRead } from '../PathBrowse';
import ReadUser from './ReadUser';
import Fichiertext from './Fichiertext';
import axios from 'axios';

function Readcomponent(props) {
  const location = useLocation();
  const { title, description } = location.state || {};
  const [data, setData] = useState({});

  axios.defaults.withCredentials = true;

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Histories/ReadOne/" + props.id;
    console.log("Fetching from URL:", url);
    try {
      const response = await axios.get(url);
      const resultData = response.data.results[0]; 
      setData(resultData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data.description);
  }, [data]);

  return (
        <div>
          <PathRead path={title} title={data.title} />
          <div className="mx-40 h-[23vh] rounded-[10px] flex items-center justify-center bg-slate-100">
          </div>
          <ReadUser
            titre = {data.title}
            genre= {data.genre} 
            nameuser={data.uwner || "Anonyme"} 
            date={data.created_at}
          />
          <Fichiertext
            text={data.content || "Aucune description disponible."}
          />
        </div>
      );
}

export default Readcomponent;
