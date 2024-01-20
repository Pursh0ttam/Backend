const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('<h1>hello world here you will find all the things that you need</h1>')
})

app.get('/about', (req,res)=>{
    res.send("<h1>i.k gujral punjab technical university</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port`)
})