# How to install nodejs

1. sudo npm install -g n
2. sudo n stable

# What's a Middleware?

A middleware is a pluggable function that adds or removes a particular piece of functionality by doing some work in the request/response objects in Node.js.

# Building Middleware

To add a middleware to your Koa application, we use the koa.use() method and supply the middleware function as the argument. Example: app.use(koa-logger) adds koa-logger to the list of middleware that our application uses.

# koa-route

## How to add secure and public routes

```
const koa = require('koa');
const router = require('koa-router');
koa.use(router('/public', publicCallback)
    .use(router('/secure', checkAuth, secureCallback)
```

What is ECMA 6 What is Generator functions Explain with examples
What is koa What is Generator functions

# How koa pushed functions to middleware

app.use = function(fn){ debug('use %s', fn.name || 'unnamed'); this.middleware.push(fn); return this; };

# koa-better-body:

This is used for parsing text, buffer, json, json patch, json api, csp-report, multipart, form and urlencoded bodies.

```javascript
var body = require('koa-better-body');

  router.post('/upload', body(), function * (next) {
    console.log(this.request.body)    // if buffer or text
    console.log(this.request.files)   // if multipart or urlencoded
    console.log(this.request.fields)  // if json
})
```




# Arrow Functions
### ECMAScript 5

> nums.forEach(function (v) {
   if (v % 5 === 0)
       fives.push(v);
});

### ECMAScript 6 
> nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v)
})
