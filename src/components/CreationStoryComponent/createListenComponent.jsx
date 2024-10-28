import React from 'react'
import { PathCollection } from '../PathBrowse'
function CreateListenComponent() {
  return (
    <div>
        <PathCollection path="Create written Component"/>
        <div className='mx-52 p-10'>
            <div className='flex justify-between'>
                <h4 className='text-3xl font-bold'>
                    Create written component
                </h4>
                <button className='bg-black px-3 font-medium text-white'>
                    Save
                </button>
            </div>
            <form action="" method="POST" className="my-5" enctype="multipart/form-data">
                <table>
                    <tr>
  
                        <td>
                            <input 
                                className="w-[71vw] h-[20vh] bg-gray-100 p-2 rounded border-dashed border-[2px] border-black"  
                                type="file" 
                                name="file_img"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='title' name='titre' className="my-2 border w-[71vw] p-2"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="genre" placeholder='genre' name='genre' className="my-2 border w-[71vw] p-2"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='votre text' name='text' className="my-2 border w-[71vw] p-2"/>
                        </td>
                    </tr>
                </table>
            </form> 
        </div>
    </div>

  )
}

export default CreateListenComponent