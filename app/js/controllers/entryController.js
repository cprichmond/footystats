'use strict';

var entryCtrl = function(statsDataService){
	
	this.model = statsDataService.getAll();

	this.modifyStat = function(statName, isHomeTeam, quarter, amount){
		var arrayIndex = quarter-1;

		angular.forEach(this.model.stats, function(value, key){
			if(value.name && value.name === statName){
				if(isHomeTeam && (value.homeTeam[arrayIndex] + amount) >= 0) {
					value.homeTeam[arrayIndex] = value.homeTeam[arrayIndex] + amount;
				}
				if(!isHomeTeam && (value.awayTeam[arrayIndex] + amount) >= 0) {
					value.awayTeam[arrayIndex] = value.awayTeam[arrayIndex] + amount;
				}
			}
		});

		statsDataService.saveModel(this.model);
	}

};

entryCtrl.$inject = ['statsDataService'];
angular.module('footyStats.controllers').controller('EntryCtrl', entryCtrl);

