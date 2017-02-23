### Indexes:
* Reads will be faster
* Writes will be slower
* B tree in MMAPv1
* B+ tree in WiredTiger

First write all data completely then create index data

can we can index on every single field ?
No, this takes a lot of memory.



Quiz-1 Which optimization will typically have the greatest impact on the performance of a database?
Choose the best answer:

* Adding more memory so that the working set fits in memory.
* Adding a faster drive so that operations that hit disk will happen more quickly.
* Replacing your CPU with a faster one (say one 2x as fast)
* Adding appropriate indexes on large collections so that only a small percentage of queries need to scan the collection.



Create index takes a lot of time because:
1. It scans all documents
2. It needs to create new data structres
3. Write to disc

```
db.students.getIndexes()
db.students.createIndex({ student : 1 })
db.students.dropIndex( { student_id :1  })
db.students.dropIndex("student_id_1")
```

Quiz-2 Which of the following is a valid way to discover indexes for a collection in mongoDB?
Choose the best answer:

* show indexes
* db.collection.getIndexes()
* db.collection.findIndexes()
* db.collection.find("indexes")
* db.getIndexes()


Quiz-3 Suppose we have a collection foo that has an index created as follows:


>db.foo.createIndex( { a:1, b:1 } )

Which of the following inserts are valid to this collection?

Check all that apply:
>db.foo.insert( { a : [ "apples", "oranges" ], b : "grapes" } )

>db.foo.insert( { a : "grapes", b : "oranges" } )

>db.foo.insert( { a : "grapes", b : [ 8, 9, 10 ] } )

>db.foo.insert( { a : [ 1, 2, 3 ], b : [ 5, 6, 7 ] } )


Quiz-4 Suppose you have a collection called people in the database earth with documents of the following form:

```
{
    "_id" : ObjectId("551458821b87e1799edbebc4"),
    "name" : "Eliot Horowitz",
    "work_history" : [
        {
            "company" : "DoubleClick",
            "position" : "Software Engineer"
        },
        {
            "company" : "ShopWiki",
            "position" : "Founder & CTO"
        },
        {
            "company" : "MongoDB",
            "position" : "Founder & CTO"
        }
    ]
}
```

Write the command that you would issue in the Mongo shell to create an index on company, descending.

> db.people.createIndex({ "work_history.company" : -1 })

> db.stuff.insert({ fruit : "apple" })

> db.stuff.insert({ fruit : "apple" })

> db.stuff.insert({ fruit : "banana" })

> db.stuff.createIndex({ "fruit" : 1 } , { unique : true })
"errmsg" : "E11000 duplicate key error collection: students.stuff index: fruit_1 dup key: { : \"apple\" }",




> db.stuff.remove({ fruit : 'apple' } , {  justOnce : 1 })
WriteResult({ "nRemoved" : 2 })
> db.stuff.createIndex({ "fruit" : 1 } , { unique : true })
{
	"createdCollectionAutomatically" : false,
	"numIndexesBefore" : 1,
	"numIndexesAfter" : 2,
	"ok" : 1
}


}
> db.stuff.getIndexes()
[
	{
		"v" : 2,
		"key" : {
			"_id" : 1
		},
		"name" : "_id_",
		"ns" : "students.stuff"
	},
	{
		"v" : 2,
		"unique" : true,
		"key" : {
			"fruit" : 1
		},
		"name" : "fruit_1",
		"ns" : "students.stuff"
	}
]



Please provide the mongo shell command to create a unique index on student_id, class_id, ascending for the collection students.

> db.stuff.createIndex({ "student_id" : 1 , "class_id" :1  } , { unique : true })



