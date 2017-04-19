
var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
 
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/dashboard.html',
		controller: 'dashboardController',
		controllerAs: 'dash'
	})
	.when('/usuarios', {
		templateUrl: 'view/usuarios.html',
		controller: 'usuariosController'
	})
	.when('/relatorios', {
		templateUrl: 'view/relatorios.html',
		controller: 'relatoriosController'
	})
	.when('/matches', {
		templateUrl: 'view/matchList.html',
		controller: 'MatchListController',
		controllerAs: 'match'
	})
	.otherwise({
		redirectTo: '/'
	});
});