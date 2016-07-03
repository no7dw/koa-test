var koa = require('koa');
var app = koa();

// x-response-time

var setResponseTime = function *(next){
	var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
}

// logger
var logger = function *(next){
	var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
}
// response
var response = function *(){
  this.body = 'Hello World'
}

var timeout = function *(next){
	setTimeout((yield next), 3000 );
}

// app.use(timeout)
app.use(logger)
app.use(setResponseTime)
app.use(response);

app.listen(3000);
console.log("listening 3000");
