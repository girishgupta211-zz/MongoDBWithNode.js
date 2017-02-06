# Creating and Reading Documents #

use video;
db.movies.insertOne({ "title": "Jaws", "year": 1975, "imdb": "tt0073195" });
db.movies.insertOne({ "title": "Mad Max 2: The Road Warrior", "year": 1981, "imdb": "tt0082694" })
db.movies.insertOne({ "title": "Raiders of the Lost Ark", "year": 1981, "imdb": "tt0082971" })


_id is mandatory field in MongoDB. This is unique key

use will create the database if does not exists anyone.

db.movies.find().pretty() --> this will return all Documents
find by  title/year
c= db.movies.find({"year":1981}).pretty() --> this will return all Documents
find returns curson that can be iterated
c.hasNext()
true
c.next()
c.next()
c.next()
