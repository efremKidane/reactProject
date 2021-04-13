var express = require('express');
var router = express.Router();

const jwtManager = require('../jwt/jwtManager');

//login
router.post('/login', (req, res) => {
    req.db.collection('users')
        .findOne({ 'email': req.body.email })
        .then(data => {
            if (data && req.body.password===data.password) {
                const payload = {};
                payload.role = data.role; //'student'
                payload.id= data._id;
                const token = jwtManager.generate(payload);
                res.json({ status: 'success', result: token });
            } 
        })

});


//sign up
router.post('/signup', (req, res) => {
    req.db.collection('users').findOne({ 'email': req.body.email })
        .then(doc => {
            if (doc) {
                res.json({ status: 'exists' });
            }
            const user = req.body;
            req.db.collection('users').insertOne(user)
                .then(data => {
                    res.json({ status: 'success' });
                })
        })
});


module.exports = router;