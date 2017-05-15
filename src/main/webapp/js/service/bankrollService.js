(function() {
	'use strict';

	app.service('BankrollService', BankrollService);
	
	BankrollService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var listCompetitionURL = 'bankrolls/';

	function BankrollService($http, $q, appInfoConstant) {

		var vm = this;
		
		vm.buscar = function(bankrollId) {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/bankrolls.json';
			}else{
				urlConn = appInfoConstant.urlBase + listCompetitionURL + bankrollId ;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);
			
			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[BankrollService] Error while list bankroll');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
		vm.listar = function() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/bankrolls.json';
			}else{
				urlConn = appInfoConstant.urlBase + listCompetitionURL;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[BankrollService] Error while list bankrolls');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();