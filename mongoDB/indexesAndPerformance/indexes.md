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
