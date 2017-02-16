1. Rich document
2. Application agnostic
3. Pattern , Read / write
4. No constrains
5. No joins
6. Atomic operations within document
7. No declared Schema
8. Similar structure


Post  ( denormalized )

PostId  title              body                  Author     Author Email
1     Mongo Intro          'mongoDB is awesome'  'Girish'  'girish.gupta@gemini'
2     Mongo Intermediate   'mongoDB .....'      'Andrew'  'Andrew@gmail.com'
3     Mongo Advance        'sharding'           'Girish'  'girish.gupta@geminisolutions.in'



Goals of normalization:
1. Free the database of modification anomalities ( update email in 1 world and not in other)
2. Minimize redesign when extending
3. Avoid any bias towards any particular access pattern

mongoDB avoids the --> no duplicate

Living without constrints

post in MongoDB
_id:
title:
body:
authorId:
comments:
tags:

Author:
_id
name
email
password (hashed)

comments:
postId
text
comment
user Name


Given the document schema that we proposed for the blog, how many collections would need to be accessed to display a blog post with its comments and tags?



Living without transaction
Lack of transactions in MongoDB
we have atomic operations

If you have multiple tables and update all the tables , then do it in all join tables or not


How to do in MongoDB
1. Restructre to keep all in 1 document
2. implement in Software
3. Tolerate little bit inconsistance.  --> suppose if in case gets the latest feeds in friends


Which of the following operations operate atomically within a single document? Check all that apply.
update
findAndModify
$addToSet
$push




One to One Relation
Employee : Resume
Builing : floor plan
Patient : Medical History

Employee:
_id
name
resume
ResumeId

Resume:
_id
jobs : [ 'Apple', 'Google' , 'Microsoft' ]
Education : []
emplyeeId

You can embed resume in employee or employee in resume

1. Depend on access pattern, whether you are accessing employee info multiple times a day
    rather than resume then why to keep it inside the memory
if you update resume frequently then keep it in different document

2. Size of item.
If size of resume more than 16 M then keep it in different colletion

3. Atomicity of document, then keep in same documents



It's also worth noting that you might decide to keep the resume separate from the employee
 document if the resume needs to exist when no employee exists for that resume.
 That is, perhaps you first get a resume and they later become an employee, or not.




What's a good reason you might want to keep two documents that are related to each other one-to-one in separate collections?
Check all that apply.
Because you want to allow atomic update of both documents at once.
To reduce the working set size of your application.
To enforce foreign key constraints
Because the combined size of the documents would be larger than 16MB




One to Many relationship
city: person
Gurgaon : 8 Mn people

City :
id
name
area
people : []


people
name  :
city : Gurgaon
Area: Udyog Vihar

linking

Poeple
name : Girish
city : Gurgaon
Area: Udyog Vihar

city: { _id : 'Gurgaon'}


One to few:
blog post and comment
1: 100

post collection:  ( embed)
name
array of comments


When is it recommended to represent a one to many relationship in multiple collections?
Choose the best answer:
Always
Whenever the many is large
Whenever the many is actually few
Never



Many to Many:
Books : Author (few to few)
student : teacher

Books :
_id : 1
title : "Go with the wind"
authors: [27]


Author:
_id : 27
author_name
books : []

if we embeed within Author, It will create update anmolities

but there is no gaurantty that update will be atomic



should not embeed teacher in student


MultiKey indexes:
students
_id : 0,
name: 'Andre',
teacher : [1, 0, 3 ,23 ]

teacher:
_id:
name : 'Prof K.S. Signh'


Find all the teachers that a student have
Find all the students having a perticular teacher


Befini

Improved read performance
one round trip to DB
