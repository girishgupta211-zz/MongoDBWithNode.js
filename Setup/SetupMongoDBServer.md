## Rules for Setup/storage MongoDB Server ##
1. Do not set up MongoDB on Default port ie. 27017 or 28017
2. Enable Access Control and Enforce Authentication and Role Based Permission i.e Do Not Keep MongoDB without any User. Always put credentials to access MongoDB. For more detail on setup Auth Please refer to this [link](https://github.com/girishgupta211/MongoDBWithNode.js/blob/master/Setup/EnableAuthAndRoles.md) 
3. MongoDB Server will only accessible from application server if both are hosted on same server then MongoDB will only access through internal IP.
4. Encrypt and protect data where it is financial/crucial.
5. Ensure that MongoDB runs in a trusted network environment and limit the interfaces on which MongoDB instances listen for incoming connections. Allow only trusted clients to access the network interfaces and ports on which MongoDB instances are available.



#### For Complete Info on Mongo dB Security checklist ####
https://docs.mongodb.com/manual/administration/security-checklist/

If users have a concern about their MongoDB deployment please contact support@mongodb.com.
