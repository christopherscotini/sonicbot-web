'use strict';

angular.module('myAppSonicBot').controller('GameController',
		[ '$scope', 'GameService', function($scope, GameService) {

			$scope.matches = [];

			fetchAllGames();

			function fetchAllGames() {
				GameService.fetchAllGames().then(function(d) {
					$scope.matches = d;
				}, function(errResponse) {
					console.error('Error while fetching Games');
				});
			}

		} ]);