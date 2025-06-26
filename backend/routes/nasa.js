const express = require('express');
const router = express.Router();
const { 
  getAPOD, 
  getMarsRoverPhotos, 
  getEPICImages, 
  getNeoWs, 
  searchNASA 
} = require('../controllers/nasa');
const { protect } = require('../middleware/auth');

router.get('/apod', protect, getAPOD);
router.get('/mars-rover-photos', protect, getMarsRoverPhotos);
router.get('/epic', protect, getEPICImages);
router.get('/neows', protect, getNeoWs);
router.get('/search', protect, searchNASA);

module.exports = router;