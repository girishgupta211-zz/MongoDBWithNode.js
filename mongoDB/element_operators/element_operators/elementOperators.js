db.movieDetails.find({ "tomato.meter": { $exists: true } } , { tomato :1 })

db.movieDetails.find({ "tomato.meter": { $exists: false } } , { tomato :1 })

// Value of $type may be either a BSON type number or the string alias
// See https://docs.mongodb.org/manual/reference/operator/query/type
db.moviesScratch.find({ _id: { $type: "string" } })
