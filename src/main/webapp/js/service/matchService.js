(function() {
	'use strict';

	app.service('MatchService', MatchService); // Define o nome a função do seu
											// .service

	MatchService.$inject = [ '$http' ]; // Lista de dependências
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var REST_SERVICE_URI = 'http://localhost:8082/sbcollector/matches/list?date=2017-04-18';

	function MatchService($http) {

		var vm = this;
		vm.listarJogos = listarJogos;

		// Implementação das funções
		
		function listarJogos() {
			$http({
				method : 'GET',
				url : REST_SERVICE_URI
			}).then(function(response) {
				return response.data;
			});
		}
	}
})();