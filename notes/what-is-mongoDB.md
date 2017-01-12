# Key Points #

1. This is document based database
2. All data is saved as JSON

3. Easy to scale through sharding
4. Sinlge node/ few nodes / multiple nodes
5. Like relational tables, we can easily save data in simple servers rather than multiple servers. Not required expensive servers as schema design supports update in single document.



# Wait!!! What is JSON? #

we can store intergers , Array, booleans, object and nesting of objects


JSON is built on two structures:

A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.

```json
{
  "headline" : "Apple Reported Fourth Quarter Revenue Today",
  "date" : "2015-10-27T22:35:21.908Z",
  "views" : 1132,
  "author" : {
    "name" : "Bob Walker",
    "title" : "Lead Business Editor"
  },
  "published" : true,
  "tags" : [
    "AAPL",
    { "name" : "city", "value" : "Cupertino" },
    [ "Electronics", "Computers" ]
  ]
}

```

# Data types supported by JSON #

```json

object
  {}
  { members }
members
  pair
  pair , members
pair
  string : value
array
  []
  [ elements ]
elements
  value
  value , elements
value
  string
  number
  object
  array
  true
  false
  null
string
  ""
  " chars "
chars
  char
  char chars
char
  any-Unicode-character-
    except-"-or-\-or-
    control-character
  \"
  \\
  \/
  \b
  \f
  \n
  \r
  \t
  \u four-hex-digits
number
  int
  int frac
  int exp
  int frac exp
int
  digit
  digit1-9 digits
  - digit
  - digit1-9 digits
frac
  . digits
exp
  e digits
digits
  digit
  digit digits
e
  e
  e+
  e-
  E
  E+
  E-

```

# JSON Quix #
Which of the following value types are defined by the JSON spec? Check all that apply.

object
array
date
string
integer
number

date and interger is not a valid data type


# Application Overview: #

* In this course we will have a nodejs server.
* Nodejs is built in C++ and Controlled by  v8 JavaScript.
* Many clients can interact with nodejs server and nodejs application will interact with MongoDB
* MongoDB is written in C++ itself.
* There is mongo shell that can also be used as adminstrative shell
* mongo shell is also written in C++ and can be Controller by v8 bindings. This can be used for Debugging, configuration or querying stored data or other admintrative tasks.



# What BSON #

light weight
traverable
efficience for mongo Drivers

MongoDB Driver converts JSON to BSON and stored in MongoDB.

BOSN extends JSON with more data types like date, intergers, images , binary Electronics

eg MongoDB does not support date, byte , double etc.

# Quiz #
True or false? BSON plays the role of a canonical (i.e., "unique") representation of documents shared across all drivers and tools.

```json

// JSON
   { "hello" : "world" }

// BSON
"\x16\x00\x00\x00\x02hello\x00
\x06\x00\x00\x00world\x00\x00"


```
