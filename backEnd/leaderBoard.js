const { user } = require('./models');
const { Sequelize } = require('sequelize');

async function showBoard() {
  try {
    let allUsers = await user.findAll({
      order: Sequelize.literal('score DESC'),
      attributes: ['id', 'user_name', 'score'],
    });
    return allUsers;
  } catch (err) {
    console.log(err);
  }
}
async function USERS() {
  try {
    let allUsers = await user.findAll({
      attributes: ['id', 'user_name', 'password'],
    });
    return allUsers;
  } catch (err) {
    console.log(err);
  }
}
async function addUser(user_name, password) {
  try {
    const board = await user.create(
      { user_name: user_name, password: password },
      { fields: ['user_name', 'password'] }
    );
    return board;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function addScore(user_name, score) {
  try {
    // let allUsers = await user.findAll({
    //   where: {user_name: user_name},
    //   attributes: [ 'user_name','score'],
    // });
    const updateScore = await user.update(
      { score: score },
      { where: { user_name: user_name } },
      { fields: ['user_name', 'score'] }
    );
    return updateScore;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { showBoard, addUser, USERS, addScore };
