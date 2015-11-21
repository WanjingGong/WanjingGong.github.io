function  BeyoncéKnowles($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.CD = [
		{
			name: 'My heart will go on',
			price: 40,
			active:true
		},{
			name: 'power of love',
			price: 44,
			active:false
		},{
			name: 'Because you love me',
			price: 36,
			active:false
		},{
			name: 'I am alive',
			price: 35,
			active:true
		},{
			name: 'All by myself',
			price: 40,
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
}
