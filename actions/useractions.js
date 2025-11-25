"use server"

import Razorpay from "razorpay"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"

export const initiate = async (amount, to_username, paymentform) =>{
    await connectDB()

    let receiver = await User.findOne({username: to_username})
    // console.log(receiver.razorpayid)

    var instance = new Razorpay({key_id: receiver.razorpayid, key_secret: receiver.razorpaysecret})

    let options = {
        amount: Number.parseInt(amount)*100,
        currency: "INR"
    }
    let x = await instance.orders.create(options)

    //create a payment object which shows a pending payment in the database
    await Payment.create({oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })
    return x
}

export const fetchUser = async (username) =>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u?.toObject({flattenObjectIds: true})
    // user._id = user._id.toString()
    return user
}

export const fetchPayment = async (username)=>{
    await connectDB()
    let p = await Payment.find({to_user: username, done:true}).sort({amount: -1}).limit(10) // sorted by decreasing order teh top ten
    // let pay = p.toObject()
    // pay._id = pay._id.toString()
    // return pay
        let pay = p.map(doc => { // since it contains not a single value but an array so we cannot directlu use .toObject()
        let obj = doc.toObject();
        obj._id = obj._id.toString();
        return obj;
    });

    return pay;
}

export const updateProfile = async (data, oldUsername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // check username availability
    if(oldUsername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if(u){
            return {error: "Username already exists."}
        }
    }
    await User.updateOne({email: ndata.email}, ndata)
    await Payment.updateMany({to_user: oldUsername},{$set:{to_user: ndata.username}} )
}