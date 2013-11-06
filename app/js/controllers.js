'use strict';

/* Controllers */

var controllerModule = angular.module('phonecatControllers', []);

controllerModule.controller('PhoneListCtrl', ['$scope', 'PhoneService',
  function($scope, PhoneService) {
    $scope.phones = PhoneService.query();
    $scope.orderProp = 'age';
  }]);

controllerModule.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'PhoneService',
  function($scope, $routeParams, PhoneService) {

    $scope.phone = PhoneService.get(
        {phoneId: $routeParams.phoneId},
        function(phone) {
            $scope.mainImageUrl = phone.images[0];
        }
    );

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
