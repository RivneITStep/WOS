const express = require("express");
const router = express.Router();
const { getHomePage, getProducts } = require("../controllers/productController")

router.route("/main").get(getHomePage);
router.route("/products").get(getProducts)

module.exports = router;