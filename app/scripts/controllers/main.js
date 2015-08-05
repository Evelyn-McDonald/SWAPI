'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('MainCtrl', ['$scope', '$http', 'peopleList', function ($scope, $http, peopleList) {

    var personURL = 'http://swapi.co/api/people/?page=';
    var page = 1;
    $scope.people = peopleList.getAll();

    // Load the list of people from API, one page at a time
	$scope.loadPages = function() {
		$http.get(personURL + page).
		  then(function(response) {
		  	var list = response.data.results;
		  	peopleList.addPeople(list);
		  	
		  	if (response.data.next) {
		  		page += 1;
		  		$scope.loadPages();
		  	}

		  });
	};

	$scope.loadPages();

  }]);
