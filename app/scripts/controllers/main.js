'use strict';

/**
 * @ngdoc function
 * @name painterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the painterApp
 */
angular.module('painterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
