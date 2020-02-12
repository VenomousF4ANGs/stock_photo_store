const express = require('express');
const mysql = require('../helpers/helper-mysql');
const config = require('../config');

app = express.Router()
app.get("/",async (req,res)=>{
    search = req.query
    if(search.tags){
        search.tags = search.tags.split(",")
    }
    if(search.date_from && search.date_to){
        search.date_range = [search.date_from,search.date_to]
    }

    let result = await mysql.search_image(search);
    res.json( result );
})

module.exports = app