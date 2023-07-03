import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Horizontal = () => {
    const [listData,setListData] = useState(null)
    let temp ={}
    const shortner = (string) => {
        if (string.length > 12) {
          return string.substring(0, 12) + "...";
        }
        return string
      };
      let gen = {
        "gen": "airing"
      }
    const fetch_data = async() =>{
        const response = await fetch('/api/Anime_List',{
            method:'POST',
            body: JSON.stringify(gen),
            headers: {
                "Content-Type": "application/json",
            },
        })
        temp = await response.json()
        if(temp){
            setListData(temp)
           
        }

    }
    useEffect(()=>{
        fetch_data()
    },[!listData])
  return !listData?(
    <>
  Laoding
  </>
  ):(
    <div className='p-2 mt-3'>
        <h1 className='text-left w-full h-full md:text-3xl text-xl p-3 font-bold font-Kanit'>
            Trending
        </h1>

  <div className='flex overflow-x-scroll scroll-smooth scroll-m-1 '>
    <div className='flex md:gap-2 gap-2'>

    {
      listData.temp.map((value,key)=>(
        <Link href={`/anime/${value.title}`} key={key}>
        <div className='flex flex-col md:w-[15rem] md:h-[20rem] w-[10rem] h-[15rem] justify-center items-center'  title={value.title}>
           
            <div className='md:w-[12.5rem] md:h-[17rem] w-[9rem] h-[12rem] cursor-pointer'>
            <img className='w-full h-full object-cover' src={value.image
            }/>
            </div>
            <div className='mt-2'>
                {shortner(value.title)}
            </div>
            
        </div>
        </Link>
      ))  
    }
    </div>
    

  </div>
    </div>)
}

export default Horizontal