const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./config/database");

dotenv.config({ path: 'backend/config/config.env' });


// Connection to database
connectDatabse();


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))