"executionSuccess" : true,
  "nReturned" : 10,
  "executionTimeMillis" : 2455,
  "totalKeysExamined" : 0,
  "totalDocsExamined" : 5859312,
  "executionStages" : {
    "stage" : "COLLSCAN",
    "filter" : {
      "student_id" : {
        "$eq" : 2
      }
    },



## Sparse index

{a:1 , b:2 , c:3}
db.addresses.createIndex( { "c": 1 }, { sparse: true } )
skips the document swhere c is missing


What are the advantages of a sparse index? Check all that apply.
Check all that apply:
The index will be smaller than it would if it were not sparse.
You can gain greater flexibility with creating Unique indexes.
Your indexes can be multikey only if they are sparse.
The index can be used to sort much more quickly in all cases.


foregroud lock is fast but blocks write and reades in the database.
backgroud lock is slow

{backgroud : true}



## TTL - Time To Live (TTL)  indexes:

TTL indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time or at a specific clock time. Data expiration is useful for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.



To create a TTL index, use the db.collection.createIndex() method with the expireAfterSeconds option on a field whose value is either a date or an array that contains date values.

## Example
For example, the following operation creates an index on the log_events collection’s createdAt field and specifies the expireAfterSeconds value of 3600 to set the expiration time to be one hour after the time specified by createdAt.

> db.log_events.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 3600 } )

When adding documents to the log_events collection, set the createdAt field to the current time:

> db.log_events.insert( {
   "createdAt": new Date(),
   "logEvent": 2,
   "logMessage": "Success!"
} )

MongoDB will automatically delete documents from the log_events collection when the document’s createdAt value [1] is older than the number of seconds specified in expireAfterSeconds.



If a document does not contain the indexed field, the document will not expire.



## Timing of the Delete Operation

When you build a TTL index in the background, the TTL thread can begin deleting documents while the index is building. If you build a TTL index in the foreground, MongoDB begins removing expired documents as soon as the index finishes building.

The TTL index does not guarantee that expired data will be deleted immediately upon expiration. There may be a delay between the time a document expires and the time that MongoDB removes the document from the database.

The background task that removes expired documents runs every 60 seconds. As a result, documents may remain in a collection during the period between the expiration of the document and the running of the background task.

Because the duration of the removal operation depends on the workload of your mongod instance, expired data may exist for some time beyond the 60 second period between runs of the background task.


## Replica Sets

On replica set members, the TTL background thread only deletes documents when a member is in state primary. The TTL background thread is idle when a member is in state secondary. Secondary members replicate deletion operations from the primary.


## Restrictions

* TTL indexes are a single-field indexes. Compound indexes do not support TTL and ignores the expireAfterSeconds option.

* The _id field does not support TTL indexes.

* You cannot create a TTL index on a capped collection because MongoDB cannot remove documents from a capped collection.

* You cannot use createIndex() to change the value of expireAfterSeconds of an existing index.

* If a non-TTL single-field index already exists for a field, you cannot create a TTL index on the same field since you cannot create indexes that have the same key specification and differ only by the options. To change a non-TTL single-field index to a TTL index, you must drop the index first and recreate with the expireAfterSeconds option.



## TTLMonitor Sleep Interval

By Default, the TTLMonitor thread runs once in every 60 seconds. You can find out the sleep interval using following admin command.

> db.adminCommand({getParameter:1, ttlMonitorSleepSecs: 1});
{ "ttlMonitorSleepSecs" : 60, "ok" : 1 }


To change this interval, supply another admin command with the desired interval:

> db.adminCommand({setParameter:1, ttlMonitorSleepSecs: 3600}); // 1 minute
{ "was" : 60, "ok" : 1 }



## Unique Indexes

A unique index ensures that the indexed fields do not store duplicate values; i.e. enforces uniqueness for the indexed fields. By default, MongoDB creates a unique index on the _id field during the creation of a collection.


### Unique Index on a Single Field

For example, to create a unique index on the user_id field of the members collection, use the following operation in the mongo shell:

> db.members.createIndex( { "user_id": 1 }, { unique: true } )


### Unique Compound Index

You can also enforce a unique constraint on compound indexes. If you use the unique constraint on a compound index, then MongoDB will enforce uniqueness on the combination of the index key values.

For example, to create a unique index on groupNumber, lastname, and firstname fields of the members collection, use the following operation in the mongo shell:

