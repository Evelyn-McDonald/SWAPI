'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('MainCtrl', function ($scope) {

  	// Parse ints from fields to use them to orderBy
  	$scope.orderByInt = function(field) {
  		var i = parseInt(field.replace(/\D/g,''));
  		return (i ? i : Number.POSITIVE_INFINITY);
  	};


  	// Functions used to sort character cards
  	$scope.orderByBirthYear = function(p) {
  		return $scope.orderByInt(p.birth_year);
  	};
  	$scope.orderByMass = function(p) {
  		return $scope.orderByInt(p.mass);
  	};

  });
