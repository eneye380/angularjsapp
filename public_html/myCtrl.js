/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*app.controller('myCtrl', function($scope) {
    $scope.firstname = "eneye";
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }
});*/
app.run(function($rootScope) {
    $rootScope.color = 'blue';
});
app.controller('myCtrl', function($scope) {
    $scope.data = ["apple","yusuf"];
});
//var app = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});


