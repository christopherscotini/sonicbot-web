(function() {
	'use strict';

	app.controller('CreateBetController', CreateBetController);

	CreateBetController.$inject = [ '$timeout', '$location', '$routeParams', 'CompetitionSeasonService', 'BankrollService', 'TeamService', 'MarketService', 'BetBankrollService' ];

	function CreateBetController($timeout, $location, $routeParams, CompetitionSeasonService, BankrollService, TeamService, MarketService, BetBankrollService) {

		var vm = this;
		vm.pageTitle = 'Adicionar Aposta';
		vm.panel1Title = 'Aposta';
		
		vm.bankrollSelected = null;

		vm.competitionList = [];
		vm.competitionSelected = null;
		
		vm.teamsList = [];
		vm.homeTeamSelected = null;
		vm.awayTeamSelected = null;
		
		vm.betStatusList = ['IN_PLAY', 'WON', 'LOST'];
		vm.betStatusSelected = null;
		
		vm.marketList = [];
		vm.marketSelected = null;

		vm.betDate = {startDate: moment()};
		vm.betAmount = null;
		vm.profitValue = null;
		vm.betPercentualBankroll = 0;
		vm.percentROI = 0;
		
		
		BankrollService.buscar($routeParams.bankrollId).then(function(responseData) {
			vm.bankrollSelected = responseData;
		}, function ( responseError ) {
			  console.error('Error while fetching bankroll: '+responseError);
		  }).finally(function() {
			  vm.listCopetitions();
		  });
		
		MarketService.listar().then(function(responseData) {
			vm.loading = true;
			vm.marketList = responseData;
		}).finally(function() {
			$timeout(function(){
				vm.loading = false;
			},1);
		});
		
		vm.listCopetitions = function(){
			vm.loading = true;
			CompetitionSeasonService.listar().then(function(responseData) {
				vm.competitionList = responseData;
			}).finally(function() {
				$timeout(function(){
					vm.loading = false;
				},1);
			});
		}

		vm.listTeams = function(){
			vm.loading = true;
			TeamService.listar(vm.competitionSelected.competition.id).then(function(responseData) {
				vm.teamsList = responseData;
			}).finally(function() {
				$timeout(function(){
					vm.loading = false;
				},1);
			});
		}

		vm.calculateROI = function(){
			var total = vm.betAmount || 1;
			vm.percentROI = (isNaN(vm.profitValue) || isNaN(total)) ? '' : vm.profitValue/total*100;
		}		

		vm.calculateProfitability = function(){
			var total = vm.bankrollSelected.actualBankrollValue || 1;
			vm.betPercentualBankroll = (isNaN(vm.betAmount) || isNaN(total)) ? '' : vm.betAmount/total*100;
		}		
		
		vm.sendBet = function(){
			var objSend = {
		    		bankroll: vm.bankrollSelected,
					competition: vm.competitionSelected,
					homeTeam: vm.homeTeamSelected,
					awayTeam: vm.awayTeamSelected,
					betStatus: vm.betStatusSelected,
					marketBet: vm.marketSelected,
					betDate: vm.betDate,
					betAmount: vm.betAmount,
					betPercentualBankroll: vm.betPercentualBankroll,
					profit: vm.profitValue,
					roi: vm.percentROI,
					status: vm.betStatusSelected
	    	    };
			console.log(objSend);
			
			BetBankrollService.insert(objSend).then(function(responseData) {
				vm.loading = true;
			}).finally(function() {
				$timeout(function(){
					vm.loading = false;
					$location.path( '/betmanaget/bankroll' );
				},1);
			});
			
		}
	}
	
})();