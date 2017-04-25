(function() {
	'use strict';

	app.controller('ScheduleController', ScheduleController);

	ScheduleController.$inject = [ 'CouponService' ];

	function ScheduleController(CouponService) {

		var vm = this;
		vm.update = update;
		vm.pageTitle = 'Execução de Jobs';
		vm.loading = true;
		
		function update(couponId){
			alert(couponId);
		}
		
		CouponService.listar().then( function ( responseData ) {
		    vm.coupons = responseData;
		    setTimeout(function() {
			    $('#couponsTable').DataTable({
			    	"order" : [ [ 0, "desc" ] ]
			    })
		    }, 10);
		  }, function ( response ) {
		    // TODO: handle the error somehow
			  console.error('Error while fetching Matches');
		  }).finally(function() {
		    // called no matter success or failure
		    vm.loading = false;
		  });
		

	}
})();