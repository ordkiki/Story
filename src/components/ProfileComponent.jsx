import ProfileModel from "./ProfileModel.jsx"
function ProfileComponent() {
  return (
    <div>
        <div className="p-4 mx-36 flex items-center justify-between">
            <h1 className='font-bold text-3xl'>Profile</h1>
        </div>
        <div className=" mx-36 h-[15vh] rounded-[10px] flex items-center justify-center bg-slate-100">  
            <ProfileModel
                read="8"
                audio="12"
                published="16"
                favorite="0"
            />
        </div>
        <br />
        <div className="mx-36 h-[45vh] rounded-t-[10px] p-[20px] justify-center bg-slate-100">
            <div>
                <h1 className="font-bold text-[20px]">Personal Information</h1>
                <h1>You can view and update your information here</h1>
            </div>
            <br />
            <div>
                <form action="">
                    <h1>First name</h1>
                    <input type="text" className="mt-[5px] w-[18vw] h-[4vh]"/>
                    <h1>Last name</h1>
                    <input type="text" className="mt-[5px] w-[18vw] h-[4vh]"/>
                    <h1>Username</h1>
                    <input type="text" className="mt-[5px] w-[18vw] h-[4vh]"/>
                    <h1>Email</h1>
                    <input type="email" className="mt-[5px] w-[18vw] h-[4vh]"/>
                </form>
            </div>
        </div>
        <div className='w-screen flex justify-center items-center'>
            <hr className='border-[1px] w-[85vw] border-gray-500'/>
        </div>
        <div className=" flex mx-36 h-[10vh] rounded-b-[10px] p-[20px] items-center justify-between bg-slate-100">
            <h1>Don't forget to save to apply your change</h1>
            <button className='font-bold bg-black px-[1.7vw] py-[0.5vw] text-white hover:bg-slate-800 rounded-[10px]'>Create Story</button>
        </div>
    </div>
  )
}

export default ProfileComponent