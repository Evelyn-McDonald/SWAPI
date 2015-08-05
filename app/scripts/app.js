'use strict';

/**
 * @ngdoc overview
 * @name starWarsApp
 * @description
 * # starWarsApp
 *
 * Main module of the application.
 */
angular
  .module('starWarsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/people', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/people/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/people'
      });
  })
  .service('peopleList', function() {
    var peopleList = [];
    return {
      getAll: function() {
        return peopleList;
      },
      getPerson: function(i) {
        return peopleList[i];
      },
      addPeople: function(list) {
        Array.prototype.push.apply(peopleList, list);
      }
    };
  });
