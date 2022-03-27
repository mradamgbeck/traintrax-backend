const express = require('express')
const router = express.Router()

const Program = require('../../models/Program')

router.get('/',
    (req, res) => {
        Program.find()
            .then(info => res.json(info))
            .catch(err => res.status(404).json({msg: 'no programs found'}))
    })
router.post('/',
    (req, res) => {
        const newProgram = new Program({
            title: req.body.title
        })

        newProgram.save().then(info => res.json(info))
    })

router.delete('/',
    (req, res) => {
        Program.findOneAndRemove({_id: req.body.id}).then(() => {
            res.json({success: true})
        })
    })

router.post('/update/:id',
    (req, res) => {
        Program.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    title: req.body.title
                },
            },
            {new: true},
        )
            .then(info => {
                res.json(info)
            })
            .catch(err => res.status(400).json({msg: 'update failed'}))
    })

module.exports = router