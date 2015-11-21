 var JohnLegend= angular.module('JohnLegend',[]);
 JohnLegend.controller('JohnLegendController',['$scope',function($scope){

	$scope.CD = [
		{
			name: '世界末日',
			price: 24,
			active:false
		},{
			name: '七里香',
			price: 230,
			active:false
		},{
			name: '东风破',
			price: 48,
			active:false
		},{
			name: '双截棍',
			price: 30,
			active:false
		},{
			name: '黑色毛衣',
			price: 28,
			active:false
		},{
			name: '回到过去',
			price: 30,
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
