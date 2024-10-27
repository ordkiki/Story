import React, { useState } from 'react';
import { FaHeadphones, FaTimes, FaBookOpen, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function PopUp({ onClose }) {
    const [Lire, setLire] = useState(false);
    const [likeAudio, setLikeAudio] = useState(false);

    function ChoisirAudio() {
        setLikeAudio(true);
        setLire(false);
    }

    function ChoisirLire() {
        setLire(true);
        setLikeAudio(false);
    }

    return (
        <div className='top-0 bg-[rgba(0,0,0,0.2)] w-screen h-screen flex items-center justify-center absolute'>
            <div className='relative p-10 w-[40vw] h-[70vh] bg-white border rounded-[20px]'>
                <h3 className='text-xl font-medium'>Create history</h3>
                <button onClick={onClose} className='absolute right-10 top-10'><FaTimes /></button>
                <div className='p-20'>
                    <h2 className='text-center text-2xl font-bold'>Show Us your creativity</h2>
                    <p className='text-center text-gray-400'>Choose the type of Story you want</p>
                    <div className='flex justify-between'>
                        <div 
                            onClick={ChoisirLire}
                            className={`font-bold cursor-pointer ${Lire ? 'border-black border-[3px]' : 'hover:border-gray-800'}`}
                        >
                            <div className='rounded cursor-pointer w-[10vw] h-[25vh] bg-gray-200 flex justify-center items-center'>
                                <div>
                                    <FaBookOpen className='text-2xl text-gray-800' />
                                    <h4 className='font-bold text-center'>Read</h4>
                                    <p>For written content</p>
                                </div>
                            </div>
                        </div>

                        <div 
                            onClick={ChoisirAudio}
                            className={`font-bold cursor-pointer ${likeAudio ? 'border-black border-[3px]' : 'hover:border-gray-800'}`}
                        >
                            <div className='rounded w-[10vw] h-[25vh] bg-gray-200 flex justify-center items-center'>
                                <div>
                                    <FaHeadphones className='text-2xl text-gray-800' />
                                    <h4 className='font-bold text-center'>Listen</h4>
                                    <p>For audio content</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-10 flex items-center justify-center'>
                        <button className='hover:bg-black px-10 rounded-[20px] hover:text-white transition-all text-center p-2 border-[3px] border-black'>
                            <Link to="/Creer" className='items-center flex'>
                                Next <FaAngleRight />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
