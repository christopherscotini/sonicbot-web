(function() {
	'use strict';

	app.service('TeamCompetitionSeasonService', TeamCompetitionSeasonService);
	
	TeamCompetitionSeasonService.$inject = [ '$http', '$q' ]; // Lista de dependências
	
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var REST_SERVICE_URI = 'http://localhost:8082/sbcollector/tcs/';

	function TeamCompetitionSeasonService($http, $q) {

		var vm = this;
		vm.listar = listar;

		function listar() {
			var deferred = $q.defer();
				 $http.get(REST_SERVICE_URI).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('Error while list tcs');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();