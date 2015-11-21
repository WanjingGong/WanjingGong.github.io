 var Taylor= angular.module('Taylor',[]);
 Taylor.controller('TaylorController',['$scope',function($scope){

	$scope.CD = [
		{
			name: '迷宫',
			price: 40,
			active:true
		},{
			name: '有你的快乐',
			price: 48,
			active:false
		},{
			name: 'Start from here',
			price: 58,
			active:true
		},{
			name: 'rose rose I love you',
			price: 46,
			active:false
		},{
			name: '夜来香',
			price: 45,
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
