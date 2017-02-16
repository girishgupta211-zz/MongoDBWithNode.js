## Querying by Array Type

The SensorReading collection contains the following documents:

{
   "_id": 1,
   "readings": [
      25,
      23,
      [ "Warn: High Temp!", 55 ],
      [ "ERROR: SYSTEM SHUTDOWN!", 66 ]
   ]
},
{
   "_id": 2,
   "readings": [
      25,
      25,
      24,
      23
   ]
}
The following query returns any document where readings has an element of BSON type array; i.e. the $type does not check if readings itself is an array:

db.SensorReading.find( { "readings" : { $type: "array" } } )
This returns the following doucment:

{
   "_id": 1,
   "readings": [
      25,
      23,
      [ "Warn: High Temp!", 55 ],
      [ "ERROR: SYSTEM SHUTDOWN!", 66 ]
   ]
}
The document with _id : 1 has at least one element in readings that is an array, whereas the document with _id : 2 does not.

