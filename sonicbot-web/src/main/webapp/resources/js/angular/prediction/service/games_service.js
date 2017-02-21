'use strict';

angular.module('myAppSonicBot').factory('GameService',
		[ '$http', '$q', function($http, $q) {

			var REST_SERVICE_URI = 'http://localhost:8060/predictions/';

			var factory = {
				fetchAllGames : fetchAllGames
			};

			return factory;

			function fetchAllGames() {
				var deferred = $q.defer();
				console.log('testetetet '+$http.get("predictions_mock.json"));
				$http.get("resources/js/angular/prediction/service/mock/predictions_mock.json").then(function(response) {
					// $http.get(REST_SERVICE_URI).then(function(response) {
					deferred.resolve(response.data);
				}, function(errResponse) {
					console.error('Error while fetching games');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
		} ]);