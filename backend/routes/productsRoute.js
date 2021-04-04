const express = require("express");

const router = express.Router();
const { getProducts } = require("../controllers/productController");
const { get404Page } = require("../controllers/productController");


router.route('/products').get(getProducts);
router.route('*').get(get404Page);


module.exports = router;