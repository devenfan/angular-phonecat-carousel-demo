'use strict';

/* Controllers */

var controllerModule2 = angular.module('phonecatControllers2', ['angular-carousel']);

controllerModule2.controller('PhoneListCtrl2', ['$scope', 'PhoneService',
    function ($scope, PhoneService) {
        $scope.phones = PhoneService.query();
        $scope.orderProp = 'age';
    }]);

controllerModule2.controller('PhoneDetailCtrl2', ['$scope', '$routeParams', 'PhoneService',
    function ($scope, $routeParams, PhoneService) {

        //alert("$routeParams.phoneId: " + $routeParams.phoneId);

        $scope.phone = PhoneService.get(
            {phoneId: $routeParams.phoneId},
            function (phone) {
                $scope.mainImageUrl = phone.images[0];
            }
        );

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);


