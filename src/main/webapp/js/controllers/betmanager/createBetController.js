(function() {
	'use strict';

	app.controller('CreateBetController', CreateBetController);

	CreateBetController.$inject = [ '$timeout', '$location', '$routeParams', 'CompetitionService', 'BankrollService', 'TeamService' ];

	function CreateBetController($timeout, $location, $routeParams, CompetitionService, BankrollService, TeamService) {

		var vm = this;
		vm.pageTitle = 'Adicionar Aposta';
		vm.panel1Title = 'Aposta';
		
		vm.bankrollSelected = null;

		vm.competitionList = [];
		vm.competitionSelected = null;
		
		vm.teamsList = [];
		vm.homeTeamSelected = null;
		vm.awayTeamSelected = null;
		
		vm.betDate = {startDate: moment()};
		vm.marketSelected = null;
		vm.betAmount = null;
		vm.profitValue = null;
		
		console.log('bankrollId: '+$routeParams.bankrollId);
		
		BankrollService.buscar($routeParams.bankrollId).then(function(responseData) {
			console.log('lendo o bankroll..');
			vm.bankrollSelected = responseData;
		}, function ( responseError ) {
			  console.error('Error while fetching bankroll: '+responseError);
		  }).finally(function() {
			  vm.listCopetitions();
		  });
		
		
		vm.listCopetitions = function(){
			console.log('lendo competicoes...');
			vm.loading = true;
			CompetitionService.listar().then(function(responseData) {
				vm.competitionList = responseData;
			}).finally(function() {
				$timeout(function(){
					vm.loading = false;
				},1);
			});
		}

		vm.listTeams = function(){
			console.log('lendo times [competitionSelected:'+vm.competitionSelected.id+']');
			vm.loading = true;
			TeamService.listar(vm.competitionSelected.id).then(function(responseData) {
				vm.teamsList = responseData;
			}).finally(function() {
				$timeout(function(){
					vm.loading = false;
				},1);
			});
		}
		
		vm.test = function(){
			console.log('time mandante selecionado: ' + vm.homeTeamSelected.id + vm.homeTeamSelected.team.name); 
		}		
	}
	
})();