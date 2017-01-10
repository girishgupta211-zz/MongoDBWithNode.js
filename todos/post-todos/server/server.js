var koa = require('koa');
var parser = require('koa-better-body');
var router = require('koa-router');

var {Todo} = require('./models/todo');
var {mongoose} = require('./db/mongoose');

var app = koa();

// This is used to get parse request body such a json data in post request
app.use(parser());

var route = new router({ prefix : '/v1' });
route.get('/todo', getTodo);
route.post('/todo', updateTodo);


app.use(route.routes());
if (!module.parent) app.listen(3000);
console.log('Hello World is Running on http://localhost:3000/');

function* updateTodo(next) {
        try {
            console.log("this.request.fields" , this.request.fields)
            let todoReq = this.request.fields;
            let res =  yield (new Todo(todoReq)).save();
            this.status = 200;
            this.body = res;
            yield next;
        }
        catch(err) {
              console.log('Error while adding a todo');
       	      this.body = "Error in todo post rquest";
              this.status = 400;
        }
}



function* getTodo(next){
    console.log(this.request);
    this.type = 'json';
    this.status = 200;
    let res =  yield Todo.find({}).exec();
    this.body = {'Welcome': 'todo  Application!!  ' , res };
};

/*  Curl request for post*/
// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache"  -d '{ "text" : "Request from postman completed" , "completed": false } ' "http://localhost:3000/v1/todo"
