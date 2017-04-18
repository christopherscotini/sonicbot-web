'use strict';

app.controller('MatchController', [ '$scope', 'MatchService',
		function($rootScope, $location, MatchService) {

			$rootScope.matches = [];
			fetchAllGames();

			function fetchAllGames() {
				MatchService.fetchAllGames().then(function(d) {
					$rootScope.matches = d;
				}, function(errResponse) {
					console.error('Error while fetching Matches');
				});
			}

		} ]);