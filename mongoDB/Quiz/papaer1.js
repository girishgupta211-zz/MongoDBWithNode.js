1. Which of the choices below is the title of a movie from the year 2013 that is rated PG-13 and won no awards? Please query the video.movieDetails collection to find the answer.

1. Journey to the West
2. A Decade of Decadence,Pt. 2: Legacy of Dreams
3. Escape from planet Earth
4. World War Z
5. Man of Steel
6. Iron Man 3
7. Saving Mr. Banks


2. What is the query used in Q-1

3. Using the video.movieDetails collection, which of the queries below would produce output documents that resemble the following. Check all that apply.

NOTE: We are not asking you to consider specifically which documents would be output from the queries below, but rather what fields the output documents would contain.

{ "title" : "P.S. I Love You" }
{ "title" : "Love Actually" }
{ "title" : "Shakespeare in Love" }

1. db.movieDetails.find({ } , {title: 1, _id: 0} )
2. db.movieDetails.find({ } , {title: 1 } )
3. db.movieDetails.find({ title: "" } , {title: 1 } )
4. db.movieDetails.find({ year: 2000 } , { _id :0 , title: 1  } )
5. db.movieDetails.find({ title: "LAGAAN ONCE UPON A TIME IN INDIA" } , {title: 1 } )


5. Using the video.movieDetails collection, how many movies list "Sweden" second in the the list of countries.

1. 4
2. 5
3. 6
4. 7
5. 8
6. 3
7. 10

6. What is the query used in Q-5

7. How many documents in our video.movieDetails collection list just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.
1. 0
2. 14
3. 8
4. 22
5. 20
6. 56
7. 101
8. 205

8. What is the query used in Q-7

9. As a follow up to the previous question, how many documents in the video.movieDetails collection list both "Comedy" and "Crime" as genres regardless of how many other genres are listed?
1. 0
2. 14
3. 8
4. 22
5. 20
6. 56
7. 101
8. 205

10. What is the query used in Q-9

11. Suppose you wish to update the value of the "plot" field for one document in our "movieDetails" collection to correct a typo. Which of the following update operators and modifiers would you need to use to do this
1. $each
2. #set
3. #rename
4. $sort
5. $slice
6. $position
7. $push
8. $addToSet


12. Suppose our movie details documents are structured so that rather than contain an awards field that looks like this:

"awards" : {
    "wins" : 56,
    "nominations" : 86,
    "text" : "Won 2 Oscars. Another 56 wins and 86 nominations."
}
they are structured with an awards field as follows:

"awards" : {
    "oscars" : [
        {"award": "bestAnimatedFeature", "result": "won"},
        {"award": "bestMusic", "result": "won"},
        {"award": "bestPicture", "result": "nominated"},
        {"award": "bestSoundEditing", "result": "nominated"},
        {"award": "bestScreenplay", "result": "nominated"}
    ],
    "wins" : 56,
    "nominations" : 86,
    "text" : "Won 2 Oscars. Another 56 wins and 86 nominations."
}
What query would we use in the Mongo shell to return all movies in the video.movieDetails collection that either won or were nominated for a best picture Oscar? You may assume that an award will appear in the oscars array only if the movie won or was nominated.




13. MongoDB stores all documents in :
a) tables
b) collections
c) rows
d) All of the mentioned




14. _____ can modify specific fields of an existing document or documents or replace an existing document entirely, depending on the update parameter.
a) modify()
b) update()
c) find()
d) None of the mentioned
e) a and b




15. _id is a ________ bytes hexadecimal number which assures the uniqueness of every document.
a) 13
b) 16
c) 12
d) 10
e) 15



16. __________ is a command-line utility to import content from a JSON, CSV, or TSV.
a) mongorestore
b) mongofiles
c) mongosupport
d) mongoimport
e) mongobroose


17. Which of the followings are valid BSON types
MinKey (internal type)
Null.
Numbers (ints, longs, doubles)
Symbol, String.
Object.
Array.
BinData.
ObjectId.
