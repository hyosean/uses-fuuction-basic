function delay(time, callback) {
    setTimeout(function () {
        callback();
    }, time);
}

console.log("start");

delay(1000, function () {
    console.log("callback1...");
});

delay(1000, function () {
    console.log("callback2...");
});

delay(1000, function () {
    console.log("callback3...");
});

console.log("end");