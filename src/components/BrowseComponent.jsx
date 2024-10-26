import React from 'react';
import { Link } from 'react-router-dom';
import {CardRead,CardListen} from './CardComponent';
import { FaAngleRight } from 'react-icons/fa'; // Importer l'icône pour "voir plus"

export function Listen() {
  return (
    <div className='listen my-10'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h3 className='font-medium text-2xl'>Listen</h3>
        <Link to="/ListenMore" className='flex items-center mt-2 md:mt-0'>
          Voir plus <FaAngleRight className='ml-1' />
        </Link>
      </div>
      <div className='p-4 card-vakiana flex flex-wrap justify-between'>
        <CardListen title="Angatra"  description="tantara mapatahoatra" />
        <CardListen title="Angatra"  description="tantara mapatahoatra" />
        <CardListen title="Angatra"  description="tantara mapatahoatra" />
        <CardListen title="Angatra"  description="tantara mapatahoatra" />
      </div>
    </div>
  );
}


export function Read() {
    return (
      <div className='read my-5'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-4'>
          <h3 className='font-medium text-xl md:text-2xl'>Read</h3>
          <Link to="/ReadMore" className='flex items-center mt-2 md:mt-0 text-sm md:text-base'>
            Voir plus <FaAngleRight className='ml-1' />
          </Link>
        </div>
        <div className='p-2 card-vakiana flex flex-wrap justify-between'>
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
          <CardRead title="Angatra" description="tantara mapatahoatra" />
        </div>
      </div>
    );
  }