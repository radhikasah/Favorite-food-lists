// Runs when HTML file is loaded
/*$(document).ready(function() {
   $('#user-email').on('input',function() {
        var email = $('#user-email').val();
        var message = 'Welcome Back, ' + email;
        $('.welcome-message').text(message);
    });
});*/
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
})


//console.log(foodieApp);



foodieApp.controller('loginController',function($scope,$location) {  
        //this controller is define for login page//
		$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.controller('mainController',function($scope) {			//this controller is define for main page page//
	
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
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
	hours: '12 Noon to 1 AM (sun-Sat)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCTNtWjF54uFAJR4mxuOVP3j8Xf-TflcgO5H0p-XWU8QJxecQsA'
}]
})