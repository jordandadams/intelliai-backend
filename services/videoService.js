import Submit from '../models/submit.js';

const videoService = {
    // Create a new video submission
    createVideo: async (username, videoLink, game) => {
        try {
            const newVideo = new Submit({
                username: username,
                videoLink: videoLink,
                game: game,
            });
            await newVideo.save();
            return newVideo;
        } catch (error) {
            throw error;
        }
    },

    // Get all video submissions
    getAllVideos: async () => {
        try {
            const videos = await Submit.find();
            return videos;
        } catch (error) {
            throw error;
        }
    },
};

export default videoService;