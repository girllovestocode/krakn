'use strict';

/**
 * @ngdoc overview
 * @name painterApp
 * @description
 * # painterApp
 *
 * Main module of the application.
 */
angular
  .module('painterApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/interior', {
        templateUrl: 'views/interior.html',
        controller: 'InteriorCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
