const express = require('express');
const path = require('path');
const sharp = require('sharp');
const config = require('../config');
const mysql = require('../helpers/helper-mysql');

app = express.Router()
app.get("/",(req,res)=>{
    res.json({msg:"Hello"})
})
app.post("/",async (req,res)=>{
    if(req.files){
        let img = req.files.img;
        let data = req.query;
        let img_meta = await sharp(img);
        img.mv(path.join(config.IMG1_DIR,img.name))

        mysql.insert_image({
            image_name:img.name,
            image_format:img.name.split(".")[-1],
            image_orientation:"landscape",
            image_height:"240",
            image_width:"720",
            description:data.description,
            location_1:path.join(config.IMG1_DIR,img.name),
            location_2:path.join(config.IMG2_DIR,img.name),
            tags:[
                {
                    name:"dog",
                    type:"extracted"
                },
                {
                    name:"cat",
                    type:"description"
                }
            ]
        })
        .then((res)=>{
            res.json({
                msg:"Success"
            })
        })
        .catch((err)=>{
            res.status(400).json({
                msg:err.toString()
            })
        })

    }
    else{
        res.status(400).json({
            msg:"No File Specified"
        })
    }
})

module.exports = app