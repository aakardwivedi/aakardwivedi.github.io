var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.friends = ["Apple","Butter","Charlie","Delta","Echo","Freddy","Shawn"];
    $scope.total = function() {
            var count = 0;
            angular.forEach($scope.friends, function(val) {
                count += 1;
            });
            return count;
      };
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.friends.indexOf($scope.addMe) == -1) {
            $scope.friends.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
        $scope.addMe=null;
        $scope.addMe.$setPristine();
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.friends.splice(x, 1);
    }
});