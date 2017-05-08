(function() {
	'use strict';

	app.service('ScheduleService', ScheduleService);

	ScheduleService.$inject = [ '$http' ]; // Lista de dependências

	// var REST_SERVICE_URI = 'matches/list?date=2017-04-18';
	var listRestUrl = '/schedules/read';

	function ScheduleService($http) {

		var vm = this;
		vm.read = read;

		function read() {
			alert(app.baseUrl + listRestUrl);
			$http.post(app.baseUrl + listRestUrl).then(function(response) {
				alert('success callback');
			}, function(response) {
				alert('failure callback' + response);
			});
		}

	}

})();