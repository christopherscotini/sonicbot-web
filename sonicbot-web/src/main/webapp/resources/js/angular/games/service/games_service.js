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
				$http.get(REST_SERVICE_URI).then(function(response) {
					deferred.resolve(response.data);
				}, function(errResponse) {
					console.error('Error while fetching games');
					deferred.reject(errResponse);
				});
				return deferred.promise;
			}
		} ]);