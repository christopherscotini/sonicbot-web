(function() {
	'use strict';

	app.service('CouponService', CouponService);
	
	CouponService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var listCouponsURL = 'coupons/';

	function CouponService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		
		function listar() {
			
			var urlConn = '';
			
			if(appInfoConstant.profile === 'dev2'){
				urlConn = 'js/service/mock/coupons.json';
			}else{
				urlConn = appInfoConstant.urlBase + listCouponsURL;
			}
			
			console.log('appInfoConstant.profile: ' + appInfoConstant.profile);
			console.log('urlConn: ' + urlConn);

			var deferred = $q.defer();
			$http.get(urlConn).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[CouponService] Error while list coupons');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();