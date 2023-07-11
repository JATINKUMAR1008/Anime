import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'

const Page = () => {
    const router = useRouter()
    const [listData,setListData] = useState(null)
    const [no,setNo] = useState(1)
    let heading = router.query.slug
    let temp ={}
    let pages=[1,2,3,4,5,6,7,8,9]
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
    <div className='p-4 mt-3'>
        <h1 className='text-left w-full h-full md:text-3xl text-xl p-3 font-bold font-Kanit flex justify-between'>
            {heading}
        </h1>

  <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
    <div className='flex md:gap-1 gap-1 flex-wrap'>

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
    <div className='flex gap-1'>
      {pages.map((value,key)=>(
        
      <div className='w-6 h-6  flex items-center justify-center rounded-full bg-slate-700 cursor-pointer' key={key} onClick={()=>setNo(value)}>
        {value}
      </div>
      ))}
      </div>

  </div>
    </div>)

}

export default Page