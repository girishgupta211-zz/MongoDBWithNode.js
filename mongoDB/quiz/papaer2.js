Q-1 Decrease tomato.reviews of all movies by 100 and increase tomato.rating by 0.5 where title contains 'Adventures'.
Write the query with records affeted.



Q-2 Write an update command that will remove the "tomato.consensus" field for all documents matching the following criteria:
The number of imdb votes is less than 10,000
The year for the movie is between 2010 and 2013 inclusive
The tomato.consensus field is null
How many documents required an update to eliminate a "tomato.consensus" field?

Q-3 What will be the equivalent query to this?
db.movieDetails.find({ genres: { $all: ["Comedy", "Crime", "Drama"] } }).pretty()


Q-4 Suppose you have a collection called tweets whose documents contain information about the created_at time of the tweet and the users followers_count at the time they issued the tweet. What can you infer from the following explain output?

> db.tweets.find( { "user.followers_count" : { $gt : 1000 } } ).limit(10).skip(5000).sort( { created_at : 1 } ).explain(true)
{
    "queryPlanner" : {
        "plannerVersion" : 1,
        "namespace" : "twitter.tweets",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "user.followers_count" : {
                "$gt" : 1000
            }
        },
        "winningPlan" : {
            "stage" : "LIMIT",
            "limitAmount" : 0,
            "inputStage" : {
                "stage" : "SKIP",
                "skipAmount" : 0,
                "inputStage" : {
                    "stage" : "FETCH",
                    "filter" : {
                        "user.followers_count" : {
                            "$gt" : 1000
                        }
                    },
                    "inputStage" : {
                        "stage" : "IXSCAN",
                        "keyPattern" : {
                            "created_at" : -1
                        },
                        "indexName" : "created_at_-1",
                        "isMultiKey" : false,
                        "direction" : "backward",
                        "indexBounds" : {
                            "created_at" : [
                                "[MinKey, MaxKey]"
                            ]
                        }
                    }
                }
            }
        },
        "rejectedPlans" : [ ]
    },
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 10,
        "executionTimeMillis" : 563,
        "totalKeysExamined" : 251120,
        "totalDocsExamined" : 251120,
        "executionStages" : {
            "stage" : "LIMIT",
            "nReturned" : 10,
            "executionTimeMillisEstimate" : 500,
            "works" : 251121,
            "advanced" : 10,
            "needTime" : 251110,
            "needFetch" : 0,
            "saveState" : 1961,
            "restoreState" : 1961,
            "isEOF" : 1,
            "invalidates" : 0,
            "limitAmount" : 0,
            "inputStage" : {
                "stage" : "SKIP",
                "nReturned" : 10,
                "executionTimeMillisEstimate" : 500,
                "works" : 251120,
                "advanced" : 10,
                "needTime" : 251110,
                "needFetch" : 0,
                "saveState" : 1961,
                "restoreState" : 1961,
                "isEOF" : 0,
                "invalidates" : 0,
                "skipAmount" : 0,
                "inputStage" : {
                    "stage" : "FETCH",
                    "filter" : {
                        "user.followers_count" : {
                            "$gt" : 1000
                        }
                    },
                    "nReturned" : 5010,
                    "executionTimeMillisEstimate" : 490,
                    "works" : 251120,
                    "advanced" : 5010,
                    "needTime" : 246110,
                    "needFetch" : 0,
                    "saveState" : 1961,
                    "restoreState" : 1961,
                    "isEOF" : 0,
                    "invalidates" : 0,
                    "docsExamined" : 251120,
                    "alreadyHasObj" : 0,
                    "inputStage" : {
                        "stage" : "IXSCAN",
                        "nReturned" : 251120,
                        "executionTimeMillisEstimate" : 100,
                        "works" : 251120,
                        "advanced" : 251120,
                        "needTime" : 0,
                        "needFetch" : 0,
                        "saveState" : 1961,
                        "restoreState" : 1961,
                        "isEOF" : 0,
                        "invalidates" : 0,
                        "keyPattern" : {
                            "created_at" : -1
                        },
                        "indexName" : "created_at_-1",
                        "isMultiKey" : false,
                        "direction" : "backward",
                        "indexBounds" : {
                            "created_at" : [
                                "[MinKey, MaxKey]"
                            ]
                        },
                        "keysExamined" : 251120,
                        "dupsTested" : 0,
                        "dupsDropped" : 0,
                        "seenInvalidated" : 0,
                        "matchTested" : 0
                    }
                }
            }
        }
    },
    "serverInfo" : {
        "host" : "generic-name.local",
        "port" : 27017,
        "version" : "3.0.1",
        "gitVersion" : "534b5a3f9d10f00cd27737fbcd951032248b5952"
    },
    "ok" : 1
}
Check all that apply:

The query uses an index to determine the order in which to return result documents.
The query returns 10 documents.
The query examines 251120 documents.
The query uses COLLSCAN.


Q-5 Suppose your have a collection stuff which has the _id index,

{
  "v" : 1,
  "key" : {
    "_id" : 1
  },
  "ns" : "test.stuff",
  "name" : "_id_"
}
and one or more of the following indexes as well:

{
  "v" : 1,
  "key" : {
    "a" : 1,
    "b" : 1
  },
  "ns" : "test.stuff",
  "name" : "a_1_b_1"
}
{
  "v" : 1,
  "key" : {
    "a" : 1,
    "c" : 1
  },
  "ns" : "test.stuff",
  "name" : "a_1_c_1"
}
{
  "v" : 1,
  "key" : {
    "c" : 1
  },
  "ns" : "test.stuff",
  "name" : "c_1"
}
{
  "v" : 1,
  "key" : {
    "a" : 1,
    "b" : 1,
    "c" : -1
  },
  "ns" : "test.stuff",
  "name" : "a_1_b_1_c_-1"
}

Write MongoDB queries that was used to create the index for all above 4 keys.


Q-6. in continuation with previous question, now suppose you want to run the following query against the collection.

db.stuff.find({'a':{'$lt':10000}, 'b':{'$gt': 5000}}, {'a':1, 'c':1}).sort({'c':-1})
Which of the indexes could be used by MongoDB to assist in answering the query? Check all that apply.

Check all that apply:
_id_
a_1_b_1
a_1_c_1
c_1
a_1_b_1_c_-1


Q-7. Which of the following statements about the MMAPv1 and WiredTiger storage engine are true? Check all that apply.

* MMAPv1 offers document-level locking
* WiredTiger offers document-level locking
* MMAPv1 offers collection-level locking
* WiredTiger offers collection-level locking
* WiredTiger supports Compression and Encryption
* MMAPv1 automatically allocates power-of-two-sized documents when new documents are inserted
* MMAPv1 is built on top of the mmap system call that maps files into memory



Q-8. Which of the following operations operate atomically within a single document? Check all that apply.
update
findOneAndUpdate
$set
$inc
