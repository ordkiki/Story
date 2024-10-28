
import React ,{useEffect ,useState} from 'react'
import Navbar from '../components/Navbar'
import { CardListen } from '../components/CardComponent'
import PathBrowse from '../components/PathBrowse'
import axios from 'axios'
export default function ReadMore() {
  const [data, setData] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState([]);

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL + "/Read"
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
    <div>
        <Navbar></Navbar>
        <div>
          <PathBrowse path="Listen"></PathBrowse>
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          {donneesFiltres.length > 0 ? (
            donneesFiltres.map((donne) => (
              <CardListen key={donne.id_histories} title={donne.title || "Titre non disponible"} description={donne.content || "Description non disponible"} />
            ))
          ) : (
            <p>Aucune donnée à afficher.</p>
          )}
        </div>

        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>
        <div className='flex mx-40 p-4 w-[85vw]'>
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
          <CardListen title="Angatra" description="tantara mapatahoatra" />
        </div>

    </div>
  )
}

