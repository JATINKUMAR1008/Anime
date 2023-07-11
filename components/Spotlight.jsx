import React, { useEffect, useState } from 'react'
import image_1 from '@/assets/135625.jpg'
import Link from 'next/link'
import { AiFillPlayCircle, AiFillClockCircle  } from 'react-icons/ai'
import {  BsFillCalendarFill } from 'react-icons/bs'
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md'
const Spotlight = () => {
    const [list,setList] = useState(null)
    const [load,setLoad] = useState(true)
    const [direction,setDirection] = useState(null)
    const [wait,setWait] = useState(false)
    let cont = false
    const [index,setIndex] = useState(0)
    let temp = {}
    const changeIndexRight = () =>{
        
        setWait(true)
        setDirection('rg')
        
        setTimeout(()=>{
            if(index < list.temp.length -1){
                setDirection('lf')
                setIndex(Number(index)+1)
                console.log(index)
                console.log(index)
            }if(index === list.temp.length -1 ){
                setIndex(0)
            }
            console.log(index)
        
            
        },200)
        setWait(false)
        
        

        
        
    }
    
    const changeIndexLeft = () =>{
        setWait(true)
            
            setDirection("lf")
       setTimeout(()=>{
        if(index > 0){
            setDirection('rg')
            setIndex(Number(index)-1)
            console.log(index)
        }if(index === 0){
            setIndex(list.temp.length -1)
        }
        
       },200)
       setWait(false)
        
    }
    const fetch_Data = async() =>{
        const response = await fetch("/api/spot");
        temp = await response.json();
        if(temp){
            setList(temp)
            
            console.log("data",list)
        }
        if(list){
            setLoad(false)
            
        }
        
    }
    const shortner = (string) => {
        if (string.length > 220) {
          return string.substring(0, 220) + "......";
        }
        return string
      };
   
    const shortner2 = (string) => {
        if (string.length > 120) {
          return string.substring(0, 120) + "......";
        }
        return string
      };
    const increament = () =>{
        if(index < list.temp.length -1){
            
            setIndex(Number(index)+1)
            
        }if(index === list.temp.length -1 ){
            setIndex(0)
        }
        console.log(index)
    }
    useEffect(()=>{
        if(list){
            setTimeout(()=>{
                increament()
            },3600*2)
        }
        
    },[index])
    useEffect(()=>{
       fetch_Data()
    },[!list])

  return !load?(
    <div className='w-full min-h-[50vh] max-h-[90vh] sm:h-[80vh] h-[50vh] shadow-3xl-inset'>
        <div className={wait&&direction === 'rg'?' w-full h-full relative top-0  -z-20 left-[-100%] ease-linear duration-200':wait && direction === 'lf'? ' w-full h-full relative top-0  -z-20 left-[100%] ease-linear duration-200':' w-full h-full relative top-0  -z-20 left-0 ease-linear duration-200'}>
            <img src={list.temp[index]?.image} className='w-full h-full object-cover opacity-50'/>
        </div>
        <div className='relative w-full h-full  sm:top-[-80vh] top-[-50vh] flex items-center justify-between left-0 z-10'>
            <div className='p-5 flex flex-col text-left'>
            <span className='p-1 text-green-500 my-2'>
                Spotlight #{list.temp[index]?.index}
            </span>
            <span className='md:text-4xl text-xl'>
                {list.temp[index]?.title}
            </span>
            <span className='sm:flex gap-3 hidden mt-4'>
            <span className='flex items-center gap-2'>
                    <AiFillPlayCircle size={15}/>
                    Tv
                </span>
                <span className='flex items-center gap-2'>
                    <AiFillClockCircle size={15}/>
                    {list.temp[index]?.duration}
                </span>
                <span className='flex items-center gap-2'>
                    <BsFillCalendarFill size={16}/>
                    {list.temp[index]?.release}
                </span>
            </span>
            <span className='my-4 md:max-w-2xl sm:max-w-lg max-w-[290px] sm:text-xl text-sm '>
                <span className='md:block hidden'>
                {shortner(`${list.temp[index]?.description}`)}
                <Link href="/" className='hover:underline'>
                    more
                </Link>
                </span>
                <span className='md:hidden block'>
                {shortner2(`${list.temp[index]?.description}`)}
                <Link href="/" className='hover:underline'>
                    more
                </Link>
                </span>
                
                
            </span>
            <span className='md:mt-7 sm:mt-5 flex gap-5'>
                <button>
                    Play now
                </button>
                <button>
                    Watch Later
                </button>
            </span>
            </div>
            <div className='sm:flex hidden gap-2 flex-col  p-3 absolute right-2 top-[60vh] '>
                <button className='w-10 h-10 rounded-lg bg-gray-500 flex items-center justify-center cursor-pointer' onClick={changeIndexLeft}>
                    <MdKeyboardArrowLeft/>
                </button>
                <button className='w-10 h-10 rounded-lg bg-gray-500 flex items-center justify-center cursor-pointer' onClick={changeIndexRight}>
                    <MdKeyboardArrowRight/>
                </button>
            </div>
        </div>
    </div>
  ):(<>Loading</>)
}

export default Spotlight