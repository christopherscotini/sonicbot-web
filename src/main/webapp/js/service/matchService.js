(function() {
	'use strict';

	app.service('MatchService', MatchService);
	
	MatchService.$inject = [ '$http', '$q' ]; // Lista de dependências
	
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var REST_SERVICE_URI = 'http://localhost:8082/sbcollector/matches/list';

	function MatchService($http, $q) {

		var vm = this;
		vm.listarJogos = listarJogos;

		function listarJogos(date) {
			if (date == null) {
				vm.url = REST_SERVICE_URI;
			} else {
				vm.url = REST_SERVICE_URI + '?date=' + date;
			}

			var deferred = $q.defer();
				 $http.get(vm.url).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('Error while list games');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();