import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = await User.findById(id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, Try Signin again.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, Try Signin again.");
  }
});
