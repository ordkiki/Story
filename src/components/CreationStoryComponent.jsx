import React, { useState } from 'react';
import { FaHeadphones, FaTimes, FaBookOpen, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function PopUp({ onClose }) {
    const [Lire, setLire] = useState(false);
    const [likeAudio, setLikeAudio] = useState(false);
    const [routerPath, setRouterPath] = useState("");
    function ChoisirAudio() {
        setLikeAudio(true);
        setRouterPath("/Collection/Create_Listen");
        path
        setLire(false);
    }

    function ChoisirLire() {
        setLire(true);
        setLikeAudio(false);
        setRouterPath("/Collection/Create_Read");
    }

    return (
        <div className='top-0 bg-[rgba(0,0,0,0.2)] w-screen h-full flex items-center justify-center absolute'>
            <div className='relative p-10 w-max h-max bg-white border rounded-[20px]'>
                <button onClick={onClose} className='absolute right-10 top-10'><FaTimes /></button>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold text-center'>Show Us your creativity</h2>
                    <p className='text-center text-gray-400'>Choose the type of Story you want</p>
                    <div className='flex items-center justify-between gap-x-10 h-max'>
                        <div 
                            onClick={ChoisirLire}
                            className={`font-bold cursor-pointer ${Lire ? 'border-black border-[3px]' : 'hover:border-gray-800'}`}
                        >
                            <div className='flex flex-col items-center justify-center h-32 px-4 bg-gray-200 rounded cursor-pointer w-max'>
                                <FaBookOpen className='text-2xl text-gray-800' />
                                <h4 className='font-bold text-center'>Read</h4>
                                <p>For written content</p>
                            </div>
                        </div>

                        <div 
                            onClick={ChoisirAudio}
                            className={`font-bold cursor-pointer ${likeAudio ? 'border-black border-[3px]' : 'hover:border-gray-800'}`}
                        >
                            <div className='flex flex-col items-center justify-center h-32 px-4 bg-gray-200 rounded cursor-pointer w-max'>
                                <FaHeadphones className='text-2xl text-gray-800' />
                                <h4 className='font-bold text-center'>Read</h4>
                                <p>For written content</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center my-10'>
                        <button className='hover:bg-black px-10 rounded-[20px] hover:text-white transition-all text-center p-2 border-[3px] border-black'>
                            <Link to={`${routerPath}`} className='flex items-center'>
                                Next <FaAngleRight />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
