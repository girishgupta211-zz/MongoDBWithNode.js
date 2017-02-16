db.movieDetails.find({ genres: { $all: ["Comedy", "Crime", "Drama"] } }).pretty()

db.movieDetails.find({ countries: { $size: 1 } }).pretty()

boxOffice: [ { "country": "USA", "revenue": 41.3 },
             { "country": "Australia", "revenue": 2.9 },
             { "country": "UK", "revenue": 10.1 },
             { "country": "Germany", "revenue": 4.3 },
             { "country": "France", "revenue": 3.5 } ]

db.movieDetails.find({ boxOffice: { country: "UK", revenue: { $gt: 15 } } })

db.movieDetails.find({ boxOffice: {$elemMatch: { country: "UK", revenue: { $gt: 15 } } } })

Refer here to understand difference between elemMatch and exact match
http://stackoverflow.com/questions/42154286/fetch-data-from-array-in-mongodb-with-elemmatch/

Refer Here:
https://docs.mongodb.com/manual/tutorial/query-array-of-documents/
