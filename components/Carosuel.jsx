import React, { useEffect, useState } from 'react'
import img1 from '@/assets/img-1.jpg'
import Image from 'next/image'
import { AiFillPlayCircle, AiFillClockCircle  } from 'react-icons/ai'
import {  BsFillCalendarFill } from 'react-icons/bs'
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md'
const Carosuel = () => {
    const [listData,setListData] = useState(null)
    const [index,setIndex] = useState(0)
    const [wait,setWait] = useState(false)
    const [direction,setDirection] = useState(null)
    const changeIndexRight = () =>{
        
        setWait(true)
        setDirection('rg')
        setTimeout(()=>{
            if(index < 6){
                setIndex(Number(index)+1)
                console.log(index)
                console.log(index)
            }if(index === 6 ){
                setIndex(0)
            }
            setWait(false)
        },100)
        console.log(index)
        

        
        
    }
    const changeIndexLeft = () =>{
        
            setWait(true)
            setDirection("lf")
       setTimeout(()=>{
        if(index > 0){
            setIndex(Number(index)-1)
            console.log(index)
        }if(index === 0){
            setIndex(6)
        }
        setWait(false)
       },100)
        
    }
    let temp ={}
   
    const fetch_data = async() =>{
        const response = await fetch('/api/Cdata')
        temp = await response.json()
        if(temp){
            setListData(temp)
            console.log("data",listData?.temp.data[0].node.main_picture.large)
        }

    }
    const shortner = (string) =>{
        if(string.length > 50){
            return string.substring(0,300)+"....."
        }
    }

    
    let obj = {}
    const Fetch_Data = async() =>{
        const res = await fetch('/api/anime_data',{
          method: 'POST',
          body: JSON.stringify(obj)
        })
        anime_data = await res.json()
        if(anime_data){
          console.log("anime_data",anime_data)
        }
      }
      var anime_data = {}

      const Date_Print = (arg) =>{
        const date = new Date(arg)
        console.log(date.toDateString())
        return date.toDateString().substring(4,10)+(",")+date.toDateString().substring(10,date.toDateString().length)
      }

    useEffect(()=>{
        fetch_data()
        console.log("data",listData)
        
    },[!listData])
    
  return listData?(
    <div className='w-[100vw] sm:h-[90vh] h-[50vh] flex justify-center items-center sm:shadow-3xl-inset shadow-sm-inset  z-20 overflow-hidden'>
        
        <div className={wait&&direction === 'rg'?'w-full sm:h-[90vh] h-[50vh] shadow-3xl-inset relative -z-10 left-[-100%] ease-out duration-100': wait && direction === 'lf' ? 'w-full sm:h-[90vh] h-[50vh] shadow-3xl-inset relative -z-10 left-[100%] ease-out duration-100' : 'w-full sm:h-[90vh] h-[50vh] shadow-3xl-inset relative -z-10 left-0'}>
            <img src={listData?.temp.data[index].node.main_picture.large} className='w-full h-full object-cover shadow-3xl-inset' alt="image"/>
        </div>
        <div className={wait&&direction === 'rg'?'absolute sm:left-8 left-[-100%] flex flex-col text-left text-white ease-out duration-100': wait && direction === 'lf'?'absolute sm:left-8 left-[100%] flex flex-col text-left text-white ease-out duration-100':'absolute sm:left-8 left-2 flex flex-col text-left text-white' }>
            <span className='text-sm sm:text-xl'>
                #{Number(index)+1} Spotlight
            </span>
            <span className='sm:mt-3 mt-2 text-[20px] sm:text-[50px] font-semibold text-white'>
                {listData?.temp.data[index].node.title}
            </span>
            <span className='flex mt-2 sm:gap-5 gap-3 text-[10px] sm:text-lg items-center'>
                <span className='flex items-center gap-2'>
                    <AiFillPlayCircle size={15}/>
                    Tv
                </span>
                <span className='flex items-center gap-2'>
                    <AiFillClockCircle size={15}/>
                    {Math.floor(listData?.temp.data[index].node.average_episode_duration/60)}m
                </span>
                <span className='flex items-center gap-2'>
                    <BsFillCalendarFill size={16}/>
                    {Date_Print(listData?.temp.data[index].node.start_date)}
                </span>
            </span>
            <span className='sm:mt-3 mt-2 sm:max-w-lg max-w-[300px] text-[10px] sm:text-lg'>
            {shortner(listData?.temp.data[index].node.synopsis)}
            </span>

            <span className='flex items-center gap-3 sm:mt-10 mt-3'>
                <button className=' flex items-center gap-2 bg-slate-500 sm:px-5 px-3 sm:py-2 py-1 sm:text-md text-sm rounded-3xl'>
                    <AiFillPlayCircle size={20}/>
                    Play Now
                </button>
                <button className=' flex items-center gap-1 bg-slate-500 sm:px-3 px-2 sm:py-2 py-1 rounded-3xl sm:text-md text-sm'>
                    Details
                    <MdKeyboardArrowRight size={20}/>
                </button>
            </span>
        </div>
        <div className='sm:flex hidden flex-col gap-3 absolute right-5 bottom-[8rem]'>
            <button className='py-3 px-3 bg-gray-600 rounded-2xl' onClick={changeIndexRight}>
                <MdKeyboardArrowRight size={25} />
            </button>
            <button className='py-3 px-3 bg-gray-600 rounded-2xl' onClick={changeIndexLeft}>
            <MdKeyboardArrowLeft size={25}/>
            </button>

        </div>
        
    </div>
  ):(<>Loading</>)
}

export default Carosuel