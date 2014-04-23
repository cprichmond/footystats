'use strict';

var mainCtrl = function($route, $rootScope, statsDataService){
	var _this = this;

	this.showClearAllButton = false;

	this.remove = function(){
		statsDataService.remove();
	}

	$rootScope.$on('$routeChangeSuccess', function(ev, current, prev){
		_this.showClearAllButton = false;
		if(current.loadedTemplateUrl === "partials/entry.html"){
			_this.showClearAllButton = true;
		}
	});

};

mainCtrl.$inject = ['$route', '$rootScope', 'statsDataService'];
angular.module('footyStats.controllers').controller('MainCtrl', mainCtrl);

