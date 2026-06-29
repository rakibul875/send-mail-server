const express= require('express')
const app= express()
const cors= require('cors')
const dotenv=require('dotenv')
const port= 8000
app.use(express.json())
dotenv.config()
app.use(cors())


app.get('/',(req,res)=>{
 res.send('hello wold')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})