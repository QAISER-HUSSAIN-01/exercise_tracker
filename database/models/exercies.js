import mongoose from 'mongoose'
import mogoose from 'mongoose'

const exerciseSchema = mogoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    activityType:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:String,required:true}
}
,
{
    timestamps:true
})

const Exercise = mongoose.models.Exercise || mongoose.model('Exercise',exerciseSchema)
export default Exercise;