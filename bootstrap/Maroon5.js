 var Maroon5= angular.module('Maroon5',[]);
 Maroon5.controller('Maroon5Controller',['$scope',function($scope){


	$scope.CD = [
		{
			name: 'Symphony No.9',
			price: 50,
			active:true
		},{
			name: 'Symphony No.6',
			price: 52,
			active:false
		},{
			name: 'Symphony No.4',
			price: 56,
			active:false
		},{
			name: 'Symphony No.3',
			price: 46,
			active:true
		},{
			name: 'Symphony No.14',
			price: 40,
			active:false
		},{
			name: 'Symphony No.8',
			price: 42,
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
