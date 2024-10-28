import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function CardRead(props) {
  const navigate = useNavigate(); 
  function changerPage(event) {
    event.preventDefault(); 
    const chemin = `/ReadMore/Read/${encodeURIComponent(props.title)}`; 
    console.log(`Page changée dans le composant parent pour le titre: ${props.title}`);
    navigate(chemin, { state: { title: props.title, description: props.description } });
  }

  return (
    <div className='h-auto w-full md:w-[30%] lg:w-[22%] mx-2 my-4'>
      <div className='relative rounded-xl bg-gray-200 shadow-md p-4 flex flex-col justify-between h-[25vh]'>
        <FaBookmark className="m-1 text-xl absolute top-0 right-0" />
      </div>
      <h3 className='font-semibold text-lg'>{props.title}</h3>
      <p className='text-gray-500 font-thin'>{props.description}</p>
      <button 
        onClick={changerPage}
        className='bg-gray-400 px-4 text-white font-bold rounded hover:scale-105'
      >
        Read
      </button>
    </div>
  );
}


export function CardListen(props) {
  return (
    <div className='h-auto w-full md:w-[30%] lg:w-[22%] mx-2 my-4'>
      <div className='relative rounded-xl bg-gray-200 shadow-md p-4 flex flex-col justify-between h-[25vh]'>
        <FaBookmark className="m-1 text-xl absolute top-0 right-0" />
        <button className='p-2 text-white absolute right-2 bottom-2 rounded-[50%] border-white border border-solid'>
          <FaPlay />
        </button>
      </div>
      <h3 className='font-semibold text-lg'>{props.title}</h3>
      <p className='text-gray-500 font-thin'>{props.description}</p>
    </div>
  );
}
