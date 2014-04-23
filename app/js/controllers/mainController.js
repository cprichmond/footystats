'use strict';

var mainCtrl = function(statsDataService){
	
	this.remove = function(){
		statsDataService.remove();
	}

};

mainCtrl.$inject = ['statsDataService'];
angular.module('footyStats.controllers').controller('MainCtrl', mainCtrl);

