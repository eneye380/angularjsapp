
app.controller("myCtrl", function($scope) {
    var a = [];
    $scope.products = ["Yusuf", "Abdul", "Yunusa"];
    $scope.addItem = function () {
        $scope.addMe = $scope.first+" "+$scope.middle+" "+$scope.last;
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) === -1) {
            $scope.products.push($scope.addMe);
            $scope.first = "";
            $scope.middle ="";
            $scope.last = "";
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});
