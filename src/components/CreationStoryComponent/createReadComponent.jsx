import React, { useState } from 'react';
import { PathCollection } from '../PathBrowse';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateReadComponent() {
  const [storyData, setStoryData] = useState({
    "title": "",
    "gender": "",
    "content": "",
    "file_img": null,
    "description" : "",
    "owner" : localStorage.getItem("id_user")
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const EnvoyerRequete = async (e) => {
  e.preventDefault()
  console.log(storyData)
  const url = import.meta.env.VITE_API_URL + "/Histories/Create";
  try {
      const response = await axios.post(url, storyData)

      if (response.status == 200){
          const url2 = "/ReadMore/Read/" +response.data.id_histories
          navigate("/ReadMore/Read/"+response.data.id_histories)
      }
  } catch (error) {
      console.log(error);
      
  }
  }

  return (
    <div>
      <PathCollection path="Create written " />
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

        <form onSubmit={EnvoyerRequete} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Import your image:</label>
            <input
              onChange={(e) => { setStoryData({...storyData , file_img : e.target.value}) }}
              className="block w-full h-32 p-2 bg-gray-100 border-2 border-gray-400 border-dashed rounded md:h-40 focus:border-blue-500 focus:outline-none"
              type="file"
              name="file_img"
              accept="image/*"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title:</label>
            <input
              id='title'
              onChange={(e) => { setStoryData({...storyData , title : e.target.value}) }}
              type="text"
              placeholder="Title"
              name="titre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Genre:</label>
            <input
              id='gender'
              onChange={(e) => { setStoryData({...storyData , gender : e.target.value}) }}
              type="text"
              placeholder="Genre"
              name="genre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Description:</label>
            <input
              id='description'
              onChange={(e) => { setStoryData({...storyData , description : e.target.value}) }}
              type="text"
              placeholder="Genre"
              name="genre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Text:</label>
            <textarea
              id='content'
              onChange={(e) => { setStoryData({...storyData , content : e.target.value}) }}
              placeholder="Your text"
              name="content"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <input
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

export default CreateReadComponent;
