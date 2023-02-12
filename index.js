require("dotenv").config();
const EXPRESS = require("express");
const APP = EXPRESS();
APP.listen(process.env.PORT || 80);
var bodyParser = require("body-parser");
APP.use(bodyParser.json()); // support json encoded bodies
APP.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

APP.use("/public", EXPRESS.static("public"));

APP.get("/", function (req, res) {
    res.sendFile("public/index.html", { root: __dirname });
});
