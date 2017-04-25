(function() {
	'use strict';

	app.service('MatchService', MatchService);
	
	MatchService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var listMatchesURL = 'matches/list';

	function MatchService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listarJogos = listarJogos;

		function listarJogos(date) {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/matches.json';
			}else{
				if (date == null) {
					urlConn = appInfoConstant.urlBase + listMatchesURL;
				} else {
					urlConn = listMatchesURL + '?date=' + date;
				}
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
				 $http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[MatchService] Error while list matches');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();