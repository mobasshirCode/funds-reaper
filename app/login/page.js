'use client'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Login() {
    const router = useRouter()
    const { data: session } = useSession()
  
    useEffect(()=>{
      document.title = "Login - Funds Reaper"
      if (session !== null){
        router.push("/dashboard")
      }
    },[session,router])

    const handleWarn = ()=>{
      toast.warn('Service unavailable', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    }

  return (
    <>
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
    />
    <div className='min-h-screen container mx-auto flex flex-col items-center'>
    <div className='text-white text-3xl font-bold mt-32 mb-16'>
      Login to continue
    </div>
    <div className="btn text-black my-2">
      <button onClick={()=> signIn("google")} className='bg-white w-60 py-2 rounded-xl hover:cursor-pointer hover:bg-gray-200 font-bold'>
        Continue with Google
      </button>
    </div>
    <div className="btn text-black my-2">
      <button onClick={()=> signIn("github")} className='bg-white w-60 py-2 rounded-xl hover:cursor-pointer hover:bg-gray-200 font-bold'>
        Continue with Github
      </button>
    </div>
    <div className="btn text-black my-2">
      <button onClick={()=>handleWarn()} className='bg-white w-60 py-2 rounded-xl hover:cursor-pointer hover:bg-gray-200 font-bold'>
        Continue with Email
      </button>
    </div>
    </div>
    </>
  )
}
 
export default Login
