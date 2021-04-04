exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getProducts"
    })
}
exports.getHomePage = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getHomePage"
    })
}