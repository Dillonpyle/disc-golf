const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {

    const password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const userDbEntry = {};

    userDbEntry.username = req.body.username;
    userDbEntry.password = hashedPassword;



    try {
        const createdUser = await User.create(userDbEntry);
        console.log(`created user ${createdUser}`)
        req.session.userId = createdUser._id;
        req.session.username = createdUser.username;
        req.session.logged = true;

        res.json({
            status: 200,
            data: 'login successful',
            userId: createdUser._id
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})


router.post('/', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            username: req.body.username
        })
        if (foundUser) {

            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.message = '';
                req.session.userId = foundUser._id;
                req.session.username = foundUser.username;
                req.session.logged = true;
                console.log(req.session, req.body, 'this is from login on controller side')

                res.json({
                    status: 200,
                    data: 'login successful',
                    userId: foundUser._id
                })
            } else {
                req.session.message = 'Username or password are incorrect';
            }
        } else {
            req.session.message = 'Username or password are incorrect';
        }
    } catch (err) {
        res.send(err);
    };
});


module.exports = router;