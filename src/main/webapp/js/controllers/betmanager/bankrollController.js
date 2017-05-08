(function() {
	'use strict';

	app.controller('BankrollController', BankrollController);

	BankrollController.$inject = [ '$timeout', '$location', 'BankrollService' ];

	function BankrollController($timeout, $location, BankrollService) {

		var vm = this;
		vm.pageTitle = 'Bankroll';
		vm.tableTitle = 'Bankrolls';
		vm.bankrolls = [];
		vm.loading = true;

		BankrollService.listar().then(function(responseData) {
			vm.bankrolls = responseData;
			setTimeout(function() {
				$('#bankrollTable').DataTable();
			}, 1)
		}, function ( responseError ) {
			  console.error('Error while fetching bankrolls: '+responseError);
		  }).finally(function() {
			  vm.loading = false;
		  });
		
		
		vm.insertNavigation = function (bankrollId){
			$location.path( '/betmanaget/bankroll/'+bankrollId+'/createbet' );
		}
		
	}
	
})();