'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    var personURL = 'http://swapi.co/api/people/?page=';
    var page = 1;
    $scope.people = [];
    $scope.moduleState = 'list';

	$scope.setPerson = function(p) {
		$scope.person = p;
		$scope.setPlanet(p.homeworld);
		//$location.path( p.name.replace(/\s/g, '') );
	};

	$scope.setPlanet = function(planetURL) {
		$http.get(planetURL).
		  then(function(response) {
		    $scope.planet = response.data;
		  });
	};

	$scope.loadPages = function() {
		$http.get(personURL + page).
		  then(function(response) {
		  	var peopleList = response.data.results;
		  	Array.prototype.push.apply($scope.people, peopleList);
		  	if (page < 9) {
		  		page += 1;
		  		$scope.loadPages();
		  	}
		  });
	};

	$scope.loadPages();

  }]);
