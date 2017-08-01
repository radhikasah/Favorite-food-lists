
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id',{												//restaurant page per veg rahe he
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
//--------------------------this is for restaurant page-------------------------------------//





foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id:1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJPEXGlAtA-eWhyGOjSEVV3gVY0IT8ywTL9eH79uo3AYCclPI'
	
},
{
	name: 'Club Coffee',
	address: 'Baddi',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',

	cost: '200',
	id:2,
	bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		},
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKh-sAKBzmI4Shgz4QVLO643FZ7SZDEJd0fb69rPixmIFnsur'
},
{
	name: 'Aroma Mocha',
	address: 'Janakpur',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.7',
	cuisines: 'Modern Nepal',
	cost: '700',
	id:3,
	hours: '12 Noon to 1 AM (sun-Sat)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCTNtWjF54uFAJR4mxuOVP3j8Xf-TflcgO5H0p-XWU8QJxecQsA'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	
	$scope.getIngredients = function(url) {
// Do something


	}
})

//------------------------------write  ajax call here-----------------------//







	
//console.log(foodieApp);







//-------------------------------this is for login page-------------------------------------//

foodieApp.controller('loginController',function($scope,$location) {  
        //this controller is define for login page//
		//$scope.goToHome = function() {
		// console.log('Do Something')
		//$location.url('home')
		$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')
	}
	
})


//------------------------------yhis is for main page------------------------//
foodieApp.controller('mainController',function($scope) {			//this controller is define for main page page//
	
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	id:1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJPEXGlAtA-eWhyGOjSEVV3gVY0IT8ywTL9eH79uo3AYCclPI'
	
},
{
	name: 'Club Coffee',
	address: 'Baddi',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '200',
	id:2,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKh-sAKBzmI4Shgz4QVLO643FZ7SZDEJd0fb69rPixmIFnsur'
},
{
	name: 'Aroma Mocha',
	address: 'Janakpur',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.7',
	cuisines: 'Modern Nepal',
	cost: '700',
	id:3,
	hours: '12 Noon to 1 AM (sun-Sat)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCTNtWjF54uFAJR4mxuOVP3j8Xf-TflcgO5H0p-XWU8QJxecQsA'
}]
})