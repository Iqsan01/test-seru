import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authorizeAdmin = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { userId } = decoded;
      const user = await User.findByPk(userId);

      if (user && user.is_admin) {
        req.user = user;
        next();
      } else {
        res.status(403).json({ error: "Unauthorized" });
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Token is required" });
  }
};
