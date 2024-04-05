const express = require('express')
const Router = express.Router();

const controller = require('../controller/Cuser')

console.log('routes > user.js')

Router.get("/",controller)
module.exports = Router;