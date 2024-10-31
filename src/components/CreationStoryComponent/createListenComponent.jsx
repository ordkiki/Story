import React, { useState } from 'react';
import Navbar from '../Navbar';
import { PathCollection } from '../PathBrowse';

function CreateListenComponent() {
  const [storyData, setStoryData] = useState({
    titre: "",
    genre: "",
    content: "",
  });

  function Creer(e) {
    e.preventDefault();
    console.log("Formulaire envoyé avec succès :", storyData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setStoryData({ ...storyData, [name]: value });
  }

  return (
    <div>
        
      <PathCollection path="Create Listen" />
      <div className="max-w-3xl mx-auto p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            Create Listen
          </h4>
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Save
          </button>
        </div>
        
        <form onSubmit={Creer} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Import your image :</label>
            <input
              onChange={handleChange}
              className="block w-full h-32 md:h-40 bg-gray-100 p-2 rounded border-2 border-dashed border-gray-400 focus:border-blue-500 focus:outline-none"
              type="file"
              name="file_audios"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title :</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Title"
              name="titre"
              className="block w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Genre :</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Genre"
              name="genre"
              className="block w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Fichier audio :</label>
            <input
              onChange={handleChange}
              className="block w-full h-32 md:h-40 bg-gray-100 p-2 rounded border-2 border-dashed border-gray-400 focus:border-blue-500 focus:outline-none"
              type="file"
              name="file_audios"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Publish"
              className="w-full p-3 border-black border-[2px]  rounded-md font-medium hover:bg-black hover:text-white transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateListenComponent;
