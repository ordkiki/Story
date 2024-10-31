import React, { useState } from 'react';
import { PathCollection } from '../PathBrowse';

function CreateReadComponent() {
  const [storyData, setStoryData] = useState({
    titre: "",
    genre: "",
    content: "",
    file_img: null,
  });

  function Creer(e) {
    e.preventDefault();
    console.log("Formulaire envoyé avec succès :", storyData);
  }

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setStoryData({ ...storyData, [name]: files[0] });
    } else {
      setStoryData({ ...storyData, [name]: value });
    }
  }

  return (
    <div>
      <PathCollection path="Create Read" />
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

        <form onSubmit={Creer} className="space-y-5" encType="multipart/form-data">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Import your image:</label>
            <input
              onChange={handleChange}
              className="block w-full h-32 p-2 bg-gray-100 border-2 border-gray-400 border-dashed rounded md:h-40 focus:border-blue-500 focus:outline-none"
              type="file"
              name="file_img"
              accept="image/*"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title:</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Title"
              name="titre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Genre:</label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Genre"
              name="genre"
              className="block w-full p-3 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Text:</label>
            <textarea
              onChange={handleChange}
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
