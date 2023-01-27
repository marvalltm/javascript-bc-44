const express = require('express');
const {
  getUsers,
  getUser,
  addUser,
  addOrUpdateUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = express.Router();

router.get('/all', getUsers); //http://localhost:3000/user/all
router.post('/', addUser);
router.get('/:id', getUser);
router.put('/:id', addOrUpdateUser); //http://localhost:3000/user/:id
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = {
  routes: router,
};
