'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  //'ngRoute',
  //'phonecatAnimations',

  'phonecatControllers2',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list2.html',
        controller: 'PhoneListCtrl2'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail2.html',
        controller: 'PhoneDetailCtrl2'
      }).
      otherwise({

        redirectTo: '/phones'
      });
  }]);
