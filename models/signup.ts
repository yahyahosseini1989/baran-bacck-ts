import * as mongoose from 'mongoose'
// import * as validate from 'mongoose-validator'

// const emailValidator = [
//     validate({
//       validator: 'isLength',
//       arguments: [0, 40],
//       message: 'Email must not exceed {ARGS[1]} characters.'
//     }),
//     validate({
//       validator: 'isEmail',
//       message: 'Email must be valid.'
//     })
//   ];

interface ISignup{
    email:string;
    password:string;
    first_name:string;
    last_name:string;
    creation_date:string;
}

const SignUpSchema = new mongoose.Schema<ISignup>({
    email:{
        type:String,
        required:true,
        // validate:emailValidator
    },
    password:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    creation_date:{
        type:String,
        default:Date.now
    },
})

export default  mongoose.model<ISignup & mongoose.Document>('signup', SignUpSchema);

// import * as mongoose from 'mongoose'

// const SignUpSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         // required:true
//     },
//     first_name:{
//         type:String,
//         // required:true
//     },
//     last_name:{
//         type:String,
//         // required:true
//     },
//     creation_date:{
//         type:String,
//         default:Date.now
//     },
// })

// export default  mongoose.model('signup', SignUpSchema);



// import * as mongoose from 'mongoose'
// // import * as Joi from 'joi'

// const SignUpSchema =new mongoose.Schema({
//     // email:{
//     //     type:String,
//     //     required:true
//     // },
//     // password:{
//     //     type:String,
//     //     // required:true
//     // },
//     // first_name:{
//     //     type:String,
//     //     // required:true
//     // },
//     // last_name:{
//     //     type:String,
//     //     // required:true
//     // },
//     // creation_date:{
//     //     type:String,
//     //     default:Date.now
//     // },
//     password: String,
//       email: String,
//       first_name: String,
//       last_name: String,
//       creation_date: { type: Date, default: Date.now },
// })


// SignUpSchema.methods.joiValidate = function(obj) {
// 	var Joi = require('joi');
// 	var schema = {
// 		password: Joi.types.String().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
// 		email: Joi.types.String().email().required(),
// 		first_name: Joi.types.String().required(),
// 		last_name: Joi.types.String().required(),
// 		creation_date: Joi.types.Date(),
// 	}
// 	return Joi.validate(obj, schema);
// }


// // const schemdddda = joi.object({
// //     first_name: joi.string()
// //         .alphanum()
// //         .min(3)
// //         .max(30)
// //         .required(),

// //     password: joi.string().required(),
// //     last_name: joi.string().required(),
// //     email: joi.string()
// //         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
// // })


// module.exports = mongoose.model('signup', SignUpSchema);
// // export default  mongoose.model('signup', SignUpSchema);