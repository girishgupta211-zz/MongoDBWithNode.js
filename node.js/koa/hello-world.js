var koa = require('koa');
var app = koa();
app.use(function *() {
	this.body = 'Hello to Koa World !!!';
});

console.log('Running from port 3000 http://localhost:3000/ ');
app.listen(3000);
