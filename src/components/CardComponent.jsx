import React from 'react'
import {FaBookmark} from "react-icons/fa"
function Card(props) {
  return (
    <div className='h-[25vh]'>
        <div className='p-1 relative rounded-xl w-[12vw] h-[25vh] bg-gray-200'>
          <FaBookmark className="m-[5px] text-xl absolute top-0 right-0"></FaBookmark>
        </div>
        <h3 className='font-semibold'>{props.title}</h3>
        <p className='text-gray-500 font-thin'>{props.description}</p>
    </div>
  )
}

export default Card