require('dotenv').config();
const studentRouter = require('./routes/studentRoutes')
const express =require('express')
const cors = require('cors')


const app = express()

var corOption ={
    origin: 'http://localhost:3000'
}

app.use(cors(corOption))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(studentRouter)


const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})