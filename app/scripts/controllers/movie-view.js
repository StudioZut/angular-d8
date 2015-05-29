'use strict';

/**
 * @ngdoc function
 * @name angularD8App.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the angularD8App
 */
angular.module('angularD8App')
  .controller('MovieViewCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
angular.module('AngularD8App')
  .controller('MovieViewCtrl', function ($scope, $rootScope, $routeParams, $http) {
    $scope.movie = {};
    $http.get($rootScope.baseUrl + '/movie/' + $routeParams.id).success(function(result) {
      $scope.movie = result[0];
    });
  });
