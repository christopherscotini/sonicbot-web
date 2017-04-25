(function() {
	'use strict';

	app.controller('TeamCompetitionSeasonController',
			TeamCompetitionSeasonController);

	TeamCompetitionSeasonController.$inject = [ 'TeamCompetitionSeasonService' ];

	// Injetamos o service
	function TeamCompetitionSeasonController(TeamCompetitionSeasonService) {

		var vm = this;
		vm.pageTitle = 'Times por Competição/Sessão';
		vm.loading = true;

		TeamCompetitionSeasonService.listar().then(function(responseData) {
			vm.tcsList = responseData;
			setTimeout(function() {
				$('#tcsTable').DataTable({
					"order" : [ [ 1, "asc" ] ]
				})
			}, 10)
		}, function ( response ) {
		    // TODO: handle the error somehow
			  console.error('Error while fetching tcs');
		  }).finally(function() {
		    // called no matter success or failure
			  vm.loading = false;
		  });

	}
})();