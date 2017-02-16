$where
------

Use the $where operator to pass either a string containing a JavaScript expression or a full JavaScript function to the query system.
The $where provides greater flexibility, but requires that the database processes the JavaScript expression or function for each document in the collection.
Reference the document in the JavaScript expression or function using either this or obj .


* "$where" queries should not be used unless strictly necessary.
* they are much slower than regular queries.
* Each document has to be converted from BSON to a JavaScript object and then run through the "$where" expression.
* Indexes cannot be used to satisfy a "$where", either.

Hence, you should use "$where" only when there is no other way of doing the query.
 You can cut down on the penalty by using other query filters in combination with "$where".
 If possible, an index will be used to filter based on the non-$where clauses;
 the "$where" expression will be used only to fine-tune the results.

###### Using normal non-$where query statements provides the following performance advantages:

 * MongoDB will evaluate non-$where components of query before $where statements. If the non-$where statements match no documents, MongoDB will not perform any query evaluation using $where.
 * The non-$where query statements may use an index.

```

db.movieDetails.find( {   $where :  "obj.actors.length == 3 && this.countries.length == 2" } , {title : 1 , actors :1, countries : 1 , _id : 0 } ).sort( { title :1  } )

db.movieDetails.find( {   $where :  "obj.actors.length == 3 && this.countries.length == 2" } , {title : 1 , actors :1, countries : 1 , _id : 0 } ).sort( { title : -1  } )

db.movieDetails.find( {   $where :  "obj.actors.length >  2  && this.countries.length >  2" } , {title : 1 , actors :1, countries : 1 , _id : 0 } ).count() // sort( { title : -1  } ).limit(10)

db.movieDetails.find( {   $where :  "obj.actors.length >  2  && this.countries.length >  2" } , {title : 1 , actors :1, countries : 1 , _id : 0 } ).sort( { title : -1  } ).skip(80).limit(10)

```

Additionally, if the query consists only of the $where operator, you can pass in just the JavaScript expression or JavaScript functions, as in the following examples:

```
db.movieDetails.find(   function() { return   obj.actors.length >  3  && this.countries.length ==  3 ; } ).count()
db.movieDetails.find(  " obj.actors.length >  3  && this.countries.length ==  3 "  ).count()
```

You can include both the standard MongoDB operators and the $where operator in your query, as in the following examples:

```
db.movieDetails.find( { title : /Vampire Film/i ,  $where : function() { return  this.countries.length ==0  ; } } )
db.movieDetails.find( { title : /Vampire Film/i ,    $where : " this.countries.length ==0 " } )
```


## Limitations where we need $where
There are some restrictions on queries. The value of a query document must be a constant as far as the database is concerned. (It can be a normal variable in your own code.) That is, it cannot refer to the value of another key in the document. For example, if we were keeping inventory and we had both "in_stock" and "num_sold" keys, we couldn’t compare their values by querying the following:

db.stock.find({"in_stock" : "this.num_sold"}) // doesn't work
There are ways to do this (see $where Queries), but you will usually get better performance by restructuring your document slightly, such that a “normal” query will suffice. In this example, we could instead use the keys "initial_stock" and "in_stock". Then, every time someone buys an item, we decrement the value of the "in_stock" key by one. Finally, we can do a simple query to check which items are out of stock:

> db.stock.find({"in_stock" : 0})


References:

https://www.safaribooksonline.com/library/view/mongodb-the-definitive/9781449344795/ch04.html
