var db = new PouchDB('persons');

var remoteCouch = false;
var products = [];
db.changes({
    since: 'now',
    live: true
}).on('change', showPersons);

app.controller("myCtrl", function ($scope) {});

function clearreset() {
    document.getElementById("inputhint").innerText = "";
}

function validateForm(form) {

    var fail = "";
    var len = form.length;
    for (var i = 0; i < len; i++) {
        if (i < len - 1) {
            fail += inputCheck(form[i].value);
        }
    }
    if (fail !== "") {
        document.getElementById("inputhint").setAttribute("style", "color:red");
        document.getElementById("inputhint").innerText = "Please fill in empty fields";

    } else {
        var text = "";
        
        addPerson(form);
        console.log('name sent succesfully');
        document.getElementById("inputhint").setAttribute("style", "color:green;font-size:25px;font-weight:bold");        
        document.getElementById("inputhint").innerText = "Added!!!";
        //alert(text);
        for (var i = 0; i < len; i++) {
            if (i < len - 1) {
                //text +=form[i].value+" ";
                form[i].value = "";
            }
        }
    }
}
function inputCheck(input) {
    if (input === "") {
        return true;
    } else {
        return "";
    }
}

function addPerson(form) {
    /*var todo = {
        _id: new Date().toISOString(),
        name: text,
        completed: false
    };*/
    //alert(form.first.value);
    var todo = {
        _id: new Date().toISOString(),
        first: form.first.value,
        middle: form.middle.value,
        last: form.last.value,
        completed: false
    };
    db.put(todo, function callback(err, result) {
        if (!err) {
            
            console.log('Successfully posted a todo!');
        }
    });
}
function showPersons() {

    db.allDocs({include_docs: true, descending: false}, function (err, doc) {
        displayData(doc.rows);
        //alert(doc.rows.name);

    });
}
function displayData(persons) {
    var index = 0;
    var t = "";
    t+="<table>";
    t+="<tr>";
    t+="<th>S/N</th>";
    //t+="<th>Name</th>";
    t+="<th>First Name</th>";
    t+="<th>Middle Name</th>";
    t+="<th>Last Name</th>";
    t+="<th></th>";
    t+="</tr>";
    persons.forEach(function (person) {
        index++;
        //alert(person.doc.name);
        //products.push(person.doc.name);
        t+="<tr>";
        t+="<td>"+index+"</td>";
        //t+="<td>"+person.doc.name+"</td>";
        t+="<td>"+person.doc.first+"</td>";
        t+="<td>"+person.doc.middle+"</td>";
        t+="<td>"+person.doc.last+"</td>";
        t+="<td></td>";
        t+="</tr>";
        //t+="<td>"+person.doc.name+"</td>";
    });
    t+="</table>";
    document.getElementsByTagName("table")[0].innerHTML = t;
}

/**db.destroy().then(function (response) {
  // success
  alert(response.ok);
}).catch(function (err) {
  console.log(err);
});*/
showPersons();