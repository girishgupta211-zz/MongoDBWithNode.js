PATCH PATCH /todo/:id
{{url}}/v1/todo/5874ceff618cbf4e2107433c
HEADERS
Content-Typeapplication/json
BODY
{
 "text" : "Request from postman completed by Girsh" ,
 "completed": true
}


Sample Request
todopatch
curl --request PATCH \
  --url {{url}}/v1/todo/5874ceff618cbf4e2107433c \
  --header 'content-type: application/json' \
  --data '{\n "text" : "Request from postman completed by Girsh" ,\n "completed": true\n}\n'
Sample Response
{
  "res": {
    "_id": "5874ceff618cbf4e2107433c",
    "text": "Request not complete  postman",
    "__v": 0,
    "completedAt": 1484117840463,
    "completed": true
  }
}


GET GET /todo/
http://localhost:3000/v1/todo


Sample Request
todoGet
curl --request GET \
  --url http://localhost:3000/v1/todo \
  --data '{\n "text" : "Request from postman completed" ,\n "completed": false\n}\n'
Sample Response
{
  "data": [
    {
      "_id": "5874ceff618cbf4e2107433c",
      "text": "Request from postman completed by Girsh",
      "__v": 0,
      "completedAt": null,
      "completed": false
    },
    {
      "_id": "5874ea053f94336d00037e0d",
      "text": "Request from postman koa",
      "__v": 0,
      "completedAt": null,
      "completed": true
    },
    {
      "_id": "5875273d7109e712f0d08bb2",
      "text": "Request from postman completed",
      "__v": 0,
      "completedAt": null,
      "completed": false
    },
    {
      "_id": "5875c03aab7fd10dc2ba2ebf",
      "text": "Request from postman completed",
      "__v": 0,
      "completedAt": null,
      "completed": false
    },
    {
      "_id": "5875c04dab7fd10dc2ba2ec0",
      "text": "Request from postman Latest",
      "__v": 0,
      "completedAt": null,
      "completed": true
    }
  ]
}


POST POST /todo/
http://localhost:3000/v1/todo
HEADERS
Content-Typeapplication/json
BODY
{
 "text" : "Request from postman Latest" ,
 "completed": true
}


Sample Request
POST /todo/
curl --request POST \
  --url http://localhost:3000/v1/todo \
  --header 'content-type: application/json' \
  --data '{\n "text" : "Request from postman Latest" ,\n "completed": true\n}\n'


DELETE delete todo:/id
http://localhost:3000/v1/todo/5874ceb7618cbf4e2107433b


Sample Request
delete todo:/id
curl --request DELETE \
  --url http://localhost:3000/v1/todo/5874ceb7618cbf4e2107433b


GET GET /todo/:id
http://localhost:3000/v1/todo/5874ceff618cbf4e2107433c


Sample Request
GET /todo/:id
curl --request GET \
  --url http://localhost:3000/v1/todo/5874ceff618cbf4e2107433c
