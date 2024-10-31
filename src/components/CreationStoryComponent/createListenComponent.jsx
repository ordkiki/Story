import React, { useState } from 'react'
import { PathCollection } from '../PathBrowse'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateListenComponent(props) {
    const [values, setValues] = useState({
        title: "",
        image: "",
        content : "",
        gender: "",
        description: ""
      });

      const navigate =useNavigate();
      axios.defaults.withCredentials = true;
    
      const EnvoyerRequete = async (e) => {
        e.preventDefault();
        // if(values.content == null || values.description == null || values.gender == null || values.title){
        //     return console.error("Donnes non complet");
        // }else{

            const url = import.meta.env.VITE_API_URL + "/Histories/create";
            try {
              const response = await axios.post(url, values);
              if(response.status == 200){
                navigate("/ReadMore/Read/"+response.data.id_histories)
              }
            } catch (error) {
              console.error("Erreur lors de la requête:", error.message);
            }
        // }
      };
    
    return (
        <div>
            <PathCollection path="Create written Component" />
            <div className='mx-52 p-10'>
                <div className='flex justify-between'>
                    <h4 className='text-3xl font-bold'>
                        Create written component
                    </h4>
                    <button className='bg-black px-3 font-medium text-white' onClick={EnvoyerRequete}>
                        Save
                    </button>
                </div>
                <form action="" method="POST" className="my-5" encType="multipart/form-data">
                    <table>
                        {
                            !props.isRead == true ?
                                <tr>
                                    <td>
                                        <input
                                            className="w-[71vw] h-[20vh] bg-gray-100 p-2 rounded border-dashed border-[2px] border-black"
                                            type="file"
                                            name="file_img"
                                        />
                                    </td>
                                </tr>
                                :
                                <tr></tr>
                        }
                        <tr>
                            <td>
                                <input type="text" placeholder='title' name='titre' id='titre' className="my-2 border w-[71vw] p-2"  onChange={(e) =>  setValues({...values , title : e.target.value})} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="genre" placeholder='genre' name='genre' className="my-2 border w-[71vw] p-2" onChange={(e) => setValues({...values , gender : e.target.value})}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="text" placeholder='votre description' name='text' className="my-2 border w-[71vw] p-2" onChange={(e) => setValues({...values , description : e.target.value})}/>
                            </td>
                        </tr>
                        <tr>
                        {
                            props.isRead?
                                    <td>
                                        <input type="text" placeholder='votre text' name='text' className="my-2 border w-[71vw] p-2" onChange={(e) => {setValues({...values ,  content: e.target.value})}}/>
                                    </td> 
                                :<td></td>
                        }
                        </tr>
                    </table>
                </form>
            </div>
        </div>

    )
}

export default CreateListenComponent;
