import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v2/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/v2/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("/api/v2/upload", uploadRouter);
app.use("/api/v2/seed", seedRouter);
app.use("/api/v2/products", productRouter);
app.use("/api/v2/users", userRouter);
app.use("/api/v2/orders", orderRouter);


const __dirname = path.resolve();
/* app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
); */

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});