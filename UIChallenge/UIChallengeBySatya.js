
	
	var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {
		$scope.getUsersFromLocal = function() {
			$http.get('https://dev-util.edyst.com/challenge/pokemons/random').
			then(function(result) {
			console.log(JSON.stringify(result.data));
            $scope.records = result.data;
        });
    };

    $scope.getUsersFromLocal();
					});
