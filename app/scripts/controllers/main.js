'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('MainCtrl', function ($scope, $rootScope) {

  	void($scope, $rootScope);

  	$scope.orderByInt = function(field) {
  		var i = parseInt(field.replace(/\D/g,''));
  		//var i = parseInt(field);
  		return (i ? i : Number.POSITIVE_INFINITY);
  	};

  	$scope.orderByBirthYear = function(p) {
  		return $scope.orderByInt(p.birth_year);
  	};

  	$scope.orderByMass = function(p) {
  		return $scope.orderByInt(p.mass);
  	};

  });
