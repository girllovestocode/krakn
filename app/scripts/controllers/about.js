'use strict';

/**
 * @ngdoc function
 * @name painterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the painterApp
 */
angular.module('painterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
