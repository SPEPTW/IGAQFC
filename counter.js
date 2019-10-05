// Name of project "I got a question for Christophe"
// count number of clicks
// count 1 when key of keyboard used
// save count in array
// show content in a schema


var button = document.getElementById("seb");
var counter = document.getElementById("counter");
count = 0;
button.onclick = function() {
    count += 1;
    counter.innerHTML = "Total des \"Hey Christophe\" : "+count;
};
button.onkeypress = function () {
    count += 1;
    counter.innerHTML = "Total des \"Hey Christophe\" : "+count;
};
