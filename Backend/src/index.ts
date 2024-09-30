import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then( () => {
    console.log("Connected to the Database!")
})

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test" , async (req: Request , res : Response) =>{
    res.json({msg : "Hello from the server"});
})



app.listen(3000, () =>{
    console.log("Server at 3000");
})