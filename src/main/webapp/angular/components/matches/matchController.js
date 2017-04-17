'use strict';

app.controller('MatchController',
		[ '$scope', 'MatchService', function($scope, MatchService) {

			$scope.matches = [];
			fetchAllGames();

			function fetchAllGames() {
				MatchService.fetchAllGames().then(function(d) {
					$scope.matches = d;
				}, function(errResponse) {
					console.error('Error while fetching Matches');
				});
			}

		} ]);