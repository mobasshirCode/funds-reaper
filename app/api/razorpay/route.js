import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";

export const POST = async (req)=>{
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)

    // check if razorpay order id is present in the server or not
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if(!p) {
        return NextResponse.json({success: false, message: "order id not found"})
    }
    //fetch secret of the user to pay
    let receiver = await User.findOne({username: p.to_user})
    let secret = receiver.razorpaysecret

    // verify the payment
    let xx = validatePaymentVerification({order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id},body.razorpay_signature, secret)

    if(xx) {
        // update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done:true}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentDone=true`)
    }
    else {
        return NextResponse.json({success:false, message:"Payment verification failed"})
    }
}