'use client'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Dashboard() {
    const router = useRouter()
    const { data: session, update } = useSession()
    const [form,setForm] = useState({})
    
    useEffect(()=>{
      if(session === undefined) return
      if(session === null){
        router.push("/login")
        return
      }
      getData()
      document.title=`Dashboard - ${session.user.name}`
      },[session, router])
        
    const getData = async ()=> {
      if (!session?.user?.name) return;
      let u = await fetchUser(session.user.name)
      setForm(u)
      // console.log(u)
    }

    const handleChange = (e)=>{
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (d)=>{
      update()
      let a = await updateProfile(d, session.user.name)
      toast.success('Profile Updated', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
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
    <div className='min-h-screen'>
      <h1 className='text-4xl font-bold text-center my-10'>Welcome to your Dashboard</h1>
      <form className="form flex flex-col justify-center items-center" action={handleSubmit}>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Name</label>
          <input onChange={handleChange} value={form.name?form.name: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="name" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Email</label>
          <input onChange={handleChange} value={form.email?form.email: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="email" name="email" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Username</label>
          <input onChange={handleChange} value={form.username?form.username: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="username" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Bio</label>
          <input onChange={handleChange} value={form.bio?form.bio: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="bio" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Profile Picture</label>
          <input onChange={handleChange} value={form.profile?form.profile: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="profile" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Cover Picture</label>
          <input onChange={handleChange} value={form.cover?form.cover: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="cover" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Razorpay ID</label>
          <input onChange={handleChange} value={form.razorpayid?form.razorpayid: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="razorpayid" id="" />
        </div>
        <div className='flex flex-col md:w-1/3 w-full mb-2 px-5'>
          <label className='text-slate-300 mb-1' htmlFor="">Razorpay Secret</label>
          <input onChange={handleChange} value={form.razorpaysecret?form.razorpaysecret: ""} className='bg-slate-800 rounded-sm px-3 py-1 w-full' type="text" name="razorpaysecret" id="" />
        </div>
        <div className='md:w-1/3 w-full px-5 m-3 font-bold'>
        <input className='bg-purple-700 hover:bg-purple-800 hover:cursor-pointer px-3 py-1 w-full rounded-sm' type="submit" value="Save" />
        </div>
      </form>
    </div>
    </>
  )
}

export default Dashboard
