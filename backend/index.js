const express = require('express');
const expressFileUpload = require('express-fileupload');
const cors = require('cors');
const config = require('./config');
const searchAPI = require('./routes/searchApi');
const uploadAPI = require('./routes/uploadApi');

app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(expressFileUpload({createParentPath:true}));
app.use(cors());
app.use("/search",searchAPI);
app.use("/upload",uploadAPI);
app.use('/data',express.static('../data'));
app.use('/resources',express.static('/resources'));

app.listen(config.API_PORT,()=>console.log(`Listening on ${config.API_PORT}..`));