const express = require("express");

const authRoutes=require('./routes/auth.routes');

const app = express();
app.use(express.json());

//  this endpoint is related to auth
app.use('/auth',authRoutes);


module.exports=app;


