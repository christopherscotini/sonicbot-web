(function() {
	'use strict';

	app.service('CouponService', CouponService);
	
	CouponService.$inject = [ '$http', '$q', 'appInfoConstant' ]; // Lista de dependências
	
	var listCouponsURL = 'coupons/';

	function CouponService($http, $q, appInfoConstant) {

		var vm = this;
		vm.listar = listar;
		function listar() {
			var deferred = $q.defer();
				 $http.get(appInfoConstant.urlBase + listCouponsURL).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[CouponService] Error while list coupons');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();