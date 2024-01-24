const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://saurabh:unos1234@cluster0.g2boaoy.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB",error);
});

app.listen(port, ()=>{
    console.log("server is running on port 8000");
});