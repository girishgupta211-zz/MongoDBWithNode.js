const koa = require('koa'),
    parser = require('koa-better-body'),
    router = require('koa-router'),
    _ = require('lodash'),
    { ObjectID } = require('mongodb'),
    { Todo } = require('./models/todo'),
    { mongoose } = require('./db/mongoose');

let app = koa();

// This is used to get parse request body such a json data in post request
app.use(parser());

let route = new router({ prefix: '/v1' });
route.get('/todo', getTodo);
route.get('/todo/:id', getTodoById)
route.post('/todo', addTodo);
route.del('/todo/:id', deleteTodo);
route.patch('/todo/:id', updateTodo);


app.use(route.routes());
if (!module.parent) app.listen(3000);
console.log('Hello World is Running on http://localhost:3000/');


function* getTodoById(next) {
    try {
        let id = this.params.id;
        if (!ObjectID.isValid(id)) {
            this.status = 400;
            this.body = 'todo Id is not a valid Object Id';
            return;
        }

        let res = yield Todo.findById(id);
        if (!res) {
            this.status = 404;
            this.body = `No data found for  ${id}`;
            return;
        }

        this.status = 200;
        this.body = { 'data': res };
        yield next;
    } catch (err) {
        console.log('Error while getting todo', err);
        this.body = "Error in todo get  rquest";
        this.status = 400;
    }
};




function* getTodo(next) {
    try {
        let res = yield Todo.find({}).exec();
        this.status = 200;
        this.body = { 'data': res };
        yield next;
    } catch (err) {
        console.log('Error while Getting  todo', err);
        this.body = "Error while Getting  todo";
        this.status = 400;
    }
};




function* addTodo(next) {
    try {
        console.log("this.request.fields", this.request.fields)
        let todoReq = this.request.fields;
        let res = yield(new Todo(todoReq)).save();
        this.status = 200;
        this.body = res;
        yield next;
    } catch (err) {
        console.log('Error while adding a todo', err);
        this.body = "Error in todo post rquest";
        this.status = 400;
    }
}



function* deleteTodo(next) {
    try {
        let id = this.params.id;
        if (!ObjectID.isValid(id)) {
            this.status = 404;
            this.body = 'id is not valid ObjectId';
            return;
        }
        console.log("Delete Todo : ", id);
        //let todoStruct = yield Todo.findOneAndRemove({ _id: id });
        let todoStruct = yield Todo.findByIdAndRemove(id);
        if (!todoStruct) {
            this.status = 404;
            return;
        }
        //console.log("todoStruct" , todoStruct);   
        this.body = todoStruct;
        this.status = 200;
        yield next;
    } catch (error) {
        console.log('Exception caught in deleting todo: ', error);
        this.body = "Error in processing delete request";
        this.status = 400;
    }
}

function* updateTodo(next) {
    try {
        let id = this.params.id;
        let body = _.pick(this.request.fields, ["text", "completed"]);
        if (!ObjectID.isValid(id)) {
            this.status = 404;
            this.body = 'id is not valid ObjectId';
            return;
        }

        if (_.isBoolean(body.completed) && body.completed) {
            body.completedAt = new Date().getTime();
        } else {
            body.completed = false;
            body.completedAt = null;
        }

        console.log(body);
        // If we do not pass {new: true}, this will return origional document. After passing {new : true}, it returns updated document.
        let res = yield Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).exec();
        this.body = { res };
        console.log(res);

    } catch (err) {
        console.log('Error while updating a todo', err);
        this.body = "Error in todo patch rquest";
        this.status = 400;
    }
}

module.exports.app =  app;
/*  Curl request for post*/
// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache"  -d '{ "text" : "Request from postman completed" , "completed": false } ' "http://localhost:3000/v1/todo"

/*  Curl request for Delete*/
// curl -X DELETE -H "Cache-Control: no-cache" -H "Postman-Token: 163175cc-4598-c2ed-f52b-51b17d7cf6ac" -d '' "http://localhost:3000/v1/todo/5874ceb7618cbf4e2107433b"

// Curl request for get
//curl -X GET -H "Cache-Control: no-cache" -H "Postman-Token: 1750be43-025f-b52b-cf41-57a08d09a1c3" "http://localhost:3000/v1/todo"
