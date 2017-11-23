var express = require('express');
var request = require('request');

var app = express();

app.use('*', function (req, res, next) {
	// 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});

// 获取电影列表
app.get('/movielist', function (req, resp) {

  var type = req.query.type; 
  // var url = 'https://api.douban.com/v2/movie/' + type;
  // request(url, function (error, response, body) {
  //   resp.send(body);
  // });

  resp.send(require('./data/' + type));
  
})

// 获取电影详情
app.get('/moviedetail', function (req, resp) {
  
    var id = req.query.id; 
    var url = 'https://api.douban.com/v2/movie/subject/' + id;
    request(url, function (error, response, body) {
      resp.send(body);
    });
  
    // resp.send(require('./data/' + type));
    
  })
  

app.listen('3091', function () {
  console.log('OK');
})