## MMAPv1

man mmap

collection level locking
each collection is on filmed

multiple reads and mutiple writes. So if there are 2 writes then 1 has to wait.

* 3 - 4
* 7 - 8
* 19 - 32 bytes


Quiz #1:

Which of the following statements about the MMAPv1 storage engine are true? Check all that apply.


* MMAPv1 offers document-level locking
* MMAPv1 automatically allocates power-of-two-sized documents when new documents are inserted
* MMAPv1 is built on top of the mmap system call that maps files into memory
* MongoDB manages the memory used by each mapped file, deciding which parts to swap to disk.



## WiredTiger
Document level concurrency
compression --> data and indexes
No Inplcae Update --> this has to write at diffent location
suports encryption
Defaults in 3.2

mongod -dbpath WT -storageEngine wiredTiger
db.foo.stats


Quiz-2 Which of the following are features of the WiredTiger storage engine?
Check all that apply:

* In-place update of documents.
* Power-of-two document padding.
* Document-level concurrency
* Compression
* Turbocharged
