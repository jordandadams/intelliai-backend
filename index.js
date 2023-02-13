import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authenticate from "./middleware/auth.js";
import UserService from "./services/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
        const db = mongoose.connection;
        const userService = new UserService(db);

        app.post("/register", async (req, res) => {
            const { email, password } = req.body;
            const token = await userService.register(email, password, secret);
            return res.json({ token });
        });

        app.post("/login", async (req, res) => {
            const { email, password } = req.body;
            const token = await userService.login(email, password, secret);
            return res.json({ token });
        });

        app.get("/protected", authenticate(secret), (req, res) => {
            return res.json({ message: "Access granted", user: req.user });
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
