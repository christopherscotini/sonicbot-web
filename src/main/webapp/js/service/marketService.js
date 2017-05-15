(function() {
	'use strict';

	app.service('MarketService', MarketService);
	
	MarketService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	function MarketService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/markets.json';
			}else{
				urlConn = appInfoConstant.urlBase + 'markets/';
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[MarketService] Error while list markets');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();