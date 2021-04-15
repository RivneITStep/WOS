const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database");

const mongoose = require("mongoose");

const MONGODB_URI = 'mongodb+srv://Masha:2011qW@wos.lbu2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || "mongodb://localhost/WOS", {

    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

dotenv.config({ path: 'backend/config/config.env' });


// Connection to database
connectDatabse();


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))