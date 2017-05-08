(function() {
	'use strict';

	app.factory('DataService', DataService);

	// DI for Service
	DataService.$inject = [ '$http', '$q'];

	function DataService($http, $q) {
    	
        var service = {
            get: get,
            post: post
        };

        function get(url, config, success, failure) {
			$http.get(url, config).then(function(result) {
				success(result);
			}, function(error) {
				if (failure != null) {
                    failure(error);
                }
			});
        }

        function post(url, data, success, failure) {
        	var deferred = $q.defer();
        	$http.get(url, data).then(function(result) {
        		success(result);
        	}, function(error) {
        		if (failure != null) {
        			failure(error);
        		}
        	});
        }

        return service;
    }

})();