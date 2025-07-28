const app=require('./src/app');
require('dotenv').config();
const connectDb=require('./src/db/db');
connectDb();

app.get("/",(req,res)=>{
    res.send("Server working kr rha h na??!!!")
})

app.listen(3000, () => {
  console.log("Server Running");
});
