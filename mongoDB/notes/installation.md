# How to install:

install mongodb 3.4 using below steps.

[click Here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)


```json

"cmdLine" : {
  "config" : "/etc/mongod.conf",
  "net" : {
    "bindIp" : "127.0.0.1",
    "port" : 27017
  },
  "storage" : {
    "dbPath" : "/var/lib/mongodb",
    "journal" : {
      "enabled" : true
    }
  },
  "systemLog" : {
    "destination" : "file",
    "logAppend" : true,
    "path" : "/var/log/mongodb/mongod.log"
  }
}

```
