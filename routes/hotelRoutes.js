const route = require('express').Router()
const {getHotel} = require('../controllers/hotelController')

route.route('/').get(getHotel)

module.exports = route