> db.members.createIndex( { groupNumber: 1, lastname: 1, firstname: 1 }, { unique: true } )

The created index enforces uniqueness for the combination of groupNumber, lastname, and firstname values.


### Restrictions

MongoDB cannot create a unique index on the specified index field(s) if the collection already contains data that would violate the unique constraint for the index.


### Unique Constraint Across Separate Documents

The unique constraint applies to separate documents in the collection. That is, the unique index prevents separate documents from having the same value for the indexed key, but the index does not prevent a document from having multiple elements or embedded documents in an indexed array from having the same value. In the case of a single document with repeating values, the repeated value is inserted into the index only once.

For example, a collection has a unique index on a.b:

> db.collection.createIndex( { "a.b": 1 }, { unique: true } )

The unique index permits the insertion of the following document into the collection if no other document in the collection has the a.b value of 5:

> db.collection.insert( { a: [ { b: 5 }, { b: 5 } ] } )


## Partial Indexes
Partial indexes only index the documents in a collection that meet a specified filter expression. By indexing a subset of the documents in a collection, partial indexes have lower storage requirements and reduced performance costs for index creation and maintenance



### Create a Partial Index

To create a partial index, use the db.collection.createIndex() method with the new partialFilterExpression option. The partialFilterExpression option accepts a document that specifies the filter condition using:

equality expressions (i.e. field: value or using the $eq operator),
$exists: true expression,
$gt, $gte, $lt, $lte expressions,
$type expressions,
$and operator at the top-level only
For example, the following operation creates a compound index that indexes only the documents with a rating field greater than 5.

> db.restaurants.createIndex(
   { cuisine: 1, name: 1 },
   { partialFilterExpression: { rating: { $gt: 5 } } }
)

You can specify a partialFilterExpression option for all MongoDB index types.

### Query Coverage

* MongoDB will not use the partial index for a query or sort operation if using the index results in an incomplete result set.

To use the partial index, a query must contain the filter expression (or a modified filter expression that specifies a subset of the filter expression) as part of its query condition.

Suppose you are having below restaurants data:

```
{
   "_id" : ObjectId("5641f6a7522545bc535b5dc9"),      
   "cuisine" : "Italian",
   "rating" : 6
   "name" : "Morris Park Bake Shop",
   "restaurant_id" : "30075445"
}
```

For example, given the following index:

> db.restaurants.createIndex(
   { cuisine: 1 },
   { partialFilterExpression: { rating: { $gt: 5 } } }
)

The following query can use the index since the query predicate includes the condition rating: { $gte: 8 } that matches a subset of documents matched by the index filter expression ratings: { $gt: 5 }:

> db.restaurants.find( { cuisine: "Italian", rating: { $gte: 8 } } )

However, the following query cannot use the partial index on the cuisine field because using the index results in an incomplete result set. Specifically, the query predicate includes the condition rating: { $lt: 8 } while the index has the filter rating: { $gt: 5 }.
That is, the query { cuisine: "Italian", rating: { $lt: 8 } } matches more documents (e.g. an Italian restaurant with a rating equal to 1) than are indexed.

> db.restaurants.find( { cuisine: "Italian", rating: { $lt: 8 } } )

Similarly, the following query cannot use the partial index because the query predicate does not include the filter expression and using the index would return an incomplete result set.

> db.restaurants.find( { cuisine: "Italian" } )

### Comparison with the sparse Index

Partial indexes represent a superset of the functionality offered by sparse indexes and should be preferred over sparse indexes.
Partial indexes offer a more expressive mechanism than Sparse Indexes indexes to specify which documents are indexed.

Sparse indexes selects documents to index solely based on the existence of the indexed field, or for compound indexes, the existence of the indexed fields.

Partial indexes determine the index entries based on the specified filter. The filter can include fields other than the index keys and can specify conditions other than just an existence check. For example, a partial index can implement the same behavior as a sparse index:

