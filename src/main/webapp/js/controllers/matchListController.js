(function() {
    'use strict';
 
    app.controller('MatchListController', MatchListController);
 
    MatchListController.$inject = [ 'MatchService' ]; // Injetamos o service
 
    /* @ngInject */
    //Injetamos o service
    function MatchListController(MatchService) {
    
    	var vm = this;
    	vm.title = 'Jogos do Dia';
    	
    	var date = new Date().toLocaleString({timeZone: 'America/Sao_Paulo'}).slice(0,10);
//    	var date = '2017-04-08';
    	
    	MatchService.listarJogos(date).then(function(responseData) {
    		vm.matches = responseData;
    		setTimeout(function(){
				$('#matchTable').DataTable();
			}, 100)
    	}, function(errResponse) {
			console.error('Error while fetching Matches');
		});
    	
    }
})();