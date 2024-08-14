import "dotenv/config"; // Automatically configures dotenv
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const port = process.env.PORT || 5555;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);

const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected succesfuly");
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

ConnectMongoDb();
