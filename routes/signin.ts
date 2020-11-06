import * as express from 'express';
const router = express.Router()
// const SignIn = require('../models/signin')
import SignIn from '../models/signin'


router.get('/', async (req, res) => {
    try {
        const signIns = await SignIn.find()
        res.json(signIns)
    } catch (error) {
        res.status(500).json({ message: error.massage })
    }
})

router.get('/:id', async (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {

    //syntax 1
    const signIn = new SignIn({
        email:req.body.email,
        password:req.body.password
    })




        try {
            const newSignIn = await signIn.save()
            res.status(201).json(newSignIn)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    
})

router.patch('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

// module.exports = router
export default router