const path = require('path');

const express = require('express');

const pages = require('../controllers/pages');

const router = express.Router();

router.get('/', pages.getIndex);

router.get('/voters', pages.getVoter);

router.get('/admins', pages.getAdmin);


module.exports = router;