exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getProducts"
    })
}

exports.get404Page = (req, res, next) => {
    res.status(404).json({
        success: true,
        message: "Page-404"
    })    
  
exports.getHomePage = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "getHomePage"
    })
}