const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const userRoutes=require("./routes/userRoutes");

const app=express();    

//Middle Ware 

app.use(cors());
app.use(express.json());


//routes
app.use('/api/users',userRoutes);

//Databasae Connection

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONOG DB Connected"))
.catch(err=>console.log(err));



const PORT=process.env.PORT || 5000;

app.listen(5000,()=>{
    console.log('server is running on http://localhost:5000/');
})
