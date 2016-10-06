//Define the places app module
var placesApp = angular.module('placesApp',[]);

placesApp.controller('placesListController', function placesListController($scope){

	$scope.places = [
	{
		name: 'Chicago-IL',
		description: 'Home Town'
	},
		{
		name: 'Boston-MA',
		description: 'Maiden Town'
	},
		{
		name: 'Miami-FL',
		description: 'Sunshine State'
	},
		{
		name: 'New Jersey',
		description: 'Garden City'
	}
	];
});


