Finding the number of fields in an array sub document

db.movieDetails.find( { title : /Vampire Film/i } ).toArray()[0].actors.length
db.movieDetails.findOne( { title : "The Martian" } ).reviews.length
