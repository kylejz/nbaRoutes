var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj) {
		var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (Number(gameObj.homeTeamScore) > Number(gameObj.opponentScore)) {
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}

		return $http({
			method: 'POST',
			url: url,
			data: gameObj
		})
	}



	this.getTeamData = function(team) {
		var dfrd = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		var promise1 = $http({
			method: "GET",
			url: url
		}).then(function(response) {
			var results = response.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (results[i].won === true) {
					wins++;
				} else {
					losses++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			dfrd.resolve(results);
		})
		return dfrd.promise;
	}

	this.getAllData = function() {
		return $q.all({jazzData: this.getTeamData('utahjazz'), lakersData: this.getTeamData('losangeleslakers'), heatData: this.getTeamData('miamiheat')});
	}

});