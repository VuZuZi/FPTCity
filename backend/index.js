// app.js
import dotenv from "dotenv";
import express from "express";
import connectToDatabase from "./db/db.js";


dotenv.config(); // Load biến môi trường từ .env

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());


// Kết nối DB và khởi chạy server
const startServer = async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
};

startServer();
