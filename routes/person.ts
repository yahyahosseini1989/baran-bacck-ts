import * as express from 'express';
const router = express.Router()
import Person from '../models/person'
// const SignUp = require('../models/signup')

enum ERROR_MSG {
    BAD_KEY = "bad key !!!!!"
}

router.get('/', async (req, res) => {
    try {
        const person_ = await Person.find()
        res.json(person_)
    } catch (error) {
        res.status(500).json({ message: error.massage })
    }
})

router.post('/', async (req, res) => {
    const person_ = new Person({
        email: req.body.email,
        phone_number: req.body.phone_number,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        height: req.body.height,
        weight: req.body.weight,
        color_of_body: req.body.color_of_body,
        color_of_hair: req.body.color_of_hair,
    })

    //finOne is  a mongoose method
    const foundPerson = await Person.findOne({ email: req.body.email })
    if (foundPerson) {
        return res.status(403).json({ error: "email is already exist" })
    } else {
        try {
            const newperson_ = await person_.save()
            res.status(201).json(newperson_)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
})

router.get('/:id', getPersonByID, (req, res: any) => {
    res.json(res.findById)
})

router.patch('/:id', getPersonByID, async (req, res: any) => {
    try {
        Object.keys(req.body).forEach(k => {
            if (['email', 'first_name', 'last_name','phone_number','height','weight','color_of_body','color_of_hair'].includes(k)) {
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



router.delete('/:id', getPersonByID, async (req, res: any) => {
    try {
        res.findById.remove()
        res.json({ msg: "successful delete" })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})

//middleware for patch byid and delete
async function getPersonByID(req, res, next) {
    let findById;
    try {
        findById = await Person.findById(req.params.id)
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