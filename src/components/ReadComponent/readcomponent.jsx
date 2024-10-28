import React from 'react'
import { PathRead } from '../PathBrowse'
import ReadUser from './ReadUser'
import Fichiertext from './Fichiertext'
function Readcomponent() {
  return (
    <div>
        <PathRead path="Title of Story"></PathRead>
        <div className=" mx-36 h-[23vh] rounded-[10px] flex items-center justify-center bg-slate-100">
        </div>
        <ReadUser
            titre="Ngiah Ndrina"
            genre="Horreur"
            nameuser="Rolland"
            date="feb 22,2024"
        />
        <Fichiertext
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos sunt consectetur eveniet unde, labore inventore illo voluptates temporibus enim, nostrum quae. Ad, repellat harum? Inventore, excepturi tempore recusandae voluptatibus provident sit! Aspernatur repudiandae culpa consequuntur tenetur itaque voluptate nobis exercitationem minus, eaque suscipit ad eveniet, alias, vero dicta commodi."
        />
    </div>
  )
}

export default Readcomponent