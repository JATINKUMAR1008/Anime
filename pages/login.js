import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { IoLogoGoogle,IoLogoFacebook  } from 'react-icons/io'
import img1 from '@/assets/135625.jpg'
import Image from 'next/image'
import { useAuth } from '@/context/authContext'
import { FacebookAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "@/firebase/firebase";
import ToastMessage from "@/components/ToastMessage";
import { toast } from "react-toastify";

const Login = () => {
    const router = useRouter()
    const { currentUser, isLoading} = useAuth()
    const [Email,setEmail] = useState("")

  useEffect(()=>{
    if(!isLoading && currentUser){
        router.push('/')
    }
  },[currentUser,isLoading])

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try{
      await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
      console.log(error);
    }
  }
  const gprovider = new GoogleAuthProvider()
  const fprovider = new FacebookAuthProvider()
  const signinWithGoogle = async() =>{
    try{
      await signInWithPopup(auth,gprovider)
    }catch(error){
      console.log(error)
    }
  }
  const signinWithFacebook = async() =>{
    try{
      await signInWithPopup(auth,fprovider)
    }catch(error){
      console.log(error)
    }
  }

  const resetPassword = async()=>{
    try{
      toast.promise(async ()=>{
        await sendPasswordResetEmail(auth,Email)
      },{
        pending: 'Generating link',
        success: "email sent to your registered mail ✉️",
        error: 'Invalid email ❌'
      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="h-[100vh] flex justify-center items-center bg-c1 sm:p-0 py-3">
      <div className='absolute w-full h-full top-0 left-0 -z-10'>
        <Image src={img1} className='w-full h-full object-cover opacity-20'/>
      </div>
      <div className="flex items-center flex-col sm:w-[600px] w-[300px]  ">
        <div className="text-center">
          <div className="sm:text-4xl text-3xl font-bold">Login to Your Account</div>
          <div className="sm:mt-3 mt-2 text-c3">
            Connect and chat with anyone, anywhere
          </div>
        </div>
        <div className="flex items-center gap-2 w-full mt-10 mb-5 flex-col sm:flex-row">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full sm:w-1/2 h-14 rounded-md cursor-pointer p-[1px]" onClick={signinWithGoogle}>
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
                <IoLogoGoogle size={24}/>
              <span>Login with Google</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full sm:w-1/2 h-14 rounded-md cursor-pointer p-[1px]" onClick={signinWithFacebook}>
            <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-md">
                <IoLogoFacebook size={24}/>
              <span>Login with Facebook</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
            <span className="w-5 h-[1px] bg-c3"></span>
            <span className="text-c3 font-semibold">OR</span>
            <span className="w-5 h-[1px] bg-c3"></span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:w-[500px] w-[300px]  mt-5">
            <input type="email" placeholder="Enter your email" className="w-full h-14 bg-c5 text-black rounded-xl outline-none border-none px-5 text-c3" autoComplete="off" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your password" className="w-full h-14 text-black bg-c5 rounded-xl outline-none border-none px-5 text-c3" autoComplete="off"/>
            <div className="text-right w-full text-c3">
                <span onClick={resetPassword} className="cursor-pointer">Forgot Password?</span>
            </div>
            <button className="mt-4 w-full h-14 rounded-xl outline-none text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Login to Your Account</button>
        </form>
        <div className="flex justify-center gap-1 text-c3 mt-5">
          <span>Not a member yet?</span>
          <Link href="/register">Register Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Login