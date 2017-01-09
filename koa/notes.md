What is ECMA 6
What is Generator functions
Explain with examples

# What's a Middleware?
  A middleware is a pluggable function that adds or removes a particular piece of functionality by doing some work in the request/response objects in Node.js.

# Building Middleware
  To add a middleware to your Koa application, we use the koa.use() method and supply the middleware function as the argument. Example: app.use(koa-logger) adds koa-logger to the list of middleware that our application uses.

# How to add secure and public routes  
  koa.use(router('/public', publicCallback).use(router('/secure', checkAuth, secureCallback)

What is koa

What is Generator functions

koa = require('koa'),
var router = require('koa-router'),
publicAPI = router(),
app.post('/v1/resetPassword', parse(), resetPasswordRouter);

koa.use(publicAPI);
We are pushing publicAPI( function ) in the middleware of koa app

app.use = function(fn){
  debug('use %s', fn.name || 'unnamed');
  this.middleware.push(fn);
  return this;
};


How to install nodejs

1. sudo npm install -g n
2. sudo n stable
