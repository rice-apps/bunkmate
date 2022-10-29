const User = require('../models/User')
const UserService = require('./userServices')

module.exports = UserService(User)