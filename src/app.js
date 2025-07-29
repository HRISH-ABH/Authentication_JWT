const express = require("express");

const authRoutes=require('./routes/auth.routes');
const cookieParser=require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

//  this endpoint is related to auth
app.use('/auth',authRoutes);


module.exports=app;


