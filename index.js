// create a server.
const express = require("express");
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const app=express();

// load config from dotenv.
 //require("dotenv").config;
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// import routes for TODO API

const projRoutes = require("./routes/helps");

//mount the todo AsPi routes
app.use("/api/v1",projRoutes);

// start server
app.listen(PORT, () =>{
    console.log(`Server started successfully at ${PORT}`);
});

// CONNECT DB
const dbconnect = require("./config/db");
dbconnect();

// default Router
app.get("/",(req,res) =>{
    res.send('<h1>this is home page</h1>');
})


