const router = require('express').Router();
const { signup, signin } = require('../controller/admin/auth');

const { 
    getAuthors, 
    addAuthor, 
    removeAuthor 
} = require('../controller/admin/authorController');

const { 
    getTags, 
    addTag, 
    removeTag 
} = require('../controller/admin/tagController');

const { 
    getPlayers, 
    addPlayer, 
    removePlayer 
} = require('../controller/admin/playerController');

const { 
    getPodcasts, 
    addPodcast, 
    removePodcast 
} = require('../controller/admin/podcastController');

const { 
    getVideos, 
    addVideo, 
    removeVideo 
} = require('../controller/admin/videoController');
const { isAuthenticate } = require('../middlewire/common');

router.post('/admin/signup', signup);
router.post('/admin/signin', signin);

router.get('/admin/authors', getAuthors);
router.post('/admin/author',isAuthenticate, addAuthor);
router.delete('/admin/author',isAuthenticate, removeAuthor);

router.get('/admin/tags', getTags);
router.post('/admin/tag',isAuthenticate, addTag);
router.delete('/admin/tag',isAuthenticate, removeTag);

router.get('/admin/players', getPlayers);
router.post('/admin/player',isAuthenticate, addPlayer);
router.delete('/admin/player',isAuthenticate, removePlayer);

router.get('/podcasts', getPodcasts);
router.post('/admin/podcast',isAuthenticate, addPodcast);
router.delete('/admin/podcast',isAuthenticate, removePodcast);

router.get('/videos', getVideos);
router.post('/admin/video',isAuthenticate, addVideo);
router.delete('/admin/video',isAuthenticate, removeVideo);


module.exports = router;