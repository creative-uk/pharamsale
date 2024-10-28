import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import DbCon from "./utlis/db.js";
import AuthRoutes from "./routes/Auth.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import upload from "./utlis/multerConfig.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Database
DbCon();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true, // Note: Boolean value, not a string

    origin: "http://localhost:5173",

}));


// Serve uploaded files
// app.use('/uploads', express.static(process.env.UPLOAD_PATH));

app.use('/api/auth', AuthRoutes);
app.use('/api/admin', AdminRoutes);

app.get("/", (req, res) => { 
    res.send("Test Data is sending");
});

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
