 var Justin= angular.module('Justin',[]);
 Justin.controller('JustinController',['$scope',function($scope){

	$scope.CD = [
		{
			name: 'Requiem',
			price: 40,
			active:false
		},{
			name: 'Idomeneo',
			price: 48,
			active:true
		},{
			name: 'the magic flute',
			price: 58,
			active:false
		},{
			name: 'Piano sonato No.16',
			price: 46,
			active:true
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