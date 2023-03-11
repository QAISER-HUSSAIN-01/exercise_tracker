import mongoose from "mongoose";
import Exercise from "./exercies";

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    exercises:[{type:mongoose.Schema.Types.ObjectId, ref:Exercise}]
}
,
{
    timestamps:true
}
)

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User;