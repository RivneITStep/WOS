const express = require("express");
const router = express.Router();

const { getHomePage, getProducts, get404Page, getSingleProduct, postDeleteProduct } = require("../controllers/productController");

router.route("/main").get(getHomePage);
router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProduct);
router.route("/products-delete:id").get(postDeleteProduct);
router.route('*').get(get404Page);

module.exports = router;