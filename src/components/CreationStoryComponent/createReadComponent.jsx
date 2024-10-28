import React, { useState } from "react";

const CreateReadComponent = ({ addHistory }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [gender, setGender] = useState("");
  // const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHistory = {
      title,
      content,
      gender,
      // image
    };
    addHistory(newHistory);
    setTitle("");
    setContent("");
    setGender("");
    // setImage(null);
  };

  return (
    <div>
      <h2>Créer une Histoire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        {/* <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        <button type="submit">Ajouter Histoire</button>
      </form>
    </div>
  );
};

export default CreateReadComponent;