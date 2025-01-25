const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/urlShortner", );

app.set('view engine', 'ejs');

app.set("views", "views")

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.post("/shortUrls", (req, res)=>{

})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


