
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
	$scope.ingredients = [];
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
	bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		},
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
	bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
		},
	hours: '12 Noon to 1 AM (sun-Sat)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCTNtWjF54uFAJR4mxuOVP3j8Xf-TflcgO5H0p-XWU8QJxecQsA'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	
	//-------------------------------write Ajax code here-----------------//
	
	$scope.getIngredients = function(url) {
											var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		                               $http({
				'method': 'POST',
				'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
				'headers': {
				'Authorization': 'Key c420779fa3d84a25ac9c326276730707',
				'Content-Type': 'application/json'
				 },
                 'data': data,
				//success: function (response) {
					//var ingredients = response.outputs[0].data.concepts;
            //var list = '';
            //for (var i =0;i < ingredients.length;i++) {
                //list += '<div class="ingredient">' + ingredients[i].name + '</div>'
           // }
            //$('.ingredients').html(list);
				//},
				//error: function (xhr) {
					//console.log(xhr);
				//}
			}).then(function success(response) {
				 		var ingredients = response.data.outputs[0].data.concepts;
            var list = '';
						   for (var i =0;i < ingredients.length;i++) {
					$scope.ingredients.push(ingredients[i].name);
					}
					
				  }, function error(xhr) {
					console.log(xhr);
				  });	
											}
})
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


//------------------------------this is for main page------------------------//



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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0XeWr-r9o3wJ3Ki6vv1qWRtHsPYoNfRrwsuJl6-5nry2WHI8CA'
	
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZ8wq4ClscQZWlTqgezJmVjS5ZT22Kgrn0h_jQwhkoLmyBC00Zg'
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS371d5s89rsxk9xouw4EoIK3tVsNFih2JT7QuoG10soTbb5BcBaQ'
}]
})

<!----------------------------------------favController ka kam or detail uski start-------------------------------------------------------------------------->
foodieApp.controller('favController',function($scope,$location,$http) {

                                  

	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{
							id: 1,
							bestDish: {
										name: 'Bean Salad',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
							image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
								},

            image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
										},

                image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
                    }]



						$scope.lists1 = [
						{'vl' : 'vegetable'},
						{'vl' : 'almond'},
						{'vl' : 'corn'},
						{'vl' : 'milk'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//
					$scope.lists2 = [
					{'vl' : 'meat'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'lettuce'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};


								$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key a83cf33d81ca4f71ae7f18345e7b8ab0',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})
<!---------------------favController end---------------------------------------------------------------------------------------------->



