const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/file');

router
  .route('/')
  .post(upload);

module.exports = router;