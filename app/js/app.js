
var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
 
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/usuarios', {
		templateUrl: 'view/usuarios.html',
		controller: 'usuariosController'
	})
	.when('/relatorios', {
		templateUrl: 'view/relatorios.html',
		controller: 'relatoriosController'
	})
	.otherwise({
		redirectTo: '/'
	});
});