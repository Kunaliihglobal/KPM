const express = require('express')
const app = express()
require('dotenv').config()
require('../src/db/db')

const axios = require('axios');


setInterval( async() => {
  const data= await axios.get('https://kpm.onrender.com')
  console.log(data.data)
}, 5000);


const bodyParser = require('body-parser');

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())


app.use('/api',routes)

app.get('/',(req,res)=>{
    res.status(200).send('nothing to show')
})
app.listen(process.env.PORT||5000,()=>{
    console.log("server listening on port 5000")
})