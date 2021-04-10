const router = require('express').Router();
let User = require('../models/user.model');

//Get
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  //Save
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;