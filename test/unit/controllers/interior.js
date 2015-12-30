'use strict';

describe('Controller: InteriorCtrl', function () {

  // load the controller's module
  beforeEach(module('painterApp'));

  var InteriorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InteriorCtrl = $controller('InteriorCtrl', {
      $scope: scope
    });
  }));

  it('should calculate an area of a room', function () {
    scope.room.widthFeet = 4;
    scope.room.heightFeet = 8;
    expect(scope.calculateArea()).toBe(32);
  });

  it('should calculate an paint needed of a room', function () {
    scope.room.widthFeet = 5;
    scope.room.heightFeet = 7;
    expect(scope.calculatePaint()).toBe("0.10");
  });
  
  it('should calculate an paint needed of a room', function () {
    scope.room.widthFeet = 5;
    scope.room.heightFeet = 70;
    expect(scope.calculatePaint()).toBe("1.00");
  });
 
});
