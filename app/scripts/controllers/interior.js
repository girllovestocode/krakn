'use strict';

/**
 * @ngdoc function
 * @name painterApp.controller:InteriorCtrl
 * @description
 * # InteriorCtrl
 * Controller of the painterApp
 */
angular.module('painterApp')
  .controller('InteriorCtrl', function ($scope) {
    var areaPerGallon = 350;
    $scope.room = {       
        'widthFeet': 0,
        'heightFeet': 0,
        'area': 0,
        'paint': 0
    };
    $scope.calculateArea = function(){
        $scope.room.area = $scope.room.widthFeet * $scope.room.heightFeet;
        return $scope.room.area;
    };

    $scope.calculatePaint = function(){
        $scope.room.paint = (($scope.room.widthFeet * $scope.room.heightFeet)/areaPerGallon).toFixed(2);
        return $scope.room.paint;
    };

  });
