const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.getAllMovies);
// Definir otras rutas para POST, PUT, DELETE...

module.exports = router;
