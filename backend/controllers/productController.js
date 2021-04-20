const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {

    const products = await Product.find();
    res.status(200).json({
        success: true,
        message: "getProducts",
        products
    })
}

exports.getSingleProduct = async(req,res, next) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
        success: true,
        message: "getSingleProduct",
        product
    })
}

exports.deleteProduct = async(req, res, next) => {
    const idDeleteProduct = req.params.id;
    const products = await Product.deleteOne({_id: req.params.id});
    res.status(200).json({
        success: true,
        message: "deleteProduct",
        idDeleteProduct
    })
}

exports.get404Page = (req, res, next) => {
    res.status(404).json({
        success: true,
        message: "Page-404"
    })   

}
  
exports.getHomePage = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getHomePage"
    })
}