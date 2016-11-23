"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve();//if resolved to true 
	} else {
		reject();//if resolved to false comes back false
	}
})


app.run(function ($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {
	firebase.initializeApp(FIREBASE_CONFIG);
	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
	//event is $routeChangeStart fires  the function 

	let logged = AuthFactory.isAuthenticated();
	let appTo;

	if(currRoute.originalPath){
		//appTo = 5 !== -1 //true
		//appTo =	-1 !== -1 //false
		appTo = currRoute.originalPath.indexOf('/auth') !== -1;
	
	}

	if(!appTo && !logged){
		event.preventDefault();
		$location.path('/auth');
	}
	});
});

});

//the config is the first page to run in angular, then the "run" runs secondly.

app.config(function($routeProvider){//does routes in ang
	$routeProvider
	.when(`/auth`,{
		templateUrl:"partials/auth.html",
		controller: "AuthCtrl"
	})
	.when(`/items/list`,{
		templateUrl:"partials/item-list.html",
		controller: "ItemListCtrl",
		resolve: {isAuth}
	})
	.when(`/items/new`,{
		templateUrl:"partials/item-new.html",
		controller: "ItemNewCtrl",
		resolve: {isAuth}//if auth is true 
	})
	.when("/items/view/:id",{//this pulls from firebase
		templateUrl: "partials/item-view.html",
		controller: "ItemViewCtrl",
		resolve: {isAuth}
	})
	.when("/items/edit/:id",{
		templateUrl:"partials/item-new.html",
		controller: "ItemEditCtrl",
		resolve: {isAuth}
	})
	.when(`/logout`,{
		templateUrl:"partials/auth.html",
		controller: "AuthCtrl",
		resolve: {isAuth}
	})

	.otherwise("/auth");
});


