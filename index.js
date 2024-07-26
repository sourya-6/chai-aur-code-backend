require('dotenv').config
const express = require('express')
const app = express()
const port = 3000//we can port to the available one

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('sourya.com')
})
app.get('/login',(req,res)=>{//need to restart the server whenever we enter new piece of code
    res.send('please enter login credentials')
})
app.get('/youtube',(req,res)=>{
    res.send("hello guys....Lets chill for a while");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})