const express = require('express');
const { signin, signup, signout } = require('../controllers/auth');

const router = express.Router();

router.post('/signin', signin); //http://localhost:3000/auth/signin
router.post('/signup', signup);
router.post('/signuot', signout);

module.exports = {
  routes: router,
};
