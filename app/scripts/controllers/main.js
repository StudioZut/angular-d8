'use strict';

/**
 * @ngdoc function
 * @name angularD8App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularD8App
 */
angular.module('angularD8App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
