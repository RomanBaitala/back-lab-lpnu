const express = require('express');
const { addToCart, removeFromCart } = require('../../controllers');

const router = express.Router();

router.post('/add', addToCart);
router.delete('/remove', removeFromCart);

module.exports = router;
