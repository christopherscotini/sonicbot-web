(function() {
	'use strict';

	app.service('TeamCompetitionSeasonService', TeamCompetitionSeasonService);
	
	TeamCompetitionSeasonService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var listTeamCompSeasURL = 'tcs/';

	function TeamCompetitionSeasonService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/tcs.json';
			}else{
				urlConn = appInfoConstant.urlBase + listTeamCompSeasURL;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[TeamCompetitionSeasonService] Error while list tcs');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();