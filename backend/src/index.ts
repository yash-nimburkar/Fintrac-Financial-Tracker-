import express from "express"
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from 'cors';

const app=express()
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());


const mongoURI: string = 
  "mongodb+srv://yash2020nimburkar2020:0YSzOGk7SvK18aou@fintrac.yzqwami.mongodb.net/?retryWrites=true&w=majority&appName=Fintrac";

mongoose.connect(mongoURI).then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) => console.error("Failed to Connect to MongoDB:", err));



app.use("/financial-records", financialRecordRouter);

// app.get("/",(req,res)=>{
//     res.send("Server started")
// })
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});