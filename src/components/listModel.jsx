import React from 'react'
import {FaBookmark} from "react-icons/fa"
import images from "../assets/image/LOGO.png"
function List(props) {
  return (
    <div>
        <div className='p-4 mx-36 flex items-center justify-between'>
            <div className='flex items-center'>
                <h1 className='px-[2vw]'>{props.id}</h1>
                <h1 className='px-[2vw]'><img src={props.image} className='size-[2vw]'/></h1>
                <h1 className='px-[2vw]'>{props.Titre}</h1>
            </div>
            <div className='flex'>
                <h1 className='px-[2vw]'>{props.genre}</h1>
                <h1 className='px-[2vw]'>{props.views}</h1>
                <h1 className='px-[2vw]'>{props.status}</h1>
                <h1 className='px-[2vw]'>{props.date}</h1>
            </div>
        </div>
    </div>
  )
}

export default List