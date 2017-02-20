# How to enable Auth #

1. Start mongoDB without access control-character

  * > mongod  --port _portNo_ --dbpath /var/lib/mongodb/     

2. Connect to MongoD.
 * > mongo --port _portNo_

3. Create admin user:
 * > use admin
 * > db.createUser({user: _userName_, pwd: _password_, roles: [ {role: "userAdminAnyDatabase", db:"admin" } ] })

 Now disconnect mongo shell

4. Restart mongo shell with _auth_(access control)
 * > mongod  --auth --port _portNo_ --dbpath /var/lib/mongodb/  

5. Connect with admintrative user
 * > mongo --port _portNo_ -u _userName_ -p _password_ --authenticationDatabase "admin"

6. 	Create additional users for development
 * > use _dbName_
 * > db.createUser({user: _userName_, pwd: _password_, roles: [ {role: "readWrite", db:_dbName_ } ] })

7. Connect and authenticate using new created user:
 * > mongo --port _portNo_ -u _userName_ -p _password_ --authenticationDatabase _dbName_

 Note: you can test it by giving only read permission and then insert data in a collection in that db using that user. This will give error.

Reference: [Click Here](https://docs.mongodb.com/manual/tutorial/enable-authentication/)
