'use strict';


var statsDataService = function (localStorageService) {
	var _this = this;
	var _storageKey = 'statsDataModel';

	//Public functions
	this.getAll = getAll;
	this.saveModel = saveModel;
	this.remove = remove;

	function populateData(){
		//This is some sample data that will eventually be entered/setup by a user 
		return saveModel(
		{
			homeTeamName: 'Frankston',
			awayTeamName: 'Crib Point',
			venue: 'Baxter Park',
			stats: [
				{
					name: 'clearances',
					displayText: 'Clearances',
					homeTeam: [0,0,0,0],
					awayTeam: [0,0,0,0]
				},
				{
					name: 'centerClearances',
					displayText: 'Center Clearances',
					homeTeam: [0,0,0,0],
					awayTeam: [0,0,0,0]
				},
				{
					name: 'inside50',
					displayText: 'Inside 50s',
					homeTeam: [0,0,0,0],
					awayTeam: [0,0,0,0]
				},
				{
					name: 'tackles',
					displayText: 'Tackles',
					homeTeam: [0,0,0,0],
					awayTeam: [0,0,0,0]
				},

			]
		});
	}

	function getAll(){
		var model = localStorageService.get(_storageKey);

		if(!model){
			model = populateData();
		}

		return model; 
	}
	function saveModel(model){
		localStorageService.add(_storageKey, model);
		return model;
	}
	function remove(){
		localStorageService.remove(_storageKey);
		populateData();
	}

};

statsDataService.$inject = ['localStorageService'];
angular.module('footyStats').service('statsDataService', statsDataService);

