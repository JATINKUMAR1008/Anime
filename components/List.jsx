import { list } from 'firebase/storage'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'

const List = ({heading}) => {
    const router = useRouter()
    const [listData,setListData] = useState(null)
    let temp ={}
    let no=1
    let res = []
    const shortner = (string) => {
        if (string.length > 20) {
          return string.substring(0, 15) + "...";
        }
        return string
      };
      let gen = {
        "gen": {heading},
        "page": {no}
      }
    const fetch_data = async() =>{
        const response = await fetch('/api/anime_page',{
            method:'POST',
            body: JSON.stringify(gen),
            headers: {
                "Content-Type": "application/json",
            },
        })
        temp = await response.json()
        if(temp){
            setListData(temp)
            console.log(listData)
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
    <div className='p-5 mt-3'>
        <h1 className='text-left w-full h-full md:text-3xl text-xl p-3 font-bold font-Kanit flex justify-between'>
            {heading}
            <span className='text-sm font-sans font-thin cursor-pointer' onClick={()=>router.push(`/list/${heading}`)}>
                see more
            </span>
        </h1>

  <div className='flex overflow-x-scroll scroll-smooth scroll-m-1 '>
    <div className='flex md:gap-2 gap-1'>

    {
      listData.temp.map((value,key)=>(
        
        <div className='flex flex-col md:w-[15rem] md:h-[20rem] w-[10rem] h-[15rem] justify-center ' key={key} title={value.title} onClick={()=>router.push(`/anime/${value.title}`)}>
           
            <div className='md:w-[12.5rem] md:h-[17rem] w-[9rem] h-[12rem] cursor-pointer'>
            <img className='w-full h-full object-cover rounded-md' src={value.image
            }/>
            </div>
            <div className='mt-2'>
                {shortner(value.title)}
            </div>
            
        </div>
      ))  
    }
    </div>
    

  </div>
    </div>)
}

export default List