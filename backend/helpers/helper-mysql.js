const mysql = require('mysql')
const path = require('path')
const fs = require('fs')
const util = require('util')
const config = require('../config.js')
//init
let connect = function () {
    return new Promise((resolve, reject) => {
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "nag123",
            insecureAuth: true,
            multipleStatements: true
        });
        con.connect(function (err) {
            if (err) reject(err);
            resolve();
        });
    })
}
let querySync = async function (query) {
    // if(config.DEBUG) console.log(query)
    return new Promise((resolve, reject) => {
        con.query(query, async (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })

}

module.exports = {
    init_db: function () {
        connect()
            .then(() => {
                if(config.DEBUG) console.log("Reading Init File...")
                let data = fs.readFileSync(path.join(config.CODE_DIR, config.BD_INIT_FILE), {
                    encoding: 'utf8'
                })
                if(config.DEBUG) console.log("Initializing DB...")
                if(config.DEBUG) console.log(data)
                con.query(data, (err, res) => {
                    if (err) throw err
                    if(config.DEBUG) console.log(res[0])
                    if(config.DEBUG) console.log(res[1])
                })
            })
            .catch((e) => {
                if(config.DEBUG) console.log("Error in connecting...")
                if(config.DEBUG) console.log(e)
            })
            .then(() => {
                con.commit()
            })
            .catch((err) => {
                if(config.DEBUG) console.log("error in closing conn..")
                if(config.DEBUG) console.log(err)
            })
            .finally((e) => {
                con.end()
                if(config.DEBUG) console.log("Initialize Complete...")
                if(config.DEBUG) console.log(e)
            })
    },
    insert_image: async function (img) {
        return new Promise((resolve,reject) => {
            connect()
                .then(async () => {
                    // const querySync = util.promisify(con.query)
                    query = "use ??;SET AUTOCOMMIT=0;insert into image (image_name,image_format,image_orientation,image_height,image_width,description,upload_time,location_1,location_2) values(\?,?,?,?,?,?,current_timestamp(),?,?)"
                    inserts = [
                        config.DB_NAME, img.image_name, img.image_format, img.image_orientation, img.image_height, img.image_width, img.description, img.location_1, img.location_2
                    ]
                    query = mysql.format(query, inserts)
                    if(config.DEBUG) console.log(query)

                    let res = await querySync(query)
                    if(config.DEBUG) console.log("Image id -------" + res[2].insertId)
                    img.image_id = res[2].insertId
                    return img
                })
                .then((img)=>{
                    image_id = img.image_id
                    if(config.DEBUG) console.log("Inserting Tags...")
                    query = "use ??;SET AUTOCOMMIT=0;insert into tag (image_id,tag,type) values(?,?,?)"
                    img.tags.forEach(async (tag) => {
                        q = mysql.format(query, [config.DB_NAME, image_id, tag.name, tag.type])
                        if(config.DEBUG) console.log(q)
                        let r = await querySync(q)
                    })
                })
                .then(() => {
                    con.commit()
                    resolve(true)
                })
                .catch((err) => {
                    if(config.DEBUG) console.log("Error in Inserting...")
                    con.rollback()
                    if(config.DEBUG) console.log(err)
                })
                .finally(() => {
                    con.end()
                    if(config.DEBUG) console.log("Disconnected...")
                })
            });

    },
    search_image: function(search,callback) {
        return new Promise((resolve,reject) => {
            connect()
            .then(() => {
                query = "use ??;select \
                image.image_id,image.image_name,image.image_format,image.image_orientation,image.image_height,image.image_width,image.description,image.upload_time,image.location_1,image.location_2,group_concat(tag.tag) as tags\
                from image inner join tag on image.image_id=tag.image_id where "
                query = mysql.format(query,[config.DB_NAME])
                conditions = Array()
                let i = 0
                if(search.tags){
                    c = "tag.tag in (" + "?,".repeat(search.tags.length).slice(0,-1) + ")"
                    conditions[i++] = mysql.format(c,search.tags)
                }
                if(search.date_range){
                    c = "image.upload_time between ? and ?"
                    conditions[i++] = mysql.format(c,[search.date_range[0],search.date_range[1]])
                }
                else if(search.date_regex){
                    parts = search.date_regex.split("-");
                    parts = {
                        YEAR:parseInt(parts[0]),
                        MONTH:parseInt(parts[1]),
                        DAY:parseInt(parts[2])
                    }
                    Object.keys(parts).forEach(part=>{
                        if(config.DEBUG) console.log(parts[part])
                        if(parts[part]){
                            c = `${part}(image.upload_time) = ?`
                            conditions[i++] = mysql.format(c,[parts[part]])
                        }
                    })
                }
                if(search.description){
                    c = "MATCH(image.description) AGAINST(?)"
                    conditions[i++] = mysql.format(c,search.description)
                }
                query += conditions.join(" and ")
                query += " group by image.image_id,image.image_name,image.image_format,image.image_orientation,image.image_height,image.image_width,image.description,image.upload_time,image.location_1,image.location_2 \
                 order by image.upload_time desc"
                return query
            })
            .then(async (query)=>{
                let res = await querySync(query)
                return res
            })
            .then((res)=>{
                if(config.DEBUG) console.log(res)
                result = []
                res[1].forEach(row=>{
                    result.push({
                        image_id            :row.image_id,
                        image_name          :row.image_name,
                        image_format        :row.image_format,
                        image_orientation   :row.image_orientation,
                        image_height        :row.image_height,
                        image_width         :row.image_width,
                        description         :row.description,
                        upload_time         :row.upload_time,
                        location_1          :row.location_1,
                        location_2          :row.location_2,
                        tags                :row.tags
                    })
                })
                // callback(result)
                resolve(result);
            })
            .catch((err) => {
                if(config.DEBUG) console.log("Error in InsSearcherting...")
                if(config.DEBUG) console.log(err)
            })
            .finally(() => {
                con.end()
                if(config.DEBUG) console.log("Disconnected...")
            })
        });
    }
}