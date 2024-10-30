import React from 'react';
import { FaBookmark, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function CardRead(props) {
  const navigate = useNavigate(); 
  function changerPage(event) {
    event.preventDefault(); 
    const chemin = `/ReadMore/Read/${encodeURIComponent(props.id)}`; 
    console.log(`Page changée dans le composant parent pour le titre: ${props.id}`);
    navigate(chemin, { state: { title: props.title, description: props.description } });
  }

  return (
    <div className='h-auto w-full md:w-[30%] lg:w-[22%] m-4'>
      <div className='relative rounded-xl bg-gray-200 shadow-md p-4 flex flex-col justify-between h-[25vh]'>

        <FaBookmark className="absolute top-0 right-0 m-1 text-xl" />
      </div>
      <h3 className='text-lg font-semibold'>{props.title}</h3>
      <p className='font-thin text-gray-500'>{props.description}</p>
      <button 
        onClick={changerPage}
        className='px-4 py-2 font-bold text-white bg-black rounded hover:scale-105'
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
        <FaBookmark className="absolute top-0 right-0 m-1 text-xl" />
        <button className='p-2 text-white absolute right-2 bottom-2 rounded-[50%] border-white border border-solid'>
          <FaPlay />
        </button>
      </div>
      <h3 className='text-lg font-semibold'>{props.title}</h3>
      <p className='font-thin text-gray-500'>{props.description}</p>
    </div>
  );
}
