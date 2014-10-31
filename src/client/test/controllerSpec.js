describe('unit test for blog controller', function() {
	beforeEach(module('blogControllers'));

	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope) {
		// Create a new scope that's a child of the root scope
		scope = $rootScope.$new();
		// Create the controller
		ctrl = $controller('TestableCtrl', {
			$scope: scope
		});
	}));

	it('should create greeting with name', function() {
		expect(scope.greeting).toBeUndefined();
		scope.sayHello();
		expect(scope.greeting).toEqual('Hello Sarah');
	});
});
