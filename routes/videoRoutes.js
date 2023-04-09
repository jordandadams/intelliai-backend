import express from 'express';
import videoService from '../services/videoService.js';

const router = express.Router();

// GET endpoint to return all video links based on the game
router.get('/video/:game', async (req, res) => {
    try {
        const { game } = req.params;
        const videos = await videoService.getAllVideos();
        const filteredVideos = videos.filter(video => video.game === game);
        if (filteredVideos.length === 0) {
            return res.status(404).json({ message: 'No videos found for this game' });
        }
        res.json(filteredVideos); // Return all filtered videos
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST endpoint to add a video to the database
router.post('/video', async (req, res) => {
    try {
        const { username, videoLink, game } = req.body;
        const newVideo = await videoService.createVideo(username, videoLink, game);
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;