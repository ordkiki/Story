
function ProfileModel(props) {
  return (
    <div>
        <div className="flex justify-between w-[65vw]">
                <div className="items-center justify-center"><h1 className="font-bold text-2xl">{props.read}</h1><h1>Read content</h1></div>
                <div className=""><h1 className="font-bold text-2xl">{props.audio}</h1><h1>Listen content</h1></div>
                <div className=""><h1 className="font-bold text-2xl">{props.published}</h1><h1>published</h1></div>
                <div className=""><h1 className="font-bold text-2xl">{props.favorite}</h1><h1>Read content</h1></div>
        </div>
    </div>
  )
}

export default ProfileModel