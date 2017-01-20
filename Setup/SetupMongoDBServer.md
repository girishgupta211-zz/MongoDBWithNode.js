## Rules for Setup/storage MongoDB Server ##
1. Do not set up MongoDB on Default port ie. 27017 or 28017
2. Enable Access Control and Enforce Authentication i.e Do Not Keep MongoDB without any User. Always put credentials to access MongoDB.
3. MongoDB Server will only accessible from application server if both are hosted on same server then MongoDB will only access through internal IP.
4. Configure Role-Based Access Control.
5. Configure MongoDB to use TLS/SSL for all incoming and outgoing connections. Use TLS/SSL to encrypt communication between mongod and mongos components of a MongoDB client as well as between all applications and MongoDB.
Encrypt and protect data where it is financial/crucial.
6. Ensure that MongoDB runs in a trusted network environment and limit the interfaces on which MongoDB instances listen for incoming connections. Allow only trusted clients to access the network interfaces and ports on which MongoDB instances are available.
7. Run MongoDB processes with a dedicated operating system user account. Ensure that the account has permissions to access data but no unnecessary permissions.
9. Use only the MongoDB wire protocol on production deployments. Do not enable the following, all of which enable the web server interface: net.http.enabled, net.http.JSONPEnabled, andnet.http.RESTInterfaceEnabled. Leave these disabled, unless required for backwards compatibility.


#### For Complete Info on Mongo dB Security checklist ####
https://docs.mongodb.com/manual/administration/security-checklist/

If users have a concern about their MongoDB deployment please contact support@mongodb.com.
