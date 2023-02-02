// import logger from "../utils/logger.js";
// import fs from "fs";
// import { CDR_DATA_FILENAME, CDR_DATA_PATHNAME, PARENT_PATH } from "../const/const.js";
// import { currentGetYYYYMMDD } from "../utils/string.js";
// import { CDR_DATA_IS_EMPTY, ERRORCODE, NOT_EXSIS_PARAMETER, SUCCESS } from "../utils/errorCode.js";
const axios = require("axios");
const { ASTERISK1_HOST, ASTERISK1_PORT } = require("../const/const");
/* GET users listing. */

async function testHandler(req, res){
    
    let resultobj = {}

    resultobj.result = "false";
    await axios
        .post(`http://${ASTERISK1_HOST}:${ASTERISK1_PORT}/pingpong`, )
        .then( async function (response){
            let data = response.data
            resultobj.result = data.result
            return res.json(resultobj)
        })
        .catch(error => {
            console.log("error : " + error)
            return res.json(resultobj)
        })

}

module.exports = testHandler;
