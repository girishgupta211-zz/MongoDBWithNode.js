db.books.find( { } ).forEach( function( doc ) { db.books.update( doc , {   $set    : { authors :  [   Math.ceil( Math.random()*82) , Math.ceil( Math.random()*82)  ]   }  } )  } )
