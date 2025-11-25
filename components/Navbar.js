'use client'
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar() {
  const { data: session } = useSession()
  return (
    <div className='text-white bg-purple-950 flex justify-between items-center px-3  min-h-14 md:flex-row flex-col'>
      <div className="logo text-2xl font-bold py-2"><Link href={"/"}>Funds Reaper</Link></div>
      {/* <ul className='flex gap-6'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Signup</li>
        <li>Login</li>
      </ul> */}
      <div className='mb-3 md:mb-0'>
        {!session &&
        <Link href="/login">
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 mx-2 hover:cursor-pointer text-md rounded-md">
          Login
        </button>
        </Link>}
        {session &&
        <div className='bg-white text-purple-800 font-semibold rounded-lg md:flex justify-between items-center py-[5px]'>
          <div><Link href={"/dashboard"}><span className='mx-2'>{session.user.email}</span></Link></div>
          <div className='flex justify-center'>
            <Link href={`/${session.user.name}`}><button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-1 px-4 mr-1.5 hover:cursor-pointer text-md rounded-md">
              Profile
            </button>
            </Link>
            <button onClick={()=> signOut()} className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-1 px-4 md:mr-1.5 hover:cursor-pointer text-md rounded-md">
              Logout
            </button>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
