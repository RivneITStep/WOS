const Product = require("../models/product");

exports.getProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        message: "getProducts",
        products
    })
}


exports.addProduct = async(req, res, next) => {
    const products = await Product.insertMany(
        {
            "name": "Mонитор 28 Samsung Curved C27F396F (LC27F396FHIXCI)",
            "price": 25000,
            "descriptions": "Ощутите поистине захватывающие эмоции от просмотра или работы с необычайно изогнутым монитором Samsung. Линия изгиба изогнутого монитора такая же как у экрана в кинотеатре iMax и составляет 1 800 R или 1 800 мм (радиус дуги по которой изогнут экран), что создает более широкое поле зрения, повышает глубину восприятия картинки и сводит к минимуму отвлечения по периферии. Таким образом, любимое ТВ-шоу, гоночная игра и другой медиа-контент подарят совершенно иной, незабываемый опыт.",
            "images": [
                {
                    "product_id": "products/g2030405",
                    "url": "https://i2.rozetka.ua/goods/18530646/acer_um_kv2ee_p01_images_18530646283.jpg"
                }
            ],
            "category": "Monitors",
            "seller": "Rozetka",
            "stock": 10,
            "numOfReviews": 90,
            "reviews": []
        }
    )  
    res.status(200).json({
        success: true,
        message: "addProduct",
        products
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

exports.editProduct = async(req, res, next) => {
    const productEdit = await Product.findById({_id: req.params.id});
    res.status(200).json({
        success: true,
        message: "editProduct",
        productEdit
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