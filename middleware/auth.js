import jwt from "jsonwebtoken";

const authenticate = secret => (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
};

export default authenticate;
