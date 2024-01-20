const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const user = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res)=>{
    res.json({"Hii": "Hello World"})
});

 app.use('/api', user);

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Port Running on ${PORT}`)
});