const { Router, response } = require("express");
const routes = Router();

const data = require("./../data/quest.json");
const data2 = require("./../data/results.json");

routes.get("/",(req,res)=>{
    res.json(data);
})

routes.get("/results",(req,res)=>{
    res.json(data2);
})

module.exports = routes;