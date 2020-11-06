import * as express from 'express';
const router = express.Router()
import SignUp from '../models/signup'
// const SignUp = require('../models/signup')

enum ERROR_MSG {
    BAD_KEY = "bad key !!!!!"
}

router.get('/', async (req, res) => {
    try {
        const sign_Up = await SignUp.find()
        res.json(sign_Up)
    } catch (error) {
        res.status(500).json({ message: error.massage })
    }
})

router.post('/', async (req, res) => {
    const signUP_ = new SignUp({
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    })

    //finOne is  a mongoose method
    const foundUser = await SignUp.findOne({ email: req.body.email })
    if (foundUser) {
        return res.status(403).json({ error: "email is already exist" })
    } else {
        try {
            const newsignUP_ = await signUP_.save()
            res.status(201).json(newsignUP_)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
})

router.get('/:id', getSignUpByID, (req, res: any) => {
    res.json(res.findById)
})

router.patch('/:id', getSignUpByID, async (req, res: any) => {
    try {
        Object.keys(req.body).forEach(k => {
            if (['email', 'first_name', 'last_name'].includes(k)) {
                res.findById[k] = req.body[k];
            } else {
                // res.status(400).json({ msg: "wrong key" })
                // return
                throw new Error(ERROR_MSG.BAD_KEY)
            }
        })
        const update = await res.findById.save()
        res.json(update)
    } catch (error) {
        const err = error.message ? error.message : error
        res.status(400).json({ msg: err })
    }
})



router.delete('/:id', getSignUpByID, async (req, res: any) => {
    try {
        res.findById.remove()
        res.json({ msg: "successful delete" })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

//middleware for patch byid and delete
async function getSignUpByID(req, res, next) {
    let findById;
    try {
        findById = await SignUp.findById(req.params.id)
        if (findById === null) {
            return res.status(404).json({ msg: 'can not find Person with your informations' })
        }
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
    // console.log(res,1123)
    res.findById = findById
    next()
}

// module.exports = router
export default router 