import React from 'react'
import {FaUser, FaClock, FaThumbtack } from 'react-icons/fa'
function ReadUser(props) {
  return (
    <div>
         <div className=" mx-40 mt-[2vh] flex items-center justify-between ">
            <div>
                <h1 className='font-bold text-2xl'>{props.titre}</h1>
                <h1>{props.genre}</h1>
            </div>
            <div className='flex'>
                <div className="flex items-center m-[1vw] text-gray-600 "><FaUser/><h1>{props.nameuser}</h1></div>
                <div className="flex items-center m-[1vw] text-gray-600 "><FaClock/><h1>{props.date}</h1></div>
                {/* <div className="flex items-center m-[1vw] bg-slate-300 p-[10px] rounded-[10px]"><FaThumbtack/></div> */}
                <button className="flex items-center m-[1vw] bg-slate-300 p-[10px] rounded-[10px] hover:bg-slate-400">
                    <FaThumbtack />
                </button>
            </div>
         </div>
    </div>
  )
}

export default ReadUser