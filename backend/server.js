import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
connectDB();
const app = express();

//route imports
import productRoutes from "./routes/productRoutes.js";
import products from "./data/products.js";

//routes
app.get("/", (req, res) => {
  res.send("api is running..");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
);