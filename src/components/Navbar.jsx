import React, { useState } from 'react';
import { FaBars, FaUser, FaTimes, FaBell, FaHome, FaLayerGroup, FaTasks, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {

  const [ouvrir, Setouvrir] = useState(false);
  const [ClickUser, setClickUser] = useState(false);
  function OpenUserAction(){
    setClickUser(!ClickUser);    
  }
  
  const ToogleClick = () => {
    Setouvrir(!ouvrir);
  };

  return (
    <div className="w-[100vw]">
      <div className="bg-white w-[100vw] flex flex-wrap items-center px-4">
        <div className="flex justify-between w-[12vw] p-4">
          <h2 className="flex items-center space-x-3 ">
            <FaBook />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Stories</span>
          </h2>
        </div>

   
        <div className="flex md:order-2 justify-between items-center">
          <button type="button" className="md:hidden focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className="flex w-[85vw] justify-between px-2">
            <button  onClick={ToogleClick}>{ouvrir?  <FaTimes className='cursor-pointer'/>:<FaBars className='cursor-pointer'/> }</button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block w-[40vw] text-black p-2 ps-10 text-sm bg-gray-100 rounded-lg outline-none" placeholder="Search..." />
            </div>

            <div className="justify-around w-[10vw] flex">
              <div className='relative'>
                <button onClick={OpenUserAction} className="p-2 rounded-[50%] border-[2px] border-black"><FaUser /></button>
                {
                ClickUser && 
                <div className='-left-32 justify-center flex items-center  bg-white absolute'>
                  <ul className='w-[12vw] p-2 leading-10'>
                    <li className='hover:bg-black font-medium text-center hover:text-white'>
                      <Link to="/Login">Login</Link>
                    </li>
                    <li className='hover:bg-black font-medium text-center hover:text-white'>
                      <Link to="/SignUp">SignUp</Link>
                    </li>
                  </ul>
                  
                </div>
                }
              </div>
              <div>
                <button className="p-2 rounded-[50%] border-[2px] border-black"><FaBell /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar avec animation */}
      <Sidebar ouvrir={ouvrir} ToogleClick={ToogleClick} />
    </div>
  );
}

export function Sidebar({ ouvrir, ToogleClick }) {

  return (
    <div
      className={`z-10 absolute top-[65px] left-0 h-[100vh] w-[11vw] bg-white p-4 transform ${
        ouvrir ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <ul className="py-4 w-[11vw] leading-10">
        <li className="hover:bg-black hover:text-white transition-all text-[14px] rounded w-[9vw] px-2">
          <Link to="/Browse" className="flex items-center"><FaHome className='mx-3'/> Browse</Link>
        </li>
        <li className="hover:bg-black hover:text-white transition-all w-[9vw] rounded px-2 text-[14px]">
          <Link to="/Collection" className="flex items-center "><FaLayerGroup className='mx-3'/> Collection</Link>
        </li>
        <li className="hover:bg-black hover:text-white transition-all w-[9vw] rounded px-2 text-[14px]">
          <Link to="/Manage" className="flex items-center "><FaTasks className='mx-3'/> Manage</Link>
        </li>
      </ul>
    </div>
  );
}


export function PopUserIcon(){
  return(
    <div className='bg-black w-[15vw] h-[10vh]'>

    </div>
  )
}
export default Navbar;
