const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let restaurants = [
 {name:"Tandoori Treat", cuisine:"North Indian", rating:4.3},
 {name:"Pasta Palace", cuisine:"Italian", rating:4.1},
 {name:"Sushi Hub", cuisine:"Japanese", rating:4.6}
];

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"));
});

app.get("/api/restaurants",(req,res)=>{
    res.json(restaurants);
});

app.post("/api/restaurants",(req,res)=>{
    restaurants.push(req.body);
    res.json({message:"Restaurant added"});
});

app.listen(port,()=>{
    console.log("Server running on port "+port);
});