 var BeyoncéKnowles= angular.module('BeyoncéKnowles',[]);
 BeyoncéKnowles.controller('BeyoncéKnowlesController',['$scope',function($scope){
	$scope.CD = [
		{
			name: 'Crazy in Love',
			price: 40,
			active:true
		},{
			name: 'Drunk in Love',
			price: 44,
			active:false
		},{
			name: 'Life is But a Dream',
			price: 36,
			active:false
		},{
			name: 'The Remix',
			price: 35,
			active:false
		},{
			name: 'End Of Time',
			price: 40,
			active:false
		},{
			name: '4',
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
