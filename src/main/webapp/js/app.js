
var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);

//app.constant('appInfoConstant', {urlBase: "https://sbcollector.herokuapp.com/sbcollector/"} );
app.constant('appInfoConstant', {urlBase: "http://localhost:8082/sbcollector/"} );

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
	.otherwise({
		redirectTo: '/'
	});
});