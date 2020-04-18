const express = require('express')
const router = express.Router()
const db = require('../helpers/actionModel')

//GET
router.get('/', async (req, res, next) => {
    try {
        const data = await db.get()
        res.status(200).json(data)
    }
    catch (err) {
        next(err)
    }
})

//POST
router.post('/', async (req, res, next) => {
    try {
        const data = await db.insert(req.body)
        res.status(201).json(data)
    }
    catch (err) {
        next(err)
    }
})

//DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        await db.remove(req.params.id)
        res.status(204).end()
    }
    catch (err) {
        next(err)
    }
})

//PUT
router.put('/:id', async (req, res, next) => {
    try {
        await db.update(req.params.id, req.body)
        res.status(204).json(data)
    }
    catch (err) {
        next(err)
    }
})

module.exports = router;