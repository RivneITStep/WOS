const express = require("express");
const router = express.Router();

const { getHomePage, getProducts, get404Page, getSingleProduct, deleteProduct, addProduct, editProduct } = require("../controllers/productController");

router.route("/main").get(getHomePage);
router.route("/products").get(getProducts);
router.route("/products-delete/:id").delete(deleteProduct);
// router.route("/product/:id").get(getSingleProduct)
router.route("/products-add:id").get(addProduct)
router.route("/product-edit/:id").get(editProduct);
router.route('*').get(get404Page);

module.exports = router;