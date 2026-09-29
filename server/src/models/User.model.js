/// here we have to create an model of user which will take 
// name email and pasword fields 
// from the we can loggin or signup /  register a user 
//

import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
username : {
    type:String,
    required : true,
    unique: true,
    lowercase : true,
    trim:true
},
email : {
type:String,
required:true,
unique : true,
lowercase:true
},
password : {
    type:String,
    required:[true,"password is required"]
}
}, {timestamps : true })


export const User = mongoose.model("User",userSchema)

module.exports = User;