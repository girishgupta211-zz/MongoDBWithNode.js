console.log("ECMA-5 callbacks")
function msgAfterTimeout (msg, who, timeout, onDone) {
    setTimeout(function () {
        onDone(msg + " Hello " + who + "!");
    }, timeout);
}
msgAfterTimeout("", "Foo", 100, function (msg) {
    msgAfterTimeout(msg, "Bar", 200, function (msg) {
        console.log("done after 300ms:" + msg);
    });
});


console.log("ECMA-6 promises")

function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
