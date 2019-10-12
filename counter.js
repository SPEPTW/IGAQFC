// Name of project "I got a question for Christophe"
// count number of clicks
// count 1 when key of keyboard used
// save count in array
// add users in dom
// remove users
// show content in a schema

if (confirm('Veux-tu vraiment aider Christophe à avoir son bureau ?')) {
    alert('Merci pour ton aide');

    var button = document.getElementById("collegue");
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

var padawan = document.querySelector('addPadawan');
addPadawan.addEventListener('click',function() {
    var namePadawan = prompt('Comment se nomme le padawan ?');
    var newPadawan = document.createElement('collegue');
    document.getElementsByClassName("padawan").appendChild(newPadawan);

    alert('Le padawan '+ namePadawan + ' a été ajouté');
});
var padawan = document.querySelector('removePadawan');
removePadawan.addEventListener('click', function(){
    var remove = document.querySelector('padawan');
    alert("Un padawan a été retiré de la liste");
});
}

else {
    alert("Christophe va être terriblement déçu :(");
    window.location.replace("https://www.unedic.org/indemnisation/vos-questions-sur-indemnisation-assurance-chomage")
}


