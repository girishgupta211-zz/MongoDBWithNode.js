var koa = require('koa');
var app = koa();
var router = require('koa-router');
 
var handler = function *(next){
    this.type = 'json';
    this.status = 200;
    this.body = {'Welcome': 'This is a level 2 Hello World Application!!'};
};

 
var route = new router({ prefix : '/v1' });
route.get('/all', handler);
//app.use(route.middleware()); 
app.use(route.routes()); 
if (!module.parent) app.listen(3000);
console.log('Hello World is Running on http://localhost:3000/');
