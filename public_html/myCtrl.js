var db = new PouchDB('participants');
var remoteCouch = false;
var products=["Abdulmumin Eneye Abdulkarim"];
db.changes({
    since: 'now',
    live: true
}).on('change', showPersons);


function addPerson(text) {
    var todo = {
        _id: new Date().toISOString(),
        name: text,
        completed: false
    };
    db.put(todo, function callback(err, result) {
        if (!err) {

            console.log('Successfully posted a todo!');
        }
    });
}
function showPersons() {

    db.allDocs({include_docs: true, descending: true}, function (err, doc) {
        displayData(doc.rows);
        //alert(doc.rows.name);

    });
}
function displayData(persons) {
    persons.forEach(function (person) {
        //alert(person.doc.name);
        //products.push(person.doc.name);
    });
}


app.controller("myCtrl", function ($scope) {
    var a = [];
    //$scope.products = ["Abdulmumin Eneye Abdulkarim"];
    $scope.products = products;
    $scope.addItem = function () {

        $scope.addMe = $scope.first + " " + $scope.middle + " " + $scope.last;
        $scope.errortext = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) === -1) {
            $scope.products.push($scope.addMe);
            addPerson($scope.addMe);
            $scope.first = "";
            $scope.middle = "";
            $scope.last = "";
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    };
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    };
});
