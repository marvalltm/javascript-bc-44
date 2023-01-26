const users = require('../data/users');

const signin = async (request, response, next) => {
  try {
    const { login, password } = request.body;
    const user = users.find(
      item => item.login === login && item.password === password
    );
    if (user) {
      const token = Math.floor(
        Math.random() * 1000000000000 * 999999999
      ).toString(16);
      user.token = token;
      response.status(200).send({ data: token, status: 'login' });
    } else {
      response.status(400).send('user not fount');
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const signup = async (request, response, next) => {
  try {
    const { login, password } = request.body;
    const user = {
      id: Math.floor(Math.random() * 1000000),
      login,
      password,
      rules: 'user',
    };
    users.push(user);
    response.status(200).send({ users, status: 'singup' });
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const signout = async (request, response, next) => {
  try {
    const token = request.headers.authorization;
    const user = users.find(item => item.token === token);
    user.token = null;
    response.status(200).send({ user, status: 'logout' });
  } catch (error) {
    response.status(400).send(error.message);
  }
};
module.exports = {
  signin,
  signup,
  signout,
};
