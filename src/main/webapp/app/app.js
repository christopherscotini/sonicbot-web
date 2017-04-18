'use strict';

var app = angular.module('myAppSonicBot', [ 'ngRoute' ]);

app.config(function($routeProvider) {
	
	 // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
	$routeProvider
	.when('/home', {
		templateUrl : 'app/components/home/home.html',
		controller : 'HomeController'
	})
	.when('/matches', {
		templateUrl : 'app/components/matches/matchList.html',
		controller : 'MatchController'
	})
	 // caso não seja nenhum desses, redirecione para a rota '/'
	.otherwise({
		redirectTo : '/home'
	});
	
});

