const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ShortUrl = require("./models/shortUrl");

const port = 3000;

mongoose.connect("mongodb://localhost:27017/urlShortner", );

app.set('view engine', 'ejs');
app.set("views", "views")
app.use(express.urlencoded({extended:false}))

app.get("/", async (req, res)=>{
    const shortUrls = await ShortUrl.find()
    res.render("index.ejs", {shortUrls: shortUrls});
})

app.post("/shortUrls", async (req, res)=>{
    await ShortUrl.create({
        full: req.body.fullUrl
    })
    res.redirect("/");
})

app.get("/:shortUrl", async (req, res) => {
    const shortUrl = await ShortUrl.findOne({short : req.params.shortUrl});
    if(shortUrl==null) return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})


