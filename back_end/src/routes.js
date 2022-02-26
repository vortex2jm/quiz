const { Router, response } = require("express");
const routes = Router();

const data = require("./../data/quest.json");

routes.get("/",(req,res)=>{
    res.json(data);
})

module.exports = routes;