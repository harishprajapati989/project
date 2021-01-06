const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

const dbconnection = require('./dbConnection/mongoDB')

app.use('/api/v1/', require('./router/categoryRouter'))
app.use('/api/v1/', require('./router/productRouter'))


app.listen(1010,()=>{
    console.log("server is running on",1010)
})