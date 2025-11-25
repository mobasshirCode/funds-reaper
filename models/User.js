import mongoose from "mongoose";
// delete mongoose.models.User;

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true},
    name : {type: String},
    username : {type: String, required: true},
    bio: {type: String},
    profile : {type: String},
    cover : {type: String},
    razorpayid: {type: String},
    razorpaysecret: {type: String},
},
    {timestamps: true}
);
export default mongoose.models.User || mongoose.model("User", UserSchema)