(function() {
    'use strict';
 
    app.controller('MatchListController', MatchListController);
 
    matchListController.$inject = ['MatchService']; // Injetamos o service
 
    /* @ngInject */
    //Injetamos o service
    function MatchListController(MatchService) {
    	var vm = this;
    	vm.title = 'Jogos do Dia';

    	vm.matches = MatchService.listarJogos(); 
    }
})();