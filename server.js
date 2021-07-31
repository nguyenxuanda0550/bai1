const express = require('express')
const customerRouter = require('./routes/customer')
const indexRouter = require('./routes/index')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()


const connectFunction = async() => {
    try {
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("Connected successfully")

    } catch (e) {
        console.log(e)
        console.log("Connect failed")
    }
}
connectFunction()
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/customer/', customerRouter)
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)