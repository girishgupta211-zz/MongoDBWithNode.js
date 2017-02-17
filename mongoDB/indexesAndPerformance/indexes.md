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
```

Quiz-2 Which of the following is a valid way to discover indexes for a collection in mongoDB?
Choose the best answer:

* show indexes
* db.collection.getIndexes()
* db.collection.findIndexes()
* db.collection.find("indexes")
* db.getIndexes()
