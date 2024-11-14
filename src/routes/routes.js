const express = require('express')
const { add, getAndGetAll, update } = require('../controller/kpm')
const routes = express.Router()

routes.post('/add',add)
routes.get('/search',getAndGetAll)
routes.put('/update',update)

module.exports = routes