I have following documents in product collection.

db.product.find()
{ "_id" : 1, "results" : [ { "product" : "abc", "score" : 10 }, { "product" : "xyz", "score" : 5 } ] }
{ "_id" : 2, "results" : [ { "product" : "abc", "score" : 8 }, { "product" : "xyz", "score" : 7 } ] }
{ "_id" : 3, "results" : [ { "product" : "abc", "score" : 7 }, { "product" : "xyz", "score" : 8 } ] }


I have run the explain for all 4 commands. Here are the filters that mongoDB is creating internally:


db.product.find({ results : { product : "xyz" , score : 5  }   }).explain()
"filter" : {
				"results" : {
					"$eq" : {
						"product" : "xyz",
						"score" : 5
					}
				}
			}


db.product.find({ "results.product" : "xyz" , "results.score" : 5   }).explain()
      "filter" : {
    				"$and" : [
    					{
    						"results.product" : {
    							"$eq" : "xyz"
    						}
    					},
    					{
    						"results.score" : {
    							"$eq" : 5
    						}
    					}
    				]
    			}

db.product.find(  {  results :  { $elemMatch :   { product : "xyz" , score : { $eq : 5}  }  } }   ).explain()
          "filter" : {
          				"results" : {
          					"$elemMatch" : {
          						"$and" : [
          							{
          								"product" : {
          									"$eq" : "xyz"
          								}
          							},
          							{
          								"score" : {
          									"$eq" : 5
          								}
          							}
          						]
          					}
                  }
                }

db.product.find(  {  results :  {    product : "xyz" , score : { $eq : 5}  }   }   ).explain()

                    "filter" : {
                  				"results" : {
                  					"$eq" : {
                  						"product" : "xyz",
                  						"score" : {
                  							"$eq" : 5
                  						}
                  					}
                  				}
                  			}

// referece : http://stackoverflow.com/questions/42154286/fetch-data-from-array-in-mongodb-with-elemmatch/
