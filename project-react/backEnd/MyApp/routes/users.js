var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  req.db.collection('users').find().toArray((err, data) => {
      res.json({ result: 'success', data: data });
  })
});

module.exports = router;
