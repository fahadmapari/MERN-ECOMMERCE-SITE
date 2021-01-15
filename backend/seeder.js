import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/products.js";
import dotenv from "dotenv";
import User from "./models/user.js";
import Product from "./models/product.js";
import Order from "./models/order.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    console.log("clearing database....");
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("importing data in database....");
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log("data imported finished.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    console.log("clearing database....");
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data cleared from database.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
