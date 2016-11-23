"use strict";

app.run(function (FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
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
		controller: "ItemListCtrl"
	})
	.when(`/items/new`,{
		templateUrl:"partials/item-new.html",
		controller: "ItemNewCtrl"
	})
	.when("/items/view/:id",{//this pulls from firebase
		templateUrl: "partials/item-view.html",
		controller: "ItemViewCtrl"
	})
	.when("/items/edit/:id",{
		templateUrl:"partials/item-new.html",
		controller: "ItemEditCtrl"
	})
	.otherwise("/items/list")
})


