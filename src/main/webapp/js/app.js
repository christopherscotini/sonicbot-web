
var app = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngCurrencyMask', 'daterangepicker']);

//app.constant('appInfoConstant', {urlBase: "https://sbcollector.herokuapp.com/sbcollector/"} );
app.constant('appInfoConstant', {urlBase: "http://localhost:8082/sbcollector/", profile: 'dev1'} );
//app.constant('appInfoConstant', {urlBase: '', profile: 'dev2'} );

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
	.when('/admin/tcs', {
		templateUrl: 'view/admin/teamCompetitionSeason.html',
		controller: 'TeamCompetitionSeasonController',
		controllerAs: 'tcs'
	})
	.when('/admin/schedule', {
		templateUrl: 'view/admin/schedule.html',
		controller: 'ScheduleController',
		controllerAs: 'sched'
	})
	.when('/betmanaget/bankroll', {
		templateUrl: 'view/betmanager/bankroll.html',
		controller: 'BankrollController',
		controllerAs: 'bank'
	})
	.when('/betmanaget/bankroll/:bankrollId/createbet', {
		templateUrl: 'view/betmanager/createbet.html',
		controller: 'CreateBetController',
		controllerAs: 'bet'
	})
	.otherwise({
		redirectTo: '/'
	});
});