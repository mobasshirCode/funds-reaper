"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { initiate, fetchUser, fetchPayment } from '@/actions/useractions'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function PaymentPage({username}) {

    const [paymentform, setPaymentform] = useState({
        name:"",
        message:"",
        amount:""
    })
    const [userData, setUserData] = useState({})
    const [paymentData, setPaymentData] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        if(searchParams.get("paymentDone") === "true"){
            toast('Thanks for the Donation!', {
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
            router.push(`/${username}`)
          }
    },[])

    const handleChange = (e)=>{
        setPaymentform({...paymentform, [e.target.name]:e.target.value})
    }

    const getData = async ()=>{
        let u = await fetchUser(username)
        setUserData(u)
        
        let p = await fetchPayment(username)
        setPaymentData(p)
        // console.log(u, p)
    }

    const pay = async (amount)=> {
        // get order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id 

        var options = {
        "key": userData.razorpayid, // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. 
        "currency": "INR",
        "name": "Funds Reaper", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
        };
        var rzp1 = new Razorpay(options);
            rzp1.open();
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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        <div className="cover w-full md:h-[45vh] h-[25vh] relative">
            <img className='w-full object-cover md:h-[45vh] h-[25vh]' src={userData.cover} alt="" />
            <img className="absolute md:left-[46.5%] left-[35%] -bottom-20 border-2 border-white rounded-full object-cover size-32" src={userData.profile} width={140} height={140} alt="" />
        </div>
        <div className='info text-center mt-24 mb-15'>
            <p className='text-2xl font-bold mt-2'>@{username}</p>
            <p className='text-lg font-semibold mb-2 text-slate-300'>{userData.name}</p>
            <p className='text-slate-400 my-2'>{userData.bio}</p>
            <p className='text-slate-400 my-2'>{paymentData.length} Donations • ₹{paymentData.reduce((a,b)=> a + b.amount, 0)} Raised</p>
        </div>
        <div className="payment flex md:flex-row flex-col-reverse container mx-auto justify-center items-center mb-30 md:px-40">
            <div className="support bg-slate-900 md:w-1/2 min-h-[35vh] max-h-[50vh] overflow-y-scroll scrollbar-hide mx-4 my-2 rounded-xl p-3">
                <p className='mx-4 my-3 text-xl font-bold'>Top Supporters</p>
                <ul>
                    {paymentData.length == 0 && <div className='flex justify-center items-center mt-14'>No payments yet. Please support!</div>}
                    {paymentData.map((p)=> {
                    return <li key={p._id} className='mx-8 my-2'><span className='font-bold text-purple-400'>{p.name}</span> dontated <span className='font-bold text-purple-400'>₹{p.amount}</span> with a message - "{p.message}"</li>
                    })}
                </ul>
            </div>
            <div className="makepay bg-slate-900 md:w-1/2 min-h-[35vh] max-h-[50vh]  mx-4 my-2 rounded-xl md:p-3 py-3">
                <h2 className='m-5 text-2xl font-bold'>Make a payment</h2>
                <div className='pay mx-5'>
                    <input onChange={handleChange} className='w-full mb-3 bg-slate-800 px-4 py-2 rounded-lg' type="text" value={paymentform.name} name="name" placeholder='Name' id="" />
                    <input onChange={handleChange} className='w-full mb-3 bg-slate-800 px-4 py-2 rounded-lg' type="text" value={paymentform.message} name="message" placeholder='Message' id="" />
                </div>
                <div className='mx-5 flex'>
                    <input onChange={handleChange} className='w-1/2 mb bg-slate-800 px-4 py-2 rounded-lg' type="number" value={paymentform.amount} name="amount" placeholder='Amount' id="" />
                    <button onClick={()=>pay(paymentform.amount)} className='w-1/2 ml-3 bg-purple-800 hover:bg-purple-900 hover:cursor-pointer rounded-lg font-bold disabled:bg-slate-600' disabled={paymentform.name?.length<3 || paymentform.message?.length<2 || paymentform.amount<1}>Pay</button>
                </div>
                <div className='mx-5 mt-3 flex gap-3'>
                    <button className='px-2 py-2 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg font-semibold' onClick={()=> pay(5)}>Pay ₹5</button>
                    <button className='px-2 py-2 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg font-semibold' onClick={()=> pay(10)}>Pay ₹10</button>
                    <button className='px-2 py-2 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg font-semibold' onClick={()=> pay(20)}>Pay ₹20</button>
                    <button className='px-2 py-2 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg font-semibold' onClick={()=> pay(50)}>Pay ₹50</button>
                    <button className='px-2 py-2 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer rounded-lg font-semibold' onClick={()=> pay(100)}>Pay ₹100</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentPage
