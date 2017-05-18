(function() {
	'use strict';

	app.service('CompetitionSeasonService', CompetitionSeasonService);
	
	CompetitionSeasonService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var uriBase = 'competition-seasons/';

	function CompetitionSeasonService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/competition-seasons.json';
			}else{
				urlConn = appInfoConstant.urlBase + uriBase;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[CompetitionSeasonService] Error while list competitions');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();