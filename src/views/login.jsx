import React, { useState } from 'react';
import axios from 'axios';

function Login({ toggle }) {
  const [values, setValues] = useState({
    email_user: "",
    password_user: "",
  });

  axios.defaults.withCredentials = true;
  const EnvoyerRequete = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_API_URL + "/user/login"
    try {
        const response = await axios.post(url, values);
        console.log(response.data)
    } catch (error) {
        console.error("Erreur lors de la requête:", error.message);
    }
  };

  return (
    <form onSubmit={EnvoyerRequete}>
      <h2 className="text-2xl font-bold mb-6 text-white">Connexion</h2>
      <div className="mb-4">
        <input
          type="email"
          value={values.email_user}
          onChange={(e) => setValues({ ...values , email_user : e.target.value})}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Adresse e-mail"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          value={values.password_user}
          onChange={(e) => setValues({...values , password_user : e.target.value})}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mot de passe"
          required
        />
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-300">
        Se connecter
      </button>
      <p className="mt-4 text-center">
        <span className="text-blue-400 cursor-pointer hover:underline" onClick={toggle}>
          Créer un nouveau compte
        </span>
      </p>
    </form>
  );
}

export default Login;
