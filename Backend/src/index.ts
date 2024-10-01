import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import userRouter from './routes/userRouter';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test" , async (req: Request , res : Response) =>{
    res.json({msg : "Hello from the server"});
})

app.use("/api/user", userRouter);

app.listen(3000, () =>{
    console.log("Server at 3000");
})