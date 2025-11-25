import PaymentPage from '@/components/PaymentPage';
import React from 'react'
import { notFound } from 'next/navigation';
import connectDB from '@/db/connectDb';
import User from '@/models/User';

async function Username({params}) {
    const {username} = await params;

    await connectDB()
    let u = await User.findOne({username: username})
    if(!u){
      return notFound()
    }


  return (
    <div>
      <PaymentPage username={username}/>
    </div>
  )
}

export default Username

export async function generateMetadata({params}) {
  const {username} = await params;
  return {
    title: `${username} - Funds Reaper`,
  }
}
