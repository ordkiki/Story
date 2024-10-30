import React, { useState } from 'react';
import axios from 'axios';

function Register({ toggle }) {
  const [values, setValues] = useState({
    username: "",
    email_user: "",
    password_user: "",
  });
  axios.defaults.withCredentials = true;
  const handleRegister = async (e) => {
    e.preventDefault()
    const url = import.meta.env.VITE_API_URL + "/user/add"
    try {
      const response = await axios.post(url, values);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Inscription</h2>
      <div className="mb-4">
        <input
          type="text"
          value={values.username}
          onChange={(e) => setValues({...values, username : e.target.value})}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nom d'utilisateur"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={values.email_user}
          onChange={(e) => setValues({...values, email_user : e.target.value})}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Adresse e-mail"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          value={values.password_user}
          onChange={(e) => setValues({...values, password_user : e.target.value})}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mot de passe"
          required
        />
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300" onClick={handleRegister}>
        S'inscrire
      </button>
      <p className="mt-4 text-center">
        <span className="text-blue-400 cursor-pointer hover:underline" onClick={toggle}>
          Se connecter à votre compte
        </span>
      </p>
      </div>
  );
}

export default Register;
