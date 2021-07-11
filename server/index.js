import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
app.use(express.urlencoded({limit : '10Mb' , extended : true}))
app.use (express.json({limit : '10Mb' , extended : true}))
app.use(cors())
const database_connection = 'mongodb+srv://shadnak:Zanf7IvO6szjGarn@cluster0.irw49.mongodb.net/Cluster0?retryWrites=true&w=majority'
const Port = process.env.PORT || 5000
mongoose.connect(database_connection, {useNewUrlParser : true , useUnifiedTopology : true})
.then(()=> app.listen(Port , console.log(`server is listening on port ${Port}`)))
.catch((err)=> console.log(err.message))
mongoose.set('useFindAndModify',false)