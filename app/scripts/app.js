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
    'ngCookies',
    'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
