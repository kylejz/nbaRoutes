var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, allData){
	// $scope.jazzData = jazzData;
	// console.log(jazzData);
	// $scope.lakersData = lakersData;
	// console.log(lakersData);
	// $scope.heatData = heatData;
	// console.log(heatData);
	$scope.allData = allData;
	console.log($scope.allData)

	for (var key in $scope.allData) {
		if ($scope.allData[key][0].homeTeam === 'utahjazz') {
			$scope.allData[key].teamName = 'Utah Jazz';
			$scope.allData[key].logoPath = '../images/jazz-logo.png';
		} else if ($scope.allData[key][0].homeTeam === 'losangeleslakers') {
			$scope.allData[key].teamName = 'Los Angeles Lakers';
			$scope.allData[key].logoPath = '../images/lakers-logo.png';
		} if ($scope.allData[key][0].homeTeam === 'miamiheat') {
			$scope.allData[key].teamName = 'Miami Heat';
			$scope.allData[key].logoPath = '../images/heat-logo.png';
		} 
	}

});
