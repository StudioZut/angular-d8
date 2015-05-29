'use strict';

/**
 * @ngdoc function
 * @name angularD8App.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the angularD8App
 */

/**
  .controller('MoviesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
angular.module('angularD8App')
  .controller('MoviesCtrl', function ($scope, $rootScope, $http) {
    $rootScope.activeNav = 'movies';
    $scope.movies = [];
    $http.get($rootScope.baseUrl + '/movie').success(function(result) {
      console.log(result);
      $scope.movies = result;
    });
  });

