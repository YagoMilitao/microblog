const express = require('express');
const router = require('express').Router();

router.use('/', require('./postagem'));
router.use('/', require('./comentario'));

module.exports = router;