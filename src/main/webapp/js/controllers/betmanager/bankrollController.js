(function() {
	'use strict';

	app.controller('BankrollController', BankrollController);

	BankrollController.$inject = [ '$timeout', '$location', 'CompetitionService' ];

	function BankrollController($timeout, $location, CompetitionService) {

		var vm = this;
		vm.pageTitle = 'Bankroll';
		vm.tableTitle = 'Bankrolls';
		vm.bankrolls;

		// createbet.html
		vm.betPageTitle = 'Criar Aposta';
		vm.panelCreateBetTitle = 'Criando...';
		vm.competitionList = [];
		vm.competitionSelected = null;
		
		
		vm.insertNavigation = function (){
			CompetitionService.listar().then(function(responseData) {
				vm.competitionList = responseData;
				alert(vm.competitionList);
			}).finally(function() {
				$timeout(function(){
					$location.path( '/betmanaget/bankroll/createbet' );
				});
			});

		}
		
	}
	
})();