```
db.contacts.createIndex(
   { name: 1 },
   { partialFilterExpression: { name: { $exists: true } } }
)
```

This partial index supports the same queries as a sparse index on the name field.

However, a partial index can also specify filter expressions on fields other than the index key. For example, the following operation creates a partial index, where the index is on the name field but the filter expression is on the email field:

> db.contacts.createIndex(
   { name: 1 },
   { partialFilterExpression: { email: { $exists: true } } }
)

For the query optimizer to choose this partial index, the query predicate must include a non-null match on the email field as well as a condition on the name field.

For example, the following query can use the index:

> db.contacts.find( { name: "xyz", email: { $regex: /\.org$/ } } )
However, the following query cannot use the index:

> db.contacts.find( { name: "xyz", email: { $exists: false } } )
Restrictions

In MongoDB, you cannot create multiple versions of an index that differ only in the options. As such, you cannot create multiple partial indexes that differ only by the filter expression.

You cannot specify both the partialFilterExpression option and the sparse option.

_id indexes cannot be partial indexes.


Examples

Create a Partial Index On A Collection

Consider a collection restaurants containing documents that resemble the following

```
{
   "_id" : ObjectId("5641f6a7522545bc535b5dc9"),
   "address" : {
      "building" : "1007",
      "coord" : [
         -73.856077,
         40.848447
      ],
      "street" : "Morris Park Ave",
      "zipcode" : "10462"
   },
   "borough" : "Bronx",
   "cuisine" : "Bakery",
   "rating" : { "date" : ISODate("2014-03-03T00:00:00Z"),
                "grade" : "A",
                "score" : 2
              },
   "name" : "Morris Park Bake Shop",
   "restaurant_id" : "30075445"
}
```

You could add a partial index on the borough and cuisine fields choosing only to index documents where the rating.grade field is A:

```
db.restaurants.createIndex(
   { borough: 1, cuisine: 1 },
   { partialFilterExpression: { 'rating.grade': { $eq: "A" } } }
)
```

Then, the following query on the restaurants collection uses the partial index to return the restaurants in the Bronx with rating.grade equal to A:

> db.restaurants.find( { borough: "Bronx", 'rating.grade': "A" } )

However, the following query cannot use the partial index because the query expression does not include the rating.grade field:

> db.restaurants.find( { borough: "Bronx", cuisine: "Bakery" } )
Partial Index with Unique Constraint

Partial indexes only index the documents in a collection that meet a specified filter expression. If you specify both the partialFilterExpression and a unique constraint, the unique constraint only applies to the documents that meet the filter expression. A partial index with a unique constraint does not prevent the insertion of documents that do not meet the unique constraint if the documents do not meet the filter criteria.

For example, a collection users contains the following documents:

```
{ "_id" : ObjectId("56424f1efa0358a27fa1f99a"), "username" : "david", "age" : 29 }
{ "_id" : ObjectId("56424f37fa0358a27fa1f99b"), "username" : "amanda", "age" : 35 }
{ "_id" : ObjectId("56424fe2fa0358a27fa1f99c"), "username" : "rajiv", "age" : 57 }
```

The following operation creates an index that specifies a unique constraint on the username field and a partial filter expression age: { $gte: 21 }.

```
db.users.createIndex(
   { username: 1 },
   { unique: true, partialFilterExpression: { age: { $gte: 21 } } }
)
```


The index prevents the insertion of the following documents since documents already exist with the specified usernames and the age fields are greater than 21:

> db.users.insert( { username: "david", age: 27 } )

> db.users.insert( { username: "amanda", age: 25 } )

> db.users.insert( { username: "rajiv", age: 32 } )

However, the following documents with duplicate usernames are allowed since the unique constraint only applies to documents with age greater than or equal to 21.

> db.users.insert( { username: "david", age: 20 } )

> db.users.insert( { username: "amanda" } )

> db.users.insert( { username: "rajiv", age: null } )


Reference:  https://docs.mongodb.com/manual/core/index-partial/
