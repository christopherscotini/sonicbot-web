
app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'angular/components/home/home.html',
			controller: 'HomeController'
		})
		.when('/matches', {
			templateUrl: 'angular/components/matches/matchList.html',
			controller: 'MatchController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});