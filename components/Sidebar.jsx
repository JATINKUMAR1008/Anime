import React from 'react'
import { RiArrowDropLeftLine }  from 'react-icons/ri'
import { IoIosChatbubbles } from 'react-icons/io'
const Sidebar = ({toggle,isOpen}) => {
    const menuItems = [
        "Home","Subbed Anime","Dubbed Anime","Most Popular","Movies","TV Series","OVAs","ONAs","Specials","Events"
    ]
  return (
    <div className={isOpen?'absolute top-0 left-0 w-[250px] h-full bg-gray-700 flex flex-col p-2 overflow-auto ease-linear duration-150 z-10':"z-10 absolute top-0 left-[-250px] w-[250px] h-full bg-gray-700 flex flex-col p-2 overflow-auto ease-linear duration-150"}>
        <button className='w-[120px] h-8 rounded-3xl bg-gray-500 flex items-center  text-sm mt-5' onClick={toggle}>
            <RiArrowDropLeftLine size={30}/><span className='relative left-[-5px] bottom-[1px]' >Close menu</span>
        </button>
        <button className="px-6 py-3 mt-4 rounded-2xl bg-gray-400 text-[12px] ">Donate</button>
        <button className="px-6 py-3 mt-1 rounded-2xl bg-gray-900 text-[12px] flex items-center justify-center gap-2"><IoIosChatbubbles size={20}/>Community</button>
        <div className='flex-col mt-7 justify-center ' >
        {menuItems.map((value,key)=>{
            return (
                
                    <div className='w-full border-b-gray-500 border-b-[1px] my-1 p-2 cursor-pointer group' key={key}>
                        <span className=' group-hover:text-black'>{value}</span>
                    </div>

                
            )
        })}
        </div>
        <div className='mt-2 flex-col justify-center ' >
                    <div className='w-full  p-2 cursor-pointer'>
                        <span className=' '>Genre</span>
                    </div>

                </div>
        
    </div>
  )
}

export default Sidebar