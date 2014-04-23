'use strict';


// Declare app level module which depends on filters, and services
angular.module('footyStats', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.touch',
  'mobile-angular-ui.scrollable',
  'footyStats.controllers',
  'LocalStorageModule'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entry', {templateUrl: 'partials/entry.html', controller: 'EntryCtrl', controllerAs: 'entryCtrl'});
  $routeProvider.when('/viewer', {templateUrl: 'partials/viewer.html', controller: 'ViewerController', controllerAs: 'viewerCtrl'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'SettingsController', controllerAs: 'settingsCtrl'});
  $routeProvider.otherwise({redirectTo: '/entry'});
}]);

/* Controllers, Providers */
angular.module('footyStats.controllers', []);
