import React, { useState } from 'react';
import { FaBars, FaUser, FaTimes, FaBell } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa'; // Importer l'icône de livre

function Navbar() {
  const [ouvrir, Setouvrir] = useState(false); // État pour ouvrir/fermer la sidebar

  const ToogleClick = () => {
    Setouvrir(!ouvrir);
  };

  return (
    <div className='w-[100vw] '>
      <div className="bg-white w-[100vw] flex flex-wrap items-center p-4">
        <div className='flex w-[10vw] p-4'>
          <a href="https://flowbite.com/" className="flex items-center space-x-3 w-[13vw] rtl:space-x-reverse">
            <FaBook className=''></FaBook>
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Stories
            </span>
          </a>

          <button onClick={ToogleClick}><FaBars /></button>
        </div>

        <div className="flex md:order-2 justify-between items-center ">
          <button
            type="button"
            className="md:hidden focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className='flex w-[85vw] justify-between px-2'>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-[40vw] text-black p-2 ps-10 text-sm border border-gray-300 rounded-lg outline-none"
                placeholder="Search..."
              />
            </div>

            <div className='justify-around w-[10vw] flex '>
              <div>
                <button className='p-2 rounded-[50%] border-[2px] border-black'><FaUser /></button>
              </div>
              <div>
                <button className='p-2 rounded-[50%] border-[2px] border-black'><FaBell /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar visible ou non en fonction de l'état "ouvrir" */}
      {ouvrir && <Sidebar className="transition-all" ToogleClick={ToogleClick} />}
    </div>
  );
}

export function Sidebar({ ToogleClick }) {
  return (
    <div className='z-10 absolute top-0 left-0 w-[11vw] bg-white h-[100vh] border p-4'>
      <div className='flex w-[10vw] p-4'>
        <a href="https://flowbite.com/" className="flex items-center space-x-3 w-[13vw] rtl:space-x-reverse">
          <FaBook className=''></FaBook>
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Stories
          </span>
        </a>

        <button onClick={ToogleClick}><FaTimes /></button> {/* Ajouter un bouton pour fermer la sidebar */}
      </div>

      <ul className='p-4'>
        <li className='hover:bg-black hover:text-white transition-all placeholder w-[7vw] p-2'>
          Browse
        </li>
        <li className='hover:bg-black hover:text-white transition-all placeholder w-[7vw] p-2'>
          Collection
        </li>
        <li className='hover:bg-black hover:text-white transition-all placeholder w-[7vw] p-2'>
          Manage
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
