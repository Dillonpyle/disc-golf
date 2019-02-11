const express = require('express');

const router = express.Router();

const User = require('../models/user');

//show route
router.get('/', async (req, res) => {
    console.log(req.body, ' req.body in show route');

    try {
        const allUsers = await User.find();

        res.json({
            status: 200,
            data: allUsers
        })
    } catch (err) {
        res.send(err)
    }
});

//create post route
router.post('/', async (req, res) => {

    try {
        console.log(req.body, ' req.body from post route');
        const createdUser = await User.create(req.body);
        console.log('response from post route')
        res.json({
            status: 200,
            data: createdUser
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

//edit get route
router.get('/:id', async (req, res) => {

    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        });
    } catch (err) {
        res.send(err)
    }
});

//edit put route
router.put('/:id', async (req, res) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            status: 200,
            data: updatedUser
        });
    } catch (err) {
        res.send(err)
    }
});

//delete route
router.delete('/:id', async (req, res) => {

    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedUser
        });
    } catch (err) {
        res.send(err);
    }
});





module.exports = router;  