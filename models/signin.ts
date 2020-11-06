import * as mongoose from 'mongoose'

const SignInSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
})
// module.exports = mongoose.model('signIn',SignInSchema)
export default  mongoose.model('signin', SignInSchema);