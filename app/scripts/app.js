'use strict';

/**
 * @ngdoc overview
 * @name angularD8App
 * @description
 * # angularD8App
 *
 * Main module of the application.
 */
angular
  .module('angularD8App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  .run(function($rootScope) {
    $rootScope.baseUrl = 'http://gwdev-zut.wrlc.org/drupal8/';
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('safe', function($sce) {
    return function(html) {
      return $sce.trustAsHtml(html);
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
