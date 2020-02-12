test_extractor = function () {
    const extractor = require('./helper-extractor.js')
    console.log(extractor.extract_entities())
}

test_db_init = function () {
    const mysql = require('./helper-mysql.js')
    mysql.init_db()
}

test_insert_img = async function () {
    const mysql = require('./helper-mysql.js')
    await mysql.insert_image({
        image_name:"abc.jpg",
        image_format:"jpg",
        image_orientation:"landscape",
        image_height:"240",
        image_width:"720",
        description:"hello world",
        upload_time:"test",
        location_1:"test",
        location_2:"test",
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
}

test_search_img = async function() {
    const mysql = require('./helpers/helper-mysql.js')
    return await mysql.search_image({
        description:"hello",
        date_regex:"2020-*-04",
        date_range:[
            "2020-02-06","2020-02-07"
        ],
        tags:[
            "dog","cat"
        ]
    })
}

test_sharp = async function(){
    let img_meta = await sharp('../data/img1/dog.jpg').metadata();
    if(img_meta.height > img_meta.width){
        
    }
}

new Promise(async (r,j)=>{
    console.log("Calling...")
    let res = await test_sharp()
    console.log("after return")
    console.log(res)
}).then()


// test_search_img()
