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

  	//	Set current person before switching to details view
  	// $scope.setPerson = function(p) {
  	// 	$rootScope.person = p;
  	// };

  	// $scope.getDetails = function(p) {
  	// 	var index = $rootScope.people
  	// }
  	void($scope, $rootScope);

  });
