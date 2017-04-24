(function() {
	'use strict';

	app.service('CouponService', CouponService);
	
	CouponService.$inject = [ '$http', '$q' ]; // Lista de dependências
	
//	var REST_SERVICE_URI = 'https://sbcollector.herokuapp.com/sbcollector/matches/list?date=2017-04-18';
	var REST_SERVICE_URI = 'http://localhost:8082/sbcollector/coupons/';

	function CouponService($http, $q) {

		var vm = this;
		vm.listar = listar;

		function listar() {
			var deferred = $q.defer();
				 $http.get(REST_SERVICE_URI).then(function(response) {
				deferred.resolve(response.data);
			}, function(errResponse) {
				console.error('[CouponService] Error while list coupons');
				deferred.reject(errResponse);
			});
			return deferred.promise;
		}
		
	}
	
})();