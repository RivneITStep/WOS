const express = require("express");
const router = express.Router();

const { getHomePage, getProducts, get404Page,addProduct } = require("../controllers/productController");

router.route("/main").get(getHomePage);
router.route("/products").get(getProducts)
router.route("/products-add:id").get(addProduct)
router.route('*').get(get404Page);

module.exports = router;