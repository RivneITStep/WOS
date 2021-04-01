const express = require("express");

const app = express();
const productRouter = require("./routes/productsRoute")

app.use("/api/v1/", productRouter)

module.exports = app;
