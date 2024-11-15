const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
require('../src/db/db')

const axios = require('axios');

setInterval( async() => {
    try{
        const data= await axios.get('https://kpm.onrender.com')
        console.log(data.data)
    }catch(err){
        console.log(err,err.message)
        throw new err
    }
}, 20000);
app.use(cors())

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