import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // 🔹 check token
    if (!authHeader) {
      return res.status(401).json({ message: "No token" });
    }

    // 🔹 Bearer TOKEN → TOKEN extract
    const token = authHeader.split(" ")[1];

    // 🔹 verify
    const decoded = jwt.verify(token, "secretkey");

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;