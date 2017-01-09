var koa = require('koa'),
     app = koa();


// Here we are adding generator functions to middileware
app.use( function* (next) {
	//do something before yielding/passing to next generator function in line which will be 1st event in downstream
	console.log("A");
	yield next;
        // do something when the execution returns upstream, this will be last event in upstream
	console.log("B");
});

app.use( function* (next) {
	// do something before yielding/passing to the next generator function in line, this shall be 2nd event downstream
	console.log("C");
	yield next;
        // do something when the execution returns upstream and this would be 2nd event upstream
	console.log("D");
});

app.use(function* () { 
	// do something before yielding/passing to next generator function in line. Here it would be last function downstream
	console.log("E")
	this.body = "hey guys";
	//yield next;
	console.log("F"); // First event of upstream (from the last to first)
 
});

console.log('Running from port 3000 http://localhost:3000/ ');
app.listen(3000);

//Tip: The app.use(function) adds the middleware function to the application.


/** How this is happening

The code above is pretty simple. Note that not all console.log statements are required but they will help you to clearly understand the downstream and upstream execution flow of Koa.js .

Understanding the Examples' Execution Flow

When we run this application and open up localhost:3000 in the browser, we can observe that the console.logs in the terminal are not in the order of A-B-C-D-E-F. Nor are they in the order of A-C-E-B-D-F.

The order is actually A-C-E-F-D-B which depicts the downstream of yields and upstream behavior of the execution in a Koa app.

You might notice that it is printed twice. This is due to a double request sent by the browser to fetch the favicon.



*/
