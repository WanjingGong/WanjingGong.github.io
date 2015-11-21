 var Adele= angular.module('Adele',[]);
 Adele.controller('AdeleController',['$scope',function($scope){

    $scope.CD = [
		{
			name: 'someone like you',
			price: 30,
			active:false
		},{
			name: 'rolling in the deep',
			price: 26,
			active:false
		},{
			name: 'set fire to the rain',
			price: 47,
			active:false
		},{
			name: 'make you feel my love',
			price: 36,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.CD, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}])
