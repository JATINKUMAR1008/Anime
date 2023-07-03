import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { IoLogoGoogle,IoLogoFacebook  } from 'react-icons/io'
import img1 from '@/assets/135625.jpg'
import Image from 'next/image'
import { useAuth } from '@/context/authContext'
import { FacebookAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, db } from "@/firebase/firebase";
import ToastMessage from "@/components/ToastMessage";
import { toast } from "react-toastify";
import { doc, updateDoc } from 'firebase/firestore'
const Form = () => {
    const router = useRouter()
    const {currentUser} = useAuth()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const name = e.target[0].value
        try{
          await updateDoc(doc(db,"users",currentUser.uid),{
            displayName: name,
            profileStatus: "Complete"
          })
          router.push('/')
        }catch(error){
          console.log(error);
        }
      }
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-c1 sm:p-0 py-3">
      <div className='absolute w-full h-full top-0 left-0 bottom-0 -z-10'>
        <Image src={img1} className='w-full h-full object-cover opacity-20'/>
      </div>
      <div className="flex items-center flex-col sm:w-[600px] w-[300px]  ">
        <div className="text-center">
          <div className="sm:text-4xl text-3xl font-bold">Complete Your Account</div>
          <div className="sm:mt-3 mt-2 text-c3">
            Before starting enter your name
          </div>
        </div>
        
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:w-[500px] w-[300px]  mt-5">
            <input type="text" placeholder="Enter your name" className="w-full h-14 bg-c5 text-black rounded-xl outline-none border-none px-5 text-c3" autoComplete="off" />
            
            
            <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Complete Your Account</button>
        </form>
        
      </div>
    </div>
  )
}

export default Form