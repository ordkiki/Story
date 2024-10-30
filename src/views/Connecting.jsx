import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleSignUp(e) {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Formulaire envoyé avec succès :", formData);
    } else {
      alert("Les mots de passe ne correspondent pas !");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <form onSubmit={handleSignUp} className="p-4 max-w-sm mx-auto border">
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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
            value={formData.confirmPassword}
            onChange={handleChange}
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
      </form>
    </div>
  );
}

export function Login() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <form method='GET' action='/Browse?' className="p-4 max-w-sm mx-auto border">
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
      </form>
    </div>
  );
}
