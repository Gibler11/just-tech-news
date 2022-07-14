const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jameshuffs',
    email: 'jameshuffs@gamil.com',
    password: 'password123'
  },
  {
    username: 'jeff',
    email: 'jeffhuffs@gmail.com',
    password: 'password123'
  },
  {
    username: 'carol',
    email: 'carolhuffs@gmail.com',
    password: 'password123'
  },
  {
    username: 'bob',
    email: 'bobhuffs@gmail.com',
    password: 'password123'
  },
  {
    username: 'ed',
    email: 'edhuffs.com',
    password: 'password123'
  },

];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;