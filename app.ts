require('dotenv').config()
import * as express from 'express';
import * as mongoose from 'mongoose';
// const signinRouter = require('./routes/signin')
import signinRouter from './routes/signin'
import signupRouter from './routes/signup'
import personRouter from './routes/person'

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to data base'))

//body parser
app.use(express.json())

app.use('/signin',signinRouter)
app.use('/signup',signupRouter)
app.use('/person',personRouter)

app.get('/',(req,res ,nxt)=>{
    res.send("hi")
})

app.listen(4444, () => console.log('server started'))