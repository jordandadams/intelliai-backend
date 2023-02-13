import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

class UserService {
    async register(email, password, secret) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        return jwt.sign({ email }, secret, { expiresIn: "1h" });
    }

    async login(email, password, secret) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        return jwt.sign({ email }, secret, { expiresIn: "1h" });
    }
}

export default UserService;