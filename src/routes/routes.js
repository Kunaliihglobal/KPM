const express = require('express')
const { add, getAndGetAll, update, deleteKPM, getbyid } = require('../controller/kpm')
const routes = express.Router()

routes.post('/add',add)
routes.get('/search',getAndGetAll)
routes.get('/search/id',getbyid)
routes.put('/update',update)
routes.delete('/delete',deleteKPM)

module.exports = routes