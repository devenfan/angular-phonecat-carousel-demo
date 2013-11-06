'use strict';

/* Services */

var serviceModule = angular.module('phonecatServices', ['ngResource']);

serviceModule.factory('PhoneService', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
