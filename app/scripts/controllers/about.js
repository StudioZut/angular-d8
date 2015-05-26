'use strict';

/**
 * @ngdoc function
 * @name angularD8App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularD8App
 */
angular.module('angularD8App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
