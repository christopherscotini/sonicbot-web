(function() {
    'use strict';
 
    app.controller('MatchListController', MatchListController);
 
    matchListController.$inject = [ 'MatchService' ]; // Injetamos o service
 
    /* @ngInject */
    //Injetamos o service
    function MatchListController(MatchService) {
    
    	
    	var vm = this;
    	vm.title = 'Jogos do Dia';
    	
    	MatchService.listarJogos().then(function(responseData) {
    		vm.matches = responseData;
		}, function(errResponse) {
			console.error('Error while fetching Matches');
		});
    	
    	
    }
})();