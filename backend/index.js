import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,  // This is important for handling cookies
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
));

app.use("/user",contactRoutes);
const database_url= "mongodb+srv://portfolio:king123@cluster0.m4th6.mongodb.net/?retryWrites=true&w=majority&appName=cluster0"
const PORT = 5001;
mongoose.connect(database_url)
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => { 
        console.log(`Server running on port ${PORT}`) 
    });
})
.catch((err) => {
    console.error('MongoDB Connection Error:', err);
});
