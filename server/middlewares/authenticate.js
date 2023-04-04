import jwt from "jsonwebtoken";
import User from "../models/user.js";
import asyncHandler from "express-async-handler";

export const authenticate = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      //joel1499 is jwt Secret
      const decoded = jwt.verify(token,'joel1499');
      //get everything except password
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

