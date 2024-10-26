import React, { useState } from 'react'
import List from './listModel.jsx'
import images from "../assets/image/LOGO.png"
function ListComponent() {
    const [afficheRead,setAfficheRead] = useState(true)
    const [afficheListen,setAfficheListen] = useState(false)
    function ListeRead(){
        setAfficheRead(true)
        setAfficheListen(false)
        console.log(afficheRead);
        
    }
    function ListeListen(){
        setAfficheRead(false)
        setAfficheListen(true)
    }
    return (
    <div>
        <div className='p-4 mx-36 flex items-center justify-between'>
            <h1 className='font-bold text-3xl'>My contents</h1>
            <div className='read'>
                <button 
                    
                    className='font-bold bg-black px-[1.7vw] py-[0.5vw] text-white hover:bg-slate-800 rounded-[10px]'>
                        Create Story
                </button>
            </div>
        </div>
        
        <div className='p-4 mx-36 flex items-center'>
            <button
                onClick={ListeRead} 
                className={
                    `font-bold px-[1.7vw] py-[0.5vw]  rounded-t-[10px] 
                    ${
                    afficheRead ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
                  
                Read(20)
            </button>
            
            <button
                onClick={ListeListen} 
                className={
                    `font-bold px-[1.7vw] py-[0.5vw] text-gray-700 rounded-t-[10px] 
                    ${
                    afficheListen ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-800 hover:text-white'}`}>
   
                Listen(0)
            </button>
        </div>


        <div className='w-screen flex justify-center items-center'>
            <hr className='border-[1px] w-[83.3vw] border-black'/>
        </div>

        <div className='p-4 mx-36 flex items-center justify-between'>
            <div className='flex'>
                <h1 className='px-[2vw] font-bold'>#</h1>
                <h1 className='px-[2vw] font-bold'>Cover</h1>
                <h1 className='px-[2vw] font-bold'>Title</h1>
            </div>
            <div className='flex'>
                <h1 className='px-[2vw] font-bold'>Genre</h1>
                <h1 className='px-[2vw] font-bold'>Views</h1>
                <h1 className='px-[2vw] font-bold'>Status</h1>
                <h1 className='px-[2vw] font-bold'>Updated date</h1>
            </div>
        </div>

        <div className='w-screen flex justify-center items-center'>
            <hr className='border-[1px] w-[83.3vw] border-black'/>
        </div>

        {afficheRead && 
        <div>

        
        <List
            id="1"
            image={images}
            Titre="Dahalo"
            genre="Erotique"
            views="50 views"
            status="published"
            date="12 fevrier 2020"
        />
                <List
            id="1"
            image={images}
            Titre="Dahalo"
            genre="Erotique"
            views="50 views"
            status="published"
            date="12 fevrier 2020"
        />
                <List
            id="1"
            image={images}
            Titre="Dahalo"
            genre="Erotique"
            views="50 views"
            status="published"
            date="12 fevrier 2020"
        />
        </div>
    }
    </div>
  )
}

export default ListComponent