import React from 'react'

function Fichiertext(props) {
  return (
    <div className="flex items-center justify-center">
        <div className="w-[50vw] h-[80vh] bg-slate-100">
            <h1 className="p-[50px]">
                {props.text}
            </h1>
        </div>
    </div>
  )
}

export default Fichiertext