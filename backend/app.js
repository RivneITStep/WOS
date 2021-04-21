const express = require("express");

//Error Middleware
const errorMiddleware = require("./middleware/errors");

const app = express();
const productRouter = require("./routes/productsRoute")

app.use("/api/v1/",productRouter)

app.use(errorMiddleware);

module.exports = app;
