import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/error.js";
import colors from "colors";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

//route imports
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
//routes
app.get("/", (req, res) => {
  res.send("api is running..");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server running on port ${PORT} in ${process.env.NODE_ENV} mode`.brightBlue
      .underline
  )
);
