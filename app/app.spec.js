describe('placesListController', function(){

	beforeEach(module('placesApp'));
	it('should create a places model with 4 cities', inject(function($controller){
		var scope = {};
		va ctrl = $controller('placesListController', {$scope:scope});
		expect(scope.places.length).toBe(4);
	});
});