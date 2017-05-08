(function() {
	'use strict';

	app.service('CompetitionService', CompetitionService);
	
	CompetitionService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var listCompetitionURL = 'competitions/';

	function CompetitionService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/coupons.json';
			}else{
				urlConn = appInfoConstant.urlBase + listCompetitionURL;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[CompetitionService] Error while list coupons');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();