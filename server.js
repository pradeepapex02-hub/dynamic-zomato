const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

const restaurants = [
 {name:"Tandoori Treat", cuisine:"North Indian", rating:4.3},
 {name:"Pasta Palace", cuisine:"Italian", rating:4.1},
 {name:"Sushi Hub", cuisine:"Japanese", rating:4.6},
 {name:"Biryani House", cuisine:"Mughlai", rating:4.5},
 {name:"Burger Factory", cuisine:"Fast Food", rating:4.0},
 {name:"Pizza Corner", cuisine:"Italian", rating:4.2}
];

app.get("/api/restaurants", (req,res)=>{
    res.json(restaurants);
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"));
});

app.listen(port,()=>{
    console.log("Server running on port "+port);
});