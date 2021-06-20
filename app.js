//app Entry point
const express = require('express')
const app = express()
const port = 3000
//require middleware
const bodyParser = require('body-parser')
const path = require('path')
const ejs = require('ejs')
const db = require('./services/database.js');



//path of the view
app.set('views', path.join(__dirname, 'views'))
//type of view
app.set('view engine', 'ejs');




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Telling the express module that the public  directory has all of our site assets
//serve static files from /public
// Define the static file path
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));


//import the routers in the app.js
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')
//use the router for the desired route
app.use('/', indexRouter)
app.use('/products', productsRouter)


app.listen(port,()=>{
    console.log(`Success! Our application is running on http://localhost:${port}`)
})


