import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export function Signup() {
  const [values, setValues] = useState({
    username: "",
    email_user: "",
    password_user: "",
    confirm_password_user: "",
  });
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleRegister = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_API_URL + "/user/add";
    try {
      const response = await axios.post(url, values);
      console.log(response)
      if(response.status == 200){
        navigate("/login")
      }
      setMessage("Compte créé avec succès !");
    } catch (error) {
      setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <form onSubmit={handleRegister} className="p-4 max-w-sm mx-auto border">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Votre nom
          </label>
          <input
            name='username'
            type="username"
            id="username"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            placeholder="Votre adresse email"
            required
            value={values.username}
            onChange={(e) => setValues({...values, username : e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Votre adresse email
          </label>
          <input
            name='email'
            type="email"
            id="email"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            placeholder="Votre adresse email"
            required
            value={values.email_user}
            onChange={(e) => setValues({...values, email_user : e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Votre mot de passe :
          </label>
          <input
            name='password'
            type="password"
            id="password"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            required
            value={values.password_user}
            onChange={(e) => setValues({...values, password_user : e.target.value})}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
            Répéter votre mot de passe :
          </label>
          <input
            name='confirmPassword'
            type="password"
            id="confirmPassword"
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            required
            value={values.confirm_password_user}
            onChange={(e) => setValues({...values, confirm_password_user : e.target.value})}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              name='agree'
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 bg-gray-100"
              required
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">
            I agree with the{" "}
            <Link to="#" className="text-blue-600 hover:underline">terms and conditions</Link>
          </label>
        </div>
        <input
          type="submit"
          value="Créer votre compte"
          className="text-black border px-5 py-2.5 text-center hover:bg-black border-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit"
        />
        <Link to="/Login" className='text-[12px] text-blue-500 mt-2'>
          Connectez-vous avec un compte existant?
        </Link>
        {message && <p className="text-center text-sm mt-3">{message}</p>}
      </form>
    </div>
  );
}



export function Login() {
  const [values, setValues] = useState({
    email_user: "",
    password_user: "",
  });
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate()
  
  axios.defaults.withCredentials = true;

  const EnvoyerRequete = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_API_URL + "/user/login";
    try {
      const response = await axios.post(url, values);
      if(response.status == 200){
        localStorage.setItem("token" ,response.data.token)
        localStorage.setItem("id_user",response.data.user.id_user)
        console.log(response.data.token)
        console.log(response.data.user.id_user);
        
        navigate("/Browse")
      }
      setMessage("Connexion réussie !");
    } catch (error) {
      setMessage("Erreur lors de la connexion. Veuillez vérifier vos identifiants."); // Message d'erreur
      console.error("Erreur lors de la requête:", error.message);
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <form onSubmit={EnvoyerRequete} className="p-4 max-w-sm mx-auto border">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Votre adresse email
          </label>
          <input
            name='email'
            type="email"
            id="email"
            onChange={(e) => setValues({ ...values , email_user : e.target.value})}
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            placeholder="Votre adresse email"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
            Votre mot de passe :
          </label>
          <input
            name='password'
            type="password"
            id="password"
            onChange={(e) => setValues({ ...values , password_user : e.target.value})}
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100"
            required
          />
        </div>
        <input
          type="submit"
          className="text-black border hover:bg-black border-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          value="Connecter"
        />
        <Link to="/SignUp" className='text-[12px] text-blue-500 mt-2'>
          Créer un compte?
        </Link>
        {message && <p className="text-center text-sm mt-3">{message}</p>} {/* Affiche le message */}
      </form>
    </div>
  );
}