'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('DetailCtrl', function ($scope, $http, $rootScope, $routeParams) {

  	//	Get person ID from route
  	var index = $routeParams.index;

  	// Wait until the list of all people gets populated in app.js
  	$rootScope.$watch('people', function(people) {
  		
  		// Set the details for the current person
  		if (people.length > index) {
	  		$scope.person = people[index];

	  		//	Get planet info
		  	var planetURL = $scope.person.homeworld;
				$http.get(planetURL)
				  .then(function(response) {
				    $scope.planet = response.data;	
				  });		
			}  		  
 		}, true);  		

  });
