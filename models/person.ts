import * as mongoose from 'mongoose'

const PersonInSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    color_of_body:{
        type:String,
        required:true
    },
    color_of_hair:{
        type:String,
        required:true
    },
    creation_date:{
        type:String,
        default:Date.now
    },
   
})
export default  mongoose.model('person', PersonInSchema);