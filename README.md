# What is MongoDB:
* MongoDB is an open source database that uses a document-oriented data model.

* MongoDB is one of several database types to arise in the mid-2000s under the NoSQL banner. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. Documents comprise sets of key-value pairs and are the basic unit of data in MongoDB. Collections contain sets of documents and function as the equivalent of relational database tables

* Like other NoSQL databases, MongoDB supports dynamic schema design, allowing the documents in a collection to have different fields and structures. The database uses a document storage and data interchange format called BSON, which provides a binary representation of JSON-like documents. Automatic sharding enables data in a collection to be distributed across multiple systems for horizontal scalability as data volumes increase.

# MongoDB for Node.js Developers
* This course is for learning mongo DB from scratch with Node.js.

# Prerequisites:
* Should be comfortable with use of callbacks in JavaScript.

# About this course
* Learn everything you need to know to get started building a MongoDB-based app. This course will go over basic installation, JSON, schema design, querying, insertion of data, indexing and working with the mongoose. 

# Objective
* After completing this course, you should have a good understanding as to how applications are built on top of MongoDB using Node.js

# Course Duration:
* This is 8 weeks course. This is divided into 3 levels.
 
# Beginner Level
Overview
--------
- Overview of Building an App with MongoDB
- Installing MongoDB (Linux)
- What’s is JSON and BSON
- Introduction to Creating and Reading Documents
- What is ObjectId


CRUD Operations
---------------

- Creating Documents
- The _id Field
- Reading Documents
- Comparison Operators
- Element Operators
- Logical Operators
- Regex Operator
- Array Operators
- Updating Documents
- Query operators such as : $, $in, $incr, $push, $pull, $near, Geo-operators

Schema Design
-------------

- MongoDB Schema Design
- Relational Normalization
- Modeling a Blog in Documents
- Living without Constraints
- Living without Transactions
- One to One Relations
- One to Many Relations
- Many to Many Relations
- Multikeys
- Benefits of Embedding
- Trees
- When to Denormalize

 
Node.js Fundamentals
--------------------

- Section Intro 
- Using Require 
- Requiring Your Own Files        
- Using 3rd Party Modules        
- Introduction to npm
- Hello World using koa
- Koa: Handling GET Requests
- Koa: Handling POST Requests 

The Mongoose ORM
----------------

* Setting Up Mongoose
* Validators, Types, and Defaults
* Installing Postman
* Resource Creation Endpoint - POST /todos
* Testing POST /todos
* List Resources - GET /todos
* Testing GET /todos
* Mongoose Queries and ID Validation
* Getting an Individual Resource - GET /todos/:id
* Testing GET /todos/:id
* Deploy API to Heroku
* Postman Environments
* Delete a Resource - DELETE /todos/:id
* Testing DELETE /todos/:id
* Updating a Resource - PATCH /todos/:id
* Testing PATCH /todos/:id

Indexes and Performance
-----------------------

- Storage Engines: Introduction
- Storage Engines: MMAPv1
- Storage Engines: WiredTiger
- Indexes
- Creating Indexes
- Discovering (and Deleting) Indexes
- Multikey Indexes
- Dot Notation and Multikey
- Index Creation Option, Unique
- Index Creation, Sparse
- Index Creation, Background
- Using Explain
- Explain: Verbosity
- Covered Queries
- When is an Index Used?
- How large is Your Index?
- Number of Index Entries
- Geospatial Indexes
- Geospatial Spherical
- Text Indexes
- Efficiency of Index Use
- Efficiency of Index Use Example
- Logging Slow Queries
- Profiling
- Mongotop
- Mongostat
- Sharding Overview

# Medium-level


The Aggregation Framework
-------------------------

- Introduction to the Aggregation Framework
- Familiar Aggregation Operations
- Expressions Overview
- Reshaping Documents in $project Stages
- $unwind
- Array Expressions
- Accumulators
- Using Accumulators in $project Stages
- Introduction to $group
- _id in $group Stages
- $group vs. $project


Mongoose
---------

- Save/delete triggers (ref:mongoose)
- Debugging



# Advance-level

Application Engineering
-----------------------

- Write Concern
- Network Errors
- Introduction to Replication
- Replica Set Elections
- Write Consistency
- Creating a Replica Set
- Replica Set Internals
- Failover and Rollback
- Connecting to a Replica Set from the Node.js Driver
- Failover in the Node.js Driver
- Write Concern Revisited
- Read Preferences
- Review of Implications of Replication
- Introduction to Sharding
- Building a Sharded Environment
- Implications of Sharding
- Sharding + Replication
- Choosing a Shard Key

Security and Authentication
---------------------------

- capped collection
- Security: user authentication
- CAP (Consistency Availability Partitioning) theorem
- Asynchronous development using callback/Promise mechanism
 
