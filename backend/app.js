const express = require("express");

const cors = require('cors');

// Error middleware
const errorMiddleware = require("./middleware/errors");

const app = express();
const productRouter = require("./routes/productsRoute")
const auth = require('./routes/auth');
app.use(cors())

app.use("/api/v1/", productRouter)
app.use('/api/v1', auth)

app.use(errorMiddleware);

module.exports = app;
