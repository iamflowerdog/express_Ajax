var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/ajax", (req, res) => {
    console.log("服务器已经收到ajax请求");
    console.log(req.query.name, req.query.password);
    res.send("ajax已经收到，over! ha")
});

router.post("/PostAjax", (req, res) => {
    console.log("post请求已经收到");
    console.log(req.body)
    res.send("服务器已经收到你的post请求");
});

module.exports = router;
