'use strict';

angular.module('myAppSonicBot').controller('GameController',
		[ '$scope', 'GameService', function($scope, GameService) {

			$scope.orderByField = 'probability';
			$scope.reverseSort = false;
			
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