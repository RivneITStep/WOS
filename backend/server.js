const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config({ path: 'backend/config/config.env' });


const MONGODB_URI = 'mongodb+srv://Vika:anB8!ZkhCDzn9Li@cluster0.vjovu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || "mongodb://localhost/WOS", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
})




app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))