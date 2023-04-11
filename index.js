import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import videoRoutes from './routes/videoRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
        const db = mongoose.connection;

        app.use('/api', videoRoutes); // Use the video routes under the '/api' path

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });