import React, { useState } from 'react'
import { FaHeadphones, FaBookOpen } from 'react-icons/fa';
import {Link} from "react-router-dom"
export function PopUp(){
    const [Lire, setLire] = useState(false)
    const [likeAudio, setLikeAudio] = useState(false)

    function ChoisirAudio(){
        setLikeAudio(true);
        setLire(false);
        console.log(like);

    }
    function ChoisirLire(){
        setLire(true);
        setLikeAudio(false)
        console.log(like);
        
    }
    return(
        <div className='top-0 bg-[rgba(0,0,0,0.2)] w-screen h-screen flex items-center justify-center absolute'>
            <div className='p-10 w-[40vw] h-[70vh] bg-white border rounded-[20px]'>
                <h3 className='text-xl font-medium'>Create history</h3>
                <div className='p-20'>
                    <h2 className='text-center text-2xl font-bold'>Shows Us your creativity</h2>
                    <p className='text-center text-gray-400'>Choose What type of Story you want</p>
                    <div className='flex justify-between'>
                        <div 
                            onClick ={ChoisirLire}
                             className={
                                `font-bold   
                                ${
                                Lire ? 'border-black border-[3px] ' : ' hover:border-gray-800 '}`} 
                                
                        >
                                <div className='rounded w-[10vw] h-[25vh] bg-gray-200 flex justify-center items-center'>
                                    <div>
                                        <FaBookOpen className='size-32 text-center text-gray-800'></FaBookOpen>
                                        <h4 className='font-bold text-center'>Read</h4>
                                        <p className=''>For written content</p>
                                    </div>
                                </div>
                            </div>

                            <div 
                            onClick ={ChoisirAudio}
                             className={
                                `font-bold   
                                ${
                                likeAudio ? 'border-black border-[3px] ' : ' hover:border-gray-800 '}`} 
                        >
                                <div className='rounded w-[10vw] h-[25vh] bg-gray-200 flex justify-center items-center'>
                                    <div>
                                        <FaHeadphones className='size-32 text-center text-gray-800'></FaHeadphones>
                                        <h4 className='font-bold text-center'>Read</h4>
                                        <p className=''>For written content</p>
                                    </div>
                                </div>
                            </div>


                        </div>        

                    <div className='my-5 flex items-center justify-center'>
                        <button className='hover:bg-black hover:text-white transition-all text-center p-2 border-[3px] border-black'>
                            <Link to="/Creer">Next</Link>
                        </button>
                    </div>

                    </div>

            </div>
        </div>

    )

}
function CreationStoryComponent() {
  return (
    <div className=''>CreationStoryComponent</div>
  )
}

export default CreationStoryComponent