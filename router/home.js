const express = require("express");

const testHandler = requre("../services/testService");
//const loginHandler = require("../services/loginService");

//const selectHandler = require("../services/selectService");
//const insertHandler = require("../services/insertService");
//const deleteHandler = require("../services/deleteService");

//const userinfoHandler = require("../services/userinfoService");

//const selectuserHandler = require("../services/selectuserService");
//const insertuserHandler = require("../services/insertuserService");
//const deleteuserHandler = require("../services/deleteuserService");

//const memberImgHandler = require("../services/memberImgService");
//const pingpong1Handler = require("../services/pingpong1Service");
//const pingpong2Handler = require("../services/pingpong2Service");

const router = express.Router(); // get an instance of the express Router


router.post("/test", testHandler);
//router.post("/select", selectHandler);
//router.post("/insert", insertHandler); // use the router to handle the route
//router.post("/delete", deleteHandler);
//router.post("/login", loginHandler);
//router.post("/userinfo", userinfoHandler);
//router.post("/selectuser", selectuserHandler);
//router.post("/insertuser", insertuserHandler);
//router.post("/deleteuser", deleteuserHandler);
//router.post("/memberImg", memberImgHandler);
//router.post("/pingpong1", pingpong1Handler);
//router.post("/pingpong2", pingpong2Handler);

module.exports=router;
