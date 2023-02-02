const expressApp = require("./express");

const { SERVER_PORT, SERVER_HOST } = require("./const/const");

const logger = require("./utils/logger");

//import logger from "./utils/logger.js";
//import { getCurrentFileName } from "./utils/fileUtil.js";

//const jsName = getCurrentFileName(PARENT_PATH);

expressApp.listen(SERVER_PORT, SERVER_HOST, () => {
    logger.info("index.js", "start Server")
});
