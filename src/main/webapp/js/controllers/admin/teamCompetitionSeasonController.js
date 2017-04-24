(function() {
	'use strict';

	app.controller('TeamCompetitionSeasonController',
			TeamCompetitionSeasonController);

	TeamCompetitionSeasonController.$inject = [ 'TeamCompetitionSeasonService' ];

	// Injetamos o service
	function TeamCompetitionSeasonController(TeamCompetitionSeasonService) {

		var vm = this;
		vm.pageTitle = 'Times por Competição/Sessão';

		TeamCompetitionSeasonService.listar().then(function(responseData) {
			vm.tcsList = responseData;
			setTimeout(function() {
				$('#tcsTable').DataTable({
					"order" : [ [ 1, "asc" ] ]
				})
			}, 10)
		}, function(errResponse) {
			console.error('Error while fetching Matches');
		});

	}
})();