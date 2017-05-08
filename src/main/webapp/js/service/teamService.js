(function() {
	'use strict';

	app.service('TeamService', TeamService);
	
	TeamService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	function TeamService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar(competitionId) {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/teams.json';
			}else{
				urlConn = appInfoConstant.urlBase + 'competitions/' + competitionId + '/teams';
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[TeamService] Error while list teams');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();