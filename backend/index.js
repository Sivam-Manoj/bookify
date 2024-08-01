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

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});
