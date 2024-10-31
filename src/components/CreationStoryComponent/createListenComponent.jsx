import React, { useState } from 'react';
import { PathCollection } from '../PathBrowse';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateListenComponent() {
  const [storyData, setStoryData] = useState({
    title: "",
    gender: "",
    content: "",
    file_img: null,
    description : ""
  });
  
  const navigate = useNavigate()
      axios.defaults.withCredentials = true;
  const EnvoyerRequete = async (e) => {
    e.preventDefault()
    const url = import.meta.env.VITE_API_URL + "/Histories/Create";
    try {
        const response = await axios.post(url, [storyData])

        // if (response.status == 200){
            const url2 = "/ReadMore/Read/" +response.data.id_histories
            navigate(url2)
        // }
    } catch (error) { const navigate = useNavigate()
        axios.defaults.withCredentials = true;
    const EnvoyerRequete = async (e) => {
      e.preventDefault()
      const url = import.meta.env.VITE_API_URL + "/Histories/Create";
      try {
          const response = await axios.post(url, [storyData])
  
          // if (response.status == 200){
              const url2 = "/ReadMore/Read/" +response.data.id_histories
              navigate(url2)
          // }
      } catch (error) {
          console.log(error);
          
      }
    }
  
        console.log(error);
        
    }
  }

  return (
    <div>
      <PathCollection path="Create Listen" />
      <div className="max-w-3xl p-6 mx-auto md:p-10">
        <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
          <h4 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl md:mb-0">
            Create Written Component
          </h4>
          <button
            type="button"
            className="px-5 py-2 text-white transition duration-300 bg-black rounded-md hover:bg-gray-800"
          >
            Save
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Import your image:</label>
            {/* <input
              className="block w-full h-32 p-2 bg-gray-100 border-2 border-gray-400 border-dashed rounded md:h-40 focus:border-blue-500 focus:outline-none"
              type="file"
              name="file_img"
              accept="image/*"
            /> */}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              onChange={(e) => {setStoryData({... storyData ,title : e.target.value}); console.log(e.target.value)}}
              placeholder="Title"
              name="titre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Genre:</label>
            <input
              type="text"
              placeholder="Genre"
              name="genre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Description:</label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Text:</label>
            <textarea
              placeholder="Your text"
              name="content"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <input
                onSubmit={EnvoyerRequete}
                type="submit"
                value="Publish"
                className="w-full p-3 border-2 border-black rounded-md font-medium hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateListenComponent;
