const path = require('path')
const fs = require('fs')
const config = {
    BASE_DIR: process.env.BASE_DIR ? process.env.BASE_DIR : path.join(__dirname, "..", "data"),
    CODE_DIR: process.env.CODE_DIR ? process.env.CODE_DIR : __dirname,
    DB_DIR: process.env.BASE_DIR ? path.join(process.env.BASE_DIR, "db") : path.join(__dirname, "..", "data", "db"),
    IMG1_DIR: process.env.BASE_DIR ? path.join(process.env.BASE_DIR, "img") : path.join(__dirname, "..", "data", "img1"),
    IMG2_DIR: process.env.BASE_DIR ? path.join(process.env.BASE_DIR, "img") : path.join(__dirname, "..", "data", "img2"),
    BD_INIT_FILE: "db-init.sql",
    DB_NAME:"stock_photo",
    DEBUG:true,
    API_PORT: process.env.API_PORT || 1234
};
[config.BASE_DIR, config.DB_DIR, config.IMG1_DIR, config.IMG2_DIR].forEach((p) => {
    // console.log(p)
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p, {
            recursive: true
        })
    }
})
module.exports = config;