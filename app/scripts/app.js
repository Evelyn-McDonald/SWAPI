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
      .when('/people/:index', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/people'
      });
  })
  .run(function($http, $q, $rootScope) {
    $rootScope.people = [];

    // Disable search while entries are loading
    $rootScope.loadingEntries = true;
    $rootScope.searchPlaceholder= 'Loading...';

    var peopleURL = 'http://swapi.co/api/people/?page=';
    var pages = [];
    var numPages;


    /*  
     *  Get and display first page from the 'people' SWAPI
     *  Use counter value to calculate total # of pages
     *  Retreive and display remaining pages asynchronous
    */

    $http.get(peopleURL + 1)

      // First page
      .then(function(response) {
        Array.prototype.push.apply( $rootScope.people, response.data.results );
        numPages = Math.ceil(response.data.count / 10);
      })

      // Remaining pages
      .then(function() {
        // Build array of promises (starting from second page)
        var i = 2;
        while( i <= numPages ) {
          pages.push( $http({method: 'GET', url: peopleURL + i, cache: 'true'}) );
          ++i;
        }

        // Get pages asynchronous
        $q.all(pages).then(function(data) {
          var i = 0;
          while( i < (numPages - 1) ) {
            Array.prototype.push.apply( $rootScope.people, data[i].data.results );
            ++i;
          }

          //  Enable search
          $rootScope.loadingEntries = false;
          $rootScope.searchPlaceholder= 'Search';

        });
      });
  });

