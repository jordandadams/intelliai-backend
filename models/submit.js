import mongoose from "mongoose";
import validator from "validator";

const gamesList = [
    'Apex Legends',
    'Counter Strike Global Offensive',
    'Fortnite',
    'League of Legends',
    'Minecraft',
    'Modern Warfare 2',
    'Overwatch 2',
    'Valorant',
    'Warzone 2',
];

// Define a regular expression for allowed video platforms
const videoLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|twitch\.tv|medal\.tv|streamable\.com)\/.+/;

const videoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 3,
        maxlength: 15,
        validate: {
            validator: (value) => {
                return !/[@!$]/.test(value);
            },
            message: "Username cannot contain symbols like '@!$'.",
        },
    },
    videoLink: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                return videoLinkRegex.test(value);
            },
            message: "Video link must be from YouTube, Twitch, Medal.tv, or Streamable.",
        },
    },
    game: {
        type: String,
        required: true,
        enum: {
            values: gamesList,
            message: "Game selection must be one of the predefined games.",
        },
    },
});

const Submit = mongoose.model("Submit", videoSchema);

export default Submit;