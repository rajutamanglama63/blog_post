const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const articleRouter = require("./routes/articleRoute.js");
const articlePostRouter = require("./routes/articleRoute.js");

dotenv.config();

const app = express();

PORT = process.env.PORT || 4000;

// bodyParser middleware
app.use(express.json());

// cors middleware
app.use(cors());

// route middleware
app.use("/articles", articleRouter);
app.use("/posts", articlePostRouter);


// mongodb connection
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) => console.log(error));

app.listen(PORT, (req, res) => {
    console.log(`Server is running on Port http://localhost:${PORT}`);
});

