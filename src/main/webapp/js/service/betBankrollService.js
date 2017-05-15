(function() {
	'use strict';

	app.service('BetBankrollService', BetBankrollService);
	
	BetBankrollService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var uri = 'bankrolls/';

	function BetBankrollService($http, $q, appInfoConstant) {

		var vm = this;
		
		vm.insert = function(betObject) {
			
			var config = {
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/bankrolls.json';
			}else{
				urlConn = appInfoConstant.urlBase + uri + betObject.bankroll.id + '/bets/' ;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);
			
			var deferred = $q.defer();
			$http.post(urlConn, betObject, config).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[BetBankrollService] Error while insert bet');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
		
	}
	
})();