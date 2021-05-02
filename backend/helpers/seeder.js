const Product = require("../models/product");
const User = require("../models/user");
const dotenv = require('dotenv');
const connectDatabase = require("../config/database");
const users = require("../data/user.json");
const products = require("../data/products.json");
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log("All products are deleted.")

        await Product.insertMany(products);
        console.log("All products are added.")

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

const seedUsers = async () => {
    try {
        await User.deleteOne();
        console.log("User is added.")

        await User.insertMany(users);
        console.log("User is deleted.")

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}
seedProducts();
seedUsers(); 